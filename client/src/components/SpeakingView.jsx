import React, { useState, useRef } from 'react';

export default function SpeakingView({ lesson, onGainXP }) {
  const sentences = React.useMemo(() => {
    const list = [];
    const seen = new Set();
    const add = (item) => {
      if (!item || !item.hanzi) return;
      const h = item.hanzi.trim();
      if (!h || seen.has(h)) return;
      seen.add(h);
      list.push({ hanzi: h, pinyin: item.pinyin || '', vi: item.vi || '' });
    };

    if (lesson.speaking?.sentences) lesson.speaking.sentences.forEach(add);
    if (lesson.speaking?.targetHanzi) add({ hanzi: lesson.speaking.targetHanzi, pinyin: lesson.speaking.targetPinyin, vi: lesson.speaking.vietnameseMeaning });
    if (lesson.listening?.dialogues) lesson.listening.dialogues.forEach(add);

    const BACKUP = [
      { hanzi: '你好，很高兴认识你！', pinyin: 'Nǐ hǎo, hěn gāoxìng rènshi nǐ!', vi: 'Xin chào, rất vui được làm quen với bạn!' },
      { hanzi: '请问，这个多少钱？', pinyin: 'Qǐngwèn, zhège duōshao qián?', vi: 'Xin hỏi, cái này bao nhiêu tiền?' },
      { hanzi: '我想喝一杯冰咖啡。', pinyin: 'Wǒ xiǎng hē yībēi bīng kāfēi.', vi: 'Tôi muốn uống một cốc cà phê đá.' },
      { hanzi: '明天天气怎么样？', pinyin: 'Míngtiān tiānqì zěnmeyàng?', vi: 'Ngày mai thời tiết thế nào?' },
      { hanzi: '你在哪儿工作？', pinyin: 'Nǐ zài nǎr gōngzuò?', vi: 'Bạn làm việc ở đâu?' },
      { hanzi: '我们一起去吃饭吧！', pinyin: 'Wǒmen yīqǐ qù chīfàn ba!', vi: 'Chúng mình cùng đi ăn cơm đi!' },
      { hanzi: '洗手间在什么地方？', pinyin: 'Xǐshǒujiān zài shénme dìfang?', vi: 'Nhà vệ sinh ở chỗ nào vậy?' },
      { hanzi: '我学中文学了两年了。', pinyin: 'Wǒ xué Zhōngwén xué le liǎng nián le.', vi: 'Tôi học tiếng Trung được 2 năm rồi.' },
      { hanzi: '今天的会议什么时候开始？', pinyin: 'Jīntiān de huìyì shénme shíhou kāishǐ?', vi: 'Cuộc họp hôm nay khi nào bắt đầu?' },
      { hanzi: '祝你生日快乐，身体健康！', pinyin: 'Zhù nǐ shēngrì kuàilè, shēntǐ jiànkāng!', vi: 'Chúc bạn sinh nhật vui vẻ!' },
      { hanzi: '欢迎来到我们公司！', pinyin: 'Huānyíng lái dào wǒmen gōngsī!', vi: 'Chào mừng bạn đến với công ty!' },
      { hanzi: '对不起，我今天有点儿忙。', pinyin: 'Duìbuqǐ, wǒ jīntiān yǒudiǎnr máng.', vi: 'Xin lỗi, hôm nay tôi hơi bận.' },
      { hanzi: '没关系，我们下次再见！', pinyin: 'Méi guānxi, wǒmen xiàcì zàijiàn!', vi: 'Không sao, lần sau gặp lại!' },
      { hanzi: '你最喜欢的中国菜是什么？', pinyin: 'Nǐ zuì xǐhuan de Zhōngguó cài shì shénme?', vi: 'Món ăn bạn thích nhất là gì?' },
      { hanzi: '这件衣服很适合你。', pinyin: 'Zhè jiàn yīfu hěn shìhé nǐ.', vi: 'Bộ quần áo này rất hợp với bạn.' },
      { hanzi: '我们坐地铁还是坐出租车？', pinyin: 'Wǒmen zuò dìtiě háishì zuò chūzūchē?', vi: 'Chúng mình đi tàu điện ngầm hay taxi?' },
      { hanzi: '请再说一遍，好吗？', pinyin: 'Qǐng zài shuō yī biàn, hǎo ma?', vi: 'Xin nói lại một lần nữa được không?' },
      { hanzi: '这个周末你打算做什么？', pinyin: 'Zhège zhōumò nǐ dǎsuàn zuò shénme?', vi: 'Cuối tuần này bạn dự định làm gì?' },
      { hanzi: '加油！你一定能学好汉语。', pinyin: 'Jiāyóu! Nǐ yídìng néng xué hǎo Hànyǔ.', vi: 'Cố lên! Bạn nhất định sẽ học tốt.' },
      { hanzi: '谢谢你的热情招待！', pinyin: 'Xièxie nǐ de rèqíng zhāodài!', vi: 'Cảm ơn sự tiếp đãi nồng hậu của bạn!' },
    ];
    for (const b of BACKUP) {
      if (list.length >= 20) break;
      add(b);
    }
    return list.slice(0, 20);
  }, [lesson]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const currentSentence = sentences[currentIdx] || sentences[0];

  const [isRecording, setIsRecording] = useState(false);
  const [statusMsg, setStatusMsg] = useState('Bấm nút micro và nói to bằng tiếng Trung...');
  const [result, setResult] = useState(null);
  const recognitionRef = useRef(null);

  const speakSample = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(currentSentence.hanzi);
      u.lang = 'zh-CN';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  };

  const handleStartRecording = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Trình duyệt không hỗ trợ Web Speech API. Khuyên dùng Google Chrome hoặc Edge.');
      return;
    }

    if (isRecording) {
      if (recognitionRef.current) recognitionRef.current.stop();
      setIsRecording(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'zh-CN';
    recognition.interimResults = false;
    recognitionRef.current = recognition;

    recognition.onstart = () => {
      setIsRecording(true);
      setStatusMsg('🎙️ Đang nghe... Hãy phát âm câu tiếng Trung trên!');
    };

    recognition.onresult = (event) => {
      const userText = event.results[0][0].transcript;
      evaluateSpeech(userText);
    };

    recognition.onerror = (err) => {
      setIsRecording(false);
      setStatusMsg(`Lỗi thu âm: ${err.error}. Hãy thử lại!`);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
  };

  const evaluateSpeech = (userText) => {
    const target = currentSentence.hanzi.replace(/[\s\p{P}]/gu, '');
    const spoken = userText.replace(/[\s\p{P}]/gu, '');

    const targetChars = target.split('');
    const spokenChars = spoken.split('');

    let matchCount = 0;
    const tokens = spokenChars.map((char) => {
      const isMatch = targetChars.includes(char);
      if (isMatch) matchCount++;
      return { char, isMatch };
    });

    const score = Math.round((matchCount / Math.max(targetChars.length, spokenChars.length, 1)) * 100);

    setResult({
      score,
      userText,
      tokens,
    });

    setStatusMsg('Đã nhận diện thành công!');

    if (score >= 80) {
      onGainXP(25, 'Phát âm chuẩn xác');
    } else if (score >= 50) {
      onGainXP(10, 'Luyện nói');
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-50 to-white border border-emerald-100 rounded-2xl p-6 flex justify-between items-center shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <span>🎙️</span> Luyện Nói & Chấm Điểm AI (Web Speech API)
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Nói to câu tiếng Trung mẫu vào Micro để AI đánh giá độ khớp phát âm.
          </p>
        </div>
        <span className="px-3.5 py-1 rounded-full bg-emerald-600 text-white font-bold text-xs">
          Speech Recognition zh-CN
        </span>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            🎯 Câu Luyện Nói: {currentIdx + 1} / {sentences.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => {
                if (currentIdx > 0) {
                  setCurrentIdx(currentIdx - 1);
                  setResult(null);
                }
              }}
              disabled={currentIdx === 0}
              className="px-2.5 py-1 text-xs rounded-lg border border-slate-200 disabled:opacity-40 hover:bg-slate-100"
            >
              ◀ Câu trước
            </button>
            <button
              onClick={() => {
                if (currentIdx < sentences.length - 1) {
                  setCurrentIdx(currentIdx + 1);
                  setResult(null);
                }
              }}
              disabled={currentIdx === sentences.length - 1}
              className="px-2.5 py-1 text-xs rounded-lg border border-slate-200 disabled:opacity-40 hover:bg-slate-100"
            >
              Câu tiếp ▶
            </button>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 justify-center flex-wrap">
          {sentences.map((s, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIdx(idx);
                setResult(null);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                idx === currentIdx
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {idx + 1}. {s.hanzi.length > 6 ? s.hanzi.substring(0, 6) + '...' : s.hanzi}
            </button>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-100">
          <div className="text-4xl font-extrabold text-rose-600 chinese-font mb-2">
            {currentSentence.hanzi}
          </div>
          <div className="text-lg font-semibold text-rose-950 mb-1">
            {currentSentence.pinyin}
          </div>
          <div className="text-sm text-slate-500">{currentSentence.vi}</div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={speakSample}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-sm font-semibold flex items-center gap-2 transition-all"
          >
            <span>🔊</span>
            <span>Nghe mẫu</span>
          </button>

          <button
            onClick={handleStartRecording}
            className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white transition-all shadow-lg ${
              isRecording
                ? 'bg-red-500 animate-pulse shadow-red-500/50 scale-105'
                : 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/30'
            }`}
          >
            🎤
          </button>
        </div>

        <p className="text-sm font-medium text-slate-500">{statusMsg}</p>

        {result && (
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-slate-400">Kết quả phân tích:</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  result.score >= 80
                    ? 'bg-emerald-100 text-emerald-800'
                    : result.score >= 50
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-rose-100 text-rose-800'
                }`}
              >
                Độ chính xác: {result.score}%
              </span>
            </div>

            <div className="text-2xl font-bold chinese-font flex flex-wrap gap-1">
              {result.tokens.map((t, i) => (
                <span
                  key={i}
                  className={`px-1.5 py-0.5 rounded ${
                    t.isMatch ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700 line-through'
                  }`}
                >
                  {t.char}
                </span>
              ))}
            </div>

            <p className="text-xs text-slate-500">
              Bạn đã nói: "{result.userText}". Câu mẫu: "{lesson.speaking.targetHanzi}".
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
