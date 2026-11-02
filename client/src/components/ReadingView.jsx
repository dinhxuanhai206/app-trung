import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  MessageSquare,
  Layers,
  Volume2,
  BookOpen,
  Lightbulb,
  Gamepad2,
  Play,
  Square,
  Headphones,
  Tag,
  Search,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  FileText,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import {
  LEVEL_TIERS,
  enrichVocabularyRadical,
  getLessonMultiScenarios,
} from '../data/lessonEnricher';

export default function ReadingView({ lesson, showPinyin, onGainXP }) {
  // Tabs: 'scenarios' | 'vocab' | 'sentence' | 'grammar'
  const [activeTab, setActiveTab] = useState('scenarios');

  // Multi-Scenarios State
  const scenarios = useMemo(() => getLessonMultiScenarios(lesson), [lesson]);
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const currentScenario = scenarios[activeScenarioIdx] || scenarios[0];

  // Token Reader Notebook state
  const [selectedWord, setSelectedWord] = useState(
    lesson.reading?.tokens?.find((t) => t.pinyin) || lesson.reading?.tokens?.[0] || { hanzi: '你好', pinyin: 'nǐ hǎo', vi: 'Xin chào', hv: 'Nhĩ Hảo' }
  );
  const [quizState, setQuizState] = useState({ answered: false, isCorrect: false });

  // Reading Vocabularies
  const readingVocabList = useMemo(() => {
    if (lesson.reading?.readingVocabularies?.length) {
      return lesson.reading.readingVocabularies.map(enrichVocabularyRadical);
    }
    return (lesson.vocabularies || []).map(enrichVocabularyRadical);
  }, [lesson]);
  const [readingVocabFilter, setReadingVocabFilter] = useState('');

  // Vocab & Radical State
  const enrichedVocabList = useMemo(() => {
    return (lesson.vocabularies || []).map(enrichVocabularyRadical);
  }, [lesson]);

  const [vocabMode, setVocabMode] = useState('flashcard'); // 'flashcard' | 'table'
  const [flashcardIdx, setFlashcardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [vocabFilter, setVocabFilter] = useState('');

  const levelInfo = LEVEL_TIERS[lesson.level] || LEVEL_TIERS['HSK 1'];

  const speakText = (text) => {
    if ('speechSynthesis' in window && text) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  };

  const handleQuizAnswer = (isCorrect) => {
    setQuizState({ answered: true, isCorrect });
    if (isCorrect) {
      onGainXP(15, 'Hoàn thành câu hỏi đọc hiểu');
    }
  };

  const filteredVocab = enrichedVocabList.filter((item) => {
    if (!vocabFilter.trim()) return true;
    const q = vocabFilter.toLowerCase().trim();
    return (
      item.hanzi?.toLowerCase().includes(q) ||
      item.pinyin?.toLowerCase().includes(q) ||
      item.vi?.toLowerCase().includes(q) ||
      item.hv?.toLowerCase().includes(q) ||
      item.radical?.toLowerCase().includes(q)
    );
  });

  const currentFlashcard = enrichedVocabList[flashcardIdx] || enrichedVocabList[0];

  // Phát âm toàn bộ cuộc hội thoại mẫu tuần tự
  const [isPlayingFull, setIsPlayingFull] = useState(false);
  const speakFullScenario = () => {
    if (!('speechSynthesis' in window) || !currentScenario?.dialogues?.length) return;
    window.speechSynthesis.cancel();
    if (isPlayingFull) {
      setIsPlayingFull(false);
      return;
    }
    setIsPlayingFull(true);
    let index = 0;
    const playNext = () => {
      if (index >= currentScenario.dialogues.length) {
        setIsPlayingFull(false);
        return;
      }
      const item = currentScenario.dialogues[index];
      const u = new SpeechSynthesisUtterance(item.hanzi);
      u.lang = 'zh-CN';
      u.rate = 0.85;
      u.onend = () => {
        index++;
        setTimeout(playNext, 600);
      };
      u.onerror = () => setIsPlayingFull(false);
      window.speechSynthesis.speak(u);
    };
    playNext();
  };

  return (
    <div className="space-y-6">
      {/* Top Banner with Level Badge & Competency Overview */}
      <div className="bg-gradient-to-r from-rose-50 via-white to-amber-50 border border-rose-100 rounded-3xl p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-rose-600 text-white font-bold text-xs uppercase tracking-wider shadow-2xs">
              {levelInfo.badge}
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center gap-1.5">
              <Target size={13} className="text-amber-700" />
              <span>Mục tiêu: {levelInfo.vocabTarget}</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center gap-1.5">
              <MessageSquare size={13} className="text-blue-700" />
              <span>{scenarios.length} Tình huống thực tế</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1.5">
              <Layers size={13} className="text-emerald-700" />
              <span>{enrichedVocabList.length} Bộ thủ & Từ vựng</span>
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            {lesson.title}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
            {lesson.description} • <em>Chuẩn năng lực: {levelInfo.competency}</em>
          </p>
        </div>

        {/* Global Read Audio Button */}
        <button
          onClick={() => {
            const allText = currentScenario.dialogues.map((d) => d.hanzi).join('，');
            speakText(allText);
          }}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-rose-50 border border-rose-200 text-rose-600 font-bold text-xs sm:text-sm shadow-2xs transition-all active:scale-95 flex-shrink-0"
          title="Nghe đọc toàn bộ tình huống"
        >
          <Volume2 size={15} />
          <span>Nghe đọc tình huống</span>
        </button>
      </div>

      {/* Navigation Sub-Tabs (3 Chức Năng Chuyên Sâu) */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('scenarios')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
            activeTab === 'scenarios'
              ? 'bg-rose-600 text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
          }`}
        >
          <MessageSquare size={15} />
          <span>1. Tình Huống & Hội Thoại Đời Sống Mẫu ({scenarios.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('vocab')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
            activeTab === 'vocab'
              ? 'bg-rose-600 text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
          }`}
        >
          <BookOpen size={15} />
          <span>2. Từ Vựng & Phân Tích Bộ Thủ ({enrichedVocabList.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('grammar')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
            activeTab === 'grammar'
              ? 'bg-rose-600 text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
          }`}
        >
          <Lightbulb size={15} />
          <span>3. Cấu Trúc Ngữ Pháp Then Chốt ({lesson.grammarPoints?.length || 2})</span>
        </button>
      </div>

      {/* Banner thông báo chuyển phần Ghép Chữ & Ghép Câu sang Game */}
      <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-purple-50 via-rose-50 to-amber-50 border border-purple-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-500 to-purple-600 text-white flex items-center justify-center text-xl font-bold shadow-md shadow-purple-900/20 flex-shrink-0">
            <Gamepad2 size={24} />
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span>Phòng Game Ghép Chữ & Ghép Câu Bài Học</span>
              <span className="px-2 py-0.5 rounded-full bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider">
                Mục 6
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Phần ghép câu & ghép chữ đã được chuyển vào <strong>Mục 6: Game Ghép Chữ & Ghép Câu</strong> với 3 chế độ: Xếp câu giao tiếp, Ghép bộ thủ chữ Hán và Lật thẻ trí nhớ!
            </p>
          </div>
        </div>
        <Link
          to="/matching"
          className="px-5 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-rose-600/30 flex items-center justify-center gap-2 transition-all active:scale-95 self-start sm:self-auto flex-shrink-0"
        >
          <span>Chơi Game Ghép Chữ</span>
          <Play size={12} fill="currentColor" />
        </Link>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: MULTI-SCENARIOS & INTERACTIVE DIALOGUES */}
      {/* ========================================================================= */}
      {activeTab === 'scenarios' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Scenario Selector Chips */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Chọn bối cảnh tình huống thực tế:
            </span>
            <div className="flex flex-wrap gap-2">
              {scenarios.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => setActiveScenarioIdx(idx)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    activeScenarioIdx === idx
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {sc.name.split(' (')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Scenario Dialogues Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
                <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {currentScenario.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 flex items-center gap-1">
                      <Tag size={13} className="text-slate-400 flex-shrink-0" />
                      <span><strong>Bối cảnh đời sống:</strong> {currentScenario.context}</span>
                    </p>
                  </div>

                  <button
                    onClick={speakFullScenario}
                    className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-bold text-xs transition-all active:scale-95 flex-shrink-0 ${
                      isPlayingFull
                        ? 'bg-rose-600 text-white animate-pulse shadow-md shadow-rose-600/30'
                        : 'bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200'
                    }`}
                  >
                    {isPlayingFull ? <Square size={14} /> : <Headphones size={14} />}
                    <span>{isPlayingFull ? 'Đang đọc hội thoại...' : 'Nghe toàn bộ hội thoại'}</span>
                  </button>
                </div>

                {/* Life speaking tips box */}
                {currentScenario.lifeTips && (
                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/70 text-xs flex items-start gap-2.5">
                    <Lightbulb size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="font-bold text-amber-900">Mẹo khẩu ngữ đời sống thực tế:</span>
                      <p className="text-amber-800 leading-relaxed">{currentScenario.lifeTips}</p>
                    </div>
                  </div>
                )}

                {/* Dialogues list */}
                <div className="space-y-4">
                  {currentScenario.dialogues.map((dlg, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-rose-200 transition-all space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs sm:text-sm text-rose-700">
                          {dlg.speaker}
                        </span>
                        <button
                          onClick={() => speakText(dlg.hanzi)}
                          className="text-xs font-semibold text-slate-500 hover:text-rose-600 flex items-center gap-1"
                        >
                          <Volume2 size={13} />
                          <span>Nghe</span>
                        </button>
                      </div>

                      <div className="text-lg sm:text-xl font-bold chinese-font text-slate-900 leading-relaxed">
                        {dlg.hanzi}
                      </div>

                      {showPinyin && (
                        <div className="text-xs sm:text-sm text-amber-600 font-medium">
                          {dlg.pinyin}
                        </div>
                      )}

                      <div className="text-xs sm:text-sm text-slate-600">
                        {dlg.vi}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Tokens Reader Bar */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Tag size={13} />
                      <span>Bấm vào từ bất kỳ để tra nghĩa & phát âm:</span>
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {readingVocabList.length} từ vựng bài đọc
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-1">
                    {readingVocabList.map((token, idx) => {
                      const isSelected = selectedWord?.hanzi === token.hanzi;
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedWord(token);
                            speakText(token.hanzi);
                          }}
                          className={`px-3 py-1 rounded-xl text-sm font-bold chinese-font transition-all flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-400'
                              : 'bg-slate-100 hover:bg-rose-50 text-slate-800 border border-slate-200/60'
                          }`}
                        >
                          <span>{token.hanzi}</span>
                          <span className={`text-[10px] font-normal ${isSelected ? 'text-rose-100' : 'text-slate-400'}`}>
                            {token.pinyin}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* BẢNG TỪ VỰNG MỚI TRONG BÀI ĐỌC (Reading Vocabulary Highlights) */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <BookOpen size={16} className="text-rose-600" />
                      <span>Từ Vựng Mới & Trọng Tâm Trong Bài Đọc</span>
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Tổng hợp toàn bộ từ mới xuất hiện trong các ngữ cảnh hội thoại của bài học.
                    </p>
                  </div>
                  <div className="relative flex items-center">
                    <Search size={13} className="absolute left-2.5 top-2.5 text-slate-400 pointer-events-none" />
                    <input
                      type="text"
                      value={readingVocabFilter}
                      onChange={(e) => setReadingVocabFilter(e.target.value)}
                      placeholder="Tìm từ mới trong bài..."
                      className="px-3 py-1.5 pl-8 rounded-xl bg-slate-100 text-xs border border-transparent focus:border-rose-400 focus:bg-white outline-none w-48 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
                  {readingVocabList
                    .filter((v) => {
                      if (!readingVocabFilter.trim()) return true;
                      const q = readingVocabFilter.toLowerCase().trim();
                      return (
                        v.hanzi?.toLowerCase().includes(q) ||
                        v.pinyin?.toLowerCase().includes(q) ||
                        v.vi?.toLowerCase().includes(q) ||
                        v.hv?.toLowerCase().includes(q)
                      );
                    })
                    .map((item, idx) => {
                      const isSelected = selectedWord?.hanzi === item.hanzi;
                      return (
                        <div
                          key={idx}
                          onClick={() => {
                            setSelectedWord(item);
                            speakText(item.hanzi);
                          }}
                          className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                            isSelected
                              ? 'bg-rose-50/70 border-rose-400 shadow-sm'
                              : 'bg-slate-50/60 hover:bg-slate-100/80 border-slate-200/70'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="flex items-baseline gap-2">
                                <span className="text-xl font-bold chinese-font text-slate-900">
                                  {item.hanzi}
                                </span>
                                <span className="text-xs font-semibold text-amber-600">
                                  {item.pinyin}
                                </span>
                              </div>
                              <div className="text-xs text-slate-500 mt-0.5">
                                Hán Việt: <span className="font-semibold text-slate-700">{item.hv || '---'}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              {item.type && (
                                <span className="px-2 py-0.5 rounded-lg bg-slate-200 text-slate-700 font-semibold text-[10px]">
                                  {item.type}
                                </span>
                              )}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  speakText(item.hanzi);
                                }}
                                className="w-7 h-7 rounded-lg bg-white hover:bg-rose-100 text-slate-600 hover:text-rose-600 flex items-center justify-center text-xs shadow-2xs border border-slate-200"
                              >
                                <Volume2 size={13} />
                              </button>
                            </div>
                          </div>

                          <div className="text-xs text-slate-700 font-medium bg-white/80 p-2 rounded-xl border border-slate-100 flex items-center gap-1.5">
                            <ChevronRight size={13} className="text-rose-500 flex-shrink-0" />
                            <span>{item.vi}</span>
                          </div>

                          {(item.sampleZh || item.exampleZh) && (
                            <div className="text-[11px] text-slate-500 italic">
                              Ví dụ: {item.sampleZh || item.exampleZh}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* Comprehension Quiz */}
              {lesson.reading?.quiz && (
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <HelpCircle size={16} className="text-blue-600" />
                    <span>Câu hỏi đọc hiểu tình huống:</span>
                  </h4>
                  <p className="text-slate-700 font-semibold text-sm">
                    {lesson.reading.quiz.question}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {lesson.reading.quiz.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleQuizAnswer(opt.correct)}
                        className={`p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition-all ${
                          quizState.answered
                            ? opt.correct
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                            : 'bg-white hover:bg-rose-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        {opt.text}
                      </button>
                    ))}
                  </div>
                  {quizState.answered && (
                    <div
                      className={`p-3 rounded-xl text-xs font-bold ${
                        quizState.isCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {quizState.isCorrect ? (
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 size={15} />
                          <span>Chính xác! Bạn nhận được +15 XP.</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5">
                          <AlertCircle size={15} />
                          <span>Chưa chính xác, hãy đọc lại đoạn hội thoại nhé.</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Column: Sổ tay tra từ tức thì */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm sticky top-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <BookOpen size={16} className="text-slate-700" />
                    <span>Sổ Tay Tra Từ Tức Thì</span>
                  </span>
                  <span className="text-[11px] text-slate-400">Click chữ để tra</span>
                </div>

                {selectedWord ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-extrabold text-slate-900 chinese-font">
                          {selectedWord.hanzi}
                        </div>
                        <div className="text-sm font-bold text-amber-600 mt-1">
                          {selectedWord.pinyin}
                        </div>
                      </div>
                      <button
                        onClick={() => speakText(selectedWord.hanzi)}
                        className="w-12 h-12 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-600 flex items-center justify-center transition-all shadow-2xs"
                        title="Nghe phát âm"
                      >
                        <Volume2 size={20} />
                      </button>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400 font-medium">Hán Việt:</span>
                        <span className="font-bold text-slate-700">{selectedWord.hv || '---'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400 font-medium">Ý nghĩa:</span>
                        <span className="font-bold text-rose-600">{selectedWord.vi}</span>
                      </div>
                    </div>

                    {selectedWord.sample && (
                      <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs space-y-1">
                        <div className="font-bold text-amber-900">Ví dụ ứng dụng:</div>
                        <div className="chinese-font text-slate-800">{selectedWord.sample}</div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="py-8 text-center text-slate-400 text-xs">
                    Bấm vào bất kỳ từ nào trong đoạn hội thoại để xem nghĩa chi tiết.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: TỪ VỰNG & PHÂN TÍCH BỘ THỦ (RADICAL BREAKDOWN) */}
      {/* ========================================================================= */}
      {activeTab === 'vocab' && (
        <div className="space-y-6 animate-fadeIn">
          {/* View Mode Switcher & Search Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setVocabMode('flashcard')}
                className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  vocabMode === 'flashcard'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Layers size={13} />
                  <span>Chế độ Lật Thẻ Flashcard 3D</span>
                </span>
              </button>
              <button
                onClick={() => setVocabMode('table')}
                className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  vocabMode === 'table'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <FileText size={13} />
                  <span>Bảng Tra Cứu Bộ Thủ & Chiết Tự</span>
                </span>
              </button>
            </div>

            <div className="w-full sm:w-72">
              <input
                type="text"
                placeholder="Tìm từ vựng, bộ thủ, pinyin..."
                value={vocabFilter}
                onChange={(e) => setVocabFilter(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs outline-none focus:border-rose-500 bg-slate-50 focus:bg-white"
              />
            </div>
          </div>

          {/* Flashcard Mode with Radical Analysis on the Back */}
          {vocabMode === 'flashcard' && currentFlashcard && (
            <div className="max-w-xl mx-auto space-y-4">
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="relative h-80 sm:h-96 w-full cursor-pointer perspective-1000 select-none"
              >
                <div
                  className={`relative w-full h-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between border shadow-lg transition-transform duration-500 transform-style-3d ${
                    isFlipped
                      ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white border-slate-700'
                      : 'bg-gradient-to-br from-white via-rose-50/40 to-white text-slate-900 border-rose-100'
                  }`}
                >
                  {/* Top Bar on Flashcard */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-3 py-1 rounded-full font-bold bg-rose-500/10 text-rose-600">
                      Thẻ {flashcardIdx + 1} / {enrichedVocabList.length}
                    </span>
                    <span className="font-semibold text-slate-400">
                      {isFlipped ? (
                        <span className="flex items-center gap-1">
                          <BookOpen size={13} />
                          <span>Mặt sau: Bộ thủ & Chiết tự</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <RotateCcw size={13} />
                          <span>Bấm để lật xem bộ thủ</span>
                        </span>
                      )}
                    </span>
                  </div>

                  {/* Card Content */}
                  {!isFlipped ? (
                    /* Front: Hanzi + Pinyin */
                    <div className="text-center space-y-3 my-auto">
                      <div className="text-5xl sm:text-6xl font-extrabold chinese-font tracking-wide text-slate-900">
                        {currentFlashcard.hanzi}
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-amber-600">
                        {currentFlashcard.pinyin}
                      </div>
                      <div className="text-sm font-semibold text-slate-500">
                        Hán Việt: {currentFlashcard.hv || '---'}
                      </div>
                    </div>
                  ) : (
                    /* Back: Radical Breakdown & Etymology Story */
                    <div className="my-auto space-y-3.5 text-left">
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <div>
                          <div className="text-2xl font-bold chinese-font text-white">
                            {currentFlashcard.hanzi}
                          </div>
                          <div className="text-xs text-amber-400 font-medium">
                            {currentFlashcard.pinyin} • {currentFlashcard.vi}
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speakText(currentFlashcard.hanzi);
                          }}
                          className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-base"
                        >
                          <Volume2 size={16} />
                        </button>
                      </div>

                      {/* Radical highlight */}
                      <div className="p-3 rounded-2xl bg-white/10 border border-white/10 space-y-1 text-xs">
                        <div className="font-bold text-rose-300 flex items-center gap-1.5">
                          <Layers size={13} className="text-rose-300" />
                          <span>Bộ Thủ Cấu Thành: <strong>{currentFlashcard.radical}</strong></span>
                        </div>
                        <p className="text-slate-300 text-[11px] pl-5">
                          {currentFlashcard.radicalMeaning} ({currentFlashcard.strokeCount} nét)
                        </p>
                      </div>

                      {/* Hanzi Story */}
                      <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-400/20 text-xs space-y-1">
                        <div className="font-bold text-amber-300 flex items-center gap-1.5">
                          <BookOpen size={13} className="text-amber-300" />
                          <span>Mẹo Chiết Tự Dễ Nhớ:</span>
                        </div>
                        <p className="text-slate-200 text-[11px] leading-relaxed pl-5">
                          {currentFlashcard.hanziStory}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Bottom bar */}
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100/10">
                    <span>{currentFlashcard.type || 'Từ vựng cốt lõi'}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakText(currentFlashcard.hanzi);
                      }}
                      className="text-rose-500 hover:text-rose-600 font-bold flex items-center gap-1.5"
                    >
                      <Volume2 size={13} />
                      <span>Nghe phát âm</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Flashcard Controller Buttons */}
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setFlashcardIdx((prev) => Math.max(0, prev - 1));
                    setIsFlipped(false);
                  }}
                  disabled={flashcardIdx === 0}
                  className="px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold disabled:opacity-30 shadow-2xs flex items-center gap-1"
                >
                  <ChevronLeft size={14} />
                  <span>Từ trước</span>
                </button>

                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="px-6 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-600/20 active:scale-95 flex items-center gap-1.5"
                >
                  <RotateCcw size={14} />
                  <span>Lật thẻ xem chiết tự</span>
                </button>

                <button
                  onClick={() => {
                    setFlashcardIdx((prev) => Math.min(enrichedVocabList.length - 1, prev + 1));
                    setIsFlipped(false);
                  }}
                  disabled={flashcardIdx === enrichedVocabList.length - 1}
                  className="px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold disabled:opacity-30 shadow-2xs flex items-center gap-1"
                >
                  <span>Từ tiếp theo</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* Table Mode: Full Radical Breakdown List */}
          {vocabMode === 'table' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredVocab.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs hover:border-rose-300 hover:shadow-md transition-all space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-2xl font-bold chinese-font text-slate-900">
                        {item.hanzi}
                      </div>
                      <div className="text-xs font-bold text-amber-600 mt-0.5">
                        {item.pinyin} • Hán Việt: {item.hv || '---'}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold">
                        {item.type || 'Từ vựng'}
                      </span>
                      <button
                        onClick={() => speakText(item.hanzi)}
                        className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 hover:bg-rose-100 flex items-center justify-center text-xs font-bold"
                      >
                        <Volume2 size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="text-sm font-bold text-rose-700 flex items-center gap-1.5">
                    <Lightbulb size={14} className="text-amber-500 flex-shrink-0" />
                    <span>{item.vi}</span>
                  </div>

                  {/* Radical & Etymology Box */}
                  <div className="p-3 rounded-2xl bg-purple-50/70 border border-purple-100 text-xs space-y-1.5">
                    <div className="flex items-center justify-between text-purple-900 font-bold">
                      <span className="flex items-center gap-1.5">
                        <Layers size={13} className="text-purple-600" />
                        <span>Bộ thủ: {item.radical}</span>
                      </span>
                      <span className="text-[10px] bg-purple-200 px-2 py-0.5 rounded-full">
                        {item.strokeCount} nét
                      </span>
                    </div>
                    <div className="text-slate-600 text-[11px]">
                      <strong>Ý nghĩa:</strong> {item.radicalMeaning}
                    </div>
                    <div className="text-slate-700 text-[11px] italic pt-1 border-t border-purple-200/50 flex items-start gap-1">
                      <BookOpen size={13} className="text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Chiết tự:</strong> {item.hanziStory}</span>
                    </div>
                  </div>

                  {item.exampleZh && (
                    <div className="pt-2 border-t border-slate-100 text-xs space-y-0.5">
                      <div className="chinese-font font-bold text-slate-800">{item.exampleZh}</div>
                      <div className="text-slate-500 text-[11px]">{item.exampleVi}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: CẤU TRÚC NGỮ PHÁP THEN CHỐT */}
      {/* ========================================================================= */}
      {activeTab === 'grammar' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 gap-6">
            {(lesson.grammarPoints || []).map((gp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-2 text-rose-600 font-bold text-base sm:text-lg">
                  <Lightbulb size={18} className="text-rose-600 flex-shrink-0" />
                  <span>{gp.title}</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-200 text-rose-900 font-mono font-bold text-xs sm:text-sm">
                  {gp.pattern}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {gp.explanation}
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Ví dụ mẫu thực tế:
                  </div>
                  {gp.examples?.map((ex, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3 text-xs sm:text-sm"
                    >
                      <div>
                        <div className="chinese-font font-bold text-slate-900 text-base">
                          {ex.zh}
                        </div>
                        <div className="text-amber-600 font-medium text-xs">
                          {ex.pinyin}
                        </div>
                        <div className="text-slate-600 text-xs mt-0.5">
                          {ex.vi}
                        </div>
                      </div>
                      <button
                        onClick={() => speakText(ex.zh)}
                        className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-rose-600 hover:bg-rose-50 flex items-center justify-center text-sm flex-shrink-0"
                      >
                        <Volume2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
