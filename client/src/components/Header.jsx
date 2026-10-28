import React from 'react';

export default function Header({
  lessons,
  currentLessonIndex,
  setCurrentLessonIndex,
  showPinyin,
  setShowPinyin,
  xp,
  streak,
  onOpenMenu,
}) {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-3 sm:px-6 md:px-8 py-2.5 sm:py-3.5 flex items-center justify-between shadow-2xs gap-2">
      {/* Left side: Hamburger button (mobile) + Lesson Selector */}
      <div className="flex items-center gap-2 sm:gap-4 min-w-0">
        {onOpenMenu && (
          <button
            onClick={onOpenMenu}
            className="lg:hidden w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center text-lg flex-shrink-0 transition-all active:scale-95"
            title="Mở menu"
          >
            ☰
          </button>
        )}

        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <label htmlFor="lessonSelect" className="hidden sm:inline text-xs font-semibold text-slate-500 flex-shrink-0">
            Bài học:
          </label>
          <select
            id="lessonSelect"
            value={currentLessonIndex}
            onChange={(e) => setCurrentLessonIndex(Number(e.target.value))}
            className="px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-xs sm:text-sm font-semibold text-slate-800 outline-none focus:border-rose-500 max-w-[140px] xs:max-w-[180px] sm:max-w-xs truncate cursor-pointer transition-colors shadow-2xs"
          >
            {lessons.map((lesson, idx) => (
              <option key={lesson.id} value={idx}>
                [{lesson.level}] {lesson.title.split(' (')[0]}
              </option>
            ))}
          </select>
        </div>

        {/* Pinyin Toggle */}
        <button
          onClick={() => setShowPinyin(!showPinyin)}
          className={`flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all flex-shrink-0 active:scale-95 ${
            showPinyin
              ? 'bg-rose-50 border-rose-300 text-rose-600 shadow-2xs'
              : 'bg-slate-100 border-slate-300 text-slate-600'
          }`}
          title="Bật/Tắt hiển thị phiên âm Pinyin"
        >
          <span>🔤</span>
          <span className="hidden sm:inline">{showPinyin ? 'Hiện Pinyin' : 'Ẩn Pinyin'}</span>
        </button>
      </div>

      {/* Right side: Streak & XP Pills */}
      <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
        <div
          className="flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs sm:text-sm font-bold shadow-2xs"
          title="Chuỗi ngày học"
        >
          <span>🔥</span>
          <span>{streak}<span className="hidden xs:inline"> ngày</span></span>
        </div>
        <div
          className="flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-xs sm:text-sm font-bold shadow-2xs"
          title="Điểm kinh nghiệm"
        >
          <span>⭐</span>
          <span>{xp}<span className="hidden xs:inline"> XP</span></span>
        </div>
      </div>
    </header>
  );
}
