import React, { useState, useEffect, useRef } from 'react';
import {
  AI_PERSONAS,
  QUICK_VOICE_TOPICS,
  analyzeSpokenChinese,
  generatePersonaLiveResponse,
} from '../data/aiChatEngine';

export default function AiLiveChatView({ onGainXP }) {
  const [currentPersonaId, setCurrentPersonaId] = useState('teacher_wang');
  const persona = AI_PERSONAS.find((p) => p.id === currentPersonaId) || AI_PERSONAS[0];

  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [autoTwoWay, setAutoTwoWay] = useState(true); // Continuous live conversation mode
  const [inputText, setInputText] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');

  const chatBottomRef = useRef(null);
  const recognitionRef = useRef(null);

  // Initialize chat when persona changes
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    const welcomeMsg = {
      id: 'msg_' + Date.now(),
      sender: 'ai',
      personaId: persona.id,
      hanzi: persona.greeting,
      pinyin: persona.greetingPinyin,
      vi: persona.greetingVi,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([welcomeMsg]);
    speakAiResponse(persona.greeting, persona.gender);
  }, [currentPersonaId]);

  // Auto scroll chat to bottom
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, interimTranscript, isAiSpeaking]);

  const speakAiResponse = (text, gender = 'female', onFinished = null) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN';
    u.rate = 0.95;
    u.pitch = gender === 'male' ? 0.9 : 1.15;

    u.onstart = () => {
      setIsAiSpeaking(true);
    };

    const handleEnd = () => {
      setIsAiSpeaking(false);
      if (onFinished) onFinished();
      // If Auto Two-Way mode is enabled, automatically activate mic after AI finishes speaking!
      if (autoTwoWay) {
        setTimeout(() => {
          startSpeechRecognition();
        }, 500);
      }
    };

    u.onend = handleEnd;
    u.onerror = handleEnd;

    window.speechSynthesis.speak(u);
  };

  const handleSendUserMessage = (userSpokenText) => {
    const text = (userSpokenText || inputText).trim();
    if (!text) return;

    // 1. Analyze user speech
    const analysis = analyzeSpokenChinese(text);

    const userMsg = {
      id: 'msg_user_' + Date.now(),
      sender: 'user',
      hanzi: text,
      analysis,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setInterimTranscript('');
    onGainXP(15, 'Trò chuyện khẩu ngữ cùng AI');

    // 2. Generate live AI response after small natural delay
    setTimeout(() => {
      const aiResponse = generatePersonaLiveResponse(persona.id, text);
      const aiMsg = {
        id: 'msg_ai_' + Date.now(),
        sender: 'ai',
        personaId: persona.id,
        hanzi: aiResponse.hanzi,
        pinyin: aiResponse.pinyin,
        vi: aiResponse.vi,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      speakAiResponse(aiResponse.hanzi, persona.gender);
    }, 600);
  };

  const startSpeechRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Trình duyệt chưa hỗ trợ Web Speech API. Khuyên dùng Google Chrome hoặc Microsoft Edge.');
      return;
    }

    if (isListening) return;

    try {
      const rec = new SpeechRecognition();
      rec.lang = 'zh-CN';
      rec.continuous = false;
      rec.interimResults = true;

      rec.onstart = () => {
        setIsListening(true);
        setInterimTranscript('');
      };

      rec.onresult = (e) => {
        let interim = '';
        let final = '';
        for (let i = 0; i < e.results.length; i++) {
          if (e.results[i].isFinal) {
            final += e.results[i][0].transcript;
          } else {
            interim += e.results[i][0].transcript;
          }
        }
        if (interim) setInterimTranscript(interim);
        if (final) {
          handleSendUserMessage(final);
        }
      };

      rec.onerror = (e) => {
        console.log('Speech error:', e);
        setIsListening(false);
        setInterimTranscript('');
        if (e.error === 'not-allowed') {
          alert('Bạn cần bấm "Cho phép" (Allow) quyền sử dụng Microphone trên trình duyệt để nói trực tiếp với AI nhé!');
        }
      };

      rec.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = rec;
      rec.start();
    } catch (err) {
      setIsListening(false);
    }
  };

  const stopSpeechRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  const toggleMic = () => {
    if (isListening) {
      stopSpeechRecognition();
    } else {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsAiSpeaking(false);
      startSpeechRecognition();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] min-h-[550px] max-w-5xl mx-auto space-y-4">
      {/* Top Header & Persona Selector */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span>🤖</span> AI Giao Tiếp Song Song (AI智能对话)
            </h2>
            <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
              Live Voice 1-1
            </span>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Nói tiếng Trung trực tiếp, AI sẽ tự động phân tích ngữ pháp, chỉnh sửa cách nói bản xứ và đối đáp lại như người thật.
          </p>
        </div>

        {/* Auto Two-Way Toggle */}
        <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl">
          <label className="text-xs font-semibold text-slate-700 cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={autoTwoWay}
              onChange={(e) => setAutoTwoWay(e.target.checked)}
              className="w-4 h-4 text-rose-600 rounded cursor-pointer accent-rose-600"
            />
            <span>Đàm thoại liên tục (Tự động mở mic)</span>
          </label>
        </div>
      </div>

      {/* Persona Selection Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {AI_PERSONAS.map((p) => {
          const isSelected = p.id === persona.id;
          return (
            <button
              key={p.id}
              onClick={() => setCurrentPersonaId(p.id)}
              className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-[1.02]'
                  : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-2xl flex-shrink-0">
                {p.avatar}
              </div>
              <div className="min-w-0">
                <div className="font-bold text-sm truncate">{p.name.split(' (')[0]}</div>
                <div className={`text-[11px] truncate ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                  {p.role}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Quick Instruction Banner */}
      <div className="bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-200/80 rounded-xl px-4 py-2.5 text-xs text-slate-700 flex items-center justify-between gap-2 shadow-2xs">
        <div className="flex items-center gap-2">
          <span className="text-base">🎙️</span>
          <span><strong>Cách nói chuyện trực tiếp:</strong> Bạn chỉ cần bấm vào <strong>nút Micro đỏ bên dưới</strong> và nói tiếng Trung (hoặc bấm câu gợi ý sẵn), AI sẽ lập tức phân tích và trò chuyện lại với bạn!</span>
        </div>
        <span className="hidden sm:inline-block text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md flex-shrink-0">
          Nói trực tiếp 1-1
        </span>
      </div>

      {/* Main Live Chat Stream */}
      <div className="flex-1 bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 overflow-y-auto shadow-inner space-y-5">
        {messages.map((msg) => {
          if (msg.sender === 'ai') {
            return (
              <div key={msg.id} className="flex items-start gap-3 max-w-[92%] sm:max-w-[85%]">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 text-white flex items-center justify-center text-xl flex-shrink-0 shadow-md">
                  {persona.avatar}
                </div>
                <div className="bg-slate-100/90 text-slate-900 p-4 rounded-2xl rounded-tl-none border border-slate-200 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between gap-3 text-xs text-slate-500 pb-1 border-b border-slate-200/60">
                    <span className="font-bold text-slate-700">{persona.name}</span>
                    <button
                      onClick={() => speakAiResponse(msg.hanzi, persona.gender)}
                      className="text-rose-600 hover:text-rose-700 font-semibold inline-flex items-center gap-1 text-xs"
                      title="Nghe lại câu này"
                    >
                      🔊 Phát lại
                    </button>
                  </div>
                  <div className="text-lg sm:text-xl font-bold chinese-font text-slate-900 leading-relaxed">
                    {msg.hanzi}
                  </div>
                  {msg.pinyin && (
                    <div className="text-xs sm:text-sm text-amber-600 font-medium">
                      {msg.pinyin}
                    </div>
                  )}
                  {msg.vi && (
                    <div className="text-xs text-slate-600 pt-1 border-t border-slate-200/40">
                      💡 {msg.vi}
                    </div>
                  )}
                </div>
              </div>
            );
          }

          // User message with AI Speech Analysis Card
          return (
            <div key={msg.id} className="flex flex-col items-end gap-1.5 ml-auto max-w-[92%] sm:max-w-[85%]">
              <div className="flex items-start gap-2.5 flex-row-reverse">
                <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-base flex-shrink-0 shadow-md">
                  🧑
                </div>
                <div className="bg-blue-600 text-white p-4 rounded-2xl rounded-tr-none shadow-md space-y-1">
                  <div className="text-lg sm:text-xl font-bold chinese-font leading-relaxed">
                    {msg.hanzi}
                  </div>
                  <div className="text-[11px] text-blue-200 text-right">{msg.timestamp}</div>
                </div>
              </div>

              {/* AI Live Grammar & Fluency Analysis Box */}
              {msg.analysis && (
                <div className="w-full bg-emerald-50/80 border border-emerald-200 rounded-xl p-3 text-left space-y-1.5 text-xs text-slate-700 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-800 flex items-center gap-1.5">
                      <span>✨</span>
                      <span>AI Phân Tích Câu Nói:</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                      {msg.analysis.fluencyScore}% Độ Tự Nhiên
                    </span>
                  </div>

                  {msg.analysis.grammarHighlight?.length > 0 && (
                    <div className="flex items-center gap-1 flex-wrap">
                      <span className="text-[11px] text-slate-500 font-semibold">Chủ điểm ngữ pháp:</span>
                      {msg.analysis.grammarHighlight.map((h, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="text-slate-600">
                    {msg.analysis.grammarNotes}
                  </div>

                  {msg.analysis.nativePolish && (
                    <div className="pt-1 border-t border-emerald-200/60 text-slate-800">
                      <strong>💡 Gợi ý nói chuẩn bản xứ hơn: </strong>
                      <span className="chinese-font font-bold text-emerald-700">{msg.analysis.nativePolish}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Interim Speech Transcript while speaking */}
        {interimTranscript && (
          <div className="flex items-start gap-2.5 flex-row-reverse ml-auto max-w-[85%]">
            <div className="w-10 h-10 rounded-2xl bg-blue-400 text-white flex items-center justify-center font-bold text-base flex-shrink-0 animate-pulse">
              🎙️
            </div>
            <div className="bg-blue-100 text-blue-900 border border-blue-300 p-3 rounded-2xl rounded-tr-none text-base chinese-font italic">
              {interimTranscript} ...
            </div>
          </div>
        )}

        {/* AI Speaking Indicator */}
        {isAiSpeaking && (
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-1.5 rounded-full w-fit animate-pulse border border-rose-200">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping"></span>
            <span>{persona.name} đang trả lời và phát âm...</span>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      {/* Suggested Quick Starters */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        <span className="text-xs font-bold text-slate-400 flex-shrink-0">Gợi ý câu:</span>
        {QUICK_VOICE_TOPICS.map((topic, idx) => (
          <button
            key={idx}
            onClick={() => handleSendUserMessage(topic.text)}
            className="px-3 py-1.5 rounded-xl bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-slate-700 hover:text-rose-700 text-xs font-semibold whitespace-nowrap transition-all shadow-2xs flex-shrink-0"
            title={`${topic.pinyin} - ${topic.vi}`}
          >
            {topic.text}
          </button>
        ))}
      </div>

      {/* Voice & Text Interaction Bar */}
      <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200 shadow-md flex items-center gap-3">
        {/* BIG MIC BUTTON */}
        <button
          onClick={toggleMic}
          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white font-bold transition-all flex-shrink-0 shadow-lg ${
            isListening
              ? 'bg-rose-600 shadow-rose-600/50 scale-105 animate-bounce'
              : 'bg-gradient-to-br from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 shadow-rose-600/30 active:scale-95'
          }`}
          title={isListening ? 'Bấm để dừng ghi âm' : 'Bấm để nói tiếng Trung'}
        >
          {isListening ? '🛑' : '🎙️'}
        </button>

        {/* Text Input Fallback */}
        <div className="flex-1 flex items-center gap-2 min-w-0">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendUserMessage();
            }}
            placeholder={
              isListening
                ? 'Đang lắng nghe giọng bạn nói bằng tiếng Trung...'
                : 'Bấm micro để nói tiếng Trung, hoặc gõ câu tại đây...'
            }
            className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base font-medium outline-none transition-all ${
              isListening
                ? 'border-rose-500 bg-rose-50 text-rose-800 placeholder-rose-400'
                : 'border-slate-300 bg-slate-50 focus:bg-white focus:border-rose-500'
            }`}
          />
          <button
            onClick={() => handleSendUserMessage()}
            disabled={!inputText.trim()}
            className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-white font-bold text-sm transition-all flex-shrink-0"
          >
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
}
