import React, { useState, useMemo, useEffect } from 'react';
import {
  Compass,
  Star,
  RotateCcw,
  Volume2,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Sparkles,
  BookOpen,
  Trash2,
  Layers,
  Search,
  Shuffle,
  Filter,
  Award
} from 'lucide-react';
import { FORMULA_GRAMMAR_DATABASE, FORMULA_CATEGORIES } from '../data/formulaData';

export default function FormulaView({ onGainXP }) {
  const [selectedCatId, setSelectedCatId] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [patternIdx, setPatternIdx] = useState(0);
  const [challengeIdx, setChallengeIdx] = useState(0);
  const [userSlots, setUserSlots] = useState([]);
  const [feedback, setFeedback] = useState(null); // { isCorrect: boolean, msg: string, analysis: string }
  const [score, setScore] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  // Filter formulas based on category and search query
  const filteredFormulas = useMemo(() => {
    return FORMULA_GRAMMAR_DATABASE.filter((item) => {
      const matchCat = selectedCatId === 'all' || item.catId === selectedCatId;
      const matchSearch =
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.challenges[0]?.vi && item.challenges[0].vi.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [selectedCatId, searchQuery]);

  // Current active formula
  const formula = filteredFormulas[patternIdx] || filteredFormulas[0] || FORMULA_GRAMMAR_DATABASE[0];
  const challenge = formula?.challenges?.[challengeIdx] || formula?.challenges?.[0] || {
    vi: 'Tôi là kỹ sư công ty phần mềm.',
    hanziFull: '我是软件公司的工程师。',
    pinyinFull: 'Wǒ shì ruǎnjiàn gōngsī de gōngchéngshī.',
    slots: [
      { label: 'Chủ ngữ', expected: '我', pinyin: 'wǒ' },
      { label: 'Là', expected: '是', pinyin: 'shì', isFixed: true },
      { label: 'Tân ngữ', expected: '软件公司的工程师', pinyin: 'ruǎnjiàn gōngsī de gōngchéngshī' },
    ],
    pool: [
      { hanzi: '我', pinyin: 'wǒ', vi: 'Tôi' },
      { hanzi: '软件公司的工程师', pinyin: 'ruǎnjiàn gōngsī de gōngchéngshī', vi: 'Kỹ sư phần mềm' },
    ],
    analysis: 'Chủ ngữ 我 kết hợp với động từ 是 và tân ngữ xác định.',
  };

  // Reset slots when formula or challenge changes
  useEffect(() => {
    if (challenge && challenge.slots) {
      setUserSlots(challenge.slots.map((s) => (s.isFixed ? s.expected : null)));
    } else {
      setUserSlots([]);
    }
    setFeedback(null);
  }, [formula?.id, challengeIdx]);

  // Reset pattern index when filter changes
  useEffect(() => {
    setPatternIdx(0);
    setChallengeIdx(0);
  }, [selectedCatId, searchQuery]);

  const speakChinese = (text) => {
    if ('speechSynthesis' in window && text) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  };

  const handleSelectToken = (token) => {
    const isPlaced = userSlots.includes(token.hanzi);
    if (isPlaced) return;

    // Find first empty non-fixed slot
    const emptyIdx = userSlots.findIndex((s, i) => !challenge.slots[i].isFixed && s === null);
    if (emptyIdx !== -1) {
      const nextSlots = [...userSlots];
      nextSlots[emptyIdx] = token.hanzi;
      setUserSlots(nextSlots);
    }
  };

  const handleClearSlot = (slotIdx) => {
    if (challenge.slots[slotIdx].isFixed) return;
    const nextSlots = [...userSlots];
    nextSlots[slotIdx] = null;
    setUserSlots(nextSlots);
  };

  const handleClearAll = () => {
    setUserSlots(challenge.slots.map((s) => (s.isFixed ? s.expected : null)));
    setFeedback(null);
  };

  const handleCheck = () => {
    if (userSlots.some((s) => s === null)) {
      alert('Vui lòng điền đủ các thành phần vào câu!');
      return;
    }

    const isMatch = challenge.slots.every((s, i) => s.expected === userSlots[i]);
    if (isMatch) {
      setFeedback({
        isCorrect: true,
        msg: 'Xuất Sắc! Bạn đã ghép đúng công thức ngữ pháp chuẩn xác!',
        sentence: challenge.hanziFull,
        analysis: challenge.analysis,
      });
      setScore((s) => s + 25);
      setCompletedCount((c) => c + 1);
      if (onGainXP) onGainXP(25, `Ghép đúng công thức: ${formula.name}`);
      speakChinese(challenge.hanziFull);
    } else {
      setFeedback({
        isCorrect: false,
        msg: 'Thứ tự các thành phần chưa đúng công thức ngữ pháp!',
        sentence: challenge.hanziFull,
        analysis: challenge.analysis,
      });
    }
  };

  const handleNextChallenge = () => {
    if (challengeIdx < (formula?.challenges?.length || 1) - 1) {
      setChallengeIdx((i) => i + 1);
    } else {
      // Loop to next formula in filtered list
      const nextP = (patternIdx + 1) % filteredFormulas.length;
      setPatternIdx(nextP);
      setChallengeIdx(0);
    }
  };

  const handleRandomFormula = () => {
    if (filteredFormulas.length <= 1) return;
    let nextIdx;
    do {
      nextIdx = Math.floor(Math.random() * filteredFormulas.length);
    } while (nextIdx === patternIdx && filteredFormulas.length > 1);
    setPatternIdx(nextIdx);
    setChallengeIdx(0);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* 1. Header Banner Studio */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-sky-900/30">
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-sky-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-sky-600 text-white text-xs font-black tracking-wider uppercase shadow-md flex items-center gap-1.5">
                <Compass size={14} />
                Grammar Master 200
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold backdrop-blur-md border border-amber-500/30">
                200 Công Thức Ghép Câu (20 Nhóm Ngữ Pháp HSK 1 - 5)
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-semibold backdrop-blur-md border border-white/10">
                Kèm Bài Ghép Câu Thực Tế
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
              <Layers className="text-sky-400" size={28} />
              <span>Thư Viện 200 Công Thức Ghép Câu Tiếng Trung (句型造句)</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Làm chủ toàn diện trật tự ngữ pháp SVO: Khẳng định, Phủ định, So sánh 比, Câu chữ 把, Bị động 被, Bổ ngữ kết quả/xu hướng/khả năng, Câu phức điều kiện và Khẩu ngữ đời sống.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 self-start md:self-auto">
            <div className="text-center px-3 border-r border-white/10">
              <div className="text-xl sm:text-2xl font-black text-amber-400">
                {score} XP
              </div>
              <div className="text-[10px] text-slate-300 uppercase font-semibold">Điểm tích lũy</div>
            </div>
            <div className="text-center px-3">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">
                {completedCount}
              </div>
              <div className="text-[10px] text-slate-300 uppercase font-semibold">Đã hoàn thành</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Search & Category Filter Toolbar */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Search bar */}
          <div className="relative w-full sm:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm công thức (ví dụ: 比, 把, 不但, 虽然...)"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handleRandomFormula}
              className="px-3.5 py-2 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-2xs"
              title="Luyện phản xạ với một công thức ngẫu nhiên"
            >
              <Shuffle size={14} className="text-amber-600" />
              <span>Công thức ngẫu nhiên</span>
            </button>

            <button
              onClick={handleClearAll}
              className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium text-xs transition-all flex items-center gap-1.5"
            >
              <RotateCcw size={14} />
              <span>Làm lại</span>
            </button>
          </div>
        </div>

        {/* Category Pills (20 categories) */}
        <div className="pt-2 border-t border-slate-100 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
            <span className="flex items-center gap-1.5 uppercase tracking-wider text-slate-400 text-[11px]">
              <Filter size={13} className="text-sky-600" />
              <span>Chọn Nhóm Ngữ Pháp (20 Nhóm):</span>
            </span>
            <span className="text-sky-600">
              Hiển thị {filteredFormulas.length} / {FORMULA_GRAMMAR_DATABASE.length} công thức
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCatId('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCatId === 'all'
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Tất cả (200)
            </button>
            {FORMULA_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCatId(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCatId === cat.id
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* Formula Pills in Active Filter */}
        <div className="pt-2 border-t border-slate-100 space-y-1.5">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Chọn công thức để luyện tập ({patternIdx + 1}/{filteredFormulas.length}):
          </div>
          <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto pr-1">
            {filteredFormulas.map((item, idx) => {
              const isCur = idx === patternIdx;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setPatternIdx(idx);
                    setChallengeIdx(0);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isCur
                      ? 'bg-slate-900 text-white shadow-sm ring-2 ring-sky-400'
                      : 'bg-slate-100 text-slate-700 hover:bg-sky-50 hover:text-sky-700 border border-slate-200'
                  }`}
                  title={`${item.name} (${item.tag})`}
                >
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-black ${
                    isCur ? 'bg-sky-500 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {item.level}
                  </span>
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Active Formula Explanation Card */}
      {formula && (
        <div className="bg-gradient-to-r from-sky-50/70 via-blue-50/50 to-indigo-50/50 border border-sky-200/80 rounded-3xl p-6 shadow-2xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-sky-200 text-sky-900 text-xs font-black rounded-lg uppercase shadow-2xs">
                {formula.level}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {formula.category}
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Cấu trúc: <span className="text-sky-700 font-black">{formula.name}</span> ({formula.tag})
              </h3>
            </div>
            <button
              onClick={() => speakChinese(challenge.hanziFull)}
              className="px-3.5 py-2 bg-white text-sky-700 hover:bg-sky-100 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 border border-sky-200 transition-all shadow-2xs active:scale-95"
            >
              <Volume2 size={16} className="text-sky-600" />
              <span>Nghe câu mẫu chuẩn</span>
            </button>
          </div>

          {/* Formula Colored Diagram */}
          <div className="flex flex-wrap items-center gap-2 p-3.5 bg-white/90 backdrop-blur-sm rounded-2xl border border-sky-200">
            {formula.diagram.map((d, i) =>
              d.type === 'plus' ? (
                <span key={i} className="text-slate-400 font-bold text-lg px-0.5">
                  +
                </span>
              ) : (
                <span
                  key={i}
                  className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold ${
                    d.type === 'fixed'
                      ? 'bg-rose-100 text-rose-800 border border-rose-200 shadow-2xs'
                      : 'bg-sky-100 text-sky-900 border border-sky-200'
                  }`}
                >
                  {d.text}
                </span>
              )
            )}
          </div>

          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            <strong className="text-slate-900">Ý nghĩa & ngữ cảnh: </strong>
            {formula.description}
          </p>
        </div>
      )}

      {/* 4. Interactive Sentence Building Challenge Arena */}
      {challenge && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="pb-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Layers size={14} className="text-sky-600" />
                <span>Thực Hành Ghép Câu Thực Tế ({challengeIdx + 1}/{formula?.challenges?.length || 1}):</span>
              </div>
              <div className="text-lg sm:text-xl font-bold text-slate-900">
                "{challenge.vi}"
              </div>
            </div>
            <span className="text-xs font-medium text-slate-400 italic">
              Nhấp từ bên dưới để điền vào ô trống theo công thức
            </span>
          </div>

          {/* Slots Tray */}
          <div className="flex flex-wrap gap-3 min-h-[95px]">
            {challenge.slots.map((slot, sIdx) => {
              const val = userSlots[sIdx];
              const isFixed = slot.isFixed;
              return (
                <div
                  key={sIdx}
                  onClick={() => handleClearSlot(sIdx)}
                  className={`flex-1 min-w-[130px] p-3.5 rounded-2xl border-2 flex flex-col justify-between items-center transition-all ${
                    isFixed
                      ? 'bg-rose-50/80 border-rose-200 cursor-default'
                      : val
                      ? 'bg-emerald-50 border-emerald-400 hover:bg-rose-50 hover:border-rose-300 cursor-pointer shadow-xs'
                      : 'bg-slate-50 border-dashed border-slate-300 hover:border-sky-400 hover:bg-sky-50/40 cursor-pointer'
                  }`}
                  title={val && !isFixed ? 'Nhấp để gỡ từ này' : ''}
                >
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                    {slot.label}
                  </span>
                  <div className="text-center my-1">
                    {val ? (
                      <>
                        <div className="text-xl sm:text-2xl font-bold text-slate-900 chinese-font">
                          {val}
                        </div>
                        <div className="text-xs text-sky-600 font-medium">{slot.pinyin || ''}</div>
                      </>
                    ) : (
                      <div className="text-xs text-slate-400 italic py-2">[ Trống ]</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Word Pool */}
          <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex justify-between items-center text-xs font-bold text-slate-500">
              <span className="flex items-center gap-1.5">
                <BookOpen size={14} className="text-slate-600" />
                <span>Ngân hàng từ vựng (Nhấp vào từ để đưa vào câu):</span>
              </span>
              <button
                onClick={handleClearAll}
                className="text-rose-600 hover:underline flex items-center gap-1 transition-all"
              >
                <Trash2 size={13} />
                <span>Xóa làm lại câu này</span>
              </button>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {challenge.pool.map((t, idx) => {
                const isSelected = userSlots.includes(t.hanzi);
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectToken(t)}
                    disabled={isSelected}
                    className={`p-3 rounded-2xl border flex flex-col items-center transition-all ${
                      isSelected
                        ? 'opacity-40 border-dashed border-slate-300 bg-slate-100 cursor-not-allowed'
                        : 'bg-white border-slate-200 shadow-xs hover:border-sky-500 hover:shadow-md hover:-translate-y-0.5 active:scale-95'
                    }`}
                  >
                    <span className="text-[10px] text-slate-400">{t.pinyin}</span>
                    <span className="text-lg sm:text-xl font-bold text-slate-800 chinese-font my-0.5">
                      {t.hanzi}
                    </span>
                    <span className="text-[11px] text-slate-600 font-medium">{t.vi}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback Result Card */}
          {feedback && (
            <div
              className={`p-5 rounded-2xl border flex items-start gap-3.5 animate-fadeIn ${
                feedback.isCorrect
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-rose-50 border-rose-300 text-rose-950'
              }`}
            >
              <div className="mt-0.5 flex-shrink-0">
                {feedback.isCorrect ? (
                  <CheckCircle2 size={24} className="text-emerald-600" />
                ) : (
                  <AlertCircle size={24} className="text-rose-600" />
                )}
              </div>
              <div className="space-y-1">
                <div className="font-bold text-base">{feedback.msg}</div>
                <div className="text-xl font-bold text-slate-900 chinese-font">
                  {feedback.sentence}
                </div>
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                  {feedback.analysis}
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleCheck}
                className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-rose-600/25 transition-all flex items-center gap-2 active:scale-95"
              >
                <CheckCircle2 size={18} />
                <span>Kiểm tra đáp án</span>
              </button>

              <button
                onClick={() => speakChinese(challenge.hanziFull)}
                className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2"
              >
                <Volume2 size={18} />
                <span>Nghe câu chuẩn</span>
              </button>
            </div>

            <button
              onClick={handleNextChallenge}
              className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-sky-600/25 flex items-center gap-2 active:scale-95"
            >
              <span>Công thức tiếp theo</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
