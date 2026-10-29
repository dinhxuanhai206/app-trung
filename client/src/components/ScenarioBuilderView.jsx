import React, { useState, useEffect, useRef, useMemo } from 'react';
import { REAL_LIFE_SCENARIOS } from '../data/scenarioData';

const CATEGORIES = [
  { id: 'all', label: 'Tất cả (12)', icon: '🌟' },
  { id: 'dining', label: 'Ăn Uống (Ẩm thực)', icon: '🍜' },
  { id: 'travel', label: 'Du Lịch (Di chuyển)', icon: '🚕' },
  { id: 'shopping', label: 'Mua Sắm (Tiêu dùng)', icon: '🛍️' },
  { id: 'daily', label: 'Đời Sống (Sức khỏe)', icon: '🏥' },
  { id: 'work', label: 'Công Sở & Đàm Phán', icon: '💼' },
];

export default function ScenarioBuilderView({ showPinyin: globalShowPinyin = true, onGainXP }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentScenarioId, setCurrentScenarioId] = useState('restaurant');
  const [activeTab, setActiveTab] = useState('dialogue'); // 'dialogue' | 'video' | 'challenge' | 'vocab'

  // Dialogue Display Options
  const [showPinyin, setShowPinyin] = useState(true);
  const [showVi, setShowVi] = useState(true);
  const [speechRate, setSpeechRate] = useState(0.85);

  // Auto-play dialogue state
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [activeDialogueIndex, setActiveDialogueIndex] = useState(-1);
  const autoPlayTimeoutRef = useRef(null);

  // Role-play mode
  const [roleplayMode, setRoleplayMode] = useState(false);
  const [userRole, setUserRole] = useState(null); // e.g. 'Khách hàng' or 'Nhân viên'
  const [spokenFeedback, setSpokenFeedback] = useState({});

  // Speech recognition for role-play & challenge
  const [recordingIndex, setRecordingIndex] = useState(null);
  const recognitionRef = useRef(null);

  // Sentence Builder Challenge state
  const [challengeIdx, setChallengeIdx] = useState(0);
  const [trayTokens, setTrayTokens] = useState([]);
  const [bankTokens, setBankTokens] = useState([]);
  const [feedback, setFeedback] = useState(null);

  const filteredScenarios = useMemo(() => {
    if (selectedCategory === 'all') return REAL_LIFE_SCENARIOS;
    return REAL_LIFE_SCENARIOS.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  const scenario = useMemo(() => {
    return REAL_LIFE_SCENARIOS.find((s) => s.id === currentScenarioId) || REAL_LIFE_SCENARIOS[0];
  }, [currentScenarioId]);

  const challenge = scenario.challenges ? scenario.challenges[challengeIdx] || scenario.challenges[0] : null;

  // Extract roles in this scenario dialogue
  const availableRoles = useMemo(() => {
    if (!scenario || !scenario.dialogue) return [];
    return Array.from(new Set(scenario.dialogue.map((d) => d.role)));
  }, [scenario]);

  // Set default role when scenario changes
  useEffect(() => {
    if (availableRoles.length > 0) {
      setUserRole(availableRoles[availableRoles.length - 1]); // default to customer / guest role
    }
  }, [availableRoles]);

  // Stop auto play when scenario or tab changes
  useEffect(() => {
    stopAutoPlay();
    setActiveDialogueIndex(-1);
  }, [currentScenarioId, activeTab]);

  // Reset challenge puzzle when scenario or challenge changes
  useEffect(() => {
    if (!challenge) return;
    setTrayTokens([]);
    setFeedback(null);

    const tokens = challenge.correctOrder.map((word, idx) => ({
      id: `${word}_${idx}_${Date.now()}`,
      text: word,
    }));
    const shuffled = [...tokens].sort(() => Math.random() - 0.5);
    setBankTokens(shuffled);
  }, [currentScenarioId, challengeIdx, challenge]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      stopAutoPlay();
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Text to Speech
  const speakText = (text, rate = speechRate, onEndCallback = null) => {
    if ('speechSynthesis' in window && text) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.rate = rate;
      u.onend = () => {
        if (onEndCallback) onEndCallback();
      };
      u.onerror = () => {
        if (onEndCallback) onEndCallback();
      };
      window.speechSynthesis.speak(u);
    } else if (onEndCallback) {
      onEndCallback();
    }
  };

  // Auto-play dialogue from start to end
  const startAutoPlay = () => {
    if (!scenario || !scenario.dialogue || scenario.dialogue.length === 0) return;
    setIsPlayingAll(true);
    playStep(0);
  };

  const stopAutoPlay = () => {
    setIsPlayingAll(false);
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
      autoPlayTimeoutRef.current = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  const playStep = (idx) => {
    if (!scenario || !scenario.dialogue || idx >= scenario.dialogue.length) {
      setIsPlayingAll(false);
      setActiveDialogueIndex(-1);
      return;
    }

    setActiveDialogueIndex(idx);
    const line = scenario.dialogue[idx];

    speakText(line.hanzi, speechRate, () => {
      // Pause slightly between turns for realism
      autoPlayTimeoutRef.current = setTimeout(() => {
        playStep(idx + 1);
      }, 700);
    });
  };

  // Role-play speech recording for a dialogue line
  const handleRecordLine = (lineIdx, targetHanzi) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Trình duyệt của bạn chưa hỗ trợ nhận dạng giọng nói (Khuyên dùng Google Chrome hoặc Microsoft Edge).');
      return;
    }

    if (recordingIndex === lineIdx) {
      if (recognitionRef.current) recognitionRef.current.stop();
      setRecordingIndex(null);
      return;
    }

    try {
      const rec = new SpeechRecognition();
      rec.lang = 'zh-CN';
      rec.continuous = false;
      rec.interimResults = false;

      rec.onstart = () => {
        setRecordingIndex(lineIdx);
      };

      rec.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        const confidence = e.results[0][0].confidence || 0.9;
        const cleanSpoken = transcript.replace(/[，。！？\s]/g, '');
        const cleanExpected = targetHanzi.replace(/[，。！？\s]/g, '');
        const match = cleanSpoken.includes(cleanExpected) || cleanExpected.includes(cleanSpoken);

        setSpokenFeedback((prev) => ({
          ...prev,
          [lineIdx]: {
            transcript,
            match,
            score: match ? Math.round(confidence * 100) : 65,
          },
        }));

        if (match && onGainXP) {
          onGainXP(15, 'Luyện nói câu hội thoại tình huống xuất sắc');
        }
      };

      rec.onerror = () => {
        setRecordingIndex(null);
      };

      rec.onend = () => {
        setRecordingIndex(null);
      };

      recognitionRef.current = rec;
      rec.start();
    } catch {
      setRecordingIndex(null);
    }
  };

  // Puzzle handlers
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
    if (!challenge) return;
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
      if (onGainXP) onGainXP(20, 'Ghép câu hoàn cảnh thực tế chuẩn');
    }
  };

  const handleNextChallenge = () => {
    if (!scenario.challenges) return;
    if (challengeIdx < scenario.challenges.length - 1) {
      setChallengeIdx((prev) => prev + 1);
    } else {
      const curIdx = REAL_LIFE_SCENARIOS.findIndex((s) => s.id === scenario.id);
      const nextIdx = (curIdx + 1) % REAL_LIFE_SCENARIOS.length;
      setCurrentScenarioId(REAL_LIFE_SCENARIOS[nextIdx].id);
      setChallengeIdx(0);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-16">
      {/* HEADER HERO STUDIO BANNER */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden border border-emerald-500/20">
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-wide">
              <span>🎭</span>
              <span>ĐÀM THOẠI THỰC TẾ & VIDEO PANDA STUDIO 4.0</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
              <span>💬</span> 7. Tình Huống Thực Tế (情景交际)
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              Luyện nghe hiểu và đọc song ngữ qua <strong>12 kịch bản hội thoại thực tế</strong>, tích hợp video bài giảng từ kênh <strong>Panda Studio</strong>, luyện đóng vai (Role-play AI) và sổ tay 200+ từ vựng giao tiếp thực tiễn!
            </p>
          </div>

          <div className="flex flex-wrap md:flex-col gap-3">
            <a
              href="https://www.youtube.com/@PandaStudio24"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-red-600/30 active:scale-95"
            >
              <span>📺</span>
              <span>Kênh YouTube Panda Studio</span>
              <span className="text-[10px] bg-red-800 px-1.5 py-0.5 rounded">Offical</span>
            </a>
            <div className="flex items-center gap-2 text-xs text-emerald-300 font-semibold bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-500/30">
              <span>✨</span>
              <span>12 Chủ đề • 100+ Lượt đối đáp • 200+ Từ vựng</span>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY FILTER PILLS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              selectedCategory === cat.id
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 shadow-2xs'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* SCENARIOS HORIZONTAL SELECTOR GRID */}
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
              className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between group ${
                isSelected
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/25 scale-[1.02]'
                  : 'bg-white text-slate-800 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30 shadow-2xs'
              }`}
            >
              <div>
                <div className="text-2xl mb-1.5">{sc.icon}</div>
                <div className="text-xs font-black leading-tight line-clamp-1">
                  {sc.title.split(' (')[0]}
                </div>
                <div
                  className={`text-[10px] mt-0.5 line-clamp-1 ${
                    isSelected ? 'text-emerald-100' : 'text-slate-400'
                  }`}
                >
                  {sc.sub}
                </div>
              </div>

              <div className="flex items-center justify-between gap-1 mt-2.5">
                <span
                  className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-emerald-700/80 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  💬 {sc.dialogue ? sc.dialogue.length : 0} thoại
                </span>
                {sc.video && (
                  <span className="text-[10px]" title="Có video bài giảng Panda Studio">
                    📺
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* ACTIVE SCENARIO HEADER CARD */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-100 gap-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-3xl shadow-sm flex-shrink-0">
              {scenario.icon}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-extrabold text-slate-900 text-xl">{scenario.title}</h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                  {scenario.categoryName}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1 max-w-3xl leading-relaxed">
                {scenario.context}
              </p>
            </div>
          </div>

          {/* Quick Auto Play Audio for entire dialogue */}
          <div className="flex items-center gap-2 self-start md:self-auto flex-shrink-0">
            {isPlayingAll ? (
              <button
                onClick={stopAutoPlay}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-amber-500/20 animate-pulse"
              >
                <span>⏸️</span>
                <span>Tạm Dừng Hội Thoại</span>
              </button>
            ) : (
              <button
                onClick={startAutoPlay}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-emerald-600/25 active:scale-95 transition-all"
              >
                <span>▶️</span>
                <span>Phát Toàn Bộ Đoạn Hội Thoại</span>
              </button>
            )}
          </div>
        </div>

        {/* 4 LEARNING TABS NAVIGATION */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
          <button
            onClick={() => setActiveTab('dialogue')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
              activeTab === 'dialogue'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span>💬</span>
            <span>Đàm Thoại & Luyện Nghe Đọc</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20">
              {scenario.dialogue ? scenario.dialogue.length : 0} câu
            </span>
          </button>

          <button
            onClick={() => setActiveTab('video')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
              activeTab === 'video'
                ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                : 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200/60'
            }`}
          >
            <span>📺</span>
            <span>Video Thực Tế (Panda Studio)</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-red-500 text-white font-bold">
              HD
            </span>
          </button>

          <button
            onClick={() => setActiveTab('vocab')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
              activeTab === 'vocab'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span>📖</span>
            <span>Sổ Tay Từ Vựng & Mẹo Văn Hóa</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20">
              {scenario.vocabList ? scenario.vocabList.length : 0} từ
            </span>
          </button>

          <button
            onClick={() => setActiveTab('challenge')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
              activeTab === 'challenge'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span>🧩</span>
            <span>Thử Thách Ghép Câu Phản Xạ</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20">
              {scenario.challenges ? scenario.challenges.length : 0} câu
            </span>
          </button>
        </div>

        {/* TAB 1: DIALOGUE & LISTENING READING VIEW */}
        {activeTab === 'dialogue' && (
          <div className="space-y-5">
            {/* Dialogue Controls Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">Tùy chọn hiển thị:</span>
                <button
                  onClick={() => setShowPinyin((p) => !p)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all border ${
                    showPinyin
                      ? 'bg-rose-100 text-rose-800 border-rose-300'
                      : 'bg-white text-slate-500 border-slate-200'
                  }`}
                >
                  {showPinyin ? '👁️ Đang hiện Pinyin' : '🙈 Ẩn Pinyin'}
                </button>
                <button
                  onClick={() => setShowVi((v) => !v)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all border ${
                    showVi
                      ? 'bg-blue-100 text-blue-800 border-blue-300'
                      : 'bg-white text-slate-500 border-slate-200'
                  }`}
                >
                  {showVi ? '🇻🇳 Đang hiện Dịch nghĩa' : '🙈 Ẩn Dịch nghĩa'}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                  <span>Tốc độ đọc:</span>
                  <button
                    onClick={() => setSpeechRate(0.7)}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      speechRate === 0.7 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    🐢 Chậm (0.7x)
                  </button>
                  <button
                    onClick={() => setSpeechRate(0.88)}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      speechRate === 0.88 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    🔊 Chuẩn (1.0x)
                  </button>
                </div>

                <button
                  onClick={() => setRoleplayMode((r) => !r)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    roleplayMode
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100'
                  }`}
                >
                  <span>🎙️</span>
                  <span>{roleplayMode ? 'Đang bật Đóng Vai' : 'Bật Luyện Đóng Vai'}</span>
                </button>
              </div>
            </div>

            {/* Role selection if roleplay mode is on */}
            {roleplayMode && (
              <div className="p-3.5 bg-purple-50/70 border border-purple-200 rounded-2xl flex items-center justify-between gap-4">
                <div className="text-xs text-purple-900 font-bold flex items-center gap-2">
                  <span>🎭</span>
                  <span>Chọn nhân vật bạn muốn đóng vai để luyện nói:</span>
                </div>
                <div className="flex items-center gap-2">
                  {availableRoles.map((role) => (
                    <button
                      key={role}
                      onClick={() => setUserRole(role)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        userRole === role
                          ? 'bg-purple-700 text-white shadow-sm'
                          : 'bg-white text-purple-800 border border-purple-200 hover:bg-purple-100'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Dialogue Conversation Stream */}
            <div className="space-y-4">
              {scenario.dialogue && scenario.dialogue.map((line, idx) => {
                const isUserTurn = roleplayMode && line.role === userRole;
                const isCurrentSpeaking = activeDialogueIndex === idx;
                const fb = spokenFeedback[idx];

                return (
                  <div
                    key={idx}
                    className={`p-4 md:p-5 rounded-2xl border transition-all flex flex-col md:flex-row items-start justify-between gap-4 ${
                      isCurrentSpeaking
                        ? 'bg-emerald-50/80 border-emerald-400 shadow-md ring-2 ring-emerald-400/40'
                        : isUserTurn
                        ? 'bg-purple-50/50 border-purple-200'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-start gap-3.5 flex-1">
                      {/* Character Avatar */}
                      <div className="w-11 h-11 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-2xl flex-shrink-0 shadow-2xs">
                        {line.avatar || '💬'}
                      </div>

                      <div className="space-y-1.5 flex-1">
                        {/* Speaker Name & Role Badge */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black text-slate-800">{line.speaker}</span>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.2 rounded-md ${
                              isUserTurn
                                ? 'bg-purple-200 text-purple-900 font-bold'
                                : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            {line.role} {isUserTurn && '• Vai của bạn'}
                          </span>
                        </div>

                        {/* Hanzi Text */}
                        <div className="text-xl md:text-2xl font-extrabold text-slate-900 chinese-font leading-snug">
                          {line.hanzi}
                        </div>

                        {/* Pinyin Text */}
                        {showPinyin && (
                          <div className="text-sm font-bold text-rose-600">{line.pinyin}</div>
                        )}

                        {/* Vietnamese Meaning */}
                        {showVi && (
                          <div className="text-xs text-slate-600 font-medium leading-relaxed pt-0.5">
                            💡 {line.vi}
                          </div>
                        )}

                        {/* Speech recognition feedback for role-play */}
                        {fb && (
                          <div
                            className={`mt-2 p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between ${
                              fb.match
                                ? 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                                : 'bg-amber-100 text-amber-900 border border-amber-200'
                            }`}
                          >
                            <span>
                              {fb.match ? '✅ Bạn đã nói:' : '⚠️ Giọng nói nhận dạng:'}{' '}
                              <strong>"{fb.transcript}"</strong>
                            </span>
                            <span className="font-black px-2 py-0.5 rounded bg-white/70">
                              Độ chuẩn: {fb.score}%
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action buttons on each line */}
                    <div className="flex items-center gap-2 self-end md:self-center flex-shrink-0">
                      {/* Read button */}
                      <button
                        onClick={() => speakText(line.hanzi, speechRate)}
                        className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 flex items-center justify-center text-sm transition-all shadow-2xs"
                        title="Nghe phát âm chuẩn câu này"
                      >
                        🔊
                      </button>

                      {/* Read slow button */}
                      <button
                        onClick={() => speakText(line.hanzi, 0.65)}
                        className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-amber-500 hover:text-white text-slate-700 flex items-center justify-center text-sm transition-all shadow-2xs"
                        title="Nghe phát âm chậm 0.65x"
                      >
                        🐢
                      </button>

                      {/* Mic button for role-play practice */}
                      {isUserTurn && (
                        <button
                          onClick={() => handleRecordLine(idx, line.hanzi)}
                          className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-2xs ${
                            recordingIndex === idx
                              ? 'bg-rose-600 text-white animate-pulse'
                              : 'bg-purple-600 text-white hover:bg-purple-700'
                          }`}
                          title="Bấm mic để luyện nói câu của bạn"
                        >
                          <span>{recordingIndex === idx ? '⏹️ Dừng' : '🎙️ Đọc câu này'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: REAL LIFE VIDEO VIEW (PANDA STUDIO) */}
        {activeTab === 'video' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Panda Studio Channel Hero Card */}
            <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 rounded-3xl p-6 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5 border border-red-400/30">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white text-slate-900 flex items-center justify-center text-3xl font-black shadow-md flex-shrink-0">
                  🐼
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-extrabold text-xl tracking-tight text-white">
                      Panda Studio (Kênh Học Tiếng Trung Giao Tiếp)
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold">
                      @PandaStudio24
                    </span>
                  </div>
                  <p className="text-xs text-red-100 max-w-2xl leading-relaxed">
                    Chuyên mục luyện nghe hội thoại thực tế của Panda Studio giúp người học làm quen với ngữ điệu tự nhiên của người bản xứ, tăng phản xạ từ vựng và mẫu câu trong đời sống hàng ngày.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 flex-shrink-0">
                <a
                  href={`https://www.youtube.com/results?search_query=Panda+Studio+Tiếng+Trung+${encodeURIComponent(
                    scenario.title.split(' (')[0]
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white text-red-600 hover:bg-red-50 font-extrabold text-xs flex items-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <span>▶️ Xem Trên YouTube</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://www.youtube.com/@PandaStudio24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-black/30 hover:bg-black/50 text-white font-bold text-xs flex items-center gap-2 transition-all border border-white/20"
                >
                  <span>🔔 Kênh Panda Studio</span>
                </a>
              </div>
            </div>

            {/* Video Player Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-3 border-b border-slate-100 gap-2">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 flex items-center gap-1.5">
                    <span>🎬</span>
                    <span>Video Bài Học Tình Huống:</span>
                  </span>
                  <h4 className="text-lg font-extrabold text-slate-900 mt-0.5">
                    {scenario.video ? scenario.video.title : `Luyện Nghe Hội Thoại: ${scenario.title}`}
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-semibold">
                    Chủ đề: <strong>{scenario.categoryName}</strong>
                  </span>
                </div>
              </div>

              {/* YouTube Video Player Embed / Responsive Container */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-xl border-2 border-slate-800 group">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed?listType=search&list=Panda+Studio+Tiếng+Trung+giao+tiếp+${encodeURIComponent(
                    scenario.title.split(' (')[0]
                  )}`}
                  title={scenario.video?.title || scenario.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Video Quick Navigation Bar */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2 font-medium">
                  <span>💡</span>
                  <span>
                    Nếu video không tự động phát trên trình duyệt của bạn do chính sách YouTube, bạn có thể bấm nút bên phải để mở xem trực tiếp video chuẩn nhất của Panda Studio:
                  </span>
                </div>
                <a
                  href={`https://www.youtube.com/results?search_query=Panda+Studio+Luyện+Nghe+Hội+Thoại+${encodeURIComponent(
                    scenario.title.split(' (')[0]
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1.5 flex-shrink-0 transition-all shadow-sm"
                >
                  <span>▶️ Xem Video Bài Giảng Này</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Key Takeaways & Useful Sentences from this Situation */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                  <span>🎯</span>
                  <span>Các mẫu câu khẩu ngữ đắt giá rút ra từ video tình huống này (Bấm 🔊 để nghe):</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {scenario.dialogue &&
                    scenario.dialogue.slice(0, 6).map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-200/80 hover:border-emerald-300 transition-all flex items-start justify-between gap-3 group"
                      >
                        <div className="space-y-1">
                          <div className="text-sm font-bold text-slate-900 chinese-font group-hover:text-emerald-700">
                            {item.hanzi}
                          </div>
                          <div className="text-xs font-semibold text-rose-600">{item.pinyin}</div>
                          <div className="text-xs text-slate-500">💡 {item.vi}</div>
                        </div>

                        <button
                          onClick={() => speakText(item.hanzi)}
                          className="w-8 h-8 rounded-xl bg-white hover:bg-emerald-600 hover:text-white text-slate-600 flex items-center justify-center text-xs transition-all shadow-2xs flex-shrink-0"
                          title="Nghe câu này"
                        >
                          🔊
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: VOCABULARY NOTEBOOK & CULTURAL TIPS */}
        {activeTab === 'vocab' && (
          <div className="space-y-6">
            {/* Cultural Tips Box */}
            {scenario.culturalTips && scenario.culturalTips.length > 0 && (
              <div className="p-5 rounded-3xl bg-amber-50/70 border border-amber-200 space-y-3">
                <div className="font-extrabold text-amber-950 text-sm flex items-center gap-2">
                  <span>🏮</span>
                  <span>Bí kíp văn hóa ứng xử thực tế của người Trung Quốc:</span>
                </div>
                <ul className="space-y-2 text-xs text-amber-900 leading-relaxed list-disc list-inside">
                  {scenario.culturalTips.map((tip, idx) => (
                    <li key={idx} className="font-medium">
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Vocab Cards Grid */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <span>🔑</span>
                <span>Từ vựng cốt lõi trong hoàn cảnh ({scenario.vocabList ? scenario.vocabList.length : 0} từ):</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {scenario.vocabList &&
                  scenario.vocabList.map((v, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between space-y-2 group"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-xl font-extrabold text-slate-900 chinese-font group-hover:text-emerald-700">
                            {v.hanzi}
                          </div>
                          <div className="text-xs font-bold text-rose-600 mt-0.5">{v.pinyin}</div>
                        </div>

                        <button
                          onClick={() => speakText(v.hanzi)}
                          className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-600 flex items-center justify-center text-xs transition-all"
                          title="Phát âm từ này"
                        >
                          🔊
                        </button>
                      </div>

                      <div className="text-xs text-slate-600 space-y-0.5">
                        {v.hv && (
                          <div className="text-[11px] text-slate-400">
                            Hán Việt: <strong className="text-slate-700">{v.hv}</strong>
                          </div>
                        )}
                        <div className="font-semibold text-slate-800 leading-tight">💡 {v.vi}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SENTENCE PUZZLE CHALLENGE */}
        {activeTab === 'challenge' && challenge && (
          <div className="space-y-5 pt-2">
            {/* Target Sentence Prompt */}
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  🎯 Thử thách ghép câu giao tiếp #{challengeIdx + 1}:
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  Câu {challengeIdx + 1} / {scenario.challenges.length}
                </span>
              </div>
              <div className="text-lg md:text-xl font-black text-slate-900 leading-snug">
                "{challenge.promptVi}"
              </div>
              <div className="text-xs text-slate-600 mt-1.5 italic">
                💡 Gợi ý cấu trúc: {challenge.grammarHint}
              </div>
            </div>

            {/* Tray Slots (Word tokens placed) */}
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

            {/* Token Bank Pool */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Kho từ vựng (Nhấp để đưa lên khay):</span>
                {trayTokens.length > 0 && (
                  <button
                    onClick={handleClearTray}
                    className="text-rose-500 hover:underline cursor-pointer"
                  >
                    Xóa làm lại
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2.5">
                {bankTokens.map((token) => (
                  <button
                    key={token.id}
                    onClick={() => handlePickToken(token)}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-emerald-50 hover:border-emerald-500 hover:text-emerald-700 text-slate-800 font-bold text-lg chinese-font shadow-sm transition-all active:scale-95"
                  >
                    {token.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons: Check Answer & Next */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleCheckAnswer}
                disabled={trayTokens.length === 0}
                className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md shadow-emerald-600/25 transition-all flex items-center gap-2"
              >
                <span>Kiểm tra kết quả</span>
                <span>✓</span>
              </button>

              <button
                onClick={() => speakText(challenge.audioFull)}
                className="px-4 py-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm shadow-2xs transition-all flex items-center gap-2"
                title="Nghe câu mẫu chuẩn"
              >
                <span>🔊 Nghe câu mẫu</span>
              </button>
            </div>

            {/* Answer Feedback Banner */}
            {feedback && (
              <div
                className={`p-5 rounded-2xl border space-y-3 animate-fadeIn ${
                  feedback.isCorrect
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : 'bg-rose-50 border-rose-300 text-rose-950'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-base">
                    <span>{feedback.isCorrect ? '🎉' : '❌'}</span>
                    <span>{feedback.isCorrect ? 'Chính xác! Hoàn hảo!' : 'Chưa chính xác!'}</span>
                  </div>
                  {feedback.isCorrect && (
                    <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-emerald-200 text-emerald-800">
                      +20 XP
                    </span>
                  )}
                </div>

                <div className="space-y-1 text-sm">
                  <div>
                    Câu đúng:{' '}
                    <strong className="text-slate-900 chinese-font text-base">
                      {feedback.targetSentence}
                    </strong>
                  </div>
                  <div className="text-xs text-slate-600 italic">
                    💡 Giải thích: {feedback.explanation}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleNextChallenge}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all shadow-sm"
                  >
                    Tiếp tục câu tiếp theo ➔
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
