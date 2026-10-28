import React, { useState, useEffect, useRef } from 'react';
import { REAL_LIFE_SCENARIOS } from '../data/scenarioData';

const CATEGORIES = [
  { id: 'all', label: 'Tất cả (12)', icon: '🌟' },
  { id: 'dining', label: 'Ăn Uống (Ẩm thực)', icon: '🍜' },
  { id: 'travel', label: 'Du Lịch (Di chuyển)', icon: '🚕' },
  { id: 'shopping', label: 'Mua Sắm (Tiêu dùng)', icon: '🛍️' },
  { id: 'daily', label: 'Đời Sống (Sức khỏe)', icon: '🏥' },
  { id: 'work', label: 'Công Sở & Học Tập', icon: '💼' },
];

export default function ScenarioBuilderView({ showPinyin, onGainXP }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentScenarioId, setCurrentScenarioId] = useState('restaurant');
  const [challengeIdx, setChallengeIdx] = useState(0);

  const [trayTokens, setTrayTokens] = useState([]);
  const [bankTokens, setBankTokens] = useState([]);
  const [feedback, setFeedback] = useState(null);

  // Speech recording for speaking practice
  const [isRecording, setIsRecording] = useState(false);
  const [spokenResult, setSpokenResult] = useState(null);
  const recognitionRef = useRef(null);

  const filteredScenarios = React.useMemo(() => {
    if (selectedCategory === 'all') return REAL_LIFE_SCENARIOS;
    return REAL_LIFE_SCENARIOS.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  const scenario =
    REAL_LIFE_SCENARIOS.find((s) => s.id === currentScenarioId) || REAL_LIFE_SCENARIOS[0];
  const challenge = scenario.challenges[challengeIdx] || scenario.challenges[0];

  // Initialize or reset tokens whenever scenario or challenge changes
  useEffect(() => {
    if (!challenge) return;
    setTrayTokens([]);
    setFeedback(null);
    setSpokenResult(null);

    // Shuffle tokens
    const tokens = challenge.correctOrder.map((word, idx) => ({
      id: `${word}_${idx}_${Date.now()}`,
      text: word,
    }));
    const shuffled = [...tokens].sort(() => Math.random() - 0.5);
    setBankTokens(shuffled);
  }, [currentScenarioId, challengeIdx]);

  const speakText = (text, rate = 0.85) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.rate = rate;
      window.speechSynthesis.speak(u);
    }
  };

  const handlePickToken = (token) => {
    setBankTokens((prev) => prev.filter((t) => t.id !== token.id));
    setTrayTokens((prev) => [...prev, token]);
    setFeedback(null);
  };

  const handleRemoveToken = (token) => {
    setTrayTokens((prev) => prev.filter((t) => t.id !== token.id));
    setBankTokens((prev) => [...prev, token]);
    setFeedback(null);
  };

  const handleClearTray = () => {
    const all = [...trayTokens, ...bankTokens];
    setTrayTokens([]);
    setBankTokens(all.sort(() => Math.random() - 0.5));
    setFeedback(null);
  };

  const handleCheckAnswer = () => {
    const userSentence = trayTokens.map((t) => t.text).join('');
    const targetSentence = challenge.correctOrder.join('');

    const isCorrect = userSentence === targetSentence;
    setFeedback({
      isCorrect,
      userSentence,
      targetSentence,
      explanation: challenge.explanation,
    });

    if (isCorrect) {
      speakText(challenge.audioFull);
      onGainXP(20, 'Ghép câu hoàn cảnh thực tế chuẩn');
    }
  };

  const handleNextChallenge = () => {
    if (challengeIdx < scenario.challenges.length - 1) {
      setChallengeIdx((prev) => prev + 1);
    } else {
      // Find next scenario
      const curIdx = REAL_LIFE_SCENARIOS.findIndex((s) => s.id === scenario.id);
      const nextIdx = (curIdx + 1) % REAL_LIFE_SCENARIOS.length;
      setCurrentScenarioId(REAL_LIFE_SCENARIOS[nextIdx].id);
      setChallengeIdx(0);
    }
  };

  // Speech Recognition for speaking the sentence
  const handleToggleRecord = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Trình duyệt của bạn chưa hỗ trợ nhận dạng giọng nói Web Speech API (khuyên dùng Chrome hoặc Edge).');
      return;
    }

    if (isRecording) {
      if (recognitionRef.current) recognitionRef.current.stop();
      setIsRecording(false);
      return;
    }

    try {
      const rec = new SpeechRecognition();
      rec.lang = 'zh-CN';
      rec.continuous = false;
      rec.interimResults = false;

      rec.onstart = () => {
        setIsRecording(true);
        setSpokenResult(null);
      };

      rec.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        const confidence = e.results[0][0].confidence || 0.9;
        const cleanSpoken = transcript.replace(/[，。！？\s]/g, '');
        const cleanExpected = challenge.correctOrder.join('').replace(/[，。！？\s]/g, '');
        const match = cleanSpoken.includes(cleanExpected) || cleanExpected.includes(cleanSpoken);

        setSpokenResult({
          transcript,
          match,
          confidence: Math.round(confidence * 100),
        });

        if (match) {
          onGainXP(15, 'Luyện nói đúng ngữ cảnh thực tế');
        }
      };

      rec.onerror = () => {
        setIsRecording(false);
      };

      rec.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = rec;
      rec.start();
    } catch (err) {
      setIsRecording(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-white border border-emerald-100 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <span>💬</span> Hoàn Cảnh Thực Tế & Ghép Câu (情景造句)
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Học giao tiếp thực chiến qua 12 hoàn cảnh đời sống sinh động: Nhà hàng, Taxi, Mua sắm, Khách sạn, Bệnh viện, Sân bay,...
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm">
            12 Tình Huống Đời Sống
          </span>
          <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 font-semibold text-xs">
            Thực chiến HSK
          </span>
        </div>
      </div>

      {/* CATEGORY FILTER TABS */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedCategory === cat.id
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* SCENARIOS HORIZONTAL CAROUSEL / SELECTOR */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {filteredScenarios.map((sc) => {
          const isSelected = sc.id === scenario.id;
          return (
            <button
              key={sc.id}
              onClick={() => {
                setCurrentScenarioId(sc.id);
                setChallengeIdx(0);
              }}
              className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/30 font-semibold scale-[1.02]'
                  : 'bg-white text-slate-800 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40'
              }`}
            >
              <div>
                <div className="text-2xl mb-1.5">{sc.icon}</div>
                <div className="text-sm font-bold leading-tight">{sc.title.split(' (')[0]}</div>
                <div
                  className={`text-[11px] mt-0.5 line-clamp-1 ${
                    isSelected ? 'text-emerald-100' : 'text-slate-400'
                  }`}
                >
                  {sc.sub}
                </div>
              </div>
              <div
                className={`text-[10px] font-semibold mt-2.5 px-2 py-0.5 rounded-full inline-block w-fit ${
                  isSelected ? 'bg-emerald-700/60 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {sc.challenges.length} thử thách
              </div>
            </button>
          );
        })}
      </div>

      {/* ACTIVE SCENARIO CARD & VOCABULARY */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-100 gap-3">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-2xl shadow-sm">
              {scenario.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-900 text-lg">{scenario.title}</h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                  {scenario.categoryName}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">{scenario.context}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs font-semibold text-slate-400">Thử thách:</span>
            <div className="flex items-center gap-1.5">
              {scenario.challenges.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setChallengeIdx(idx)}
                  className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                    challengeIdx === idx
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* VOCABULARY TOOLBAR FOR THIS SCENARIO */}
        <div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <span>🔑</span>
            <span>Từ vựng cốt lõi trong hoàn cảnh (Bấm để nghe phát âm):</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {scenario.vocabList.map((v, idx) => (
              <button
                key={idx}
                onClick={() => speakText(v.hanzi)}
                className="px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 text-left transition-all flex items-center gap-2 group shadow-2xs"
              >
                <span className="text-sm font-bold text-slate-900 chinese-font group-hover:text-emerald-700">
                  {v.hanzi}
                </span>
                <span className="text-xs text-amber-600 font-medium">{v.pinyin}</span>
                <span className="text-xs text-slate-400">• {v.vi}</span>
                <span className="text-xs text-slate-300 group-hover:text-emerald-600">🔊</span>
              </button>
            ))}
          </div>
        </div>

        {/* CHALLENGE WORKSPACE */}
        <div className="pt-2 space-y-4">
          {/* Target Sentence Prompt */}
          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
              🎯 Thử thách ghép câu giao tiếp:
            </div>
            <div className="text-base font-bold text-slate-900 leading-snug">
              "{challenge.promptVi}"
            </div>
            <div className="text-xs text-slate-500 mt-1 italic">
              💡 Gợi ý cấu trúc: {challenge.grammarHint}
            </div>
          </div>

          {/* TRAY SLOTS (Placed words) */}
          <div className="p-4 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-300 min-h-[90px] flex flex-wrap items-center gap-2.5">
            {trayTokens.length === 0 ? (
              <div className="w-full text-center text-sm text-slate-400 select-none py-2">
                👉 Nhấp vào các từ vựng bên dưới để xếp thành câu hoàn chỉnh theo ngữ pháp
              </div>
            ) : (
              trayTokens.map((token) => (
                <button
                  key={token.id}
                  onClick={() => handleRemoveToken(token)}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-lg chinese-font shadow-md hover:bg-rose-600 hover:shadow-rose-600/30 transition-all flex items-center gap-2 group"
                  title="Nhấp để gỡ từ này"
                >
                  <span>{token.text}</span>
                  <span className="text-xs opacity-60 group-hover:opacity-100">✕</span>
                </button>
              ))
            )}
          </div>

          {/* TOKEN BANK (Word pool) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Ngân hàng từ ngữ:</span>
              <button
                onClick={handleClearTray}
                disabled={trayTokens.length === 0}
                className="text-rose-600 hover:text-rose-700 disabled:opacity-30 transition-colors"
              >
                ✕ Xóa khay chọn
              </button>
            </div>
            <div className="p-4 rounded-2xl bg-slate-100/70 border border-slate-200 flex flex-wrap gap-2.5 min-h-[64px] items-center">
              {bankTokens.length === 0 && trayTokens.length > 0 ? (
                <div className="text-xs text-slate-400 italic">Đã chuyển hết từ lên khay! Bấm "Kiểm tra đáp án".</div>
              ) : (
                bankTokens.map((token) => (
                  <button
                    key={token.id}
                    onClick={() => handlePickToken(token)}
                    className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-base chinese-font shadow-sm hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-800 transition-all"
                  >
                    {token.text}
                  </button>
                ))
              )}
            </div>
          </div>

          {/* FEEDBACK STATUS BOX */}
          {feedback && (
            <div
              className={`p-4 rounded-2xl border text-sm space-y-2 ${
                feedback.isCorrect
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  : 'bg-rose-50 border-rose-300 text-rose-900'
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-base">
                <span>{feedback.isCorrect ? '🎉' : '❌'}</span>
                <span>
                  {feedback.isCorrect
                    ? 'Hoàn toàn chính xác! Câu ghép rất tự nhiên và đúng văn phong bản xứ (+20 XP).'
                    : 'Chưa chính xác. Thứ tự các từ vựng chưa đúng trật tự ngữ pháp tiếng Trung.'}
                </span>
              </div>
              <div className="font-bold text-lg chinese-font text-slate-900">
                Câu chuẩn: {challenge.correctOrder.join('')}
              </div>
              <div className="text-xs text-slate-600 italic">
                📖 Giải thích ngữ cảnh: {feedback.explanation}
              </div>
            </div>
          )}

          {/* SPOKEN RESULT FEEDBACK */}
          {spokenResult && (
            <div
              className={`p-3.5 rounded-xl border text-sm ${
                spokenResult.match
                  ? 'bg-teal-50 border-teal-300 text-teal-800'
                  : 'bg-amber-50 border-amber-300 text-amber-800'
              }`}
            >
              <div className="font-bold">
                🎙️ Kết quả nhận dạng: "{spokenResult.transcript}" ({spokenResult.confidence}% khớp)
              </div>
              <div className="text-xs mt-0.5">
                {spokenResult.match
                  ? 'Tuyệt vời! Bạn phát âm câu trong hoàn cảnh này rất chuẩn (+15 XP).'
                  : 'Hãy lắng nghe câu mẫu và thử phát âm lại to rõ hơn nhé!'}
              </div>
            </div>
          )}

          {/* ACTION BUTTONS BAR */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleCheckAnswer}
              disabled={trayTokens.length === 0}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white rounded-xl text-sm font-bold shadow-md shadow-emerald-600/20 transition-all"
            >
              ✓ Kiểm tra đáp án
            </button>

            <button
              onClick={() => speakText(challenge.audioFull)}
              className="px-4 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5"
            >
              <span>🔊</span>
              <span>Nghe câu chuẩn</span>
            </button>

            <button
              onClick={handleToggleRecord}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                isRecording
                  ? 'bg-rose-600 text-white animate-pulse'
                  : 'border border-slate-300 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <span>🎙️</span>
              <span>{isRecording ? 'Đang lắng nghe...' : 'Luyện nói câu này'}</span>
            </button>

            <button
              onClick={handleNextChallenge}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-bold ml-auto transition-all"
            >
              {challengeIdx < scenario.challenges.length - 1
                ? 'Câu tiếp theo ▶'
                : 'Hoàn cảnh tiếp theo 🚀'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
