/**
 * AI Real-Time Conversational Partner Engine
 * Provides intelligent speech analysis, native fluency polish,
 * and contextual two-way live dialogue responses with AI Thought Process (Chain-of-Thought).
 */
import axiosClient from '../api/axiosClient';

export const AI_PERSONAS = [
  {
    id: 'teacher_wang',
    name: '王老师 (Cô giáo Vương)',
    role: 'Giáo viên khẩu ngữ kiên nhẫn',
    avatar: '👩‍🏫',
    gender: 'female',
    bgGradient: 'from-rose-500 to-pink-600',
    greeting: '你好！我是你的中文口语辅导老师王老师。今天想和我聊些什么呢？你可以随时用语音或打字对我说！',
    greetingPinyin: 'Nǐ hǎo! Wǒ shì nǐ de Zhōngwén kǒuyǔ fǔdǎo lǎoshī Wáng lǎoshī. Jīntiān xiǎng hé wǒ liáo xiē shénme ne?',
    greetingVi: 'Chào em! Cô là cô giáo Vương phụ trách luyện nói tiếng Trung của em. Hôm nay em muốn trò chuyện về chủ đề gì nào? Hãy bấm mic để nói hoặc gõ câu nhé!',
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
    id: 'driver_zhang',
    name: '张师傅 (Bác tài xế Taxi)',
    role: 'Tài xế rành đường phố',
    avatar: '🚕',
    gender: 'male',
    bgGradient: 'from-yellow-500 to-amber-600',
    greeting: '你好师傅！快请上车，请问咱们去哪儿啊？',
    greetingPinyin: 'Nǐ hǎo shīfu! Kuài qǐng shàngchē, qǐngwèn zánmen qù nǎr a?',
    greetingVi: 'Chào bạn! Mời lên xe, xin hỏi bạn muốn đi đến đâu ạ?',
  },
  {
    id: 'cashier_meimei',
    name: '小美 (Cô nhân viên bán hàng)',
    role: 'Tư vấn mua sắm & Mặc cả',
    avatar: '🛍️',
    gender: 'female',
    bgGradient: 'from-pink-500 to-rose-600',
    greeting: '您好！欢迎光临本店，今天全场都有折扣优惠哦！想看看衣服还是鞋子？',
    greetingPinyin: 'Nín hǎo! Huānyíng guānglín běndiàn, jīntiān quánchǎng dōu yǒu zhékòu yōuhuì ó! Xiǎng kànkan yīfu háishi xiézi?',
    greetingVi: 'Dạ xin chào! Hoan nghênh ghé cửa hàng, hôm nay toàn bộ sản phẩm đều có ưu đãi giảm giá đấy ạ! Bạn muốn xem áo quần hay giày dép?',
  },
  {
    id: 'hotel_receptionist',
    name: '小陈 (Lễ tân khách sạn)',
    role: 'Thủ tục Check-in & Du lịch',
    avatar: '🏨',
    gender: 'female',
    bgGradient: 'from-blue-500 to-indigo-600',
    greeting: '您好！欢迎入住我们酒店。请问您有预订吗？请出示一下您的身份证或护照。',
    greetingPinyin: 'Nín hǎo! Huānyíng rùzhù wǒmen jiǔdiàn. Qǐngwèn nín yǒu yùdìng ma? Qǐng chūshì yíxià nín de shēnfènzhèng huò hùzhào.',
    greetingVi: 'Xin chào quý khách! Hoan nghênh đến nhận phòng khách sạn. Xin hỏi quý khách đã đặt trước chưa ạ? Phiền quý khách xuất trình hộ chiếu giúp em.',
  },
  {
    id: 'doctor_liu',
    name: '刘医生 (Bác sĩ Lưu)',
    role: 'Bác sĩ khoa nội ân cần',
    avatar: '👨‍⚕️',
    gender: 'male',
    bgGradient: 'from-teal-500 to-emerald-600',
    greeting: '请坐！我看你气色有点疲惫，是哪里感觉不舒服吗？发烧还是头痛？',
    greetingPinyin: 'Qǐng zuò! Wǒ kàn nǐ qìsè yǒudiǎn píbèi, shì nǎlǐ gǎnjué bù shūfu ma? Fāshāo háishi tóutòng?',
    greetingVi: 'Mời bạn ngồi! Tôi thấy sắc mặt bạn hơi mệt mỏi, trong người cảm thấy khó chịu ở đâu à? Có bị sốt hay đau đầu không?',
  },
  {
    id: 'manager_zhang',
    name: '陈总监 (Giám đốc nhân sự)',
    role: 'Phỏng vấn & Giao tiếp công sở',
    avatar: '💼',
    gender: 'male',
    bgGradient: 'from-indigo-600 to-slate-800',
    greeting: '你好，欢迎来到我们公司面试。请先做一个简短的中文自我介绍吧。',
    greetingPinyin: 'Nǐ hǎo, huānyíng lái dào wǒmen gōngsī miànshì. Qǐng xiān zuò yí gè jiǎnduǎn de Zhōngwén zìwǒ jièshào ba.',
    greetingVi: 'Xin chào, chào mừng bạn đến với buổi phỏng vấn tại công ty chúng tôi. Xin mời bạn giới thiệu sơ lược về bản thân bằng tiếng Trung trước.',
  },
  {
    id: 'barista_lin',
    name: '小林 (Nhân viên quán nước)',
    role: 'Cà phê, trà sữa & Đồ uống',
    avatar: '☕',
    gender: 'female',
    bgGradient: 'from-amber-600 to-stone-700',
    greeting: '您好！今天想喝点什么？我们有现磨拿铁和招牌珍珠奶茶，可以选甜度和冰块哦！',
    greetingPinyin: 'Nín hǎo! Jīntiān xiǎng hē diǎn shénme? Wǒmen yǒu xiànmó nátiě hé zhāopái zhēnzhū nǎichá, kěyǐ xuǎn tiándù hé bīngkuài ó!',
    greetingVi: 'Xin chào! Hôm nay bạn muốn dùng đồ uống gì ạ? Quán em có cà phê Latte pha tươi và Trà sữa trân châu đặc biệt, có thể chọn mức đường và đá nhé!',
  },
];

/**
 * 10 Categorized Real-Life Practical Speaking Topics with 60+ Ready Sentences
 */
export const PRACTICAL_SPEAKING_TOPICS_CATEGORIZED = [
  {
    id: 'dining',
    name: 'Ẩm Thực & Gọi Món (餐厅点餐)',
    icon: '🍜',
    sentences: [
      { text: '服务员，请给我们拿一份菜单。', pinyin: 'Fúwùyuán, qǐng gěi wǒmen ná yí fèn càidān.', vi: 'Phục vụ ơi, phiền lấy cho chúng tôi một cuốn thực đơn.' },
      { text: '请帮我做微辣，不要放香菜。', pinyin: 'Qǐng bāng wǒ zuò wēilà, bú yào fàng xiāngcài.', vi: 'Làm ít cay thôi nhé, và đừng bỏ rau mùi (ngò).' },
      { text: '请问你们店有什么招牌菜推荐吗？', pinyin: 'Qǐngwèn nǐmen diàn yǒu shénme zhāopáicài tuījiàn ma?', vi: 'Xin hỏi quán mình có món đặc sản nổi tiếng nào giới thiệu không?' },
      { text: '老板，七号桌结账，我扫码支付。', pinyin: 'Lǎobǎn, qī hào zhuō jiézhàng, wǒ sǎomǎ zhīfù.', vi: 'Ông chủ ơi, bàn số 7 tính tiền, tôi quét mã thanh toán nhé.' },
      { text: '吃不完了，请帮我们打包带走。', pinyin: 'Chī bù wán le, qǐng bāng wǒmen dǎbāo dàizǒu.', vi: 'Ăn không hết rồi, phiền gói mang về giúp chúng tôi.' },
      { text: '服务员，再来两瓶冰镇啤酒和一壶热水。', pinyin: 'Fúwùyuán, zài lái liǎng píng bīngzhèn píjiǔ hé yì hú rèshuǐ.', vi: 'Phục vụ ơi, cho thêm 2 chai bia ướp lạnh và một bình nước nóng.' },
    ],
  },
  {
    id: 'transport',
    name: 'Bắt Xe Taxi & Chỉ Đường (打车出行)',
    icon: '🚕',
    sentences: [
      { text: '师傅，去市中心人民医院，请打表。', pinyin: 'Shīfu, qù shì zhōngxīn Rénmín Yīyuàn, qǐng dǎbiǎo.', vi: 'Bác tài ơi, đến Bệnh viện Nhân dân trung tâm, phiền bác bật đồng hồ tính cước.' },
      { text: '现在路上堵车吗？大概需要多长时间？', pinyin: 'Xiànzài lùshang dǔchē ma? Dàgài xūyào duō cháng shíjiān?', vi: 'Bây giờ trên đường có kẹt xe không? Mất khoảng bao lâu thời gian?' },
      { text: '就在前面的路口靠边停一下就可以了。', pinyin: 'Jiù zài qiánmiàn de lùkǒu kàobiān tíng yíxià jiù kěyǐ le.', vi: 'Cứ tấp vào lề ngay ngã rẽ phía trước là được rồi ạ.' },
      { text: '请问去高铁站坐地铁几号线？', pinyin: 'Qǐngwèn qù gāotiě zhàn zuò dìtiě jǐ hào xiàn?', vi: 'Xin hỏi đi đến ga tàu cao tốc thì đi tàu điện ngầm tuyến số mấy?' },
      { text: '师傅，请帮我开一下后备箱，我放行李。', pinyin: 'Shīfu, qǐng bāng wǒ kāi yíxià hòubèixiāng, wǒ fàng xíngli.', vi: 'Bác tài ơi, mở cốp xe sau giúp tôi để tôi để hành lý vào nhé.' },
    ],
  },
  {
    id: 'shopping',
    name: 'Mua Sắm & Mặc Cả (购物砍价)',
    icon: '🛍️',
    sentences: [
      { text: '老板，这件衣服有点贵，能便宜一点吗？', pinyin: 'Lǎobǎn, zhè jiàn yīfu yǒudiǎn guì, néng piányi yìdiǎn ma?', vi: 'Ông chủ ơi, chiếc áo này hơi đắt, bớt chút được không?' },
      { text: '请问试衣间在哪儿？我想试穿一下。', pinyin: 'Qǐngwèn shìyījiān zài nǎr? Wǒ xiǎng shìchuān yíxià.', vi: 'Xin hỏi phòng thử đồ ở đâu? Tôi muốn mặc thử một lát.' },
      { text: '这双鞋子有点小，请问有大一号的吗？', pinyin: 'Zhè shuāng xiézi yǒudiǎn xiǎo, qǐngwèn yǒu dà yí hào de ma?', vi: 'Đôi giày này hơi chật, xin hỏi có cỡ to hơn một số không ạ?' },
      { text: '今天店里有活动打折吗？打几折？', pinyin: 'Jīntiān diàn lǐ yǒu huódòng dǎzhé ma? Dǎ jǐ zhé?', vi: 'Hôm nay trong tiệm có khuyến mãi giảm giá không? Giảm bao nhiêu %?' },
      { text: '我扫微信支付，请给我一张小票。', pinyin: 'Wǒ sǎo Wēixìn zhīfù, qǐng gěi wǒ yì zhāng xiǎopiào.', vi: 'Tôi quét WeChat thanh toán nhé, phiền in cho tôi tờ hóa đơn bán lẻ lẻ.' },
    ],
  },
  {
    id: 'hotel',
    name: 'Khách Sạn & Du Lịch (住宿旅游)',
    icon: '🏨',
    sentences: [
      { text: '你好，我在网上预订了大床房，现在办理入住。', pinyin: 'Nǐ hǎo, wǒ zài wǎngshàng yùdìng le dàchuángfáng, xiànzài bànlǐ rùzhù.', vi: 'Xin chào, tôi đã đặt phòng giường đôi trên mạng, giờ làm thủ tục nhận phòng.' },
      { text: '请问房费里包含免费早餐吗？', pinyin: 'Qǐngwèn fángfèi lǐ bāohán miǎnfèi zǎocān ma?', vi: 'Xin hỏi trong tiền phòng có bao gồm bữa sáng miễn phí không ạ?' },
      { text: '我们下午的航班，请问前台可以寄存行李吗？', pinyin: 'Wǒmen xiàwǔ de hángbān, qǐngwèn qiántái kěyǐ jìcún xíngli ma?', vi: 'Chuyến bay của chúng tôi vào buổi chiều, quầy lễ tân có cho gửi tạm hành lý không?' },
      { text: '房间里的无线网络密码是多少？', pinyin: 'Fángjiān lǐ de wúxiàn wǎngluò mìmǎ shì duōshao?', vi: 'Mật khẩu mạng Wi-Fi trong phòng là bao nhiêu vậy ạ?' },
      { text: '明天早上七点请帮我安排叫醒服务。', pinyin: 'Míngtiān zǎoshang qī diǎn qǐng bāng wǒ ānpái jiàoxǐng fúwù.', vi: 'Sáng mai 7 giờ phiền lễ tân xếp dịch vụ gọi điện báo thức giúp tôi nhé.' },
    ],
  },
  {
    id: 'medical',
    name: 'Khám Bệnh & Thuốc Men (看病就医)',
    icon: '🏥',
    sentences: [
      { text: '医生，我从昨天开始头痛，还有点发烧。', pinyin: 'Yīshēng, wǒ cóng zuótiān kāishǐ tóutòng, hái yǒudiǎn fāshāo.', vi: 'Bác sĩ ơi, từ hôm qua tôi bắt đầu đau đầu, và còn hơi bị sốt nữa.' },
      { text: '请问这个药一天吃几次？饭前还是饭后吃？', pinyin: 'Qǐngwèn zhège yào yì tiān chī jǐ cì? Fàn qián háishi fàn hòu chī?', vi: 'Xin hỏi thuốc này mỗi ngày uống mấy lần? Uống trước hay sau bữa ăn?' },
      { text: '我嗓子疼得厉害，咳嗽，吃不下东西。', pinyin: 'Wǒ sǎngzi téng de lìhai, késou, chī bu xià dōngxi.', vi: 'Cổ họng tôi đau dữ dội, bị ho, không nuốt nổi thức ăn.' },
      { text: '请问去哪里挂号和拿药？', pinyin: 'Qǐngwèn qù nǎlǐ guàhào hé ná yào?', vi: 'Xin hỏi đi đến đâu để xếp số đăng ký khám và lấy thuốc?' },
    ],
  },
  {
    id: 'work',
    name: 'Phỏng Vấn & Công Sở (职场工作)',
    icon: '💼',
    sentences: [
      { text: '您好，我是来参加今天下午的面试的。', pinyin: 'Nín hǎo, wǒ shì lái cānjiā jīntiān xiàwǔ de miànshì de.', vi: 'Xin chào, tôi đến để tham gia buổi phỏng vấn chiều hôm nay.' },
      { text: '我有一年的汉语学习经验，能进行日常交流。', pinyin: 'Wǒ yǒu yì nián de Hànyǔ xuéxí jīngyàn, néng jìnxíng rìcháng jiāoliú.', vi: 'Tôi có một năm kinh nghiệm học tiếng Trung, có thể giao tiếp thường ngày.' },
      { text: '下班前我会把工作总结发邮件给您过目。', pinyin: 'Xiàbān qián wǒ huì bǎ gōngzuò zǒngjié fā yóujiàn gěi nín guòmù.', vi: 'Trước khi tan làm tôi sẽ gửi email bản tổng kết công việc để sếp duyệt.' },
      { text: '这个项目我们下周开会讨论具体方案。', pinyin: 'Zhège xiàngmù wǒmen xià zhōu kāihuì tǎolùn jùtǐ fāng’àn.', vi: 'Dự án này tuần sau chúng ta sẽ họp để bàn phương án cụ thể.' },
    ],
  },
  {
    id: 'cafe',
    name: 'Cà Phê & Đồ Uống (咖啡奶茶)',
    icon: '☕',
    sentences: [
      { text: '你好，来一杯冰美式，大杯，不加糖。', pinyin: 'Nǐ hǎo, lái yì bēi bīng měishì, dà bēi, bù jiā táng.', vi: 'Chào bạn, cho một ly Americano đá, ly lớn, không thêm đường.' },
      { text: '珍珠奶茶一杯，去冰，三分糖，打包带走。', pinyin: 'Zhēnzhū nǎichá yì bēi, qù bīng, sān fēn táng, dǎbāo dàizǒu.', vi: 'Một ly trà sữa trân châu, bỏ đá, 30% đường, gói mang về nhé.' },
      { text: '请问可以在这儿用电脑办公吗？有插座吗？', pinyin: 'Qǐngwèn kěyǐ zài zhèr yòng diànnǎo bàngōng ma? Yǒu chāzuò ma?', vi: 'Xin hỏi tôi có thể dùng máy tính làm việc ở đây không? Có ổ cắm điện không?' },
    ],
  },
  {
    id: 'social',
    name: 'Kết Bạn & Xã Giao (社交交友)',
    icon: '🤝',
    sentences: [
      { text: '今天和你聊得很开心，我们加个微信吧！', pinyin: 'Jīntiān hé nǐ liáo de hěn kāixīn, wǒmen jiā gè Wēixìn ba!', vi: 'Hôm nay trò chuyện cùng bạn rất vui, chúng mình kết bạn WeChat nhé!' },
      { text: '改天周末有空，我请你吃正宗的越南河粉！', pinyin: 'Gǎitiān zhōumò yǒu kòng, wǒ qǐng nǐ chī zhèngzōng de Yuènán héfěn!', vi: 'Hôm nào cuối tuần rảnh, mình mời bạn đi ăn món Phở Việt Nam chính gốc!' },
      { text: '常保持联系，有什么事随时发消息给我。', pinyin: 'Cháng bǎochí liánxì, yǒu shénme shì suíshí fā xiāoxi gěi wǒ.', vi: 'Thường xuyên giữ liên lạc nhé, có chuyện gì cứ thoải mái nhắn tin cho mình.' },
    ],
  },
];

export const QUICK_VOICE_TOPICS = PRACTICAL_SPEAKING_TOPICS_CATEGORIZED[0].sentences;

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

  if (text.includes('你好') || text.includes('很高兴')) {
    grammarHighlight.push('Chào hỏi xã giao (问候礼仪)');
    nativePolish = `${text} 今天过得怎么样？`;
    grammarNotes.push('Sử dụng câu chào hỏi lịch sự rất chuẩn mực.');
  } else if (text.includes('多少钱') || text.includes('贵') || text.includes('便宜')) {
    grammarHighlight.push('Mặc cả & Mua sắm (购物与议价)');
    nativePolish = text.includes('便宜') ? text : `${text}，老板能便宜一点吗？`;
    grammarNotes.push('Mẫu câu hỏi giá chuẩn. Thêm trợ từ ngữ khí "吧" hoặc "吗" giúp câu uyển chuyển hơn.');
  } else if (text.includes('想吃') || text.includes('点菜') || text.includes('菜单') || text.includes('买单') || text.includes('来一份')) {
    grammarHighlight.push('Gọi món nhà hàng (餐饮点餐)');
    nativePolish = `服务员，${text}`;
    grammarNotes.push('Khi ở nhà hàng, thêm từ xưng hô "服务员" (phục vụ ơi) ở đầu câu để thể hiện sự lễ phép.');
  } else if (text.includes('怎么走') || text.includes('在哪儿') || text.includes('师傅') || text.includes('去')) {
    grammarHighlight.push('Hỏi đường & Di chuyển (问路与方位)');
    nativePolish = text.startsWith('请问') ? text : `请问，${text}`;
    grammarNotes.push('Hỏi đường nên bắt đầu bằng từ "请问" (Xin hỏi) để người bản xứ nhiệt tình chỉ đường hơn.');
  } else if (text.includes('发烧') || text.includes('头痛') || text.includes('不舒服') || text.includes('药')) {
    grammarHighlight.push('Mô tả triệu chứng sức khỏe (就医问诊)');
    nativePolish = `医生，${text}`;
    grammarNotes.push('Dùng từ miêu tả sức khỏe chuẩn xác, nói rõ thời điểm bắt đầu triệu chứng.');
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
 * Generate Live Persona Response to User's Spoken Input with Chain-of-Thought (AI Suy Nghĩ)
 */
export function generatePersonaLiveResponse(personaId, userText) {
  const text = (userText || '').toLowerCase().trim();

  // 1. Teacher Wang
  if (personaId === 'teacher_wang') {
    if (text.includes('你好') || text.includes('老师好')) {
      return {
        hanzi: '你好啊！发音非常标准，声调读得很准。你今天想练习什么场景的口语呢？',
        pinyin: 'Nǐ hǎo a! Fāyīn fēicháng biāozhǔn, shēngdiào dú de hěn zhǔn. Nǐ jīntiān xiǎng liànxí shénme chǎngjǐng de kǒuyǔ ne?',
        vi: 'Chào em! Phát âm của em rất chuẩn đấy, thanh điệu đọc rất chính xác. Hôm nay em muốn cùng cô luyện khẩu ngữ về tình huống nào?',
        thoughtProcess: {
          intent: 'Người học đang chào hỏi lịch sự và bắt đầu buổi trò chuyện.',
          analysis: 'Từ vựng "你好" chuẩn xác, ngữ điệu thân thiện, thái độ học tập tích cực.',
          strategy: 'Khen ngợi động viên phát âm, sau đó mở rộng câu hỏi để người học chủ động chọn chủ đề tiếp theo.',
        },
      };
    }
    return {
      hanzi: `你说得真好：“${userText}”。发音很地道！能再跟我多分享一句你的看法吗？`,
      pinyin: 'Nǐ shuō de zhēn hǎo! Fāyīn hěn dìdào! Néng zài gēn wǒ duō fēnxiǎng yí jù nǐ de kànfǎ ma?',
      vi: `Em nói rất tốt: "${userText}". Phát âm rất chuẩn bản xứ! Em có thể chia sẻ thêm một câu góc nhìn của em được không?`,
      thoughtProcess: {
        intent: `Người học luyện phát âm: "${userText}".`,
        analysis: 'Cấu trúc câu hoàn chỉnh, mạch ý rõ ràng.',
        strategy: 'Động viên khích lệ, gợi mở tiếp để người học kéo dài phản xạ khẩu ngữ.',
      },
    };
  }

  // 2. Boss Li (Restaurant)
  if (personaId === 'boss_li') {
    if (text.includes('菜单') || text.includes('点菜') || text.includes('吃') || text.includes('来一份')) {
      return {
        hanzi: '好嘞！这是咱店的特色菜单。宫保鸡丁和水煮牛肉特别受欢迎，微辣香浓，要不要来一份尝尝？',
        pinyin: 'Hǎo lei! Zhè shì zán diàn de tèsè càidān. Gōngbǎo jīdīng hé shuǐzhǔ niúròu tèbié shòu huānyíng, wēilà xiāngnóng, yào bu yào lái yí fèn chángchang?',
        vi: 'Dạ được ngay! Đây là menu đặc sản quán bác. Món gà Kung Pao và bò cay Tứ Xuyên rất được chuộng, cay nhẹ thơm ngon, bạn có muốn thử một phần không?',
        thoughtProcess: {
          intent: 'Khách yêu cầu xem thực đơn hoặc gọi món.',
          analysis: 'Dùng từ vựng chuẩn nhà hàng (菜单, 来一份).',
          strategy: 'Đáp lại niềm nở với khẩu ngữ "好嘞!", giới thiệu món tủ và hỏi khách.',
        },
      };
    }
    if (text.includes('买单') || text.includes('结账') || text.includes('多少钱')) {
      return {
        hanzi: '一共是一百二十八块！桌上有微信和支付宝二维码，您扫码付或者付现金都行！',
        pinyin: 'Yígòng shì yībǎi èrshíbā kuài! Zhuō shang yǒu Wēixìn hé Zhīfùbǎo èrwéimǎ, nín sǎomǎ fù huòzhě fù xiànjīn dōu xíng!',
        vi: 'Tổng cộng là 128 tệ nhé! Trên bàn có mã QR WeChat và Alipay, bạn quét mã hay tiền mặt đều được cả!',
        thoughtProcess: {
          intent: 'Khách yêu cầu thanh toán hóa đơn.',
          analysis: 'Dùng chuẩn từ "买单 / 结账".',
          strategy: 'Báo giá nhanh, hướng dẫn quét mã QR đúng văn hóa thanh toán Trung Quốc.',
        },
      };
    }
    return {
      hanzi: `好嘞！收到！马上吩咐厨房加急给您做。您看看还要不要加一听冰可乐或者一碗米饭？`,
      pinyin: 'Hǎo lei! Shōudào! Mǎshàng fēnfù chúfáng jiājí gěi nín zuò. Nín kànkan hái yào bu yào jiā yì tīng bīng kělè huòzhě yì wǎn mǐfàn?',
      vi: 'Dạ được ngay! Bác nhận rồi! Bác dặn bếp làm nhanh cho bạn ngay. Bạn xem có cần thêm lon coca lạnh hay bát cơm trắng nữa không?',
      thoughtProcess: {
        intent: 'Giao tiếp gọi món nhà hàng.',
        analysis: 'Giao tiếp tự nhiên, thân thiện.',
        strategy: 'Xác nhận món và gợi ý món ăn kèm.',
      },
    };
  }

  // 3. Driver Zhang (Taxi)
  if (personaId === 'driver_zhang') {
    if (text.includes('师傅') || text.includes('去') || text.includes('机场') || text.includes('医院')) {
      return {
        hanzi: '好嘞！系好安全带，咱们这就出发！现在前方环路上有点堵，我给您抄近道走高架桥，成吗？',
        pinyin: 'Hǎo lei! Jì hǎo ānquándài, zánmen zhè jiù chūfā! Xiànzài qiánfāng huánlù shang yǒudiǎn dǔ, wǒ gěi nín chāo jìndào zǒu gāojiàqiáo, chéng ma?',
        vi: 'Dạ được! Bạn thắt dây an toàn vào, chúng ta xuất phát ngay! Đường vành đai phía trước hơi đông xe, tôi chạy đường tắt qua cầu vượt cho nhanh nhé, được không?',
        thoughtProcess: {
          intent: 'Khách báo địa điểm cần đến.',
          analysis: 'Dùng từ xưng hô "师傅" chuẩn văn hóa taxi Trung Quốc.',
          strategy: 'Nhắc thắt dây an toàn, báo tình hình giao thông và đề xuất đường chạy tối ưu.',
        },
      };
    }
    if (text.includes('停') || text.includes('到') || text.includes('靠边')) {
      return {
        hanzi: '得嘞！前面路口我就给您靠边停下。您看好随身带的手机和包，慢走啊！',
        pinyin: 'Dé lei! Qiánmiàn lùkǒu wǒ jiù gěi nín kàobiān tíng xia. Nín kàn hǎo suíshēn dài de shǒujī hé bāo, màn zǒu a!',
        vi: 'Dạ được! Ngay ngã rẽ phía trước tôi sẽ tấp vào lề dừng cho bạn. Bạn kiểm tra lại điện thoại và túi xách mang theo nhé, đi thong thả nha!',
        thoughtProcess: {
          intent: 'Khách yêu cầu dừng xe / xuống xe.',
          analysis: 'Dùng đúng cụm từ "靠边停".',
          strategy: 'Đáp "得嘞!", tấp xe an toàn và dặn dò kiểm tra tư trang.',
        },
      };
    }
    return {
      hanzi: `明白！您坐稳了，车里空调温度合适吗？如果冷或者热随时跟我说一声。`,
      pinyin: 'Míngbai! Nín zuò wěn le, chē lǐ kōngtiáo wēndù héshì ma? Rúguǒ lěng huòzhě rè suíshí gēn wǒ shuō yì shēng.',
      vi: 'Tôi hiểu rồi! Bạn ngồi vững nhé, nhiệt độ điều hòa trong xe có vừa không? Nếu lạnh hoặc nóng cứ bảo tôi một tiếng nhé.',
      thoughtProcess: {
        intent: 'Khách trò chuyện trên xe taxi.',
        analysis: 'Hội thoại giao thông thực tế.',
        strategy: 'Hỏi han điều hòa xe, thể hiện dịch vụ taxi chu đáo.',
      },
    };
  }

  // 4. Cashier Meimei (Shopping)
  if (personaId === 'cashier_meimei') {
    if (text.includes('贵') || text.includes('便宜') || text.includes('打折') || text.includes('优惠')) {
      return {
        hanzi: '帅哥/美女，今天我们店庆全场打八折！这件衣服面料是纯棉的，版型特别显身材，给您打完折只要一百六！',
        pinyin: 'Shuàigē/Měinǚ, jīntiān wǒmen diànqìng quánchǎng dǎ bā zhé! Zhè jiàn yīfu miànliào shì chúnmián de, bǎnxíng tèbié xiǎn shēncái, gěi nín dǎ wán zhé zhǐ yào yībǎi liù!',
        vi: 'Dạ bạn ơi, hôm nay kỷ niệm cửa hàng toàn bộ giảm 20% đấy ạ! Chiếc áo này chất cotton thuần 100%, dáng mặc lên cực tôn dáng, giảm xong chỉ còn 160 tệ thôi!',
        thoughtProcess: {
          intent: 'Khách hàng hỏi giá, mặc cả hoặc xin chiết khấu.',
          analysis: 'Biết cách dùng cụm từ "便宜一点" / "打折".',
          strategy: 'Khen ngợi, giới thiệu chất liệu và báo giá đã giảm hấp dẫn.',
        },
      };
    }
    return {
      hanzi: `试衣间在左手边，您可以先去试穿一下看看效果，大小不合适我随时帮您换码数！`,
      pinyin: 'Shìyījiān zài zuǒshǒu biān, nín kěyǐ xiān qù shìchuān yíxià kànkan xiàoguǒ, dàxiǎo bù héshì wǒ suíshí bāng nín huàn mǎshù!',
      vi: 'Phòng thử đồ ở bên tay trái ạ, bạn cứ vào mặc thử xem lên đồ thế nào, rộng hay chật em sẽ đổi size khác cho bạn ngay!',
      thoughtProcess: {
        intent: 'Khách xem quần áo giày dép.',
        analysis: 'Nhu cầu thử đồ mua sắm.',
        strategy: 'Chỉ phòng thử đồ và sẵn sàng hỗ trợ đổi size.',
      },
    };
  }

  // 5. Hotel Receptionist (Hotel)
  if (personaId === 'hotel_receptionist') {
    if (text.includes('预订') || text.includes('入住') || text.includes('大床房')) {
      return {
        hanzi: '查到您的订单了！房间在8楼808号，窗外就是市中心夜景。房费已包含双人自助早餐，这是您的房卡，请收好！',
        pinyin: 'Chá dào nín de dìngdān le! Fángjiān zài bā lóu bā líng bā hào, chuāng wài jiùshì shì zhōngxīn yèjǐng. Fángfèi yǐ bāohán shuāngrén zìzhù zǎocān, zhè shì nín de fángkǎ, qǐng shōuhǎo!',
        vi: 'Em đã tìm thấy đơn đặt của bạn rồi! Phòng ở tầng 8 số 808, ngoài cửa sổ nhìn thẳng ra cảnh đêm trung tâm. Giá phòng đã gồm buffet sáng cho 2 người, đây là thẻ phòng của bạn, phiền bạn giữ cẩn thận ạ!',
        thoughtProcess: {
          intent: 'Khách làm thủ tục check-in nhận phòng.',
          analysis: 'Cung cấp thông tin đặt phòng chuẩn xác.',
          strategy: 'Báo số phòng, tiện ích đi kèm (view đẹp, buffet sáng) và trao thẻ phòng.',
        },
      };
    }
    return {
      hanzi: `前台提供24小时免费行李寄存和叫醒服务。如果您需要多加一床被子或者连Wi-Fi，随时按分机0号键联系我们！`,
      pinyin: 'Qiántái tígōng èrshísì xiǎoshí miǎnfèi xíngli jìcún hé jiàoxǐng fúwù. Rúguǒ nín xūyào duō jiā yì chuáng bèizi huòzhě lián Wi-Fi, suíshí àn fēnjī líng hào jiàn liánxì wǒmen!',
      vi: 'Quầy lễ tân phục vụ gửi hành lý miễn phí 24/7 và dịch vụ báo thức. Nếu bạn cần thêm chăn mền hay kết nối Wi-Fi, cứ bấm phím số 0 trên máy bàn liên hệ bọn em nhé!',
      thoughtProcess: {
        intent: 'Khách hỏi dịch vụ khách sạn.',
        analysis: 'Nhu cầu sinh hoạt khi lưu trú.',
        strategy: 'Giới thiệu các tiện ích hỗ trợ tận tình.',
      },
    };
  }

  // 6. Doctor Liu (Hospital)
  if (personaId === 'doctor_liu') {
    if (text.includes('发烧') || text.includes('头痛') || text.includes('咳嗽') || text.includes('不舒服')) {
      return {
        hanzi: '来，先量一下体温。最近换季感冒的人很多，我给你开一些清热解毒的中成药。记得一天吃三次，多喝温开水，千万别熬夜！',
        pinyin: 'Lái, xiān liáng yíxià tǐwēn. Zuìjìn huànjì gǎnmào de rén hěn duō, wǒ gěi nǐ kāi yìxiē qīngrè jiědú de zhōngchéngyào. Jìde yì tiān chī sān cì, duō hē wēn kāishuǐ, qiānwàn bié áoyè!',
        vi: 'Nào, trước tiên đo nhiệt độ cơ thể xem sao. Dạo này giao mùa nhiều người bị cảm cúm lắm, tôi kê cho bạn ít thuốc Đông y thanh nhiệt giải độc nhé. Nhớ uống ngày 3 lần, uống nhiều nước ấm và tuyệt đối đừng thức khuya!',
        thoughtProcess: {
          intent: 'Bệnh nhân trình bày triệu chứng sốt/đau đầu.',
          analysis: 'Từ vựng mô tả bệnh trạng rõ ràng.',
          strategy: 'Khám đo nhiệt độ, kê đơn thuốc và dặn dò chế độ nghỉ ngơi uống nước.',
        },
      };
    }
    return {
      hanzi: `身体是第一位的。按时吃药，这两天饮食要清淡，少吃油腻辛辣的东西。如果三天后还不好，随时回来复查！`,
      pinyin: 'Shēntǐ shì dì-yī wèi de. Ànshí chī yào, zhè liǎng tiān yǐnshí yào qīngdàn, shǎo chī yóunì xīnlà de dōngxi. Rúguǒ sān tiān hòu hái bù hǎo, suíshí huílái fùchá!',
      vi: 'Sức khỏe là quan trọng nhất. Nhớ uống thuốc đúng giờ, hai hôm nay ăn uống thanh đạm thôi, bớt dầu mỡ và cay nóng. Nếu sau 3 ngày chưa đỡ thì quay lại tái khám ngay nhé!',
      thoughtProcess: {
        intent: 'Lời khuyên điều trị từ bác sĩ.',
        analysis: 'Bệnh nhân lắng nghe hướng dẫn.',
        strategy: 'Động viên tinh thần và hướng dẫn chăm sóc cơ thể.',
      },
    };
  }

  // 7. Manager Zhang (Job Interview)
  if (personaId === 'manager_zhang') {
    if (text.includes('我是') || text.includes('介绍') || text.includes('毕业') || text.includes('经验')) {
      return {
        hanzi: '很好！你的中文口语表达很流畅，条理清晰。请问你为什么选择应聘我们公司的这个职位？你最大的优势是什么？',
        pinyin: 'Hěn hǎo! Nǐ de Zhōngwén kǒuyǔ biǎodá hěn liúchàng, tiáolǐ qīngxī. Qǐngwèn nǐ wèishénme xuǎnzé yìngpìn wǒmen gōngsī de zhège zhíwèi? Nǐ zuì dà de yōushì shì shénme?',
        vi: 'Rất tốt! Khẩu ngữ tiếng Trung của bạn diễn đạt rất trôi chảy, mạch lạc có thứ tự. Xin hỏi tại sao bạn lại ứng tuyển vào vị trí này tại công ty chúng tôi? Điểm mạnh lớn nhất của bạn là gì?',
        thoughtProcess: {
          intent: 'Ứng viên giới thiệu bản thân trong phỏng vấn.',
          analysis: 'Sử dụng tốt từ ngữ chuyên môn và giới thiệu kinh nghiệm.',
          strategy: 'Khen ngợi phong thái, đi sâu vào câu hỏi động lực ứng tuyển và ưu thế cạnh tranh.',
        },
      };
    }
    return {
      hanzi: `我们非常看重员工的跨文化沟通能力和团队协作精神。你在以前的项目中遇到过最大的困难是什么？你是怎么克服的？`,
      pinyin: 'Wǒmen fēicháng kànzhòng yuángōng de kuà wénhuà gōutōng nénglì hé tuánduì xiézuò jīngshén. Nǐ zài yǐqián de xiàngmù zhōng yù dào guò zuì dà de kùnnan shì shénme? Nǐ shì zěnme kèfú de?',
      vi: 'Công ty chúng tôi rất coi trọng năng lực giao tiếp đa văn hóa và tinh thần làm việc nhóm. Trong các dự án trước đây, khó khăn lớn nhất bạn từng gặp phải là gì? Bạn đã vượt qua nó như thế nào?',
      thoughtProcess: {
        intent: 'Phỏng vấn kỹ năng xử lý tình huống làm việc.',
        analysis: 'Thử thách năng lực diễn đạt câu chuyện bằng tiếng Trung.',
        strategy: 'Đặt câu hỏi tình huống STAR (Tình huống - Thử thách - Hành động - Kết quả).',
      },
    };
  }

  // 8. Barista Lin (Cafe)
  if (personaId === 'barista_lin') {
    if (text.includes('奶茶') || text.includes('咖啡') || text.includes('冰') || text.includes('糖')) {
      return {
        hanzi: '好嘞！一杯去冰、半糖的珍珠奶茶，口感刚刚好，茶香浓郁！请问您是在店里喝还是给您打包带走？',
        pinyin: 'Hǎo lei! Yì bēi qù bīng, bàn táng de zhēnzhū nǎichá, kǒugǎn gānggāng hǎo, chá xiāng nóngyù! Qǐngwèn nín shì zài diàn lǐ hē háishi gěi nín dǎbāo dàizǒu?',
        vi: 'Dạ được ngay! Một ly trà sữa trân châu không đá, nửa đường, độ ngọt vừa chuẩn vị, thơm đậm đà! Bạn dùng tại quán hay đóng gói mang về ạ?',
        thoughtProcess: {
          intent: 'Khách gọi đồ uống và chọn mức đường / đá.',
          analysis: 'Dùng thành thạo thuật ngữ đồ uống "去冰 / 半糖".',
          strategy: 'Xác nhận công thức và hỏi khách uống tại chỗ hay mang đi.',
        },
      };
    }
    return {
      hanzi: `您的饮品制作完成，小票号是68号！小心烫口哦，欢迎下次再来喝咖啡！`,
      pinyin: 'Nín de yǐnpǐn zhìzuò wánchéng, xiǎopiào hào shì liùshíbā hào! Xiǎoxīn tàngkǒu ó, huānyíng xià cì zài lái hē kāfēi!',
      vi: 'Đồ uống của bạn đã pha xong rồi ạ, số hóa đơn là 68! Cẩn thận nóng nhé, hẹn gặp lại bạn lần sau đến thưởng thức cà phê!',
      thoughtProcess: {
        intent: 'Phục vụ đồ uống cho khách hàng.',
        analysis: 'Giao tiếp quầy bar thân thiện.',
        strategy: 'Báo số thứ tự nhận đồ và dặn cẩn thận.',
      },
    };
  }

  // Default fallback
  return {
    hanzi: `你说得真棒：“${userText}”！发音越来越地道了，让我们继续聊聊吧！`,
    pinyin: 'Nǐ shuō de zhēn bàng! Fāyīn yuè lái yuè dìdào le, ràng wǒmen jìxù liáoliao ba!',
    vi: `Bạn nói tuyệt lắm: "${userText}"! Phát âm ngày càng chuẩn tự nhiên rồi, chúng ta cùng trò chuyện tiếp nhé!`,
    thoughtProcess: {
      intent: 'Hội thoại giao tiếp tự do.',
      analysis: 'Phản xạ khẩu ngữ tự nhiên.',
      strategy: 'Động viên tích cực và duy trì cuộc trò chuyện.',
    },
  };
}

/**
 * Send Chat Message to Backend or Fallback Simulator
 */
export async function sendChatMessageToAi(userText, personaId, aiConfig) {
  // If user configured a real Gemini / OpenAI API key
  if (aiConfig && aiConfig.apiKey && aiConfig.apiKey.trim().length > 10) {
    try {
      if (aiConfig.provider === 'gemini') {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${aiConfig.model || 'gemini-1.5-flash'}:generateContent?key=${aiConfig.apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                {
                  role: 'user',
                  parts: [
                    {
                      text: `Bạn là đối tác luyện khẩu ngữ tiếng Trung người bản xứ (${personaId}). 
Hãy trò chuyện tự nhiên với học viên bằng tiếng Trung. 
Học viên vừa nói: "${userText}". 
Trả về JSON đúng cấu trúc sau (không kèm markdown):
{
  "hanzi": "câu trả lời bằng chữ Hán",
  "pinyin": "phiên âm pinyin",
  "vi": "dịch nghĩa tiếng Việt",
  "thoughtProcess": {
    "intent": "ý định của học viên",
    "analysis": "phân tích ngữ pháp / thanh điệu",
    "strategy": "chiến lược dẫn dắt hội thoại"
  }
}`,
                    },
                  ],
                },
              ],
            }),
          }
        );
        const data = await response.json();
        const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (rawText) {
          const cleanJson = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
          const parsed = JSON.parse(cleanJson);
          return { ...parsed, isRealAi: true };
        }
      }
    } catch (e) {
      console.warn('Real AI request failed, falling back to built-in Persona Engine:', e);
    }
  }

  // Fallback to built-in smart persona conversational engine
  await new Promise((r) => setTimeout(r, 600));
  const fallback = generatePersonaLiveResponse(personaId, userText);
  return { ...fallback, isRealAi: false };
}
