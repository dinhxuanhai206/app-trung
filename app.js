/**
 * Modern Chinese Learning Platform (App Trung)
 * Implements 5 core skills: Reading, Listening, Speaking, Writing, Word Matching + Dashboard
 */

// ==========================================
// 1. CHINESE CURRICULUM DATABASE (HSK 1-3)
// ==========================================
const LESSONS_DATABASE = [
  {
    id: 'hsk1-lesson1',
    level: 'HSK 1',
    title: 'Bài 1: Chào hỏi & Giao tiếp cơ bản (问候与基础交流)',
    description: 'Học cách chào hỏi, cảm ơn, xin lỗi và tự giới thiệu bản thân bằng tiếng Trung chuẩn.',
    
    // Reading Data
    reading: {
      title: '你好，很高兴认识你 (Xin chào, rất vui được làm quen với bạn)',
      tokens: [
        { hanzi: '大卫：', pinyin: 'Dàwèi:', vi: 'David:', isSpeaker: true },
        { hanzi: '你好', pinyin: 'nǐ hǎo', vi: 'Xin chào', hv: 'Nhĩ Hảo', sample: '你好！我是李明。' },
        { hanzi: '！', pinyin: '', vi: '' },
        { hanzi: '我', pinyin: 'wǒ', vi: 'Tôi', hv: 'Ngã', sample: '我是学生。' },
        { hanzi: '是', pinyin: 'shì', vi: 'Là', hv: 'Thị', sample: '他是老师。' },
        { hanzi: '大卫', pinyin: 'Dàwèi', vi: 'David (Tên riêng)', hv: 'Đại Vệ', sample: '大卫是美国人。' },
        { hanzi: '，', pinyin: '', vi: '' },
        { hanzi: '你', pinyin: 'nǐ', vi: 'Bạn/Anh/Chị', hv: 'Nhĩ', sample: '你是中国人吗？' },
        { hanzi: '叫', pinyin: 'jiào', vi: 'Tên là / Gọi là', hv: 'Khiếu', sample: '我叫王兰。' },
        { hanzi: '什么', pinyin: 'shénme', vi: 'Gì / Cái gì', hv: 'Thập Ma', sample: '这是什么？' },
        { hanzi: '名字', pinyin: 'míngzi', vi: 'Tên', hv: 'Danh Tự', sample: '我的名字是李明。' },
        { hanzi: '？\n', pinyin: '', vi: '' },
        
        { hanzi: '王兰：', pinyin: 'Wáng Lán:', vi: 'Vương Lan:', isSpeaker: true },
        { hanzi: '你好', pinyin: 'nǐ hǎo', vi: 'Xin chào', hv: 'Nhĩ Hảo', sample: '你好吗？' },
        { hanzi: '，', pinyin: '', vi: '' },
        { hanzi: '我', pinyin: 'wǒ', vi: 'Tôi', hv: 'Ngã', sample: '我很好。' },
        { hanzi: '叫', pinyin: 'jiào', vi: 'Tên là', hv: 'Khiếu', sample: '你叫什么？' },
        { hanzi: '王兰', pinyin: 'Wáng Lán', vi: 'Vương Lan', hv: 'Vương Lan', sample: '王兰是北京人。' },
        { hanzi: '。', pinyin: '', vi: '' },
        { hanzi: '很', pinyin: 'hěn', vi: 'Rất', hv: 'Hẩn', sample: '今天很高兴。' },
        { hanzi: '高兴', pinyin: 'gāoxìng', vi: 'Vui vẻ / Hân hạnh', hv: 'Cao Hưng', sample: '认识你很高兴。' },
        { hanzi: '认识', pinyin: 'rènshi', vi: 'Quen biết / Nhận biết', hv: 'Nhận Thức', sample: '我不认识他。' },
        { hanzi: '你', pinyin: 'nǐ', vi: 'Bạn', hv: 'Nhĩ', sample: '谢谢你！' },
        { hanzi: '！\n', pinyin: '', vi: '' },

        { hanzi: '大卫：', pinyin: 'Dàwèi:', vi: 'David:', isSpeaker: true },
        { hanzi: '认识', pinyin: 'rènshi', vi: 'Quen biết', hv: 'Nhận Thức', sample: '很高兴认识你。' },
        { hanzi: '你', pinyin: 'nǐ', vi: 'Bạn', hv: 'Nhĩ', sample: '你是谁？' },
        { hanzi: '我也', pinyin: 'wǒ yě', vi: 'Tôi cũng', hv: 'Ngã Dã', sample: '我也去学校。' },
        { hanzi: '很', pinyin: 'hěn', vi: 'Rất', hv: 'Hẩn', sample: '很好！' },
        { hanzi: '高兴', pinyin: 'gāoxìng', vi: 'Vui vẻ', hv: 'Cao Hưng', sample: '大家都很高兴。' },
        { hanzi: '。', pinyin: '', vi: '' },
        { hanzi: '谢谢', pinyin: 'xièxie', vi: 'Cảm ơn', hv: 'Tạ Tạ', sample: '谢谢你的帮助。' },
        { hanzi: '！', pinyin: '', vi: '' }
      ],
      vietnameseTranslation: 'David: Xin chào! Tôi là David, bạn tên là gì?\nVương Lan: Chào bạn, tôi tên là Vương Lan. Rất vui được làm quen với bạn!\nDavid: Được làm quen với bạn tôi cũng rất vui. Cảm ơn bạn!',
      quiz: {
        question: 'Câu hỏi: Trong đoạn hội thoại, ai là người bắt chuyện trước và hỏi tên người đối diện?',
        options: [
          { text: 'A. 王兰 (Vương Lan)', correct: false },
          { text: 'B. 大卫 (David)', correct: true },
          { text: 'C. 李明 (Lý Minh)', correct: false },
          { text: 'D. 老师 (Thầy giáo)', correct: false }
        ]
      }
    },

    // Listening Data
    listening: {
      audioSpeed: 1,
      dialogues: [
        {
          id: 0,
          hanzi: '你好，请问你叫什么名字？',
          pinyin: 'Nǐ hǎo, qǐngwèn nǐ jiào shénme míngzì?',
          vi: 'Xin chào, xin hỏi bạn tên là gì?'
        },
        {
          id: 1,
          hanzi: '我叫王兰，我是中国人。',
          pinyin: 'Wǒ jiào Wáng Lán, wǒ shì Zhōngguó rén.',
          vi: 'Tôi tên là Vương Lan, tôi là người Trung Quốc.'
        },
        {
          id: 2,
          hanzi: '很高兴认识你，王兰！',
          pinyin: 'Hěn gāoxìng rènshi nǐ, Wáng Lán!',
          vi: 'Rất vui được làm quen với bạn, Vương Lan!'
        },
        {
          id: 3,
          hanzi: '认识你我也很高兴。谢谢你！',
          pinyin: 'Rènshi nǐ wǒ yě hěn gāoxìng. Xièxie nǐ!',
          vi: 'Làm quen với bạn tôi cũng rất vui. Cảm ơn bạn!'
        },
        {
          id: 4,
          hanzi: '你是学生还是老师？',
          pinyin: 'Nǐ shì xuésheng háishì lǎoshī?',
          vi: 'Bạn là học sinh hay là giáo viên?'
        },
        {
          id: 5,
          hanzi: '我是大学生，在大学学中文。',
          pinyin: 'Wǒ shì dàxuéshēng, zài dàxué xué Zhōngwén.',
          vi: 'Tôi là sinh viên đại học, học tiếng Trung ở trường đại học.'
        }
      ],
      quiz: {
        prompt: 'Nghe đoạn âm thanh và điền từ còn thiếu vào chỗ trống:',
        sentencePrefix: '很高兴',
        missingWord: '认识',
        sentenceSuffix: '你！',
        pinyinHint: 'Hěn gāoxìng (rènshi) nǐ!'
      }
    },

    // Speaking Data (Multi-Sentence)
    speaking: {
      targetHanzi: '很高兴认识你',
      targetPinyin: 'Hěn gāoxìng rènshi nǐ',
      vietnameseMeaning: 'Rất vui được làm quen với bạn',
      sentences: [
        { hanzi: '你好！很高兴认识你。', pinyin: 'Nǐ hǎo! Hěn gāoxìng rènshi nǐ.', vi: 'Xin chào! Rất vui được làm quen với bạn.' },
        { hanzi: '请问你叫什么名字？', pinyin: 'Qǐngwèn nǐ jiào shénme míngzì?', vi: 'Xin hỏi bạn tên là gì?' },
        { hanzi: '我叫王兰，我是中国人。', pinyin: 'Wǒ jiào Wáng Lán, wǒ shì Zhōngguó rén.', vi: 'Tôi tên là Vương Lan, tôi là người Trung Quốc.' },
        { hanzi: '认识你我也很高兴，谢谢你！', pinyin: 'Rènshi nǐ wǒ yě hěn gāoxìng, xièxie nǐ!', vi: 'Làm quen với bạn tôi cũng rất vui, cảm ơn bạn!' },
        { hanzi: '明天见，祝你今天过得愉快！', pinyin: 'Míngtiān jiàn, zhù nǐ jīntiān guò de yúkuài!', vi: 'Ngày mai gặp lại, chúc bạn một ngày vui vẻ!' }
      ]
    },

    // Writing & Hanzi Data (Multi-Character)
    writing: {
      targetChar: '中',
      charPinyin: 'zhōng',
      charMeaning: 'Trung (trong Trung Quốc, Trung tâm)',
      charStrokes: '4 nét: 竖, 横折, 横, 竖',
      compositionTask: {
        prompt: 'Hãy dịch câu sau sang tiếng Trung: "Tôi là người Việt Nam"',
        expectedKeywords: ['我', '是', '越南人'],
        sampleSolution: '我是越南人 (Wǒ shì Yuènán rén)',
        explanation: 'Cấu trúc câu: Chủ ngữ (我) + Động từ là (是) + Danh từ quốc tịch (越南人).'
      },
      characters: [
        {
          targetChar: '中',
          charPinyin: 'zhōng',
          charMeaning: 'Trung (trong Trung Quốc, Trung tâm)',
          charStrokes: '4 nét: 竖, 横折, 横, 竖',
          compositionPrompt: 'Dịch câu: "Tôi là người Việt Nam"',
          expectedKeywords: ['我', '是', '越南人'],
          sampleSolution: '我是越南人 (Wǒ shì Yuènán rén)',
          explanation: 'Chủ ngữ (我) + 是 + 越南人'
        },
        {
          targetChar: '国',
          charPinyin: 'guó',
          charMeaning: 'Quốc (trong Quốc gia, Đất nước)',
          charStrokes: '8 nét: 竖, 横折, 横, 横, 竖, 横, 点, 横',
          compositionPrompt: 'Dịch câu: "Trung Quốc là một quốc gia lớn"',
          expectedKeywords: ['中国', '大'],
          sampleSolution: '中国是一个大国 (Zhōngguó shì yī gè dà guó)',
          explanation: '中国 (Trung Quốc) + 是一个大国 (Là một nước lớn)'
        },
        {
          targetChar: '人',
          charPinyin: 'rén',
          charMeaning: 'Nhân (trong Con người, Nhân dân)',
          charStrokes: '2 nét: 撇, 捺',
          compositionPrompt: 'Dịch câu: "Anh ấy là một người tốt"',
          expectedKeywords: ['他', '人'],
          sampleSolution: '他是一个好人 (Tā shì yī gè hǎo rén)',
          explanation: '他 (Anh ấy) + 是一个好人 (Là một người tốt)'
        },
        {
          targetChar: '好',
          charPinyin: 'hǎo',
          charMeaning: 'Hảo (trong Tốt lành, Chào hỏi)',
          charStrokes: '6 nét: 撇点, 撇, 横, 横撇, 竖钩, 横',
          compositionPrompt: 'Dịch câu: "Xin chào thầy giáo!"',
          expectedKeywords: ['老师', '好'],
          sampleSolution: '老师好！ (Lǎoshī hǎo!)',
          explanation: 'Danh xưng (老师) + 好'
        },
        {
          targetChar: '你',
          charPinyin: 'nǐ',
          charMeaning: 'Nhĩ (Bạn, Anh, Chị)',
          charStrokes: '7 nét: 撇, 竖, 撇, 横撇, 竖, 横折钩, 点',
          compositionPrompt: 'Dịch câu: "Bạn tên là gì?"',
          expectedKeywords: ['你', '叫', '名字'],
          sampleSolution: '你叫什么名字？ (Nǐ jiào shénme míngzì?)',
          explanation: '你 (Bạn) + 叫什么名字 (Tên là gì)'
        }
      ]
    },

    // Matching Game Data
    matchingWords: [
      { id: 'w1', hanzi: '你好', pinyin: 'nǐ hǎo', vi: 'Xin chào' },
      { id: 'w2', hanzi: '谢谢', pinyin: 'xièxie', vi: 'Cảm ơn' },
      { id: 'w3', hanzi: '再见', pinyin: 'zàijiàn', vi: 'Tạm biệt' },
      { id: 'w4', hanzi: '朋友', pinyin: 'péngyou', vi: 'Bạn bè' },
      { id: 'w5', hanzi: '高兴', pinyin: 'gāoxìng', vi: 'Vui vẻ' },
      { id: 'w6', hanzi: '中国', pinyin: 'Zhōngguó', vi: 'Trung Quốc' },
      { id: 'w7', hanzi: '名字', pinyin: 'míngzi', vi: 'Họ tên' },
      { id: 'w8', hanzi: '认识', pinyin: 'rènshi', vi: 'Quen biết' }
    ]
  },

  {
    id: 'hsk2-lesson2',
    level: 'HSK 2',
    title: 'Bài 2: Mua sắm & Ăn uống (购物与饮食)',
    description: 'Hỏi giá tiền, mặc cả khi mua đồ và gọi món trong nhà hàng.',
    
    reading: {
      title: '在水果店买苹果 (Mua táo tại tiệm hoa quả)',
      tokens: [
        { hanzi: '顾客：', pinyin: 'Gùkè:', vi: 'Khách hàng:', isSpeaker: true },
        { hanzi: '老板', pinyin: 'lǎobǎn', vi: 'Ông chủ', hv: 'Lão Bản', sample: '老板，这个多少钱？' },
        { hanzi: '，', pinyin: '', vi: '' },
        { hanzi: '苹果', pinyin: 'píngguǒ', vi: 'Quả táo', hv: 'Bình Quả', sample: '我想买苹果。' },
        { hanzi: '一斤', pinyin: 'yī jīn', vi: 'Một cân (500g)', hv: 'Nhất Cân', sample: '一斤十块钱。' },
        { hanzi: '多少钱', pinyin: 'duōshǎo qián', vi: 'Bao nhiêu tiền', hv: 'Đa Thiểu Tiền', sample: '多少钱一斤？' },
        { hanzi: '？\n', pinyin: '', vi: '' },

        { hanzi: '老板：', pinyin: 'Lǎobǎn:', vi: 'Chủ tiệm:', isSpeaker: true },
        { hanzi: '五块钱', pinyin: 'wǔ kuài qián', vi: '5 tệ', hv: 'Ngũ Khối Tiền', sample: '一共五块钱。' },
        { hanzi: '一斤', pinyin: 'yī jīn', vi: 'Một cân', hv: 'Nhất Cân', sample: '一斤。' },
        { hanzi: '，', pinyin: '', vi: '' },
        { hanzi: '很', pinyin: 'hěn', vi: 'Rất', hv: 'Hẩn', sample: '很好吃。' },
        { hanzi: '甜', pinyin: 'tián', vi: 'Ngọt', hv: 'Điềm', sample: '这个西瓜很甜。' },
        { hanzi: '！\n', pinyin: '', vi: '' },

        { hanzi: '顾客：', pinyin: 'Gùkè:', vi: 'Khách hàng:', isSpeaker: true },
        { hanzi: '太贵了', pinyin: 'tài guì le', vi: 'Đắt quá rồi', hv: 'Thái Quý Liễu', sample: '太贵了，便宜点。' },
        { hanzi: '，', pinyin: '', vi: '' },
        { hanzi: '便宜', pinyin: 'piányi', vi: 'Rẻ', hv: 'Tiện Nghi', sample: '这件衣服很便宜。' },
        { hanzi: '一点吧', pinyin: 'yīdiǎn ba', vi: 'Một chút đi', hv: 'Nhất Điểm Ba', sample: '快一点吧。' },
        { hanzi: '。', pinyin: '', vi: '' }
      ],
      vietnameseTranslation: 'Khách hàng: Ông chủ, táo bao nhiêu tiền một cân?\nChủ tiệm: 5 tệ một cân, rất ngọt đấy!\nKhách hàng: Đắt quá rồi, bớt một chút đi!',
      quiz: {
        question: 'Câu hỏi: Một cân táo ban đầu ông chủ bán với giá bao nhiêu?',
        options: [
          { text: 'A. 三块钱 (3 tệ)', correct: false },
          { text: 'B. 五块钱 (5 tệ)', correct: true },
          { text: 'C. 十块钱 (10 tệ)', correct: false },
          { text: 'D. 八块钱 (8 tệ)', correct: false }
        ]
      }
    },

    listening: {
      audioSpeed: 1,
      dialogues: [
        {
          id: 0,
          hanzi: '老板，请问这个多少钱？',
          pinyin: 'Lǎobǎn, qǐngwèn zhège duōshǎo qián?',
          vi: 'Ông chủ, xin hỏi cái này bao nhiêu tiền?'
        },
        {
          id: 1,
          hanzi: '这个十块钱一件。',
          pinyin: 'Zhège shí kuài qián yī jiàn.',
          vi: 'Cái này mười tệ một chiếc.'
        },
        {
          id: 2,
          hanzi: '太贵了，便宜一点可以吗？',
          pinyin: 'Tài guì le, piányi yīdiǎn kěyǐ ma?',
          vi: 'Đắt quá, rẻ một chút được không?'
        }
      ],
      quiz: {
        prompt: 'Nghe đoạn âm thanh và điền từ còn thiếu vào chỗ trống:',
        sentencePrefix: '太贵了，',
        missingWord: '便宜',
        sentenceSuffix: '一点可以吗？',
        pinyinHint: 'Tài guì le, (piányi) yīdiǎn kěyǐ ma?'
      }
    },

    speaking: {
      targetHanzi: '这个多少钱',
      targetPinyin: 'Zhège duōshǎo qián',
      vietnameseMeaning: 'Cái này bao nhiêu tiền?',
      sentences: [
        { hanzi: '老板，请问这个多少钱？', pinyin: 'Lǎobǎn, qǐngwèn zhège duōshǎo qián?', vi: 'Ông chủ, xin hỏi cái này bao nhiêu tiền?' },
        { hanzi: '太贵了，便宜一点可以吗？', pinyin: 'Tài guì le, piányi yīdiǎn kěyǐ ma?', vi: 'Đắt quá rồi, rẻ một chút được không?' },
        { hanzi: '我想买两斤红苹果。', pinyin: 'Wǒ xiǎng mǎi liǎng jīn hóng píngguǒ.', vi: 'Tôi muốn mua 2 cân táo đỏ.' },
        { hanzi: '请问可以用微信扫码支付吗？', pinyin: 'Qǐngwèn kěyǐ yòng Wēixìn sǎomǎ zhīfù ma?', vi: 'Xin hỏi có thể dùng WeChat quét mã thanh toán không?' },
        { hanzi: '一共三十块钱，谢谢老板！', pinyin: 'Yīgòng sānshí kuài qián, xièxie lǎobǎn!', vi: 'Tổng cộng 30 tệ, cảm ơn ông chủ!' }
      ]
    },

    writing: {
      targetChar: '买',
      charPinyin: 'mǎi',
      charMeaning: 'Mãi (trong Mua sắm, Mua hàng)',
      charStrokes: '6 nét: 横折, 点, 横, 撇, 点, 点',
      compositionTask: {
        prompt: 'Dịch sang tiếng Trung: "Tôi muốn mua một ly cà phê"',
        expectedKeywords: ['我想', '买', '咖啡'],
        sampleSolution: '我想买一杯咖啡 (Wǒ xiǎng mǎi yībēi kāfēi)',
        explanation: '我想 (Tôi muốn) + 买 (Mua) + 一杯 (Một ly/cốc) + 咖啡 (Cà phê).'
      },
      characters: [
        {
          targetChar: '买',
          charPinyin: 'mǎi',
          charMeaning: 'Mãi (Mua sắm, Mua đồ)',
          charStrokes: '6 nét: 横折, 点, 横, 撇, 点, 点',
          compositionPrompt: 'Dịch câu: "Tôi muốn mua hoa quả"',
          expectedKeywords: ['我', '买', '水果'],
          sampleSolution: '我想买水果 (Wǒ xiǎng mǎi shuǐguǒ)',
          explanation: '我想 (Tôi muốn) + 买水果 (Mua hoa quả)'
        },
        {
          targetChar: '钱',
          charPinyin: 'qián',
          charMeaning: 'Tiền (Tiền bạc, Giá cả)',
          charStrokes: '10 nét: 撇, 横, 横, 竖提, 横, 斜钩, 撇, 点',
          compositionPrompt: 'Dịch câu: "Cái này bao nhiêu tiền?"',
          expectedKeywords: ['多少钱'],
          sampleSolution: '这个多少钱？ (Zhège duōshǎo qián?)',
          explanation: '这个 (Cái này) + 多少钱 (Bao nhiêu tiền)'
        },
        {
          targetChar: '贵',
          charPinyin: 'guì',
          charMeaning: 'Quý (Đắt đỏ, Quý phái)',
          charStrokes: '9 nét: 竖, 横折, 横, 横, 竖, 横折, 撇, 点',
          compositionPrompt: 'Dịch câu: "Chiếc áo này rất đắt"',
          expectedKeywords: ['贵'],
          sampleSolution: '这件衣服很贵 (Zhè jiàn yīfu hěn guì)',
          explanation: '这件衣服 (Bộ đồ này) + 很贵 (Rất đắt)'
        },
        {
          targetChar: '果',
          charPinyin: 'guǒ',
          charMeaning: 'Quả (Trái cây, Hoa quả, Kết quả)',
          charStrokes: '8 nét: 竖, 横折, 横, 横, 横, 竖, 撇, 捺',
          compositionPrompt: 'Dịch câu: "Tôi thích ăn táo"',
          expectedKeywords: ['苹果'],
          sampleSolution: '我喜欢吃苹果 (Wǒ xǐhuan chī píngguǒ)',
          explanation: '我喜欢 (Tôi thích) + 吃苹果 (Ăn táo)'
        }
      ]
    },

    matchingWords: [
      { id: 'w21', hanzi: '多少钱', pinyin: 'duōshǎo qián', vi: 'Bao nhiêu tiền' },
      { id: 'w22', hanzi: '便宜', pinyin: 'piányi', vi: 'Rẻ' },
      { id: 'w23', hanzi: '贵', pinyin: 'guì', vi: 'Đắt' },
      { id: 'w24', hanzi: '苹果', pinyin: 'píngguǒ', vi: 'Quả táo' },
      { id: 'w25', hanzi: '咖啡', pinyin: 'kāfēi', vi: 'Cà phê' },
      { id: 'w26', hanzi: '一共', pinyin: 'yīgòng', vi: 'Tổng cộng' }
    ]
  },

  {
    id: 'hsk3-lesson3',
    level: 'HSK 3',
    title: 'Bài 3: Du lịch & Đời sống (旅行与生活)',
    description: 'Hỏi đường, phương tiện giao thông và bàn luận về thời tiết.',
    
    reading: {
      title: '去火车站怎么走 (Đến ga tàu hỏa đi như thế nào?)',
      tokens: [
        { hanzi: '李明：', pinyin: 'Lǐ Míng:', vi: 'Lý Minh:', isSpeaker: true },
        { hanzi: '请问', pinyin: 'qǐngwèn', vi: 'Xin hỏi', hv: 'Thỉnh Vấn', sample: '请问去图书馆怎么走？' },
        { hanzi: '，', pinyin: '', vi: '' },
        { hanzi: '火车站', pinyin: 'huǒchēzhàn', vi: 'Ga tàu hỏa', hv: 'Hỏa Xa Trạm', sample: '火车站离这里不远。' },
        { hanzi: '怎么走', pinyin: 'zěnme zǒu', vi: 'Đi như thế nào', hv: 'Chẩm Ma Tẩu', sample: '请问怎么走？' },
        { hanzi: '？\n', pinyin: '', vi: '' },

        { hanzi: '路人：', pinyin: 'Lùrén:', vi: 'Người qua đường:', isSpeaker: true },
        { hanzi: '一直', pinyin: 'yīzhí', vi: 'Đi thẳng', hv: 'Nhất Trực', sample: '一直往前走。' },
        { hanzi: '往', pinyin: 'wǎng', vi: 'Hướng về / Về phía', hv: 'Vãng', sample: '往右拐。' },
        { hanzi: '前', pinyin: 'qián', vi: 'Phía trước', hv: 'Tiền', sample: '前面是超市。' },
        { hanzi: '走', pinyin: 'zǒu', vi: 'Đi', hv: 'Tẩu', sample: '慢慢走。' },
        { hanzi: '，', pinyin: '', vi: '' },
        { hanzi: '到', pinyin: 'dào', vi: 'Đến', hv: 'Đáo', sample: '到了学校。' },
        { hanzi: '路口', pinyin: 'lùkǒu', vi: 'Ngã tư / Giao lộ', hv: 'Lộ Khẩu', sample: '在十字路口。' },
        { hanzi: '往左拐', pinyin: 'wǎng zuǒ guǎi', vi: 'Rẽ trái', hv: 'Vãng Tả Quải', sample: '往左拐就到了。' },
        { hanzi: '。', pinyin: '', vi: '' }
      ],
      vietnameseTranslation: 'Lý Minh: Xin hỏi, đi đến ga tàu hỏa đi như thế nào?\nNgười qua đường: Hãy đi thẳng về phía trước, đến ngã tư thì rẽ trái nhé.',
      quiz: {
        question: 'Câu hỏi: Khi đến ngã tư (路口), người qua đường chỉ dẫn rẽ hướng nào?',
        options: [
          { text: 'A. 往右拐 (Rẽ phải)', correct: false },
          { text: 'B. 往左拐 (Rẽ trái)', correct: true },
          { text: 'C. 往后走 (Đi lùi lại)', correct: false },
          { text: 'D. 坐出租车 (Đi taxi)', correct: false }
        ]
      }
    },

    listening: {
      audioSpeed: 1,
      dialogues: [
        {
          id: 0,
          hanzi: '请问，去火车站怎么走？',
          pinyin: 'Qǐngwèn, qù huǒchēzhàn zěnme zǒu?',
          vi: 'Xin hỏi, đi đến ga xe lửa đi như thế nào?'
        },
        {
          id: 1,
          hanzi: '一直往前走，到了十字路口往左拐。',
          pinyin: 'Yīzhí wǎng qián zǒu, dào le shízì lùkǒu wǎng zuǒ guǎi.',
          vi: 'Đi thẳng về phía trước, tới ngã tư rẽ trái.'
        }
      ],
      quiz: {
        prompt: 'Nghe và điền từ:',
        sentencePrefix: '一直往',
        missingWord: '前',
        sentenceSuffix: '走。',
        pinyinHint: 'Yīzhí wǎng (qián) zǒu.'
      }
    },

    speaking: {
      targetHanzi: '去火车站怎么走',
      targetPinyin: 'Qù huǒchēzhàn zěnme zǒu',
      vietnameseMeaning: 'Đi đến ga tàu hỏa đi như thế nào?'
    },

    writing: {
      targetChar: '茶',
      charPinyin: 'chá',
      charMeaning: 'Trà (trong Uống trà, Trà sữa)',
      charStrokes: '9 nét: 横, 竖, 竖, 撇, 捺, 横, 撇, 竖钩, 点',
      compositionTask: {
        prompt: 'Dịch sang tiếng Trung: "Hôm nay thời tiết rất đẹp"',
        expectedKeywords: ['今天', '天气', '很好'],
        sampleSolution: '今天天气很好 (Jīntiān tiānqì hěn hǎo)',
        explanation: '今天 (Hôm nay) + 天气 (Thời tiết) + 很 (Rất) + 好 (Tốt/đẹp).'
      }
    },

    matchingWords: [
      { id: 'w31', hanzi: '火车站', pinyin: 'huǒchēzhàn', vi: 'Ga tàu hỏa' },
      { id: 'w32', hanzi: '一直', pinyin: 'yīzhí', vi: 'Thẳng / Liên tục' },
      { id: 'w33', hanzi: '左拐', pinyin: 'zuǒ guǎi', vi: 'Rẽ trái' },
      { id: 'w34', hanzi: '右拐', pinyin: 'yòu guǎi', vi: 'Rẽ phải' },
      { id: 'w35', hanzi: '天气', pinyin: 'tiānqì', vi: 'Thời tiết' },
      { id: 'w36', hanzi: '喝茶', pinyin: 'hē chá', vi: 'Uống trà' }
    ]
  },

  {
    id: 'hsk1-lesson2',
    level: 'HSK 1',
    title: 'Bài 4: Gia đình & Người thân (家庭与家人)',
    description: 'Giới thiệu các thành viên trong gia đình, nghề nghiệp và mối quan hệ.',
    reading: {
      title: '我家有四口人 (Nhà tôi có bốn người)',
      tokens: [
        { hanzi: '李明：', pinyin: 'Lǐ Míng:', vi: 'Lý Minh:', isSpeaker: true },
        { hanzi: '你家', pinyin: 'nǐ jiā', vi: 'Nhà bạn', hv: 'Nhĩ Gia', sample: '你家在哪里？' },
        { hanzi: '有', pinyin: 'yǒu', vi: 'Có', hv: 'Hữu', sample: '我有一本书。' },
        { hanzi: '几口人', pinyin: 'jǐ kǒu rén', vi: 'Mấy người', hv: 'Kỷ Khẩu Nhân', sample: '你家有几口人？' },
        { hanzi: '？\n', pinyin: '', vi: '' },
        { hanzi: '大卫：', pinyin: 'Dàwèi:', vi: 'David:', isSpeaker: true },
        { hanzi: '我家', pinyin: 'wǒ jiā', vi: 'Nhà tôi', hv: 'Ngã Gia', sample: '我家在北京。' },
        { hanzi: '有', pinyin: 'yǒu', vi: 'Có', hv: 'Hữu' },
        { hanzi: '四口人', pinyin: 'sì kǒu rén', vi: 'Bốn người', hv: 'Tứ Khẩu Nhân' },
        { hanzi: '：', pinyin: '', vi: '' },
        { hanzi: '爸爸', pinyin: 'bàba', vi: 'Bố', hv: 'Bà Ba', sample: '我爸爸是医生。' },
        { hanzi: '、', pinyin: '', vi: '' },
        { hanzi: '妈妈', pinyin: 'māma', vi: 'Mẹ', hv: 'Ma Ma', sample: '我妈妈是老师。' },
        { hanzi: '、', pinyin: '', vi: '' },
        { hanzi: '哥哥', pinyin: 'gēge', vi: 'Anh trai', hv: 'Ca Ca', sample: '哥哥喜欢运动。' },
        { hanzi: '和', pinyin: 'hé', vi: 'Và', hv: 'Hòa', sample: '我和你。' },
        { hanzi: '我', pinyin: 'wǒ', vi: 'Tôi', hv: 'Ngã' },
        { hanzi: '。', pinyin: '', vi: '' },
        { hanzi: '我很爱', pinyin: 'wǒ hěn ài', vi: 'Tôi rất yêu', hv: 'Ngã Hẩn Ái', sample: '我爱我的家。' },
        { hanzi: '我的家', pinyin: 'wǒ de jiā', vi: 'Gia đình tôi', hv: 'Ngã Đích Gia' },
        { hanzi: '！', pinyin: '', vi: '' }
      ],
      vietnameseTranslation: 'Lý Minh: Nhà bạn có mấy người?\nDavid: Nhà tôi có 4 người: Bố, mẹ, anh trai và tôi. Tôi rất yêu gia đình của mình!',
      quiz: {
        question: 'Câu hỏi: Gia đình của David có tổng cộng bao nhiêu thành viên?',
        options: [
          { text: 'A. 三口人 (3 người)', correct: false },
          { text: 'B. 四口人 (4 người)', correct: true },
          { text: 'C. 五口人 (5 người)', correct: false },
          { text: 'D. 六口人 (6 người)', correct: false }
        ]
      }
    },
    listening: {
      audioSpeed: 1,
      dialogues: [
        { id: 0, hanzi: '你家有几口人？', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', vi: 'Nhà bạn có mấy người?' },
        { id: 1, hanzi: '我家有爸爸、妈妈和我。', pinyin: 'Wǒ jiā yǒu bàba, māma hé wǒ.', vi: 'Nhà tôi có bố, mẹ và tôi.' },
        { id: 2, hanzi: '你爸爸做什么工作？', pinyin: 'Nǐ bàba zuò shénme gōngzuò?', vi: 'Bố bạn làm nghề gì?' },
        { id: 3, hanzi: '我爸爸是医生。', pinyin: 'Wǒ bàba shì yīshēng.', vi: 'Bố tôi là bác sĩ.' }
      ],
      quiz: {
        prompt: 'Nghe đoạn âm thanh và điền từ còn thiếu vào chỗ trống:',
        sentencePrefix: '我家有',
        missingWord: '爸爸',
        sentenceSuffix: '、妈妈和我。',
        pinyinHint: 'Wǒ jiā yǒu (bàba), māma hé wǒ.'
      }
    },
    speaking: {
      targetHanzi: '我很爱我的家人',
      targetPinyin: 'Wǒ hěn ài wǒ de jiārén',
      vietnameseMeaning: 'Tôi rất yêu gia đình của mình'
    },
    writing: {
      targetChar: '家',
      charPinyin: 'jiā',
      charMeaning: 'Gia (trong Gia đình, Nhà cửa)',
      charStrokes: '10 nét: 点, 点, 横撇, 撇, 撇, 撇, 撇, 捺, 撇, 捺',
      compositionTask: {
        prompt: 'Dịch sang tiếng Trung: "Bố tôi là bác sĩ"',
        expectedKeywords: ['我爸爸', '是', '医生'],
        sampleSolution: '我爸爸是医生 (Wǒ bàba shì yīshēng)',
        explanation: '我爸爸 (Bố tôi) + 是 (Là) + 医生 (Bác sĩ).'
      }
    },
    matchingWords: [
      { id: 'w41', hanzi: '爸爸', pinyin: 'bàba', vi: 'Bố' },
      { id: 'w42', hanzi: '妈妈', pinyin: 'māma', vi: 'Mẹ' },
      { id: 'w43', hanzi: '哥哥', pinyin: 'gēge', vi: 'Anh trai' },
      { id: 'w44', hanzi: '姐姐', pinyin: 'jiějie', vi: 'Chị gái' },
      { id: 'w45', hanzi: '医生', pinyin: 'yīshēng', vi: 'Bác sĩ' },
      { id: 'w46', hanzi: '老师', pinyin: 'lǎoshī', vi: 'Thầy cô' }
    ]
  },

  {
    id: 'hsk1-lesson3',
    level: 'HSK 1',
    title: 'Bài 5: Thời gian & Sinh hoạt (时间与日常生活)',
    description: 'Hỏi giờ giấc, ngày tháng trong tuần và các hoạt động sinh hoạt cơ bản.',
    reading: {
      title: '现在几点了？(Bây giờ là mấy giờ rồi?)',
      tokens: [
        { hanzi: '王兰：', pinyin: 'Wáng Lán:', vi: 'Vương Lan:', isSpeaker: true },
        { hanzi: '现在', pinyin: 'xiànzài', vi: 'Bây giờ / Hiện tại', hv: 'Hiện Tại', sample: '现在几点？' },
        { hanzi: '几点', pinyin: 'jǐ diǎn', vi: 'Mấy giờ', hv: 'Kỷ Điểm', sample: '现在几点了？' },
        { hanzi: '了？\n', pinyin: '', vi: '' },
        { hanzi: '大卫：', pinyin: 'Dàwèi:', vi: 'David:', isSpeaker: true },
        { hanzi: '现在', pinyin: 'xiànzài', vi: 'Bây giờ', hv: 'Hiện Tại' },
        { hanzi: '早上', pinyin: 'zǎoshang', vi: 'Buổi sáng', hv: 'Tảo Thượng', sample: '早上好！' },
        { hanzi: '八点', pinyin: 'bā diǎn', vi: '8 giờ', hv: 'Bát Điểm' },
        { hanzi: '半', pinyin: 'bàn', vi: 'Rưỡi / 30 phút', hv: 'Bán', sample: '八点半。' },
        { hanzi: '。', pinyin: '', vi: '' },
        { hanzi: '你', pinyin: 'nǐ', vi: 'Bạn', hv: 'Nhĩ' },
        { hanzi: '今天', pinyin: 'jīntiān', vi: 'Hôm nay', hv: 'Kim Thiên', sample: '今天星期几？' },
        { hanzi: '去学校', pinyin: 'qù xuéxiào', vi: 'Đi đến trường', hv: 'Khứ Học Hiệu', sample: '我去学校。' },
        { hanzi: '吗？\n', pinyin: '', vi: '' },
        { hanzi: '王兰：', pinyin: 'Wáng Lán:', vi: 'Vương Lan:', isSpeaker: true },
        { hanzi: '去', pinyin: 'qù', vi: 'Đi', hv: 'Khứ' },
        { hanzi: '，', pinyin: '', vi: '' },
        { hanzi: '我', pinyin: 'wǒ', vi: 'Tôi', hv: 'Ngã' },
        { hanzi: '九点', pinyin: 'jiǔ diǎn', vi: '9 giờ', hv: 'Cửu Điểm' },
        { hanzi: '有', pinyin: 'yǒu', vi: 'Có', hv: 'Hữu' },
        { hanzi: '汉语课', pinyin: 'hànyǔ kè', vi: 'Tiết học tiếng Trung', hv: 'Hán Ngữ Khóa', sample: '我有汉语课。' },
        { hanzi: '。', pinyin: '', vi: '' }
      ],
      vietnameseTranslation: 'Vương Lan: Bây giờ là mấy giờ rồi?\nDavid: Bây giờ là 8 giờ rưỡi sáng. Hôm nay bạn có đến trường không?\nVương Lan: Có, 9 giờ tôi có tiết học tiếng Trung.',
      quiz: {
        question: 'Câu hỏi: Vương Lan có tiết học tiếng Trung lúc mấy giờ?',
        options: [
          { text: 'A. 八点 (8 giờ)', correct: false },
          { text: 'B. 八点半 (8 giờ rưỡi)', correct: false },
          { text: 'C. 九点 (9 giờ)', correct: true },
          { text: 'D. 十点 (10 giờ)', correct: false }
        ]
      }
    },
    listening: {
      audioSpeed: 1,
      dialogues: [
        { id: 0, hanzi: '请问，现在几点了？', pinyin: 'Qǐngwèn, xiànzài jǐ diǎn le?', vi: 'Xin hỏi bây giờ là mấy giờ rồi?' },
        { id: 1, hanzi: '现在是早上八点半。', pinyin: 'Xiànzài shì zǎoshang bā diǎn bàn.', vi: 'Bây giờ là 8 giờ rưỡi sáng.' },
        { id: 2, hanzi: '你几点去上课？', pinyin: 'Nǐ jǐ diǎn qù shàngkè?', vi: 'Bạn mấy giờ đi học?' },
        { id: 3, hanzi: '我九点去上课。', pinyin: 'Wǒ jiǔ diǎn qù shàngkè.', vi: 'Tôi 9 giờ đi học.' }
      ],
      quiz: {
        prompt: 'Nghe đoạn âm thanh và điền từ chỉ thời gian còn thiếu:',
        sentencePrefix: '现在是早上',
        missingWord: '八点半',
        sentenceSuffix: '。',
        pinyinHint: 'Xiànzài shì zǎoshang (bā diǎn bàn).'
      }
    },
    speaking: {
      targetHanzi: '现在是早上八点半',
      targetPinyin: 'Xiànzài shì zǎoshang bā diǎn bàn',
      vietnameseMeaning: 'Bây giờ là 8 giờ rưỡi sáng'
    },
    writing: {
      targetChar: '日',
      charPinyin: 'rì',
      charMeaning: 'Nhật (trong Mặt trời, Ngày)',
      charStrokes: '4 nét: 竖, 横折, 横, 横',
      compositionTask: {
        prompt: 'Dịch sang tiếng Trung: "Hôm nay là ngày 1 tháng 1"',
        expectedKeywords: ['今天', '一月', '一日'],
        sampleSolution: '今天是一月一日 (Jīntiān shì yī yuè yī rì)',
        explanation: 'Trong tiếng Trung, quy tắc trật tự thời gian từ lớn đến nhỏ: Năm + Tháng + Ngày.'
      }
    },
    matchingWords: [
      { id: 'w51', hanzi: '现在', pinyin: 'xiànzài', vi: 'Bây giờ' },
      { id: 'w52', hanzi: '早上', pinyin: 'zǎoshang', vi: 'Buổi sáng' },
      { id: 'w53', hanzi: '晚上', pinyin: 'wǎnshang', vi: 'Buổi tối' },
      { id: 'w54', hanzi: '今天', pinyin: 'jīntiān', vi: 'Hôm nay' },
      { id: 'w55', hanzi: '明天', pinyin: 'míngtiān', vi: 'Ngày mai' },
      { id: 'w56', hanzi: '学校', pinyin: 'xuéxiào', vi: 'Trường học' }
    ]
  },

  {
    id: 'hsk2-lesson5',
    level: 'HSK 2',
    title: 'Bài 6: Nhà hàng & Thưởng thức ẩm thực (餐馆点餐与美食)',
    description: 'Gọi món ăn truyền thống Trung Quốc, hỏi khẩu vị và xin thanh toán hóa đơn.',
    reading: {
      title: '在餐馆吃中国菜 (Ăn món Trung Quốc tại nhà hàng)',
      tokens: [
        { hanzi: '服务员：', pinyin: 'Fúwùyuán:', vi: 'Phục vụ:', isSpeaker: true },
        { hanzi: '欢迎光临', pinyin: 'huānyíng guānglín', vi: 'Kính chào quý khách', hv: 'Hoan Nghênh Quang Lâm', sample: '欢迎光临本店！' },
        { hanzi: '！', pinyin: '', vi: '' },
        { hanzi: '这是', pinyin: 'zhè shì', vi: 'Đây là', hv: 'Giá Thị' },
        { hanzi: '菜单', pinyin: 'càidān', vi: 'Thực đơn', hv: 'Thái Đơn', sample: '请看菜单。' },
        { hanzi: '，请问', pinyin: 'qǐngwèn', vi: 'Xin hỏi', hv: 'Thỉnh Vấn' },
        { hanzi: '想吃什么', pinyin: 'xiǎng chī shénme', vi: 'Muốn ăn gì', hv: 'Tưởng Ngật Thập Ma' },
        { hanzi: '？\n', pinyin: '', vi: '' },
        { hanzi: '客人：', pinyin: 'Kèrén:', vi: 'Khách:', isSpeaker: true },
        { hanzi: '我们要', pinyin: 'wǒmen yào', vi: 'Chúng tôi muốn', hv: 'Ngã Môn Yếu' },
        { hanzi: '一份', pinyin: 'yī fèn', vi: 'Một phần / Một suất', hv: 'Nhất Phần' },
        { hanzi: '北京烤鸭', pinyin: 'Běijīng kǎoyā', vi: 'Vịt quay Bắc Kinh', hv: 'Bắc Kinh Khảo Áp', sample: '北京烤鸭很好吃。' },
        { hanzi: '，两碗', pinyin: 'liǎng wǎn', vi: 'Hai bát', hv: 'Lưỡng Oản' },
        { hanzi: '米饭', pinyin: 'mǐfàn', vi: 'Cơm trắng', hv: 'Mễ Phạn', sample: '来两碗米饭。' },
        { hanzi: '。', pinyin: '', vi: '' },
        { hanzi: '服务员：', pinyin: 'Fúwùyuán:', vi: 'Phục vụ:', isSpeaker: true },
        { hanzi: '好的', pinyin: 'hǎode', vi: 'Vâng / Được rồi', hv: 'Hảo Đích' },
        { hanzi: '，请稍等', pinyin: 'qǐng shāoděng', vi: 'Xin vui lòng chờ một lát', hv: 'Thỉnh Sảo Đẳng', sample: '请稍等一下。' },
        { hanzi: '！', pinyin: '', vi: '' }
      ],
      vietnameseTranslation: 'Nhân viên: Kính chào quý khách! Đây là thực đơn, xin hỏi quý khách muốn dùng món gì?\nKhách: Cho chúng tôi một phần vịt quay Bắc Kinh và hai bát cơm trắng nhé.\nNhân viên: Vâng ạ, xin quý khách vui lòng đợi một chút!',
      quiz: {
        question: 'Câu hỏi: Vị khách đã gọi món ăn đặc sản nào của Trung Quốc?',
        options: [
          { text: 'A. 麻婆豆腐 (Đậu hũ Tứ Xuyên)', correct: false },
          { text: 'B. 北京烤鸭 (Vịt quay Bắc Kinh)', correct: true },
          { text: 'C. 水饺 (Sủi cảo)', correct: false },
          { text: 'D. 面条 (Mì sợi)', correct: false }
        ]
      }
    },
    listening: {
      audioSpeed: 1,
      dialogues: [
        { id: 0, hanzi: '服务员，请给我们一份菜单。', pinyin: 'Fúwùyuán, qǐng gěi wǒmen yī fèn càidān.', vi: 'Phục vụ ơi, xin cho chúng tôi một cuốn thực đơn.' },
        { id: 1, hanzi: '您好，您想吃点什么？', pinyin: 'Nín hǎo, nín xiǎng chī diǎn shénme?', vi: 'Dạ chào quý khách, quý khách muốn dùng món gì?' },
        { id: 2, hanzi: '我们要一份烤鸭和两碗米饭。', pinyin: 'Wǒmen yào yī fèn kǎoyā hé liǎng wǎn mǐfàn.', vi: 'Chúng tôi muốn 1 phần vịt quay và 2 bát cơm.' }
      ],
      quiz: {
        prompt: 'Nghe đoạn âm thanh và điền lượng từ còn thiếu:',
        sentencePrefix: '我们要',
        missingWord: '一份',
        sentenceSuffix: '北京烤鸭。',
        pinyinHint: 'Wǒmen yào (yī fèn) Běijīng kǎoyā.'
      }
    },
    speaking: {
      targetHanzi: '服务员我想点菜',
      targetPinyin: 'Fúwùyuán wǒ xiǎng diǎncài',
      vietnameseMeaning: 'Phục vụ ơi tôi muốn gọi món'
    },
    writing: {
      targetChar: '食',
      charPinyin: 'shí',
      charMeaning: 'Thực (trong Ẩm thực, Món ăn)',
      charStrokes: '9 nét: 撇, 捺, 点, 横折, 横, 横, 竖提, 点',
      compositionTask: {
        prompt: 'Dịch sang tiếng Trung: "Món ăn Trung Quốc rất ngon"',
        expectedKeywords: ['中国菜', '很好吃'],
        sampleSolution: '中国菜很好吃 (Zhōngguó cài hěn hǎochī)',
        explanation: '中国菜 (Món ăn Trung Quốc) + 很 (Rất) + 好吃 (Ăn ngon).'
      }
    },
    matchingWords: [
      { id: 'w61', hanzi: '菜单', pinyin: 'càidān', vi: 'Thực đơn' },
      { id: 'w62', hanzi: '服务员', pinyin: 'fúwùyuán', vi: 'Nhân viên phục vụ' },
      { id: 'w63', hanzi: '点菜', pinyin: 'diǎncài', vi: 'Gọi món' },
      { id: 'w64', hanzi: '买单', pinyin: 'mǎidān', vi: 'Thanh toán tiền' },
      { id: 'w65', hanzi: '好吃', pinyin: 'hǎochī', vi: 'Ăn ngon miệng' },
      { id: 'w66', hanzi: '米饭', pinyin: 'mǐfàn', vi: 'Cơm trắng' }
    ]
  },

  {
    id: 'hsk2-lesson6',
    level: 'HSK 2',
    title: 'Bài 7: Thời tiết & Bốn mùa (天气与四季)',
    description: 'Miêu tả khí hậu, nhiệt độ, các mùa trong năm và trang phục phù hợp.',
    reading: {
      title: '北京的四季 (Bốn mùa ở Bắc Kinh)',
      tokens: [
        { hanzi: '北京的', pinyin: 'Běijīng de', vi: 'Của Bắc Kinh', hv: 'Bắc Kinh Đích' },
        { hanzi: '秋天', pinyin: 'qiūtiān', vi: 'Mùa thu', hv: 'Thu Thiên', sample: '北京的秋天最美。' },
        { hanzi: '最漂亮', pinyin: 'zuì piàoliang', vi: 'Đẹp nhất', hv: 'Tối Phiêu Lượng' },
        { hanzi: '。', pinyin: '', vi: '' },
        { hanzi: '不冷', pinyin: 'bù lěng', vi: 'Không lạnh', hv: 'Bất Lãnh', sample: '今天不冷。' },
        { hanzi: '也不热', pinyin: 'yě bù rè', vi: 'Cũng không nóng', hv: 'Dã Bất Nhiệt' },
        { hanzi: '，天气', pinyin: 'tiānqì', vi: 'Thời tiết', hv: 'Thiên Khí', sample: '今天天气好。' },
        { hanzi: '非常', pinyin: 'fēicháng', vi: 'Vô cùng / Rất', hv: 'Phi Thường' },
        { hanzi: '舒服', pinyin: 'shūfu', vi: 'Dễ chịu', hv: 'Thư Phục', sample: '非常舒服。' },
        { hanzi: '。\n', pinyin: '', vi: '' },
        { hanzi: '冬天', pinyin: 'dōngtiān', vi: 'Mùa đông', hv: 'Đông Thiên', sample: '冬天很冷。' },
        { hanzi: '很冷', pinyin: 'hěn lěng', vi: 'Rất lạnh', hv: 'Hẩn Lãnh' },
        { hanzi: '，有时', pinyin: 'yǒushí', vi: 'Có lúc / Thỉnh thoảng', hv: 'Hữu Thời' },
        { hanzi: '会下雪', pinyin: 'huì xiàxuě', vi: 'Sẽ có tuyết rơi', hv: 'Hội Hạ Tuyết', sample: '明天会下雪。' },
        { hanzi: '。', pinyin: '', vi: '' }
      ],
      vietnameseTranslation: 'Mùa thu ở Bắc Kinh là đẹp nhất. Trời không lạnh cũng không nóng, khí hậu vô cùng dễ chịu. Mùa đông rất lạnh và thỉnh thoảng có tuyết rơi.',
      quiz: {
        question: 'Câu hỏi: Mùa nào trong năm ở Bắc Kinh được miêu tả là đẹp và dễ chịu nhất?',
        options: [
          { text: 'A. 春天 (Mùa xuân)', correct: false },
          { text: 'B. 夏天 (Mùa hè)', correct: false },
          { text: 'C. 秋天 (Mùa thu)', correct: true },
          { text: 'D. 冬天 (Mùa đông)', correct: false }
        ]
      }
    },
    listening: {
      audioSpeed: 1,
      dialogues: [
        { id: 0, hanzi: '明天的天气怎么样？', pinyin: 'Míngtiān de tiānqì zěnmeyàng?', vi: 'Thời tiết ngày mai thế nào?' },
        { id: 1, hanzi: '明天是晴天，不冷也不热。', pinyin: 'Míngtiān shì qíngtiān, bù lěng yě bù rè.', vi: 'Ngày mai trời nắng ráo, không lạnh cũng không nóng.' },
        { id: 2, hanzi: '那太好了，我们一起去公园吧！', pinyin: 'Nà tài hǎo le, wǒmen yīqǐ qù gōngyuán ba!', vi: 'Thế thì tuyệt quá, chúng ta cùng đi công viên chơi nhé!' }
      ],
      quiz: {
        prompt: 'Nghe đoạn âm thanh và điền từ miêu tả thời tiết:',
        sentencePrefix: '明天是',
        missingWord: '晴天',
        sentenceSuffix: '，不冷也不热。',
        pinyinHint: 'Míngtiān shì (qíngtiān), bù lěng yě bù rè.'
      }
    },
    speaking: {
      targetHanzi: '今天天气非常晴朗',
      targetPinyin: 'Jīntiān tiānqì fēicháng qínglǎng',
      vietnameseMeaning: 'Hôm nay thời tiết vô cùng quang đãng nắng đẹp'
    },
    writing: {
      targetChar: '雨',
      charPinyin: 'yǔ',
      charMeaning: 'Vũ (trong Cơn mưa, Trời mưa)',
      charStrokes: '8 nét: 横, 竖, 横折钩, 竖, 点, 点, 点, 点',
      compositionTask: {
        prompt: 'Dịch sang tiếng Trung: "Bên ngoài đang mưa to"',
        expectedKeywords: ['外面', '下', '大雨'],
        sampleSolution: '外面在下大雨 (Wàimiàn zài xià dàyǔ)',
        explanation: '外面 (Bên ngoài) + 在下 (Đang rơi/đang trút) + 大雨 (Mưa to).'
      }
    },
    matchingWords: [
      { id: 'w71', hanzi: '天气', pinyin: 'tiānqì', vi: 'Thời tiết' },
      { id: 'w72', hanzi: '晴天', pinyin: 'qíngtiān', vi: 'Trời nắng đẹp' },
      { id: 'w73', hanzi: '下雨', pinyin: 'xiàyǔ', vi: 'Trời đổ mưa' },
      { id: 'w74', hanzi: '下雪', pinyin: 'xiàxuě', vi: 'Tuyết rơi' },
      { id: 'w75', hanzi: '很冷', pinyin: 'hěn lěng', vi: 'Rất lạnh giá' },
      { id: 'w76', hanzi: '很热', pinyin: 'hěn rè', vi: 'Rất nóng bức' }
    ]
  },

  {
    id: 'hsk3-lesson8',
    level: 'HSK 3',
    title: 'Bài 8: Khách sạn & Thủ tục lưu trú (酒店入住与服务)',
    description: 'Thủ tục nhận phòng (check-in), hỏi mật khẩu wifi, đổi phòng và thanh toán tiền phòng.',
    reading: {
      title: '在酒店前台办理入住 (Check-in tại quầy lễ tân khách sạn)',
      tokens: [
        { hanzi: '接待员：', pinyin: 'Jiēdàiyuán:', vi: 'Lễ tân:', isSpeaker: true },
        { hanzi: '您好', pinyin: 'nín hǎo', vi: 'Chào quý khách', hv: 'Nẫm Hảo' },
        { hanzi: '，请问', pinyin: 'qǐngwèn', vi: 'Xin hỏi', hv: 'Thỉnh Vấn' },
        { hanzi: '有预订吗', pinyin: 'yǒu yùdìng ma', vi: 'Có đặt phòng trước không', hv: 'Hữu Dự Đính', sample: '您有预订吗？' },
        { hanzi: '？\n', pinyin: '', vi: '' },
        { hanzi: '客人：', pinyin: 'Kèrén:', vi: 'Khách:', isSpeaker: true },
        { hanzi: '有', pinyin: 'yǒu', vi: 'Có', hv: 'Hữu' },
        { hanzi: '，我', pinyin: 'wǒ', vi: 'Tôi', hv: 'Ngã' },
        { hanzi: '在网上', pinyin: 'zài wǎngshàng', vi: 'Trên mạng internet', hv: 'Tại Võng Thượng', sample: '在网上预订。' },
        { hanzi: '预订了', pinyin: 'yùdìng le', vi: 'Đã đặt trước', hv: 'Dự Đính Liễu' },
        { hanzi: '一间', pinyin: 'yī jiān', vi: 'Một căn/phòng', hv: 'Nhất Gian' },
        { hanzi: '大床房', pinyin: 'dàchuáng fáng', vi: 'Phòng giường đôi lớn', hv: 'Đại Sàng Phòng', sample: '我要大床房。' },
        { hanzi: '。', pinyin: '', vi: '' },
        { hanzi: '这是', pinyin: 'zhè shì', vi: 'Đây là', hv: 'Giá Thị' },
        { hanzi: '我的护照', pinyin: 'wǒ de hùzhào', vi: 'Hộ chiếu của tôi', hv: 'Ngã Đích Hộ Chiếu', sample: '请出示护照。' },
        { hanzi: '。\n', pinyin: '', vi: '' },
        { hanzi: '接待员：', pinyin: 'Jiēdàiyuán:', vi: 'Lễ tân:', isSpeaker: true },
        { hanzi: '好的', pinyin: 'hǎode', vi: 'Vâng ạ', hv: 'Hảo Đích' },
        { hanzi: '，这是', pinyin: 'zhè shì', vi: 'Đây là', hv: 'Giá Thị' },
        { hanzi: '您的房卡', pinyin: 'nín de fángkǎ', vi: 'Thẻ phòng của quý khách', hv: 'Nẫm Đích Phòng Tạp', sample: '这是房卡。' },
        { hanzi: '，房间在', pinyin: 'fángjiān zài', vi: 'Phòng ở tại', hv: 'Phòng Gian Tại' },
        { hanzi: '八楼', pinyin: 'bā lóu', vi: 'Tầng 8', hv: 'Bát Lâu' },
        { hanzi: '。', pinyin: '', vi: '' }
      ],
      vietnameseTranslation: 'Lễ tân: Dạ kính chào quý khách, xin hỏi quý khách có đặt phòng trước không ạ?\nKhách: Có, tôi đã đặt một phòng giường đôi trên mạng. Đây là hộ chiếu của tôi.\nLễ tân: Vâng, đây là thẻ phòng của quý khách, phòng ở tầng 8 nhé!',
      quiz: {
        question: 'Câu hỏi: Căn phòng của người khách nằm ở tầng mấy của khách sạn?',
        options: [
          { text: 'A. 六楼 (Tầng 6)', correct: false },
          { text: 'B. 七楼 (Tầng 7)', correct: false },
          { text: 'C. 八楼 (Tầng 8)', correct: true },
          { text: 'D. 九楼 (Tầng 9)', correct: false }
        ]
      }
    },
    listening: {
      audioSpeed: 1,
      dialogues: [
        { id: 0, hanzi: '请问，酒店的无线网络密码是多少？', pinyin: 'Qǐngwèn, jiǔdiàn de wúxiàn wǎngluò mìmǎ shì duōshǎo?', vi: 'Xin hỏi mật khẩu wifi của khách sạn là bao nhiêu?' },
        { id: 1, hanzi: '密码就是您的房间号码。', pinyin: 'Mìmǎ jiù shì nín de fángjiān hàomǎ.', vi: 'Mật khẩu chính là số phòng của quý khách ạ.' },
        { id: 2, hanzi: '明天早上几点有早餐？', pinyin: 'Míngtiān zǎoshang jǐ diǎn yǒu zǎocān?', vi: 'Sáng mai mấy giờ có ăn sáng?' },
        { id: 3, hanzi: '早餐从七点到九点半。', pinyin: 'Zǎocān cóng qī diǎn dào jiǔ diǎn bàn.', vi: 'Bữa sáng từ 7 giờ đến 9 giờ rưỡi.' }
      ],
      quiz: {
        prompt: 'Nghe và điền từ còn thiếu:',
        sentencePrefix: '密码就是您的',
        missingWord: '房间号码',
        sentenceSuffix: '。',
        pinyinHint: 'Mìmǎ jiù shì nín de (fángjiān hàomǎ).'
      }
    },
    speaking: {
      targetHanzi: '这是我的护照请办理入住',
      targetPinyin: 'Zhè shì wǒ de hùzhào qǐng bànlǐ rùzhù',
      vietnameseMeaning: 'Đây là hộ chiếu của tôi xin làm thủ tục nhận phòng'
    },
    writing: {
      targetChar: '住',
      charPinyin: 'zhù',
      charMeaning: 'Trú (trong Cư trú, Lưu trú, Ở)',
      charStrokes: '7 nét: 撇, 竖, 点, 横, 横, 竖, 横',
      compositionTask: {
        prompt: 'Dịch sang tiếng Trung: "Tôi muốn đặt một phòng đơn"',
        expectedKeywords: ['我想', '预订', '单人间'],
        sampleSolution: '我想预订一间单人间 (Wǒ xiǎng yùdìng yī jiān dānrénjiān)',
        explanation: '我想 (Tôi muốn) + 预订 (Đặt trước) + 一间单人间 (Một phòng đơn).'
      }
    },
    matchingWords: [
      { id: 'w81', hanzi: '预订', pinyin: 'yùdìng', vi: 'Đặt phòng trước' },
      { id: 'w82', hanzi: '护照', pinyin: 'hùzhào', vi: 'Sổ hộ chiếu' },
      { id: 'w83', hanzi: '房卡', pinyin: 'fángkǎ', vi: 'Thẻ mở cửa phòng' },
      { id: 'w84', hanzi: '密码', pinyin: 'mìmǎ', vi: 'Mật khẩu số' },
      { id: 'w85', hanzi: '行李', pinyin: 'xíngli', vi: 'Hành lý xách tay' },
      { id: 'w86', hanzi: '电梯', pinyin: 'diàntī', vi: 'Thang máy' }
    ]
  },

  {
    id: 'hsk3-lesson9',
    level: 'HSK 3',
    title: 'Bài 9: Sức khỏe & Thăm khám bệnh (健康与就医看病)',
    description: 'Miêu tả triệu chứng ốm đau, đi khám tại bệnh viện và lời khuyên của bác sĩ.',
    reading: {
      title: '在医院看病 (Thăm khám bác sĩ tại bệnh viện)',
      tokens: [
        { hanzi: '医生：', pinyin: 'Yīshēng:', vi: 'Bác sĩ:', isSpeaker: true },
        { hanzi: '你哪里', pinyin: 'nǐ nǎlǐ', vi: 'Bạn ở đâu / Chỗ nào', hv: 'Nhĩ Na Lý' },
        { hanzi: '不舒服', pinyin: 'bù shūfu', vi: 'Không khỏe / Khó chịu', hv: 'Bất Thư Phục', sample: '哪里不舒服？' },
        { hanzi: '？\n', pinyin: '', vi: '' },
        { hanzi: '病人：', pinyin: 'Bìngrén:', vi: 'Bệnh nhân:', isSpeaker: true },
        { hanzi: '我头疼', pinyin: 'wǒ tóuténg', vi: 'Tôi bị đau đầu', hv: 'Ngã Đầu Thống', sample: '我头疼得厉害。' },
        { hanzi: '，嗓子', pinyin: 'sǎngzi', vi: 'Cổ họng', hv: 'Tảng Tử' },
        { hanzi: '也很疼', pinyin: 'yě hěn téng', vi: 'Cũng rất đau', hv: 'Dã Hẩn Thống' },
        { hanzi: '，有点', pinyin: 'yǒudiǎn', vi: 'Có chút', hv: 'Hữu Điểm' },
        { hanzi: '发烧', pinyin: 'fāshāo', vi: 'Bị sốt', hv: 'Phát Thiêu', sample: '我发烧了。' },
        { hanzi: '。\n', pinyin: '', vi: '' },
        { hanzi: '医生：', pinyin: 'Yīshēng:', vi: 'Bác sĩ:', isSpeaker: true },
        { hanzi: '你感冒了', pinyin: 'nǐ gǎnmào le', vi: 'Bạn bị cảm cúm rồi', hv: 'Nhĩ Cảm Mạo Liễu', sample: '这是感冒。' },
        { hanzi: '。', pinyin: '', vi: '' },
        { hanzi: '回去', pinyin: 'huíqù', vi: 'Trở về', hv: 'Hồi Khứ' },
        { hanzi: '多喝温水', pinyin: 'duō hē wēnshuǐ', vi: 'Uống nhiều nước ấm', hv: 'Đa Hát Ôn Thủy', sample: '多喝水。' },
        { hanzi: '，按时', pinyin: 'ànshí', vi: 'Đúng giờ', hv: 'Án Thời' },
        { hanzi: '吃药', pinyin: 'chī yào', vi: 'Uống thuốc', hv: 'Ngật Dược', sample: '一天吃三次药。' },
        { hanzi: '，好好休息', pinyin: 'hǎohāo xiūxi', vi: 'Nghỉ ngơi thật tốt', hv: 'Hảo Hảo Hưu Tức' },
        { hanzi: '！', pinyin: '', vi: '' }
      ],
      vietnameseTranslation: 'Bác sĩ: Bạn thấy khó chịu ở chỗ nào?\nBệnh nhân: Tôi bị đau đầu, rát họng và hình như bị sốt nữa.\nBác sĩ: Bạn bị cảm cúm rồi. Hãy về nhà uống nhiều nước ấm, uống thuốc đúng giờ và nghỉ ngơi thật tốt nhé!',
      quiz: {
        question: 'Câu hỏi: Bác sĩ đã dặn dò bệnh nhân điều gì sau khi khám xong?',
        options: [
          { text: 'A. 去跑步运动 (Đi chạy bộ thể thao)', correct: false },
          { text: 'B. 多喝水按时吃药 (Uống nhiều nước và uống thuốc đúng giờ)', correct: true },
          { text: 'C. 喝冰咖啡 (Uống cà phê đá)', correct: false },
          { text: 'D. 继续加班 (Tiếp tục làm việc tăng ca)', correct: false }
        ]
      }
    },
    listening: {
      audioSpeed: 1,
      dialogues: [
        { id: 0, hanzi: '医生，我量了体温，三十八度五。', pinyin: 'Yīshēng, wǒ liáng le tǐwēn, sānshíbā dù wǔ.', vi: 'Bác sĩ ơi, tôi đo nhiệt độ thấy 38 độ 5.' },
        { id: 1, hanzi: '别担心，先吃退烧药，然后多睡觉。', pinyin: 'Bié dānxīn, xiān chī tuìshāoyào, ránhòu duō shuìjiào.', vi: 'Đừng lo lắng, trước tiên uống thuốc hạ sốt rồi ngủ nhiều vào.' }
      ],
      quiz: {
        prompt: 'Nghe và điền từ:',
        sentencePrefix: '回去多喝水，按时',
        missingWord: '吃药',
        sentenceSuffix: '。',
        pinyinHint: 'Huíqù duō hē shuǐ, ànshí (chī yào).'
      }
    },
    speaking: {
      targetHanzi: '身体健康最重要',
      targetPinyin: 'Shēntǐ jiànkāng zuì zhòngyào',
      vietnameseMeaning: 'Sức khỏe cơ thể là quan trọng nhất'
    },
    writing: {
      targetChar: '医',
      charPinyin: 'yī',
      charMeaning: 'Y (trong Y học, Bác sĩ, Y viện)',
      charStrokes: '7 nét: 横, 撇, 横, 横, 撇, 点, 竖折',
      compositionTask: {
        prompt: 'Dịch sang tiếng Trung: "Hôm nay tôi bị đau đầu"',
        expectedKeywords: ['今天', '我', '头疼'],
        sampleSolution: '今天我有点头疼 (Jīntiān wǒ yǒudiǎn tóuténg)',
        explanation: '今天 (Hôm nay) + 我 (Tôi) + 有点 (Hơi một chút) + 头疼 (Đau đầu).'
      }
    },
    matchingWords: [
      { id: 'w91', hanzi: '生病', pinyin: 'shēngbìng', vi: 'Bị ốm đau' },
      { id: 'w92', hanzi: '发烧', pinyin: 'fāshāo', vi: 'Bị sốt' },
      { id: 'w93', hanzi: '头疼', pinyin: 'tóuténg', vi: 'Đau đầu' },
      { id: 'w94', hanzi: '感冒', pinyin: 'gǎnmào', vi: 'Cảm cúm' },
      { id: 'w95', hanzi: '吃药', pinyin: 'chī yào', vi: 'Uống thuốc' },
      { id: 'w96', hanzi: '休息', pinyin: 'xiūxi', vi: 'Nghỉ ngơi' }
    ]
  },

  {
    id: 'hsk4-lesson10',
    level: 'HSK 4',
    title: 'Bài 10: Phỏng vấn xin việc & Công sở (职场面试与商务)',
    description: 'Kỹ năng phỏng vấn tuyển dụng, giới thiệu kinh nghiệm làm việc và đàm phán hợp tác.',
    reading: {
      title: '应聘面试 (Buổi phỏng vấn xin việc)',
      tokens: [
        { hanzi: '面试官：', pinyin: 'Miànshìguān:', vi: 'Người phỏng vấn:', isSpeaker: true },
        { hanzi: '请你', pinyin: 'qǐng nǐ', vi: 'Xin mời bạn', hv: 'Thỉnh Nhĩ' },
        { hanzi: '简单', pinyin: 'jiǎndān', vi: 'Đơn giản / Ngắn gọn', hv: 'Giản Đơn', sample: '简单介绍。' },
        { hanzi: '介绍一下', pinyin: 'jièshào yīxià', vi: 'Giới thiệu một chút', hv: 'Giới Thiệu Nhất Hạ' },
        { hanzi: '自己的', pinyin: 'zìjǐ de', vi: 'Của bản thân', hv: 'Tự Kỷ Đích' },
        { hanzi: '工作经验', pinyin: 'gōngzuò jīngyàn', vi: 'Kinh nghiệm làm việc', hv: 'Công Tác Kinh Nghiệm', sample: '有工作经验。' },
        { hanzi: '。\n', pinyin: '', vi: '' },
        { hanzi: '求职者：', pinyin: 'Qiúzhízhě:', vi: 'Ứng viên:', isSpeaker: true },
        { hanzi: '各位考官好', pinyin: 'gèwèi kǎoguān hǎo', vi: 'Kính chào quý vị phỏng vấn', hv: 'Các Vị Khảo Quan Hảo' },
        { hanzi: '！我毕业于', pinyin: 'wǒ bìyè yú', vi: 'Tôi tốt nghiệp tại', hv: 'Ngã Tất Nghiệp Vu', sample: '我毕业于大学。' },
        { hanzi: '河内大学', pinyin: 'Hénèi Dàxué', vi: 'Đại học Hà Nội', hv: 'Hà Nội Đại Học' },
        { hanzi: '中文系', pinyin: 'Zhōngwén xì', vi: 'Khoa tiếng Trung', hv: 'Trung Văn Hệ' },
        { hanzi: '。', pinyin: '', vi: '' },
        { hanzi: '我有', pinyin: 'wǒ yǒu', vi: 'Tôi có', hv: 'Ngã Hữu' },
        { hanzi: '三年的', pinyin: 'sān nián de', vi: '3 năm', hv: 'Tam Niên Đích' },
        { hanzi: '国际贸易', pinyin: 'guójì màoyì', vi: 'Thương mại quốc tế', hv: 'Quốc Tế Mậu Dịch', sample: '国际贸易合作。' },
        { hanzi: '经验', pinyin: 'jīngyàn', vi: 'Kinh nghiệm', hv: 'Kinh Nghiệm' },
        { hanzi: '，非常希望能', pinyin: 'fēicháng xīwàng néng', vi: 'Rất hy vọng có thể', hv: 'Phi Thường Hi Vọng Năng' },
        { hanzi: '加入', pinyin: 'jiārù', vi: 'Gia nhập / Tham gia', hv: 'Gia Nhập', sample: '加入公司。' },
        { hanzi: '贵公司', pinyin: 'guì gōngsī', vi: 'Quý công ty', hv: 'Quý Công Ty', sample: '加入贵公司。' },
        { hanzi: '！', pinyin: '', vi: '' }
      ],
      vietnameseTranslation: 'Người phỏng vấn: Xin mời bạn giới thiệu ngắn gọn về kinh nghiệm làm việc của bản thân.\nỨng viên: Kính chào quý vị phỏng vấn! Tôi tốt nghiệp khoa tiếng Trung trường Đại học Hà Nội. Tôi có 3 năm kinh nghiệm trong lĩnh vực thương mại quốc tế và rất hy vọng có thể gia nhập quý công ty!',
      quiz: {
        question: 'Câu hỏi: Ứng viên trong đoạn hội thoại có bao nhiêu năm kinh nghiệm làm việc?',
        options: [
          { text: 'A. 一年 (1 năm)', correct: false },
          { text: 'B. 两年 (2 năm)', correct: false },
          { text: 'C. 三年 (3 năm)', correct: true },
          { text: 'D. 五年 (5 năm)', correct: false }
        ]
      }
    },
    listening: {
      audioSpeed: 1,
      dialogues: [
        { id: 0, hanzi: '祝贺你通过了面试，下周一开始上班。', pinyin: 'Zhùhè nǐ tōngguò le miànshì, xià zhōu yī kāishǐ shàngbān.', vi: 'Chúc mừng bạn đã vượt qua buổi phỏng vấn, thứ hai tuần sau bắt đầu đi làm.' },
        { id: 1, hanzi: '非常感谢经理，我一定会努力工作！', pinyin: 'Fēicháng gǎnxiè jīnglǐ, wǒ yīdìng huì nǔlì gōngzuò!', vi: 'Rất cảm ơn giám đốc, tôi nhất định sẽ nỗ lực làm việc!' }
      ],
      quiz: {
        prompt: 'Nghe đoạn âm thanh và điền từ:',
        sentencePrefix: '祝贺你通过了',
        missingWord: '面试',
        sentenceSuffix: '，下周一开始上班。',
        pinyinHint: 'Zhùhè nǐ tōngguò le (miànshì).'
      }
    },
    speaking: {
      targetHanzi: '祝我们未来合作愉快',
      targetPinyin: 'Zhù wǒmen wèilái hézuò yúkuài',
      vietnameseMeaning: 'Chúc cho sự hợp tác trong tương lai của chúng ta diễn ra tốt đẹp'
    },
    writing: {
      targetChar: '业',
      charPinyin: 'yè',
      charMeaning: 'Nghiệp (trong Doanh nghiệp, Nghề nghiệp, Tốt nghiệp)',
      charStrokes: '5 nét: 竖, 竖, 点, 撇, 横',
      compositionTask: {
        prompt: 'Dịch sang tiếng Trung: "Tôi muốn làm việc tại công ty này"',
        expectedKeywords: ['我想', '这家公司', '工作'],
        sampleSolution: '我想在这家公司工作 (Wǒ xiǎng zài zhè jiā gōngsī gōngzuò)',
        explanation: '我想 (Tôi muốn) + 在这家公司 (Ở công ty này) + 工作 (Làm việc).'
      }
    },
    matchingWords: [
      { id: 'w101', hanzi: '经理', pinyin: 'jīnglǐ', vi: 'Giám đốc quản lý' },
      { id: 'w102', hanzi: '面试', pinyin: 'miànshì', vi: 'Phỏng vấn xin việc' },
      { id: 'w103', hanzi: '简历', pinyin: 'jiǎnlì', vi: 'Bản CV lý lịch' },
      { id: 'w104', hanzi: '合同', pinyin: 'hétong', vi: 'Hợp đồng kinh tế' },
      { id: 'w105', hanzi: '工资', pinyin: 'gōngzī', vi: 'Tiền lương bổng' },
      { id: 'w106', hanzi: '加班', pinyin: 'jiābān', vi: 'Tăng ca làm thêm' }
    ]
  },
  {
    id: 'hsk2-lesson11',
    level: 'HSK 2',
    title: 'Bài 11: Đi lại & Phương tiện giao thông (交通与出行)',
    description: 'Học cách hỏi đường, bắt taxi, đi tàu điện ngầm và xe buýt tại Trung Quốc.',
    reading: {
      title: '请问去火车站怎么走？ (Xin hỏi đi đến ga tàu hỏa đi như thế nào?)',
      tokens: [
        { hanzi: '旅客：', pinyin: 'Lǚkè:', vi: 'Hành khách:', isSpeaker: true },
        { hanzi: '请问', pinyin: 'qǐngwèn', vi: 'Xin hỏi', hv: 'Thỉnh Vấn', sample: '请问洗手间在哪儿？' },
        { hanzi: '去', pinyin: 'qù', vi: 'Đi', hv: 'Khứ' },
        { hanzi: '火车站', pinyin: 'huǒchēzhàn', vi: 'Ga tàu hỏa', hv: 'Hỏa Xa Trạm', sample: '我在火车站等你。' },
        { hanzi: '怎么', pinyin: 'zěnme', vi: 'Như thế nào', hv: 'Chẩm Ma' },
        { hanzi: '走', pinyin: 'zǒu', vi: 'Đi / Bước đi', hv: 'Tẩu', sample: '往前走一百米。' },
        { hanzi: '？\n', pinyin: '', vi: '' },
        { hanzi: '路人：', pinyin: 'Lùrén:', vi: 'Người đi đường:', isSpeaker: true },
        { hanzi: '你可以', pinyin: 'nǐ kěyǐ', vi: 'Bạn có thể', hv: 'Nhĩ Khả Dĩ' },
        { hanzi: '坐', pinyin: 'zuò', vi: 'Đi xe / Ngồi', hv: 'Tọa', sample: '坐公共汽车。' },
        { hanzi: '地铁', pinyin: 'dìtiě', vi: 'Tàu điện ngầm', hv: 'Địa Thiết', sample: '坐地铁很方便。' },
        { hanzi: '二号线', pinyin: 'èr hào xiàn', vi: 'Tuyến số 2', hv: 'Nhị Hào Tuyến' },
        { hanzi: '，在', pinyin: 'zài', vi: 'Ở / Tại', hv: 'Tại' },
        { hanzi: '人民广场', pinyin: 'Rénmín Guǎngchǎng', vi: 'Quảng trường Nhân dân', hv: 'Nhân Dân Quảng Trường' },
        { hanzi: '换乘', pinyin: 'huànchéng', vi: 'Đổi tuyến tàu', hv: 'Hoán Thừa', sample: '在这儿换乘。' },
        { hanzi: '一号线', pinyin: 'yī hào xiàn', vi: 'Tuyến số 1', hv: 'Nhất Hào Tuyến' },
        { hanzi: '。', pinyin: '', vi: '' }
      ],
      vietnameseTranslation: 'Hành khách: Xin hỏi đi đến ga tàu hỏa đi như thế nào?\nNgười đi đường: Bạn có thể đi tàu điện ngầm tuyến số 2, tại trạm Quảng trường Nhân dân đổi sang tuyến số 1.',
      quiz: {
        question: 'Câu hỏi: Hành khách trong đoạn hội thoại muốn đến địa điểm nào?',
        options: [
          { text: 'A. 机场 (Sân bay)', correct: false },
          { text: 'B. 火车站 (Ga xe lửa)', correct: true },
          { text: 'C. 医院 (Bệnh viện)', correct: false },
          { text: 'D. 学校 (Trường học)', correct: false }
        ]
      }
    },
    listening: {
      audioSpeed: 1,
      dialogues: [
        { id: 0, hanzi: '师傅，去北京饭店，请打表。', pinyin: 'Shīfu, qù Běijīng Fàndiàn, qǐng dǎbiǎo.', vi: 'Bác tài, đi khách sạn Bắc Kinh, làm ơn bật đồng hồ tính cước.' },
        { id: 1, hanzi: '好的，请系好安全带，马上出发。', pinyin: 'Hǎo de, qǐng jì hǎo ānquándài, mǎshàng chūfā.', vi: 'Vâng, xin thắt dây an toàn, xuất phát ngay bây giờ.' }
      ],
      quiz: {
        prompt: 'Nghe đoạn âm thanh và điền từ:',
        sentencePrefix: '师傅，去北京饭店，请',
        missingWord: '打表',
        sentenceSuffix: '。',
        pinyinHint: 'Shīfu, qù Běijīng Fàndiàn, qǐng (dǎbiǎo).'
      }
    },
    speaking: {
      targetHanzi: '请问去最近的地铁站怎么走？',
      targetPinyin: 'Qǐngwèn qù zuì jìn de dìtiězhàn zěnme zǒu?',
      vietnameseMeaning: 'Xin hỏi đến trạm tàu điện ngầm gần nhất đi như thế nào?'
    },
    writing: {
      targetChar: '车',
      charPinyin: 'chē',
      charMeaning: 'Xa (Xe, phương tiện đi lại)',
      charStrokes: '4 nét: 横, 撇折, 横, 竖',
      compositionTask: {
        prompt: 'Dịch sang tiếng Trung: "Tôi đi tàu điện ngầm đi làm"',
        expectedKeywords: ['我', '坐地铁', '上班'],
        sampleSolution: '我坐地铁去上班 (Wǒ zuò dìtiě qù shàngbān)',
        explanation: '我 (Tôi) + 坐地铁 (Đi tàu điện ngầm) + 去上班 (Đi làm).'
      }
    },
    matchingWords: [
      { id: 'w111', hanzi: '地铁', pinyin: 'dìtiě', vi: 'Tàu điện ngầm' },
      { id: 'w112', hanzi: '出租车', pinyin: 'chūzūchē', vi: 'Xe taxi' },
      { id: 'w113', hanzi: '公交车', pinyin: 'gōngjiāochē', vi: 'Xe buýt' },
      { id: 'w114', hanzi: '车站', pinyin: 'chēzhàn', vi: 'Bến xe / Ga' },
      { id: 'w115', hanzi: '换乘', pinyin: 'huànchéng', vi: 'Chuyển đổi tuyến xe' },
      { id: 'w116', hanzi: '车票', pinyin: 'chēpiào', vi: 'Vé xe, vé tàu' }
    ]
  },
  {
    id: 'hsk2-lesson12',
    level: 'HSK 2',
    title: 'Bài 12: Sở thích & Thể thao giải trí (爱好与运动娱乐)',
    description: 'Học cách trò chuyện về sở thích cá nhân, các môn thể thao và hoạt động giải trí cuối tuần.',
    reading: {
      title: '周末的爱好 (Sở thích ngày cuối tuần)',
      tokens: [
        { hanzi: '小明：', pinyin: 'Xiǎomíng:', vi: 'Tiểu Minh:', isSpeaker: true },
        { hanzi: '周末', pinyin: 'zhōumò', vi: 'Cuối tuần', hv: 'Chu Mạt', sample: '周末快乐！' },
        { hanzi: '你一般', pinyin: 'nǐ yībān', vi: 'Bạn thông thường', hv: 'Nhĩ Nhất Bàn' },
        { hanzi: '喜欢', pinyin: 'xǐhuan', vi: 'Thích', hv: 'Hỷ Hoan', sample: '我喜欢中文。' },
        { hanzi: '做什么', pinyin: 'zuò shénme', vi: 'Làm gì', hv: 'Tác Thập Ma' },
        { hanzi: '？\n', pinyin: '', vi: '' },
        { hanzi: '安娜：', pinyin: 'Ānnà:', vi: 'Anna:', isSpeaker: true },
        { hanzi: '我非常喜欢', pinyin: 'wǒ fēicháng xǐhuan', vi: 'Tôi rất thích', hv: 'Ngã Phi Thường Hỷ Hoan' },
        { hanzi: '游泳', pinyin: 'yóuyǒng', vi: 'Bơi lội', hv: 'Du Vịnh', sample: '夏天去游泳。' },
        { hanzi: '和', pinyin: 'hé', vi: 'Và', hv: 'Hòa' },
        { hanzi: '听音乐', pinyin: 'tīng yīnyuè', vi: 'Nghe nhạc', hv: 'Thính Âm Nhạc', sample: '一边休息一边听音乐。' },
        { hanzi: '。你呢', pinyin: 'nǐ ne', vi: 'Còn bạn thì sao?', hv: 'Nhĩ Nê' },
        { hanzi: '？\n', pinyin: '', vi: '' },
        { hanzi: '小明：', pinyin: 'Xiǎomíng:', vi: 'Tiểu Minh:', isSpeaker: true },
        { hanzi: '我经常跟', pinyin: 'wǒ jīngcháng gēn', vi: 'Tôi thường cùng', hv: 'Ngã Kinh Thường Căn' },
        { hanzi: '朋友', pinyin: 'péngyou', vi: 'Bạn bè', hv: 'Bằng Hữu' },
        { hanzi: '踢足球', pinyin: 'tī zúqiú', vi: 'Đá bóng', hv: 'Thích Túc Cầu', sample: '在操场踢足球。' },
        { hanzi: '。', pinyin: '', vi: '' }
      ],
      vietnameseTranslation: 'Tiểu Minh: Cuối tuần bạn thường thích làm gì?\nAnna: Tôi rất thích bơi lội và nghe nhạc. Còn bạn thì sao?\nTiểu Minh: Tôi thường cùng bạn bè đá bóng.',
      quiz: {
        question: 'Câu hỏi: Anna thích hoạt động nào vào ngày cuối tuần?',
        options: [
          { text: 'A. 踢足球 (Đá bóng)', correct: false },
          { text: 'B. 游泳和听音乐 (Bơi lội và nghe nhạc)', correct: true },
          { text: 'C. 玩电脑游戏 (Chơi game máy tính)', correct: false },
          { text: 'D. 爬山 (Leo núi)', correct: false }
        ]
      }
    },
    listening: {
      audioSpeed: 1,
      dialogues: [
        { id: 0, hanzi: '这个星期六晚上有足球比赛，我们一起去看吧。', pinyin: 'Zhè gè xīngqīliù wǎnshàng yǒu zúqiú bǐsài, wǒmen yīqǐ qù kàn ba.', vi: 'Tối thứ Bảy tuần này có trận bóng đá, chúng ta cùng đi xem nhé.' },
        { id: 1, hanzi: '太好了！我最喜欢看足球赛了。', pinyin: 'Tài hǎo le! Wǒ zuì xǐhuan kàn zúqiúsài le.', vi: 'Tuyệt quá! Tôi thích xem đá bóng nhất đấy.' }
      ],
      quiz: {
        prompt: 'Nghe đoạn âm thanh và điền từ:',
        sentencePrefix: '这个星期六晚上有',
        missingWord: '足球比赛',
        sentenceSuffix: '，我们一起去看吧。',
        pinyinHint: 'Zhè gè xīngqīliù wǎnshàng yǒu (zúqiú bǐsài).'
      }
    },
    speaking: {
      targetHanzi: '我平时喜欢运动和听流行音乐',
      targetPinyin: 'Wǒ píngshí xǐhuan yùndòng hé tīng liúxíng yīnyuè',
      vietnameseMeaning: 'Bình thường tôi thích rèn luyện thể thao và nghe nhạc thịnh hành'
    },
    writing: {
      targetChar: '乐',
      charPinyin: 'yuè / lè',
      charMeaning: 'Nhạc (trong âm nhạc) / Lạc (trong vui vẻ, hoan lạc)',
      charStrokes: '5 nét: 撇, 竖折, 竖, 撇, 点',
      compositionTask: {
        prompt: 'Dịch sang tiếng Trung: "Cuối tuần tôi thích bơi lội"',
        expectedKeywords: ['周末', '我喜欢', '游泳'],
        sampleSolution: '周末我喜欢游泳 (Zhōumò wǒ xǐhuan yóuyǒng)',
        explanation: '周末 (Cuối tuần) + 我喜欢 (Tôi thích) + 游泳 (Bơi lội).'
      }
    },
    matchingWords: [
      { id: 'w121', hanzi: '爱好', pinyin: 'àihào', vi: 'Sở thích thú vui' },
      { id: 'w122', hanzi: '运动', pinyin: 'yùndòng', vi: 'Thể thao rèn luyện' },
      { id: 'w123', hanzi: '游泳', pinyin: 'yóuyǒng', vi: 'Bơi lội dưới nước' },
      { id: 'w124', hanzi: '踢足球', pinyin: 'tī zúqiú', vi: 'Đá bóng đá' },
      { id: 'w125', hanzi: '音乐', pinyin: 'yīnyuè', vi: 'Âm nhạc khúc điệu' },
      { id: 'w126', hanzi: '电影', pinyin: 'diànyǐng', vi: 'Phim điện ảnh' }
    ]
  },
  {
    id: 'hsk3-lesson13',
    level: 'HSK 3',
    title: 'Bài 13: Mua sắm trực tuyến & Thanh toán (网购与移动支付)',
    description: 'Trải nghiệm văn hóa mua sắm online, nhận bưu kiện và thanh toán quét mã không dùng tiền mặt.',
    reading: {
      title: '网上购物与扫码支付 (Mua sắm online & Thanh toán quét mã)',
      tokens: [
        { hanzi: '芳芳：', pinyin: 'Fāngfang:', vi: 'Phương Phương:', isSpeaker: true },
        { hanzi: '这件衣服', pinyin: 'zhè jiàn yīfu', vi: 'Bộ quần áo này', hv: 'Giá Kiện Y Phục' },
        { hanzi: '质量', pinyin: 'zhìliàng', vi: 'Chất lượng', hv: 'Chất Lượng', sample: '质量非常好。' },
        { hanzi: '很好', pinyin: 'hěn hǎo', vi: 'Rất tốt', hv: 'Hẩn Hảo' },
        { hanzi: '，你在哪儿买的', pinyin: 'nǐ zài nǎr mǎi de', vi: 'Bạn mua ở đâu thế?', hv: 'Nhĩ Tại Na Nhi Mãi Đích' },
        { hanzi: '？\n', pinyin: '', vi: '' },
        { hanzi: '美玲：', pinyin: 'Měilíng:', vi: 'Mỹ Linh:', isSpeaker: true },
        { hanzi: '我在', pinyin: 'wǒ zài', vi: 'Tôi ở', hv: 'Ngã Tại' },
        { hanzi: '网上', pinyin: 'wǎngshàng', vi: 'Trên mạng internet', hv: 'Võng Thượng', sample: '在网上买东西。' },
        { hanzi: '买的', pinyin: 'mǎi de', vi: 'Mua đó', hv: 'Mãi Đích' },
        { hanzi: '，现在', pinyin: 'xiànzài', vi: 'Hiện nay', hv: 'Hiện Tại' },
        { hanzi: '移动支付', pinyin: 'yídòng zhīfù', vi: 'Thanh toán di động', hv: 'Di Động Chi Phó' },
        { hanzi: '很方便', pinyin: 'hěn fāngbiàn', vi: 'Rất thuận tiện', hv: 'Hẩn Phương Tiện' },
        { hanzi: '，用', pinyin: 'yòng', vi: 'Dùng / Sử dụng', hv: 'Dụng' },
        { hanzi: '手机', pinyin: 'shǒujī', vi: 'Điện thoại', hv: 'Thủ Cơ' },
        { hanzi: '扫码', pinyin: 'sǎomǎ', vi: 'Quét mã QR', hv: 'Tảo Mã', sample: '请扫码付款。' },
        { hanzi: '就可以', pinyin: 'jiù kěyǐ', vi: 'Là có thể', hv: 'Tựu Khả Dĩ' },
        { hanzi: '付款', pinyin: 'fùkuǎn', vi: 'Thanh toán tiền', hv: 'Phó Khoản' },
        { hanzi: '，而且', pinyin: 'érqiě', vi: 'Hơn nữa', hv: 'Nhi Thả' },
        { hanzi: '快递', pinyin: 'kuàidì', vi: 'Chuyển phát nhanh', hv: 'Khoái Đệ', sample: '收快递。' },
        { hanzi: '两天就送到了', pinyin: 'liǎng tiān jiù sòng dào le', vi: 'Hai ngày là giao tới', hv: 'Lưỡng Thiên Tựu Tống Đáo Liễu' },
        { hanzi: '。', pinyin: '', vi: '' }
      ],
      vietnameseTranslation: 'Phương Phương: Bộ đồ này chất lượng tốt quá, bạn mua ở đâu vậy?\nMỹ Linh: Tôi mua trên mạng đấy, hiện nay thanh toán di động rất tiện, dùng điện thoại quét mã là thanh toán xong, hơn nữa chuyển phát nhanh chỉ 2 ngày là giao đến.',
      quiz: {
        question: 'Câu hỏi: Mỹ Linh thanh toán tiền khi mua sắm bằng phương thức nào?',
        options: [
          { text: 'A. 现金支付 (Tiền mặt)', correct: false },
          { text: 'B. 银行汇款 (Chuyển khoản)', correct: false },
          { text: 'C. 手机扫码付款 (Quét mã trên điện thoại)', correct: true },
          { text: 'D. 支票 (Séc ngân hàng)', correct: false }
        ]
      }
    },
    listening: {
      audioSpeed: 1,
      dialogues: [
        { id: 0, hanzi: '您的快递到了，请到楼下快递柜取件。', pinyin: 'Nín de kuàidì dào le, qǐng dào lóuxià kuàidìguì qǔjiàn.', vi: 'Bưu kiện của quý khách đã tới, xin vui lòng xuống tủ chuyển phát nhanh dưới lầu nhận đồ.' },
        { id: 1, hanzi: '好的，非常感谢，我马上下来。', pinyin: 'Hǎo de, fēicháng gǎnxiè, wǒ mǎshàng xiàlái.', vi: 'Vâng, cảm ơn anh nhiều, tôi xuống ngay đây.' }
      ],
      quiz: {
        prompt: 'Nghe đoạn âm thanh và điền từ:',
        sentencePrefix: '您的',
        missingWord: '快递',
        sentenceSuffix: '到了，请到楼下取件。',
        pinyinHint: 'Nín de (kuàidì) dào le.'
      }
    },
    speaking: {
      targetHanzi: '请问这里可以用微信或者支付宝付款吗？',
      targetPinyin: 'Qǐngwèn zhèlǐ kěyǐ yòng Wēixìn huòzhě Zhīfùbǎo fùkuǎn ma?',
      vietnameseMeaning: 'Xin hỏi ở đây có thể thanh toán bằng WeChat hoặc Alipay không?'
    },
    writing: {
      targetChar: '电',
      charPinyin: 'diàn',
      charMeaning: 'Điện (trong Điện thoại, Điện tử, Máy tính)',
      charStrokes: '5 nét: 竖, 横折, 横, 横, 竖弯钩',
      compositionTask: {
        prompt: 'Dịch sang tiếng Trung: "Tôi dùng điện thoại quét mã thanh toán"',
        expectedKeywords: ['我用手机', '扫码', '付款'],
        sampleSolution: '我用手机扫码付款 (Wǒ yòng shǒujī sǎomǎ fùkuǎn)',
        explanation: '我用手机 (Tôi dùng điện thoại) + 扫码 (Quét mã) + 付款 (Thanh toán).'
      }
    },
    matchingWords: [
      { id: 'w131', hanzi: '网购', pinyin: 'wǎnggòu', vi: 'Mua sắm online' },
      { id: 'w132', hanzi: '快递', pinyin: 'kuàidì', vi: 'Chuyển phát nhanh' },
      { id: 'w133', hanzi: '扫码', pinyin: 'sǎomǎ', vi: 'Quét mã QR' },
      { id: 'w134', hanzi: '付款', pinyin: 'fùkuǎn', vi: 'Thanh toán tiền' },
      { id: 'w135', hanzi: '微信', pinyin: 'Wēixìn', vi: 'Ứng dụng WeChat' },
      { id: 'w136', hanzi: '质量', pinyin: 'zhìliàng', vi: 'Chất lượng hàng hóa' }
    ]
  },
  {
    id: 'hsk3-lesson14',
    level: 'HSK 3',
    title: 'Bài 14: Du học & Môi trường học tập (留学与校园生活)',
    description: 'Giao tiếp trong môi trường đại học: đăng ký môn học, thư viện, thi cử và xin học bổng.',
    reading: {
      title: '图书馆借书 (Mượn sách tại thư viện trường đại học)',
      tokens: [
        { hanzi: '留学生：', pinyin: 'Liúxuéshēng:', vi: 'Du học sinh:', isSpeaker: true },
        { hanzi: '老师好', pinyin: 'lǎoshī hǎo', vi: 'Chào thầy cô', hv: 'Lão Sư Hảo' },
        { hanzi: '，我想', pinyin: 'wǒ xiǎng', vi: 'Tôi muốn', hv: 'Ngã Tưởng' },
        { hanzi: '借', pinyin: 'jiè', vi: 'Mượn sách', hv: 'Tá', sample: '借书还书。' },
        { hanzi: '这两本', pinyin: 'zhè liǎng běn', vi: 'Hai cuốn này', hv: 'Giá Lưỡng Bản' },
        { hanzi: '汉语词典', pinyin: 'Hànyǔ cídiǎn', vi: 'Từ điển tiếng Hán', hv: 'Hán Ngữ Từ Điển' },
        { hanzi: '。\n', pinyin: '', vi: '' },
        { hanzi: '管理员：', pinyin: 'Guǎnlǐyuán:', vi: 'Người quản lý:', isSpeaker: true },
        { hanzi: '请出示', pinyin: 'qǐng chūshì', vi: 'Xin xuất trình', hv: 'Thỉnh Xuất Thị', sample: '请出示证件。' },
        { hanzi: '你的', pinyin: 'nǐ de', vi: 'Của bạn', hv: 'Nhĩ Đích' },
        { hanzi: '学生证', pinyin: 'xuéshēngzhèng', vi: 'Thẻ sinh viên', hv: 'Học Sinh Chứng' },
        { hanzi: '。每本图书', pinyin: 'měi běn túshū', vi: 'Mỗi cuốn sách', hv: 'Mỗi Bản Đồ Thư' },
        { hanzi: '可以借', pinyin: 'kěyǐ jiè', vi: 'Có thể mượn', hv: 'Khả Dĩ Tá' },
        { hanzi: '一个月', pinyin: 'yī gè yuè', vi: 'Một tháng', hv: 'Nhất Cá Nguyệt' },
        { hanzi: '，到期前', pinyin: 'dàoqī qián', vi: 'Trước khi hết hạn', hv: 'Đáo Kỳ Tiền' },
        { hanzi: '可以在线', pinyin: 'kěyǐ zàixiàn', vi: 'Có thể trực tuyến', hv: 'Khả Dĩ Tại Tuyến' },
        { hanzi: '续借', pinyin: 'xùjiè', vi: 'Gia hạn mượn', hv: 'Tục Tá' },
        { hanzi: '一次', pinyin: 'yī cì', vi: 'Một lần', hv: 'Nhất Thứ' },
        { hanzi: '。', pinyin: '', vi: '' }
      ],
      vietnameseTranslation: 'Du học sinh: Em chào cô, em muốn mượn hai cuốn từ điển tiếng Hán này ạ.\nNgười quản lý: Xin xuất trình thẻ sinh viên của em. Mỗi cuốn sách được mượn 1 tháng, trước khi hết hạn có thể gia hạn online 1 lần.',
      quiz: {
        question: 'Câu hỏi: Mỗi cuốn sách ở thư viện được phép mượn trong thời gian bao lâu?',
        options: [
          { text: 'A. 一周 (Một tuần)', correct: false },
          { text: 'B. 两周 (Hai tuần)', correct: false },
          { text: 'C. 一个月 (Một tháng)', correct: true },
          { text: 'D. 一个学期 (Một học kỳ)', correct: false }
        ]
      }
    },
    listening: {
      audioSpeed: 1,
      dialogues: [
        { id: 0, hanzi: '听说你申请到了中国政府奖学金，恭喜你！', pinyin: 'Tīngshuō nǐ shēnqǐng dào le Zhōngguó zhèngfǔ jiǎngxuéjīn, gōngxǐ nǐ!', vi: 'Nghe nói bạn đã xin được học bổng chính phủ Trung Quốc, chúc mừng nhé!' },
        { id: 1, hanzi: '谢谢你！下个月我就要去北京大学报到了。', pinyin: 'Xièxie nǐ! Xià gè yuè wǒ jiù yào qù Běijīng Dàxué bàodào le.', vi: 'Cảm ơn bạn! Tháng sau tôi sẽ tới trường Đại học Bắc Kinh nhập học rồi.' }
      ],
      quiz: {
        prompt: 'Nghe đoạn âm thanh và điền từ:',
        sentencePrefix: '听说你申请到了中国政府',
        missingWord: '奖学金',
        sentenceSuffix: '，恭喜你！',
        pinyinHint: 'Tīngshuō nǐ shēnqǐng dào le Zhōngguó zhèngfǔ (jiǎngxuéjīn).'
      }
    },
    speaking: {
      targetHanzi: '努力学习中文，争取取得优异的成绩',
      targetPinyin: 'Nǔlì xuéxí Zhōngwén, zhēngqǔ qǔdé yōuyì de chéngjì',
      vietnameseMeaning: 'Nỗ lực học tập tiếng Trung, phấn đấu đạt được thành tích xuất sắc'
    },
    writing: {
      targetChar: '学',
      charPinyin: 'xué',
      charMeaning: 'Học (trong Học tập, Học sinh, Trường học)',
      charStrokes: '8 nét: 点, 点, 撇, 点, 横撇, 横钩, 竖钩, 横',
      compositionTask: {
        prompt: 'Dịch sang tiếng Trung: "Tôi muốn xin học bổng du học"',
        expectedKeywords: ['我想申请', '留学', '奖学金'],
        sampleSolution: '我想申请留学奖学金 (Wǒ xiǎng shēnqǐng liúxué jiǎngxuéjīn)',
        explanation: '我想申请 (Tôi muốn xin) + 留学奖学金 (Học bổng du học).'
      }
    },
    matchingWords: [
      { id: 'w141', hanzi: '留学', pinyin: 'liúxué', vi: 'Du học nước ngoài' },
      { id: 'w142', hanzi: '奖学金', pinyin: 'jiǎngxuéjīn', vi: 'Học bổng tài trợ' },
      { id: 'w143', hanzi: '图书馆', pinyin: 'túshūguǎn', vi: 'Thư viện trường' },
      { id: 'w144', hanzi: '考试', pinyin: 'kǎoshì', vi: 'Kỳ thi, kiểm tra' },
      { id: 'w145', hanzi: '专业', pinyin: 'zhuānyè', vi: 'Chuyên ngành học' },
      { id: 'w146', hanzi: '毕业', pinyin: 'bìyè', vi: 'Tốt nghiệp ra trường' }
    ]
  },
  {
    id: 'hsk4-lesson15',
    level: 'HSK 4',
    title: 'Bài 15: Đàm phán thương mại & Ký kết hợp đồng (商务谈判与合作)',
    description: 'Tiếng Trung thương mại chuyên nghiệp: thảo luận giá cả, điều khoản giao hàng và ký kết thỏa thuận đối tác.',
    reading: {
      title: '商务价格谈判 (Đàm phán giá cả thương mại)',
      tokens: [
        { hanzi: '陈经理：', pinyin: 'Chén jīnglǐ:', vi: 'Giám đốc Trần:', isSpeaker: true },
        { hanzi: '王总', pinyin: 'Wáng zǒng', vi: 'Tổng giám đốc Vương', hv: 'Vương Tổng' },
        { hanzi: '，如果我们', pinyin: 'rúguǒ wǒmen', vi: 'Nếu chúng tôi', hv: 'Như Quả Ngã Môn' },
        { hanzi: '订购', pinyin: 'dìnggòu', vi: 'Đặt mua hàng', hv: 'Đính Cấu', sample: '订购一批产品。' },
        { hanzi: '一万件产品', pinyin: 'yī wàn jiàn chǎnpǐn', vi: '10.000 sản phẩm', hv: 'Nhất Vạn Kiện Sản Phẩm' },
        { hanzi: '，价格方面', pinyin: 'jiàgé fāngmiàn', vi: 'Về mặt giá cả', hv: 'Giá Cách Phương Diện' },
        { hanzi: '能否', pinyin: 'néngfǒu', vi: 'Liệu có thể', hv: 'Năng Phủ' },
        { hanzi: '给予', pinyin: 'jǐyǔ', vi: 'Dành cho / Ưu đãi', hv: 'Kỷ Dữ' },
        { hanzi: '百分之五的', pinyin: 'bǎi fēn zhī wǔ de', vi: '5%', hv: 'Bách Phân Chi Ngũ Đích' },
        { hanzi: '折扣', pinyin: 'zhékòu', vi: 'Chiết khấu giảm giá', hv: 'Chiết Khấu', sample: '打九折。' },
        { hanzi: '？\n', pinyin: '', vi: '' },
        { hanzi: '王总：', pinyin: 'Wáng zǒng:', vi: 'Vương tổng:', isSpeaker: true },
        { hanzi: '鉴于', pinyin: 'jiànyú', vi: 'Xét thấy / Do', hv: 'Giám Vu' },
        { hanzi: '双方', pinyin: 'shuāngfāng', vi: 'Hai bên', hv: 'Song Phương' },
        { hanzi: '长期友好的', pinyin: 'chángqī yǒuhǎo de', vi: 'Hữu nghị lâu dài', hv: 'Trường Kỳ Hữu Hảo Đích' },
        { hanzi: '合作关系', pinyin: 'hézuò guānxi', vi: 'Quan hệ hợp tác', hv: 'Hợp Tác Quan Hệ' },
        { hanzi: '，我们同意', pinyin: 'wǒmen tóngyì', vi: 'Chúng tôi đồng ý', hv: 'Ngã Môn Đồng Ý' },
        { hanzi: '这个折扣', pinyin: 'zhè gè zhékòu', vi: 'Mức chiết khấu này', hv: 'Giá Cá Chiết Khấu' },
        { hanzi: '，下周', pinyin: 'xià zhōu', vi: 'Tuần tới', hv: 'Hạ Chu' },
        { hanzi: '正式签署', pinyin: 'zhèngshì qiānshǔ', vi: 'Chính thức ký kết', hv: 'Chính Thức Khiêm Thự' },
        { hanzi: '商业合同', pinyin: 'shāngyè hétong', vi: 'Hợp đồng thương mại', hv: 'Thương Nghiệp Hợp Đồng' },
        { hanzi: '。', pinyin: '', vi: '' }
      ],
      vietnameseTranslation: 'Giám đốc Trần: Vương tổng, nếu chúng tôi đặt mua 10.000 sản phẩm thì về mặt giá cả liệu có thể chiết khấu 5% được không?\nVương tổng: Xét mối quan hệ hợp tác hữu nghị lâu dài giữa đôi bên, chúng tôi đồng ý mức chiết khấu này, tuần sau sẽ chính thức ký kết hợp đồng thương mại.',
      quiz: {
        question: 'Câu hỏi: Bên bán đã đồng ý mức chiết khấu bao nhiêu phần trăm?',
        options: [
          { text: 'A. 百分之二 (2%)', correct: false },
          { text: 'B. 百分之五 (5%)', correct: true },
          { text: 'C. 百分之十 (10%)', correct: false },
          { text: 'D. 不打折 (Không chiết khấu)', correct: false }
        ]
      }
    },
    listening: {
      audioSpeed: 1,
      dialogues: [
        { id: 0, hanzi: '祝贺我们今天圆满签订了合作协议！', pinyin: 'Zhùhè wǒmen jīntiān yuánmǎn qiāndìng le hézuò xiéyì!', vi: 'Chúc mừng hôm nay chúng ta đã ký kết viên mãn thỏa thuận hợp tác!' },
        { id: 1, hanzi: '合作共赢，预祝我们的项目取得巨大成功！', pinyin: 'Hézuò gòng yíng, yùzhù wǒmen de xiàngmù qǔdé jùdà chénggōng!', vi: 'Hợp tác đôi bên cùng thắng, chúc dự án của chúng ta thành công rực rỡ!' }
      ],
      quiz: {
        prompt: 'Nghe đoạn âm thanh và điền từ:',
        sentencePrefix: '祝贺我们今天圆满签订了',
        missingWord: '合作协议',
        sentenceSuffix: '！',
        pinyinHint: 'Zhùhè wǒmen jīntiān yuánmǎn qiāndìng le (hézuò xiéyì)!'
      }
    },
    speaking: {
      targetHanzi: '互利共赢是双方长期合作的基础',
      targetPinyin: 'Hù lì gòng yíng shì shuāngfāng chángqī hézuò de jīchǔ',
      vietnameseMeaning: 'Đôi bên cùng có lợi là nền tảng cho sự hợp tác lâu dài'
    },
    writing: {
      targetChar: '商',
      charPinyin: 'shāng',
      charMeaning: 'Thương (trong Thương mại, Doanh nhân, Thảo luận)',
      charStrokes: '11 nét: 点, 横, 点, 撇, 竖, 横折钩, 撇, 点, 竖, 横折, 横',
      compositionTask: {
        prompt: 'Dịch sang tiếng Trung: "Chúng tôi muốn ký kết hợp đồng với quý công ty"',
        expectedKeywords: ['我们想与', '贵公司', '签订合同'],
        sampleSolution: '我们想与贵公司签订合同 (Wǒmen xiǎng yǔ guì gōngsī qiāndìng hétong)',
        explanation: '我们想与贵公司 (Chúng tôi muốn cùng quý công ty) + 签订合同 (Ký kết hợp đồng).'
      }
    },
    matchingWords: [
      { id: 'w151', hanzi: '谈判', pinyin: 'tánpàn', vi: 'Đàm phán thương lượng' },
      { id: 'w152', hanzi: '合同', pinyin: 'hétong', vi: 'Bản hợp đồng kinh tế' },
      { id: 'w153', hanzi: '价格', pinyin: 'jiàgé', vi: 'Giá cả sản phẩm' },
      { id: 'w154', hanzi: '折扣', pinyin: 'zhékòu', vi: 'Chiết khấu ưu đãi' },
      { id: 'w155', hanzi: '合作', pinyin: 'hézuò', vi: 'Hợp tác đối tác' },
      { id: 'w156', hanzi: '协议', pinyin: 'xiéyì', vi: 'Thỏa thuận văn bản' }
    ]
  }
];

// ==========================================
// 1.1 REAL-LIFE COMMUNICATION SCENARIOS & SENTENCE BUILDER DATASET
// ==========================================
const REAL_LIFE_SCENARIOS = [
  {
    id: 'restaurant',
    title: 'Ở Nhà Hàng / Quán Ăn (在餐厅)',
    sub: 'Gọi món, hỏi giá tiền & xin thanh toán',
    icon: '🍜',
    description: 'Tình huống giao tiếp thực tế khi bước vào nhà hàng Trung Quốc: Chào hỏi nhân viên phục vụ, gọi món ăn, đồ uống và yêu cầu tính tiền.',
    vocabList: [
      { hanzi: '服务员', pinyin: 'fúwùyuán', vi: 'Phục vụ viên' },
      { hanzi: '菜单', pinyin: 'càidān', vi: 'Thực đơn' },
      { hanzi: '点菜', pinyin: 'diǎncài', vi: 'Gọi món' },
      { hanzi: '买单', pinyin: 'mǎidān', vi: 'Thanh toán' },
      { hanzi: '一杯', pinyin: 'yībēi', vi: 'Một ly/cốc' },
      { hanzi: '冰咖啡', pinyin: 'bīng kāfēi', vi: 'Cà phê đá' },
      { hanzi: '米饭', pinyin: 'mǐfàn', vi: 'Cơm trắng' },
      { hanzi: '好吃', pinyin: 'hǎochī', vi: 'Ngon miệng' }
    ],
    challenges: [
      {
        promptVi: 'Tôi muốn uống một ly cà phê đá.',
        grammarHint: 'Chủ ngữ (我) + Động từ năng nguyện (想) + Động từ (喝) + Cụm số lượng (一杯) + Danh từ (冰咖啡).',
        correctOrder: ['我', '想', '喝', '一杯', '冰咖啡'],
        audioFull: '我想喝一杯冰咖啡',
        explanation: 'Cấu trúc câu chỉ nguyện vọng: S + 想 + V + O. Ở đây "一杯" là lượng từ cho thức uống "冰咖啡".'
      },
      {
        promptVi: 'Phục vụ ơi, tôi muốn gọi món.',
        grammarHint: 'Từ xưng hô (服务员) + Dấu phẩy + Chủ ngữ (我) + Muốn (想) + Động từ (点菜).',
        correctOrder: ['服务员', '，', '我', '想', '点菜'],
        audioFull: '服务员，我想点菜',
        explanation: 'Trong văn hóa Trung Quốc, gọi nhân viên là "服务员" rất phổ biến và lịch sự.'
      },
      {
        promptVi: 'Ông chủ, xin hỏi thanh toán bao nhiêu tiền?',
        grammarHint: 'Xưng hô (老板) + Xin hỏi (请问) + Thanh toán (买单) + Bao nhiêu tiền (多少钱) + ?',
        correctOrder: ['老板', '，', '请问', '买单', '多少钱', '？'],
        audioFull: '老板，请问买单多少钱？',
        explanation: 'Từ "买单" (mǎidān) bắt nguồn từ tiếng Quảng Đông và hiện nay được dùng rộng rãi trên toàn Trung Quốc.'
      }
    ]
  },
  {
    id: 'taxi_directions',
    title: 'Đi Taxi & Hỏi Đường (打车与问路)',
    sub: 'Chỉ đường, rẽ trái/phải & đi tàu hỏa',
    icon: '🚕',
    description: 'Tình huống di chuyển thực tế tại Trung Quốc: Nói với bác tài địa điểm muốn đến, hỏi người qua đường cách đi đến ga xe lửa hoặc sân bay.',
    vocabList: [
      { hanzi: '师傅', pinyin: 'shīfu', vi: 'Bác tài / Chú lái xe' },
      { hanzi: '火车站', pinyin: 'huǒchēzhàn', vi: 'Ga tàu hỏa' },
      { hanzi: '机场', pinyin: 'jīchǎng', vi: 'Sân bay' },
      { hanzi: '一直', pinyin: 'yīzhí', vi: 'Đi thẳng liên tục' },
      { hanzi: '往前走', pinyin: 'wǎng qián zǒu', vi: 'Đi về phía trước' },
      { hanzi: '左拐', pinyin: 'zuǒ guǎi', vi: 'Rẽ trái' },
      { hanzi: '右拐', pinyin: 'yòu guǎi', vi: 'Rẽ phải' },
      { hanzi: '怎么走', pinyin: 'zěnme zǒu', vi: 'Đi như thế nào' }
    ],
    challenges: [
      {
        promptVi: 'Xin hỏi, đi đến ga tàu hỏa đi như thế nào?',
        grammarHint: 'Lịch sự (请问) + Động từ đi (去) + Địa điểm (火车站) + Hỏi cách thức (怎么走) + ?',
        correctOrder: ['请问', '，', '去', '火车站', '怎么走', '？'],
        audioFull: '请问，去火车站怎么走？',
        explanation: 'Mẫu câu hỏi đường kinh điển: "请问 + 去 + Địa điểm + 怎么走？".'
      },
      {
        promptVi: 'Bác tài, tôi muốn đi đến sân bay.',
        grammarHint: 'Xưng hô (师傅) + Chủ ngữ (我) + Muốn đi (想去) + Sân bay (机场).',
        correctOrder: ['师傅', '，', '我', '想去', '机场'],
        audioFull: '师傅，我想去机场',
        explanation: 'Gọi tài xế taxi là "师傅" (Shīfu) thể hiện sự tôn trọng và thân mật.'
      },
      {
        promptVi: 'Hãy đi thẳng về phía trước rồi rẽ trái.',
        grammarHint: 'Đi thẳng về phía trước (一直往前走) + Sau đó (然后) + Rẽ trái (往左拐).',
        correctOrder: ['一直', '往前走', '，', '往左拐'],
        audioFull: '一直往前走，往左拐',
        explanation: '"往" (wǎng) là giới từ chỉ phương hướng (về phía/hướng về).'
      }
    ]
  },
  {
    id: 'shopping',
    title: 'Mua Sắm & Mặc Cả (购物与讨价)',
    sub: 'Hỏi giá, chê đắt & bớt giá',
    icon: '🛍️',
    description: 'Kỹ năng mua sắm thực chiến tại chợ truyền thống hay cửa hàng quần áo Trung Quốc: Hỏi giá tiền, mặc cả và thanh toán qua mã QR.',
    vocabList: [
      { hanzi: '这个', pinyin: 'zhège', vi: 'Cái này' },
      { hanzi: '多少钱', pinyin: 'duōshǎo qián', vi: 'Bao nhiêu tiền' },
      { hanzi: '太贵了', pinyin: 'tài guì le', vi: 'Đắt quá rồi' },
      { hanzi: '便宜一点', pinyin: 'piányi yīdiǎn', vi: 'Rẻ hơn một chút' },
      { hanzi: '微信支付', pinyin: 'Wēixìn zhīfù', vi: 'Thanh toán WeChat Pay' },
      { hanzi: '可以吗', pinyin: 'kěyǐ ma', vi: 'Được không' }
    ],
    challenges: [
      {
        promptVi: 'Cái này đắt quá rồi, rẻ một chút đi!',
        grammarHint: 'Chủ ngữ (这个) + Đắt quá rồi (太贵了) + Bớt chút đi (便宜一点吧) + !',
        correctOrder: ['这个', '太贵了', '，', '便宜一点吧', '！'],
        audioFull: '这个太贵了，便宜一点吧！',
        explanation: 'Cấu trúc "太...了" diễn tả mức độ quá đà, dùng trợ từ "吧" để đưa ra lời đề nghị nhẹ nhàng.'
      },
      {
        promptVi: 'Tôi có thể dùng WeChat Pay thanh toán không?',
        grammarHint: 'Tôi (我) + Có thể (可以用) + WeChat (微信) + Thanh toán (支付吗) + ?',
        correctOrder: ['我', '可以', '用', '微信', '支付吗', '？'],
        audioFull: '我可以用微信支付吗？',
        explanation: 'Ở Trung Quốc hiện nay thanh toán không tiền mặt (WeChat/Alipay) chiếm hơn 95% giao dịch.'
      }
    ]
  },
  {
    id: 'hotel',
    title: 'Khách Sạn & Nhận Phòng (酒店入住)',
    sub: 'Check-in, thẻ phòng & hỏi mật khẩu wifi',
    icon: '🏨',
    description: 'Thủ tục nhận phòng tại khách sạn khi du lịch hoặc công tác: Xuất trình hộ chiếu, nhận thẻ phòng và hỏi dịch vụ.',
    vocabList: [
      { hanzi: '预订', pinyin: 'yùdìng', vi: 'Đặt trước' },
      { hanzi: '护照', pinyin: 'hùzhào', vi: 'Hộ chiếu' },
      { hanzi: '单人间', pinyin: 'dānrénjiān', vi: 'Phòng đơn' },
      { hanzi: '房卡', pinyin: 'fángkǎ', vi: 'Thẻ phòng' },
      { hanzi: '密码', pinyin: 'mìmǎ', vi: 'Mật khẩu' }
    ],
    challenges: [
      {
        promptVi: 'Xin hỏi mật khẩu wifi của phòng là gì?',
        grammarHint: 'Xin hỏi (请问) + Phòng (房间的) + wifi + Mật khẩu (密码) + Là gì (是什么) + ?',
        correctOrder: ['请问', '房间的', 'wifi', '密码', '是', '什么', '？'],
        audioFull: '请问房间的wifi密码是什么？',
        explanation: 'Mẫu câu tra cứu thông tin dịch vụ hữu ích nhất khi nhận phòng khách sạn.'
      },
      {
        promptVi: 'Đây là hộ chiếu của tôi, tôi đã đặt phòng trước.',
        grammarHint: 'Đây là (这是) + Hộ chiếu tôi (我的护照) + Tôi đã đặt (我预订了房间).',
        correctOrder: ['这是', '我的护照', '，', '我', '预订了房间'],
        audioFull: '这是我的护照，我预订了房间',
        explanation: '"预订了" có trợ từ "了" diễn tả hành động đặt phòng đã hoàn tất từ trước.'
      }
    ]
  }
];

// ==========================================
// 1.2 COMPREHENSIVE VOCABULARY TOPICS ROADMAP (128+ WORDS)
// ==========================================
const VOCABULARY_TOPICS_DATABASE = [
  {
    id: 'food_drink',
    name: '🍜 Ẩm Thực & Nhà Hàng',
    icon: '🍜',
    description: 'Từ vựng gọi món, thức ăn, đồ uống, mùi vị và thanh toán tại nhà hàng.',
    words: [
      { id: 'fd_1', hanzi: '菜单', pinyin: 'càidān', vi: 'Thực đơn', hv: 'Thái Đơn' },
      { id: 'fd_2', hanzi: '服务员', pinyin: 'fúwùyuán', vi: 'Phục vụ viên', hv: 'Phục Vụ Viên' },
      { id: 'fd_3', hanzi: '点菜', pinyin: 'diǎncài', vi: 'Gọi món', hv: 'Điểm Thái' },
      { id: 'fd_4', hanzi: '买单', pinyin: 'mǎidān', vi: 'Thanh toán', hv: 'Mãi Đơn' },
      { id: 'fd_5', hanzi: '冰咖啡', pinyin: 'bīng kāfēi', vi: 'Cà phê đá', hv: 'Băng Ca Phê' },
      { id: 'fd_6', hanzi: '米饭', pinyin: 'mǐfàn', vi: 'Cơm trắng', hv: 'Mễ Phạn' },
      { id: 'fd_7', hanzi: '面条', pinyin: 'miàntiáo', vi: 'Mì sợi', hv: 'Diện Điều' },
      { id: 'fd_8', hanzi: '牛肉', pinyin: 'niúròu', vi: 'Thịt bò', hv: 'Ngưu Nhục' },
      { id: 'fd_9', hanzi: '筷子', pinyin: 'kuàizi', vi: 'Đôi đũa', hv: 'Khoái Tử' },
      { id: 'fd_10', hanzi: '好喝', pinyin: 'hǎohē', vi: 'Uống ngon', hv: 'Hảo Hát' },
      { id: 'fd_11', hanzi: '好吃', pinyin: 'hǎochī', vi: 'Ăn ngon', hv: 'Hảo Ngật' },
      { id: 'fd_12', hanzi: '麻辣', pinyin: 'málà', vi: 'Cay tê', hv: 'Ma Lạt' },
      { id: 'fd_13', hanzi: '微辣', pinyin: 'wēilà', vi: 'Cay nhẹ', hv: 'Vi Lạt' },
      { id: 'fd_14', hanzi: '打包', pinyin: 'dǎbāo', vi: 'Gói mang về', hv: 'Đả Bao' },
      { id: 'fd_15', hanzi: '茶水', pinyin: 'cháshuǐ', vi: 'Nước trà', hv: 'Trà Thủy' },
      { id: 'fd_16', hanzi: '青菜', pinyin: 'qīngcài', vi: 'Rau xanh', hv: 'Thanh Thái' }
    ]
  },
  {
    id: 'travel_transit',
    name: '✈️ Du Lịch & Di Chuyển',
    icon: '✈️',
    description: 'Từ vựng đặt vé, phương tiện công cộng, hỏi đường và ga tàu sân bay.',
    words: [
      { id: 'tr_1', hanzi: '火车站', pinyin: 'huǒchēzhàn', vi: 'Ga tàu hỏa', hv: 'Hỏa Xa Trạm' },
      { id: 'tr_2', hanzi: '机场', pinyin: 'jīchǎng', vi: 'Sân bay', hv: 'Cơ Trường' },
      { id: 'tr_3', hanzi: '飞机票', pinyin: 'fēijīpiào', vi: 'Vé máy bay', hv: 'Phi Cơ Phiếu' },
      { id: 'tr_4', hanzi: '护照', pinyin: 'hùzhào', vi: 'Hộ chiếu', hv: 'Hộ Chiếu' },
      { id: 'tr_5', hanzi: '行李箱', pinyin: 'xínglixiāng', vi: 'Vali hành lý', hv: 'Hành Lý Tương' },
      { id: 'tr_6', hanzi: '出租车', pinyin: 'chūzūchē', vi: 'Xe taxi', hv: 'Xuất Tô Xa' },
      { id: 'tr_7', hanzi: '地铁站', pinyin: 'dìtiězhàn', vi: 'Ga tàu điện', hv: 'Địa Thiết Trạm' },
      { id: 'tr_8', hanzi: '怎么走', pinyin: 'zěnme zǒu', vi: 'Đi như thế nào', hv: 'Chẩm Ma Tẩu' },
      { id: 'tr_9', hanzi: '一直', pinyin: 'yīzhí', vi: 'Đi thẳng liên tục', hv: 'Nhất Trực' },
      { id: 'tr_10', hanzi: '往左拐', pinyin: 'wǎng zuǒ guǎi', vi: 'Rẽ trái', hv: 'Vãng Tả Quải' },
      { id: 'tr_11', hanzi: '往右拐', pinyin: 'wǎng yòu guǎi', vi: 'Rẽ phải', hv: 'Vãng Hữu Quải' },
      { id: 'tr_12', hanzi: '十字路口', pinyin: 'shízì lùkǒu', vi: 'Ngã tư đường', hv: 'Thập Tự Lộ Khẩu' },
      { id: 'tr_13', hanzi: '准时', pinyin: 'zhǔnshí', vi: 'Đúng giờ', hv: 'Chuẩn Thời' },
      { id: 'tr_14', hanzi: '延误', pinyin: 'yánwù', vi: 'Trễ chuyến / Delay', hv: 'Diên Ngộ' },
      { id: 'tr_15', hanzi: '风景', pinyin: 'fēngjǐng', vi: 'Phong cảnh', hv: 'Phong Cảnh' },
      { id: 'tr_16', hanzi: '宾馆', pinyin: 'bīnguǎn', vi: 'Khách sạn / Nhà nghỉ', hv: 'Tân Quán' }
    ]
  },
  {
    id: 'shopping_pay',
    name: '🛍️ Mua Sắm & Mặc Cả',
    icon: '🛍️',
    description: 'Từ vựng giá cả, mặc cả hàng quán, các hình thức thanh toán số và mua hàng.',
    words: [
      { id: 'sh_1', hanzi: '多少钱', pinyin: 'duōshǎo qián', vi: 'Bao nhiêu tiền', hv: 'Đa Thiểu Tiền' },
      { id: 'sh_2', hanzi: '太贵了', pinyin: 'tài guì le', vi: 'Đắt quá rồi', hv: 'Thái Quý Liễu' },
      { id: 'sh_3', hanzi: '便宜一点', pinyin: 'piányi yīdiǎn', vi: 'Bớt chút đi', hv: 'Tiện Nghi Nhất Điểm' },
      { id: 'sh_4', hanzi: '打折', pinyin: 'dǎzhé', vi: 'Giảm giá', hv: 'Đả Chiết' },
      { id: 'sh_5', hanzi: '商场', pinyin: 'shāngchǎng', vi: 'TT thương mại', hv: 'Thương Trường' },
      { id: 'sh_6', hanzi: '衣服', pinyin: 'yīfu', vi: 'Quần áo', hv: 'Y Phục' },
      { id: 'sh_7', hanzi: '试衣间', pinyin: 'shìyījiān', vi: 'Phòng thử đồ', hv: 'Thí Y Gian' },
      { id: 'sh_8', hanzi: '微信支付', pinyin: 'Wēixìn zhīfù', vi: 'Thanh toán WeChat', hv: 'Vi Tín Chi Phó' },
      { id: 'sh_9', hanzi: '支付宝', pinyin: 'Zhīfùbǎo', vi: 'Ví Alipay', hv: 'Chi Phó Bảo' },
      { id: 'sh_10', hanzi: '现金', pinyin: 'xiànjīn', vi: 'Tiền mặt', hv: 'Hiện Kim' },
      { id: 'sh_11', hanzi: '刷卡', pinyin: 'shuākǎ', vi: 'Quẹt thẻ ngân hàng', hv: 'Xoát Tạp' },
      { id: 'sh_12', hanzi: '一斤', pinyin: 'yī jīn', vi: 'Một cân (500g)', hv: 'Nhất Cân' },
      { id: 'sh_13', hanzi: '质量', pinyin: 'zhìliàng', vi: 'Chất lượng', hv: 'Chất Lượng' },
      { id: 'sh_14', hanzi: '退货', pinyin: 'tuìhuò', vi: 'Trả lại hàng', hv: 'Thoái Hóa' },
      { id: 'sh_15', hanzi: '发票', pinyin: 'fāpiào', vi: 'Hóa đơn đỏ', hv: 'Phát Phiếu' },
      { id: 'sh_16', hanzi: '合适', pinyin: 'héshì', vi: 'Vừa vặn / Thích hợp', hv: 'Hợp Thích' }
    ]
  },
  {
    id: 'work_business',
    name: '💼 Công Sở & Đàm Phán',
    icon: '💼',
    description: 'Từ vựng văn phòng, công việc, họp hành, tiền lương và hợp đồng hợp tác.',
    words: [
      { id: 'wk_1', hanzi: '经理', pinyin: 'jīnglǐ', vi: 'Giám đốc / Quản lý', hv: 'Kinh Lý' },
      { id: 'wk_2', hanzi: '同事', pinyin: 'tóngshì', vi: 'Đồng nghiệp', hv: 'Đồng Sự' },
      { id: 'wk_3', hanzi: '开会', pinyin: 'kāihuì', vi: 'Họp hành', hv: 'Khai Hội' },
      { id: 'wk_4', hanzi: '合同', pinyin: 'hétong', vi: 'Hợp đồng', hv: 'Hợp Đồng' },
      { id: 'wk_5', hanzi: '加班', pinyin: 'jiābān', vi: 'Tăng ca / Làm thêm', hv: 'Gia Ban' },
      { id: 'wk_6', hanzi: '工资', pinyin: 'gōngzī', vi: 'Tiền lương', hv: 'Công Tư' },
      { id: 'wk_7', hanzi: '面试', pinyin: 'miànshì', vi: 'Phỏng vấn', hv: 'Diện Thí' },
      { id: 'wk_8', hanzi: '简历', pinyin: 'jiǎnlì', vi: 'CV lý lịch', hv: 'Giản Lịch' },
      { id: 'wk_9', hanzi: '发邮件', pinyin: 'fā yóujiàn', vi: 'Gửi thư điện tử', hv: 'Phát Bưu Kiện' },
      { id: 'wk_10', hanzi: '项目', pinyin: 'xiàngmù', vi: 'Dự án', hv: 'Hạng Mục' },
      { id: 'wk_11', hanzi: '客户', pinyin: 'kèhù', vi: 'Khách hàng', hv: 'Khách Hộ' },
      { id: 'wk_12', hanzi: '合作', pinyin: 'hézuò', vi: 'Hợp tác làm ăn', hv: 'Hợp Tác' },
      { id: 'wk_13', hanzi: '出差', pinyin: 'chūchāi', vi: 'Đi công tác', hv: 'Xuất Sai' },
      { id: 'wk_14', hanzi: '签字', pinyin: 'qiānzì', vi: 'Ký tên xác nhận', hv: 'Thiêm Tự' },
      { id: 'wk_15', hanzi: '请假', pinyin: 'qǐngjià', vi: 'Xin nghỉ phép', hv: 'Thỉnh Giả' },
      { id: 'wk_16', hanzi: '成功', pinyin: 'chénggōng', vi: 'Thành công', hv: 'Thành Công' }
    ]
  },
  {
    id: 'health_hospital',
    name: '🏥 Sức Khỏe & Nhà Thuốc',
    icon: '🏥',
    description: 'Từ vựng các triệu chứng bệnh, đi khám tại bệnh viện và mua thuốc.',
    words: [
      { id: 'hl_1', hanzi: '生病', pinyin: 'shēngbìng', vi: 'Bị ốm / Bị bệnh', hv: 'Sinh Bệnh' },
      { id: 'hl_2', hanzi: '发烧', pinyin: 'fāshāo', vi: 'Bị sốt', hv: 'Phát Thiêu' },
      { id: 'hl_3', hanzi: '头疼', pinyin: 'tóuténg', vi: 'Đau đầu', hv: 'Đầu Thống' },
      { id: 'hl_4', hanzi: '感冒', pinyin: 'gǎnmào', vi: 'Cảm cúm', hv: 'Cảm Mạo' },
      { id: 'hl_5', hanzi: '咳嗽', pinyin: 'késou', vi: 'Bị ho', hv: 'Khái Thấu' },
      { id: 'hl_6', hanzi: '去医院', pinyin: 'qù yīyuàn', vi: 'Đi bệnh viện', hv: 'Khứ Y Viện' },
      { id: 'hl_7', hanzi: '医生', pinyin: 'yīshēng', vi: 'Bác sĩ', hv: 'Y Sinh' },
      { id: 'hl_8', hanzi: '吃药', pinyin: 'chī yào', vi: 'Uống thuốc', hv: 'Ngật Dược' },
      { id: 'hl_9', hanzi: '药店', pinyin: 'yàodiàn', vi: 'Hiệu thuốc tây', hv: 'Dược Điếm' },
      { id: 'hl_10', hanzi: '打针', pinyin: 'dǎzhēn', vi: 'Tiêm thuốc', hv: 'Đả Châm' },
      { id: 'hl_11', hanzi: '检查', pinyin: 'jiǎnchá', vi: 'Kiểm tra sức khỏe', hv: 'Kiểm Tra' },
      { id: 'hl_12', hanzi: '身体', pinyin: 'shēntǐ', vi: 'Cơ thể / Sức khỏe', hv: 'Thân Thể' },
      { id: 'hl_13', hanzi: '休息', pinyin: 'xiūxi', vi: 'Nghỉ ngơi tĩnh dưỡng', hv: 'Hưu Tức' },
      { id: 'hl_14', hanzi: '严重', pinyin: 'yánzhòng', vi: 'Nghiêm trọng', hv: 'Nghiêm Trọng' },
      { id: 'hl_15', hanzi: '康复', pinyin: 'kāngfù', vi: 'Hồi phục bình phục', hv: 'Khang Phục' },
      { id: 'hl_16', hanzi: '舒服', pinyin: 'shūfu', vi: 'Dễ chịu / Khỏe khoắn', hv: 'Thư Phục' }
    ]
  },
  {
    id: 'family_life',
    name: '🏠 Gia Đình & Đời Sống',
    icon: '🏠',
    description: 'Từ vựng các thành viên gia đình, sinh hoạt thường nhật và việc nhà.',
    words: [
      { id: 'fm_1', hanzi: '爸爸', pinyin: 'bàba', vi: 'Bố / Ba', hv: 'Bà Ba' },
      { id: 'fm_2', hanzi: '妈妈', pinyin: 'māma', vi: 'Mẹ / Má', hv: 'Ma Ma' },
      { id: 'fm_3', hanzi: '爷爷', pinyin: 'yéye', vi: 'Ông nội', hv: 'Gia Gia' },
      { id: 'fm_4', hanzi: '奶奶', pinyin: 'nǎinai', vi: 'Bà nội', hv: 'Nãi Nãi' },
      { id: 'fm_5', hanzi: '孩子', pinyin: 'háizi', vi: 'Con cái / Đứa trẻ', hv: 'Hài Tử' },
      { id: 'fm_6', hanzi: '做饭', pinyin: 'zuòfàn', vi: 'Nấu ăn', hv: 'Tác Phạn' },
      { id: 'fm_7', hanzi: '洗衣服', pinyin: 'xǐ yīfu', vi: 'Giặt giũ quần áo', hv: 'Tẩy Y Phục' },
      { id: 'fm_8', hanzi: '打扫', pinyin: 'dǎsǎo', vi: 'Quét dọn nhà cửa', hv: 'Đả Tảo' },
      { id: 'fm_9', hanzi: '看电视', pinyin: 'kàn diànshì', vi: 'Xem tivi truyền hình', hv: 'Khán Điện Thị' },
      { id: 'fm_10', hanzi: '起床', pinyin: 'qǐchuáng', vi: 'Thức dậy', hv: 'Khởi Sàng' },
      { id: 'fm_11', hanzi: '睡觉', pinyin: 'shuìjiào', vi: 'Đi ngủ', hv: 'Thụy Giác' },
      { id: 'fm_12', hanzi: '洗澡', pinyin: 'xǐzǎo', vi: 'Tắm rửa', hv: 'Tẩy Tảo' },
      { id: 'fm_13', hanzi: '周末', pinyin: 'zhōumò', vi: 'Cuối tuần', hv: 'Chu Mạt' },
      { id: 'fm_14', hanzi: '超市', pinyin: 'chāoshì', vi: 'Siêu thị mua sắm', hv: 'Siêu Thị' },
      { id: 'fm_15', hanzi: '邻居', pinyin: 'línjū', vi: 'Hàng xóm láng giềng', hv: 'Lân Cư' },
      { id: 'fm_16', hanzi: '幸福', pinyin: 'xìngfú', vi: 'Hạnh phúc', hv: 'Hạnh Phúc' }
    ]
  },
  {
    id: 'school_study',
    name: '🎓 Trường Học & Học HSK',
    icon: '🎓',
    description: 'Từ vựng học tập HSK, thi cử, bạn bè, thầy cô và ngữ pháp.',
    words: [
      { id: 'sc_1', hanzi: '老师', pinyin: 'lǎoshī', vi: 'Thầy cô giáo', hv: 'Lão Sư' },
      { id: 'sc_2', hanzi: '同学', pinyin: 'tóngxué', vi: 'Bạn cùng lớp', hv: 'Đồng Học' },
      { id: 'sc_3', hanzi: '汉语', pinyin: 'hànyǔ', vi: 'Tiếng Hán / Tiếng Trung', hv: 'Hán Ngữ' },
      { id: 'sc_4', hanzi: '拼音', pinyin: 'pīnyīn', vi: 'Phiên âm Pinyin', hv: 'Bính Âm' },
      { id: 'sc_5', hanzi: '汉字', pinyin: 'hànzì', vi: 'Chữ Hán', hv: 'Hán Tự' },
      { id: 'sc_6', hanzi: '词汇', pinyin: 'cíhuì', vi: 'Từ vựng', hv: 'Từ Hối' },
      { id: 'sc_7', hanzi: '语法', pinyin: 'yǔfǎ', vi: 'Ngữ pháp', hv: 'Ngữ Pháp' },
      { id: 'sc_8', hanzi: '考试', pinyin: 'kǎoshì', vi: 'Thi cử / Bài thi', hv: 'Khảo Thí' },
      { id: 'sc_9', hanzi: '成绩', pinyin: 'chéngjì', vi: 'Điểm số / Thành tích', hv: 'Thành Tích' },
      { id: 'sc_10', hanzi: '复习', pinyin: 'fùxí', vi: 'Ôn tập bài cũ', hv: 'Phục Tập' },
      { id: 'sc_11', hanzi: '预习', pinyin: 'yùxí', vi: 'Chuẩn bị bài mới', hv: 'Dự Tập' },
      { id: 'sc_12', hanzi: '作业', pinyin: 'zuòyè', vi: 'Bài tập về nhà', hv: 'Tác Nghiệp' },
      { id: 'sc_13', hanzi: '图书馆', pinyin: 'túshūguǎn', vi: 'Thư viện', hv: 'Đồ Thư Quán' },
      { id: 'sc_14', hanzi: '毕业', pinyin: 'bìyè', vi: 'Tốt nghiệp ra trường', hv: 'Tất Nghiệp' },
      { id: 'sc_15', hanzi: '奖学金', pinyin: 'jiǎngxuéjīn', vi: 'Học bổng', hv: 'Tưởng Học Kim' },
      { id: 'sc_16', hanzi: '留学', pinyin: 'liúxué', vi: 'Du học nước ngoài', hv: 'Lưu Học' }
    ]
  },
  {
    id: 'weather_emotion',
    name: '🌦️ Thời Tiết & Cảm Xúc',
    icon: '🌦️',
    description: 'Từ vựng các kiểu thời tiết bốn mùa và trạng thái tâm trạng cảm xúc.',
    words: [
      { id: 'we_1', hanzi: '今天', pinyin: 'jīntiān', vi: 'Hôm nay', hv: 'Kim Thiên' },
      { id: 'we_2', hanzi: '明天', pinyin: 'míngtiān', vi: 'Ngày mai', hv: 'Minh Thiên' },
      { id: 'we_3', hanzi: '晴天', pinyin: 'qíngtiān', vi: 'Trời nắng đẹp', hv: 'Tình Thiên' },
      { id: 'we_4', hanzi: '下雨', pinyin: 'xiàyǔ', vi: 'Trời mưa', hv: 'Hạ Vũ' },
      { id: 'we_5', hanzi: '下雪', pinyin: 'xiàxuě', vi: 'Tuyết rơi', hv: 'Hạ Tuyết' },
      { id: 'we_6', hanzi: '刮风', pinyin: 'guāfēng', vi: 'Gió thổi mạnh', hv: 'Quát Phong' },
      { id: 'we_7', hanzi: '很冷', pinyin: 'hěn lěng', vi: 'Rất lạnh giá', hv: 'Hẩn Lãnh' },
      { id: 'we_8', hanzi: '很热', pinyin: 'hěn rè', vi: 'Rất nóng nực', hv: 'Hẩn Nhiệt' },
      { id: 'we_9', hanzi: '温暖', pinyin: 'wēnnuǎn', vi: 'Ấm áp', hv: 'Ôn Noãn' },
      { id: 'we_10', hanzi: '凉快', pinyin: 'liángkuai', vi: 'Mát mẻ dễ chịu', hv: 'Lương Khoái' },
      { id: 'we_11', hanzi: '高兴', pinyin: 'gāoxìng', vi: 'Vui vẻ mừng rỡ', hv: 'Cao Hưng' },
      { id: 'we_12', hanzi: '难过', pinyin: 'nánguò', vi: 'Buồn bã đau lòng', hv: 'Nan Quá' },
      { id: 'we_13', hanzi: '生气', pinyin: 'shēngqì', vi: 'Tức giận nổi nóng', hv: 'Sinh Khí' },
      { id: 'we_14', hanzi: '担心', pinyin: 'dānxīn', vi: 'Lo lắng bận tâm', hv: 'Đam Tâm' },
      { id: 'we_15', hanzi: '害怕', pinyin: 'hàipà', vi: 'Sợ hãi', hv: 'Hại Phạ' },
      { id: 'we_16', hanzi: '希望', pinyin: 'xīwàng', vi: 'Hy vọng ước mong', hv: 'Hi Vọng' }
    ]
  }
];

// ==========================================
// 2. STATE MANAGEMENT & STORAGE
// ==========================================
const AppState = {
  currentLessonIndex: 0,
  showPinyin: true,
  xp: 120,
  streak: 5,
  skills: {
    reading: 85,
    listening: 70,
    speaking: 65,
    writing: 60,
    matching: 90
  },
  completedLessons: ['hsk1-lesson1'],
  activeTab: 'reading',
  
  // Game State with Topic Support
  game: {
    timer: 0,
    timerInterval: null,
    score: 0,
    selectedCard: null,
    matchedCount: 0,
    cards: [],
    activeTopicId: 'food_drink',
    roundNumber: 1
  },

  // Scenario Sentence Builder State
  scenario: {
    currentId: 'restaurant',
    challengeIdx: 0,
    trayTokens: [],
    bankTokens: [],
    isCompleted: false
  },

  // Audio Player State
  player: {
    currentLineIndex: -1,
    isPlaying: false,
    speed: 1
  },

  // Hanzi Canvas State
  canvas: {
    isDrawing: false,
    lastX: 0,
    lastY: 0
  },

  // Multi-item speaking & writing states
  speaking: {
    sentenceIdx: 0
  },
  writing: {
    charIdx: 0
  },

  // Formula Grammar Sentence Builder State
  formula: {
    patternIdx: 0,
    challengeIdx: 0,
    userSlots: [],
    score: 0
  },

  // 1,000 HSK Vocab Explorer State
  vocab1000: {
    page: 1,
    pageSize: 24,
    searchQuery: '',
    selectedLevel: 'all',
    selectedTopic: 'all'
  }
};

// Load saved state from LocalStorage
function loadStoredState() {
  const saved = localStorage.getItem('chinese_app_progress');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      if (data.xp !== undefined) AppState.xp = data.xp;
      if (data.streak !== undefined) AppState.streak = data.streak;
      if (data.skills) AppState.skills = { ...AppState.skills, ...data.skills };
      if (data.completedLessons) AppState.completedLessons = data.completedLessons;
    } catch (e) {
      console.error('Failed to parse progress from localStorage', e);
    }
  }
}

function saveState() {
  localStorage.setItem('chinese_app_progress', JSON.stringify({
    xp: AppState.xp,
    streak: AppState.streak,
    skills: AppState.skills,
    completedLessons: AppState.completedLessons
  }));
  updateHeaderStats();
}

function addXP(amount, reason = '') {
  AppState.xp += amount;
  saveState();
  showToast(`+${amount} XP ${reason ? '• ' + reason : ''}`);
}

// Sound effects generator via Web Audio API
const SoundFX = {
  ctx: null,
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.ctx = new AudioContext();
    }
  },
  playSuccess() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.type = 'sine';
    const now = this.ctx.currentTime;
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
    osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
    osc.start(now);
    osc.stop(now + 0.4);
  },
  playError() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.type = 'sawtooth';
    const now = this.ctx.currentTime;
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.linearRampToValueAtTime(130, now + 0.25);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
    osc.start(now);
    osc.stop(now + 0.25);
  }
};

// ==========================================
// 3. TEXT-TO-SPEECH (TTS) ENGINES
// ==========================================
function speakChinese(text, speed = 1, onEndCallback = null) {
  if (!('speechSynthesis' in window)) {
    alert('Trình duyệt của bạn không hỗ trợ SpeechSynthesis.');
    return;
  }
  window.speechSynthesis.cancel(); // Stop ongoing speech

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-CN';
  utterance.rate = speed;
  utterance.pitch = 1.0;

  // Attempt to select high quality Chinese voice if available
  const voices = window.speechSynthesis.getVoices();
  const zhVoice = voices.find(v => v.lang.startsWith('zh') || v.lang.includes('CN'));
  if (zhVoice) {
    utterance.voice = zhVoice;
  }

  if (onEndCallback) {
    utterance.onend = onEndCallback;
    utterance.onerror = onEndCallback;
  }

  window.speechSynthesis.speak(utterance);
}

// ==========================================
// 4. TOAST & NOTIFICATION HELPERS
// ==========================================
function showToast(msg) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #0f172a;
      color: #fff;
      padding: 12px 20px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 0.9rem;
      box-shadow: 0 10px 25px rgba(0,0,0,0.25);
      border-left: 4px solid #e11d48;
      z-index: 9999;
      transform: translateY(20px);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      align-items: center;
      gap: 8px;
    `;
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✨</span> <span>${msg}</span>`;
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';

  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => {
    toast.style.transform = 'translateY(20px)';
    toast.style.opacity = '0';
  }, 2800);
}

// ==========================================
// 5. VIEW CONTROLLER & ROUTING
// ==========================================
function switchTab(tabId) {
  AppState.activeTab = tabId;
  
  // Highlight sidebar
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.tab === tabId);
  });

  // Switch section views
  document.querySelectorAll('.view-section').forEach(section => {
    section.classList.toggle('active', section.id === `section-${tabId}`);
  });

  // Render view-specific content
  const lesson = LESSONS_DATABASE[AppState.currentLessonIndex];
  if (tabId === 'reading') renderReadingView(lesson);
  if (tabId === 'listening') renderListeningView(lesson);
  if (tabId === 'speaking') renderSpeakingView(lesson);
  if (tabId === 'writing') renderWritingView(lesson);
  if (tabId === 'matching') initMatchingGame(lesson);
  if (tabId === 'scenario') renderScenarioView();
  if (tabId === 'formula') renderFormulaView();
  if (tabId === 'vocab1000') renderVocab1000View();
  if (tabId === 'dashboard') renderDashboardView();
}

function updateHeaderStats() {
  const xpEl = document.getElementById('stat-xp-val');
  const streakEl = document.getElementById('stat-streak-val');
  if (xpEl) xpEl.textContent = `${AppState.xp} XP`;
  if (streakEl) streakEl.textContent = `${AppState.streak} ngày`;
}

// ==========================================
// 6. MODULE 1: ĐỌC (READING)
// ==========================================
function renderReadingView(lesson) {
  const titleEl = document.getElementById('reading-article-title');
  const bodyEl = document.getElementById('reading-article-body');
  const bannerLevel = document.getElementById('reading-level-tag');
  const transEl = document.getElementById('reading-vietnamese-trans');

  if (titleEl) titleEl.textContent = lesson.reading.title;
  if (bannerLevel) bannerLevel.textContent = lesson.level;
  if (transEl) transEl.innerText = lesson.reading.vietnameseTranslation;

  if (bodyEl) {
    bodyEl.innerHTML = '';
    lesson.reading.tokens.forEach(token => {
      if (token.isSpeaker) {
        const sp = document.createElement('div');
        sp.style.cssText = 'font-weight: 700; color: #e11d48; margin-top: 14px; font-size: 1.05rem;';
        sp.textContent = token.hanzi;
        bodyEl.appendChild(sp);
      } else if (token.hanzi.includes('\n')) {
        const br = document.createElement('br');
        bodyEl.appendChild(br);
      } else if (!token.pinyin && token.hanzi.length <= 2 && /^[\p{P}]+$/u.test(token.hanzi)) {
        // Punctuation
        const punc = document.createElement('span');
        punc.textContent = token.hanzi;
        bodyEl.appendChild(punc);
      } else {
        const wordEl = document.createElement('span');
        wordEl.className = 'ruby-word';
        wordEl.innerHTML = `
          <span class="pinyin">${token.pinyin}</span>
          <span class="hanzi chinese-font">${token.hanzi}</span>
        `;
        wordEl.addEventListener('click', () => {
          showWordDictionary(token);
        });
        bodyEl.appendChild(wordEl);
      }
    });
  }

  // Set default popover with first non-speaker word
  const firstWord = lesson.reading.tokens.find(t => !t.isSpeaker && t.pinyin);
  if (firstWord) showWordDictionary(firstWord);

  // Render Reading Quiz
  renderReadingQuiz(lesson.reading.quiz);

  // Render Lesson Vocabulary Summary
  renderReadingVocabSummary(lesson);
}

function showWordDictionary(token) {
  const dictHanzi = document.getElementById('dict-hanzi');
  const dictPinyin = document.getElementById('dict-pinyin');
  const dictMeaning = document.getElementById('dict-meaning');
  const dictHv = document.getElementById('dict-hv');
  const dictSample = document.getElementById('dict-sample');

  if (dictHanzi) dictHanzi.textContent = token.hanzi;
  if (dictPinyin) dictPinyin.textContent = token.pinyin;
  if (dictMeaning) dictMeaning.textContent = token.vi || 'Từ ghép / Ngữ pháp';
  if (dictHv) dictHv.textContent = token.hv || 'Đang cập nhật';
  if (dictSample) dictSample.textContent = token.sample || `${token.hanzi} 是常用的词语。`;

  // Audio button in dict card
  const btn = document.getElementById('dict-audio-btn');
  if (btn) {
    btn.onclick = () => {
      speakChinese(token.hanzi, 0.9);
    };
  }
}

function renderReadingVocabSummary(lesson) {
  const container = document.getElementById('reading-vocab-summary-card');
  if (!container) return;
  const vocabs = getLessonVocabList(lesson);
  if (vocabs.length === 0) {
    container.style.display = 'none';
    return;
  }
  container.style.display = 'block';
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <h4 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; display: flex; align-items: center; gap: 8px;">
        <span>📚</span> Kho Từ Vựng Trọng Tâm Của Bài Học (${vocabs.length} từ)
      </h4>
      <span style="font-size: 0.85rem; color: #64748b;">(Click vào từ để tra cứu & nghe phát âm)</span>
    </div>
    <div class="vocab-grid-cards">
      ${vocabs.map((v, i) => `
        <div class="vocab-grid-card" data-idx="${i}" style="cursor: pointer;">
          <div class="vgc-left">
            <span class="vgc-hanzi chinese-font">${v.hanzi}</span>
            <span class="vgc-pinyin">${v.pinyin}</span>
            <span class="vgc-vi">${v.vi}${v.hv ? ` • [${v.hv}]` : ''}</span>
          </div>
          <div class="vgc-actions">
            <button class="vgc-audio-btn btn-reading-vocab-audio" data-hanzi="${v.hanzi}" title="Nghe phát âm chuẩn">🔊</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  container.querySelectorAll('.vocab-grid-card').forEach(card => {
    const idx = parseInt(card.dataset.idx, 10);
    const item = vocabs[idx];
    card.onclick = () => {
      showWordDictionary({
        hanzi: item.hanzi,
        pinyin: item.pinyin,
        vi: item.vi,
        hv: item.hv || '',
        sample: `${item.hanzi} 是本课核心重点词汇。`
      });
      speakChinese(item.hanzi, 0.9);
    };
  });
}

function renderReadingQuiz(quizData) {
  const qContainer = document.getElementById('reading-quiz-container');
  if (!qContainer) return;
  qContainer.innerHTML = `
    <h4>Kiểm tra độ hiểu bài:</h4>
    <p style="margin-bottom: 14px; font-weight: 500; color: #334155;">${quizData.question}</p>
    <div class="quiz-options">
      ${quizData.options.map((opt, idx) => `
        <button class="quiz-opt-btn" data-correct="${opt.correct}" data-idx="${idx}">
          ${opt.text}
        </button>
      `).join('')}
    </div>
    <div id="quiz-feedback" style="margin-top: 14px; font-weight: 600; display: none;"></div>
  `;

  qContainer.querySelectorAll('.quiz-opt-btn').forEach(btn => {
    btn.onclick = () => {
      const isCorrect = btn.dataset.correct === 'true';
      const feedback = document.getElementById('quiz-feedback');
      qContainer.querySelectorAll('.quiz-opt-btn').forEach(b => {
        b.disabled = true;
        if (b.dataset.correct === 'true') b.classList.add('correct');
      });

      if (isCorrect) {
        btn.classList.add('correct');
        feedback.style.color = '#059669';
        feedback.textContent = '🎉 Chính xác! Bạn đã hiểu đúng nội dung bài đọc.';
        SoundFX.playSuccess();
        addXP(15, 'Hoàn thành câu hỏi đọc');
        AppState.skills.reading = Math.min(100, AppState.skills.reading + 2);
      } else {
        btn.classList.add('wrong');
        feedback.style.color = '#dc2626';
        feedback.textContent = '❌ Chưa chính xác. Hãy đối chiếu lại đoạn hội thoại nhé!';
        SoundFX.playError();
      }
      feedback.style.display = 'block';
    };
  });
}

// ==========================================
// 7. MODULE 2: NGHE (LISTENING)
// ==========================================
function renderListeningView(lesson) {
  const listContainer = document.getElementById('transcript-lines-list');
  if (!listContainer) return;
  listContainer.innerHTML = '';

  lesson.listening.dialogues.forEach((dlg, idx) => {
    const row = document.createElement('div');
    row.className = `transcript-line ${AppState.player.currentLineIndex === idx ? 'playing' : ''}`;
    row.dataset.idx = idx;
    row.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div class="ts-hanzi chinese-font">${dlg.hanzi}</div>
        <button class="btn-secondary" style="padding: 4px 10px; font-size: 0.78rem;">▶ Phát câu này</button>
      </div>
      <div class="ts-pinyin ${AppState.showPinyin ? '' : 'hide-pinyin'}">${dlg.pinyin}</div>
      <div class="ts-vi">${dlg.vi}</div>
    `;

    row.onclick = () => {
      playDialogueLine(idx, lesson);
    };

    listContainer.appendChild(row);
  });

  // Render fill in the blanks
  renderListeningQuiz(lesson.listening.quiz);

  // Render Listening Vocabulary Bank
  renderListeningVocabBank(lesson);
}

function renderListeningVocabBank(lesson) {
  const container = document.getElementById('listening-vocab-card');
  if (!container) return;
  const vocabs = getLessonVocabList(lesson);
  if (vocabs.length === 0) {
    container.style.display = 'none';
    return;
  }
  container.style.display = 'block';
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <h4 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; display: flex; align-items: center; gap: 8px;">
        <span>🎧</span> Kho Luyện Nghe & Phát Âm Từ Vựng Trọng Tâm (${vocabs.length} từ)
      </h4>
      <span style="font-size: 0.85rem; color: #64748b;">(Nghe chuẩn 1.0x hoặc nghe chậm 0.75x)</span>
    </div>
    <div class="vocab-grid-cards">
      ${vocabs.map((v) => `
        <div class="vocab-grid-card">
          <div class="vgc-left">
            <span class="vgc-hanzi chinese-font">${v.hanzi}</span>
            <span class="vgc-pinyin">${v.pinyin}</span>
            <span class="vgc-vi">${v.vi}</span>
          </div>
          <div class="vgc-actions">
            <button class="vgc-audio-btn btn-listen-std" data-hanzi="${v.hanzi}" title="Nghe chuẩn (1.0x)">🔊</button>
            <button class="vgc-audio-btn btn-listen-slow" data-hanzi="${v.hanzi}" title="Nghe chậm (0.75x)">🐢</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  container.querySelectorAll('.btn-listen-std').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      speakChinese(btn.dataset.hanzi, 1.0);
    };
  });
  container.querySelectorAll('.btn-listen-slow').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      speakChinese(btn.dataset.hanzi, 0.75);
    };
  });
}

function playDialogueLine(idx, lesson) {
  const dialogues = lesson.listening.dialogues;
  if (idx >= dialogues.length) {
    AppState.player.isPlaying = false;
    AppState.player.currentLineIndex = -1;
    updatePlayerPlayBtn();
    updateTranscriptHighlight();
    return;
  }

  AppState.player.currentLineIndex = idx;
  AppState.player.isPlaying = true;
  updatePlayerPlayBtn();
  updateTranscriptHighlight();

  const line = dialogues[idx];
  speakChinese(line.hanzi, AppState.player.speed, () => {
    // If playing continuous audio
    if (AppState.player.isPlaying) {
      setTimeout(() => {
        if (AppState.player.isPlaying) {
          playDialogueLine(idx + 1, lesson);
        }
      }, 700);
    }
  });

  // Progress fill update
  const percent = ((idx + 1) / dialogues.length) * 100;
  const bar = document.getElementById('listening-progress-fill');
  if (bar) bar.style.width = `${percent}%`;
}

function updatePlayerPlayBtn() {
  const btn = document.getElementById('main-play-btn');
  if (btn) {
    btn.innerHTML = AppState.player.isPlaying ? '❚❚' : '▶';
  }
}

function updateTranscriptHighlight() {
  document.querySelectorAll('.transcript-line').forEach(el => {
    const i = parseInt(el.dataset.idx, 10);
    el.classList.toggle('playing', i === AppState.player.currentLineIndex);
  });
}

function renderListeningQuiz(quizData) {
  const box = document.getElementById('listening-quiz-box');
  if (!box) return;
  box.innerHTML = `
    <h4 style="font-size: 1.1rem; font-weight: 700; color: #0f172a;">Bài tập nghe điền từ:</h4>
    <p style="color: #64748b; font-size: 0.9rem; margin-top: 4px;">${quizData.prompt}</p>
    
    <div class="fill-sentence-box chinese-font">
      <span>${quizData.sentencePrefix}</span>
      <input type="text" class="fill-input" id="listen-blank-input" placeholder="Từ còn thiếu" autocomplete="off" />
      <span>${quizData.sentenceSuffix}</span>
    </div>
    <div style="font-size: 0.82rem; color: #94a3b8; margin-bottom: 14px;">Gợi ý phiên âm: <em>${quizData.pinyinHint}</em></div>
    
    <div style="display: flex; gap: 10px; align-items: center;">
      <button class="btn-primary" id="btn-check-listening">Kiểm tra đáp án</button>
      <button class="btn-secondary" id="btn-replay-hint">🔊 Nghe lại câu này</button>
    </div>
    <div id="listening-quiz-feedback" style="margin-top: 14px; font-weight: 600; display: none;"></div>
  `;

  document.getElementById('btn-replay-hint').onclick = () => {
    const full = quizData.sentencePrefix + quizData.missingWord + quizData.sentenceSuffix;
    speakChinese(full, AppState.player.speed);
  };

  document.getElementById('btn-check-listening').onclick = () => {
    const input = document.getElementById('listen-blank-input').value.trim();
    const fb = document.getElementById('listening-quiz-feedback');
    fb.style.display = 'block';

    if (input === quizData.missingWord || input.toLowerCase() === quizData.pinyinHint.toLowerCase()) {
      fb.style.color = '#059669';
      fb.textContent = `🎉 Hoàn toàn chính xác! Đáp án đúng là: "${quizData.missingWord}".`;
      SoundFX.playSuccess();
      addXP(15, 'Hoàn thành bài tập nghe');
      AppState.skills.listening = Math.min(100, AppState.skills.listening + 2);
    } else {
      fb.style.color = '#dc2626';
      fb.textContent = `❌ Chưa chính xác. Đáp án đúng là: "${quizData.missingWord}". Hãy thử nghe lại nhé!`;
      SoundFX.playError();
    }
  };
}

// ==========================================
// HELPER: GET MULTI-ITEM SENTENCES, CHARACTERS & VOCABULARY
// ==========================================
function getLessonVocabList(lesson) {
  if (lesson.vocabularyList && lesson.vocabularyList.length > 0) {
    return lesson.vocabularyList;
  }
  const list = [];
  const seen = new Set();
  if (lesson.reading && lesson.reading.tokens) {
    lesson.reading.tokens.forEach(t => {
      if (!t.isSpeaker && t.pinyin && t.vi && !seen.has(t.hanzi)) {
        seen.add(t.hanzi);
        list.push({ hanzi: t.hanzi, pinyin: t.pinyin, vi: t.vi, hv: t.hv || '' });
      }
    });
  }
  if (lesson.matchingWords) {
    lesson.matchingWords.forEach(w => {
      if (!seen.has(w.hanzi)) {
        seen.add(w.hanzi);
        list.push({ hanzi: w.hanzi, pinyin: w.pinyin, vi: w.vi, hv: '' });
      }
    });
  }
  return list;
}

function getLessonSpeakingSentences(lesson) {
  if (lesson._20SpeakingSentences && lesson._20SpeakingSentences.length === 20) {
    return lesson._20SpeakingSentences;
  }
  const list = [];
  const addedHanzi = new Set();

  function addSentence(item) {
    if (!item || !item.hanzi) return;
    const clean = item.hanzi.trim();
    if (!clean || addedHanzi.has(clean)) return;
    addedHanzi.add(clean);
    list.push({
      hanzi: clean,
      pinyin: item.pinyin || '',
      vi: item.vi || ''
    });
  }

  // 1. Explicit speaking sentences
  if (lesson.speaking && lesson.speaking.sentences) {
    lesson.speaking.sentences.forEach(addSentence);
  }
  if (lesson.speaking && lesson.speaking.targetHanzi) {
    addSentence({
      hanzi: lesson.speaking.targetHanzi,
      pinyin: lesson.speaking.targetPinyin || '',
      vi: lesson.speaking.vietnameseMeaning || ''
    });
  }

  // 2. Listening dialogues
  if (lesson.listening && lesson.listening.dialogues) {
    lesson.listening.dialogues.forEach(addSentence);
  }

  // 3. Relevant sample sentences from HSK 1000 vocab pool
  if (typeof HSK_1000_VOCABULARY !== 'undefined' && Array.isArray(HSK_1000_VOCABULARY)) {
    for (const v of HSK_1000_VOCABULARY) {
      if (list.length >= 20) break;
      if (v.sample && !addedHanzi.has(v.sample)) {
        addSentence({
          hanzi: v.sample,
          pinyin: `${v.hanzi} [${v.pinyin}]`,
          vi: `(${v.hanzi}: ${v.vi}) - Ví dụ giao tiếp thực tế`
        });
      }
    }
  }

  // 4. Default high-yield communicative sentences if still needed
  const BACKUP_COMMUNICATIVE = [
    { hanzi: '你好，很高兴认识你！', pinyin: 'Nǐ hǎo, hěn gāoxìng rènshi nǐ!', vi: 'Xin chào, rất vui được làm quen với bạn!' },
    { hanzi: '请问，这个多少钱？', pinyin: 'Qǐngwèn, zhège duōshao qián?', vi: 'Xin hỏi, cái này bao nhiêu tiền?' },
    { hanzi: '我想喝一杯冰咖啡。', pinyin: 'Wǒ xiǎng hē yībēi bīng kāfēi.', vi: 'Tôi muốn uống một cốc cà phê đá.' },
    { hanzi: '明天天气怎么样？', pinyin: 'Míngtiān tiānqì zěnmeyàng?', vi: 'Ngày mai thời tiết thế nào?' },
    { hanzi: '你在哪儿工作？', pinyin: 'Nǐ zài nǎr gōngzuò?', vi: 'Bạn làm việc ở đâu?' },
    { hanzi: '我们一起去吃饭吧！', pinyin: 'Wǒmen yīqǐ qù chīfàn ba!', vi: 'Chúng mình cùng đi ăn cơm đi!' },
    { hanzi: '洗手间在什么地方？', pinyin: 'Xǐshǒujiān zài shénme dìfang?', vi: 'Nhà vệ sinh ở chỗ nào vậy?' },
    { hanzi: '我学中文学了两年了。', pinyin: 'Wǒ xué Zhōngwén xué le liǎng nián le.', vi: 'Tôi học tiếng Trung được 2 năm rồi.' },
    { hanzi: '今天的会议什么时候开始？', pinyin: 'Jīntiān de huìyì shénme shíhou kāishǐ?', vi: 'Cuộc họp hôm nay khi nào bắt đầu?' },
    { hanzi: '祝你生日快乐，身体健康！', pinyin: 'Zhù nǐ shēngrì kuàilè, shēntǐ jiànkāng!', vi: 'Chúc bạn sinh nhật vui vẻ, dồi dào sức khỏe!' },
    { hanzi: '能帮我拍一张照片吗？', pinyin: 'Néng bāng wǒ pāi yīzhāng zhàopiàn ma?', vi: 'Có thể giúp tôi chụp một bức ảnh không?' },
    { hanzi: '欢迎来到我们公司！', pinyin: 'Huānyíng lái dào wǒmen gōngsī!', vi: 'Chào mừng bạn đến với công ty chúng tôi!' },
    { hanzi: '对不起，我今天有点儿忙。', pinyin: 'Duìbuqǐ, wǒ jīntiān yǒudiǎnr máng.', vi: 'Xin lỗi, hôm nay tôi hơi bận một chút.' },
    { hanzi: '没关系，我们下次再见！', pinyin: 'Méi guānxi, wǒmen xiàcì zàijiàn!', vi: 'Không sao, lần sau chúng mình gặp lại!' },
    { hanzi: '你最喜欢的中国菜是什么？', pinyin: 'Nǐ zuì xǐhuan de Zhōngguó cài shì shénme?', vi: 'Món ăn Trung Quốc bạn thích nhất là gì?' },
    { hanzi: '这件衣服很适合你。', pinyin: 'Zhè jiàn yīfu hěn shìhé nǐ.', vi: 'Bộ quần áo này rất hợp với bạn.' },
    { hanzi: '我们坐地铁还是坐出租车？', pinyin: 'Wǒmen zuò dìtiě háishì zuò chūzūchē?', vi: 'Chúng mình đi tàu điện ngầm hay đi taxi?' },
    { hanzi: '请再说一遍，好吗？', pinyin: 'Qǐng zài shuō yī biàn, hǎo ma?', vi: 'Xin hãy nói lại một lần nữa, được không?' },
    { hanzi: '这个周末你打算做什么？', pinyin: 'Zhège zhōumò nǐ dǎsuàn zuò shénme?', vi: 'Cuối tuần này bạn dự định làm gì?' },
    { hanzi: '加油！你一定能学好汉语。', pinyin: 'Jiāyóu! Nǐ yídìng néng xué hǎo Hànyǔ.', vi: 'Cố lên! Bạn nhất định sẽ học giỏi tiếng Trung.' }
  ];

  for (const c of BACKUP_COMMUNICATIVE) {
    if (list.length >= 20) break;
    addSentence(c);
  }

  lesson._20SpeakingSentences = list.slice(0, 20);
  return lesson._20SpeakingSentences;
}

function getLessonWritingCharacters(lesson) {
  if (lesson._20WritingCharacters && lesson._20WritingCharacters.length === 20) {
    return lesson._20WritingCharacters;
  }
  const list = [];
  const addedChars = new Set();

  function addChar(c) {
    if (!c || !c.targetChar) return;
    if (addedChars.has(c.targetChar)) return;
    if (!/[\u4e00-\u9fa5]/u.test(c.targetChar)) return;
    addedChars.add(c.targetChar);
    list.push(c);
  }

  // 1. Explicit writing characters
  if (lesson.writing && lesson.writing.characters) {
    lesson.writing.characters.forEach(addChar);
  }
  if (lesson.writing && lesson.writing.targetChar) {
    addChar({
      targetChar: lesson.writing.targetChar,
      charPinyin: lesson.writing.charPinyin,
      charMeaning: lesson.writing.charMeaning,
      charStrokes: lesson.writing.charStrokes,
      compositionTask: lesson.writing.compositionTask
    });
  }

  // 2. Characters from matching words
  if (lesson.matchingWords) {
    lesson.matchingWords.forEach(w => {
      for (const ch of w.hanzi) {
        if (list.length >= 20) break;
        if (/[\u4e00-\u9fa5]/u.test(ch) && !addedChars.has(ch)) {
          addChar({
            targetChar: ch,
            charPinyin: '',
            charMeaning: `Chữ trong từ "${w.hanzi}" (${w.vi})`,
            charStrokes: 'Quy tắc: Trên xuống dưới, trái sang phải, ngoài trước trong sau',
            compositionPrompt: `Luyện tập viết chữ Hán "${ch}" và đặt câu giao tiếp.`
          });
        }
      }
    });
  }

  // 3. Characters from reading tokens
  if (lesson.reading && lesson.reading.tokens) {
    lesson.reading.tokens.forEach(tok => {
      if (list.length >= 20) return;
      if (tok.hanzi && !tok.isSpeaker) {
        for (const ch of tok.hanzi) {
          if (list.length >= 20) break;
          if (/[\u4e00-\u9fa5]/u.test(ch) && !addedChars.has(ch)) {
            addChar({
              targetChar: ch,
              charPinyin: tok.pinyin || '',
              charMeaning: tok.vi ? `Chữ trong "${tok.hanzi}" (${tok.vi})` : `Chữ Hán: ${ch}`,
              charStrokes: 'Quy tắc nét: Ngang trước sổ sau, phẩy trước mác sau',
              compositionPrompt: `Luyện tập viết chữ "${ch}". Hãy viết vào ô lưới 米字格 bên dưới.`
            });
          }
        }
      }
    });
  }

  // 4. Fill from HSK 1000 vocab pool
  if (typeof HSK_1000_VOCABULARY !== 'undefined' && Array.isArray(HSK_1000_VOCABULARY)) {
    for (const v of HSK_1000_VOCABULARY) {
      if (list.length >= 20) break;
      for (const ch of v.hanzi) {
        if (list.length >= 20) break;
        if (/[\u4e00-\u9fa5]/u.test(ch) && !addedChars.has(ch)) {
          addChar({
            targetChar: ch,
            charPinyin: v.pinyin,
            charMeaning: `Chữ Hán: ${v.vi} (Âm HV: ${v.hv || ''})`,
            charStrokes: 'Quy tắc nét: Giữa trước hai bên sau, vào trước đóng sau',
            compositionPrompt: `Luyện viết chữ Hán "${ch}" (Từ vựng: ${v.hanzi} - ${v.vi}).`
          });
        }
      }
    }
  }

  lesson._20WritingCharacters = list.slice(0, 20);
  return lesson._20WritingCharacters;
}

// ==========================================
// 8. MODULE 3: NÓI (SPEAKING - WEB SPEECH API zh-CN)
// ==========================================
let recognitionInstance = null;
let isRecording = false;

function renderSpeakingView(lesson) {
  const sentences = getLessonSpeakingSentences(lesson);
  if (AppState.speaking.sentenceIdx >= sentences.length) {
    AppState.speaking.sentenceIdx = 0;
  }
  const curIdx = AppState.speaking.sentenceIdx;
  const currentItem = sentences[curIdx] || sentences[0];

  const selectorWrap = document.getElementById('speaking-selector-wrap');
  if (selectorWrap) {
    selectorWrap.innerHTML = `
      <div class="speaking-sentence-nav">
        <span style="font-weight: 700; color: #0f172a; font-size: 0.95rem;">
          🎯 Câu luyện nói: ${curIdx + 1} / ${sentences.length}
        </span>
        <div style="display: flex; gap: 8px;">
          <button class="btn-secondary" id="sp-btn-prev" ${curIdx === 0 ? 'disabled' : ''} style="padding: 4px 12px; font-size: 0.85rem;">◀ Câu trước</button>
          <button class="btn-secondary" id="sp-btn-next" ${curIdx === sentences.length - 1 ? 'disabled' : ''} style="padding: 4px 12px; font-size: 0.85rem;">Câu tiếp theo ▶</button>
        </div>
      </div>
      <div class="speaking-sentence-chips">
        ${sentences.map((s, idx) => `
          <button class="sp-chip-btn ${idx === curIdx ? 'active' : ''}" data-idx="${idx}">
            <span>${idx + 1}.</span> <span class="chinese-font">${s.hanzi.length > 8 ? s.hanzi.substring(0, 8) + '...' : s.hanzi}</span>
          </button>
        `).join('')}
      </div>
    `;

    const prevBtn = document.getElementById('sp-btn-prev');
    const nextBtn = document.getElementById('sp-btn-next');
    if (prevBtn) {
      prevBtn.onclick = () => {
        if (AppState.speaking.sentenceIdx > 0) {
          AppState.speaking.sentenceIdx--;
          renderSpeakingView(lesson);
        }
      };
    }
    if (nextBtn) {
      nextBtn.onclick = () => {
        if (AppState.speaking.sentenceIdx < sentences.length - 1) {
          AppState.speaking.sentenceIdx++;
          renderSpeakingView(lesson);
        }
      };
    }
    selectorWrap.querySelectorAll('.sp-chip-btn').forEach(btn => {
      btn.onclick = () => {
        AppState.speaking.sentenceIdx = parseInt(btn.dataset.idx, 10);
        renderSpeakingView(lesson);
      };
    });
  }

  const hanziEl = document.getElementById('sp-target-hanzi');
  const pinyinEl = document.getElementById('sp-target-pinyin');
  const viEl = document.getElementById('sp-target-vi');

  if (hanziEl) hanziEl.textContent = currentItem.hanzi;
  if (pinyinEl) pinyinEl.textContent = currentItem.pinyin;
  if (viEl) viEl.textContent = currentItem.vi;

  // Clear previous results
  const resBox = document.getElementById('speaking-result-box');
  if (resBox) resBox.style.display = 'none';

  const statusMsg = document.getElementById('speech-status-msg');
  if (statusMsg) {
    statusMsg.textContent = 'Bấm nút micro và nói to bằng tiếng Trung...';
    statusMsg.style.color = '#64748b';
  }

  // Sample sound button
  const listenBtn = document.getElementById('btn-listen-sample');
  if (listenBtn) {
    listenBtn.onclick = () => {
      speakChinese(currentItem.hanzi, 0.85);
    };
  }
}

function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert('Trình duyệt của bạn không hỗ trợ Web Speech API nhận diện giọng nói. Khuyên dùng Google Chrome hoặc Microsoft Edge.');
    return null;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'zh-CN'; // Chinese Mandarin (Simplified)
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    isRecording = true;
    const micBtn = document.getElementById('btn-mic-record');
    const statusMsg = document.getElementById('speech-status-msg');
    if (micBtn) micBtn.classList.add('recording');
    if (statusMsg) {
      statusMsg.textContent = '🎙️ Đang lắng nghe... Hãy nói câu tiếng Trung trên!';
      statusMsg.style.color = '#e11d48';
    }
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    evaluateSpeakingResult(transcript);
  };

  recognition.onerror = (event) => {
    isRecording = false;
    const micBtn = document.getElementById('btn-mic-record');
    const statusMsg = document.getElementById('speech-status-msg');
    if (micBtn) micBtn.classList.remove('recording');
    if (statusMsg) {
      statusMsg.textContent = `Lỗi nhận diện âm thanh: ${event.error}. Vui lòng thử lại!`;
      statusMsg.style.color = '#dc2626';
    }
  };

  recognition.onend = () => {
    isRecording = false;
    const micBtn = document.getElementById('btn-mic-record');
    if (micBtn) micBtn.classList.remove('recording');
  };

  return recognition;
}

function toggleSpeakingRecord() {
  if (!recognitionInstance) {
    recognitionInstance = initSpeechRecognition();
  }
  if (!recognitionInstance) return;

  if (isRecording) {
    recognitionInstance.stop();
  } else {
    try {
      recognitionInstance.start();
    } catch (e) {
      console.warn('Recognition already started', e);
    }
  }
}

// Compare user's spoken Chinese to current target sentence
function evaluateSpeakingResult(userSpeech) {
  const lesson = LESSONS_DATABASE[AppState.currentLessonIndex];
  const sentences = getLessonSpeakingSentences(lesson);
  const currentItem = sentences[AppState.speaking.sentenceIdx] || sentences[0];
  const target = currentItem.hanzi.replace(/[\s\p{P}]/gu, '');
  const actual = userSpeech.replace(/[\s\p{P}]/gu, '');

  const statusMsg = document.getElementById('speech-status-msg');
  if (statusMsg) {
    statusMsg.textContent = 'Đã nhận diện thành công!';
    statusMsg.style.color = '#059669';
  }

  const resultBox = document.getElementById('speaking-result-box');
  const badge = document.getElementById('speaking-score-badge');
  const wordsDisplay = document.getElementById('speaking-words-display');
  const hintEl = document.getElementById('speaking-feedback-hint');

  if (resultBox) resultBox.style.display = 'block';

  // Calculate matching character count
  let matchCount = 0;
  const targetChars = target.split('');
  const actualChars = actual.split('');

  let renderedHTML = '';
  actualChars.forEach(char => {
    if (targetChars.includes(char)) {
      matchCount++;
      renderedHTML += `<span class="word-tag match">${char}</span>`;
    } else {
      renderedHTML += `<span class="word-tag mismatch">${char}</span>`;
    }
  });

  const accuracy = Math.round((matchCount / Math.max(targetChars.length, actualChars.length, 1)) * 100);

  if (wordsDisplay) {
    wordsDisplay.innerHTML = renderedHTML || `<span>${userSpeech}</span>`;
  }

  if (badge) {
    badge.className = 'accuracy-score-badge';
    if (accuracy >= 80) {
      badge.classList.add('high');
      badge.innerHTML = `🌟 Độ chính xác: ${accuracy}% (Xuất sắc!)`;
      SoundFX.playSuccess();
      addXP(25, 'Phát âm chuẩn xác');
      AppState.skills.speaking = Math.min(100, AppState.skills.speaking + 3);
    } else if (accuracy >= 50) {
      badge.classList.add('med');
      badge.innerHTML = `👍 Độ chính xác: ${accuracy}% (Khá tốt)`;
      addXP(10, 'Luyện nói');
      AppState.skills.speaking = Math.min(100, AppState.skills.speaking + 1);
    } else {
      badge.classList.add('low');
      badge.innerHTML = `⚠️ Độ chính xác: ${accuracy}% (Cần luyện thêm)`;
      SoundFX.playError();
    }
  }

  if (hintEl) {
    hintEl.textContent = `Bạn đã nói: "${userSpeech}". Câu mẫu chuẩn: "${currentItem.hanzi}".`;
  }
}

// ==========================================
// 9. MODULE 4: VIẾT (WRITING & HANZI CANVAS)
// ==========================================
function renderWritingView(lesson) {
  const characters = getLessonWritingCharacters(lesson);
  if (AppState.writing.charIdx >= characters.length) {
    AppState.writing.charIdx = 0;
  }
  const curIdx = AppState.writing.charIdx;
  const task = characters[curIdx] || characters[0];

  const chipsContainer = document.getElementById('writing-char-chips');
  if (chipsContainer) {
    chipsContainer.innerHTML = `
      <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 0.92rem; font-weight: 700; color: #0f172a;">
          ✍️ Luyện viết chữ Hán: ${curIdx + 1} / ${characters.length} chữ
        </span>
        <span style="font-size: 0.8rem; color: #64748b;">Chọn chữ Hán để tập vẽ nét chuẩn trên ô 米字格</span>
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; width: 100%;">
        ${characters.map((c, idx) => `
          <button class="char-chip-btn chinese-font ${idx === curIdx ? 'active' : ''}" data-idx="${idx}" title="${c.charMeaning}" style="width: 44px; height: 44px; font-size: 1.35rem;">
            ${c.targetChar}
          </button>
        `).join('')}
      </div>
    `;

    chipsContainer.querySelectorAll('.char-chip-btn').forEach(btn => {
      btn.onclick = () => {
        AppState.writing.charIdx = parseInt(btn.dataset.idx, 10);
        renderWritingView(lesson);
      };
    });
  }

  const ghostChar = document.getElementById('canvas-ghost');
  const charDetails = document.getElementById('hanzi-char-details');
  const promptEl = document.getElementById('writing-prompt-text');

  if (ghostChar) ghostChar.textContent = task.targetChar;
  if (charDetails) {
    charDetails.innerHTML = `
      <div style="font-size: 1.1rem; font-weight: 700; color: #e11d48;">
        Chữ: <span class="chinese-font" style="font-size: 1.5rem;">${task.targetChar}</span> ${task.charPinyin ? `(${task.charPinyin})` : ''}
      </div>
      <div style="font-size: 0.88rem; color: #475569; margin-top: 4px;">Nghĩa: ${task.charMeaning}</div>
      <div style="font-size: 0.82rem; color: #94a3b8; margin-top: 2px;">Quy tắc nét: ${task.charStrokes}</div>
    `;
  }

  if (promptEl) {
    promptEl.textContent = task.compositionPrompt || task.compositionTask?.prompt || `Luyện tập viết chữ "${task.targetChar}"`;
  }

  // Clear writing canvas
  clearWritingCanvas();

  // Reset composition feedback
  const fb = document.getElementById('writing-feedback-box');
  const ta = document.getElementById('composition-input');
  if (fb) fb.classList.remove('active');
  if (ta) ta.value = '';
}

function initWritingCanvas() {
  const canvas = document.getElementById('hanziCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = 280;
  canvas.height = 280;

  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  }

  function startDraw(e) {
    e.preventDefault();
    AppState.canvas.isDrawing = true;
    const pos = getPos(e);
    AppState.canvas.lastX = pos.x;
    AppState.canvas.lastY = pos.y;
  }

  function draw(e) {
    if (!AppState.canvas.isDrawing) return;
    e.preventDefault();
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(AppState.canvas.lastX, AppState.canvas.lastY);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    AppState.canvas.lastX = pos.x;
    AppState.canvas.lastY = pos.y;
  }

  function stopDraw(e) {
    e.preventDefault();
    AppState.canvas.isDrawing = false;
  }

  canvas.onmousedown = startDraw;
  canvas.onmousemove = draw;
  canvas.onmouseup = stopDraw;
  canvas.onmouseleave = stopDraw;

  canvas.ontouchstart = startDraw;
  canvas.ontouchmove = draw;
  canvas.ontouchend = stopDraw;
}

function clearWritingCanvas() {
  const canvas = document.getElementById('hanziCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function checkWritingComposition() {
  const lesson = LESSONS_DATABASE[AppState.currentLessonIndex];
  const characters = getLessonWritingCharacters(lesson);
  const currentTask = characters[AppState.writing.charIdx] || characters[0];
  const input = document.getElementById('composition-input').value.trim();
  const fb = document.getElementById('writing-feedback-box');
  const task = currentTask.compositionTask || {
    expectedKeywords: currentTask.expectedKeywords || [currentTask.targetChar],
    sampleSolution: currentTask.sampleSolution || currentTask.targetChar,
    explanation: 'Đặt câu tiếng Trung hoàn chỉnh với chữ Hán đã học.'
  };

  if (!fb) return;
  fb.classList.add('active');

  const keywords = task.expectedKeywords || [currentTask.targetChar];
  let matchAll = true;
  keywords.forEach(kw => {
    if (!input.includes(kw)) matchAll = false;
  });

  if (matchAll && input.length >= 2) {
    fb.style.background = '#d1fae5';
    fb.style.border = '1px solid #10b981';
    fb.innerHTML = `
      <div style="font-weight: 700; color: #065f46;">🎉 Tuyệt vời! Bạn đã viết câu hoàn toàn chính xác.</div>
      <div style="font-size: 0.9rem; color: #047857; margin-top: 6px;">Đáp án mẫu: <strong>${task.sampleSolution || ''}</strong></div>
      <div style="font-size: 0.85rem; color: #065f46; margin-top: 4px;">${task.explanation || ''}</div>
    `;
    SoundFX.playSuccess();
    addXP(20, 'Hoàn thành bài tập viết');
    AppState.skills.writing = Math.min(100, AppState.skills.writing + 3);
  } else {
    fb.style.background = '#fee2e2';
    fb.style.border = '1px solid #f87171';
    fb.innerHTML = `
      <div style="font-weight: 700; color: #991b1b;">⚠️ Hãy kiểm tra lại từ khóa cần có: ${keywords.join(', ')}</div>
      <div style="font-size: 0.9rem; color: #b91c1c; margin-top: 6px;">Gợi ý câu đúng: <strong>${task.sampleSolution || ''}</strong></div>
      <div style="font-size: 0.85rem; color: #7f1d1d; margin-top: 4px;">${task.explanation || ''}</div>
    `;
    SoundFX.playError();
  }
}

// ==========================================
// 10. MODULE 5: GAME GHÉP TỪ & LỘ TRÌNH CHỦ ĐỀ (WORD MATCHING & TOPIC ROADMAP)
// ==========================================
function initMatchingGame(customTopicId = null) {
  if (customTopicId) {
    AppState.game.activeTopicId = customTopicId;
    AppState.game.roundNumber = 1;
  }

  const container = document.getElementById('cards-grid');
  if (!container) return;
  container.innerHTML = '';

  // Render topic selector buttons
  renderTopicChips();

  // Find active topic
  const activeTopic = VOCABULARY_TOPICS_DATABASE.find(t => t.id === AppState.game.activeTopicId) || VOCABULARY_TOPICS_DATABASE[0];

  // Update headers
  const topicNameEl = document.getElementById('topic-active-name');
  const libTitleEl = document.getElementById('vocab-library-title');
  const roundInfoEl = document.getElementById('game-round-info');

  if (topicNameEl) topicNameEl.textContent = `${activeTopic.name} (${activeTopic.words.length} từ vựng)`;
  if (libTitleEl) libTitleEl.textContent = `📖 Toàn Bộ Từ Vựng Chủ Đề: ${activeTopic.name.replace(/^[^\s]+\s/, '')}`;
  if (roundInfoEl) roundInfoEl.textContent = `Vòng ${AppState.game.roundNumber} (6 cặp thẻ ngẫu nhiên từ 16 từ)`;

  // Stop previous timer
  if (AppState.game.timerInterval) clearInterval(AppState.game.timerInterval);

  AppState.game.timer = 0;
  AppState.game.score = 0;
  AppState.game.selectedCard = null;
  AppState.game.matchedCount = 0;

  updateGameHud();

  // Start timer
  AppState.game.timerInterval = setInterval(() => {
    AppState.game.timer++;
    updateGameHud();
  }, 1000);

  // Pick 6 random words from the topic's 16 words
  const topicWordsShuffled = [...activeTopic.words].sort(() => Math.random() - 0.5);
  const selected6Words = topicWordsShuffled.slice(0, 6);

  // Generate cards
  const cards = [];
  selected6Words.forEach(w => {
    // Card A: Chinese (Hanzi + Pinyin)
    cards.push({
      pairId: w.id,
      type: 'zh',
      hanzi: w.hanzi,
      pinyin: w.pinyin,
      text: w.hanzi
    });
    // Card B: Vietnamese meaning
    cards.push({
      pairId: w.id,
      type: 'vi',
      vi: w.vi,
      text: w.vi
    });
  });

  // Shuffle cards
  cards.sort(() => Math.random() - 0.5);
  AppState.game.cards = cards;

  // Render cards to DOM
  cards.forEach((card, index) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'match-card';
    cardEl.dataset.index = index;

    if (card.type === 'zh') {
      cardEl.innerHTML = `
        <div class="mc-hanzi chinese-font">${card.hanzi}</div>
        <div class="mc-pinyin ${AppState.showPinyin ? '' : 'hide-pinyin'}">${card.pinyin}</div>
      `;
    } else {
      cardEl.innerHTML = `
        <div class="mc-vi">${card.vi}</div>
      `;
    }

    cardEl.onclick = () => onCardClicked(cardEl, card);
    container.appendChild(cardEl);
  });

  // Render full vocabulary library for this topic
  renderTopicVocabLibrary(activeTopic);
}

function renderTopicChips() {
  const row = document.getElementById('topic-chips-row');
  if (!row) return;
  row.innerHTML = '';

  VOCABULARY_TOPICS_DATABASE.forEach(topic => {
    const btn = document.createElement('button');
    btn.className = `topic-chip-btn ${AppState.game.activeTopicId === topic.id ? 'active' : ''}`;
    btn.innerHTML = `${topic.name}`;
    btn.onclick = () => {
      AppState.game.activeTopicId = topic.id;
      AppState.game.roundNumber = 1;
      initMatchingGame();
    };
    row.appendChild(btn);
  });
}

function renderTopicVocabLibrary(topic) {
  const grid = document.getElementById('topic-vocab-grid');
  if (!grid) return;
  grid.innerHTML = '';

  topic.words.forEach(w => {
    const item = document.createElement('div');
    item.className = 'vocab-card-item';
    item.innerHTML = `
      <div class="vci-left">
        <div class="vci-hanzi chinese-font">${w.hanzi}</div>
        <div class="vci-pinyin ${AppState.showPinyin ? '' : 'hide-pinyin'}">${w.pinyin} • ${w.hv || ''}</div>
        <div class="vci-vi">${w.vi}</div>
      </div>
      <button class="vci-audio-btn" title="Nghe phát âm">🔊</button>
    `;

    item.querySelector('.vci-audio-btn').onclick = (e) => {
      e.stopPropagation();
      speakChinese(w.hanzi, 0.9);
    };

    grid.appendChild(item);
  });

  // Wire "Luyện ghép các từ này" button
  const playAllBtn = document.getElementById('btn-play-all-vocab');
  if (playAllBtn) {
    playAllBtn.onclick = () => {
      AppState.game.roundNumber++;
      initMatchingGame();
      window.scrollTo({ top: document.querySelector('.matching-game-container').offsetTop - 80, behavior: 'smooth' });
    };
  }
}

function onCardClicked(cardEl, card) {
  if (cardEl.classList.contains('matched') || cardEl.classList.contains('selected')) return;

  // Play audio pronunciation if it's Chinese
  if (card.type === 'zh') {
    speakChinese(card.hanzi, 1);
  }

  // First card selected
  if (!AppState.game.selectedCard) {
    AppState.game.selectedCard = { el: cardEl, data: card };
    cardEl.classList.add('selected');
    return;
  }

  // Second card selected
  const first = AppState.game.selectedCard;
  cardEl.classList.add('selected');

  // Same pair matching check
  if (first.data.pairId === card.pairId && first.data.type !== card.type) {
    // Match success!
    setTimeout(() => {
      first.el.classList.remove('selected');
      cardEl.classList.remove('selected');
      first.el.classList.add('matched');
      cardEl.classList.add('matched');

      SoundFX.playSuccess();
      AppState.game.score += 20;
      AppState.game.matchedCount += 1;
      updateGameHud();

      // Check win condition
      if (AppState.game.matchedCount === AppState.game.cards.length / 2) {
        onGameWon();
      }
    }, 250);
  } else {
    // Mismatch
    setTimeout(() => {
      first.el.classList.add('error');
      cardEl.classList.add('error');
      SoundFX.playError();

      setTimeout(() => {
        first.el.classList.remove('selected', 'error');
        cardEl.classList.remove('selected', 'error');
      }, 500);
    }, 250);
  }

  AppState.game.selectedCard = null;
}

function updateGameHud() {
  const timerEl = document.getElementById('game-timer-val');
  const scoreEl = document.getElementById('game-score-val');
  if (timerEl) {
    const mins = Math.floor(AppState.game.timer / 60);
    const secs = AppState.game.timer % 60;
    timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  if (scoreEl) scoreEl.textContent = `${AppState.game.score} Điểm`;
}

function onGameWon() {
  clearInterval(AppState.game.timerInterval);
  const timeBonus = Math.max(10, 60 - AppState.game.timer);
  const totalEarnedXP = AppState.game.score + timeBonus;
  addXP(totalEarnedXP, 'Hoàn thành Game Ghép từ chủ đề');
  AppState.skills.matching = Math.min(100, AppState.skills.matching + 4);

  const activeTopic = VOCABULARY_TOPICS_DATABASE.find(t => t.id === AppState.game.activeTopicId) || VOCABULARY_TOPICS_DATABASE[0];
  const topicIdx = VOCABULARY_TOPICS_DATABASE.findIndex(t => t.id === AppState.game.activeTopicId);
  const nextTopic = VOCABULARY_TOPICS_DATABASE[(topicIdx + 1) % VOCABULARY_TOPICS_DATABASE.length];

  // Show modal
  const modal = document.getElementById('game-modal');
  const modalText = document.getElementById('game-modal-msg');
  if (modal && modalText) {
    modalText.innerHTML = `
      Bạn đã ghép chính xác tất cả các từ trong chủ đề <strong>${activeTopic.name}</strong> trong <strong>${AppState.game.timer} giây</strong>!<br>
      Tổng điểm đạt được: <strong style="color: #e11d48;">+${totalEarnedXP} XP</strong>.
      <div style="margin-top: 18px; display: flex; flex-direction: column; gap: 8px;">
        <button class="btn-primary" id="btn-modal-next-round" style="width: 100%; padding: 10px;">
          🔄 Chơi vòng tiếp theo (6 từ khác cùng chủ đề)
        </button>
        <button class="btn-secondary" id="btn-modal-next-topic" style="width: 100%; padding: 10px;">
          ➡ Chuyển sang chủ đề tiếp theo (${nextTopic.name})
        </button>
      </div>
    `;
    modal.classList.add('active');

    const nextRoundBtn = document.getElementById('btn-modal-next-round');
    if (nextRoundBtn) {
      nextRoundBtn.onclick = () => {
        modal.classList.remove('active');
        AppState.game.roundNumber++;
        initMatchingGame();
      };
    }

    const nextTopicBtn = document.getElementById('btn-modal-next-topic');
    if (nextTopicBtn) {
      nextTopicBtn.onclick = () => {
        modal.classList.remove('active');
        AppState.game.activeTopicId = nextTopic.id;
        AppState.game.roundNumber = 1;
        initMatchingGame();
      };
    }
  }
}

// ==========================================
// 11. MODULE 6: DASHBOARD & THỐNG KÊ (ANALYTICS)
// ==========================================
function renderDashboardView() {
  document.getElementById('dash-streak-val').textContent = `${AppState.streak} Ngày`;
  document.getElementById('dash-xp-val').textContent = `${AppState.xp} XP`;
  document.getElementById('dash-completed-val').textContent = `${AppState.completedLessons.length} Bài`;

  // Update Skill Tracks
  updateSkillBar('dash-reading-track', 'dash-reading-val', AppState.skills.reading);
  updateSkillBar('dash-listening-track', 'dash-listening-val', AppState.skills.listening);
  updateSkillBar('dash-speaking-track', 'dash-speaking-val', AppState.skills.speaking);
  updateSkillBar('dash-writing-track', 'dash-writing-val', AppState.skills.writing);
  updateSkillBar('dash-matching-track', 'dash-matching-val', AppState.skills.matching);
}

function updateSkillBar(trackId, valId, score) {
  const track = document.getElementById(trackId);
  const val = document.getElementById(valId);
  if (track) track.style.width = `${score}%`;
  if (val) val.textContent = `${score}%`;
}

// ==========================================
// 11.1 MODULE 7: HOÀN CẢNH THỰC TẾ & GHÉP CÂU (SCENARIOS & SENTENCE BUILDER)
// ==========================================
function renderScenarioView() {
  renderScenarioSelectorGrid();
  renderScenarioContextDetails();
  loadScenarioChallenge(AppState.scenario.challengeIdx);
}

function renderScenarioSelectorGrid() {
  const container = document.getElementById('scenario-selector-list');
  if (!container) return;
  container.innerHTML = '';

  REAL_LIFE_SCENARIOS.forEach(sc => {
    const btn = document.createElement('button');
    btn.className = `scenario-pill-btn ${AppState.scenario.currentId === sc.id ? 'active' : ''}`;
    btn.innerHTML = `
      <div class="scenario-icon">${sc.icon}</div>
      <div>
        <div class="scenario-title">${sc.title}</div>
        <div class="scenario-sub">${sc.sub}</div>
      </div>
    `;
    btn.onclick = () => {
      AppState.scenario.currentId = sc.id;
      AppState.scenario.challengeIdx = 0;
      renderScenarioView();
    };
    container.appendChild(btn);
  });
}

function renderScenarioContextDetails() {
  const card = document.getElementById('scenario-context-card');
  if (!card) return;

  const currentSc = REAL_LIFE_SCENARIOS.find(s => s.id === AppState.scenario.currentId) || REAL_LIFE_SCENARIOS[0];

  card.innerHTML = `
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
      <span style="font-size: 2rem;">${currentSc.icon}</span>
      <div>
        <h3 style="font-size: 1.25rem; font-weight: 800; color: #0f172a;">${currentSc.title}</h3>
        <p style="color: #64748b; font-size: 0.9rem; margin-top: 2px;">${currentSc.description}</p>
      </div>
    </div>

    <div style="margin-top: 16px;">
      <div style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.5px;">
        Từ vựng thực chiến trong hoàn cảnh này (Click để nghe phát âm):
      </div>
      <div class="scenario-vocab-tags">
        ${currentSc.vocabList.map(v => `
          <div class="context-vocab-badge" onclick="speakChinese('${v.hanzi}', 0.9)">
            <span class="cv-hanzi chinese-font">${v.hanzi}</span>
            <span class="cv-pinyin ${AppState.showPinyin ? '' : 'hide-pinyin'}">${v.pinyin}</span>
            <span style="color: #64748b; font-size: 0.78rem;">(${v.vi})</span>
            <span style="color: #e11d48; font-size: 0.75rem;">🔊</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function loadScenarioChallenge(idx) {
  const currentSc = REAL_LIFE_SCENARIOS.find(s => s.id === AppState.scenario.currentId) || REAL_LIFE_SCENARIOS[0];
  const challenge = currentSc.challenges[idx] || currentSc.challenges[0];
  AppState.scenario.challengeIdx = idx;

  // Counter
  const counterEl = document.getElementById('builder-challenge-counter');
  if (counterEl) counterEl.textContent = `Câu ${idx + 1} / ${currentSc.challenges.length}`;

  // Prompts
  const viEl = document.getElementById('builder-target-vi');
  const hintEl = document.getElementById('builder-grammar-hint');
  if (viEl) viEl.textContent = `"${challenge.promptVi}"`;
  if (hintEl) hintEl.textContent = `💡 Cấu trúc gợi ý: ${challenge.grammarHint}`;

  // Reset feedback
  const fb = document.getElementById('builder-feedback-card');
  if (fb) {
    fb.className = 'builder-feedback-card';
    fb.innerHTML = '';
  }

  // Next button hide
  const nextBtn = document.getElementById('btn-next-challenge');
  if (nextBtn) nextBtn.style.display = 'none';

  // Prepare tokens
  AppState.scenario.trayTokens = [];

  // Generate unique tokens for bank
  const tokens = challenge.correctOrder.map((text, i) => ({
    id: `tk_${idx}_${i}`,
    text: text,
    pinyin: getPinyinForWord(text)
  }));

  // Shuffle tokens
  const shuffled = [...tokens].sort(() => Math.random() - 0.5);
  AppState.scenario.bankTokens = shuffled;

  renderWordBank();
  renderSentenceTray();
}

function getPinyinForWord(word) {
  const dictionary = {
    '我': 'wǒ', '想': 'xiǎng', '喝': 'hē', '一杯': 'yībēi', '冰咖啡': 'bīng kāfēi',
    '服务员': 'fúwùyuán', '，': '', '点菜': 'diǎncài', '老板': 'lǎobǎn', '请问': 'qǐngwèn',
    '买单': 'mǎidān', '多少钱': 'duōshǎo qián', '？': '', '！': '', '去': 'qù',
    '火车站': 'huǒchēzhàn', '怎么走': 'zěnme zǒu', '师傅': 'shīfu', '想去': 'xiǎng qù',
    '机场': 'jīchǎng', '一直': 'yīzhí', '往前走': 'wǎng qián zǒu', '往左拐': 'wǎng zuǒ guǎi',
    '这个': 'zhège', '太贵了': 'tài guì le', '便宜一点吧': 'piányi yīdiǎn ba',
    '可以': 'kěyǐ', '用': 'yòng', '微信': 'Wēixìn', '支付吗': 'zhīfù ma',
    '房间的': 'fángjiān de', 'wifi': 'wifi', '密码': 'mìmǎ', '是': 'shì', '什么': 'shénme',
    '这是': 'zhè shì', '我的护照': 'wǒ de hùzhào', '预订了房间': 'yùdìng le fángjiān'
  };
  return dictionary[word] || '';
}

function renderWordBank() {
  const bank = document.getElementById('word-bank-chips');
  if (!bank) return;
  bank.innerHTML = '';

  AppState.scenario.bankTokens.forEach(token => {
    const isPlaced = AppState.scenario.trayTokens.some(t => t.id === token.id);
    const chip = document.createElement('div');
    chip.className = `word-chip ${isPlaced ? 'placed' : ''}`;
    chip.innerHTML = `
      <span class="wc-pinyin">${token.pinyin}</span>
      <span class="chinese-font">${token.text}</span>
    `;

    chip.onclick = () => {
      if (!isPlaced) {
        addWordToTray(token);
      }
    };
    bank.appendChild(chip);
  });
}

function renderSentenceTray() {
  const tray = document.getElementById('sentence-tray');
  if (!tray) return;
  tray.innerHTML = '';

  if (AppState.scenario.trayTokens.length === 0) {
    tray.classList.remove('has-items');
    tray.innerHTML = '<div class="tray-empty-placeholder">Bấm vào các từ bên dưới để đưa vào khay này...</div>';
    return;
  }

  tray.classList.add('has-items');

  AppState.scenario.trayTokens.forEach(token => {
    const chip = document.createElement('div');
    chip.className = 'word-chip in-tray';
    chip.innerHTML = `
      <span class="wc-pinyin">${token.pinyin}</span>
      <span class="chinese-font">${token.text}</span>
    `;
    chip.title = 'Nhấp để gỡ bỏ từ này khỏi câu';

    chip.onclick = () => {
      removeWordFromTray(token);
    };

    tray.appendChild(chip);
  });
}

function addWordToTray(token) {
  AppState.scenario.trayTokens.push(token);
  speakChinese(token.text, 1);
  renderWordBank();
  renderSentenceTray();
}

function removeWordFromTray(token) {
  AppState.scenario.trayTokens = AppState.scenario.trayTokens.filter(t => t.id !== token.id);
  renderWordBank();
  renderSentenceTray();
}

function checkSentenceOrder() {
  const currentSc = REAL_LIFE_SCENARIOS.find(s => s.id === AppState.scenario.currentId) || REAL_LIFE_SCENARIOS[0];
  const challenge = currentSc.challenges[AppState.scenario.challengeIdx];
  const fb = document.getElementById('builder-feedback-card');
  const nextBtn = document.getElementById('btn-next-challenge');
  if (!fb) return;

  const userSentence = AppState.scenario.trayTokens.map(t => t.text).join('');
  const targetSentence = challenge.correctOrder.join('');

  fb.className = 'builder-feedback-card active';

  if (userSentence === targetSentence) {
    // Correct!
    fb.style.background = '#d1fae5';
    fb.style.border = '1.5px solid #10b981';
    fb.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="font-size: 1.15rem; font-weight: 800; color: #065f46;">
          🎉 Hoàn toàn chính xác! (太棒了！)
        </div>
        <button class="btn-secondary" onclick="speakChinese('${challenge.audioFull}', 0.9)" style="padding: 4px 12px; font-size: 0.82rem;">
          🔊 Nghe toàn bộ câu
        </button>
      </div>
      <div class="chinese-font" style="font-size: 1.5rem; font-weight: 700; color: #047857; margin: 10px 0 6px 0;">
        ${challenge.audioFull}
      </div>
      <div style="font-size: 0.9rem; color: #065f46; line-height: 1.6;">
        <strong>Phân tích ngữ pháp:</strong> ${challenge.explanation}
      </div>
    `;

    SoundFX.playSuccess();
    speakChinese(challenge.audioFull, 0.9);
    addXP(25, 'Ghép câu hoàn chỉnh thực tế');
    AppState.skills.writing = Math.min(100, AppState.skills.writing + 2);

    if (nextBtn) nextBtn.style.display = 'inline-flex';
  } else {
    // Incorrect
    fb.style.background = '#fee2e2';
    fb.style.border = '1.5px solid #f87171';
    fb.innerHTML = `
      <div style="font-size: 1.05rem; font-weight: 800; color: #991b1b;">
        ⚠️ Thứ tự các từ chưa đúng trật tự ngữ pháp tiếng Trung.
      </div>
      <div style="font-size: 0.9rem; color: #b91c1c; margin-top: 6px;">
        Bạn đang ghép: "<strong>${userSentence || '(Chưa có từ)'}</strong>".
      </div>
      <div style="font-size: 0.85rem; color: #7f1d1d; margin-top: 4px;">
        💡 Gợi ý: Hãy chú ý cấu trúc: ${challenge.grammarHint}
      </div>
    `;
    SoundFX.playError();
  }
}

function resetSentenceBuilder() {
  AppState.scenario.trayTokens = [];
  renderWordBank();
  renderSentenceTray();
  const fb = document.getElementById('builder-feedback-card');
  if (fb) fb.className = 'builder-feedback-card';
}

function nextScenarioChallenge() {
  const currentSc = REAL_LIFE_SCENARIOS.find(s => s.id === AppState.scenario.currentId) || REAL_LIFE_SCENARIOS[0];
  const nextIdx = (AppState.scenario.challengeIdx + 1) % currentSc.challenges.length;
  loadScenarioChallenge(nextIdx);
}

// ==========================================
// 12. MODULE 7: CÔNG THỨC GHÉP CÂU (FORMULA GRAMMAR BUILDER)
// ==========================================
const FORMULA_GRAMMAR_DATABASE = [
  {
    id: 'f_shi_n',
    name: 'S + 是 + N',
    tag: 'Khẳng định danh tính (A là B)',
    level: 'HSK 1',
    diagram: [
      { text: 'Chủ ngữ (S)', type: 'var' },
      { text: '+', type: 'plus' },
      { text: '是 (shì)', type: 'fixed' },
      { text: '+', type: 'plus' },
      { text: 'Tân ngữ (N)', type: 'var' }
    ],
    description: 'Dùng để biểu thị phán đoán, xác định danh tính, nghề nghiệp, quốc tịch hoặc quan hệ thuộc tính. Động từ "是" (shì) đóng vai trò tương tự như "to be" trong tiếng Anh.',
    challenges: [
      {
        vi: 'Tôi là bác sĩ bệnh viện.',
        hanziFull: '我是医院医生。',
        pinyinFull: 'Wǒ shì yīyuàn yīshēng.',
        slots: [
          { label: 'Chủ ngữ (S)', expected: '我', pinyin: 'wǒ' },
          { label: 'Liên từ', expected: '是', pinyin: 'shì', isFixed: true },
          { label: 'Tân ngữ (N)', expected: '医院医生', pinyin: 'yīyuàn yīshēng' }
        ],
        pool: [
          { hanzi: '我', pinyin: 'wǒ', vi: 'Tôi' },
          { hanzi: '医院医生', pinyin: 'yīyuàn yīshēng', vi: 'Bác sĩ bệnh viện' },
          { hanzi: '他们', pinyin: 'tāmen', vi: 'Bọn họ' },
          { hanzi: '护士', pinyin: 'hùshi', vi: 'Y tá' }
        ],
        analysis: 'Phân tích ngữ pháp: "我" (Tôi) là Chủ ngữ [S], "是" (là) là động từ phán đoán, "医院医生" (Bác sĩ bệnh viện) là Tân ngữ danh từ [N].'
      },
      {
        vi: 'Anh ấy là người Trung Quốc.',
        hanziFull: '他是中国人。',
        pinyinFull: 'Tā shì Zhōngguó rén.',
        slots: [
          { label: 'Chủ ngữ (S)', expected: '他', pinyin: 'tā' },
          { label: 'Liên từ', expected: '是', pinyin: 'shì', isFixed: true },
          { label: 'Tân ngữ (N)', expected: '中国人', pinyin: 'Zhōngguó rén' }
        ],
        pool: [
          { hanzi: '他', pinyin: 'tā', vi: 'Anh ấy' },
          { hanzi: '中国人', pinyin: 'Zhōngguó rén', vi: 'Người Trung Quốc' },
          { hanzi: '老师', pinyin: 'lǎoshī', vi: 'Thầy giáo' },
          { hanzi: '我们', pinyin: 'wǒmen', vi: 'Chúng tôi' }
        ],
        analysis: 'Phân tích ngữ pháp: "他" là Chủ ngữ [S], "是" liên kết với Tân ngữ chỉ quốc tịch "中国人" [N].'
      },
      {
        vi: 'Cô ấy là giáo viên tiếng Trung của tôi.',
        hanziFull: '她是我的汉语老师。',
        pinyinFull: 'Tā shì wǒ de Hànyǔ lǎoshī.',
        slots: [
          { label: 'Chủ ngữ (S)', expected: '她', pinyin: 'tā' },
          { label: 'Liên từ', expected: '是', pinyin: 'shì', isFixed: true },
          { label: 'Tân ngữ (N)', expected: '我的汉语老师', pinyin: 'wǒ de Hànyǔ lǎoshī' }
        ],
        pool: [
          { hanzi: '她', pinyin: 'tā', vi: 'Cô ấy' },
          { hanzi: '我的汉语老师', pinyin: 'wǒ de Hànyǔ lǎoshī', vi: 'Giáo viên tiếng Trung của tôi' },
          { hanzi: '学生', pinyin: 'xuésheng', vi: 'Học sinh' },
          { hanzi: '朋友', pinyin: 'péngyou', vi: 'Bạn bè' }
        ],
        analysis: 'Phân tích ngữ pháp: Định ngữ "我的" bổ nghĩa cho danh từ trung tâm ngữ "汉语老师".'
      }
    ]
  },
  {
    id: 'f_bushi_n',
    name: 'S + 不是 + N',
    tag: 'Phủ định danh tính (A không phải là B)',
    level: 'HSK 1',
    diagram: [
      { text: 'Chủ ngữ (S)', type: 'var' },
      { text: '+', type: 'plus' },
      { text: '不是 (bú shì)', type: 'fixed' },
      { text: '+', type: 'plus' },
      { text: 'Tân ngữ (N)', type: 'var' }
    ],
    description: 'Dùng phó từ phủ định "不" đứng trước "是" (biến điệu đọc thành bú shì) để phủ định danh tính, sự vật sự việc.',
    challenges: [
      {
        vi: 'Tôi không phải là học sinh.',
        hanziFull: '我不是学生。',
        pinyinFull: 'Wǒ bú shì xuésheng.',
        slots: [
          { label: 'Chủ ngữ (S)', expected: '我', pinyin: 'wǒ' },
          { label: 'Phủ định', expected: '不是', pinyin: 'bú shì', isFixed: true },
          { label: 'Tân ngữ (N)', expected: '学生', pinyin: 'xuésheng' }
        ],
        pool: [
          { hanzi: '我', pinyin: 'wǒ', vi: 'Tôi' },
          { hanzi: '学生', pinyin: 'xuésheng', vi: 'Học sinh' },
          { hanzi: '经理', pinyin: 'jīnglǐ', vi: 'Giám đốc' },
          { hanzi: '他们', pinyin: 'tāmen', vi: 'Bọn họ' }
        ],
        analysis: '"不是" mang thanh 2 do biến điệu trước thanh 4 của "是".'
      },
      {
        vi: 'Đây không phải là điện thoại của tôi.',
        hanziFull: '这不是我的手机。',
        pinyinFull: 'Zhè bú shì wǒ de shǒujī.',
        slots: [
          { label: 'Chủ ngữ (S)', expected: '这', pinyin: 'zhè' },
          { label: 'Phủ định', expected: '不是', pinyin: 'bú shì', isFixed: true },
          { label: 'Tân ngữ (N)', expected: '我的手机', pinyin: 'wǒ de shǒujī' }
        ],
        pool: [
          { hanzi: '这', pinyin: 'zhè', vi: 'Đây / Cái này' },
          { hanzi: '我的手机', pinyin: 'wǒ de shǒujī', vi: 'Điện thoại của tôi' },
          { hanzi: '电脑', pinyin: 'diànnǎo', vi: 'Máy tính' },
          { hanzi: '那', pinyin: 'nà', vi: 'Kia' }
        ],
        analysis: 'Đại từ chỉ thị "这" làm Chủ ngữ S.'
      }
    ]
  },
  {
    id: 'f_bi_adj',
    name: 'A + 比 + B + Adj',
    tag: 'Câu so sánh hơn (A hơn B tính chất gì)',
    level: 'HSK 2',
    diagram: [
      { text: 'Đối tượng A', type: 'var' },
      { text: '+', type: 'plus' },
      { text: '比 (bǐ)', type: 'fixed' },
      { text: '+', type: 'plus' },
      { text: 'Đối tượng B', type: 'var' },
      { text: '+', type: 'plus' },
      { text: 'Tính từ (Adj)', type: 'var' }
    ],
    description: 'Cấu trúc so sánh chữ "比" kinh điển trong tiếng Trung. Lưu ý: Không được dùng các phó từ chỉ mức độ như 很 (hěn), 非常 (fēicháng) trước tính từ trong câu so sánh chữ 比.',
    challenges: [
      {
        vi: 'Hôm nay lạnh hơn hôm qua.',
        hanziFull: '今天比昨天冷。',
        pinyinFull: 'Jīntiān bǐ zuótiān lěng.',
        slots: [
          { label: 'Đối tượng A', expected: '今天', pinyin: 'jīntiān' },
          { label: 'Từ so sánh', expected: '比', pinyin: 'bǐ', isFixed: true },
          { label: 'Đối tượng B', expected: '昨天', pinyin: 'zuótiān' },
          { label: 'Tính từ Adj', expected: '冷', pinyin: 'lěng' }
        ],
        pool: [
          { hanzi: '今天', pinyin: 'jīntiān', vi: 'Hôm nay' },
          { hanzi: '昨天', pinyin: 'zuótiān', vi: 'Hôm qua' },
          { hanzi: '冷', pinyin: 'lěng', vi: 'Lạnh' },
          { hanzi: '热', pinyin: 'rè', vi: 'Nóng' },
          { hanzi: '明天', pinyin: 'míngtiān', vi: 'Ngày mai' }
        ],
        analysis: 'Đối tượng A: "今天", Đối tượng B: "昨天", Tính từ vị ngữ: "冷". Không dùng "今天比昨天很冷".'
      },
      {
        vi: 'Anh trai cao hơn tôi.',
        hanziFull: '哥哥比我高。',
        pinyinFull: 'Gēge bǐ wǒ gāo.',
        slots: [
          { label: 'Đối tượng A', expected: '哥哥', pinyin: 'gēge' },
          { label: 'Từ so sánh', expected: '比', pinyin: 'bǐ', isFixed: true },
          { label: 'Đối tượng B', expected: '我', pinyin: 'wǒ' },
          { label: 'Tính từ Adj', expected: '高', pinyin: 'gāo' }
        ],
        pool: [
          { hanzi: '哥哥', pinyin: 'gēge', vi: 'Anh trai' },
          { hanzi: '我', pinyin: 'wǒ', vi: 'Tôi' },
          { hanzi: '高', pinyin: 'gāo', vi: 'Cao' },
          { hanzi: '弟弟', pinyin: 'dìdi', vi: 'Em trai' },
          { hanzi: '矮', pinyin: 'ǎi', vi: 'Thấp' }
        ],
        analysis: 'So sánh chiều cao: "哥哥" (A) + "比" + "我" (B) + "高" (Tính từ).'
      }
    ]
  },
  {
    id: 'f_zai_place_v',
    name: 'S + 在 + Place + V + O',
    tag: 'Địa điểm hành động (Làm gì ở đâu)',
    level: 'HSK 1',
    diagram: [
      { text: 'Chủ ngữ (S)', type: 'var' },
      { text: '+', type: 'plus' },
      { text: '在 (zài)', type: 'fixed' },
      { text: '+', type: 'plus' },
      { text: 'Nơi chốn / Địa điểm', type: 'var' },
      { text: '+', type: 'plus' },
      { text: 'Hành động (V + O)', type: 'var' }
    ],
    description: 'Quy tắc vàng tiếng Trung: NƠI CHỐN đi TRƯỚC HÀNH ĐỘNG (Ở đâu rồi mới làm gì). Ngược lại với tiếng Việt (Tôi ăn cơm ở nhà hàng -> Tiếng Trung: Tôi Ở NHÀ HÀNG ĂN CƠM).',
    challenges: [
      {
        vi: 'Tôi uống cà phê ở quán cà phê.',
        hanziFull: '我在咖啡馆喝咖啡。',
        pinyinFull: 'Wǒ zài kāfēiguǎn hē kāfēi.',
        slots: [
          { label: 'Chủ ngữ (S)', expected: '我', pinyin: 'wǒ' },
          { label: 'Giới từ', expected: '在', pinyin: 'zài', isFixed: true },
          { label: 'Địa điểm', expected: '咖啡馆', pinyin: 'kāfēiguǎn' },
          { label: 'Hành động (V+O)', expected: '喝咖啡', pinyin: 'hē kāfēi' }
        ],
        pool: [
          { hanzi: '我', pinyin: 'wǒ', vi: 'Tôi' },
          { hanzi: '咖啡馆', pinyin: 'kāfēiguǎn', vi: 'Quán cà phê' },
          { hanzi: '喝咖啡', pinyin: 'hē kāfēi', vi: 'Uống cà phê' },
          { hanzi: '图书馆', pinyin: 'túshūguǎn', vi: 'Thư viện' },
          { hanzi: '看书', pinyin: 'kànshū', vi: 'Đọc sách' }
        ],
        analysis: 'Nhớ kỹ: "在 + Địa điểm" luôn đứng TRƯỚC động từ vị ngữ "喝咖啡".'
      },
      {
        vi: 'Anh ấy đọc sách trong thư viện.',
        hanziFull: '他在图书馆看书。',
        pinyinFull: 'Tā zài túshūguǎn kànshū.',
        slots: [
          { label: 'Chủ ngữ (S)', expected: '他', pinyin: 'tā' },
          { label: 'Giới từ', expected: '在', pinyin: 'zài', isFixed: true },
          { label: 'Địa điểm', expected: '图书馆', pinyin: 'túshūguǎn' },
          { label: 'Hành động (V+O)', expected: '看书', pinyin: 'kànshū' }
        ],
        pool: [
          { hanzi: '他', pinyin: 'tā', vi: 'Anh ấy' },
          { hanzi: '图书馆', pinyin: 'túshūguǎn', vi: 'Thư viện' },
          { hanzi: '看书', pinyin: 'kànshū', vi: 'Đọc sách' },
          { hanzi: '学校', pinyin: 'xuéxiào', vi: 'Trường học' },
          { hanzi: '上课', pinyin: 'shàngkè', vi: 'Lên lớp' }
        ],
        analysis: '"在图书馆" bổ nghĩa vị trí trước hành động "看书".'
      }
    ]
  },
  {
    id: 'f_xiang_v',
    name: 'S + 想/要 + V + O',
    tag: 'Nguyện vọng & Kế hoạch (Muốn làm gì)',
    level: 'HSK 1',
    diagram: [
      { text: 'Chủ ngữ (S)', type: 'var' },
      { text: '+', type: 'plus' },
      { text: '想 / 要', type: 'fixed' },
      { text: '+', type: 'plus' },
      { text: 'Động từ (V)', type: 'var' },
      { text: '+', type: 'plus' },
      { text: 'Tân ngữ (O)', type: 'var' }
    ],
    description: 'Biểu thị ý muốn, dự định hoặc nguyện vọng chủ quan của người nói. "想" nhấn mạnh mong muốn suy nghĩ, "要" nhấn mạnh ý định quyết tâm.',
    challenges: [
      {
        vi: 'Tôi muốn đi Bắc Kinh du lịch.',
        hanziFull: '我想去北京旅游。',
        pinyinFull: 'Wǒ xiǎng qù Běijīng lǚyóu.',
        slots: [
          { label: 'Chủ ngữ (S)', expected: '我', pinyin: 'wǒ' },
          { label: 'Động từ năng nguyện', expected: '想去', pinyin: 'xiǎng qù' },
          { label: 'Địa điểm (O1)', expected: '北京', pinyin: 'Běijīng' },
          { label: 'Mục đích (V2)', expected: '旅游', pinyin: 'lǚyóu' }
        ],
        pool: [
          { hanzi: '我', pinyin: 'wǒ', vi: 'Tôi' },
          { hanzi: '想去', pinyin: 'xiǎng qù', vi: 'Muốn đi' },
          { hanzi: '北京', pinyin: 'Běijīng', vi: 'Bắc Kinh' },
          { hanzi: '旅游', pinyin: 'lǚyóu', vi: 'Du lịch' },
          { hanzi: '买东西', pinyin: 'mǎi dōngxi', vi: 'Mua sắm' }
        ],
        analysis: 'Câu liên động biểu thị mục đích: Đi Bắc Kinh để làm gì -> Để du lịch.'
      }
    ]
  },
  {
    id: 'f_yinwei_suoyi',
    name: '因为...所以...',
    tag: 'Quan hệ nhân quả (Vì... nên...)',
    level: 'HSK 2',
    diagram: [
      { text: '因为 (yīnwèi)', type: 'fixed' },
      { text: '+', type: 'plus' },
      { text: 'Nguyên nhân', type: 'var' },
      { text: '+', type: 'plus' },
      { text: '所以 (suǒyǐ)', type: 'fixed' },
      { text: '+', type: 'plus' },
      { text: 'Kết quả', type: 'var' }
    ],
    description: 'Cặp liên từ nối hai phân câu nguyên nhân và kết quả. Có thể dùng cả đôi "因为...所以..." hoặc dùng độc lập.',
    challenges: [
      {
        vi: 'Vì trời mưa nên tôi không đi ra ngoài.',
        hanziFull: '因为下雨所以我不去外面。',
        pinyinFull: 'Yīnwèi xiàyǔ suǒyǐ wǒ bú qù wàimiàn.',
        slots: [
          { label: 'Liên từ 1', expected: '因为', pinyin: 'yīnwèi', isFixed: true },
          { label: 'Nguyên nhân', expected: '下雨', pinyin: 'xiàyǔ' },
          { label: 'Liên từ 2', expected: '所以', pinyin: 'suǒyǐ', isFixed: true },
          { label: 'Kết quả', expected: '我不去外面', pinyin: 'wǒ bú qù wàimiàn' }
        ],
        pool: [
          { hanzi: '下雨', pinyin: 'xiàyǔ', vi: 'Trời mưa' },
          { hanzi: '我不去外面', pinyin: 'wǒ bú qù wàimiàn', vi: 'Tôi không ra ngoài' },
          { hanzi: '很冷', pinyin: 'hěn lěng', vi: 'Rất lạnh' },
          { hanzi: '去上班', pinyin: 'qù shàngbān', vi: 'Đi làm' }
        ],
        analysis: 'Cấu trúc nguyên nhân - hệ quả logic hoàn chỉnh.'
      }
    ]
  },
  {
    id: 'f_yibian_yibian',
    name: 'S + 一边...一边...',
    tag: 'Hành động song song (Vừa... vừa...)',
    level: 'HSK 2',
    diagram: [
      { text: 'Chủ ngữ (S)', type: 'var' },
      { text: '+', type: 'plus' },
      { text: '一边 (yìbiān)', type: 'fixed' },
      { text: '+', type: 'plus' },
      { text: 'Hành động 1', type: 'var' },
      { text: '+', type: 'plus' },
      { text: '一边 (yìbiān)', type: 'fixed' },
      { text: '+', type: 'plus' },
      { text: 'Hành động 2', type: 'var' }
    ],
    description: 'Biểu thị hai hành động được thực hiện cùng một lúc bởi cùng một chủ ngữ.',
    challenges: [
      {
        vi: 'Anh ấy vừa nghe nhạc vừa làm bài tập.',
        hanziFull: '他一边听音乐一边做作业。',
        pinyinFull: 'Tā yìbiān tīng yīnyuè yìbiān zuò zuòyè.',
        slots: [
          { label: 'Chủ ngữ (S)', expected: '他', pinyin: 'tā' },
          { label: 'Liên từ 1', expected: '一边', pinyin: 'yìbiān', isFixed: true },
          { label: 'Hành động 1', expected: '听音乐', pinyin: 'tīng yīnyuè' },
          { label: 'Liên từ 2', expected: '一边', pinyin: 'yìbiān', isFixed: true },
          { label: 'Hành động 2', expected: '做作业', pinyin: 'zuò zuòyè' }
        ],
        pool: [
          { hanzi: '他', pinyin: 'tā', vi: 'Anh ấy' },
          { hanzi: '听音乐', pinyin: 'tīng yīnyuè', vi: 'Nghe nhạc' },
          { hanzi: '做作业', pinyin: 'zuò zuòyè', vi: 'Làm bài tập' },
          { hanzi: '睡觉', pinyin: 'shuìjiào', vi: 'Ngủ' }
        ],
        analysis: 'Hai hành động "nghe nhạc" và "làm bài tập" diễn ra đồng thời.'
      }
    ]
  },
  {
    id: 'f_ba_o_v',
    name: 'S + 把 + O + V + Kết quả',
    tag: 'Câu chữ 把 đặc trưng tiếng Trung',
    level: 'HSK 3',
    diagram: [
      { text: 'Chủ ngữ (S)', type: 'var' },
      { text: '+', type: 'plus' },
      { text: '把 (bǎ)', type: 'fixed' },
      { text: '+', type: 'plus' },
      { text: 'Tân ngữ (O)', type: 'var' },
      { text: '+', type: 'plus' },
      { text: 'Động từ + Kết quả', type: 'var' }
    ],
    description: 'Nhấn mạnh sự xử lý, tác động của chủ ngữ làm cho đối tượng tân ngữ có sự thay đổi vị trí, trạng thái hoặc kết quả.',
    challenges: [
      {
        vi: 'Tôi đã uống hết cốc nước rồi.',
        hanziFull: '我把那杯水喝完了。',
        pinyinFull: 'Wǒ bǎ nà bēi shuǐ hē wán le.',
        slots: [
          { label: 'Chủ ngữ (S)', expected: '我', pinyin: 'wǒ' },
          { label: 'Giới từ 把', expected: '把', pinyin: 'bǎ', isFixed: true },
          { label: 'Tân ngữ (O)', expected: '那杯水', pinyin: 'nà bēi shuǐ' },
          { label: 'Động từ + Kết quả', expected: '喝完了', pinyin: 'hē wán le' }
        ],
        pool: [
          { hanzi: '我', pinyin: 'wǒ', vi: 'Tôi' },
          { hanzi: '那杯水', pinyin: 'nà bēi shuǐ', vi: 'Cốc nước đó' },
          { hanzi: '喝完了', pinyin: 'hē wán le', vi: 'Uống hết rồi' },
          { hanzi: '放在桌子上', pinyin: 'fàng zài zhuōzi shàng', vi: 'Đặt trên bàn' }
        ],
        analysis: 'Hành động "喝" làm đối tượng "那杯水" trở thành kết quả "完" (hết).'
      }
    ]
  },
  {
    id: 'f_yue_yue',
    name: '越...越...',
    tag: 'Tăng tiến mức độ (Càng... càng...)',
    level: 'HSK 3',
    diagram: [
      { text: 'Chủ thể', type: 'var' },
      { text: '+', type: 'plus' },
      { text: '越 (yuè)', type: 'fixed' },
      { text: '+', type: 'plus' },
      { text: 'Hành động / Điều kiện', type: 'var' },
      { text: '+', type: 'plus' },
      { text: '越 (yuè)', type: 'fixed' },
      { text: '+', type: 'plus' },
      { text: 'Mức độ', type: 'var' }
    ],
    description: 'Biểu thị sự biến đổi tăng tiến theo mức độ của điều kiện đi kèm.',
    challenges: [
      {
        vi: 'Tiếng Trung càng học càng thấy thú vị.',
        hanziFull: '汉语越学越有趣。',
        pinyinFull: 'Hànyǔ yuè xué yuè yǒuqù.',
        slots: [
          { label: 'Chủ thể', expected: '汉语', pinyin: 'Hànyǔ' },
          { label: 'Phó từ 1', expected: '越', pinyin: 'yuè', isFixed: true },
          { label: 'Điều kiện', expected: '学', pinyin: 'xué' },
          { label: 'Phó từ 2', expected: '越', pinyin: 'yuè', isFixed: true },
          { label: 'Mức độ', expected: '有趣', pinyin: 'yǒuqù' }
        ],
        pool: [
          { hanzi: '汉语', pinyin: 'Hànyǔ', vi: 'Tiếng Trung' },
          { hanzi: '学', pinyin: 'xué', vi: 'Học' },
          { hanzi: '有趣', pinyin: 'yǒuqù', vi: 'Thú vị' },
          { hanzi: '难', pinyin: 'nán', vi: 'Khó' }
        ],
        analysis: 'Càng thực hiện hành động "学" thì tính chất "有趣" càng gia tăng.'
      }
    ]
  }
];

function renderFormulaView() {
  const nav = document.getElementById('formula-patterns-nav');
  if (nav) {
    nav.innerHTML = FORMULA_GRAMMAR_DATABASE.map((item, idx) => `
      <button class="formula-pill-btn ${idx === AppState.formula.patternIdx ? 'active' : ''}" data-idx="${idx}">
        <span>${item.name}</span>
      </button>
    `).join('');

    nav.querySelectorAll('.formula-pill-btn').forEach(btn => {
      btn.onclick = () => {
        AppState.formula.patternIdx = parseInt(btn.dataset.idx, 10);
        AppState.formula.challengeIdx = 0;
        loadFormulaChallenge();
        renderFormulaView();
      };
    });
  }

  loadFormulaChallenge();
}

function loadFormulaChallenge() {
  const formula = FORMULA_GRAMMAR_DATABASE[AppState.formula.patternIdx] || FORMULA_GRAMMAR_DATABASE[0];
  const challenge = formula.challenges[AppState.formula.challengeIdx] || formula.challenges[0];

  // Update rule card
  const lvlEl = document.getElementById('formula-rule-level');
  const nameEl = document.getElementById('formula-rule-name');
  const descEl = document.getElementById('formula-rule-desc');
  const diagEl = document.getElementById('formula-diagram-tokens');

  if (lvlEl) lvlEl.textContent = formula.level;
  if (nameEl) nameEl.textContent = `Cấu trúc: ${formula.name} (${formula.tag})`;
  if (descEl) descEl.textContent = formula.description;

  if (diagEl) {
    diagEl.innerHTML = formula.diagram.map(d => {
      if (d.type === 'plus') return `<span class="formula-plus">+</span>`;
      return `<span class="formula-token-badge ${d.type}">${d.text}</span>`;
    }).join('');
  }

  // Update Challenge prompt
  const viEl = document.getElementById('formula-target-vi');
  if (viEl) viEl.textContent = `"${challenge.vi}"`;

  // Init userSlots array
  AppState.formula.userSlots = challenge.slots.map(s => s.isFixed ? s.expected : null);

  renderFormulaSlots(challenge);
  renderFormulaBank(challenge);

  // Reset feedback
  const fb = document.getElementById('formula-feedback-box');
  if (fb) fb.style.display = 'none';
}

function renderFormulaSlots(challenge) {
  const container = document.getElementById('formula-slots-container');
  if (!container) return;
  container.innerHTML = '';

  challenge.slots.forEach((slot, slotIdx) => {
    const val = AppState.formula.userSlots[slotIdx];
    const isFixed = slot.isFixed;
    const slotEl = document.createElement('div');
    slotEl.className = `formula-slot ${val ? 'filled' : ''} ${isFixed ? 'fixed-slot' : ''}`;
    slotEl.innerHTML = `
      <div class="formula-slot-label">${slot.label}</div>
      <div class="formula-slot-content">
        ${val ? `
          <div class="formula-slot-hanzi chinese-font">${val}</div>
          <div class="formula-slot-pinyin">${slot.pinyin || ''}</div>
        ` : `
          <div class="formula-slot-empty-text">[ Nhấp từ ghép vào ]</div>
        `}
      </div>
    `;

    // Click slot to clear/remove if not fixed
    if (!isFixed && val) {
      slotEl.title = 'Nhấp để gỡ từ này';
      slotEl.onclick = () => {
        AppState.formula.userSlots[slotIdx] = null;
        renderFormulaSlots(challenge);
        renderFormulaBank(challenge);
      };
    }
    container.appendChild(slotEl);
  });
}

function renderFormulaBank(challenge) {
  const poolEl = document.getElementById('formula-tokens-pool');
  if (!poolEl) return;
  poolEl.innerHTML = '';

  challenge.pool.forEach((token) => {
    const isPlaced = AppState.formula.userSlots.includes(token.hanzi);
    const chip = document.createElement('div');
    chip.className = `formula-token-chip ${isPlaced ? 'selected' : ''}`;
    chip.innerHTML = `
      <span class="formula-token-chip-pinyin">${token.pinyin}</span>
      <span class="formula-token-chip-hanzi chinese-font">${token.hanzi}</span>
      <span class="formula-token-chip-meaning">${token.vi}</span>
    `;

    chip.onclick = () => {
      if (isPlaced) return;
      const emptyIdx = AppState.formula.userSlots.findIndex((s, i) => !challenge.slots[i].isFixed && s === null);
      if (emptyIdx !== -1) {
        AppState.formula.userSlots[emptyIdx] = token.hanzi;
        renderFormulaSlots(challenge);
        renderFormulaBank(challenge);
      } else {
        showToast('Các vị trí ngữ pháp đã được điền đủ! Nhấp "Kiểm tra đáp án".');
      }
    };
    poolEl.appendChild(chip);
  });
}

function checkFormulaAnswer() {
  const formula = FORMULA_GRAMMAR_DATABASE[AppState.formula.patternIdx];
  const challenge = formula.challenges[AppState.formula.challengeIdx];

  const hasEmpty = AppState.formula.userSlots.some(s => s === null);
  if (hasEmpty) {
    showToast('Vui lòng điền đủ các thành phần ngữ pháp vào câu!');
    return;
  }

  const userHanzi = AppState.formula.userSlots.join('');
  const targetClean = challenge.hanziFull.replace(/[\s\p{P}]/gu, '');
  const userClean = userHanzi.replace(/[\s\p{P}]/gu, '');

  const fb = document.getElementById('formula-feedback-box');
  const fbStatus = document.getElementById('formula-feedback-status');
  const fbSent = document.getElementById('formula-feedback-sentence');
  const fbAnalysis = document.getElementById('formula-feedback-analysis');

  if (!fb) return;
  fb.style.display = 'block';

  if (userClean === targetClean) {
    fb.className = 'formula-feedback-box correct';
    fbStatus.innerHTML = '🎉 Chúc Mừng! Bạn đã ghép đúng công thức ngữ pháp!';
    fbStatus.style.color = '#15803d';
    fbSent.textContent = challenge.hanziFull + ' (' + challenge.pinyinFull + ')';
    fbAnalysis.innerHTML = `<strong>Phân tích chuẩn:</strong> ${challenge.analysis}`;
    SoundFX.playSuccess();
    addXP(25, 'Ghép câu theo công thức ngữ pháp');
    AppState.formula.score += 25;
    const scEl = document.getElementById('formula-score-counter');
    if (scEl) scEl.textContent = `⭐ ${AppState.formula.score} Điểm`;
    speakChinese(challenge.hanziFull);
  } else {
    fb.className = 'formula-feedback-box incorrect';
    fbStatus.innerHTML = '⚠️ Thứ tự các thành phần chưa đúng vị trí công thức!';
    fbStatus.style.color = '#b91c1c';
    fbSent.textContent = 'Câu của bạn: ' + userHanzi;
    fbAnalysis.innerHTML = `<strong>Gợi ý ngữ pháp:</strong> ${challenge.analysis}<br>Đáp án chuẩn: <strong>${challenge.hanziFull}</strong>`;
    SoundFX.playError();
  }
}

// ==========================================
// 13. MODULE 8: KHO 1,000 TỪ VỰNG HSK 1-3
// ==========================================
function renderVocab1000View() {
  const vocabList = (typeof HSK_1000_VOCABULARY !== 'undefined') ? HSK_1000_VOCABULARY : [];
  
  // Populate topic dropdown if not populated
  const topicSel = document.getElementById('vocab1000-topic-select');
  if (topicSel && topicSel.options.length <= 1) {
    const topics = Array.from(new Set(vocabList.map(v => v.topic).filter(Boolean)));
    topics.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t;
      opt.textContent = t;
      topicSel.appendChild(opt);
    });

    topicSel.onchange = (e) => {
      AppState.vocab1000.selectedTopic = e.target.value;
      AppState.vocab1000.page = 1;
      renderVocab1000Grid();
    };
  }

  // Level tabs listeners
  const levelTabs = document.querySelectorAll('.vocab-tab-btn');
  levelTabs.forEach(btn => {
    btn.onclick = () => {
      levelTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.vocab1000.selectedLevel = btn.dataset.level;
      AppState.vocab1000.page = 1;
      renderVocab1000Grid();
    };
  });

  // Search input listeners
  const searchInput = document.getElementById('vocab1000-search-input');
  const clearBtn = document.getElementById('vocab1000-clear-search');
  if (searchInput) {
    searchInput.oninput = (e) => {
      AppState.vocab1000.searchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) clearBtn.style.display = AppState.vocab1000.searchQuery ? 'block' : 'none';
      AppState.vocab1000.page = 1;
      renderVocab1000Grid();
    };
  }
  if (clearBtn && searchInput) {
    clearBtn.onclick = () => {
      searchInput.value = '';
      AppState.vocab1000.searchQuery = '';
      clearBtn.style.display = 'none';
      AppState.vocab1000.page = 1;
      renderVocab1000Grid();
    };
  }

  // Pagination buttons
  const prevBtn = document.getElementById('vocab-btn-prev');
  const nextBtn = document.getElementById('vocab-btn-next');
  if (prevBtn) {
    prevBtn.onclick = () => {
      if (AppState.vocab1000.page > 1) {
        AppState.vocab1000.page--;
        renderVocab1000Grid();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
  }
  if (nextBtn) {
    nextBtn.onclick = () => {
      AppState.vocab1000.page++;
      renderVocab1000Grid();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  renderVocab1000Grid();
}

function renderVocab1000Grid() {
  const vocabList = (typeof HSK_1000_VOCABULARY !== 'undefined') ? HSK_1000_VOCABULARY : [];
  const { searchQuery, selectedLevel, selectedTopic, page, pageSize } = AppState.vocab1000;

  // Filter
  const filtered = vocabList.filter(item => {
    if (selectedLevel !== 'all' && item.level !== selectedLevel) return false;
    if (selectedTopic !== 'all' && item.topic !== selectedTopic) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchHanzi = item.hanzi.toLowerCase().includes(q);
      const matchPinyin = item.pinyin.toLowerCase().includes(q);
      const matchVi = item.vi.toLowerCase().includes(q);
      const matchHv = item.hv ? item.hv.toLowerCase().includes(q) : false;
      if (!matchHanzi && !matchPinyin && !matchVi && !matchHv) return false;
    }
    return true;
  });

  // Count badge
  const countBadge = document.getElementById('vocab1000-count-badge');
  if (countBadge) {
    countBadge.textContent = `Hiển thị: ${filtered.length} / ${vocabList.length} từ`;
  }

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  if (AppState.vocab1000.page > totalPages) {
    AppState.vocab1000.page = totalPages;
  }
  const curPage = AppState.vocab1000.page;

  const pageInfo = document.getElementById('vocab-page-info');
  const prevBtn = document.getElementById('vocab-btn-prev');
  const nextBtn = document.getElementById('vocab-btn-next');
  if (pageInfo) pageInfo.textContent = `Trang ${curPage} / ${totalPages}`;
  if (prevBtn) prevBtn.disabled = (curPage <= 1);
  if (nextBtn) nextBtn.disabled = (curPage >= totalPages);

  const startIdx = (curPage - 1) * pageSize;
  const pageItems = filtered.slice(startIdx, startIdx + pageSize);

  const container = document.getElementById('vocab1000-cards-container');
  if (!container) return;
  container.innerHTML = '';

  if (pageItems.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; color: #64748b; font-size: 1.1rem;">
        🔍 Không tìm thấy từ vựng nào phù hợp với điều kiện tìm kiếm.
      </div>
    `;
    return;
  }

  pageItems.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vocab1000-card';
    const lvlClass = v.level === 'HSK 1' ? 'hsk1' : v.level === 'HSK 2' ? 'hsk2' : v.level === 'HSK 3' ? 'hsk3' : 'hsk3plus';

    card.innerHTML = `
      <div>
        <div class="vocab-card-header">
          <div class="vocab-hanzi-wrap">
            <span class="vocab-hanzi chinese-font">${v.hanzi}</span>
            <span class="vocab-pinyin">${v.pinyin}</span>
          </div>
          <div class="vocab-badges">
            <span class="vocab-level-badge ${lvlClass}">${v.level}</span>
            ${v.topic ? `<span class="vocab-topic-badge">${v.topic}</span>` : ''}
          </div>
        </div>
        <div class="vocab-meta-row">
          ${v.hv ? `<span class="vocab-hv">Hán Việt: <strong>${v.hv}</strong></span>` : ''}
        </div>
        <div class="vocab-vi">${v.vi}</div>
        ${v.sample ? `
          <div class="vocab-sample-box">
            <span class="vocab-sample-text chinese-font">${v.sample}</span>
            <button class="vgc-audio-btn" title="Nghe câu ví dụ" data-speak="${v.sample}">🔊</button>
          </div>
        ` : ''}
      </div>
      <div class="vocab-card-footer">
        <button class="vocab-speak-btn" title="Phát âm từ vựng" data-speak="${v.hanzi}">🔊</button>
      </div>
    `;

    card.querySelectorAll('button[data-speak]').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        speakChinese(btn.dataset.speak);
      };
    });

    container.appendChild(card);
  });
}

// ==========================================
// 12. INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadStoredState();
  updateHeaderStats();

  // Populate lesson selector
  const dropdown = document.getElementById('lesson-dropdown');
  if (dropdown) {
    dropdown.innerHTML = '';
    LESSONS_DATABASE.forEach((lesson, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = `[${lesson.level}] ${lesson.title.split(' (')[0]}`;
      dropdown.appendChild(opt);
    });

    dropdown.onchange = (e) => {
      AppState.currentLessonIndex = parseInt(e.target.value, 10);
      AppState.speaking.sentenceIdx = 0;
      AppState.writing.charIdx = 0;
      switchTab(AppState.activeTab);
    };
  }

  // Sidebar navigation listeners
  document.querySelectorAll('.nav-item button').forEach(btn => {
    btn.onclick = () => {
      const tab = btn.parentElement.dataset.tab;
      switchTab(tab);
    };
  });

  // Toggle Pinyin button
  const pinyinBtn = document.getElementById('btn-toggle-pinyin');
  if (pinyinBtn) {
    pinyinBtn.onclick = () => {
      AppState.showPinyin = !AppState.showPinyin;
      document.body.classList.toggle('hide-pinyin', !AppState.showPinyin);
      pinyinBtn.classList.toggle('active', AppState.showPinyin);
      pinyinBtn.querySelector('span:last-child').textContent = AppState.showPinyin ? 'Hiện Pinyin' : 'Ẩn Pinyin';
    };
  }

  // Listening player controls
  const mainPlayBtn = document.getElementById('main-play-btn');
  if (mainPlayBtn) {
    mainPlayBtn.onclick = () => {
      const lesson = LESSONS_DATABASE[AppState.currentLessonIndex];
      if (AppState.player.isPlaying) {
        AppState.player.isPlaying = false;
        window.speechSynthesis.cancel();
        updatePlayerPlayBtn();
      } else {
        playDialogueLine(0, lesson);
      }
    };
  }

  // Speed selector
  document.querySelectorAll('.speed-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.player.speed = parseFloat(btn.dataset.speed);
    };
  });

  // Speaking controls
  const micRecordBtn = document.getElementById('btn-mic-record');
  if (micRecordBtn) {
    micRecordBtn.onclick = toggleSpeakingRecord;
  }

  // Writing canvas buttons
  initWritingCanvas();
  const clearBtn = document.getElementById('btn-clear-canvas');
  if (clearBtn) clearBtn.onclick = clearWritingCanvas;

  const ghostToggleBtn = document.getElementById('btn-toggle-ghost');
  if (ghostToggleBtn) {
    ghostToggleBtn.onclick = () => {
      const g = document.getElementById('canvas-ghost');
      if (g) {
        const isHidden = g.style.display === 'none';
        g.style.display = isHidden ? 'block' : 'none';
        ghostToggleBtn.textContent = isHidden ? 'Ẩn nét mẫu' : 'Hiện nét mẫu';
      }
    };
  }

  const checkCompBtn = document.getElementById('btn-check-composition');
  if (checkCompBtn) checkCompBtn.onclick = checkWritingComposition;

  // Game restart button
  const restartGameBtn = document.getElementById('btn-restart-game');
  if (restartGameBtn) {
    restartGameBtn.onclick = () => {
      AppState.game.roundNumber++;
      initMatchingGame();
    };
  }

  // Close modal button
  const closeModalBtn = document.getElementById('btn-close-modal');
  if (closeModalBtn) {
    closeModalBtn.onclick = () => {
      document.getElementById('game-modal').classList.remove('active');
    };
  }

  // Sentence Builder Controls
  const checkSentenceBtn = document.getElementById('btn-check-sentence');
  if (checkSentenceBtn) checkSentenceBtn.onclick = checkSentenceOrder;

  const resetSentenceBtn = document.getElementById('btn-reset-sentence');
  if (resetSentenceBtn) resetSentenceBtn.onclick = resetSentenceBuilder;

  const audioHintBtn = document.getElementById('btn-audio-hint');
  if (audioHintBtn) {
    audioHintBtn.onclick = () => {
      const currentSc = REAL_LIFE_SCENARIOS.find(s => s.id === AppState.scenario.currentId) || REAL_LIFE_SCENARIOS[0];
      const challenge = currentSc.challenges[AppState.scenario.challengeIdx];
      if (challenge) speakChinese(challenge.audioFull, 0.85);
    };
  }

  const nextChallengeBtn = document.getElementById('btn-next-challenge');
  if (nextChallengeBtn) nextChallengeBtn.onclick = nextScenarioChallenge;

  // Formula Grammar Controls
  const formulaCheckBtn = document.getElementById('btn-formula-check');
  if (formulaCheckBtn) formulaCheckBtn.onclick = checkFormulaAnswer;

  const formulaClearBtn = document.getElementById('btn-formula-clear-slots');
  if (formulaClearBtn) {
    formulaClearBtn.onclick = () => {
      const formula = FORMULA_GRAMMAR_DATABASE[AppState.formula.patternIdx];
      const challenge = formula.challenges[AppState.formula.challengeIdx];
      AppState.formula.userSlots = challenge.slots.map(s => s.isFixed ? s.expected : null);
      renderFormulaSlots(challenge);
      renderFormulaBank(challenge);
    };
  }

  const formulaResetBtn = document.getElementById('btn-formula-reset');
  if (formulaResetBtn) {
    formulaResetBtn.onclick = () => {
      loadFormulaChallenge();
    };
  }

  const formulaListenBtn = document.getElementById('btn-formula-listen-sample');
  if (formulaListenBtn) {
    formulaListenBtn.onclick = () => {
      const formula = FORMULA_GRAMMAR_DATABASE[AppState.formula.patternIdx];
      const challenge = formula.challenges[AppState.formula.challengeIdx];
      if (challenge) speakChinese(challenge.hanziFull);
    };
  }

  const formulaNextBtn = document.getElementById('btn-formula-next');
  if (formulaNextBtn) {
    formulaNextBtn.onclick = () => {
      const formula = FORMULA_GRAMMAR_DATABASE[AppState.formula.patternIdx];
      AppState.formula.challengeIdx = (AppState.formula.challengeIdx + 1) % formula.challenges.length;
      loadFormulaChallenge();
    };
  }

  const formulaSpeakRuleBtn = document.getElementById('btn-formula-speak-rule');
  if (formulaSpeakRuleBtn) {
    formulaSpeakRuleBtn.onclick = () => {
      const formula = FORMULA_GRAMMAR_DATABASE[AppState.formula.patternIdx];
      const challenge = formula.challenges[AppState.formula.challengeIdx];
      if (challenge) speakChinese(challenge.hanziFull);
    };
  }

  // Initial load
  switchTab('reading');
});
