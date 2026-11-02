/**
 * Speech Synthesis Utility (TTS) tối ưu hóa giọng đọc chuẩn bản xứ, tự nhiên, không bị robot
 * Tự động ưu tiên giọng Neural / Natural (Microsoft Online, Google WaveNet, Apple Enhanced)
 */

let cachedVoices = [];

function loadVoices() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];
  const voices = window.speechSynthesis.getVoices();
  if (voices && voices.length > 0) {
    cachedVoices = voices;
  }
  return cachedVoices;
}

// Lắng nghe sự kiện nạp giọng của trình duyệt
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  loadVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      loadVoices();
    };
  }
}

/**
 * Đánh giá điểm chất lượng của một giọng đọc tiếng Anh
 */
function scoreEnglishVoice(voice, preferredGender = 'female') {
  const name = voice.name.toLowerCase();
  const lang = voice.lang.toLowerCase();
  let score = 0;

  // Phải là tiếng Anh
  if (!lang.startsWith('en')) return -100;

  // Ưu tiên en-US hoặc en-GB
  if (lang.includes('en-us')) score += 30;
  else if (lang.includes('en-gb')) score += 25;
  else score += 10;

  // ƯU TIÊN HÀNG ĐẦU: Giọng Natural / Neural / Online từ Microsoft Edge / Google / Apple
  if (name.includes('natural')) score += 120;
  if (name.includes('online')) score += 100;
  if (name.includes('neural')) score += 110;
  if (name.includes('enhanced')) score += 90;
  if (name.includes('premium')) score += 80;
  if (name.includes('google')) score += 70;

  // Theo giới tính ưa chuộng
  const isFemaleName = name.includes('jenny') || name.includes('aria') || name.includes('zira') ||
    name.includes('samantha') || name.includes('karen') || name.includes('victoria') ||
    name.includes('female') || name.includes('ana');
  const isMaleName = name.includes('guy') || name.includes('christopher') || name.includes('eric') ||
    name.includes('daniel') || name.includes('alex') || name.includes('male') ||
    name.includes('david') || name.includes('mark');

  if (preferredGender === 'female') {
    if (isFemaleName) score += 40;
    // Ưu tiên cực cao các giọng nữ siêu hay
    if (name.includes('jenny')) score += 60;
    if (name.includes('aria')) score += 55;
    if (name.includes('zira')) score += 35; // Giọng desktop nữ Windows 10/11
    if (name.includes('samantha')) score += 50;
  } else {
    if (isMaleName) score += 40;
    if (name.includes('guy')) score += 60;
    if (name.includes('christopher')) score += 55;
    if (name.includes('daniel')) score += 50;
  }

  // TRỪ ĐIỂM: Giọng robot đời cũ (Microsoft David / Microsoft Mark Desktop)
  if (name.includes('david desktop') || name.includes('mark desktop')) {
    score -= 80; // Tránh giọng robot thô ráp mặc định của Windows
  }

  return score;
}

/**
 * Đánh giá điểm chất lượng của một giọng đọc tiếng Trung
 */
function scoreChineseVoice(voice) {
  const name = voice.name.toLowerCase();
  const lang = voice.lang.toLowerCase();
  let score = 0;

  if (!lang.includes('zh') && !lang.includes('cmn')) return -100;

  if (lang.includes('zh-cn') || lang.includes('cmn-hans')) score += 30;

  if (name.includes('natural')) score += 120;
  if (name.includes('online')) score += 100;
  if (name.includes('neural')) score += 110;
  if (name.includes('google')) score += 60;

  if (name.includes('xiaoxiao')) score += 70; // Giọng nữ chuẩn phổ thông
  if (name.includes('yunxi')) score += 60;
  if (name.includes('huihui')) score += 30;

  return score;
}

/**
 * Lấy giọng tốt nhất theo ngôn ngữ và giới tính
 */
export function getBestVoice(lang = 'en', preferredGender = 'female') {
  const voices = loadVoices();
  if (!voices || voices.length === 0) return null;

  if (lang === 'en') {
    const scoredVoices = voices
      .map(v => ({ voice: v, score: scoreEnglishVoice(v, preferredGender) }))
      .filter(item => item.score > -50)
      .sort((a, b) => b.score - a.score);

    return scoredVoices.length > 0 ? scoredVoices[0].voice : voices.find(v => v.lang.startsWith('en')) || null;
  } else {
    const scoredVoices = voices
      .map(v => ({ voice: v, score: scoreChineseVoice(v) }))
      .filter(item => item.score > -50)
      .sort((a, b) => b.score - a.score);

    return scoredVoices.length > 0 ? scoredVoices[0].voice : voices.find(v => v.lang.includes('zh')) || null;
  }
}

/**
 * Lấy danh sách các giọng tiếng Anh chất lượng cao để người dùng tự chọn nếu muốn
 */
export function getAvailableEnglishVoices() {
  const voices = loadVoices();
  if (!voices || voices.length === 0) return [];

  return voices
    .filter(v => v.lang.startsWith('en'))
    .map(v => ({
      voice: v,
      name: v.name,
      lang: v.lang,
      isNatural: v.name.toLowerCase().includes('natural') || v.name.toLowerCase().includes('online') || v.name.toLowerCase().includes('google'),
      gender: (v.name.toLowerCase().includes('zira') || v.name.toLowerCase().includes('jenny') || v.name.toLowerCase().includes('aria') || v.name.toLowerCase().includes('samantha') || v.name.toLowerCase().includes('female')) ? 'female' : 'male'
    }));
}

/**
 * Phát âm thanh với thiết lập chuẩn cho học ngoại ngữ
 */
export function speakText(text, {
  lang = 'en',
  rate = 0.92, // Tốc độ 0.92 chuẩn rõ từng âm tiết, không bị líu lưỡi
  pitch = 1.0,
  preferredGender = 'female',
  onEnd = null,
  onError = null
} = {}) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window) || !text) return;

  try {
    window.speechSynthesis.cancel();

    // Làm sạch ký tự lạ nếu có
    const cleanText = text.replace(/[/\\#+()$~%:*?<>{}]/g, ' ').trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang === 'en' ? 'en-US' : 'zh-CN';
    utterance.rate = rate;
    utterance.pitch = pitch;

    const bestVoice = getBestVoice(lang, preferredGender);
    if (bestVoice) {
      utterance.voice = bestVoice;
    }

    utterance.onend = () => {
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.warn('TTS playback note:', e);
      if (onError) onError(e);
      else if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.error('Error in speakText:', err);
    if (onError) onError(err);
  }
}

/**
 * Dừng phát âm thanh ngay lập tức
 */
export function stopSpeech() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
