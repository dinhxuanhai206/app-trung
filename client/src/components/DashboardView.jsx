import React from 'react';

export default function DashboardView({ xp, streak, skills }) {
  const statCards = [
    { label: 'Chuỗi Ngày Học', value: `${streak} Ngày`, icon: '🔥', color: 'text-orange-600 bg-orange-50' },
    { label: 'Tổng Điểm XP', value: `${xp} XP`, icon: '⭐', color: 'text-amber-600 bg-amber-50' },
    { label: 'Bài Học Hoàn Thành', value: '2 Bài', icon: '📚', color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Mục Tiêu Hiện Tại', value: 'HSK 1', icon: '🎯', color: 'text-blue-600 bg-blue-50' },
  ];

  const skillBars = [
    { label: '📖 Kỹ năng Đọc hiểu (Reading)', score: skills?.reading || 85, color: 'bg-rose-500' },
    { label: '🎧 Kỹ năng Luyện nghe (Listening)', score: skills?.listening || 70, color: 'bg-blue-500' },
    { label: '🎙️ Kỹ năng Luyện nói AI (Speaking)', score: skills?.speaking || 65, color: 'bg-emerald-500' },
    { label: '✍️ Kỹ năng Luyện viết (Writing)', score: skills?.writing || 60, color: 'bg-amber-500' },
    { label: '🧩 Game Ghép từ vựng (Matching)', score: skills?.matching || 90, color: 'bg-purple-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-slate-100 to-white border border-slate-200 rounded-2xl p-6 flex justify-between items-center shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <span>📊</span> Bảng Điều Khiển & Thống Kê Học Tập
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Tổng quan năng lực 5 kỹ năng, lộ trình thăng hạng HSK và chỉ số chuyên cần.
          </p>
        </div>
        <span className="px-3.5 py-1 rounded-full bg-slate-900 text-white font-bold text-xs">
          HSK Analytics
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statCards.map((card, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold ${card.color}`}>
              {card.icon}
            </div>
            <div>
              <div className="text-xl font-extrabold text-slate-900 leading-tight">{card.value}</div>
              <div className="text-xs text-slate-500 font-medium mt-0.5">{card.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Skill Progress Bars */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-base">Độ Thuần Thục 5 Kỹ Năng Cốt Lõi</h3>
          <div className="space-y-4 pt-2">
            {skillBars.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>{item.label}</span>
                  <span>{item.score}%</span>
                </div>
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-700`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-base">Lộ Trình Cấp Độ HSK</h3>
          <div className="space-y-3 pt-2">
            <div className="p-3.5 rounded-xl bg-rose-50 border-l-4 border-rose-600 flex justify-between items-center">
              <div>
                <strong className="text-sm text-slate-900 block">HSK 1 - Nhập môn</strong>
                <span className="text-xs text-slate-500">150 Từ vựng nền tảng</span>
              </div>
              <span className="text-xs font-bold text-rose-600 bg-white px-2.5 py-1 rounded-full shadow-sm">
                Đang học (80%)
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border-l-4 border-slate-300 flex justify-between items-center opacity-70">
              <div>
                <strong className="text-sm text-slate-700 block">HSK 2 - Sơ cấp</strong>
                <span className="text-xs text-slate-400">300 Từ vựng giao tiếp</span>
              </div>
              <span className="text-xs font-semibold text-slate-500">Sắp mở khóa</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border-l-4 border-slate-300 flex justify-between items-center opacity-50">
              <div>
                <strong className="text-sm text-slate-700 block">HSK 3 - Trung cấp</strong>
                <span className="text-xs text-slate-400">600 Từ vựng đời sống</span>
              </div>
              <span className="text-xs font-semibold text-slate-400">Chưa mở</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
