import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose }) {
  const navItems = [
    { path: '/reading', label: '1. Kỹ Năng Đọc (阅读)', icon: '📖' },
    { path: '/listening', label: '2. Kỹ Năng Nghe (听力)', icon: '🎧' },
    { path: '/speaking', label: '3. Luyện Nói AI (口语)', icon: '🎙️' },
    { path: '/ai-chat', label: '4. AI Trò Chuyện Song Song (智能对话)', icon: '🤖', isNew: true },
    { path: '/writing', label: '5. Luyện Viết (书写)', icon: '✍️' },
    { path: '/matching', label: '6. Game Ghép Từ (配对)', icon: '🧩' },
    { path: '/scenario', label: '7. Tình Huống Thực Tế (情景)', icon: '💬' },
    { path: '/formula', label: '8. Công Thức Ghép Câu (句型)', icon: '📐' },
    { path: '/vocab1000', label: '9. Kho 1000 Từ HSK (词汇)', icon: '📚' },
    { path: '/dashboard', label: 'Tiến Độ & Thống Kê', icon: '📊' },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Brand Header */}
      <div className="p-5 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-rose-900/30 chinese-font">
            汉
          </div>
          <div>
            <h1 className="font-bold text-base leading-tight tracking-tight text-white">
              Hoa Văn Học Đường
            </h1>
            <p className="text-[11px] text-slate-400">HSK Interactive</p>
          </div>
        </div>

        {/* Close Button on Mobile */}
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center text-sm font-bold transition-all"
            title="Đóng menu"
          >
            ✕
          </button>
        )}
      </div>

      {/* Nav links */}
      <nav className="p-3 flex-1 flex flex-col gap-1 overflow-y-auto">
        <div className="text-[10px] uppercase font-bold text-slate-500 px-3 py-1 tracking-wider">
          Chức năng học tập
        </div>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => {
              if (onClose) onClose();
            }}
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30 font-semibold translate-x-1'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span className="truncate flex-1">{item.label}</span>
            {item.isNew && (
              <span className="px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                Live
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer Profile */}
      <div className="p-4 border-t border-slate-800 bg-slate-950/40">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-slate-800 border-2 border-amber-400 flex items-center justify-center text-amber-400 font-bold chinese-font text-sm">
            中
          </div>
          <div className="min-w-0">
            <div className="text-xs font-semibold text-white truncate">Học Viên Tiếng Trung</div>
            <div className="text-[11px] text-amber-400 font-medium">HSK 1 - 3</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* 1. Desktop Stationary Sidebar */}
      <aside className="hidden lg:flex w-64 xl:w-72 bg-slate-900 text-white flex-col flex-shrink-0 min-h-screen shadow-xl z-20 sticky top-0 h-screen">
        {sidebarContent}
      </aside>

      {/* 2. Mobile Slide-out Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity animate-fade-in"
          />

          {/* Drawer Panel */}
          <aside className="relative w-72 max-w-[80vw] bg-slate-900 text-white shadow-2xl z-10 flex flex-col h-full animate-slide-right">
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}
