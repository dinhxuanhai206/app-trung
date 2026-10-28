import React, { useState, useEffect, useRef } from 'react';
import {
  AI_PERSONAS,
  QUICK_VOICE_TOPICS,
  sendChatMessageToAi,
} from '../data/aiChatEngine';

export default function AiLiveChatView({ onGainXP }) {
  const [currentPersonaId, setCurrentPersonaId] = useState('teacher_wang');
  const persona = AI_PERSONAS.find((p) => p.id === currentPersonaId) || AI_PERSONAS[0];

  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  // Auto-speak disabled by default to avoid unexpected auto speech
  const [autoSpeakAi, setAutoSpeakAi] = useState(false);
  const [inputText, setInputText] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [expandedThoughts, setExpandedThoughts] = useState({});

  // Real AI Configuration (stored in localStorage or loaded via .env)
  const USER_DEFAULT_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
  const [aiSettings, setAiSettings] = useState(() => {
    const saved = localStorage.getItem('app_ai_settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.apiKey) return parsed;
      } catch (e) {}
    }
    return {
      provider: 'gemini',
      apiKey: USER_DEFAULT_API_KEY,
      model: 'gemini-1.5-flash',
    };
  });
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [tempApiKey, setTempApiKey] = useState(aiSettings.apiKey || USER_DEFAULT_API_KEY);
  const [tempProvider, setTempProvider] = useState(aiSettings.provider || 'gemini');
  const [tempModel, setTempModel] = useState(aiSettings.model || 'gemini-1.5-flash');

  const chatBottomRef = useRef(null);
  const recognitionRef = useRef(null);

  // Initialize chat when persona changes - KHÔNG tự động đọc khi vào
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsAiSpeaking(false);
    setIsThinking(false);
    setIsListening(false);

    const welcomeMsg = {
      id: 'msg_' + Date.now(),
      sender: 'ai',
      personaId: persona.id,
      hanzi: persona.greeting,
      pinyin: persona.greetingPinyin,
      vi: persona.greetingVi,
      thoughtProcess: {
        intent: 'Lời chào mở đầu buổi luyện khẩu ngữ tương tác 1-1.',
        grammarAndTone: 'Khởi tạo bối cảnh giao tiếp thân thiện theo vai trò của nhân vật.',
        strategy: 'Tạo tâm lý thoải mái để người học tự tin nói hoặc gõ câu tiếng Trung đầu tiên.',
      },
      isRealAi: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([welcomeMsg]);
    // TUYỆT ĐỐI KHÔNG TỰ ĐỘNG ĐỌC KHI VÀO TRANG HOẶC ĐỔI NHÂN VẬT
  }, [currentPersonaId]);

  // Auto scroll chat to bottom
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, interimTranscript, isAiSpeaking, isThinking]);

  const speakAiResponse = (text, gender = 'female') => {
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
    };

    u.onend = handleEnd;
    u.onerror = handleEnd;

    window.speechSynthesis.speak(u);
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsAiSpeaking(false);
  };

  const toggleThought = (msgId) => {
    setExpandedThoughts((prev) => ({
      ...prev,
      [msgId]: !prev[msgId],
    }));
  };

  const saveAiSettings = () => {
    const updated = {
      provider: tempProvider,
      apiKey: tempApiKey.trim(),
      model: tempModel,
    };
    setAiSettings(updated);
    localStorage.setItem('app_ai_settings', JSON.stringify(updated));
    setShowSettingsModal(false);
  };

  const handleSendUserMessage = async (userSpokenText) => {
    const text = (userSpokenText || inputText).trim();
    if (!text) return;

    if (isListening) {
      stopSpeechRecognition();
    }

    const userMsg = {
      id: 'msg_user_' + Date.now(),
      sender: 'user',
      hanzi: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setInterimTranscript('');
    onGainXP(15, 'Trò chuyện khẩu ngữ cùng AI');

    // Kích hoạt trạng thái AI Suy Nghĩ (Thinking Process)
    setIsThinking(true);

    try {
      // GỌI AI THỰC TẾ (Google Gemini / OpenAI / DeepSeek qua Backend NestJS hoặc Client)
      const aiResult = await sendChatMessageToAi({
        persona,
        userText: text,
        history: messages,
        settings: aiSettings,
      });

      // Cập nhật phân tích ngữ pháp vào tin nhắn của user nếu AI phân tích được
      if (aiResult.speechAnalysis) {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === userMsg.id ? { ...m, analysis: aiResult.speechAnalysis } : m
          )
        );
      }

      const aiMsg = {
        id: 'msg_ai_' + Date.now(),
        sender: 'ai',
        personaId: persona.id,
        hanzi: aiResult.reply.hanzi,
        pinyin: aiResult.reply.pinyin,
        vi: aiResult.reply.vi,
        thoughtProcess: aiResult.thoughtProcess,
        isRealAi: aiResult.isRealAi,
        provider: aiResult.provider,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setIsThinking(false);
      setMessages((prev) => [...prev, aiMsg]);

      // Tự động mở chi tiết suy nghĩ cho câu trả lời mới
      setExpandedThoughts((prev) => ({
        ...prev,
        [aiMsg.id]: true,
      }));

      // Chỉ đọc nếu người dùng chủ động BẬT tùy chọn "Tự động phát âm"
      if (autoSpeakAi) {
        speakAiResponse(aiResult.reply.hanzi, persona.gender);
      }
    } catch (err) {
      console.error('Lỗi khi gọi AI:', err);
      setIsThinking(false);
    }
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
      stopSpeaking();
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
        setIsListening(false);
        setInterimTranscript('');
        if (e.error === 'not-allowed') {
          alert('Vui lòng cấp quyền Microphone trên trình duyệt để nói trực tiếp cùng AI nhé!');
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
      startSpeechRecognition();
    }
  };

  const isRealAiConfigured = Boolean(aiSettings.apiKey);

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] min-h-[580px] max-w-5xl mx-auto space-y-3.5">
      {/* Top Bar: Title & AI Provider Status & Audio Toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2.5">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span>🤖</span> AI Giao Tiếp Thực Tế (Real AI Thinking)
            </h2>
            <button
              onClick={() => {
                setTempApiKey(aiSettings.apiKey);
                setTempProvider(aiSettings.provider);
                setTempModel(aiSettings.model);
                setShowSettingsModal(true);
              }}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold border transition-all flex items-center gap-1.5 ${
                isRealAiConfigured
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                  : 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100 animate-pulse'
              }`}
              title="Bấm để cấu hình API Key AI (Gemini / OpenAI / DeepSeek)"
            >
              <span>{isRealAiConfigured ? '🟢' : '⚙️'}</span>
              <span>
                {isRealAiConfigured
                  ? `AI Thực Tế (${aiSettings.provider === 'gemini' ? 'Gemini' : aiSettings.provider})`
                  : 'Chưa nhập API Key (Bấm cài đặt)'}
              </span>
            </button>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            Hội thoại trực tiếp với mô hình ngôn ngữ lớn (LLM), AI thực sự suy nghĩ phân tích ngữ cảnh và phản xạ tự nhiên.
          </p>
        </div>

        {/* Audio controls */}
        <div className="flex items-center gap-2.5 self-end sm:self-auto">
          {isAiSpeaking && (
            <button
              onClick={stopSpeaking}
              className="px-2.5 py-1.5 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-1 transition-all animate-pulse"
              title="Dừng phát âm hiện tại"
            >
              ⏹️ Dừng đọc
            </button>
          )}

          <button
            onClick={() => setAutoSpeakAi((prev) => !prev)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
              autoSpeakAi
                ? 'bg-rose-50 border-rose-300 text-rose-700 shadow-xs'
                : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
            }`}
            title="Bật/Tắt tự động phát âm câu trả lời của AI"
          >
            <span>{autoSpeakAi ? '🔊' : '🔇'}</span>
            <span>Tự đọc: <strong>{autoSpeakAi ? 'BẬT' : 'TẮT'}</strong></span>
          </button>
        </div>
      </div>

      {/* Persona Selection Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {AI_PERSONAS.map((p) => {
          const isSelected = p.id === currentPersonaId;
          return (
            <button
              key={p.id}
              onClick={() => setCurrentPersonaId(p.id)}
              className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 relative overflow-hidden ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-rose-500/40'
                  : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-2xs'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-xl flex-shrink-0 shadow-inner">
                {p.avatar}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-bold text-xs sm:text-sm truncate">{p.name.split(' (')[0]}</div>
                <div className={`text-[11px] truncate ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                  {p.role}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Live Chat Stream */}
      <div className="flex-1 bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 overflow-y-auto shadow-inner space-y-4">
        {messages.map((msg) => {
          if (msg.sender === 'ai') {
            const isExpanded = expandedThoughts[msg.id] !== false; // Mặc định mở
            return (
              <div key={msg.id} className="flex items-start gap-3 max-w-[94%] sm:max-w-[85%]">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 text-white flex items-center justify-center text-xl flex-shrink-0 shadow-md">
                  {persona.avatar}
                </div>
                <div className="space-y-2 flex-1 min-w-0">
                  {/* AI Bubble */}
                  <div className="bg-slate-100/90 text-slate-900 p-4 rounded-2xl rounded-tl-none border border-slate-200 shadow-2xs space-y-1.5">
                    <div className="flex items-center justify-between gap-3 text-xs text-slate-500 pb-1 border-b border-slate-200/60">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-700">{persona.name}</span>
                        {msg.isRealAi && (
                          <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[9px]">
                            AI Thực Tế
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => speakAiResponse(msg.hanzi, persona.gender)}
                        className="text-rose-600 hover:text-rose-700 font-semibold inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md hover:bg-rose-50 transition-colors"
                        title="Bấm để nghe phát âm câu này"
                      >
                        🔊 Nghe phát âm
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

                  {/* AI Real Thought Process Accordion */}
                  {msg.thoughtProcess && (
                    <div className="rounded-xl border border-purple-200/80 bg-purple-50/50 overflow-hidden text-xs text-slate-700 transition-all shadow-2xs">
                      <button
                        onClick={() => toggleThought(msg.id)}
                        className="w-full px-3 py-2 flex items-center justify-between font-semibold text-purple-900 hover:bg-purple-100/60 transition-colors"
                      >
                        <span className="flex items-center gap-1.5">
                          <span>🧠</span>
                          <span>Quá trình suy nghĩ thực tế của AI (Thinking Chain)</span>
                          {msg.provider && (
                            <span className="text-[10px] text-purple-500 font-normal">
                              ({msg.provider})
                            </span>
                          )}
                        </span>
                        <span className="text-[11px] text-purple-600 font-bold">
                          {isExpanded ? '▲ Thu gọn' : '▼ Xem chi tiết'}
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="px-3.5 pb-3 pt-1 space-y-2 border-t border-purple-200/50 bg-white/80">
                          <div>
                            <div className="font-bold text-purple-800 text-[11px] flex items-center gap-1">
                              <span>🎯</span> Phân tích ý định người dùng (Intent):
                            </div>
                            <p className="text-slate-600 pl-4 text-xs">{msg.thoughtProcess.intent}</p>
                          </div>

                          <div>
                            <div className="font-bold text-purple-800 text-[11px] flex items-center gap-1">
                              <span>🧐</span> Đánh giá ngữ pháp & Sắc thái (Grammar & Tone):
                            </div>
                            <p className="text-slate-600 pl-4 text-xs">{msg.thoughtProcess.grammarAndTone}</p>
                          </div>

                          <div>
                            <div className="font-bold text-purple-800 text-[11px] flex items-center gap-1">
                              <span>💡</span> Chiến lược đối đáp sư phạm (Strategy):
                            </div>
                            <p className="text-slate-600 pl-4 text-xs">{msg.thoughtProcess.strategy}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          }

          // User message with Speech Analysis Card
          return (
            <div key={msg.id} className="flex flex-col items-end gap-1.5 ml-auto max-w-[94%] sm:max-w-[85%]">
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

              {/* Speech Analysis Card */}
              {msg.analysis && (
                <div className="w-full bg-emerald-50/80 border border-emerald-200 rounded-xl p-3 text-left space-y-1.5 text-xs text-slate-700 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-800 flex items-center gap-1.5">
                      <span>✨</span>
                      <span>AI Nhận Xét Câu Nói:</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                      {msg.analysis.fluencyScore}% Điểm Lưu Loát
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
            <div className="w-10 h-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center font-bold text-base flex-shrink-0 animate-pulse">
              🎙️
            </div>
            <div className="bg-rose-50 text-rose-900 border border-rose-300 p-3.5 rounded-2xl rounded-tr-none text-base chinese-font italic shadow-xs">
              {interimTranscript} ...
            </div>
          </div>
        )}

        {/* AI Real Thinking Indicator */}
        {isThinking && (
          <div className="flex items-start gap-3 max-w-[85%] animate-fade-in">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center text-xl flex-shrink-0 shadow-md animate-pulse">
              🧠
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 text-purple-900 p-3.5 rounded-2xl rounded-tl-none shadow-xs space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-xs">
                <span>{persona.name} đang suy nghĩ câu trả lời...</span>
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-bounce [animation-delay:0.4s]"></span>
                </span>
              </div>
              <p className="text-[11px] text-purple-700">
                {isRealAiConfigured
                  ? `Mô hình AI (${aiSettings.provider}) đang phân tích ngữ cảnh và tạo tư duy suy nghĩ thực tế...`
                  : 'Đang kết nối xử lý ngôn ngữ tự nhiên...'}
              </p>
            </div>
          </div>
        )}

        {/* AI Speaking Indicator */}
        {isAiSpeaking && (
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-1.5 rounded-full w-fit animate-pulse border border-rose-200">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping"></span>
            <span>{persona.name} đang phát âm câu trả lời...</span>
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
          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white font-bold transition-all flex-shrink-0 shadow-lg relative ${
            isListening
              ? 'bg-rose-600 shadow-rose-600/50 scale-105 animate-pulse ring-4 ring-rose-300'
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
                ? 'Đang lắng nghe giọng bạn nói bằng tiếng Trung... (Bấm nút đỏ để hoàn tất)'
                : 'Bấm micro để nói tiếng Trung, hoặc gõ câu tại đây...'
            }
            className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base font-medium outline-none transition-all ${
              isListening
                ? 'border-rose-500 bg-rose-50 text-rose-800 placeholder-rose-500 font-semibold'
                : 'border-slate-300 bg-slate-50 focus:bg-white focus:border-rose-500'
            }`}
          />
          <button
            onClick={() => handleSendUserMessage()}
            disabled={!inputText.trim()}
            className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-white font-bold text-sm transition-all flex-shrink-0 shadow-xs"
          >
            Gửi
          </button>
        </div>
      </div>

      {/* AI Settings Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-lg w-full shadow-2xl border border-slate-200 space-y-5 animate-scale-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚙️</span>
                <h3 className="text-lg font-bold text-slate-900">
                  Cài Đặt Kết Nối AI Thực Tế (LLM)
                </h3>
              </div>
              <button
                onClick={() => setShowSettingsModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              {/* Provider Selection */}
              <div>
                <label className="block font-bold text-slate-800 mb-1.5">
                  1. Chọn Dịch Vụ AI:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setTempProvider('gemini');
                      setTempModel('gemini-1.5-flash');
                    }}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      tempProvider === 'gemini'
                        ? 'bg-rose-50 border-rose-500 text-rose-700 font-bold ring-2 ring-rose-500/20'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div>🌟 Google Gemini</div>
                    <div className="text-[10px] text-slate-500">Miễn phí & Nhanh</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setTempProvider('openai');
                      setTempModel('gpt-4o-mini');
                    }}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      tempProvider === 'openai'
                        ? 'bg-rose-50 border-rose-500 text-rose-700 font-bold ring-2 ring-rose-500/20'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div>🤖 OpenAI</div>
                    <div className="text-[10px] text-slate-500">GPT-4o-mini</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setTempProvider('deepseek');
                      setTempModel('deepseek-chat');
                    }}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      tempProvider === 'deepseek'
                        ? 'bg-rose-50 border-rose-500 text-rose-700 font-bold ring-2 ring-rose-500/20'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div>🚀 DeepSeek</div>
                    <div className="text-[10px] text-slate-500">R1 / V3 Chat</div>
                  </button>
                </div>
              </div>

              {/* API Key Input */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="font-bold text-slate-800">
                    2. Nhập API Key:
                  </label>
                  {tempProvider === 'gemini' && (
                    <a
                      href="https://aistudio.google.com/app/apikey"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-rose-600 hover:underline font-semibold"
                    >
                      🔗 Lấy Key Gemini miễn phí tại đây
                    </a>
                  )}
                </div>
                <input
                  type="password"
                  value={tempApiKey}
                  onChange={(e) => setTempApiKey(e.target.value)}
                  placeholder={
                    tempProvider === 'gemini'
                      ? 'Dán mã AIzaSy...'
                      : tempProvider === 'deepseek'
                      ? 'Dán mã sk-...'
                      : 'Dán mã sk-proj-...'
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-mono focus:border-rose-500 focus:bg-white outline-none"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  API Key được lưu bảo mật trong trình duyệt của bạn hoặc cấu hình qua file{' '}
                  <code className="text-rose-600 bg-rose-50 px-1 rounded">server/.env</code>.
                </p>
              </div>

              {/* Model Choice */}
              <div>
                <label className="block font-bold text-slate-800 mb-1.5">
                  3. Model Sử Dụng:
                </label>
                <input
                  type="text"
                  value={tempModel}
                  onChange={(e) => setTempModel(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-mono outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowSettingsModal(false)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs hover:bg-slate-50"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={saveAiSettings}
                className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md"
              >
                💾 Lưu & Áp Dụng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
