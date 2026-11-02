import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Calendar,
  Flame,
  Star,
  CheckCircle2,
  Clock,
  Headphones,
  Mic,
  MicOff,
  Zap,
  Volume2,
  Play,
  Pause,
  Award,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Info,
  ShieldCheck,
  Smile,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Bot,
  MessageSquare,
  HelpCircle,
  TrendingUp,
  Sliders,
  Filter,
  Check,
  RefreshCw,
  Repeat,
  Radio,
  Layers,
  Gamepad2,
  FileText,
  Eye,
  EyeOff,
  Trophy,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROADMAP_STAGES, ROADMAP_DAYS_DATA, ANTI_BURNOUT_TIPS } from '../data/roadmap90DaysData';
import { enrichDayData } from '../data/roadmapEnricher';

export default function Roadmap90DaysView({ onGainXP }) {
  const navigate = useNavigate();

  // Local storage keys
  const STORAGE_KEY_CURRENT_DAY = 'hsk_roadmap_current_day';
  const STORAGE_KEY_COMPLETED_DAYS = 'hsk_roadmap_completed_days';

  // State
  const [selectedDayNum, setSelectedDayNum] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY_CURRENT_DAY);
    return saved ? parseInt(saved, 10) : 1;
  });

  const [completedDays, setCompletedDays] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COMPLETED_DAYS);
      return saved ? JSON.parse(saved) : [1];
    } catch {
      return [1];
    }
  });

  const [activeStageId, setActiveStageId] = useState(1);
  const [showPinyinOnly, setShowPinyinOnly] = useState(false);
  const [showTipsModal, setShowTipsModal] = useState(false);

  // 6 Main Tabs:
  // 1: Từ vựng (12 từ), 2: Câu thực tế (8-10 câu), 3: Luyện nói AI, 4: Hội thoại A-B, 5: Bài khóa thuần chữ Hán, 6: Đấu trường Game
  const [activeTab, setActiveTab] = useState(1);
  const [tabCompleted, setTabCompleted] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false, 6: false });

  // Voice recording & Shadowing
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [matchScore, setMatchScore] = useState(null);
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [selectedSentenceIdx, setSelectedSentenceIdx] = useState(0);

  // Auto-Play Hands-Free Shadowing Loop
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const autoPlayIndexRef = useRef(0);
  const autoPlayTimeoutRef = useRef(null);
  const [playingSentenceIdx, setPlayingSentenceIdx] = useState(null);

  // Tab 5: Reading Passage (Thuần chữ Hán - ẩn Pinyin)
  const [showPassagePinyin, setShowPassagePinyin] = useState(false);
  const [selectedTokenInfo, setSelectedTokenInfo] = useState(null);
  const [passageAnswers, setPassageAnswers] = useState({});

  // Tab 6: Games & Review Arena
  const [activeGameType, setActiveGameType] = useState('match'); // 'match', 'scramble', 'reflex', 'gapfill', 'truefalse'
  
  // Game 1: Vocab Memory Match Game
  const [matchCards, setMatchCards] = useState([]);
  const [selectedMatchFirst, setSelectedMatchFirst] = useState(null);
  const [matchedCardIds, setMatchedCardIds] = useState([]);
  const [matchScoreCount, setMatchScoreCount] = useState(0);

  // Game 2: Multi Sentence Scramble
  const [scrambleIdx, setScrambleIdx] = useState(0);
  const [scramblePool, setScramblePool] = useState([]);
  const [scrambleSelected, setScrambleSelected] = useState([]);
  const [scrambleFeedback, setScrambleFeedback] = useState(null);

  // Game 3: Multi Reflex
  const [reflexIdx, setReflexIdx] = useState(0);
  const [reflexSelectedMap, setReflexSelectedMap] = useState({});

  // Game 4: GapFill Quiz
  const [gapFillOption, setGapFillOption] = useState(null);
  const [isGapFillSubmitted, setIsGapFillSubmitted] = useState(false);

  // Game 5: True / False Speed Drill
  const [tfIdx, setTfIdx] = useState(0);
  const [tfAnswers, setTfAnswers] = useState({});

  // Speech Recognition Ref
  const recognitionRef = useRef(null);

  // Enrich current day with full 12 vocabularies, 8-10 sentences, dialogues, pure hanzi passage, and games
  const rawDayData = ROADMAP_DAYS_DATA.find((d) => d.day === selectedDayNum) || ROADMAP_DAYS_DATA[0];
  const currentDayData = useMemo(() => enrichDayData(rawDayData), [rawDayData]);

  // Sync state when selected day changes
  useEffect(() => {
    if (currentDayData) {
      setActiveStageId(currentDayData.stage);
    }
    stopAutoPlay();
    setActiveTab(1);
    setSelectedSentenceIdx(0);
    setTranscript('');
    setMatchScore(null);
    setFeedbackMsg('');
    setShowPassagePinyin(false);
    setSelectedTokenInfo(null);
    setPassageAnswers({});
    setReflexIdx(0);
    setReflexSelectedMap({});
    setGapFillOption(null);
    setIsGapFillSubmitted(false);
    setTfIdx(0);
    setTfAnswers({});

    // Init Scramble
    setScrambleIdx(0);
    if (currentDayData.scrambleList && currentDayData.scrambleList[0]) {
      const words = [...currentDayData.scrambleList[0].words].sort(() => Math.random() - 0.5);
      setScramblePool(words);
      setScrambleSelected([]);
      setScrambleFeedback(null);
    }

    // Init Memory Match Game
    if (currentDayData.matchingPairs) {
      initMatchGame(currentDayData.matchingPairs);
    }

    const isDayDone = completedDays.includes(selectedDayNum);
    setTabCompleted({
      1: isDayDone,
      2: isDayDone,
      3: isDayDone,
      4: isDayDone,
      5: isDayDone,
      6: isDayDone,
    });
  }, [selectedDayNum]);

  // Cleanup auto play on unmount
  useEffect(() => {
    return () => {
      stopAutoPlay();
    };
  }, []);

  // Initialize Memory Match Game Cards
  const initMatchGame = (pairs) => {
    if (!pairs || pairs.length === 0) return;
    const cards = [];
    pairs.forEach((p, idx) => {
      cards.push({ cardId: `zh-${idx}`, pairId: idx, text: p.zh, type: 'zh' });
      cards.push({ cardId: `vi-${idx}`, pairId: idx, text: p.vi, type: 'vi' });
    });
    // Shuffle cards
    cards.sort(() => Math.random() - 0.5);
    setMatchCards(cards);
    setSelectedMatchFirst(null);
    setMatchedCardIds([]);
    setMatchScoreCount(0);
  };

  const handleCardClick = (card) => {
    if (matchedCardIds.includes(card.cardId)) return;
    if (!selectedMatchFirst) {
      setSelectedMatchFirst(card);
      if (card.type === 'zh') playTTS(card.text, 1.0);
      return;
    }
    if (selectedMatchFirst.cardId === card.cardId) return;

    if (card.type === 'zh') playTTS(card.text, 1.0);

    // Check match
    if (selectedMatchFirst.pairId === card.pairId && selectedMatchFirst.type !== card.type) {
      // Matched!
      const newMatched = [...matchedCardIds, selectedMatchFirst.cardId, card.cardId];
      setMatchedCardIds(newMatched);
      setSelectedMatchFirst(null);
      setMatchScoreCount((prev) => prev + 10);
      if (onGainXP) onGainXP(10, 'Ghép cặp thẻ chính xác');

      if (newMatched.length === matchCards.length) {
        setTabCompleted((prev) => ({ ...prev, 6: true }));
        if (onGainXP) onGainXP(30, 'Phá đảo Game ghép từ!');
      }
    } else {
      // Mismatched
      setSelectedMatchFirst(card);
    }
  };

  // Scramble Game Switcher
  const currentScramble = currentDayData.scrambleList?.[scrambleIdx] || currentDayData.scrambleList?.[0];
  useEffect(() => {
    if (currentScramble?.words) {
      const words = [...currentScramble.words].sort(() => Math.random() - 0.5);
      setScramblePool(words);
      setScrambleSelected([]);
      setScrambleFeedback(null);
    }
  }, [scrambleIdx]);

  const handleSelectScrambleWord = (word, indexInPool) => {
    setScrambleSelected((prev) => [...prev, word]);
    setScramblePool((prev) => prev.filter((_, i) => i !== indexInPool));
    setScrambleFeedback(null);
  };

  const handleReturnScrambleWord = (word, indexInSelected) => {
    setScramblePool((prev) => [...prev, word]);
    setScrambleSelected((prev) => prev.filter((_, i) => i !== indexInSelected));
    setScrambleFeedback(null);
  };

  const handleCheckScramble = () => {
    if (!currentScramble) return;
    const userSentence = scrambleSelected.join('');
    const target = currentScramble.targetZh.replace(/[，。！？!?,.\s]/g, '');
    const cleanUser = userSentence.replace(/[，。！？!?,.\s]/g, '');

    if (cleanUser === target) {
      setScrambleFeedback({ isCorrect: true, msg: '🎉 Hoàn toàn chính xác! Ngữ pháp ghép câu rất chuẩn.' });
      setTabCompleted((prev) => ({ ...prev, 6: true }));
      if (onGainXP) onGainXP(15, 'Ghép câu giao tiếp đúng');
    } else {
      setScrambleFeedback({ isCorrect: false, msg: '❌ Thứ tự chưa chính xác, hãy đổi vị trí các từ xem nhé!' });
    }
  };

  const handleResetScramble = () => {
    if (currentScramble?.words) {
      const words = [...currentScramble.words].sort(() => Math.random() - 0.5);
      setScramblePool(words);
      setScrambleSelected([]);
      setScrambleFeedback(null);
    }
  };

  // Persist completed days
  const markDayComplete = () => {
    if (!completedDays.includes(selectedDayNum)) {
      const nextCompleted = [...completedDays, selectedDayNum];
      setCompletedDays(nextCompleted);
      localStorage.setItem(STORAGE_KEY_COMPLETED_DAYS, JSON.stringify(nextCompleted));
      if (onGainXP) {
        onGainXP(80, `Hoàn thành Ngày ${selectedDayNum} Lộ trình Nghe Nói!`);
      }
    }
    // Auto advance to next day if not day 90
    if (selectedDayNum < 90) {
      const nextDay = selectedDayNum + 1;
      setSelectedDayNum(nextDay);
      localStorage.setItem(STORAGE_KEY_CURRENT_DAY, nextDay.toString());
    }
  };

  // TTS Helper
  const playTTS = (text, rate = 1.0, onEndCallback = null) => {
    if (!('speechSynthesis' in window) || !text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = rate;

    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find((v) => v.lang.includes('zh') || v.lang.includes('cmn'));
    if (zhVoice) utterance.voice = zhVoice;

    utterance.onend = () => {
      setPlayingSentenceIdx(null);
      if (onEndCallback) onEndCallback();
    };
    utterance.onerror = () => {
      setPlayingSentenceIdx(null);
      if (onEndCallback) onEndCallback();
    };

    window.speechSynthesis.speak(utterance);
  };

  // Auto-play hands-free loop
  const stopAutoPlay = () => {
    setIsAutoPlaying(false);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
      autoPlayTimeoutRef.current = null;
    }
    setPlayingSentenceIdx(null);
  };

  const startAutoPlay = () => {
    if (!currentDayData.sentences || currentDayData.sentences.length === 0) return;
    setIsAutoPlaying(true);
    autoPlayIndexRef.current = 0;
    playNextLoopItem(0);
  };

  const playNextLoopItem = (idx) => {
    if (idx >= currentDayData.sentences.length) {
      setIsAutoPlaying(false);
      setPlayingSentenceIdx(null);
      return;
    }

    setPlayingSentenceIdx(idx);
    const item = currentDayData.sentences[idx];

    playTTS(item.hanzi, 0.9, () => {
      autoPlayTimeoutRef.current = setTimeout(() => {
        const nextIdx = idx + 1;
        autoPlayIndexRef.current = nextIdx;
        playNextLoopItem(nextIdx);
      }, 3500);
    });
  };

  // Speech Recognition (Shadowing)
  const toggleRecording = () => {
    if (isRecording) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsRecording(false);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Trình duyệt chưa hỗ trợ nhận diện giọng nói Web Speech API. Vui lòng mở bằng Chrome hoặc Edge.');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'zh-CN';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsRecording(true);
        setTranscript('');
        setFeedbackMsg('');
      };

      recognition.onresult = (event) => {
        const spoken = event.results[0][0].transcript;
        setTranscript(spoken);
        evaluatePronunciation(spoken);
      };

      recognition.onerror = (e) => {
        console.error('Speech recognition error:', e);
        setIsRecording(false);
        setFeedbackMsg('Chưa nhận diện rõ âm thanh, hãy nói to và thử lại nhé!');
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.error(err);
      setIsRecording(false);
    }
  };

  // Evaluate Pronunciation similarity
  const evaluatePronunciation = (spoken) => {
    const target = currentDayData.sentences[selectedSentenceIdx]?.hanzi || '';
    if (!target) return;

    const cleanSpoken = spoken.replace(/[^\u4e00-\u9fa5]/g, '');
    const cleanTarget = target.replace(/[^\u4e00-\u9fa5]/g, '');

    let matches = 0;
    for (const char of cleanSpoken) {
      if (cleanTarget.includes(char)) matches++;
    }

    const score = Math.min(100, Math.round((matches / Math.max(cleanTarget.length, 1)) * 100));
    setMatchScore(score);

    if (score >= 75) {
      setFeedbackMsg('🎉 Xuất sắc! Phát âm và khẩu ngữ rất chuẩn bản xứ.');
      setTabCompleted((prev) => ({ ...prev, 3: true }));
      if (onGainXP) onGainXP(25, 'Shadowing chuẩn xác');
    } else if (score >= 40) {
      setFeedbackMsg('👍 Rất khá! Hãy thử nhại lại lần nữa để âm thanh dứt khoát hơn nhé.');
    } else {
      setFeedbackMsg('💪 Cố lên! Hãy nghe chậm 0.75x rồi bắt chước lại khẩu hình nhé.');
    }
  };

  // Progress metrics
  const totalDays = 90;
  const completedCount = completedDays.length;
  const progressPercent = Math.min(100, Math.round((completedCount / totalDays) * 100));

  const currentStage = ROADMAP_STAGES.find((s) => s.id === activeStageId) || ROADMAP_STAGES[0];

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* 1. HERO BANNER: 90-DAY SPEAKING ROADMAP */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 text-white p-6 sm:p-8 shadow-2xl border border-rose-900/30">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-60 h-60 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                <Sparkles size={13} className="text-amber-400" />
                Lộ Trình Khẩu Ngữ Chống Nản • 3 Tháng (90 Ngày)
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold">
                15 - 20 phút / ngày
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                12 Từ vựng • 8-10 Câu • Đọc Chữ Hán • Đấu Trường Game
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
              Bứt Phá Nghe Nói Tiếng Trung <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300">
                Tự Tin Giao Tiếp Thực Chiến
              </span>
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Thiết kế chuyên sâu: <strong className="text-white">12 Từ vựng thực chiến • 8-10 Câu khẩu ngữ đời sống • Bài khóa thuần chữ Hán (ẩn Pinyin) • Game ghép thẻ & Game ghép câu</strong>. Tối đa hóa thực hành và loại bỏ cảm giác nản lòng.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => setShowTipsModal(true)}
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-slate-200 transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-95"
              >
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>5 Bí quyết học 3 tháng không nản</span>
              </button>

              <button
                onClick={() => setShowPinyinOnly(!showPinyinOnly)}
                className={`px-3.5 py-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-2 active:scale-95 ${
                  showPinyinOnly
                    ? 'bg-rose-500 border-rose-400 text-white shadow-lg shadow-rose-900/40'
                    : 'bg-white/10 border-white/15 text-slate-200 hover:bg-white/20'
                }`}
              >
                <Sliders size={15} />
                <span>{showPinyinOnly ? 'Đang bật: Ưu tiên Pinyin' : 'Chế độ: Đầy đủ Hán tự + Pinyin'}</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 min-w-[280px] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] uppercase font-bold text-slate-400">Tiến độ tổng thể</div>
                <div className="text-2xl font-black text-white">
                  Ngày {selectedDayNum} <span className="text-sm font-normal text-slate-300">/ 90 ngày</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center font-black text-lg text-white shadow-lg">
                {progressPercent}%
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-rose-500 to-amber-400 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                <span>Đã xong: {completedCount} ngày</span>
                <span>Còn lại: {90 - completedCount} ngày</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/10 text-center">
              <div className="bg-white/5 rounded-xl p-2">
                <div className="text-[10px] text-slate-400">Chặng hiện tại</div>
                <div className="text-xs font-bold text-amber-300">Tháng {currentDayData.stage}/3</div>
              </div>
              <div className="bg-white/5 rounded-xl p-2">
                <div className="text-[10px] text-slate-400">Lượng nội dung</div>
                <div className="text-xs font-bold text-emerald-300">12 Từ • 8-10 Câu</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. THREE STAGES SELECTOR TABS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {ROADMAP_STAGES.map((stage) => {
          const isActive = activeStageId === stage.id;
          const stageDays = ROADMAP_DAYS_DATA.filter((d) => d.stage === stage.id);
          const stageCompleted = stageDays.filter((d) => completedDays.includes(d.day)).length;
          const stagePercent = Math.round((stageCompleted / stageDays.length) * 100);

          return (
            <button
              key={stage.id}
              onClick={() => {
                setActiveStageId(stage.id);
                if (currentDayData.stage !== stage.id) {
                  const firstDayOfStage = stage.id === 1 ? 1 : stage.id === 2 ? 31 : 61;
                  setSelectedDayNum(firstDayOfStage);
                }
              }}
              className={`p-4 rounded-2xl text-left border transition-all relative overflow-hidden ${
                isActive
                  ? 'bg-white border-rose-500 shadow-xl shadow-rose-500/10 ring-2 ring-rose-500/20 -translate-y-0.5'
                  : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {stage.badge}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  {stageCompleted}/{stageDays.length} ngày ({stagePercent}%)
                </span>
              </div>

              <h2 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
                {stage.name}
              </h2>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                {stage.subtitle}
              </p>

              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-3">
                <div
                  className={`h-full bg-gradient-to-r ${stage.gradient} transition-all duration-300`}
                  style={{ width: `${stagePercent}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* 3. TODAY'S RICH 6-TAB WORKSPACE */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-5 sm:p-7 space-y-6">
        {/* Day navigation header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-lg bg-rose-600 text-white font-black text-xs">
                NGÀY {currentDayData.day}
              </span>
              <span className="text-xs font-bold text-slate-400">
                Tuần {currentDayData.week} • Tháng {currentDayData.stage}
              </span>
              {completedDays.includes(currentDayData.day) && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> Đã hoàn thành
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {currentDayData.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              <strong className="text-rose-600">Trọng tâm:</strong> {currentDayData.focus}
            </p>
          </div>

          {/* Prev / Next Day Controls */}
          <div className="flex items-center gap-2 self-start sm:self-center">
            <button
              onClick={() => setSelectedDayNum((prev) => Math.max(1, prev - 1))}
              disabled={selectedDayNum === 1}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 disabled:opacity-40 disabled:pointer-events-none transition-all active:scale-95"
              title="Ngày trước"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-xs font-extrabold text-slate-700 px-2">
              {selectedDayNum} / 90
            </span>
            <button
              onClick={() => setSelectedDayNum((prev) => Math.min(90, prev + 1))}
              disabled={selectedDayNum === 90}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 disabled:opacity-40 disabled:pointer-events-none transition-all active:scale-95"
              title="Ngày tiếp theo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Motivational Anti-Burnout Tip of the Day */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Smile size={18} />
          </div>
          <div>
            <div className="text-xs font-black uppercase text-amber-800 tracking-wide">
              Bí Kíp Chống Nản Hôm Nay
            </div>
            <div className="text-xs sm:text-sm text-amber-900/90 font-medium mt-0.5 leading-relaxed">
              {currentDayData.tip}
            </div>
          </div>
        </div>

        {/* 6 Workspace Tabs Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 p-1.5 bg-slate-100 rounded-2xl">
          <button
            onClick={() => setActiveTab(1)}
            className={`py-2.5 px-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 1
                ? 'bg-white text-rose-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen size={15} />
            <span>1. Từ Vựng ({currentDayData.vocabularies?.length || 12})</span>
          </button>

          <button
            onClick={() => setActiveTab(2)}
            className={`py-2.5 px-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 2
                ? 'bg-white text-rose-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Headphones size={15} />
            <span>2. {currentDayData.sentences?.length || 8} Câu Thực Tế</span>
          </button>

          <button
            onClick={() => setActiveTab(3)}
            className={`py-2.5 px-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 3
                ? 'bg-white text-rose-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Mic size={15} />
            <span>3. Luyện Nói AI</span>
          </button>

          <button
            onClick={() => setActiveTab(4)}
            className={`py-2.5 px-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 4
                ? 'bg-white text-rose-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <MessageSquare size={15} />
            <span>4. Hội Thoại A-B</span>
          </button>

          <button
            onClick={() => setActiveTab(5)}
            className={`py-2.5 px-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 5
                ? 'bg-white text-rose-600 shadow-sm ring-2 ring-purple-400'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText size={15} className="text-purple-600" />
            <span>5. Đọc Chữ Hán (Ẩn Pinyin)</span>
          </button>

          <button
            onClick={() => setActiveTab(6)}
            className={`py-2.5 px-2 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 6
                ? 'bg-white text-amber-600 shadow-sm ring-2 ring-amber-400 font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Gamepad2 size={16} className="text-amber-500" />
            <span>6. Game & Ôn Tập</span>
            {tabCompleted[6] && <CheckCircle2 size={14} className="text-emerald-500" />}
          </button>
        </div>

        {/* TAB 1: 12 TỪ VỰNG THỰC CHIẾN (VOCABULARY HUB) */}
        {activeTab === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                  <BookOpen size={18} className="text-rose-600" />
                  <span>Kho {currentDayData.vocabularies?.length || 12} Từ Vựng Thực Chiến Hôm Nay</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Nắm chắc chữ Hán, Pinyin, Hán Việt và ngữ cảnh ứng dụng trước khi ghép vào câu.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const allVocabZh = currentDayData.vocabularies.map((v) => v.hanzi).join('，');
                    playTTS(allVocabZh, 0.9);
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95"
                >
                  <Volume2 size={14} />
                  <span>Nghe đọc toàn bộ từ</span>
                </button>
                <button
                  onClick={() => setActiveTab(2)}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95"
                >
                  <span>Sang phần câu thực tế</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Vocab Grid (12 Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {currentDayData.vocabularies.map((v, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-rose-300 transition-all space-y-2 group shadow-2xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-700 font-black text-xs flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        {!showPinyinOnly && (
                          <div className="text-xl font-black text-slate-900 chinese-font tracking-wide">
                            {v.hanzi}
                          </div>
                        )}
                        <div className="text-xs font-bold text-rose-600 tracking-wide">
                          {v.pinyin}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-bold text-slate-500">
                        {v.type}
                      </span>
                      <button
                        onClick={() => playTTS(v.hanzi, 0.9)}
                        className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-rose-300 text-slate-600 hover:text-rose-600 flex items-center justify-center transition-all shadow-2xs active:scale-95"
                        title="Phát âm từ vựng"
                      >
                        <Volume2 size={15} />
                      </button>
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                    <span className="text-slate-400 font-normal">Hán Việt: {v.hv}</span>
                    <span>•</span>
                    <span className="text-slate-900 font-bold">{v.vi}</span>
                  </div>

                  {v.example && (
                    <div className="pt-2 border-t border-slate-200/60 text-[11px] text-slate-500 space-y-0.5">
                      <div className="chinese-font font-medium text-slate-700">{v.example}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: 8-10 CÂU KHẨU NGỮ ĐỜI SỐNG (REAL-LIFE SENTENCES & AUTO PLAY) */}
        {activeTab === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                  <Headphones size={18} className="text-rose-600" />
                  <span>{currentDayData.sentences.length} Câu Khẩu Ngữ Đời Sống Thực Tế</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Luyện nghe ngấm theo từng câu hoặc bấm nút tự động nghe nhại rảnh tay.
                </p>
              </div>

              {/* Hands-Free Auto Play Button */}
              <div className="flex items-center gap-2">
                <button
                  onClick={isAutoPlaying ? stopAutoPlay : startAutoPlay}
                  className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md active:scale-95 ${
                    isAutoPlaying
                      ? 'bg-amber-500 text-white animate-pulse shadow-amber-500/40'
                      : 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-rose-600/30 hover:from-rose-600 hover:to-pink-600'
                  }`}
                  title="Tự động phát lần lượt từng câu kèm khoảng dừng để nhại giọng"
                >
                  {isAutoPlaying ? <Pause size={15} /> : <Repeat size={15} />}
                  <span>{isAutoPlaying ? 'Đang tự động phát... (Dừng)' : '🎧 Nghe Nhại Rảnh Tay (Auto)'}</span>
                </button>

                <button
                  onClick={() => setActiveTab(3)}
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95"
                >
                  <span>Luyện nói AI</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {currentDayData.sentences.map((sent, idx) => {
                const isItemPlaying = playingSentenceIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all space-y-2.5 ${
                      isItemPlaying
                        ? 'bg-rose-50/70 border-rose-400 ring-2 ring-rose-200 shadow-md'
                        : 'bg-slate-50 border-slate-200/80 hover:border-rose-300'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-bold text-slate-500">
                            {sent.tag || `Mẫu câu ${idx + 1}`}
                          </span>
                        </div>
                        {!showPinyinOnly && (
                          <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-wide chinese-font">
                            {sent.hanzi}
                          </div>
                        )}
                        <div className="text-sm sm:text-base font-bold text-rose-600 tracking-wide">
                          {sent.pinyin}
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-700">
                          {sent.vi}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-center flex-shrink-0">
                        <button
                          onClick={() => playTTS(sent.hanzi, 0.75)}
                          className="px-3 py-2 rounded-xl bg-white border border-slate-200 hover:border-rose-300 hover:text-rose-600 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs active:scale-95"
                          title="Nghe tốc độ chậm"
                        >
                          <Volume2 size={15} />
                          <span>Chậm 0.75x</span>
                        </button>

                        <button
                          onClick={() => playTTS(sent.hanzi, 1.0)}
                          className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm shadow-rose-600/30 active:scale-95"
                          title="Nghe tốc độ chuẩn"
                        >
                          <Play size={14} />
                          <span>Chuẩn 1.0x</span>
                        </button>
                      </div>
                    </div>

                    {sent.breakdown && (
                      <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200/60 flex items-center gap-1.5">
                        <span className="font-bold text-slate-600">Bóc tách:</span>
                        <span>{sent.breakdown}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: SHADOWING & LUYỆN NÓI AI (VOICE DRILL) */}
        {activeTab === 3 && (
          <div className="space-y-5 animate-fadeIn">
            <div>
              <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                <Mic size={18} className="text-rose-600" />
                <span>Phương Pháp Shadowing: Nhại Giọng Chấm Điểm AI</span>
              </h3>
              <p className="text-xs text-slate-500">
                Chọn câu bất kỳ trong số {currentDayData.sentences.length} câu, bấm nghe mẫu, rồi bật Mic nói theo để nhận phản hồi và chấm điểm trực tiếp.
              </p>
            </div>

            {/* Sentence selector pills */}
            <div className="flex flex-wrap gap-2">
              {currentDayData.sentences.map((sent, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedSentenceIdx(idx);
                    setTranscript('');
                    setMatchScore(null);
                    setFeedbackMsg('');
                  }}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all ${
                    selectedSentenceIdx === idx
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  Câu {idx + 1}: {sent.pinyin.split(' ')[0]}...
                </button>
              ))}
            </div>

            {/* Target card */}
            {(() => {
              const currentSentence = currentDayData.sentences[selectedSentenceIdx] || currentDayData.sentences[0];
              return (
                <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white space-y-4 shadow-xl">
                  <div className="space-y-1.5 text-center">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                      {currentSentence.tag || 'Mẫu câu luyện nói'}
                    </span>
                    {!showPinyinOnly && (
                      <div className="text-2xl sm:text-3xl font-black text-white chinese-font tracking-wide">
                        {currentSentence.hanzi}
                      </div>
                    )}
                    <div className="text-lg font-bold text-rose-400">
                      {currentSentence.pinyin}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300">
                      {currentSentence.vi}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => playTTS(currentSentence.hanzi, 0.8)}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-2 transition-all active:scale-95"
                    >
                      <Volume2 size={16} className="text-amber-400" />
                      <span>Nghe mẫu chuẩn</span>
                    </button>

                    <button
                      onClick={toggleRecording}
                      className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-lg active:scale-95 ${
                        isRecording
                          ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse shadow-red-500/50'
                          : 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-rose-600/40'
                      }`}
                    >
                      {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
                      <span>{isRecording ? 'Đang lắng nghe... Bấm để dừng' : 'Bật Mic nhại giọng'}</span>
                    </button>
                  </div>

                  {/* Results Display */}
                  {(transcript || feedbackMsg) && (
                    <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2 text-center animate-fadeIn">
                      {transcript && (
                        <div className="text-xs text-slate-300">
                          Bạn vừa nói: <strong className="text-white font-bold chinese-font text-sm">{transcript}</strong>
                        </div>
                      )}
                      {matchScore !== null && (
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-xs uppercase font-bold text-slate-400">Độ chuẩn:</span>
                          <span
                            className={`text-lg font-black ${
                              matchScore >= 75
                                ? 'text-emerald-400'
                                : matchScore >= 40
                                ? 'text-amber-400'
                                : 'text-rose-400'
                            }`}
                          >
                            {matchScore}%
                          </span>
                        </div>
                      )}
                      {feedbackMsg && (
                        <div className="text-xs sm:text-sm font-semibold text-slate-200">
                          {feedbackMsg}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })()}

            <div className="flex justify-end">
              <button
                onClick={() => setActiveTab(4)}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95"
              >
                <span>Sang Hội thoại A-B</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* TAB 4: HỘI THOẠI THỰC TẾ & ĐÓNG VAI (ROLEPLAY A-B) */}
        {activeTab === 4 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                  <MessageSquare size={18} className="text-rose-600" />
                  <span>Đoạn Hội Thoại Thực Tế: {currentDayData.dialogue?.title}</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Lắng nghe cuộc đàm thoại giữa {currentDayData.dialogue?.roleA} và {currentDayData.dialogue?.roleB}.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const fullText = currentDayData.dialogue.lines.map((l) => l.zh).join('，');
                    playTTS(fullText, 0.9);
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95"
                >
                  <Volume2 size={14} />
                  <span>Nghe toàn bộ hội thoại</span>
                </button>
                <button
                  onClick={() => setActiveTab(5)}
                  className="px-3.5 py-1.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95"
                >
                  <span>Sang Đọc chữ Hán (Ẩn Pinyin)</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Dialogue Bubble List */}
            <div className="p-4 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
              {currentDayData.dialogue?.lines.map((line, idx) => {
                const isA = line.speaker === 'A';
                return (
                  <div
                    key={idx}
                    className={`flex flex-col ${isA ? 'items-start' : 'items-end'} space-y-1`}
                  >
                    <div className="text-[10px] font-bold text-slate-400 px-1">
                      {isA ? currentDayData.dialogue.roleA : currentDayData.dialogue.roleB}
                    </div>

                    <div
                      className={`p-4 rounded-2xl max-w-lg space-y-1.5 shadow-xs relative ${
                        isA
                          ? 'bg-white border border-slate-200 text-slate-900'
                          : 'bg-gradient-to-r from-rose-600 to-rose-700 text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-base sm:text-lg font-black chinese-font">
                          {line.zh}
                        </div>
                        <button
                          onClick={() => playTTS(line.zh, 0.9)}
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all flex-shrink-0 ${
                            isA
                              ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                              : 'bg-white/20 hover:bg-white/30 text-white'
                          }`}
                        >
                          <Volume2 size={14} />
                        </button>
                      </div>

                      <div className={`text-xs font-bold ${isA ? 'text-rose-600' : 'text-rose-200'}`}>
                        {line.py}
                      </div>
                      <div className={`text-xs font-medium ${isA ? 'text-slate-600' : 'text-slate-100'}`}>
                        {line.vi}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 5: BÀI KHÓA LUYỆN ĐỌC THUẦN CHỮ HÁN (ẨN PINYIN MẶC ĐỊNH) */}
        {activeTab === 5 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 text-[10px] font-black uppercase tracking-wider">
                    Thuần Chữ Hán • Không Hiện Pinyin
                  </span>
                  <span className="text-xs text-slate-400">Rèn luyện nhận diện mặt chữ bản xứ</span>
                </div>
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 mt-1 flex items-center gap-2">
                  <FileText size={18} className="text-purple-600" />
                  <span>{currentDayData.readingPassage?.title}</span>
                </h3>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPassagePinyin(!showPassagePinyin)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 ${
                    showPassagePinyin
                      ? 'bg-purple-600 border-purple-600 text-white shadow-xs'
                      : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700'
                  }`}
                  title="Hiện hoặc ẩn toàn bộ Pinyin bài đọc"
                >
                  {showPassagePinyin ? <EyeOff size={14} /> : <Eye size={14} />}
                  <span>{showPassagePinyin ? 'Đang hiện Pinyin (Bấm để ẩn)' : 'Xem Pinyin đối chiếu'}</span>
                </button>

                <button
                  onClick={() => playTTS(currentDayData.readingPassage?.hanzi, 0.85)}
                  className="px-3.5 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95"
                >
                  <Volume2 size={14} />
                  <span>Nghe bài đọc</span>
                </button>
              </div>
            </div>

            {/* Reading Passage Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white space-y-5 shadow-xl relative overflow-hidden">
              <div className="text-xs text-slate-400 leading-relaxed border-b border-white/10 pb-3">
                💡 <em>Mẹo luyện đọc:</em> Hãy đọc thử bằng mắt trước. Nếu quên từ nào, hãy <strong>bấm trực tiếp vào các từ khóa bên dưới</strong> để tra nghĩa tức thì!
              </div>

              {/* Hanzi Text */}
              <div className="text-xl sm:text-2xl font-bold leading-relaxed tracking-wider chinese-font text-slate-100">
                {currentDayData.readingPassage?.hanzi}
              </div>

              {/* Optional Pinyin (Revealed when clicked) */}
              {showPassagePinyin && (
                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2 animate-fadeIn">
                  <div className="text-xs uppercase font-bold text-amber-300">Phiên âm Pinyin toàn bài:</div>
                  <div className="text-sm font-semibold text-rose-300 leading-relaxed tracking-wide">
                    {currentDayData.readingPassage?.pinyin}
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-white/10">
                    <strong>Bản dịch:</strong> {currentDayData.readingPassage?.vi}
                  </div>
                </div>
              )}

              {/* Quick Word Lookup Pills */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Bấm để tra cứu nhanh từ vựng trong bài đọc:
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentDayData.readingPassage?.tokens?.map((tok, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedTokenInfo(tok);
                        playTTS(tok.zh, 1.0);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95"
                    >
                      <span className="chinese-font">{tok.zh}</span>
                    </button>
                  ))}
                </div>

                {selectedTokenInfo && (
                  <div className="p-3.5 rounded-xl bg-purple-950/80 border border-purple-400/40 text-xs text-white space-y-1 animate-fadeIn mt-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-300 text-sm chinese-font">
                        {selectedTokenInfo.zh} [{selectedTokenInfo.py}]
                      </span>
                      <button
                        onClick={() => setSelectedTokenInfo(null)}
                        className="text-slate-400 hover:text-white text-xs"
                      >
                        ✕ Đóng
                      </button>
                    </div>
                    <div className="text-slate-200">
                      Nghĩa: <strong>{selectedTokenInfo.vi}</strong>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Comprehension Quiz */}
            <div className="p-5 sm:p-6 rounded-2xl bg-purple-50 border border-purple-200/80 space-y-4">
              <div className="text-xs font-black uppercase text-purple-800 tracking-wide flex items-center gap-1.5">
                <CheckCircle2 size={16} /> Kiểm Tra Đọc Hiểu Bài Khóa
              </div>

              {currentDayData.readingPassage?.questions?.map((qObj, qIdx) => {
                const userChoice = passageAnswers[qIdx];
                return (
                  <div key={qIdx} className="space-y-2">
                    <div className="text-xs sm:text-sm font-bold text-slate-800">
                      Câu {qIdx + 1}: {qObj.q}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {qObj.options.map((opt, oIdx) => {
                        const isSelected = userChoice === oIdx;
                        const isCorrect = oIdx === qObj.correct;

                        let style = 'bg-white border-slate-200 hover:border-purple-300 text-slate-700';
                        if (userChoice !== undefined) {
                          if (isCorrect) style = 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold';
                          else if (isSelected && !isCorrect) style = 'bg-rose-50 border-rose-500 text-rose-800';
                        } else if (isSelected) {
                          style = 'bg-purple-100 border-purple-500 text-purple-900 font-bold';
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => {
                              setPassageAnswers((prev) => ({ ...prev, [qIdx]: oIdx }));
                              if (oIdx === qObj.correct && onGainXP) {
                                onGainXP(10, 'Đọc hiểu bài khóa đúng');
                              }
                            }}
                            className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition-all ${style}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setActiveTab(6)}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95"
              >
                <span>Vào Đấu trường Game ôn tập</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* TAB 6: ĐẤU TRƯỜNG GAME ÔN TẬP TOÀN DIỆN (INTERACTIVE GAME ARENA) */}
        {activeTab === 6 && (
          <div className="space-y-6 animate-fadeIn">
            {/* Arena Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-black text-base sm:text-xl text-slate-900 flex items-center gap-2">
                  <Gamepad2 size={22} className="text-amber-500" />
                  <span>Đấu Trường Game & Trạm Ôn Tập Toàn Diện</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Ôn luyện kiến thức qua các trò chơi tương tác: Ghép thẻ từ vựng, ghép câu, và phản xạ siêu tốc!
                </p>
              </div>

              {/* Game Subtabs */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start sm:self-center">
                <button
                  onClick={() => setActiveGameType('match')}
                  className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all ${
                    activeGameType === 'match' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🃏 Ghép Cặp Thẻ
                </button>
                <button
                  onClick={() => setActiveGameType('scramble')}
                  className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all ${
                    activeGameType === 'scramble' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🔀 Ghép Câu
                </button>
                <button
                  onClick={() => setActiveGameType('reflex')}
                  className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all ${
                    activeGameType === 'reflex' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  ⚡ Phản Xạ 2s
                </button>
                <button
                  onClick={() => setActiveGameType('truefalse')}
                  className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all ${
                    activeGameType === 'truefalse' ? 'bg-teal-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🎯 Đúng/Sai
                </button>
              </div>
            </div>

            {/* SUBGAME 1: VOCAB MEMORY MATCH (GHÉP CẶP TỪ VỰNG) */}
            {activeGameType === 'match' && (
              <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-rose-500/10 border border-amber-300 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-xs font-black uppercase text-amber-800 flex items-center gap-1.5">
                      <Trophy size={16} /> Game 1: Thử Thách Ghép Cặp Thẻ Từ Vựng
                    </div>
                    <p className="text-xs text-slate-600">
                      Bấm vào một thẻ Chữ Hán và một thẻ Nghĩa tiếng Việt tương ứng để tạo thành cặp khớp!
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-amber-800">
                      Điểm: <strong className="text-base text-amber-600">{matchScoreCount}</strong>
                    </span>
                    <button
                      onClick={() => initMatchGame(currentDayData.matchingPairs)}
                      className="p-1.5 rounded-lg bg-white border border-amber-300 text-amber-700 hover:bg-amber-100 text-xs font-bold flex items-center gap-1"
                      title="Chơi lại"
                    >
                      <RotateCcw size={13} />
                      <span>Xáo lại</span>
                    </button>
                  </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {matchCards.map((card) => {
                    const isMatched = matchedCardIds.includes(card.cardId);
                    const isSelected = selectedMatchFirst?.cardId === card.cardId;

                    let cardClass = 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-md text-slate-800';
                    if (isMatched) {
                      cardClass = 'bg-emerald-500 border-emerald-600 text-white font-bold opacity-60 pointer-events-none scale-95';
                    } else if (isSelected) {
                      cardClass = 'bg-amber-500 border-amber-600 text-white font-black scale-105 shadow-lg shadow-amber-500/30';
                    }

                    return (
                      <button
                        key={card.cardId}
                        onClick={() => handleCardClick(card)}
                        disabled={isMatched}
                        className={`min-h-[70px] p-3 rounded-2xl border text-center transition-all flex items-center justify-center font-bold text-sm sm:text-base active:scale-95 ${cardClass}`}
                      >
                        <span className={card.type === 'zh' ? 'chinese-font text-lg' : 'text-xs sm:text-sm'}>
                          {card.text}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {matchedCardIds.length === matchCards.length && matchCards.length > 0 && (
                  <div className="p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-center font-black text-sm flex items-center justify-center gap-2 animate-bounce">
                    <Award size={20} className="text-amber-500" />
                    <span>CHÚC MỪNG! Bạn đã hoàn thành xuất sắc toàn bộ các cặp từ vựng!</span>
                  </div>
                )}
              </div>
            )}

            {/* SUBGAME 2: SENTENCE SCRAMBLE (GHÉP CÂU HOÀN CHỈNH) */}
            {activeGameType === 'scramble' && (
              <div className="p-6 rounded-3xl bg-indigo-50 border border-indigo-200 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-xs font-black uppercase text-indigo-800 flex items-center gap-1.5">
                      <Gamepad2 size={16} /> Game 2: Ghép Các Từ Thành Câu Giao Tiếp
                    </div>
                    <p className="text-xs text-slate-600">
                      Rèn luyện tư duy trật tự từ tiếng Trung: Chọn các khối từ để xếp câu hoàn chỉnh.
                    </p>
                  </div>

                  {/* Scramble Selector (Câu 1, 2, 3) */}
                  <div className="flex items-center gap-1">
                    {currentDayData.scrambleList?.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setScrambleIdx(idx)}
                        className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                          scrambleIdx === idx
                            ? 'bg-indigo-600 text-white shadow-xs'
                            : 'bg-white border border-indigo-200 text-indigo-700 hover:bg-indigo-100'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-sm font-bold text-slate-800">
                  {currentScramble?.prompt}
                </div>

                {/* Selected Words Area */}
                <div className="min-h-[60px] p-3 rounded-2xl bg-white border-2 border-dashed border-indigo-300 flex flex-wrap gap-2 items-center">
                  {scrambleSelected.length === 0 ? (
                    <span className="text-xs text-slate-400 italic">
                      Bấm vào các từ bên dưới để ghép vào đây...
                    </span>
                  ) : (
                    scrambleSelected.map((word, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleReturnScrambleWord(word, idx)}
                        className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center gap-1.5 active:scale-95"
                      >
                        <span className="chinese-font">{word}</span>
                        <span className="text-[10px] opacity-75">✕</span>
                      </button>
                    ))
                  )}
                </div>

                {/* Pool Words */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {scramblePool.map((word, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectScrambleWord(word, idx)}
                      className="px-4 py-2.5 rounded-xl bg-white hover:bg-indigo-100 border border-slate-200 hover:border-indigo-400 text-slate-800 font-bold text-sm shadow-2xs transition-all active:scale-95"
                    >
                      <span className="chinese-font">{word}</span>
                    </button>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCheckScramble}
                      disabled={scrambleSelected.length === 0}
                      className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-bold text-xs transition-all shadow-sm active:scale-95"
                    >
                      Kiểm tra đáp án
                    </button>
                    <button
                      onClick={handleResetScramble}
                      className="px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-100 transition-all"
                    >
                      Xếp lại
                    </button>
                  </div>

                  {scrambleFeedback && (
                    <div
                      className={`text-xs font-bold ${
                        scrambleFeedback.isCorrect ? 'text-emerald-700' : 'text-rose-600'
                      }`}
                    >
                      {scrambleFeedback.msg}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* SUBGAME 3: MULTI REFLEX SCENARIOS (CHUỖI PHẢN XẠ TÌNH HUỐNG) */}
            {activeGameType === 'reflex' && (
              <div className="p-6 rounded-3xl bg-rose-50 border border-rose-200 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-xs font-black uppercase text-rose-800 flex items-center gap-1.5">
                      <Zap size={16} /> Game 3: Chuỗi Phản Xạ Tình Huống 2 Giây
                    </div>
                    <p className="text-xs text-slate-600">
                      Đối mặt với tình huống thực tế đời sống và chọn phản xạ dứt khoát!
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    {currentDayData.reflexQuestions?.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setReflexIdx(idx)}
                        className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                          reflexIdx === idx
                            ? 'bg-rose-600 text-white shadow-xs'
                            : 'bg-white border border-rose-200 text-rose-700 hover:bg-rose-100'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {(() => {
                  const currentQ = currentDayData.reflexQuestions?.[reflexIdx] || currentDayData.reflexQuestions?.[0];
                  if (!currentQ) return null;
                  const userPick = reflexSelectedMap[reflexIdx];
                  const isSubmitted = userPick !== undefined;

                  return (
                    <div className="space-y-3 pt-1">
                      <div className="text-sm sm:text-base font-extrabold text-slate-900">
                        ❓ Tình huống {reflexIdx + 1}: {currentQ.question}
                      </div>

                      <div className="space-y-2">
                        {currentQ.options.map((opt, oIdx) => {
                          const isChosen = userPick === oIdx;
                          const isRight = oIdx === currentQ.correct;

                          let style = 'bg-white border-slate-200 hover:border-rose-400 text-slate-800';
                          if (isSubmitted) {
                            if (isRight) style = 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold';
                            else if (isChosen && !isRight) style = 'bg-rose-50 border-rose-500 text-rose-800';
                          }

                          return (
                            <button
                              key={oIdx}
                              onClick={() => {
                                setReflexSelectedMap((prev) => ({ ...prev, [reflexIdx]: oIdx }));
                                if (oIdx === currentQ.correct && onGainXP) {
                                  onGainXP(15, 'Phản xạ tình huống đúng');
                                }
                              }}
                              disabled={isSubmitted}
                              className={`w-full p-3.5 rounded-xl border text-left font-semibold text-sm transition-all flex items-center justify-between shadow-2xs ${style}`}
                            >
                              <span className="chinese-font">{opt}</span>
                              {isSubmitted && isRight && <CheckCircle2 size={18} className="text-emerald-600" />}
                            </button>
                          );
                        })}
                      </div>

                      {isSubmitted && (
                        <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs text-slate-700 animate-fadeIn">
                          <strong>Giải thích:</strong> {currentQ.explain}
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}

            {/* SUBGAME 4: TRUE/FALSE SPEED DRILL (ĐÚNG / SAI THẦN TỐC) */}
            {activeGameType === 'truefalse' && (
              <div className="p-6 rounded-3xl bg-teal-50 border border-teal-200 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-xs font-black uppercase text-teal-800 flex items-center gap-1.5">
                      <Zap size={16} /> Game 4: Thử Thách Đúng / Sai Thần Tốc
                    </div>
                    <p className="text-xs text-slate-600">
                      Bấm nghe audio câu tiếng Trung và xác nhận xem nghĩa tiếng Việt có đúng không!
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    {currentDayData.trueFalseDrill?.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setTfIdx(idx)}
                        className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                          tfIdx === idx
                            ? 'bg-teal-600 text-white shadow-xs'
                            : 'bg-white border border-teal-200 text-teal-700 hover:bg-teal-100'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {(() => {
                  const item = currentDayData.trueFalseDrill?.[tfIdx] || currentDayData.trueFalseDrill?.[0];
                  if (!item) return null;
                  const userChoice = tfAnswers[tfIdx];
                  const hasAnswered = userChoice !== undefined;
                  const isCorrect = userChoice === item.isTrue;

                  return (
                    <div className="p-5 rounded-2xl bg-white border border-teal-200 space-y-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => playTTS(item.audio, 0.9)}
                          className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all active:scale-95"
                        >
                          <Volume2 size={16} />
                          <span>Bấm nghe câu tiếng Trung</span>
                        </button>
                        <span className="text-xs font-semibold text-slate-700">
                          {item.statement}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <button
                          onClick={() => {
                            setTfAnswers((prev) => ({ ...prev, [tfIdx]: true }));
                            if (item.isTrue && onGainXP) onGainXP(10, 'Nhận định đúng');
                          }}
                          disabled={hasAnswered}
                          className={`flex-1 py-3 rounded-xl border font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                            hasAnswered
                              ? item.isTrue
                                ? 'bg-emerald-500 text-white border-emerald-600'
                                : 'bg-slate-100 text-slate-400 border-slate-200'
                              : 'bg-emerald-50 hover:bg-emerald-100 border-emerald-300 text-emerald-800'
                          }`}
                        >
                          <CheckCircle size={16} />
                          <span>ĐÚNG (Đồng ý)</span>
                        </button>

                        <button
                          onClick={() => {
                            setTfAnswers((prev) => ({ ...prev, [tfIdx]: false }));
                            if (!item.isTrue && onGainXP) onGainXP(10, 'Nhận định đúng');
                          }}
                          disabled={hasAnswered}
                          className={`flex-1 py-3 rounded-xl border font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                            hasAnswered
                              ? !item.isTrue
                                ? 'bg-emerald-500 text-white border-emerald-600'
                                : 'bg-slate-100 text-slate-400 border-slate-200'
                              : 'bg-rose-50 hover:bg-rose-100 border-rose-300 text-rose-800'
                          }`}
                        >
                          <XCircle size={16} />
                          <span>SAI (Không khớp)</span>
                        </button>
                      </div>

                      {hasAnswered && (
                        <div
                          className={`p-3 rounded-xl text-xs font-bold ${
                            isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'
                          }`}
                        >
                          {isCorrect ? '🎉 Chính xác! Bạn nghe nhận diện nghĩa rất chuẩn.' : '❌ Chưa chính xác, hãy bấm nghe lại nhé!'}
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Complete Day CTA */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-emerald-500/20">
              <div className="space-y-1">
                <div className="text-xs font-black uppercase text-emerald-100 flex items-center gap-1.5">
                  <Award size={15} /> Hoàn Thành Trọn Vẹn Ngày {currentDayData.day}
                </div>
                <div className="text-base sm:text-lg font-black">
                  Bạn đã vượt qua Từ vựng, Câu thực tế, Bài đọc và Đấu trường game!
                </div>
              </div>

              <button
                onClick={markDayComplete}
                className="px-5 py-2.5 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 flex-shrink-0"
              >
                <span>Đánh dấu xong + Nhận 80 XP</span>
                <Sparkles size={16} className="text-amber-500" />
              </button>
            </div>
          </div>
        )}

        {/* Related Feature Quick Jump */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-slate-500">
            Muốn mở rộng thêm chủ đề Ngày {currentDayData.day}?
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate('/speaking')}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-all flex items-center gap-1"
            >
              <Mic size={13} />
              <span>Phòng Luyện Nói AI</span>
            </button>
            <button
              onClick={() => navigate('/ai-chat')}
              className="px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold transition-all flex items-center gap-1"
            >
              <Bot size={13} />
              <span>Chat Tình Huống với AI</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. 90-DAY INTERACTIVE TIMELINE / GRID */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-7 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-extrabold text-base sm:text-lg text-slate-900 flex items-center gap-2">
              <Calendar size={20} className="text-rose-600" />
              <span>Bản Đồ 90 Ngày Nghe Nói • {currentStage.name}</span>
            </h2>
            <p className="text-xs text-slate-500">
              Nhấp vào bất kỳ ngày nào để luyện tập hoặc ôn tập lại.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold">
            <div className="flex items-center gap-1.5 text-emerald-600">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span>Đã hoàn thành</span>
            </div>
            <div className="flex items-center gap-1.5 text-rose-600">
              <div className="w-3 h-3 rounded-full bg-rose-500 ring-2 ring-rose-300" />
              <span>Đang chọn</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <span>Chưa học</span>
            </div>
          </div>
        </div>

        {/* Weeks layout for current stage */}
        <div className="space-y-4">
          {currentStage.weeks.map((wk) => (
            <div key={wk.week} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="text-xs font-bold text-slate-700 flex items-center justify-between">
                <span>{wk.title}</span>
                <span className="text-[11px] text-slate-400">
                  {wk.days.filter((d) => completedDays.includes(d)).length}/{wk.days.length} ngày
                </span>
              </div>

              {/* Day buttons grid */}
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                {wk.days.map((dayNum) => {
                  const isSelected = selectedDayNum === dayNum;
                  const isDone = completedDays.includes(dayNum);
                  const dayObj = ROADMAP_DAYS_DATA.find((d) => d.day === dayNum);

                  let cardStyle = 'bg-white border-slate-200 text-slate-700 hover:border-slate-300';
                  if (isSelected) {
                    cardStyle = 'bg-rose-600 border-rose-600 text-white shadow-md shadow-rose-600/30 scale-105';
                  } else if (isDone) {
                    cardStyle = 'bg-emerald-50 border-emerald-300 text-emerald-800 font-bold';
                  }

                  return (
                    <button
                      key={dayNum}
                      onClick={() => setSelectedDayNum(dayNum)}
                      className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-0.5 active:scale-95 ${cardStyle}`}
                      title={dayObj?.title || `Ngày ${dayNum}`}
                    >
                      <div className="text-[10px] uppercase font-bold opacity-80">
                        {isDone ? '✓ Ngày' : 'Ngày'}
                      </div>
                      <div className="text-sm font-black">{dayNum}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. ANTI-BURNOUT TIPS MODAL */}
      {showTipsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-slate-900">
                    Cẩm Nang 5 Bí Quyết Học 3 Tháng Không Nản
                  </h3>
                  <p className="text-xs text-slate-500">
                    Đúc kết từ phương pháp phản xạ ngôn ngữ thực chiến bản xứ
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowTipsModal(false)}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-all"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3.5">
              {ANTI_BURNOUT_TIPS.map((tip, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="font-black text-sm text-slate-900 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-rose-600 text-white text-[11px] font-black flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span>{tip.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 pl-7 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowTipsModal(false)}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all"
              >
                Tôi đã hiểu, bắt đầu buổi học ngay!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
