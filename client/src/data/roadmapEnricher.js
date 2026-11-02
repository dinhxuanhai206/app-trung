/**
 * ROADMAP ENRICHER MODULE (NÂNG CẤP TOÀN DIỆN)
 * Cung cấp giải pháp học nghe nói thực chiến & chống nản chuyên sâu:
 * 1. 10 - 12 Từ vựng thực chiến mỗi ngày (có Hán Việt, Pinyin, Nghĩa, Loại từ, Ví dụ)
 * 2. 8 - 10 Câu khẩu ngữ đời sống thực tế (có phân loại ngữ cảnh, bóc tách cấu trúc)
 * 3. Đoạn hội thoại thực tế phong phú (Roleplay A - B)
 * 4. Bài khóa luyện đọc THUẦN CHỮ HÁN (ẨN PINYIN) + Click tra cứu tức thì + Câu hỏi đọc hiểu
 * 5. Đấu trường Game ôn tập:
 *    - Game 1: Ghép câu giao tiếp (Sentence Scramble) - Đa câu
 *    - Game 2: Ghép cặp từ vựng (Vocab Memory Match)
 *    - Game 3: Chuỗi phản xạ tình huống (Multi-Reflex)
 *    - Game 4: Nghe điền từ khuyết (Gap-fill)
 *    - Game 5: Thử thách đúng/sai nhanh (True/False Speed Drill)
 */

export const TOPIC_EXTENSIONS = {
  // Tuần 1: Chào hỏi, xưng hô, cảm ơn, xin lỗi, giao lưu cơ bản
  week1: {
    vocabPool: [
      { hanzi: '你好', pinyin: 'nǐ hǎo', hv: 'Nhĩ hảo', vi: 'Xin chào', type: 'Chào hỏi', example: '你好！很高兴认识你。' },
      { hanzi: '早上好', pinyin: 'zǎoshang hǎo', hv: 'Tảo thượng hảo', vi: 'Chào buổi sáng', type: 'Chào hỏi', example: '李老师，早上好！' },
      { hanzi: '晚上好', pinyin: 'wǎnshang hǎo', hv: 'Vãn thượng hảo', vi: 'Chào buổi tối', type: 'Chào hỏi', example: '大家晚上好，欢迎来到这里！' },
      { hanzi: '谢谢', pinyin: 'xièxie', hv: 'Tạ tạ', vi: 'Cảm ơn', type: 'Xã giao', example: '非常谢谢你的热情招待！' },
      { hanzi: '不客气', pinyin: 'bú kèqi', hv: 'Bất khách khí', vi: 'Không có chi / Đừng khách sáo', type: 'Xã giao', example: '不用谢，不客气！' },
      { hanzi: '对不起', pinyin: 'duìbuqǐ', hv: 'Đối bất khởi', vi: 'Xin lỗi', type: 'Xã giao', example: '对不起，我不是故意的。' },
      { hanzi: '没关系', pinyin: 'méi guānxi', hv: 'Một quan hệ', vi: 'Không sao đâu', type: 'Xã giao', example: '没关系，别放在心上。' },
      { hanzi: '不好意思', pinyin: 'bù hǎoyìsi', hv: 'Bất hảo ý tứ', vi: 'Ngại quá / Làm phiền chút', type: 'Khẩu ngữ', example: '不好意思，打扰一下。' },
      { hanzi: '再见', pinyin: 'zàijiàn', hv: 'Tái kiến', vi: 'Tạm biệt / Hẹn gặp lại', type: 'Xã giao', example: '明天见，路上慢走！' },
      { hanzi: '慢走', pinyin: 'màn zǒu', hv: 'Mạn tẩu', vi: 'Đi thong thả (tiễn khách)', type: 'Lịch sự', example: '您慢走，欢迎下次再来！' },
      { hanzi: '朋友', pinyin: 'péngyou', hv: 'Bằng hữu', vi: 'Bạn bè', type: 'Danh từ', example: '我们都是好朋友。' },
      { hanzi: '认识', pinyin: 'rènshi', hv: 'Nhận thức', vi: 'Quen biết / Làm quen', type: 'Động từ', example: '很高兴认识大家！' },
    ],
    extraSentences: [
      { hanzi: '最近工作忙不忙？', pinyin: 'Zuìjìn gōngzuò máng bù máng?', vi: 'Dạo này công việc có bận không?', tag: 'Hỏi han thân mật', breakdown: '最近 (dạo này) + 工作 (công việc) + 忙不忙 (bận k)' },
      { hanzi: '挺忙的，不过每天过得都很充实。', pinyin: 'Tǐng máng de, búguò měitiān guò de dōu hěn chōngshí.', vi: 'Khá là bận, nhưng mỗi ngày đều rất ý nghĩa đủ đầy.', tag: 'Trả lời tự nhiên', breakdown: '挺 (khá) + 充实 (đủ đầy/ý nghĩa)' },
      { hanzi: '今天真是不好意思，给您添麻烦了！', pinyin: 'Jīntiān zhēn shì bù hǎoyìsi, gěi nín tiān máfan le!', vi: 'Hôm nay thật ngại quá, đã làm phiền bác nhiều rồi!', tag: 'Khẩu ngữ bản xứ', breakdown: '添麻烦 (làm phiền/thêm phiền hà)' },
      { hanzi: '您太客气了，这只是举手之劳。', pinyin: 'Nín tài kèqi le, zhè zhǐ shì jǔ shǒu zhī láo.', vi: 'Bác khách sáo quá, đây chỉ là chuyện tiện tay giúp thôi mà.', tag: 'Đối đáp lịch thiệp', breakdown: '举手之劳 (tiện tay giúp đỡ/việc nhỏ nhặt)' },
      { hanzi: '改天有空一起出来喝茶聊天吧！', pinyin: 'Gǎitiān yǒu kòng yìqǐ chūlái hē chá liáotiān ba!', vi: 'Hôm nào rảnh cùng nhau ra ngoài uống trà chuyện trò nhé!', tag: 'Rủ rê giao lưu', breakdown: '改天 (hôm khác) + 聊天 (tán gẫu)' },
    ],
    readingPassage: {
      title: '第一课：初次见面的问候 (Bài 1: Lời Chào Lần Đầu Gặp Gỡ)',
      description: 'Đoạn văn thực tế mô tả một buổi sáng gặp gỡ làm quen tại quán cafe. Hãy luyện đọc mặt chữ Hán thuần (không phụ thuộc Pinyin).',
      hanzi: '今天早上，天气非常好。我在咖啡馆遇到了李明。李明热情地跟我打招呼，说：“早上好！很高兴认识你。”我也笑着对他说：“你好！非常感谢你上次的帮助。”李明摆摆手说：“不客气，大家都是好朋友，互相帮助是应该的。”我们一边喝咖啡，一边愉快地聊天。',
      pinyin: 'Jīntiān zǎoshang, tiānqì fēicháng hǎo. Wǒ zài kāfēiguǎn yù dào le Lǐ Míng. Lǐ Míng rèqíng de gēn wǒ dǎ zhāohu, shuō: "Zǎoshang hǎo! Hěn gāoxìng rènshi nǐ." Wǒ yě xiào zhe duì tā shuō: "Nǐ hǎo! Fēicháng gǎnxiè nǐ shàng cì de bāngzhù." Lǐ Míng bǎibǎi shǒu shuō: "Bú kèqi, dàjiā dōu shì hǎo péngyou, hùxiāng bāngzhù shì yīnggāi de." Wǒmen yìbiān hē kāfēi, yìbiān yúkuài de liáotiān.',
      vi: 'Sáng hôm nay, thời tiết vô cùng đẹp trời. Tôi tình cờ gặp Lý Minh ở quán cà phê. Lý Minh nhiệt tình vẫy chào tôi và nói: "Chào buổi sáng! Rất vui được quen biết bạn." Tôi cũng mỉm cười nói với anh ấy: "Xin chào! Rất cảm ơn sự giúp đỡ của bạn lần trước nhé." Lý Minh xua tay bảo: "Đừng khách sáo mà, mọi người đều là bạn tốt của nhau, giúp đỡ lẫn nhau là điều nên làm." Chúng tôi vừa uống cà phê, vừa trò chuyện vô cùng vui vẻ.',
      tokens: [
        { zh: '今天', py: 'jīntiān', vi: 'hôm nay' },
        { zh: '早上', py: 'zǎoshang', vi: 'buổi sáng' },
        { zh: '天气', py: 'tiānqì', vi: 'thời tiết' },
        { zh: '咖啡馆', py: 'kāfēiguǎn', vi: 'quán cafe' },
        { zh: '打招呼', py: 'dǎ zhāohu', vi: 'chào hỏi' },
        { zh: '感谢', py: 'gǎnxiè', vi: 'cảm ơn' },
        { zh: '帮助', py: 'bāngzhù', vi: 'giúp đỡ' },
        { zh: '摆摆手', py: 'bǎibǎi shǒu', vi: 'xua xua tay' },
        { zh: '互相', py: 'hùxiāng', vi: 'lẫn nhau' },
        { zh: '聊天', py: 'liáotiān', vi: 'tán gẫu, trò chuyện' }
      ],
      questions: [
        {
          q: '我在哪里遇到了李明？(Tôi đã gặp Lý Minh ở đâu?)',
          options: ['在学校 (Ở trường)', '在咖啡馆 (Ở quán cà phê)', '在机场 (Ở sân bay)'],
          correct: 1,
          explain: 'Trong bài có câu: "我在咖啡馆遇到了李明。"'
        },
        {
          q: '李明觉得朋友之间互相帮助怎么样？(Lý Minh nghĩ việc bạn bè giúp đỡ nhau thế nào?)',
          options: ['很麻烦 (Rất phiền hà)', '是应该的 (Là điều nên làm)', '不需要 (Không cần thiết)'],
          correct: 1,
          explain: 'Lý Minh nói: "大家都是好朋友，互相帮助是应该的。"'
        }
      ]
    },
    dialogue: {
      title: 'Chào hỏi & Làm quen lần đầu gặp mặt',
      roleA: 'Người học (A)',
      roleB: 'Người bản xứ Lý Minh (B)',
      lines: [
        { speaker: 'A', zh: '你好！请问你是李明吗？', py: 'Nǐ hǎo! Qǐngwèn nǐ shì Lǐ Míng ma?', vi: 'Xin chào! Xin hỏi bạn có phải Lý Minh không?' },
        { speaker: 'B', zh: '是的，你好！很高兴认识你。', py: 'Shì de, nǐ hǎo! Hěn gāoxìng rènshi nǐ.', vi: 'Đúng vậy, xin chào! Rất vui được quen biết bạn.' },
        { speaker: 'A', zh: '我也很高兴认识你！今天天气真好。', py: 'Wǒ yě hěn gāoxìng rènshi nǐ! Jīntiān tiānqì zhēn hǎo.', vi: 'Tôi cũng rất vui được gặp bạn! Hôm nay thời tiết đẹp thật đấy.' },
        { speaker: 'B', zh: '是啊！我们一起喝杯咖啡，坐下来聊聊吧。', py: 'Shì a! Wǒmen yìqǐ hē bēi kāfēi, zuò xiàlái liáoliao ba.', vi: 'Đúng vậy! Bọn mình cùng đi uống ly cafe, ngồi xuống trò chuyện nhé.' },
        { speaker: 'A', zh: '太好了，非常感谢你的邀请！', py: 'Tài hǎo le, fēicháng gǎnxiè nǐ de yāoqǐng!', vi: 'Tuyệt quá, cảm ơn lời mời của bạn nhé!' },
        { speaker: 'B', zh: '不用客气，走吧！', py: 'Bú yòng kèqi, zǒu ba!', vi: 'Đừng khách sáo, đi nào!' },
      ]
    },
    scrambleList: [
      {
        prompt: 'Câu 1: "Xin chào, rất vui được quen biết bạn!"',
        targetZh: '你好，很高兴认识你！',
        targetPy: 'Nǐ hǎo, hěn gāoxìng rènshi nǐ!',
        words: ['很高兴', '你好，', '认识', '你！']
      },
      {
        prompt: 'Câu 2: "Rất cảm ơn sự giúp đỡ nhiệt tình của bạn."',
        targetZh: '非常感谢你的热情帮助。',
        targetPy: 'Fēicháng gǎnxiè nǐ de rèqíng bāngzhù.',
        words: ['你的', '非常感谢', '热情帮助。']
      },
      {
        prompt: 'Câu 3: "Hôm nay thật ngại quá, đã làm phiền bác rồi."',
        targetZh: '今天给您添麻烦了。',
        targetPy: 'Jīntiān gěi nín tiān máfan le.',
        words: ['给您', '今天', '添麻烦了。']
      }
    ],
    matchingPairs: [
      { id: 'm1', zh: '你好', vi: 'Xin chào' },
      { id: 'm2', zh: '谢谢', vi: 'Cảm ơn' },
      { id: 'm3', zh: '对不起', vi: 'Xin lỗi' },
      { id: 'm4', zh: '没关系', vi: 'Không sao' },
      { id: 'm5', zh: '再见', vi: 'Tạm biệt' },
      { id: 'm6', zh: '朋友', vi: 'Bạn bè' },
    ],
    reflexQuestions: [
      {
        question: 'Khi ai đó giúp bạn nhặt đồ bị rơi và đưa lại cho bạn, phản xạ tự nhiên nhất là:',
        options: ['非常谢谢你！', '对不起！', '你是谁？'],
        correct: 0,
        explain: 'Nói lời cảm ơn chân thành "非常谢谢你！"'
      },
      {
        question: 'Khi vô tình va chạm nhẹ vào người khác trên xe bus, bạn lập tức nói:',
        options: ['不用谢！', '不好意思，对不起！', '没关系！'],
        correct: 1,
        explain: 'Khẩu ngữ lịch sự "不好意思，对不起！"'
      },
      {
        question: 'Tiễn khách ra về đến cửa, lời chúc lịch sự thân mật là:',
        options: ['慢走，路上小心！', '快点走！', '别客气！'],
        correct: 0,
        explain: '慢走 (màn zǒu) = Đi thong thả nhé.'
      }
    ],
    gapFill: {
      question: 'Điền từ: "非常感谢你的____！帮了我大忙。"',
      options: ['帮助 (sự giúp đỡ)', '名字', '再见'],
      correct: 0,
      audioText: '非常感谢你的帮助！',
      explain: '帮助 (Bāngzhù) = Sự giúp đỡ.'
    },
    trueFalseDrill: [
      { audio: '很高兴认识你。', statement: 'Nghĩa câu này là: "Rất vui được quen biết bạn."', isTrue: true },
      { audio: '不用谢，不客气。', statement: 'Nghĩa câu này là: "Xin lỗi, tôi có lỗi."', isTrue: false },
      { audio: '明天见，慢走啊！', statement: 'Nghĩa câu này là: "Mai gặp lại, đi thong thả nhé!"', isTrue: true },
    ]
  },

  // Tuần 2: Giới thiệu bản thân, tên tuổi, quốc tịch, WeChat, công việc
  week2: {
    vocabPool: [
      { hanzi: '叫', pinyin: 'jiào', hv: 'Khiếu', vi: 'Tên là, gọi là', type: 'Động từ', example: '你叫什么名字？' },
      { hanzi: '名字', pinyin: 'míngzi', hv: 'Danh tự', vi: 'Tên, họ tên', type: 'Danh từ', example: '我的名字叫大卫。' },
      { hanzi: '哪国人', pinyin: 'nǎ guó rén', hv: 'Nả quốc nhân', vi: 'Người nước nào', type: 'Nghi vấn', example: '你是哪国人？' },
      { hanzi: '越南', pinyin: 'Yuènán', hv: 'Việt Nam', vi: 'Việt Nam', type: 'Địa danh', example: '我是越南人。' },
      { hanzi: '多大', pinyin: 'duō dà', hv: 'Đa đại', vi: 'Bao nhiêu tuổi', type: 'Nghi vấn', example: '你今年多大了？' },
      { hanzi: '岁', pinyin: 'suì', hv: 'Tuế', vi: 'Tuổi', type: 'Lượng từ', example: '我今年二十五岁。' },
      { hanzi: '工作', pinyin: 'gōngzuò', hv: 'Công tác', vi: 'Công việc / Làm việc', type: 'Danh/Động', example: '你做什么工作？' },
      { hanzi: '工程师', pinyin: 'gōngchéngshī', hv: 'Công trình sư', vi: 'Kỹ sư', type: 'Nghề nghiệp', example: '他是一名软件工程师。' },
      { hanzi: '微信', pinyin: 'Wēixìn', hv: 'Vi tín', vi: 'Mạng WeChat', type: 'Danh từ', example: '可以加个微信吗？' },
      { hanzi: '扫码', pinyin: 'sǎo mǎ', hv: 'Tảo mã', vi: 'Quét mã QR', type: 'Hành động', example: '我扫你的二维码。' },
      { hanzi: '名片', pinyin: 'míngpiàn', hv: 'Danh phiến', vi: 'Danh thiếp', type: 'Danh từ', example: '这是我的名片。' },
      { hanzi: '关照', pinyin: 'guānzhào', hv: 'Quan chiếu', vi: 'Chiếu cố, chỉ giáo', type: 'Lịch sự', example: '初次见面，请多关照！' },
    ],
    extraSentences: [
      { hanzi: '你可以叫我的英文名字或者阿海。', pinyin: 'Nǐ kěyǐ jiào wǒ de yīngwén míngzi huòzhě Ā Hǎi.', vi: 'Bạn có thể gọi tên tiếng Anh hoặc gọi tôi là A Hải.', tag: 'Xưng hô thân mật', breakdown: '英文名字 (tên tiếng Anh) + 或者 (hoặc)' },
      { hanzi: '我在中国生活工作两年了，很适应这里的节奏。', pinyin: 'Wǒ zài Zhōngguó shēnghuó gōngzuò liǎng nián le, hěn shìyìng zhèlǐ de jiézòu.', vi: 'Tôi sống và làm việc ở TQ 2 năm rồi, rất quen với nhịp sống ở đây.', tag: 'Chia sẻ trải nghiệm', breakdown: '适应 (thích ứng) + 节奏 (nhịp điệu)' },
      { hanzi: '我扫您还是您扫我？我发个好友申请过去。', pinyin: 'Wǒ sǎo nín háishi nín sǎo wǒ? Wǒ fā gè hǎoyǒu shēnqǐng guòqù.', vi: 'Tôi quét bác hay bác quét tôi ạ? Tôi gửi lời mời kết bạn qua nhé.', tag: 'Thực chiến kết bạn', breakdown: '好友申请 (lời mời kết bạn)' },
      { hanzi: '改天我请你品尝正宗的越南滴漏咖啡！', pinyin: 'Gǎitiān wǒ qǐng nǐ pǐncháng zhèngzōng de Yuènán dīlòu kāfēi!', vi: 'Hôm nào tôi mời bạn thưởng thức cà phê phin chuẩn vị Việt Nam nhé!', tag: 'Giao lưu văn hóa', breakdown: '品尝 (thưởng thức) + 滴漏咖啡 (cà phê phin)' },
      { hanzi: '你中文说得这么棒，学了很长时间了吧？', pinyin: 'Nǐ zhōngwén shuō de zhème bàng, xué le hěn cháng shíjiān le ba?', vi: 'Tiếng Trung bạn nói giỏi thế này, chắc học lâu lắm rồi nhỉ?', tag: 'Lời khen bản xứ', breakdown: '这么棒 (giỏi thế) + 很长时间 (thời gian dài)' },
    ],
    readingPassage: {
      title: '第二课：自我介绍与新朋友 (Bài 2: Tự Giới Thiệu & Bạn Mới)',
      description: 'Đoạn văn tự giới thiệu bản thân trong môi trường làm việc. Luyện đọc chữ Hán không dùng Pinyin.',
      hanzi: '大家好！我叫大卫，来自越南河内，今年二十八岁。我目前在一家软件公司担任工程师。我很喜欢中国的美食和传统文化。大家平时可以叫我阿海。我性格开朗，喜欢结交新朋友。今天很高兴认识大家，希望以后在工作和生活中互相学习、共同进步。这是我的微信二维码，欢迎大家加我！',
      pinyin: 'Dàjiā hǎo! Wǒ jiào Dàwèi, láizì Yuènán Hénèi, jīnnián èrshíbā suì. Wǒ mùqián zài yì jiā ruǎnjiàn gōngsī dānrèn gōngchéngshī. Wǒ hěn xǐhuan Zhōngguó de měishí hé chuántǒng wénhuà. Dàjiā píngshí kěyǐ jiào wǒ Ā Hǎi. Wǒ xìnggé kāilǎng, xǐhuan jiéjiāo xīn péngyou. Jīntiān hěn gāoxìng rènshi dàjiā, xīwàng yǐhòu zài gōngzuò hé shēnghuó zhōng hùxiāng xuéxí, gòngtóng jìnbù. Zhè shì wǒ de Wēixìn èrwéimǎ, huānyíng dàjiā jiā wǒ!',
      vi: 'Chào mọi người! Tôi tên David, đến từ Hà Nội, Việt Nam, năm nay 28 tuổi. Hiện tại tôi đang làm kỹ sư tại một công ty phần mềm. Tôi rất thích ẩm thực và văn hóa truyền thống Trung Quốc. Mọi người bình thường có thể gọi tôi là A Hải nhé. Tính cách tôi cởi mở, thích kết giao bạn mới. Hôm nay rất vui được làm quen với mọi người, hy vọng sau này trong công việc và cuộc sống chúng ta sẽ cùng học hỏi, cùng nhau tiến bộ. Đây là mã QR WeChat của tôi, hoan nghênh mọi người kết bạn nhé!',
      tokens: [
        { zh: '来自', py: 'láizì', vi: 'đến từ' },
        { zh: '目前', py: 'mùqián', vi: 'hiện tại' },
        { zh: '担任', py: 'dānrèn', vi: 'đảm nhận vị trí' },
        { zh: '传统文化', py: 'chuántǒng wénhuà', vi: 'văn hóa truyền thống' },
        { zh: '性格开朗', py: 'xìnggé kāilǎng', vi: 'tính cách cởi mở' },
        { zh: '共同进步', py: 'gòngtóng jìnbù', vi: 'cùng nhau tiến bộ' },
        { zh: '二维码', py: 'èrwéimǎ', vi: 'mã QR' }
      ],
      questions: [
        {
          q: '大卫今年多大？来自哪里？(David năm nay bao nhiêu tuổi? Đến từ đâu?)',
          options: ['25岁，来自北京', '28岁，来自河内', '30岁，来自上海'],
          correct: 1,
          explain: 'Bài đọc nêu rõ: "来自越南河内，今年二十八岁。"'
        },
        {
          q: '大卫做什么工作？(David làm nghề gì?)',
          options: ['医生 (Bác sĩ)', '老师 (Giáo viên)', '工程师 (Kỹ sư phần mềm)'],
          correct: 2,
          explain: 'Bài đọc viết: "在一家软件公司担任工程师。"'
        }
      ]
    },
    dialogue: {
      title: 'Hỏi tên, quê quán & Xin kết bạn WeChat',
      roleA: 'Học viên (A)',
      roleB: 'Đồng nghiệp mới Tiểu Vương (B)',
      lines: [
        { speaker: 'A', zh: '请问你叫什么名字？在哪儿工作？', py: 'Qǐngwèn nǐ jiào shénme míngzi? Zài nǎr gōngzuò?', vi: 'Xin hỏi bạn tên gì vậy? Đang làm việc ở đâu thế?' },
        { speaker: 'B', zh: '我叫王伟，在一家外贸公司上班。你呢？', py: 'Wǒ jiào Wáng Wěi, zài yì jiā wàimào gōngsī shàngbān. Nǐ ne?', vi: 'Tôi tên Vương Vĩ, làm ở cty ngoại thương. Còn bạn?' },
        { speaker: 'A', zh: '我是越南人，在科技公司做开发。', py: 'Wǒ shì Yuènán rén, zài kējì gōngsī zuò kāifā.', vi: 'Tôi là người VN, làm lập trình viên ở cty công nghệ.' },
        { speaker: 'B', zh: '太好了！你的中文讲得真纯正，在哪儿学的？', py: 'Tài hǎo le! Nǐ de zhōngwén jiǎng de zhēn chúnzhèng, zài nǎr xué de?', vi: 'Hay quá! Tiếng Trung bạn nói chuẩn thật đấy, học ở đâu thế?' },
        { speaker: 'A', zh: '我每天坚持在App上跟着海叔练习口语呢！', py: 'Wǒ měitiān jiānchí zài App shàng gēn zhe Hǎi shū liànxí kǒuyǔ ne!', vi: 'Tôi kiên trì mỗi ngày học khẩu ngữ cùng Chú Hải trên app đấy!' },
        { speaker: 'B', zh: '太棒了，我们加个微信，以后常交流！', py: 'Tài bàng le, wǒmen jiā gè Wēixìn, yǐhòu cháng jiāoliú!', vi: 'Tuyệt quá, add WeChat sau này cùng trao đổi nhé!' },
      ]
    },
    scrambleList: [
      {
        prompt: 'Câu 1: "Chúng ta có thể kết bạn WeChat không?"',
        targetZh: '我们可以加个微信吗？',
        targetPy: 'Wǒmen kěyǐ jiā gè Wēixìn ma?',
        words: ['加个微信', '我们', '可以', '吗？']
      },
      {
        prompt: 'Câu 2: "Tôi là người Việt Nam, đến từ Hà Nội."',
        targetZh: '我是越南人，来自河内。',
        targetPy: 'Wǒ shì Yuènán rén, láizì Hénèi.',
        words: ['我是越南人，', '河内。', '来自']
      },
      {
        prompt: 'Câu 3: "Năm nay bạn bao nhiêu tuổi rồi?"',
        targetZh: '你今年多大了？',
        targetPy: 'Nǐ jīnnián duō dà le?',
        words: ['多大了？', '你今年']
      }
    ],
    matchingPairs: [
      { id: 'm1', zh: '名字', vi: 'Họ tên' },
      { id: 'm2', zh: '越南', vi: 'Việt Nam' },
      { id: 'm3', zh: '工程师', vi: 'Kỹ sư' },
      { id: 'm4', zh: '微信', vi: 'WeChat' },
      { id: 'm5', zh: '扫码', vi: 'Quét mã QR' },
      { id: 'm6', zh: '名片', vi: 'Danh thiếp' },
    ],
    reflexQuestions: [
      {
        question: 'Muốn xin tài khoản WeChat người đối diện một cách tự nhiên:',
        options: ['可以加个微信吗？', '我不喜欢微信', '你是谁？'],
        correct: 0,
        explain: '可以加个微信吗？(Kěyǐ jiā gè Wēixìn ma?)'
      },
      {
        question: 'Khi đối tác đưa danh thiếp cho bạn bằng hai tay, bạn nên:',
        options: ['Đút ngay vào túi', 'Cầm hai tay và nói "谢谢，请多关照！"', 'Từ chối nhận'],
        correct: 1,
        explain: 'Nhận bằng hai tay và nói lời cảm ơn thể hiện sự tôn trọng tuyệt đối.'
      },
      {
        question: 'Khi ai đó khen: "你的中文说得太流利了！", đáp lại khiêm tốn:',
        options: ['哪里哪里，还在学习呢！', '我知道！', '再见！'],
        correct: 0,
        explain: '哪里哪里 (Nǎlǐ nǎlǐ - Đâu có đâu) là cách đáp lời khen chuẩn văn hóa.'
      }
    ],
    gapFill: {
      question: 'Điền từ: "我是越南人，____河内。"',
      options: ['来自 (đến từ)', '去', '买'],
      correct: 0,
      audioText: '我是越南人，来自河内。',
      explain: '来自 (Láizì) = Đến từ.'
    },
    trueFalseDrill: [
      { audio: '你可以叫我阿海。', statement: 'Nghĩa câu này là: "Bạn có thể gọi tôi là A Hải."', isTrue: true },
      { audio: '我不喜欢加微信。', statement: 'Nghĩa câu này là: "Tôi rất thích kết bạn WeChat."', isTrue: false },
      { audio: '初次见面，请多关照！', statement: 'Nghĩa câu này là: "Lần đầu gặp mặt, xin được chỉ giáo nhiều!"', isTrue: true },
    ]
  },

  // Fallback / Mặc định đa năng cho các tuần khác
  defaultTemplate: {
    vocabPool: [
      { hanzi: '多少钱', pinyin: 'duōshao qián', hv: 'Đa thiểu tiền', vi: 'Bao nhiêu tiền', type: 'Nghi vấn', example: '这个一共多少钱？' },
      { hanzi: '便宜', pinyin: 'piányi', hv: 'Tiện nghi', vi: 'Rẻ, hạ giá', type: 'Tính từ', example: '能便宜一点儿吗？' },
      { hanzi: '微信支付', pinyin: 'Wēixìn zhīfù', hv: 'Vi tín chi phó', vi: 'Thanh toán WeChat', type: 'Thanh toán', example: '我用微信支付。' },
      { hanzi: '支付宝', pinyin: 'Zhīfùbǎo', hv: 'Chi phó bảo', vi: 'Ví Alipay', type: 'Thanh toán', example: '支持支付宝扫码。' },
      { hanzi: '打包', pinyin: 'dǎbāo', hv: 'Đả bao', vi: 'Đóng gói mang đi', type: 'Động từ', example: '服务员，请帮我打包。' },
      { hanzi: '买单', pinyin: 'mǎidān', hv: 'Mãi đơn', vi: 'Tính tiền nhà hàng', type: 'Khẩu ngữ', example: '买单，一共多少钱？' },
      { hanzi: '打表', pinyin: 'dǎ biǎo', hv: 'Đả biểu', vi: 'Bật đồng hồ taxi', type: 'Giao thông', example: '师傅，请打表走。' },
      { hanzi: '靠边停', pinyin: 'kào biān tíng', hv: 'Kháo biên đình', vi: 'Tấp vào lề dừng', type: 'Khẩu ngữ', example: '前面路口靠边停就行。' },
      { hanzi: '换乘', pinyin: 'huànchéng', hv: 'Hoán thừa', vi: 'Chuyển tuyến tàu xe', type: 'Di chuyển', example: '在下一站换乘二号线。' },
      { hanzi: '包邮', pinyin: 'bāoyóu', hv: 'Bao bưu', vi: 'Freeship toàn quốc', type: 'Thương mại', example: '全国包邮，当天发货。' },
      { hanzi: '退换货', pinyin: 'tuì huàn huò', hv: 'Thoái hoán hóa', vi: 'Đổi trả hàng', type: 'Dịch vụ', example: '支持七天无理由退换货。' },
      { hanzi: '好评', pinyin: 'hǎopíng', hv: 'Hảo bình', vi: 'Đánh giá 5 sao khen ngợi', type: 'Danh từ', example: '全五星好评，物超所值！' },
    ],
    extraSentences: [
      { hanzi: '这个价格已经非常实惠了，性价比特别高。', pinyin: 'Zhège jiàgé yǐjīng fēicháng shíhuì le, xìngjiàbǐ tèbié gāo.', vi: 'Giá này đã rất hợp lý thực tế rồi, hiệu năng trên giá thành cực kỳ cao.', tag: 'Đánh giá giá trị', breakdown: '实惠 (hợp lý/kinh tế) + 性价比 (P/P p/p tỉ lệ giá trị)' },
      { hanzi: '师傅麻烦您开一下空调，车里有点闷热。', pinyin: 'Shīfu máfan nín kāi yíxià kōngtiáo, chē lǐ yǒudiǎn mēnrè.', vi: 'Bác tài ơi phiền bác bật giúp cái điều hòa, trong xe hơi ngột ngạt nóng nực.', tag: 'Giao tiếp trên xe', breakdown: '闷热 (ngột ngạt nóng nực)' },
      { hanzi: '如果不合适的话，随时可以拿小票过来调换。', pinyin: 'Rúguǒ bù héshì de huà, suíshí kěyǐ ná xiǎopiào guòlái tiáohuàn.', vi: 'Nếu không vừa vặn, bất cứ lúc nào cũng có thể cầm hóa đơn qua đổi lại.', tag: 'Quy định mua sắm', breakdown: '小票 (hóa đơn thanh toán) + 调换 (đổi sang cái khác)' },
      { hanzi: '出门在外一定要注意安全，平安最重要。', pinyin: 'Chūmén zàiwài yídìng yào zhùyì ānquán, píng\'ān zuì zhòngyào.', vi: 'Đi xa ra ngoài nhất định phải chú ý an toàn, bình an là quan trọng nhất.', tag: 'Lời dặn ấm lòng', breakdown: '出门在外 (đi xa ra ngoài) + 平安 (bình an)' },
      { hanzi: '这道菜很符合我的口味，下次还要再来吃！', pinyin: 'Zhè dào cài hěn fúhé wǒ de kǒuwèi, xià cì hái yào zài lái chī!', vi: 'Món này rất hợp khẩu vị của tôi, lần sau nhất định lại ghé ăn tiếp!', tag: 'Cảm nhận ẩm thực', breakdown: '符合口味 (hợp khẩu vị)' },
    ],
    readingPassage: {
      title: '生活实践课：移动支付与便捷出行 (Bài Khóa Thực Hành: Thanh Toán Di Động & Đi Lại Tiện Lợi)',
      description: 'Luyện đọc đoạn văn thực tế về đời sống thanh toán không tiền mặt tại Trung Quốc. Đọc thuần chữ Hán không nhìn Pinyin.',
      hanzi: '在中国生活非常方便。出门只要带一部智能手机，几乎什么事情都能解决。去超市买东西，或者在路边摊买水果，都可以用微信或者支付宝扫码付款。坐出租车、坐地铁，甚至租一辆共享单车，扫一扫二维码就能轻松搞定。不仅不需要带现金，而且找零钱也很省事。这种无现金的智慧生活，让很多外国人感到非常惊讶和赞叹。',
      pinyin: 'Zài Zhōngguó shēnghuó fēicháng fāngbiàn. Chūmén zhǐ yào dài yí bù zhìnéng shǒujī, jīhū shénme shìqing dōu néng jiějué. Qù chāoshì mǎi dōngxi, huòzhě zài lùbiāntān mǎi shuǐguǒ, dōu kěyǐ yòng Wēixìn huòzhě Zhīfùbǎo sǎo mǎ fùkuǎn. Zuò chūzūchē, zuò dìtiě, shènzhì zū yí liàng gòngxiǎng dānchē, sǎo yì sǎo èrwéimǎ jiù néng qīngsōng gǎodìng. Bùjǐn bù xūyào dài xiànjīn, érqiě zhǎo língqián yě hěn shěngshì. Zhè zhǒng wú xiànjīn de zhìhuì shēnghuó, ràng hěn duō wàiguórén gǎndào fēicháng jīngyà hé zàntàn.',
      vi: 'Cuộc sống ở Trung Quốc vô cùng thuận tiện. Ra khỏi nhà chỉ cần mang theo một chiếc điện thoại thông minh, hầu như mọi việc đều có thể giải quyết được. Đi siêu thị mua sắm, hoặc mua hoa quả ở sạp ven đường, đều có thể dùng WeChat hay Alipay quét mã thanh toán. Đi taxi, đi tàu điện ngầm, thậm chí thuê một chiếc xe đạp công nghệ, chỉ cần quét mã QR một cái là xong xuôi dễ dàng. Không những không cần mang tiền mặt, mà việc thối tiền lẻ cũng rất đỡ phiền toái. Cuộc sống thông minh không tiền mặt này khiến rất nhiều người nước ngoài cảm thấy vô cùng kinh ngạc và thán phục.',
      tokens: [
        { zh: '智能手机', py: 'zhìnéng shǒujī', vi: 'điện thoại thông minh' },
        { zh: '几乎', py: 'jīhū', vi: 'hầu như' },
        { zh: '路边摊', py: 'lùbiāntān', vi: 'quầy hàng ven đường' },
        { zh: '扫码付款', py: 'sǎo mǎ fùkuǎn', vi: 'quét mã trả tiền' },
        { zh: '共享单车', py: 'gòngxiǎng dānchē', vi: 'xe đạp chia sẻ' },
        { zh: '搞定', py: 'gǎodìng', vi: 'xong xuôi, giải quyết êm đẹp' },
        { zh: '找零钱', py: 'zhǎo língqián', vi: 'thối tiền thừa' },
        { zh: '无现金', py: 'wú xiànjīn', vi: 'không tiền mặt' }
      ],
      questions: [
        {
          q: '在中国出门最重要的是带什么？(Ở Trung Quốc ra ngoài quan trọng nhất mang theo cái gì?)',
          options: ['大量现金 (Rất nhiều tiền mặt)', '一部智能手机 (Một chiếc smartphone)', '很多银行卡 (Nhiều thẻ ngân hàng)'],
          correct: 1,
          explain: 'Bài đọc viết: "出门只要带一部智能手机，几乎什么事情都能解决。"'
        },
        {
          q: '租共享单车怎么解锁？(Thuê xe đạp chia sẻ mở khóa thế nào?)',
          options: ['用钥匙 (Dùng chìa khóa)', '扫一扫二维码 (Quét mã QR)', '找人帮忙 (Nhờ người giúp)'],
          correct: 1,
          explain: 'Bài đọc nêu rõ: "扫一扫二维码就能轻松搞定。"'
        }
      ]
    },
    dialogue: {
      title: 'Trải nghiệm thanh toán quét mã & đi lại thực tế',
      roleA: 'Người mua hàng (A)',
      roleB: 'Người bán hàng (B)',
      lines: [
        { speaker: 'A', zh: '老板，这袋苹果一共多少钱？能便宜点吗？', py: 'Lǎobǎn, zhè dài píngguǒ yígòng duōshao qián? Néng piányi diǎn ma?', vi: 'Ông chủ ơi, túi táo này bao nhiêu tiền? Bớt chút được không?' },
        { speaker: 'B', zh: '一共二十五块，已经是最实惠的价格了！', py: 'Yígòng èrshíwǔ kuài, yǐjīng shì zuì shíhuì de jiàgé le!', vi: 'Tổng 25 tệ, đã là giá hữu nghị sát gốc nhất rồi!' },
        { speaker: 'A', zh: '好的，那我用微信扫您的收款码。', py: 'Hǎo de, nà wǒ yòng Wēixìn sǎo nín de shōukuǎnmǎ.', vi: 'Vâng, thế cháu dùng WeChat quét mã nhận tiền của bác nhé.' },
        { speaker: 'B', zh: '好的，码贴在柜台上，扫好了告诉我一声。', py: 'Hǎo de, mǎ tiē zài guìtái shàng, sǎo hǎo le gàosu wǒ yì shēng.', vi: 'Được rồi, mã dán trên quầy, quét xong báo bác một tiếng nhé.' },
        { speaker: 'A', zh: '钱已经付过去了，您听一下到账播报。', py: 'Qián yǐjīng fù guòqù le, nín tīng yíxià dàozhàng bōbào.', vi: 'Tiền đã trả qua rồi ạ, bác nghe loa thông báo nhận tiền nhé.' },
        { speaker: 'B', zh: '微信收款二十五元，收到了！慢走啊！', py: 'Wēixìn shōukuǎn èrshíwǔ yuán, shōudào le! Màn zǒu a!', vi: 'Loa: WeChat nhận 25 tệ, nhận được rồi! Đi thong thả nhé!' },
      ]
    },
    scrambleList: [
      {
        prompt: 'Câu 1: "Cái này tổng cộng bao nhiêu tiền, rẻ hơn chút được không?"',
        targetZh: '这个一共多少钱，能便宜点吗？',
        targetPy: 'Zhège yígòng duōshao qián, néng piányi diǎn ma?',
        words: ['能便宜点吗？', '这个一共多少钱，']
      },
      {
        prompt: 'Câu 2: "Tiền đã chuyển qua rồi, bác kiểm tra nhận tiền nhé."',
        targetZh: '钱已经付过去了，您查收一下。',
        targetPy: 'Qián yǐjīng fù guòqù le, nín cháshōu yíxià.',
        words: ['您查收一下。', '钱已经付过去了，']
      },
      {
        prompt: 'Câu 3: "Bác tài ơi, ngã tư phía trước rẽ phải rồi tấp lề dừng nhé."',
        targetZh: '前面路口右拐靠边停。',
        targetPy: 'Qiánmian lùkǒu yòu guǎi kào biān tíng.',
        words: ['前面路口', '靠边停。', '右拐']
      }
    ],
    matchingPairs: [
      { id: 'm1', zh: '多少钱', vi: 'Bao nhiêu tiền' },
      { id: 'm2', zh: '便宜', vi: 'Rẻ' },
      { id: 'm3', zh: '买单', vi: 'Tính tiền' },
      { id: 'm4', zh: '打表', vi: 'Bật đồng hồ taxi' },
      { id: 'm5', zh: '包邮', vi: 'Freeship' },
      { id: 'm6', zh: '退款', vi: 'Hoàn tiền' },
    ],
    reflexQuestions: [
      {
        question: 'Khi muốn thanh toán quét mã QR ở quầy thu ngân:',
        options: ['我扫您的二维码 (Tôi quét mã của bạn)', '我不要买', '这是什么'],
        correct: 0,
        explain: '我扫您的二维码 (Wǒ sǎo nín de èrwéimǎ).'
      },
      {
        question: 'Muốn dặn tài xế taxi bấm đồng hồ tính tiền:',
        options: ['师傅，请打表走 (Bác tài, xin bật đồng hồ)', '开快点', '不要停'],
        correct: 0,
        explain: '打表 (Dǎ biǎo) = Bật đồng hồ cước xe taxi.'
      },
      {
        question: 'Khi ăn thừa đồ ăn ở nhà hàng và muốn mang về:',
        options: ['服务员，请帮我打包 (Làm ơn gói hộp mang về)', '我全吃了', '买单'],
        correct: 0,
        explain: '打包 (Dǎbāo) = Gói đồ ăn mang về.'
      }
    ],
    gapFill: {
      question: 'Điền từ: "全场商品满99元全国____！"',
      options: ['包邮 (Freeship)', '退款', '不买'],
      correct: 0,
      audioText: '全场商品满99元全国包邮。',
      explain: '包邮 (Bāoyóu) = Miễn phí tiền ship.'
    },
    trueFalseDrill: [
      { audio: '服务员，买单！', statement: 'Nghĩa câu này là: "Phục vụ ơi, tính tiền!"', isTrue: true },
      { audio: '这个价格太贵了，不能便宜。', statement: 'Nghĩa câu này là: "Cái này rẻ lắm, bớt thêm đi."', isTrue: false },
      { audio: '师傅，前面路口右拐靠边停。', statement: 'Nghĩa câu này là: "Bác tài, ngã tư phía trước rẽ phải tấp lề nhé."', isTrue: true },
    ]
  }
};

/**
 * Trích xuất và bổ sung toàn diện cho bài học từng ngày
 */
export function enrichDayData(rawDay) {
  const weekNum = rawDay.week || Math.ceil(rawDay.day / 7);
  let template = TOPIC_EXTENSIONS.week1;
  if (weekNum === 1) template = TOPIC_EXTENSIONS.week1;
  else if (weekNum === 2) template = TOPIC_EXTENSIONS.week2;
  else template = TOPIC_EXTENSIONS.defaultTemplate;

  // 1. Enrich Vocabularies: 10 - 12 từ vựng
  const vocabularies = [...template.vocabPool];

  // 2. Enrich Sentences: Gộp câu cốt lõi + 5 câu mở rộng thực tế = 8-10 câu
  const coreSentences = rawDay.sentences.map((s, idx) => ({
    ...s,
    tag: idx === 0 ? 'Mẫu câu cốt lõi' : idx === 1 ? 'Phản xạ thực tế' : 'Cách nói tự nhiên'
  }));
  const fullSentences = [...coreSentences, ...template.extraSentences];

  // 3. Dialogue thực tế
  const dialogue = template.dialogue;

  // 4. Bài khóa luyện đọc thuần chữ Hán (KHÔNG HIỆN PINYIN MẶC ĐỊNH)
  const readingPassage = template.readingPassage;

  // 5. Scramble Games (3 câu)
  const scrambleList = template.scrambleList;

  // 6. Matching Pairs (6 cặp từ)
  const matchingPairs = template.matchingPairs;

  // 7. Multi Reflex Questions (3 câu phản xạ)
  const reflexQuestions = template.reflexQuestions;

  // 8. GapFill Quiz
  const gapFill = template.gapFill;

  // 9. True/False Drills
  const trueFalseDrill = template.trueFalseDrill;

  return {
    ...rawDay,
    vocabularies,
    sentences: fullSentences,
    dialogue,
    readingPassage,
    scrambleList,
    matchingPairs,
    reflexQuestions,
    gapFill,
    trueFalseDrill,
  };
}
