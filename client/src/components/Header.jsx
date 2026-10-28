import React, { useState } from 'react';

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
  const [showRoadmapModal, setShowRoadmapModal] = useState(false);
  const [activeTier, setActiveTier] = useState('all');

  const currentLesson = lessons[currentLessonIndex] || lessons[0];

  // Group tiers
  const tiers = [
    { id: 'all', label: 'Tất cả (20 bài)' },
    { id: 'HSK 1', label: 'Chặng 1: HSK 1 (5 bài)', color: 'from-rose-500 to-rose-600' },
    { id: 'HSK 2', label: 'Chặng 2: HSK 2 (5 bài)', color: 'from-emerald-500 to-emerald-600' },
    { id: 'HSK 3', label: 'Chặng 3: HSK 3 (5 bài)', color: 'from-blue-500 to-blue-600' },
    { id: 'HSK 4', label: 'Chặng 4: HSK 4 & Thương Mại (5 bài)', color: 'from-purple-500 to-purple-600' },
  ];

  const filteredLessons = lessons.map((l, idx) => ({ ...l, originalIdx: idx })).filter((l) => {
    if (activeTier === 'all') return true;
    return l.level === activeTier;
  });

  const getLevelBadgeClass = (level) => {
    if (level === 'HSK 1') return 'bg-rose-100 text-rose-700 border-rose-200';
    if (level === 'HSK 2') return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    if (level === 'HSK 3') return 'bg-blue-100 text-blue-700 border-blue-200';
    return 'bg-purple-100 text-purple-700 border-purple-200';
  };

  return (
    <>
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-3 sm:px-6 md:px-8 py-2.5 sm:py-3.5 flex items-center justify-between shadow-2xs gap-2">
        {/* Left side: Hamburger button (mobile) + Lesson Selector + Roadmap Modal Button */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          {onOpenMenu && (
            <button
              onClick={onOpenMenu}
              className="lg:hidden w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center text-lg flex-shrink-0 transition-all active:scale-95"
              title="Mở menu"
            >
              ☰
            </button>
          )}

          {/* Roadmap Modal Trigger Button */}
          <button
            onClick={() => setShowRoadmapModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95 flex-shrink-0"
            title="Xem toàn bộ lộ trình bài học"
          >
            <span>🗺️</span>
            <span className="hidden xs:inline">Lộ trình bài học</span>
            <span className="bg-white/25 px-1.5 py-0.5 rounded-full text-[10px]">
              {currentLessonIndex + 1}/{lessons.length}
            </span>
          </button>

          {/* Quick Dropdown Selector */}
          <div className="flex items-center gap-1.5 min-w-0">
            <select
              id="lessonSelect"
              value={currentLessonIndex}
              onChange={(e) => setCurrentLessonIndex(Number(e.target.value))}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-xs sm:text-sm font-semibold text-slate-800 outline-none focus:border-rose-500 max-w-[130px] xs:max-w-[170px] sm:max-w-[260px] truncate cursor-pointer transition-colors shadow-2xs"
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
            title="Chuỗi ngày học liên tục"
          >
            <span>🔥</span>
            <span>{streak}<span className="hidden xs:inline"> ngày</span></span>
          </div>
          <div
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-xs sm:text-sm font-bold shadow-2xs"
            title="Điểm kinh nghiệm tích lũy"
          >
            <span>⭐</span>
            <span>{xp}<span className="hidden xs:inline"> XP</span></span>
          </div>
        </div>
      </header>

      {/* ROADMAP MODAL: Full curriculum overview with 20 lessons */}
      {showRoadmapModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between bg-gradient-to-r from-slate-900 via-slate-800 to-rose-900 text-white">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🗺️</span>
                  <h3 className="text-lg sm:text-xl font-bold">Lộ Trình Học Tiếng Trung Toàn Diện (20 Bài Học)</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Đầy đủ lộ trình từ HSK 1 (Sơ cấp), HSK 2 (Giao tiếp), HSK 3 (Đời sống) đến HSK 4 & Thương mại chuyên sâu.
                </p>
              </div>
              <button
                onClick={() => setShowRoadmapModal(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-sm transition-all"
                title="Đóng"
              >
                ✕
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="p-3 sm:p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap gap-1.5 sm:gap-2">
              {tiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setActiveTier(tier.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTier === tier.id
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>

            {/* Lessons List Grid */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 bg-slate-50/50">
              {filteredLessons.map((lesson) => {
                const isSelected = lesson.originalIdx === currentLessonIndex;
                return (
                  <div
                    key={lesson.id}
                    onClick={() => {
                      setCurrentLessonIndex(lesson.originalIdx);
                      setShowRoadmapModal(false);
                    }}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all hover:scale-[1.01] ${
                      isSelected
                        ? 'bg-rose-50/80 border-rose-500 shadow-md ring-2 ring-rose-500/20'
                        : 'bg-white border-slate-200 hover:border-rose-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border uppercase tracking-wider ${getLevelBadgeClass(lesson.level)}`}>
                        {lesson.level}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {lesson.vocabularies?.length || 8} từ vựng • +25 XP
                      </span>
                    </div>

                    <h4 className="font-bold text-sm sm:text-base text-slate-900 mt-2 line-clamp-1">
                      {lesson.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {lesson.description}
                    </p>

                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-rose-600 font-semibold flex items-center gap-1">
                        {isSelected ? '✓ Đang học bài này' : 'Bấm để học bài này →'}
                      </span>
                      <span className="text-slate-400">
                        Bài {lesson.originalIdx + 1}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>💡 Mỗi bài học có đầy đủ Từ vựng chuyên sâu, Ngữ pháp, Nghe, Nói, Đọc, Viết.</span>
              <button
                onClick={() => setShowRoadmapModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
