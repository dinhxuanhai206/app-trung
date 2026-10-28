import React, { useState } from 'react';

export default function ReadingView({ lesson, showPinyin, onGainXP }) {
  const [selectedWord, setSelectedWord] = useState(
    lesson.reading.tokens.find((t) => t.pinyin) || lesson.reading.tokens[0]
  );
  const [quizState, setQuizState] = useState({ answered: false, isCorrect: false });

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      window.speechSynthesis.speak(u);
    }
  };

  const handleQuizAnswer = (isCorrect) => {
    setQuizState({ answered: true, isCorrect });
    if (isCorrect) {
      onGainXP(15, 'Hoàn thành câu hỏi đọc');
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-rose-50 to-white border border-rose-100 rounded-2xl p-6 flex justify-between items-center shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <span>📖</span> Kỹ Năng Đọc Hiểu & Tra Từ Tương Tác
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Bấm vào bất kỳ từ vựng Hán tự nào để xem phiên âm Pinyin, âm Hán Việt và nghe phát âm.
          </p>
        </div>
        <span className="px-3.5 py-1 rounded-full bg-rose-600 text-white font-bold text-xs uppercase tracking-wider">
          {lesson.level}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Article Column */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 pb-4 mb-6 border-b border-slate-100 chinese-font">
              {lesson.reading.title}
            </h3>

            <div className="text-lg leading-loose space-x-1">
              {lesson.reading.tokens.map((token, idx) => {
                if (token.isSpeaker) {
                  return (
                    <div key={idx} className="font-bold text-rose-600 mt-4 mb-1 text-base">
                      {token.hanzi}
                    </div>
                  );
                }
                if (!token.pinyin) {
                  return <span key={idx} className="text-slate-700">{token.hanzi}</span>;
                }
                return (
                  <span
                    key={idx}
                    onClick={() => {
                      setSelectedWord(token);
                      speakText(token.hanzi);
                    }}
                    className="inline-flex flex-col items-center cursor-pointer px-1.5 py-0.5 rounded-md hover:bg-rose-100 transition-colors"
                  >
                    {showPinyin && (
                      <span className="text-xs font-semibold text-rose-600 leading-none mb-0.5 select-none">
                        {token.pinyin}
                      </span>
                    )}
                    <span className="text-xl font-medium chinese-font text-slate-900">
                      {token.hanzi}
                    </span>
                  </span>
                );
              })}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-slate-50 border-l-4 border-amber-400 text-sm text-slate-600">
              <strong className="block text-slate-800 mb-1">💡 Bản dịch đối chiếu:</strong>
              <p className="whitespace-pre-line leading-relaxed">{lesson.reading.translationVi}</p>
            </div>
          </div>

          {/* Reading Comprehension Quiz */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 className="text-base font-bold text-slate-900 mb-3">Kiểm tra độ hiểu bài:</h4>
            <p className="text-sm font-medium text-slate-700 mb-4">{lesson.reading.quiz.question}</p>
            
            <div className="flex flex-col gap-2.5">
              {lesson.reading.quiz.options.map((opt, idx) => (
                <button
                  key={idx}
                  disabled={quizState.answered}
                  onClick={() => handleQuizAnswer(opt.correct)}
                  className={`p-3.5 rounded-xl border text-left text-sm transition-all ${
                    quizState.answered
                      ? opt.correct
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold'
                        : 'bg-slate-50 border-slate-200 text-slate-400'
                      : 'border-slate-200 hover:border-rose-400 hover:bg-rose-50/50'
                  }`}
                >
                  {opt.text}
                </button>
              ))}
            </div>

            {quizState.answered && (
              <div
                className={`mt-4 p-3 rounded-lg text-sm font-semibold ${
                  quizState.isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                }`}
              >
                {quizState.isCorrect
                  ? '🎉 Chính xác! Bạn đã hiểu đúng nội dung đoạn hội thoại.'
                  : '❌ Chưa chính xác. Hãy đối chiếu lại đoạn hội thoại nhé!'}
              </div>
            )}
          </div>

          {/* Lesson Vocabulary Summary Table */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>📚</span> Bảng Từ Vựng Trọng Tâm Trong Bài
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase">
                    <th className="pb-3">Chữ Hán</th>
                    <th className="pb-3">Pinyin</th>
                    <th className="pb-3">Hán Việt</th>
                    <th className="pb-3">Nghĩa Tiếng Việt</th>
                    <th className="pb-3 text-center">Phát Âm</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {lesson.reading.tokens
                    .filter((t) => t.pinyin && t.vi)
                    .map((word, idx) => (
                      <tr key={idx} className="hover:bg-rose-50/50 transition-colors">
                        <td className="py-2.5 font-bold chinese-font text-rose-600 text-base">{word.hanzi}</td>
                        <td className="py-2.5 text-slate-600 font-medium">{word.pinyin}</td>
                        <td className="py-2.5 text-slate-500">{word.hv || '—'}</td>
                        <td className="py-2.5 text-emerald-700 font-semibold">{word.vi}</td>
                        <td className="py-2.5 text-center">
                          <button
                            onClick={() => speakText(word.hanzi)}
                            className="w-8 h-8 rounded-full bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white inline-flex items-center justify-center transition-all text-xs"
                            title="Nghe phát âm"
                          >
                            🔊
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Dictionary Column */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 bg-white rounded-2xl p-6 border-2 border-rose-100 shadow-md">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
              <span className="text-xs uppercase font-bold tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">
                Sổ Tay Tra Từ
              </span>
              <button
                onClick={() => speakText(selectedWord?.hanzi)}
                className="w-10 h-10 rounded-full bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white flex items-center justify-center transition-all text-lg shadow-sm"
                title="Nghe phát âm"
              >
                🔊
              </button>
            </div>

            <div className="text-4xl font-extrabold text-rose-600 chinese-font leading-tight">
              {selectedWord?.hanzi || '—'}
            </div>
            <div className="text-lg font-semibold text-amber-500 mt-1">
              {selectedWord?.pinyin || ''}
            </div>

            <div className="mt-5 space-y-3">
              <div>
                <span className="text-xs uppercase font-bold text-slate-400 block">Nghĩa Tiếng Việt</span>
                <span className="text-sm font-bold text-emerald-700">{selectedWord?.vi || '—'}</span>
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-slate-400 block">Âm Hán Việt</span>
                <span className="text-sm text-slate-800 font-medium">{selectedWord?.hv || 'Đang cập nhật'}</span>
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-slate-400 block">Câu Ví Dụ</span>
                <span className="text-sm text-slate-600 italic chinese-font">{selectedWord?.sample || `${selectedWord?.hanzi} 是常用的词语。`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
