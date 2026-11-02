/**
 * ROADMAP CHUNKS & 3000 HIGH-FREQUENCY VOCABULARY ENGINE
 * 
 * Phương pháp Chunking (Tư duy ghép cụm từ phản xạ tự nhiên):
 * - Học theo 3 Khối Cụm Từ (Chunk Blocks):
 *   + Cột A: Cụm Mở Đầu / Ý Định (Opener / Intention Chunks)
 *   + Cột B: Cụm Hành Động Cốt Lõi (Action / Core Chunks)
 *   + Cột C: Cụm Hoàn Cảnh / Điều Kiện / Lịch Sự (Context / Anchor Chunks)
 * - Ghép 2 đến 3 cụm (A + B hoặc A + B + C) thành một câu giao tiếp dài, lưu loát, tự nhiên.
 * - Tích hợp 3000 từ vựng thông dụng nhất (HSK 1-4 / Spoken Chinese 3000 & Oxford 3000).
 */

// BỘ CỤM TỪ TIẾNG TRUNG TỪNG NGÀY (CHINESE DAILY CHUNKS)
export const CHINESE_DAILY_CHUNKS = {
  // NGÀY 1: Chào hỏi căn bản, làm quen, mở lời
  1: {
    columnA: [
      { id: 'zh_a1', text: '我想问一下...', pinyin: 'Wǒ xiǎng wèn yíxià...', vi: 'Tôi muốn hỏi một chút...' },
      { id: 'zh_a2', text: '请问你能不能...', pinyin: 'Qǐngwèn nǐ néng bu néng...', vi: 'Xin hỏi bạn có thể...' },
      { id: 'zh_a3', text: '不好意思，我可以...', pinyin: 'Bù hǎoyìsi, wǒ kěyǐ...', vi: 'Ngại quá, tôi có thể...' },
      { id: 'zh_a4', text: '我们正打算...', pinyin: 'Wǒmen zhèng dǎsuàn...', vi: 'Chúng tôi đang định...' }
    ],
    columnB: [
      { id: 'zh_b1', text: '帮我看一下这个', pinyin: 'bāng wǒ kàn yíxià zhè ge', vi: 'xem giúp tôi cái này' },
      { id: 'zh_b2', text: '找李明经理聊天', pinyin: 'zhǎo Lǐ Míng jīnglǐ liáotiān', vi: 'tìm quản lý Lý Minh nói chuyện' },
      { id: 'zh_b3', text: '借用一下洗手间', pinyin: 'jièyòng yíxià xǐshǒujiān', vi: 'mượn dùng nhờ nhà vệ sinh' },
      { id: 'zh_b4', text: '叫一辆去机场的出租车', pinyin: 'jiào yí liàng qù jīchǎng de chūzūchē', vi: 'gọi một chiếc taxi đi sân bay' }
    ],
    columnC: [
      { id: 'zh_c1', text: '现在方便吗？', pinyin: 'xiànzài fāngbiàn ma?', vi: 'bây giờ có tiện không?' },
      { id: 'zh_c2', text: '今天下午五点以前。', pinyin: 'jīntiān xiàwǔ wǔ diǎn yǐqián.', vi: 'trước năm giờ chiều nay.' },
      { id: 'zh_c3', text: '非常感谢你的帮助！', pinyin: 'fēicháng gǎnxiè nǐ de bāngzhù!', vi: 'vô cùng cảm ơn sự giúp đỡ của bạn!' },
      { id: 'zh_c4', text: '大概需要十分钟。', pinyin: 'dàgài xūyào shí fēnzhōng.', vi: 'khoảng chừng mất mười phút.' }
    ],
    core3000List: [
      { word: '问', pinyin: 'wèn', vi: 'hỏi', type: 'Động từ', rank: 45 },
      { word: '方便', pinyin: 'fāngbiàn', vi: 'tiện lợi, tiện', type: 'Tính từ', rank: 120 },
      { word: '打算', pinyin: 'dǎsuàn', vi: 'dự định', type: 'Động từ', rank: 154 },
      { word: '借用', pinyin: 'jièyòng', vi: 'mượn dùng', type: 'Động từ', rank: 310 },
      { word: '洗手间', pinyin: 'xǐshǒujiān', vi: 'nhà vệ sinh', type: 'Danh từ', rank: 215 },
      { word: '经理', pinyin: 'jīnglǐ', vi: 'quản lý, giám đốc', type: 'Danh từ', rank: 180 },
      { word: '需要', pinyin: 'xūyào', vi: 'cần, cần thiết', type: 'Động từ', rank: 98 },
      { word: '大概', pinyin: 'dàgài', vi: 'khoảng chừng, đại khái', type: 'Phó từ', rank: 240 },
      { word: '帮助', pinyin: 'bāngzhù', vi: 'giúp đỡ', type: 'Động từ', rank: 110 },
      { word: '机场', pinyin: 'jīchǎng', vi: 'sân bay', type: 'Danh từ', rank: 195 }
    ]
  },

  // NGÀY 2: Các buổi trong ngày & Thói quen lịch trình
  2: {
    columnA: [
      { id: 'zh_a1', text: '今天早上，我们...', pinyin: 'Jīntiān zǎoshang, wǒmen...', vi: 'Sáng hôm nay, chúng tôi...' },
      { id: 'zh_a2', text: '如果你下午有空，我们...', pinyin: 'Rúguǒ nǐ xiàwǔ yǒu kòng, wǒmen...', vi: 'Nếu chiều nay bạn rảnh, chúng mình...' },
      { id: 'zh_a3', text: '明天上午九点，可不可以...', pinyin: 'Míngtiān shàngwǔ jiǔ diǎn, kě bù kěyǐ...', vi: '9h sáng mai, liệu có thể...' },
      { id: 'zh_a4', text: '每天晚上睡前，我习惯...', pinyin: 'Měitiān wǎnshang shuì qián, wǒ xíguàn...', vi: 'Mỗi tối trước khi ngủ, tôi quen...' }
    ],
    columnB: [
      { id: 'zh_b1', text: '一起去楼下喝杯热咖啡', pinyin: 'yìqǐ qù lóuxià hē bēi rè kāfēi', vi: 'cùng nhau xuống lầu uống tách cà phê nóng' },
      { id: 'zh_b2', text: '在公司会议室准时开会', pinyin: 'zài gōngsī huìyìshì zhǔnshí kāihuì', vi: 'họp đúng giờ ở phòng họp công ty' },
      { id: 'zh_b3', text: '花二十分钟练习汉语发音', pinyin: 'huā èrshí fēnzhōng liànxí hànyǔ fāyīn', vi: 'dành 20 phút luyện phát âm tiếng Trung' },
      { id: 'zh_b4', text: '提前计划好一整天的任务', pinyin: 'tíqián jìhuà hǎo yì zhěng tiān de rènwu', vi: 'lên kế hoạch trước cho nhiệm vụ cả ngày' }
    ],
    columnC: [
      { id: 'zh_c1', text: '祝你今天工作顺利！', pinyin: 'zhù nǐ jīntiān gōngzuò shùnlì!', vi: 'chúc bạn hôm nay công việc suôn sẻ!' },
      { id: 'zh_c2', text: '顺便呼吸一下新鲜空气。', pinyin: 'shùnbiàn hūxī yíxià xīnxuān kōngqì.', vi: 'nhân tiện hít thở không khí trong lành.' },
      { id: 'zh_c3', text: '晚上早点休息，晚安！', pinyin: 'wǎnshang zǎodiǎn xiūxi, wǎn\'ān!', vi: 'tối nghỉ ngơi sớm nhé, chúc ngủ ngon!' },
      { id: 'zh_c4', text: '不见不散，回头见！', pinyin: 'bú jiàn bú sàn, huítóu jiàn!', vi: 'không gặp không về, lát gặp lại nhé!' }
    ],
    core3000List: [
      { word: '早上', pinyin: 'zǎoshang', vi: 'buổi sáng', type: 'Thời gian', rank: 35 },
      { word: '下午', pinyin: 'xiàwǔ', vi: 'buổi chiều', type: 'Thời gian', rank: 55 },
      { word: '习惯', pinyin: 'xíguàn', vi: 'thói quen, quen với', type: 'Danh/Động', rank: 170 },
      { word: '会议室', pinyin: 'huìyìshì', vi: 'phòng họp', type: 'Danh từ', rank: 340 },
      { word: '提前', pinyin: 'tíqián', vi: 'trước thời hạn', type: 'Phó từ', rank: 220 },
      { word: '顺利', pinyin: 'shùnlì', vi: 'thuận lợi, suôn sẻ', type: 'Tính từ', rank: 145 },
      { word: '计划', pinyin: 'jìhuà', vi: 'kế hoạch', type: 'Danh/Động', rank: 125 },
      { word: '任务', pinyin: 'rènwu', vi: 'nhiệm vụ', type: 'Danh từ', rank: 260 },
      { word: '晚安', pinyin: 'wǎn\'ān', vi: 'chúc ngủ ngon', type: 'Lời chúc', rank: 190 },
      { word: '新鲜', pinyin: 'xīnxiān', vi: 'tươi mới, trong lành', type: 'Tính từ', rank: 230 }
    ]
  },

  // NGÀY 3: Cảm ơn chân thành & Đáp từ lịch thiệp
  3: {
    columnA: [
      { id: 'zh_a1', text: '非常感谢你刚才...', pinyin: 'Fēicháng gǎnxiè nǐ gāngcái...', vi: 'Vô cùng cảm ơn bạn vừa nãy đã...' },
      { id: 'zh_a2', text: '多亏了你的大力支持，我们才能...', pinyin: 'Duōkuī le nǐ de dàlì zhīchí, wǒmen cái néng...', vi: 'Nhờ có sự ủng hộ nhiệt tình của bạn, chúng tôi mới...' },
      { id: 'zh_a3', text: '不用谢，这只是...', pinyin: 'Bú yòng xiè, zhè zhǐ shì...', vi: 'Không cần cảm ơn đâu, đây chỉ là...' },
      { id: 'zh_a4', text: '为了表达我的谢意，我想...', pinyin: 'Wèile biǎodá wǒ de xièyì, wǒ xiǎng...', vi: 'Để bày tỏ lòng cảm ơn, tôi muốn...' }
    ],
    columnB: [
      { id: 'zh_b1', text: '耐心详细地为我解答问题', pinyin: 'nàixīn xiángxì de wèi wǒ jiědá wèntí', vi: 'kiên nhẫn giải đáp cặn kẽ thắc mắc cho tôi' },
      { id: 'zh_b2', text: '举手之劳的一点小事情', pinyin: 'jǔ shǒu zhī láo de yìdiǎn xiǎoshìqing', vi: 'chút việc nhỏ tiện tay giúp đỡ mà thôi' },
      { id: 'zh_b3', text: '顺利按时完成这次项目', pinyin: 'shùnlì ànshí wánchéng zhè cì xiàngmù', vi: 'hoàn thành thuận lợi đúng hạn dự án lần này' },
      { id: 'zh_b4', text: '请大家喝正宗的越南咖啡', pinyin: 'qǐng dàjiā hē zhèngzōng de Yuènán kāfēi', vi: 'mời mọi người uống cà phê phin VN chuẩn vị' }
    ],
    columnC: [
      { id: 'zh_c1', text: '以后有需要随时联系我！', pinyin: 'yǐhòu yǒu xūyào suíshí liánxì wǒ!', vi: 'sau này có cần gì cứ liên hệ tôi nhé!' },
      { id: 'zh_c2', text: '大家互相帮助是应该的。', pinyin: 'dàjiā hùxiāng bāngzhù shì yīnggāi de.', vi: 'mọi người giúp đỡ nhau là điều nên làm.' },
      { id: 'zh_c3', text: '真的帮了我一个天大的忙！', pinyin: 'zhēn de bāng le wǒ yí gè tiān dà de máng!', vi: 'thực sự đã giúp tôi một việc rất lớn!' },
      { id: 'zh_c4', text: '希望我们以后合作更加愉快。', pinyin: 'xīwàng wǒmen yǐhòu hézuò gèngjiā yúkuài.', vi: 'hy vọng sau này đôi bên hợp tác vui vẻ hơn nữa.' }
    ],
    core3000List: [
      { word: '感谢', pinyin: 'gǎnxiè', vi: 'cảm tạ, cảm ơn', type: 'Động từ', rank: 65 },
      { word: '多亏', pinyin: 'duōkuī', vi: 'may mà, nhờ có', type: 'Phó từ', rank: 280 },
      { word: '解答', pinyin: 'jiědá', vi: 'giải đáp', type: 'Động từ', rank: 240 },
      { word: '按时', pinyin: 'ànshí', vi: 'đúng giờ', type: 'Phó từ', rank: 180 },
      { word: '项目', pinyin: 'xiàngmù', vi: 'dự án', type: 'Danh từ', rank: 155 },
      { word: '互相', pinyin: 'hùxiāng', vi: 'lẫn nhau', type: 'Phó từ', rank: 135 },
      { word: '合作', pinyin: 'hézuò', vi: 'hợp tác', type: 'Danh/Động', rank: 115 },
      { word: '正宗', pinyin: 'zhèngzōng', vi: 'chuẩn vị, chính tông', type: 'Tính từ', rank: 320 },
      { word: '支持', pinyin: 'zhīchí', vi: 'ủng hộ, hỗ trợ', type: 'Danh/Động', rank: 105 },
      { word: '谢意', pinyin: 'xièyì', vi: 'thành ý cảm ơn', type: 'Danh từ', rank: 410 }
    ]
  },

  // NGÀY 4: Lời xin lỗi & Xử lý tình huống ngại ngùng
  4: {
    columnA: [
      { id: 'zh_a1', text: '实在不好意思，我今天...', pinyin: 'Shízài bù hǎoyìsi, wǒ jīntiān...', vi: 'Thật sự ngại quá, hôm nay tôi...' },
      { id: 'zh_a2', text: '真对不起，路上堵车导致...', pinyin: 'Zhēn duìbuqǐ, lùshang dǔchē dǎozhì...', vi: 'Thật lòng xin lỗi, kẹt xe trên đường khiến...' },
      { id: 'zh_a3', text: '没关系，你千万别...', pinyin: 'Méi guānxi, nǐ qiānwàn bié...', vi: 'Không sao đâu, bạn tuyệt đối đừng...' },
      { id: 'zh_a4', text: '请原谅我的粗心，我马上...', pinyin: 'Qǐng yuánliàng wǒ de cūxīn, wǒ mǎshàng...', vi: 'Xin lượng thứ cho sự sơ suất, tôi lập tức...' }
    ],
    columnB: [
      { id: 'zh_b1', text: '迟到了差不多十五分钟', pinyin: 'chídào le chàbuduō shíwǔ fēnzhōng', vi: 'đến muộn khoảng chừng 15 phút' },
      { id: 'zh_b2', text: '不小心弄脏了你的外套', pinyin: 'bù xiǎoxīn nòng zāng le nǐ de wàitào', vi: 'lỡ tay làm bẩn chiếc áo khoác của bạn' },
      { id: 'zh_b3', text: '把这件事放在心上', pinyin: 'bǎ zhè jiàn shì fàng zài xīn shàng', vi: 'để tâm chuyện nhỏ nhặt này' },
      { id: 'zh_b4', text: '重新核对并打印一份新的', pinyin: 'chóngxīn héduì bìng dǎyìn yí fèn xīn de', vi: 'đối chiếu lại và in ra bản tài liệu mới' }
    ],
    columnC: [
      { id: 'zh_c1', text: '给您添了这么大的麻烦！', pinyin: 'gěi nín tiān le zhème dà de máfan!', vi: 'đã làm phiền bác nhiều đến vậy!' },
      { id: 'zh_c2', text: '大家都完全能够理解。', pinyin: 'dàjiā dōu wánquán nénggòu lǐjiě.', vi: 'mọi người đều hoàn toàn có thể hiểu được.' },
      { id: 'zh_c3', text: '下次我一定会加倍注意。', pinyin: 'xià cì wǒ yídìng huì jiābèi zhùyì.', vi: 'lần sau tôi nhất định sẽ chú ý cẩn thận hơn.' },
      { id: 'zh_c4', text: '只要问题解决了就好！', pinyin: 'zhǐ yào wèntí jiějué le jiù hǎo!', vi: 'miễn là vấn đề giải quyết êm xuôi là tốt rồi!' }
    ],
    core3000List: [
      { word: '堵车', pinyin: 'dǔchē', vi: 'tắc đường, kẹt xe', type: 'Động từ', rank: 210 },
      { word: '迟到', pinyin: 'chídào', vi: 'đến muộn', type: 'Động từ', rank: 195 },
      { word: '粗心', pinyin: 'cūxīn', vi: 'sơ ý, bất cẩn', type: 'Tính từ', rank: 340 },
      { word: '理解', pinyin: 'lǐjiě', vi: 'thấu hiểu, thông cảm', type: 'Động từ', rank: 115 },
      { word: '解决', pinyin: 'jiějué', vi: 'giải quyết', type: 'Động từ', rank: 95 },
      { word: '打印', pinyin: 'dǎyìn', vi: 'in ấn', type: 'Động từ', rank: 270 },
      { word: '核对', pinyin: 'héduì', vi: 'đối chiếu kiểm tra', type: 'Động từ', rank: 380 },
      { word: '千万', pinyin: 'qiānwàn', vi: 'tuyệt đối, nhất thiết', type: 'Phó từ', rank: 160 },
      { word: '外套', pinyin: 'wàitào', vi: 'áo khoác', type: 'Danh từ', rank: 310 },
      { word: '实在', pinyin: 'shízài', vi: 'thực sự, quả thật', type: 'Phó từ', rank: 130 }
    ]
  },

  // NGÀY 5: Tạm biệt & Hẹn gặp lại & Lời dặn dò
  5: {
    columnA: [
      { id: 'zh_a1', text: '时间差不多了，我得...', pinyin: 'Shíjiān chàbuduō le, wǒ děi...', vi: 'Thời gian cũng muộn rồi, tôi phải...' },
      { id: 'zh_a2', text: '今天聊得真开心，改天我们...', pinyin: 'Jīntiān liáo de zhēn kāixīn, gǎitiān wǒmen...', vi: 'Hôm nay trò chuyện rất vui, hôm khác mình...' },
      { id: 'zh_a3', text: '路上车多，请一定要...', pinyin: 'Lùshang chē duō, qǐng yídìng yào...', vi: 'Trên đường đông xe cộ, xin hãy nhất định...' },
      { id: 'zh_a4', text: '到家之后，记得...', pinyin: 'Dào jiā zhīhòu, jìde...', vi: 'Về tới nhà xong, nhớ...' }
    ],
    columnB: [
      { id: 'zh_b1', text: '先告辞回家准备晚饭了', pinyin: 'xiān gàocí huíjiā zhǔnbèi wǎnfàn le', vi: 'xin phép cáo từ về nhà nấu cơm tối' },
      { id: 'zh_b2', text: '再约出来一起吃地道火锅', pinyin: 'zài yuē chūlái yìqǐ chī dìdao huǒguō', vi: 'lại hẹn nhau ra ngoài ăn lẩu chuẩn vị' },
      { id: 'zh_b3', text: '慢走小心看路', pinyin: 'màn zǒu xiǎoxīn kàn lù', vi: 'đi thong thả cẩn thận nhìn đường' },
      { id: 'zh_b4', text: '在微信上给我报个平安', pinyin: 'zài Wēixìn shàng gěi wǒ bào gè píng\'ān', vi: 'nhắn một tin trên WeChat báo bình an' }
    ],
    columnC: [
      { id: 'zh_c1', text: '明天见，祝你今晚好梦！', pinyin: 'míngtiān jiàn, zhù nǐ jīnwǎn hǎomèng!', vi: 'mai gặp lại, chúc bạn tối nay ngủ ngon mơ đẹp!' },
      { id: 'zh_c2', text: '常联系，随时微信沟通。', pinyin: 'cháng liánxì, suíshí Wēixìn gōutōng.', vi: 'thường xuyên liên lạc, trao đổi qua WeChat nhé.' },
      { id: 'zh_c3', text: '期待我们下周再次相聚！', pinyin: 'qīdài wǒmen xià zhōu zàicì xiāngjù!', vi: 'mong chờ tuần sau chúng mình lại tụ họp!' },
      { id: 'zh_c4', text: '多保重身体，工作加油！', pinyin: 'duō bǎozhòng shēntǐ, gōngzuò jiāyóu!', vi: 'giữ gìn sức khỏe, đi làm cố lên nhé!' }
    ],
    core3000List: [
      { word: '差不多', pinyin: 'chàbuduō', vi: 'gần như, tàm tạm', type: 'Tính/Phó', rank: 85 },
      { word: '告辞', pinyin: 'gàocí', vi: 'cáo từ, xin phép về', type: 'Động từ', rank: 350 },
      { word: '地道', pinyin: 'dìdao', vi: 'chuẩn vị, chính cống', type: 'Tính từ', rank: 260 },
      { word: '火锅', pinyin: 'huǒguō', vi: 'món lẩu', type: 'Danh từ', rank: 290 },
      { word: '平安', pinyin: 'píng\'ān', vi: 'bình an, yên ổn', type: 'Tính từ', rank: 175 },
      { word: '好梦', pinyin: 'hǎomèng', vi: 'giấc mơ đẹp', type: 'Danh từ', rank: 380 },
      { word: '期待', pinyin: 'qīdài', vi: 'mong chờ, kỳ vọng', type: 'Động từ', rank: 125 },
      { word: '相聚', pinyin: 'xiāngjù', vi: 'tụ họp, sum họp', type: 'Động từ', rank: 310 },
      { word: '保重', pinyin: 'bǎozhòng', vi: 'bảo trọng', type: 'Động từ', rank: 240 },
      { word: '沟通', pinyin: 'gōutōng', vi: 'giao tiếp, câu thông', type: 'Động từ', rank: 140 }
    ]
  }
};

// BỘ CỤM TỪ TIẾNG ANH TỪNG NGÀY (ENGLISH DAILY CHUNKS)
export const ENGLISH_DAILY_CHUNKS = {
  // NGÀY 1: Chào hỏi thân thiện & Mở lời tự nhiên
  1: {
    columnA: [
      { id: 'en_a1', text: "I was wondering if you could...", ipa: '/aɪ wʌz ˈwʌndərɪŋ ɪf juː kʊd/', vi: 'Tôi tự hỏi không biết bạn có thể...' },
      { id: 'en_a2', text: "Could you please help me...", ipa: '/kʊd juː pliːz hɛlp miː/', vi: 'Bạn có thể vui lòng giúp tôi...' },
      { id: 'en_a3', text: "Excuse me, do you happen to know...", ipa: '/ɪkˈskjuːs miː duː juː ˈhæpən tuː noʊ/', vi: 'Xin lỗi, bạn có biết...' },
      { id: 'en_a4', text: "I'm currently planning to...", ipa: '/aɪm ˈkɜːrəntli ˈplænɪŋ tuː/', vi: 'Tôi hiện đang lên kế hoạch để...' }
    ],
    columnB: [
      { id: 'en_b1', text: "take a quick look at this document", ipa: '/teɪk ə kwɪk lʊk æt ðɪs ˈdɑːkjumənt/', vi: 'xem lướt qua tài liệu này giúp tôi' },
      { id: 'en_b2', text: "find the nearest subway station", ipa: '/faɪnd ðə ˈnɪrɪst ˈsʌbweɪ ˈsteɪʃən/', vi: 'tìm trạm tàu điện ngầm gần nhất' },
      { id: 'en_b3', text: "get in touch with the manager", ipa: '/ɡɛt ɪn tʌtʃ wɪð ðə ˈmænɪdʒər/', vi: 'liên hệ trực tiếp với người quản lý' },
      { id: 'en_b4', text: "book a table for tonight", ipa: '/bʊk ə ˈteɪbəl fɔːr təˈnaɪt/', vi: 'đặt một bàn ăn cho tối nay' }
    ],
    columnC: [
      { id: 'en_c1', text: "as soon as you have time?", ipa: '/æz suːn æz juː hæv taɪm/', vi: 'ngay khi bạn có thời gian được không?' },
      { id: 'en_c2', text: "before 5 PM this afternoon.", ipa: '/bɪˈfɔːr faɪv piː ɛm ðɪs ˌæftərˈnuːn/', vi: 'trước 5 giờ chiều nay.' },
      { id: 'en_c3', text: "if it's not too much trouble.", ipa: '/ɪf ɪts nɑːt tuː mʌtʃ ˈtrʌbəl/', vi: 'nếu không quá phiền bạn.' },
      { id: 'en_c4', text: "I would really appreciate it!", ipa: '/aɪ wʊd ˈriːəli əˈpriːʃieɪt ɪt/', vi: 'tôi thực sự rất cảm kích!' }
    ],
    core3000List: [
      { word: 'wondering', ipa: '/ˈwʌndərɪŋ/', vi: 'tự hỏi, băn khoăn', type: 'Verb', rank: 310 },
      { word: 'document', ipa: '/ˈdɑːkjumənt/', vi: 'tài liệu, văn bản', type: 'Noun', rank: 245 },
      { word: 'subway', ipa: '/ˈsʌbweɪ/', vi: 'tàu điện ngầm', type: 'Noun', rank: 420 },
      { word: 'manager', ipa: '/ˈmænɪdʒər/', vi: 'người quản lý', type: 'Noun', rank: 115 },
      { word: 'appreciate', ipa: '/əˈpriːʃieɪt/', vi: 'cảm kích, trân trọng', type: 'Verb', rank: 180 },
      { word: 'currently', ipa: '/ˈkɜːrəntli/', vi: 'hiện tại, lúc này', type: 'Adverb', rank: 260 },
      { word: 'trouble', ipa: '/ˈtrʌbəl/', vi: 'rắc rối, phiền phức', type: 'Noun', rank: 195 },
      { word: 'nearest', ipa: '/ˈnɪrɪst/', vi: 'gần nhất', type: 'Adjective', rank: 330 },
      { word: 'touch', ipa: '/tʌtʃ/', vi: 'chạm, liên lạc', type: 'Noun/Verb', rank: 140 },
      { word: 'planning', ipa: '/ˈplænɪŋ/', vi: 'lên kế hoạch', type: 'Verb/Noun', rank: 205 }
    ]
  },

  // NGÀY 2: Cảm ơn chân thành & Đáp lại lịch thiệp
  2: {
    columnA: [
      { id: 'en_a1', text: "Thank you so much for...", ipa: '/θæŋk juː soʊ mʌtʃ fɔːr/', vi: 'Cảm ơn bạn rất nhiều vì đã...' },
      { id: 'en_a2', text: "I truly appreciate your...", ipa: '/aɪ ˈtruːli əˈpriːʃieɪt jɔːr/', vi: 'Tôi thực sự rất trân trọng...' },
      { id: 'en_a3', text: "Don’t mention it, I was happy to...", ipa: '/doʊnt ˈmenʃn ɪt aɪ wʌz ˈhæpi tuː/', vi: 'Khách sáo làm gì, tôi rất vui lòng...' },
      { id: 'en_a4', text: "Whenever you need assistance, please...", ipa: '/wenˈevər juː niːd əˈsɪstəns pliːz/', vi: 'Bất cứ khi nào bạn cần giúp đỡ, xin...' }
    ],
    columnB: [
      { id: 'en_b1', text: "lending me a helping hand today", ipa: '/ˈlendɪŋ miː ə ˈhelpɪŋ hænd təˈdeɪ/', vi: 'đã nhiệt tình ra tay giúp đỡ tôi hôm nay' },
      { id: 'en_b2', text: "generous hospitality and kind support", ipa: '/ˈdʒenərəs ˌhɑːspɪˈtæləti ænd kaɪnd səˈpɔːrt/', vi: 'sự đón tiếp nồng hậu và ủng hộ chân tình' },
      { id: 'en_b3', text: "guide you through the entire process", ipa: '/ɡaɪd juː θruː ðiː ɪnˈtaɪər ˈprɑːses/', vi: 'hướng dẫn bạn qua toàn bộ quy trình' },
      { id: 'en_b4', text: "feel free to reach out anytime", ipa: '/fiːl friː tuː riːtʃ aʊt ˈenitaɪm/', vi: 'cứ thoải mái liên hệ bất cứ lúc nào' }
    ],
    columnC: [
      { id: 'en_c1', text: "it really made my day!", ipa: '/ɪt ˈriːəli meɪd maɪ deɪ/', vi: 'nó thực sự làm một ngày của tôi tuyệt vời hơn!' },
      { id: 'en_c2', text: "that is what good friends are for.", ipa: '/ðæt ɪz wʌt ɡʊd frendz ɑːr fɔːr/', vi: 'bạn bè tốt là để giúp nhau lúc này mà.' },
      { id: 'en_c3', text: "hope to return the favor soon.", ipa: '/hoʊp tuː rɪˈtɜːrn ðə ˈfeɪvər suːn/', vi: 'hy vọng sẽ sớm có dịp đền đáp sự giúp đỡ.' },
      { id: 'en_c4', text: "have a wonderful rest of your day!", ipa: '/hæv ə ˈwʌndərfl rest əv jɔːr deɪ/', vi: 'chúc bạn phần còn lại trong ngày thật tuyệt!' }
    ],
    core3000List: [
      { word: 'hospitality', ipa: '/ˌhɑːspɪˈtæləti/', vi: 'lòng hiếu khách', type: 'Noun', rank: 350 },
      { word: 'generous', ipa: '/ˈdʒenərəs/', vi: 'hào phóng, rộng rãi', type: 'Adjective', rank: 290 },
      { word: 'assistance', ipa: '/əˈsɪstəns/', vi: 'sự hỗ trợ', type: 'Noun', rank: 210 },
      { word: 'process', ipa: '/ˈprɑːses/', vi: 'quy trình', type: 'Noun', rank: 110 },
      { word: 'entire', ipa: '/ɪnˈtaɪər/', vi: 'toàn bộ', type: 'Adjective', rank: 180 },
      { word: 'favor', ipa: '/ˈfeɪvər/', vi: 'ân huệ, sự giúp đỡ', type: 'Noun', rank: 240 },
      { word: 'support', ipa: '/səˈpɔːrt/', vi: 'ủng hộ, hỗ trợ', type: 'Verb/Noun', rank: 95 },
      { word: 'guide', ipa: '/ɡaɪd/', vi: 'hướng dẫn', type: 'Verb/Noun', rank: 165 },
      { word: 'reach', ipa: '/riːtʃ/', vi: 'với tới, liên lạc', type: 'Verb', rank: 140 },
      { word: 'wonderful', ipa: '/ˈwʌndərfl/', vi: 'tuyệt vời', type: 'Adjective', rank: 120 }
    ]
  },

  // NGÀY 3: Lời xin lỗi & Giải thích khéo léo
  3: {
    columnA: [
      { id: 'en_a1', text: "I am terribly sorry for...", ipa: '/aɪ æm ˈterəbli ˈsɑːri fɔːr/', vi: 'Tôi vô cùng xin lỗi vì đã...' },
      { id: 'en_a2', text: "I apologize for the delay, but...", ipa: '/aɪ əˈpɑːlədʒaɪz fɔːr ðə dɪˈleɪ bʌt/', vi: 'Tôi xin lỗi vì sự chậm trễ, nhưng...' },
      { id: 'en_a3', text: "No worries at all, please don’t...", ipa: '/noʊ ˈwɜːriz æt ɔːl pliːz doʊnt/', vi: 'Không sao đâu, xin bạn đừng...' },
      { id: 'en_a4', text: "It was an honest mistake, let me...", ipa: '/ɪt wʌz ən ˈɑːnɪst mɪˈsteɪk let miː/', vi: 'Đó là một sơ suất ngoài ý muốn, để tôi...' }
    ],
    columnB: [
      { id: 'en_b1', text: "keeping you waiting out in the rain", ipa: '/ˈkiːpɪŋ juː ˈweɪtɪŋ aʊt ɪn ðə reɪn/', vi: 'để bạn phải đứng chờ ngoài trời mưa' },
      { id: 'en_b2', text: "heavy traffic jammed the highway", ipa: '/ˈhevi ˈtræfɪk dʒæmd ðə ˈhaɪweɪ/', vi: 'giao thông đông đúc làm tắc nghẽn đường cao tốc' },
      { id: 'en_b3', text: "beat yourself up over this minor issue", ipa: '/biːt jɔːrˈself ʌp ˈoʊvər ðɪs ˈmaɪnər ˈɪʃuː/', vi: 'tự trách bản thân vì vấn đề nhỏ nhặt này' },
      { id: 'en_b4', text: "sort this problem out immediately", ipa: '/sɔːrt ðɪs ˈprɑːbləm aʊt ɪˈmiːdiətli/', vi: 'giải quyết triệt để vấn đề này ngay lập tức' }
    ],
    columnC: [
      { id: 'en_c1', text: "I promise it won’t happen again.", ipa: '/aɪ ˈprɑːmɪs ɪt woʊnt ˈhæpən əˈɡen/', vi: 'tôi hứa chuyện này sẽ không tái diễn.' },
      { id: 'en_c2', text: "everyone completely understands.", ipa: '/ˈevriwʌn kəmˈpliːtli ˌʌndərˈstændz/', vi: 'mọi người đều hoàn toàn có thể hiểu được.' },
      { id: 'en_c3', text: "thank you for your patience!", ipa: '/θæŋk juː fɔːr jɔːr ˈpeɪʃns/', vi: 'cảm ơn bạn vì đã rất kiên nhẫn!' },
      { id: 'en_c4', text: "all is good and settled now.", ipa: '/ɔːl ɪz ɡʊd ænd ˈsetld naʊ/', vi: 'mọi thứ giờ đã ổn thỏa xong xuôi rồi.' }
    ],
    core3000List: [
      { word: 'terribly', ipa: '/ˈterəbli/', vi: 'vô cùng, tệ hại', type: 'Adverb', rank: 320 },
      { word: 'traffic', ipa: '/ˈtræfɪk/', vi: 'giao thông, xe cộ', type: 'Noun', rank: 190 },
      { word: 'patience', ipa: '/ˈpeɪʃns/', vi: 'sự kiên nhẫn', type: 'Noun', rank: 250 },
      { word: 'immediately', ipa: '/ɪˈmiːdiətli/', vi: 'ngay lập tức', type: 'Adverb', rank: 140 },
      { word: 'promise', ipa: '/ˈprɑːmɪs/', vi: 'hứa hẹn', type: 'Verb/Noun', rank: 160 },
      { word: 'highway', ipa: '/ˈhaɪweɪ/', vi: 'đường cao tốc', type: 'Noun', rank: 380 },
      { word: 'minor', ipa: '/ˈmaɪnər/', vi: 'nhỏ, không đáng kể', type: 'Adjective', rank: 215 },
      { word: 'settled', ipa: '/ˈsetld/', vi: 'đã giải quyết xong', type: 'Adjective', rank: 290 },
      { word: 'delay', ipa: '/dɪˈleɪ/', vi: 'trì hoãn, chậm trễ', type: 'Noun/Verb', rank: 220 },
      { word: 'mistake', ipa: '/mɪˈsteɪk/', vi: 'sai lầm', type: 'Noun', rank: 110 }
    ]
  }
};

/**
 * Trả về dữ liệu Chunks & 3000 từ theo ngày và ngôn ngữ (zh | en)
 */
export function getDailyChunksData(dayNum, lang = 'zh') {
  const isEn = lang === 'en';

  if (isEn) {
    if (ENGLISH_DAILY_CHUNKS[dayNum]) {
      return ENGLISH_DAILY_CHUNKS[dayNum];
    }
    // Fallback rotation for English
    const fallbackDay = ((dayNum - 1) % 3) + 1;
    return ENGLISH_DAILY_CHUNKS[fallbackDay] || ENGLISH_DAILY_CHUNKS[1];
  } else {
    if (CHINESE_DAILY_CHUNKS[dayNum]) {
      return CHINESE_DAILY_CHUNKS[dayNum];
    }
    // Fallback rotation for Chinese
    const fallbackDay = ((dayNum - 1) % 5) + 1;
    return CHINESE_DAILY_CHUNKS[fallbackDay] || CHINESE_DAILY_CHUNKS[1];
  }
}
