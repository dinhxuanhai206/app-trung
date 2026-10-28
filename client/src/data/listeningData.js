/**
 * Rich Multi-part Listening Dialogues Database
 * Provides multiple dialogue sections for each lesson, incorporating core vocabulary and real-life conversational contexts.
 */

export const MULTI_LISTENING_DATABASE = {
  'hsk1-lesson1': {
    title: 'Bài 1: Chào hỏi & Giao tiếp cơ bản',
    sections: [
      {
        id: 'sec-1',
        title: 'Đoạn 1: Lần đầu gặp gỡ & Giới thiệu bản thân (初次相识)',
        description: 'Đoạn hội thoại tiêu chuẩn giữa David và Vương Lan khi mới gặp nhau tại trường học.',
        dialogues: [
          { id: 101, speaker: '大卫 (David)', gender: 'male', hanzi: '你好！请问你叫什么名字？', pinyin: 'Nǐ hǎo! Qǐngwèn nǐ jiào shénme míngzì?', vi: 'Xin chào! Xin hỏi bạn tên là gì?', highlightWords: ['你好', '名字'] },
          { id: 102, speaker: '王兰 (Vương Lan)', gender: 'female', hanzi: '你好！我叫王兰，我是中国人。你呢？', pinyin: 'Nǐ hǎo! Wǒ jiào Wáng Lán, wǒ shì Zhōngguó rén. Nǐ ne?', vi: 'Chào bạn! Tôi tên là Vương Lan, tôi là người Trung Quốc. Còn bạn?', highlightWords: ['中国', '人'] },
          { id: 103, speaker: '大卫 (David)', gender: 'male', hanzi: '我叫大卫，我是美国留学生。', pinyin: 'Wǒ jiào Dàwèi, wǒ shì Měiguó liúxuéshēng.', vi: 'Tôi tên là David, tôi là lưu học sinh Mỹ.', highlightWords: ['学生'] },
          { id: 104, speaker: '王兰 (Vương Lan)', gender: 'female', hanzi: '很高兴认识你，大卫！', pinyin: 'Hěn gāoxìng rènshi nǐ, Dàwèi!', vi: 'Rất vui được làm quen với bạn, David!', highlightWords: ['高兴', '认识'] },
          { id: 105, speaker: '大卫 (David)', gender: 'male', hanzi: '认识你我也很高兴！谢谢你。', pinyin: 'Rènshi nǐ wǒ yě hěn gāoxìng! Xièxie nǐ.', vi: 'Quen biết bạn tôi cũng rất vui! Cảm ơn bạn nhé.', highlightWords: ['谢谢', '高兴'] },
          { id: 106, speaker: '王兰 (Vương Lan)', gender: 'female', hanzi: '不客气！明天我们在教室见吧！', pinyin: 'Bù kèqi! Míngtiān wǒmen zài jiàoshì jiàn ba!', vi: 'Đừng khách sáo! Ngày mai chúng mình gặp ở lớp học nhé!', highlightWords: ['明天', '见'] },
          { id: 107, speaker: '大卫 (David)', gender: 'male', hanzi: '好啊，明天见，再见！', pinyin: 'Hǎo a, míngtiān jiàn, zàijiàn!', vi: 'Được thôi, ngày mai gặp, tạm biệt!', highlightWords: ['再见'] },
          { id: 108, speaker: '王兰 (Vương Lan)', gender: 'female', hanzi: '再见！祝你今天过得愉快！', pinyin: 'Zàijiàn! Zhù nǐ jīntiān guò de yúkuài!', vi: 'Tạm biệt! Chúc bạn một ngày vui vẻ!', highlightWords: ['再见', '今天'] },
        ],
        quiz: {
          sentencePrefix: '很高兴',
          missingWord: '认识',
          sentenceSuffix: '你！',
          hint: 'rènshi (quen biết)',
        },
      },
      {
        id: 'sec-2',
        title: 'Đoạn 2: Mở rộng từ vựng - Chào hỏi thầy cô & Bạn bè (师生问候)',
        description: 'Tình huống mở rộng sử dụng các từ vựng chào hỏi lịch sự trong khuôn viên trường học.',
        dialogues: [
          { id: 201, speaker: '李明 (Lý Minh)', gender: 'male', hanzi: '张老师，早上好！您身体好吗？', pinyin: 'Zhāng lǎoshī, zǎoshang hǎo! Nín shēntǐ hǎo ma?', vi: 'Thầy Trương, chào buổi sáng thầy! Thầy có khỏe không ạ?', highlightWords: ['老师', '早上好'] },
          { id: 202, speaker: '张老师 (Thầy Trương)', gender: 'male', hanzi: '早上好，李明！我很好，你最近学习忙吗？', pinyin: 'Zǎoshang hǎo, Lǐ Míng! Wǒ hěn hǎo, nǐ zuìjìn xuéxí máng ma?', vi: 'Chào buổi sáng Lý Minh! Thầy rất khỏe, dạo này em học tập có bận không?', highlightWords: ['学习', '很'] },
          { id: 203, speaker: '李明 (Lý Minh)', gender: 'male', hanzi: '我不太忙。老师，这位是我的新朋友玛丽。', pinyin: 'Wǒ bù tài máng. Lǎoshī, zhè wèi shì wǒ de xīn péngyou Mǎlì.', vi: 'Em không bận lắm ạ. Thưa thầy, vị này là Mary - bạn mới của em.', highlightWords: ['朋友'] },
          { id: 204, speaker: '玛丽 (Mary)', gender: 'female', hanzi: '张老师好！我是英国人，正在学中文。', pinyin: 'Zhāng lǎoshī hǎo! Wǒ shì Yīngguó rén, zhèngzài xué Zhōngwén.', vi: 'Em chào thầy Trương ạ! Em là người Anh, đang học tiếng Trung.', highlightWords: ['中文', '学'] },
          { id: 205, speaker: '张老师 (Thầy Trương)', gender: 'male', hanzi: '欢迎你来中国！汉语很有趣，加油！', pinyin: 'Huānyíng nǐ lái Zhōngguó! Hànyǔ hěn yǒuqù, jiāyóu!', vi: 'Chào mừng em đến Trung Quốc! Tiếng Hán rất thú vị, cố lên nhé!', highlightWords: ['中国', '汉语'] },
          { id: 206, speaker: '玛丽 (Mary)', gender: 'female', hanzi: '谢谢老师的鼓励，我们会努力的！', pinyin: 'Xièxie lǎoshī de gǔlì, wǒmen huì nǔlì de!', vi: 'Cảm ơn sự động viên của thầy, chúng em sẽ nỗ lực ạ!', highlightWords: ['谢谢'] },
        ],
        quiz: {
          sentencePrefix: '这位是我的新',
          missingWord: '朋友',
          sentenceSuffix: '玛丽。',
          hint: 'péngyou (bạn bè)',
        },
      },
      {
        id: 'sec-3',
        title: 'Đoạn 3: Tình huống gặp lại bạn cũ & Hỏi thăm (老朋友相遇)',
        description: 'Hai người bạn thân tình cờ gặp lại nhau trên đường phố và trò chuyện rôm rả.',
        dialogues: [
          { id: 301, speaker: '小华 (Tiểu Hoa)', gender: 'female', hanzi: '哎，大卫！好久不见，是你吗？', pinyin: 'Āi, Dàwèi! Hǎojiǔ bùjiàn, shì nǐ ma?', vi: 'Ôi, David! Lâu rồi không gặp, có phải bạn không?', highlightWords: ['好久不见'] },
          { id: 302, speaker: '大卫 (David)', gender: 'male', hanzi: '小华！真的是你，太巧了！你好吗？', pinyin: 'Xiǎohuá! Zhēnde shì nǐ, tài qiǎo le! Nǐ hǎo ma?', vi: 'Tiểu Hoa! Đúng là bạn rồi, khéo quá! Bạn khỏe không?', highlightWords: ['你好'] },
          { id: 303, speaker: '小华 (Tiểu Hoa)', gender: 'female', hanzi: '我挺好的。你现在中文说得真棒！', pinyin: 'Wǒ tǐng hǎo de. Nǐ xiànzài Zhōngwén shuō de zhēn bàng!', vi: 'Mình rất khỏe. Giờ bạn nói tiếng Trung đỉnh thật đấy!', highlightWords: ['中文', '说'] },
          { id: 304, speaker: '大卫 (David)', gender: 'male', hanzi: '哪里哪里，我还要多向你们学习呢。', pinyin: 'Nǎlǐ nǎlǐ, wǒ hái yào duō xiàng nǐmen xuéxí ne.', vi: 'Đâu có đâu có, mình còn phải học hỏi các bạn nhiều lắm.', highlightWords: ['学习'] },
          { id: 305, speaker: '小华 (Tiểu Hoa)', gender: 'female', hanzi: '周末有空吗？我们一起喝杯咖啡吧！', pinyin: 'Zhōumò yǒu kòng ma? Wǒmen yīqǐ hē bēi kāfēi ba!', vi: 'Cuối tuần rảnh không? Tụi mình cùng đi uống ly cà phê nhé!', highlightWords: ['朋友', '一起'] },
          { id: 306, speaker: '大卫 (David)', gender: 'male', hanzi: '太好了！那我周末打电话给你。', pinyin: 'Tài hǎo le! Nà wǒ zhōumò dǎ diànhuà gěi nǐ.', vi: 'Tuyệt quá! Vậy cuối tuần mình gọi điện cho bạn nhé.', highlightWords: ['好', '电话'] },
        ],
        quiz: {
          sentencePrefix: '我们一起喝杯',
          missingWord: '咖啡',
          sentenceSuffix: '吧！',
          hint: 'kāfēi (cà phê)',
        },
      },
    ],
  },

  'hsk1-lesson2': {
    title: 'Bài 2: Gia đình & Người thân',
    sections: [
      {
        id: 'sec-1',
        title: 'Đoạn 1: Xem ảnh gia đình & Giới thiệu thành viên (看家庭照片)',
        description: 'Vương Lan cùng bạn xem bức ảnh gia đình chụp dịp Tết Nguyên Đán.',
        dialogues: [
          { id: 101, speaker: '大卫 (David)', gender: 'male', hanzi: '王兰，这张照片里的人是谁？', pinyin: 'Wáng Lán, zhè zhāng zhàopiàn lǐ de rén shì shéi?', vi: 'Vương Lan, những người trong bức ảnh này là ai vậy?', highlightWords: ['照片', '人'] },
          { id: 102, speaker: '王兰 (Vương Lan)', gender: 'female', hanzi: '这是我们全家的照片。我家有四口人。', pinyin: 'Zhè shì wǒmen quánjiā de zhàopiàn. Wǒ jiā yǒu sì kǒu rén.', vi: 'Đây là ảnh cả nhà mình. Nhà mình có 4 người.', highlightWords: ['家', '四口人'] },
          { id: 103, speaker: '大卫 (David)', gender: 'male', hanzi: '这是你爸爸和妈妈吗？他们看起来真年轻。', pinyin: 'Zhè shì nǐ bàba hé māma ma? Tāmen kàn qǐlái zhēn niánqīng.', vi: 'Đây là bố và mẹ bạn à? Họ trông thật trẻ trung.', highlightWords: ['爸爸', '妈妈'] },
          { id: 104, speaker: '王兰 (Vương Lan)', gender: 'female', hanzi: '是的，他们都是中学老师。旁边是我哥哥。', pinyin: 'Shì de, tāmen dōu shì zhōngxué lǎoshī. Pángbiān shì wǒ gēge.', vi: 'Đúng vậy, họ đều là giáo viên cấp hai. Bên cạnh là anh trai mình.', highlightWords: ['哥哥', '老师'] },
          { id: 105, speaker: '大卫 (David)', gender: 'male', hanzi: '你哥哥也是老师吗？', pinyin: 'Nǐ gēge yě shì lǎoshī ma?', vi: 'Anh trai bạn cũng là giáo viên à?', highlightWords: ['哥哥', '老师'] },
          { id: 106, speaker: '王兰 (Vương Lan)', gender: 'female', hanzi: '不是，他是医院的医生。你家有几口人？', pinyin: 'Bú shì, tā shì yīyuàn de yīshēng. Nǐ jiā yǒu jǐ kǒu rén?', vi: 'Không phải, anh ấy là bác sĩ ở bệnh viện. Nhà bạn có mấy người?', highlightWords: ['医生', '家'] },
          { id: 107, speaker: '大卫 (David)', gender: 'male', hanzi: '我家有五口人：爸爸、妈妈、姐姐、弟弟和我。', pinyin: 'Wǒ jiā yǒu wǔ kǒu rén: bàba, māma, jiějie, dìdi hé wǒ.', vi: 'Nhà mình có 5 người: Bố, mẹ, chị gái, em trai và mình.', highlightWords: ['姐姐', '弟弟'] },
          { id: 108, speaker: '王兰 (Vương Lan)', gender: 'female', hanzi: '哇，你有一个大家庭，真幸福！', pinyin: 'Wā, nǐ yǒu yí gè dà jiātíng, zhēn xìngfú!', vi: 'Oa, bạn có một đại gia đình đông vui, thật hạnh phúc!', highlightWords: ['大家庭', '幸福'] },
        ],
        quiz: {
          sentencePrefix: '我家有',
          missingWord: '四口人',
          sentenceSuffix: '：爸爸、妈妈、哥哥和我。',
          hint: 'sì kǒu rén (4 người)',
        },
      },
      {
        id: 'sec-2',
        title: 'Đoạn 2: Mở rộng từ vựng - Trò chuyện về nghề nghiệp cha mẹ (谈论父母工作)',
        description: 'Hỏi thăm chi tiết về công việc thường ngày của các thành viên trong gia đình.',
        dialogues: [
          { id: 201, speaker: '李明 (Lý Minh)', gender: 'male', hanzi: '玛丽，你爸爸每天工作忙不忙？', pinyin: 'Mǎlì, nǐ bàba měitiān gōngzuò máng bù máng?', vi: 'Mary, bố bạn mỗi ngày làm việc có bận không?', highlightWords: ['爸爸', '工作'] },
          { id: 202, speaker: '玛丽 (Mary)', gender: 'female', hanzi: '他是一名工程师，经常出差，挺忙的。', pinyin: 'Tā shì yì míng gōngchéngshī, jīngcháng chūchāi, tǐng máng de.', vi: 'Bác ấy là kỹ sư, thường xuyên đi công tác nên khá bận.', highlightWords: ['工作', '忙'] },
          { id: 203, speaker: '李明 (Lý Minh)', gender: 'male', hanzi: '那你妈妈呢？她做什么工作？', pinyin: 'Nà nǐ māma ne? Tā zuò shénme gōngzuò?', vi: 'Thế còn mẹ bạn? Bác làm nghề gì?', highlightWords: ['妈妈', '工作'] },
          { id: 204, speaker: '玛丽 (Mary)', gender: 'female', hanzi: '我妈妈在银行工作，她喜欢做饭和看书。', pinyin: 'Wǒ māma zài yínháng gōngzuò, tā xǐhuan zuòfàn hé kànshū.', vi: 'Mẹ mình làm việc ở ngân hàng, mẹ thích nấu ăn và đọc sách.', highlightWords: ['妈妈', '喜欢'] },
          { id: 205, speaker: '李明 (Lý Minh)', gender: 'male', hanzi: '真好！周末全家人一起吃晚饭最温馨了。', pinyin: 'Zhēn hǎo! Zhōumò quánjiā rén yìqǐ chī wǎnfàn zuì wēnxīn le.', vi: 'Thật tốt! Cuối tuần cả nhà cùng ăn tối là ấm cúng nhất.', highlightWords: ['全家人', '吃'] },
        ],
        quiz: {
          sentencePrefix: '他是一名',
          missingWord: '工程师',
          sentenceSuffix: '，经常出差。',
          hint: 'gōngchéngshī (kỹ sư)',
        },
      },
    ],
  },

  'hsk2-lesson4': {
    title: 'Bài 4: Mua sắm & Ăn uống',
    sections: [
      {
        id: 'sec-1',
        title: 'Đoạn 1: Mua hoa quả ở chợ & Mặc cả giá (在水果摊买水果)',
        description: 'Tình huống mua táo và dưa hấu, thương lượng giá cả bằng tiếng Trung phổ thông.',
        dialogues: [
          { id: 101, speaker: '顾客 (Khách hàng)', gender: 'female', hanzi: '老板，请问这个红苹果多少钱一斤？', pinyin: 'Lǎobǎn, qǐngwèn zhège hóng píngguǒ duōshao qián yì jīn?', vi: 'Ông chủ, xin hỏi táo đỏ này bao nhiêu tiền một cân?', highlightWords: ['苹果', '多少钱'] },
          { id: 102, speaker: '老板 (Chủ quán)', gender: 'male', hanzi: '八块钱一斤，特别甜，保准好吃！', pinyin: 'Bā kuài qián yì jīn, tèbié tián, bǎozhǔn hǎochī!', vi: 'Tám tệ một cân, đặc biệt ngọt, đảm bảo ngon!', highlightWords: ['甜', '好吃'] },
          { id: 103, speaker: '顾客 (Khách hàng)', gender: 'female', hanzi: '八块太贵了！六块钱行不行？便宜一点吧。', pinyin: 'Bā kuài tài guì le! Liù kuài qián xíng bù xíng? Piányi yìdiǎn ba.', vi: 'Tám tệ đắt quá! Sáu tệ được không? Rẻ hơn một chút đi chú.', highlightWords: ['太贵了', '便宜'] },
          { id: 104, speaker: '老板 (Chủ quán)', gender: 'male', hanzi: '姑娘，你要是买五斤以上，我给你七块！', pinyin: 'Gūniang, nǐ yàoshi mǎi wǔ jīn yǐshàng, wǒ gěi nǐ qī kuài!', vi: 'Cô bé ơi, nếu cô mua từ 5 cân trở lên, tôi để giá 7 tệ nhé!', highlightWords: ['买', '块'] },
          { id: 105, speaker: '顾客 (Khách hàng)', gender: 'female', hanzi: '好，那给我称五斤苹果，再来一个大西瓜。', pinyin: 'Hǎo, nà gěi wǒ chēng wǔ jīn píngguǒ, zài lái yí gè dà xīguā.', vi: 'Vâng, vậy cân cho cháu 5 cân táo, thêm một quả dưa hấu to nữa ạ.', highlightWords: ['苹果', '西瓜'] },
          { id: 106, speaker: '老板 (Chủ quán)', gender: 'male', hanzi: '一共五十六块钱，支持微信和支付宝。', pinyin: 'Yígòng wǔshíliù kuài qián, zhīchí Wēixìn hé Zhīfùbǎo.', vi: 'Tổng cộng 56 tệ, nhận thanh toán qua WeChat và Alipay.', highlightWords: ['一共', '微信'] },
          { id: 107, speaker: '顾客 (Khách hàng)', gender: 'female', hanzi: '好的，我扫您的微信二维码。', pinyin: 'Hǎo de, wǒ sǎo nín de Wēixìn èrwéimǎ.', vi: 'Dạ được, cháu quét mã QR WeChat của chú ạ.', highlightWords: ['微信'] },
          { id: 108, speaker: '老板 (Chủ quán)', gender: 'male', hanzi: '钱收到了，欢迎下次再来！', pinyin: 'Qián shōudào le, huānyíng xiàcì zài lái!', vi: 'Đã nhận được tiền rồi, hoan nghênh lần sau lại ghé nhé!', highlightWords: ['再来'] },
        ],
        quiz: {
          sentencePrefix: '八块太贵了，',
          missingWord: '便宜',
          sentenceSuffix: '一点吧。',
          hint: 'piányi (rẻ)',
        },
      },
      {
        id: 'sec-2',
        title: 'Đoạn 2: Trong tiệm trà sữa & Đồ uống (在奶茶店点单)',
        description: 'Gọi món trà sữa trân châu, chọn lượng đường và đá yêu thích.',
        dialogues: [
          { id: 201, speaker: '店员 (Nhân viên)', gender: 'female', hanzi: '您好！欢迎光临，请问您想喝点什么？', pinyin: 'Nǐ hǎo! Huānyíng guānglín, qǐngwèn nín xiǎng hē diǎn shénme?', vi: 'Xin chào quý khách! Hoan nghênh quý khách, xin hỏi bạn muốn uống gì?', highlightWords: ['想', '喝'] },
          { id: 202, speaker: '顾客 (Khách hàng)', gender: 'male', hanzi: '我要一杯珍珠奶茶，大杯的。', pinyin: 'Wǒ yào yì bēi zhēnzhū nǎichá, dà bēi de.', vi: 'Cho tôi một ly trà sữa trân châu, ly lớn nhé.', highlightWords: ['一杯', '大'] },
          { id: 203, speaker: '店员 (Nhân viên)', gender: 'female', hanzi: '好的，请问甜度和冰块怎么选？', pinyin: 'Hǎo de, qǐngwèn tiándù hé bīngkuài zěnme xuǎn?', vi: 'Dạ vâng, xin hỏi độ ngọt và đá bạn chọn thế nào ạ?', highlightWords: ['甜', '冰'] },
          { id: 204, speaker: '顾客 (Khách hàng)', gender: 'male', hanzi: '微糖，少冰，谢谢！', pinyin: 'Wēi táng, shǎo bīng, xièxie!', vi: 'Ít đường, ít đá, cảm ơn bạn!', highlightWords: ['少', '谢谢'] },
          { id: 205, speaker: '店员 (Nhân viên)', gender: 'female', hanzi: '一共十八元，请拿好小票，稍等叫号。', pinyin: 'Yígòng shíbā yuán, qǐng ná hǎo xiǎopiào, shāoděng jiàohào.', vi: 'Tổng cộng 18 tệ, bạn cầm lấy hóa đơn và chờ đọc số nhé.', highlightWords: ['一共'] },
        ],
        quiz: {
          sentencePrefix: '我要一杯',
          missingWord: '珍珠奶茶',
          sentenceSuffix: '，大杯的。',
          hint: 'zhēnzhū nǎichá (trà sữa trân châu)',
        },
      },
    ],
  },

  'hsk2-lesson5': {
    title: 'Bài 5: Nhà hàng & Thưởng thức ẩm thực',
    sections: [
      {
        id: 'sec-1',
        title: 'Đoạn 1: Gọi món tại quán ăn Tứ Xuyên (在川菜馆点菜)',
        description: 'Khách hàng gọi các món đặc sản nổi tiếng như Đậu phụ Tứ Xuyên, Gà Cung Bảo.',
        dialogues: [
          { id: 101, speaker: '服务员 (Phục vụ)', gender: 'female', hanzi: '两位晚上好，请问坐大厅还是包厢？', pinyin: 'Liǎng wèi wǎnshang hǎo, qǐngwèn zuò dàtīng háishì bāoxiāng?', vi: 'Chào buổi tối hai vị, xin hỏi hai vị ngồi sảnh hay phòng riêng?', highlightWords: ['晚上好', '坐'] },
          { id: 102, speaker: '顾客 (Khách hàng)', gender: 'male', hanzi: '坐靠窗的大厅就行。请给我们看一下菜单。', pinyin: 'Zuò kào chuāng de dàtīng jiù xíng. Qǐng gěi wǒmen kàn yíxià càidān.', vi: 'Ngồi sảnh gần cửa sổ là được rồi. Cho chúng tôi xem thực đơn với.', highlightWords: ['菜单', '看'] },
          { id: 103, speaker: '服务员 (Phục vụ)', gender: 'female', hanzi: '这是菜单，我们店的麻婆豆腐和宫保鸡丁非常有名。', pinyin: 'Zhè shì càidān, wǒmen diàn de mápó dòufu hé gōngbǎo jīdīng fēicháng yǒumíng.', vi: 'Đây là thực đơn ạ, món Đậu phụ Tứ Xuyên và Gà Cung Bảo của quán rất nổi tiếng.', highlightWords: ['菜单', '有名'] },
          { id: 104, speaker: '顾客 (Khách hàng)', gender: 'male', hanzi: '好的，来一份麻婆豆腐，一份宫保鸡丁，不要太辣。', pinyin: 'Hǎo de, lái yí fèn mápó dòufu, yí fèn gōngbǎo jīdīng, bú yào tài là.', vi: 'Được rồi, cho một phần Đậu phụ Tứ Xuyên, một phần Gà Cung Bảo, đừng cay quá nhé.', highlightWords: ['辣', '一份'] },
          { id: 105, speaker: '服务员 (Phục vụ)', gender: 'female', hanzi: '没问题，需要主食和饮料吗？', pinyin: 'Méi wèntí, xūyào zhǔshí hé yǐnliào ma?', vi: 'Dạ được ạ, anh có cần món cơm và đồ uống không?', highlightWords: ['饮料'] },
          { id: 106, speaker: '顾客 (Khách hàng)', gender: 'male', hanzi: '来两碗米饭，两听冰可乐。', pinyin: 'Lái liǎng wǎn mǐfàn, liǎng tīng bīng kělè.', vi: 'Cho 2 bát cơm trắng, 2 lon Coca ướp lạnh.', highlightWords: ['米饭', '可乐'] },
          { id: 107, speaker: '服务员 (Phục vụ)', gender: 'female', hanzi: '好的，菜马上就来，请稍候！', pinyin: 'Hǎo de, cài mǎshàng jiù lái, qǐng shāohòu!', vi: 'Vâng ạ, món ăn sẽ lên ngay, xin vui lòng đợi chút!', highlightWords: ['马上'] },
          { id: 108, speaker: '顾客 (Khách hàng)', gender: 'male', hanzi: '服务员，吃饱了，请买单！', pinyin: 'Fúwùyuán, chī bǎo le, qǐng mǎidān!', vi: 'Phục vụ ơi, chúng tôi ăn no rồi, tính tiền giúp tôi nhé!', highlightWords: ['服务员', '买单'] },
        ],
        quiz: {
          sentencePrefix: '请给我们看一下',
          missingWord: '菜单',
          sentenceSuffix: '。',
          hint: 'càidān (thực đơn)',
        },
      },
    ],
  },

  'hsk3-lesson7': {
    title: 'Bài 7: Du lịch & Đời sống',
    sections: [
      {
        id: 'sec-1',
        title: 'Đoạn 1: Lên kế hoạch du lịch Bắc Kinh (计划去北京旅游)',
        description: 'Bàn bạc vé máy bay, khách sạn và các địa điểm tham quan nổi tiếng như Vạn Lý Trường Thành.',
        dialogues: [
          { id: 101, speaker: '大卫 (David)', gender: 'male', hanzi: '下个月放假，你打算去哪里旅游？', pinyin: 'Xià gè yuè fàngjià, nǐ dǎsuan qù nǎlǐ lǚyóu?', vi: 'Tháng sau nghỉ lễ, bạn dự định đi du lịch ở đâu?', highlightWords: ['打算', '旅游'] },
          { id: 102, speaker: '李明 (Lý Minh)', gender: 'male', hanzi: '我打算去北京，去爬长城，参观故宫。', pinyin: 'Wǒ dǎsuan qù Běijīng, qù pá Chángchéng, cānguān Gùgōng.', vi: 'Mình định đi Bắc Kinh, leo Vạn Lý Trường Thành và tham quan Cố Cung.', highlightWords: ['旅游', '长城'] },
          { id: 103, speaker: '大卫 (David)', gender: 'male', hanzi: '太棒了！俗话说“不到长城非好汉”。你订好机票了吗？', pinyin: 'Tài bàng le! Súhuà shuō "bú dào Chángchéng fēi hǎohàn". Nǐ dìng hǎo jīpiào le ma?', vi: 'Tuyệt vời! Tục ngữ có câu: "Bất đáo Trường Thành phi hảo hán". Bạn đã đặt vé máy bay chưa?', highlightWords: ['机票', '好'] },
          { id: 104, speaker: '李明 (Lý Minh)', gender: 'male', hanzi: '已经订好了，高铁票比飞机票便宜很多。你要一起去吗？', pinyin: 'Yǐjīng dìng hǎo le, gāotiě piào bǐ fēijīpiào piányi hěn duō. Nǐ yào yìqǐ qù ma?', vi: 'Mình đặt rồi, vé tàu cao tốc rẻ hơn vé máy bay nhiều. Bạn muốn đi cùng không?', highlightWords: ['便宜', '一起'] },
          { id: 105, speaker: '大卫 (David)', gender: 'male', hanzi: '我很想去！那我今天晚上就查一下酒店。', pinyin: 'Wǒ hěn xiǎng qù! Nà wǒ jīntiān wǎnshang jiù chá yíxià jiǔdiàn.', vi: 'Mình rất muốn đi! Vậy tối nay mình sẽ tra cứu khách sạn ngay.', highlightWords: ['酒店', '想'] },
          { id: 106, speaker: '李明 (Lý Minh)', gender: 'male', hanzi: '别忘了带上照相机，北京秋天的风景最美了！', pinyin: 'Bié wàng le dài shàng zhàoxiàngjī, Běijīng qiūtiān de fēngjǐng zuì měi le!', vi: 'Đừng quên mang theo máy ảnh nhé, phong cảnh mùa thu Bắc Kinh là đẹp nhất!', highlightWords: ['照相机', '风景'] },
        ],
        quiz: {
          sentencePrefix: '高铁票比飞机票',
          missingWord: '便宜',
          sentenceSuffix: '很多。',
          hint: 'piányi (rẻ)',
        },
      },
    ],
  },
};

/**
 * Fallback & Dynamic generator that produces multiple listening dialogue sections
 * for ANY lesson based on its reading tokens, matching words, and topic.
 */
export function getLessonListeningSections(lesson) {
  if (!lesson) return [];

  // Check predefined rich multi-dialogue dataset
  if (MULTI_LISTENING_DATABASE[lesson.id]?.sections?.length > 0) {
    return MULTI_LISTENING_DATABASE[lesson.id].sections;
  }

  // If not explicitly defined, dynamically generate 3 rich sections from lesson vocabulary!
  const vocabWords = (lesson.matchingWords || []).map(w => w.hanzi);
  const readingTokens = (lesson.reading?.tokens || []).filter(t => t.hanzi && !t.isSpeaker);
  const defaultDialogues = lesson.listening?.dialogues || [];

  const sec1 = {
    id: 'sec-core',
    title: 'Đoạn 1: Lời thoại trọng tâm bài học (核心对话)',
    description: `Luyện nghe phát âm chuẩn các câu hội thoại nòng cốt của bài "${lesson.title.split(' (')[0]}".`,
    dialogues: defaultDialogues.length > 0 ? defaultDialogues.map((d, i) => ({
      ...d,
      speaker: i % 2 === 0 ? 'Nhân vật A' : 'Nhân vật B',
      gender: i % 2 === 0 ? 'male' : 'female',
    })) : [
      { id: 1, speaker: 'A', gender: 'male', hanzi: '你好，很高兴和你交流。', pinyin: 'Nǐ hǎo, hěn gāoxìng hé nǐ jiāoliú.', vi: 'Xin chào, rất vui được giao lưu cùng bạn.' },
      { id: 2, speaker: 'B', gender: 'female', hanzi: '我也很高兴，让我们一起练习听力吧。', pinyin: 'Wǒ yě hěn gāoxìng, ràng wǒmen yìqǐ liànxí tīnglì ba.', vi: 'Tôi cũng rất vui, chúng ta cùng luyện nghe nhé.' },
    ],
    quiz: lesson.listening?.quiz || {
      sentencePrefix: '很高兴',
      missingWord: '认识',
      sentenceSuffix: '你！',
      hint: 'rènshi',
    },
  };

  const sec2 = {
    id: 'sec-expand',
    title: 'Đoạn 2: Mở rộng từ vựng & Phản xạ thực tế (拓展交流)',
    description: 'Hội thoại ứng dụng các từ vựng mới học vào ngữ cảnh đời sống thường ngày.',
    dialogues: [
      {
        id: 201,
        speaker: 'A: 大卫',
        gender: 'male',
        hanzi: `我们今天学了很有用的词语：${vocabWords.slice(0, 3).join('、') || '汉语'}。`,
        pinyin: 'Wǒmen jīntiān xué le hěn yǒuyòng de cíyǔ.',
        vi: `Hôm nay chúng mình đã học những từ ngữ rất hữu ích: ${vocabWords.slice(0, 3).join(', ') || 'tiếng Trung'}.`,
        highlightWords: vocabWords.slice(0, 3),
      },
      {
        id: 202,
        speaker: 'B: 王兰',
        gender: 'female',
        hanzi: '对啊，多听录音、多跟读，你的听力和口语会进步很快！',
        pinyin: 'Duì a, duō tīng lùyīn, duō gēndú, nǐ de tīnglì hé kǒuyǔ huì jìnbù hěn kuài!',
        vi: 'Đúng vậy, nghe nhiều băng ghi âm, đọc theo nhiều, kỹ năng nghe và nói của bạn sẽ tiến bộ rất nhanh!',
        highlightWords: ['听力', '口语'],
      },
      {
        id: 203,
        speaker: 'A: 大卫',
        gender: 'male',
        hanzi: '你说得对！我每天都会坚持练习半个小时。',
        pinyin: 'Nǐ shuō de duì! Wǒ měitiān dōu huì jiānchí liànxí bàn gè xiǎoshí.',
        vi: 'Bạn nói đúng lắm! Mỗi ngày mình đều sẽ kiên trì luyện tập nửa tiếng đồng hồ.',
        highlightWords: ['每天', '坚持'],
      },
      {
        id: 204,
        speaker: 'B: 王兰',
        gender: 'female',
        hanzi: '太棒了，有不懂的生词随时可以问我。',
        pinyin: 'Tài bàng le, yǒu bù dǒng de shēngcí suíshí kěyǐ wèn wǒ.',
        vi: 'Tuyệt vời, có từ mới nào không hiểu cứ thoải mái hỏi mình bất cứ lúc nào nhé.',
        highlightWords: ['生词', '问'],
      },
    ],
    quiz: {
      sentencePrefix: '多听多练，你的',
      missingWord: '听力',
      sentenceSuffix: '会进步很快！',
      hint: 'tīnglì (kỹ năng nghe)',
    },
  };

  const sec3 = {
    id: 'sec-challenge',
    title: 'Đoạn 3: Tình huống giao tiếp nâng cao (实战速听)',
    description: 'Thử thách nghe nhanh đoạn đối thoại tốc độ tự nhiên của người bản xứ.',
    dialogues: [
      {
        id: 301,
        speaker: 'A: 李明',
        gender: 'male',
        hanzi: '请问，这个句子用中文应该怎么表达最地道？',
        pinyin: 'Qǐngwèn, zhège jùzi yòng Zhōngwén yīnggāi zěnme biǎodá zuì dìdào?',
        vi: 'Xin hỏi, câu này dùng tiếng Trung nên diễn đạt thế nào cho tự nhiên bản xứ nhất?',
        highlightWords: ['句子', '表达'],
      },
      {
        id: 302,
        speaker: 'B: 张老师',
        gender: 'male',
        hanzi: '在日常口语里，中国人通常会这样说，既礼貌又简洁。',
        pinyin: 'Zài rìcháng kǒuyǔ lǐ, Zhōngguó rén tōngcháng huì zhèyàng shuō, jì lǐmào yòu jiǎnjié.',
        vi: 'Trong khẩu ngữ thường ngày, người Trung Quốc thường nói như thế này, vừa lịch sự vừa súc tích.',
        highlightWords: ['日常', '礼貌'],
      },
      {
        id: 303,
        speaker: 'A: 李明',
        gender: 'male',
        hanzi: '我明白了！非常感谢老师的耐心指导！',
        pinyin: 'Wǒ míngbai le! Fēicháng gǎnxiè lǎoshī de nàixīn zhǐdǎo!',
        vi: 'Em hiểu rồi ạ! Vô cùng cảm ơn sự hướng dẫn kiên nhẫn của thầy!',
        highlightWords: ['明白', '感谢'],
      },
    ],
    quiz: {
      sentencePrefix: '非常感谢老师的',
      missingWord: '耐心',
      sentenceSuffix: '指导！',
      hint: 'nàixīn (kiên nhẫn)',
    },
  };

  return [sec1, sec2, sec3];
}
