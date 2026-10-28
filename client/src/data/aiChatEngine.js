/**
 * AI Real-Time Conversational Partner Engine
 * Provides intelligent speech analysis, native fluency polish,
 * and contextual two-way live dialogue responses for Chinese language learners.
 */

export const AI_PERSONAS = [
  {
    id: 'teacher_wang',
    name: '王老师 (Cô giáo Vương)',
    role: 'Giáo viên khẩu ngữ kiên nhẫn',
    avatar: '👩‍🏫',
    gender: 'female',
    bgGradient: 'from-rose-500 to-pink-600',
    greeting: '你好！我是你的中文口语辅导老师王老师。今天想和我聊些什么呢？你可以用语音直接对我说！',
    greetingPinyin: 'Nǐ hǎo! Wǒ shì nǐ de Zhōngwén kǒuyǔ fǔdǎo lǎoshī Wáng lǎoshī. Jīntiān xiǎng hé wǒ liáo xiē shénme ne?',
    greetingVi: 'Chào bạn! Cô là cô giáo Vương phụ trách luyện nói tiếng Trung của bạn. Hôm nay bạn muốn trò chuyện về chủ đề gì nào? Hãy bấm mic và nói trực tiếp với cô nhé!',
  },
  {
    id: 'boss_li',
    name: '李老板 (Bác chủ quán ăn)',
    role: 'Chủ tiệm ẩm thực nhiệt tình',
    avatar: '👨‍🍳',
    gender: 'male',
    bgGradient: 'from-amber-500 to-orange-600',
    greeting: '欢迎光临！两位里面请！今天想吃点什么好吃的？我们店的招牌菜特别多！',
    greetingPinyin: 'Huānyíng guānglín! Liǎng wèi lǐmiàn qǐng! Jīntiān xiǎng chī diǎn shénme hǎochī de?',
    greetingVi: 'Hoan nghênh quý khách! Mời vào trong ngồi! Hôm nay bạn muốn thưởng thức món ngon gì nào? Quán bác có rất nhiều món đặc sản đấy!',
  },
  {
    id: 'friend_david',
    name: '大卫 (Bạn học David)',
    role: 'Bạn thân lưu học sinh cởi mở',
    avatar: '🙋‍♂️',
    gender: 'male',
    bgGradient: 'from-blue-500 to-cyan-600',
    greeting: '嗨！好久不见啊朋友！最近中文学得怎么样？周末有空一起出去玩吗？',
    greetingPinyin: 'Hāi! Hǎojiǔ bùjiàn a péngyou! Zuìjìn Zhōngwén xué de zěnmeyàng?',
    greetingVi: 'Chào bạn! Lâu rồi không gặp nhé! Dạo này học tiếng Trung thế nào rồi? Cuối tuần rảnh cùng đi chơi không?',
  },
  {
    id: 'manager_zhang',
    name: '张经理 (Quản lý Trương)',
    role: 'Phỏng vấn & Giao tiếp công sở',
    avatar: '💼',
    gender: 'male',
    bgGradient: 'from-indigo-600 to-slate-800',
    greeting: '你好，欢迎来到我们公司面试。请先做一个简短的自我介绍吧。',
    greetingPinyin: 'Nǐ hǎo, huānyíng lái dào wǒmen gōngsī miànshì. Qǐng xiān zuò yí gè jiǎnduǎn de zìwǒ jièshào ba.',
    greetingVi: 'Xin chào, chào mừng bạn đến với buổi phỏng vấn tại công ty chúng tôi. Xin mời bạn giới thiệu sơ lược về bản thân mình trước.',
  },
];

export const QUICK_VOICE_TOPICS = [
  { text: '你好，很高兴认识你！', pinyin: 'Nǐ hǎo, hěn gāoxìng rènshi nǐ!', vi: 'Xin chào, rất vui được làm quen với bạn!' },
  { text: '我想点一份麻婆豆腐和米饭。', pinyin: 'Wǒ xiǎng diǎn yí fèn mápó dòufu hé mǐfàn.', vi: 'Tôi muốn gọi một phần đậu phụ Tứ Xuyên và cơm.' },
  { text: '请问去故宫坐地铁怎么走？', pinyin: 'Qǐngwèn qù Gùgōng zuò dìtiě zěnme zǒu?', vi: 'Xin hỏi đi đến Cố Cung bằng tàu điện ngầm đi thế nào?' },
  { text: '这个多少钱？能便宜一点吗？', pinyin: 'Zhège duōshao qián? Néng piányi yìdiǎn ma?', vi: 'Cái này bao nhiêu tiền? Bớt chút được không?' },
  { text: '今天天气真好，我们去喝咖啡吧！', pinyin: 'Jīntiān tiānqì zhēn hǎo, wǒmen qù hē kāfēi ba!', vi: 'Hôm nay thời tiết đẹp quá, chúng mình đi uống cà phê đi!' },
  { text: '我是越南人，我正在努力学中文。', pinyin: 'Wǒ shì Yuènán rén, wǒ zhèngzài nǔlì xué Zhōngwén.', vi: 'Tôi là người Việt Nam, tôi đang nỗ lực học tiếng Trung.' },
];

/**
 * Intelligent Analyzer for User Spoken Chinese
 */
export function analyzeSpokenChinese(userText) {
  const text = (userText || '').trim();
  const clean = text.replace(/[，。！？\s]/g, '');

  let fluencyScore = 85;
  let grammarNotes = [];
  let nativePolish = '';
  let grammarHighlight = [];

  if (clean.length >= 6) fluencyScore += 5;
  if (clean.length >= 10) fluencyScore += 5;

  // Pattern detection & suggestions
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

/**
 * Generate Live Persona Response to User's Spoken Input
 */
export function generatePersonaLiveResponse(personaId, userText) {
  const text = (userText || '').toLowerCase();

  // 1. Teacher Wang
  if (personaId === 'teacher_wang') {
    if (text.includes('你好') || text.includes('老师好')) {
      return {
        hanzi: '你好啊！发音非常标准，声调读得很准。你今天想练习什么场景的口语呢？',
        pinyin: 'Nǐ hǎo a! Fāyīn fēicháng biāozhǔn, shēngdiào dú de hěn zhǔn. Nǐ jīntiān xiǎng liànxí shénme chǎngjǐng de kǒuyǔ ne?',
        vi: 'Chào em! Phát âm của em rất chuẩn đấy, thanh điệu đọc rất chính xác. Hôm nay em muốn cùng cô luyện khẩu ngữ về tình huống nào?',
      };
    }
    if (text.includes('越南') || text.includes('我是')) {
      return {
        hanzi: '很高兴认识你！越南学生学中文通常进步特别快。你学中文多长时间了？',
        pinyin: 'Hěn gāoxìng rènshi nǐ! Yuènán xuésheng xué Zhōngwén tōngcháng jìnbù tèbié kuài. Nǐ xué Zhōngwén duō cháng shíjiān le?',
        vi: 'Rất vui được biết em! Học sinh Việt Nam học tiếng Trung thường tiến bộ rất nhanh. Em đã học tiếng Trung được bao lâu rồi?',
      };
    }
    if (text.includes('天气') || text.includes('下雨') || text.includes('热') || text.includes('冷')) {
      return {
        hanzi: '今天天气确实不错呢！好天气让人心情愉快。你平时喜欢在这样的天气做什么？',
        pinyin: 'Jīntiān tiānqì quèshí búcuò ne! Hǎo tiānqì ràng rén xīnqíng yúkuài. Nǐ píngshí xǐhuan zài zhèyàng de tiānqì zuò shénme?',
        vi: 'Thời tiết hôm nay đúng là rất tuyệt! Thời tiết đẹp khiến tâm trạng sảng khoái. Bình thường em thích làm gì vào thời tiết thế này?',
      };
    }
    if (text.includes('难') || text.includes('不会') || text.includes('生词')) {
      return {
        hanzi: '别担心，学语言要循序渐进。每天坚持说十句话，很快你就能流利交流啦！继续对我说说你的一天吧！',
        pinyin: 'Bié dānxīn, xué yǔyán yào xúnxù jiànjìn. Měitiān jiānchí shuō shí jù huà, hěn kuài nǐ jiù néng liúlì jiāoliú la!',
        vi: 'Đừng lo lắng, học ngoại ngữ cần tích lũy từng ngày. Mỗi ngày kiên trì nói 10 câu, chẳng mấy chốc em sẽ giao tiếp trôi chảy thôi! Hãy kể cho cô nghe về một ngày của em nhé!',
      };
    }
    return {
      hanzi: `你说得真好：“${userText}”。语法非常通顺！能再多跟我分享一些你的想法吗？`,
      pinyin: 'Nǐ shuō de zhēn hǎo! Yǔfǎ fēicháng tōngshùn! Néng zài duō gēn wǒ fēnxiǎng yìxiē nǐ de xiǎngfǎ ma?',
      vi: `Em nói rất tốt: "${userText}". Ngữ pháp rất trôi chảy! Em có thể chia sẻ thêm cho cô nghe suy nghĩ của em được không?`,
    };
  }

  // 2. Boss Li (Restaurant)
  if (personaId === 'boss_li') {
    if (text.includes('菜单') || text.includes('点菜') || text.includes('吃') || text.includes('推荐')) {
      return {
        hanzi: '好嘞！这是咱们店的菜单。我强烈推荐麻婆豆腐和宫保鸡丁，香辣可口！你能吃辣吗？',
        pinyin: 'Hǎo lei! Zhè shì zánmen diàn de càidān. Wǒ qiángliè tuījiàn mápó dòufu hé gōngbǎo jīdīng, xiāng là kěkǒu! Nǐ néng chī là ma?',
        vi: 'Dạ được ngay! Đây là thực đơn của quán. Bác nhiệt tình đề cử món Đậu phụ Tứ Xuyên và Gà Cung Bảo nhé, thơm cay đậm đà! Bạn có ăn được cay không?',
      };
    }
    if (text.includes('辣') || text.includes('不辣') || text.includes('微辣')) {
      return {
        hanzi: '没问题！厨房师傅这就给你少放辣椒，做成微辣的！要不要再来两听冰镇可乐解解辣？',
        pinyin: 'Méi wèntí! Chúfáng shīfu zhè jiù gěi nǐ shǎo fàng làjiāo, zuò chéng wēi là de! Yào bu yào zài lái liǎng tīng bīngzhèn kělè jiě jie là?',
        vi: 'Không thành vấn đề! Đầu bếp sẽ cho ít ớt làm thành cay nhẹ cho bạn ngay! Có muốn thêm 2 lon Coca ướp lạnh giải cay không nào?',
      };
    }
    if (text.includes('买单') || text.includes('多少钱') || text.includes('结账')) {
      return {
        hanzi: '两位一共是一百二十八元。扫桌子上的微信或者支付宝二维码都能付，谢谢光临！',
        pinyin: 'Liǎng wèi yígòng shì yībǎi èrshíbā yuán. Sǎo zhuōzi shàng de Wēixìn huòzhě Zhīfùbǎo èrwéimǎ dōu néng fù, xièxie guānglín!',
        vi: 'Hai bạn tổng cộng hết 128 tệ nhé. Quét mã QR WeChat hoặc Alipay dán trên bàn là thanh toán được ngay, cảm ơn hai bạn ghé quán!',
      };
    }
    return {
      hanzi: `收到！顾客满意就是我们最大的追求。你还想加点什么特色小吃或者主食吗？`,
      pinyin: 'Shōudào! Gùkè mǎnyì jiùshì wǒmen zuì dà de zhuīqiú. Nǐ hái xiǎng jiā diǎn shénme tèsè xiǎochī huòzhě zhǔshí ma?',
      vi: `Bác nghe rõ rồi! Khách hàng hài lòng là niềm vui lớn nhất của quán. Bạn có muốn gọi thêm món ăn vặt đặc sắc hay cơm mì gì nữa không?`,
    };
  }

  // 3. Friend David
  if (personaId === 'friend_david') {
    if (text.includes('你好') || text.includes('嗨') || text.includes('周末')) {
      return {
        hanzi: '嗨！太巧了，我正打算去三里屯逛街呢。你要是一起去的话，我们去喝杯珍珠奶茶怎么样？',
        pinyin: 'Hāi! Tài qiǎo le, wǒ zhèng dǎsuan qù Sānlǐtún guàngjiē ne. Nǐ yàoshi yìqǐ qù de huà, wǒmen qù hē bēi zhēnzhū nǎichá zěnmeyàng?',
        vi: 'Chào bạn! Khéo quá, mình đang định đến phố Tam Lý Đồn dạo phố đây. Nếu bạn đi cùng thì chúng mình ghé uống ly trà sữa trân châu nhé?',
      };
    }
    if (text.includes('多少钱') || text.includes('贵') || text.includes('买')) {
      return {
        hanzi: '哈哈，买东西一定要学会砍价！在市场里你直接对老板说“便宜点行不行”，一般都能便宜十块钱！',
        pinyin: 'Hāhā, mǎi dōngxi yídìng yào xuéhuì kǎnjià! Zài shìchǎng lǐ nǐ zhíjiē duì lǎobǎn shuō "piányi diǎn xíng bu xíng", yìbān dōu néng piányi shí kuài qián!',
        vi: 'Haha, đi mua sắm nhất định phải biết mặc cả! Ở chợ bạn cứ bảo chủ quán "Bớt chút được không", thường sẽ được giảm ngay 10 tệ đấy!',
      };
    }
    return {
      hanzi: `哇塞，你说的这句“${userText}”太地道了！哥们儿，你中文水平真是一天比一天厉害！等会儿咱们聊点别的？`,
      pinyin: 'Wāsài, nǐ shuō de zhè jù tài dìdào le! Gēmenr, nǐ Zhōngwén shuǐpíng zhēn shì yì tiān bǐ yì tiān lìhai!',
      vi: `Oa, câu bạn nói "${userText}" nghe bản xứ thật đấy! Người anh em, trình độ tiếng Trung của bạn ngày một đỉnh rồi! Lát nữa tụi mình trò chuyện tiếp chủ đề khác nhé?`,
    };
  }

  // 4. Manager Zhang (Office / Interview)
  if (personaId === 'manager_zhang') {
    if (text.includes('介绍') || text.includes('我是') || text.includes('毕业')) {
      return {
        hanzi: '很好，你的表达很清晰自信。请问你在过去的学习或工作中，遇到最大的挑战是什么？你是如何解决的？',
        pinyin: 'Hěn hǎo, nǐ de biǎodá hěn qīngxī zìxìn. Qǐngwèn nǐ zài guòqù de xuéxí huò gōngzuò zhōng, yùdào zuì dà de tiǎozhàn shì shénme?',
        vi: 'Rất tốt, cách diễn đạt của bạn rất rõ ràng và tự tin. Xin hỏi trong quá trình học tập hoặc làm việc trước đây, thử thách lớn nhất bạn gặp phải là gì và bạn đã giải quyết ra sao?',
      };
    }
    return {
      hanzi: `感谢你的回答。你对这个问题的见解很有深度。我们公司非常看重跨文化沟通能力，你觉得你的中文优势在哪里？`,
      pinyin: 'Gǎnxiè nǐ de huídá. Nǐ duì zhège wèntí de jiànjiě hěn yǒu shēndù. Wǒmen gōngsī fēicháng kànzhòng kuà wénhuà gōutōng nénglì.',
      vi: `Cảm ơn câu trả lời của bạn. Góc nhìn của bạn đối với vấn đề này rất sâu sắc. Công ty chúng tôi rất coi trọng năng lực giao tiếp đa văn hóa, bạn cảm thấy ưu thế tiếng Trung của mình nằm ở đâu?`,
    };
  }

  // Generic fallback
  return {
    hanzi: `听到你说的“${userText}”，非常棒！让我们继续用中文聊下去吧，你今天还有什么新鲜事想分享吗？`,
    pinyin: 'Tīng dào nǐ shuō de, fēicháng bàng! Ràng wǒmen jìxù yòng Zhōngwén liáo xiàqù ba!',
    vi: `Nghe bạn nói câu "${userText}", rất tuyệt vời! Chúng ta cùng tiếp tục trò chuyện bằng tiếng Trung nhé, hôm nay bạn còn chuyện gì mới muốn chia sẻ không?`,
  };
}
