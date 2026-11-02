import React, { useState, useMemo, useEffect } from 'react';
import {
  Languages,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Volume2,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Award,
  Layers,
  ArrowRight,
  PenTool,
  Puzzle,
  Keyboard,
  HelpCircle,
  Zap
} from 'lucide-react';
import { TRANSLATION_LEVELS, TRANSLATION_EXERCISES } from '../data/translationExercisesData';

export default function TranslationExerciseView({ onGainXP }) {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [inputMode, setInputMode] = useState('blocks'); // 'blocks' | 'typing'
  
  // Filter exercises by level
  const filteredExercises = useMemo(() => {
    if (selectedLevel === 'all') return TRANSLATION_EXERCISES;
    return TRANSLATION_EXERCISES.filter((item) => item.level === selectedLevel);
  }, [selectedLevel]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentExercise = filteredExercises[currentIndex] || filteredExercises[0];

  // User input states
  const [selectedTokens, setSelectedTokens] = useState([]);
  const [typedInput, setTypedInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [checkResult, setCheckResult] = useState(null); // null | 'correct' | 'incorrect'
  const [streak, setStreak] = useState(0);
  const [completedIds, setCompletedIds] = useState(new Set());

  // Available tokens for block mode (tokens in pool minus those already selected)
  const availableTokens = useMemo(() => {
    if (!currentExercise || !currentExercise.tokensPool) return [];
    // Count occurrences in selectedTokens
    const usedCounts = {};
    selectedTokens.forEach((t) => {
      usedCounts[t] = (usedCounts[t] || 0) + 1;
    });

    return currentExercise.tokensPool.filter((t) => {
      if (!usedCounts[t]) return true;
      usedCounts[t] -= 1;
      return false;
    });
  }, [currentExercise, selectedTokens]);

  // Reset exercise state on question change
  useEffect(() => {
    setSelectedTokens([]);
    setTypedInput('');
    setShowHint(false);
    setCheckResult(null);
  }, [currentIndex, selectedLevel]);

  const speakText = (text) => {
    if ('speechSynthesis' in window && text) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  };

  const handleSelectToken = (token) => {
    if (checkResult === 'correct') return;
    setSelectedTokens((prev) => [...prev, token]);
  };

  const handleRemoveToken = (indexToRemove) => {
    if (checkResult === 'correct') return;
    setSelectedTokens((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleClearAllTokens = () => {
    if (checkResult === 'correct') return;
    setSelectedTokens([]);
    setCheckResult(null);
  };

  const handleCheckAnswer = () => {
    if (!currentExercise) return;

    let userSentence = '';
    if (inputMode === 'blocks') {
      userSentence = selectedTokens.join('');
    } else {
      userSentence = typedInput.trim();
    }

    const cleanUser = userSentence.replace(/[，。！？\s]/g, '').toLowerCase();
    const cleanTarget = currentExercise.target.replace(/[，。！？\s]/g, '').toLowerCase();

    const isMatch = cleanUser === cleanTarget;
    if (isMatch) {
      setCheckResult('correct');
      setStreak((prev) => prev + 1);
      setCompletedIds((prev) => new Set([...prev, currentExercise.id]));
      speakText(currentExercise.target);
      onGainXP(15, `Hoàn thành câu dịch: ${currentExercise.topic}`);
    } else {
      setCheckResult('incorrect');
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < filteredExercises.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="space-y-6 pb-16 animate-fadeIn">
      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-teal-600 via-indigo-600 to-rose-600 text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-teal-900/10 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider mb-2">
              <Languages size={13} />
              <span>CHUYÊN ĐỀ BÀI TẬP LUYỆN DỊCH VIỆT - TRUNG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Luyện Dịch Câu Chuẩn Ngữ Pháp
            </h2>
            <p className="text-white/85 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              Rèn luyện tư duy chuyển đổi ngôn ngữ phản xạ tự nhiên từ đơn giản đến nâng cao (Câu chữ 把, so sánh 比, đàm phán thương vụ...).
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="px-4 py-2 rounded-2xl bg-white/20 backdrop-blur-md font-bold text-xs flex items-center gap-2 border border-white/20">
              <Zap size={14} className="text-amber-300" />
              <span>Chuỗi đúng: {streak} câu liên tiếp</span>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-amber-400 text-slate-900 font-extrabold text-xs shadow-sm flex items-center gap-1.5">
              <Award size={14} />
              <span>Đã hoàn thành: {completedIds.size} / {filteredExercises.length} câu</span>
            </div>
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Level Filter & Input Mode Selector */}
      <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Level Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {TRANSLATION_LEVELS.map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => {
                setSelectedLevel(lvl.id);
                setCurrentIndex(0);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedLevel === lvl.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>{lvl.icon}</span>
              <span>{lvl.name.split(' (')[0]}</span>
            </button>
          ))}
        </div>

        {/* Input Mode Toggle (Blocks vs Keyboard) */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl self-start sm:self-auto border border-slate-200">
          <button
            onClick={() => setInputMode('blocks')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              inputMode === 'blocks'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Puzzle size={14} />
            <span>Ghép Thẻ Từ</span>
          </button>
          <button
            onClick={() => setInputMode('typing')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              inputMode === 'typing'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Keyboard size={14} />
            <span>Tự Gõ Chữ</span>
          </button>
        </div>
      </div>

      {/* Main Exercise Card */}
      {currentExercise && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          {/* Question Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-black uppercase tracking-wider border border-indigo-200">
                Câu {currentIndex + 1} / {filteredExercises.length}
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                Chủ đề: {currentExercise.topic}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-200">
                {currentExercise.level === 'basic' ? 'Cơ bản' : currentExercise.level === 'intermediate' ? 'Trung cấp' : 'Nâng cao'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevQuestion}
                disabled={currentIndex === 0}
                className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 disabled:opacity-40 transition-all"
                title="Câu trước"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNextQuestion}
                disabled={currentIndex === filteredExercises.length - 1}
                className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 disabled:opacity-40 transition-all"
                title="Câu kế tiếp"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Prompt Sentence Area (Câu Tiếng Việt cần dịch) */}
          <div className="bg-gradient-to-r from-slate-50 to-indigo-50/40 p-5 sm:p-6 rounded-3xl border border-slate-200/80 space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Languages size={14} className="text-indigo-600" />
              <span>Hãy dịch câu tiếng Việt sau sang tiếng Trung:</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              "{currentExercise.prompt}"
            </div>
          </div>

          {/* User Answer Workspace */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Câu dịch của bạn:
              </span>
              {selectedTokens.length > 0 && inputMode === 'blocks' && (
                <button
                  onClick={handleClearAllTokens}
                  className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 transition-colors"
                >
                  <RotateCcw size={12} />
                  <span>Xóa làm lại</span>
                </button>
              )}
            </div>

            {/* Block Mode Workspace */}
            {inputMode === 'blocks' ? (
              <div
                className={`min-h-[76px] p-4 rounded-2xl border-2 border-dashed flex flex-wrap items-center gap-2 transition-all ${
                  selectedTokens.length === 0
                    ? 'border-slate-300 bg-slate-50/60 justify-center text-slate-400 text-sm font-medium'
                    : 'border-indigo-400 bg-indigo-50/30'
                }`}
              >
                {selectedTokens.length === 0 ? (
                  <span>Nhấp vào các thẻ chữ bên dưới theo thứ tự để ghép thành câu dịch hoàn chỉnh</span>
                ) : (
                  selectedTokens.map((tok, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleRemoveToken(idx)}
                      className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-rose-600 text-white font-black text-lg chinese-font shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 group"
                      title="Bấm để gỡ từ này"
                    >
                      <span>{tok}</span>
                      <span className="text-xs text-white/60 group-hover:text-white">×</span>
                    </button>
                  ))
                )}
              </div>
            ) : (
              /* Typing Mode Input */
              <div className="relative">
                <input
                  type="text"
                  value={typedInput}
                  onChange={(e) => setTypedInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleCheckAnswer();
                  }}
                  placeholder="Gõ bản dịch bằng chữ Hán hoặc Pinyin tại đây... (Ví dụ: 很高兴认识你)"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-indigo-200 focus:border-indigo-600 focus:bg-white bg-slate-50 text-lg font-bold chinese-font outline-none transition-all shadow-inner"
                />
              </div>
            )}
          </div>

          {/* Tokens Pool (Only in Blocks Mode) */}
          {inputMode === 'blocks' && (
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Ngân hàng thẻ từ (Nhấp chọn từ):
              </span>
              <div className="flex flex-wrap gap-2.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                {availableTokens.map((tok, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectToken(tok)}
                    className="px-4 py-2.5 rounded-xl bg-white hover:bg-indigo-50 border-2 border-slate-200 hover:border-indigo-500 text-slate-800 hover:text-indigo-600 font-bold text-lg chinese-font shadow-2xs transition-all active:scale-95 hover:-translate-y-0.5"
                  >
                    {tok}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowHint(!showHint)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all ${
                  showHint
                    ? 'bg-amber-100 text-amber-900 border-amber-300'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200'
                }`}
              >
                <Lightbulb size={14} className="text-amber-500" />
                <span>{showHint ? 'Ẩn gợi ý' : 'Xem gợi ý ngữ pháp'}</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCheckAnswer}
                disabled={
                  inputMode === 'blocks'
                    ? selectedTokens.length === 0
                    : !typedInput.trim()
                }
                className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-extrabold text-sm shadow-md shadow-indigo-600/30 transition-all flex items-center gap-2 active:scale-95"
              >
                <CheckCircle2 size={16} />
                <span>Kiểm tra đáp án</span>
              </button>

              <button
                onClick={handleNextQuestion}
                className="px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all flex items-center gap-1.5"
              >
                <span>Câu tiếp theo</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Grammar Hint Box */}
          {showHint && currentExercise.hint && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start gap-3 animate-fadeIn">
              <Lightbulb size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold mb-0.5">Gợi ý cấu trúc câu:</strong>
                <span>{currentExercise.hint}</span>
              </div>
            </div>
          )}

          {/* Feedback Card (Result after Check) */}
          {checkResult && (
            <div
              className={`p-5 sm:p-6 rounded-3xl border-2 transition-all space-y-3 animate-scaleUp ${
                checkResult === 'correct'
                  ? 'bg-emerald-50/80 border-emerald-400 text-emerald-950'
                  : 'bg-rose-50/80 border-rose-400 text-rose-950'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-black text-base sm:text-lg">
                  {checkResult === 'correct' ? (
                    <>
                      <CheckCircle2 size={22} className="text-emerald-600" />
                      <span>Chính xác tuyệt đối! (+15 XP)</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle size={22} className="text-rose-600" />
                      <span>Chưa chuẩn xác, hãy quan sát đáp án bên dưới:</span>
                    </>
                  )}
                </div>

                <button
                  onClick={() => speakText(currentExercise.target)}
                  className="px-3 py-1.5 rounded-xl bg-white text-slate-800 hover:text-indigo-600 font-bold text-xs flex items-center gap-1.5 shadow-2xs border border-slate-200"
                  title="Nghe phát âm chuẩn câu này"
                >
                  <Volume2 size={14} className="text-indigo-600" />
                  <span>Nghe câu chuẩn</span>
                </button>
              </div>

              {/* Standard Target Translation */}
              <div className="bg-white/90 p-4 rounded-2xl border border-slate-200/60 space-y-1">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Đáp án chuẩn tiếng Trung:
                </div>
                <div className="text-2xl font-black text-slate-900 chinese-font">
                  {currentExercise.target}
                </div>
                <div className="text-sm font-bold text-amber-600">
                  {currentExercise.pinyin}
                </div>
              </div>

              {/* Grammar & Translation Explanation */}
              {currentExercise.explanation && (
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white/70 p-3.5 rounded-2xl border border-slate-100">
                  <strong>Phân tích ngữ pháp:</strong> {currentExercise.explanation}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
