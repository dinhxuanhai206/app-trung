import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Gamepad2, Bot, Headphones, MessageSquare, Menu } from 'lucide-react';

export default function BottomNav({ onOpenMore }) {
  const primaryTabs = [
    { path: '/reading', label: 'Đọc', icon: BookOpen },
    { path: '/matching', label: 'Ghép chữ', icon: Gamepad2 },
    { path: '/ai-chat', label: 'AI Nói', icon: Bot },
    { path: '/listening', label: 'Nghe', icon: Headphones },
    { path: '/scenario', label: 'Thực tế', icon: MessageSquare },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] flex items-center justify-around">
      {primaryTabs.map((tab) => {
        const IconComponent = tab.icon;
        return (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center flex-1 py-1 rounded-xl transition-all ${
                isActive
                  ? 'text-rose-600 font-bold scale-105'
                  : 'text-slate-500 hover:text-slate-900 font-medium'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`w-9 h-7 rounded-full flex items-center justify-center transition-all ${
                    isActive ? 'bg-rose-50 text-rose-600' : ''
                  }`}
                >
                  <IconComponent size={18} />
                </div>
                <span className="text-[10px] tracking-tight mt-0.5 leading-none">{tab.label}</span>
              </>
            )}
          </NavLink>
        );
      })}

      {/* Button to open full drawer (More menu) */}
      <button
        onClick={onOpenMore}
        className="flex flex-col items-center justify-center flex-1 py-1 text-slate-500 hover:text-slate-900 rounded-xl transition-all"
        title="Mở toàn bộ danh mục chức năng"
      >
        <div className="w-9 h-7 rounded-full flex items-center justify-center">
          <Menu size={18} />
        </div>
        <span className="text-[10px] tracking-tight mt-0.5 leading-none">Thêm</span>
      </button>
    </nav>
  );
}
