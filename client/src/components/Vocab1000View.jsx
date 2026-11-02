import React, { useState, useMemo, useEffect } from 'react';
import { HSK_1000_VOCABULARY } from '../data/vocab1000Data';
import axiosClient from '../api/axiosClient';
import { getWordRadicalAndMnemonic } from '../data/radicalHelper';
import { getVocabIllustration } from '../data/vocabImageHelper';
import { CONTEXTUAL_CATEGORIES, CONTEXTUAL_PHRASES } from '../data/contextualPhrasesData';
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
  Maximize2,
  Lightbulb,
  Compass,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';

export default function Vocab1000View({ onGainXP }) {
  // Modes: 'phrases' (Học theo cụm từ & hoàn cảnh), 'vocab' (Tra cứu 1,000 từ vựng)
  const [viewMode, setViewMode] = useState('phrases');

  // Vocab dataset state
  const [vocabList, setVocabList] = useState(HSK_1000_VOCABULARY || []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [showIllustrations, setShowIllustrations] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeHandwritingWord, setActiveHandwritingWord] = useState(null);
  const [previewImageWord, setPreviewImageWord] = useState(null);
  const pageSize = 24;

  // Contextual phrases state
  const [phraseCategory, setPhraseCategory] = useState('all');
  const [phraseSearchQuery, setPhraseSearchQuery] = useState('');

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

  // Filter contextual phrases
  const filteredPhrases = useMemo(() => {
    return CONTEXTUAL_PHRASES.filter((item) => {
      if (phraseCategory !== 'all' && item.category !== phraseCategory) {
        return false;
      }
      if (phraseSearchQuery.trim()) {
        const q = phraseSearchQuery.toLowerCase().trim();
        const matchHanzi = item.phraseHanzi.toLowerCase().includes(q);
        const matchPinyin = item.phrasePinyin.toLowerCase().includes(q);
        const matchVi = item.phraseVi.toLowerCase().includes(q);
        const matchSentence = item.sentenceHanzi.toLowerCase().includes(q);
        const matchSit = item.situation.toLowerCase().includes(q);
        if (!matchHanzi && !matchPinyin && !matchVi && !matchSentence && !matchSit) return false;
      }
      return true;
    });
  }, [phraseCategory, phraseSearchQuery]);

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

  const speakChinese = (text, speed = 0.85) => {
    if ('speechSynthesis' in window && text) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.rate = speed;
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
            HỌC TỪ THEO HOÀN CẢNH • CỤM TỪ THỰC CHIẾN • TẬP VIẾT CHUẨN
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
            <GraduationCap className="text-rose-600 w-7 h-7" />
            <span>Kho Từ Vựng & Cụm Từ Giao Tiếp Thực Tế</span>
          </h2>
          <p className="text-slate-600 text-sm mt-0.5 max-w-3xl leading-relaxed">
            Học từ vựng gắn liền với <strong>Cụm từ cố định trong đời sống</strong> và <strong>Câu giao tiếp theo từng hoàn cảnh thực tế</strong>, thay vì học từ đơn lẻ rời rạc.
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start md:self-auto flex-wrap">
          {viewMode === 'vocab' && (
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
          )}

          <span className="px-3.5 py-2 bg-slate-100 text-slate-700 font-bold rounded-xl text-xs border border-slate-200 shadow-2xs">
            {viewMode === 'phrases'
              ? `${filteredPhrases.length} cụm từ thực tế`
              : `${filteredList.length} / ${vocabList.length} từ vựng`}
          </span>
        </div>
      </div>

      {/* VIEW MODE SELECTOR (Cụm từ thực tế vs 1,000 Từ vựng) */}
      <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap gap-2">
        <button
          onClick={() => setViewMode('phrases')}
          className={`flex-1 min-w-[220px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all ${
            viewMode === 'phrases'
              ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
              : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Sparkles size={16} />
          <span>Học Theo Cụm Từ & Mẫu Câu Hoàn Cảnh</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-400 text-slate-950 font-black">
            Khuyên dùng
          </span>
        </button>

        <button
          onClick={() => setViewMode('vocab')}
          className={`flex-1 min-w-[220px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all ${
            viewMode === 'vocab'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
              : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
          }`}
        >
          <BookOpen size={16} />
          <span>Tra Cứu 1,000 Từ Vựng HSK & Bộ Thủ</span>
        </button>
      </div>

      {/* ============================================================== */}
      {/* VIEW 1: HỌC THEO CỤM TỪ & MẪU CÂU HOÀN CẢNH                    */}
      {/* ============================================================== */}
      {viewMode === 'phrases' && (
        <div className="space-y-6">
          {/* Situation Filter & Search Bar */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                value={phraseSearchQuery}
                onChange={(e) => setPhraseSearchQuery(e.target.value)}
                placeholder="Tìm cụm từ, câu mẫu, hoặc hoàn cảnh... (Ví dụ: 来一份, bớt cay, taxi, trả giá, cafe...)"
                className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:bg-white focus:border-rose-500 focus:outline-none focus:ring-4 focus:ring-rose-500/10 transition-all"
              />
              {phraseSearchQuery && (
                <button
                  onClick={() => setPhraseSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1.5 transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {CONTEXTUAL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setPhraseCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    phraseCategory === cat.id
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Phrases Grid */}
          {filteredPhrases.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 text-slate-500 space-y-2">
              <Search className="w-10 h-10 mx-auto text-slate-300" />
              <p className="text-sm font-medium">Không tìm thấy cụm từ nào phù hợp với tìm kiếm.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredPhrases.map((phrase) => (
                <div
                  key={phrase.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Header: Category & Situation */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 font-extrabold text-[11px] border border-rose-200">
                        {phrase.categoryName}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        🎯 {phrase.situation}
                      </span>
                    </div>

                    {/* Phrasal Chunk Box */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-100 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-2xl font-black text-rose-950 chinese-font">
                          {phrase.phraseHanzi}
                        </div>
                        <div className="text-xs font-bold text-amber-700 mt-0.5">
                          {phrase.phrasePinyin}
                        </div>
                        <div className="text-xs font-black text-slate-800 mt-1">
                          👉 {phrase.phraseVi}
                        </div>
                      </div>
                      <button
                        onClick={() => speakChinese(phrase.phraseHanzi, 0.8)}
                        className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all flex-shrink-0"
                        title="Nghe phát âm cụm từ này"
                      >
                        <Volume2 size={14} />
                        <span>Nghe cụm từ</span>
                      </button>
                    </div>

                    {/* Full Real-life Sentence */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Mẫu câu giao tiếp hoàn cảnh:
                        </span>
                        <button
                          onClick={() => speakChinese(phrase.sentenceHanzi, 0.85)}
                          className="text-xs text-blue-600 font-bold hover:text-blue-700 inline-flex items-center gap-1"
                        >
                          <Volume2 size={13} />
                          <span>Nghe câu mẫu</span>
                        </button>
                      </div>

                      <div className="text-lg font-bold text-slate-900 chinese-font leading-relaxed">
                        {phrase.sentenceHanzi}
                      </div>

                      <div className="text-xs font-semibold text-amber-600">
                        {phrase.sentencePinyin}
                      </div>

                      <div className="text-xs text-slate-600 font-medium mt-1 leading-normal">
                        {phrase.sentenceVi}
                      </div>
                    </div>

                    {/* Native Tip */}
                    {phrase.tip && (
                      <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-950 flex items-start gap-2">
                        <Lightbulb size={14} className="text-amber-600 flex-shrink-0 mt-0.5" />
                        <p className="text-[11px] leading-relaxed">
                          <strong>Mẹo thực tế:</strong> {phrase.tip}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() =>
                        setActiveHandwritingWord({
                          hanzi: phrase.phraseHanzi.replace(/[^一-龥]/g, '')[0] || '你',
                          pinyin: phrase.phrasePinyin.split(' ')[0] || 'nǐ',
                          vi: phrase.phraseVi,
                        })
                      }
                      className="text-xs text-slate-700 hover:text-rose-600 font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-rose-50 transition-all"
                    >
                      <PenTool size={13} />
                      <span>Tập viết chữ cụm này</span>
                    </button>

                    <button
                      onClick={() => {
                        onGainXP(5, `Ghi nhớ cụm từ: ${phrase.phraseHanzi}`);
                      }}
                      className="text-xs text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1"
                    >
                      <CheckCircle2 size={13} />
                      <span>Đã thuộc cụm này (+5 XP)</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* VIEW 2: TRA CỨU 1,000 TỪ VỰNG & BỘ THỦ                         */}
      {/* ============================================================== */}
      {viewMode === 'vocab' && (
        <div className="space-y-6">
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
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
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
                    className="bg-white p-5 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group space-y-3.5 shadow-2xs"
                  >
                    <div className="space-y-3">
                      {/* Top Row: Hanzi + Pinyin + Meaning */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1 space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <div
                              onClick={() => setActiveHandwritingWord(item)}
                              className="text-3xl font-black text-slate-900 chinese-font hover:text-blue-600 cursor-pointer transition-colors flex items-center gap-1.5 group/h tracking-wide"
                              title="Bấm vào để mở bảng tập viết chữ này trên ô Mễ"
                            >
                              <span>{item.hanzi}</span>
                              <span className="text-xs text-blue-500 opacity-0 group-hover/h:opacity-100 transition-opacity p-1 rounded-md bg-blue-50">
                                <PenTool size={12} />
                              </span>
                            </div>
                            <span
                              className={`px-2 py-0.5 rounded-lg text-[10px] font-black border uppercase tracking-wider ${levelColor}`}
                            >
                              {item.level}
                            </span>
                          </div>

                          <div className="text-sm font-bold text-rose-600">
                            {item.pinyin}
                          </div>

                          {item.hv && (
                            <div className="text-[11px] text-slate-400 font-medium">
                              Hán Việt: <strong className="text-slate-700">{item.hv}</strong>
                            </div>
                          )}

                          <div className="text-sm font-extrabold text-slate-900 leading-snug flex items-center gap-1.5 pt-0.5">
                            <Sparkles size={13} className="text-amber-500 flex-shrink-0" />
                            <span className="truncate">{item.vi}</span>
                          </div>
                        </div>

                        {/* Image Thumbnail */}
                        {showIllustrations && (
                          <div className="relative flex-shrink-0">
                            <div
                              onClick={() => setPreviewImageWord(item)}
                              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-100 shadow-sm hover:border-blue-400 hover:shadow-xl transition-all duration-300 relative group/img cursor-pointer"
                              title="Bấm vào để phóng to hình ảnh chi tiết"
                            >
                              <img
                                src={illustrationUrl}
                                alt={item.hanzi}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                                onError={(e) => {
                                  e.target.src =
                                    'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80';
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                              <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/40 text-white backdrop-blur-xs opacity-0 group-hover/img:opacity-100 transition-opacity">
                                <Maximize2 size={12} />
                              </div>

                              {item.topic && (
                                <span className="absolute bottom-1.5 left-1.5 right-1.5 text-center text-[10px] font-bold text-white bg-black/50 backdrop-blur-xs px-1.5 py-0.5 rounded-lg truncate">
                                  {item.topic}
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Radical Info Box */}
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

                      {/* Mnemonic Story Box */}
                      <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs space-y-1 text-amber-950">
                        <div className="font-bold text-amber-900 flex items-center gap-1.5">
                          <BookOpen size={14} className="text-amber-700" />
                          <span>Cách nhớ từ & Chiết tự:</span>
                        </div>
                        <p className="text-[11px] text-amber-900 leading-relaxed italic">
                          {radicalInfo.mnemonic}
                        </p>
                      </div>

                      {/* Sample Sentence (Contextual) */}
                      {item.sample && (
                        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                              Câu ngữ cảnh thực tế:
                            </span>
                            <button
                              onClick={() => speakChinese(item.sample, 0.85)}
                              className="text-xs text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
                              title="Nghe câu ví dụ"
                            >
                              <Volume2 size={12} />
                              <span>Nghe</span>
                            </button>
                          </div>
                          <div className="chinese-font font-bold text-slate-900 text-sm">
                            {item.sample}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-2">
                      <button
                        onClick={() => setActiveHandwritingWord(item)}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-2xs active:scale-95"
                        title="Mở bảng tập viết chữ Hán trên ô Mễ"
                      >
                        <PenTool size={13} />
                        <span>Tập viết</span>
                      </button>

                      <button
                        onClick={() => speakChinese(item.hanzi, 0.8)}
                        className="px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all border border-blue-200 active:scale-95"
                        title="Phát âm từ vựng"
                      >
                        <Volume2 size={14} />
                        <span>Phát âm</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-6">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={18} />
              </button>

              <span className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700">
                Trang {currentPage} / {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Handwriting Modal */}
      {activeHandwritingWord && (
        <HandwritingModal
          word={activeHandwritingWord}
          onClose={() => setActiveHandwritingWord(null)}
          onGainXP={onGainXP}
        />
      )}

      {/* Image Preview Modal */}
      {previewImageWord && (
        <div
          onClick={() => setPreviewImageWord(null)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 animate-scaleUp"
          >
            <div className="relative aspect-4/3 w-full bg-slate-900">
              <img
                src={getVocabIllustration(previewImageWord)}
                alt={previewImageWord.hanzi}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <button
                onClick={() => setPreviewImageWord(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white flex items-end justify-between">
                <div>
                  <div className="text-4xl font-black chinese-font tracking-wide drop-shadow-md">
                    {previewImageWord.hanzi}
                  </div>
                  <div className="text-rose-400 font-bold text-base mt-0.5">
                    {previewImageWord.pinyin}
                  </div>
                </div>

                <button
                  onClick={() => speakChinese(previewImageWord.hanzi, 0.8)}
                  className="p-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white transition-all shadow-lg active:scale-95 cursor-pointer"
                  title="Phát âm từ vựng"
                >
                  <Volume2 size={20} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="text-lg font-black text-slate-900">
                  {previewImageWord.vi}
                </div>
                <div className="flex items-center gap-2">
                  {previewImageWord.topic && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600">
                      {previewImageWord.topic}
                    </span>
                  )}
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700">
                    {previewImageWord.level}
                  </span>
                </div>
              </div>

              {previewImageWord.hv && (
                <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  Âm Hán Việt: <strong className="text-slate-800">{previewImageWord.hv}</strong>
                </div>
              )}

              {previewImageWord.sample && (
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 flex items-center justify-between gap-2 italic">
                  <span className="chinese-font font-medium text-sm text-slate-900">{previewImageWord.sample}</span>
                  <button
                    onClick={() => speakChinese(previewImageWord.sample, 0.85)}
                    className="p-2 rounded-full bg-slate-200 hover:bg-rose-500 hover:text-white transition-all flex-shrink-0 cursor-pointer"
                    title="Nghe câu ví dụ"
                  >
                    <Volume2 size={14} />
                  </button>
                </div>
              )}

              <div className="pt-1 flex items-center justify-end">
                <button
                  onClick={() => {
                    const word = previewImageWord;
                    setPreviewImageWord(null);
                    setActiveHandwritingWord(word);
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-rose-600 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                >
                  <PenTool size={14} />
                  <span>Tập viết chữ này</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
