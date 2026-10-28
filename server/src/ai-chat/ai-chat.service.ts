import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { AI_PERSONAS, QUICK_VOICE_TOPICS, Persona } from './ai-chat.data';

export interface SpokenAnalysisResult {
  fluencyScore: number;
  grammarHighlight: string[];
  nativePolish: string;
  grammarNotes: string;
}

export interface PersonaResponseResult {
  hanzi: string;
  pinyin: string;
  vi: string;
}

export interface ThoughtProcessResult {
  intent: string;
  grammarAndTone: string;
  strategy: string;
}

export interface RealAiMessageResult {
  personaId: string;
  userText: string;
  thoughtProcess: ThoughtProcessResult;
  reply: PersonaResponseResult;
  speechAnalysis: SpokenAnalysisResult;
  isRealAi: boolean;
  provider: string;
  timestamp: string;
}

@Injectable()
export class AiChatService {
  private readonly logger = new Logger(AiChatService.name);
  private readonly personas = AI_PERSONAS;
  private readonly quickTopics = QUICK_VOICE_TOPICS;

  getPersonas(): Persona[] {
    return this.personas;
  }

  getPersonaById(id: string): Persona {
    const persona = this.personas.find((p) => p.id === id);
    if (!persona) {
      throw new NotFoundException(`Không tìm thấy nhân vật AI: ${id}`);
    }
    return persona;
  }

  getQuickTopics() {
    return this.quickTopics;
  }

  /**
   * Real LLM Integration: Google Gemini / OpenAI / DeepSeek
   */
  async chatWithRealAi(params: {
    personaId: string;
    userText: string;
    history?: { sender: 'user' | 'ai'; hanzi: string }[];
    apiKey?: string;
    provider?: string;
    model?: string;
  }): Promise<RealAiMessageResult> {
    const persona = this.getPersonaById(params.personaId);
    const userText = (params.userText || '').trim();

    // Check for API key in request or environment variables
    const provider = (params.provider || 'gemini').toLowerCase();
    const apiKey =
      params.apiKey ||
      process.env.GEMINI_API_KEY ||
      process.env.OPENAI_API_KEY ||
      process.env.DEEPSEEK_API_KEY ||
      process.env.AI_API_KEY;

    if (apiKey) {
      try {
        if (provider === 'gemini' || apiKey.startsWith('AIza') || apiKey.startsWith('AQ')) {
          try {
            return await this.callGeminiApi(persona, userText, params.history || [], apiKey, params.model);
          } catch (geminiErr: any) {
            this.logger.warn(`Gemini API call failed: ${geminiErr.message}. Attempting OpenAI-compatible endpoint...`);
            return await this.callOpenAiCompatibleApi(
              persona,
              userText,
              params.history || [],
              apiKey,
              'https://api.openai.com/v1/chat/completions',
              'gpt-4o-mini',
              'OpenAI',
            );
          }
        } else if (provider === 'deepseek') {
          return await this.callOpenAiCompatibleApi(
            persona,
            userText,
            params.history || [],
            apiKey,
            'https://api.deepseek.com/chat/completions',
            params.model || 'deepseek-chat',
            'DeepSeek',
          );
        } else {
          return await this.callOpenAiCompatibleApi(
            persona,
            userText,
            params.history || [],
            apiKey,
            'https://api.openai.com/v1/chat/completions',
            params.model || 'gpt-4o-mini',
            'OpenAI',
          );
        }
      } catch (err: any) {
        this.logger.error(`Error calling Real AI API (${provider}): ${err.message}`);
      }
    }

    // Fallback if no API key is provided or API failed
    return this.generateSimulatedAiResponse(persona, userText);
  }

  /**
   * Google Gemini API Integration (gemini-1.5-flash / gemini-2.0-flash)
   */
  private async callGeminiApi(
    persona: Persona,
    userText: string,
    history: { sender: 'user' | 'ai'; hanzi: string }[],
    apiKey: string,
    model = 'gemini-1.5-flash',
  ): Promise<RealAiMessageResult> {
    const systemInstruction = `
Bạn là ${persona.name}, giữ vai trò "${persona.role}".
Bối cảnh: Bạn đang trong phiên luyện khẩu ngữ giao tiếp tiếng Trung 1-1 trực tiếp với người học Việt Nam.
Tính cách & văn phong:
${persona.id === 'teacher_wang' ? '- Nhẹ nhàng, ân cần, khen ngợi động viên, phân tích tỉ mỉ ngữ pháp HSK, hướng dẫn cách nói tự nhiên.' : ''}
${persona.id === 'boss_li' ? '- Nhiệt tình, xởi lởi, mang đậm phong cách chủ tiệm ẩm thực Trung Hoa bản địa, giới thiệu món ăn, văn hóa ẩm thực.' : ''}
${persona.id === 'friend_david' ? '- Năng động, vui tươi, sử dụng ngôn ngữ giới trẻ, từ lóng thân mật, rủ đi chơi, chia sẻ kinh nghiệm thực tế.' : ''}
${persona.id === 'manager_zhang' ? '- Chuyên nghiệp, lịch thiệp, giọng điệu phỏng vấn tuyển dụng & công sở, đặt câu hỏi tình huống logic.' : ''}

Nhiệm vụ:
Phân tích câu nói của người dùng và suy nghĩ phản hồi.
BẮT BUỘC trả về định dạng JSON thuần túy (không markdown, không bọc \`\`\`json) theo đúng cấu trúc sau:
{
  "thoughtProcess": {
    "intent": "Phân tích thực tế người dùng muốn truyền đạt điều gì",
    "grammarAndTone": "Đánh giá thực tế về ngữ pháp, thanh điệu, từ loại, mức độ phù hợp ngữ cảnh",
    "strategy": "Chiến lược tư duy phản hồi của bạn để dẫn dắt người học tiếp tục nói"
  },
  "reply": {
    "hanzi": "Câu trả lời tiếng Trung tự nhiên phù hợp với nhân vật",
    "pinyin": "Phiên âm Pinyin có dấu thanh điệu chuẩn xác",
    "vi": "Dịch nghĩa tiếng Việt tự nhiên, chuẩn sắc thái"
  },
  "speechAnalysis": {
    "fluencyScore": 88,
    "grammarHighlight": ["Chủ điểm ngữ pháp 1", "Chủ điểm ngữ pháp 2"],
    "nativePolish": "Cách diễn đạt của người bản xứ hay hơn hoặc tự nhiên hơn",
    "grammarNotes": "Nhận xét và lời khuyên ngữ pháp thực tế cho câu người dùng nói"
  }
}
`;

    // Construct conversation history for Gemini
    const contents: any[] = [];
    contents.push({
      role: 'user',
      parts: [{ text: `SYSTEM INSTRUCTION:\n${systemInstruction}` }],
    });
    contents.push({
      role: 'model',
      parts: [{ text: `Tôi đã hiểu rõ vai trò ${persona.name} và sẽ luôn trả về JSON phân tích suy nghĩ + phản hồi chính xác.` }],
    });

    // Add recent history (up to last 6 turns)
    const recent = history.slice(-6);
    for (const h of recent) {
      contents.push({
        role: h.sender === 'user' ? 'user' : 'model',
        parts: [{ text: h.hanzi }],
      });
    }

    contents.push({
      role: 'user',
      parts: [{ text: userText }],
    });

    const candidateModels = [
      model,
      'gemma-4-31b-it',
      'gemini-3.5-flash',
      'gemini-3.8-flash',
      'gemini-2.0-flash',
      'gemini-1.5-flash',
    ].filter((m, idx, arr) => m && arr.indexOf(m) === idx);

    let lastError: any = null;

    for (const currentModel of candidateModels) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${currentModel}:generateContent?key=${apiKey}`;
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents,
            generationConfig: {
              temperature: 0.7,
              responseMimeType: 'application/json',
            },
          }),
        });

        if (!response.ok) {
          const errText = await response.text();
          lastError = new Error(`Model ${currentModel} error (${response.status}): ${errText}`);
          continue;
        }

        const data = await response.json();
        const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!rawText) continue;

        const parsed = JSON.parse(rawText.replace(/```json/g, '').replace(/```/g, '').trim());

        return {
          personaId: persona.id,
          userText,
          thoughtProcess: {
            intent: parsed.thoughtProcess?.intent || 'Người học giao tiếp tự nhiên.',
            grammarAndTone: parsed.thoughtProcess?.grammarAndTone || 'Ngữ pháp ổn định.',
            strategy: parsed.thoughtProcess?.strategy || 'Tiếp tục duy trì hội thoại.',
          },
          reply: {
            hanzi: parsed.reply?.hanzi || '你说得很好！',
            pinyin: parsed.reply?.pinyin || 'Nǐ shuō de hěn hǎo!',
            vi: parsed.reply?.vi || 'Bạn nói rất tốt!',
          },
          speechAnalysis: {
            fluencyScore: Number(parsed.speechAnalysis?.fluencyScore) || 85,
            grammarHighlight: Array.isArray(parsed.speechAnalysis?.grammarHighlight)
              ? parsed.speechAnalysis.grammarHighlight
              : ['Giao tiếp thực tế'],
            nativePolish: parsed.speechAnalysis?.nativePolish || userText,
            grammarNotes: parsed.speechAnalysis?.grammarNotes || 'Câu nói rõ nghĩa.',
          },
          isRealAi: true,
          provider: `Google Gemini (${currentModel})`,
          timestamp: new Date().toISOString(),
        };
      } catch (err) {
        lastError = err;
      }
    }

    throw lastError || new Error('Tất cả các model Gemini đều không phản hồi.');
  }

  /**
   * OpenAI / DeepSeek Compatible API Integration
   */
  private async callOpenAiCompatibleApi(
    persona: Persona,
    userText: string,
    history: { sender: 'user' | 'ai'; hanzi: string }[],
    apiKey: string,
    endpointUrl: string,
    modelName: string,
    providerName: string,
  ): Promise<RealAiMessageResult> {
    const systemPrompt = `
Bạn là ${persona.name}, đóng vai "${persona.role}".
Bối cảnh: Đang đàm thoại tiếng Trung 1-1 với người học.
BẮT BUỘC trả về đúng định dạng JSON object:
{
  "thoughtProcess": {
    "intent": "Phân tích thực tế người dùng muốn nói gì",
    "grammarAndTone": "Đánh giá ngữ pháp, thanh điệu và sắc thái",
    "strategy": "Chiến lược tư duy phản hồi của bạn để kích thích người học nói tiếp"
  },
  "reply": {
    "hanzi": "Câu trả lời tiếng Trung tự nhiên",
    "pinyin": "Pīnyīn có dấu chuẩn xác",
    "vi": "Dịch nghĩa tiếng Việt"
  },
  "speechAnalysis": {
    "fluencyScore": 88,
    "grammarHighlight": ["Chủ điểm ngữ pháp 1"],
    "nativePolish": "Cách nói chuẩn bản xứ hơn",
    "grammarNotes": "Lời khuyên ngữ pháp thực tế"
  }
}
`;

    const messages: any[] = [{ role: 'system', content: systemPrompt }];
    const recent = history.slice(-6);
    for (const h of recent) {
      messages.push({
        role: h.sender === 'user' ? 'user' : 'assistant',
        content: h.hanzi,
      });
    }
    messages.push({ role: 'user', content: userText });

    const response = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: modelName,
        messages,
        temperature: 0.7,
        response_format: { type: 'json_object' },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`${providerName} API error (${response.status}): ${errText}`);
    }

    const data = await response.json();
    const rawContent = data?.choices?.[0]?.message?.content;
    const parsed = JSON.parse(rawContent.trim());

    return {
      personaId: persona.id,
      userText,
      thoughtProcess: {
        intent: parsed.thoughtProcess?.intent || 'Giao tiếp khẩu ngữ.',
        grammarAndTone: parsed.thoughtProcess?.grammarAndTone || 'Ngữ pháp ổn định.',
        strategy: parsed.thoughtProcess?.strategy || 'Khuyến khích hội thoại.',
      },
      reply: {
        hanzi: parsed.reply?.hanzi || '你说得真好！',
        pinyin: parsed.reply?.pinyin || 'Nǐ shuō de zhēn hǎo!',
        vi: parsed.reply?.vi || 'Bạn nói rất tốt!',
      },
      speechAnalysis: {
        fluencyScore: Number(parsed.speechAnalysis?.fluencyScore) || 85,
        grammarHighlight: Array.isArray(parsed.speechAnalysis?.grammarHighlight)
          ? parsed.speechAnalysis.grammarHighlight
          : ['Khẩu ngữ giao tiếp'],
        nativePolish: parsed.speechAnalysis?.nativePolish || userText,
        grammarNotes: parsed.speechAnalysis?.grammarNotes || 'Ý diễn đạt rõ ràng.',
      },
      isRealAi: true,
      provider: `${providerName} (${modelName})`,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Simulated dynamic engine when offline or API key not yet configured
   */
  private generateSimulatedAiResponse(persona: Persona, userText: string): RealAiMessageResult {
    const analysis = this.analyzeSpoken(userText);
    const reply = this.generateResponse(persona.id, userText);

    return {
      personaId: persona.id,
      userText,
      thoughtProcess: {
        intent: `Người dùng chia sẻ: "${userText}".`,
        grammarAndTone: `Độ tự nhiên ước tính ${analysis.fluencyScore}%. Cấu trúc câu dễ hiểu.`,
        strategy: `Nhân vật ${persona.name} phản hồi khích lệ và mở rộng đề tài để duy trì cuộc trò chuyện.`,
      },
      reply,
      speechAnalysis: analysis,
      isRealAi: false,
      provider: 'Chế độ giả lập (Cần nhập API Key để kích hoạt AI thực tế)',
      timestamp: new Date().toISOString(),
    };
  }

  analyzeSpoken(userText: string): SpokenAnalysisResult {
    const text = (userText || '').trim();
    const clean = text.replace(/[，。！？\s]/g, '');

    let fluencyScore = 85;
    const grammarNotes: string[] = [];
    let nativePolish = '';
    const grammarHighlight: string[] = [];

    if (clean.length >= 6) fluencyScore += 5;
    if (clean.length >= 10) fluencyScore += 5;

    if (text.includes('你好') || text.includes('很高兴')) {
      grammarHighlight.push('Chào hỏi xã giao (问候礼仪)');
      nativePolish = `${text} 今天过得怎么样？`;
      grammarNotes.push('Sử dụng câu chào hỏi lịch sự rất chuẩn mực.');
    } else if (text.includes('多少钱') || text.includes('贵') || text.includes('便宜')) {
      grammarHighlight.push('Mặc cả & Mua sắm (购物与议价)');
      nativePolish = text.includes('便宜') ? text : `${text}，老板能便宜一点吗？`;
      grammarNotes.push('Mẫu câu hỏi giá chuẩn. Thêm trợ từ ngữ khí "吧" hoặc "吗" giúp câu uyển chuyển hơn.');
    } else if (text.includes('想吃') || text.includes('点菜') || text.includes('菜单') || text.includes('买单')) {
      grammarHighlight.push('Gọi món nhà hàng (餐饮点餐)');
      nativePolish = `服务员，${text}`;
      grammarNotes.push('Khi ở nhà hàng, thêm từ xưng hô "服务员" (phục vụ ơi) ở đầu câu để thể hiện sự lễ phép.');
    } else if (text.includes('怎么走') || text.includes('在哪儿') || text.includes('去')) {
      grammarHighlight.push('Hỏi đường & Di chuyển (问路与方位)');
      nativePolish = text.startsWith('请问') ? text : `请问，${text}`;
      grammarNotes.push('Hỏi đường nên bắt đầu bằng từ "请问" (Xin hỏi) để người bản xứ nhiệt tình chỉ đường hơn.');
    } else if (text.includes('我叫') || text.includes('我是') || text.includes('越南')) {
      grammarHighlight.push('Giới thiệu bản thân (自我介绍)');
      nativePolish = `${text}，请多关照！`;
      grammarNotes.push('Cấu trúc câu khẳng định "我是..." dùng rất chính xác.');
    } else {
      grammarHighlight.push('Giao tiếp tự do (日常对话)');
      nativePolish = text;
      grammarNotes.push('Câu diễn đạt rõ nghĩa. Bạn có thể sử dụng thêm các phó từ chỉ mức độ như "非常", "特别" để câu tự nhiên hơn.');
    }

    return {
      fluencyScore: Math.min(fluencyScore, 98),
      grammarHighlight,
      nativePolish,
      grammarNotes: grammarNotes.join(' '),
    };
  }

  generateResponse(personaId: string, userText: string): PersonaResponseResult {
    const text = (userText || '').toLowerCase();

    if (personaId === 'teacher_wang') {
      if (text.includes('你好') || text.includes('老师好')) {
        return {
          hanzi: '你好啊！发音非常标准，声调读得很准。你今天想练习什么场景的口语呢？',
          pinyin: 'Nǐ hǎo a! Fāyīn fēicháng biāozhǔn, shēngdiào dú de hěn zhǔn. Nǐ jīntiān xiǎng liànxí shénme chǎngjǐng de kǒuyǔ ne?',
          vi: 'Chào em! Phát âm của em rất chuẩn đấy, thanh điệu đọc rất chính xác. Hôm nay em muốn cùng cô luyện khẩu ngữ về tình huống nào?',
        };
      }
      return {
        hanzi: `你说得真好：“${userText}”。语法非常通顺！能再多跟我分享一些你的想法吗？`,
        pinyin: 'Nǐ shuō de zhēn hǎo! Yǔfǎ fēicháng tōngshùn! Néng zài duō gēn wǒ fēnxiǎng yìxiē nǐ de xiǎngfǎ ma?',
        vi: `Em nói rất tốt: "${userText}". Ngữ pháp rất trôi chảy! Em có thể chia sẻ thêm cho cô nghe suy nghĩ của em được không?`,
      };
    }

    if (personaId === 'boss_li') {
      if (text.includes('点菜') || text.includes('菜单') || text.includes('吃')) {
        return {
          hanzi: '好嘞！这是咱们店的菜单。我强烈推荐麻婆豆腐和宫保鸡丁，香辣可口！你能吃辣吗？',
          pinyin: 'Hǎo lei! Zhè shì zánmen diàn de càidān. Wǒ qiángliè tuījiàn mápó dòufu hé gōngbǎo jīdīng, xiāng là kěkǒu! Nǐ néng chī là ma?',
          vi: 'Dạ được ngay! Đây là thực đơn của quán. Bác nhiệt tình đề cử món Đậu phụ Tứ Xuyên và Gà Cung Bảo nhé, thơm cay đậm đà! Bạn có ăn được cay không?',
        };
      }
      return {
        hanzi: `收到！顾客满意就是我们最大的追求。你还想加点什么特色小吃或者主食吗？`,
        pinyin: 'Shōudào! Gùkè mǎnyì jiùshì wǒmen zuì dà de zhuīqiú. Nǐ hái xiǎng jiā diǎn shénme tèsè xiǎochī huòzhě zhǔshí ma?',
        vi: `Bác nghe rõ rồi! Khách hàng hài lòng là niềm vui lớn nhất của quán. Bạn có muốn gọi thêm món ăn vặt đặc sắc hay cơm mì gì nữa không?`,
      };
    }

    if (personaId === 'friend_david') {
      return {
        hanzi: `哇塞，你说的这句“${userText}”太地道了！哥们儿，你中文水平真是一天比一天厉害！等会儿咱们聊点别的？`,
        pinyin: 'Wāsài, nǐ shuō de zhè jù tài dìdào le! Gēmenr, nǐ Zhōngwén shuǐpíng zhēn shì yì tiān bǐ yì tiān lìhai!',
        vi: `Oa, câu bạn nói "${userText}" nghe bản xứ thật đấy! Người anh em, trình độ tiếng Trung của bạn ngày một đỉnh rồi! Lát nữa tụi mình trò chuyện tiếp chủ đề khác nhé?`,
      };
    }

    return {
      hanzi: `感谢你的回答。你对这个问题的见解很有深度。我们公司非常看重跨文化沟通能力，你觉得你的中文优势在哪里？`,
      pinyin: 'Gǎnxiè nǐ de huídá. Nǐ duì zhège wèntí de jiànjiě hěn yǒu shēndù. Wǒmen gōngsī fēicháng kànzhòng kuà wénhuà gōutōng nénglì.',
      vi: `Cảm ơn câu trả lời của bạn. Góc nhìn của bạn đối với vấn đề này rất sâu sắc. Công ty chúng tôi rất coi trọng năng lực giao tiếp đa văn hóa, bạn cảm thấy ưu thế tiếng Trung của mình nằm ở đâu?`,
    };
  }
}
