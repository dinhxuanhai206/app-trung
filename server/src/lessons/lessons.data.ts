/**
 * Hệ thống 20 Bài học Tiếng Trung Toàn Diện (HSK 1 - HSK 4 & Thương Mại)
 * Đồng bộ với NestJS Backend API
 */

import { enrichFullLesson } from './lesson-enricher';

const RAW_LESSONS_DATA = [
  // ==========================================
  // CHẶNG 1: HSK 1 - SƠ CẤP CĂN BẢN
  // ==========================================
  {
    id: 'hsk1-lesson1',
    level: 'HSK 1',
    title: 'Bài 1: Chào hỏi & Tự giới thiệu bản thân (问候与自我介绍)',
    description: 'Nắm vững cách chào hỏi lịch sự, hỏi họ tên, quốc tịch và các nghi thức giao tiếp căn bản.',
    category: 'Căn bản HSK 1',
    vocabularies: [
      { id: 'v1_1', hanzi: '你好', pinyin: 'nǐ hǎo', hv: 'Nhĩ Hảo', vi: 'Xin chào', type: 'Chào hỏi', exampleZh: '你好！我是李明。', examplePinyin: 'Nǐ hǎo! Wǒ shì Lǐ Míng.', exampleVi: 'Xin chào! Tôi là Lý Minh.' },
      { id: 'v1_2', hanzi: '叫', pinyin: 'jiào', hv: 'Khiếu', vi: 'Tên là, gọi là', type: 'Động từ', exampleZh: '你叫什么名字？', examplePinyin: 'Nǐ jiào shénme míngzì?', exampleVi: 'Bạn tên là gì?' },
      { id: 'v1_3', hanzi: '什么', pinyin: 'shénme', hv: 'Thập Ma', vi: 'Cái gì, gì', type: 'Đại từ nghi vấn', exampleZh: '这是什么书？', examplePinyin: 'Zhè shì shénme shū?', exampleVi: 'Đây là sách gì?' },
      { id: 'v1_4', hanzi: '名字', pinyin: 'míngzi', hv: 'Danh Tự', vi: 'Tên, họ tên', type: 'Danh từ', exampleZh: '我的名字叫大卫。', examplePinyin: 'Wǒ de míngzì jiào Dàwèi.', exampleVi: 'Tên của tôi là David.' },
      { id: 'v1_5', hanzi: '是', pinyin: 'shì', hv: 'Thị', vi: 'Là, đúng', type: 'Động từ', exampleZh: '我是越南人。', examplePinyin: 'Wǒ shì Yuènán rén.', exampleVi: 'Tôi là người Việt Nam.' },
      { id: 'v1_6', hanzi: '人', pinyin: 'rén', hv: 'Nhân', vi: 'Người', type: 'Danh từ', exampleZh: '中国人很热情。', examplePinyin: 'Zhōngguó rén hěn rèqíng.', exampleVi: 'Người Trung Quốc rất nhiệt tình.' },
      { id: 'v1_7', hanzi: '高兴', pinyin: 'gāoxìng', hv: 'Cao Hưng', vi: 'Vui vẻ, phấn khởi', type: 'Tính từ', exampleZh: '今天大家都很高兴。', examplePinyin: 'Jīntiān dàjiā dōu hěn gāoxìng.', exampleVi: 'Hôm nay mọi người đều rất vui.' },
      { id: 'v1_8', hanzi: '认识', pinyin: 'rènshi', hv: 'Nhận Thức', vi: 'Quen biết, nhận biết', type: 'Động từ', exampleZh: '很高兴认识你！', examplePinyin: 'Hěn gāoxìng rènshi nǐ!', exampleVi: 'Rất vui được quen biết bạn!' },
      { id: 'v1_9', hanzi: '谢谢', pinyin: 'xièxie', hv: 'Tạ Tạ', vi: 'Cảm ơn', type: 'Xã giao', exampleZh: '非常谢谢你的帮助！', examplePinyin: 'Fēicháng xièxie nǐ de bāngzhù!', exampleVi: 'Vô cùng cảm ơn sự giúp đỡ của bạn!' },
      { id: 'v1_10', hanzi: '再见', pinyin: 'zàijiàn', hv: 'Tái Kiến', vi: 'Tạm biệt, hẹn gặp lại', type: 'Xã giao', exampleZh: '老师再见，明天见！', examplePinyin: 'Lǎoshī zàijiàn, míngtiān jiàn!', exampleVi: 'Tạm biệt thầy, ngày mai gặp lại ạ!' },
    ],
    grammarPoints: [
      {
        title: '1. Cấu trúc câu khẳng định với "是" (shì - Là)',
        pattern: 'Chủ ngữ + 是 + Danh từ / Đoản ngữ',
        explanation: 'Dùng để biểu thị thân phận, nghề nghiệp, xuất xứ, quốc tịch. Phủ định dùng "不是" (bù shì).',
        examples: [
          { zh: '我是学生。', pinyin: 'Wǒ shì xuésheng.', vi: 'Tôi là học sinh.' },
          { zh: '他不是老师。', pinyin: 'Tā bù shì lǎoshī.', vi: 'Anh ấy không phải là thầy giáo.' },
        ],
      },
      {
        title: '2. Đại từ nghi vấn "什么" (shénme - Cái gì, gì)',
        pattern: 'Động từ + 什么 (+ Danh từ) ?',
        explanation: 'Dùng để hỏi thông tin sự vật hoặc hỏi tên người, đồ vật.',
        examples: [
          { zh: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzì?', vi: 'Bạn tên là gì?' },
          { zh: '你在看什么？', pinyin: 'Nǐ zài kàn shénme?', vi: 'Bạn đang xem cái gì vậy?' },
        ],
      },
    ],
    reading: {
      title: '你好，很高兴认识你！(Xin chào, rất vui được làm quen với bạn!)',
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
        question: 'Trong đoạn hội thoại trên, ai là người bắt chuyện trước?',
        options: [
          { text: 'A. 王兰 (Vương Lan)', correct: false },
          { text: 'B. 大卫 (David)', correct: true },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, speaker: 'David', hanzi: '你好，请问你叫什么名字？', pinyin: 'Nǐ hǎo, qǐngwèn nǐ jiào shénme míngzì?', vi: 'Xin chào, bạn tên là gì?' },
        { id: 1, speaker: 'Vương Lan', hanzi: '我叫王兰，我是中国人。', pinyin: 'Wǒ jiào Wáng Lán, wǒ shì Zhōngguó rén.', vi: 'Tôi là Vương Lan, người Trung Quốc.' },
        { id: 2, speaker: 'David', hanzi: '很高兴认识你！', pinyin: 'Hěn gāoxìng rènshi nǐ!', vi: 'Rất vui được quen biết bạn!' },
      ],
      quiz: {
        sentencePrefix: '很高兴',
        missingWord: '认识',
        sentenceSuffix: '你！',
        hint: 'rènshi (quen biết)',
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
      ],
    },
    writing: {
      targetChar: '好',
      charPinyin: 'hǎo',
      charMeaning: 'Hảo (Tốt, đẹp, an lành)',
      radical: '女 (bộ Nữ) + 子 (bộ Tử)',
      strokeCount: 6,
      tips: 'Người phụ nữ (女) sinh được người con trai (子) là điều vô cùng tốt lành (好).',
      compositionTask: {
        prompt: 'Dịch câu: "Chào bạn, tôi là học sinh"',
        expectedKeywords: ['你好', '我是', '学生'],
        sampleSolution: '你好，我是学生 (Nǐ hǎo, wǒ shì xuésheng)',
      },
    },
    matchingWords: [
      { id: 'w1_1', hanzi: '你好', pinyin: 'nǐ hǎo', vi: 'Xin chào' },
      { id: 'w1_2', hanzi: '再见', pinyin: 'zàijiàn', vi: 'Tạm biệt' },
      { id: 'w1_3', hanzi: '谢谢', pinyin: 'xièxie', vi: 'Cảm ơn' },
      { id: 'w1_4', hanzi: '认识', pinyin: 'rènshi', vi: 'Quen biết' },
      { id: 'w1_5', hanzi: '名字', pinyin: 'míngzi', vi: 'Họ tên' },
      { id: 'w1_6', hanzi: '高兴', pinyin: 'gāoxìng', vi: 'Vui vẻ' },
    ],
  },

  {
    id: 'hsk1-lesson2',
    level: 'HSK 1',
    title: 'Bài 2: Gia đình, Thành viên & Nghề nghiệp (家庭与职业)',
    description: 'Học cách giới thiệu các thành viên trong gia đình, tuổi tác và nghề nghiệp của cha mẹ.',
    category: 'Căn bản HSK 1',
    vocabularies: [
      { id: 'v2_1', hanzi: '家', pinyin: 'jiā', hv: 'Gia', vi: 'Nhà, gia đình', type: 'Danh từ', exampleZh: '我家有四口人。', examplePinyin: 'Wǒ jiā yǒu sì kǒu rén.', exampleVi: 'Nhà tôi có 4 người.' },
      { id: 'v2_2', hanzi: '爸爸', pinyin: 'bàba', hv: 'Ba Ba', vi: 'Bố, ba', type: 'Danh từ', exampleZh: '我爸爸是医生。', examplePinyin: 'Wǒ bàba shì yīshēng.', exampleVi: 'Bố tôi là bác sĩ.' },
      { id: 'v2_3', hanzi: '妈妈', pinyin: 'māma', hv: 'Ma Ma', vi: 'Mẹ, má', type: 'Danh từ', exampleZh: '妈妈做饭很好吃。', examplePinyin: 'Māma zuòfàn hěn hǎochī.', exampleVi: 'Mẹ nấu cơm rất ngon.' },
      { id: 'v2_4', hanzi: '哥哥', pinyin: 'gēge', hv: 'Ca Ca', vi: 'Anh trai', type: 'Danh từ', exampleZh: '我哥哥比我大两岁。', examplePinyin: 'Wǒ gēge bǐ wǒ dà liǎng suì.', exampleVi: 'Anh trai lớn hơn tôi 2 tuổi.' },
      { id: 'v2_5', hanzi: '姐姐', pinyin: 'jiějie', hv: 'Tỷ Tỷ', vi: 'Chị gái', type: 'Danh từ', exampleZh: '我姐姐很喜欢看书。', examplePinyin: 'Wǒ jiějie hěn xǐhuan kànshū.', exampleVi: 'Chị gái tôi rất thích đọc sách.' },
      { id: 'v2_6', hanzi: '医生', pinyin: 'yīshēng', hv: 'Y Sinh', vi: 'Bác sĩ', type: 'Nghề nghiệp', exampleZh: '他在医院当医生。', examplePinyin: 'Tā zài yīyuàn dāng yīshēng.', exampleVi: 'Anh ấy làm bác sĩ ở bệnh viện.' },
      { id: 'v2_7', hanzi: '老师', pinyin: 'lǎoshī', hv: 'Lão Sư', vi: 'Thầy cô giáo', type: 'Nghề nghiệp', exampleZh: '王老师教我们汉语。', examplePinyin: 'Wáng lǎoshī jiāo wǒmen Hànyǔ.', exampleVi: 'Thầy Vương dạy chúng tôi tiếng Trung.' },
      { id: 'v2_8', hanzi: '有', pinyin: 'yǒu', hv: 'Hữu', vi: 'Có', type: 'Động từ', exampleZh: '你有汉语词典吗？', examplePinyin: 'Nǐ yǒu Hànyǔ cídiǎn ma?', exampleVi: 'Bạn có từ điển tiếng Trung không?' },
      { id: 'v2_9', hanzi: '几', pinyin: 'jǐ', hv: 'Kỷ', vi: 'Mấy (hỏi số lượng < 10)', type: 'Đại từ nghi vấn', exampleZh: '你家有几口人？', examplePinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', exampleVi: 'Nhà bạn có mấy người?' },
      { id: 'v2_10', hanzi: '口', pinyin: 'kǒu', hv: 'Khẩu', vi: 'Người (lượng từ gia đình)', type: 'Lượng từ', exampleZh: '一家三口。', examplePinyin: 'Yī jiā sān kǒu.', exampleVi: 'Gia đình 3 miệng ăn / 3 người.' },
    ],
    grammarPoints: [
      {
        title: '1. Động từ "有" (yǒu - Có) và thể phủ định "没有"',
        pattern: 'Chủ ngữ + 有 / 没有 + Danh từ',
        explanation: 'Dùng để biểu thị sự sở hữu. Lưu ý: Phủ định của "有" bắt buộc dùng "没有", KHÔNG được nói "不有".',
        examples: [
          { zh: '我有两本书。', pinyin: 'Wǒ yǒu liǎng běn shū.', vi: 'Tôi có hai cuốn sách.' },
          { zh: '他没有哥哥。', pinyin: 'Tā méiyǒu gēge.', vi: 'Anh ấy không có anh trai.' },
        ],
      },
      {
        title: '2. Cách hỏi số lượng gia đình với "几口人"',
        pattern: '家 + 有 + 几口人？',
        explanation: '"口" (kǒu) là lượng từ chuyên dụng dùng cho số thành viên trong gia đình.',
        examples: [
          { zh: '你家有几口人？', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', vi: 'Nhà bạn có mấy người?' },
          { zh: '我家有五口人。', pinyin: 'Wǒ jiā yǒu wǔ kǒu rén.', vi: 'Nhà tôi có 5 người.' },
        ],
      },
    ],
    reading: {
      title: '你家有几口人？(Nhà bạn có mấy người?)',
      tokens: [
        { hanzi: '王兰：', isSpeaker: true },
        { hanzi: '大卫', pinyin: 'Dàwèi', vi: 'David', hv: 'Đại Vệ' },
        { hanzi: '，你家', pinyin: 'nǐ jiā', vi: 'Nhà bạn', hv: 'Nhĩ Gia' },
        { hanzi: '有', pinyin: 'yǒu', vi: 'Có', hv: 'Hữu' },
        { hanzi: '几口人', pinyin: 'jǐ kǒu rén', vi: 'Mấy người', hv: 'Kỷ Khẩu Nhân' },
        { hanzi: '？' },
        { hanzi: '大卫：', isSpeaker: true },
        { hanzi: '我家', pinyin: 'wǒ jiā', vi: 'Nhà tôi', hv: 'Ngã Gia' },
        { hanzi: '有', pinyin: 'yǒu', vi: 'Có', hv: 'Hữu' },
        { hanzi: '四口人', pinyin: 'sì kǒu rén', vi: '4 người', hv: 'Tứ Khẩu Nhân' },
        { hanzi: '：爸爸', pinyin: 'bàba', vi: 'Bố', hv: 'Ba Ba' },
        { hanzi: '、妈妈', pinyin: 'māma', vi: 'Mẹ', hv: 'Ma Ma' },
        { hanzi: '、哥哥', pinyin: 'gēge', vi: 'Anh trai', hv: 'Ca Ca' },
        { hanzi: '和我', pinyin: 'hé wǒ', vi: 'Và tôi', hv: 'Hòa Ngã' },
        { hanzi: '。我爱', pinyin: 'wǒ ài', vi: 'Tôi yêu', hv: 'Ngã Ái' },
        { hanzi: '我的家', pinyin: 'wǒ de jiā', vi: 'Gia đình tôi', hv: 'Ngã Đích Gia' },
        { hanzi: '！' },
      ],
      translationVi: 'Vương Lan: David, gia đình bạn có mấy người vậy?\nDavid: Nhà tôi có 4 người: Bố, mẹ, anh trai và tôi. Tôi rất yêu gia đình mình!',
      quiz: {
        question: 'Gia đình của David gồm có bao nhiêu thành viên?',
        options: [
          { text: 'A. 三口人 (3 người)', correct: false },
          { text: 'B. 四口人 (4 người)', correct: true },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, speaker: 'Vương Lan', hanzi: '你家有几口人？', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', vi: 'Nhà bạn có mấy người?' },
        { id: 1, speaker: 'David', hanzi: '我家有四口人。', pinyin: 'Wǒ jiā yǒu sì kǒu rén.', vi: 'Nhà tôi có 4 người.' },
        { id: 2, speaker: 'Vương Lan', hanzi: '你爸爸是医生吗？', pinyin: 'Nǐ bàba shì yīshēng ma?', vi: 'Bố bạn là bác sĩ à?' },
      ],
      quiz: {
        sentencePrefix: '我家有',
        missingWord: '四口人',
        sentenceSuffix: '。',
        hint: 'sì kǒu rén (4 người)',
      },
    },
    speaking: {
      targetHanzi: '我很爱我的家人',
      targetPinyin: 'Wǒ hěn ài wǒ de jiārén',
      vietnameseMeaning: 'Tôi rất yêu gia đình mình',
      sentences: [
        { hanzi: '我家有四口人：爸爸、妈妈、哥哥和我。', pinyin: 'Wǒ jiā yǒu sì kǒu rén: bàba, māma, gēge hé wǒ.', vi: 'Nhà tôi có 4 người: bố, mẹ, anh trai và tôi.' },
        { hanzi: '我爸爸是医生，妈妈是老师。', pinyin: 'Wǒ bàba shì yīshēng, māma shì lǎoshī.', vi: 'Bố tôi là bác sĩ, mẹ là cô giáo.' },
        { hanzi: '我很爱我的家人。', pinyin: 'Wǒ hěn ài wǒ de jiārén.', vi: 'Tôi rất yêu gia đình mình.' },
      ],
    },
    writing: {
      targetChar: '家',
      charPinyin: 'jiā',
      charMeaning: 'Gia (Nhà, gia đình)',
      radical: '宀 (bộ Miên - mái nhà) + 豕 (bộ Thỉ - con lợn)',
      strokeCount: 10,
      tips: 'Dưới mái nhà (宀) có con lợn (豕) tượng trưng cho cảnh no đủ của gia đình (家).',
      compositionTask: {
        prompt: 'Dịch câu: "Bố tôi là bác sĩ"',
        expectedKeywords: ['我爸爸', '是', '医生'],
        sampleSolution: '我爸爸是医生 (Wǒ bàba shì yīshēng)',
      },
    },
    matchingWords: [
      { id: 'w2_1', hanzi: '爸爸', pinyin: 'bàba', vi: 'Bố' },
      { id: 'w2_2', hanzi: '妈妈', pinyin: 'māma', vi: 'Mẹ' },
      { id: 'w2_3', hanzi: '哥哥', pinyin: 'gēge', vi: 'Anh trai' },
      { id: 'w2_4', hanzi: '姐姐', pinyin: 'jiějie', vi: 'Chị gái' },
      { id: 'w2_5', hanzi: '医生', pinyin: 'yīshēng', vi: 'Bác sĩ' },
      { id: 'w2_6', hanzi: '老师', pinyin: 'lǎoshī', vi: 'Thầy cô' },
    ],
  },

  {
    id: 'hsk1-lesson3',
    level: 'HSK 1',
    title: 'Bài 3: Thời gian, Ngày tháng & Giờ giấc (时间、日期与日常作息)',
    description: 'Hỏi đáp chính xác về giờ giấc, các ngày trong tuần và thời gian biểu sinh hoạt mỗi ngày.',
    category: 'Căn bản HSK 1',
    vocabularies: [
      { id: 'v3_1', hanzi: '现在', pinyin: 'xiànzài', hv: 'Hiện Tại', vi: 'Bây giờ, hiện tại', type: 'Thời gian', exampleZh: '现在几点了？', examplePinyin: 'Xiànzài jǐ diǎn le?', exampleVi: 'Bây giờ mấy giờ rồi?' },
      { id: 'v3_2', hanzi: '点', pinyin: 'diǎn', hv: 'Điểm', vi: 'Giờ (thời gian)', type: 'Lượng từ', exampleZh: '现在是上午八点。', examplePinyin: 'Xiànzài shì shàngwǔ bā diǎn.', exampleVi: 'Bây giờ là 8 giờ sáng.' },
      { id: 'v3_3', hanzi: '分', pinyin: 'fēn', hv: 'Phân', vi: 'Phút (thời gian)', type: 'Lượng từ', exampleZh: '八点十五分。', examplePinyin: 'Bā diǎn shíwǔ fēn.', exampleVi: '8 giờ 15 phút.' },
      { id: 'v3_4', hanzi: '半', pinyin: 'bàn', hv: 'Bán', vi: 'Rưỡi, nửa', type: 'Số từ', exampleZh: '八点半开始上课。', examplePinyin: 'Bā diǎn bàn kāishǐ shàngkè.', exampleVi: '8 giờ rưỡi bắt đầu vào học.' },
      { id: 'v3_5', hanzi: '早上', pinyin: 'zǎoshang', hv: 'Tảo Thượng', vi: 'Buổi sáng sớm', type: 'Thời gian', exampleZh: '早上好，老师！', examplePinyin: 'Zǎoshang hǎo, lǎoshī!', exampleVi: 'Chào buổi sáng thầy ạ!' },
      { id: 'v3_6', hanzi: '中午', pinyin: 'zhōngwǔ', hv: 'Trung Ngọ', vi: 'Buổi trưa (12h)', type: 'Thời gian', exampleZh: '中午我们一起吃午饭。', examplePinyin: 'Zhōngwǔ wǒmen yīqǐ chī wǔfàn.', exampleVi: 'Buổi trưa chúng mình cùng ăn trưa nhé.' },
      { id: 'v3_7', hanzi: '晚上', pinyin: 'wǎnshang', hv: 'Vãn Thượng', vi: 'Buổi tối', type: 'Thời gian', exampleZh: '晚上我喜欢看电影。', examplePinyin: 'Wǎnshang wǒ xǐhuan kàn diànyǐng.', exampleVi: 'Buổi tối tôi thích xem phim.' },
      { id: 'v3_8', hanzi: '今天', pinyin: 'jīntiān', hv: 'Kim Thiên', vi: 'Hôm nay', type: 'Thời gian', exampleZh: '今天星期几？', examplePinyin: 'Jīntiān xīngqī jǐ?', exampleVi: 'Hôm nay thứ mấy?' },
      { id: 'v3_9', hanzi: '明天', pinyin: 'míngtiān', hv: 'Minh Thiên', vi: 'Ngày mai', type: 'Thời gian', exampleZh: '明天下午见！', examplePinyin: 'Míngtiān xiàwǔ jiàn!', exampleVi: 'Chiều mai gặp nhé!' },
      { id: 'v3_10', hanzi: '星期', pinyin: 'xīngqī', hv: 'Tinh Kỳ', vi: 'Tuần, thứ', type: 'Thời gian', exampleZh: '一个星期有七天。', examplePinyin: 'Yī gè xīngqī yǒu qī tiān.', exampleVi: 'Một tuần có 7 ngày.' },
    ],
    grammarPoints: [
      {
        title: '1. Quy tắc diễn đạt thời gian trong tiếng Trung (Từ lớn đến nhỏ)',
        pattern: 'Năm (年) + Tháng (月) + Ngày (日/号) + Buổi (早上/下午) + Giờ (点) + Phút (分)',
        explanation: 'Khác với tiếng Việt (đi từ ngày đến năm), tiếng Trung luôn đi từ đơn vị thời gian lớn nhất đến nhỏ nhất.',
        examples: [
          { zh: '今天上午九点半。', pinyin: 'Jīntiān shàngwǔ jiǔ diǎn bàn.', vi: '9 giờ rưỡi sáng hôm nay.' },
          { zh: '明天下午三点。', pinyin: 'Míngtiān xiàwǔ sān diǎn.', vi: '3 giờ chiều ngày mai.' },
        ],
      },
      {
        title: '2. Cách hỏi và trả lời giờ giấc với "几点"',
        pattern: '现在 + 几点 + 了？  ==>  现在 + [Số] 点 + [Số] 分。',
        explanation: '"几点" (jǐ diǎn) dùng để hỏi mấy giờ.',
        examples: [
          { zh: '请问，现在几点了？', pinyin: 'Qǐngwèn, xiànzài jǐ diǎn le?', vi: 'Xin hỏi, bây giờ là mấy giờ rồi?' },
          { zh: '现在是早上八点整。', pinyin: 'Xiànzài shì zǎoshang bā diǎn zhěng.', vi: 'Bây giờ là đúng 8 giờ sáng.' },
        ],
      },
    ],
    reading: {
      title: '现在几点了？(Bây giờ là mấy giờ rồi?)',
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
        question: 'Theo đoạn hội thoại, bây giờ là mấy giờ?',
        options: [
          { text: 'A. 八点半 (8 giờ rưỡi)', correct: true },
          { text: 'B. 九点整 (9 giờ đúng)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, speaker: 'David', hanzi: '请问，现在几点了？', pinyin: 'Qǐngwèn, xiànzài jǐ diǎn le?', vi: 'Xin hỏi bây giờ mấy giờ rồi?' },
        { id: 1, speaker: 'Vương Lan', hanzi: '现在八点半。', pinyin: 'Xiànzài bā diǎn bàn.', vi: 'Bây giờ 8 giờ rưỡi.' },
        { id: 2, speaker: 'David', hanzi: '好的，我们快去上课吧！', pinyin: 'Hǎo de, wǒmen kuài qù shàngkè ba!', vi: 'Được rồi, chúng mình mau đi học thôi!' },
      ],
      quiz: {
        sentencePrefix: '现在是早上',
        missingWord: '八点半',
        sentenceSuffix: '。',
        hint: 'bā diǎn bàn (8 giờ rưỡi)',
      },
    },
    speaking: {
      targetHanzi: '现在是早上八点半',
      targetPinyin: 'Xiànzài shì zǎoshang bā diǎn bàn',
      vietnameseMeaning: 'Bây giờ là 8 giờ rưỡi sáng',
      sentences: [
        { hanzi: '请问，现在几点了？', pinyin: 'Qǐngwèn, xiànzài jǐ diǎn le?', vi: 'Xin hỏi, bây giờ là mấy giờ rồi?' },
        { hanzi: '现在是早上八点半。', pinyin: 'Xiànzài shì zǎoshang bā diǎn bàn.', vi: 'Bây giờ là 8 giờ rưỡi sáng.' },
        { hanzi: '今天星期一，我们要去上学。', pinyin: 'Jīntiān xīngqī yī, wǒmen yào qù shàngxué.', vi: 'Hôm nay thứ Hai, chúng ta phải đi học.' },
      ],
    },
    writing: {
      targetChar: '日',
      charPinyin: 'rì',
      charMeaning: 'Nhật (Mặt trời, ngày)',
      radical: '日 (Độc thể tự)',
      strokeCount: 4,
      tips: 'Hình tượng mặt trời tròn với một vệt sáng ở giữa, sau này vuông vức thành chữ 日.',
      compositionTask: {
        prompt: 'Dịch câu: "Hôm nay là ngày 1 tháng 1"',
        expectedKeywords: ['今天', '一月', '一日'],
        sampleSolution: '今天是一月一日 (Jīntiān shì yī yuè yī rì)',
      },
    },
    matchingWords: [
      { id: 'w3_1', hanzi: '现在', pinyin: 'xiànzài', vi: 'Bây giờ' },
      { id: 'w3_2', hanzi: '早上', pinyin: 'zǎoshang', vi: 'Buổi sáng' },
      { id: 'w3_3', hanzi: '晚上', pinyin: 'wǎnshang', vi: 'Buổi tối' },
      { id: 'w3_4', hanzi: '今天', pinyin: 'jīntiān', vi: 'Hôm nay' },
      { id: 'w3_5', hanzi: '明天', pinyin: 'míngtiān', vi: 'Ngày mai' },
      { id: 'w3_6', hanzi: '星期', pinyin: 'xīngqī', vi: 'Thứ, tuần' },
    ],
  },

  {
    id: 'hsk1-lesson4',
    level: 'HSK 1',
    title: 'Bài 4: Mua sắm hàng hóa & Hỏi giá tiền cơ bản (买东西与问价)',
    description: 'Tự tin đi chợ mua hoa quả, hỏi giá tiền bao nhiêu một cân và sử dụng tiền tệ Trung Quốc.',
    category: 'Căn bản HSK 1',
    vocabularies: [
      { id: 'v4_1', hanzi: '买', pinyin: 'mǎi', hv: 'Mãi', vi: 'Mua', type: 'Động từ', exampleZh: '我想买两斤苹果。', examplePinyin: 'Wǒ xiǎng mǎi liǎng jīn píngguǒ.', exampleVi: 'Tôi muốn mua 2 cân táo.' },
      { id: 'v4_2', hanzi: '多少钱', pinyin: 'duōshǎo qián', hv: 'Đa Thiểu Tiền', vi: 'Bao nhiêu tiền', type: 'Cụm hỏi giá', exampleZh: '这个多少钱一斤？', examplePinyin: 'Zhège duōshǎo qián yī jīn?', exampleVi: 'Cái này bao nhiêu tiền một cân?' },
      { id: 'v4_3', hanzi: '块', pinyin: 'kuài', hv: 'Khối', vi: 'Đồng tệ (khẩu ngữ 元)', type: 'Tiền tệ', exampleZh: '这本书二十块钱。', examplePinyin: 'Zhè běn shū èrshí kuài qián.', exampleVi: 'Cuốn sách này 20 tệ.' },
      { id: 'v4_4', hanzi: '斤', pinyin: 'jīn', hv: 'Cân', vi: 'Cân Trung Quốc (500g)', type: 'Đo lường', exampleZh: '一斤等于五百克。', examplePinyin: 'Yī jīn děngyú wǔbǎi kè.', exampleVi: 'Một cân bằng 500 gram.' },
      { id: 'v4_5', hanzi: '苹果', pinyin: 'píngguǒ', hv: 'Bình Quả', vi: 'Quả táo', type: 'Danh từ', exampleZh: '红苹果很好吃。', examplePinyin: 'Hóng píngguǒ hěn hǎochī.', exampleVi: 'Táo đỏ rất ngon.' },
      { id: 'v4_6', hanzi: '太...了', pinyin: 'tài...le', hv: 'Thái...Liễu', vi: 'Quá... rồi', type: 'Phó từ cảm thán', exampleZh: '太贵了！', examplePinyin: 'Tài guì le!', exampleVi: 'Đắt quá rồi!' },
      { id: 'v4_7', hanzi: '贵', pinyin: 'guì', hv: 'Quý', vi: 'Đắt tiền', type: 'Tính từ', exampleZh: '有点儿贵。', examplePinyin: 'Yǒudiǎnr guì.', exampleVi: 'Hơi đắt một chút.' },
      { id: 'v4_8', hanzi: '便宜', pinyin: 'piányi', hv: 'Tiện Nghi', vi: 'Rẻ, giá rẻ', type: 'Tính từ', exampleZh: '便宜一点吧！', examplePinyin: 'Piányi yīdiǎn ba!', exampleVi: 'Bớt chút đi, rẻ chút đi!' },
    ],
    grammarPoints: [
      {
        title: '1. Cấu trúc hỏi giá tiền: "...多少钱 (duōshǎo qián)?"',
        pattern: 'Đồ vật + 多少钱 (+ Lượng từ) ?',
        explanation: 'Mẫu câu hỏi giá phổ biến nhất khi đi mua sắm tại Trung Quốc.',
        examples: [
          { zh: '苹果多少钱一斤？', pinyin: 'Píngguǒ duōshǎo qián yī jīn?', vi: 'Táo bao nhiêu tiền một cân (500g)?' },
          { zh: '这件衣服多少钱？', pinyin: 'Zhè jiàn yīfu duōshǎo qián?', vi: 'Bộ quần áo này bao nhiêu tiền?' },
        ],
      },
      {
        title: '2. Cấu trúc cảm thán "太 + Tính từ + 了"',
        pattern: '太 + Adj + 了',
        explanation: 'Biểu thị mức độ rất cao hoặc vượt quá mong đợi.',
        examples: [
          { zh: '太贵了，便宜一点吧。', pinyin: 'Tài guì le, piányi yīdiǎn ba.', vi: 'Đắt quá rồi, rẻ chút đi.' },
          { zh: '太好了，非常感谢！', pinyin: 'Tài hǎo le, fēicháng gǎnxiè!', vi: 'Tuyệt vời quá, cảm ơn rất nhiều!' },
        ],
      },
    ],
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
        { id: 0, speaker: 'Khách hàng', hanzi: '老板，请问这个多少钱？', pinyin: 'Lǎobǎn, qǐngwèn zhège duōshǎo qián?', vi: 'Ông chủ, cái này bao nhiêu tiền?' },
        { id: 1, speaker: 'Chủ tiệm', hanzi: '五块钱一斤。', pinyin: 'Wǔ kuài qián yī jīn.', vi: '5 tệ một cân.' },
        { id: 2, speaker: 'Khách hàng', hanzi: '太贵了，便宜一点吧。', pinyin: 'Tài guì le, piányi yīdiǎn ba.', vi: 'Đắt quá rồi, bớt chút đi.' },
      ],
      quiz: {
        sentencePrefix: '太贵了，',
        missingWord: '便宜',
        sentenceSuffix: '一点吧。',
        hint: 'piányi (rẻ)',
      },
    },
    speaking: {
      targetHanzi: '这个多少钱',
      targetPinyin: 'Zhège duōshǎo qián',
      vietnameseMeaning: 'Cái này bao nhiêu tiền?',
      sentences: [
        { hanzi: '老板，请问苹果多少钱一斤？', pinyin: 'Lǎobǎn, qǐngwèn píngguǒ duōshǎo qián yī jīn?', vi: 'Ông chủ, xin hỏi táo bao nhiêu tiền một cân?' },
        { hanzi: '五块钱一斤，很甜的。', pinyin: 'Wǔ kuài qián yī jīn, hěn tián de.', vi: '5 tệ một cân, ngọt lắm.' },
        { hanzi: '太贵了，便宜一点吧。', pinyin: 'Tài guì le, piányi yīdiǎn ba.', vi: 'Đắt quá, rẻ một chút đi.' },
      ],
    },
    writing: {
      targetChar: '买',
      charPinyin: 'mǎi',
      charMeaning: 'Mãi (Mua)',
      radical: '乙 (Ất) + 头 (Đầu)',
      strokeCount: 6,
      tips: 'Phân biệt: 买 (mǎi - Mua - không có móc trên) và 卖 (mài - Bán - có chữ Thập 十 ở trên).',
      compositionTask: {
        prompt: 'Dịch câu: "Tôi muốn mua hoa quả"',
        expectedKeywords: ['我想', '买', '水果'],
        sampleSolution: '我想买水果 (Wǒ xiǎng mǎi shuǐguǒ)',
      },
    },
    matchingWords: [
      { id: 'w4_1', hanzi: '多少钱', pinyin: 'duōshǎo qián', vi: 'Bao nhiêu tiền' },
      { id: 'w4_2', hanzi: '便宜', pinyin: 'piányi', vi: 'Rẻ' },
      { id: 'w4_3', hanzi: '贵', pinyin: 'guì', vi: 'Đắt' },
      { id: 'w4_4', hanzi: '苹果', pinyin: 'píngguǒ', vi: 'Quả táo' },
      { id: 'w4_5', hanzi: '买', pinyin: 'mǎi', vi: 'Mua' },
      { id: 'w4_6', hanzi: '老板', pinyin: 'lǎobǎn', vi: 'Ông chủ' },
    ],
  },

  {
    id: 'hsk1-lesson5',
    level: 'HSK 1',
    title: 'Bài 5: Vị trí, Phương hướng & Nơi chốn (方位、地点与问路)',
    description: 'Học các từ chỉ phương vị trên dưới trong ngoài, hỏi địa điểm nhà vệ sinh, ngân hàng.',
    category: 'Căn bản HSK 1',
    vocabularies: [
      { id: 'v5_1', hanzi: '在哪儿', pinyin: 'zài nǎr', hv: 'Tại Na Nhi', vi: 'Ở đâu, ở chỗ nào', type: 'Nghi vấn', exampleZh: '洗手间在哪儿？', examplePinyin: 'Xǐshǒujiān zài nǎr?', exampleVi: 'Nhà vệ sinh ở đâu vậy?' },
      { id: 'v5_2', hanzi: '上面', pinyin: 'shàngmian', hv: 'Thượng Diện', vi: 'Phía trên, ở trên', type: 'Phương vị', exampleZh: '桌子上面有一本书。', examplePinyin: 'Zhuōzi shàngmian yǒu yī běn shū.', exampleVi: 'Trên mặt bàn có một cuốn sách.' },
      { id: 'v5_3', hanzi: '下面', pinyin: 'xiàmian', hv: 'Hạ Diện', vi: 'Phía dưới', type: 'Phương vị', exampleZh: '椅子下面有一只猫。', examplePinyin: 'Yǐzi xiàmian yǒu yī zhī māo.', exampleVi: 'Dưới cái ghế có một con mèo.' },
      { id: 'v5_4', hanzi: '前面', pinyin: 'qiánmian', hv: 'Tiền Diện', vi: 'Phía trước', type: 'Phương vị', exampleZh: '学校前面有一家书店。', examplePinyin: 'Xuéxiào qiánmian yǒu yī jiā shūdiàn.', exampleVi: 'Phía trước trường học có một tiệm sách.' },
      { id: 'v5_5', hanzi: '后面', pinyin: 'hòumian', hv: 'Hậu Diện', vi: 'Phía sau', type: 'Phương vị', exampleZh: '医院在银行后面。', examplePinyin: 'Yīyuàn zài yínháng hòumian.', exampleVi: 'Bệnh viện ở phía sau ngân hàng.' },
      { id: 'v5_6', hanzi: '洗手间', pinyin: 'xǐshǒujiān', hv: 'Tẩy Thủ Gian', vi: 'Nhà vệ sinh', type: 'Địa điểm', exampleZh: '请问洗手间在几楼？', examplePinyin: 'Qǐngwèn xǐshǒujiān zài jǐ lóu?', exampleVi: 'Xin hỏi nhà vệ sinh ở tầng mấy?' },
      { id: 'v5_7', hanzi: '学校', pinyin: 'xuéxiào', hv: 'Học Hiệu', vi: 'Trường học', type: 'Địa điểm', exampleZh: '我们的学校很大。', examplePinyin: 'Wǒmen de xuéxiào hěn dà.', exampleVi: 'Trường của chúng tôi rất lớn.' },
      { id: 'v5_8', hanzi: '里', pinyin: 'lǐ', hv: 'Lý', vi: 'Bên trong', type: 'Phương vị', exampleZh: '房间里没有人。', examplePinyin: 'Fángjiān lǐ méiyǒu rén.', exampleVi: 'Trong phòng không có ai.' },
    ],
    grammarPoints: [
      {
        title: '1. Câu vị trí với "在" (zài - Ở, tại)',
        pattern: 'Chủ ngữ + 在 + Địa điểm / Từ chỉ phương vị',
        explanation: 'Dùng để diễn tả một người hoặc đồ vật đang nằm tại vị trí nào.',
        examples: [
          { zh: '我在家里。', pinyin: 'Wǒ zài jiā lǐ.', vi: 'Tôi đang ở trong nhà.' },
          { zh: '书在桌子上面。', pinyin: 'Shū zài zhuōzi shàngmian.', vi: 'Sách ở trên mặt bàn.' },
        ],
      },
      {
        title: '2. Cách hỏi vị trí với "...在哪儿?"',
        pattern: 'Đối tượng + 在哪儿 (zài nǎr) ?',
        explanation: 'Cách hỏi đường, tìm đồ hoặc tìm người quen thuộc nhất.',
        examples: [
          { zh: '请问，洗手间在哪儿？', pinyin: 'Qǐngwèn, xǐshǒujiān zài nǎr?', vi: 'Xin hỏi, nhà vệ sinh ở đâu ạ?' },
          { zh: '你妈妈在哪儿工作？', pinyin: 'Nǐ māma zài nǎr gōngzuò?', vi: 'Mẹ bạn làm việc ở đâu?' },
        ],
      },
    ],
    reading: {
      title: '请问洗手间在哪儿？(Xin hỏi nhà vệ sinh ở đâu?)',
      tokens: [
        { hanzi: '大卫：', isSpeaker: true },
        { hanzi: '请问', pinyin: 'qǐngwèn', vi: 'Xin hỏi', hv: 'Thỉnh Vấn' },
        { hanzi: '，洗手间', pinyin: 'xǐshǒujiān', vi: 'Nhà vệ sinh', hv: 'Tẩy Thủ Gian' },
        { hanzi: '在哪儿', pinyin: 'zài nǎr', vi: 'Ở đâu', hv: 'Tại Na Nhi' },
        { hanzi: '？' },
        { hanzi: '服务员：', isSpeaker: true },
        { hanzi: '洗手间', pinyin: 'xǐshǒujiān', vi: 'Nhà vệ sinh', hv: 'Tẩy Thủ Gian' },
        { hanzi: '在前面', pinyin: 'zài qiánmian', vi: 'Ở phía trước', hv: 'Tại Tiền Diện' },
        { hanzi: '，右边', pinyin: 'yòubian', vi: 'Bên phải', hv: 'Hữu Biên' },
        { hanzi: '。' },
      ],
      translationVi: 'David: Xin hỏi, nhà vệ sinh ở chỗ nào vậy ạ?\nNhân viên: Nhà vệ sinh ở phía trước, phía bên tay phải nhé.',
      quiz: {
        question: 'Nhà vệ sinh nằm ở hướng nào theo chỉ dẫn?',
        options: [
          { text: 'A. 前面右边 (Phía trước bên phải)', correct: true },
          { text: 'B. 后面左边 (Phía sau bên trái)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, speaker: 'David', hanzi: '请问，洗手间在哪儿？', pinyin: 'Qǐngwèn, xǐshǒujiān zài nǎr?', vi: 'Xin hỏi nhà vệ sinh ở đâu?' },
        { id: 1, speaker: 'Phục vụ', hanzi: '在前面右边。', pinyin: 'Zài qiánmian yòubian.', vi: 'Ở phía trước bên phải.' },
        { id: 2, speaker: 'David', hanzi: '谢谢您！', pinyin: 'Xièxie nín!', vi: 'Cảm ơn bác!' },
      ],
      quiz: {
        sentencePrefix: '洗手间在',
        missingWord: '前面',
        sentenceSuffix: '右边。',
        hint: 'qiánmian (phía trước)',
      },
    },
    speaking: {
      targetHanzi: '请问洗手间在哪儿',
      targetPinyin: 'Qǐngwèn xǐshǒujiān zài nǎr',
      vietnameseMeaning: 'Xin hỏi nhà vệ sinh ở đâu vậy?',
      sentences: [
        { hanzi: '请问，洗手间在什么地方？', pinyin: 'Qǐngwèn, xǐshǒujiān zài shénme dìfang?', vi: 'Xin hỏi nhà vệ sinh ở chỗ nào?' },
        { hanzi: '在前面右转第二间。', pinyin: 'Zài qiánmian yòuzhuǎn dì-èr jiān.', vi: 'Ở phía trước rẽ phải phòng thứ hai.' },
      ],
    },
    writing: {
      targetChar: '在',
      charPinyin: 'zài',
      charMeaning: 'Tại (Ở, tồn tại, đang)',
      radical: '土 (bộ Thổ - đất đai)',
      strokeCount: 6,
      tips: 'Con người sinh sống trên mặt đất (土) biểu thị sự tồn tại (在).',
      compositionTask: {
        prompt: 'Dịch câu: "Tôi ở trường học"',
        expectedKeywords: ['我在', '学校'],
        sampleSolution: '我在学校 (Wǒ zài xuéxiào)',
      },
    },
    matchingWords: [
      { id: 'w5_1', hanzi: '上面', pinyin: 'shàngmian', vi: 'Phía trên' },
      { id: 'w5_2', hanzi: '下面', pinyin: 'xiàmian', vi: 'Phía dưới' },
      { id: 'w5_3', hanzi: '前面', pinyin: 'qiánmian', vi: 'Phía trước' },
      { id: 'w5_4', hanzi: '后面', pinyin: 'hòumian', vi: 'Phía sau' },
      { id: 'w5_5', hanzi: '洗手间', pinyin: 'xǐshǒujiān', vi: 'Nhà vệ sinh' },
      { id: 'w5_6', hanzi: '学校', pinyin: 'xuéxiào', vi: 'Trường học' },
    ],
  },

  // ==========================================
  // CHẶNG 2: HSK 2 - GIAO TIẾP HÀNG NGÀY
  // ==========================================
  {
    id: 'hsk2-lesson6',
    level: 'HSK 2',
    title: 'Bài 6: Nhà hàng, Ăn uống & Kỹ năng gọi món (餐馆点餐与美食)',
    description: 'Cách gọi món, yêu cầu hóa đơn thanh toán và các món ăn Trung Hoa nổi tiếng.',
    category: 'Giao tiếp HSK 2',
    vocabularies: [
      { id: 'v6_1', hanzi: '菜单', pinyin: 'càidān', hv: 'Thái Đơn', vi: 'Thực đơn', type: 'Danh từ', exampleZh: '服务员，请给我们菜单。', examplePinyin: 'Fúwùyuán, qǐng gěi wǒmen càidān.', exampleVi: 'Phục vụ ơi, cho chúng tôi xem thực đơn.' },
      { id: 'v6_2', hanzi: '点菜', pinyin: 'diǎncài', hv: 'Điểm Thái', vi: 'Gọi món', type: 'Động từ', exampleZh: '您想点什么菜？', examplePinyin: 'Nín xiǎng diǎn shénme cài?', exampleVi: 'Quý khách muốn gọi món gì ạ?' },
      { id: 'v6_3', hanzi: '服务员', pinyin: 'fúwùyuán', hv: 'Phục Vụ Viên', vi: 'Nhân viên phục vụ', type: 'Nghề nghiệp', exampleZh: '这家店的服务员很热情。', examplePinyin: 'Zhè jiā diàn de fúwùyuán hěn rèqíng.', exampleVi: 'Phục vụ quán này rất nhiệt tình.' },
      { id: 'v6_4', hanzi: '米饭', pinyin: 'mǐfàn', hv: 'Mễ Phạn', vi: 'Cơm trắng', type: 'Ẩm thực', exampleZh: '我们要两碗米饭。', examplePinyin: 'Wǒmen yào liǎng wǎn mǐfàn.', exampleVi: 'Chúng tôi lấy hai bát cơm trắng.' },
      { id: 'v6_5', hanzi: '好吃', pinyin: 'hǎochī', hv: 'Hảo Ngật', vi: 'Ngon miệng', type: 'Tính từ', exampleZh: '这道烤鸭非常好吃。', examplePinyin: 'Zhè dào kǎoyā fēicháng hǎochī.', exampleVi: 'Món vịt quay này cực kỳ ngon.' },
      { id: 'v6_6', hanzi: '买单', pinyin: 'mǎidān', hv: 'Mãi Đơn', vi: 'Tính tiền, thanh toán', type: 'Động từ', exampleZh: '服务员，请买单！', examplePinyin: 'Fúwùyuán, qǐng mǎidān!', exampleVi: 'Phục vụ ơi, tính tiền giúp tôi!' },
      { id: 'v6_7', hanzi: '打包', pinyin: 'dǎbāo', hv: 'Đả Bao', vi: 'Gói mang về', type: 'Động từ', exampleZh: '吃不完，请帮我打包。', examplePinyin: 'Chī bù wán, qǐng bāng wǒ dǎbāo.', exampleVi: 'Ăn không hết, gói mang về giúp tôi.' },
      { id: 'v6_8', hanzi: '微辣', pinyin: 'wēilà', hv: 'Vi Lạt', vi: 'Cay nhẹ', type: 'Hương vị', exampleZh: '请少放辣椒，我们要微辣。', examplePinyin: 'Qǐng shǎo fàng làjiāo, wǒmen yào wēilà.', exampleVi: 'Xin cho ít ớt thôi, chúng tôi ăn cay nhẹ.' },
    ],
    grammarPoints: [
      {
        title: '1. Cấu trúc yêu cầu lịch sự với "我们要..." / "我想..."',
        pattern: '我们要 + Số từ + Lượng từ + Tên món',
        explanation: 'Cách gọi món trang nhã, tự nhiên trong nhà hàng.',
        examples: [
          { zh: '我们要一份北京烤鸭。', pinyin: 'Wǒmen yào yī fèn Běijīng kǎoyā.', vi: 'Chúng tôi muốn 1 phần vịt quay Bắc Kinh.' },
          { zh: '我想喝一杯温开水。', pinyin: 'Wǒ xiǎng hē yībēi wēn kāishuǐ.', vi: 'Tôi muốn uống một cốc nước ấm.' },
        ],
      },
      {
        title: '2. Lượng từ cho đồ ăn thức uống: 碗 (bát), 杯 (cốc/ly), 份 (phần/suất)',
        pattern: 'Số từ + 碗 / 杯 / 份 + Danh từ',
        explanation: 'Mỗi món ăn đi liền với lượng từ phù hợp.',
        examples: [
          { zh: '两碗米饭', pinyin: 'Liǎng wǎn mǐfàn', vi: 'Hai bát cơm' },
          { zh: '一杯咖啡', pinyin: 'Yī bēi kāfēi', vi: 'Một ly cà phê' },
        ],
      },
    ],
    reading: {
      title: '在餐馆吃中国菜 (Ăn món Trung Quốc tại quán)',
      tokens: [
        { hanzi: '服务员：', isSpeaker: true },
        { hanzi: '欢迎光临', pinyin: 'huānyíng guānglín', vi: 'Kính chào quý khách', hv: 'Hoan Nghênh Quang Lâm' },
        { hanzi: '！这是', pinyin: 'zhè shì', vi: 'Đây là', hv: 'Giá Thị' },
        { hanzi: '菜单', pinyin: 'càidān', vi: 'Thực đơn', hv: 'Thái Đơn' },
        { hanzi: '，请点菜', pinyin: 'qǐng diǎncài', vi: 'Xin mời gọi món', hv: 'Thỉnh Điểm Thái' },
        { hanzi: '。' },
      ],
      translationVi: 'Phục vụ: Kính chào quý khách! Đây là thực đơn của nhà hàng, xin mời quý khách chọn món.',
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
        { id: 0, speaker: 'David', hanzi: '我们要一份烤鸭和两碗米饭。', pinyin: 'Wǒmen yào yī fèn kǎoyā hé liǎng wǎn mǐfàn.', vi: 'Chúng tôi muốn 1 phần vịt quay và 2 bát cơm.' },
        { id: 1, speaker: 'Phục vụ', hanzi: '好的，请问喝什么饮料？', pinyin: 'Hǎo de, qǐngwèn hē shénme yǐnliào?', vi: 'Vâng, xin hỏi quý khách uống nước gì ạ?' },
      ],
      quiz: {
        sentencePrefix: '我们要',
        missingWord: '一份',
        sentenceSuffix: '北京烤鸭。',
        hint: 'yī fèn (một phần)',
      },
    },
    speaking: {
      targetHanzi: '服务员我想点菜',
      targetPinyin: 'Fúwùyuán wǒ xiǎng diǎncài',
      vietnameseMeaning: 'Phục vụ ơi tôi muốn gọi món',
      sentences: [
        { hanzi: '服务员，请给我们看菜单。', pinyin: 'Fúwùyuán, qǐng gěi wǒmen kàn càidān.', vi: 'Phục vụ ơi, cho chúng tôi xem thực đơn.' },
        { hanzi: '我们要一份宫保鸡丁和两碗米饭。', pinyin: 'Wǒmen yào yī fèn gōngbǎo jīdīng hé liǎng wǎn mǐfàn.', vi: 'Chúng tôi lấy 1 phần gà Kung Pao và 2 bát cơm.' },
        { hanzi: '服务员，请帮我们买单！', pinyin: 'Fúwùyuán, qǐng bāng wǒmen mǎidān!', vi: 'Phục vụ ơi, tính tiền giúp chúng tôi nhé!' },
      ],
    },
    writing: {
      targetChar: '食',
      charPinyin: 'shí',
      charMeaning: 'Thực (Ăn, đồ ăn, thực phẩm)',
      radical: '人 + 良',
      strokeCount: 9,
      tips: 'Con người (人) ăn thức ăn tốt lành (良) là nguồn gốc của chữ Thực (食).',
      compositionTask: {
        prompt: 'Dịch câu: "Món ăn Trung Quốc rất ngon"',
        expectedKeywords: ['中国菜', '很好吃'],
        sampleSolution: '中国菜很好吃 (Zhōngguó cài hěn hǎochī)',
      },
    },
    matchingWords: [
      { id: 'w6_1', hanzi: '菜单', pinyin: 'càidān', vi: 'Thực đơn' },
      { id: 'w6_2', hanzi: '服务员', pinyin: 'fúwùyuán', vi: 'Phục vụ' },
      { id: 'w6_3', hanzi: '点菜', pinyin: 'diǎncài', vi: 'Gọi món' },
      { id: 'w6_4', hanzi: '买单', pinyin: 'mǎidān', vi: 'Tính tiền' },
      { id: 'w6_5', hanzi: '好吃', pinyin: 'hǎochī', vi: 'Ngon miệng' },
      { id: 'w6_6', hanzi: '米饭', pinyin: 'mǐfàn', vi: 'Cơm' },
    ],
  },

  {
    id: 'hsk2-lesson7',
    level: 'HSK 2',
    title: 'Bài 7: Thời tiết, Khí hậu & Bốn mùa (天气与四季气候)',
    description: 'Miêu tả nhiệt độ nóng lạnh, dự báo thời tiết mưa nắng và bốn mùa Xuân Hạ Thu Đông.',
    category: 'Giao tiếp HSK 2',
    vocabularies: [
      { id: 'v7_1', hanzi: '天气', pinyin: 'tiānqì', hv: 'Thiên Khí', vi: 'Thời tiết', type: 'Danh từ', exampleZh: '今天北京天气很好。', examplePinyin: 'Jīntiān Běijīng tiānqì hěn hǎo.', exampleVi: 'Hôm nay thời tiết Bắc Kinh rất đẹp.' },
      { id: 'v7_2', hanzi: '晴天', pinyin: 'qíngtiān', hv: 'Tình Thiên', vi: 'Trời nắng', type: 'Thời tiết', exampleZh: '明天是大晴天。', examplePinyin: 'Míngtiān shì dà qíngtiān.', exampleVi: 'Ngày mai là một ngày nắng to.' },
      { id: 'v7_3', hanzi: '下雨', pinyin: 'xià yǔ', hv: 'Hạ Vũ', vi: 'Trời mưa', type: 'Động từ', exampleZh: '外面正在下大雨。', examplePinyin: 'Wàimiàn zhèngzài xià dàyǔ.', exampleVi: 'Bên ngoài đang mưa to.' },
      { id: 'v7_4', hanzi: '冷', pinyin: 'lěng', hv: 'Lãnh', vi: 'Lạnh giá', type: 'Tính từ', exampleZh: '冬天很冷，多穿点衣服。', examplePinyin: 'Dōngtiān hěn lěng, duō chuān diǎn yīfu.', exampleVi: 'Mùa đông rất lạnh, mặc nhiều áo vào.' },
      { id: 'v7_5', hanzi: '热', pinyin: 'rè', hv: 'Nhiệt', vi: 'Nóng nực', type: 'Tính từ', exampleZh: '夏天天气非常热。', examplePinyin: 'Xiàtiān tiānqì fēicháng rè.', exampleVi: 'Mùa hè thời tiết vô cùng nóng.' },
      { id: 'v7_6', hanzi: '秋天', pinyin: 'qiūtiān', hv: 'Thu Thiên', vi: 'Mùa thu', type: 'Thời tiết', exampleZh: '秋天的天气不冷也不热。', examplePinyin: 'Qiūtiān de tiānqì bù lěng yě bù rè.', exampleVi: 'Thời tiết mùa thu không lạnh cũng chẳng nóng.' },
      { id: 'v7_7', hanzi: '最', pinyin: 'zuì', hv: 'Tối', vi: 'Nhất (so sánh bậc nhất)', type: 'Phó từ', exampleZh: '北京秋天最美丽。', examplePinyin: 'Běijīng qiūtiān zuì měilì.', exampleVi: 'Mùa thu Bắc Kinh là đẹp nhất.' },
      { id: 'v7_8', hanzi: '怎么样', pinyin: 'zěnmeyàng', hv: 'Chẩm Ma Dạng', vi: 'Thế nào, ra sao', type: 'Nghi vấn', exampleZh: '明天天气怎么样？', examplePinyin: 'Míngtiān tiānqì zěnmeyàng?', exampleVi: 'Ngày mai thời tiết thế nào?' },
    ],
    grammarPoints: [
      {
        title: '1. Cấu trúc kết hợp "不...也不..." (Không... cũng không...)',
        pattern: '不 + Tính từ 1 + 也不 + Tính từ 2',
        explanation: 'Diễn tả trạng thái cân bằng hoặc trung hòa.',
        examples: [
          { zh: '不冷也不热。', pinyin: 'Bù lěng yě bù rè.', vi: 'Không lạnh cũng chẳng nóng.' },
          { zh: '不大也不小。', pinyin: 'Bù dà yě bù xiǎo.', vi: 'Không to cũng không nhỏ, vừa vặn.' },
        ],
      },
      {
        title: '2. Phó từ so sánh bậc nhất "最" (zuì - Nhất)',
        pattern: '最 + Tính từ / Động từ tâm lý',
        explanation: 'Biểu thị mức độ cao nhất.',
        examples: [
          { zh: '我最喜欢秋天。', pinyin: 'Wǒ zuì xǐhuan qiūtiān.', vi: 'Tôi thích mùa thu nhất.' },
          { zh: '今天最冷。', pinyin: 'Jīntiān zuì lěng.', vi: 'Hôm nay là ngày lạnh nhất.' },
        ],
      },
    ],
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
        { id: 0, speaker: 'Dự báo', hanzi: '明天是晴天，不冷也不热。', pinyin: 'Míngtiān shì qíngtiān, bù lěng yě bù rè.', vi: 'Ngày mai trời nắng ráo, không lạnh không nóng.' },
        { id: 1, speaker: 'David', hanzi: '太好了，我们一起去公园散步吧！', pinyin: 'Tài hǎo le, wǒmen yīqǐ qù gōngyuán sànbù ba!', vi: 'Tuyệt quá, chúng mình cùng đi dạo công viên nhé!' },
      ],
      quiz: {
        sentencePrefix: '明天是',
        missingWord: '晴天',
        sentenceSuffix: '。',
        hint: 'qíngtiān (trời nắng)',
      },
    },
    speaking: {
      targetHanzi: '今天天气非常晴朗',
      targetPinyin: 'Jīntiān tiānqì fēicháng qínglǎng',
      vietnameseMeaning: 'Hôm nay trời rất nắng đẹp',
      sentences: [
        { hanzi: '明天天气怎么样？会下雨吗？', pinyin: 'Míngtiān tiānqì zěnmeyàng? Huì xiàyǔ ma?', vi: 'Ngày mai thời tiết thế nào? Có mưa không?' },
        { hanzi: '明天不会下雨，是个大晴天。', pinyin: 'Míngtiān bù huì xiàyǔ, shì gè dà qíngtiān.', vi: 'Ngày mai không mưa, là một ngày nắng đẹp.' },
      ],
    },
    writing: {
      targetChar: '雨',
      charPinyin: 'yǔ',
      charMeaning: 'Vũ (Mưa)',
      radical: '雨 (Độc thể tự)',
      strokeCount: 8,
      tips: 'Phía trên là bầu trời mây giăng, phía dưới có 4 hạt mưa rơi rơi.',
      compositionTask: {
        prompt: 'Dịch câu: "Bên ngoài đang mưa to"',
        expectedKeywords: ['外面', '下', '大雨'],
        sampleSolution: '外面在下大雨 (Wàimiàn zài xià dàyǔ)',
      },
    },
    matchingWords: [
      { id: 'w7_1', hanzi: '天气', pinyin: 'tiānqì', vi: 'Thời tiết' },
      { id: 'w7_2', hanzi: '晴天', pinyin: 'qíngtiān', vi: 'Trời nắng' },
      { id: 'w7_3', hanzi: '下雨', pinyin: 'xià yǔ', vi: 'Trời mưa' },
      { id: 'w7_4', hanzi: '很冷', pinyin: 'hěn lěng', vi: 'Rất lạnh' },
      { id: 'w7_5', hanzi: '很热', pinyin: 'hěn rè', vi: 'Rất nóng' },
      { id: 'w7_6', hanzi: '秋天', pinyin: 'qiūtiān', vi: 'Mùa thu' },
    ],
  },

  {
    id: 'hsk2-lesson8',
    level: 'HSK 2',
    title: 'Bài 8: Đi lại, Tàu điện ngầm & Taxi (交通出行与乘坐地铁)',
    description: 'Cách hỏi đường đi ga tàu điện ngầm, bắt xe taxi và yêu cầu tài xế bật đồng hồ tính cước.',
    category: 'Giao tiếp HSK 2',
    vocabularies: [
      { id: 'v8_1', hanzi: '地铁', pinyin: 'dìtiě', hv: 'Địa Thiết', vi: 'Tàu điện ngầm', type: 'Giao thông', exampleZh: '坐地铁上班很方便。', examplePinyin: 'Zuò dìtiě shàngbān hěn fāngbiàn.', exampleVi: 'Đi tàu điện ngầm đi làm rất tiện lợi.' },
      { id: 'v8_2', hanzi: '火车站', pinyin: 'huǒchēzhàn', hv: 'Hỏa Xa Trạm', vi: 'Ga tàu hỏa', type: 'Địa điểm', exampleZh: '请问去火车站怎么走？', examplePinyin: 'Qǐngwèn qù huǒchēzhàn zěnme zǒu?', exampleVi: 'Xin hỏi đi ga tàu hỏa đi thế nào?' },
      { id: 'v8_3', hanzi: '出租车', pinyin: 'chūzūchē', hv: 'Xuất Tô Xa', vi: 'Xe taxi', type: 'Giao thông', exampleZh: '我们坐出租车去机场吧。', examplePinyin: 'Wǒmen zuò chūzūchē qù jīchǎng ba.', exampleVi: 'Chúng ta đi taxi ra sân bay nhé.' },
      { id: 'v8_4', hanzi: '师傅', pinyin: 'shīfu', hv: 'Sư Phụ', vi: 'Bác tài, chú lái xe', type: 'Xưng hô', exampleZh: '师傅，请去北京饭店。', examplePinyin: 'Shīfu, qǐng qù Běijīng Fàndiàn.', exampleVi: 'Bác tài ơi, đến khách sạn Bắc Kinh giúp tôi.' },
      { id: 'v8_5', hanzi: '打表', pinyin: 'dǎbiǎo', hv: 'Đả Biểu', vi: 'Bật đồng hồ tính cước', type: 'Động từ', exampleZh: '师傅，请打表。', examplePinyin: 'Shīfu, qǐng dǎbiǎo.', exampleVi: 'Bác tài ơi, vui lòng bấm đồng hồ tính tiền nhé.' },
      { id: 'v8_6', hanzi: '左拐', pinyin: 'zuǒ guǎi', hv: 'Tả Quải', vi: 'Rẽ trái', type: 'Phương hướng', exampleZh: '到十字路口往左拐。', examplePinyin: 'Dào shízì lùkǒu wǎng zuǒ guǎi.', exampleVi: 'Đến ngã tư thì rẽ trái.' },
      { id: 'v8_7', hanzi: '右拐', pinyin: 'yòu guǎi', hv: 'Hữu Quải', vi: 'Rẽ phải', type: 'Phương hướng', exampleZh: '前面往前走，往右拐。', examplePinyin: 'Qiánmian wǎng qián zǒu, wǎng yòu guǎi.', exampleVi: 'Phía trước đi thẳng rồi rẽ phải.' },
      { id: 'v8_8', hanzi: '一直', pinyin: 'yīzhí', hv: 'Nhất Trực', vi: 'Thẳng, liên tục', type: 'Phó từ', exampleZh: '一直往前走。', examplePinyin: 'Yīzhí wǎng qián zǒu.', exampleVi: 'Cứ đi thẳng mãi về phía trước.' },
    ],
    grammarPoints: [
      {
        title: '1. Cấu trúc chỉ đường: "往 + Hướng + Động từ (走/拐)"',
        pattern: '往 + 前 / 左 / 右 + 走 / 拐',
        explanation: 'Dùng "往" (wǎng) để chỉ phương hướng hành động.',
        examples: [
          { zh: '一直往前走。', pinyin: 'Yīzhí wǎng qián zǒu.', vi: 'Đi thẳng về phía trước.' },
          { zh: '在路口往右拐。', pinyin: 'Zài lùkǒu wǎng yòu guǎi.', vi: 'Rẽ phải ở ngã rẽ.' },
        ],
      },
      {
        title: '2. Động từ phương tiện "坐" (zuò - Ngồi/Đi xe tàu)',
        pattern: '坐 + Tên phương tiện + 去 + Nơi chốn',
        explanation: 'Biểu thị phương thức di chuyển.',
        examples: [
          { zh: '坐地铁去学校。', pinyin: 'Zuò dìtiě qù xuéxiào.', vi: 'Đi tàu điện ngầm đến trường.' },
          { zh: '坐飞机去上海。', pinyin: 'Zuò fēijī qù Shànghǎi.', vi: 'Đi máy bay đến Thượng Hải.' },
        ],
      },
    ],
    reading: {
      title: '请问去火车站怎么走？',
      tokens: [
        { hanzi: '旅客：', isSpeaker: true },
        { hanzi: '请问', pinyin: 'qǐngwèn', vi: 'Xin hỏi', hv: 'Thỉnh Vấn' },
        { hanzi: '去', pinyin: 'qù', vi: 'Đi', hv: 'Khứ' },
        { hanzi: '火车站', pinyin: 'huǒchēzhàn', vi: 'Ga tàu', hv: 'Hỏa Xa Trạm' },
        { hanzi: '怎么走', pinyin: 'zěnme zǒu', vi: 'Đi như thế nào', hv: 'Chẩm Ma Tẩu' },
        { hanzi: '？' },
        { hanzi: '路人：', isSpeaker: true },
        { hanzi: '你可以', pinyin: 'nǐ kěyǐ', vi: 'Bạn có thể', hv: 'Nhĩ Khả Dĩ' },
        { hanzi: '坐', pinyin: 'zuò', vi: 'Đi', hv: 'Tọa' },
        { hanzi: '地铁', pinyin: 'dìtiě', vi: 'Tàu điện ngầm', hv: 'Địa Thiết' },
        { hanzi: '二号线', pinyin: 'èr hào xiàn', vi: 'Tuyến số 2', hv: 'Nhị Hào Tuyến' },
        { hanzi: '。' },
      ],
      translationVi: 'Hành khách: Xin hỏi đi đến ga tàu hỏa đi như thế nào?\nNgười qua đường: Bạn có thể đi tàu điện ngầm tuyến số 2 nhé.',
      quiz: {
        question: 'Hành khách muốn đi đến địa điểm nào?',
        options: [
          { text: 'A. 火车站 (Ga tàu hỏa)', correct: true },
          { text: 'B. 飞机场 (Sân bay)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, speaker: 'Khách', hanzi: '师傅，去北京饭店，请打表。', pinyin: 'Shīfu, qù Běijīng Fàndiàn, qǐng dǎbiǎo.', vi: 'Bác tài, đi khách sạn Bắc Kinh, vui lòng bật đồng hồ tính cước.' },
        { id: 1, speaker: 'Tài xế', hanzi: '好的，请系好安全带。', pinyin: 'Hǎo de, qǐng jì hǎo ānquándài.', vi: 'Vâng, xin vui lòng thắt dây an toàn.' },
      ],
      quiz: {
        sentencePrefix: '师傅，去北京饭店，请',
        missingWord: '打表',
        sentenceSuffix: '。',
        hint: 'dǎbiǎo (bật đồng hồ cước)',
      },
    },
    speaking: {
      targetHanzi: '请问去最近的地铁站怎么走',
      targetPinyin: 'Qǐngwèn qù zuì jìn de dìtiězhàn zěnme zǒu',
      vietnameseMeaning: 'Xin hỏi đến ga tàu điện ngầm gần nhất đi như thế nào?',
      sentences: [
        { hanzi: '请问，火车站怎么走？', pinyin: 'Qǐngwèn, huǒchēzhàn zěnme zǒu?', vi: 'Xin hỏi, đi đến ga tàu hỏa thế nào?' },
        { hanzi: '一直往前走，在十字路口往左拐。', pinyin: 'Yīzhí wǎng qián zǒu, zài shízì lùkǒu wǎng zuǒ guǎi.', vi: 'Đi thẳng mãi về phía trước, ở ngã tư rẽ trái.' },
      ],
    },
    writing: {
      targetChar: '车',
      charPinyin: 'chē',
      charMeaning: 'Xa (Xe cộ, phương tiện)',
      radical: '车 (Độc thể tự)',
      strokeCount: 4,
      tips: 'Hình dáng chiếc xe ngựa nhìn từ trên xuống gồm trục xe và hai bánh xe.',
      compositionTask: {
        prompt: 'Dịch câu: "Tôi đi tàu điện ngầm đi làm"',
        expectedKeywords: ['我', '坐地铁', '上班'],
        sampleSolution: '我坐地铁去上班 (Wǒ zuò dìtiě qù shàngbān)',
      },
    },
    matchingWords: [
      { id: 'w8_1', hanzi: '地铁', pinyin: 'dìtiě', vi: 'Tàu điện ngầm' },
      { id: 'w8_2', hanzi: '出租车', pinyin: 'chūzūchē', vi: 'Xe taxi' },
      { id: 'w8_3', hanzi: '火车站', pinyin: 'huǒchēzhàn', vi: 'Ga tàu' },
      { id: 'w8_4', hanzi: '左拐', pinyin: 'zuǒ guǎi', vi: 'Rẽ trái' },
      { id: 'w8_5', hanzi: '右拐', pinyin: 'yòu guǎi', vi: 'Rẽ phải' },
      { id: 'w8_6', hanzi: '一直', pinyin: 'yīzhí', vi: 'Đi thẳng' },
    ],
  },

  {
    id: 'hsk2-lesson9',
    level: 'HSK 2',
    title: 'Bài 9: Sở thích, Thể thao & Giải trí cuối tuần (爱好与周末休闲)',
    description: 'Học cách nói về sở thích cá nhân: bơi lội, đá bóng, nghe nhạc và hẹn bạn bè xem phim.',
    category: 'Giao tiếp HSK 2',
    vocabularies: [
      { id: 'v9_1', hanzi: '爱好', pinyin: 'àihào', hv: 'Ái Hảo', vi: 'Sở thích', type: 'Danh từ', exampleZh: '你的业余爱好是什么？', examplePinyin: 'Nǐ de yèyú àihào shì shénme?', exampleVi: 'Sở thích lúc rảnh của bạn là gì?' },
      { id: 'v9_2', hanzi: '游泳', pinyin: 'yóuyǒng', hv: 'Du Vịnh', vi: 'Bơi lội', type: 'Thể thao', exampleZh: '夏天我经常去游泳。', examplePinyin: 'Xiàtiān wǒ jīngcháng qù yóuyǒng.', exampleVi: 'Mùa hè tôi thường xuyên đi bơi.' },
      { id: 'v9_3', hanzi: '踢足球', pinyin: 'tī zúqiú', hv: 'Thích Túc Cầu', vi: 'Đá bóng đá', type: 'Thể thao', exampleZh: '周末我们一起踢足球吧。', examplePinyin: 'Zhōumò wǒmen yīqǐ tī zúqiú ba.', exampleVi: 'Cuối tuần chúng mình cùng đi đá bóng nhé.' },
      { id: 'v9_4', hanzi: '听音乐', pinyin: 'tīng yīnyuè', hv: 'Thính Âm Nhạc', vi: 'Nghe âm nhạc', type: 'Giải trí', exampleZh: '睡前听音乐能放松心情。', examplePinyin: 'Shuì qián tīng yīnyuè néng fàngsōng xīnqíng.', exampleVi: 'Nghe nhạc trước khi ngủ giúp thư thái tâm trạng.' },
      { id: 'v9_5', hanzi: '周末', pinyin: 'zhōumò', hv: 'Chu Mạt', vi: 'Cuối tuần', type: 'Thời gian', exampleZh: '祝你周末愉快！', examplePinyin: 'Zhù nǐ zhōumò yúkuài!', exampleVi: 'Chúc bạn cuối tuần vui vẻ!' },
      { id: 'v9_6', hanzi: '电影', pinyin: 'diànyǐng', hv: 'Điện Ảnh', vi: 'Phim ảnh', type: 'Giải trí', exampleZh: '晚上我们去看电影好吗？', examplePinyin: 'Wǎnshang wǒmen qù kàn diànyǐng hǎo ma?', exampleVi: 'Tối nay chúng mình đi xem phim được không?' },
      { id: 'v9_7', hanzi: '非常', pinyin: 'fēicháng', hv: 'Phi Thường', vi: 'Cực kỳ, vô cùng', type: 'Phó từ', exampleZh: '我非常喜欢中国书法。', examplePinyin: 'Wǒ fēicháng xǐhuan Zhōngguó shūfǎ.', exampleVi: 'Tôi cực kỳ thích thư pháp Trung Quốc.' },
      { id: 'v9_8', hanzi: '一起', pinyin: 'yīqǐ', hv: 'Nhất Khởi', vi: 'Cùng nhau', type: 'Phó từ', exampleZh: '我们一起走吧！', examplePinyin: 'Wǒmen yīqǐ zǒu ba!', exampleVi: 'Chúng mình cùng đi nào!' },
    ],
    grammarPoints: [
      {
        title: '1. Cấu trúc rủ rê thân mật "...吧 (ba)?"',
        pattern: 'Chúng ta (我们) + 一起 + Động từ + 吧！',
        explanation: 'Trợ từ ngữ khí "吧" ở cuối câu dùng để đưa ra lời đề nghị, rủ rê nhẹ nhàng.',
        examples: [
          { zh: '我们一起去看电影吧！', pinyin: 'Wǒmen yīqǐ qù kàn diànyǐng ba!', vi: 'Chúng mình cùng đi xem phim đi!' },
          { zh: '喝杯咖啡吧！', pinyin: 'Hē bēi kāfēi ba!', vi: 'Uống ly cà phê nhé!' },
        ],
      },
      {
        title: '2. Mẫu câu diễn đạt sở thích: "喜欢 + Động từ / Danh từ"',
        pattern: 'Chủ ngữ + 喜欢 + Sở thích',
        examples: [
          { zh: '他喜欢游泳和打篮球。', pinyin: 'Tā xǐhuan yóuyǒng hé dǎ lánqiú.', vi: 'Anh ấy thích bơi lội và chơi bóng rổ.' },
          { zh: '我非常喜欢听中国流行音乐。', pinyin: 'Wǒ fēicháng xǐhuan tīng Zhōngguó liúxíng yīnyuè.', vi: 'Tôi rất thích nghe nhạc trẻ Trung Quốc.' },
        ],
      },
    ],
    reading: {
      title: '周末的爱好 (Sở thích vào ngày cuối tuần)',
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
        question: 'Anna thích làm hoạt động nào vào cuối tuần?',
        options: [
          { text: 'A. 游泳和听音乐 (Bơi lội và nghe nhạc)', correct: true },
          { text: 'B. 踢足球 (Đá bóng)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, speaker: 'Tiểu Minh', hanzi: '这个星期六晚上有足球比赛，我们一起去看吧。', pinyin: 'Zhè gè xīngqīliù wǎnshàng yǒu zúqiú bǐsài, wǒmen yīqǐ qù kàn ba.', vi: 'Tối thứ Bảy có trận bóng đá, chúng mình cùng đi xem nhé.' },
        { id: 1, speaker: 'Anna', hanzi: '太好了，我一定去！', pinyin: 'Tài hǎo le, wǒ yídìng qù!', vi: 'Tuyệt quá, mình nhất định sẽ đi!' },
      ],
      quiz: {
        sentencePrefix: '这个星期六晚上有',
        missingWord: '足球比赛',
        sentenceSuffix: '。',
        hint: 'zúqiú bǐsài (trận bóng đá)',
      },
    },
    speaking: {
      targetHanzi: '我平时喜欢运动和听流行音乐',
      targetPinyin: 'Wǒ píngshí xǐhuan yùndòng hé tīng liúxíng yīnyuè',
      vietnameseMeaning: 'Bình thường tôi thích rèn luyện thể thao và nghe nhạc thịnh hành',
      sentences: [
        { hanzi: '你周末有什么爱好？', pinyin: 'Nǐ zhōumò yǒu shénme àihào?', vi: 'Cuối tuần bạn có sở thích gì?' },
        { hanzi: '我喜欢和朋友一起游泳。', pinyin: 'Wǒ xǐhuan hé péngyou yīqǐ yóuyǒng.', vi: 'Tôi thích cùng bạn bè đi bơi lội.' },
      ],
    },
    writing: {
      targetChar: '乐',
      charPinyin: 'yuè / lè',
      charMeaning: 'Nhạc (Âm nhạc) / Lạc (Vui vẻ)',
      radical: '丿 + 白 + 木 (Độc thể tự)',
      strokeCount: 5,
      tips: 'Đa âm tự: Trong 音乐 đọc là "yuè" (Âm nhạc), trong 快乐 đọc là "lè" (Vui vẻ).',
      compositionTask: {
        prompt: 'Dịch câu: "Cuối tuần tôi thích bơi lội"',
        expectedKeywords: ['周末', '我喜欢', '游泳'],
        sampleSolution: '周末我喜欢游泳 (Zhōumò wǒ xǐhuan yóuyǒng)',
      },
    },
    matchingWords: [
      { id: 'w9_1', hanzi: '爱好', pinyin: 'àihào', vi: 'Sở thích' },
      { id: 'w9_2', hanzi: '游泳', pinyin: 'yóuyǒng', vi: 'Bơi lội' },
      { id: 'w9_3', hanzi: '音乐', pinyin: 'yīnyuè', vi: 'Âm nhạc' },
      { id: 'w9_4', hanzi: '电影', pinyin: 'diànyǐng', vi: 'Phim ảnh' },
      { id: 'w9_5', hanzi: '周末', pinyin: 'zhōumò', vi: 'Cuối tuần' },
      { id: 'w9_6', hanzi: '一起', pinyin: 'yīqǐ', vi: 'Cùng nhau' },
    ],
  },

  {
    id: 'hsk2-lesson10',
    level: 'HSK 2',
    title: 'Bài 10: Sức khỏe, Triệu chứng bệnh & Khám bác sĩ (身体健康与看病)',
    description: 'Miêu tả các triệu chứng đau đầu, sốt, cảm cúm và hiểu lời khuyên của bác sĩ.',
    category: 'Giao tiếp HSK 2',
    vocabularies: [
      { id: 'v10_1', hanzi: '生病', pinyin: 'shēngbìng', hv: 'Sinh Bệnh', vi: 'Bị ốm, mắc bệnh', type: 'Động từ', exampleZh: '他生病了，今天没来上班。', examplePinyin: 'Tā shēngbìng le, jīntiān méi lái shàngbān.', exampleVi: 'Anh ấy bị ốm rồi, hôm nay không đi làm.' },
      { id: 'v10_2', hanzi: '发烧', pinyin: 'fāshāo', hv: 'Phát Thiêu', vi: 'Phát sốt', type: 'Động từ', exampleZh: '孩子昨晚有点儿发烧。', examplePinyin: 'Háizi zuówǎn yǒudiǎnr fāshāo.', exampleVi: 'Đứa bé tối qua hơi bị sốt.' },
      { id: 'v10_3', hanzi: '头疼', pinyin: 'tóuténg', hv: 'Đầu Thống', vi: 'Đau đầu', type: 'Triệu chứng', exampleZh: '我感觉头很疼。', examplePinyin: 'Wǒ gǎnjué tóu hěn téng.', exampleVi: 'Tôi cảm thấy đầu rất đau.' },
      { id: 'v10_4', hanzi: '吃药', pinyin: 'chī yào', hv: 'Ngật Dược', vi: 'Uống thuốc', type: 'Động từ', exampleZh: '记得按时吃药。', examplePinyin: 'Jìde ànshí chī yào.', exampleVi: 'Hãy nhớ uống thuốc đúng giờ.' },
      { id: 'v10_5', hanzi: '医院', pinyin: 'yīyuàn', hv: 'Y Viện', vi: 'Bệnh viện', type: 'Địa điểm', exampleZh: '我带你去市立医院看看。', examplePinyin: 'Wǒ dài nǐ qù shìlì yīyuàn kànkan.', exampleVi: 'Tôi đưa bạn đến bệnh viện thành phố khám xem sao.' },
      { id: 'v10_6', hanzi: '休息', pinyin: 'xiūxi', hv: 'Hưu Tức', vi: 'Nghỉ ngơi', type: 'Hành động', exampleZh: '多喝水，好好休息。', examplePinyin: 'Duō hē shuǐ, hǎohāo xiūxi.', exampleVi: 'Uống nhiều nước và nghỉ ngơi cho tốt.' },
      { id: 'v10_7', hanzi: '身体', pinyin: 'shēntǐ', hv: 'Thân Thể', vi: 'Thân thể, sức khỏe', type: 'Danh từ', exampleZh: '祝你身体健康！', examplePinyin: 'Zhù nǐ shēntǐ jiànkāng!', exampleVi: 'Chúc bạn sức khỏe dồi dào!' },
      { id: 'v10_8', hanzi: '舒服', pinyin: 'shūfu', hv: 'Thư Phục', vi: 'Dễ chịu, thoải mái', type: 'Tính từ', exampleZh: '我今天身体有点不舒服。', examplePinyin: 'Wǒ jīntiān shēntǐ yǒudiǎn bù shūfu.', exampleVi: 'Hôm nay cơ thể tôi thấy hơi khó chịu.' },
    ],
    grammarPoints: [
      {
        title: '1. Phó từ "有点儿" (yǒudiǎnr - Hơi, một chút) biểu thị sự không vừa ý',
        pattern: '有点儿 + Tính từ / Động từ tâm lý',
        explanation: 'Thường mang sắc thái tiêu cực hoặc bất tiện (hơi mệt, hơi đắt, hơi đau).',
        examples: [
          { zh: '我有点儿头疼。', pinyin: 'Wǒ yǒudiǎnr tóuténg.', vi: 'Tôi hơi bị đau đầu.' },
          { zh: '今天有点儿冷。', pinyin: 'Jīntiān yǒudiǎnr lěng.', vi: 'Hôm nay trời hơi lạnh.' },
        ],
      },
      {
        title: '2. Cấu trúc khuyên bảo "多 + Động từ" (Làm gì nhiều hơn)',
        pattern: '多 + Động từ (+ Tân ngữ)',
        explanation: 'Khuyên người khác nên tăng cường một hành động có lợi.',
        examples: [
          { zh: '多喝热水。', pinyin: 'Duō hē rèshuǐ.', vi: 'Uống nhiều nước ấm vào.' },
          { zh: '多休息。', pinyin: 'Duō xiūxi.', vi: 'Nghỉ ngơi nhiều hơn.' },
        ],
      },
    ],
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
        question: 'Bác sĩ dặn dò bệnh nhân điều gì?',
        options: [
          { text: 'A. 多喝水按时吃药 (Uống nhiều nước và uống thuốc đúng giờ)', correct: true },
          { text: 'B. 继续加班 (Tiếp tục làm thêm giờ)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, speaker: 'Bác sĩ', hanzi: '回去多喝水，按时吃药。', pinyin: 'Huíqù duō hē shuǐ, ànshí chī yào.', vi: 'Về uống nhiều nước, uống thuốc đúng giờ.' },
        { id: 1, speaker: 'Bệnh nhân', hanzi: '好的，谢谢医生！', pinyin: 'Hǎo de, xièxie yīshēng!', vi: 'Vâng ạ, cảm ơn bác sĩ!' },
      ],
      quiz: {
        sentencePrefix: '回去多喝水，按时',
        missingWord: '吃药',
        sentenceSuffix: '。',
        hint: 'chī yào (uống thuốc)',
      },
    },
    speaking: {
      targetHanzi: '身体健康最重要',
      targetPinyin: 'Shēntǐ jiànkāng zuì zhòngyào',
      vietnameseMeaning: 'Sức khỏe cơ thể là quan trọng nhất',
      sentences: [
        { hanzi: '我今天身体有点不舒服，头很疼。', pinyin: 'Wǒ jīntiān shēntǐ yǒudiǎn bù shūfu, tóu hěn téng.', vi: 'Hôm nay người tôi hơi khó chịu, đầu đau lắm.' },
        { hanzi: '你要按时吃药，好好休息。', pinyin: 'Nǐ yào ànshí chī yào, hǎohāo xiūxi.', vi: 'Bạn phải uống thuốc đúng giờ và nghỉ ngơi thật tốt.' },
      ],
    },
    writing: {
      targetChar: '医',
      charPinyin: 'yī',
      charMeaning: 'Y (Bác sĩ, Y tế, Bệnh viện)',
      radical: '匚 (bộ Phương - cái giỏ) + 矢 (mũi tên)',
      strokeCount: 7,
      tips: 'Thầy thuốc chữa vết thương bằng cách rút mũi tên (矢) và cất thuốc vào hòm (匚).',
      compositionTask: {
        prompt: 'Dịch câu: "Hôm nay tôi bị đau đầu"',
        expectedKeywords: ['今天', '我', '头疼'],
        sampleSolution: '今天我有点头疼 (Jīntiān wǒ yǒudiǎn tóuténg)',
      },
    },
    matchingWords: [
      { id: 'w10_1', hanzi: '生病', pinyin: 'shēngbìng', vi: 'Bị ốm' },
      { id: 'w10_2', hanzi: '发烧', pinyin: 'fāshāo', vi: 'Phát sốt' },
      { id: 'w10_3', hanzi: '头疼', pinyin: 'tóuténg', vi: 'Đau đầu' },
      { id: 'w10_4', hanzi: '吃药', pinyin: 'chī yào', vi: 'Uống thuốc' },
      { id: 'w10_5', hanzi: '医院', pinyin: 'yīyuàn', vi: 'Bệnh viện' },
      { id: 'w10_6', hanzi: '身体', pinyin: 'shēntǐ', vi: 'Sức khỏe' },
    ],
  },

  // ==========================================
  // CHẶNG 3: HSK 3 - LÀM CHỦ NGỮ CẢNH XÃ HỘI
  // ==========================================
  {
    id: 'hsk3-lesson11',
    level: 'HSK 3',
    title: 'Bài 11: Khách sạn, Du lịch & Dịch vụ lưu trú (酒店入住与旅行)',
    description: 'Thủ tục nhận phòng khách sạn, hỏi mật khẩu WiFi, đổi phòng và dịch vụ du lịch.',
    category: 'Trung cấp HSK 3',
    vocabularies: [
      { id: 'v11_1', hanzi: '酒店', pinyin: 'jiǔdiàn', hv: 'Tửu Điếm', vi: 'Khách sạn', type: 'Địa điểm', exampleZh: '这家五星级酒店服务很好。', examplePinyin: 'Zhè jiā wǔxīngjí jiǔdiàn fúwù hěn hǎo.', exampleVi: 'Khách sạn 5 sao này dịch vụ rất tốt.' },
      { id: 'v11_2', hanzi: '预订', pinyin: 'yùdìng', hv: 'Dự Đính', vi: 'Đặt trước', type: 'Động từ', exampleZh: '我在网上预订了一间单人间。', examplePinyin: 'Wǒ zài wǎngshang yùdìng le yī jiān dānrénjiān.', exampleVi: 'Tôi đã đặt một phòng đơn trên mạng.' },
      { id: 'v11_3', hanzi: '房卡', pinyin: 'fángkǎ', hv: 'Phòng Tạp', vi: 'Thẻ phòng (mở khóa)', type: 'Đồ vật', exampleZh: '这是您的房卡，请收好。', examplePinyin: 'Zhè shì nín de fángkǎ, qǐng shōuhǎo.', exampleVi: 'Đây là thẻ phòng của quý khách, xin giữ kỹ.' },
      { id: 'v11_4', hanzi: '护照', pinyin: 'hùzhào', hv: 'Hộ Chiếu', vi: 'Hộ chiếu Passport', type: 'Giấy tờ', exampleZh: '办理入住需要出示护照。', examplePinyin: 'Bànlǐ rùzhù xūyào chūshì hùzhào.', exampleVi: 'Làm thủ tục nhận phòng cần xuất trình hộ chiếu.' },
      { id: 'v11_5', hanzi: '退房', pinyin: 'tuìfáng', hv: 'Thoái Phòng', vi: 'Trả phòng Check-out', type: 'Động từ', exampleZh: '请在中午十二点前退房。', examplePinyin: 'Qǐng zài zhōngwǔ shí\'èr diǎn qián tuìfáng.', exampleVi: 'Xin vui lòng trả phòng trước 12h trưa.' },
      { id: 'v11_6', hanzi: '密码', pinyin: 'mìmǎ', hv: 'Mật Mã', vi: 'Mật khẩu', type: 'Danh từ', exampleZh: '请问无线网密码是多少？', examplePinyin: 'Qǐngwèn wúxiànwǎng mìmǎ shì duōshao?', exampleVi: 'Xin hỏi mật khẩu wifi là bao nhiêu ạ?' },
      { id: 'v11_7', hanzi: '电梯', pinyin: 'diàntī', hv: 'Điện Thang', vi: 'Thang máy', type: 'Phương tiện', exampleZh: '请往这边走乘电梯。', examplePinyin: 'Qǐng wǎng zhèbiān zǒu chéng diàntī.', exampleVi: 'Xin đi lối này để đi thang máy.' },
      { id: 'v11_8', hanzi: '押金', pinyin: 'yājīn', hv: 'Áp Kim', vi: 'Tiền đặt cọc', type: 'Tiền tệ', exampleZh: '入住需要交两百块押金。', examplePinyin: 'Rùzhù xūyào jiāo liǎng bǎi kuài yājīn.', exampleVi: 'Nhận phòng cần đặt cọc 200 tệ.' },
    ],
    grammarPoints: [
      {
        title: '1. Cấu trúc câu tôn kính với "您" (nín - Quý khách, Ngài)',
        pattern: '这是您的 + Danh từ',
        explanation: 'Nhân viên dịch vụ khách sạn luôn dùng "您" và "请" để thể hiện sự lịch thiệp tối đa.',
        examples: [
          { zh: '这是您的房卡。', pinyin: 'Zhè shì nín de fángkǎ.', vi: 'Đây là thẻ phòng của quý khách.' },
          { zh: '请出示您的护照。', pinyin: 'Qǐng chūshì nín de hùzhào.', vi: 'Xin mời xuất trình hộ chiếu của quý khách.' },
        ],
      },
      {
        title: '2. Cách hỏi thông số, mật mã với "是多少"',
        pattern: 'Đối tượng (密码/电话号码) + 是多少？',
        examples: [
          { zh: 'WiFi密码是多少？', pinyin: 'WiFi mìmǎ shì duōshao?', vi: 'Mật khẩu WiFi là bao nhiêu?' },
          { zh: '你的房间号码是多少？', pinyin: 'Nǐ de fángjiān hàomǎ shì duōshao?', vi: 'Số phòng của bạn là bao nhiêu?' },
        ],
      },
    ],
    reading: {
      title: '在酒店前台办理入住 (Check-in khách sạn)',
      tokens: [
        { hanzi: '接待员：', isSpeaker: true },
        { hanzi: '这是', pinyin: 'zhè shì', vi: 'Đây là', hv: 'Giá Thị' },
        { hanzi: '您的房卡', pinyin: 'nín de fángkǎ', vi: 'Thẻ phòng của bạn', hv: 'Nẫm Đích Phòng Tạp' },
        { hanzi: '，房间在', pinyin: 'fángjiān zài', vi: 'Phòng ở', hv: 'Phòng Gian Tại' },
        { hanzi: '八楼', pinyin: 'bā lóu', vi: 'Tầng 8', hv: 'Bát Lâu' },
        { hanzi: '。' },
      ],
      translationVi: 'Lễ tân: Đây là thẻ phòng của quý khách, phòng ở tầng 8 nhé!',
      quiz: {
        question: 'Phòng của khách nằm ở tầng mấy?',
        options: [
          { text: 'A. 八楼 (Tầng 8)', correct: true },
          { text: 'B. 六楼 (Tầng 6)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, speaker: 'Khách', hanzi: '请问酒店WiFi密码是多少？', pinyin: 'Qǐngwèn jiǔdiàn WiFi mìmǎ shì duōshǎo?', vi: 'Xin hỏi mật khẩu WiFi của khách sạn là bao nhiêu?' },
        { id: 1, speaker: 'Lễ tân', hanzi: '密码就是您的房间号码。', pinyin: 'Mìmǎ jiù shì nín de fángjiān hàomǎ.', vi: 'Mật khẩu chính là số phòng của quý khách.' },
      ],
      quiz: {
        sentencePrefix: '密码就是您的',
        missingWord: '房间号码',
        sentenceSuffix: '。',
        hint: 'fángjiān hàomǎ (số phòng)',
      },
    },
    speaking: {
      targetHanzi: '这是我的护照请办理入住',
      targetPinyin: 'Zhè shì wǒ de hùzhào qǐng bànlǐ rùzhù',
      vietnameseMeaning: 'Đây là hộ chiếu của tôi xin nhận phòng',
      sentences: [
        { hanzi: '你好，我在网上预订了一间大床房。', pinyin: 'Nǐ hǎo, wǒ zài wǎngshang yùdìng le yī jiān dàchuángfáng.', vi: 'Xin chào, tôi đã đặt một phòng giường đôi trên mạng.' },
        { hanzi: '这是我的护照，请帮我办理入住。', pinyin: 'Zhè shì wǒ de hùzhào, qǐng bāng wǒ bànlǐ rùzhù.', vi: 'Đây là hộ chiếu của tôi, xin làm thủ tục nhận phòng giúp.' },
      ],
    },
    writing: {
      targetChar: '住',
      charPinyin: 'zhù',
      charMeaning: 'Trú (Ở, cư trú, lưu trú)',
      radical: '亻 (bộ Nhân đứng) + 主 (chủ thể)',
      strokeCount: 7,
      tips: 'Con người (亻) làm chủ (主) một nơi chốn nghĩa là cư trú, ở lại (住).',
      compositionTask: {
        prompt: 'Dịch câu: "Tôi muốn đặt một phòng đơn"',
        expectedKeywords: ['我想', '预订', '单人间'],
        sampleSolution: '我想预订一间单人间 (Wǒ xiǎng yùdìng yī jiān dānrénjiān)',
      },
    },
    matchingWords: [
      { id: 'w11_1', hanzi: '酒店', pinyin: 'jiǔdiàn', vi: 'Khách sạn' },
      { id: 'w11_2', hanzi: '预订', pinyin: 'yùdìng', vi: 'Đặt trước' },
      { id: 'w11_3', hanzi: '护照', pinyin: 'hùzhào', vi: 'Hộ chiếu' },
      { id: 'w11_4', hanzi: '房卡', pinyin: 'fángkǎ', vi: 'Thẻ phòng' },
      { id: 'w11_5', hanzi: '电梯', pinyin: 'diàntī', vi: 'Thang máy' },
      { id: 'w11_6', hanzi: '退房', pinyin: 'tuìfáng', vi: 'Trả phòng' },
    ],
  },

  {
    id: 'hsk3-lesson12',
    level: 'HSK 3',
    title: 'Bài 12: Mua sắm online, Taobao & Quét mã thanh toán (网购、快递与移动支付)',
    description: 'Trải nghiệm cuộc sống không tiền mặt tại Trung Quốc: săn hàng Taobao, nhận bưu kiện chuyển phát nhanh.',
    category: 'Trung cấp HSK 3',
    vocabularies: [
      { id: 'v12_1', hanzi: '网购', pinyin: 'wǎnggòu', hv: 'Võng Cấu', vi: 'Mua sắm qua mạng', type: 'Động từ', exampleZh: '现在的年轻人非常喜欢网购。', examplePinyin: 'Xiànzài de niánqīngrén fēicháng xǐhuan wǎnggòu.', exampleVi: 'Giới trẻ ngày nay rất chuộng mua hàng online.' },
      { id: 'v12_2', hanzi: '快递', pinyin: 'kuàidì', hv: 'Khoái Đệ', vi: 'Chuyển phát nhanh bưu phẩm', type: 'Danh từ', exampleZh: '你的快递到了，请去驿站取。', examplePinyin: 'Nǐ de kuàidì dào le, qǐng qù yìzhàn qǔ.', exampleVi: 'Bưu kiện của bạn tới rồi, mau đi trạm lấy nhé.' },
      { id: 'v12_3', hanzi: '扫码', pinyin: 'sǎomǎ', hv: 'Tảo Mã', vi: 'Quét mã QR', type: 'Động từ', exampleZh: '请扫码付款。', examplePinyin: 'Qǐng sǎomǎ fùkuǎn.', exampleVi: 'Xin vui lòng quét mã thanh toán.' },
      { id: 'v12_4', hanzi: '付款', pinyin: 'fùkuǎn', hv: 'Phó Khoản', vi: 'Thanh toán tiền', type: 'Động từ', exampleZh: '可以用微信或者支付宝付款吗？', examplePinyin: 'Kěyǐ yòng Wēixìn huòzhě Zhīfùbǎo fùkuǎn ma?', exampleVi: 'Có thể thanh toán qua WeChat hay Alipay không?' },
      { id: 'v12_5', hanzi: '微信支付', pinyin: 'Wēixìn zhīfù', hv: 'Vi Tín Chi Phó', vi: 'Ví WeChat Pay', type: 'Công nghệ', exampleZh: '我习惯用微信支付。', examplePinyin: 'Wǒ xíguàn yòng Wēixìn zhīfù.', exampleVi: 'Tôi quen dùng ví WeChat Pay.' },
      { id: 'v12_6', hanzi: '包邮', pinyin: 'bāoyóu', hv: 'Bao Bưu', vi: 'Miễn phí vận chuyển (Freeship)', type: 'Thương mại', exampleZh: '全场满九十九块包邮。', examplePinyin: 'Quánchǎng mǎn jiǔshíjiǔ kuài bāoyóu.', exampleVi: 'Toàn sàn đơn từ 99 tệ được miễn phí ship.' },
      { id: 'v12_7', hanzi: '退货', pinyin: 'tuìhuò', hv: 'Thoái Hóa', vi: 'Trả hàng, hoàn trả', type: 'Động từ', exampleZh: '支持七天无理由退货。', examplePinyin: 'Zhīchí qī tiān wú lǐyóu tuìhuò.', exampleVi: 'Hỗ trợ trả hàng không cần lý do trong 7 ngày.' },
      { id: 'v12_8', hanzi: '质量', pinyin: 'zhìliàng', hv: 'Chất Lượng', vi: 'Chất lượng sản phẩm', type: 'Danh từ', exampleZh: '这件衣服质量非常好。', examplePinyin: 'Zhè jiàn yīfu zhìliàng fēicháng hǎo.', exampleVi: 'Bộ quần áo này chất lượng cực tốt.' },
    ],
    grammarPoints: [
      {
        title: '1. Cấu trúc nhấn mạnh phương thức "用...付款" (Dùng... để thanh toán)',
        pattern: 'Chủ ngữ + 用 + Ví điện tử / Tiền mặt + 付款',
        examples: [
          { zh: '我用手机扫码付款。', pinyin: 'Wǒ yòng shǒujī sǎomǎ fùkuǎn.', vi: 'Tôi dùng điện thoại quét mã thanh toán.' },
          { zh: '这里只能用现金付款。', pinyin: 'Zhèlǐ zhǐ néng yòng xiànjīn fùkuǎn.', vi: 'Ở đây chỉ có thể thanh toán bằng tiền mặt.' },
        ],
      },
      {
        title: '2. Giới từ biểu thị phương thức "在网上..." (Ở trên mạng...)',
        pattern: '在网上 + Động từ (买/看/学)',
        examples: [
          { zh: '我在网上买了一件大衣。', pinyin: 'Wǒ zài wǎngshang mǎi le yī jiàn dàyī.', vi: 'Tôi mua một chiếc áo khoác trên mạng.' },
          { zh: '他在网上学汉语。', pinyin: 'Tā zài wǎngshang xué Hànyǔ.', vi: 'Anh ấy học tiếng Trung qua mạng.' },
        ],
      },
    ],
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
        question: 'Mỹ Linh thanh toán tiền bằng hình thức nào?',
        options: [
          { text: 'A. 扫码付款 (Quét mã thanh toán)', correct: true },
          { text: 'B. 现金 (Tiền mặt)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, speaker: 'Shipper', hanzi: '您的快递到了，请到楼下取件。', pinyin: 'Nín de kuàidì dào le, qǐng dào lóuxià qǔjiàn.', vi: 'Bưu phẩm của bạn đến rồi, vui lòng xuống lầu lấy nhé.' },
        { id: 1, speaker: 'Khách', hanzi: '好的，我马上下来。', pinyin: 'Hǎo de, wǒ mǎshàng xiàlai.', vi: 'Vâng, tôi xuống ngay đây.' },
      ],
      quiz: {
        sentencePrefix: '您的',
        missingWord: '快递',
        sentenceSuffix: '到了，请到楼下取件。',
        hint: 'kuàidì (chuyển phát nhanh)',
      },
    },
    speaking: {
      targetHanzi: '请问这里可以用微信或者支付宝付款吗',
      targetPinyin: 'Qǐngwèn zhèlǐ kěyǐ yòng Wēixìn huòzhě Zhīfùbǎo fùkuǎn ma',
      vietnameseMeaning: 'Xin hỏi ở đây có thể thanh toán bằng WeChat hoặc Alipay không?',
      sentences: [
        { hanzi: '老板，请出示一下您的收款码。', pinyin: 'Lǎobǎn, qǐng chūshì yīxià nín de shōukuǎnmǎ.', vi: 'Ông chủ, xin đưa mã nhận tiền để tôi quét.' },
        { hanzi: '我已经扫码付款了，请查收。', pinyin: 'Wǒ yǐjīng sǎomǎ fùkuǎn le, qǐng cháshōu.', vi: 'Tôi đã quét mã thanh toán rồi, phiền bác kiểm tra.' },
      ],
    },
    writing: {
      targetChar: '电',
      charPinyin: 'diàn',
      charMeaning: 'Điện (Điện tử, sấm sét, công nghệ)',
      radical: '日 + 乚',
      strokeCount: 5,
      tips: 'Tia chớp sấm sét trên bầu trời, tạo nền móng cho các từ 电脑 (máy tính), 电话 (điện thoại).',
      compositionTask: {
        prompt: 'Dịch câu: "Tôi dùng điện thoại quét mã thanh toán"',
        expectedKeywords: ['我用手机', '扫码', '付款'],
        sampleSolution: '我用手机扫码付款 (Wǒ yòng shǒujī sǎomǎ fùkuǎn)',
      },
    },
    matchingWords: [
      { id: 'w12_1', hanzi: '网购', pinyin: 'wǎnggòu', vi: 'Mua online' },
      { id: 'w12_2', hanzi: '快递', pinyin: 'kuàidì', vi: 'Bưu phẩm' },
      { id: 'w12_3', hanzi: '扫码', pinyin: 'sǎomǎ', vi: 'Quét mã' },
      { id: 'w12_4', hanzi: '付款', pinyin: 'fùkuǎn', vi: 'Thanh toán' },
      { id: 'w12_5', hanzi: '质量', pinyin: 'zhìliàng', vi: 'Chất lượng' },
      { id: 'w12_6', hanzi: '包邮', pinyin: 'bāoyóu', vi: 'Freeship' },
    ],
  },

  {
    id: 'hsk3-lesson13',
    level: 'HSK 3',
    title: 'Bài 13: Thuê nhà, Tìm phòng & Sinh hoạt khu phố (租房与社区生活)',
    description: 'Gặp gỡ môi giới bất động sản, xem phòng trọ, thương lượng tiền thuê và tiền điện nước.',
    category: 'Trung cấp HSK 3',
    vocabularies: [
      { id: 'v13_1', hanzi: '租房', pinyin: 'zūfáng', hv: 'Tô Phòng', vi: 'Thuê nhà, thuê phòng', type: 'Động từ', exampleZh: '我想在学校附近租房。', examplePinyin: 'Wǒ xiǎng zài xuéxiào fùjìn zūfáng.', exampleVi: 'Tôi muốn thuê nhà ở gần trường học.' },
      { id: 'v13_2', hanzi: '房租', pinyin: 'fángzū', hv: 'Phòng Tô', vi: 'Tiền thuê nhà hàng tháng', type: 'Danh từ', exampleZh: '每个月的房租是多少？', examplePinyin: 'Měi gè yuè de fángzū shì duōshao?', exampleVi: 'Tiền thuê nhà mỗi tháng là bao nhiêu?' },
      { id: 'v13_3', hanzi: '中介', pinyin: 'zhōngjiè', hv: 'Trung Giới', vi: 'Môi giới, trung gian', type: 'Nghề nghiệp', exampleZh: '房屋中介带我们看房子。', examplePinyin: 'Fángwū zhōngjiè dài wǒmen kàn fángzi.', exampleVi: 'Môi giới dẫn chúng tôi đi xem nhà.' },
      { id: 'v13_4', hanzi: '合同', pinyin: 'hétong', hv: 'Hợp Đồng', vi: 'Bản hợp đồng', type: 'Pháp lý', exampleZh: '租房要签订正式合同。', examplePinyin: 'Zūfáng yào qiāndìng zhèngshì hétong.', exampleVi: 'Thuê nhà cần phải ký hợp đồng chính thức.' },
      { id: 'v13_5', hanzi: '水电费', pinyin: 'shuǐdiànfèi', hv: 'Thủy Điện Phí', vi: 'Tiền điện nước', type: 'Chi phí', exampleZh: '房租包含水电费吗？', examplePinyin: 'Fángzū bāohán shuǐdiànfèi ma?', exampleVi: 'Tiền thuê nhà có bao gồm điện nước không?' },
      { id: 'v13_6', hanzi: '家具', pinyin: 'jiājù', hv: 'Gia Cụ', vi: 'Đồ đạc nội thất', type: 'Đồ vật', exampleZh: '房间里有齐全的家具。', examplePinyin: 'Fángjiān lǐ yǒu qíquán de jiājù.', exampleVi: 'Trong phòng có đầy đủ đồ nội thất.' },
      { id: 'v13_7', hanzi: '空调', pinyin: 'kōngtiáo', hv: 'Không Điều', vi: 'Máy điều hòa nhiệt độ', type: 'Thiết bị', exampleZh: '夏天开空调很凉快。', examplePinyin: 'Xiàtiān kāi kōngtiáo hěn liángkuai.', exampleVi: 'Mùa hè bật điều hòa rất mát mẻ.' },
      { id: 'v13_8', hanzi: '附近', pinyin: 'fùjìn', hv: 'Phụ Cận', vi: 'Lân cận, gần đây', type: 'Phương vị', exampleZh: '小区附近有菜市场和超市。', examplePinyin: 'Xiǎoqū fùjìn yǒu càishìchǎng hé chāoshì.', exampleVi: 'Gần khu chung cư có chợ dân sinh và siêu thị.' },
    ],
    grammarPoints: [
      {
        title: '1. Cấu trúc câu hỏi bao hàm "A 包含 B 吗？" (A bao gồm B không?)',
        pattern: 'Khoản chi 1 + 包含 + Khoản chi 2 + 吗？',
        examples: [
          { zh: '房租包含物业费吗？', pinyin: 'Fángzū bāohán wùyèfèi ma?', vi: 'Tiền thuê nhà đã bao gồm phí quản lý chưa?' },
          { zh: '费用包含早餐吗？', pinyin: 'Fèiyòng bāohán zǎocān ma?', vi: 'Chi phí có bao gồm bữa sáng không?' },
        ],
      },
      {
        title: '2. Phương vị từ "在...附近" (Ở lân cận, gần...)',
        pattern: 'Địa điểm + 附近',
        examples: [
          { zh: '我家在地铁站附近。', pinyin: 'Wǒ jiā zài dìtiězhàn fùjìn.', vi: 'Nhà tôi ở gần ga tàu điện ngầm.' },
          { zh: '学校附近有很多餐馆。', pinyin: 'Xuéxiào fùjìn yǒu hěn duō cānguǎn.', vi: 'Gần trường có rất nhiều quán ăn.' },
        ],
      },
    ],
    reading: {
      title: '看房与租房合同 (Đi xem nhà và hợp đồng thuê)',
      tokens: [
        { hanzi: '租客：', isSpeaker: true },
        { hanzi: '请问', pinyin: 'qǐngwèn', vi: 'Xin hỏi', hv: 'Thỉnh Vấn' },
        { hanzi: '这套房子', pinyin: 'zhè tào fángzi', vi: 'Căn nhà này', hv: 'Giá Sáo Phòng Tử' },
        { hanzi: '一个月', pinyin: 'yī gè yuè', vi: 'Một tháng', hv: 'Nhất Cá Nguyệt' },
        { hanzi: '房租多少钱', pinyin: 'fángzū duōshǎo qián', vi: 'Tiền thuê bao nhiêu', hv: 'Phòng Tô Đa Thiểu Tiền' },
        { hanzi: '？' },
        { hanzi: '中介：', isSpeaker: true },
        { hanzi: '两千五百块', pinyin: 'liǎng qiān wǔbǎi kuài', vi: '2.500 tệ', hv: 'Lưỡng Thiên Ngũ Bách Khối' },
        { hanzi: '，包含', pinyin: 'bāohán', vi: 'Bao gồm', hv: 'Bao Hàm' },
        { hanzi: '物业费', pinyin: 'wùyèfèi', vi: 'Phí dịch vụ', hv: 'Vật Nghiệp Phí' },
        { hanzi: '。' },
      ],
      translationVi: 'Người thuê: Xin hỏi căn nhà này tiền thuê một tháng bao nhiêu?\nMôi giới: 2.500 tệ, đã bao gồm cả phí quản lý tòa nhà nhé.',
      quiz: {
        question: 'Tiền thuê nhà mỗi tháng là bao nhiêu?',
        options: [
          { text: 'A. 两千五百块 (2.500 tệ)', correct: true },
          { text: 'B. 三千块 (3.000 tệ)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, speaker: 'Người thuê', hanzi: '请问押金要交多少？', pinyin: 'Qǐngwèn yājīn yào jiāo duōshǎo?', vi: 'Xin hỏi cần đóng bao nhiêu tiền cọc?' },
        { id: 1, speaker: 'Chủ nhà', hanzi: '押一付三，交一个月的押金。', pinyin: 'Yā yī fù sān, jiāo yī gè yuè de yājīn.', vi: 'Đặt cọc 1 tháng, thanh toán 3 tháng một lần.' },
      ],
      quiz: {
        sentencePrefix: '每个月的房租是',
        missingWord: '两千五百块',
        sentenceSuffix: '。',
        hint: 'liǎng qiān wǔbǎi kuài (2.500 tệ)',
      },
    },
    speaking: {
      targetHanzi: '我想租一套离地铁站近的房子',
      targetPinyin: 'Wǒ xiǎng zū yī tào lí dìtiězhàn jìn de fángzi',
      vietnameseMeaning: 'Tôi muốn thuê một căn hộ gần ga tàu điện ngầm',
      sentences: [
        { hanzi: '我想看这套朝南的单身公寓。', pinyin: 'Wǒ xiǎng kàn zhè tào cháo nán de dānshēn gōngyù.', vi: 'Tôi muốn xem căn hộ studio hướng Nam này.' },
        { hanzi: '家电齐全吗？有洗衣机和空调吗？', pinyin: 'Jiādiàn qíquán ma? Yǒu xǐyījī hé kōngtiáo ma?', vi: 'Điện máy đầy đủ không? Có máy giặt và điều hòa không?' },
      ],
    },
    writing: {
      targetChar: '租',
      charPinyin: 'zū',
      charMeaning: 'Tô (Thuê, cho thuê, địa tô)',
      radical: '禾 (bộ Hòa - lúa gạo) + 且 (bộ Thả)',
      strokeCount: 10,
      tips: 'Thời xưa trả lúa gạo (禾) để làm tiền tô thuế thuê ruộng đất.',
      compositionTask: {
        prompt: 'Dịch câu: "Tôi muốn thuê phòng"',
        expectedKeywords: ['我想', '租房'],
        sampleSolution: '我想租房 (Wǒ xiǎng zūfáng)',
      },
    },
    matchingWords: [
      { id: 'w13_1', hanzi: '租房', pinyin: 'zūfáng', vi: 'Thuê nhà' },
      { id: 'w13_2', hanzi: '房租', pinyin: 'fángzū', vi: 'Tiền thuê' },
      { id: 'w13_3', hanzi: '中介', pinyin: 'zhōngjiè', vi: 'Môi giới' },
      { id: 'w13_4', hanzi: '合同', pinyin: 'hétong', vi: 'Hợp đồng' },
      { id: 'w13_5', hanzi: '家具', pinyin: 'jiājù', vi: 'Nội thất' },
      { id: 'w13_6', hanzi: '空调', pinyin: 'kōngtiáo', vi: 'Điều hòa' },
    ],
  },

  {
    id: 'hsk3-lesson14',
    level: 'HSK 3',
    title: 'Bài 14: Môi trường học tập, Thư viện & Xin học bổng (校园生活与申请奖学金)',
    description: 'Thủ tục mượn sách thư viện, đăng ký tín chỉ và viết đơn xin học bổng du học Trung Quốc.',
    category: 'Trung cấp HSK 3',
    vocabularies: [
      { id: 'v14_1', hanzi: '图书馆', pinyin: 'túshūguǎn', hv: 'Đồ Thư Quán', vi: 'Thư viện', type: 'Địa điểm', exampleZh: '周末我都在图书馆自习。', examplePinyin: 'Zhōumò wǒ dōu zài túshūguǎn zìxí.', exampleVi: 'Cuối tuần tôi đều tự học ở thư viện.' },
      { id: 'v14_2', hanzi: '借书', pinyin: 'jiè shū', hv: 'Tá Thư', vi: 'Mượn sách', type: 'Động từ', exampleZh: '我想借两本经济学书籍。', examplePinyin: 'Wǒ xiǎng jiè liǎng běn jīngjìxué shūjí.', exampleVi: 'Tôi muốn mượn hai cuốn sách kinh tế.' },
      { id: 'v14_3', hanzi: '奖学金', pinyin: 'jiǎngxuéjīn', hv: 'Tưởng Học Kim', vi: 'Học bổng', type: 'Khen thưởng', exampleZh: '他获得了中国政府全额奖学金。', examplePinyin: 'Tā huòdé le Zhōngguó zhèngfǔ quán\'é jiǎngxuéjīn.', exampleVi: 'Anh ấy đã đạt học bổng toàn phần chính phủ Trung Quốc.' },
      { id: 'v14_4', hanzi: '申请', pinyin: 'shēnqǐng', hv: 'Thân Thỉnh', vi: 'Nộp đơn xin, đăng ký', type: 'Động từ', exampleZh: '我想申请去北京大学留学。', examplePinyin: 'Wǒ xiǎng shēnqǐng qù Běijīng Dàxué liúxué.', exampleVi: 'Tôi muốn nộp đơn xin du học Đại học Bắc Kinh.' },
      { id: 'v14_5', hanzi: '学生证', pinyin: 'xuéshēngzhèng', hv: 'Học Sinh Chứng', vi: 'Thẻ sinh viên', type: 'Giấy tờ', exampleZh: '请出示你的学生证。', examplePinyin: 'Qǐng chūshì nǐ de xuéshēngzhèng.', exampleVi: 'Xin xuất trình thẻ sinh viên của bạn.' },
      { id: 'v14_6', hanzi: '专业', pinyin: 'zhuānyè', hv: 'Chuyên Nghiệp', vi: 'Chuyên ngành học', type: 'Học tập', exampleZh: '我的大学专业是国际贸易。', examplePinyin: 'Wǒ de dàxué zhuānyè shì guójì màoyì.', exampleVi: 'Chuyên ngành đại học của tôi là Thương mại quốc tế.' },
      { id: 'v14_7', hanzi: '考试', pinyin: 'kǎoshì', hv: 'Khảo Thí', vi: 'Kỳ thi, thi cử', type: 'Học tập', exampleZh: '下周我们要参加HSK四级考试。', examplePinyin: 'Xià zhōu wǒmen yào cānjiā HSK sì jí kǎoshì.', exampleVi: 'Tuần sau chúng tôi phải thi HSK 4.' },
      { id: 'v14_8', hanzi: '努力', pinyin: 'nǔlì', hv: 'Nỗ Lực', vi: 'Nỗ lực, chăm chỉ', type: 'Tính từ', exampleZh: '只要努力学习，就能取得好成绩。', examplePinyin: 'Zhǐyào nǔlì xuéxí, jiù néng qǔdé hǎo chéngjì.', exampleVi: 'Chỉ cần chăm chỉ học tập là có thể đạt thành tích tốt.' },
    ],
    grammarPoints: [
      {
        title: '1. Cặp liên từ điều kiện "只要...就..." (Chỉ cần... thì...)',
        pattern: '只要 + Điều kiện + 就 + Kết quả',
        examples: [
          { zh: '只要努力，就能成功。', pinyin: 'Zhǐyào nǔlì, jiù néng chénggōng.', vi: 'Chỉ cần nỗ lực thì sẽ thành công.' },
          { zh: '只要你来，我就很高兴。', pinyin: 'Zhǐyào nǐ lái, wǒ jiù hěn gāoxìng.', vi: 'Chỉ cần bạn đến là tôi rất vui rồi.' },
        ],
      },
      {
        title: '2. Động từ "申请" (shēnqǐng - Nộp đơn xin)',
        pattern: '申请 + Học bổng / Chuyên ngành / Visa',
        examples: [
          { zh: '申请奖学金', pinyin: 'Shēnqǐng jiǎngxuéjīn', vi: 'Xin học bổng' },
          { zh: '申请中国签证', pinyin: 'Shēnqǐng Zhōngguó qiānzhèng', vi: 'Xin visa Trung Quốc' },
        ],
      },
    ],
    reading: {
      title: '图书馆借书与申请奖学金',
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
        question: 'Mỗi cuốn sách sinh viên được mượn trong thời gian bao lâu?',
        options: [
          { text: 'A. 一个月 (Một tháng)', correct: true },
          { text: 'B. 一周 (Một tuần)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, speaker: 'Thầy giáo', hanzi: '听说你申请到了中国政府奖学金，恭喜你！', pinyin: 'Tīngshuō nǐ shēnqǐng dào le Zhōngguó zhèngfǔ jiǎngxuéjīn, gōngxǐ nǐ!', vi: 'Nghe nói em đã xin được học bổng chính phủ Trung Quốc, chúc mừng em!' },
        { id: 1, speaker: 'Học sinh', hanzi: '非常感谢老师一直以来的悉心指导！', pinyin: 'Fēicháng gǎnxiè lǎoshī yīzhí yǐlái de xīxīn zhǐdǎo!', vi: 'Em cảm ơn thầy rất nhiều vì sự chỉ dẫn tận tình suốt thời gian qua!' },
      ],
      quiz: {
        sentencePrefix: '听说你申请到了中国政府',
        missingWord: '奖学金',
        sentenceSuffix: '，恭喜你！',
        hint: 'jiǎngxuéjīn (học bổng)',
      },
    },
    speaking: {
      targetHanzi: '努力学习中文争取取得优异成绩',
      targetPinyin: 'Nǔlì xuéxí Zhōngwén zhēngqǔ qǔdé yōuyì chéngjì',
      vietnameseMeaning: 'Chăm chỉ học tiếng Trung phấn đấu đạt thành tích xuất sắc',
      sentences: [
        { hanzi: '老师，我想申请本学期的优秀留学生奖学金。', pinyin: 'Lǎoshī, wǒ xiǎng shēnqǐng běn xuéqī de yōuxiù liúxuéshēng jiǎngxuéjīn.', vi: 'Thưa thầy, em muốn nộp đơn xin học bổng lưu học sinh xuất sắc kỳ này.' },
      ],
    },
    writing: {
      targetChar: '学',
      charPinyin: 'xué',
      charMeaning: 'Học (Học tập, học vấn, trường học)',
      radical: '子 (bộ Tử - đứa con)',
      strokeCount: 8,
      tips: 'Đứa trẻ (子) dưới mái nhà với đôi tay chăm chỉ tiếp thu kiến thức.',
      compositionTask: {
        prompt: 'Dịch câu: "Tôi muốn xin học bổng du học"',
        expectedKeywords: ['我想申请', '留学', '奖学金'],
        sampleSolution: '我想申请留学奖学金 (Wǒ xiǎng shēnqǐng liúxué jiǎngxuéjīn)',
      },
    },
    matchingWords: [
      { id: 'w14_1', hanzi: '图书馆', pinyin: 'túshūguǎn', vi: 'Thư viện' },
      { id: 'w14_2', hanzi: '奖学金', pinyin: 'jiǎngxuéjīn', vi: 'Học bổng' },
      { id: 'w14_3', hanzi: '申请', pinyin: 'shēnqǐng', vi: 'Xin, nộp đơn' },
      { id: 'w14_4', hanzi: '专业', pinyin: 'zhuānyè', vi: 'Chuyên ngành' },
      { id: 'w14_5', hanzi: '学生证', pinyin: 'xuéshēngzhèng', vi: 'Thẻ sinh viên' },
      { id: 'w14_6', hanzi: '努力', pinyin: 'nǔlì', vi: 'Nỗ lực' },
    ],
  },

  {
    id: 'hsk3-lesson15',
    level: 'HSK 3',
    title: 'Bài 15: Đời sống văn phòng, Đồng nghiệp & Hội họp (职场办公、同事与会议)',
    description: 'Kỹ năng giao tiếp công sở: hẹn lịch họp, gửi email tài liệu báo cáo và làm việc nhóm.',
    category: 'Trung cấp HSK 3',
    vocabularies: [
      { id: 'v15_1', hanzi: '开会', pinyin: 'kāihuì', hv: 'Khai Hội', vi: 'Họp, mở cuộc họp', type: 'Động từ', exampleZh: '上午九点在会议室开会。', examplePinyin: 'Shàngwǔ jiǔ diǎn zài huìyìshì kāihuì.', exampleVi: '9 giờ sáng họp ở phòng họp.' },
      { id: 'v15_2', hanzi: '同事', pinyin: 'tóngshì', hv: 'Đồng Sự', vi: 'Đồng nghiệp', type: 'Quan hệ', exampleZh: '我和同事们相处得很融洽。', examplePinyin: 'Wǒ hé tóngshìmen xiāngchǔ de hěn róngqià.', exampleVi: 'Tôi và các đồng nghiệp hòa thuận với nhau.' },
      { id: 'v15_3', hanzi: '发邮件', pinyin: 'fā yóujiàn', hv: 'Phát Bưu Kiện', vi: 'Gửi email thư từ', type: 'Công việc', exampleZh: '我已经把会议纪要发到您的邮箱了。', examplePinyin: 'Wǒ yǐjīng bǎ huìyì jìyào fā dào nín de yóuxiāng le.', exampleVi: 'Tôi đã gửi biên bản cuộc họp vào hộp thư của anh rồi.' },
      { id: 'v15_4', hanzi: '报告', pinyin: 'bàogào', hv: 'Báo Cáo', vi: 'Bản báo cáo', type: 'Tài liệu', exampleZh: '请在下班前提交季度报告。', examplePinyin: 'Qǐng zài xiàbān qián tíjiāo jìdù bàogào.', exampleVi: 'Vui lòng nộp báo cáo quý trước giờ tan làm.' },
      { id: 'v15_5', hanzi: '加班', pinyin: 'jiābān', hv: 'Gia Ban', vi: 'Làm thêm giờ (OT)', type: 'Động từ', exampleZh: '今晚需要加班处理紧急订单。', examplePinyin: 'Jīnwǎn xūyào jiābān chǔlǐ jǐnjí dìngdān.', exampleVi: 'Tối nay cần tăng ca xử lý đơn hàng gấp.' },
      { id: 'v15_6', hanzi: '请假', pinyin: 'qǐngjià', hv: 'Thỉnh Giả', vi: 'Xin nghỉ phép', type: 'Động từ', exampleZh: '我想请两天病假。', examplePinyin: 'Wǒ xiǎng qǐng liǎng tiān bìngjià.', exampleVi: 'Tôi muốn xin nghỉ ốm 2 ngày.' },
      { id: 'v15_7', hanzi: '准备', pinyin: 'zhǔnbèi', hv: 'Chuẩn Bị', vi: 'Chuẩn bị', type: 'Động từ', exampleZh: '方案已经准备好了。', examplePinyin: 'Fāng\'àn yǐjīng zhǔnbèi hǎo le.', exampleVi: 'Phương án đã được chuẩn bị xong.' },
      { id: 'v15_8', hanzi: '经理', pinyin: 'jīnglǐ', hv: 'Kinh Lý', vi: 'Giám đốc, quản lý', type: 'Chức danh', exampleZh: '王经理正在办公室批阅文件。', examplePinyin: 'Wáng jīnglǐ zhèngzài bàngōngshì pīyuè wénjiàn.', exampleVi: 'Giám đốc Vương đang phê duyệt tài liệu trong phòng.' },
    ],
    grammarPoints: [
      {
        title: '1. Cấu trúc câu chữ "把" (bǎ) trong công việc văn phòng',
        pattern: 'Chủ ngữ + 把 + Tân ngữ + Động từ + Thành phần khác',
        explanation: 'Nhấn mạnh sự tác động và kết quả của hành động lên tài liệu, công việc.',
        examples: [
          { zh: '请把这份报告发给王经理。', pinyin: 'Qǐng bǎ zhè fèn bàogào fā gěi Wáng jīnglǐ.', vi: 'Vui lòng gửi bản báo cáo này cho Giám đốc Vương.' },
          { zh: '我已经把电脑关上了。', pinyin: 'Wǒ yǐjīng bǎ diànnǎo guānshang le.', vi: 'Tôi đã tắt máy tính rồi.' },
        ],
      },
      {
        title: '2. Cách diễn đạt trạng thái hoàn thành: "Động từ + 好 + 了"',
        pattern: 'Động từ + 好了',
        explanation: 'Biểu thị công việc đã chuẩn bị tươm tất, sẵn sàng.',
        examples: [
          { zh: '资料准备好了。', pinyin: 'Zīliào zhǔnbèi hǎo le.', vi: 'Tài liệu đã chuẩn bị xong xuôi.' },
          { zh: '方案写好了。', pinyin: 'Fāng\'àn xiě hǎo le.', vi: 'Phương án đã viết xong.' },
        ],
      },
    ],
    reading: {
      title: '办公室会议与工作安排',
      tokens: [
        { hanzi: '李经理：', isSpeaker: true },
        { hanzi: '大家上午好', pinyin: 'dàjiā shàngwǔ hǎo', vi: 'Chào buổi sáng mọi người', hv: 'Đại Gia Thượng Ngọ Hảo' },
        { hanzi: '，今天的会议', pinyin: 'jīntiān de huìyì', vi: 'Cuộc họp hôm nay', hv: 'Kim Thiên Đích Hội Nghị' },
        { hanzi: '讨论', pinyin: 'tǎolùn', vi: 'Thảo luận', hv: 'Thảo Luận' },
        { hanzi: '新项目。' },
        { hanzi: '小张：', isSpeaker: true },
        { hanzi: '好的', pinyin: 'hǎo de', vi: 'Dạ vâng', hv: 'Hảo Đích' },
        { hanzi: '，我已经把', pinyin: 'wǒ yǐjīng bǎ', vi: 'Tôi đã đem', hv: 'Ngã Dĩ Kinh Bả' },
        { hanzi: '方案材料', pinyin: 'fāng\'àn cáiliào', vi: 'Tài liệu phương án', hv: 'Phương Án Tài Liệu' },
        { hanzi: '打印好了。' },
      ],
      translationVi: 'Giám đốc Lý: Chào buổi sáng mọi người, cuộc họp hôm nay chúng ta bàn về dự án mới.\nTiểu Trương: Dạ vâng, em đã in xong toàn bộ tài liệu phương án rồi ạ.',
      quiz: {
        question: 'Tiểu Trương đã chuẩn bị việc gì cho cuộc họp?',
        options: [
          { text: 'A. 打印方案材料 (In tài liệu phương án)', correct: true },
          { text: 'B. 预订酒店 (Đặt phòng khách sạn)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, speaker: 'Trưởng phòng', hanzi: '今天的会议什么时候开始？', pinyin: 'Jīntiān de huìyì shénme shíhou kāishǐ?', vi: 'Cuộc họp hôm nay khi nào bắt đầu?' },
        { id: 1, speaker: 'Trợ lý', hanzi: '下午两点半在第三会议室。', pinyin: 'Xiàwǔ liǎng diǎn bàn zài dì-sān huìyìshì.', vi: '2 giờ rưỡi chiều tại phòng họp số 3 ạ.' },
      ],
      quiz: {
        sentencePrefix: '请大家准时到三楼会议室',
        missingWord: '开会',
        sentenceSuffix: '。',
        hint: 'kāihuì (mở cuộc họp)',
      },
    },
    speaking: {
      targetHanzi: '我已经把工作总结报告发送到您的邮箱',
      targetPinyin: 'Wǒ yǐjīng bǎ gōngzuò zǒngjié bàogào fāsòng dào nín de yóuxiāng',
      vietnameseMeaning: 'Tôi đã gửi báo cáo tổng kết công việc vào hòm thư của anh',
      sentences: [
        { hanzi: '请大家把会议材料准备好。', pinyin: 'Qǐng dàjiā bǎ huìyì cáiliào zhǔnbèi hǎo.', vi: 'Xin mọi người chuẩn bị kỹ tài liệu cuộc họp.' },
      ],
    },
    writing: {
      targetChar: '办',
      charPinyin: 'bàn',
      charMeaning: 'Biện (Làm việc, xử lý, văn phòng)',
      radical: '力 (bộ Lực)',
      strokeCount: 4,
      tips: 'Cần nỗ lực dùng sức lực (力) ở giữa để giải quyết công việc (办).',
      compositionTask: {
        prompt: 'Dịch câu: "Anh ấy đang ở văn phòng làm việc"',
        expectedKeywords: ['他在', '办公室', '工作'],
        sampleSolution: '他在办公室工作 (Tā zài bàngōngshì gōngzuò)',
      },
    },
    matchingWords: [
      { id: 'w15_1', hanzi: '开会', pinyin: 'kāihuì', vi: 'Họp hành' },
      { id: 'w15_2', hanzi: '同事', pinyin: 'tóngshì', vi: 'Đồng nghiệp' },
      { id: 'w15_3', hanzi: '报告', pinyin: 'bàogào', vi: 'Báo cáo' },
      { id: 'w15_4', hanzi: '加班', pinyin: 'jiābān', vi: 'Tăng ca' },
      { id: 'w15_5', hanzi: '请假', pinyin: 'qǐngjià', vi: 'Xin nghỉ' },
      { id: 'w15_6', hanzi: '经理', pinyin: 'jīnglǐ', vi: 'Giám đốc' },
    ],
  },

  // ==========================================
  // CHẶNG 4: HSK 4 & TIẾNG TRUNG THƯƠNG MẠI
  // ==========================================
  {
    id: 'hsk4-lesson16',
    level: 'HSK 4',
    title: 'Bài 16: Phỏng vấn xin việc & Viết CV tiếng Trung (求职面试与简历呈现)',
    description: 'Tự tin trình bày bản thân trước nhà tuyển dụng, kinh nghiệm làm việc và kỳ vọng mức lương.',
    category: 'Thương mại HSK 4',
    vocabularies: [
      { id: 'v16_1', hanzi: '面试', pinyin: 'miànshì', hv: 'Diện Thí', vi: 'Phỏng vấn xin việc', type: 'Động từ', exampleZh: '祝贺你通过了初轮面试！', examplePinyin: 'Zhùhè nǐ tōngguò le chū lún miànshì!', exampleVi: 'Chúc mừng bạn đã vượt qua vòng phỏng vấn đầu tiên!' },
      { id: 'v16_2', hanzi: '简历', pinyin: 'jiǎnlì', hv: 'Giản Lịch', vi: 'Sơ yếu lý lịch, CV', type: 'Hồ sơ', exampleZh: '请把您的中英文简历发给我。', examplePinyin: 'Qǐng bǎ nín de Zhōng-Yīngwén jiǎnlì fā gěi wǒ.', exampleVi: 'Xin vui lòng gửi CV tiếng Trung và tiếng Anh cho tôi.' },
      { id: 'v16_3', hanzi: '工作经验', pinyin: 'gōngzuò jīngyàn', hv: 'Công Tác Kinh Nghiệm', vi: 'Kinh nghiệm làm việc', type: 'Danh từ', exampleZh: '我有三年跨境电商工作经验。', examplePinyin: 'Wǒ yǒu sān nián kuàjìng diànshāng gōngzuò jīngyàn.', exampleVi: 'Tôi có 3 năm kinh nghiệm trong ngành thương mại điện tử xuyên biên giới.' },
      { id: 'v16_4', hanzi: '薪水', pinyin: 'xīnshui', hv: 'Tân Thủy', vi: 'Tiền lương, thu nhập', type: 'Đãi ngộ', exampleZh: '请问您的期望薪水是多少？', examplePinyin: 'Qǐngwèn nín de qīwàng xīnshui shì duōshao?', exampleVi: 'Xin hỏi mức lương kỳ vọng của bạn là bao nhiêu?' },
      { id: 'v16_5', hanzi: '优势', pinyin: 'yōushì', hv: 'Ưu Thế', vi: 'Thế mạnh, ưu điểm', type: 'Năng lực', exampleZh: '我的最大优势是语言沟通能力。', examplePinyin: 'Wǒ de zuìdà yōushì shì yǔyán gōutōng nénglì.', exampleVi: 'Thế mạnh lớn nhất của tôi là năng lực giao tiếp ngôn ngữ.' },
      { id: 'v16_6', hanzi: '团队合作', pinyin: 'tuánduì hézuò', hv: 'Đoàn Đội Hợp Tác', vi: 'Làm việc nhóm', type: 'Kỹ năng', exampleZh: '我非常注重团队合作精神。', examplePinyin: 'Wǒ fēicháng zhùzhòng tuánduì hézuò jīngshén.', exampleVi: 'Tôi rất chú trọng tinh thần làm việc nhóm.' },
      { id: 'v16_7', hanzi: '录用', pinyin: 'lùyòng', hv: 'Lục Dụng', vi: 'Tuyển dụng, nhận vào làm', type: 'Động từ', exampleZh: '公司决定正式录用你。', examplePinyin: 'Gōngsī juédìng zhèngshì lùyòng nǐ.', exampleVi: 'Công ty quyết định chính thức tuyển dụng bạn.' },
      { id: 'v16_8', hanzi: '入职', pinyin: 'rùzhí', hv: 'Nhập Chức', vi: 'Bắt đầu nhận việc', type: 'Động từ', exampleZh: '下周一正式办理入职手续。', examplePinyin: 'Xià zhōu yī zhèngshì bànlǐ rùzhí shǒuxù.', exampleVi: 'Thứ Hai tuần sau chính thức làm thủ tục nhận việc.' },
    ],
    grammarPoints: [
      {
        title: '1. Cấu trúc giới thiệu kinh nghiệm: "有...年的工作经验"',
        pattern: 'Chủ ngữ + 有 + [Số] 年 + 领域 + 工作经验',
        examples: [
          { zh: '我有五年的国际贸易经验。', pinyin: 'Wǒ yǒu wǔ nián de guójì màoyì jīngyàn.', vi: 'Tôi có 5 năm kinh nghiệm thương mại quốc tế.' },
          { zh: '他有丰富的管理经验。', pinyin: 'Tā yǒu fēngfù de guǎnlǐ jīngyàn.', vi: 'Anh ấy có kinh nghiệm quản lý dày dặn.' },
        ],
      },
      {
        title: '2. Cách trả lời phỏng vấn chuyên nghiệp: "首先...其次...最后..."',
        pattern: '首先 (Đầu tiên)... 其次 (Thứ hai)... 最后 (Cuối cùng)...',
        explanation: 'Diễn đạt tư duy mạch lạc, có tính logic cao trước nhà tuyển dụng.',
        examples: [
          { zh: '首先我热爱这份工作，其次我具备专业技能。', pinyin: 'Shǒuxiān wǒ rè\'ài zhè fèn gōngzuò, qícì wǒ jùbèi zhuānyè jìnéng.', vi: 'Trước hết tôi yêu thích công việc này, thứ hai tôi có kỹ năng chuyên môn.' },
        ],
      },
    ],
    reading: {
      title: '外企应聘面试 (Phỏng vấn vào doanh nghiệp)',
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
          { text: 'B. 业余爱好 (Sở thích cá nhân)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, speaker: 'HR', hanzi: '祝贺你通过了面试，下周一开始上班。', pinyin: 'Zhùhè nǐ tōngguò le miànshì, xià zhōu yī kāishǐ shàngbān.', vi: 'Chúc mừng bạn đã vượt qua phỏng vấn, thứ hai tuần sau đi làm.' },
        { id: 1, speaker: 'Ứng viên', hanzi: '太感谢了！我会竭尽全力做好工作！', pinyin: 'Tài gǎnxiè le! Wǒ huì jiéjìn quánlì zuò hǎo gōngzuò!', vi: 'Cảm ơn anh chị rất nhiều! Tôi sẽ dốc hết sức làm tốt công việc!' },
      ],
      quiz: {
        sentencePrefix: '祝贺你顺利通过了本轮',
        missingWord: '面试',
        sentenceSuffix: '。',
        hint: 'miànshì (phỏng vấn)',
      },
    },
    speaking: {
      targetHanzi: '祝我们未来合作愉快',
      targetPinyin: 'Zhù wǒmen wèilái hézuò yúkuài',
      vietnameseMeaning: 'Chúc cho sự hợp tác tương lai tốt đẹp',
      sentences: [
        { hanzi: '我对贵公司的企业文化非常认同。', pinyin: 'Wǒ duì guì gōngsī de qǐyè wénhuà fēicháng rèntóng.', vi: 'Tôi rất đồng cảm với văn hóa doanh nghiệp của quý công ty.' },
        { hanzi: '我希望能为团队创造更大的价值。', pinyin: 'Wǒ xīwàng néng wèi tuánduì chuàngzào gèng dà de jiàzhí.', vi: 'Tôi hy vọng có thể tạo ra nhiều giá trị hơn cho tập thể.' },
      ],
    },
    writing: {
      targetChar: '业',
      charPinyin: 'yè',
      charMeaning: 'Nghiệp (Sự nghiệp, Doanh nghiệp, Nghề nghiệp)',
      radical: '一 (bộ Nhất)',
      strokeCount: 5,
      tips: 'Tượng trưng cho sự nghiệp và công danh phát triển vươn lên.',
      compositionTask: {
        prompt: 'Dịch câu: "Tôi muốn làm việc tại công ty này"',
        expectedKeywords: ['我想', '这家公司', '工作'],
        sampleSolution: '我想在这家公司工作 (Wǒ xiǎng zài zhè jiā gōngsī gōngzuò)',
      },
    },
    matchingWords: [
      { id: 'w16_1', hanzi: '面试', pinyin: 'miànshì', vi: 'Phỏng vấn' },
      { id: 'w16_2', hanzi: '简历', pinyin: 'jiǎnlì', vi: 'CV hồ sơ' },
      { id: 'w16_3', hanzi: '经验', pinyin: 'jīngyàn', vi: 'Kinh nghiệm' },
      { id: 'w16_4', hanzi: '薪水', pinyin: 'xīnshui', vi: 'Tiền lương' },
      { id: 'w16_5', hanzi: '优势', pinyin: 'yōushì', vi: 'Thế mạnh' },
      { id: 'w16_6', hanzi: '录用', pinyin: 'lùyòng', vi: 'Tuyển dụng' },
    ],
  },

  {
    id: 'hsk4-lesson17',
    level: 'HSK 4',
    title: 'Bài 17: Đàm phán giá cả, Chiết khấu & Điều khoản thanh toán (商务谈判、报价与折扣)',
    description: 'Thương thảo giá đơn hàng lớn, đề xuất mức chiết khấu và phương thức thanh toán L/C, T/T.',
    category: 'Thương mại HSK 4',
    vocabularies: [
      { id: 'v17_1', hanzi: '谈判', pinyin: 'tánpàn', hv: 'Đàm Phán', vi: 'Đàm phán thương lượng', type: 'Động từ', exampleZh: '双方进行了友好的商业谈判。', examplePinyin: 'Shuāngfāng jìnxíng le yǒuhǎo de shāngyè tánpàn.', exampleVi: 'Hai bên đã tiến hành đàm phán thương mại hữu nghị.' },
      { id: 'v17_2', hanzi: '报价', pinyin: 'bàojià', hv: 'Báo Giá', vi: 'Báo giá, đơn giá', type: 'Thương mại', exampleZh: '请向我们提供最新的产品报价单。', examplePinyin: 'Qǐng xiàng wǒmen tígōng zuìxīn de chǎnpǐn bàojiàdān.', exampleVi: 'Xin cung cấp bảng báo giá sản phẩm mới nhất cho chúng tôi.' },
      { id: 'v17_3', hanzi: '折扣', pinyin: 'zhékòu', hv: 'Chiết Khấu', vi: 'Chiết khấu, giảm giá', type: 'Kinh tế', exampleZh: '如果订购一万件，能给多少折扣？', examplePinyin: 'Rúguǒ dìnggòu yī wàn jiàn, néng gěi duōshao zhékòu?', exampleVi: 'Nếu đặt 10.000 chiếc thì được chiết khấu bao nhiêu?' },
      { id: 'v17_4', hanzi: '成本', pinyin: 'chéngběn', hv: 'Thành Bản', vi: 'Giá vốn, giá thành sản xuất', type: 'Tài chính', exampleZh: '由于原材料上涨，我们的生产成本很高。', examplePinyin: 'Yóuyú yuáncáiliào shàngzhǎng, wǒmen de shēngchǎn chéngběn hěn gāo.', exampleVi: 'Do nguyên liệu tăng giá nên giá thành của chúng tôi rất cao.' },
      { id: 'v17_5', hanzi: '付款方式', pinyin: 'fùkuǎn fāngshì', hv: 'Phó Khoản Phương Thức', vi: 'Phương thức thanh toán', type: 'Thương mại', exampleZh: '我们建议采用电汇 (T/T) 付款方式。', examplePinyin: 'Wǒmen jiànyì cǎiyòng diànhuì (T/T) fùkuǎn fāngshì.', exampleVi: 'Chúng tôi kiến nghị áp dụng phương thức chuyển khoản T/T.' },
      { id: 'v17_6', hanzi: '订金', pinyin: 'dìngjīn', hv: 'Đính Kim', vi: 'Tiền đặt cọc đơn hàng', type: 'Tiền tệ', exampleZh: '合同签订后预付百分之三十订金。', examplePinyin: 'Hétong qiāndìng hòu yùfù bǎi fēn zhī sānshí dìngjīn.', exampleVi: 'Sau khi ký hợp đồng thanh toán trước 30% tiền cọc.' },
      { id: 'v17_7', hanzi: '让步', pinyin: 'ràngbù', hv: 'Nhượng Bộ', vi: 'Nhượng bộ, thỏa hiệp', type: 'Động từ', exampleZh: '为了长期合作，我们愿意做出一丁点让步。', examplePinyin: 'Wèile chángqī hézuò, wǒmen yuànyì zuòchū yī dīngdiǎn ràngbù.', exampleVi: 'Vì sự hợp tác lâu dài, chúng tôi sẵn sàng nhượng bộ một chút.' },
      { id: 'v17_8', hanzi: '共赢', pinyin: 'gòngyíng', hv: 'Cộng Doanh', vi: 'Đôi bên cùng có lợi (Win-Win)', type: 'Chiến lược', exampleZh: '互利共赢是最好的合作模式。', examplePinyin: 'Hù lì gòng yíng shì zuì hǎo de hézuò móshì.', exampleVi: 'Đôi bên cùng có lợi là mô hình hợp tác tốt đẹp nhất.' },
    ],
    grammarPoints: [
      {
        title: '1. Cách diễn đạt tỷ lệ phần trăm: "百分之 + Số" (Bǎi fēn zhī...)',
        pattern: '百分之 + [Số]',
        examples: [
          { zh: '百分之五的折扣', pinyin: 'Bǎi fēn zhī wǔ de zhékòu', vi: 'Mức chiết khấu 5%' },
          { zh: '百分之三十的定金', pinyin: 'Bǎi fēn zhī sānshí de dìngjīn', vi: '30% tiền đặt cọc' },
        ],
      },
      {
        title: '2. Cấu trúc câu điều kiện thương mại: "如果...就..."',
        pattern: '如果 + Khối lượng đặt hàng + 就 + Mức ưu đãi',
        examples: [
          { zh: '如果订单量大，我们就可以给予更优惠的价格。', pinyin: 'Rúguǒ dìngdān liàng dà, wǒmen jiù kěyǐ jǐyǔ gèng yōuhuì de jiàgé.', vi: 'Nếu số lượng đơn hàng lớn, chúng tôi có thể áp dụng mức giá ưu đãi hơn.' },
        ],
      },
    ],
    reading: {
      title: '商务价格谈判与让步 (Đàm phán giá cả thương mại)',
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
      translationVi: 'Giám đốc Trần: Vương tổng, liệu quý công ty có thể chiết khấu 5% không ạ?\nVương tổng: Chúng tôi đồng ý, tuần sau sẽ chính thức ký hợp đồng thương mại.',
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
        { id: 0, speaker: 'Trần giám đốc', hanzi: '贵公司的报价比市场平均价高出了百分之三。', pinyin: 'Guì gōngsī de bàojià bǐ shìchǎng píngjūnjià gāochū le bǎi fēn zhī sān.', vi: 'Báo giá của quý công ty cao hơn giá bình quân thị trường 3%.' },
        { id: 1, speaker: 'Vương tổng', hanzi: '但是我们的产品质量和售后保障是最好的。', pinyin: 'Dànshì wǒmen de chǎnpǐn zhìliàng hé shòuhòu bǎozhàng shì zuì hǎo de.', vi: 'Thế nhưng chất lượng sản phẩm và bảo hành hậu mãi của chúng tôi là tốt nhất.' },
      ],
      quiz: {
        sentencePrefix: '为了双方长期合作，我们决定给予百分之五的',
        missingWord: '折扣',
        sentenceSuffix: '。',
        hint: 'zhékòu (chiết khấu)',
      },
    },
    speaking: {
      targetHanzi: '互利共赢是双方长期合作的基础',
      targetPinyin: 'Hù lì gòng yíng shì shuāngfāng chángqī hézuò de jīchǔ',
      vietnameseMeaning: 'Đôi bên cùng có lợi là nền tảng cho sự hợp tác lâu dài',
      sentences: [
        { hanzi: '希望贵方能考虑我们的提议，给予适当折扣。', pinyin: 'Xīwàng guìfāng néng kǎolǜ wǒmen de tíyì, jǐyǔ shìdàng zhékòu.', vi: 'Hy vọng quý phía đối tác cân nhắc đề xuất và chiết khấu phù hợp.' },
      ],
    },
    writing: {
      targetChar: '商',
      charPinyin: 'shāng',
      charMeaning: 'Thương (Thương nhân, Thương mại, Thảo luận)',
      radical: '口 (bộ Khẩu)',
      strokeCount: 11,
      tips: 'Thương thảo, bàn bạc việc trao đổi hàng hóa làm kinh tế.',
      compositionTask: {
        prompt: 'Dịch câu: "Chúng tôi muốn hợp tác với quý công ty"',
        expectedKeywords: ['我们想与', '贵公司', '合作'],
        sampleSolution: 'Chúng tôi muốn cùng quý công ty hợp tác',
      },
    },
    matchingWords: [
      { id: 'w17_1', hanzi: '谈判', pinyin: 'tánpàn', vi: 'Đàm phán' },
      { id: 'w17_2', hanzi: '报价', pinyin: 'bàojià', vi: 'Báo giá' },
      { id: 'w17_3', hanzi: '折扣', pinyin: 'zhékòu', vi: 'Chiết khấu' },
      { id: 'w17_4', hanzi: '成本', pinyin: 'chéngběn', vi: 'Giá vốn' },
      { id: 'w17_5', hanzi: '付款', pinyin: 'fùkuǎn', vi: 'Thanh toán' },
      { id: 'w17_6', hanzi: '共赢', pinyin: 'gòngyíng', vi: 'Cùng có lợi' },
    ],
  },

  {
    id: 'hsk4-lesson18',
    level: 'HSK 4',
    title: 'Bài 18: Ký kết hợp đồng kinh tế & Thỏa thuận hợp tác (合同签订与商业合作)',
    description: 'Các điều khoản hợp đồng kinh tế, thời hạn giao hàng, trách nhiệm bồi thường và ký kết song phương.',
    category: 'Thương mại HSK 4',
    vocabularies: [
      { id: 'v18_1', hanzi: '签署', pinyin: 'qiānshǔ', hv: 'Thiêm Thự', vi: 'Ký kết (văn bản cấp cao)', type: 'Động từ', exampleZh: '双方隆重签署了战略合作协议。', examplePinyin: 'Shuāngfāng lóngzhòng qiānshǔ le zhànlüè hézuò xiéyì.', exampleVi: 'Hai bên đã long trọng ký kết thỏa thuận hợp tác chiến lược.' },
      { id: 'v18_2', hanzi: '条款', pinyin: 'tiáokuǎn', hv: 'Điều Khoản', vi: 'Điều khoản hợp đồng', type: 'Pháp lý', exampleZh: '双方仔细审核了合同各项条款。', examplePinyin: 'Shuāngfāng zǐxì shěnhé le hétong gèxiàng tiáokuǎn.', exampleVi: 'Hai bên rà soát kỹ lưỡng từng điều khoản trong hợp đồng.' },
      { id: 'v18_3', hanzi: '交货期', pinyin: 'jiāohuòqī', hv: 'Giao Hóa Kỳ', vi: 'Thời hạn giao nhận hàng', type: 'Thời gian', exampleZh: '合同规定交货期为三十天以内。', examplePinyin: 'Hétong guīdìng jiāohuòqī wéi sānshí tiān yǐnèi.', exampleVi: 'Hợp đồng quy định thời hạn giao hàng trong vòng 30 ngày.' },
      { id: 'v18_4', hanzi: '违约', pinyin: 'wéiyuē', hv: 'Vi Ước', vi: 'Vi phạm hợp đồng, phá vỡ cam kết', type: 'Pháp lý', exampleZh: '任何一方违约都必须承担赔偿责任。', examplePinyin: 'Rènhé yī fāng wéiyuē dōu bìxū chéngdān péicháng zérèn.', exampleVi: 'Bất kỳ bên nào vi phạm hợp đồng đều phải chịu trách nhiệm bồi thường.' },
      { id: 'v18_5', hanzi: '生效', pinyin: 'shēngxiào', hv: 'Sinh Hiệu', vi: 'Có hiệu lực thi hành', type: 'Động từ', exampleZh: '本合同自双方签字盖章之日起生效。', examplePinyin: 'Běn hétong zì shuāngfāng qiānzì gàizhāng zhī rì qǐ shēngxiào.', exampleVi: 'Hợp đồng này có hiệu lực kể từ ngày hai bên ký tên và đóng dấu.' },
      { id: 'v18_6', hanzi: '盖章', pinyin: 'gàizhāng', hv: 'Cái Chương', vi: 'Đóng dấu mộc đỏ', type: 'Động từ', exampleZh: '请在合同末页签字并盖章。', examplePinyin: 'Qǐng zài hétong mò yè qiānzì bìng gàizhāng.', exampleVi: 'Xin vui lòng ký tên và đóng dấu ở trang cuối hợp đồng.' },
      { id: 'v18_7', hanzi: '责任', pinyin: 'zérèn', hv: 'Trách Nhiệm', vi: 'Trách nhiệm, nghĩa vụ', type: 'Pháp lý', exampleZh: '双方共同承担运输过程中的风险责任。', examplePinyin: 'Shuāngfāng gòngtóng chéngdān yùnshū guòchéng zhōng de fēngxiǎn zérèn.', exampleVi: 'Hai bên cùng gánh vác rủi ro trong quá trình vận chuyển.' },
      { id: 'v18_8', hanzi: '一式两份', pinyin: 'yīshì liǎngfèn', hv: 'Nhất Thức Lưỡng Phần', vi: 'Lập thành 2 bản gốc có giá trị như nhau', type: 'Thành ngữ', exampleZh: '本合同一式两份，双方各执一份。', examplePinyin: 'Běn hétong yīshì liǎngfèn, shuāngfāng gè zhí yī fèn.', exampleVi: 'Hợp đồng này lập thành 2 bản, mỗi bên giữ 1 bản.' },
    ],
    grammarPoints: [
      {
        title: '1. Mẫu câu pháp lý: "自...之日起生效" (Có hiệu lực kể từ ngày...)',
        pattern: '自 + Mốc thời gian / Hành động + 之日起生效',
        examples: [
          { zh: '自签字之日起生效。', pinyin: 'Zì qiānzì zhī rì qǐ shēngxiào.', vi: 'Có hiệu lực kể từ ngày ký.' },
        ],
      },
      {
        title: '2. Cấu trúc nghĩa vụ pháp lý: "必须承担...责任"',
        pattern: 'Chủ ngữ + 必须承担 + Trách nhiệm (bồi thường/vi phạm)',
        examples: [
          { zh: '违约方必须承担经济损失赔偿责任。', pinyin: 'Wéiyuē fāng bìxū chéngdān jīngjì sǔnshī péicháng zérèn.', vi: 'Bên vi phạm phải chịu trách nhiệm bồi thường thiệt hại kinh tế.' },
        ],
      },
    ],
    reading: {
      title: '正式合同签约仪式 (Lễ ký kết hợp đồng chính thức)',
      tokens: [
        { hanzi: '主持人：', isSpeaker: true },
        { hanzi: '各位嘉宾', pinyin: 'gèwèi jiābīn', vi: 'Kính thưa quý vị', hv: 'Các Vị Gia Tân' },
        { hanzi: '，签约仪式', pinyin: 'qiānyuē yíshì', vi: 'Lễ ký kết', hv: 'Thiêm Ước Nghi Thức' },
        { hanzi: '现在正式开始', pinyin: 'xiànzài zhèngshì kāishǐ', vi: 'Bắt đầu', hv: 'Hiện Tại Chính Thức Khai Thủy' },
        { hanzi: '。双方代表', pinyin: 'shuāngfāng dàibiǎo', vi: 'Đại diện hai bên', hv: 'Song Phương Đại Biểu' },
        { hanzi: '签字盖章', pinyin: 'qiānzì gàizhāng', vi: 'Ký tên đóng dấu', hv: 'Thiêm Tự Cái Chương' },
        { hanzi: '。' },
      ],
      translationVi: 'Người dẫn chương trình: Kính thưa quý vị, lễ ký kết xin được chính thức bắt đầu. Mời đại diện hai bên cùng ký tên và đóng dấu vào bản hợp đồng.',
      quiz: {
        question: 'Tại lễ ký kết, đại diện hai bên thực hiện hành động gì?',
        options: [
          { text: 'A. 签字盖章 (Ký tên đóng dấu)', correct: true },
          { text: 'B. 申请退款 (Xin hoàn tiền)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, speaker: 'Đại diện bên A', hanzi: '祝贺我们今天圆满签订了合作协议！', pinyin: 'Zhùhè wǒmen jīntiān yuánmǎn qiāndìng le hézuò xiéyì!', vi: 'Chúc mừng hôm nay chúng ta đã ký kết viên mãn thỏa thuận hợp tác!' },
        { id: 1, speaker: 'Đại diện bên B', hanzi: '为我们的长久合作干杯！', pinyin: 'Wèi wǒmen de chángjiǔ hézuò gānbēi!', vi: 'Cạn ly vì sự hợp tác bền lâu của chúng ta!' },
      ],
      quiz: {
        sentencePrefix: '祝贺我们今天圆满签订了',
        missingWord: '合作协议',
        sentenceSuffix: '！',
        hint: 'hézuò xiéyì (thỏa thuận hợp tác)',
      },
    },
    speaking: {
      targetHanzi: '本合同一式两份双方各执一份具有同等法律效力',
      targetPinyin: 'Běn hétong yīshì liǎngfèn shuāngfāng gè zhí yī fèn jùyǒu tóngděng fǎlǜ xiàolì',
      vietnameseMeaning: 'Hợp đồng này lập thành 2 bản mỗi bên giữ 1 bản có hiệu lực pháp lý như nhau',
      sentences: [
        { hanzi: '请双方代表确认无误后在末页签字。', pinyin: 'Qǐng shuāngfāng dàibiǎo quèrèn wúwù hòu zài mò yè qiānzì.', vi: 'Xin đại diện hai bên sau khi kiểm tra chính xác thì ký vào trang cuối.' },
      ],
    },
    writing: {
      targetChar: '同',
      charPinyin: 'tóng',
      charMeaning: 'Đồng (Cùng nhau, Hợp đồng, Đồng ý)',
      radical: '口 (bộ Khẩu)',
      strokeCount: 6,
      tips: 'Mọi người chung một tiếng nói (口) là Đồng lòng (同).',
      compositionTask: {
        prompt: 'Dịch câu: "Ký kết hợp đồng"',
        expectedKeywords: ['签订', '合同'],
        sampleSolution: '签订合同 (Qiāndìng hétong)',
      },
    },
    matchingWords: [
      { id: 'w18_1', hanzi: '签署', pinyin: 'qiānshǔ', vi: 'Ký kết' },
      { id: 'w18_2', hanzi: '条款', pinyin: 'tiáokuǎn', vi: 'Điều khoản' },
      { id: 'w18_3', hanzi: '合同', pinyin: 'hétong', vi: 'Hợp đồng' },
      { id: 'w18_4', hanzi: '违约', pinyin: 'wéiyuē', vi: 'Vi ước' },
      { id: 'w18_5', hanzi: '盖章', pinyin: 'gàizhāng', vi: 'Đóng dấu' },
      { id: 'w18_6', hanzi: '生效', pinyin: 'shēngxiào', vi: 'Hiệu lực' },
    ],
  },

  {
    id: 'hsk4-lesson19',
    level: 'HSK 4',
    title: 'Bài 19: Logistics, Vận chuyển hàng hóa & Thông quan (国际物流与海关申报)',
    description: 'Quy trình xuất nhập khẩu hàng hóa, vận tải đường biển/đường bộ, đóng kiện và thủ tục hải quan.',
    category: 'Thương mại HSK 4',
    vocabularies: [
      { id: 'v19_1', hanzi: '物流', pinyin: 'wùliú', hv: 'Vật Lưu', vi: 'Ngành Logistics, vận tải hàng hóa', type: 'Ngành nghề', exampleZh: '现代国际物流非常高效。', examplePinyin: 'Xiàndài guójì wùliú fēicháng gāoxiào.', exampleVi: 'Ngành logistics quốc tế hiện đại rất hiệu quả.' },
      { id: 'v19_2', hanzi: '海关', pinyin: 'hǎiguān', hv: 'Hải Quan', vi: 'Cơ quan hải quan', type: 'Nhà nước', exampleZh: '这批货物正在海关办理清关。', examplePinyin: 'Zhè pī huòwù zhèngzài hǎiguān bànlǐ qīngguān.', exampleVi: 'Lô hàng này đang làm thủ tục thông quan tại hải quan.' },
      { id: 'v19_3', hanzi: '清关', pinyin: 'qīngguān', hv: 'Thanh Quan', vi: 'Thông quan xuất nhập khẩu', type: 'Động từ', exampleZh: '顺利清关后即可安排派送。', examplePinyin: 'Shùnlì qīngguān hòu jíkě ānpái pàisòng.', exampleVi: 'Sau khi thông quan suôn sẻ có thể sắp xếp giao hàng ngay.' },
      { id: 'v19_4', hanzi: '集装箱', pinyin: 'jízhuāngxiāng', hv: 'Tập Trang Tương', vi: 'Thùng container', type: 'Vận tải', exampleZh: '我们需要预订两个四十尺高柜集装箱。', examplePinyin: 'Wǒmen xūyào yùdìng liǎng gè sìshí chǐ gāoguì jízhuāngxiāng.', exampleVi: 'Chúng tôi cần đặt hai container 40 feet cao (40HQ).' },
      { id: 'v19_5', hanzi: '运费', pinyin: 'yùnfèi', hv: 'Vận Phí', vi: 'Cước phí vận chuyển', type: 'Chi phí', exampleZh: '海运运费比空运便宜得多。', examplePinyin: 'Hǎiyùn yùnfèi bǐ kōngyùn piányi de duō.', exampleVi: 'Cước vận chuyển đường biển rẻ hơn đường hàng không nhiều.' },
      { id: 'v19_6', hanzi: '包装', pinyin: 'bāozhuāng', hv: 'Bao Trang', vi: 'Đóng gói, bao bì', type: 'Động từ', exampleZh: '商品必须采用防潮木箱包装。', examplePinyin: 'Shāngpǐn bìxū cǎiyòng fángcháo mùxiāng bāozhuāng.', exampleVi: 'Hàng hóa bắt buộc phải đóng kiện bằng thùng gỗ chống ẩm.' },
      { id: 'v19_7', hanzi: '提单', pinyin: 'tídān', hv: 'Đề Đơn', vi: 'Vận đơn đường biển (Bill of Lading - B/L)', type: 'Chứng từ', exampleZh: '凭借正本提单提取货物。', examplePinyin: 'Píngjiè zhèngběn tídān tíqǔ huòwù.', exampleVi: 'Dựa vào vận đơn gốc B/L để nhận hàng.' },
      { id: 'v19_8', hanzi: '关税', pinyin: 'guānshuì', hv: 'Quan Thuế', vi: 'Thuế xuất nhập khẩu', type: 'Thuế', exampleZh: '根据两国自贸协定，该产品享受零关税。', examplePinyin: 'Gēnjù liǎng guó zìmào xiédìng, gāi chǎnpǐn xiǎngshòu líng guānshuì.', exampleVi: 'Theo hiệp định mậu dịch tự do hai nước, sản phẩm này được hưởng thuế 0%.' },
    ],
    grammarPoints: [
      {
        title: '1. Cấu trúc so sánh chi phí vận chuyển với "比...便宜得多"',
        pattern: 'Phương thức A + 比 + Phương thức B + 便宜得多 / 贵得多',
        examples: [
          { zh: '海运比空运便宜得多。', pinyin: 'Hǎiyùn bǐ kōngyùn piányi de duō.', vi: 'Vận chuyển đường biển rẻ hơn vận chuyển hàng không nhiều.' },
          { zh: '高铁比汽车快得多。', pinyin: 'Gāotiě bǐ qìchē kuài de duō.', vi: 'Tàu cao tốc nhanh hơn ô tô nhiều.' },
        ],
      },
      {
        title: '2. Giới từ chỉ căn cứ pháp lý: "根据..." (Căn cứ vào...)',
        pattern: '根据 + Hiệp định / Hợp đồng / Quy định',
        examples: [
          { zh: '根据合同规定，货物必须准时发出。', pinyin: 'Gēnjù hétong guīdìng, huòwù bìxū zhǔnshí fāchū.', vi: 'Căn cứ vào quy định hợp đồng, hàng hóa bắt buộc phải gửi đúng hẹn.' },
        ],
      },
    ],
    reading: {
      title: '国际海运与报关手续 (Vận tải biển quốc tế và hải quan)',
      tokens: [
        { hanzi: '货代经理：', isSpeaker: true },
        { hanzi: '李总', pinyin: 'Lǐ zǒng', vi: 'Lý tổng', hv: 'Lý Tổng' },
        { hanzi: '，这批集装箱', pinyin: 'zhè pī jízhuāngxiāng', vi: 'Lô container này', hv: 'Giá Phi Tập Trang Tương' },
        { hanzi: '已经完成报关', pinyin: 'yǐjīng wánchéng bàoguān', vi: 'Đã khai báo hải quan xong', hv: 'Dĩ Kinh Hoàn Thành Báo Quan' },
        { hanzi: '，下周一装船起航。' },
      ],
      translationVi: 'Giám đốc Forwarder: Lý tổng, lô container này đã hoàn tất thủ tục khai báo hải quan, thứ Hai tuần sau sẽ bốc lên tàu khởi hành ạ.',
      quiz: {
        question: 'Lô hàng container sẽ được bốc lên tàu vào thời gian nào?',
        options: [
          { text: 'A. 下周一 (Thứ Hai tuần sau)', correct: true },
          { text: 'B. 明天 (Ngày mai)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, speaker: 'Khách hàng', hanzi: '请问海运提单什么时候能交给我们？', pinyin: 'Qǐngwèn hǎiyùn tídān shénme shíhou néng jiāo gěi wǒmen?', vi: 'Xin hỏi khi nào thì có thể bàn giao vận đơn đường biển cho chúng tôi?' },
        { id: 1, speaker: 'Hãng tàu', hanzi: '船开后两个工作日内寄出正本提单。', pinyin: 'Chuán kāi hòu liǎng gè gōngzuòrì nèi jìchū zhèngběn tídān.', vi: 'Trong 2 ngày làm việc sau khi tàu rời bến sẽ gửi bản gốc vận đơn.' },
      ],
      quiz: {
        sentencePrefix: '货物已经顺利完成了海关',
        missingWord: '清关',
        sentenceSuffix: '手续。',
        hint: 'qīngguān (thông quan)',
      },
    },
    speaking: {
      targetHanzi: '货物必须在约定的交货期内顺利完成清关并送达目的地',
      targetPinyin: 'Huòwù bìxū zài yuēdìng de jiāohuòqī nèi shùnlì wánchéng qīngguān bìng sòngdá mùdìdì',
      vietnameseMeaning: 'Hàng hóa bắt buộc phải thông quan suôn sẻ và chuyển tới đích trong thời hạn giao kết',
      sentences: [
        { hanzi: '请确保包装牢固，防止长途海运受潮受损。', pinyin: 'Qǐng quèbǎo bāozhuāng láogù, fángzhǐ chángtú hǎiyùn shòucháo shòusǔn.', vi: 'Xin đảm bảo đóng kiện chắc chắn, tránh ẩm ướt hư hao trong chuyến biển dài.' },
      ],
    },
    writing: {
      targetChar: '运',
      charPinyin: 'yùn',
      charMeaning: 'Vận (Vận chuyển, Vận may, Vận động)',
      radical: '辶 (bộ Xước - di chuyển) + 云 (mây)',
      strokeCount: 7,
      tips: 'Những đám mây (云) bay lượn di chuyển (辶) trên bầu trời tạo thành chữ Vận (运).',
      compositionTask: {
        prompt: 'Dịch câu: "Chi phí vận chuyển"',
        expectedKeywords: ['运费'],
        sampleSolution: '运费 (Yùnfèi)',
      },
    },
    matchingWords: [
      { id: 'w19_1', hanzi: '物流', pinyin: 'wùliú', vi: 'Logistics' },
      { id: 'w19_2', hanzi: '海关', pinyin: 'hǎiguān', vi: 'Hải quan' },
      { id: 'w19_3', hanzi: '清关', pinyin: 'qīngguān', vi: 'Thông quan' },
      { id: 'w19_4', hanzi: '集装箱', pinyin: 'jízhuāngxiāng', vi: 'Container' },
      { id: 'w19_5', hanzi: '运费', pinyin: 'yùnfèi', vi: 'Cước vận chuyển' },
      { id: 'w19_6', hanzi: '提单', pinyin: 'tídān', vi: 'Vận đơn B/L' },
    ],
  },

  {
    id: 'hsk4-lesson20',
    level: 'HSK 4',
    title: 'Bài 20: Tiếp đón đối tác khách hàng & Tiệc chiêu đãi ngoại giao (商务宴请与商务接待)',
    description: 'Văn hóa bàn tiệc Trung Hoa, cách tiếp đón khách quý tại sân bay, nâng ly chúc mừng và tặng quà lưu niệm.',
    category: 'Thương mại HSK 4',
    vocabularies: [
      { id: 'v20_1', hanzi: '接机', pinyin: 'jiējī', hv: 'Tiếp Cơ', vi: 'Đón tại sân bay', type: 'Động từ', exampleZh: '我们安排专车去首都机场接机。', examplePinyin: 'Wǒmen ānpái zhuānchē qù Shǒudū jīchǎng jiējī.', exampleVi: 'Chúng tôi sắp xếp xe riêng đón đoàn ở sân bay Thủ đô.' },
      { id: 'v20_2', hanzi: '宴请', pinyin: 'yànqǐng', hv: 'Yến Thỉnh', vi: 'Chiêu đãi tiệc', type: 'Xã giao', exampleZh: '今晚董事长在全聚德宴请贵宾。', examplePinyin: 'Jīnwǎn dǒngshìzhǎng zài Quánjùdé yànqǐng guìbīn.', exampleVi: 'Tối nay Chủ tịch hội đồng quản trị chiêu đãi khách quý tại Toàn Tụ Đức.' },
      { id: 'v20_3', hanzi: '干杯', pinyin: 'gānbēi', hv: 'Can Bôi', vi: 'Cạn ly! (100%)', type: 'Nâng ly', exampleZh: '为了我们的友谊，干杯！', examplePinyin: 'Wèile wǒmen de yǒuyì, gānbēi!', exampleVi: 'Vì tình hữu nghị của chúng ta, cạn ly!' },
      { id: 'v20_4', hanzi: '招待', pinyin: 'zhāodài', hv: 'Chiêu Đãi', vi: 'Tiếp đãi nồng hậu', type: 'Động từ', exampleZh: '感谢各位的热情招待！', examplePinyin: 'Gǎnxiè gèwèi de rèqíng zhāodài!', exampleVi: 'Chân thành cảm ơn sự tiếp đãi nồng hậu của quý vị!' },
      { id: 'v20_5', hanzi: '纪念品', pinyin: 'jìniànpǐn', hv: 'Kỷ Niệm Phẩm', vi: 'Quà lưu niệm', type: 'Quà tặng', exampleZh: '这是我们精心准备的传统工艺纪念品。', examplePinyin: 'Zhè shì wǒmen jīngxīn zhǔnbèi de chuántǒng gōngyì jìniànpǐn.', exampleVi: 'Đây là món quà thủ công truyền thống do chúng tôi chuẩn bị chu đáo.' },
      { id: 'v20_6', hanzi: '辛苦', pinyin: 'xīnkǔ', hv: 'Tân Khổ', vi: 'Vất vả (lời xã giao lịch sự)', type: 'Tính từ', exampleZh: '各位一路舟车劳顿，辛苦了！', examplePinyin: 'Gèwèi yīlù zhōuchē láodùn, xīnkǔ le!', exampleVi: 'Quý vị đi đường xa mệt nhọc vất vả rồi!' },
      { id: 'v20_7', hanzi: '合作愉快', pinyin: 'hézuò yúkuài', hv: 'Hợp Tác Du Khoái', vi: 'Hợp tác vui vẻ, tốt đẹp', type: 'Lời chúc', exampleZh: '预祝我们今后合作愉快！', examplePinyin: 'Yùzhù wǒmen jīnhòu hézuò yúkuài!', exampleVi: 'Kính chúc tương lai đôi bên hợp tác vui vẻ thành công!' },
      { id: 'v20_8', hanzi: '顺风', pinyin: 'shùnfēng', hv: 'Thuận Phong', vi: 'Thuận buồm xuôi gió, thượng lộ bình an', type: 'Lời chúc', exampleZh: '祝您返程一路顺风！', examplePinyin: 'Zhù nín fǎnchéng yīlù shùnfēng!', exampleVi: 'Chúc ngài chuyến bay trở về thượng lộ bình an!' },
    ],
    grammarPoints: [
      {
        title: '1. Mẫu câu chúc rượu trên bàn tiệc: "为了...干杯！"',
        pattern: '为了 + Mục đích / Tình bạn / Hợp tác + 干杯！',
        examples: [
          { zh: '为了我们的成功合作，干杯！', pinyin: 'Wèile wǒmen de chénggōng hézuò, gānbēi!', vi: 'Vì sự hợp tác thành công của chúng ta, cạn ly!' },
          { zh: '为了大家的身体健康，干杯！', pinyin: 'Wèile dàjiā de shēntǐ jiànkāng, gānbēi!', vi: 'Vì sức khỏe của mọi người, cạn ly!' },
        ],
      },
      {
        title: '2. Mẫu câu cảm ơn xã giao ngoại giao cao cấp: "感谢您的热情招待"',
        pattern: '感谢 + Đối tượng + 的 + 热情招待 / 悉心安排',
        examples: [
          { zh: '非常感谢贵公司的热情招待！', pinyin: 'Fēicháng gǎnxiè guì gōngsī de rèqíng zhāodài!', vi: 'Vô cùng cảm ơn sự tiếp đãi nồng hậu của quý công ty!' },
        ],
      },
    ],
    reading: {
      title: '商务晚宴与祝酒词 (Tiệc tối thương mại và lời chúc rượu)',
      tokens: [
        { hanzi: '董事长：', isSpeaker: true },
        { hanzi: '热烈欢迎', pinyin: 'rèliè huānyíng', vi: 'Nhiệt liệt chào mừng', hv: 'Nhiệt Liệt Hoan Nghênh' },
        { hanzi: '各位远道而来', pinyin: 'gèwèi yuǎndào\'érlái', vi: 'Quý vị từ xa tới', hv: 'Các Vị Viễn Đạo Nhi Lai' },
        { hanzi: '！今晚我们准备了', pinyin: 'jīnwǎn wǒmen zhǔnbèi le', vi: 'Tối nay chuẩn bị', hv: 'Kim Vãn Ngã Môn Chuẩn Bị Liễu' },
        { hanzi: '地道的北京烤鸭', pinyin: 'dìdao de Běijīng kǎoyā', vi: 'Vịt quay chuẩn vị Bắc Kinh', hv: 'Địa Đạo Đích Bắc Kinh Khảo Áp' },
        { hanzi: '，请大家开怀畅饮，干杯！' },
      ],
      translationVi: 'Chủ tịch: Nhiệt liệt chào mừng quý vị khách quý đã không quản đường xa đến đây! Tối nay chúng tôi đã chuẩn bị món vịt quay Bắc Kinh chuẩn vị nhất, xin mời mọi người cùng nâng ly, cạn chén!',
      quiz: {
        question: 'Món ăn đặc sản nào được tiếp đãi trong bữa tiệc tối?',
        options: [
          { text: 'A. 北京烤鸭 (Vịt quay Bắc Kinh)', correct: true },
          { text: 'B. 西瓜 (Dưa hấu)', correct: false },
        ],
      },
    },
    listening: {
      dialogues: [
        { id: 0, speaker: 'Khách quý', hanzi: '非常感谢贵公司的热情招待，今天过得非常愉快！', pinyin: 'Fēicháng gǎnxiè guì gōngsī de rèqíng zhāodài, jīntiān guò de fēicháng yúkuài!', vi: 'Rất cảm ơn sự tiếp đãi nồng hậu của quý công ty, hôm nay chúng tôi đã có một ngày thật tuyệt vời!' },
        { id: 1, speaker: 'Chủ nhà', hanzi: '您太客气了，欢迎常来北京做客！', pinyin: 'Nín tài kèqi le, huānyíng cháng lái Běijīng zuòkè!', vi: 'Ngài khách sáo quá, hoan nghênh quý vị thường xuyên đến Bắc Kinh làm khách!' },
      ],
      quiz: {
        sentencePrefix: '为了双方未来的辉煌发展，让我们共同',
        missingWord: '干杯',
        sentenceSuffix: '！',
        hint: 'gānbēi (cạn ly)',
      },
    },
    speaking: {
      targetHanzi: '非常感谢各位的热情接待预祝我们合作圆满成功',
      targetPinyin: 'Fēicháng gǎnxiè gèwèi de rèqíng jiēdài yùzhù wǒmen hézuò yuánmǎn chénggōng',
      vietnameseMeaning: 'Vô cùng cảm ơn sự tiếp đón nồng hậu của quý vị chúc cho sự hợp tác thành công viên mãn',
      sentences: [
        { hanzi: '为我们的深厚友谊和美好未来，干杯！', pinyin: 'Wèi wǒmen de shēnhòu yǒuyì hé měihǎo wèilái, gānbēi!', vi: 'Vì tình hữu nghị sâu sắc và tương lai tươi đẹp của chúng ta, cạn ly!' },
      ],
    },
    writing: {
      targetChar: '客',
      charPinyin: 'kè',
      charMeaning: 'Khách (Khách khứa, Khách sáo, Du khách)',
      radical: '宀 (bộ Miên) + 各 (mỗi người)',
      strokeCount: 9,
      tips: 'Mỗi người (各) từ phương xa bước vào dưới mái nhà (宀) đều là Khách quý (客).',
      compositionTask: {
        prompt: 'Dịch câu: "Chào mừng quý khách đến làm khách"',
        expectedKeywords: ['欢迎', '做客'],
        sampleSolution: '欢迎来做客 (Huānyíng lái zuòkè)',
      },
    },
    matchingWords: [
      { id: 'w20_1', hanzi: '接机', pinyin: 'jiējī', vi: 'Đón sân bay' },
      { id: 'w20_2', hanzi: '宴请', pinyin: 'yànqǐng', vi: 'Tiệc chiêu đãi' },
      { id: 'w20_3', hanzi: '干杯', pinyin: 'gānbēi', vi: 'Cạn ly' },
      { id: 'w20_4', hanzi: '招待', pinyin: 'zhāodài', vi: 'Tiếp đãi' },
      { id: 'w20_5', hanzi: '纪念品', pinyin: 'jìniànpǐn', vi: 'Quà lưu niệm' },
      { id: 'w20_6', hanzi: '顺风', pinyin: 'shùnfēng', vi: 'Thượng lộ bình an' },
    ],
  },
];

export { RAW_LESSONS_DATA };
export const LESSONS_DATA = RAW_LESSONS_DATA.map(enrichFullLesson);
