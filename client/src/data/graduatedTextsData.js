/**
 * Thư Viện Bài Khoá Chuẩn (Từ Đơn Giản Đến Nâng Cao)
 * Graduated Chinese Reading Passages Library (HSK 1 -> HSK 3+)
 */

export const GRADUATED_LEVELS = [
  { id: 'all', name: 'Tất Cả Cấp Độ', icon: '📚' },
  { id: 'HSK 1', name: 'HSK 1: Sơ Cấp (Dễ)', icon: '🟢', desc: 'Câu ngắn, từ vựng cơ bản, chào hỏi & bản thân' },
  { id: 'HSK 2', name: 'HSK 2: Tiền Trung Cấp', icon: '🟡', desc: 'Sinh hoạt đời sống, mua sắm, thời tiết & sở thích' },
  { id: 'HSK 3', name: 'HSK 3: Trung Cấp', icon: '🟠', desc: 'Ăn uống nhà hàng, du lịch, tàu cao tốc & khám bệnh' },
  { id: 'HSK 3+', name: 'HSK 3+: Nâng Cao Thực Chiến', icon: '🔴', desc: 'Phỏng vấn công sở, thuê nhà hợp đồng & đàm phán' },
];

export const GRADUATED_TEXTS = [
  // =========================================================================
  // CẤP ĐỘ 1: HSK 1 (SƠ CẤP - ĐƠN GIẢN)
  // =========================================================================
  {
    id: 'text_hsk1_1',
    level: 'HSK 1',
    titleZh: '初次相识与自我介绍',
    titlePinyin: 'Chūcì xiāngshí yǔ zìwǒ jièshào',
    titleVi: 'Lần đầu gặp gỡ & Giới thiệu bản thân',
    topic: 'Chào hỏi & Làm quen',
    wordCount: 75,
    estimatedReadTime: '2 phút',
    summary: 'Đoạn văn ngắn giới thiệu tên, quốc tịch, việc học tiếng Trung và bạn bè trường lớp.',
    sentences: [
      {
        hanzi: '你好！我叫大卫，我是美国人。',
        pinyin: 'Nǐ hǎo! Wǒ jiào Dàwèi, wǒ shì Měiguó rén.',
        vi: 'Xin chào! Tôi tên là David, tôi là người Mỹ.',
      },
      {
        hanzi: '我现在在北京学习汉语，汉语很有意思。',
        pinyin: 'Wǒ xiànzài zài Běijīng xuéxí Hànyǔ, Hànyǔ hěn yǒuyìsi.',
        vi: 'Tôi hiện đang học tiếng Hán tại Bắc Kinh, tiếng Hán rất thú vị.',
      },
      {
        hanzi: '我的老师是王老师，她非常好，同学们也都很热情。',
        pinyin: 'Wǒ de lǎoshī shì Wáng lǎoshī, tā fēicháng hǎo, tóngxuémen yě dōu hěn rèqíng.',
        vi: 'Giáo viên của tôi là cô giáo Vương, cô rất tốt, các bạn học cũng đều rất nhiệt tình.',
      },
      {
        hanzi: '我有一个中国朋友叫李明，我们常常一起看书。',
        pinyin: 'Wǒ yǒu yí gè Zhōngguó péngyou jiào Lǐ Míng, wǒmen chángcháng yìqǐ kànshū.',
        vi: 'Tôi có một người bạn Trung Quốc tên là Lý Minh, chúng tôi thường cùng nhau đọc sách.',
      },
      {
        hanzi: '很高兴认识你们！谢谢大家！',
        pinyin: 'Hěn gāoxìng rènshi nǐmen! Xièxie dàjiā!',
        vi: 'Rất vui được làm quen với các bạn! Cảm ơn mọi người!',
      },
    ],
    newWords: [
      { hanzi: '自我介绍', pinyin: 'zìwǒ jièshào', hv: 'Tự ngã giới thiệu', vi: 'Tự giới thiệu bản thân' },
      { hanzi: '留学生', pinyin: 'liúxuéshēng', hv: 'Lưu học sinh', vi: 'Du học sinh' },
      { hanzi: '热情', pinyin: 'rèqíng', hv: 'Nhiệt tình', vi: 'Nhiệt tình, hiếu khách' },
      { hanzi: '常常', pinyin: 'chángcháng', hv: 'Thường thường', vi: 'Thường xuyên' },
    ],
    grammarPoints: [
      { title: 'Cấu trúc 是... (Động từ to-be)', note: 'Chủ ngữ + 是 + Danh từ: 我是美国人 (Tôi là người Mỹ).' },
      { title: 'Phó từ chỉ mức độ 很, 非常, 都', note: '很 / 非常 + Tính từ: 汉语很有意思 (Tiếng Trung rất thú vị); 都 đi trước động từ biểu thị tất cả.' },
    ],
    quiz: {
      question: '大卫现在在哪里学习汉语？ (David hiện đang học tiếng Trung ở đâu?)',
      options: ['在上海 (Ở Thượng Hải)', '在北京 (Ở Bắc Kinh)', '在纽约 (Ở New York)', '在河内 (Ở Hà Nội)'],
      correctAnswer: 1,
      explanation: 'Câu 2 trong bài nêu rõ: "我现在在北京学习汉语" (Tôi hiện đang ở Bắc Kinh học tiếng Hán).',
    },
  },
  {
    id: 'text_hsk1_2',
    level: 'HSK 1',
    titleZh: '我的幸福家庭',
    titlePinyin: 'Wǒ de xìngfú jiātíng',
    titleVi: 'Gia đình hạnh phúc của tôi',
    topic: 'Gia đình & Người thân',
    wordCount: 88,
    estimatedReadTime: '2 phút',
    summary: 'Bài đọc kể về các thành viên trong gia đình, nghề nghiệp của bố mẹ và thói quen sum họp.',
    sentences: [
      {
        hanzi: '我家有四口人：爸爸、妈妈、哥哥和我。',
        pinyin: 'Wǒ jiā yǒu sì kǒu rén: bàba, māma, gēge hé wǒ.',
        vi: 'Nhà tôi có bốn người: bố, mẹ, anh trai và tôi.',
      },
      {
        hanzi: '我爸爸是中学老师，他工作很忙，但是很喜欢他的学生。',
        pinyin: 'Wǒ bàba shì zhōngxué lǎoshī, tā gōngzuò hěn máng, dànshì hěn xǐhuan tā de xuésheng.',
        vi: 'Bố tôi là giáo viên cấp hai, công việc của ông rất bận, nhưng rất yêu quý học sinh của mình.',
      },
      {
        hanzi: '我妈妈在医院工作，她是一名医生，每天帮助很多人。',
        pinyin: 'Wǒ māma zài yīyuàn gōngzuò, tā shì yì míng yīshēng, měitiān bāngzhù hěn duō rén.',
        vi: 'Mẹ tôi làm việc ở bệnh viện, bà là một bác sĩ, mỗi ngày đều giúp đỡ rất nhiều người.',
      },
      {
        hanzi: '周末我们全家人喜欢一起吃晚饭、看电视，非常幸福。',
        pinyin: 'Zhōumò wǒmen quánjiā rén xǐhuan yìqǐ chī wǎnfàn, kàn diànshì, fēicháng xìngfú.',
        vi: 'Cuối tuần cả nhà chúng tôi thích cùng nhau ăn cơm tối, xem tivi, vô cùng hạnh phúc.',
      },
    ],
    newWords: [
      { hanzi: '口', pinyin: 'kǒu', hv: 'Khẩu', vi: 'Lượng từ đếm số nhân khẩu trong gia đình' },
      { hanzi: '医生', pinyin: 'yīshēng', hv: 'Y sinh', vi: 'Bác sĩ' },
      { hanzi: '但是', pinyin: 'dànshì', hv: 'Đãn thị', vi: 'Nhưng, tuy nhiên' },
      { hanzi: '全家', pinyin: 'quánjiā', hv: 'Toàn gia', vi: 'Cả nhà, toàn thể gia đình' },
    ],
    grammarPoints: [
      { title: 'Lượng từ 口 (kǒu)', note: 'Chuyên dùng đếm số thành viên gia đình: 我家有四口人.' },
      { title: 'Liên từ 但是 (dànshì)', note: 'Biểu thị quan hệ chuyển ý tương phản: 工作很忙，但是很喜欢.' },
    ],
    quiz: {
      question: '大卫的妈妈在做什么工作？ (Mẹ của David làm công việc gì?)',
      options: ['她是老师 (Bà là giáo viên)', '她是医生 (Bà là bác sĩ)', '她是护士 (Bà là y tá)', '她在商店卖东西 (Bà bán hàng)'],
      correctAnswer: 1,
      explanation: 'Bài viết nêu rõ: "我妈妈在医院工作，她是一名医生" (Mẹ tôi làm ở bệnh viện, bà là bác sĩ).',
    },
  },

  // =========================================================================
  // CẤP ĐỘ 2: HSK 2 (TIỀN TRUNG CẤP - VỪA PHẢI)
  // =========================================================================
  {
    id: 'text_hsk2_1',
    level: 'HSK 2',
    titleZh: '去超市买水果与生活用品',
    titlePinyin: 'Qù chāoshì mǎi shuǐguǒ yǔ shēnghuó yòngpǐn',
    titleVi: 'Đi siêu thị mua trái cây & Đồ dùng sinh hoạt',
    topic: 'Mua sắm & Đời sống',
    wordCount: 110,
    estimatedReadTime: '3 phút',
    summary: 'Bài đọc về việc đi siêu thị mua táo, dưa hấu, sữa tươi và thanh toán qua ví điện tử.',
    sentences: [
      {
        hanzi: '今天星期六，下午我和朋友一起去附近的超市买东西。',
        pinyin: 'Jīntiān xīngqīliù, xiàwǔ wǒ hé péngyou yìqǐ qù fùjìn de chāoshì mǎi dōngxi.',
        vi: 'Hôm nay thứ Bảy, buổi chiều tôi và bạn cùng đi siêu thị gần nhà mua đồ.',
      },
      {
        hanzi: '超市里的人很多，水果区的水果看起来非常新鲜。',
        pinyin: 'Chāoshì lǐ de rén hěn duō, shuǐguǒ qū de shuǐguǒ kàn qǐlái fēicháng xīnxiān.',
        vi: 'Trong siêu thị rất đông người, trái cây ở khu hoa quả trông rất tươi ngon.',
      },
      {
        hanzi: '红苹果五块钱一斤，我们买了两斤苹果和一个大西瓜。',
        pinyin: 'Hóng píngguǒ wǔ kuài qián yì jīn, wǒmen mǎi le liǎng jīn píngguǒ hé yí gè dà xīguā.',
        vi: 'Táo đỏ 5 tệ một cân (nửa kg), chúng tôi mua hai cân táo và một quả dưa hấu to.',
      },
      {
        hanzi: '除了水果，我还买了两瓶牛奶和一些面包当明天的早餐。',
        pinyin: 'Chúle shuǐguǒ, wǒ hái mǎi le liǎng píng niúnǎi hé yìxiē miànbāo dāng míngtiān de zǎocān.',
        vi: 'Ngoài trái cây, tôi còn mua hai chai sữa bò và ít bánh mì làm bữa sáng ngày mai.',
      },
      {
        hanzi: '结账的时候，我拿出手机扫码付款，方便极了！',
        pinyin: 'Jiézhàng de shíhou, wǒ ná chū shǒujī sǎomǎ fùkuǎn, fāngbiàn jí le!',
        vi: 'Lúc thanh toán, tôi lấy điện thoại ra quét mã trả tiền, tiện lợi vô cùng!',
      },
    ],
    newWords: [
      { hanzi: '附近', pinyin: 'fùjìn', hv: 'Phụ cận', vi: 'Gần đây, lân cận' },
      { hanzi: '新鲜', pinyin: 'xīnxiān', hv: 'Tân tiên', vi: 'Tươi mới (hoa quả, thức ăn)' },
      { hanzi: '除了...以外', pinyin: 'chúle...yǐwài', hv: 'Trừ liễu', vi: 'Ngoài... ra' },
      { hanzi: '方便极了', pinyin: 'fāngbiàn jí le', hv: 'Phương tiện cực liễu', vi: 'Tiện lợi vô cùng' },
    ],
    grammarPoints: [
      { title: 'Cấu trúc ...极了 (Cực kỳ, vô cùng)', note: 'Tính từ + 极了: 方便极了 (Tiện lợi vô cùng), 好吃极了 (Ngon tuyệt cú mèo).' },
      { title: 'Lượng từ 斤 (cân Trung Quốc)', note: '1 斤 (jīn) = 500 gram (nửa kg theo chuẩn Việt Nam).' },
    ],
    quiz: {
      question: '除了水果，作者还买了什么当明天的早餐？ (Ngoài hoa quả, tác giả còn mua gì làm bữa sáng?)',
      options: ['鸡蛋和茶 (Trứng và trà)', '牛奶和面包 (Sữa và bánh mì)', '米饭和牛肉 (Cơm và thịt bò)', '咖啡和蛋糕 (Cà phê và bánh ngọt)'],
      correctAnswer: 1,
      explanation: 'Câu 4 nêu rõ: "除了水果，我还买了两瓶牛奶和一些面包当明天的早餐。"',
    },
  },
  {
    id: 'text_hsk2_2',
    level: 'HSK 2',
    titleZh: '谈论北京的四季天气与出行',
    titlePinyin: 'Tánlùn Běijīng de sìjì tiānqì yǔ chūxíng',
    titleVi: 'Bàn về thời tiết 4 mùa Bắc Kinh & Đi lại',
    topic: 'Thời tiết & Hoạt động',
    wordCount: 115,
    estimatedReadTime: '3 phút',
    summary: 'Mô tả vẻ đẹp của bốn mùa tại Bắc Kinh, đặc biệt là mùa thu mát mẻ thích hợp leo Vạn Lý Trường Thành.',
    sentences: [
      {
        hanzi: '北京的一年四季风景不同，天气也有很大的变化。',
        pinyin: 'Běijīng de yì nián sìjì fēngjǐng bùtóng, tiānqì yě yǒu hěn dà de biànhuà.',
        vi: 'Bốn mùa một năm ở Bắc Kinh phong cảnh khác nhau, thời tiết cũng có sự thay đổi rất lớn.',
      },
      {
        hanzi: '春天常常刮风，夏天天气比较热，经常下大雨。',
        pinyin: 'Chūntiān chángcháng guāfēng, xiàtiān tiānqì bǐjiào rè, jīngcháng xià dàyǔ.',
        vi: 'Mùa xuân thường hay có gió, mùa hè thời tiết tương đối nóng, thường xuyên đổ mưa rào.',
      },
      {
        hanzi: '我最喜欢秋天，因为秋天不冷也不热，天空特别蓝。',
        pinyin: 'Wǒ zuì xǐhuan qiūtiān, yīnwèi qiūtiān bù lěng yě bú rè, tiānkōng tèbié lán.',
        vi: 'Tôi thích nhất là mùa thu, bởi vì mùa thu không lạnh cũng không nóng, bầu trời trong xanh ngắt.',
      },
      {
        hanzi: '秋天去爬长城看红叶，是最受欢迎的旅游活动。',
        pinyin: 'Qiūtiān qù pá Chángchéng kàn hóngyè, shì zuì shòu huānyíng de lǚyóu huódòng.',
        vi: 'Mùa thu đi leo Trường Thành ngắm lá đỏ là hoạt động du lịch được yêu thích nhất.',
      },
      {
        hanzi: '冬天下雪的时候，故宫就像一幅美丽的画一样。',
        pinyin: 'Dōngtiān xiàxuě de shíhou, Gùgōng jiù xiàng yì fú měilì de huà yíyàng.',
        vi: 'Mùa đông những lúc tuyết rơi, Cố Cung trông hệt như một bức tranh tuyệt mỹ.',
      },
    ],
    newWords: [
      { hanzi: '四季', pinyin: 'sìjì', hv: 'Tứ quý', vi: 'Bốn mùa (xuân, hạ, thu, đông)' },
      { hanzi: '变化', pinyin: 'biànhuà', hv: 'Biến hóa', vi: 'Biến đổi, thay đổi' },
      { hanzi: '受欢迎', pinyin: 'shòu huānyíng', hv: 'Thụ hoan nghênh', vi: 'Được ưa chuộng, được đón nhận' },
      { hanzi: '像...一样', pinyin: 'xiàng...yíyàng', hv: 'Tượng... nhất dạng', vi: 'Giống hệt như...' },
    ],
    grammarPoints: [
      { title: 'Cấu trúc 比较 + Tính từ', note: 'Biểu thị mức độ tương đối: 比较热 (khá nóng), 比较贵 (khá đắt).' },
      { title: 'So sánh: 像...一样', note: 'A + 像 + B + 一样: 故宫像画一样 (Cố Cung đẹp như tranh vẽ).' },
    ],
    quiz: {
      question: '作者为什么最喜欢北京的秋天？ (Tại sao tác giả thích mùa thu Bắc Kinh nhất?)',
      options: ['因为经常下雪 (Vì thường có tuyết rơi)', '因为可以去游泳 (Vì có thể đi bơi)', '因为不冷也不热，天空很蓝 (Vì không lạnh cũng không nóng, trời rất trong xanh)', '因为有很多风 (Vì có nhiều gió)'],
      correctAnswer: 2,
      explanation: 'Câu 3 nêu rõ lý do: "因为秋天不冷也不热，天空特别蓝" (Bởi vì mùa thu không lạnh không nóng, trời xanh ngắt).',
    },
  },

  // =========================================================================
  // CẤP ĐỘ 3: HSK 3 (TRUNG CẤP - THỰC CHIẾN)
  // =========================================================================
  {
    id: 'text_hsk3_1',
    level: 'HSK 3',
    titleZh: '乘坐复兴号高铁去上海出差',
    titlePinyin: 'Chéngzuò Fùxīnghào gāotiě qù Shànghǎi chūchāi',
    titleVi: 'Trải nghiệm đi tàu cao tốc Phục Hưng đến Thượng Hải công tác',
    topic: 'Du lịch & Giao thông hiện đại',
    wordCount: 145,
    estimatedReadTime: '4 phút',
    summary: 'Bài viết chi tiết về quy trình đặt vé trực tuyến 12306, qua cổng soát vé bằng hộ chiếu và tốc độ 350km/h của tàu cao tốc.',
    sentences: [
      {
        hanzi: '上周，我因为公司的业务需要，乘坐高铁从北京前往上海出差。',
        pinyin: 'Shàng zhōu, wǒ yīnwèi gōngsī de yèwù xūyào, chéngzuò gāotiě cóng Běijīng qiánwǎng Shànghǎi chūchāi.',
        vi: 'Tuần trước, do nhu cầu công việc của công ty, tôi đi tàu cao tốc từ Bắc Kinh đến Thượng Hải công tác.',
      },
      {
        hanzi: '现在的中国高铁非常发达，我在手机应用上花两分钟就买好了车票。',
        pinyin: 'Xiànzài de Zhōngguó gāotiě fēicháng fādá, wǒ zài shǒujī yìngyòng shang huā liǎng fēnzhōng jiù mǎi hǎo le chēpiào.',
        vi: 'Tàu cao tốc Trung Quốc hiện nay rất phát triển, tôi dùng ứng dụng trên điện thoại chỉ mất 2 phút là mua xong vé xe.',
      },
      {
        hanzi: '进站时不需要纸质车票，直接刷护照就能顺利通过闸机。',
        pinyin: 'Jìn zhàn shí bù xūyào zhǐzhì chēpiào, zhíjiē shuā hùzhào jiù néng shùnlì tōngguò zhájī.',
        vi: 'Lúc vào ga không cần vé giấy, chỉ cần quét hộ chiếu là có thể thuận lợi qua cửa soát vé tự động.',
      },
      {
        hanzi: '复兴号列车的最高时速达到了每小时三百五十公里，车厢里平稳得连一杯水都不会洒出来。',
        pinyin: 'Fùxīnghào lièchē de zuì gāo shísù dádào le měi xiǎoshí sān bǎi wǔshí gōnglǐ, chēxiāng lǐ píngwěn de lián yì bēi shuǐ dōu bú huì sǎ chūlái.',
        vi: 'Đoàn tàu Phục Hưng đạt tốc độ tối đa lên tới 350 km/h, trong khoang tàu êm ái đến mức một ly nước cũng không hề bị sánh ra ngoài.',
      },
      {
        hanzi: '只用了四个半小时，我就到达了上海虹桥站，这次旅程让我感受到了科技带来的便利。',
        pinyin: 'Zhǐ yòng le sì gè bàn xiǎoshí, wǒ jiù dàodá le Shànghǎi Hóngqiáo zhàn, zhè cì lǚchéng ràng wǒ gǎnshòu dào le kējì dài lái de biànlì.',
        vi: 'Chỉ mất có 4 tiếng rưỡi, tôi đã tới ga Hồng Kiều Thượng Hải, chuyến đi này giúp tôi cảm nhận sâu sắc sự tiện lợi mà công nghệ mang lại.',
      },
    ],
    newWords: [
      { hanzi: '出差', pinyin: 'chūchāi', hv: 'Xuất sai', vi: 'Đi công tác xa' },
      { hanzi: '时速', pinyin: 'shísù', hv: 'Thời tốc', vi: 'Vận tốc theo giờ (km/h)' },
      { hanzi: '平稳', pinyin: 'píngwěn', hv: 'Bình ổn', vi: 'Êm ái, vững vàng, không rung lắc' },
      { hanzi: '连...都...', pinyin: 'lián...dōu...', hv: 'Liên... đô...', vi: 'Ngay cả... cũng...' },
    ],
    grammarPoints: [
      { title: 'Cấu trúc nhấn mạnh 连...都...', note: '连 + Danh từ + 都/也 + Vị ngữ: 连一杯水都不会洒 (Đến một ly nước cũng không sánh).' },
      { title: 'Bổ ngữ kết quả: 买好, 到达', note: 'Động từ + 好: hoàn thành viên mãn (买好了车票 - Đã mua xong xuôi vé).' },
    ],
    quiz: {
      question: '作者乘坐高铁从北京到上海花了多长时间？ (Tác giả đi tàu cao tốc từ Bắc Kinh đến Thượng Hải mất bao lâu?)',
      options: ['两个小时 (2 tiếng)', '四个半小时 (4 tiếng rưỡi)', '八个小时 (8 tiếng)', '一整天 (Cả ngày)'],
      correctAnswer: 1,
      explanation: 'Câu cuối trong bài nêu rõ: "只用了四个半小时，我就到达了上海虹桥站"。',
    },
  },
  {
    id: 'text_hsk3_2',
    level: 'HSK 3',
    titleZh: '陪朋友去医院就诊与健康体会',
    titlePinyin: 'Péi péngyou qù yīyuàn jiùzhěn yǔ jiànkāng tǐhuì',
    titleVi: 'Cùng bạn đi bệnh viện khám bệnh & Bài học sức khỏe',
    topic: 'Y tế & Chăm sóc sức khỏe',
    wordCount: 150,
    estimatedReadTime: '4 phút',
    summary: 'Bài đọc thực tế mô tả quy trình đăng ký số khám, vào phòng bác sĩ nghe chuẩn đoán và nhận thuốc điều trị.',
    sentences: [
      {
        hanzi: '昨天早上，我的室友小李突然感觉肚子疼得厉害，而且还伴有轻微的发烧。',
        pinyin: 'Zuótiān zǎoshang, wǒ de shìyǒu Xiǎo Lǐ tūrán gǎnjué dùzi téng de lìhai, érqiě hái bànyǒu qīngwēi de fāshāo.',
        vi: 'Sáng hôm qua, bạn cùng phòng Tiểu Lý của tôi đột nhiên thấy đau bụng dữ dội, hơn nữa còn bị sốt nhẹ.',
      },
      {
        hanzi: '我立刻陪他打车前往附近的综合医院，在门诊大厅的自助机器上完成了挂号。',
        pinyin: 'Wǒ lìkè péi tā dǎchē qiánwǎng fùjìn de zōnghé yīyuàn, zài ménzhěn dàtīng de zìzhù jīqì shang wánchéng le guàhào.',
        vi: 'Tôi lập tức cùng cậu ấy bắt taxi đến bệnh viện đa khoa gần đó, hoàn thành việc lấy số khám trên máy tự động tại sảnh khám bệnh.',
      },
      {
        hanzi: '医生仔细地为他做了检查，并询问了他这几天的饮食情况，最后诊断为急性胃肠炎。',
        pinyin: 'Yīshēng zǐxì de wèi tā zuò le jiǎnchá, bìng xúnwèn le tā zhè jǐ tiān de yǐnshí qíngkuàng, zuìhòu zhěnduàn wéi jíxìng wèichángyán.',
        vi: 'Bác sĩ kiểm tra cẩn thận cho cậu ấy, hỏi han tình hình ăn uống mấy ngày qua, cuối cùng chuẩn đoán là viêm dạ dày ruột cấp tính.',
      },
      {
        hanzi: '医生提醒年轻人平时不要总吃油腻的外卖和辛辣食品，三餐必须按时吃。',
        pinyin: 'Yīshēng tíxǐng niánqīngrén píngshí bú yào zǒng chī yóunì de wàimài hé xīnlà shípǐn, sāncān bìxū ànshí chī.',
        vi: 'Bác sĩ nhắc nhở người trẻ ngày thường đừng suốt ngày ăn đồ ship nhiều dầu mỡ và cay nóng, ba bữa phải ăn uống đúng giờ.',
      },
      {
        hanzi: '遵照医嘱吃了药并好好休息了一整天后，小李的身体终于康复了。健康真是最大的财富！',
        pinyin: 'Zūnzhào yīzhǔ chī le yào bìng hǎohāo xiūxi le yì zhěng tiān hòu, Xiǎo Lǐ de shēntǐ zhōngyú kāngfù le. Jiànkāng zhēn shì zuì dà de cáifù!',
        vi: 'Sau khi uống thuốc theo chỉ định của bác sĩ và nghỉ ngơi trọn vẹn cả ngày, Tiểu Lý cuối cùng đã bình phục. Sức khỏe quả thật là tài sản lớn nhất!',
      },
    ],
    newWords: [
      { hanzi: '室友', pinyin: 'shìyǒu', hv: 'Thất hữu', vi: 'Bạn cùng phòng trọ / ký túc xá' },
      { hanzi: '挂号', pinyin: 'guàhào', hv: 'Quải hào', vi: 'Lấy số đăng ký khám bệnh' },
      { hanzi: '饮食', pinyin: 'yǐnshí', hv: 'Ẩm thực', vi: 'Chế độ ăn uống sinh hoạt' },
      { hanzi: '康复', pinyin: 'kāngfù', hv: 'Khang phục', vi: 'Bình phục, khỏi bệnh' },
    ],
    grammarPoints: [
      { title: 'Liên từ 而且 (Hơn nữa, vả lại)', note: 'Bổ sung thông tin tăng tiến: 肚子疼，而且还发烧.' },
      { title: 'Phó từ 终于 (Cuối cùng thì)', note: 'Diễn tả kết quả mong đợi sau quá trình nỗ lực/chờ đợi: 终于康复了.' },
    ],
    quiz: {
      question: '医生给年轻人的饮食建议是什么？ (Lời khuyên ăn uống của bác sĩ dành cho giới trẻ là gì?)',
      options: ['多喝冰水 (Uống nhiều nước đá)', '少吃油腻外卖和辛辣食品，三餐按时吃 (Bớt ăn đồ ship dầu mỡ, ăn đúng giờ)', '只吃素食 (Chỉ ăn chay)', '每天只吃一顿饭 (Mỗi ngày chỉ ăn 1 bữa)'],
      correctAnswer: 1,
      explanation: 'Câu 4 ghi rõ lời dặn bác sĩ: "不要总吃油腻的外卖和辛辣食品，三餐必须按时吃。"',
    },
  },

  // =========================================================================
  // CẤP ĐỘ 4: HSK 3+ / HSK 4 (NÂNG CAO - THỰC CHIẾN GIAO TIẾP & CÔNG SỞ)
  // =========================================================================
  {
    id: 'text_hsk4_1',
    level: 'HSK 3+',
    titleZh: '跨国企业求职面试与职业规划',
    titlePinyin: 'Kuàguó qǐyè qiúzhí miànshì yǔ zhíyè guīhuà',
    titleVi: 'Phỏng vấn xin việc tại tập đoàn đa quốc gia & Định hướng sự nghiệp',
    topic: 'Công sở & Nghề nghiệp chuyên nghiệp',
    wordCount: 175,
    estimatedReadTime: '5 phút',
    summary: 'Phân tích các câu hỏi phỏng vấn hóc búa, kỹ năng xử lý áp lực và cách thể hiện ưu thế ngôn ngữ tiếng Trung.',
    sentences: [
      {
        hanzi: '上个月，我受邀参加了一家跨国科技公司的商务拓展专员职位的现场面试。',
        pinyin: 'Shàng gè yuè, wǒ shòuyāo cānjiā le yì jiā kuàguó kējì gōngsī de shāngwù tuòzhǎn zhuānyuán zhíwèi de xiànchǎng miànshì.',
        vi: 'Tháng trước, tôi nhận được lời mời tham gia buổi phỏng vấn trực tiếp cho vị trí Chuyên viên phát triển kinh doanh tại một công ty công nghệ đa quốc gia.',
      },
      {
        hanzi: '面试官首先请我用中文介绍自己过往的项目经验，以及如何协助团队开拓东南亚市场。',
        pinyin: 'Miànshìguān shǒuxiān qǐng wǒ yòng Zhōngwén jièshào zìjǐ guòwǎng de xiàngmù jīngyàn, yǐjí rúhé xiézhù tuánduì kāituò Dōngnányà shìchǎng.',
        vi: 'Nhà tuyển dụng trước tiên yêu cầu tôi dùng tiếng Trung giới thiệu kinh nghiệm dự án trong quá khứ, cũng như cách tôi hỗ trợ nhóm khai phá thị trường Đông Nam Á.',
      },
      {
        hanzi: '由于我提前做足了充分的准备，不仅流利地阐述了自己的观点，还结合具体的数据进行了深入分析。',
        pinyin: 'Yóuyú wǒ tíqián zuò zú le chōngfèn de zhǔnbèi, bùjǐn liúlì de chǎnshù le zìjǐ de guāndiǎn, hái jiéhé jùtǐ de shùjù jìnxíng le shēnrù fēnxī.',
        vi: 'Nhờ tôi đã chuẩn bị trước rất kỹ càng, không những giải trình lưu loát quan điểm của mình mà còn kết hợp số liệu cụ thể để phân tích chuyên sâu.',
      },
      {
        hanzi: '面试官对我良好的沟通能力和严谨的专业态度给予了高度评价。',
        pinyin: 'Miànshìguān duì wǒ liánghǎo de gōutōng nénglì hé yánjǐn de zhuānyè tàidù jǐyǔ le gāodù píngjià.',
        vi: 'Nhà tuyển dụng đã dành sự đánh giá rất cao cho năng lực giao tiếp tốt và thái độ chuyên nghiệp chuẩn mực của tôi.',
      },
      {
        hanzi: '这次经历让我深刻认识到：学好一门外语不仅是掌握交流工具，更是开启职业机遇的钥匙。',
        pinyin: 'Zhè cì jīnglì ràng wǒ shēnkè rènshi dào: xué hǎo yì mén wàiyǔ bùjǐn shì zhǎngwò jiāoliú gōngjù, gèng shì kāiqǐ zhíyè jīyù de yàoshi.',
        vi: 'Trải nghiệm lần này giúp tôi nhận thức sâu sắc rằng: Học tốt một ngoại ngữ không chỉ là nắm trong tay công cụ giao tiếp, mà còn là chiếc chìa khóa mở ra những cơ hội sự nghiệp to lớn.',
      },
    ],
    newWords: [
      { hanzi: '跨国企业', pinyin: 'kuàguó qǐyè', hv: 'Khóa quốc xí nghiệp', vi: 'Doanh nghiệp / tập đoàn đa quốc gia' },
      { hanzi: '商务拓展', pinyin: 'shāngwù tuòzhǎn', hv: 'Thương vụ thác triển', vi: 'Phát triển kinh doanh (BD)' },
      { hanzi: '阐述', pinyin: 'chǎnshù', hv: 'Xiển thuật', vi: 'Trình bày, diễn giải, làm rõ' },
      { hanzi: '机遇', pinyin: 'jīyù', hv: 'Cơ ngộ', vi: 'Cơ hội vàng, thời cơ' },
    ],
    grammarPoints: [
      { title: 'Cấu trúc 不仅...更是... (Không chỉ... mà còn đặc biệt là...)', note: 'Biểu thị sự nhấn mạnh tầng bậc ý nghĩa sâu sắc hơn.' },
      { title: 'Cấu trúc 对...给予高度评价 (Dành sự đánh giá cao cho...)', note: 'Khẩu ngữ công sở trang trọng: 对 + Đối tượng + 给予 + Đánh giá.' },
    ],
    quiz: {
      question: '面试官为什么对作者给予了高度评价？ (Tại sao nhà tuyển dụng đánh giá cao tác giả?)',
      options: ['因为他准备了很贵的礼物 (Vì tặng quà đắt tiền)', '因为他沟通能力良好且专业态度严谨 (Vì năng lực giao tiếp tốt và thái độ chuyên nghiệp)', '因为他是外国人 (Vì là người nước ngoài)', '因为他会唱中文歌 (Vì biết hát tiếng Trung)'],
      correctAnswer: 1,
      explanation: 'Câu 4 nêu rõ: "面试官对我良好的沟通能力和严谨的专业态度给予了高度评价。"',
    },
  },
  {
    id: 'text_hsk4_2',
    level: 'HSK 3+',
    titleZh: '大城市租房看房与签订合同要点',
    titlePinyin: 'Dà chéngshì zūfáng kànfáng yǔ qiāndìng hétong yàodiǎn',
    titleVi: 'Xem phòng trọ ở đô thị lớn & Các điểm lưu ý khi ký hợp đồng',
    topic: 'Thuê nhà & Đời sống thực tế',
    wordCount: 180,
    estimatedReadTime: '5 phút',
    summary: 'Cẩm nang thực tế về cách kiểm tra trang thiết bị phòng, thương lượng phương thức thanh toán và kiểm tra điều khoản pháp lý hợp đồng thuê nhà.',
    sentences: [
      {
        hanzi: '在繁华的大都市生活，租房往往是每个人步入独立生活的第一道关卡。',
        pinyin: 'Zài fánhuá de dà dōushì shēnghuó, zūfáng wǎngwǎng shì měi gè rén bùrù dúlì shēnghuó de dì-yī dào guānkǎ.',
        vi: 'Sống tại đô thị lớn phồn hoa, thuê nhà thường là cửa ải thử thách đầu tiên của mỗi người khi bước vào cuộc sống tự lập.',
      },
      {
        hanzi: '实地看房时，不仅要仔细检查房屋的采光和隔音效果，还要测试水压与电器是否正常运转。',
        pinyin: 'Shídì kànfáng shí, bùjǐn yào zǐxì jiǎnchá fángwū de cǎiguāng hé géyīn xiàoguǒ, hái yào cèshì shuǐyā yǔ diànqì shìfǒu zhèngcháng yùnzhuǎn.',
        vi: 'Khi đi xem nhà trực tiếp tại hiện trường, không chỉ phải kiểm tra kỹ độ đón sáng và khả năng cách âm của căn nhà, mà còn cần thử áp lực nước và các thiết bị điện xem có hoạt động bình thường không.',
      },
      {
        hanzi: '与房东沟通时，务必要确认押金与租金的支付方式，例如常见的是否为“押一付三”。',
        pinyin: 'Yǔ fángdōng gōutōng shí, wùbì yào quèrèn yājīn yǔ zūjīn de zhīfù fāngshì, lìrú chángjiàn de shìfǒu wéi “yā yī fù sān”.',
        vi: 'Lúc trao đổi với chủ nhà, nhất định phải xác nhận phương thức đóng tiền cọc và tiền nhà, ví dụ hình thức phổ biến có phải là "cọc 1 đóng 3 tháng" hay không.',
      },
      {
        hanzi: '签约前，必须核对房产证和房东身份证原件，并在合同中明确水电费、物业费的结算标准。',
        pinyin: 'Qiānyuē qián, bìxū h किसानों héduì fángchǎnzhèng hé fángdōng shēnfènzhèng yuánjiàn, bìng zài hétong zhōng míngquè shuǐdiànfèi, wùyèfèi de jiésuàn biāozhǔn.',
        vi: 'Trước khi ký hợp đồng, phải đối chiếu sổ đỏ chứng nhận sở hữu nhà và CMND/CCCD gốc của chủ nhà, đồng thời ghi rõ trong hợp đồng định mức tính tiền điện nước, phí dịch vụ quản lý tòa nhà.',
      },
      {
        hanzi: '保持严谨细致的心态，才能确保自己在异乡住得安心、舒适。',
        pinyin: 'Bǎochí yánjǐn xìzhì de xīntài, cái néng quèbǎo zìjǐ zài yìxiāng zhù de ānxīn, shūshì.',
        vi: 'Giữ tâm thái cẩn trọng tỉ mỉ, bạn mới có thể đảm bảo bản thân sống yên tâm và thoải mái ở nơi đất khách quê người.',
      },
    ],
    newWords: [
      { hanzi: '实地看房', pinyin: 'shídì kànfáng', hv: 'Thực địa khán phòng', vi: 'Xem nhà trực tiếp tận nơi' },
      { hanzi: '采光与隔音', pinyin: 'cǎiguāng yǔ géyīn', hv: 'Thải quang dữ cách âm', vi: 'Độ sáng tự nhiên và cách âm' },
      { hanzi: '押金', pinyin: 'yājīn', hv: 'Áp kim', vi: 'Tiền đặt cọc nhà' },
      { hanzi: '物业费', pinyin: 'wùyèfèi', hv: 'Vật nghiệp phí', vi: 'Phí dịch vụ chung cư / quản lý nhà' },
    ],
    grammarPoints: [
      { title: 'Phó từ 务必 (Nhất định phải)', note: 'Biểu thị sự bắt buộc phải chú ý: 务必要确认押金支付方式.' },
      { title: 'Cấu trúc 只有...才... (Chỉ có... mới có thể...)', note: 'Điều kiện tất yếu: 保持严谨的心态，才能住得安心.' },
    ],
    quiz: {
      question: '签约前必须核对什么证件？ (Trước khi ký hợp đồng thuê nhà nhất định phải đối chiếu giấy tờ gì?)',
      options: ['驾照和学生证 (Bằng lái xe và thẻ sinh viên)', '房产证和房东身份证原件 (Sổ đỏ sở hữu nhà và CCCD gốc của chủ nhà)', '机票和护照 (Vé máy bay và hộ chiếu)', '超市小票 (Hóa đơn siêu thị)'],
      correctAnswer: 1,
      explanation: 'Câu 4 ghi rõ: "必须核对房产证和房东身份证原件" (Phải đối chiếu sổ đỏ và CCCD gốc của chủ nhà).',
    },
  },
];
