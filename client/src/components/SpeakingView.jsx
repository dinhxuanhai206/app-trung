import React, { useState, useRef, useMemo, useEffect } from 'react';
import { SENTENCE_PUZZLE_TOPICS, ALL_SENTENCE_PUZZLES } from '../data/sentencePuzzlesData';

export default function SpeakingView({ lesson, onGainXP }) {
  // Topic selection
  const speakingTopics = useMemo(() => {
    const list = [];
    if (lesson) {
      list.push({
        id: 'lesson_active',
        name: `🎯 Bài Đang Học (${lesson.title?.split(':')[0] || 'Bài ' + lesson.id})`,
        icon: '🎯',
      });
    }
    return [...list, ...SENTENCE_PUZZLE_TOPICS];
  }, [lesson]);

  const [activeTopicId, setActiveTopicId] = useState('greet_intro');

  // Sentences list for the active topic
  const sentences = useMemo(() => {
    if (activeTopicId === 'lesson_active' && lesson) {
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
      if (lesson.speaking?.targetHanzi) {
        add({
          hanzi: lesson.speaking.targetHanzi,
          pinyin: lesson.speaking.targetPinyin,
          vi: lesson.speaking.vietnameseMeaning,
        });
      }
      if (lesson.listening?.dialogues) lesson.listening.dialogues.forEach(add);
      if (list.length > 0) return list;
    }

    const filtered = ALL_SENTENCE_PUZZLES.filter((p) => p.topicId === activeTopicId);
    if (filtered.length > 0) {
      return filtered.map((p) => ({
        hanzi: p.targetZh,
        pinyin: p.pinyin,
        vi: p.promptVi.replace(/^Hãy (sắp xếp các từ thành|ghép thành) câu:\s*["“]?/, '').replace(/["”]?$/, ''),
        explanation: p.explanation,
      }));
    }
    return ALL_SENTENCE_PUZZLES.slice(0, 20).map((p) => ({
      hanzi: p.targetZh,
      pinyin: p.pinyin,
      vi: p.promptVi,
      explanation: p.explanation,
    }));
  }, [lesson, activeTopicId]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const currentSentence = sentences[currentIdx] || sentences[0] || {
    hanzi: '你好，很高兴认识你！',
    pinyin: 'Nǐ hǎo, hěn gāoxìng rènshi nǐ!',
    vi: 'Xin chào, rất vui được quen biết bạn!',
  };

  const [isRecording, setIsRecording] = useState(false);
  const [recordTimer, setRecordTimer] = useState(0);
  const [statusMsg, setStatusMsg] = useState('Nhấn nút Micro bên dưới và đọc to câu tiếng Trung mẫu');
  const [result, setResult] = useState(null);
  const [showToneTips, setShowToneTips] = useState(false);
  const [completedSentences, setCompletedSentences] = useState({});

  const recognitionRef = useRef(null);
  const timerIntervalRef = useRef(null);

  // Reset result when changing topic or sentence
  useEffect(() => {
    setResult(null);
    setStatusMsg('Nhấn nút Micro bên dưới và đọc to câu tiếng Trung mẫu');
    if (isRecording) {
      stopRecording();
    }
  }, [currentIdx, activeTopicId]);

  // Clean up recording on unmount
  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {}
      }
    };
  }, []);

  const speakSample = (rate = 0.85) => {
    if ('speechSynthesis' in window && currentSentence?.hanzi) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(currentSentence.hanzi);
      u.lang = 'zh-CN';
      u.rate = rate;
      window.speechSynthesis.speak(u);
    }
  };

  const startRecording = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Trình duyệt hiện tại chưa hỗ trợ Web Speech API. Khuyên dùng Google Chrome hoặc Microsoft Edge để luyện nói mượt mà nhất.');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'zh-CN';
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;
      recognitionRef.current = recognition;

      recognition.onstart = () => {
        setIsRecording(true);
        setRecordTimer(0);
        setStatusMsg('🎙️ Đang nghe... Hãy tự tin phát âm câu tiếng Trung trên!');
        setResult(null);

        timerIntervalRef.current = setInterval(() => {
          setRecordTimer((prev) => prev + 1);
        }, 1000);
      };

      recognition.onresult = (event) => {
        const last = event.results.length - 1;
        const transcript = event.results[last][0].transcript;
        if (event.results[last].isFinal) {
          evaluateSpeech(transcript);
        } else {
          setStatusMsg(`🗣️ Đang nghe: "${transcript}..."`);
        }
      };

      recognition.onerror = (err) => {
        stopRecording();
        if (err.error === 'no-speech') {
          setStatusMsg('⚠️ Chưa nghe rõ âm thanh. Vui lòng lại gần mic và đọc to hơn nhé!');
        } else if (err.error === 'not-allowed') {
          setStatusMsg('🚫 Chưa cấp quyền sử dụng Micro. Hãy cho phép trình duyệt truy cập Mic.');
        } else {
          setStatusMsg(`Lỗi thu âm: ${err.error}. Hãy bấm thử lại!`);
        }
      };

      recognition.onend = () => {
        stopRecording();
      };

      recognition.start();
    } catch (e) {
      stopRecording();
      setStatusMsg('Không thể khởi động microphone. Hãy bấm lại nút Micro.');
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const evaluateSpeech = (userText) => {
    stopRecording();
    if (!userText || !currentSentence) return;

    // Clean punctuation and whitespaces
    const target = (currentSentence.hanzi || '').replace(/[\s\p{P}]/gu, '');
    const spoken = userText.replace(/[\s\p{P}]/gu, '');

    const targetChars = target.split('');
    const spokenChars = spoken.split('');

    // Detailed alignment for accuracy
    let matchCount = 0;
    const tokens = targetChars.map((char, index) => {
      const isMatch = spokenChars.includes(char);
      if (isMatch) matchCount++;
      return {
        char,
        isMatch,
        index,
      };
    });

    const score = Math.min(100, Math.round((matchCount / Math.max(targetChars.length, 1)) * 100));

    setResult({
      score,
      userText,
      tokens,
      isPerfect: score >= 90,
      isGood: score >= 65 && score < 90,
    });

    if (score >= 80) {
      setStatusMsg('🎉 Xuất sắc! Phát âm rất chuẩn xác và rõ ràng.');
      setCompletedSentences((prev) => ({ ...prev, [currentIdx]: score }));
      if (onGainXP) onGainXP(25, `Phát âm chuẩn: ${currentSentence.hanzi}`);
    } else if (score >= 50) {
      setStatusMsg('👍 Khá tốt! Cần chú ý một vài âm tiết để hay hơn.');
      setCompletedSentences((prev) => ({ ...prev, [currentIdx]: score }));
      if (onGainXP) onGainXP(15, `Luyện khẩu ngữ: ${currentSentence.hanzi}`);
    } else {
      setStatusMsg('💪 Hãy nghe lại câu mẫu chuẩn và thử đọc lại lần nữa nhé!');
    }
  };

  const handleNextSentence = () => {
    if (currentIdx < sentences.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setCurrentIdx(0);
    }
  };

  const handlePrevSentence = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* 1. Header Banner Studio */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-rose-900/30">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-rose-600/90 text-white text-xs font-black tracking-wider uppercase shadow-md shadow-rose-900/40 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                AI Voice Lab 4.0
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-rose-200 text-xs font-semibold backdrop-blur-md border border-white/10">
                Thẩm âm bản xứ & Chấm điểm tức thì
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
              <span>🎙️</span> Phòng Luyện Nói & Chấm Điểm AI
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Luyện phản xạ khẩu ngữ với công nghệ nhận diện giọng nói tiếng Trung chuẩn Bắc Kinh (zh-CN). Chấm điểm độ chuẩn xác đến từng âm tiết!
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 self-start md:self-auto">
            <div className="text-center px-3 border-r border-white/10">
              <div className="text-xl sm:text-2xl font-black text-amber-400">
                {Object.keys(completedSentences).length} / {sentences.length}
              </div>
              <div className="text-[10px] text-slate-300 uppercase font-semibold">Đã luyện</div>
            </div>
            <div className="text-center px-3">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">
                {result ? `${result.score}%` : '--'}
              </div>
              <div className="text-[10px] text-slate-300 uppercase font-semibold">Điểm gần nhất</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Topic Selector Tabs */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <span>🎯</span> Chọn Chủ Đề Luyện Nói ({sentences.length} câu):
          </span>
          <span className="text-xs font-bold text-rose-600">
            {speakingTopics.find((t) => t.id === activeTopicId)?.name || 'Chủ đề'}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {speakingTopics.map((top) => (
            <button
              key={top.id}
              onClick={() => {
                setActiveTopicId(top.id);
                setCurrentIdx(0);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTopicId === top.id
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                  : 'bg-slate-100 text-slate-700 hover:bg-rose-50 hover:text-rose-600'
              }`}
            >
              <span>{top.icon || '💬'}</span>
              <span>{top.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Main Speaking Arena Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Navigation Top Bar */}
        <div className="p-4 sm:p-5 bg-slate-50/80 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-xl bg-slate-900 text-white font-bold text-xs">
              Câu {currentIdx + 1} / {sentences.length}
            </span>
            {completedSentences[currentIdx] && (
              <span className="px-2.5 py-0.5 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1">
                ✓ {completedSentences[currentIdx]}%
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevSentence}
              disabled={currentIdx === 0}
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed font-semibold text-xs transition-all flex items-center gap-1"
            >
              <span>◀</span>
              <span className="hidden sm:inline">Câu trước</span>
            </button>

            <button
              onClick={handleNextSentence}
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-all shadow-xs flex items-center gap-1"
            >
              <span className="hidden sm:inline">Câu tiếp theo</span>
              <span>▶</span>
            </button>
          </div>
        </div>

        {/* Quick Question Jump Pills */}
        <div className="px-4 py-2.5 bg-slate-100/50 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          {sentences.map((_, idx) => {
            const isDone = completedSentences[idx];
            const isCur = idx === currentIdx;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all flex-shrink-0 flex items-center justify-center ${
                  isCur
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 ring-2 ring-rose-400'
                    : isDone
                    ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-200'
                }`}
                title={`Chuyển tới câu ${idx + 1}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {/* Target Sentence Display Area */}
        <div className="p-6 sm:p-10 text-center space-y-6">
          <div className="max-w-3xl mx-auto space-y-4">
            {/* Pinyin with Tone Colors */}
            <div className="text-sm sm:text-base md:text-lg font-bold text-amber-600 tracking-wide">
              {currentSentence.pinyin}
            </div>

            {/* Giant Hanzi with Chinese Typography */}
            <div className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 chinese-font tracking-wider leading-tight drop-shadow-xs">
              {currentSentence.hanzi}
            </div>

            {/* Vietnamese Meaning */}
            <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-100 text-slate-700 font-semibold text-sm sm:text-base max-w-xl mx-auto">
              💡 {currentSentence.vi}
            </div>

            {currentSentence.explanation && (
              <p className="text-xs text-slate-400 italic">
                {currentSentence.explanation}
              </p>
            )}
          </div>

          {/* Audio Sample Playback Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => speakSample(0.9)}
              className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-rose-50 text-slate-800 hover:text-rose-600 border border-slate-200 hover:border-rose-200 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95 shadow-2xs"
            >
              <span className="text-lg">🔊</span>
              <span>Nghe mẫu chuẩn (1.0x)</span>
            </button>

            <button
              onClick={() => speakSample(0.65)}
              className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-amber-50 text-slate-800 hover:text-amber-700 border border-slate-200 hover:border-amber-200 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95 shadow-2xs"
            >
              <span className="text-lg">🐢</span>
              <span>Nghe chậm (0.65x)</span>
            </button>

            <button
              onClick={() => setShowToneTips(!showToneTips)}
              className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-purple-50 text-slate-800 hover:text-purple-700 border border-slate-200 hover:border-purple-200 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all active:scale-95 shadow-2xs"
            >
              <span className="text-lg">💡</span>
              <span>Mẹo phát âm thanh điệu</span>
            </button>
          </div>

          {/* Tone Tips Accordion Box */}
          {showToneTips && (
            <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-purple-50 border border-purple-200 text-left text-xs text-purple-950 space-y-2 animate-fadeIn">
              <div className="font-bold text-sm text-purple-900 flex items-center gap-2">
                <span>🎵</span> Hướng Dẫn Phát Âm 4 Thanh Điệu Chuẩn:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <div className="p-2.5 rounded-xl bg-white border border-purple-100">
                  <strong className="text-rose-600">Thanh 1 (mā):</strong> Giữ giọng cao bằng, đều và ngân dài nhẹ (độ cao 5-5).
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-purple-100">
                  <strong className="text-amber-600">Thanh 2 (má):</strong> Đi từ độ cao trung bình vút lên cao (như dấu sắc tiếng Việt).
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-purple-100">
                  <strong className="text-emerald-600">Thanh 3 (mǎ):</strong> Hạ thấp giọng xuống sâu rồi uốn nhẹ lên (như dấu hỏi).
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-purple-100">
                  <strong className="text-blue-600">Thanh 4 (mà):</strong> Giật dứt khoát từ rất cao rơi thẳng xuống (dứt khoát, mạnh).
                </div>
              </div>
            </div>
          )}

          {/* Dynamic Audio Waveform Visualizer & Microphone Hub */}
          <div className="py-6 flex flex-col items-center justify-center space-y-4">
            {/* Visualizer bars when recording */}
            <div className="h-10 flex items-center justify-center gap-1.5 px-6">
              {[6, 14, 28, 18, 32, 22, 10, 26, 36, 16, 24, 8, 30, 20, 12].map((height, i) => (
                <div
                  key={i}
                  style={{
                    height: isRecording ? `${height}px` : '4px',
                    animationDelay: `${(i % 5) * 0.15}s`,
                  }}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    isRecording
                      ? 'bg-rose-500 animate-wave-bar'
                      : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>

            {/* Glowing Big Microphone Button */}
            <div className="relative">
              {isRecording && (
                <div className="absolute inset-0 rounded-full bg-rose-500/30 animate-ping" />
              )}
              <button
                onClick={toggleRecording}
                className={`relative z-10 w-24 h-24 rounded-full flex flex-col items-center justify-center text-white transition-all shadow-2xl active:scale-95 ${
                  isRecording
                    ? 'bg-gradient-to-tr from-red-600 to-rose-500 shadow-rose-600/50 animate-mic-pulse ring-4 ring-rose-200'
                    : 'bg-gradient-to-tr from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-600 shadow-rose-600/30 hover:shadow-rose-600/50 hover:scale-105'
                }`}
                title={isRecording ? 'Bấm để dừng ghi âm' : 'Bấm để bắt đầu nói'}
              >
                <span className="text-3xl">{isRecording ? '⏹️' : '🎤'}</span>
                <span className="text-[10px] font-black uppercase tracking-wider mt-1">
                  {isRecording ? `00:${recordTimer.toString().padStart(2, '0')}` : 'Bấm Nói'}
                </span>
              </button>
            </div>

            {/* Dynamic Real-time Status Message */}
            <div className="space-y-1">
              <p className={`text-sm font-semibold transition-all ${
                isRecording ? 'text-rose-600 animate-pulse font-bold' : 'text-slate-500'
              }`}>
                {statusMsg}
              </p>
              <p className="text-[11px] text-slate-400">
                Khuyên dùng: Đeo tai nghe có micro để hạn chế tiếng vọng và đạt độ chuẩn cao nhất.
              </p>
            </div>
          </div>

          {/* AI Assessment Result Dashboard */}
          {result && (
            <div className="max-w-2xl mx-auto p-6 rounded-3xl bg-slate-50 border border-slate-200 text-left space-y-4 animate-fadeIn shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200/70">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Báo cáo phân tích phát âm AI:
                  </span>
                  <div className="text-sm font-bold text-slate-800 mt-0.5">
                    Câu bạn đã nói: <span className="text-rose-600">"{result.userText}"</span>
                  </div>
                </div>

                <div className={`px-4 py-2 rounded-2xl font-black text-sm sm:text-base flex items-center gap-2 self-start sm:self-auto ${
                  result.score >= 80
                    ? 'bg-emerald-100 text-emerald-800 ring-2 ring-emerald-300'
                    : result.score >= 50
                    ? 'bg-amber-100 text-amber-800 ring-2 ring-amber-300'
                    : 'bg-rose-100 text-rose-800 ring-2 ring-rose-300'
                }`}>
                  <span>{result.score >= 80 ? '🏆' : result.score >= 50 ? '⭐' : '🎯'}</span>
                  <span>Độ chính xác: {result.score}%</span>
                </div>
              </div>

              {/* Character-by-character visual feedback */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Khớp từng âm tiết:
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.tokens.map((t, i) => (
                    <div
                      key={i}
                      className={`px-3 py-2 rounded-xl text-center border font-bold transition-all ${
                        t.isMatch
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-800 shadow-2xs'
                          : 'bg-rose-50 border-rose-300 text-rose-700'
                      }`}
                    >
                      <div className="text-xl chinese-font">{t.char}</div>
                      <div className="text-[10px] mt-0.5 font-semibold">
                        {t.isMatch ? '✓ Đúng' : '✕ Sai'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Recommendation */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200/60">
                <button
                  onClick={toggleRecording}
                  className="px-4 py-2 rounded-xl border border-slate-300 hover:bg-white text-slate-700 font-bold text-xs transition-all flex items-center gap-1.5"
                >
                  <span>🔄</span>
                  <span>Đọc lại câu này</span>
                </button>

                <button
                  onClick={handleNextSentence}
                  className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm flex items-center gap-1.5 transition-all"
                >
                  <span>Chuyển câu tiếp theo</span>
                  <span>▶</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
