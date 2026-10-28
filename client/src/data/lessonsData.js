export const LESSONS_DATA = [
  {
    id: 'hsk1-lesson1',
    level: 'HSK 1',
    title: 'Bài 1: Chào hỏi & Giao tiếp cơ bản (问候与基础交流)',
    description: 'Học cách chào hỏi, cảm ơn, xin lỗi và tự giới thiệu bản thân.',
    reading: {
      title: '你好，很高兴认识你',
      tokens: [
        { hanzi: '大卫：', isSpeaker: true },
        { hanzi: '你好', pinyin: 'nǐ hǎo', vi: 'Xin chào', hv: 'Nhĩ Hảo', sample: '你好！我是李明。' },
        { hanzi: '！我', pinyin: 'wǒ', vi: 'Tôi', hv: 'Ngã', sample: '我是学生。' },
        { hanzi: '是', pinyin: 'shì', vi: 'Là', hv: 'Thị', sample: '他是老师。' },
        { hanzi: '大卫', pinyin: 'Dàwèi', vi: 'David', hv: 'Đại Vệ', sample: '大卫是美国人。' },
        { hanzi: '，你', pinyin: 'nǐ', vi: 'Bạn', hv: 'Nhĩ', sample: '你好！' },
        { hanzi: '叫', pinyin: 'jiào', vi: 'Tên là', hv: 'Khiếu', sample: '我叫王兰。' },
        { hanzi: '什么', pinyin: 'shénme', vi: 'Gì', hv: 'Thập Ma', sample: '这是什么？' },
        { hanzi: '名字', pinyin: 'míngzi', vi: 'Tên', hv: 'Danh Tự', sample: '你的名字。' },
        { hanzi: '？' },
        { hanzi: '王兰：', isSpeaker: true },
        { hanzi: '你好', pinyin: 'nǐ hǎo', vi: 'Xin chào', hv: 'Nhĩ Hảo' },
        { hanzi: '，我', pinyin: 'wǒ', vi: 'Tôi', hv: 'Ngã' },
        { hanzi: '叫', pinyin: 'jiào', vi: 'Tên là', hv: 'Khiếu' },
        { hanzi: '王兰', pinyin: 'Wáng Lán', vi: 'Vương Lan', hv: 'Vương Lan' },
        { hanzi: '。很', pinyin: 'hěn', vi: 'Rất', hv: 'Hẩn' },
        { hanzi: '高兴', pinyin: 'gāoxìng', vi: 'Vui vẻ', hv: 'Cao Hưng' },
        { hanzi: '认识', pinyin: 'rènshi', vi: 'Quen biết', hv: 'Nhận Thức' },
        { hanzi: '你', pinyin: 'nǐ', vi: 'Bạn', hv: 'Nhĩ' },
        { hanzi: '！' },
      ],
      translationVi: 'David: Xin chào, tôi là David! Bạn tên là gì?\nVương Lan: Chào bạn, tôi tên là Vương Lan. Rất vui được làm quen với bạn!',
      quiz: {
        question: 'Câu hỏi: Trong đoạn hội thoại, ai là người bắt chuyện trước?',
        options: [
          { text: 'A. 王兰 (Vương Lan)', correct: false },
          { text: 'B. 大卫 (David)', correct: true },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, hanzi: '你好，请问你叫什么名字？', pinyin: 'Nǐ hǎo, qǐngwèn nǐ jiào shénme míngzì?', vi: 'Xin chào, bạn tên là gì?' },
        { id: 1, hanzi: '我叫王兰，我是中国人。', pinyin: 'Wǒ jiào Wáng Lán, wǒ shì Zhōngguó rén.', vi: 'Tôi là Vương Lan, người Trung Quốc.' },
        { id: 2, hanzi: '很高兴认识你！', pinyin: 'Hěn gāoxìng rènshi nǐ!', vi: 'Rất vui được quen biết bạn!' },
      ],
      quiz: {
        sentencePrefix: '很高兴',
        missingWord: '认识',
        sentenceSuffix: '你！',
      },
    },
    speaking: {
      targetHanzi: '很高兴认识你',
      targetPinyin: 'Hěn gāoxìng rènshi nǐ',
      vietnameseMeaning: 'Rất vui được làm quen với bạn',
      sentences: [
        { hanzi: '你好！很高兴认识你。', pinyin: 'Nǐ hǎo! Hěn gāoxìng rènshi nǐ.', vi: 'Xin chào! Rất vui được làm quen với bạn.' },
        { hanzi: '请问你叫什么名字？', pinyin: 'Qǐngwèn nǐ jiào shénme míngzì?', vi: 'Xin hỏi bạn tên là gì?' },
        { hanzi: '我叫王兰，我是中国人。', pinyin: 'Wǒ jiào Wáng Lán, wǒ shì Zhōngguó rén.', vi: 'Tôi là Vương Lan, tôi là người Trung Quốc.' },
        { hanzi: '认识你我也很高兴，谢谢你！', pinyin: 'Rènshi nǐ wǒ yě hěn gāoxìng, xièxie nǐ!', vi: 'Làm quen với bạn tôi cũng rất vui, cảm ơn bạn!' },
        { hanzi: '明天见，祝你今天过得愉快！', pinyin: 'Míngtiān jiàn, zhù nǐ jīntiān guò de yúkuài!', vi: 'Ngày mai gặp lại, chúc bạn một ngày vui vẻ!' },
      ],
    },
    writing: {
      targetChar: '中',
      charPinyin: 'zhōng',
      charMeaning: 'Trung (trong Trung Quốc, Trung tâm)',
      compositionTask: {
        prompt: 'Dịch câu: "Tôi là người Việt Nam"',
        expectedKeywords: ['我', '是', '越南人'],
        sampleSolution: '我是越南人 (Wǒ shì Yuènán rén)',
      },
      characters: [
        {
          targetChar: '中',
          charPinyin: 'zhōng',
          charMeaning: 'Trung (Trung Quốc, Trung tâm)',
          compositionPrompt: 'Dịch câu: "Tôi là người Việt Nam"',
          expectedKeywords: ['我', '是', '越南人'],
          sampleSolution: '我是越南人 (Wǒ shì Yuènán rén)',
        },
        {
          targetChar: '国',
          charPinyin: 'guó',
          charMeaning: 'Quốc (Quốc gia, Đất nước)',
          compositionPrompt: 'Dịch câu: "Trung Quốc là nước lớn"',
          expectedKeywords: ['中国'],
          sampleSolution: '中国是一个大国',
        },
        {
          targetChar: '人',
          charPinyin: 'rén',
          charMeaning: 'Nhân (Con người, Người)',
          compositionPrompt: 'Dịch câu: "Anh ấy là người tốt"',
          expectedKeywords: ['好人'],
          sampleSolution: '他是一个好人',
        },
        {
          targetChar: '好',
          charPinyin: 'hǎo',
          charMeaning: 'Hảo (Tốt, Chào hỏi)',
          compositionPrompt: 'Dịch câu: "Chào thầy giáo!"',
          expectedKeywords: ['老师好'],
          sampleSolution: '老师好！',
        },
        {
          targetChar: '你',
          charPinyin: 'nǐ',
          charMeaning: 'Nhĩ (Bạn, Anh, Chị)',
          compositionPrompt: 'Dịch câu: "Bạn tên là gì?"',
          expectedKeywords: ['你', '名字'],
          sampleSolution: '你叫什么名字？',
        },
      ],
    },
    matchingWords: [
      { id: 'w1', hanzi: '你好', pinyin: 'nǐ hǎo', vi: 'Xin chào' },
      { id: 'w2', hanzi: '谢谢', pinyin: 'xièxie', vi: 'Cảm ơn' },
      { id: 'w3', hanzi: '再见', pinyin: 'zàijiàn', vi: 'Tạm biệt' },
      { id: 'w4', hanzi: '朋友', pinyin: 'péngyou', vi: 'Bạn bè' },
      { id: 'w5', hanzi: '高兴', pinyin: 'gāoxìng', vi: 'Vui vẻ' },
      { id: 'w6', hanzi: '中国', pinyin: 'Zhōngguó', vi: 'Trung Quốc' },
    ],
  },
  {
    id: 'hsk1-lesson2',
    level: 'HSK 1',
    title: 'Bài 2: Gia đình & Người thân (家庭与家人)',
    description: 'Giới thiệu các thành viên trong gia đình và nghề nghiệp.',
    reading: {
      title: '我家有四口人 (Gia đình tôi có 4 người)',
      tokens: [
        { hanzi: '大卫：', isSpeaker: true },
        { hanzi: '我家', pinyin: 'wǒ jiā', vi: 'Nhà tôi', hv: 'Ngã Gia' },
        { hanzi: '有', pinyin: 'yǒu', vi: 'Có', hv: 'Hữu' },
        { hanzi: '四口人', pinyin: 'sì kǒu rén', vi: 'Bốn người', hv: 'Tứ Khẩu Nhân' },
        { hanzi: '：爸爸', pinyin: 'bàba', vi: 'Bố', hv: 'Bà Ba' },
        { hanzi: '、妈妈', pinyin: 'māma', vi: 'Mẹ', hv: 'Ma Ma' },
        { hanzi: '、哥哥', pinyin: 'gēge', vi: 'Anh trai', hv: 'Ca Ca' },
        { hanzi: '和我', pinyin: 'hé wǒ', vi: 'Và tôi', hv: 'Hòa Ngã' },
        { hanzi: '。我爱', pinyin: 'wǒ ài', vi: 'Tôi yêu', hv: 'Ngã Ái' },
        { hanzi: '我的家', pinyin: 'wǒ de jiā', vi: 'Nhà của tôi', hv: 'Ngã Đích Gia' },
        { hanzi: '！' },
      ],
      translationVi: 'David: Nhà tôi có 4 người: Bố, mẹ, anh trai và tôi. Tôi rất yêu gia đình mình!',
      quiz: {
        question: 'Gia đình David có bao nhiêu thành viên?',
        options: [
          { text: 'A. 三口人 (3 người)', correct: false },
          { text: 'B. 四口人 (4 người)', correct: true },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, hanzi: '你家有几口人？', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', vi: 'Nhà bạn có mấy người?' },
        { id: 1, hanzi: '我家有四口人。', pinyin: 'Wǒ jiā yǒu sì kǒu rén.', vi: 'Nhà tôi có 4 người.' },
      ],
      quiz: {
        sentencePrefix: '我家有',
        missingWord: '四口人',
        sentenceSuffix: '。',
      },
    },
    speaking: {
      targetHanzi: '我很爱我的家人',
      targetPinyin: 'Wǒ hěn ài wǒ de jiārén',
      vietnameseMeaning: 'Tôi rất yêu gia đình mình',
    },
    writing: {
      targetChar: '家',
      charPinyin: 'jiā',
      charMeaning: 'Gia (trong Gia đình)',
      compositionTask: {
        prompt: 'Dịch câu: "Bố tôi là bác sĩ"',
        expectedKeywords: ['我爸爸', '是', '医生'],
        sampleSolution: '我爸爸是医生 (Wǒ bàba shì yīshēng)',
      },
    },
    matchingWords: [
      { id: 'w41', hanzi: '爸爸', pinyin: 'bàba', vi: 'Bố' },
      { id: 'w42', hanzi: '妈妈', pinyin: 'māma', vi: 'Mẹ' },
      { id: 'w43', hanzi: '哥哥', pinyin: 'gēge', vi: 'Anh trai' },
      { id: 'w44', hanzi: '医生', pinyin: 'yīshēng', vi: 'Bác sĩ' },
    ],
  },
  {
    id: 'hsk1-lesson3',
    level: 'HSK 1',
    title: 'Bài 3: Thời gian & Sinh hoạt (时间与日常生活)',
    description: 'Hỏi giờ giấc và các hoạt động sinh hoạt thường ngày.',
    reading: {
      title: '现在几点了？(Bây giờ là mấy giờ?)',
      tokens: [
        { hanzi: '王兰：', isSpeaker: true },
        { hanzi: '现在', pinyin: 'xiànzài', vi: 'Bây giờ', hv: 'Hiện Tại' },
        { hanzi: '几点', pinyin: 'jǐ diǎn', vi: 'Mấy giờ', hv: 'Kỷ Điểm' },
        { hanzi: '了？' },
        { hanzi: '大卫：', isSpeaker: true },
        { hanzi: '现在是', pinyin: 'xiànzài shì', vi: 'Bây giờ là', hv: 'Hiện Tại Thị' },
        { hanzi: '早上', pinyin: 'zǎoshang', vi: 'Buổi sáng', hv: 'Tảo Thượng' },
        { hanzi: '八点半', pinyin: 'bā diǎn bàn', vi: '8 giờ rưỡi', hv: 'Bát Điểm Bán' },
        { hanzi: '。' },
      ],
      translationVi: 'Vương Lan: Bây giờ là mấy giờ rồi?\nDavid: Bây giờ là 8 giờ rưỡi sáng.',
      quiz: {
        question: 'Bây giờ là mấy giờ?',
        options: [
          { text: 'A. 八点半 (8 giờ rưỡi)', correct: true },
          { text: 'B. 九点 (9 giờ)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, hanzi: '请问，现在几点了？', pinyin: 'Qǐngwèn, xiànzài jǐ diǎn le?', vi: 'Xin hỏi bây giờ mấy giờ?' },
        { id: 1, hanzi: '现在八点半。', pinyin: 'Xiànzài bā diǎn bàn.', vi: 'Bây giờ 8 giờ rưỡi.' },
      ],
      quiz: {
        sentencePrefix: '现在是早上',
        missingWord: '八点半',
        sentenceSuffix: '。',
      },
    },
    speaking: {
      targetHanzi: '现在是早上八点半',
      targetPinyin: 'Xiànzài shì zǎoshang bā diǎn bàn',
      vietnameseMeaning: 'Bây giờ là 8 giờ rưỡi sáng',
    },
    writing: {
      targetChar: '日',
      charPinyin: 'rì',
      charMeaning: 'Nhật (trong Ngày, Mặt trời)',
      compositionTask: {
        prompt: 'Dịch câu: "Hôm nay là ngày 1 tháng 1"',
        expectedKeywords: ['今天', '一月', '一日'],
        sampleSolution: '今天是一月一日 (Jīntiān shì yī yuè yī rì)',
      },
    },
    matchingWords: [
      { id: 'w51', hanzi: '现在', pinyin: 'xiànzài', vi: 'Bây giờ' },
      { id: 'w52', hanzi: '早上', pinyin: 'zǎoshang', vi: 'Buổi sáng' },
      { id: 'w53', hanzi: '晚上', pinyin: 'wǎnshang', vi: 'Buổi tối' },
      { id: 'w54', hanzi: '今天', pinyin: 'jīntiān', vi: 'Hôm nay' },
    ],
  },
  {
    id: 'hsk2-lesson4',
    level: 'HSK 2',
    title: 'Bài 4: Mua sắm & Ăn uống (购物与饮食)',
    description: 'Hỏi giá tiền và mặc cả khi mua đồ.',
    reading: {
      title: '在水果店买苹果 (Mua táo ở tiệm hoa quả)',
      tokens: [
        { hanzi: '顾客：', isSpeaker: true },
        { hanzi: '老板', pinyin: 'lǎobǎn', vi: 'Ông chủ', hv: 'Lão Bản' },
        { hanzi: '，苹果', pinyin: 'píngguǒ', vi: 'Quả táo', hv: 'Bình Quả' },
        { hanzi: '多少钱', pinyin: 'duōshǎo qián', vi: 'Bao nhiêu tiền', hv: 'Đa Thiểu Tiền' },
        { hanzi: '一斤？' },
        { hanzi: '老板：', isSpeaker: true },
        { hanzi: '五块钱', pinyin: 'wǔ kuài qián', vi: '5 tệ', hv: 'Ngũ Khối Tiền' },
        { hanzi: '一斤。' },
      ],
      translationVi: 'Khách hàng: Ông chủ, táo bao nhiêu tiền một cân?\nChủ tiệm: 5 tệ một cân!',
      quiz: {
        question: 'Táo bao nhiêu tiền một cân?',
        options: [
          { text: 'A. 五块钱 (5 tệ)', correct: true },
          { text: 'B. 十块钱 (10 tệ)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, hanzi: '老板，请问这个多少钱？', pinyin: 'Lǎobǎn, qǐngwèn zhège duōshǎo qián?', vi: 'Ông chủ, cái này bao nhiêu tiền?' },
        { id: 1, hanzi: '五块钱一斤。', pinyin: 'Wǔ kuài qián yī jīn.', vi: '5 tệ một cân.' },
      ],
      quiz: {
        sentencePrefix: '太贵了，',
        missingWord: '便宜',
        sentenceSuffix: '一点吧。',
      },
    },
    speaking: {
      targetHanzi: '这个多少钱',
      targetPinyin: 'Zhège duōshǎo qián',
      vietnameseMeaning: 'Cái này bao nhiêu tiền?',
    },
    writing: {
      targetChar: '学',
      charPinyin: 'xué',
      charMeaning: 'Học (trong Học tập)',
      compositionTask: {
        prompt: 'Dịch câu: "Tôi muốn mua một ly cà phê"',
        expectedKeywords: ['我想', '买', '咖啡'],
        sampleSolution: '我想买一杯咖啡 (Wǒ xiǎng mǎi yībēi kāfēi)',
      },
    },
    matchingWords: [
      { id: 'w21', hanzi: '多少钱', pinyin: 'duōshǎo qián', vi: 'Bao nhiêu tiền' },
      { id: 'w22', hanzi: '便宜', pinyin: 'piányi', vi: 'Rẻ' },
      { id: 'w23', hanzi: '贵', pinyin: 'guì', vi: 'Đắt' },
      { id: 'w24', hanzi: '苹果', pinyin: 'píngguǒ', vi: 'Quả táo' },
    ],
  },
  {
    id: 'hsk2-lesson5',
    level: 'HSK 2',
    title: 'Bài 5: Nhà hàng & Thưởng thức ẩm thực (餐馆点餐与美食)',
    description: 'Kỹ năng gọi món ăn, đồ uống và yêu cầu hóa đơn.',
    reading: {
      title: '在餐馆吃中国菜 (Ăn món Trung Quốc tại quán)',
      tokens: [
        { hanzi: '服务员：', isSpeaker: true },
        { hanzi: '欢迎光临', pinyin: 'huānyíng guānglín', vi: 'Kính chào quý khách', hv: 'Hoan Nghênh Quang Lâm' },
        { hanzi: '！这是', pinyin: 'zhè shì', vi: 'Đây là', hv: 'Giá Thị' },
        { hanzi: '菜单', pinyin: 'càidān', vi: 'Thực đơn', hv: 'Thái Đơn' },
        { hanzi: '。' },
      ],
      translationVi: 'Phục vụ: Kính chào quý khách! Đây là cuốn thực đơn của nhà hàng.',
      quiz: {
        question: 'Nhân viên phục vụ đưa cho khách vật gì?',
        options: [
          { text: 'A. 菜单 (Thực đơn)', correct: true },
          { text: 'B. 钥匙 (Chìa khóa)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, hanzi: '我们要一份烤鸭和两碗米饭。', pinyin: 'Wǒmen yào yī fèn kǎoyā hé liǎng wǎn mǐfàn.', vi: 'Chúng tôi muốn 1 phần vịt quay và 2 bát cơm.' },
      ],
      quiz: {
        sentencePrefix: '我们要',
        missingWord: '一份',
        sentenceSuffix: '北京烤鸭。',
      },
    },
    speaking: {
      targetHanzi: '服务员我想点菜',
      targetPinyin: 'Fúwùyuán wǒ xiǎng diǎncài',
      vietnameseMeaning: 'Phục vụ ơi tôi muốn gọi món',
    },
    writing: {
      targetChar: '食',
      charPinyin: 'shí',
      charMeaning: 'Thực (trong Ẩm thực)',
      compositionTask: {
        prompt: 'Dịch câu: "Món ăn Trung Quốc rất ngon"',
        expectedKeywords: ['中国菜', '很好吃'],
        sampleSolution: '中国菜很好吃 (Zhōngguó cài hěn hǎochī)',
      },
    },
    matchingWords: [
      { id: 'w61', hanzi: '菜单', pinyin: 'càidān', vi: 'Thực đơn' },
      { id: 'w62', hanzi: '服务员', pinyin: 'fúwùyuán', vi: 'Phục vụ' },
      { id: 'w63', hanzi: '米饭', pinyin: 'mǐfàn', vi: 'Cơm' },
      { id: 'w64', hanzi: '好吃', pinyin: 'hǎochī', vi: 'Ngon' },
    ],
  },
  {
    id: 'hsk2-lesson6',
    level: 'HSK 2',
    title: 'Bài 6: Thời tiết & Bốn mùa (天气与四季)',
    description: 'Miêu tả khí hậu, mưa nắng và bốn mùa trong năm.',
    reading: {
      title: '北京的秋天 (Mùa thu ở Bắc Kinh)',
      tokens: [
        { hanzi: '秋天', pinyin: 'qiūtiān', vi: 'Mùa thu', hv: 'Thu Thiên' },
        { hanzi: '天气', pinyin: 'tiānqì', vi: 'Thời tiết', hv: 'Thiên Khí' },
        { hanzi: '最好', pinyin: 'zuì hǎo', vi: 'Tốt nhất', hv: 'Tối Hảo' },
        { hanzi: '，不冷', pinyin: 'bù lěng', vi: 'Không lạnh', hv: 'Bất Lãnh' },
        { hanzi: '也不热', pinyin: 'yě bù rè', vi: 'Cũng không nóng', hv: 'Dã Bất Nhiệt' },
        { hanzi: '。' },
      ],
      translationVi: 'Mùa thu thời tiết là đẹp nhất, không lạnh cũng chẳng nóng.',
      quiz: {
        question: 'Thời tiết mùa thu được miêu tả như thế nào?',
        options: [
          { text: 'A. 不冷也不热 (Không lạnh cũng không nóng)', correct: true },
          { text: 'B. 非常冷 (Rất lạnh)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, hanzi: '明天是晴天，不冷也不热。', pinyin: 'Míngtiān shì qíngtiān, bù lěng yě bù rè.', vi: 'Ngày mai trời nắng, không lạnh không nóng.' },
      ],
      quiz: {
        sentencePrefix: '明天是',
        missingWord: '晴天',
        sentenceSuffix: '。',
      },
    },
    speaking: {
      targetHanzi: '今天天气非常晴朗',
      targetPinyin: 'Jīntiān tiānqì fēicháng qínglǎng',
      vietnameseMeaning: 'Hôm nay trời rất nắng đẹp',
    },
    writing: {
      targetChar: '雨',
      charPinyin: 'yǔ',
      charMeaning: 'Vũ (Mưa)',
      compositionTask: {
        prompt: 'Dịch câu: "Bên ngoài đang mưa to"',
        expectedKeywords: ['外面', '下', '大雨'],
        sampleSolution: '外面在下大雨 (Wàimiàn zài xià dàyǔ)',
      },
    },
    matchingWords: [
      { id: 'w71', hanzi: '天气', pinyin: 'tiānqì', vi: 'Thời tiết' },
      { id: 'w72', hanzi: '晴天', pinyin: 'qíngtiān', vi: 'Trời nắng' },
      { id: 'w73', hanzi: '下雨', pinyin: 'xiàyǔ', vi: 'Trời mưa' },
      { id: 'w74', hanzi: '很冷', pinyin: 'hěn lěng', vi: 'Rất lạnh' },
    ],
  },
  {
    id: 'hsk3-lesson7',
    level: 'HSK 3',
    title: 'Bài 7: Du lịch & Đời sống (旅行与生活)',
    description: 'Hỏi đường, phương tiện giao thông và tìm kiếm địa điểm.',
    reading: {
      title: '去火车站怎么走 (Đến ga tàu hỏa đi như thế nào?)',
      tokens: [
        { hanzi: '李明：', isSpeaker: true },
        { hanzi: '请问', pinyin: 'qǐngwèn', vi: 'Xin hỏi', hv: 'Thỉnh Vấn' },
        { hanzi: '，火车站', pinyin: 'huǒchēzhàn', vi: 'Ga tàu hỏa', hv: 'Hỏa Xa Trạm' },
        { hanzi: '怎么走', pinyin: 'zěnme zǒu', vi: 'Đi như thế nào', hv: 'Chẩm Ma Tẩu' },
        { hanzi: '？' },
        { hanzi: '路人：', isSpeaker: true },
        { hanzi: '一直', pinyin: 'yīzhí', vi: 'Đi thẳng', hv: 'Nhất Trực' },
        { hanzi: '往前走', pinyin: 'wǎng qián zǒu', vi: 'Về phía trước', hv: 'Vãng Tiền Tẩu' },
        { hanzi: '，往左拐', pinyin: 'wǎng zuǒ guǎi', vi: 'Rẽ trái', hv: 'Vãng Tả Quải' },
        { hanzi: '。' },
      ],
      translationVi: 'Lý Minh: Xin hỏi đi đến ga tàu hỏa đi như thế nào?\nNgười qua đường: Đi thẳng về phía trước rồi rẽ trái nhé.',
      quiz: {
        question: 'Người qua đường bảo rẽ hướng nào?',
        options: [
          { text: 'A. 往左拐 (Rẽ trái)', correct: true },
          { text: 'B. 往右拐 (Rẽ phải)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, hanzi: '请问，去火车站怎么走？', pinyin: 'Qǐngwèn, qù huǒchēzhàn zěnme zǒu?', vi: 'Xin hỏi ga tàu hỏa đi thế nào?' },
        { id: 1, hanzi: '一直往前走，往左拐。', pinyin: 'Yīzhí wǎng qián zǒu, wǎng zuǒ guǎi.', vi: 'Đi thẳng về phía trước, rẽ trái.' },
      ],
      quiz: {
        sentencePrefix: '一直往',
        missingWord: '前',
        sentenceSuffix: '走。',
      },
    },
    speaking: {
      targetHanzi: '去火车站怎么走',
      targetPinyin: 'Qù huǒchēzhàn zěnme zǒu',
      vietnameseMeaning: 'Đi đến ga tàu hỏa đi như thế nào?',
    },
    writing: {
      targetChar: '茶',
      charPinyin: 'chá',
      charMeaning: 'Trà (trong Uống trà)',
      compositionTask: {
        prompt: 'Dịch câu: "Hôm nay thời tiết rất đẹp"',
        expectedKeywords: ['今天', '天气', '很好'],
        sampleSolution: '今天天气很好 (Jīntiān tiānqì hěn hǎo)',
      },
    },
    matchingWords: [
      { id: 'w31', hanzi: '火车站', pinyin: 'huǒchēzhàn', vi: 'Ga tàu' },
      { id: 'w32', hanzi: '一直', pinyin: 'yīzhí', vi: 'Đi thẳng' },
      { id: 'w33', hanzi: '左拐', pinyin: 'zuǒ guǎi', vi: 'Rẽ trái' },
      { id: 'w34', hanzi: '右拐', pinyin: 'yòu guǎi', vi: 'Rẽ phải' },
    ],
  },
  {
    id: 'hsk3-lesson8',
    level: 'HSK 3',
    title: 'Bài 8: Khách sạn & Thủ tục lưu trú (酒店入住与服务)',
    description: 'Thủ tục nhận phòng check-in và dịch vụ khách sạn.',
    reading: {
      title: '在酒店前台办理入住 (Check-in khách sạn)',
      tokens: [
        { hanzi: '接待员：', isSpeaker: true },
        { hanzi: '这是', pinyin: 'zhè shì', vi: 'Đây là', hv: 'Giá Thị' },
        { hanzi: '您的房卡', pinyin: 'nín de fángkǎ', vi: 'Thẻ phòng của bạn', hv: 'Nẫm Đích Phòng Tạp' },
        { hanzi: '，房间在', pinyin: 'fángjiān zài', vi: 'Phòng tại', hv: 'Phòng Gian Tại' },
        { hanzi: '八楼', pinyin: 'bā lóu', vi: 'Tầng 8', hv: 'Bát Lâu' },
        { hanzi: '。' },
      ],
      translationVi: 'Lễ tân: Đây là thẻ phòng của quý khách, phòng ở tầng 8 nhé!',
      quiz: {
        question: 'Phòng của khách ở tầng mấy?',
        options: [
          { text: 'A. 八楼 (Tầng 8)', correct: true },
          { text: 'B. 六楼 (Tầng 6)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, hanzi: '请问酒店wifi密码是多少？', pinyin: 'Qǐngwèn jiǔdiàn wifi mìmǎ shì duōshǎo?', vi: 'Xin hỏi mật khẩu wifi là bao nhiêu?' },
      ],
      quiz: {
        sentencePrefix: '密码就是您的',
        missingWord: '房间号码',
        sentenceSuffix: '。',
      },
    },
    speaking: {
      targetHanzi: '这是我的护照请办理入住',
      targetPinyin: 'Zhè shì wǒ de hùzhào qǐng bànlǐ rùzhù',
      vietnameseMeaning: 'Đây là hộ chiếu của tôi xin nhận phòng',
    },
    writing: {
      targetChar: '住',
      charPinyin: 'zhù',
      charMeaning: 'Trú (Ở, Cư trú)',
      compositionTask: {
        prompt: 'Dịch câu: "Tôi muốn đặt một phòng đơn"',
        expectedKeywords: ['我想', '预订', '单人间'],
        sampleSolution: '我想预订一间单人间 (Wǒ xiǎng yùdìng yī jiān dānrénjiān)',
      },
    },
    matchingWords: [
      { id: 'w81', hanzi: '预订', pinyin: 'yùdìng', vi: 'Đặt trước' },
      { id: 'w82', hanzi: '护照', pinyin: 'hùzhào', vi: 'Hộ chiếu' },
      { id: 'w83', hanzi: '房卡', pinyin: 'fángkǎ', vi: 'Thẻ phòng' },
      { id: 'w84', hanzi: '电梯', pinyin: 'diàntī', vi: 'Thang máy' },
    ],
  },
  {
    id: 'hsk3-lesson9',
    level: 'HSK 3',
    title: 'Bài 9: Sức khỏe & Thăm khám bệnh (健康与就医看病)',
    description: 'Miêu tả triệu chứng bệnh và đi khám bác sĩ.',
    reading: {
      title: '在医院看病 (Khám bệnh tại bệnh viện)',
      tokens: [
        { hanzi: '医生：', isSpeaker: true },
        { hanzi: '回去', pinyin: 'huíqù', vi: 'Về nhà', hv: 'Hồi Khứ' },
        { hanzi: '多喝水', pinyin: 'duō hē shuǐ', vi: 'Uống nhiều nước', hv: 'Đa Hát Thủy' },
        { hanzi: '，按时', pinyin: 'ànshí', vi: 'Đúng giờ', hv: 'Án Thời' },
        { hanzi: '吃药', pinyin: 'chī yào', vi: 'Uống thuốc', hv: 'Ngật Dược' },
        { hanzi: '，好好休息', pinyin: 'hǎohāo xiūxi', vi: 'Nghỉ ngơi tốt', hv: 'Hảo Hảo Hưu Tức' },
        { hanzi: '。' },
      ],
      translationVi: 'Bác sĩ: Về nhà hãy uống nhiều nước ấm, uống thuốc đúng giờ và nghỉ ngơi thật tốt nhé.',
      quiz: {
        question: 'Bác sĩ dặn bệnh nhân điều gì?',
        options: [
          { text: 'A. 多喝水按时吃药 (Uống nhiều nước và uống thuốc đúng giờ)', correct: true },
          { text: 'B. 继续跑步 (Tiếp tục chạy bộ)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, hanzi: '回去多喝水，按时吃药。', pinyin: 'Huíqù duō hē shuǐ, ànshí chī yào.', vi: 'Về uống nhiều nước, uống thuốc đúng giờ.' },
      ],
      quiz: {
        sentencePrefix: '回去多喝水，按时',
        missingWord: '吃药',
        sentenceSuffix: '。',
      },
    },
    speaking: {
      targetHanzi: '身体健康最重要',
      targetPinyin: 'Shēntǐ jiànkāng zuì zhòngyào',
      vietnameseMeaning: 'Sức khỏe cơ thể là quan trọng nhất',
    },
    writing: {
      targetChar: '医',
      charPinyin: 'yī',
      charMeaning: 'Y (Bác sĩ, Y học)',
      compositionTask: {
        prompt: 'Dịch câu: "Hôm nay tôi bị đau đầu"',
        expectedKeywords: ['今天', '我', '头疼'],
        sampleSolution: '今天我有点头疼 (Jīntiān wǒ yǒudiǎn tóuténg)',
      },
    },
    matchingWords: [
      { id: 'w91', hanzi: '生病', pinyin: 'shēngbìng', vi: 'Ốm đau' },
      { id: 'w92', hanzi: '发烧', pinyin: 'fāshāo', vi: 'Sốt' },
      { id: 'w93', hanzi: '头疼', pinyin: 'tóuténg', vi: 'Đau đầu' },
      { id: 'w94', hanzi: '吃药', pinyin: 'chī yào', vi: 'Uống thuốc' },
    ],
  },
  {
    id: 'hsk4-lesson10',
    level: 'HSK 4',
    title: 'Bài 10: Phỏng vấn xin việc & Công sở (职场面试与商务)',
    description: 'Kỹ năng phỏng vấn tuyển dụng và giao tiếp công sở chuyên nghiệp.',
    reading: {
      title: '应聘面试 (Phỏng vấn xin việc)',
      tokens: [
        { hanzi: '面试官：', isSpeaker: true },
        { hanzi: '请简单', pinyin: 'qǐng jiǎndān', vi: 'Xin mời ngắn gọn', hv: 'Thỉnh Giản Đơn' },
        { hanzi: '介绍一下', pinyin: 'jièshào yīxià', vi: 'Giới thiệu một chút', hv: 'Giới Thiệu Nhất Hạ' },
        { hanzi: '工作经验', pinyin: 'gōngzuò jīngyàn', vi: 'Kinh nghiệm làm việc', hv: 'Công Tác Kinh Nghiệm' },
        { hanzi: '。' },
      ],
      translationVi: 'Người phỏng vấn: Xin mời bạn giới thiệu ngắn gọn về kinh nghiệm làm việc.',
      quiz: {
        question: 'Người phỏng vấn yêu cầu ứng viên giới thiệu về điều gì?',
        options: [
          { text: 'A. 工作经验 (Kinh nghiệm làm việc)', correct: true },
          { text: 'B. 爱好 (Sở thích)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, hanzi: '祝贺你通过了面试，下周一开始上班。', pinyin: 'Zhùhè nǐ tōngguò le miànshì, xià zhōu yī kāishǐ shàngbān.', vi: 'Chúc mừng bạn đã vượt qua phỏng vấn, thứ hai tuần sau đi làm.' },
      ],
      quiz: {
        sentencePrefix: '祝贺你通过了',
        missingWord: '面试',
        sentenceSuffix: '。',
      },
    },
    speaking: {
      targetHanzi: '祝我们未来合作愉快',
      targetPinyin: 'Zhù wǒmen wèilái hézuò yúkuài',
      vietnameseMeaning: 'Chúc cho sự hợp tác tương lai tốt đẹp',
    },
    writing: {
      targetChar: '业',
      charPinyin: 'yè',
      charMeaning: 'Nghiệp (Doanh nghiệp, Tốt nghiệp)',
      compositionTask: {
        prompt: 'Dịch câu: "Tôi muốn làm việc tại công ty này"',
        expectedKeywords: ['我想', '这家公司', '工作'],
        sampleSolution: '我想在这家公司工作 (Wǒ xiǎng zài zhè jiā gōngsī gōngzuò)',
      },
    },
    matchingWords: [
      { id: 'w101', hanzi: '经理', pinyin: 'jīnglǐ', vi: 'Giám đốc' },
      { id: 'w102', hanzi: '面试', pinyin: 'miànshì', vi: 'Phỏng vấn' },
      { id: 'w103', hanzi: '合同', pinyin: 'hétong', vi: 'Hợp đồng' },
      { id: 'w104', hanzi: '工资', pinyin: 'gōngzī', vi: 'Tiền lương' },
    ],
  },
  {
    id: 'hsk2-lesson11',
    level: 'HSK 2',
    title: 'Bài 11: Đi lại & Phương tiện giao thông (交通与出行)',
    description: 'Hỏi đường, bắt taxi, đi tàu điện ngầm và xe buýt tại Trung Quốc.',
    reading: {
      title: '请问去火车站怎么走？',
      tokens: [
        { hanzi: '旅客：', isSpeaker: true },
        { hanzi: '请问', pinyin: 'qǐngwèn', vi: 'Xin hỏi', hv: 'Thỉnh Vấn' },
        { hanzi: '去', pinyin: 'qù', vi: 'Đi', hv: 'Khứ' },
        { hanzi: '火车站', pinyin: 'huǒchēzhàn', vi: 'Ga xe lửa', hv: 'Hỏa Xa Trạm' },
        { hanzi: '怎么', pinyin: 'zěnme', vi: 'Như thế nào', hv: 'Chẩm Ma' },
        { hanzi: '走', pinyin: 'zǒu', vi: 'Đi', hv: 'Tẩu' },
        { hanzi: '？' },
        { hanzi: '路人：', isSpeaker: true },
        { hanzi: '你可以', pinyin: 'nǐ kěyǐ', vi: 'Bạn có thể', hv: 'Nhĩ Khả Dĩ' },
        { hanzi: '坐', pinyin: 'zuò', vi: 'Đi tàu/xe', hv: 'Tọa' },
        { hanzi: '地铁', pinyin: 'dìtiě', vi: 'Tàu điện ngầm', hv: 'Địa Thiết' },
        { hanzi: '二号线', pinyin: 'èr hào xiàn', vi: 'Tuyến số 2', hv: 'Nhị Hào Tuyến' },
        { hanzi: '。' },
      ],
      translationVi: 'Hành khách: Xin hỏi đi đến ga tàu hỏa đi như thế nào?\nNgười đi đường: Bạn có thể đi tàu điện ngầm tuyến số 2.',
      quiz: {
        question: 'Hành khách muốn đi đến đâu?',
        options: [
          { text: 'A. 火车站 (Ga tàu hỏa)', correct: true },
          { text: 'B. 飞机场 (Sân bay)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, hanzi: '师傅，去北京饭店，请打表。', pinyin: 'Shīfu, qù Běijīng Fàndiàn, qǐng dǎbiǎo.', vi: 'Bác tài, đi khách sạn Bắc Kinh, vui lòng bật đồng hồ cước.' },
      ],
      quiz: {
        sentencePrefix: '师傅，去北京饭店，请',
        missingWord: '打表',
        sentenceSuffix: '。',
      },
    },
    speaking: {
      targetHanzi: '请问去最近的地铁站怎么走？',
      targetPinyin: 'Qǐngwèn qù zuì jìn de dìtiězhàn zěnme zǒu?',
      vietnameseMeaning: 'Xin hỏi đến ga tàu điện ngầm gần nhất đi như thế nào?',
    },
    writing: {
      targetChar: '车',
      charPinyin: 'chē',
      charMeaning: 'Xa (Xe cộ, phương tiện)',
      compositionTask: {
        prompt: 'Dịch câu: "Tôi đi tàu điện ngầm đi làm"',
        expectedKeywords: ['我', '坐地铁', '上班'],
        sampleSolution: '我坐地铁去上班 (Wǒ zuò dìtiě qù shàngbān)',
      },
    },
    matchingWords: [
      { id: 'w111', hanzi: '地铁', pinyin: 'dìtiě', vi: 'Tàu điện ngầm' },
      { id: 'w112', hanzi: '出租车', pinyin: 'chūzūchē', vi: 'Xe taxi' },
      { id: 'w113', hanzi: '车站', pinyin: 'chēzhàn', vi: 'Bến xe/Ga' },
      { id: 'w114', hanzi: '车票', pinyin: 'chēpiào', vi: 'Vé xe tàu' },
    ],
  },
  {
    id: 'hsk2-lesson12',
    level: 'HSK 2',
    title: 'Bài 12: Sở thích & Thể thao giải trí (爱好与运动娱乐)',
    description: 'Trò chuyện về sở thích cá nhân, các môn thể thao và thư giãn cuối tuần.',
    reading: {
      title: '周末的爱好',
      tokens: [
        { hanzi: '小明：', isSpeaker: true },
        { hanzi: '周末', pinyin: 'zhōumò', vi: 'Cuối tuần', hv: 'Chu Mạt' },
        { hanzi: '你喜欢', pinyin: 'nǐ xǐhuan', vi: 'Bạn thích', hv: 'Nhĩ Hỷ Hoan' },
        { hanzi: '做什么', pinyin: 'zuò shénme', vi: 'Làm gì', hv: 'Tác Thập Ma' },
        { hanzi: '？' },
        { hanzi: '安娜：', isSpeaker: true },
        { hanzi: '我非常喜欢', pinyin: 'wǒ fēicháng xǐhuan', vi: 'Tôi rất thích', hv: 'Ngã Phi Thường Hỷ Hoan' },
        { hanzi: '游泳', pinyin: 'yóuyǒng', vi: 'Bơi lội', hv: 'Du Vịnh' },
        { hanzi: '和', pinyin: 'hé', vi: 'Và', hv: 'Hòa' },
        { hanzi: '听音乐', pinyin: 'tīng yīnyuè', vi: 'Nghe nhạc', hv: 'Thính Âm Nhạc' },
        { hanzi: '。' },
      ],
      translationVi: 'Tiểu Minh: Cuối tuần bạn thích làm gì?\nAnna: Tôi rất thích bơi lội và nghe nhạc.',
      quiz: {
        question: 'Anna thích làm gì vào cuối tuần?',
        options: [
          { text: 'A. 游泳和听音乐 (Bơi lội và nghe nhạc)', correct: true },
          { text: 'B. 踢足球 (Đá bóng)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, hanzi: '这个星期六晚上有足球比赛，我们一起去看吧。', pinyin: 'Zhè gè xīngqīliù wǎnshàng yǒu zúqiú bǐsài, wǒmen yīqǐ qù kàn ba.', vi: 'Tối thứ Bảy có trận bóng đá, chúng mình cùng đi xem nhé.' },
      ],
      quiz: {
        sentencePrefix: '这个星期六晚上有',
        missingWord: '足球比赛',
        sentenceSuffix: '。',
      },
    },
    speaking: {
      targetHanzi: '我平时喜欢运动和听流行音乐',
      targetPinyin: 'Wǒ píngshí xǐhuan yùndòng hé tīng liúxíng yīnyuè',
      vietnameseMeaning: 'Bình thường tôi thích rèn luyện thể thao và nghe nhạc thịnh hành',
    },
    writing: {
      targetChar: '乐',
      charPinyin: 'yuè / lè',
      charMeaning: 'Nhạc (âm nhạc) / Lạc (vui vẻ)',
      compositionTask: {
        prompt: 'Dịch câu: "Cuối tuần tôi thích bơi lội"',
        expectedKeywords: ['周末', '我喜欢', '游泳'],
        sampleSolution: '周末我喜欢游泳 (Zhōumò wǒ xǐhuan yóuyǒng)',
      },
    },
    matchingWords: [
      { id: 'w121', hanzi: '爱好', pinyin: 'àihào', vi: 'Sở thích' },
      { id: 'w122', hanzi: '运动', pinyin: 'yùndòng', vi: 'Thể thao' },
      { id: 'w123', hanzi: '游泳', pinyin: 'yóuyǒng', vi: 'Bơi lội' },
      { id: 'w124', hanzi: '音乐', pinyin: 'yīnyuè', vi: 'Âm nhạc' },
    ],
  },
  {
    id: 'hsk3-lesson13',
    level: 'HSK 3',
    title: 'Bài 13: Mua sắm trực tuyến & Thanh toán (网购与移动支付)',
    description: 'Mua sắm online, nhận bưu phẩm và thanh toán quét mã không dùng tiền mặt.',
    reading: {
      title: '网上购物与扫码支付',
      tokens: [
        { hanzi: '芳芳：', isSpeaker: true },
        { hanzi: '这件衣服', pinyin: 'zhè jiàn yīfu', vi: 'Bộ đồ này', hv: 'Giá Kiện Y Phục' },
        { hanzi: '质量', pinyin: 'zhìliàng', vi: 'Chất lượng', hv: 'Chất Lượng' },
        { hanzi: '很好', pinyin: 'hěn hǎo', vi: 'Rất tốt', hv: 'Hẩn Hảo' },
        { hanzi: '，你在哪儿买的？' },
        { hanzi: '美玲：', isSpeaker: true },
        { hanzi: '网上买的', pinyin: 'wǎngshàng mǎi de', vi: 'Mua trên mạng', hv: 'Võng Thượng Mãi Đích' },
        { hanzi: '，用手机', pinyin: 'yòng shǒujī', vi: 'Dùng điện thoại', hv: 'Dụng Thủ Cơ' },
        { hanzi: '扫码', pinyin: 'sǎomǎ', vi: 'Quét mã QR', hv: 'Tảo Mã' },
        { hanzi: '付款', pinyin: 'fùkuǎn', vi: 'Thanh toán tiền', hv: 'Phó Khoản' },
        { hanzi: '。' },
      ],
      translationVi: 'Phương Phương: Bộ đồ này chất lượng tốt quá, bạn mua ở đâu?\nMỹ Linh: Tôi mua trên mạng, dùng điện thoại quét mã thanh toán thôi.',
      quiz: {
        question: 'Mỹ Linh thanh toán tiền bằng cách nào?',
        options: [
          { text: 'A. 扫码付款 (Quét mã thanh toán)', correct: true },
          { text: 'B. 现金 (Tiền mặt)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, hanzi: '您的快递到了，请到楼下取件。', pinyin: 'Nín de kuàidì dào le, qǐng dào lóuxià qǔjiàn.', vi: 'Bưu kiện của quý khách đã tới, xin mời xuống dưới nhận hàng.' },
      ],
      quiz: {
        sentencePrefix: '您的',
        missingWord: '快递',
        sentenceSuffix: '到了。',
      },
    },
    speaking: {
      targetHanzi: '请问这里可以用微信或者支付宝付款吗？',
      targetPinyin: 'Qǐngwèn zhèlǐ kěyǐ yòng Wēixìn huòzhě Zhīfùbǎo fùkuǎn ma?',
      vietnameseMeaning: 'Xin hỏi ở đây có thể thanh toán bằng WeChat hoặc Alipay không?',
    },
    writing: {
      targetChar: '电',
      charPinyin: 'diàn',
      charMeaning: 'Điện (Điện thoại, Điện tử)',
      compositionTask: {
        prompt: 'Dịch câu: "Tôi dùng điện thoại quét mã thanh toán"',
        expectedKeywords: ['我用手机', '扫码', '付款'],
        sampleSolution: '我用手机扫码付款 (Wǒ yòng shǒujī sǎomǎ fùkuǎn)',
      },
    },
    matchingWords: [
      { id: 'w131', hanzi: '网购', pinyin: 'wǎnggòu', vi: 'Mua online' },
      { id: 'w132', hanzi: '快递', pinyin: 'kuàidì', vi: 'Chuyển phát nhanh' },
      { id: 'w133', hanzi: '扫码', pinyin: 'sǎomǎ', vi: 'Quét mã QR' },
      { id: 'w134', hanzi: '付款', pinyin: 'fùkuǎn', vi: 'Thanh toán' },
    ],
  },
  {
    id: 'hsk3-lesson14',
    level: 'HSK 3',
    title: 'Bài 14: Du học & Môi trường học tập (留学与校园生活)',
    description: 'Đăng ký môn học, thư viện, thi cử và xin học bổng du học.',
    reading: {
      title: '图书馆借书',
      tokens: [
        { hanzi: '留学生：', isSpeaker: true },
        { hanzi: '老师好', pinyin: 'lǎoshī hǎo', vi: 'Chào thầy cô', hv: 'Lão Sư Hảo' },
        { hanzi: '，我想', pinyin: 'wǒ xiǎng', vi: 'Tôi muốn', hv: 'Ngã Tưởng' },
        { hanzi: '借书', pinyin: 'jiè shū', vi: 'Mượn sách', hv: 'Tá Thư' },
        { hanzi: '。\n' },
        { hanzi: '管理员：', isSpeaker: true },
        { hanzi: '请出示', pinyin: 'qǐng chūshì', vi: 'Xin xuất trình', hv: 'Thỉnh Xuất Thị' },
        { hanzi: '学生证', pinyin: 'xuéshēngzhèng', vi: 'Thẻ sinh viên', hv: 'Học Sinh Chứng' },
        { hanzi: '，每本书可以借一个月。' },
      ],
      translationVi: 'Du học sinh: Em chào cô, em muốn mượn sách ạ.\nQuản lý: Em xuất trình thẻ sinh viên nhé, mỗi cuốn sách được mượn 1 tháng.',
      quiz: {
        question: 'Mỗi cuốn sách được mượn bao lâu?',
        options: [
          { text: 'A. 一个月 (Một tháng)', correct: true },
          { text: 'B. 一周 (Một tuần)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, hanzi: '听说你申请到了中国政府奖学金，恭喜你！', pinyin: 'Tīngshuō nǐ shēnqǐng dào le Zhōngguó zhèngfǔ jiǎngxuéjīn, gōngxǐ nǐ!', vi: 'Nghe nói bạn đã xin được học bổng chính phủ Trung Quốc, chúc mừng nhé!' },
      ],
      quiz: {
        sentencePrefix: '听说你申请到了中国政府',
        missingWord: '奖学金',
        sentenceSuffix: '，恭喜你！',
      },
    },
    speaking: {
      targetHanzi: '努力学习中文，争取取得优异的成绩',
      targetPinyin: 'Nǔlì xuéxí Zhōngwén, zhēngqǔ qǔdé yōuyì de chéngjì',
      vietnameseMeaning: 'Nỗ lực học tiếng Trung, phấn đấu đạt thành tích xuất sắc',
    },
    writing: {
      targetChar: '学',
      charPinyin: 'xué',
      charMeaning: 'Học (Học tập, Học sinh)',
      compositionTask: {
        prompt: 'Dịch câu: "Tôi muốn xin học bổng du học"',
        expectedKeywords: ['我想申请', '留学', '奖学金'],
        sampleSolution: '我想申请留学奖学金 (Wǒ xiǎng shēnqǐng liúxué jiǎngxuéjīn)',
      },
    },
    matchingWords: [
      { id: 'w141', hanzi: '留学', pinyin: 'liúxué', vi: 'Du học' },
      { id: 'w142', hanzi: '奖学金', pinyin: 'jiǎngxuéjīn', vi: 'Học bổng' },
      { id: 'w143', hanzi: '图书馆', pinyin: 'túshūguǎn', vi: 'Thư viện' },
      { id: 'w144', hanzi: '专业', pinyin: 'zhuānyè', vi: 'Chuyên ngành' },
    ],
  },
  {
    id: 'hsk4-lesson15',
    level: 'HSK 4',
    title: 'Bài 15: Đàm phán thương mại & Ký kết hợp đồng (商务谈判与合作)',
    description: 'Đàm phán giá cả, điều khoản giao hàng và ký kết hợp đồng kinh tế.',
    reading: {
      title: '商务价格谈判',
      tokens: [
        { hanzi: '陈经理：', isSpeaker: true },
        { hanzi: '王总', pinyin: 'Wáng zǒng', vi: 'Vương tổng', hv: 'Vương Tổng' },
        { hanzi: '，能否给予百分之五的', pinyin: 'néngfǒu jǐyǔ bǎi fēn zhī wǔ de', vi: 'Liệu có thể chiết khấu 5%', hv: 'Năng Phủ Kỷ Dữ Bách Phân Chi Ngũ Đích' },
        { hanzi: '折扣', pinyin: 'zhékòu', vi: 'Chiết khấu', hv: 'Chiết Khấu' },
        { hanzi: '？\n' },
        { hanzi: '王总：', isSpeaker: true },
        { hanzi: '我们同意', pinyin: 'wǒmen tóngyì', vi: 'Chúng tôi đồng ý', hv: 'Ngã Môn Đồng Ý' },
        { hanzi: '，下周正式签署商业合同。' },
      ],
      translationVi: 'Giám đốc Trần: Vương tổng, liệu có thể chiết khấu 5% không ạ?\nVương tổng: Chúng tôi đồng ý, tuần sau sẽ chính thức ký kết hợp đồng.',
      quiz: {
        question: 'Bên bán đã đồng ý mức chiết khấu bao nhiêu?',
        options: [
          { text: 'A. 百分之五 (5%)', correct: true },
          { text: 'B. 百分之十 (10%)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, hanzi: '祝贺我们今天圆满签订了合作协议！', pinyin: 'Zhùhè wǒmen jīntiān yuánmǎn qiāndìng le hézuò xiéyì!', vi: 'Chúc mừng hôm nay chúng ta đã ký kết viên mãn thỏa thuận hợp tác!' },
      ],
      quiz: {
        sentencePrefix: '祝贺我们今天圆满签订了',
        missingWord: '合作协议',
        sentenceSuffix: '！',
      },
    },
    speaking: {
      targetHanzi: '互利共赢是双方长期合作的基础',
      targetPinyin: 'Hù lì gòng yíng shì shuāngfāng chángqī hézuò de jīchǔ',
      vietnameseMeaning: 'Đôi bên cùng có lợi là nền tảng cho sự hợp tác lâu dài',
    },
    writing: {
      targetChar: '商',
      charPinyin: 'shāng',
      charMeaning: 'Thương (Thương mại, Doanh nhân)',
      compositionTask: {
        prompt: 'Dịch câu: "Chúng tôi muốn ký kết hợp đồng với quý công ty"',
        expectedKeywords: ['我们想与', '贵公司', '签订合同'],
        sampleSolution: 'Chúng tôi muốn cùng quý công ty ký hợp đồng',
      },
    },
    matchingWords: [
      { id: 'w151', hanzi: '谈判', pinyin: 'tánpàn', vi: 'Đàm phán' },
      { id: 'w152', hanzi: '合同', pinyin: 'hétong', vi: 'Hợp đồng' },
      { id: 'w153', hanzi: '折扣', pinyin: 'zhékòu', vi: 'Chiết khấu' },
      { id: 'w154', hanzi: '合作', pinyin: 'hézuò', vi: 'Hợp tác' },
    ],
  },
];
