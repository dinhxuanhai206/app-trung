import React, { useState, useEffect, useRef } from 'react';
import { getLessonListeningSections } from '../data/listeningData';

export default function ListeningView({ lesson, showPinyin, onGainXP }) {
  const sections = React.useMemo(() => {
    return getLessonListeningSections(lesson);
  }, [lesson]);

  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const currentSection = sections[activeSectionIdx] || sections[0];

  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const [showTranslation, setShowTranslation] = useState(true);
  const [blankInput, setBlankInput] = useState('');
  const [quizFeedback, setQuizFeedback] = useState(null);

  // Dynamic custom dialogue generator state
  const [extraDialogues, setExtraDialogues] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Reset playback and input when section or lesson changes
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setCurrentLineIndex(-1);
    setBlankInput('');
    setQuizFeedback(null);
  }, [activeSectionIdx, lesson]);

  const speakSentence = (text, gender = 'female', customSpeed = speed, onEnd = null) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN';
    u.rate = customSpeed;
    // Adjust pitch slightly between male and female personas
    u.pitch = gender === 'male' ? 0.9 : 1.15;

    if (onEnd) {
      u.onend = onEnd;
      u.onerror = onEnd;
    }
    window.speechSynthesis.speak(u);
  };

  const activeDialogues = React.useMemo(() => {
    const list = [...(currentSection?.dialogues || [])];
    if (activeSectionIdx === sections.length) {
      return extraDialogues;
    }
    return list;
  }, [currentSection, activeSectionIdx, sections.length, extraDialogues]);

  const playAllDialogues = (index = 0) => {
    if (index >= activeDialogues.length) {
      setIsPlaying(false);
      setCurrentLineIndex(-1);
      return;
    }
    setIsPlaying(true);
    setCurrentLineIndex(index);
    const line = activeDialogues[index];
    speakSentence(line.hanzi, line.gender, speed, () => {
      setTimeout(() => {
        playAllDialogues(index + 1);
      }, 700);
    });
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentLineIndex(-1);
    } else {
      playAllDialogues(0);
    }
  };

  const handleCheckQuiz = () => {
    const expected = currentSection?.quiz?.missingWord?.trim();
    if (!expected) return;
    const isCorrect = blankInput.trim().toLowerCase() === expected.toLowerCase();
    setQuizFeedback(isCorrect);
    if (isCorrect) {
      onGainXP(15, 'Hoàn thành bài tập nghe điền từ');
    }
  };

  // Generate dynamic listening dialogue from lesson vocabulary
  const handleGenerateCustomDialogue = () => {
    setIsGenerating(true);
    const vocabList = (lesson.matchingWords || []).map((w) => w.hanzi);
    const wordA = vocabList[0] || '中文';
    const wordB = vocabList[1] || '学习';
    const wordC = vocabList[2] || '朋友';
    const wordD = vocabList[3] || '喜欢';

    const generated = [
      {
        id: Date.now() + 1,
        speaker: 'A: 大卫 (David)',
        gender: 'male',
        hanzi: `你好！最近你觉得学习${wordA}怎么样？`,
        pinyin: `Nǐ hǎo! Zuìjìn nǐ juéde xuéxí ${wordA} zěnmeyàng?`,
        vi: `Chào bạn! Dạo này bạn cảm thấy học "${wordA}" thế nào?`,
        highlightWords: [wordA],
      },
      {
        id: Date.now() + 2,
        speaker: 'B: 王兰 (Vương Lan)',
        gender: 'female',
        hanzi: `我觉得很有意思！多练习${wordB}，就会越来越流利。`,
        pinyin: `Wǒ juéde hěn yǒuyìsi! Duō liànxí ${wordB}, jiù huì yuè lái yuè liúlì.`,
        vi: `Mình thấy rất thú vị! Luyện tập "${wordB}" nhiều thì sẽ ngày càng lưu loát.`,
        highlightWords: [wordB],
      },
      {
        id: Date.now() + 3,
        speaker: 'A: 大卫 (David)',
        gender: 'male',
        hanzi: `明天周末，你有空和${wordC}一起去散步吗？`,
        pinyin: `Míngtiān zhōumò, nǐ yǒu kòng hé ${wordC} yìqǐ qù sànbù ma?`,
        vi: `Ngày mai cuối tuần, bạn có rảnh đi dạo cùng "${wordC}" không?`,
        highlightWords: [wordC],
      },
      {
        id: Date.now() + 4,
        speaker: 'B: 王兰 (Vương Lan)',
        gender: 'female',
        hanzi: `太好了！我很${wordD}这个主意，明天见！`,
        pinyin: `Tài hǎo le! Wǒ hěn ${wordD} zhège zhǔyì, míngtiān jiàn!`,
        vi: `Tuyệt quá! Mình rất "${wordD}" ý kiến này, hẹn ngày mai gặp!`,
        highlightWords: [wordD],
      },
    ];

    setTimeout(() => {
      setExtraDialogues(generated);
      setActiveSectionIdx(sections.length);
      setIsGenerating(false);
      onGainXP(10, 'Tạo hội thoại nghe mở rộng từ vựng');
    }, 400);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <span>🎧</span> Kỹ Năng Luyện Nghe Đa Hội Thoại
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Luyện tai với nhiều đoạn hội thoại thực tế được mở rộng từ kho từ vựng bài học.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1 rounded-full bg-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm">
            {sections.length + (extraDialogues.length > 0 ? 1 : 0)} Đoạn Hội Thoại
          </span>
          <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-xs">
            {lesson.level}
          </span>
        </div>
      </div>

      {/* SECTION TABS SELECTOR */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
          Chọn đoạn hội thoại luyện nghe:
        </div>
        <div className="flex flex-wrap gap-2.5">
          {sections.map((sec, idx) => (
            <button
              key={sec.id}
              onClick={() => setActiveSectionIdx(idx)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeSectionIdx === idx
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-bold scale-[1.02]'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>💬</span>
              <span>{sec.title.split(' (')[0]}</span>
            </button>
          ))}

          {extraDialogues.length > 0 && (
            <button
              onClick={() => setActiveSectionIdx(sections.length)}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeSectionIdx === sections.length
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 font-bold scale-[1.02]'
                  : 'bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100'
              }`}
            >
              <span>✨</span>
              <span>Đoạn mở rộng từ vựng AI</span>
            </button>
          )}

          <button
            onClick={handleGenerateCustomDialogue}
            disabled={isGenerating}
            className="px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white shadow-sm transition-all flex items-center gap-2 ml-auto"
            title="Tự động ghép từ vựng bài học thành đoạn hội thoại mới"
          >
            <span>{isGenerating ? '⏳' : '⚡'}</span>
            <span>{isGenerating ? 'Đang tạo...' : '+ Tạo thêm đoạn nghe từ vựng'}</span>
          </button>
        </div>
      </div>

      {/* AUDIO PLAYER CONTROLLER */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <button
            onClick={handleTogglePlay}
            className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold transition-all shadow-lg ${
              isPlaying
                ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/40 text-slate-950 animate-pulse'
                : 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/40 text-white'
            }`}
            title={isPlaying ? 'Tạm dừng' : 'Phát toàn bộ đoạn hội thoại'}
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>
          <div>
            <div className="font-bold text-base flex items-center gap-2">
              <span>{activeSectionIdx === sections.length ? 'Đoạn Mở Rộng Từ Vựng' : currentSection?.title}</span>
              {isPlaying && (
                <span className="inline-flex items-center gap-1 text-xs text-rose-400 font-normal">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                  Đang phát câu {currentLineIndex + 1}/{activeDialogues.length}
                </span>
              )}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              {currentSection?.description || 'Phát âm chuẩn tiếng Phổ thông (zh-CN) với giọng nam/nữ tự nhiên'}
            </div>
          </div>
        </div>

        {/* Player Controls (Speed & View Toggles) */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Translation Toggle */}
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
              showTranslation
                ? 'bg-slate-800 border-slate-600 text-slate-200'
                : 'bg-slate-950 border-slate-700 text-slate-400'
            }`}
            title="Bật/Tắt hiển thị nghĩa tiếng Việt để luyện tai nghe phản xạ"
          >
            {showTranslation ? '👁️ Hiện dịch' : '🙈 Ẩn dịch (Luyện tai)'}
          </button>

          {/* Speed Buttons */}
          <div className="flex items-center gap-1 bg-slate-800/90 p-1 rounded-xl border border-slate-700">
            {[0.75, 1, 1.25, 1.5].map((s) => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  speed === s ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* INTERACTIVE TRANSCRIPT BUBBLES */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-slate-900 text-base">Lời Thoại Hội Thoại Tương Tác</h3>
            <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold">
              {activeDialogues.length} câu đối đáp
            </span>
          </div>
          <span className="text-xs text-slate-500">
            (Bấm vào bất kỳ câu thoại nào để nghe riêng câu đó)
          </span>
        </div>

        <div className="space-y-3.5 pt-2">
          {activeDialogues.map((dlg, idx) => {
            const isLineActive = currentLineIndex === idx;
            const isSpeakerMale = dlg.gender === 'male';

            return (
              <div
                key={dlg.id}
                onClick={() => {
                  setCurrentLineIndex(idx);
                  speakSentence(dlg.hanzi, dlg.gender, speed);
                }}
                className={`p-4 rounded-2xl cursor-pointer border-2 transition-all flex items-start gap-4 ${
                  isLineActive
                    ? 'bg-rose-50/80 border-rose-500 shadow-md ring-2 ring-rose-200 -translate-y-0.5'
                    : 'bg-slate-50/60 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                {/* Speaker Avatar Icon */}
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-base flex-shrink-0 shadow-sm ${
                    isSpeakerMale
                      ? 'bg-blue-600 text-white'
                      : 'bg-rose-600 text-white'
                  }`}
                >
                  {isSpeakerMale ? '👨' : '👩'}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                        isSpeakerMale
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {dlg.speaker}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentLineIndex(idx);
                        speakSentence(dlg.hanzi, dlg.gender, speed);
                      }}
                      className="text-xs font-semibold text-rose-600 hover:text-rose-700 inline-flex items-center gap-1 bg-white px-2 py-1 rounded-md border border-slate-200 shadow-2xs"
                    >
                      <span>🔊 Phát câu</span>
                    </button>
                  </div>

                  {/* Hanzi Text */}
                  <div className="text-xl font-bold text-slate-900 chinese-font leading-relaxed">
                    {dlg.hanzi}
                  </div>

                  {/* Pinyin Text */}
                  {showPinyin && dlg.pinyin && (
                    <div className="text-sm text-amber-600 font-semibold mt-0.5">
                      {dlg.pinyin}
                    </div>
                  )}

                  {/* Vietnamese Meaning */}
                  {showTranslation && dlg.vi && (
                    <div className="text-xs text-slate-600 font-medium mt-1 leading-normal">
                      {dlg.vi}
                    </div>
                  )}

                  {/* Highlighted Vocabulary Badges if present */}
                  {dlg.highlightWords && dlg.highlightWords.length > 0 && (
                    <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                      <span className="text-[11px] text-slate-400 font-semibold">Từ vựng trọng tâm:</span>
                      {dlg.highlightWords.map((hw, hIdx) => (
                        <span
                          key={hIdx}
                          className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 chinese-font"
                        >
                          {hw}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* LISTENING COMPREHENSION QUIZ FOR THIS SECTION */}
      {currentSection?.quiz && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <span>✍️</span> Bài tập nghe & điền từ vào chỗ trống:
            </h4>
            <span className="text-xs text-slate-500">
              Gợi ý: {currentSection.quiz.hint || 'Nghe kỹ câu thoại để điền đúng từ'}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center gap-2 text-lg chinese-font font-medium">
            <span>{currentSection.quiz.sentencePrefix}</span>
            <input
              type="text"
              value={blankInput}
              onChange={(e) => setBlankInput(e.target.value)}
              placeholder="Điền từ"
              className="w-32 px-2 py-1 text-center rounded-lg border-2 border-blue-500 font-bold text-blue-600 outline-none bg-white text-base shadow-inner focus:border-rose-500"
            />
            <span>{currentSection.quiz.sentenceSuffix}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCheckQuiz}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-all shadow-md shadow-blue-600/20"
            >
              ✓ Kiểm tra đáp án
            </button>
            <button
              onClick={() => {
                const full =
                  currentSection.quiz.sentencePrefix +
                  currentSection.quiz.missingWord +
                  currentSection.quiz.sentenceSuffix;
                speakSentence(full, 'female', speed);
              }}
              className="px-4 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl text-sm font-medium transition-all"
            >
              🔊 Nghe lại câu hỏi
            </button>
          </div>

          {quizFeedback !== null && (
            <div
              className={`p-3.5 rounded-xl text-sm font-semibold ${
                quizFeedback ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}
            >
              {quizFeedback
                ? '🎉 Xuất sắc! Bạn đã nghe và điền từ vựng hoàn toàn chính xác (+15 XP).'
                : `❌ Chưa chính xác. Đáp án đúng là: "${currentSection.quiz.missingWord}". Hãy nghe lại và thử lại nhé!`}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
