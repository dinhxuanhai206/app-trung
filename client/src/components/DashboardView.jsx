import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  Star,
  Map,
  BookOpen,
  Headphones,
  Mic,
  PenTool,
  Puzzle,
  Target,
  BarChart3,
  Lightbulb,
  CheckCircle2,
  ChevronRight,
  Calendar,
  Sparkles,
  Zap,
} from 'lucide-react';
import { LESSONS_DATA } from '../data/lessonsData';
import { ROADMAP_STAGES } from '../data/roadmap90DaysData';

export default function DashboardView({ xp, streak, skills }) {
  const totalLessons = LESSONS_DATA.length;
  const totalVocabInCurriculum = LESSONS_DATA.reduce((acc, curr) => acc + (curr.vocabularies?.length || 8), 0);

  const statCards = [
    { label: 'Chuỗi Ngày Học', value: `${streak} Ngày`, icon: Flame, iconColor: 'text-orange-600', color: 'text-orange-600 bg-orange-50 border-orange-200' },
    { label: 'Tổng Điểm XP', value: `${xp} XP`, icon: Star, iconColor: 'text-amber-500', color: 'text-amber-600 bg-amber-50 border-amber-200' },
    { label: 'Tổng Bài Học Khóa', value: `${totalLessons} Bài Học`, icon: Map, iconColor: 'text-rose-600', color: 'text-rose-600 bg-rose-50 border-rose-200' },
    { label: 'Từ Vựng Cốt Lõi', value: `${totalVocabInCurriculum}+ Từ`, icon: BookOpen, iconColor: 'text-emerald-600', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  ];

  const skillBars = [
    { label: 'Kỹ năng Đọc hiểu (Reading)', icon: BookOpen, score: skills?.reading || 85, color: 'bg-rose-500' },
    { label: 'Kỹ năng Luyện nghe (Listening)', icon: Headphones, score: skills?.listening || 75, color: 'bg-blue-500' },
    { label: 'Kỹ năng Luyện nói AI (Speaking)', icon: Mic, score: skills?.speaking || 70, color: 'bg-emerald-500' },
    { label: 'Kỹ năng Luyện viết (Writing)', icon: PenTool, score: skills?.writing || 65, color: 'bg-amber-500' },
    { label: 'Game Ghép từ vựng (Matching)', icon: Puzzle, score: skills?.matching || 90, color: 'bg-purple-500' },
  ];

  const milestones = [
    {
      level: 'HSK 1',
      title: 'Chặng 1: Nền tảng Khởi đầu Vững chắc (Bài 1 - 5)',
      desc: '150 từ vựng căn bản, chào hỏi, gia đình, giờ giấc, hỏi giá mua đồ và chỉ phương hướng.',
      status: 'Đang tiến hành',
      statusClass: 'bg-rose-100 text-rose-700 border-rose-200',
      progress: 80,
      color: 'bg-rose-500',
    },
    {
      level: 'HSK 2',
      title: 'Chặng 2: Tự tin Giao tiếp Hàng ngày (Bài 6 - 10)',
      desc: '300 từ vựng thực chiến, gọi món nhà hàng, thời tiết 4 mùa, tàu điện taxi, sở thích và khám bệnh.',
      status: 'Đang học',
      statusClass: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      progress: 60,
      color: 'bg-emerald-500',
    },
    {
      level: 'HSK 3',
      title: 'Chặng 3: Làm chủ Ngữ cảnh Xã hội (Bài 11 - 15)',
      desc: '600 từ vựng đời sống, khách sạn, Taobao quét mã, thuê nhà, thư viện du học và môi trường công sở.',
      status: 'Sắp hoàn tất',
      statusClass: 'bg-blue-100 text-blue-700 border-blue-200',
      progress: 40,
      color: 'bg-blue-500',
    },
    {
      level: 'HSK 4',
      title: 'Chặng 4: HSK 4 & Tiếng Trung Thương Mại (Bài 16 - 20)',
      desc: '1000+ từ vựng chuyên sâu, phỏng vấn xin việc, đàm phán giá cả, ký hợp đồng, logistics và tiệc chiêu đãi.',
      status: 'Mục tiêu cao cấp',
      statusClass: 'bg-purple-100 text-purple-700 border-purple-200',
      progress: 25,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-rose-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-rose-300 uppercase tracking-wider mb-2">
            HSK Learning Dashboard & Progress
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center gap-2.5">
            <BarChart3 className="text-rose-400" size={28} />
            <span>Bảng Điều Khiển & Tiến Độ Học Tập</span>
          </h2>
          <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
            Hệ thống hóa toàn diện lộ trình 20 bài học chuẩn HSK 1 - HSK 4 & Thương mại, theo dõi 5 kỹ năng then chốt và tích lũy XP thăng hạng.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-4 py-2 rounded-2xl bg-white/10 text-rose-300 font-extrabold text-sm border border-white/10">
            Cấp độ hiện tại: HSK 1 - 2
          </span>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card, idx) => {
          const CardIcon = card.icon;
          return (
            <div
              key={idx}
              className={`p-5 rounded-3xl border shadow-xs flex items-center gap-4 bg-white ${card.color}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-2xs">
                <CardIcon size={24} className={card.iconColor} />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  {card.value}
                </div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">
                  {card.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 90-Day Spoken Chinese Roadmap Banner */}
      <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-rose-950 via-slate-900 to-slate-950 text-white border border-rose-900/40 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 text-[11px] font-black uppercase tracking-wider flex items-center gap-1 shadow-xs">
                <Sparkles size={12} />
                Lộ Trình Ưu Tiên • 3 Tháng
              </span>
              <span className="text-xs text-rose-300 font-bold">15 Phút / Ngày • Chống Nản</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Lộ Trình 90 Ngày Bứt Phá Nghe Nói Giao Tiếp
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Tập trung 100% vào phát âm chuẩn, nhại giọng Shadowing và phản xạ tình huống thực tế. Không tạo áp lực viết chữ Hán, chia đều 3 Tháng giúp bạn kiên trì đến đích.
            </p>

            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="bg-white/5 rounded-xl p-2.5 border border-white/10 text-center">
                <div className="text-[10px] text-slate-400">Tháng 1</div>
                <div className="text-xs font-bold text-rose-300">Bật âm sinh tồn</div>
              </div>
              <div className="bg-white/5 rounded-xl p-2.5 border border-white/10 text-center">
                <div className="text-[10px] text-slate-400">Tháng 2</div>
                <div className="text-xs font-bold text-emerald-300">Phản xạ đời sống</div>
              </div>
              <div className="bg-white/5 rounded-xl p-2.5 border border-white/10 text-center">
                <div className="text-[10px] text-slate-400">Tháng 3</div>
                <div className="text-xs font-bold text-blue-300">Thực chiến độc lập</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-3 flex-shrink-0">
            <Link
              to="/roadmap"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-black text-sm shadow-xl shadow-rose-900/50 transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-95"
            >
              <Calendar size={18} />
              <span>Vào Học Lộ Trình Hôm Nay</span>
              <ChevronRight size={16} />
            </Link>
            <span className="text-[11px] text-slate-400 font-medium">
              Bấm để bắt đầu buổi luyện 15 phút ngay
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 5 Core Skills Proficiency */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-5">
          <div>
            <h3 className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
              <Target size={20} className="text-rose-600" />
              <span>Độ Thuần Thục 5 Kỹ Năng Ngôn Ngữ</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Đánh giá dựa trên độ chính xác khi làm bài tập, luyện nói AI và đọc hiểu.
            </p>
          </div>

          <div className="space-y-4 pt-1">
            {skillBars.map((item, idx) => {
              const SkillIcon = item.icon;
              return (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <SkillIcon size={14} className="text-slate-500" />
                      <span>{item.label}</span>
                    </span>
                    <span className="font-bold">{item.score}%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-700`}
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-center gap-2">
            <Lightbulb size={18} className="text-amber-500 flex-shrink-0" />
            <span><strong>Mẹo thăng hạng:</strong> Luyện tập đều đặn Speaking AI và Matching Game mỗi ngày để tăng tốc độ phản xạ tự nhiên.</span>
          </div>
        </div>

        {/* 4 Milestones Roadmap */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 text-base sm:text-lg flex items-center gap-2">
              <Map size={20} className="text-rose-600" />
              <span>4 Chặng Lộ Trình Thăng Hạng HSK</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              20 bài học được thiết kế từng bước đưa người học từ nhập môn đến giao tiếp công sở.
            </p>
          </div>

          <div className="space-y-3.5 pt-1">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-white transition-all space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold border bg-slate-900 text-white">
                      {m.level}
                    </span>
                    <strong className="text-xs sm:text-sm text-slate-900 font-bold">
                      {m.title}
                    </strong>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${m.statusClass}`}>
                    {m.status}
                  </span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {m.desc}
                </p>

                {/* Mini progress bar */}
                <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400 font-semibold">
                  <div className="h-1.5 flex-1 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${m.color} rounded-full`}
                      style={{ width: `${m.progress}%` }}
                    />
                  </div>
                  <span>{m.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
