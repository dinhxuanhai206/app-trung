import React, { useRef, useState, useEffect, useCallback } from 'react';
import HanziWriter from 'hanzi-writer';
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

  // Modes: 'smart' (HanziWriter AI quiz) vs 'freehand' (2D Canvas)
  const [practiceMode, setPracticeMode] = useState('smart');

  // HanziWriter state
  const writerContainerRef = useRef(null);
  const writerInstanceRef = useRef(null);
  const [writerLoading, setWriterLoading] = useState(false);
  const [showGhost, setShowGhost] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStrokeIdx, setCurrentStrokeIdx] = useState(0);
  const [totalStrokes, setTotalStrokes] = useState(radicalInfo?.strokeCount || 6);
  const [mistakesCount, setMistakesCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type, text }

  // Canvas drawing state (Freehand)
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  const speakText = (text) => {
    if ('speechSynthesis' in window && text) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  };

  // Start HanziWriter quiz
  const startSmartQuiz = useCallback((writer) => {
    if (!writer) return;
    setIsCompleted(false);
    setMistakesCount(0);
    setCurrentStrokeIdx(0);
    setFeedback({
      type: 'info',
      text: '✍️ Hãy vẽ nét đầu tiên theo thứ tự nét chuẩn.',
    });

    writer.quiz({
      onCorrectStroke: (data) => {
        const nextIdx = data.strokeNum + 1;
        const total = nextIdx + data.strokesRemaining;
        setCurrentStrokeIdx(nextIdx);
        setTotalStrokes(total);
        setFeedback({
          type: 'success',
          text: `✅ Đúng nét ${nextIdx} / ${total}! Hãy tiếp tục viết nét kế tiếp.`,
        });
      },
      onMistake: (data) => {
        setMistakesCount(data.totalMistakes);
        setFeedback({
          type: 'mistake',
          text: `❌ Sai thứ tự nét! Cần viết nét thứ ${data.strokeNum + 1} trước.`,
        });
      },
      onComplete: (summary) => {
        setIsCompleted(true);
        setCurrentStrokeIdx(totalStrokes);
        setFeedback({
          type: 'complete',
          text: `🎉 Xuất sắc! Bạn đã viết hoàn thành chữ "${currentChar}" chuẩn xác 100%!`,
        });
        speakText(currentChar);
        if (onGainXP) {
          onGainXP(15, `Luyện viết đúng chuẩn chữ: ${currentChar}`);
        }
      },
    });
  }, [currentChar, totalStrokes, onGainXP]);

  // Init HanziWriter
  useEffect(() => {
    if (practiceMode !== 'smart') return;
    const container = writerContainerRef.current;
    if (!container) return;

    container.innerHTML = '';
    setWriterLoading(true);
    setFeedback(null);
    setIsCompleted(false);
    setMistakesCount(0);
    setCurrentStrokeIdx(0);

    let isMounted = true;
    try {
      const writer = HanziWriter.create(container, currentChar, {
        width: 274,
        height: 274,
        padding: 18,
        showOutline: showGhost,
        strokeAnimationSpeed: 1.1,
        delayBetweenStrokes: 180,
        strokeColor: '#0f172a',
        radicalColor: '#dc2626',
        outlineColor: '#fca5a5',
        drawingColor: '#2563eb',
        drawingWidth: 16,
        showHintAfterMisses: 2,
        highlightColor: '#10b981',
        leniency: 1.25,
        onLoadCharDataSuccess: (charData) => {
          if (!isMounted) return;
          setWriterLoading(false);
          if (charData?.strokes) {
            setTotalStrokes(charData.strokes.length);
          }
          startSmartQuiz(writer);
        },
        onLoadCharDataError: () => {
          if (!isMounted) return;
          setWriterLoading(false);
          setFeedback({
            type: 'mistake',
            text: 'Không nạp được nét chữ này từ máy chủ. Bạn có thể chuyển sang "Vẽ Tự Do" để tập viết.',
          });
        },
      });

      writerInstanceRef.current = writer;
    } catch (err) {
      console.error('HanziWriter init error in modal:', err);
      setWriterLoading(false);
    }

    return () => {
      isMounted = false;
      if (writerInstanceRef.current) {
        try {
          writerInstanceRef.current.cancelQuiz();
        } catch (_) {}
        writerInstanceRef.current = null;
      }
    };
  }, [currentChar, practiceMode]);

  // Toggle Outline
  const toggleOutline = () => {
    const next = !showGhost;
    setShowGhost(next);
    if (writerInstanceRef.current) {
      if (next) {
        writerInstanceRef.current.showOutline();
      } else {
        writerInstanceRef.current.hideOutline();
      }
    }
  };

  // Play animation
  const playAnimation = () => {
    if (!writerInstanceRef.current || isAnimating) return;
    setIsAnimating(true);
    setFeedback({
      type: 'info',
      text: '🎬 Đang trình chiếu thứ tự viết nét mẫu...',
    });
    writerInstanceRef.current.animateCharacter({
      onComplete: () => {
        setIsAnimating(false);
        setFeedback({
          type: 'info',
          text: '👉 Đến lượt bạn! Hãy viết theo thứ tự nét vừa được hướng dẫn.',
        });
        startSmartQuiz(writerInstanceRef.current);
      },
    });
  };

  // Hint stroke
  const giveHint = () => {
    if (!writerInstanceRef.current) return;
    writerInstanceRef.current.animateStroke(currentStrokeIdx, {
      onComplete: () => {
        setFeedback({
          type: 'info',
          text: `💡 Hãy vẽ theo nét thứ ${currentStrokeIdx + 1} vừa nhấp nháy!`,
        });
      },
    });
  };

  // Reset Smart Quiz
  const handleResetQuiz = () => {
    if (writerInstanceRef.current) {
      startSmartQuiz(writerInstanceRef.current);
    }
  };

  // Initialize Freehand canvas
  useEffect(() => {
    if (practiceMode !== 'freehand') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 12;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    clearCanvas();
  }, [practiceMode, selectedCharIdx]);

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
                <span>Tập Viết Chữ Hán Thông Minh (米字格)</span>
                <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 font-bold text-[10px]">
                  {word.level || 'HSK'}
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Tự hoàn thiện nét vẽ & phát hiện bắt lỗi sai thứ tự nét bút.
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
        <div className="p-5 sm:p-6 space-y-4 flex-1">
          {/* Practice Mode Switcher */}
          <div className="flex items-center justify-between p-1 bg-slate-100 rounded-2xl">
            <button
              onClick={() => setPracticeMode('smart')}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
                practiceMode === 'smart'
                  ? 'bg-white text-rose-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🤖 Luyện Viết Thông Minh (Tự Nắn Nét)
            </button>
            <button
              onClick={() => setPracticeMode('freehand')}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
                practiceMode === 'freehand'
                  ? 'bg-white text-rose-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🖌️ Vẽ Tự Do
            </button>
          </div>

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
                        ? 'bg-rose-600 text-white border-rose-600 shadow-md shadow-rose-600/30'
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

          {/* Feedback banner */}
          {practiceMode === 'smart' && feedback && (
            <div
              className={`p-3 rounded-2xl text-xs font-bold flex items-center justify-between gap-2 transition-all ${
                feedback.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : feedback.type === 'mistake'
                  ? 'bg-rose-50 text-rose-800 border border-rose-300 animate-bounce'
                  : feedback.type === 'complete'
                  ? 'bg-amber-50 text-amber-900 border border-amber-300'
                  : 'bg-blue-50 text-blue-800 border border-blue-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{feedback.type === 'mistake' ? '⚠️' : feedback.type === 'complete' ? '🏆' : '💡'}</span>
                <span>{feedback.text}</span>
              </div>
              {feedback.type === 'mistake' && (
                <button
                  onClick={giveHint}
                  className="px-2 py-0.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-[11px] flex-shrink-0"
                >
                  Gợi ý
                </button>
              )}
            </div>
          )}

          {/* Classical Mǐ Zì Gé (米字格) Drawing Area */}
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="mi-zi-ge-wrapper shadow-lg overflow-hidden relative">
              {practiceMode === 'smart' ? (
                <>
                  {writerLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-20 gap-2">
                      <div className="w-8 h-8 border-3 border-rose-600 border-t-transparent rounded-full animate-spin" />
                      <span className="text-xs font-bold text-slate-600">Đang nạp nét chữ...</span>
                    </div>
                  )}
                  <div
                    ref={writerContainerRef}
                    className="w-full h-full cursor-crosshair relative z-10 flex items-center justify-center"
                  />
                </>
              ) : (
                <>
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
                </>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {practiceMode === 'smart' ? (
                <>
                  <button
                    onClick={playAnimation}
                    disabled={isAnimating}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all disabled:opacity-50"
                  >
                    <span>▶️</span>
                    <span>{isAnimating ? 'Đang chiếu...' : 'Xem viết mẫu'}</span>
                  </button>
                  <button
                    onClick={giveHint}
                    disabled={isCompleted || isAnimating}
                    className="px-3 py-1.5 rounded-xl border border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-semibold flex items-center gap-1.5 transition-all disabled:opacity-50"
                  >
                    <span>💡</span>
                    <span>Gợi ý nét</span>
                  </button>
                  <button
                    onClick={handleResetQuiz}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all"
                  >
                    <span>🧹</span>
                    <span>Viết lại</span>
                  </button>
                  <button
                    onClick={toggleOutline}
                    className="px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all"
                  >
                    <span>{showGhost ? '👁️ Ẩn nét mờ' : '👁️ Hiện nét mờ'}</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={clearCanvas}
                    className="px-3.5 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all"
                  >
                    <span>🧹 Xóa vẽ lại</span>
                  </button>
                  <button
                    onClick={() => setShowGhost(!showGhost)}
                    className="px-3.5 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all"
                  >
                    <span>{showGhost ? 'Ẩn nét mẫu' : 'Hiện nét mẫu'}</span>
                  </button>
                </>
              )}
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
                Tổng số: {totalStrokes || radicalInfo.strokeCount} nét
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed">
              💡 <span className="font-semibold text-slate-900">Chiết tự & Cách nhớ:</span> {radicalInfo.mnemonic}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50 rounded-b-3xl">
          <div className="text-xs text-slate-500">
            {isCompleted ? (
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <span>🎉</span> Đã hoàn thành chữ!
              </span>
            ) : (
              <span>Vẽ đúng toàn bộ nét để nhận +15 XP!</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-all"
            >
              Đóng
            </button>
            {practiceMode === 'freehand' && (
              <button
                onClick={handleFinish}
                disabled={!hasDrawn}
                className={`px-5 py-2 rounded-xl text-xs font-bold text-white transition-all shadow-md ${
                  hasDrawn
                    ? 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/30 active:scale-95'
                    : 'bg-slate-300 cursor-not-allowed'
                }`}
              >
                Hoàn thành (+15 XP)
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
