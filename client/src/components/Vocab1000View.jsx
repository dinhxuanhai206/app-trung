import React, { useState, useMemo, useEffect } from 'react';
import { HSK_1000_VOCABULARY } from '../data/vocab1000Data';
import axiosClient from '../api/axiosClient';

export default function Vocab1000View() {
  const [vocabList, setVocabList] = useState(HSK_1000_VOCABULARY || []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 24;

  // Connect to NestJS backend API
  useEffect(() => {
    axiosClient.get('/vocab?limit=1000')
      .then((res) => {
        if (res.data && res.data.items && res.data.items.length > 0) {
          setVocabList(res.data.items);
        }
      })
      .catch(() => {
        // Fallback to local vocab dataset
      });
  }, []);

  // Extract unique topics
  const topics = useMemo(() => {
    return Array.from(new Set(vocabList.map((v) => v.topic).filter(Boolean)));
  }, [vocabList]);

  // Filter vocabulary
  const filteredList = useMemo(() => {
    return vocabList.filter((item) => {
      if (selectedLevel !== 'all' && item.level !== selectedLevel) return false;
      if (selectedTopic !== 'all' && item.topic !== selectedTopic) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchHanzi = item.hanzi.toLowerCase().includes(q);
        const matchPinyin = item.pinyin?.toLowerCase().includes(q);
        const matchVi = item.vi?.toLowerCase().includes(q);
        const matchHv = item.hv?.toLowerCase().includes(q);
        if (!matchHanzi && !matchPinyin && !matchVi && !matchHv) return false;
      }
      return true;
    });
  }, [vocabList, selectedLevel, selectedTopic, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredList.length / pageSize));
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredList.slice(start, start + pageSize);
  }, [filteredList, currentPage, pageSize]);

  const speakChinese = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  };

  const levelTabs = [
    { id: 'all', label: `Tất cả (${vocabList.length})` },
    { id: 'HSK 1', label: 'HSK 1 (150 từ)' },
    { id: 'HSK 2', label: 'HSK 2 (150 từ)' },
    { id: 'HSK 3', label: 'HSK 3 (300 từ)' },
    { id: 'HSK 3+', label: 'Giao tiếp ứng dụng (400 từ)' },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <span className="px-3 py-1 bg-rose-100 text-rose-800 text-xs font-bold rounded-full">
            TỪ ĐIỂN CHUẨN
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            📚 Kho 1,000 Từ Vựng HSK 1 - 2 - 3 Toàn Diện
          </h2>
          <p className="text-slate-500 text-sm">
            Tra cứu đầy đủ 1,000 từ vựng cốt lõi HSK 1 (150 từ), HSK 2 (150 từ), HSK 3 (300 từ) và Giao tiếp thực tế kèm Pinyin, Hán Việt, Nghĩa và Phát âm chuẩn bản xứ.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-xl text-sm border border-slate-200">
            Hiển thị: {filteredList.length} / {vocabList.length} từ
          </span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Tìm theo Chữ Hán, Pinyin, Hán Việt, hoặc Tiếng Việt... (Ví dụ: 学习, xuexi, học tập)"
              className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-sm p-1"
              >
                ✕
              </button>
            )}
          </div>

          <select
            value={selectedTopic}
            onChange={(e) => {
              setSelectedTopic(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 focus:bg-white focus:border-rose-500 focus:outline-none transition-all cursor-pointer"
          >
            <option value="all">Tất cả chủ đề ({topics.length} chủ đề)</option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Level Filter Tabs */}
        <div className="flex flex-wrap gap-2 pt-1">
          {levelTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedLevel(tab.id);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedLevel === tab.id
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Vocab Cards Grid */}
      {currentItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 text-slate-500">
          🔍 Không tìm thấy từ vựng nào phù hợp với điều kiện tìm kiếm.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems.map((item) => {
            const levelColor =
              item.level === 'HSK 1'
                ? 'bg-blue-100 text-blue-800'
                : item.level === 'HSK 2'
                ? 'bg-emerald-100 text-emerald-800'
                : item.level === 'HSK 3'
                ? 'bg-amber-100 text-amber-800'
                : 'bg-purple-100 text-purple-800';

            return (
              <div
                key={item.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-rose-300 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-slate-900 chinese-font">
                        {item.hanzi}
                      </span>
                      <span className="text-base font-bold text-rose-600">{item.pinyin}</span>
                    </div>
                    <div className="flex gap-1.5">
                      <span className={`px-2.5 py-0.5 rounded-lg text-xs font-extrabold ${levelColor}`}>
                        {item.level}
                      </span>
                      {item.topic && (
                        <span className="px-2 py-0.5 rounded-lg text-xs bg-slate-100 text-slate-600 font-medium">
                          {item.topic}
                        </span>
                      )}
                    </div>
                  </div>

                  {item.hv && (
                    <div className="text-xs text-slate-500 mb-1">
                      Hán Việt: <strong className="text-slate-700">{item.hv}</strong>
                    </div>
                  )}

                  <div className="text-sm font-semibold text-slate-800 mb-3">{item.vi}</div>

                  {item.sample && (
                    <div className="bg-slate-50 p-3 rounded-xl border-l-4 border-slate-300 text-xs text-slate-700 flex items-center justify-between gap-2 italic">
                      <span className="chinese-font">{item.sample}</span>
                      <button
                        onClick={() => speakChinese(item.sample)}
                        className="w-7 h-7 rounded-full bg-slate-200 hover:bg-rose-500 hover:text-white text-slate-600 flex items-center justify-center transition-all flex-shrink-0"
                        title="Nghe câu ví dụ"
                      >
                        🔊
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex justify-end pt-3 mt-3 border-t border-slate-100">
                  <button
                    onClick={() => speakChinese(item.hanzi)}
                    className="w-9 h-9 rounded-full bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-600 flex items-center justify-center text-sm transition-all"
                    title="Phát âm từ vựng"
                  >
                    🔊
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-4 py-4">
        <button
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage((p) => p - 1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          disabled={currentPage <= 1}
          className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-sm text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          ◀ Trang trước
        </button>
        <span className="text-sm font-bold text-slate-600">
          Trang {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => {
            if (currentPage < totalPages) {
              setCurrentPage((p) => p + 1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          disabled={currentPage >= totalPages}
          className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-sm text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          Trang tiếp ▶
        </button>
      </div>
    </div>
  );
}
