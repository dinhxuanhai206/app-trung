import React, { useState } from 'react';
import { FORMULA_GRAMMAR_DATABASE } from '../data/formulaData';

export default function FormulaView({ onGainXP }) {
  const [patternIdx, setPatternIdx] = useState(0);
  const [challengeIdx, setChallengeIdx] = useState(0);
  const [userSlots, setUserSlots] = useState([]);
  const [feedback, setFeedback] = useState(null); // { isCorrect: boolean, msg: string, analysis: string }
  const [score, setScore] = useState(0);

  const formula = FORMULA_GRAMMAR_DATABASE[patternIdx] || FORMULA_GRAMMAR_DATABASE[0];
  const challenge = formula.challenges[challengeIdx] || formula.challenges[0];

  // Initialize slots when challenge changes
  React.useEffect(() => {
    setUserSlots(challenge.slots.map((s) => (s.isFixed ? s.expected : null)));
    setFeedback(null);
  }, [patternIdx, challengeIdx]);

  const speakChinese = (text) => {
    if ('speechSynthesis' in window) {
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

    const userHanzi = userSlots.join('');
    const targetClean = challenge.hanziFull.replace(/[\s\p{P}]/gu, '');
    const userClean = userHanzi.replace(/[\s\p{P}]/gu, '');

    if (userClean === targetClean) {
      setFeedback({
        isCorrect: true,
        msg: '🎉 Chúc Mừng! Bạn đã ghép đúng cấu trúc ngữ pháp chuẩn xác!',
        sentence: `${challenge.hanziFull} (${challenge.pinyinFull})`,
        analysis: challenge.analysis,
      });
      setScore((prev) => prev + 25);
      if (onGainXP) onGainXP(25, 'Ghép câu theo công thức ngữ pháp');
      speakChinese(challenge.hanziFull);
    } else {
      setFeedback({
        isCorrect: false,
        msg: '⚠️ Thứ tự các từ chưa đúng công thức ngữ pháp!',
        sentence: `Câu của bạn: ${userHanzi}`,
        analysis: `${challenge.analysis} (Đáp án chuẩn: ${challenge.hanziFull})`,
      });
    }
  };

  const handleNextChallenge = () => {
    setChallengeIdx((prev) => (prev + 1) % formula.challenges.length);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <span className="px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-full">
            NGỮ PHÁP ỨNG DỤNG
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            📐 Ghép Câu Theo Công Thức Ngữ Pháp (句型造句)
          </h2>
          <p className="text-slate-500 text-sm">
            Nắm chắc trật tự từ tiếng Trung: S + 是 + N, A + 比 + B + Adj, S + 在 + Địa điểm + V...
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-4 py-2 bg-amber-50 text-amber-700 font-bold rounded-xl border border-amber-200">
            ⭐ {score} Điểm
          </span>
          <button
            onClick={handleClearAll}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium text-sm transition-all"
          >
            🔄 Làm lại
          </button>
        </div>
      </div>

      {/* Formula Selector Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {FORMULA_GRAMMAR_DATABASE.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => {
              setPatternIdx(idx);
              setChallengeIdx(0);
            }}
            className={`px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
              idx === patternIdx
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-sky-50 hover:text-sky-600'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Active Formula Explanation Card */}
      <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-sky-200 text-sky-800 text-xs font-extrabold rounded-lg">
              {formula.level}
            </span>
            <h3 className="text-lg font-bold text-slate-800">
              Cấu trúc: {formula.name} ({formula.tag})
            </h3>
          </div>
          <button
            onClick={() => speakChinese(challenge.hanziFull)}
            className="px-3 py-1.5 bg-white text-sky-600 hover:bg-sky-100 rounded-lg text-sm font-semibold flex items-center gap-1 border border-sky-200 transition-all"
          >
            🔊 Nghe mẫu
          </button>
        </div>

        {/* Diagram */}
        <div className="flex flex-wrap items-center gap-2 p-3 bg-white rounded-xl border border-sky-200 mb-3">
          {formula.diagram.map((d, i) =>
            d.type === 'plus' ? (
              <span key={i} className="text-slate-400 font-bold text-lg">
                +
              </span>
            ) : (
              <span
                key={i}
                className={`px-3 py-1.5 rounded-lg text-sm font-bold ${
                  d.type === 'fixed'
                    ? 'bg-rose-100 text-rose-700 border border-rose-200'
                    : 'bg-sky-100 text-sky-800 border border-sky-200'
                }`}
              >
                {d.text}
              </span>
            )
          )}
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">{formula.description}</p>
      </div>

      {/* Challenge Arena Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
            🎯 Thử Thách Ghép Câu ({challengeIdx + 1}/{formula.challenges.length}):
          </div>
          <div className="text-xl font-bold text-slate-900">"{challenge.vi}"</div>
        </div>

        {/* Slots Tray */}
        <div className="flex flex-wrap gap-3 min-h-[90px]">
          {challenge.slots.map((slot, sIdx) => {
            const val = userSlots[sIdx];
            const isFixed = slot.isFixed;
            return (
              <div
                key={sIdx}
                onClick={() => handleClearSlot(sIdx)}
                className={`flex-1 min-w-[140px] p-4 rounded-xl border-2 flex flex-col justify-between items-center transition-all cursor-pointer ${
                  isFixed
                    ? 'bg-rose-50 border-rose-200 cursor-default'
                    : val
                    ? 'bg-emerald-50 border-emerald-400 hover:bg-rose-50 hover:border-rose-300'
                    : 'bg-slate-50 border-dashed border-slate-300 hover:border-sky-400 hover:bg-sky-50/40'
                }`}
                title={val && !isFixed ? 'Nhấp để gỡ từ này' : ''}
              >
                <span className="text-[11px] font-bold text-slate-400 uppercase">{slot.label}</span>
                <div className="text-center my-1">
                  {val ? (
                    <>
                      <div className="text-2xl font-bold text-slate-900 chinese-font">{val}</div>
                      <div className="text-xs text-sky-600 font-medium">{slot.pinyin || ''}</div>
                    </>
                  ) : (
                    <div className="text-xs text-slate-400 italic py-2">[ Nhấp từ bên dưới ]</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Word Pool */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
          <div className="flex justify-between items-center text-xs font-bold text-slate-500">
            <span>🔤 Ngân hàng từ vựng (Nhấp vào từ để đưa vào ô):</span>
            <button onClick={handleClearAll} className="text-rose-600 hover:underline">
              ✕ Xóa tất cả
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            {challenge.pool.map((t, idx) => {
              const isSelected = userSlots.includes(t.hanzi);
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectToken(t)}
                  disabled={isSelected}
                  className={`p-3 rounded-xl border flex flex-col items-center transition-all ${
                    isSelected
                      ? 'opacity-40 border-dashed border-slate-300 bg-slate-100 cursor-not-allowed'
                      : 'bg-white border-slate-200 shadow-sm hover:border-sky-500 hover:-translate-y-0.5'
                  }`}
                >
                  <span className="text-[11px] text-slate-400">{t.pinyin}</span>
                  <span className="text-xl font-bold text-slate-800 chinese-font">{t.hanzi}</span>
                  <span className="text-[10px] text-slate-500">{t.vi}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback box */}
        {feedback && (
          <div
            className={`p-5 rounded-xl border ${
              feedback.isCorrect
                ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                : 'bg-rose-50 border-rose-300 text-rose-950'
            }`}
          >
            <div className="font-bold text-base mb-1">{feedback.msg}</div>
            <div className="text-lg font-bold text-slate-900 chinese-font mb-2">
              {feedback.sentence}
            </div>
            <div className="text-sm opacity-90">{feedback.analysis}</div>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={handleCheck}
            className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-lg shadow-rose-600/25 transition-all"
          >
            ✓ Kiểm tra đáp án
          </button>
          <button
            onClick={() => speakChinese(challenge.hanziFull)}
            className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-all"
          >
            🔊 Nghe câu chuẩn
          </button>
          <button
            onClick={handleNextChallenge}
            className="px-5 py-3 bg-sky-50 hover:bg-sky-100 text-sky-700 font-semibold rounded-xl transition-all ml-auto"
          >
            Câu tiếp theo ▶
          </button>
        </div>
      </div>
    </div>
  );
}
