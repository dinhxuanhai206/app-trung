/**
 * LỘ TRÌNH 90 NGÀY NGHE NÓI GIAO TIẾP TIẾNG TRUNG - THIẾT KẾ CHỐNG NẢN
 * Nguyên lý học:
 * - 15 phút mỗi ngày (Micro-learning)
 * - 3 bước: 1. Nghe ngấm (Active Listening) -> 2. Nhại giọng (Shadowing) -> 3. Phản xạ tình huống (Reflex Drill)
 * - Ưu tiên khẩu ngữ & Pinyin, không tạo áp lực chữ Hán viết tay
 * - Chia làm 3 Tháng (Stages) x 4 Tuần x 30 Ngày
 */

export const ROADMAP_STAGES = [
  {
    id: 1,
    name: 'Tháng 1: Bật Âm Chuẩn & Sinh Tồn Cơ Bản',
    subtitle: 'Ngày 1 - 30 • 150 mẫu câu khẩu ngữ sống còn',
    badge: 'Căn bản sinh tồn',
    color: 'rose',
    gradient: 'from-rose-500 to-pink-600',
    description: 'Chinh phục 4 thanh điệu, tự tin chào hỏi, giới thiệu bản thân, số đếm, mua sắm và hỏi đường cơ bản.',
    mindset: 'Mục tiêu: Bật âm không sợ sai, nhại giọng chuẩn 15 phút mỗi ngày. Chưa cần lo viết chữ Hán!',
    weeks: [
      { week: 1, title: 'Tuần 1: Bật âm Pinyin & Chào hỏi xưng hô', days: [1, 2, 3, 4, 5, 6, 7] },
      { week: 2, title: 'Tuần 2: Giới thiệu bản thân, Tên tuổi & Quốc tịch', days: [8, 9, 10, 11, 12, 13, 14] },
      { week: 3, title: 'Tuần 3: Số đếm, Hỏi giá & Mua sắm cơ bản', days: [15, 16, 17, 18, 19, 20, 21] },
      { week: 4, title: 'Tuần 4: Hỏi đường, Thời gian & Xã giao sinh tồn', days: [22, 23, 24, 25, 26, 27, 28, 29, 30] },
    ]
  },
  {
    id: 2,
    name: 'Tháng 2: Phản Xạ Đời Sống & Ghép Câu Tự Nhiên',
    subtitle: 'Ngày 31 - 60 • 300 mẫu câu đời sống thực chiến',
    badge: 'Thực chiến đời sống',
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-600',
    description: 'Phản xạ gọi món nhà hàng, đi taxi, tàu điện, mặc cả mua sắm, diễn tả cảm xúc và hẹn hò bạn bè.',
    mindset: 'Mục tiêu: Bật câu trong 2 giây mà không cần dịch từng từ từ tiếng Việt sang tiếng Trung.',
    weeks: [
      { week: 5, title: 'Tuần 5: Gọi món, Ẩm thực & Thưởng thức trà sữa', days: [31, 32, 33, 34, 35, 36, 37] },
      { week: 6, title: 'Tuần 6: Bắt xe taxi, Tàu điện ngầm & Di chuyển', days: [38, 39, 40, 41, 42, 43, 44] },
      { week: 7, title: 'Tuần 7: Mặc cả, Kích cỡ quần áo & Mua sắm Taobao', days: [45, 46, 47, 48, 49, 50, 51] },
      { week: 8, title: 'Tuần 8: Hẹn hò, Sở thích, Thời tiết & Bày tỏ cảm xúc', days: [52, 53, 54, 55, 56, 57, 58, 59, 60] },
    ]
  },
  {
    id: 3,
    name: 'Tháng 3: Giao Tiếp Thực Chiến & Tự Tin Độc Lập',
    subtitle: 'Ngày 61 - 90 • Xử lý tình huống & Hội thoại chuyên sâu',
    badge: 'Độc lập giao tiếp',
    color: 'blue',
    gradient: 'from-blue-600 to-indigo-600',
    description: 'Check-in khách sạn, thuê nhà, đi khám bệnh, giao tiếp công sở căn bản và đàm luận đời sống.',
    mindset: 'Mục tiêu: Tự tin trò chuyện với người bản xứ và AI không bị ngập ngừng, làm chủ ngữ cảnh!',
    weeks: [
      { week: 9, title: 'Tuần 9: Khách sạn, Thuê trọ & Xử lý sự cố phòng', days: [61, 62, 63, 64, 65, 66, 67] },
      { week: 10, title: 'Tuần 10: Sức khỏe, Hiệu thuốc & Khám bệnh thực tế', days: [68, 69, 70, 71, 72, 73, 74] },
      { week: 11, title: 'Tuần 11: Môi trường làm việc, Gọi điện & Công sở', days: [75, 76, 77, 78, 79, 80, 81] },
      { week: 12, title: 'Tuần 12: Đàm phán, Kết bạn & Tổng kết bứt phá 90 ngày', days: [82, 83, 84, 85, 86, 87, 88, 89, 90] },
    ]
  }
];

// Cẩm nang chống nản
export const ANTI_BURNOUT_TIPS = [
  {
    title: 'Quy tắc 15 phút mỗi ngày (The 15-Minute Rule)',
    desc: 'Học 15 phút đều đặn mỗi ngày hiệu quả gấp 10 lần việc nhồi nhét 3 tiếng vào cuối tuần. Hãy biến nó thành thói quen như đánh răng buổi sáng.',
    icon: 'clock',
  },
  {
    title: 'Bỏ qua nỗi sợ viết chữ Hán',
    desc: 'Để nghe nói nhanh trong 3 tháng, 90% thời gian hãy dành cho Pinyin, nhại giọng và phản xạ. Chữ Hán chỉ cần nhận diện, không cần ép viết tay từng nét.',
    icon: 'eye',
  },
  {
    title: 'Phương pháp Shadowing (Nhại giọng 3 lần)',
    desc: 'Lần 1 nghe bắt nhịp điệu -> Lần 2 nhại thầm theo khẩu hình -> Lần 3 bật mic nói to rõ ràng bằng đúng ngữ điệu bản xứ.',
    icon: 'mic',
  },
  {
    title: 'Đừng sợ sai thanh điệu',
    desc: 'Người bản xứ luôn nghe hiểu theo cả ngữ cảnh câu, giống như người nước ngoài nói tiếng Việt lơ lớ bạn vẫn hiểu 95%. Cứ mạnh dạn mở miệng!',
    icon: 'smile',
  },
  {
    title: 'Tự thưởng Dopamine mỗi ngày',
    desc: 'Sau khi hoàn thành 3 bước của ngày, hãy tự thưởng một dấu tick xanh, một tách trà ngon hoặc 5 phút nghe bài hát tiếng Trung yêu thích.',
    icon: 'award',
  }
];

// Dữ liệu 90 ngày bài học chi tiết
export const ROADMAP_DAYS_DATA = [
  // ================= THÁNG 1: BẬT ÂM CHUẨN & SINH TỒN CƠ BẢN (NGÀY 1 - 30) =================
  {
    day: 1,
    stage: 1,
    week: 1,
    title: 'Chào hỏi căn bản & Bật âm Pinyin',
    focus: 'Thanh 1 (bằng phẳng) & Thanh 4 (dứt khoát từ trên xuống)',
    tip: 'Thanh 4 phát âm dứt khoát như chặt chém chém xuống. Nói to rõ ràng nhé!',
    sentences: [
      {
        hanzi: '你好！',
        pinyin: 'Nǐ hǎo!',
        vi: 'Xin chào!',
        breakdown: '你 (bạn) + 好 (tốt, an lành)'
      },
      {
        hanzi: '你好吗？',
        pinyin: 'Nǐ hǎo ma?',
        vi: 'Bạn có khỏe không?',
        breakdown: '你好 (bạn khỏe) + 吗 (từ để hỏi: không?)'
      },
      {
        hanzi: '我很好，谢谢！',
        pinyin: 'Wǒ hěn hǎo, xièxie!',
        vi: 'Tôi rất khỏe, cảm ơn!',
        breakdown: '我 (tôi) + 很好 (rất khỏe) + 谢谢 (cảm ơn)'
      }
    ],
    quickReflex: {
      question: 'Khi một người bạn Trung Quốc chào bạn: "你好！", bạn phản xạ lại câu nào?',
      options: ['你好！', '对不起！', '再见！'],
      correct: 0,
      explain: '"你好！" là lời chào chuẩn mực và thân thiện nhất.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 2,
    stage: 1,
    week: 1,
    title: 'Chào hỏi theo các buổi trong ngày',
    focus: 'Chào buổi sáng, buổi chiều, buổi tối',
    tip: 'Buổi sáng nói "Zǎoshang hǎo" với nụ cười sảng khoái để nạp năng lượng!',
    sentences: [
      {
        hanzi: '早上好！',
        pinyin: 'Zǎoshang hǎo!',
        vi: 'Chào buổi sáng!',
        breakdown: '早上 (buổi sáng) + 好 (tốt lành)'
      },
      {
        hanzi: '下午好！',
        pinyin: 'Xiàwǔ hǎo!',
        vi: 'Chào buổi chiều!',
        breakdown: '下午 (buổi chiều) + 好'
      },
      {
        hanzi: '晚上好！祝你晚安。',
        pinyin: 'Wǎnshang hǎo! Zhù nǐ wǎn\'ān.',
        vi: 'Chào buổi tối! Chúc bạn ngủ ngon.',
        breakdown: '晚上好 (chào buổi tối) + 祝你 (chúc bạn) + 晚安 (ngủ ngon)'
      }
    ],
    quickReflex: {
      question: '8 giờ sáng gặp đồng nghiệp bạn nói gì?',
      options: ['晚上好！', '早上好！', '晚安！'],
      correct: 1,
      explain: 'Buổi sáng dùng 早上好 (Zǎoshang hǎo).'
    },
    relatedPath: '/speaking'
  },
  {
    day: 3,
    stage: 1,
    week: 1,
    title: 'Cảm ơn & Đáp lại lời cảm ơn',
    focus: 'Lịch sự tối thiểu trong giao tiếp tiếng Trung',
    tip: 'Khi người ta cảm ơn, đừng im lặng. Hãy phản xạ ngay "Bú kèqi"!',
    sentences: [
      {
        hanzi: '非常感谢你的帮助！',
        pinyin: 'Fēicháng gǎnxiè nǐ de bāngzhù!',
        vi: 'Vô cùng cảm ơn sự giúp đỡ của bạn!',
        breakdown: '非常 (vô cùng) + 感谢 (cảm ơn) + 你的帮助 (sự giúp đỡ của bạn)'
      },
      {
        hanzi: '不客气，不用谢！',
        pinyin: 'Bú kèqi, bú yòng xiè!',
        vi: 'Đừng khách sáo, không có chi!',
        breakdown: '不客气 (đừng khách sáo) + 不用谢 (không cần cảm ơn)'
      },
      {
        hanzi: '这是我应该做的。',
        pinyin: 'Zhè shì wǒ yīnggāi zuò de.',
        vi: 'Đây là việc tôi nên làm mà.',
        breakdown: '这是 (đây là) + 我应该做 (tôi nên làm)'
      }
    ],
    quickReflex: {
      question: 'Khách hàng nói "谢谢你！", bạn đáp lại lịch sự nhất bằng câu gì?',
      options: ['不客气！', '没关系！', '你是谁？'],
      correct: 0,
      explain: '不客气 (Bú kèqi) là đáp lại lời cảm ơn chuẩn nhất.'
    },
    relatedPath: '/ai-chat'
  },
  {
    day: 4,
    stage: 1,
    week: 1,
    title: 'Xin lỗi & Thứ lỗi (Xử lý tình huống ngại ngùng)',
    focus: 'Phân biệt "Duìbuqǐ" và "Bù hǎoyìsi"',
    tip: '"Bù hǎoyìsi" dùng rất nhiều trong đời sống khi nhờ vả hoặc làm phiền nhẹ.',
    sentences: [
      {
        hanzi: '不好意思，打扰一下。',
        pinyin: 'Bù hǎoyìsi, dǎrǎo yíxià.',
        vi: 'Ngại quá, xin làm phiền một chút.',
        breakdown: '不好意思 (ngại quá) + 打扰一下 (làm phiền chút)'
      },
      {
        hanzi: '对不起，我不是故意的。',
        pinyin: 'Duìbuqǐ, wǒ bú shì gùyì de.',
        vi: 'Xin lỗi, tôi không cố ý đâu.',
        breakdown: '对不起 (xin lỗi) + 我不是 (tôi không) + 故意的 (cố ý)'
      },
      {
        hanzi: '没关系，别放在心上。',
        pinyin: 'Méi guānxi, bié fàng zài xīn shàng.',
        vi: 'Không sao đâu, đừng để bụng nhé.',
        breakdown: '没关系 (không sao) + 别 (đừng) + 放在心上 (để trong lòng)'
      }
    ],
    quickReflex: {
      question: 'Khi lỡ dẫm chân ai đó trên xe bus, bạn nói:',
      options: ['不用谢！', '对不起！', '很高兴！'],
      correct: 1,
      explain: 'Nói 对不起 (Duìbuqǐ) ngay để xin lỗi.'
    },
    relatedPath: '/listening'
  },
  {
    day: 5,
    stage: 1,
    week: 1,
    title: 'Tạm biệt & Hẹn gặp lại',
    focus: 'Cách chào tạm biệt tự nhiên',
    tip: '"Míngtiān jiàn" = Hẹn mai gặp. Rất gọn gàng và bản xứ!',
    sentences: [
      {
        hanzi: '再见，明天见！',
        pinyin: 'Zàijiàn, míngtiān jiàn!',
        vi: 'Tạm biệt, ngày mai gặp lại nhé!',
        breakdown: '再见 (tạm biệt) + 明天 (ngày mai) + 见 (gặp)'
      },
      {
        hanzi: '路上小心，慢走啊！',
        pinyin: 'Lùshang xiǎoxīn, màn zǒu a!',
        vi: 'Đi đường cẩn thận, đi thong thả nhé!',
        breakdown: '路上 (trên đường) + 小心 (cẩn thận) + 慢走 (đi thong thả)'
      },
      {
        hanzi: '有空常联系！',
        pinyin: 'Yǒu kòng cháng liánxì!',
        vi: 'Rảnh rỗi thường xuyên liên lạc nhé!',
        breakdown: '有空 (rảnh rỗi) + 常 (thường) + 联系 (liên lạc)'
      }
    ],
    quickReflex: {
      question: 'Khi tiễn khách về nhà, câu chúc thân tình của người Trung Quốc là gì?',
      options: ['快点走！', '慢走，路上小心！', '别客气！'],
      correct: 1,
      explain: '慢走 (màn zǒu) thể hiện sự chu đáo và hiếu khách.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 6,
    stage: 1,
    week: 1,
    title: 'Đại từ nhân xưng: Tôi - Bạn - Anh ấy - Chúng tôi',
    focus: 'Nắm chắc Wǒ, Nǐ, Tā, Wǒmen, Nǐmen',
    tip: 'Chỉ cần thêm "men" (们) phía sau đại từ đơn là thành số nhiều!',
    sentences: [
      {
        hanzi: '我们都是好朋友。',
        pinyin: 'Wǒmen dōu shì hǎo péngyou.',
        vi: 'Chúng tôi đều là bạn tốt của nhau.',
        breakdown: '我们 (chúng tôi) + 都是 (đều là) + 好朋友 (bạn tốt)'
      },
      {
        hanzi: '你们今天去哪里？',
        pinyin: 'Nǐmen jīntiān qù nǎlǐ?',
        vi: 'Hôm nay các bạn đi đâu thế?',
        breakdown: '你们 (các bạn) + 今天 (hôm nay) + 去哪里 (đi đâu)'
      },
      {
        hanzi: '他是我的中文老师。',
        pinyin: 'Tā shì wǒ de zhōngwén lǎoshī.',
        vi: 'Thầy ấy là giáo viên tiếng Trung của tôi.',
        breakdown: '他 (anh ấy/thầy ấy) + 是 (là) + 我的老师 (thầy của tôi)'
      }
    ],
    quickReflex: {
      question: 'Từ nào có nghĩa là "Các bạn"?',
      options: ['我们 (Wǒmen)', '他们 (Tāmen)', '你们 (Nǐmen)'],
      correct: 2,
      explain: '你们 (Nǐmen) là "các bạn".'
    },
    relatedPath: '/formula'
  },
  {
    day: 7,
    stage: 1,
    week: 1,
    title: 'Ôn tập Tuần 1: Thử thách phản xạ chào hỏi 3 phút',
    focus: 'Tổng kết tuần đầu tiên - Tự hào vì bạn đã kiên trì 7 ngày!',
    tip: 'Chúc mừng bạn đã hoàn thành Tuần 1! Bạn đã hình thành được thói quen rồi đấy.',
    sentences: [
      {
        hanzi: '你好，很高兴认识你！',
        pinyin: 'Nǐ hǎo, hěn gāoxìng rènshi nǐ!',
        vi: 'Xin chào, rất vui được làm quen với bạn!',
        breakdown: 'Câu kinh điển mở đầu mọi cuộc hội thoại'
      },
      {
        hanzi: '谢谢你的热情招待！',
        pinyin: 'Xièxie nǐ de rèqíng zhāodài!',
        vi: 'Cảm ơn sự chiêu đãi nhiệt tình của bạn!',
        breakdown: '谢谢 (cảm ơn) + 热情 (nhiệt tình) + 招待 (chiêu đãi)'
      },
      {
        hanzi: '下周见，祝你周末愉快！',
        pinyin: 'Xià zhōu jiàn, zhù nǐ zhōumò yúkuài!',
        vi: 'Hẹn gặp tuần sau, chúc bạn cuối tuần vui vẻ!',
        breakdown: '下周见 (hẹn tuần sau gặp) + 周末愉快 (cuối tuần vui vẻ)'
      }
    ],
    quickReflex: {
      question: 'Chúc cuối tuần vui vẻ trong tiếng Trung là gì?',
      options: ['早上好！', '周末愉快！', '没关系！'],
      correct: 1,
      explain: '周末愉快 (Zhōumò yúkuài) = Cuối tuần vui vẻ.'
    },
    relatedPath: '/ai-chat'
  },

  // Tuần 2: Giới thiệu bản thân, tên tuổi & quốc tịch (Ngày 8 - 14)
  {
    day: 8,
    stage: 1,
    week: 2,
    title: 'Hỏi và trả lời tên (Bạn tên là gì?)',
    focus: 'Cấu trúc: Nǐ jiào shénme míngzì? -> Wǒ jiào...',
    tip: 'Chữ 叫 (jiào) thanh 4, phát âm dứt khoát: "Wǒ jiào + Tên của bạn"!',
    sentences: [
      {
        hanzi: '请问，你叫什么名字？',
        pinyin: 'Qǐngwèn, nǐ jiào shénme míngzi?',
        vi: 'Xin hỏi, bạn tên là gì vậy?',
        breakdown: '请问 (xin hỏi) + 你叫 (bạn tên là) + 什么名字 (tên gì)'
      },
      {
        hanzi: '我叫李明，你呢？',
        pinyin: 'Wǒ jiào Lǐ Míng, nǐ ne?',
        vi: 'Tôi tên là Lý Minh, còn bạn thì sao?',
        breakdown: '我叫 (tôi tên) + 李明 (Lý Minh) + 你呢 (còn bạn)'
      },
      {
        hanzi: '你可以叫我阿海。',
        pinyin: 'Nǐ kěyǐ jiào wǒ Ā Hǎi.',
        vi: 'Bạn có thể gọi tôi là A Hải nhé.',
        breakdown: '你可以 (bạn có thể) + 叫我 (gọi tôi)'
      }
    ],
    quickReflex: {
      question: 'Cách lịch sự nhất trước khi hỏi tên người khác là gì?',
      options: ['喂！', '请问 (Qǐngwèn)', '不好意思'],
      correct: 1,
      explain: '请问 (Qǐngwèn - Xin hỏi) luôn làm câu nói trở nên lịch sự 100%.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 9,
    stage: 1,
    week: 2,
    title: 'Hỏi và giới thiệu quốc tịch (Tôi là người Việt Nam)',
    focus: 'Cấu trúc: Wǒ shì Yuènán rén / Zhōngguó rén',
    tip: 'Chỉ cần Tên quốc gia + 人 (rén) là thành người nước đó!',
    sentences: [
      {
        hanzi: '我是越南人，来自河内。',
        pinyin: 'Wǒ shì Yuènán rén, láizì Hénèi.',
        vi: 'Tôi là người Việt Nam, đến từ Hà Nội.',
        breakdown: '越南人 (người VN) + 来自 (đến từ) + 河内 (Hà Nội)'
      },
      {
        hanzi: '你是哪国人？',
        pinyin: 'Nǐ shì nǎ guó rén?',
        vi: 'Bạn là người nước nào vậy?',
        breakdown: '你是 (bạn là) + 哪国人 (người nước nào)'
      },
      {
        hanzi: '中国人很喜欢越南咖啡。',
        pinyin: 'Zhōngguó rén hěn xǐhuan Yuènán kāfēi.',
        vi: 'Người Trung Quốc rất thích cà phê Việt Nam.',
        breakdown: '中国人 (người TQ) + 喜欢 (thích) + 越南咖啡 (cà phê VN)'
      }
    ],
    quickReflex: {
      question: 'Câu nào có nghĩa: "Tôi là người Việt Nam"?',
      options: ['我是中国人。', '我是越南人。', '我去越南。'],
      correct: 1,
      explain: '我是越南人 (Wǒ shì Yuènán rén).'
    },
    relatedPath: '/speaking'
  },
  {
    day: 10,
    stage: 1,
    week: 2,
    title: 'Hỏi tuổi tác và năm sinh',
    focus: 'Nǐ jǐ suì? (Trẻ em) vs Nǐ duō dà le? (Người lớn)',
    tip: 'Hỏi người trạc tuổi dùng: "Nǐ duō dà le?". Hỏi lịch sự dùng: "Nín duō dà niánjì?".',
    sentences: [
      {
        hanzi: '你今年多大了？',
        pinyin: 'Nǐ jīnnián duō dà le?',
        vi: 'Năm nay bạn bao nhiêu tuổi rồi?',
        breakdown: '你今年 (bạn năm nay) + 多大了 (bao nhiêu tuổi rồi)'
      },
      {
        hanzi: '我今年二十五岁。',
        pinyin: 'Wǒ jīnnián èrshíwǔ suì.',
        vi: 'Năm nay tôi hai mươi lăm tuổi.',
        breakdown: '我今年 (tôi năm nay) + 二十五 (25) + 岁 (tuổi)'
      },
      {
        hanzi: '你看起来真年轻！',
        pinyin: 'Nǐ kàn qǐlái zhēn niánqīng!',
        vi: 'Trông bạn trẻ thật đấy!',
        breakdown: '看起来 (trông có vẻ) + 真年轻 (thật trẻ trung)'
      }
    ],
    quickReflex: {
      question: 'Khi bạn được khen "你看起来真年轻！", bạn đáp lại ra sao?',
      options: ['哪里哪里，谢谢！', '不好！', '再见！'],
      correct: 0,
      explain: '哪里哪里 (Nǎlǐ nǎlǐ - Đâu có đâu) là cách đáp lời khen khiêm tốn của người Hoa.'
    },
    relatedPath: '/ai-chat'
  },
  {
    day: 11,
    stage: 1,
    week: 2,
    title: 'Hỏi về nghề nghiệp & Nơi làm việc',
    focus: 'Nǐ zuò shénme gōngzuò? (Bạn làm nghề gì?)',
    tip: 'Nói nghề nghiệp chỉ cần: "Wǒ shì + Nghề (gōngchéngshī, lǎoshī, jīnglǐ)".',
    sentences: [
      {
        hanzi: '你做什么工作？',
        pinyin: 'Nǐ zuò shénme gōngzuò?',
        vi: 'Bạn làm công việc gì vậy?',
        breakdown: '你做 (bạn làm) + 什么工作 (công việc gì)'
      },
      {
        hanzi: '我是软件工程师。',
        pinyin: 'Wǒ shì ruǎnjiàn gōngchéngshī.',
        vi: 'Tôi là kỹ sư phần mềm.',
        breakdown: '软件 (phần mềm) + 工程师 (kỹ sư)'
      },
      {
        hanzi: '你在哪家公司上班？',
        pinyin: 'Nǐ zài nǎ jiā gōngsī shàngbān?',
        vi: 'Bạn đang đi làm ở công ty nào vậy?',
        breakdown: '在哪家公司 (ở cty nào) + 上班 (đi làm)'
      }
    ],
    quickReflex: {
      question: '"Đi làm" trong tiếng Trung là gì?',
      options: ['下班 (Xiàbān)', '上班 (Shàngbān)', '吃饭 (Chīfàn)'],
      correct: 1,
      explain: '上班 (Shàngbān) là đi làm.'
    },
    relatedPath: '/scenario'
  },
  {
    day: 12,
    stage: 1,
    week: 2,
    title: 'Giới thiệu về gia đình',
    focus: 'Nhà tôi có mấy người (Wǒ jiā yǒu jǐ kǒu rén)',
    tip: 'Từ lượng từ dùng cho người trong gia đình là 口 (kǒu).',
    sentences: [
      {
        hanzi: '你家有几口人？',
        pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?',
        vi: 'Nhà bạn có mấy người thế?',
        breakdown: '你家 (nhà bạn) + 有 (có) + 几口人 (mấy nhân khẩu)'
      },
      {
        hanzi: '我家有四口人：爸爸、妈妈、姐姐和我。',
        pinyin: 'Wǒ jiā yǒu sì kǒu rén: bàba, māma, jiějie hé wǒ.',
        vi: 'Nhà tôi có bốn người: bố, mẹ, chị gái và tôi.',
        breakdown: '爸爸 (bố) + 妈妈 (mẹ) + 姐姐 (chị) + 和我 (và tôi)'
      },
      {
        hanzi: '你结婚了吗？',
        pinyin: 'Nǐ jiéhūn le ma?',
        vi: 'Bạn đã kết hôn chưa?',
        breakdown: '结婚 (kết hôn) + 了吗 (chưa)'
      }
    ],
    quickReflex: {
      question: 'Trả lời "Tôi chưa kết hôn" nói thế nào?',
      options: ['我结婚了。', '我还没结婚。', '我不喜欢。'],
      correct: 1,
      explain: '我还没结婚 (Wǒ hái méi jiéhūn) = Tôi chưa kết hôn.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 13,
    stage: 1,
    week: 2,
    title: 'Hỏi phương thức liên lạc (WeChat, SĐT)',
    focus: 'Có thể cho tôi xin WeChat không? (Kěyǐ jiā gè Wēixìn ma?)',
    tip: 'Ở Trung Quốc, xin WeChat (Wēixìn) là bước quan trọng nhất để giữ liên lạc!',
    sentences: [
      {
        hanzi: '我们可以加个微信吗？',
        pinyin: 'Wǒmen kěyǐ jiā gè Wēixìn ma?',
        vi: 'Chúng ta có thể kết bạn WeChat được không?',
        breakdown: '加个微信 (kết bạn WeChat) + 吗 (được không)'
      },
      {
        hanzi: '我扫你还是你扫我？',
        pinyin: 'Wǒ sǎo nǐ háishi nǐ sǎo wǒ?',
        vi: 'Tôi quét mã bạn hay bạn quét mã tôi?',
        breakdown: '我扫你 (tôi quét bạn) + 还是 (hay là) + 你扫我 (bạn quét tôi)'
      },
      {
        hanzi: '你的电话号码是多少？',
        pinyin: 'Nǐ de diànhuà hàomǎ shì duōshao?',
        vi: 'Số điện thoại của bạn là bao nhiêu?',
        breakdown: '电话号码 (số điện thoại) + 是多少 (là bao nhiêu)'
      }
    ],
    quickReflex: {
      question: 'Cụm từ "Quét mã QR" trong tiếng Trung là gì?',
      options: ['打电话', '扫码 (Sǎo mǎ)', '发邮件'],
      correct: 1,
      explain: '扫码 (Sǎo mǎ) = Quét mã QR.'
    },
    relatedPath: '/scenario'
  },
  {
    day: 14,
    stage: 1,
    week: 2,
    title: 'Ôn tập Tuần 2: Tự giới thiệu bản thân 60 giây',
    focus: 'Ghép 5 câu thành một bài giới thiệu hoàn chỉnh!',
    tip: 'Thử nói liên tục không ngừng: Tên -> Tuổi -> Quốc tịch -> Nghề nghiệp -> Xin WeChat!',
    sentences: [
      {
        hanzi: '大家好，我叫大卫，今年二十八岁。',
        pinyin: 'Dàjiā hǎo, wǒ jiào Dàwèi, jīnnián èrshíbā suì.',
        vi: 'Chào mọi người, tôi tên David, năm nay 28 tuổi.',
        breakdown: 'Mở đầu bài giới thiệu'
      },
      {
        hanzi: '我是越南人，现在是一名程序员。',
        pinyin: 'Wǒ shì Yuènán rén, xiànzài shì yì míng chéngxùyuán.',
        vi: 'Tôi là người Việt Nam, hiện là một lập trình viên.',
        breakdown: 'Quốc tịch và nghề nghiệp'
      },
      {
        hanzi: '很高兴认识大家，请多关照！',
        pinyin: 'Hěn gāoxìng rènshi dàjiā, qǐng duō guānzhào!',
        vi: 'Rất vui quen biết mọi người, xin được chỉ giáo nhiều hơn!',
        breakdown: 'Câu kết khiêm tốn chuẩn văn hóa Á Đông'
      }
    ],
    quickReflex: {
      question: 'Câu nói lịch sự xin mọi người giúp đỡ/chỉ giáo là gì?',
      options: ['请多关照！', '再见！', '你叫什么？'],
      correct: 0,
      explain: '请多关照 (Qǐng duō guānzhào) = Xin chiếu cố / chỉ giáo.'
    },
    relatedPath: '/speaking'
  },

  // Tuần 3: Số đếm, Hỏi giá & Mua sắm cơ bản (Ngày 15 - 21)
  {
    day: 15,
    stage: 1,
    week: 3,
    title: 'Số đếm 1 đến 100 & Đếm tiền mặt',
    focus: 'Yī, Èr, Sān, Sì... và đơn vị tiền Kuài (Tệ)',
    tip: 'Khẩu ngữ người Trung Quốc dùng 块 (kuài) thay vì 元 (yuán).',
    sentences: [
      {
        hanzi: '这个一共多少钱？',
        pinyin: 'Zhège yígòng duōshao qián?',
        vi: 'Cái này tổng cộng bao nhiêu tiền?',
        breakdown: '这个 (cái này) + 一共 (tổng cộng) + 多少钱 (bao nhiêu tiền)'
      },
      {
        hanzi: '一共三十五块钱。',
        pinyin: 'Yígòng sānshíwǔ kuài qián.',
        vi: 'Tổng cộng 35 tệ (khoảng 125k VND).',
        breakdown: '三十五块 (35 tệ) + 钱 (tiền)'
      },
      {
        hanzi: '给你一百块，找您六十五块。',
        pinyin: 'Gěi nǐ yìbǎi kuài, zhǎo nín liùshíwǔ kuài.',
        vi: 'Đưa bạn 100 tệ, thối lại bạn 65 tệ nhé.',
        breakdown: '给你 (đưa bạn) + 找您 (thối lại bạn)'
      }
    ],
    quickReflex: {
      question: 'Khẩu ngữ gọi đồng nhân dân tệ là gì?',
      options: ['块 (Kuài)', '分 (Fēn)', '点 (Diǎn)'],
      correct: 0,
      explain: 'Khẩu ngữ luôn nói 块 (kuài).'
    },
    relatedPath: '/speaking'
  },
  {
    day: 16,
    stage: 1,
    week: 3,
    title: 'Hỏi giá đơn giản: Cái này bao nhiêu tiền?',
    focus: 'Duōshao qián? vs Zěnme mài? (Bán thế nào?)',
    tip: 'Đi chợ nói "Zhège zěnme mài?" nghe cực kỳ sành sỏi như người bản xứ!',
    sentences: [
      {
        hanzi: '老板，这个苹果怎么卖？',
        pinyin: 'Lǎobǎn, zhège píngguǒ zěnme mài?',
        vi: 'Ông chủ ơi, táo này bán thế nào vậy?',
        breakdown: '老板 (ông chủ) + 怎么卖 (bán thế nào)'
      },
      {
        hanzi: '十块钱三斤，很甜的！',
        pinyin: 'Shí kuài qián sān jīn, hěn tián de!',
        vi: 'Mười tệ ba cân (1.5kg), ngọt lắm đấy!',
        breakdown: '斤 (cân TQ = 500g) + 很甜 (rất ngọt)'
      },
      {
        hanzi: '给我来两斤吧。',
        pinyin: 'Gěi wǒ lái liǎng jīn ba.',
        vi: 'Lấy cho tôi hai cân đi.',
        breakdown: '给我来 (lấy cho tôi) + 两斤 (2 cân)'
      }
    ],
    quickReflex: {
      question: 'Khi muốn nói "Lấy cho tôi cái này", khẩu ngữ dùng:',
      options: ['给我来这个', '我不买', '这是什么'],
      correct: 0,
      explain: '给我来... (Gěi wǒ lái...) là cách gọi mua hàng rất tự nhiên.'
    },
    relatedPath: '/scenario'
  },
  {
    day: 17,
    stage: 1,
    week: 3,
    title: 'Mặc cả hạ giá (Đắt quá, bớt chút đi!)',
    focus: 'Tài guì le! Piányi yìdiǎnr ba!',
    tip: 'Nở nụ cười và nói câu này với giọng nũng nịu một chút, sẽ được giảm ngay!',
    sentences: [
      {
        hanzi: '太贵了！便宜一点儿吧。',
        pinyin: 'Tài guì le! Piányi yìdiǎnr ba.',
        vi: 'Đắt quá đi! Rẻ hơn một chút đi mà.',
        breakdown: '太贵了 (đắt quá) + 便宜一点儿 (rẻ chút)'
      },
      {
        hanzi: '最低多少钱能卖？',
        pinyin: 'Zuìdī duōshao qián néng mài?',
        vi: 'Giá chốt thấp nhất bán được bao nhiêu?',
        breakdown: '最低 (thấp nhất) + 能卖 (có thể bán)'
      },
      {
        hanzi: '不能再便宜了，这是成本价！',
        pinyin: 'Bù néng zài piányi le, zhè shì chéngběn jià!',
        vi: 'Không thể rẻ hơn được nữa, đây là giá vốn rồi!',
        breakdown: '成本价 (giá vốn)'
      }
    ],
    quickReflex: {
      question: 'Câu nào dùng để xin giảm giá?',
      options: ['便宜一点儿吧！', '太便宜了！', '我不要！'],
      correct: 0,
      explain: '便宜一点儿吧 (Piányi yìdiǎnr ba) = Bớt một chút đi.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 18,
    stage: 1,
    week: 3,
    title: 'Thanh toán WeChat / Alipay (Tôi quét mã bạn nhé)',
    focus: 'Wēixìn háishi Zhīfùbǎo? (WeChat hay Alipay?)',
    tip: 'Đi Trung Quốc không dùng tiền mặt, 100% người ta sẽ hỏi câu này!',
    sentences: [
      {
        hanzi: '请问可以用微信支付吗？',
        pinyin: 'Qǐngwèn kěyǐ yòng Wēixìn zhīfù ma?',
        vi: 'Xin hỏi có thể thanh toán bằng WeChat được không?',
        breakdown: '用微信支付 (thanh toán bằng WeChat)'
      },
      {
        hanzi: '微信或者支付宝都可以。',
        pinyin: 'Wēixìn huòzhě Zhīfùbǎo dōu kěyǐ.',
        vi: 'WeChat hay Alipay đều được hết ạ.',
        breakdown: '微信 (WeChat) + 或者 (hoặc) + 支付宝 (Alipay)'
      },
      {
        hanzi: '我扫您的二维码。',
        pinyin: 'Wǒ sǎo nín de èrwéimǎ.',
        vi: 'Tôi quét mã QR của bạn nhé.',
        breakdown: '二维码 (mã QR)'
      }
    ],
    quickReflex: {
      question: 'Tên tiếng Trung của Alipay là gì?',
      options: ['微信 (Wēixìn)', '支付宝 (Zhīfùbǎo)', '银行卡'],
      correct: 1,
      explain: '支付宝 (Zhīfùbǎo) là ví điện tử Alipay.'
    },
    relatedPath: '/scenario'
  },
  {
    day: 19,
    stage: 1,
    week: 3,
    title: 'Chọn màu sắc & Kích thước (Cái này to quá / bé quá)',
    focus: 'Tài dà le / Tài xiǎo le / Yǒu bié de yánsè ma?',
    tip: 'Đại (dà) là to, Tiểu (xiǎo) là nhỏ. Rất dễ nhớ đúng không!',
    sentences: [
      {
        hanzi: '这件衣服有点儿大，有小一号的吗？',
        pinyin: 'Zhè jiàn yīfu yǒudiǎnr dà, yǒu xiǎo yí hào de ma?',
        vi: 'Bộ quần áo này hơi to, có cỡ nhỏ hơn một số không?',
        breakdown: '有点儿大 (hơi to) + 小一号 (nhỏ hơn 1 cỡ)'
      },
      {
        hanzi: '我想试穿一下，可以吗？',
        pinyin: 'Wǒ xiǎng shìchuān yíxià, kěyǐ ma?',
        vi: 'Tôi muốn mặc thử một chút được không?',
        breakdown: '试穿 (thử mặc) + 一下 (một chút)'
      },
      {
        hanzi: '试衣间在那边，请跟我来。',
        pinyin: 'Shìyījiān zài nàbiān, qǐng gēn wǒ lái.',
        vi: 'Phòng thử đồ ở đằng kia, mời đi theo tôi.',
        breakdown: '试衣间 (phòng thử đồ) + 跟我来 (theo tôi)'
      }
    ],
    quickReflex: {
      question: 'Phòng thử đồ trong tiếng Trung là gì?',
      options: ['洗手间 (Nhà vệ sinh)', '试衣间 (Shìyījiān)', '大门'],
      correct: 1,
      explain: '试衣间 (Shìyījiān) là phòng thử quần áo.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 20,
    stage: 1,
    week: 3,
    title: 'Mua túi đựng & In hóa đơn',
    focus: 'Yào dài zi ma? (Có lấy túi không?)',
    tip: 'Ở siêu thị Trung Quốc túi ni-lông tính phí 2-3 hào, họ luôn hỏi câu này.',
    sentences: [
      {
        hanzi: '需要塑料袋吗？两毛钱一个。',
        pinyin: 'Xūyào sùliàodài ma? Liǎng máo qián yí gè.',
        vi: 'Có cần túi ni-lông không ạ? Hai hào một chiếc.',
        breakdown: '塑料袋 (túi ni lông) + 两毛 (hai hào = 0.2 tệ)'
      },
      {
        hanzi: '不用了，我自己带了包。',
        pinyin: 'Bú yòng le, wǒ zìjǐ dài le bāo.',
        vi: 'Không cần đâu, tôi tự mang túi rồi.',
        breakdown: '不用了 (không cần) + 自己带 (tự mang)'
      },
      {
        hanzi: '请帮我开发票，谢谢！',
        pinyin: 'Qǐng bāng wǒ kāi fāpiào, xièxie!',
        vi: 'Xin giúp tôi xuất hóa đơn, cảm ơn!',
        breakdown: '开发票 (xuất hóa đơn)'
      }
    ],
    quickReflex: {
      question: 'Khi thu ngân hỏi cần túi không và bạn muốn lấy túi, bạn nói gì?',
      options: ['要一个 (Yào yí gè)', '不用了', '太贵了'],
      correct: 0,
      explain: '要一个 (Yào yí gè) = Cho tôi một chiếc túi.'
    },
    relatedPath: '/listening'
  },
  {
    day: 21,
    stage: 1,
    week: 3,
    title: 'Ôn tập Tuần 3: Đóng vai mua sắm tại siêu thị',
    focus: 'Tổng kết chuỗi hỏi giá -> mặc cả -> quét mã thanh toán',
    tip: 'Bạn đã đi được 1/3 chặng đường Tháng 1 rồi! Tuyệt vời!',
    sentences: [
      {
        hanzi: '老板，一共多少钱？能便宜点吗？',
        pinyin: 'Lǎobǎn, yígòng duōshao qián? Néng piányi diǎn ma?',
        vi: 'Ông chủ, tổng cộng bao nhiêu? Bớt chút được không?',
        breakdown: 'Combo hỏi giá và mặc cả quen thuộc'
      },
      {
        hanzi: '给你算五十块吧，扫码支付。',
        pinyin: 'Gěi nǐ suàn wǔshí kuài ba, sǎo mǎ zhīfù.',
        vi: 'Tính cho bạn 50 tệ nhé, quét mã trả tiền nha.',
        breakdown: '算五十块 (tính 50 tệ) + 扫码支付 (quét mã)'
      },
      {
        hanzi: '钱已经转过去了，您查收一下。',
        pinyin: 'Qián yǐjīng zhuǎn guòqù le, nín cháshōu yíxià.',
        vi: 'Tiền đã chuyển qua rồi, bạn kiểm tra lại nhé.',
        breakdown: '转过去 (chuyển qua rồi) + 查收 (kiểm tra nhận tiền)'
      }
    ],
    quickReflex: {
      question: 'Nói "Tiền đã chuyển xong rồi" khi quét mã:',
      options: ['钱已经转过去了', '我没钱', '我不买了'],
      correct: 0,
      explain: '钱已经转过去了 (Qián yǐjīng zhuǎn guòqù le).'
    },
    relatedPath: '/ai-chat'
  },

  // Tuần 4: Hỏi đường, Thời gian & Xã giao sinh tồn (Ngày 22 - 30)
  {
    day: 22,
    stage: 1,
    week: 4,
    title: 'Hỏi nhà vệ sinh ở đâu (Mẫu câu cứu mạng)',
    focus: 'Xǐshǒujiān zài nǎlǐ? (Nhà vệ sinh ở đâu?)',
    tip: 'Từ lịch sự là 洗手间 (Xǐshǒujiān - phòng rửa tay) thay vì 厕所 (Cèsuǒ).',
    sentences: [
      {
        hanzi: '请问，洗手间在哪里？',
        pinyin: 'Qǐngwèn, xǐshǒujiān zài nǎlǐ?',
        vi: 'Xin hỏi, nhà vệ sinh ở đâu vậy?',
        breakdown: '洗手间 (nhà vệ sinh) + 在哪里 (ở đâu)'
      },
      {
        hanzi: '一直往前走，右拐就到了。',
        pinyin: 'Yìzhí wǎng qián zǒu, yòu guǎi jiù dào le.',
        vi: 'Cứ đi thẳng về phía trước, rẽ phải là tới rồi.',
        breakdown: '一直往前走 (đi thẳng) + 右拐 (rẽ phải) + 就到了 (là tới)'
      },
      {
        hanzi: '就在电梯旁边。',
        pinyin: 'Jiù zài diàntī pángbiān.',
        vi: 'Ngay bên cạnh thang máy đó.',
        breakdown: '电梯 (thang máy) + 旁边 (bên cạnh)'
      }
    ],
    quickReflex: {
      question: '"Đi thẳng về phía trước" tiếng Trung nói thế nào?',
      options: ['左拐', '一直往前走 (Yìzhí wǎng qián zǒu)', '向后转'],
      correct: 1,
      explain: '一直往前走 là đi thẳng miết về phía trước.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 23,
    stage: 1,
    week: 4,
    title: 'Hỏi phương hướng: Trái, Phải, Trước, Sau',
    focus: 'Zuǒ, Yòu, Qián, Hòu',
    tip: 'Tả (zuǒ) = Trái, Hữu (yòu) = Phải. Tả Hữu = Trái Phải!',
    sentences: [
      {
        hanzi: '到十字路口往左拐。',
        pinyin: 'Dào shízì lùkǒu wǎng zuǒ guǎi.',
        vi: 'Đến ngã tư thì rẽ sang bên trái nhé.',
        breakdown: '十字路口 (ngã tư) + 往左拐 (rẽ trái)'
      },
      {
        hanzi: '地铁站在马路对面。',
        pinyin: 'Dìtiě zhàn zài mǎlù duìmiàn.',
        vi: 'Trạm ga tàu điện ngầm ở đối diện bên kia đường.',
        breakdown: '地铁站 (ga tàu điện) + 马路对面 (đối diện đường)'
      },
      {
        hanzi: '离这里远不远？大概要走多久？',
        pinyin: 'Lí zhèlǐ yuǎn bù yuǎn? Dàgài yào zǒu duō jiǔ?',
        vi: 'Cách đây có xa không? Đi bộ mất khoảng bao lâu?',
        breakdown: '离这里 (cách đây) + 大概要走多久 (khoảng đi bao lâu)'
      }
    ],
    quickReflex: {
      question: '"Rẽ phải" trong tiếng Trung là gì?',
      options: ['往左拐', '往右拐 (Wǎng yòu guǎi)', '直走'],
      correct: 1,
      explain: '往右拐 (Wǎng yòu guǎi) = Rẽ sang phải.'
    },
    relatedPath: '/scenario'
  },
  {
    day: 24,
    stage: 1,
    week: 4,
    title: 'Hỏi giờ giấc: Bây giờ là mấy giờ?',
    focus: 'Xiànzài jǐ diǎn le? (Bây giờ mấy giờ rồi?)',
    tip: 'Diǎn = Giờ, Fēn = Phút, Bàn = Rưỡi (30 phút).',
    sentences: [
      {
        hanzi: '请问，现在几点了？',
        pinyin: 'Qǐngwèn, xiànzài jǐ diǎn le?',
        vi: 'Xin hỏi, bây giờ là mấy giờ rồi?',
        breakdown: '现在 (bây giờ) + 几点了 (mấy giờ rồi)'
      },
      {
        hanzi: '现在是下午两点半。',
        pinyin: 'Xiànzài shì xiàwǔ liǎng diǎn bàn.',
        vi: 'Bây giờ là 2 giờ rưỡi chiều.',
        breakdown: '下午 (chiều) + 两点半 (2 giờ rưỡi)'
      },
      {
        hanzi: '我们几点出发？',
        pinyin: 'Wǒmen jǐ diǎn chūfā?',
        vi: 'Chúng ta mấy giờ xuất phát thế?',
        breakdown: '几点 (mấy giờ) + 出发 (xuất phát)'
      }
    ],
    quickReflex: {
      question: 'Hai giờ rưỡi nói là:',
      options: ['两点半 (Liǎng diǎn bàn)', '二点半', '两点分'],
      correct: 0,
      explain: 'Chỉ số lượng giờ dùng 两点 (Liǎng diǎn), không dùng 二点.'
    },
    relatedPath: '/formula'
  },
  {
    day: 25,
    stage: 1,
    week: 4,
    title: 'Hỏi ngày tháng & Thứ trong tuần',
    focus: 'Jīntiān xīngqī jǐ? (Hôm nay thứ mấy?)',
    tip: 'Thứ 2 = Xīngqīyī, Thứ 3 = Xīngqī\'èr... Chủ nhật = Xīngqītīan/rì.',
    sentences: [
      {
        hanzi: '今天星期几？今天星期五。',
        pinyin: 'Jīntiān xīngqī jǐ? Jīntiān xīngqī wǔ.',
        vi: 'Hôm nay thứ mấy? Hôm nay thứ sáu.',
        breakdown: '星期几 (thứ mấy) + 星期五 (thứ 6)'
      },
      {
        hanzi: '你的生日是几月几号？',
        pinyin: 'Nǐ de shēngrì shì jǐ yuè jǐ hào?',
        vi: 'Sinh nhật bạn là ngày mấy tháng mấy?',
        breakdown: '生日 (sinh nhật) + 几月几号 (tháng mấy ngày mấy)'
      },
      {
        hanzi: '明天是我的生日，欢迎你来！',
        pinyin: 'Míngtiān shì wǒ de shēngrì, huānyíng nǐ lái!',
        vi: 'Ngày mai là sinh nhật tôi, hoan nghênh bạn tới!',
        breakdown: '欢迎你来 (hoan nghênh bạn đến)'
      }
    ],
    quickReflex: {
      question: 'Thứ Bảy trong tiếng Trung là gì?',
      options: ['星期五', '星期六 (Xīngqīliù)', '星期天'],
      correct: 1,
      explain: '星期六 (Xīngqīliù) là Thứ Bảy.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 26,
    stage: 1,
    week: 4,
    title: 'Tôi không hiểu! Nói chậm một chút được không?',
    focus: 'Mẫu câu cứu nguy khi nghe không kịp',
    tip: 'Khi người bản xứ nói nhanh, lập tức dùng câu này. Đừng giả vờ gật đầu nhé!',
    sentences: [
      {
        hanzi: '不好意思，我听不懂。',
        pinyin: 'Bù hǎoyìsi, wǒ tīng bù dǒng.',
        vi: 'Ngại quá, tôi nghe không hiểu.',
        breakdown: '听不懂 (nghe không hiểu)'
      },
      {
        hanzi: '请你说得慢一点儿。',
        pinyin: 'Qǐng nǐ shuō de màn yìdiǎnr.',
        vi: 'Xin bạn nói chậm hơn một chút.',
        breakdown: '说得慢一点儿 (nói chậm một chút)'
      },
      {
        hanzi: '请你再说一遍，好吗？',
        pinyin: 'Qǐng nǐ zài shuō yí biàn, hǎo ma?',
        vi: 'Xin bạn nhắc lại một lần nữa được không?',
        breakdown: '再说一遍 (nói lại một lần)'
      }
    ],
    quickReflex: {
      question: 'Nói "Tôi nghe không hiểu" là gì?',
      options: ['我看不懂', '我听不懂 (Wǒ tīng bù dǒng)', '我不想听'],
      correct: 1,
      explain: '听不懂 (Tīng bù dǒng) = Nghe không hiểu.'
    },
    relatedPath: '/listening'
  },
  {
    day: 27,
    stage: 1,
    week: 4,
    title: 'Cái này tiếng Trung gọi là gì?',
    focus: 'Zhège yòng zhōngwén zěnme shuō?',
    tip: 'Đây là câu quyền năng nhất giúp bạn học từ mới trực tiếp từ người bản xứ!',
    sentences: [
      {
        hanzi: '请问，这个用中文怎么说？',
        pinyin: 'Qǐngwèn, zhège yòng zhōngwén zěnme shuō?',
        vi: 'Xin hỏi, cái này tiếng Trung nói như thế nào?',
        breakdown: '用中文 (bằng tiếng Trung) + 怎么说 (nói thế nào)'
      },
      {
        hanzi: '这个词是什么意思？',
        pinyin: 'Zhège cí shì shénme yìsi?',
        vi: 'Từ này có ý nghĩa là gì vậy?',
        breakdown: '这个词 (từ này) + 什么意思 (nghĩa là gì)'
      },
      {
        hanzi: '你能帮我写一下拼音吗？',
        pinyin: 'Nǐ néng bāng wǒ xiě yíxià pīnyīn ma?',
        vi: 'Bạn có thể giúp tôi viết Pinyin ra được không?',
        breakdown: '写一下拼音 (viết chút Pinyin ra)'
      }
    ],
    quickReflex: {
      question: 'Khi muốn hỏi ý nghĩa của một từ, bạn hỏi:',
      options: ['这是什么意思？', '你在哪里？', '多少钱？'],
      correct: 0,
      explain: '这是什么意思？ (Zhè shì shénme yìsi? - Cái này có nghĩa là gì?).'
    },
    relatedPath: '/speaking'
  },
  {
    day: 28,
    stage: 1,
    week: 4,
    title: 'Hỏi WiFi & Mật khẩu quán cafe',
    focus: 'WIFI mǐmǎ shì duōshao? (Mật khẩu WiFi là gì?)',
    tip: 'Bước vào quán cafe, nhà hàng việc đầu tiên là hỏi mật khẩu WiFi!',
    sentences: [
      {
        hanzi: '服务员，这里的WiFi密码是多少？',
        pinyin: 'Fúwùyuán, zhèlǐ de WiFi mìmǎ shì duōshao?',
        vi: 'Phục vụ ơi, mật khẩu WiFi ở đây là bao nhiêu?',
        breakdown: '服务员 (phục vụ) + 密码 (mật khẩu)'
      },
      {
        hanzi: '密码贴在桌子上了，八个八。',
        pinyin: 'Mìmǎ tiē zài zhuōzi shàng le, bā gè bā.',
        vi: 'Mật khẩu dán ở trên bàn đó ạ, tám số tám.',
        breakdown: '贴在桌子上 (dán trên bàn) + 八个八 (8 con số 8)'
      },
      {
        hanzi: '网速很快，连接成功了！',
        pinyin: 'Wǎngsù hěn kuài, liánjiē chénggōng le!',
        vi: 'Tốc độ mạng nhanh thật, kết nối thành công rồi!',
        breakdown: '网速 (tốc độ mạng) + 连接成功 (kết nối thành công)'
      }
    ],
    quickReflex: {
      question: '"Mật khẩu" tiếng Trung là gì?',
      options: ['手机', '密码 (Mìmǎ)', '银行'],
      correct: 1,
      explain: '密码 (Mìmǎ) = Mật khẩu.'
    },
    relatedPath: '/scenario'
  },
  {
    day: 29,
    stage: 1,
    week: 4,
    title: 'Mượn đồ & Nhờ vả lịch sự',
    focus: 'Kěyǐ jiè wǒ... ma? (Có thể cho tôi mượn... không?)',
    tip: 'Mượn đồ xong nhớ cảm ơn bằng: "Duo xiè" hoặc "Xièxie nǐ"!',
    sentences: [
      {
        hanzi: '可以借我用一下充电宝吗？',
        pinyin: 'Kěyǐ jiè wǒ yòng yíxià chōngdiànbǎo ma?',
        vi: 'Có thể cho tôi mượn cục sạc dự phòng dùng chút được không?',
        breakdown: '借我用一下 (cho tôi mượn dùng chút) + 充电宝 (sạc dự phòng)'
      },
      {
        hanzi: '没问题，拿去用吧。',
        pinyin: 'Méi wèntí, ná qù yòng ba.',
        vi: 'Không vấn đề gì, cầm lấy dùng đi nhé.',
        breakdown: '没问题 (không sao) + 拿去用 (cầm lấy dùng)'
      },
      {
        hanzi: '我的手机快没电了。',
        pinyin: 'Wǒ de shǒujī kuài méi diàn le.',
        vi: 'Điện thoại của tôi sắp hết pin rồi.',
        breakdown: '快没电了 (sắp hết pin rồi)'
      }
    ],
    quickReflex: {
      question: '"Sạc dự phòng" tiếng Trung gọi là gì?',
      options: ['电脑', '充电宝 (Chōngdiànbǎo)', '手表'],
      correct: 1,
      explain: '充电宝 (Chōngdiànbǎo) = Cục sạc dự phòng.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 30,
    stage: 1,
    week: 4,
    title: 'TỔNG KẾT THÁNG 1: Đánh giá mốc 30 ngày & Nhận huy hiệu!',
    focus: 'Bạn đã làm chủ 150 mẫu câu giao tiếp sinh tồn căn bản!',
    tip: 'Tuyệt vời! Bạn đã vượt qua chặng khó khăn nhất và không hề bỏ cuộc. Hãy tự hào về mình!',
    sentences: [
      {
        hanzi: '太棒了！我已经坚持学了一个月中文。',
        pinyin: 'Tài bàng le! Wǒ yǐjīng jiānchí xué le yí gè yuè zhōngwén.',
        vi: 'Tuyệt vời quá! Tôi đã kiên trì học tiếng Trung được 1 tháng rồi.',
        breakdown: '太棒了 (tuyệt quá) + 坚持 (kiên trì) + 一个月 (1 tháng)'
      },
      {
        hanzi: '现在我已经能听懂日常问候了。',
        pinyin: 'Xiànzài wǒ yǐjīng néng tīng dǒng rìcháng wènhòu le.',
        vi: 'Bây giờ tôi đã có thể nghe hiểu chào hỏi hàng ngày rồi.',
        breakdown: '能听懂 (có thể nghe hiểu) + 日常问候 (chào hỏi đời sống)'
      },
      {
        hanzi: '下个月我要继续加油！',
        pinyin: 'Xià gè yuè wǒ yào jìxù jiāyóu!',
        vi: 'Tháng sau tôi nhất định sẽ tiếp tục cố gắng!',
        breakdown: '继续 (tiếp tục) + 加油 (cố lên)'
      }
    ],
    quickReflex: {
      question: 'Từ nào có nghĩa là "Cố lên!" trong tiếng Trung?',
      options: ['加油！(Jiāyóu)', '没空！', '下班！'],
      correct: 0,
      explain: '加油 (Jiāyóu) = Cố lên!'
    },
    relatedPath: '/ai-chat'
  },

  // ================= THÁNG 2: PHẢN XẠ ĐỜI SỐNG & GHÉP CÂU TỰ NHIÊN (NGÀY 31 - 60) =================
  // Tuần 5: Gọi món, Ẩm thực & Thưởng thức trà sữa (Ngày 31 - 37)
  {
    day: 31,
    stage: 2,
    week: 5,
    title: 'Bước vào quán ăn & Lấy bàn ăn',
    focus: 'Jǐ wèi? (Mấy vị?) -> Liǎng wèi (Hai người)',
    tip: 'Người phục vụ sẽ hỏi: "Jǐ wèi?". Trả lời lịch sự: "Liǎng wèi" thay vì "Liǎng gè rén".',
    sentences: [
      {
        hanzi: '服务员，请问还有空位吗？我们两个人。',
        pinyin: 'Fúwùyuán, qǐngwèn hái yǒu kòngwèi ma? Wǒmen liǎng gè rén.',
        vi: 'Phục vụ ơi, xin hỏi còn bàn trống không? Chúng tôi có 2 người.',
        breakdown: '空位 (chỗ trống) + 两个人 (2 người)'
      },
      {
        hanzi: '有的，请跟我来，坐这边靠窗的位置。',
        pinyin: 'Yǒu de, qǐng gēn wǒ lái, zuò zhèbiān kào chuāng de wèizhì.',
        vi: 'Còn ạ, mời đi theo tôi, ngồi chỗ bên này sát cửa sổ nhé.',
        breakdown: '靠窗 (sát cửa sổ) + 位置 (vị trí/chỗ ngồi)'
      },
      {
        hanzi: '请给我们一份菜单，谢谢！',
        pinyin: 'Qǐng gěi wǒmen yí fèn càidān, xièxie!',
        vi: 'Làm ơn cho chúng tôi một cuốn thực đơn với, cảm ơn!',
        breakdown: '一份菜单 (1 cuốn thực đơn)'
      }
    ],
    quickReflex: {
      question: '"Thực đơn" trong tiếng Trung là gì?',
      options: ['菜单 (Càidān)', '买单', '发票'],
      correct: 0,
      explain: '菜单 (Càidān) = Thực đơn.'
    },
    relatedPath: '/scenario'
  },
  {
    day: 32,
    stage: 2,
    week: 5,
    title: 'Hỏi món đặc sản & Gọi món',
    focus: 'Zhèlǐ de zhāopái cài shì shénme? (Món tủ ở đây là gì?)',
    tip: 'Đi ăn hàng nhớ hỏi: "Zhāopái cài" = Món đinh/đặc sản của quán!',
    sentences: [
      {
        hanzi: '请问你们店有什么招牌菜？',
        pinyin: 'Qǐngwèn nǐmen diàn yǒu shénme zhāopái cài?',
        vi: 'Xin hỏi quán mình có món đặc sản nào nổi tiếng?',
        breakdown: '招牌菜 (món đặc sản/món tủ)'
      },
      {
        hanzi: '我们的北京烤鸭和宫保鸡丁最有名。',
        pinyin: 'Wǒmen de Běijīng kǎoyā hé Gōngbǎo jīdīng zuì yǒumíng.',
        vi: 'Món vịt quay Bắc Kinh và gà xào Cung Bảo nhà em nổi tiếng nhất.',
        breakdown: '北京烤鸭 (vịt quay BK) + 宫保鸡丁 (gà Cung Bảo) + 最有名 (nổi tiếng nhất)'
      },
      {
        hanzi: '好的，那就各来一份吧！',
        pinyin: 'Hǎo de, nà jiù gè lái yí fèn ba!',
        vi: 'Được rồi, thế thì mỗi món lấy một phần nhé!',
        breakdown: '各来一份 (mỗi món lấy 1 phần)'
      }
    ],
    quickReflex: {
      question: 'Muốn gọi món "Vịt quay Bắc Kinh", bạn nói:',
      options: ['北京烤鸭 (Běijīng kǎoyā)', '麻婆豆腐', '火锅'],
      correct: 0,
      explain: '北京烤鸭 = Vịt quay Bắc Kinh trứ danh.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 33,
    stage: 2,
    week: 5,
    title: 'Yêu cầu khẩu vị: Không cay, ít đường, ít muối',
    focus: 'Bú yào fàng là! (Đừng cho ớt cay!)',
    tip: 'Đồ ăn Trung Quốc rất cay dầu, nhớ dặn: "Wēilà" (cay nhẹ) hoặc "Bù là" (không cay)!',
    sentences: [
      {
        hanzi: '我不吃辣，请不要放辣椒。',
        pinyin: 'Wǒ bù chī là, qǐng bú yào fàng làjiāo.',
        vi: 'Tôi không ăn cay, xin đừng bỏ ớt nhé.',
        breakdown: '不吃辣 (không ăn cay) + 辣椒 (ớt cay)'
      },
      {
        hanzi: '少放点油和盐，口味清淡一点。',
        pinyin: 'Shǎo fàng diǎn yóu hé yán, kǒuwèi qīngdàn yìdiǎn.',
        vi: 'Bỏ ít dầu và muối thôi, khẩu vị thanh đạm một chút nhé.',
        breakdown: '少放 (bỏ ít) + 油和盐 (dầu & muối) + 清淡 (thanh đạm)'
      },
      {
        hanzi: '请不要放香菜，我过敏。',
        pinyin: 'Qǐng bú yào fàng xiāngcài, wǒ guòmǐn.',
        vi: 'Làm ơn đừng bỏ rau mùi (ngò rí), tôi bị dị ứng.',
        breakdown: '香菜 (rau mùi/ngò rí) + 过敏 (dị ứng)'
      }
    ],
    quickReflex: {
      question: 'Khi dặn "Đừng bỏ ớt cay", bạn nói:',
      options: ['多放点辣', '不要放辣椒 (Bú yào fàng làjiāo)', '很辣'],
      correct: 1,
      explain: '不要放辣椒 = Đừng bỏ ớt.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 34,
    stage: 2,
    week: 5,
    title: 'Order Trà Sữa Chuẩn Bản Xứ (Độ ngọt & Độ đá)',
    focus: 'Bàn táng, shǎo bīng (Nửa đường, ít đá)',
    tip: 'Combo thần thánh gọi trà sữa: "Yì bēi bōbà nǎichá, bàn táng, shǎo bīng"!',
    sentences: [
      {
        hanzi: '你好，我要一杯波霸奶茶。',
        pinyin: 'Nǐ hǎo, wǒ yào yì bēi bōbà nǎichá.',
        vi: 'Chào bạn, tôi muốn một ly trà sữa trân châu.',
        breakdown: '波霸奶茶 (trà sữa trân châu lớn)'
      },
      {
        hanzi: '甜度和冰块怎么选？半糖、少冰。',
        pinyin: 'Tiándù hé bīngkuài zěnme xuǎn? Bàn táng, shǎo bīng.',
        vi: 'Độ ngọt và đá chọn thế nào ạ? 50% đường, ít đá.',
        breakdown: '半糖 (nửa đường = 50%) + 少冰 (ít đá)'
      },
      {
        hanzi: '大杯还是中杯？大杯，打包带走。',
        pinyin: 'Dà bēi háishi zhōng bēi? Dà bēi, dǎbāo dài zǒu.',
        vi: 'Ly lớn hay vừa ạ? Ly lớn, gói mang đi nhé.',
        breakdown: '打包带走 (đóng gói mang đi)'
      }
    ],
    quickReflex: {
      question: '"Ít đá" khi gọi nước trong tiếng Trung là gì?',
      options: ['少冰 (Shǎo bīng)', '多冰', '热的'],
      correct: 0,
      explain: '少冰 (Shǎo bīng) = Ít đá.'
    },
    relatedPath: '/scenario'
  },
  {
    day: 35,
    stage: 2,
    week: 5,
    title: 'Thúc giục phục vụ & Lấy thêm đồ ăn kèm',
    focus: 'Hái méi shàng cài (Vẫn chưa lên món)',
    tip: 'Đói bụng mà chờ lâu thì nói nhẹ nhàng: "Bāng wǒ cuī yíxià" (Thúc giục bếp giùm tôi nhé).',
    sentences: [
      {
        hanzi: '服务员，我们的菜还没上，能帮催一下吗？',
        pinyin: 'Fúwùyuán, wǒmen de cài hái méi shàng, néng bāng cuī yíxià ma?',
        vi: 'Phục vụ ơi, món của chúng tôi vẫn chưa lên, thúc giục giúp tôi chút được không?',
        breakdown: '还没上 (chưa lên) + 催一下 (thúc giục một chút)'
      },
      {
        hanzi: '不好意思，马上就给您端过来！',
        pinyin: 'Bù hǎoyìsi, mǎshàng jiù gěi nín duān guòlái!',
        vi: 'Xin lỗi quý khách, em bưng qua ngay đây ạ!',
        breakdown: '马上 (ngay lập tức) + 端过来 (bưng qua)'
      },
      {
        hanzi: '请再给我们拿一副碗筷和纸巾。',
        pinyin: 'Qǐng zài gěi wǒmen ná yí fù wǎnkuài hé zhǐjīn.',
        vi: 'Làm ơn lấy thêm cho chúng tôi một bộ chén đũa và khăn giấy.',
        breakdown: '一副碗筷 (1 bộ bát đũa) + 纸巾 (khăn giấy)'
      }
    ],
    quickReflex: {
      question: '"Khăn giấy" trong nhà hàng gọi là gì?',
      options: ['纸巾 (Zhǐjīn)', '筷子', '勺子'],
      correct: 0,
      explain: '纸巾 (Zhǐjīn) = Giấy ăn / khăn giấy.'
    },
    relatedPath: '/listening'
  },
  {
    day: 36,
    stage: 2,
    week: 5,
    title: 'Tính tiền nhà hàng & Đóng gói đồ ăn thừa',
    focus: 'Mǎidān! (Tính tiền!) & Dǎbāo (Gói mang về)',
    tip: 'Người Hoa ăn thừa thường đóng gói mang về, nói "Bāng wǒ dǎbāo" là phục vụ mang hộp ra ngay.',
    sentences: [
      {
        hanzi: '服务员，买单！一共多少钱？',
        pinyin: 'Fúwùyuán, mǎidān! Yígòng duōshao qián?',
        vi: 'Phục vụ ơi, tính tiền! Tổng cộng bao nhiêu thế?',
        breakdown: '买单 (tính tiền) + 一共 (tổng cộng)'
      },
      {
        hanzi: '剩下的菜请帮我们打包一下。',
        pinyin: 'Shèngxià de cài qǐng bāng wǒmen dǎbāo yíxià.',
        vi: 'Món còn thừa xin giúp chúng tôi đóng gói hộp mang về nhé.',
        breakdown: '剩下的菜 (đồ ăn thừa) + 打包 (đóng gói hộp mang về)'
      },
      {
        hanzi: '今天我请客，谁都别跟我抢！',
        pinyin: 'Jīntiān wǒ qǐngkè, shéi dōu bié gēn wǒ qiǎng!',
        vi: 'Hôm nay tôi bao/mời, ai cũng đừng tranh trả tiền với tôi nhé!',
        breakdown: '我请客 (tôi bao/tôi đãi) + 别跟我抢 (đừng tranh với tôi)'
      }
    ],
    quickReflex: {
      question: 'Khi muốn nói "Hôm nay để tôi đãi / tôi bao", bạn nói:',
      options: ['今天我请客！', '我不吃', '你买单'],
      correct: 0,
      explain: '我请客 (Wǒ qǐngkè) = Tôi đãi / Tôi bao chầu này.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 37,
    stage: 2,
    week: 5,
    title: 'Ôn tập Tuần 5: Đi ăn lẩu Haidilao cùng bạn bè',
    focus: 'Trải nghiệm ẩm thực hoàn chỉnh từ lúc vào bàn đến lúc thanh toán',
    tip: 'Bạn đã nói được các tình huống ẩm thực một cách mượt mà rồi!',
    sentences: [
      {
        hanzi: '我们点一个鸳鸯锅吧，一半清汤一半辣。',
        pinyin: 'Wǒmen diǎn yí gè yuānyang guō ba, yíbàn qīngtāng yíbàn là.',
        vi: 'Bọn mình gọi một nồi lẩu uyên ương nhé, nửa nước dùng thanh nửa cay.',
        breakdown: '鸳鸯锅 (nồi lẩu 2 ngăn uyên ương) + 清汤 (nước trong thanh ngọt)'
      },
      {
        hanzi: '牛肉卷涮十秒钟就可以吃了，真鲜美！',
        pinyin: 'Niúròujuǎn shuàn shí miǎozhōng jiù kěyǐ chī le, zhēn xiānměi!',
        vi: 'Thịt bò cuộn nhúng 10 giây là ăn được rồi, tươi ngon thật đấy!',
        breakdown: '涮 (nhúng lẩu) + 鲜美 (ngon ngọt đậm đà)'
      },
      {
        hanzi: '这里的服务态度真是太棒了！',
        pinyin: 'Zhèlǐ de fúwù tàidu zhēn shì tài bàng le!',
        vi: 'Thái độ phục vụ ở đây đúng là tuyệt vời ông mặt trời!',
        breakdown: '服务态度 (thái độ phục vụ)'
      }
    ],
    quickReflex: {
      question: 'Nồi lẩu hai ngăn một cay một không cay gọi là gì?',
      options: ['单人锅', '鸳鸯锅 (Yuānyang guō)', '大锅'],
      correct: 1,
      explain: '鸳鸯锅 (Nồi lẩu uyên ương).'
    },
    relatedPath: '/ai-chat'
  },

  // Tuần 6: Bắt xe taxi, Tàu điện ngầm & Di chuyển (Ngày 38 - 44)
  {
    day: 38,
    stage: 2,
    week: 6,
    title: 'Bắt taxi & Điền địa chỉ đi xe',
    focus: 'Shīfu, wǒ yào qù... (Bác tài ơi, cháu muốn đi...)',
    tip: 'Tài xế taxi ở TQ gọi là 师傅 (Shīfu). Nghe rất kính trọng và thân mật!',
    sentences: [
      {
        hanzi: '师傅，您好！去浦东机场多少钱？',
        pinyin: 'Shīfu, nín hǎo! Qù Pǔdōng jīchǎng duōshao qián?',
        vi: 'Bác tài ơi, cháu chào bác! Đi sân bay Phố Đông bao nhiêu tiền ạ?',
        breakdown: '师傅 (bác tài) + 机场 (sân bay)'
      },
      {
        hanzi: '我们打表走，大约一百二十块。',
        pinyin: 'Wǒmen dǎ biǎo zǒu, dàyuē yìbǎi èrshí kuài.',
        vi: 'Chúng ta chạy bấm đồng hồ nhé, khoảng 120 tệ.',
        breakdown: '打表 (bấm đồng hồ tính cước) + 大约 (khoảng)'
      },
      {
        hanzi: '师傅，我赶时间，麻烦您开快一点。',
        pinyin: 'Shīfu, wǒ gǎn shíjiān, máfan nín kāi kuài yìdiǎn.',
        vi: 'Bác tài ơi, cháu đang vội, phiền bác lái nhanh một chút ạ.',
        breakdown: '赶时间 (đang vội) + 开快一点 (lái nhanh chút)'
      }
    ],
    quickReflex: {
      question: 'Yêu cầu tài xế taxi bấm đồng hồ tính tiền nói là:',
      options: ['请打表 (Qǐng dǎ biǎo)', '不要打表', '我不去'],
      correct: 0,
      explain: '打表 (Dǎ biǎo) = Bật đồng hồ cước xe.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 39,
    stage: 2,
    week: 6,
    title: 'Chỉ đường cho bác tài & Xuống xe',
    focus: 'Kào biān tíng (Dừng xe tấp vào lề)',
    tip: 'Khi chuẩn bị xuống xe, hô to: "Shīfu, qiánmian lùkǒu kào biān tíng!".',
    sentences: [
      {
        hanzi: '师傅，前面路口右拐，然后靠边停就行。',
        pinyin: 'Shīfu, qiánmian lùkǒu yòu guǎi, ránhòu kào biān tíng jiù xíng.',
        vi: 'Bác tài ơi, ngã tư phía trước rẽ phải, xong tấp lề dừng là được ạ.',
        breakdown: '靠边停 (dừng tấp vào lề) + 就行 (là được)'
      },
      {
        hanzi: '请帮我开一下后备箱，我拿行李。',
        pinyin: 'Qǐng bāng wǒ kāi yíxià hòubèixiāng, wǒ ná xíngli.',
        vi: 'Làm ơn mở giúp cháu cốp xe, cháu lấy hành lý với ạ.',
        breakdown: '后备箱 (cốp xe) + 行李 (hành lý)'
      },
      {
        hanzi: '微信扫码付给您了，谢谢您！',
        pinyin: 'Wēixìn sǎo mǎ fù gěi nín le, xièxie nín!',
        vi: 'Cháu quét mã WeChat trả bác rồi nhé, cảm ơn bác nhiều!',
        breakdown: '微信扫码付 (quét mã WeChat trả)'
      }
    ],
    quickReflex: {
      question: '"Cốp xe ô tô" tiếng Trung là gì?',
      options: ['车门', '后备箱 (Hòubèixiāng)', '座位'],
      correct: 1,
      explain: '后备箱 (Hòubèixiāng) = Cốp sau xe hơi.'
    },
    relatedPath: '/scenario'
  },
  {
    day: 40,
    stage: 2,
    week: 6,
    title: 'Đi tàu điện ngầm (Mua vé & Chuyển tuyến)',
    focus: 'Huànchéng jǐ hào xiàn? (Đổi sang tuyến số mấy?)',
    tip: 'Hệ thống tàu điện ngầm ở Trung Quốc cực kỳ hiện đại, nghe loa thông báo: "Xià yí zhàn..."!',
    sentences: [
      {
        hanzi: '去人民广场坐几号线？要换乘吗？',
        pinyin: 'Qù Rénmín Guǎngchǎng zuò jǐ hào xiàn? Yào huànchéng ma?',
        vi: 'Đi quảng trường Nhân Dân đi tuyến số mấy? Có phải đổi tuyến không?',
        breakdown: '几号线 (tuyến số mấy) + 换乘 (chuyển tuyến)'
      },
      {
        hanzi: '坐二号线，在南京东路站换乘一号线。',
        pinyin: 'Zuò èr hào xiàn, zài Nánjīng Dōnglù zhàn huànchéng yī hào xiàn.',
        vi: 'Đi tuyến số 2, ở ga Nam Kinh Đông Lộ thì đổi sang tuyến 1 nhé.',
        breakdown: '换乘一号线 (chuyển sang line 1)'
      },
      {
        hanzi: '下一站是终点站，请带好随身物品。',
        pinyin: 'Xià yí zhàn shì zhōngdiǎn zhàn, qǐng dài hǎo suíshēn wùpǐn.',
        vi: 'Ga tiếp theo là ga cuối, xin quý khách mang theo đồ đạc cá nhân.',
        breakdown: '终点站 (ga cuối) + 随身物品 (vật dụng cá nhân)'
      }
    ],
    quickReflex: {
      question: 'Từ nào có nghĩa là "Chuyển tàu / đổi tuyến"?',
      options: ['换乘 (Huànchéng)', '下车', '买票'],
      correct: 0,
      explain: '换乘 (Huànchéng) = Chuyển tuyến tàu xe.'
    },
    relatedPath: '/listening'
  },
  {
    day: 41,
    stage: 2,
    week: 6,
    title: 'Hỏi mua vé tàu cao tốc (Tốc độ 350 km/h)',
    focus: 'Gāotiě piào (Vé tàu cao tốc)',
    tip: 'Tàu cao tốc Trung Quốc gọi là 高铁 (Gāotiě), đi vừa êm vừa nhanh!',
    sentences: [
      {
        hanzi: '我想买一张明天上午去北京的高铁票。',
        pinyin: 'Wǒ xiǎng mǎi yì zhāng míngtiān shàngwǔ qù Běijīng de gāotiě piào.',
        vi: 'Tôi muốn mua 1 vé tàu cao tốc đi Bắc Kinh vào sáng mai.',
        breakdown: '高铁票 (vé tàu cao tốc)'
      },
      {
        hanzi: '您要二等座还是一等座？二等座就行。',
        pinyin: 'Nín yào èr děng zuò háishi yì děng zuò? Èr děng zuò jiù xíng.',
        vi: 'Quý khách muốn ghế hạng nhì hay hạng nhất? Hạng nhì là được rồi.',
        breakdown: '二等座 (ghế hạng nhì) + 一等座 (ghế hạng nhất)'
      },
      {
        hanzi: '请出示您的护照进行实名认证。',
        pinyin: 'Qǐng chūshì nín de hùzhào jìnxíng shímíng rènzhèng.',
        vi: 'Xin vui lòng xuất trình hộ chiếu để xác thực danh tính.',
        breakdown: '出示护照 (xuất trình hộ chiếu) + 实名认证 (xác thực tên thật)'
      }
    ],
    quickReflex: {
      question: '"Hộ chiếu" trong tiếng Trung là gì?',
      options: ['身份证', '护照 (Hùzhào)', '驾照'],
      correct: 1,
      explain: '护照 (Hùzhào) = Hộ chiếu.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 42,
    stage: 2,
    week: 6,
    title: 'Đi máy bay & Thủ tục Check-in sân bay',
    focus: 'Dēngjīpái (Thẻ lên máy bay)',
    tip: 'Thích ngồi cạnh cửa sổ nói: "Kào chuāng de wèizhì", cạnh lối đi: "Kào guòdào".',
    sentences: [
      {
        hanzi: '请帮我办理登机手续，我想要靠窗的位置。',
        pinyin: 'Qǐng bāng wǒ bànlǐ dēngjī shǒuxù, wǒ xiǎng yào kào chuāng de wèizhì.',
        vi: 'Xin làm thủ tục check-in cho tôi, tôi muốn chỗ ngồi cạnh cửa sổ.',
        breakdown: '办理登机手续 (làm thủ tục lên máy bay) + 靠窗 (cạnh cửa sổ)'
      },
      {
        hanzi: '您有几件行李需要托运？就这一个箱子。',
        pinyin: 'Nín yǒu jǐ jiàn xíngli xūyào tuōyùn? Jiù zhè yí gè xiāngzi.',
        vi: 'Quý khách có mấy kiện hành lý cần ký gửi? Chỉ một vali này thôi.',
        breakdown: '行李托运 (ký gửi hành lý) + 箱子 (vali/thùng)'
      },
      {
        hanzi: '这是您的登机牌，请在十五号登机口登机。',
        pinyin: 'Zhè shì nín de dēngjīpái, qǐng zài shíwǔ hào dēngjīkǒu dēngjī.',
        vi: 'Đây là thẻ lên máy bay của quý khách, xin lên máy bay tại cửa số 15.',
        breakdown: '登机牌 (boarding pass) + 登机口 (cửa lên máy bay)'
      }
    ],
    quickReflex: {
      question: '"Ký gửi hành lý" nói là:',
      options: ['行李托运 (Xíngli tuōyùn)', '手提行李', '退票'],
      correct: 0,
      explain: '行李托运 = Ký gửi hành lý.'
    },
    relatedPath: '/scenario'
  },
  {
    day: 43,
    stage: 2,
    week: 6,
    title: 'Thuê xe đạp công cộng & Xe buýt',
    focus: 'Gòngxiǎng dānchē (Xe đạp công nghệ chia sẻ)',
    tip: 'Quét mã mở khóa xe đạp vàng Meituan hoặc xanh Alipay cực kỳ tiện lợi!',
    sentences: [
      {
        hanzi: '用手机扫一扫就能解锁这辆共享单车。',
        pinyin: 'Yòng shǒujī sǎo yì sǎo jiù néng jiěsuǒ zhè liàng gòngxiǎng dānchē.',
        vi: 'Dùng điện thoại quét một cái là có thể mở khóa xe đạp công nghệ này.',
        breakdown: '共享单车 (xe đạp chia sẻ) + 解锁 (mở khóa)'
      },
      {
        hanzi: '坐公交车上车请刷卡或者扫乘车码。',
        pinyin: 'Zuò gōngjiāochē shàngchē qǐng shuā kǎ huòzhě sǎo chéngchēmǎ.',
        vi: 'Đi xe bus lên xe xin vui lòng quẹt thẻ hoặc quét mã đi xe.',
        breakdown: '公交车 (xe buýt) + 乘车码 (mã QR đi xe)'
      },
      {
        hanzi: '骑行半小时只要一块五毛钱，真划算！',
        pinyin: 'Qíxíng bàn xiǎoshí zhǐ yào yí kuài wǔ máo qián, zhēn huásuàn!',
        vi: 'Đạp xe nửa tiếng chỉ tốn có 1 tệ 5 hào, kinh tế thật đấy!',
        breakdown: '骑行 (đạp xe) + 划算 (hời/kinh tế)'
      }
    ],
    quickReflex: {
      question: 'Từ "Rất hời / Rất kinh tế" người Trung Quốc hay dùng là:',
      options: ['很贵', '划算 (Huásuàn)', '很麻烦'],
      correct: 1,
      explain: '划算 (Huásuàn) = Rất hời / đáng đồng tiền bát gạo.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 44,
    stage: 2,
    week: 6,
    title: 'Ôn tập Tuần 6: Tự tin vi vu di chuyển khắp thành phố',
    focus: 'Kết hợp gọi xe -> đi tàu điện -> đi máy bay trôi chảy',
    tip: 'Bạn đã mở khóa toàn bộ kỹ năng di chuyển thực chiến rồi!',
    sentences: [
      {
        hanzi: '今天我坐高铁去杭州，只花了一个小时。',
        pinyin: 'Jīntiān wǒ zuò gāotiě qù Hángzhōu, zhǐ huā le yí gè xiǎoshí.',
        vi: 'Hôm nay tôi đi tàu cao tốc đến Hàng Châu, chỉ mất đúng một tiếng đồng hồ.',
        breakdown: '只花了一个小时 (chỉ mất 1 tiếng)'
      },
      {
        hanzi: '出站后坐地铁二号线直达西湖景区。',
        pinyin: 'Chū zhàn hòu zuò dìtiě èr hào xiàn zhídá Xīhú jǐngqū.',
        vi: 'Sau khi ra khỏi ga đi tàu điện ngầm tuyến 2 tới thẳng khu danh thắng Tây Hồ.',
        breakdown: '直达 (tới thẳng) + 景区 (khu thắng cảnh)'
      },
      {
        hanzi: '交通太便利了，一个人出行完全没问题！',
        pinyin: 'Jiāotōng tài biànlì le, yí gè rén chūxíng wánquán méi wèntí!',
        vi: 'Giao thông thuận tiện quá, một mình đi du lịch hoàn toàn ổn thỏa!',
        breakdown: '交通便利 (giao thông tiện lợi) + 完全没问题 (hoàn toàn k vđ)'
      }
    ],
    quickReflex: {
      question: '"Giao thông rất thuận tiện" nói là:',
      options: ['交通很不方便', '交通太便利了！', '走不了'],
      correct: 1,
      explain: '交通太便利了 (Jiāotōng tài biànlì le).'
    },
    relatedPath: '/ai-chat'
  },

  // Tuần 7: Mặc cả, Mua sắm Taobao & Đổi trả hàng (Ngày 45 - 51)
  {
    day: 45,
    stage: 2,
    week: 7,
    title: 'Hỏi chất liệu & Xuất xứ hàng hóa',
    focus: 'Zhè shì shénme cáiliào de? (Cái này làm bằng chất liệu gì?)',
    tip: 'Hàng xịn 100% người ta bảo: "Chúnmián" (100% cotton) hoặc "Zhēnpí" (Da thật).',
    sentences: [
      {
        hanzi: '这件外套是纯棉的还是羊毛的？',
        pinyin: 'Zhè jiàn wàitào shì chúnmián de háishi yángmáo de?',
        vi: 'Chiếc áo khoác này là chất cotton nguyên chất hay bằng len dạ?',
        breakdown: '纯棉 (100% cotton) + 羊毛 (lông cừu/dạ len)'
      },
      {
        hanzi: '百分之百纯棉，摸起来很舒服，不起球。',
        pinyin: 'Bǎi fēn zhī bǎi chúnmián, mō qǐlái hěn shūfu, bù qǐ qiú.',
        vi: '100% cotton, sờ vào rất êm ái thoải mái, không hề bị xù lông.',
        breakdown: '摸起来舒服 (sờ vào êm ái) + 不起球 (không xù lông)'
      },
      {
        hanzi: '洗了会缩水或者褪色吗？保证不会！',
        pinyin: 'Xǐ le huì suōshuǐ huòzhě tuìsè ma? Bǎozhèng bú huì!',
        vi: 'Giặt có bị co rút vải hay phai màu không? Đảm bảo không đâu ạ!',
        breakdown: '缩水 (co rút vải) + 褪色 (phai màu) + 保证 (đảm bảo)'
      }
    ],
    quickReflex: {
      question: '"100% cotton" trong tiếng Trung là:',
      options: ['羊毛', '纯棉 (Chúnmián)', '塑料'],
      correct: 1,
      explain: '纯棉 (Chúnmián) = 100% cotton.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 46,
    stage: 2,
    week: 7,
    title: 'Mặc cả cao cấp: Mua nhiều có giảm giá không?',
    focus: 'Duō mǎi jǐ jiàn néng dǎzhé ma? (Mua thêm có chiết khấu k?)',
    tip: 'Người TQ nói: "Dǎ bā zhé" = Giảm 20% (chỉ tính 80% tiền), đừng nhầm với giảm 80% nhé!',
    sentences: [
      {
        hanzi: '如果我买两件，老板能给打个八折吗？',
        pinyin: 'Rúguǒ wǒ mǎi liǎng jiàn, lǎobǎn néng gěi dǎ gè bā zhé ma?',
        vi: 'Nếu cháu mua hai chiếc, ông chủ có thể giảm 20% (chiết khấu 8折) được không?',
        breakdown: '打八折 (chiết khấu 80% giá gốc = giảm 20%)'
      },
      {
        hanzi: '买两件给您九折，再送您一双袜子。',
        pinyin: 'Mǎi liǎng jiàn gěi nín jiǔ zhé, zài sòng nín yì shuāng wàzi.',
        vi: 'Mua hai cái giảm quý khách 10%, tặng thêm bác một đôi tất nữa.',
        breakdown: '打九折 (giảm 10%) + 送一双袜子 (tặng 1 đôi tất)'
      },
      {
        hanzi: '成交！那我就要这两件了。',
        pinyin: 'Chéngjiāo! Nà wǒ jiù yào zhè liǎng jiàn le.',
        vi: 'Chốt đơn! Thế thì tôi lấy hai chiếc này nhé.',
        breakdown: '成交 (chốt đơn/thành giao)'
      }
    ],
    quickReflex: {
      question: 'Khi cửa hàng ghi "打七折" (Dǎ qī zhé) nghĩa là giảm bao nhiêu %?',
      options: ['Giảm 70%', 'Giảm 30% (tính 70% giá)', 'Giảm 7%'],
      correct: 1,
      explain: '打七折 = Thu 70% tiền = Giảm 30%.'
    },
    relatedPath: '/formula'
  },
  {
    day: 47,
    stage: 2,
    week: 7,
    title: 'Mua hàng Taobao online & Nhắn tin Shop',
    focus: 'Qīn, bāoyóu ma? (Bạn ơi, có freeship không?)',
    tip: 'Nhắn tin shop Taobao luôn mở đầu bằng "亲 (Qīn)" = Cưng/Bạn thân mến!',
    sentences: [
      {
        hanzi: '亲，这款有现货吗？什么时候能发货？',
        pinyin: 'Qīn, zhè kuǎn yǒu xiànhuò ma? Shénme shíhou néng fāhuò?',
        vi: 'Shop ơi, mẫu này có sẵn hàng không? Khi nào gửi hàng được ạ?',
        breakdown: '现货 (hàng có sẵn) + 发货 (gửi/giao hàng)'
      },
      {
        hanzi: '亲，今天下单当天发货，全国包邮哦！',
        pinyin: 'Qīn, jīntiān xiàdān dāngtiān fāhuò, quánguó bāoyóu o!',
        vi: 'Dạ cưng ơi, hôm nay chốt đơn thì gửi trong ngày, toàn quốc freeship ạ!',
        breakdown: '当天发货 (giao trong ngày) + 包邮 (freeship)'
      },
      {
        hanzi: '我已经拍下了，请帮我仔细检查质量。',
        pinyin: 'Wǒ yǐjīng pāi xià le, qǐng bāng wǒ zǐxì jiǎnchá zhìliàng.',
        vi: 'Mình đặt mua rồi nhé, nhờ shop kiểm tra kỹ chất lượng giúp mình.',
        breakdown: '拍下了 (đã đặt mua/bấm mua) + 检查质量 (kiểm tra chất lượng)'
      }
    ],
    quickReflex: {
      question: 'Từ nào trên Taobao có nghĩa là "Miễn phí vận chuyển (Freeship)"?',
      options: ['包邮 (Bāoyóu)', '不发货', '退款'],
      correct: 0,
      explain: '包邮 (Bāoyóu) = Freeship.'
    },
    relatedPath: '/scenario'
  },
  {
    day: 48,
    stage: 2,
    week: 7,
    title: 'Nhận hàng chuyển phát nhanh (Kuaidi)',
    focus: 'Nǐ de kuàidì dào le! (Hàng chuyển phát nhanh tới rồi)',
    tip: 'Shipper TQ gọi là 快递小哥 (Kuàidì xiǎogē). Hàng hay để ở tủ thông minh 丰巢 (Fēngcháo).',
    sentences: [
      {
        hanzi: '您好，有您的顺丰快递，请下来签收。',
        pinyin: 'Nín hǎo, yǒu nín de Shùnfēng kuàidì, qǐng xiàlái qiānshōu.',
        vi: 'Alo anh ạ, có bưu phẩm chuyển phát nhanh Thuận Phong, anh xuống nhận nhé.',
        breakdown: '快递 (chuyển phát nhanh) + 签收 (ký nhận)'
      },
      {
        hanzi: '我现在不在家，麻烦帮我放在菜鸟驿站。',
        pinyin: 'Wǒ xiànzài bú zài jiā, máfan bāng wǒ fàng zài Càiniǎo yìzhàn.',
        vi: 'Giờ tôi không có ở nhà, phiền anh gửi vào trạm nhận đồ Cainiao giùm tôi.',
        breakdown: '菜鸟驿站 (trạm nhận trả hàng Cainiao)'
      },
      {
        hanzi: '取件码已经发到您手机上了。',
        pinyin: 'Qǔjiànmǎ yǐjīng fā dào nín shǒujī shàng le.',
        vi: 'Mã lấy hàng đã được gửi vào điện thoại của anh rồi nhé.',
        breakdown: '取件码 (mã lấy hàng)'
      }
    ],
    quickReflex: {
      question: 'Hàng chuyển phát nhanh tiếng Trung là:',
      options: ['外卖 (Đồ ăn giao tận nơi)', '快递 (Kuàidì)', '邮件'],
      correct: 1,
      explain: '快递 (Kuàidì) = Chuyển phát bưu phẩm nhanh.'
    },
    relatedPath: '/listening'
  },
  {
    day: 49,
    stage: 2,
    week: 7,
    title: 'Đổi trả hàng & Hoàn tiền khi hàng lỗi',
    focus: 'Tuìhuò tuìkuǎn (Đổi trả hàng & hoàn tiền)',
    tip: 'Mua đồ online không ưng ý, quyền lợi của bạn là: "7 tiān wú lǐyóu tuì huò" (Đổi trả 7 ngày k cần lý do).',
    sentences: [
      {
        hanzi: '这件衣服尺码发错了，我想申请退换货。',
        pinyin: 'Zhè jiàn yīfu chǐmǎ fā cuò le, wǒ xiǎng shēnqǐng tuì huàn huò.',
        vi: 'Chiếc áo này bị gửi nhầm size rồi, tôi muốn xin đổi trả hàng.',
        breakdown: '尺码发错 (gửi sai size) + 退换货 (đổi trả hàng)'
      },
      {
        hanzi: '商品有破损，支持七天无理由退货吗？',
        pinyin: 'Shāngpǐn yǒu pòsǔn, zhīchí qī tiān wú lǐyóu tuìhuò ma?',
        vi: 'Hàng bị sứt mẻ rách nát, có hỗ trợ đổi trả 7 ngày không lý do không?',
        breakdown: '破损 (hư hại/sứt mẻ) + 七天无理由 (7 ngày k lý do)'
      },
      {
        hanzi: '把商品寄回后，款项会在24小时内退回。',
        pinyin: 'Bǎ shāngpǐn jì huí hòu, kuǎnxiàng huì zài èrshísì xiǎoshí nèi tuìhuí.',
        vi: 'Sau khi gửi hàng trả lại, tiền sẽ được hoàn về trong vòng 24 giờ.',
        breakdown: '寄回 (gửi lại) + 款项退回 (tiền hoàn lại)'
      }
    ],
    quickReflex: {
      question: '"Hoàn tiền" tiếng Trung là gì?',
      options: ['付款 (Trả tiền)', '退款 (Tuìkuǎn)', '收款'],
      correct: 1,
      explain: '退款 (Tuìkuǎn) = Hoàn lại tiền.'
    },
    relatedPath: '/scenario'
  },
  {
    day: 50,
    stage: 2,
    week: 7,
    title: 'Đánh giá 5 sao & Để lại nhận xét (Feedback)',
    focus: 'Wǔ xīng hǎopíng (Đánh giá 5 sao)',
    tip: 'Người bán hay bảo: "Qīn, gěi gè wǔ xīng hǎopíng ba!" (Cưng cho shop xin 5 sao nhé).',
    sentences: [
      {
        hanzi: '商品质量很好，物流很快，全五星好评！',
        pinyin: 'Shāngpǐn zhìliàng hěn hǎo, wùliú hěn kuài, quán wǔ xīng hǎopíng!',
        vi: 'Chất lượng hàng rất tốt, giao hàng cực nhanh, vote 5 sao toàn diện!',
        breakdown: '物流 (vận chuyển/logistics) + 五星好评 (đánh giá 5 sao)'
      },
      {
        hanzi: '版型正，穿上很显瘦，物超所值。',
        pinyin: 'Bǎnxíng zhèng, chuān shàng hěn xiǎn shòu, wù chāo suǒ zhí.',
        vi: 'Phom dáng chuẩn, mặc lên trông gầy đi hẳn, giá trị vượt xa số tiền.',
        breakdown: '显瘦 (trông gầy thon) + 物超所值 (đáng tiền hơn giá bán)'
      },
      {
        hanzi: '下次还会继续光顾这家店的。',
        pinyin: 'Xià cì hái huì jìxù guānggù zhè jiā diàn de.',
        vi: 'Lần sau mình nhất định sẽ tiếp tục ghé ủng hộ shop này.',
        breakdown: '光顾 (ghé thăm/ủng hộ)'
      }
    ],
    quickReflex: {
      question: 'Cụm từ "Đánh giá 5 sao" là gì?',
      options: ['差评', '五星好评 (Wǔ xīng hǎopíng)', '中评'],
      correct: 1,
      explain: '五星好评 (Wǔ xīng hǎopíng) = Đánh giá 5 sao khen ngợi.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 51,
    stage: 2,
    week: 7,
    title: 'Ôn tập Tuần 7: Toàn diện kỹ năng Shopping đời sống',
    focus: 'Làm chủ từ khâu chọn đồ, mặc cả đến mua sắm online',
    tip: 'Bạn đã đạt mốc hơn 50 ngày! Khả năng phản xạ tăng vọt so với ngày đầu.',
    sentences: [
      {
        hanzi: '双十一购物节有很多优惠券和满减活动。',
        pinyin: 'Shuāng shíyī gòuwùjié yǒu hěn duō yōuhuìquàn hé mǎnjiǎn huódòng.',
        vi: 'Lễ hội mua sắm 11/11 có rất nhiều voucher giảm giá và ưu đãi mua đủ trừ tiền.',
        breakdown: '双十一 (ngày 11.11) + 优惠券 (voucher giảm giá)'
      },
      {
        hanzi: '我抢到了大额红包，省了不少钱。',
        pinyin: 'Wǒ qiǎng dào le dà\'é hóngbāo, shěng le bù shǎo qián.',
        vi: 'Tôi giật được bao lì xì mệnh giá khủng, tiết kiệm được khối tiền.',
        breakdown: '红包 (lì xì) + 省了不少钱 (tiết kiệm kha khá tiền)'
      },
      {
        hanzi: '网购真方便，坐在家里就能买到全世界的东西。',
        pinyin: 'Wǎnggòu zhēn fāngbiàn, zuò zài jiālǐ jiù néng mǎi dào quán shìjiè de dōngxi.',
        vi: 'Mua hàng online tiện thật, ngồi ở nhà là mua được đồ của cả thế giới.',
        breakdown: '网购 (mua sắm trên mạng)'
      }
    ],
    quickReflex: {
      question: '"Voucher giảm giá" tiếng Trung là gì?',
      options: ['优惠券 (Yōuhuìquàn)', '发票', '现金'],
      correct: 0,
      explain: '优惠券 (Yōuhuìquàn) = Coupon / voucher ưu đãi.'
    },
    relatedPath: '/ai-chat'
  },

  // Tuần 8: Hẹn hò, Sở thích, Thời tiết & Cảm xúc (Ngày 52 - 60)
  {
    day: 52,
    stage: 2,
    week: 8,
    title: 'Hỏi han thời tiết: Hôm nay trời mưa hay nắng?',
    focus: 'Jīntiān tiānqì zěnmeyàng? (Thời tiết hôm nay thế nào?)',
    tip: 'Người TQ rất thích bắt chuyện bằng thời tiết: "Jīntiān hǎo rè a!" (Hôm nay nóng quá!).',
    sentences: [
      {
        hanzi: '今天天气怎么样？会下雨吗？',
        pinyin: 'Jīntiān tiānqì zěnmeyàng? Huì xiàyǔ ma?',
        vi: 'Thời tiết hôm nay thế nào? Liệu có mưa không?',
        breakdown: '天气怎么样 (thời tiết ra sao) + 下雨 (trời mưa)'
      },
      {
        hanzi: '天气预报说下午有暴雨，出门记得带伞。',
        pinyin: 'Tiānqì yùbào shuō xiàwǔ yǒu bàoyǔ, chūmén jìde dài sǎn.',
        vi: 'Dự báo thời tiết bảo chiều có mưa giông lớn, ra ngoài nhớ mang theo ô dù nhé.',
        breakdown: '天气预报 (dự báo thời tiết) + 带伞 (mang theo ô)'
      },
      {
        hanzi: '今天阳光明媚，挺暖和的，很适合去公园散步。',
        pinyin: 'Jīntiān yángguāng míngmèi, tǐng nuǎnhuo de, hěn shìhé qù gōngyuán sànbù.',
        vi: 'Hôm nay trời nắng đẹp, khá ấm áp, rất thích hợp đi công viên dạo bộ.',
        breakdown: '暖和 (ấm áp) + 散步 (đi dạo)'
      }
    ],
    quickReflex: {
      question: '"Trời mưa" trong tiếng Trung là:',
      options: ['下雪 (Tuyết rơi)', '下雨 (Xiàyǔ)', '刮风 (Gió thổi)'],
      correct: 1,
      explain: '下雨 (Xiàyǔ) = Mưa rơi.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 53,
    stage: 2,
    week: 8,
    title: 'Hỏi về sở thích & Thời gian rảnh rỗi',
    focus: 'Nǐ yǒu shénme àihào? (Bạn có sở thích gì?)',
    tip: 'Nói về sở thích: "Wǒ xǐhuan..." (tīng yīnyuè, kàn diànyǐng, lǚyóu, dǎ lánqiú).',
    sentences: [
      {
        hanzi: '你平时周末喜欢做什么？',
        pinyin: 'Nǐ píngshí zhōumò xǐhuan zuò shénme?',
        vi: 'Bình thường cuối tuần bạn thích làm gì?',
        breakdown: '平时 (bình thường) + 喜欢做什么 (thích làm gì)'
      },
      {
        hanzi: '我喜欢听音乐、看电影，偶尔跟朋友去健身。',
        pinyin: 'Wǒ xǐhuan tīng yīnyuè, kàn diànyǐng, ǒu\'ěr gēn péngyou qù jiànshēn.',
        vi: 'Tôi thích nghe nhạc, xem phim, thi thoảng cùng bạn bè đi tập gym.',
        breakdown: '听音乐 (nghe nhạc) + 看电影 (xem phim) + 健身 (tập gym)'
      },
      {
        hanzi: '我也超级喜欢看电影！你喜欢哪种类型？',
        pinyin: 'Wǒ yě chāojí xǐhuan kàn diànyǐng! Nǐ xǐhuan nǎ zhǒng lèixíng?',
        vi: 'Tôi cũng cực kỳ mê xem phim luôn! Bạn thích thể loại nào thế?',
        breakdown: '超级喜欢 (cực kỳ thích) + 类型 (thể loại)'
      }
    ],
    quickReflex: {
      question: '"Nghe nhạc" tiếng Trung là gì?',
      options: ['看书', '听音乐 (Tīng yīnyuè)', '玩游戏'],
      correct: 1,
      explain: '听音乐 (Tīng yīnyuè) = Nghe âm nhạc.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 54,
    stage: 2,
    week: 8,
    title: 'Mời mọc & Rủ rê bạn bè đi chơi',
    focus: 'Zhōumò yǒu kòng ma? (Cuối tuần có rảnh không?)',
    tip: 'Rủ rê tự nhiên: "Wǒmen yìqǐ qù... zěnmeyàng?" (Bọn mình cùng đi... thấy sao?).',
    sentences: [
      {
        hanzi: '周六晚上有空吗？我想请你喝咖啡。',
        pinyin: 'Zhōuliù wǎnshang yǒu kòng ma? Wǒ xiǎng qǐng nǐ hē kāfēi.',
        vi: 'Tối thứ Bảy có rảnh không? Mình muốn mời bạn đi uống cà phê.',
        breakdown: '有空吗 (có rảnh k) + 请你喝咖啡 (mời bạn uống cafe)'
      },
      {
        hanzi: '好啊，几点？在哪里见面？',
        pinyin: 'Hǎo a, jǐ diǎn? Zài nǎlǐ jiànmiàn?',
        vi: 'Được chứ, mấy giờ thế? Gặp nhau ở đâu vậy?',
        breakdown: '在公哪里见面 (gặp mặt ở đâu)'
      },
      {
        hanzi: '晚上七点，老地方见，不见不散！',
        pinyin: 'Wǎnshang qī diǎn, lǎo dìfang jiàn, bú jiàn bú sàn!',
        vi: '7 giờ tối, chỗ cũ gặp nhé, không gặp không về!',
        breakdown: '老地方 (chỗ cũ) + 不见不散 (k gặp k về)'
      }
    ],
    quickReflex: {
      question: 'Thành ngữ khẩu ngữ biểu đạt hẹn "Không gặp không về" là gì?',
      options: ['不见不散 (Bú jiàn bú sàn)', '走吧', '再见'],
      correct: 0,
      explain: '不见不散 là câu khẩu ngữ kinh điển khi hẹn hò.'
    },
    relatedPath: '/ai-chat'
  },
  {
    day: 55,
    stage: 2,
    week: 8,
    title: 'Bày tỏ cảm xúc: Vui vẻ, mệt mỏi, bất ngờ & buồn ngủ',
    focus: 'Tài gāoxìng le / Lèi sǐ le (Mệt chết đi được)',
    tip: 'Người Hoa khẩu ngữ hay thêm "Sǐ le" (chết mất) để nhấn mạnh: Lèi sǐ le, Rè sǐ le!',
    sentences: [
      {
        hanzi: '今天加了一整天班，真累死我了！',
        pinyin: 'Jīntiān jiā le yì zhěng tiān bān, zhēn lèi sǐ wǒ le!',
        vi: 'Hôm nay tăng ca cả ngày trời, mệt chết mất thôi!',
        breakdown: '加班 (tăng ca) + 累死了 (mệt chết đi được)'
      },
      {
        hanzi: '听到这个好消息，大家都开心极了。',
        pinyin: 'Tīng dào zhège hǎo xiāoxi, dàjiā dōu kāixīn jí le.',
        vi: 'Nghe được tin vui này, ai ai cũng vui mừng khôn xiết.',
        breakdown: '好消息 (tin tốt) + 开心极了 (cực kỳ vui mừng)'
      },
      {
        hanzi: '太不可思议了！简直是一个奇迹。',
        pinyin: 'Tài bùkěsīyì le! Jiǎnzhí shì yí gè qíjì.',
        vi: 'Không thể tin nổi luôn! Đúng thật là một phép màu.',
        breakdown: '不可思议 (k thể tưởng tượng nổi) + 奇迹 (kỳ tích)'
      }
    ],
    quickReflex: {
      question: 'Khẩu ngữ nói "Mệt chết đi được" là:',
      options: ['很好', '累死了 (Lèi sǐ le)', '没问题'],
      correct: 1,
      explain: '累死了 = Mệt rã rời.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 56,
    stage: 2,
    week: 8,
    title: 'Khen ngợi & Tán dương người khác',
    focus: 'Nǐ zhēn bàng! / Tàikuù le! (Bạn đỉnh thật/Ngầu quá)',
    tip: 'Khen ai đó giỏi tiếng Trung: "Nǐ de Zhōngwén shuō de zhēn bàng!".',
    sentences: [
      {
        hanzi: '你的中文说得太流利了，真厉害！',
        pinyin: 'Nǐ de zhōngwén shuō de tài liúlì le, zhēn lìhai!',
        vi: 'Tiếng Trung của bạn nói trôi chảy quá, siêu thật đấy!',
        breakdown: '说得太流利 (nói quá trôi chảy) + 真厉害 (siêu thật)'
      },
      {
        hanzi: '哪里哪里，我还要继续多加练习。',
        pinyin: 'Nǎlǐ nǎlǐ, wǒ hái yào jìxù duō jiā liànxí.',
        vi: 'Đâu có đâu ạ, tôi vẫn cần tiếp tục luyện tập nhiều hơn nữa.',
        breakdown: '哪里哪里 (khiêm tốn) + 多加练习 (luyện nhiều hơn)'
      },
      {
        hanzi: '你今天穿这身衣服显得特别有精神！',
        pinyin: 'Nǐ jīntiān chuān zhè shēn yīfu xiǎnde tèbié yǒu jīngshén!',
        vi: 'Hôm nay bạn mặc bộ này trông đặc biệt tràn đầy năng lượng tươi tắn!',
        breakdown: '有精神 (có thần thái/tươi tắn)'
      }
    ],
    quickReflex: {
      question: 'Từ "Lợi hại / Siêu phàm" khen người khác là:',
      options: ['厉害 (Lìhai)', '不好', '马虎'],
      correct: 0,
      explain: '厉害 (Lìhai) = Siêu phàm / quá đỉnh.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 57,
    stage: 2,
    week: 8,
    title: 'Giao lưu văn hóa: Tết Trung Thu & Tết Nguyên Đán',
    focus: 'Chūnjié kuàilè! (Chúc mừng năm mới / Tết)',
    tip: 'Tết gặp nhau chúc: "Xīnnián kuàilè, gōngxǐ fācái!" (Chúc năm mới phát tài).',
    sentences: [
      {
        hanzi: '祝你和家人新春快乐，万事如意，阖家幸福！',
        pinyin: 'Zhù nǐ hé jiārén xīnchūn kuàilè, wànshì rúyì, héjiā xìngfú!',
        vi: 'Chúc bạn và gia đình năm mới vui vẻ, vạn sự như ý, gia đình hạnh phúc!',
        breakdown: '万事如意 (vạn sự như ý) + 阖家幸福 (cả nhà hạnh phúc)'
      },
      {
        hanzi: '中秋节我们一起吃月饼赏月吧。',
        pinyin: 'Zhōngqiūjié wǒmen yìqǐ chī yuèbǐng shǎng yuè ba.',
        vi: 'Tết Trung Thu bọn mình cùng nhau ăn bánh nướng ngắm trăng nhé.',
        breakdown: '吃月饼 (ăn bánh trung thu) + 赏月 (ngắm trăng)'
      },
      {
        hanzi: '中国和越南有很多相似的传统节日。',
        pinyin: 'Zhōngguó hé Yuènán yǒu hěn duō xiāngsì de chuántǒng jiérì.',
        vi: 'Trung Quốc và Việt Nam có rất nhiều ngày lễ truyền thống tương đồng.',
        breakdown: '传统节日 (lễ hội truyền thống) + 相似 (tương đồng)'
      }
    ],
    quickReflex: {
      question: 'Chúc "Vạn sự như ý" nói thế nào?',
      options: ['万事如意 (Wànshì rúyì)', '身体好', '天天见'],
      correct: 0,
      explain: '万事如意 (Wànshì rúyì) = Vạn sự như ý.'
    },
    relatedPath: '/scenario'
  },
  {
    day: 58,
    stage: 2,
    week: 8,
    title: 'Mượn tiền & Thanh toán chia tiền nhóm (AA zhì)',
    focus: 'Wǒmen AA ba! (Bọn mình cưa đôi / chia tiền nhé)',
    tip: 'Đi ăn cùng bạn bè thanh niên Trung Quốc dùng thuật ngữ "AA zhì" để chỉ cưa tiền sòng phẳng.',
    sentences: [
      {
        hanzi: '这顿饭大家AA制吧，平均每人六十块。',
        pinyin: 'Zhè dùn fàn dàjiā AA zhì ba, píngjūn měi rén liùshí kuài.',
        vi: 'Bữa này bọn mình cưa đôi (AA) nhé, bình quân mỗi người 60 tệ.',
        breakdown: 'AA制 (chế độ chia tiền đều) + 平均 (bình quân)'
      },
      {
        hanzi: '没问题，我把钱在微信群里转给你。',
        pinyin: 'Méi wèntí, wǒ bǎ qián zài Wēixìn qún lǐ zhuǎn gěi nǐ.',
        vi: 'Ok không vấn đề, tôi chuyển tiền qua nhóm WeChat cho bạn nhé.',
        breakdown: '微信群 (nhóm WeChat) + 转给 (chuyển cho)'
      },
      {
        hanzi: '亲兄弟明算账，这样大家都舒坦。',
        pinyin: 'Qīn xiōngdì míng suànzhàng, zhèyàng dàjiā dōu shūtan.',
        vi: 'Anh em ruột thịt tính toán rõ ràng, như thế ai nấy đều thoải mái.',
        breakdown: '亲兄弟明算账 (anh em minh bạch tiền bạc) + 舒坦 (thoải mái)'
      }
    ],
    quickReflex: {
      question: 'Thuật ngữ "Chia tiền sòng phẳng khi đi ăn" là gì?',
      options: ['请客', 'AA制 (AA zhì)', '免费'],
      correct: 1,
      explain: 'AA制 (AA zhì) = Chia đều tiền ăn uống.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 59,
    stage: 2,
    week: 8,
    title: 'An ủi & Động viên khi bạn bè gặp chuyện buồn',
    focus: 'Bié nánguò le / Yíqiè dōu huì hǎo qǐlái de',
    tip: 'Khi bạn bè buồn, đặt tay lên vai và nói: "Yíqiè dōu huì hǎo qǐlái de" (Mọi chuyện sẽ ổn thôi)!',
    sentences: [
      {
        hanzi: '别难过了，失败是成功之母。',
        pinyin: 'Bié nánguò le, shībài shì chénggōng zhī mǔ.',
        vi: 'Đừng buồn nữa, thất bại là mẹ của thành công mà.',
        breakdown: '别难过 (đừng buồn) + 失败是成功之母 (thất bại là mẹ tc)'
      },
      {
        hanzi: '一切都会好起来的，我相信你一定行！',
        pinyin: 'Yíqiè dōu huì hǎo qǐlái de, wǒ xiāngxìn nǐ yídìng xíng!',
        vi: 'Mọi chuyện rồi sẽ tốt lên thôi, tôi tin bạn nhất định làm được!',
        breakdown: '一切都会好 (mọi thứ sẽ ổn) + 一定行 (nhất định làm đc)'
      },
      {
        hanzi: '有任何需要帮忙的地方，随时告诉我。',
        pinyin: 'Yǒu rènhé xūyào bāngmáng de dìfang, suíshí gàosu wǒ.',
        vi: 'Có bất cứ chỗ nào cần giúp đỡ, cứ bất cứ lúc nào nhắn tôi nhé.',
        breakdown: '随时告诉我 (bất cứ lúc nào cứ báo tôi)'
      }
    ],
    quickReflex: {
      question: 'Câu nào dùng để động viên bạn bè?',
      options: ['你太笨了', '我相信你一定行！(Tôi tin bạn làm đc)', '再见'],
      correct: 1,
      explain: '我相信你一定行 = Tôi tin bạn nhất định làm được.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 60,
    stage: 2,
    week: 8,
    title: 'TỔNG KẾT THÁNG 2: Mốc 60 Ngày - Tự tin phản xạ đời sống',
    focus: 'Đã hoàn thành 2/3 chặng đường! Khẩu ngữ lưu loát tự nhiên',
    tip: 'Chúc mừng bạn! Bạn đã tích lũy hơn 300 mẫu câu thực chiến và có thể sinh tồn độc lập tại Trung Quốc.',
    sentences: [
      {
        hanzi: '不知不觉我已经坚持了两个月！',
        pinyin: 'Bùzhī bùjué wǒ yǐjīng jiānchí le liǎng gè yuè!',
        vi: 'Thoáng cái mà tôi đã kiên trì được tròn hai tháng rồi!',
        breakdown: '不知不觉 (thoáng chốc/k hay biết) + 坚持了两个月 (kiên trì 2 tháng)'
      },
      {
        hanzi: '现在我和AI对话基本不需要看拼音了。',
        pinyin: 'Xiànzài wǒ hé AI duìhuà jīběn bù xūyào kàn pīnyīn le.',
        vi: 'Bây giờ tôi đối thoại với AI cơ bản không cần nhìn Pinyin nữa rồi.',
        breakdown: '基本不需要 (cơ bản k cần)'
      },
      {
        hanzi: '最后一个月冲刺，向着流利口语进发！',
        pinyin: 'Zuìhòu yí gè yuè chōngcì, xiàngzhe liúlì kǒuyǔ jìnfā!',
        vi: 'Tháng cuối cùng tăng tốc về đích, tiến bước tới khẩu ngữ trôi chảy!',
        breakdown: '冲刺 (tăng tốc về đích) + 流利口语 (khẩu ngữ trôi chảy)'
      }
    ],
    quickReflex: {
      question: '"Khẩu ngữ trôi chảy" trong tiếng Trung là:',
      options: ['慢口语', '流利口语 (Liúlì kǒuyǔ)', '不知道'],
      correct: 1,
      explain: '流利口语 = Khẩu ngữ nói lưu loát trôi chảy.'
    },
    relatedPath: '/ai-chat'
  },

  // ================= THÁNG 3: GIAO TIẾP THỰC CHIẾN & TỰ TIN ĐỘC LẬP (NGÀY 61 - 90) =================
  // Tuần 9: Khách sạn, Thuê trọ & Xử lý sự cố phòng (Ngày 61 - 67)
  {
    day: 61,
    stage: 3,
    week: 9,
    title: 'Nhận phòng khách sạn (Check-in Hotel)',
    focus: 'Bànlǐ rùzhù (Làm thủ tục nhận phòng)',
    tip: 'Đưa hộ chiếu và nói: "Wǒ zài wǎngshàng dìng le fángjiān" (Tôi đã đặt phòng trên mạng).',
    sentences: [
      {
        hanzi: '你好，我在网上预订了房间，办理入住。',
        pinyin: 'Nǐ hǎo, wǒ zài wǎngshàng yùdìng le fángjiān, bànlǐ rùzhù.',
        vi: 'Chào bạn, tôi đã đặt phòng trên mạng rồi, làm thủ tục nhận phòng giúp tôi.',
        breakdown: '网上预订 (đặt trên mạng) + 办理入住 (check-in nhận phòng)'
      },
      {
        hanzi: '请出示护照，押金两百元，退房时退还。',
        pinyin: 'Qǐng chūshì hùzhào, yājīn liǎngbǎi yuán, tuì fáng shí tuìhuán.',
        vi: 'Xin xuất trình hộ chiếu, tiền cọc là 200 tệ, trả phòng sẽ hoàn lại.',
        breakdown: '押金 (tiền cọc phòng) + 退房 (check-out trả phòng)'
      },
      {
        hanzi: '这是您的房卡，房间在八楼808号。',
        pinyin: 'Zhè shì nín de fángkǎ, fángjiān zài bā lóu bā líng bā hào.',
        vi: 'Đây là thẻ phòng của quý khách, phòng ở tầng 8 số 808 ạ.',
        breakdown: '房卡 (thẻ mở phòng)'
      }
    ],
    quickReflex: {
      question: '"Tiền cọc / tiền đặt cọc" khi thuê phòng là:',
      options: ['押金 (Yājīn)', '房租', '小费'],
      correct: 0,
      explain: '押金 (Yājīn) = Tiền đặt cọc.'
    },
    relatedPath: '/scenario'
  },
  {
    day: 62,
    stage: 3,
    week: 9,
    title: 'Khiếu nại sự cố phòng: Điều hòa hỏng, không có nước nóng',
    focus: 'Kōngtiáo huài le! (Điều hòa bị hỏng rồi!)',
    tip: 'Bị hỏng hóc gì chỉ cần nói: "Tên đồ vật + Huài le" (vd: Suǒ huài le - khóa hỏng).',
    sentences: [
      {
        hanzi: '前台吗？我房间的空调不制冷，好像坏了。',
        pinyin: 'Qiántái ma? Wǒ fángjiān de kōngtiáo bú zhìlěng, hǎoxiàng huài le.',
        vi: 'Lễ tân phải không ạ? Điều hòa phòng tôi không mát, hình như hỏng rồi.',
        breakdown: '前台 (lễ tân) + 空调不制冷 (điều hòa k lạnh) + 坏了 (hỏng rồi)'
      },
      {
        hanzi: '浴室没有热水，能派师傅来看一下吗？',
        pinyin: 'Yùshì méiyǒu rèshuǐ, néng pài shīfu lái kàn yíxià ma?',
        vi: 'Phòng tắm không có nước nóng, có thể cử thợ lên xem giúp được không?',
        breakdown: '没有热水 (k có nước nóng) + 派师傅 (cử thợ)'
      },
      {
        hanzi: '非常抱歉给您带来不便，我们马上帮您换个房间。',
        pinyin: 'Fēicháng bàoqiàn gěi nín dài lái búbiàn, wǒmen mǎshàng bāng nín huàn gè fángjiān.',
        vi: 'Vô cùng xin lỗi vì sự bất tiện này, chúng em đổi ngay phòng khác cho quý khách.',
        breakdown: '带来不便 (đem lại bất tiện) + 换房间 (đổi phòng)'
      }
    ],
    quickReflex: {
      question: 'Khi muốn báo đồ bị hỏng, bạn dùng từ:',
      options: ['好了', '坏了 (Huài le)', '买了'],
      correct: 1,
      explain: '坏了 (Huài le) = Bị hỏng rồi.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 63,
    stage: 3,
    week: 9,
    title: 'Trả phòng trễ (Late Check-out) & Gửi hành lý',
    focus: 'Yánchí tuìfáng (Gia hạn trả phòng trễ)',
    tip: 'Muốn gửi hành lý ở sảnh: "Kěyǐ jìcún xíngli ma?" (Có thể gửi hành lý được không?).',
    sentences: [
      {
        hanzi: '请问可以延迟到下午两点退房吗？',
        pinyin: 'Qǐngwèn kěyǐ yánchí dào xiàwǔ liǎng diǎn tuì fáng ma?',
        vi: 'Xin hỏi tôi có thể gia hạn trả phòng trễ đến 2 giờ chiều được không?',
        breakdown: '延迟退房 (trả phòng muộn/late checkout)'
      },
      {
        hanzi: '退房后我们可以把行李寄存在前台吗？',
        pinyin: 'Tuì fáng hòu wǒmen kěyǐ bǎ xíngli jìcún zài qiántái ma?',
        vi: 'Sau khi trả phòng chúng tôi có thể gửi hành lý ở quầy lễ tân được không?',
        breakdown: '寄存行李 (gửi gửi hành lý)'
      },
      {
        hanzi: '当然可以，这是您的行李牌，请保管好。',
        pinyin: 'Dāngrán kěyǐ, zhè shì nín de xínglipái, qǐng bǎoguǎn hǎo.',
        vi: 'Đương nhiên được ạ, đây là thẻ nhận hành lý, bác giữ cẩn thận nhé.',
        breakdown: '行李牌 (thẻ hành lý) + 保管好 (giữ gìn cẩn thận)'
      }
    ],
    quickReflex: {
      question: '"Gửi hành lý" trong tiếng Trung là:',
      options: ['寄存行李 (Jìcún xíngli)', '不要行李', '扔行李'],
      correct: 0,
      explain: '寄存行李 = Gửi lại hành lý tạm thời.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 64,
    stage: 3,
    week: 9,
    title: 'Tìm phòng trọ, xem nhà & Ký hợp đồng thuê',
    focus: 'Zūfáng (Thuê nhà trọ)',
    tip: 'Hỏi giá thuê theo tháng: "Yí gè yuè fángzū duōshao qián?" (Tiền thuê nhà 1 tháng bao nhiêu?).',
    sentences: [
      {
        hanzi: '我想租一套一室一厅的公寓，有家电齐全的吗？',
        pinyin: 'Wǒ xiǎng zū yí tào yí shì yì tīng de gōngyù, yǒu jiādiàn qíquán de ma?',
        vi: 'Tôi muốn thuê căn chung cư 1 phòng ngủ 1 phòng khách, có căn nào đủ đồ đạc không?',
        breakdown: '一室一厅 (1 phòng ngủ 1 khách) + 家电齐全 (đầy đủ nội thất điện máy)'
      },
      {
        hanzi: '押一付三，水电费自理，明天可以来看房。',
        pinyin: 'Yā yī fù sān, shuǐdiànfèi zìlǐ, míngtiān kěyǐ lái kàn fáng.',
        vi: 'Đặt cọc 1 tháng trả 3 tháng, điện nước tự lo, ngày mai có thể qua xem nhà.',
        breakdown: '押一付三 (cọc 1 đóng 3) + 水电费 (tiền điện nước)'
      },
      {
        hanzi: '房租能包含物业费和宽带费吗？',
        pinyin: 'Fángzū néng bāohán wùyèfèi hé kuāndàifèi ma?',
        vi: 'Tiền thuê nhà có thể bao gồm phí dịch vụ tòa nhà và mạng internet không?',
        breakdown: '物业费 (phí quản lý) + 宽带费 (tiền cước internet)'
      }
    ],
    quickReflex: {
      question: '"押一付三" (Yā yī fù sān) nghĩa là gì trong thuê nhà?',
      options: ['Cọc 3 tháng đóng 1', 'Cọc 1 tháng đóng tiền 3 tháng', 'Miễn phí tiền cọc'],
      correct: 1,
      explain: '押一付三 là quy định cọc 1 tháng tiền nhà và đóng trước 3 tháng.'
    },
    relatedPath: '/scenario'
  },
  {
    day: 65,
    stage: 3,
    week: 9,
    title: 'Giao tiếp hàng xóm láng giềng',
    focus: 'Línjū (Hàng xóm láng giềng)',
    tip: 'Mới dọn đến mang đĩa trái cây sang chào: "Yǐhòu qǐng duō guānzhào!".',
    sentences: [
      {
        hanzi: '您好，我是新搬来的邻居，就住在隔壁。',
        pinyin: 'Nín hǎo, wǒ shì xīn bān lái de línjū, jiù zhù zài gébì.',
        vi: 'Chào anh ạ, tôi là hàng xóm mới chuyển tới, ở ngay căn phòng bên cạnh.',
        breakdown: '新搬来 (mới dọn tới) + 邻居 (hàng xóm) + 隔壁 (sát vách)'
      },
      {
        hanzi: '这点水果送给您尝尝，以后请多关照！',
        pinyin: 'Zhè diǎn shuǐguǒ sòng gěi nín chángchang, yǐhòu qǐng duō guānzhào!',
        vi: 'Có chút hoa quả này biếu bác nếm thử, sau này xin được chỉ giáo giúp đỡ ạ!',
        breakdown: '送给您 (tặng bác) + 尝尝 (nếm thử)'
      },
      {
        hanzi: '太客气了！远亲不如近邻，有事随时敲门。',
        pinyin: 'Tài kèqi le! Yuǎnqīn bùrú jìnlín, yǒushì suíshí qiāo mén.',
        vi: 'Khách sáo quá! Bán anh em xa mua láng giềng gần, có việc gì cứ gõ cửa nhé.',
        breakdown: '远亲不如近邻 (bán anh em xa mua láng giềng gần)'
      }
    ],
    quickReflex: {
      question: '"Hàng xóm" trong tiếng Trung là:',
      options: ['朋友', '邻居 (Línjū)', '客人'],
      correct: 1,
      explain: '邻居 (Línjū) = Hàng xóm.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 66,
    stage: 3,
    week: 9,
    title: 'Báo sự cố tiếng ồn & Giữ trật tự ban đêm',
    focus: 'Tài chǎo le! (Ồn ào quá!)',
    tip: 'Nhắc nhở nhẹ nhàng: "Qǐng xiǎo shēng yìdiǎn" (Xin hãy nhỏ tiếng một chút).',
    sentences: [
      {
        hanzi: '不好意思，已经深夜十二点了，声音能小一点吗？',
        pinyin: 'Bù hǎoyìsi, yǐjīng shēnyè shí\'èr diǎn le, shēngyīn néng xiǎo yìdiǎn ma?',
        vi: 'Ngại quá, đã 12 giờ đêm khuya rồi, âm thanh có thể vặn nhỏ một chút được không?',
        breakdown: '深夜 (đêm khuya) + 声音小一点 (tiếng nhỏ lại)'
      },
      {
        hanzi: '楼下有人在休息，请大家不要大声喧哗。',
        pinyin: 'Lóuxià yǒurén zài xiūxi, qǐng dàjiā bú yào dà shēng xuānhuá.',
        vi: 'Tầng dưới có người đang nghỉ ngơi, xin mọi người đừng làm ồn hò hét lớn tiếng.',
        breakdown: '大声喧哗 (hò hét ồn ào)'
      },
      {
        hanzi: '实在对不起，打扰到您了，我们马上关掉音乐。',
        pinyin: 'Shízài duìbuqǐ, dǎrǎo dào nín le, wǒmen mǎshàng guāndiào yīnyuè.',
        vi: 'Thành thật xin lỗi vì đã làm phiền bác, bọn cháu tắt nhạc ngay đây ạ.',
        breakdown: '打扰到您 (làm phiền bác) + 关掉音乐 (tắt nhạc)'
      }
    ],
    quickReflex: {
      question: 'Muốn nhắc "Nói nhỏ một chút", bạn nói:',
      options: ['大点声！', '声音小一点 (Shēngyīn xiǎo yìdiǎn)', '唱歌吧'],
      correct: 1,
      explain: '声音小一点 = Nói/bật nhỏ tiếng lại.'
    },
    relatedPath: '/listening'
  },
  {
    day: 67,
    stage: 3,
    week: 9,
    title: 'Ôn tập Tuần 9: Làm chủ mọi sinh hoạt lưu trú',
    focus: 'Check-in, xử lý sự cố phòng ốc đến thuê nhà tự lập',
    tip: 'Bạn hoàn toàn có thể tự tin sang Trung Quốc du lịch hoặc công tác độc lập!',
    sentences: [
      {
        hanzi: '我们在上海租了一间很温馨的公寓，生活很惬意。',
        pinyin: 'Wǒmen zài Shànghǎi zū le yì jiān hěn wēnxīn de gōngyù, shēnghuó hěn qièyì.',
        vi: 'Chúng tôi thuê một căn hộ rất ấm cúng ở Thượng Hải, cuộc sống rất thảnh thơi thoải mái.',
        breakdown: '温馨 (ấm cúng) + 惬意 (thảnh thơi hài lòng)'
      },
      {
        hanzi: '周围有超市、地铁站和菜市场，非常方便。',
        pinyin: 'Zhōuwéi yǒu chāoshì, dìtiězhàn hé càishìchǎng, fēicháng fāngbiàn.',
        vi: 'Xung quanh có siêu thị, trạm tàu điện ngầm và chợ dân sinh, vô cùng tiện lợi.',
        breakdown: '周围 (xung quanh) + 菜市场 (chợ)'
      },
      {
        hanzi: '即使遇到任何小问题，我也能用中文轻松解决了。',
        pinyin: 'Jíshǐ yùdào rènhé xiǎo wèntí, wǒ yě néng yòng zhōngwén qīngsōng jiějué le.',
        vi: 'Cho dù gặp bất cứ vấn đề nhỏ nào, tôi cũng có thể dùng tiếng Trung giải quyết ngon ơ.',
        breakdown: '轻松解决 (giải quyết dễ dàng)'
      }
    ],
    quickReflex: {
      question: '"Giải quyết dễ dàng" nói là:',
      options: ['很难', '轻松解决 (Qīngsōng jiějué)', '不会'],
      correct: 1,
      explain: '轻松解决 (Qīngsōng jiějué).'
    },
    relatedPath: '/ai-chat'
  },

  // Tuần 10: Sức khỏe, Hiệu thuốc & Khám bệnh thực tế (Ngày 68 - 74)
  {
    day: 68,
    stage: 3,
    week: 10,
    title: 'Diễn tả triệu chứng: Đau đầu, sốt, ho & cảm cúm',
    focus: 'Wǒ gǎnmào le, fāshāo le (Tôi bị cảm, sốt rồi)',
    tip: 'Đau ở đâu nói: "Chỗ đó + Tòng" (Vd: Tóu tòng - đau đầu, Dùzi tòng - đau bụng).',
    sentences: [
      {
        hanzi: '医生，我头痛发烧，全身没力气。',
        pinyin: 'Yīshēng, wǒ tóutòng fāshāo, quánshēn méi lìqi.',
        vi: 'Bác sĩ ơi, tôi bị đau đầu phát sốt, cả người rã rời không có sức lực.',
        breakdown: '头痛 (đau đầu) + 发烧 (phát sốt) + 没力气 (k có sức lực)'
      },
      {
        hanzi: '量一下体温，三十八度五，有点高烧。',
        pinyin: 'Liáng yíxià tǐwēn, sānshíbā dù wǔ, yǒudiǎn gāoshāo.',
        vi: 'Đo nhiệt độ một chút nhé, 38 độ 5, có dấu hiệu sốt hơi cao đấy.',
        breakdown: '量体温 (đo thân nhiệt) + 高烧 (sốt cao)'
      },
      {
        hanzi: '咳嗽多久了？有没有咽喉痛？',
        pinyin: 'Késou duō jiǔ le? Yǒu méiyǒu yānhóu tòng?',
        vi: 'Bạn ho bao lâu rồi? Có bị đau họng không?',
        breakdown: '咳嗽 (ho) + 咽喉痛 (đau họng)'
      }
    ],
    quickReflex: {
      question: '"Đau đầu" trong tiếng Trung là gì?',
      options: ['肚子痛 (Đau bụng)', '头痛 (Tóutòng)', '牙痛 (Đau răng)'],
      correct: 1,
      explain: '头痛 (Tóutòng) = Đau đầu.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 69,
    stage: 3,
    week: 10,
    title: 'Mua thuốc tại hiệu thuốc (Yàodiàn)',
    focus: 'Kǎishāo yào (Thuốc hạ sốt), Gǎnmào yào (Thuốc cảm)',
    tip: 'Hiệu thuốc ở Trung Quốc có biển chữ thập xanh lá cây ghi: 药店 (Yàodiàn).',
    sentences: [
      {
        hanzi: '请问有退烧药和感冒冲剂吗？',
        pinyin: 'Qǐngwèn yǒu tuìshāo yào hé gǎnmào chōngjì ma?',
        vi: 'Xin hỏi ở đây có thuốc hạ sốt và thuốc cảm dạng cốm pha không?',
        breakdown: '退烧药 (thuốc hạ sốt) + 感冒冲剂 (thuốc cảm sủi/pha)'
      },
      {
        hanzi: '这个药一天吃三次，饭后服用，一次两片。',
        pinyin: 'Zhège yào yì tiān chī sān cì, fàn hòu fúyòng, yí cì liǎng piàn.',
        vi: 'Thuốc này ngày uống 3 lần, uống sau bữa ăn, mỗi lần 2 viên nhé.',
        breakdown: '饭后服用 (uống sau khi ăn) + 一次两片 (mỗi lần 2 viên)'
      },
      {
        hanzi: '服药期间千万别喝酒，多喝温开水。',
        pinyin: 'Fú yào qījiān qiānwàn bié hējiǔ, duō hē wēn kāishuǐ.',
        vi: 'Trong thời gian uống thuốc tuyệt đối đừng uống rượu, hãy uống nhiều nước ấm.',
        breakdown: '别喝酒 (đừng uống rượu) + 温开水 (nước đun sôi ấm)'
      }
    ],
    quickReflex: {
      question: '"Uống thuốc sau bữa ăn" nói là:',
      options: ['饭前吃', '饭后服用 (Fàn hòu fúyòng)', '不吃'],
      correct: 1,
      explain: '饭后服用 = Uống sau bữa ăn.'
    },
    relatedPath: '/scenario'
  },
  {
    day: 70,
    stage: 3,
    week: 10,
    title: 'Đau bụng, tiêu chảy & Ngộ độc thực phẩm',
    focus: 'Dùzi tòng, lā dùzi (Đau bụng, đi ngoài)',
    tip: 'Ăn đồ lạ bị đau bụng: "Wǒ chī huài dùzi le" (Tôi ăn trúng đồ làm đau bụng rồi).',
    sentences: [
      {
        hanzi: '我昨天吃了海鲜，昨晚一直拉肚子。',
        pinyin: 'Wǒ zuótiān chī le hǎixiān, zuówǎn yìzhí lā dùzi.',
        vi: 'Hôm qua tôi ăn hải sản, tối qua tới giờ cứ bị đi ngoài suốt.',
        breakdown: '拉肚子 (đi ngoài/tiêu chảy) + 海鲜 (hải sản)'
      },
      {
        hanzi: '这可能是急性肠胃炎，需要做个化验。',
        pinyin: 'Zhè kěnéng shì jíxìng chángwèiyán, xūyào zuò gè huàyàn.',
        vi: 'Đây có khả năng là viêm dạ dày ruột cấp tính, cần làm xét nghiệm.',
        breakdown: '急性肠胃炎 (viêm ruột dạ dày cấp) + 化验 (xét nghiệm)'
      },
      {
        hanzi: '饮食要清淡，这几天别吃辛辣生冷的食物。',
        pinyin: 'Yǐnshí yào qīngdàn, zhè jǐ tiān bié chī xīnlà shēnglěng de shíwù.',
        vi: 'Ăn uống phải thanh đạm, mấy ngày này đừng ăn đồ cay nóng đồ sống lạnh nhé.',
        breakdown: '辛辣生冷 (cay nóng và đồ sống lạnh)'
      }
    ],
    quickReflex: {
      question: '"Đi ngoài / tiêu chảy" tiếng Trung là gì?',
      options: ['感冒', '拉肚子 (Lā dùzi)', '牙痛'],
      correct: 1,
      explain: '拉肚子 (Lā dùzi) = Tiêu chảy.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 71,
    stage: 3,
    week: 10,
    title: 'Đi khám răng & Đau răng (Nha khoa)',
    focus: 'Yá tòng (Đau răng)',
    tip: 'Tục ngữ có câu: "Yátòng bú shì bìng, tòng qǐlái zhēn yào mìng" (Đau răng k phải bệnh, đau lên mất mạng như chơi).',
    sentences: [
      {
        hanzi: '我的智齿发炎了，疼得睡不着觉。',
        pinyin: 'Wǒ de zhìchǐ fāyán le, téng de shuì bù zháo jiào.',
        vi: 'Răng khôn của tôi bị viêm sưng rồi, đau đến mức không ngủ nổi.',
        breakdown: '智齿 (răng khôn) + 发炎 (phát viêm/sưng) + 睡不着觉 (k ngủ nổi)'
      },
      {
        hanzi: '张开嘴巴，我看看。这颗牙需要拔掉。',
        pinyin: 'Zhāng kāi zuǐba, wǒ kànkan. Zhè kē yá xūyào bá diào.',
        vi: 'Há miệng ra nào để tôi xem. Chiếc răng này cần phải nhổ bỏ rồi.',
        breakdown: '张开嘴巴 (há miệng ra) + 拔掉 (nhổ bỏ)'
      },
      {
        hanzi: '拔牙前会打麻药，一点儿都不会觉得疼。',
        pinyin: 'Bá yá qián huì dǎ máyào, yìdiǎnr dōu bú huì juéde téng.',
        vi: 'Trước khi nhổ răng sẽ tiêm thuốc tê, không hề cảm thấy đau chút nào đâu.',
        breakdown: '打麻药 (tiêm thuốc tê) + 不会觉得疼 (k thấy đau)'
      }
    ],
    quickReflex: {
      question: '"Răng khôn" tiếng Trung gọi là gì?',
      options: ['门牙', '智齿 (Zhìchǐ)', '大牙'],
      correct: 1,
      explain: '智齿 (Zhìchǐ) = Răng khôn (răng trí tuệ).'
    },
    relatedPath: '/scenario'
  },
  {
    day: 72,
    stage: 3,
    week: 10,
    title: 'Xin nghỉ ốm với sếp (Qǐng bìngjià)',
    focus: 'Qǐng bìngjià (Xin nghỉ ốm)',
    tip: 'Gửi tin nhắn lịch sự kèm giấy khám của bác sĩ: "Bìnglì / Yīshēng zhèngmíng".',
    sentences: [
      {
        hanzi: '王经理，我身体不太舒服，想请一天病假。',
        pinyin: 'Wáng jīnglǐ, wǒ shēntǐ bú tài shūfu, xiǎng qǐng yì tiān bìngjià.',
        vi: 'Quản lý Vương ơi, người em hơi mệt không khỏe, em muốn xin nghỉ ốm một hôm ạ.',
        breakdown: '身体不舒服 (người k khỏe) + 请病假 (xin nghỉ ốm)'
      },
      {
        hanzi: '好的，手头的工作交接好了吗？好好休息。',
        pinyin: 'Hǎo de, shǒutóu de gōngzuò jiāojiē hǎo le ma? Hǎohao xiūxi.',
        vi: 'Được rồi, công việc trong tay đã bàn giao ổn chưa? Em nghỉ ngơi dưỡng sức nhé.',
        breakdown: '工作交接 (bàn giao công việc) + 好好休息 (nghỉ ngơi cho khỏe)'
      },
      {
        hanzi: '工作已经拜托小李协助处理了，谢谢领导关怀！',
        pinyin: 'Gōngzuò yǐjīng bàituō Xiǎo Lǐ xiézhù chǔlǐ le, xièxie lǐngdǎo guānhuái!',
        vi: 'Công việc em đã nhờ bạn Tiểu Lý hỗ trợ xử lý rồi ạ, cảm ơn sếp quan tâm!',
        breakdown: '拜托 (nhờ cậy) + 协助处理 (hỗ trợ giải quyết)'
      }
    ],
    quickReflex: {
      question: '"Xin nghỉ ốm" trong tiếng Trung là:',
      options: ['请事假 (Nghỉ việc riêng)', '请病假 (Qǐng bìngjià)', '旷工'],
      correct: 1,
      explain: '请病假 = Xin nghỉ bệnh.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 73,
    stage: 3,
    week: 10,
    title: 'Hỏi bảo hiểm & Thanh toán viện phí',
    focus: 'Yībǎo (Bảo hiểm y tế)',
    tip: 'Hỏi: "Zhège néng yòng yībǎo ma?" (Cái này có được thanh toán BHYT k?).',
    sentences: [
      {
        hanzi: '请问外国人在中国可以用医保或者商业保险报销吗？',
        pinyin: 'Qǐngwèn wàiguórén zài Zhōngguó kěyǐ yòng yībǎo huòzhě shāngyè bǎoxiǎn bàoxiāo ma?',
        vi: 'Xin hỏi người nước ngoài ở Trung Quốc có thể dùng BHYT hoặc bảo hiểm thương mại thanh toán không?',
        breakdown: '医保 (bảo hiểm y tế) + 报销 (thanh toán hoàn tiền)'
      },
      {
        hanzi: '可以的，请保留好发票和病历原件。',
        pinyin: 'Kěyǐ de, qǐng bǎoliú hǎo fāpiào hé bìnglì yuánjiàn.',
        vi: 'Được chứ ạ, xin vui lòng lưu giữ hóa đơn và sổ bệnh án bản gốc.',
        breakdown: '保留 (giữ lại) + 病历原件 (bản gốc sổ bệnh án)'
      },
      {
        hanzi: '祝您早日康复！身体健康最重要。',
        pinyin: 'Zhù nín zǎorì kāngfù! Shēntǐ jiànkāng zuì zhòngyào.',
        vi: 'Chúc bác sớm ngày bình phục! Sức khỏe dồi dào là quan trọng nhất.',
        breakdown: '早日康复 (sớm bình phục)'
      }
    ],
    quickReflex: {
      question: 'Lời chúc "Sớm ngày bình phục" cho người ốm là:',
      options: ['早日康复 (Zǎorì kāngfù)', '生日快乐', '一路顺风'],
      correct: 0,
      explain: '早日康复 = Chúc sớm khỏi bệnh.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 74,
    stage: 3,
    week: 10,
    title: 'Ôn tập Tuần 10: Xử lý trọn vẹn tình huống y tế sức khỏe',
    focus: 'Tự tin tự chăm sóc bản thân khi sống tại nước ngoài',
    tip: 'Sức khỏe là vốn quý nhất, biết tiếng Trung y tế giúp bạn luôn an tâm 100%!',
    sentences: [
      {
        hanzi: '平时多运动，少熬夜，才能保持健康的体魄。',
        pinyin: 'Píngshí duō yùndòng, shǎo áoyè, cái néng bǎochí jiànkāng de tǐpò.',
        vi: 'Bình thường vận động nhiều, bớt thức khuya, mới giữ được thể trạng khỏe khoắn.',
        breakdown: '少熬夜 (bớt thức khuya) + 保持健康 (giữ gìn sức khỏe)'
      },
      {
        hanzi: '生病了一定要及时去医院看医生，别硬扛着。',
        pinyin: 'Shēngbìng le yídìng yào jíshí qù yīyuàn kàn yīshēng, bié yìng káng zhe.',
        vi: 'Bị ốm nhất định phải kịp thời tới bệnh viện khám bác sĩ, đừng cố chịu đựng.',
        breakdown: '别硬扛着 (đừng gắng gượng chịu đựng)'
      },
      {
        hanzi: '现在去药店买药，交流起来完全没有障碍了。',
        pinyin: 'Xiànzài qù yàodiàn mǎi yào, jiāoliú qǐlái wánquán méiyǒu zhàng\'ài le.',
        vi: 'Bây giờ ra hiệu thuốc mua thuốc, giao tiếp nói chuyện hoàn toàn không còn rào cản.',
        breakdown: '没有障碍 (không có rào cản)'
      }
    ],
    quickReflex: {
      question: '"Thức khuya" trong tiếng Trung là gì?',
      options: ['早起', '熬夜 (Áoyè)', '睡觉'],
      correct: 1,
      explain: '熬夜 (Áoyè) = Thức khuya cày đêm.'
    },
    relatedPath: '/ai-chat'
  },

  // Tuần 11: Môi trường làm việc, Gọi điện & Công sở (Ngày 75 - 81)
  {
    day: 75,
    stage: 3,
    week: 11,
    title: 'Nghe và gọi điện thoại công việc chuyên nghiệp',
    focus: 'Wèi, nǐ hǎo! (Alo, xin chào!)',
    tip: 'Nhấc máy: "Wèi, nǐ hǎo! Qǐngwèn nín zhǎo nǎ wèi?" (Alo xin chào, xin hỏi bác tìm ai ạ?).',
    sentences: [
      {
        hanzi: '喂，您好！请问是张经理吗？我是越南分公司的阿海。',
        pinyin: 'Wèi, nín hǎo! Qǐngwèn shì Zhāng jīnglǐ ma? Wǒ shì Yuènán fēngōngsī de Ā Hǎi.',
        vi: 'Alo, xin chào ạ! Xin hỏi có phải Giám đốc Trương không ạ? Tôi là A Hải ở chi nhánh VN.',
        breakdown: '分公司 (chi nhánh công ty)'
      },
      {
        hanzi: '他现在正在开会，稍后让他给您回电话可以吗？',
        pinyin: 'Tā xiànzài zhèngzài kāihuì, shāohòu ràng tā gěi nín huí diànhuà kěyǐ ma?',
        vi: 'Anh ấy hiện đang bận họp, lát nữa để anh ấy gọi lại cho bạn được không?',
        breakdown: '开会 (họp) + 回电话 (gọi điện thoại lại)'
      },
      {
        hanzi: '好的，麻烦转告他，关于新合同的事情请尽早回复。',
        pinyin: 'Hǎo de, máfan zhuǎngào tā, guānyú xīn hétong de shìqing qǐng jǐnzǎo huífù.',
        vi: 'Vâng ạ, phiền chuyển lời giúp em, việc về hợp đồng mới nhờ anh ấy sớm phản hồi nhé.',
        breakdown: '转告 (chuyển lời) + 合同 (hợp đồng) + 尽早回复 (hồi âm sớm)'
      }
    ],
    quickReflex: {
      question: 'Khi bắt máy điện thoại, từ mở đầu là:',
      options: ['喂 (Wèi)', '好', '去'],
      correct: 0,
      explain: '喂 (Wèi) = Alo.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 76,
    stage: 3,
    week: 11,
    title: 'Hẹn lịch họp & Thảo luận tiến độ dự án',
    focus: 'Kāihuì (Họp hành), Jìndù (Tiến độ)',
    tip: 'Hỏi tiến độ: "Xiàngmù jìndù zěnmeyàng le?" (Tiến độ dự án tới đâu rồi?).',
    sentences: [
      {
        hanzi: '我们定在明天下午三点开线上视频会议，如何？',
        pinyin: 'Wǒmen dìng zài míngtiān xiàwǔ sān diǎn kāi xiànshàng shìpín huìyì, rúhé?',
        vi: 'Bọn mình ấn định lúc 3 giờ chiều mai họp video trực tuyến nhé, thấy thế nào?',
        breakdown: '线上视频会议 (họp video online) + 如何 (thế nào)'
      },
      {
        hanzi: '目前项目进展顺利，已经完成了80%的功能开发。',
        pinyin: 'Mùqián xiàngmù jìnzhǎn shùnlì, yǐjīng wánchéng le bǎi fēn zhī bāshí de gōngnéng kāifā.',
        vi: 'Hiện tại dự án tiến triển suôn sẻ, đã hoàn thành 80% phát triển tính năng.',
        breakdown: '进展顺利 (tiến triển thuận lợi) + 功能开发 (phát triển tính năng)'
      },
      {
        hanzi: '我会把最新的测试报告发送到您的邮箱。',
        pinyin: 'Wǒ huì bǎ zuì xīn de cèshì bàogào fāsòng dào nín de yóuxiāng.',
        vi: 'Tôi sẽ gửi bản báo cáo kiểm thử mới nhất vào hòm thư email của bạn.',
        breakdown: '测试报告 (báo cáo test/thử nghiệm) + 邮箱 (email)'
      }
    ],
    quickReflex: {
      question: '"Hộp thư điện tử / Email" tiếng Trung là:',
      options: ['手机', '邮箱 (Yóuxiāng)', '微信'],
      correct: 1,
      explain: '邮箱 (Yóuxiāng) = Hòm thư email.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 77,
    stage: 3,
    week: 11,
    title: 'Phát biểu ý kiến trong cuộc họp (Thảo luận & Phản biện)',
    focus: 'Wǒ rènwéi... (Tôi cho rằng...), Wǒ tóngyì (Tôi đồng ý)',
    tip: 'Muốn ngắt lời lịch sự: "Wǒ chā yí jù" (Cho tôi xin chen ngang một câu).',
    sentences: [
      {
        hanzi: '关于这个方案，我谈一下我个人的看法。',
        pinyin: 'Guānyú zhège fāng\'àn, wǒ tán yíxià wǒ gèrén de kànfǎ.',
        vi: 'Về phương án này, tôi xin phép chia sẻ đôi chút quan điểm cá nhân.',
        breakdown: '方案 (phương án) + 看法 (quan điểm/cách nhìn)'
      },
      {
        hanzi: '我很赞同李总的观点，这个市场潜力非常大。',
        pinyin: 'Wǒ hěn zàntóng Lǐ zǒng de guāndiǎn, zhège shìchǎng qiánlì fēicháng dà.',
        vi: 'Tôi rất tán thành quan điểm của Tổng giám đốc Lý, tiềm năng thị trường rất lớn.',
        breakdown: '赞同 (tán đồng/nhất trí) + 市场潜力 (tiềm năng thị trường)'
      },
      {
        hanzi: '但是考虑到成本预算，我们是否可以分阶段实施？',
        pinyin: 'Dànshì kǎolǜ dào chéngběn yùsuàn, wǒmen shìfǒu kěyǐ fēn jiēduàn shíshī?',
        vi: 'Nhưng xét tới ngân sách chi phí, liệu chúng ta có thể triển khai chia theo giai đoạn?',
        breakdown: '成本预算 (dự toán chi phí) + 分阶段实施 (chia giai đoạn triển khai)'
      }
    ],
    quickReflex: {
      question: 'Khi muốn nói "Tôi đồng tình / tán thành quan điểm", bạn nói:',
      options: ['我不同意', '我很赞同 (Wǒ hěn zàntóng)', '随便'],
      correct: 1,
      explain: '赞同 (Zàntóng) = Tán thành / Đồng thuận.'
    },
    relatedPath: '/formula'
  },
  {
    day: 78,
    stage: 3,
    week: 11,
    title: 'Đàm phán giá cả & Điều khoản thanh toán thương mại',
    focus: 'Bàojià (Báo giá), Fùkuǎn tiáokuǎn (Điều khoản thanh toán)',
    tip: 'Thương thảo hợp đồng nhớ chốt: "Cháochǎnpǐn zhìliàng shì dì-yī wèi de" (Chất lượng sản phẩm là hàng đầu).',
    sentences: [
      {
        hanzi: '如果我们的订购量达到一万件，单价能再优惠一点吗？',
        pinyin: 'Rúguǒ wǒmen de dìnggòuliàng dádào yí wàn jiàn, dānjià néng zài yōuhuì yìdiǎn ma?',
        vi: 'Nếu số lượng đặt hàng của chúng tôi đạt 10.000 chiếc, đơn giá có thể ưu đãi thêm chút không?',
        breakdown: '订购量 (lượng đặt hàng) + 单价 (đơn giá)'
      },
      {
        hanzi: '我们接受30%预付款，提单副本见款后付清余款。',
        pinyin: 'Wǒmen jiēshòu bǎi fēn zhī sānshí yùfùkuǎn, tídān fùběn jiàn kuǎn hòu fùqīng yúkuǎn.',
        vi: 'Chúng tôi chấp nhận thanh toán trước 30%, thấy bản sao vận đơn B/L sẽ thanh toán nốt.',
        breakdown: '预付款 (tiền cọc thanh toán trước) + 付清余款 (thanh toán nốt phần còn lại)'
      },
      {
        hanzi: '希望我们双方能建立长期稳定的合作共赢关系。',
        pinyin: 'Xīwàng wǒmen shuāngfāng néng jiànlì chángqī wěndìng de hézuò gòngyíng guānxi.',
        vi: 'Hy vọng hai bên chúng ta có thể xây dựng quan hệ hợp tác cùng có lợi lâu dài bền vững.',
        breakdown: '合作共赢 (hợp tác đôi bên cùng thắng win-win)'
      }
    ],
    quickReflex: {
      question: '"Hợp tác cùng có lợi (Win-win)" trong kinh doanh là:',
      options: ['合作共赢 (Hézuò gòngyíng)', '各做各的', '不赚钱'],
      correct: 0,
      explain: '合作共赢 = Win-win / Đôi bên cùng có lợi.'
    },
    relatedPath: '/scenario'
  },
  {
    day: 79,
    stage: 3,
    week: 11,
    title: 'Giao lưu tiếp khách thương mại (Business Dinner)',
    focus: 'Gānbēi! (Cạn ly / Nâng ly)',
    tip: 'Trên bàn tiệc Trung Quốc, khi mời rượu nói: "Wǒ jìng nín yì bēi" (Tôi xin kính bác một ly).',
    sentences: [
      {
        hanzi: '感谢各位远道而来，我敬大家一杯，干杯！',
        pinyin: 'Gǎnxiè gèwèi yuǎndào ér lái, wǒ jìng dàjiā yì bēi, gānbēi!',
        vi: 'Cảm ơn quý vị đã không quản ngại đường xa đến đây, tôi kính mọi người một ly, cạn ly!',
        breakdown: '远道而来 (từ phương xa tới) + 敬一杯 (kính 1 ly) + 干杯 (cạn ly)'
      },
      {
        hanzi: '祝我们的项目圆满成功，友谊长青！',
        pinyin: 'Zhù wǒmen de xiàngmù yuánmǎn chénggōng, yǒuyì chángqīng!',
        vi: 'Chúc dự án của chúng ta thành công tốt đẹp, tình hữu nghị mãi mãi xanh tươi!',
        breakdown: '圆满成功 (thành công viên mãn) + 友谊长青 (tình bạn mãi mãi)'
      },
      {
        hanzi: '我酒量不太好，以茶代酒，请多包涵！',
        pinyin: 'Wǒ jiǔliàng bú tài hǎo, yǐ chá dài jiǔ, qǐng duō bāohan!',
        vi: 'Tửu lượng của tôi không tốt lắm, xin lấy trà thay rượu, mong được lượng thứ!',
        breakdown: '以茶代酒 (lấy trà thay rượu) + 请多包涵 (mong thông cảm lượng thứ)'
      }
    ],
    quickReflex: {
      question: 'Khi không uống được rượu, người Trung Quốc nói câu gì khéo léo?',
      options: ['我不要喝', '以茶代酒 (Yǐ chá dài jiǔ)', '别敬我'],
      correct: 1,
      explain: '以茶代酒 = Xin phép lấy trà thay rượu, rất nhã nhặn.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 80,
    stage: 3,
    week: 11,
    title: 'Phỏng vấn xin việc bằng tiếng Trung (Job Interview)',
    focus: 'Tán về thế mạnh, kinh nghiệm & mức lương mong muốn',
    tip: 'Tự tin nêu bật: "Wǒ de yōushì shì..." (Ưu thế của tôi là sự tỉ mỉ, chăm chỉ và cầu tiến).',
    sentences: [
      {
        hanzi: '请简单做一下自我介绍，谈谈你的工作经验。',
        pinyin: 'Qǐng jiǎndān zuò yíxià zìwǒ jièshào, tántan nǐ de gōngzuò jīngyàn.',
        vi: 'Mời bạn giới thiệu ngắn gọn về bản thân và chia sẻ đôi chút kinh nghiệm làm việc.',
        breakdown: '工作经验 (kinh nghiệm làm việc)'
      },
      {
        hanzi: '我的最大优势是学习能力强，具有良好的团队合作精神。',
        pinyin: 'Wǒ de zuìdà yōushì shì xuéxí nénglì qiáng, jùyǒu liánghǎo de tuánduì hézuò jīngshén.',
        vi: 'Ưu thế lớn nhất của tôi là khả năng học hỏi nhanh, có tinh thần làm việc nhóm tốt.',
        breakdown: '学习能力强 (học hỏi nhanh) + 团队合作精神 (tinh thần teamwork)'
      },
      {
        hanzi: '你对期望薪资有什么要求吗？',
        pinyin: 'Nǐ duì qīwàng xīnzī yǒu shénme yāoqiú ma?',
        vi: 'Bạn có yêu cầu gì về mức lương kỳ vọng không?',
        breakdown: '期望薪资 (mức lương kỳ vọng)'
      }
    ],
    quickReflex: {
      question: '"Mức lương kỳ vọng" tiếng Trung là gì?',
      options: ['期望薪资 (Qīwàng xīnzī)', '年假', '加班费'],
      correct: 0,
      explain: '期望薪资 = Mức lương kỳ vọng.'
    },
    relatedPath: '/scenario'
  },
  {
    day: 81,
    stage: 3,
    week: 11,
    title: 'Ôn tập Tuần 11: Làm chủ tiếng Trung công sở & Thương mại',
    focus: 'Khẳng định đẳng cấp giao tiếp chuyên nghiệp với đối tác',
    tip: 'Bạn đã đạt trình độ giao tiếp nâng cao, có thể kiếm tiền từ tiếng Trung rồi!',
    sentences: [
      {
        hanzi: '语言是一座桥梁，帮我们拓展更广阔的国际视野。',
        pinyin: 'Yǔyán shì yí zuò qiáoliáng, bāng wǒmen tuòzhǎn gèng guǎngkuò de guójì shìyě.',
        vi: 'Ngôn ngữ là một cây cầu, giúp chúng ta mở rộng tầm nhìn quốc tế bao la hơn.',
        breakdown: '桥梁 (cây cầu) + 国际视野 (tầm nhìn quốc tế)'
      },
      {
        hanzi: '掌握流利的商务中文让我在职场上充满竞争力。',
        pinyin: 'Zhǎngwò liúlì de shāngwù zhōngwén ràng wǒ zài zhíchǎng shàng chōngmǎn jìngzhēnglì.',
        vi: 'Nắm vững tiếng Trung thương mại trôi chảy khiến tôi tràn đầy sức cạnh tranh trong sự nghiệp.',
        breakdown: '商务中文 (tiếng Trung thương mại) + 竞争力 (sức cạnh tranh)'
      },
      {
        hanzi: '只要敢于开口，就没有攻克不了的语言难关。',
        pinyin: 'Zhǐyào gǎnyú kāikǒu, jiù méiyǒu gōngkè bùliǎo de yǔyán nánguān.',
        vi: 'Chỉ cần dám mở miệng nói, thì chẳng có ải ngôn ngữ nào là không vượt qua được.',
        breakdown: '敢于开口 (dám mở miệng nói) + 难关 (ải khó khăn)'
      }
    ],
    quickReflex: {
      question: '"Dám mở miệng nói" là yếu tố cốt lõi nhất để giỏi tiếng Trung, từ đó là:',
      options: ['不敢说', '敢于开口 (Gǎnyú kāikǒu)', '不练习'],
      correct: 1,
      explain: '敢于开口 = Dám mở miệng nói, không sợ sai.'
    },
    relatedPath: '/ai-chat'
  },

  // Tuần 12: Đàm phán, Kết bạn & Tổng kết bứt phá 90 ngày (Ngày 82 - 90)
  {
    day: 82,
    stage: 3,
    week: 12,
    title: 'Trò chuyện sâu sắc: Bàn về ước mơ & Kế hoạch tương lai',
    focus: 'Mèngxiǎng (Ước mơ), Wèilái jìhuà (Kế hoạch tương lai)',
    tip: 'Khi nói chuyện thân mật, người ta rất thích lắng nghe về hoài bão và lý tưởng sống.',
    sentences: [
      {
        hanzi: '你的梦想是什么？我希望将来能去中国留学和旅行。',
        pinyin: 'Nǐ de mèngxiǎng shì shénme? Wǒ xīwàng jiānglái néng qù Zhōngguó liúxué hé lǚxíng.',
        vi: 'Ước mơ của bạn là gì? Tôi hy vọng tương lai có thể sang Trung Quốc du học và du lịch.',
        breakdown: '梦想 (ước mơ) + 留学和旅行 (du học và du lịch)'
      },
      {
        hanzi: '千里之行，始于足下，你的付出一定会开花结果。',
        pinyin: 'Qiānlǐ zhī xíng, shǐ yú zú xià, nǐ de fùchū yídìng huì kāihuā jiéguǒ.',
        vi: 'Hành trình ngàn dặm khởi đầu từ bước chân, sự nỗ lực của bạn nhất định sẽ đơm hoa kết trái.',
        breakdown: '千里之行始于足下 (hành trình vạn dặm bắt đầu từ 1 bước chân)'
      },
      {
        hanzi: '我们一起为美好的未来努力拼搏吧！',
        pinyin: 'Wǒmen yìqǐ wèi měihǎo de wèilái nǔlì pīnbó ba!',
        vi: 'Bọn mình cùng nhau nỗ lực phấn đấu vì một tương lai tươi đẹp nhé!',
        breakdown: '努力拼搏 (nỗ lực phấn đấu hết mình)'
      }
    ],
    quickReflex: {
      question: 'Thành ngữ "Hành trình ngàn dặm bắt đầu từ một bước chân" là:',
      options: ['千里之行，始于足下', '对不起', '马马虎虎'],
      correct: 0,
      explain: '千里之行，始于足下 (Qiānlǐ zhī xíng, shǐ yú zú xià).'
    },
    relatedPath: '/speaking'
  },
  {
    day: 83,
    stage: 3,
    week: 12,
    title: 'Bàn luận phim ảnh, Douyin (Tiktok) & Nhạc Hoa ngữ',
    focus: 'Kàn diànyǐng, Shuā Dǒuyīn (Lướt Douyin)',
    tip: 'Bắt trend giới trẻ: "Nǐ jīntiān shuā Dǒuyīn le ma?" (Hôm nay bạn lướt Tiktok chưa?).',
    sentences: [
      {
        hanzi: '你最近在刷什么有趣的短视频吗？',
        pinyin: 'Nǐ zuìjìn zài shuā shénme yǒuqù de duǎn shìpín ma?',
        vi: 'Dạo này bạn đang lướt video ngắn thú vị nào thế?',
        breakdown: '刷短视频 (lướt video ngắn)'
      },
      {
        hanzi: '这首中文歌最近在网络上超级火爆，旋律很上头！',
        pinyin: 'Zhè shǒu zhōngwén gē zuìjìn zài wǎngluò shàng chāojí huǒbào, xuánlǜ hěn shàngtóu!',
        vi: 'Bài hát tiếng Trung này dạo này siêu hot trên mạng, giai điệu nghe cuốn dã man!',
        breakdown: '超级火爆 (siêu hot) + 上头 (cuốn hút/dính đầu)'
      },
      {
        hanzi: '多看原声影视剧是提升听力和口语最好的捷径。',
        pinyin: 'Duō kàn yuánshēng yǐngshìjù shì tíshēng tīnglì hé kǒuyǔ zuì hǎo de jiéjìng.',
        vi: 'Xem nhiều phim truyền hình tiếng gốc là con đường tắt tốt nhất nâng cao nghe nói.',
        breakdown: '捷径 (đường tắt/phương pháp nhanh)'
      }
    ],
    quickReflex: {
      question: 'Từ lóng giới trẻ khen bài hát "Rất cuốn / Rất dính" là gì?',
      options: ['很上头 (Hěn shàngtóu)', '不好听', '头痛'],
      correct: 0,
      explain: '很上头 là từ lóng mạng chỉ cái gì đó quá cuốn hút, gây nghiện.'
    },
    relatedPath: '/listening'
  },
  {
    day: 84,
    stage: 3,
    week: 12,
    title: 'Cách từ chối khéo léo không làm mất lòng',
    focus: 'Từ chối lịch sự bằng cách nêu lý do',
    tip: 'Người Á Đông không thích nói thẳng "Tôi không đi", hãy dùng: "Bù qiǎoyǎ, wǒ zhènghǎo..."!',
    sentences: [
      {
        hanzi: '真不巧，我周末正好有事要处理，实在去不了。',
        pinyin: 'Zhēn bù qiǎo, wǒ zhōumò zhènghǎo yǒushì yào chǔlǐ, shízài qù bù liǎo.',
        vi: 'Thật không may quá, cuối tuần em đúng lúc có việc phải giải quyết, thật sự không đi được.',
        breakdown: '真不巧 (thật k khéo) + 去不了 (k đi đc)'
      },
      {
        hanzi: '心意我领了，非常感谢，下次有机会一定去！',
        pinyin: 'Xīnyì wǒ lǐng le, fēicháng gǎnxiè, xià cì yǒu jīhuì yídìng qù!',
        vi: 'Tấm lòng của bạn tôi xin nhận, vô cùng cảm ơn, lần sau có dịp nhất định tôi sẽ đi!',
        breakdown: '心意我领了 (tấm lòng tôi xin nhận)'
      },
      {
        hanzi: '改天我做东，请大家吃饭补偿大家。',
        pinyin: 'Gǎitiān wǒ zuòdōng, qǐng dàjiā chīfàn bǔcháng dàjiā.',
        vi: 'Hôm nào khác tôi làm chủ tiệc, mời mọi người ăn cơm đền bù nhé.',
        breakdown: '改天 (hôm khác) + 我做东 (tôi làm chủ chi/đứng ra mời)'
      }
    ],
    quickReflex: {
      question: 'Câu nào từ chối lời mời khéo léo và trân trọng nhất?',
      options: ['我不去', '心意我领了，改天一定聚！', '讨厌'],
      correct: 1,
      explain: '心意我领了 là cách từ chối vừa ấm áp vừa giữ được hòa khí.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 85,
    stage: 3,
    week: 12,
    title: 'Học cách khen ngợi văn hóa & Ẩm thực Trung Hoa',
    focus: 'Gây thiện cảm tuyệt đối với người bản xứ',
    tip: 'Khen món ăn địa phương là cách nhanh nhất kết bạn với người Trung Quốc!',
    sentences: [
      {
        hanzi: '中国地大物博，每个城市的饮食文化都独具特色。',
        pinyin: 'Zhōngguó dì dà wù bó, měi gè chéngshì de yǐnshí wénhuà dōu dú jù tèsè.',
        vi: 'Trung Quốc đất rộng của nhiều, văn hóa ẩm thực mỗi thành phố đều mang nét độc đáo riêng.',
        breakdown: '地大物博 (đất rộng của nhiều) + 独具特色 (mang nét độc đáo)'
      },
      {
        hanzi: '我特别喜欢川菜的麻辣和粤菜的精致鲜美。',
        pinyin: 'Wǒ tèbié xǐhuan Chuāncài de málà hé Yuècài de jīngzhì xiānměi.',
        vi: 'Tôi đặc biệt thích vị cay tê của ẩm thực Tứ Xuyên và sự tinh tế thanh ngọt của món Quảng Đông.',
        breakdown: '川菜 (món Tứ Xuyên) + 粤菜 (món Quảng Đông)'
      },
      {
        hanzi: '中国人民非常热情好客，让我感到宾至如归。',
        pinyin: 'Zhōngguó rénmín fēicháng rèqíng hàokè, ràng wǒ gǎndào bīn zhì rú guī.',
        vi: 'Người dân Trung Quốc vô cùng nhiệt tình hiếu khách, khiến tôi cảm thấy như ở chính nhà mình.',
        breakdown: '宾至如归 (khách đến như về nhà mình)'
      }
    ],
    quickReflex: {
      question: 'Thành ngữ "Khách đến ấm áp như về nhà mình" là:',
      options: ['宾至如归 (Bīn zhì rú guī)', '欢迎光临', '一路平安'],
      correct: 0,
      explain: '宾至如归 = Đón tiếp chu đáo như ở nhà.'
    },
    relatedPath: '/speaking'
  },
  {
    day: 86,
    stage: 3,
    week: 12,
    title: 'Kỹ năng Shadowing đỉnh cao: Nhại theo đoạn hội thoại tốc độ tự nhiên',
    focus: 'Bắt nhịp nuốt âm, luyến láy như người bản xứ',
    tip: 'Không cần nhìn từng chữ, hãy nhắm mắt và bắt chước đúng ngữ điệu lên xuống của giọng nói!',
    sentences: [
      {
        hanzi: '你听说没？下个月咱们公司组织去三亚旅游团建呢！',
        pinyin: 'Nǐ tīngshuō méi? Xià gè yuè zánmen gōngsī zǔzhī qù Sānyà lǚyóu tuánjiàn ne!',
        vi: 'Cậu nghe gì chưa? Tháng sau công ty mình tổ chức đi Tam Á du lịch team-building đấy!',
        breakdown: '听说没 (nghe gì chưa) + 团建 (team-building)'
      },
      {
        hanzi: '真的假的？那可太棒了，我早就想去海边吹吹风了！',
        pinyin: 'Zhēnde jiǎde? Nà kě tài bàng le, wǒ zǎojiù xiǎng qù hǎibiān chuīchuī fēng le!',
        vi: 'Thật hay đùa đấy? Thế thì tuyệt quá, tớ đã muốn ra bờ biển hóng gió từ lâu lắm rồi!',
        breakdown: '真的假的 (thật hay đùa thế) + 吹吹风 (hóng gió biển)'
      },
      {
        hanzi: '是啊，赶快把手头的活儿干完，到时候好好放松一下。',
        pinyin: 'Shì a, gǎnkuài bǎ shǒutóu de huór gàn wán, dào shíhou hǎohao fàngsōng yíxià.',
        vi: 'Chuẩn luôn, mau mau làm cho xong việc trong tay, đến lúc đó tha hồ xả hơi nghỉ ngơi.',
        breakdown: '活儿 (việc lặt vặt) + 放松一下 (thư giãn chút)'
      }
    ],
    quickReflex: {
      question: 'Khẩu ngữ nói "Thật hay đùa thế?" là:',
      options: ['好不好', '真的假的？(Zhēnde jiǎde?)', '是谁'],
      correct: 1,
      explain: '真的假的？= Thật hay đùa đấy? (Rất tự nhiên).'
    },
    relatedPath: '/speaking'
  },
  {
    day: 87,
    stage: 3,
    week: 12,
    title: 'Phản xạ cấp tốc: Đối thoại ứng biến trong 2 giây',
    focus: 'Phản xạ vô điều kiện không thông qua dịch tiếng mẹ đẻ',
    tip: 'Nghe xong lập tức bật ra câu trả lời bằng tiếng Trung. Tuyệt đối không dịch qua tiếng Việt!',
    sentences: [
      {
        hanzi: '外边下那么大雨，你怎么没带雨伞啊？',
        pinyin: 'Wàibian xià nàme dà yǔ, nǐ zěnme méi dài yǔsǎn a?',
        vi: 'Ngoài trời mưa to thế kia, sao cậu không mang theo ô dù hả?',
        breakdown: '下那么大雨 (mưa to thế)'
      },
      {
        hanzi: '走得太急给忘了，幸好地铁站有爱心伞可以借。',
        pinyin: 'Zǒu de tài jí gěi wàng le, xìnghǎo dìtiězhàn yǒu àixīnsǎn kěyǐ jiè.',
        vi: 'Đi vội quá nên quên béng mất, may mà ở ga tàu điện có ô nghĩa tình cho mượn.',
        breakdown: '给忘了 (quên mất tiêu) + 幸好 (may mà)'
      },
      {
        hanzi: '那你快擦擦头发，别着凉感冒了。',
        pinyin: 'Nà nǐ kuài cāca tóufa, bié zháoliáng gǎnmào le.',
        vi: 'Thế cậu lau mau tóc đi, kẻo bị nhiễm lạnh cảm cúm đấy.',
        breakdown: '擦头发 (lau tóc) + 别着凉 (đừng để bị cảm lạnh)'
      }
    ],
    quickReflex: {
      question: 'Từ "May mà / May mắn là" trong tiếng Trung là:',
      options: ['可惜', '幸好 (Xìnghǎo)', '倒霉'],
      correct: 1,
      explain: '幸好 (Xìnghǎo) = May mà / May mắn thay.'
    },
    relatedPath: '/ai-chat'
  },
  {
    day: 88,
    stage: 3,
    week: 12,
    title: 'Học cách giữ gìn ngôn ngữ sau 3 tháng (Duy trì phong độ)',
    focus: 'Bí quyết không bị quên sau khi hoàn thành khóa 90 ngày',
    tip: 'Ngôn ngữ là cơ bắp, không dùng sẽ teo. Hãy giữ thói quen 5-10 phút nghe mỗi ngày!',
    sentences: [
      {
        hanzi: '学无止境，语言的学习是一个持续积累的过程。',
        pinyin: 'Xué wú zhǐjìng, yǔyán de xuéxí shì yí gè chíxù jīlěi de guòchéng.',
        vi: 'Học là không có bến bờ, học ngôn ngữ là một quá trình liên tục tích lũy.',
        breakdown: '学无止境 (học vô bờ bến) + 持续积累 (tích lũy liên tục)'
      },
      {
        hanzi: '每天哪怕只花十分钟听听播客，也能保持敏锐的语感。',
        pinyin: 'Měitiān nǎpà zhǐ huā shí fēnzhōng tīngting bōkè, yě néng bǎochí mǐnruì de yǔgǎn.',
        vi: 'Mỗi ngày dù chỉ dành 10 phút nghe podcast, cũng có thể giữ vững cảm giác ngôn ngữ nhạy bén.',
        breakdown: '哪怕 (cho dù) + 播客 (podcast) + 敏锐的语感 (cảm giác ngữ âm nhạy bén)'
      },
      {
        hanzi: '把中文融入生活，多交朋友，多交流。',
        pinyin: 'Bǎ zhōngwén róngrù shēnghuó, duō jiāo péngyou, duō jiāoliú.',
        vi: 'Hãy hòa tiếng Trung vào đời sống thường nhật, kết bạn nhiều hơn, giao lưu nhiều hơn.',
        breakdown: '融入生活 (hòa vào đời sống)'
      }
    ],
    quickReflex: {
      question: '"Cảm giác ngôn ngữ nhạy bén" tiếng Trung là gì?',
      options: ['语感 (Yǔgǎn)', '语法', '生词'],
      correct: 0,
      explain: '语感 (Yǔgǎn) = Cảm giác ngôn ngữ tự nhiên.'
    },
    relatedPath: '/formula'
  },
  {
    day: 89,
    stage: 3,
    week: 12,
    title: 'Đối thoại thực chiến toàn diện cùng AI Chú Hải (Final Boss)',
    focus: 'Tổng hợp mọi tình huống trong 1 cuộc đàm thoại dài!',
    tip: 'Bật Mic và nói chuyện với AI về bất kỳ chủ đề nào: du lịch, món ăn, công việc!',
    sentences: [
      {
        hanzi: '你好！在这三个月里，你的中文取得了惊人的进步！',
        pinyin: 'Nǐ hǎo! Zài zhè sān gè yuè lǐ, nǐ de zhōngwén qǔdé le jīngrén de jìnbù!',
        vi: 'Chào bạn! Trong 3 tháng vừa qua, tiếng Trung của bạn đã đạt được tiến bộ đáng kinh ngạc!',
        breakdown: '惊人的进步 (tiến bộ kinh ngạc)'
      },
      {
        hanzi: '你不仅学会了如何表达，更培养了强大的自信心。',
        pinyin: 'Nǐ bùjǐn xuéhuì le rúhé biǎodá, gèng péiyǎng le qiángdà de zìxìnxīn.',
        vi: 'Bạn không những học được cách diễn đạt, mà còn rèn luyện được sự tự tin mạnh mẽ.',
        breakdown: '不仅...更... (k những mà còn) + 自信心 (sự tự tin)'
      },
      {
        hanzi: '无论走到哪里，你都可以用流利的中文自豪地交流了！',
        pinyin: 'Wúlùn zǒu dào nǎlǐ, nǐ dōu kěyǐ yòng liúlì de zhōngwén zìháo de jiāoliú le!',
        vi: 'Bất luận đi đến nơi đâu, bạn đều có thể tự hào giao tiếp bằng tiếng Trung lưu loát rồi!',
        breakdown: '无论走到哪里 (bất luận đi tới đâu) + 自豪 (tự hào)'
      }
    ],
    quickReflex: {
      question: 'Khi nhìn lại chặng đường 3 tháng không bỏ cuộc, cảm xúc của bạn là:',
      options: ['自豪与开心 (Tự hào & Hạnh phúc)', '无所谓', '放弃'],
      correct: 0,
      explain: '自豪与开心 (Zìháo yǔ kāixīn) = Tự hào và hân hoan.'
    },
    relatedPath: '/ai-chat'
  },
  {
    day: 90,
    stage: 3,
    week: 12,
    title: 'NGÀY 90: TỐT NGHIỆP LỘ TRÌNH 3 THÁNG - BỨT PHÁ GIAO TIẾP!',
    focus: 'Trao chứng nhận hoàn thành 90 ngày & Huy chương Vàng Khẩu ngữ',
    tip: 'CHÚC MỪNG BẠN! Bạn đã chứng minh sự kiên trì phi thường và chiến thắng sự nản lòng!',
    sentences: [
      {
        hanzi: '恭喜你圆满完成九十天中文听说突破训练！',
        pinyin: 'Gōngxǐ nǐ yuánmǎn wánchéng jiǔshí tiān zhōngwén tīngshuō tūpò xùnliàn!',
        vi: 'Chúc mừng bạn đã hoàn thành xuất sắc 90 ngày huấn luyện bứt phá nghe nói tiếng Trung!',
        breakdown: '恭喜 (chúc mừng) + 突破训练 (huấn luyện bứt phá)'
      },
      {
        hanzi: '你用毅力战胜了拖延与怠惰，你是最棒的！',
        pinyin: 'Nǐ yòng yìlì zhànshèng le tuōyán yǔ dàiduò, nǐ shì zuì bàng de!',
        vi: 'Bạn đã dùng nghị lực chiến thắng sự trì hoãn và lười biếng, bạn là tuyệt nhất!',
        breakdown: '毅力 (nghị lực) + 战胜 (chiến thắng) + 最棒 (tuyệt nhất)'
      },
      {
        hanzi: '愿中文成为你探索更广阔世界的翅膀，前程似锦！',
        pinyin: 'Yuàn zhōngwén chéngwéi nǐ tànsuǒ gèng guǎngkuò shìjiè de chìbǎng, qiánchéng sì jǐn!',
        vi: 'Chúc tiếng Trung trở thành đôi cánh đưa bạn khám phá thế giới rộng lớn, tiền đồ gấm hoa!',
        breakdown: '翅膀 (đôi cánh) + 前程似锦 (tiền đồ xán lạn như gấm hoa)'
      }
    ],
    quickReflex: {
      question: 'Lời chúc "Tiền đồ xán lạn gấm hoa" là gì?',
      options: ['前程似锦 (Qiánchéng sì jǐn)', '明天见', '不用谢'],
      correct: 0,
      explain: '前程似锦 (Qiánchéng sì jǐn) = Tiền đồ xán lạn như gấm hoa thêu dệt.'
    },
    relatedPath: '/speaking'
  }
];
