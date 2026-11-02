import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Headphones,
  MessageSquare,
  Sparkles,
  Zap,
  Loader2,
  Play,
  Pause,
  Eye,
  EyeOff,
  Volume2,
  PenTool,
  CheckCircle2,
  AlertCircle,
  Compass,
  BookOpen,
  Layers,
  ChevronRight,
  Filter,
  Lightbulb,
  Award,
  RotateCcw
} from 'lucide-react';
import { getLessonListeningSections } from '../data/listeningData';
import { REAL_LIFE_SCENARIOS } from '../data/scenarioData';
import { CONTEXTUAL_CATEGORIES, CONTEXTUAL_PHRASES } from '../data/contextualPhrasesData';

export default function ListeningView({ lesson, showPinyin, onGainXP }) {
  // Modes: 'scenarios' (Chủ đề thực tế), 'phrases' (Cụm từ theo hoàn cảnh), 'lesson' (Hội thoại bài học)
  const [listenMode, setListenMode] = useState('scenarios');

  // ================= SCENARIOS MODE STATE =================
  const [selectedScenarioId, setSelectedScenarioId] = useState('restaurant');
  const activeScenario = useMemo(() => {
    return REAL_LIFE_SCENARIOS.find((s) => s.id === selectedScenarioId) || REAL_LIFE_SCENARIOS[0];
  }, [selectedScenarioId]);

  // Normalize dialogues from scenarioData
  const scenarioDialogues = useMemo(() => {
    if (!activeScenario || !activeScenario.dialogue) return [];
    return activeScenario.dialogue.map((d, index) => {
      const isFemale =
        d.avatar === '👩‍🍳' ||
        d.avatar === '👩‍💼' ||
        d.avatar === '👩‍⚕️' ||
        d.avatar === '👩' ||
        d.role?.toLowerCase().includes('nữ') ||
        d.role?.toLowerCase().includes('phục vụ') ||
        d.role?.toLowerCase().includes('lễ tân') ||
        d.role?.toLowerCase().includes('thu ngân');
      return {
        id: index + 1,
        speaker: `${d.speaker} (${d.role})`,
        gender: isFemale ? 'female' : 'male',
        avatar: d.avatar || (isFemale ? '👩' : '👨'),
        hanzi: d.hanzi,
        pinyin: d.pinyin,
        vi: d.vi,
        highlightWords: (activeScenario.vocabList || []).slice(0, 3).map((v) => v.hanzi).filter((h) => d.hanzi.includes(h)),
      };
    });
  }, [activeScenario]);

  // ================= LESSON MODE STATE =================
  const lessonSections = useMemo(() => {
    return getLessonListeningSections(lesson);
  }, [lesson]);

  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const currentLessonSection = lessonSections[activeSectionIdx] || lessonSections[0];
  const [extraDialogues, setExtraDialogues] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // ================= CONTEXTUAL PHRASES STATE =================
  const [selectedPhraseCategory, setSelectedPhraseCategory] = useState('all');
  const filteredPhrases = useMemo(() => {
    if (selectedPhraseCategory === 'all') return CONTEXTUAL_PHRASES;
    return CONTEXTUAL_PHRASES.filter((p) => p.category === selectedPhraseCategory);
  }, [selectedPhraseCategory]);

  // ================= COMMON AUDIO CONTROLLER STATE =================
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const [showTranslation, setShowTranslation] = useState(true);
  const [blankInput, setBlankInput] = useState('');
  const [quizFeedback, setQuizFeedback] = useState(null);

  // Active dialogue list depending on listenMode
  const activeDialogues = useMemo(() => {
    if (listenMode === 'scenarios') {
      return scenarioDialogues;
    }
    if (listenMode === 'lesson') {
      if (activeSectionIdx === lessonSections.length) {
        return extraDialogues;
      }
      return currentLessonSection?.dialogues || [];
    }
    return [];
  }, [listenMode, scenarioDialogues, lessonSections, activeSectionIdx, extraDialogues, currentLessonSection]);

  // Reset audio when mode, section or scenario changes
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setCurrentLineIndex(-1);
    setBlankInput('');
    setQuizFeedback(null);
  }, [listenMode, selectedScenarioId, activeSectionIdx, lesson]);

  const speakSentence = (text, gender = 'female', customSpeed = speed, onEnd = null) => {
    if (!('speechSynthesis' in window) || !text) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN';
    u.rate = customSpeed;
    u.pitch = gender === 'male' ? 0.9 : 1.15;

    if (onEnd) {
      u.onend = onEnd;
      u.onerror = onEnd;
    }
    window.speechSynthesis.speak(u);
  };

  const playAllDialogues = (index = 0) => {
    if (index >= activeDialogues.length) {
      setIsPlaying(false);
      setCurrentLineIndex(-1);
      return;
    }
    setIsPlaying(true);
    setCurrentLineIndex(index);
    const line = activeDialogues[index];
    speakSentence(line.hanzi, line.gender, speed, () => {
      setTimeout(() => {
        playAllDialogues(index + 1);
      }, 700);
    });
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentLineIndex(-1);
    } else {
      playAllDialogues(0);
    }
  };

  // Generate dynamic custom dialogue in lesson mode
  const handleGenerateCustomDialogue = () => {
    setIsGenerating(true);
    const vocabList = (lesson?.matchingWords || []).map((w) => w.hanzi);
    const wordA = vocabList[0] || '中文';
    const wordB = vocabList[1] || '学习';
    const wordC = vocabList[2] || '朋友';
    const wordD = vocabList[3] || '喜欢';

    const generated = [
      {
        id: Date.now() + 1,
        speaker: 'A: 大卫 (David)',
        gender: 'male',
        avatar: '👨',
        hanzi: `你好！最近你觉得学习${wordA}怎么样？`,
        pinyin: `Nǐ hǎo! Zuìjìn nǐ juéde xuéxí ${wordA} zěnmeyàng?`,
        vi: `Chào bạn! Dạo này bạn cảm thấy học "${wordA}" thế nào?`,
        highlightWords: [wordA],
      },
      {
        id: Date.now() + 2,
        speaker: 'B: 王兰 (Vương Lan)',
        gender: 'female',
        avatar: '👩',
        hanzi: `我觉得很有意思！多练习${wordB}，就会越来越流利。`,
        pinyin: `Wǒ juéde hěn yǒuyìsi! Duō liànxí ${wordB}, jiù huì yuè lái yuè liúlì.`,
        vi: `Mình thấy rất thú vị! Luyện tập "${wordB}" nhiều thì sẽ ngày càng lưu loát.`,
        highlightWords: [wordB],
      },
      {
        id: Date.now() + 3,
        speaker: 'A: 大卫 (David)',
        gender: 'male',
        avatar: '👨',
        hanzi: `明天周末，你有空和${wordC}一起去散步吗？`,
        pinyin: `Míngtiān zhōumò, nǐ yǒu kòng hé ${wordC} yìqǐ qù sànbù ma?`,
        vi: `Ngày mai cuối tuần, bạn có rảnh đi dạo cùng "${wordC}" không?`,
        highlightWords: [wordC],
      },
      {
        id: Date.now() + 4,
        speaker: 'B: 王兰 (Vương Lan)',
        gender: 'female',
        avatar: '👩',
        hanzi: `太好了！我很${wordD}这个主意，明天见！`,
        pinyin: `Tài hǎo le! Wǒ hěn ${wordD} zhège zhǔyì, míngtiān jiàn!`,
        vi: `Tuyệt quá! Mình rất "${wordD}" ý kiến này, hẹn ngày mai gặp!`,
        highlightWords: [wordD],
      },
    ];

    setTimeout(() => {
      setExtraDialogues(generated);
      setActiveSectionIdx(lessonSections.length);
      setIsGenerating(false);
      onGainXP(10, 'Tạo hội thoại nghe mở rộng từ vựng AI');
    }, 400);
  };

  // Check quiz for lesson mode
  const handleCheckQuiz = () => {
    const expected = currentLessonSection?.quiz?.missingWord?.trim();
    if (!expected) return;
    const isCorrect = blankInput.trim().toLowerCase() === expected.toLowerCase();
    setQuizFeedback(isCorrect);
    if (isCorrect) {
      onGainXP(15, 'Hoàn thành bài tập nghe điền từ');
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-900/10 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider mb-2">
              <Headphones size={13} />
              <span>LUYỆN NGHE PHẢN XẠ THỰC CHIẾN ĐỜI SỐNG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Phần Nghe Giao Tiếp Đa Tình Huống
            </h2>
            <p className="text-white/85 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              Nghe hội thoại thực tế nhiều chủ đề (Gọi món, Mua sắm, Bắt xe, Khách sạn, Bệnh viện...) và học từ vựng gắn liền với <strong>Cụm từ theo từng hoàn cảnh cụ thể</strong>.
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="px-3.5 py-1.5 rounded-xl bg-white/20 backdrop-blur-md font-bold text-xs border border-white/20">
              12+ Chủ đề Đời sống
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-amber-400 text-slate-900 font-extrabold text-xs shadow-sm">
              Chuẩn Phát Âm Bắc Kinh
            </span>
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 3-MODE TAB SWITCHER */}
      <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap gap-2">
        <button
          onClick={() => setListenMode('scenarios')}
          className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all ${
            listenMode === 'scenarios'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Compass size={17} />
          <span>12 Chủ Đề Đời Sống Thực Tế</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/20 font-black">
            150+ câu
          </span>
        </button>

        <button
          onClick={() => setListenMode('phrases')}
          className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all ${
            listenMode === 'phrases'
              ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
              : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Sparkles size={17} />
          <span>Cụm Từ Thực Tế Theo Hoàn Cảnh</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-400 text-slate-950 font-black">
            Mới
          </span>
        </button>

        <button
          onClick={() => setListenMode('lesson')}
          className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all ${
            listenMode === 'lesson'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
          }`}
        >
          <BookOpen size={17} />
          <span>Hội Thoại Theo Bài Học ({lesson?.title?.split(':')[0] || 'Bài ' + (lesson?.id || 1)})</span>
        </button>
      </div>

      {/* ============================================================== */}
      {/* MODE 1: CHỦ ĐỀ ĐỜI SỐNG THỰC TẾ (12 SCENARIOS)                 */}
      {/* ============================================================== */}
      {listenMode === 'scenarios' && (
        <div className="space-y-6">
          {/* Scenario Carousel / Grid Selector */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Chọn tình huống giao tiếp đời sống thực tế:
              </span>
              <span className="text-xs text-blue-600 font-semibold">
                Đang học: {activeScenario.title}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
              {REAL_LIFE_SCENARIOS.map((sc) => {
                const isSelected = selectedScenarioId === sc.id;
                return (
                  <button
                    key={sc.id}
                    onClick={() => setSelectedScenarioId(sc.id)}
                    className={`p-3 rounded-2xl text-left border-2 transition-all flex flex-col justify-between h-24 ${
                      isSelected
                        ? 'bg-blue-50/90 border-blue-600 shadow-md ring-2 ring-blue-200 -translate-y-0.5'
                        : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{sc.icon}</span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900 truncate">
                        {sc.title.split(' (')[0]}
                      </div>
                      <div className="text-[10px] text-slate-500 truncate">
                        {sc.sub}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scenario Context Card */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/70 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{activeScenario.icon}</span>
                <h3 className="font-bold text-base text-amber-950">
                  {activeScenario.title}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 text-xs font-extrabold">
                  {activeScenario.categoryName}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-amber-900/80 leading-relaxed">
                <strong>Bối cảnh:</strong> {activeScenario.context}
              </p>
            </div>

            {activeScenario.culturalTips && activeScenario.culturalTips.length > 0 && (
              <div className="bg-white/80 p-3 rounded-xl border border-amber-200 text-xs text-slate-700 max-w-md shadow-2xs space-y-1">
                <div className="font-bold text-amber-800 flex items-center gap-1.5">
                  <Lightbulb size={13} className="text-amber-600" />
                  <span>Mẹo giao tiếp người bản xứ:</span>
                </div>
                <p className="text-[11px] text-slate-600 italic leading-snug">
                  "{activeScenario.culturalTips[0]}"
                </p>
              </div>
            )}
          </div>

          {/* AUDIO CONTROLLER BAR */}
          <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <button
                onClick={handleTogglePlay}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold transition-all shadow-lg flex-shrink-0 ${
                  isPlaying
                    ? 'bg-amber-400 hover:bg-amber-500 shadow-amber-400/40 text-slate-950 animate-pulse'
                    : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/40 text-white'
                }`}
                title={isPlaying ? 'Tạm dừng' : 'Phát toàn bộ đoạn hội thoại'}
              >
                {isPlaying ? <Pause size={22} /> : <Play size={22} fill="currentColor" />}
              </button>
              <div>
                <div className="font-bold text-base sm:text-lg flex items-center gap-2">
                  <span>{activeScenario.title}</span>
                  {isPlaying && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-semibold px-2 py-0.5 rounded-full bg-slate-800">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                      Câu {currentLineIndex + 1}/{activeDialogues.length}
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Giọng đọc đối đáp tự nhiên Nam & Nữ chuẩn tiếng Trung Phổ Thông (zh-CN)
                </div>
              </div>
            </div>

            {/* Playback Settings (Translation & Speed) */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end flex-wrap">
              <button
                onClick={() => setShowTranslation(!showTranslation)}
                className={`px-3.5 py-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-2 ${
                  showTranslation
                    ? 'bg-slate-800 border-slate-700 text-slate-200'
                    : 'bg-slate-950 border-slate-700 text-slate-400'
                }`}
              >
                {showTranslation ? <Eye size={14} /> : <EyeOff size={14} />}
                <span>{showTranslation ? 'Hiện dịch' : 'Ẩn dịch (Luyện tai)'}</span>
              </button>

              <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700">
                {[0.75, 1, 1.25, 1.5].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpeed(s)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      speed === s ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* INTERACTIVE CONVERSATION BUBBLES */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  Lời Thoại Đối Đáp Thực Tế
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-black">
                  {scenarioDialogues.length} câu đối thoại
                </span>
              </div>
              <span className="text-xs text-slate-500 italic">
                (Bấm vào bất kỳ câu nào để nghe riêng câu đó kèm phát âm chậm)
              </span>
            </div>

            <div className="space-y-4 pt-2">
              {scenarioDialogues.map((dlg, idx) => {
                const isLineActive = currentLineIndex === idx;
                const isFemale = dlg.gender === 'female';

                return (
                  <div
                    key={dlg.id}
                    onClick={() => {
                      setCurrentLineIndex(idx);
                      speakSentence(dlg.hanzi, dlg.gender, speed);
                    }}
                    className={`p-4 sm:p-5 rounded-3xl cursor-pointer border-2 transition-all flex items-start gap-4 ${
                      isLineActive
                        ? 'bg-blue-50/90 border-blue-500 shadow-md ring-4 ring-blue-100 -translate-y-0.5'
                        : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100/80 hover:border-slate-300'
                    }`}
                  >
                    {/* Speaker Avatar Icon */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm border ${
                        isFemale
                          ? 'bg-rose-100 text-rose-800 border-rose-200'
                          : 'bg-blue-100 text-blue-800 border-blue-200'
                      }`}
                    >
                      {dlg.avatar}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span
                          className={`text-xs font-bold px-2.5 py-0.5 rounded-md ${
                            isFemale
                              ? 'bg-rose-100 text-rose-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {dlg.speaker}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentLineIndex(idx);
                              speakSentence(dlg.hanzi, dlg.gender, 0.75);
                            }}
                            className="text-xs font-semibold text-slate-600 hover:text-blue-600 px-2 py-1 rounded-md bg-white border border-slate-200 shadow-2xs hover:bg-slate-50 transition-all"
                            title="Nghe phát âm chậm 0.75x"
                          >
                            Chậm
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentLineIndex(idx);
                              speakSentence(dlg.hanzi, dlg.gender, speed);
                            }}
                            className="text-xs font-bold text-blue-600 hover:text-blue-700 px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs inline-flex items-center gap-1 hover:bg-blue-50 transition-all"
                          >
                            <Volume2 size={13} />
                            <span>Phát</span>
                          </button>
                        </div>
                      </div>

                      {/* Hanzi */}
                      <div className="text-xl sm:text-2xl font-black text-slate-900 chinese-font leading-relaxed tracking-wide">
                        {dlg.hanzi}
                      </div>

                      {/* Pinyin */}
                      {showPinyin && dlg.pinyin && (
                        <div className="text-sm sm:text-base text-amber-600 font-bold mt-1">
                          {dlg.pinyin}
                        </div>
                      )}

                      {/* Vietnamese Translation */}
                      {showTranslation && dlg.vi && (
                        <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1.5 leading-relaxed bg-white/70 p-2 rounded-xl border border-slate-100">
                          {dlg.vi}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scenario Vocabulary & Key Phrases List */}
          {activeScenario.vocabList && (
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers size={18} className="text-blue-600" />
                  <h4 className="font-bold text-slate-900 text-base">
                    Cụm Từ & Từ Vựng Cốt Lõi Trong Tình Huống Này
                  </h4>
                </div>
                <span className="text-xs text-slate-500">
                  {activeScenario.vocabList.length} cụm từ thực tế
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeScenario.vocabList.map((item, vIdx) => (
                  <div
                    key={vIdx}
                    onClick={() => speakSentence(item.hanzi, 'female', 0.85)}
                    className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200 hover:border-blue-300 transition-all cursor-pointer flex items-center justify-between gap-3 group"
                  >
                    <div>
                      <div className="text-base font-bold text-slate-900 chinese-font group-hover:text-blue-600 transition-colors">
                        {item.hanzi}
                      </div>
                      <div className="text-xs font-semibold text-amber-600">
                        {item.pinyin}
                      </div>
                      <div className="text-xs text-slate-600 mt-0.5">
                        {item.vi}
                      </div>
                    </div>
                    <button
                      className="w-8 h-8 rounded-full bg-white group-hover:bg-blue-600 group-hover:text-white text-slate-400 flex items-center justify-center border border-slate-200 group-hover:border-blue-600 transition-all flex-shrink-0 shadow-2xs"
                      title="Nghe phát âm"
                    >
                      <Volume2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* MODE 2: CỤM TỪ THỰC TẾ THEO HOÀN CẢNH (CONTEXTUAL PHRASES)      */}
      {/* ============================================================== */}
      {listenMode === 'phrases' && (
        <div className="space-y-6">
          {/* Situation Filter Pills */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Lọc theo hoàn cảnh sử dụng:
              </span>
              <span className="text-xs text-rose-600 font-bold">
                Hiển thị: {filteredPhrases.length} cụm từ & mẫu câu
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {CONTEXTUAL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedPhraseCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    selectedPhraseCategory === cat.id
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Phrasal Chunks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredPhrases.map((phrase) => (
              <div
                key={phrase.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-rose-300 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Category Badge & Situation */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 font-extrabold text-[11px] border border-rose-200">
                      {phrase.categoryName}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      🎯 {phrase.situation}
                    </span>
                  </div>

                  {/* Core Phrasal Chunk Card */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-100 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xl font-black text-rose-950 chinese-font">
                        {phrase.phraseHanzi}
                      </div>
                      <div className="text-xs font-bold text-amber-700">
                        {phrase.phrasePinyin}
                      </div>
                      <div className="text-xs font-extrabold text-slate-800 mt-0.5">
                        👉 {phrase.phraseVi}
                      </div>
                    </div>
                    <button
                      onClick={() => speakSentence(phrase.phraseHanzi, 'female', 0.85)}
                      className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all flex-shrink-0"
                      title="Nghe phát âm cụm từ này"
                    >
                      <Volume2 size={13} />
                      <span>Nghe cụm từ</span>
                    </button>
                  </div>

                  {/* Full Situational Example Sentence */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Câu giao tiếp thực tế:
                      </span>
                      <button
                        onClick={() => speakSentence(phrase.sentenceHanzi, 'female', 0.9)}
                        className="text-xs text-blue-600 font-bold hover:text-blue-700 inline-flex items-center gap-1"
                      >
                        <Volume2 size={13} />
                        <span>Nghe cả câu</span>
                      </button>
                    </div>

                    <div className="text-lg font-bold text-slate-900 chinese-font leading-relaxed">
                      {phrase.sentenceHanzi}
                    </div>

                    {showPinyin && (
                      <div className="text-xs font-semibold text-amber-600">
                        {phrase.sentencePinyin}
                      </div>
                    )}

                    <div className="text-xs text-slate-600 font-medium mt-1 leading-normal">
                      {phrase.sentenceVi}
                    </div>
                  </div>

                  {/* Native Usage Tip */}
                  {phrase.tip && (
                    <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-950 flex items-start gap-2">
                      <Lightbulb size={14} className="text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-[11px] leading-relaxed">
                        <strong>Mẹo bản xứ:</strong> {phrase.tip}
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      speakSentence(phrase.sentenceHanzi, 'female', 0.75);
                    }}
                    className="text-xs text-slate-600 hover:text-rose-600 font-semibold"
                  >
                    Nghe câu ở tốc độ chậm (0.75x)
                  </button>
                  <button
                    onClick={() => {
                      onGainXP(5, `Luyện nghe cụm từ: ${phrase.phraseHanzi}`);
                    }}
                    className="text-xs text-emerald-600 font-bold flex items-center gap-1 hover:text-emerald-700"
                  >
                    <CheckCircle2 size={13} />
                    <span>Đã nắm vững (+5 XP)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODE 3: HỘI THOẠI THEO BÀI HỌC (LESSON-BASED LISTENING)        */}
      {/* ============================================================== */}
      {listenMode === 'lesson' && (
        <div className="space-y-6">
          {/* SECTION TABS SELECTOR */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              Chọn đoạn hội thoại bài học:
            </div>
            <div className="flex flex-wrap gap-2.5">
              {lessonSections.map((sec, idx) => (
                <button
                  key={sec.id}
                  onClick={() => setActiveSectionIdx(idx)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                    activeSectionIdx === idx
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-bold scale-[1.02]'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <MessageSquare size={14} />
                  <span>{sec.title.split(' (')[0]}</span>
                </button>
              ))}

              {extraDialogues.length > 0 && (
                <button
                  onClick={() => setActiveSectionIdx(lessonSections.length)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                    activeSectionIdx === lessonSections.length
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 font-bold scale-[1.02]'
                      : 'bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100'
                  }`}
                >
                  <Sparkles size={14} />
                  <span>Đoạn mở rộng từ vựng AI</span>
                </button>
              )}

              <button
                onClick={handleGenerateCustomDialogue}
                disabled={isGenerating}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white shadow-sm transition-all flex items-center gap-2 ml-auto"
                title="Tự động ghép từ vựng bài học thành đoạn hội thoại mới"
              >
                {isGenerating ? <Loader2 size={14} className="animate-spin" /> : <Zap size={14} />}
                <span>{isGenerating ? 'Đang tạo...' : '+ Tạo thêm đoạn nghe từ vựng'}</span>
              </button>
            </div>
          </div>

          {/* AUDIO PLAYER CONTROLLER */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <button
                onClick={handleTogglePlay}
                className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold transition-all shadow-lg ${
                  isPlaying
                    ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/40 text-slate-950 animate-pulse'
                    : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/40 text-white'
                }`}
                title={isPlaying ? 'Tạm dừng' : 'Phát toàn bộ đoạn hội thoại'}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} fill="currentColor" />}
              </button>
              <div>
                <div className="font-bold text-base flex items-center gap-2">
                  <span>
                    {activeSectionIdx === lessonSections.length
                      ? 'Đoạn Mở Rộng Từ Vựng AI'
                      : currentLessonSection?.title}
                  </span>
                  {isPlaying && (
                    <span className="inline-flex items-center gap-1 text-xs text-rose-400 font-normal">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                      Đang phát câu {currentLineIndex + 1}/{activeDialogues.length}
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {currentLessonSection?.description ||
                    'Phát âm chuẩn tiếng Phổ thông (zh-CN) với giọng nam/nữ tự nhiên'}
                </div>
              </div>
            </div>

            {/* Speed & Translation */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowTranslation(!showTranslation)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
                  showTranslation
                    ? 'bg-slate-800 border-slate-600 text-slate-200'
                    : 'bg-slate-950 border-slate-700 text-slate-400'
                }`}
              >
                {showTranslation ? <Eye size={13} /> : <EyeOff size={13} />}
                <span>{showTranslation ? 'Hiện dịch' : 'Ẩn dịch'}</span>
              </button>

              <div className="flex items-center gap-1 bg-slate-800/90 p-1 rounded-xl border border-slate-700">
                {[0.75, 1, 1.25, 1.5].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpeed(s)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      speed === s ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dialogues */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-base">Lời Thoại Hội Thoại Tương Tác</h3>
              <span className="text-xs text-slate-500">(Bấm vào bất kỳ câu nào để nghe riêng)</span>
            </div>

            <div className="space-y-3.5 pt-2">
              {activeDialogues.map((dlg, idx) => {
                const isLineActive = currentLineIndex === idx;
                const isSpeakerMale = dlg.gender === 'male';

                return (
                  <div
                    key={dlg.id}
                    onClick={() => {
                      setCurrentLineIndex(idx);
                      speakSentence(dlg.hanzi, dlg.gender, speed);
                    }}
                    className={`p-4 rounded-2xl cursor-pointer border-2 transition-all flex items-start gap-4 ${
                      isLineActive
                        ? 'bg-indigo-50/80 border-indigo-500 shadow-md ring-2 ring-indigo-200 -translate-y-0.5'
                        : 'bg-slate-50/60 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-base flex-shrink-0 shadow-sm ${
                        isSpeakerMale ? 'bg-blue-600 text-white' : 'bg-rose-600 text-white'
                      }`}
                    >
                      {isSpeakerMale ? '男' : '女'}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                            isSpeakerMale ? 'bg-blue-100 text-blue-800' : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {dlg.speaker}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentLineIndex(idx);
                            speakSentence(dlg.hanzi, dlg.gender, speed);
                          }}
                          className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs"
                        >
                          <Volume2 size={13} />
                          <span>Phát câu</span>
                        </button>
                      </div>

                      <div className="text-xl font-bold text-slate-900 chinese-font leading-relaxed">
                        {dlg.hanzi}
                      </div>

                      {showPinyin && dlg.pinyin && (
                        <div className="text-sm text-amber-600 font-semibold mt-0.5">
                          {dlg.pinyin}
                        </div>
                      )}

                      {showTranslation && dlg.vi && (
                        <div className="text-xs text-slate-600 font-medium mt-1 leading-normal">
                          {dlg.vi}
                        </div>
                      )}

                      {dlg.highlightWords && dlg.highlightWords.length > 0 && (
                        <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                          <span className="text-[11px] text-slate-400 font-semibold">Từ vựng bài học:</span>
                          {dlg.highlightWords.map((hw, hIdx) => (
                            <span
                              key={hIdx}
                              className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 chinese-font"
                            >
                              {hw}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* QUIZ */}
          {currentLessonSection?.quiz && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <PenTool size={18} className="text-indigo-600" />
                  <span>Bài tập nghe & điền từ vào chỗ trống:</span>
                </h4>
                <span className="text-xs text-slate-500">
                  Gợi ý: {currentLessonSection.quiz.hint || 'Nghe kỹ câu thoại để điền đúng từ'}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center gap-2 text-lg chinese-font font-medium">
                <span>{currentLessonSection.quiz.sentencePrefix}</span>
                <input
                  type="text"
                  value={blankInput}
                  onChange={(e) => setBlankInput(e.target.value)}
                  placeholder="Điền từ"
                  className="w-32 px-2 py-1 text-center rounded-lg border-2 border-indigo-500 font-bold text-indigo-600 outline-none bg-white text-base shadow-inner focus:border-rose-500"
                />
                <span>{currentLessonSection.quiz.sentenceSuffix}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCheckQuiz}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-all shadow-md shadow-indigo-600/20 flex items-center gap-1.5"
                >
                  <CheckCircle2 size={16} />
                  <span>Kiểm tra đáp án</span>
                </button>
                <button
                  onClick={() => {
                    const full =
                      currentLessonSection.quiz.sentencePrefix +
                      currentLessonSection.quiz.missingWord +
                      currentLessonSection.quiz.sentenceSuffix;
                    speakSentence(full, 'female', speed);
                  }}
                  className="px-4 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl text-sm font-medium transition-all flex items-center gap-1.5"
                >
                  <Volume2 size={15} />
                  <span>Nghe lại câu hỏi</span>
                </button>
              </div>

              {quizFeedback !== null && (
                <div
                  className={`p-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 ${
                    quizFeedback
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}
                >
                  {quizFeedback ? (
                    <>
                      <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                      <span>Xuất sắc! Bạn đã nghe và điền từ vựng hoàn toàn chính xác (+15 XP).</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle size={18} className="text-rose-600 flex-shrink-0" />
                      <span>
                        Chưa chính xác. Đáp án đúng là: "{currentLessonSection.quiz.missingWord}". Hãy nghe lại và thử lại nhé!
                      </span>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
