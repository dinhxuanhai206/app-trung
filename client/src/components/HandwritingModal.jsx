import React, { useRef, useState, useEffect } from 'react';
import { getWordRadicalAndMnemonic } from '../data/radicalHelper';

export default function HandwritingModal({ word, onClose, onGainXP }) {
  if (!word) return null;

  // Tách từng chữ Hán trong từ để người học có thể luyện viết từng chữ một
  const characters = React.useMemo(() => {
    const chars = Array.from(word.hanzi || '').filter((ch) => /[\u4e00-\u9fa5]/u.test(ch));
    return chars.length > 0 ? chars : [word.hanzi[0] || '字'];
  }, [word]);

  const [selectedCharIdx, setSelectedCharIdx] = useState(0);
  const currentChar = characters[selectedCharIdx] || characters[0];

  // Chi tiết bộ thủ & Mẹo nhớ cho chữ đang chọn
  const radicalInfo = React.useMemo(() => {
    return getWordRadicalAndMnemonic({
      hanzi: currentChar,
      vi: word.vi,
    });
  }, [currentChar, word.vi]);

  // Canvas drawing state
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showGhost, setShowGhost] = useState(true);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    clearCanvas();
  }, [selectedCharIdx]);

  const speakText = (text) => {
    if ('speechSynthesis' in window && text) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  };

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height),
    };
  };

  const startDraw = (e) => {
    e.preventDefault();
    setIsDrawing(true);
    setHasDrawn(true);
    const pos = getCoordinates(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getCoordinates(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  const stopDraw = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
    setIsCompleted(false);
  };

  const handleFinish = () => {
    setIsCompleted(true);
    if (onGainXP) {
      onGainXP(15, `Luyện viết chữ Hán: ${currentChar}`);
    }
    speakText(currentChar);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-xl max-h-[92vh] overflow-y-auto flex flex-col">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 text-white flex items-center justify-center text-xl font-bold shadow-md shadow-rose-900/20">
              ✍️
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-tight flex items-center gap-2">
                <span>Tập Viết Chữ Hán (米字格)</span>
                <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 font-bold text-[10px]">
                  {word.level || 'HSK'}
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Nắn nót từng nét chữ trên ô Mễ Tự chuẩn mực thư pháp.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center font-bold text-sm transition-all"
            title="Đóng cửa sổ"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 space-y-5 flex-1">
          {/* Target Word Overview Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-50 via-amber-50 to-orange-50 border border-rose-200 flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-baseline gap-2.5">
                <span className="text-3xl font-extrabold text-slate-900 chinese-font">
                  {word.hanzi}
                </span>
                <span className="text-base font-bold text-rose-600">
                  {word.pinyin}
                </span>
                {word.hv && (
                  <span className="text-xs text-slate-500 font-medium">
                    (Hán Việt: <strong>{word.hv}</strong>)
                  </span>
                )}
              </div>
              <div className="text-sm font-semibold text-slate-800">
                {word.vi}
              </div>
            </div>

            <button
              onClick={() => speakText(word.hanzi)}
              className="px-3.5 py-2 rounded-xl bg-white border border-rose-200 text-rose-600 hover:bg-rose-600 hover:text-white text-xs font-bold shadow-2xs flex items-center gap-1.5 transition-all"
            >
              <span>🔊</span>
              <span>Nghe đọc</span>
            </button>
          </div>

          {/* Multi-Character Selector (If word has >1 character) */}
          {characters.length > 1 && (
            <div className="space-y-1.5">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Chọn chữ cần luyện viết ({characters.length} chữ):
              </div>
              <div className="flex gap-2">
                {characters.map((ch, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedCharIdx(idx);
                      clearCanvas();
                    }}
                    className={`flex-1 py-2 px-3 rounded-xl font-bold chinese-font text-lg transition-all flex items-center justify-center gap-2 border ${
                      selectedCharIdx === idx
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                    }`}
                  >
                    <span>{ch}</span>
                    <span className="text-xs font-normal opacity-70">
                      (Chữ {idx + 1})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Classical Mǐ Zì Gé (米字格) Drawing Canvas */}
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="mi-zi-ge-wrapper shadow-md">
              {showGhost && (
                <div className="absolute inset-0 flex items-center justify-center text-[190px] font-bold text-rose-500/15 select-none pointer-events-none chinese-font">
                  {currentChar}
                </div>
              )}
              <canvas
                ref={canvasRef}
                width={280}
                height={280}
                onMouseDown={startDraw}
                onMouseMove={draw}
                onMouseUp={stopDraw}
                onMouseLeave={stopDraw}
                onTouchStart={startDraw}
                onTouchMove={draw}
                onTouchEnd={stopDraw}
                className="absolute inset-0 z-10 cursor-crosshair w-full h-full touch-none"
              />
            </div>

            {/* Canvas Toolbar Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={clearCanvas}
                className="px-3.5 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                <span>🧹</span>
                <span>Xóa vẽ lại</span>
              </button>

              <button
                onClick={() => setShowGhost(!showGhost)}
                className="px-3.5 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                <span>{showGhost ? '👁️' : '🙈'}</span>
                <span>{showGhost ? 'Ẩn nét mẫu' : 'Hiện nét mẫu'}</span>
              </button>

              <button
                onClick={() => speakText(currentChar)}
                className="px-3.5 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                <span>🔊</span>
                <span>Phát âm</span>
              </button>
            </div>
          </div>

          {/* Radical Analysis & Mnemonic Breakdown (Bộ Thủ & Cách Nhớ) */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs space-y-2 text-slate-800">
            <div className="flex items-center justify-between font-bold text-amber-900 text-sm">
              <span className="flex items-center gap-1.5">
                <span>🧩</span>
                <span>Bộ thủ: {radicalInfo.radical}</span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-900 text-[10px]">
                Khoảng {radicalInfo.strokeCount} nét
              </span>
            </div>

            <p className="text-slate-600">
              <strong>Ý nghĩa bộ thủ:</strong> {radicalInfo.radicalMeaning}
            </p>

            <div className="pt-2 border-t border-amber-200/60 leading-relaxed text-amber-950">
              <strong className="text-rose-700">💡 Mẹo ghi nhớ & Chiết tự:</strong>{' '}
              {radicalInfo.mnemonic}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-medium">
            {isCompleted ? (
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <span>🎉</span>
                <span>Đã ghi nhận luyện viết (+15 XP)!</span>
              </span>
            ) : hasDrawn ? (
              <span className="text-slate-700 font-semibold">
                Nét vẽ đẹp mắt! Bấm Hoàn thành để nhận XP.
              </span>
            ) : (
              'Dùng chuột hoặc ngón tay vẽ theo nét mờ trên ô.'
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-200 text-xs font-semibold transition-all"
            >
              Đóng
            </button>

            <button
              onClick={handleFinish}
              disabled={!hasDrawn || isCompleted}
              className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 disabled:opacity-40 text-white text-xs font-bold shadow-md shadow-rose-600/30 transition-all flex items-center gap-1.5"
            >
              <span>{isCompleted ? '✓ Đã xong' : 'Hoàn thành (+15 XP)'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
