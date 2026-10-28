export interface Persona {
  id: string;
  name: string;
  role: string;
  avatar: string;
  gender: string;
  bgGradient: string;
  greeting: string;
  greetingPinyin: string;
  greetingVi: string;
}

export const AI_PERSONAS: Persona[] = [
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
