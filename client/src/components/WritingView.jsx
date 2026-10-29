import React, { useRef, useState, useEffect, useCallback } from 'react';
import HanziWriter from 'hanzi-writer';
import { HANZI_RADICAL_MAP } from '../data/lessonEnricher';

export default function WritingView({ lesson, onGainXP }) {
  const characters = React.useMemo(() => {
    const list = [];
    const seen = new Set();
    const add = (c) => {
      if (!c || !c.targetChar) return;
      if (seen.has(c.targetChar)) return;
      if (!/[\u4e00-\u9fa5]/u.test(c.targetChar)) return;
      seen.add(c.targetChar);

      const radInfo = HANZI_RADICAL_MAP[c.targetChar] || {};
      list.push({
        ...c,
        radical: c.radical || radInfo.radical || `${c.targetChar} (Gốc tự)`,
        strokeCount: c.strokeCount || radInfo.strokeCount || 6,
        tips: c.tips || radInfo.story || `Chữ Hán "${c.targetChar}" có bộ thủ cốt lõi ${radInfo.radical || c.targetChar}.`,
      });
    };

    if (lesson?.writing?.characters) lesson.writing.characters.forEach(add);
    if (lesson?.writing?.targetChar) {
      add({
        targetChar: lesson.writing.targetChar,
        charPinyin: lesson.writing.charPinyin,
        charMeaning: lesson.writing.charMeaning,
        compositionTask: lesson.writing.compositionTask,
      });
    }
    if (lesson?.matchingWords) {
      lesson.matchingWords.forEach((w) => {
        for (const ch of w.hanzi) {
          if (list.length >= 20) break;
          add({
            targetChar: ch,
            charPinyin: '',
            charMeaning: `Chữ trong từ "${w.hanzi}" (${w.vi})`,
            compositionTask: {
              prompt: `Luyện tập viết chữ Hán "${ch}" và đặt câu giao tiếp.`,
              expectedKeywords: [ch],
              sampleSolution: `${w.hanzi}`,
            },
          });
        }
      });
    }

    const BACKUP_CHARS = ['你', '好', '我', '是', '大', '卫', '王', '兰', '很', '高', '兴', '认', '识', '谢', '再', '见', '老', '师', '学', '生'];
    for (const ch of BACKUP_CHARS) {
      if (list.length >= 20) break;
      add({
        targetChar: ch,
        charPinyin: '',
        charMeaning: `Chữ Hán cơ bản: ${ch}`,
        compositionTask: {
          prompt: `Luyện viết chữ Hán "${ch}" vào ô lưới 米字格 bên dưới.`,
          expectedKeywords: [ch],
          sampleSolution: `${ch}`,
        },
      });
    }
    return list.slice(0, 20);
  }, [lesson]);

  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const currentChar = characters[currentCharIdx] || characters[0];

  // Modes: 'smart' (HanziWriter quiz with auto-snapping & order check) vs 'freehand' (2D Canvas)
  const [practiceMode, setPracticeMode] = useState('smart');

  // HanziWriter refs & state
  const writerContainerRef = useRef(null);
  const writerInstanceRef = useRef(null);
  const [writerLoading, setWriterLoading] = useState(false);
  const [showGhost, setShowGhost] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStrokeIdx, setCurrentStrokeIdx] = useState(0);
  const [totalStrokes, setTotalStrokes] = useState(currentChar?.strokeCount || 6);
  const [mistakesCount, setMistakesCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: 'success' | 'mistake' | 'complete' | 'info', text: string }

  // Freehand Canvas Ref
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // Composition task state
  const [compositionText, setCompositionText] = useState('');
  const [compositionFeedback, setCompositionFeedback] = useState(null);

  // Speech helper
  const speakText = (text) => {
    if ('speechSynthesis' in window && text) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  };

  // Start / Restart Smart Quiz
  const startSmartQuiz = useCallback((writer) => {
    if (!writer) return;
    setIsCompleted(false);
    setMistakesCount(0);
    setCurrentStrokeIdx(0);
    setFeedback({
      type: 'info',
      text: '✍️ Hãy dùng chuột hoặc ngón tay viết nét đầu tiên theo thứ tự nét chuẩn.',
    });

    writer.quiz({
      onCorrectStroke: (data) => {
        // data: { strokeNum, mistakesOnStroke, totalMistakes, strokesRemaining }
        const nextIdx = data.strokeNum + 1;
        const total = nextIdx + data.strokesRemaining;
        setCurrentStrokeIdx(nextIdx);
        setTotalStrokes(total);
        setFeedback({
          type: 'success',
          text: `✅ Rất chuẩn! Đã hoàn thiện nét thứ ${nextIdx} / ${total}. Hãy viết nét kế tiếp!`,
        });
      },
      onMistake: (data) => {
        // data: { strokeNum, mistakesOnStroke, totalMistakes }
        setMistakesCount(data.totalMistakes);
        setFeedback({
          type: 'mistake',
          text: `❌ Sai thứ tự nét hoặc vẽ sai hướng! Cần viết nét thứ ${data.strokeNum + 1} trước. (Quy tắc: từ trên xuống dưới, từ trái sang phải)`,
        });
      },
      onComplete: (summary) => {
        setIsCompleted(true);
        setCurrentStrokeIdx(totalStrokes);
        setFeedback({
          type: 'complete',
          text: `🎉 Xuất sắc! Bạn đã hoàn thành đúng chuẩn toàn bộ chữ "${currentChar.targetChar}" (${summary.totalMistakes} lần viết sai)!`,
        });
        speakText(currentChar.targetChar);
        if (onGainXP) {
          onGainXP(20, `Luyện viết đúng chuẩn chữ: ${currentChar.targetChar}`);
        }
      },
    });
  }, [currentChar.targetChar, totalStrokes, onGainXP]);

  // Initialize or re-render HanziWriter when currentChar or mode changes
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
      const writer = HanziWriter.create(container, currentChar.targetChar, {
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
        leniency: 1.25, // Tự động bắt nét & hoàn thiện nét mượt mà
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
            text: 'Không tải được dữ liệu nét chữ này từ máy chủ. Bạn có thể chuyển sang "Vẽ Tự Do" để tập viết.',
          });
        },
      });

      writerInstanceRef.current = writer;
    } catch (err) {
      console.error('HanziWriter init error:', err);
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
  }, [currentChar.targetChar, practiceMode]);

  // Toggle Ghost Outline
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

  // Play Stroke Animation Demonstration
  const playAnimation = () => {
    if (!writerInstanceRef.current || isAnimating) return;
    setIsAnimating(true);
    setFeedback({
      type: 'info',
      text: '🎬 Đang trình chiếu thứ tự viết nét mẫu chuẩn...',
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

  // Hint next stroke
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

  // Reset current character
  const handleResetQuiz = () => {
    if (writerInstanceRef.current) {
      startSmartQuiz(writerInstanceRef.current);
    }
  };

  // Freehand Canvas setup & helpers
  useEffect(() => {
    if (practiceMode !== 'freehand') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 12;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    clearFreehandCanvas();
  }, [practiceMode, currentChar.targetChar]);

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

  const clearFreehandCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // Composition Task Checker
  const checkComposition = () => {
    const task = currentChar.compositionTask || lesson?.writing?.compositionTask;
    let match = true;
    (task?.expectedKeywords || [currentChar.targetChar]).forEach((kw) => {
      if (!compositionText.includes(kw)) match = false;
    });

    const isSuccess = match && compositionText.trim().length >= 2;
    setCompositionFeedback({
      isSuccess,
      solution: task?.sampleSolution || currentChar.sampleSolution,
    });

    if (isSuccess && onGainXP) {
      onGainXP(20, 'Hoàn thành bài tập viết câu');
    }
  };

  return (
    <div className="space-y-6">
      {/* Banner Header */}
      <div className="bg-gradient-to-r from-amber-50 via-rose-50 to-white border border-amber-200/70 rounded-3xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✍️</span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Luyện Viết Chữ Hán Thông Minh (米字格)
            </h2>
            <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 font-extrabold text-xs">
              AI Bắt Nét Chuẩn
            </span>
          </div>
          <p className="text-slate-600 text-sm mt-1 max-w-2xl leading-relaxed">
            Hệ thống nhận diện nét vẽ thông minh: <strong>Tự động hoàn thiện nét vẽ</strong> chuẩn thư pháp và <strong>phát hiện cảnh báo khi viết sai thứ tự nét</strong>.
          </p>
        </div>

        {/* Practice Mode Switcher */}
        <div className="flex items-center p-1 bg-white border border-slate-200 rounded-2xl shadow-xs self-stretch md:self-auto">
          <button
            onClick={() => setPracticeMode('smart')}
            className={`flex-1 md:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              practiceMode === 'smart'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🤖 Luyện Viết Thông Minh</span>
          </button>
          <button
            onClick={() => setPracticeMode('freehand')}
            className={`flex-1 md:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              practiceMode === 'freehand'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🖌️ Vẽ Tự Do</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Character Selection & Grid (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600">
                Danh sách chữ Hán bài học:
              </span>
              <h3 className="font-extrabold text-slate-900 text-base">
                Ô Tập Viết Mễ Tự (米字格)
              </h3>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
              Chữ {currentCharIdx + 1} / {characters.length}
            </span>
          </div>

          {/* Character selection chips */}
          <div className="flex gap-2 justify-start flex-wrap max-h-24 overflow-y-auto p-1">
            {characters.map((c, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentCharIdx(i);
                  setCompositionFeedback(null);
                }}
                className={`w-10 h-10 rounded-xl font-bold chinese-font text-lg transition-all flex items-center justify-center ${
                  i === currentCharIdx
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 scale-105 ring-2 ring-rose-400'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 active:scale-95'
                }`}
              >
                {c.targetChar}
              </button>
            ))}
          </div>

          {/* Character Title & Pronunciation */}
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-extrabold text-rose-600 chinese-font">
                {currentChar.targetChar}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-800">
                    {currentChar.charPinyin || 'hànzì'}
                  </span>
                  <button
                    onClick={() => speakText(currentChar.targetChar)}
                    className="p-1 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-700 text-xs transition-all"
                    title="Phát âm tiếng Trung"
                  >
                    🔊 Nghe
                  </button>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {currentChar.charMeaning}
                </div>
              </div>
            </div>

            {/* Stroke progress badge */}
            {practiceMode === 'smart' && (
              <div className="text-right">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Tiến độ nét:
                </span>
                <span className="text-xs font-extrabold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-100">
                  {currentStrokeIdx} / {totalStrokes} nét
                </span>
              </div>
            )}
          </div>

          {/* Dynamic Feedback Banner */}
          {practiceMode === 'smart' && feedback && (
            <div
              className={`p-3 rounded-2xl text-xs font-bold flex items-center justify-between gap-2 transition-all ${
                feedback.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 animate-pulse'
                  : feedback.type === 'mistake'
                  ? 'bg-rose-50 text-rose-800 border border-rose-300 animate-bounce'
                  : feedback.type === 'complete'
                  ? 'bg-amber-50 text-amber-900 border border-amber-300 shadow-sm'
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
                  className="px-2.5 py-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-[11px] flex-shrink-0 transition-all shadow-xs"
                >
                  💡 Xem gợi ý nét này
                </button>
              )}
            </div>
          )}

          {/* Main Writing Box (Mi Zi Ge) */}
          <div className="flex flex-col items-center justify-center pt-1 pb-2">
            <div className="relative">
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
                        {currentChar.targetChar}
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
                      className="absolute inset-0 z-10 cursor-crosshair w-full h-full"
                    />
                  </>
                )}
              </div>

              {/* Status Indicator Pill */}
              {practiceMode === 'smart' && mistakesCount > 0 && !isCompleted && (
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-red-600 text-white px-3 py-0.5 rounded-full text-[11px] font-extrabold shadow-md flex items-center gap-1 z-20">
                  <span>❌</span>
                  <span>Đã viết sai: {mistakesCount} lần</span>
                </div>
              )}
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center justify-center gap-2 pt-1 flex-wrap">
            {practiceMode === 'smart' ? (
              <>
                <button
                  onClick={playAnimation}
                  disabled={isAnimating}
                  className="px-3.5 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 disabled:opacity-50"
                >
                  <span>▶️</span>
                  <span>{isAnimating ? 'Đang chiếu...' : 'Xem viết mẫu'}</span>
                </button>
                <button
                  onClick={giveHint}
                  disabled={isCompleted || isAnimating}
                  className="px-3.5 py-2 border border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 disabled:opacity-50"
                >
                  <span>💡</span>
                  <span>Gợi ý nét tiếp</span>
                </button>
                <button
                  onClick={handleResetQuiz}
                  className="px-3.5 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95"
                >
                  <span>🧹</span>
                  <span>Viết lại</span>
                </button>
                <button
                  onClick={toggleOutline}
                  className="px-3.5 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95"
                >
                  <span>{showGhost ? '👁️ Ẩn nét mờ' : '👁️ Hiện nét mờ'}</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={clearFreehandCanvas}
                  className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5"
                >
                  <span>🧹 Xóa nét vẽ</span>
                </button>
                <button
                  onClick={() => setShowGhost(!showGhost)}
                  className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5"
                >
                  <span>{showGhost ? 'Ẩn nét mẫu' : 'Hiện nét mẫu'}</span>
                </button>
              </>
            )}
          </div>

          {/* Radical & Mnemonic Card */}
          <div className="text-left bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl p-4 space-y-2 text-xs">
            <div className="flex items-center justify-between font-bold text-amber-950">
              <span className="flex items-center gap-1.5">
                <span className="text-base">🔍</span>
                <span>
                  Bộ thủ cốt lõi: <strong className="font-extrabold text-rose-700 text-sm">{currentChar.radical || currentChar.targetChar}</strong>
                </span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-900 font-extrabold text-[11px]">
                Tổng số: {totalStrokes || currentChar.strokeCount || 6} nét
              </span>
            </div>
            {currentChar.tips && (
              <p className="text-slate-700 leading-relaxed pt-1 border-t border-amber-200/50">
                💡 <strong className="text-slate-900">Chiết tự & Mẹo ghi nhớ:</strong> {currentChar.tips}
              </p>
            )}
            <div className="text-[11px] text-amber-800/80 pt-0.5 flex items-center gap-1.5">
              <span>📌</span>
              <span><strong>Quy tắc bút thuận:</strong> Ngang trước sổ sau, phẩy trước mác sau, trên trước dưới sau, trái trước phải sau, ngoài trước trong sau, vào trước đóng sau.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Sentence Composition Practice (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                Ứng dụng thực hành:
              </span>
              <h3 className="font-extrabold text-slate-900 text-base">
                Dịch & Viết Câu Tiếng Trung
              </h3>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/70 text-sm space-y-1">
              <span className="font-extrabold text-blue-900 block text-xs uppercase tracking-wider">
                🎯 Đề bài thực hành:
              </span>
              <p className="font-semibold text-slate-800 text-sm leading-relaxed">
                {currentChar.compositionPrompt ||
                  currentChar.compositionTask?.prompt ||
                  lesson?.writing?.compositionTask?.prompt ||
                  `Đặt một câu tiếng Trung có chứa chữ "${currentChar.targetChar}".`}
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 block">
                Viết câu của bạn (bằng chữ Hán):
              </label>
              <textarea
                value={compositionText}
                onChange={(e) => setCompositionText(e.target.value)}
                placeholder={`Nhập câu tiếng Trung có chữ "${currentChar.targetChar}" tại đây... (Ví dụ: 你好, 我是...)`}
                className="w-full h-36 p-4 rounded-2xl border border-slate-200 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 outline-none text-base chinese-font resize-none transition-all shadow-inner"
              />
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <button
              onClick={checkComposition}
              className="w-full py-3 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white rounded-2xl text-sm font-extrabold transition-all shadow-md shadow-rose-600/20 active:scale-98 flex items-center justify-center gap-2"
            >
              <span>✅ Kiểm tra & Nộp bài (+20 XP)</span>
            </button>

            {compositionFeedback && (
              <div
                className={`p-4 rounded-2xl text-sm transition-all border ${
                  compositionFeedback.isSuccess
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900 shadow-sm'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}
              >
                {compositionFeedback.isSuccess ? (
                  <div className="space-y-1">
                    <strong className="block font-bold text-emerald-800 flex items-center gap-1.5">
                      <span>🎉</span>
                      <span>Tuyệt vời! Câu của bạn rất chuẩn xác.</span>
                    </strong>
                    <div className="text-xs text-emerald-700">
                      Gợi ý câu mẫu: <strong className="chinese-font">{compositionFeedback.solution}</strong>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <strong className="block font-bold text-rose-800 flex items-center gap-1.5">
                      <span>⚠️</span>
                      <span>Chưa đạt yêu cầu.</span>
                    </strong>
                    <p className="text-xs text-rose-700">
                      Hãy chắc chắn câu có chứa chữ <strong className="chinese-font font-bold">{currentChar.targetChar}</strong> và độ dài từ 2 ký tự trở lên.
                    </p>
                    <div className="text-xs text-rose-800 font-semibold mt-1">
                      Tham khảo mẫu: <span className="chinese-font font-bold">{compositionFeedback.solution}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
