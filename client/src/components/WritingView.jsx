import React, { useRef, useState, useEffect } from 'react';
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
        strokeCount: c.strokeCount || radInfo.strokeCount || 5,
        tips: c.tips || radInfo.story || `Chữ Hán "${c.targetChar}" có bộ thủ cốt lõi ${radInfo.radical || c.targetChar}.`,
      });
    };

    if (lesson.writing?.characters) lesson.writing.characters.forEach(add);
    if (lesson.writing?.targetChar) {
      add({
        targetChar: lesson.writing.targetChar,
        charPinyin: lesson.writing.charPinyin,
        charMeaning: lesson.writing.charMeaning,
        compositionTask: lesson.writing.compositionTask,
      });
    }
    if (lesson.matchingWords) {
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

  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showGhost, setShowGhost] = useState(true);
  const [compositionText, setCompositionText] = useState('');
  const [compositionFeedback, setCompositionFeedback] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
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

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const checkComposition = () => {
    const task = currentChar.compositionTask || lesson.writing.compositionTask;
    let match = true;
    (task?.expectedKeywords || [currentChar.targetChar]).forEach((kw) => {
      if (!compositionText.includes(kw)) match = false;
    });

    const isSuccess = match && compositionText.trim().length >= 2;
    setCompositionFeedback({
      isSuccess,
      solution: task?.sampleSolution || currentChar.sampleSolution,
    });

    if (isSuccess) {
      onGainXP(20, 'Hoàn thành bài tập viết câu');
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-amber-50 to-white border border-amber-100 rounded-2xl p-6 flex justify-between items-center shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <span>✍️</span> Luyện Viết Chữ Hán (米字格) & Đặt Câu
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Tập viết nét chữ trên ô Mễ Tự chuẩn mực và thực hành viết câu tiếng Trung.
          </p>
        </div>
        <span className="px-3.5 py-1 rounded-full bg-amber-600 text-white font-bold text-xs">
          Thư Pháp & Cú Pháp
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Canvas Stroke Practice */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <h3 className="font-bold text-slate-900 text-base">Tập viết trên ô Mễ (米字格)</h3>
            <span className="text-xs text-slate-400 font-semibold">{currentCharIdx + 1} / {characters.length} chữ</span>
          </div>

          {/* Character selection chips */}
          <div className="flex gap-2 justify-center flex-wrap">
            {characters.map((c, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentCharIdx(i);
                  clearCanvas();
                  setCompositionFeedback(null);
                }}
                className={`w-10 h-10 rounded-xl font-bold chinese-font text-lg transition-all ${
                  i === currentCharIdx
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {c.targetChar}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500">
            Chữ: <strong className="text-rose-600 font-bold chinese-font text-lg">{currentChar.targetChar}</strong> ({currentChar.charPinyin}) • {currentChar.charMeaning}
          </div>

          <div className="mi-zi-ge-wrapper">
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
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={clearCanvas}
              className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-semibold"
            >
              🧹 Xóa nét vẽ
            </button>
            <button
              onClick={() => setShowGhost(!showGhost)}
              className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-semibold"
            >
              {showGhost ? 'Ẩn nét mẫu' : 'Hiện nét mẫu'}
            </button>
          </div>

          {/* Phân tích Bộ thủ & Chiết tự của chữ hiện tại */}
          <div className="text-left bg-amber-50/70 border border-amber-200/60 rounded-xl p-3.5 space-y-1.5 text-xs">
            <div className="flex items-center justify-between font-bold text-amber-900">
              <span className="flex items-center gap-1.5">
                <span className="text-base">🔍</span>
                <span>Bộ thủ: <span className="font-extrabold text-rose-700">{currentChar.radical || currentChar.targetChar}</span></span>
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-200/60 text-amber-900 font-semibold text-[11px]">
                {currentChar.strokeCount || 6} nét
              </span>
            </div>
            {currentChar.tips && (
              <p className="text-slate-600 leading-relaxed">
                💡 <span className="font-semibold text-slate-800">Chiết tự & Gợi nhớ:</span> {currentChar.tips}
              </p>
            )}
          </div>
        </div>

        {/* Translation Composition */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Thực Hành Dịch & Viết Câu</h3>
            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-blue-500 text-sm">
              <span className="font-bold text-slate-700">Đề bài: </span>
              <span className="font-medium text-slate-900">{currentChar.compositionPrompt || currentChar.compositionTask?.prompt || lesson.writing.compositionTask?.prompt}</span>
            </div>

            <textarea
              value={compositionText}
              onChange={(e) => setCompositionText(e.target.value)}
              placeholder="Nhập câu tiếng Trung của bạn tại đây... (Ví dụ: 我是越南人)"
              className="w-full h-36 mt-4 p-4 rounded-xl border border-slate-300 focus:border-rose-500 outline-none text-base chinese-font resize-none"
            />
          </div>

          <div>
            <button
              onClick={checkComposition}
              className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-sm font-semibold transition-all shadow-md shadow-rose-600/20"
            >
              Kiểm tra & Nộp bài
            </button>

            {compositionFeedback && (
              <div
                className={`mt-4 p-3.5 rounded-xl text-sm ${
                  compositionFeedback.isSuccess
                    ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                    : 'bg-rose-50 border border-rose-200 text-rose-800'
                }`}
              >
                {compositionFeedback.isSuccess ? (
                  <div>
                    <strong className="block">🎉 Tuyệt vời! Câu của bạn rất chuẩn xác.</strong>
                    <div className="text-xs mt-1">Câu mẫu: {compositionFeedback.solution}</div>
                  </div>
                ) : (
                  <div>
                    <strong className="block">⚠️ Cần chỉnh sửa lại ngữ pháp hoặc từ khóa.</strong>
                    <div className="text-xs mt-1">Gợi ý đáp án: {compositionFeedback.solution}</div>
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
