import React, { useState, useMemo, useEffect } from 'react';
import { HSK_1000_VOCABULARY } from '../data/vocab1000Data';
import axiosClient from '../api/axiosClient';
import { getWordRadicalAndMnemonic } from '../data/radicalHelper';
import { getVocabIllustration } from '../data/vocabImageHelper';
import HandwritingModal from './HandwritingModal';
import {
  Search,
  Volume2,
  PenTool,
  Sparkles,
  BookOpen,
  Layers,
  ChevronLeft,
  ChevronRight,
  X,
  Image as ImageIcon,
  GraduationCap,
  Filter,
} from 'lucide-react';

export default function Vocab1000View({ onGainXP }) {
  const [vocabList, setVocabList] = useState(HSK_1000_VOCABULARY || []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [showIllustrations, setShowIllustrations] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeHandwritingWord, setActiveHandwritingWord] = useState(null);
  const pageSize = 24;

  // Connect to NestJS backend API
  useEffect(() => {
    axiosClient
      .get('/vocab?limit=1000')
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
      if (selectedLevel !== 'all') {
        if (selectedLevel === 'HSK 3+') {
          if (item.level !== 'HSK 3+' && item.level !== 'Giao tiếp') return false;
        } else if (item.level !== selectedLevel) {
          return false;
        }
      }
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
    if ('speechSynthesis' in window && text) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  };

  const counts = useMemo(() => {
    return {
      all: vocabList.length,
      hsk1: vocabList.filter((v) => v.level === 'HSK 1').length,
      hsk2: vocabList.filter((v) => v.level === 'HSK 2').length,
      hsk3: vocabList.filter((v) => v.level === 'HSK 3').length,
      comm: vocabList.filter((v) => v.level === 'HSK 3+' || v.level === 'Giao tiếp').length,
    };
  }, [vocabList]);

  const levelTabs = [
    { id: 'all', label: `Tất cả (${counts.all})` },
    { id: 'HSK 1', label: `HSK 1 (${counts.hsk1} từ)` },
    { id: 'HSK 2', label: `HSK 2 (${counts.hsk2} từ)` },
    { id: 'HSK 3', label: `HSK 3 (${counts.hsk3} từ)` },
    { id: 'HSK 3+', label: `Giao tiếp ứng dụng (${counts.comm} từ)` },
  ];

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <span className="px-3 py-1 bg-rose-100 text-rose-800 text-xs font-extrabold rounded-full tracking-wider uppercase">
            TỪ ĐIỂN MINH HỌA • BỘ THỦ • TẬP VIẾT CHUẨN
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <GraduationCap className="text-rose-600 w-7 h-7" />
            <span>Kho 1,000 Từ Vựng HSK Minh Họa Toàn Diện</span>
          </h2>
          <p className="text-slate-600 text-sm mt-0.5 max-w-3xl leading-relaxed">
            Tra cứu đầy đủ 1,000 từ vựng cốt lõi kèm <strong>Hình ảnh minh họa thực tế</strong>, <strong>Phân tích Bộ Thủ</strong>, <strong>Mẹo Chiết Tự Ghi Nhớ</strong> và <strong>Công cụ Tập Viết Chữ Hán Thông Minh (米字格)</strong>.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto flex-wrap">
          <button
            onClick={() => setShowIllustrations(!showIllustrations)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all border shadow-2xs ${
              showIllustrations
                ? 'bg-rose-50 text-rose-700 border-rose-300'
                : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200'
            }`}
            title="Bật/Tắt hiển thị hình ảnh minh họa cho các từ vựng"
          >
            <ImageIcon size={16} />
            <span>{showIllustrations ? 'Ẩn ảnh minh họa' : 'Hiện ảnh minh họa'}</span>
          </button>

          <span className="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-xl text-xs sm:text-sm border border-slate-200 shadow-2xs">
            Hiển thị: {filteredList.length} / {vocabList.length} từ
          </span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Tìm theo Chữ Hán, Pinyin, Hán Việt, hoặc Tiếng Việt... (Ví dụ: 学习, xuexi, học tập)"
              className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:bg-white focus:border-rose-500 focus:outline-none focus:ring-4 focus:ring-rose-500/10 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1.5 transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Filter size={18} className="text-slate-400 hidden sm:block" />
            <select
              value={selectedTopic}
              onChange={(e) => {
                setSelectedTopic(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full sm:w-auto px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-700 focus:bg-white focus:border-rose-500 focus:outline-none transition-all cursor-pointer shadow-2xs"
            >
              <option value="all">Tất cả chủ đề ({topics.length} chủ đề)</option>
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
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
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 text-slate-500 space-y-2">
          <Search className="w-10 h-10 mx-auto text-slate-300" />
          <p className="text-sm font-medium">Không tìm thấy từ vựng nào phù hợp với điều kiện tìm kiếm.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentItems.map((item) => {
            const levelColor =
              item.level === 'HSK 1'
                ? 'bg-blue-100 text-blue-800 border-blue-200'
                : item.level === 'HSK 2'
                ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                : item.level === 'HSK 3'
                ? 'bg-amber-100 text-amber-800 border-amber-200'
                : 'bg-purple-100 text-purple-800 border-purple-200';

            const radicalInfo = getWordRadicalAndMnemonic(item);
            const illustrationUrl = getVocabIllustration(item);

            return (
              <div
                key={item.id}
                className="bg-white p-5 rounded-3xl border border-slate-200 hover:border-rose-300 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group space-y-4 shadow-2xs"
              >
                <div className="space-y-3.5">
                  {/* Illustrative Concept Image (Clone hình ảnh minh họa nghĩa từ) */}
                  {showIllustrations && (
                    <div className="relative w-full h-36 rounded-2xl overflow-hidden bg-slate-100 group-hover:shadow-md transition-all">
                      <img
                        src={illustrationUrl}
                        alt={item.hanzi}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src =
                            'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=400&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs font-bold pointer-events-none">
                        <span className="bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-md text-[11px] truncate max-w-[140px]">
                          {item.topic || 'Từ vựng HSK'}
                        </span>
                        <span className="bg-rose-600/90 backdrop-blur-xs px-2 py-0.5 rounded-md text-[10px] font-black uppercase">
                          {item.level}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Top row: Hanzi & Pinyin & Level badges (when image hidden) */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div
                        onClick={() => setActiveHandwritingWord(item)}
                        className="text-3xl font-extrabold text-slate-900 chinese-font hover:text-rose-600 cursor-pointer transition-colors flex items-center gap-2 group/h"
                        title="Bấm vào để mở bảng tập viết chữ này trên ô Mễ"
                      >
                        <span>{item.hanzi}</span>
                        <span className="text-xs text-rose-500 opacity-0 group-hover/h:opacity-100 transition-opacity">
                          <PenTool size={14} />
                        </span>
                      </div>
                      <div className="text-sm font-bold text-rose-600 mt-0.5">
                        {item.pinyin}
                      </div>
                    </div>

                    {!showIllustrations && (
                      <div className="flex flex-col items-end gap-1">
                        <span className={`px-2.5 py-0.5 rounded-lg text-xs font-black border ${levelColor}`}>
                          {item.level}
                        </span>
                        {item.topic && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] bg-slate-100 text-slate-500 font-semibold truncate max-w-[120px]">
                            {item.topic}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Meaning & Sino-Vietnamese (Hán Việt) */}
                  <div className="space-y-1">
                    {item.hv && (
                      <div className="text-xs text-slate-500">
                        Hán Việt: <strong className="text-slate-800">{item.hv}</strong>
                      </div>
                    )}
                    <div className="text-sm font-bold text-slate-900 leading-snug flex items-start gap-1.5">
                      <Sparkles size={15} className="text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{item.vi}</span>
                    </div>
                  </div>

                  {/* Radical Info Box (Giải thích Bộ Thủ) */}
                  <div className="p-3 rounded-2xl bg-purple-50/70 border border-purple-100 text-xs space-y-1 text-purple-950">
                    <div className="flex items-center justify-between font-bold text-purple-900">
                      <span className="flex items-center gap-1.5">
                        <Layers size={14} className="text-purple-600" />
                        <span>Bộ thủ: {radicalInfo.radical}</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-200 text-purple-800 font-bold">
                        {radicalInfo.strokeCount} nét
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-tight">
                      <strong>Ý nghĩa:</strong> {radicalInfo.radicalMeaning}
                    </p>
                  </div>

                  {/* Mnemonic Story Box (Cách Nhớ Từ Vựng & Chiết Tự) */}
                  <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs space-y-1 text-amber-950">
                    <div className="font-bold text-amber-900 flex items-center gap-1.5">
                      <BookOpen size={14} className="text-amber-700" />
                      <span>Cách nhớ từ & Chiết tự:</span>
                    </div>
                    <p className="text-[11px] text-amber-900 leading-relaxed italic">
                      {radicalInfo.mnemonic}
                    </p>
                  </div>

                  {/* Sample Sentence (if available) */}
                  {item.sample && (
                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70 text-xs text-slate-700 flex items-center justify-between gap-2 italic">
                      <span className="chinese-font">{item.sample}</span>
                      <button
                        onClick={() => speakChinese(item.sample)}
                        className="w-7 h-7 rounded-full bg-slate-200 hover:bg-rose-500 hover:text-white text-slate-600 flex items-center justify-center transition-all flex-shrink-0"
                        title="Nghe câu ví dụ"
                      >
                        <Volume2 size={13} />
                      </button>
                    </div>
                  )}
                </div>

                {/* Bottom Action Bar: Tập Viết & Phát Âm */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-2">
                  <button
                    onClick={() => setActiveHandwritingWord(item)}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-rose-600 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-2xs active:scale-95"
                    title="Mở bảng tập viết chữ Hán trên ô Mễ"
                  >
                    <PenTool size={13} />
                    <span>Tập viết</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => speakChinese(item.hanzi)}
                      className="w-9 h-9 rounded-full bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-600 flex items-center justify-center text-sm font-bold transition-all shadow-2xs"
                      title="Phát âm từ vựng"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-4 py-6">
        <button
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage((p) => p - 1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          disabled={currentPage <= 1}
          className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-sm text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs flex items-center gap-1.5"
        >
          <ChevronLeft size={16} />
          <span>Trang trước</span>
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
          className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-sm text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs flex items-center gap-1.5"
        >
          <span>Trang tiếp</span>
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Interactive Handwriting Practice Modal */}
      {activeHandwritingWord && (
        <HandwritingModal
          word={activeHandwritingWord}
          onClose={() => setActiveHandwritingWord(null)}
          onGainXP={onGainXP}
        />
      )}
    </div>
  );
}
