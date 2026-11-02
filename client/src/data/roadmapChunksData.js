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
// Thiết kế từ A1 -> B1 cho Dân Công Sở, Văn Phòng, Marketing & Booking
export const ENGLISH_DAILY_CHUNKS = {
  // NGÀY 1: Giao tiếp văn phòng & Nhờ vả đồng nghiệp (Level A1 - Office Basics)
  1: {
    columnA: [
      { id: 'en_a1', text: "Could you please help me...", ipa: '/kʊd juː pliːz hɛlp miː/', vi: 'Bạn có thể vui lòng giúp tôi...' },
      { id: 'en_a2', text: "Can you send me...", ipa: '/kæn juː sɛnd miː/', vi: 'Bạn có thể gửi cho tôi...' },
      { id: 'en_a3', text: "I need to check...", ipa: '/aɪ niːd tuː tʃɛk/', vi: 'Tôi cần kiểm tra lại...' },
      { id: 'en_a4', text: "Are you free to...", ipa: '/ɑːr juː friː tuː/', vi: 'Bạn có rảnh để...' }
    ],
    columnB: [
      { id: 'en_b1', text: "check this new file today", ipa: '/tʃɛk ðɪs nuː faɪl təˈdeɪ/', vi: 'kiểm tra tệp tài liệu mới này hôm nay' },
      { id: 'en_b2', text: "forward the email to our team", ipa: '/ˈfɔːrwərd ði ˈiːmeɪl tuː ˈaʊər tiːm/', vi: 'chuyển tiếp email tới nhóm chúng ta' },
      { id: 'en_b3', text: "print out the meeting notes", ipa: '/prɪnt aʊt ðə ˈmiːtɪŋ noʊts/', vi: 'in tài liệu ghi chép cuộc họp' },
      { id: 'en_b4', text: "have a quick talk with me", ipa: '/hæv ə kwɪk tɔːk wɪð miː/', vi: 'trao đổi nhanh một chút với tôi' }
    ],
    columnC: [
      { id: 'en_c1', text: "as soon as you can?", ipa: '/æz suːn æz juː kæn/', vi: 'ngay khi bạn có thể được không?' },
      { id: 'en_c2', text: "before our afternoon meeting.", ipa: '/bɪˈfɔːr ˈaʊər ˌæftərˈnuːn ˈmiːtɪŋ/', vi: 'trước cuộc họp buổi chiều của chúng ta.' },
      { id: 'en_c3', text: "if it's not too much trouble.", ipa: '/ɪf ɪts nɑːt tuː mʌtʃ ˈtrʌbəl/', vi: 'nếu không quá phiền bạn.' },
      { id: 'en_c4', text: "thank you so much!", ipa: '/θæŋk juː soʊ mʌtʃ/', vi: 'cảm ơn bạn rất nhiều!' }
    ],
    core3000List: [
      { word: 'help', ipa: '/hɛlp/', vi: 'giúp đỡ', type: 'Verb/Noun', rank: 45 },
      { word: 'file', ipa: '/faɪl/', vi: 'tệp tài liệu', type: 'Noun', rank: 110 },
      { word: 'send', ipa: '/sɛnd/', vi: 'gửi đi', type: 'Verb', rank: 80 },
      { word: 'team', ipa: '/tiːm/', vi: 'nhóm, đội ngũ', type: 'Noun', rank: 65 },
      { word: 'desk', ipa: '/dɛsk/', vi: 'bàn làm việc', type: 'Noun', rank: 190 },
      { word: 'check', ipa: '/tʃɛk/', vi: 'kiểm tra', type: 'Verb', rank: 75 },
      { word: 'call', ipa: '/kɔːl/', vi: 'gọi điện', type: 'Verb/Noun', rank: 55 },
      { word: 'meet', ipa: '/miːt/', vi: 'gặp mặt, họp', type: 'Verb', rank: 90 },
      { word: 'busy', ipa: '/ˈbɪzi/', vi: 'bận rộn', type: 'Adjective', rank: 125 },
      { word: 'free', ipa: '/friː/', vi: 'rảnh rỗi, tự do', type: 'Adjective', rank: 85 }
    ]
  },

  // NGÀY 2: Đặt lịch họp & Họp nội bộ phòng ban (Level A1-A2 - Meetings & Schedule)
  2: {
    columnA: [
      { id: 'en_a1', text: "Let's set up a meeting to...", ipa: '/lɛts sɛt ʌp ə ˈmiːtɪŋ tuː/', vi: 'Chúng ta hãy hẹn họp để...' },
      { id: 'en_a2', text: "Can we change the time to...", ipa: '/kæn wiː tʃeɪndʒ ðə taɪm tuː/', vi: 'Chúng ta có thể dời giờ họp sang...' },
      { id: 'en_a3', text: "I would like to share...", ipa: '/aɪ wʊd laɪk tuː ʃɛr/', vi: 'Tôi muốn chia sẻ...' },
      { id: 'en_a4', text: "Please remind everyone to...", ipa: '/pliːz rɪˈmaɪnd ˈɛvriwʌn tuː/', vi: 'Xin nhắc mọi người...' }
    ],
    columnB: [
      { id: 'en_b1', text: "review the weekly work plan", ipa: '/rɪˈvjuː ðə ˈwiːkli wɜːrk plæn/', vi: 'rà soát kế hoạch công việc tuần' },
      { id: 'en_b2', text: "discuss our next marketing idea", ipa: '/dɪˈskʌs ˈaʊər nɛkst ˈmɑːrkətɪŋ aɪˈdiːə/', vi: 'thảo luận ý tưởng marketing tiếp theo' },
      { id: 'en_b3', text: "book Meeting Room B on Floor 2", ipa: '/bʊk ˈmiːtɪŋ ruːm biː ɑːn flɔːr tuː/', vi: 'đặt phòng họp B ở tầng 2' },
      { id: 'en_b4', text: "join the online call on time", ipa: '/dʒɔɪn ði ˈɑːnlaɪn kɔːl ɑːn taɪm/', vi: 'tham gia cuộc gọi trực tuyến đúng giờ' }
    ],
    columnC: [
      { id: 'en_c1', text: "at 10 AM tomorrow morning.", ipa: '/æt tɛn eɪ ɛm təˈmɔːroʊ ˈmɔːrnɪŋ/', vi: 'vào lúc 10 giờ sáng mai.' },
      { id: 'en_c2', text: "before this Friday afternoon.", ipa: '/bɪˈfɔːr ðɪs ˈfraɪdeɪ ˌæftərˈnuːn/', vi: 'trước chiều thứ Sáu tuần này.' },
      { id: 'en_c3', text: "so everyone stays updated.", ipa: '/soʊ ˈɛvriwʌn steɪz ʌpˈdeɪtɪd/', vi: 'để mọi người đều nắm thông tin mới nhất.' },
      { id: 'en_c4', text: "if that works for you.", ipa: '/ɪf ðæt wɜːrks fɔːr juː/', vi: 'nếu thời gian đó phù hợp với bạn.' }
    ],
    core3000List: [
      { word: 'meeting', ipa: '/ˈmiːtɪŋ/', vi: 'cuộc họp', type: 'Noun', rank: 60 },
      { word: 'plan', ipa: '/plæn/', vi: 'kế hoạch', type: 'Noun/Verb', rank: 70 },
      { word: 'share', ipa: '/ʃɛr/', vi: 'chia sẻ', type: 'Verb', rank: 95 },
      { word: 'discuss', ipa: '/dɪˈskʌs/', vi: 'thảo luận', type: 'Verb', rank: 115 },
      { word: 'review', ipa: '/rɪˈvjuː/', vi: 'rà soát, xem lại', type: 'Verb/Noun', rank: 130 },
      { word: 'online', ipa: '/ˈɑːnlaɪn/', vi: 'trực tuyến', type: 'Adjective/Adverb', rank: 85 },
      { word: 'idea', ipa: '/aɪˈdiːə/', vi: 'ý tưởng', type: 'Noun', rank: 105 },
      { word: 'floor', ipa: '/flɔːr/', vi: 'tầng nhà', type: 'Noun', rank: 180 },
      { word: 'join', ipa: '/dʒɔɪn/', vi: 'tham gia', type: 'Verb', rank: 140 },
      { word: 'remind', ipa: '/rɪˈmaɪnd/', vi: 'nhắc nhở', type: 'Verb', rank: 210 }
    ]
  },

  // NGÀY 3: Đặt chỗ & Dịch vụ Booking (Level A1-A2 - Table, Room & Ticket Booking)
  3: {
    columnA: [
      { id: 'en_a1', text: "I would like to book...", ipa: '/aɪ wʊd laɪk tuː bʊk/', vi: 'Tôi muốn đặt...' },
      { id: 'en_a2', text: "Do you have any available...", ipa: '/duː juː hæv ˈɛni əˈveɪləbəl/', vi: 'Bạn còn trống...' },
      { id: 'en_a3', text: "Could I reserve...", ipa: '/kʊd aɪ rɪˈzɜːrv/', vi: 'Tôi có thể giữ trước...' },
      { id: 'en_a4', text: "Please confirm our booking for...", ipa: '/pliːz kənˈfɜːrm ˈaʊər ˈbʊkɪŋ fɔːr/', vi: 'Xin vui lòng xác nhận đặt chỗ cho...' }
    ],
    columnB: [
      { id: 'en_b1', text: "a table for four people tonight", ipa: '/ə ˈteɪbəl fɔːr fɔːr ˈpiːpəl təˈnaɪt/', vi: 'một bàn cho 4 người tối nay' },
      { id: 'en_b2', text: "a single room with high-speed wifi", ipa: '/ə ˈsɪŋɡəl ruːm wɪð haɪ spiːd ˈwaɪfaɪ/', vi: 'một phòng đơn có wifi tốc độ cao' },
      { id: 'en_b3', text: "two round-trip flight tickets", ipa: '/tuː raʊnd trɪp flaɪt ˈtɪkɪts/', vi: 'hai vé máy bay khứ hồi' },
      { id: 'en_b4', text: "a quiet corner for our business dinner", ipa: '/ə ˈkwaɪət ˈkɔːrnər fɔːr ˈaʊər ˈbɪznəs ˈdɪnər/', vi: 'một góc yên tĩnh cho tiệc tiếp đối tác' }
    ],
    columnC: [
      { id: 'en_c1', text: "under the name of Mr. Hai.", ipa: '/ˈʌndər ðə neɪm əv ˈmɪstər haɪ/', vi: 'dưới tên anh Hải.' },
      { id: 'en_c2', text: "for this coming weekend?", ipa: '/fɔːr ðɪs ˈkʌmɪŋ ˈwiːkˌɛnd/', vi: 'vào dịp cuối tuần này được không?' },
      { id: 'en_c3', text: "with breakfast included.", ipa: '/wɪð ˈbrɛkfəst ɪnˈkluːdɪd/', vi: 'đã bao gồm bữa sáng.' },
      { id: 'en_c4', text: "and send the confirmation via email.", ipa: '/ænd sɛnd ðə ˌkɑːnfərˈmeɪʃən ˈvaɪə ˈiːmeɪl/', vi: 'và gửi email xác nhận giúp tôi.' }
    ],
    core3000List: [
      { word: 'book', ipa: '/bʊk/', vi: 'đặt trước, giữ chỗ', type: 'Verb', rank: 50 },
      { word: 'reserve', ipa: '/rɪˈzɜːrv/', vi: 'đặt chỗ, giữ trước', type: 'Verb', rank: 190 },
      { word: 'available', ipa: '/əˈveɪləbəl/', vi: 'còn trống, có sẵn', type: 'Adjective', rank: 140 },
      { word: 'hotel', ipa: '/hoʊˈtɛl/', vi: 'khách sạn', type: 'Noun', rank: 110 },
      { word: 'ticket', ipa: '/ˈtɪkɪt/', vi: 'vé', type: 'Noun', rank: 135 },
      { word: 'table', ipa: '/ˈteɪbəl/', vi: 'bàn ăn', type: 'Noun', rank: 70 },
      { word: 'guest', ipa: '/ɡɛst/', vi: 'khách mời', type: 'Noun', rank: 160 },
      { word: 'confirm', ipa: '/kənˈfɜːrm/', vi: 'xác nhận', type: 'Verb', rank: 120 },
      { word: 'price', ipa: '/praɪs/', vi: 'giá tiền', type: 'Noun', rank: 80 },
      { word: 'bill', ipa: '/bɪl/', vi: 'hóa đơn', type: 'Noun', rank: 95 }
    ]
  },

  // NGÀY 4: Chiến dịch Marketing & Quảng bá mạng xã hội (Level A2 - Marketing & Social Ads)
  4: {
    columnA: [
      { id: 'en_a1', text: "Our marketing team plans to...", ipa: '/ˈaʊər ˈmɑːrkətɪŋ tiːm plænz tuː/', vi: 'Đội marketing chúng tôi dự định...' },
      { id: 'en_a2', text: "We should run ads to...", ipa: '/wiː ʃʊd rʌn ædz tuː/', vi: 'Chúng ta nên chạy quảng cáo để...' },
      { id: 'en_a3', text: "Let's track the results of...", ipa: '/lɛts træk ðə rɪˈzʌlts əv/', vi: 'Hãy theo dõi số liệu kết quả của...' },
      { id: 'en_a4', text: "We need more content to...", ipa: '/wiː niːd mɔːr ˈkɑːntɛnt tuː/', vi: 'Chúng ta cần thêm nội dung để...' }
    ],
    columnB: [
      { id: 'en_b1', text: "launch a 20% discount campaign", ipa: '/lɔːntʃ ə ˈtwɛnti pərˈsɛnt ˈdɪskaʊnt kæmˈpeɪn/', vi: 'tung chiến dịch giảm giá 20%' },
      { id: 'en_b2', text: "reach more young target customers", ipa: '/riːtʃ mɔːr jʌŋ ˈtɑːrɡɪt ˈkʌstəmərz/', vi: 'tiếp cận thêm khách hàng mục tiêu trẻ' },
      { id: 'en_b3', text: "post attractive product videos on TikTok", ipa: '/poʊst əˈtræktɪv ˈprɑːdʌkt ˈvɪdioʊz ɑːn ˈtɪktɑːk/', vi: 'đăng video sản phẩm thu hút lên TikTok' },
      { id: 'en_b4', text: "increase our website conversion rate", ipa: '/ɪnˈkriːs ˈaʊər ˈwɛbˌsaɪt kənˈvɜːrʒən reɪt/', vi: 'tăng tỉ lệ chuyển đổi trên trang web' }
    ],
    columnC: [
      { id: 'en_c1', text: "starting from next Monday.", ipa: '/ˈstɑːrtɪŋ frʌm nɛkst ˈmʌndeɪ/', vi: 'bắt đầu từ thứ Hai tuần tới.' },
      { id: 'en_c2', text: "within our monthly ad budget.", ipa: '/wɪˈðɪn ˈaʊər ˈmʌnθli æd ˈbʌdʒɪt/', vi: 'trong phạm vi ngân sách quảng cáo tháng.' },
      { id: 'en_c3', text: "to boost our total sales.", ipa: '/tuː buːst ˈaʊər ˈtoʊtl seɪlz/', vi: 'nhằm đẩy mạnh tổng doanh số bán hàng.' },
      { id: 'en_c4', text: "and attract new leads.", ipa: '/ænd əˈtrækt nuː liːdz/', vi: 'và thu hút tệp khách hàng tiềm năng mới.' }
    ],
    core3000List: [
      { word: 'campaign', ipa: '/kæmˈpeɪn/', vi: 'chiến dịch', type: 'Noun', rank: 160 },
      { word: 'target', ipa: '/ˈtɑːrɡɪt/', vi: 'mục tiêu', type: 'Noun/Verb', rank: 150 },
      { word: 'customer', ipa: '/ˈkʌstəmər/', vi: 'khách hàng', type: 'Noun', rank: 75 },
      { word: 'discount', ipa: '/ˈdɪskaʊnt/', vi: 'giảm giá', type: 'Noun', rank: 170 },
      { word: 'budget', ipa: '/ˈbʌdʒɪt/', vi: 'ngân sách', type: 'Noun', rank: 185 },
      { word: 'brand', ipa: '/brænd/', vi: 'thương hiệu', type: 'Noun', rank: 145 },
      { word: 'post', ipa: '/poʊst/', vi: 'đăng bài', type: 'Verb/Noun', rank: 90 },
      { word: 'ad', ipa: '/æd/', vi: 'quảng cáo', type: 'Noun', rank: 110 },
      { word: 'reach', ipa: '/riːtʃ/', vi: 'tiếp cận', type: 'Verb', rank: 125 },
      { word: 'rate', ipa: '/reɪt/', vi: 'tỉ lệ, mức', type: 'Noun', rank: 130 }
    ]
  },

  // NGÀY 5: Xử lý thay đổi lịch & Phản hồi khách hàng (Level A2-B1 - Rescheduling & Feedback)
  5: {
    columnA: [
      { id: 'en_a1', text: "I apologize for any inconvenience, but...", ipa: '/aɪ əˈpɑːlədʒaɪz fɔːr ˈɛni ˌɪnkənˈviːniəns bʌt/', vi: 'Tôi xin lỗi vì sự bất tiện, nhưng...' },
      { id: 'en_a2', text: "Could we reschedule our...", ipa: '/kʊd wiː ˌriːˈskɛdʒuːl ˈaʊər/', vi: 'Chúng ta có thể dời lịch...' },
      { id: 'en_a3', text: "Thank you for sharing your...", ipa: '/θæŋk juː fɔːr ˈʃɛrɪŋ jɔːr/', vi: 'Cảm ơn bạn đã chia sẻ...' },
      { id: 'en_a4', text: "We will do our best to...", ipa: '/wiː wɪl duː ˈaʊər bɛst tuː/', vi: 'Chúng tôi sẽ nỗ lực hết sức để...' }
    ],
    columnB: [
      { id: 'en_b1', text: "change the booking date to next Friday", ipa: '/tʃeɪndʒ ðə ˈbʊkɪŋ deɪt tuː nɛkst ˈfraɪdeɪ/', vi: 'đổi ngày đặt dịch vụ sang thứ Sáu tuần sau' },
      { id: 'en_b2', text: "valuable feedback regarding our service", ipa: '/ˈvæljuəbəl ˈfiːdbæk rɪˈɡɑːrdɪŋ ˈaʊər ˈsɜːrvɪs/', vi: 'những phản hồi quý giá về dịch vụ của chúng tôi' },
      { id: 'en_b3', text: "offer you a complimentary room upgrade", ipa: '/ˈɔːfər juː ə ˌkɑːmplɪˈmɛntri ruːm ˈʌpɡreɪd/', vi: 'tặng quý khách nâng cấp phòng miễn phí' },
      { id: 'en_b4', text: "resolve this booking issue right now", ipa: '/rɪˈzɑːlv ðɪs ˈbʊkɪŋ ˈɪʃuː raɪt naʊ/', vi: 'giải quyết sự cố đặt chỗ này ngay bây giờ' }
    ],
    columnC: [
      { id: 'en_c1', text: "without charging any extra fee.", ipa: '/wɪˈðaʊt ˈtʃɑːrdʒɪŋ ˈɛni ˈɛkstrə fiː/', vi: 'mà không thu thêm bất kỳ phụ phí nào.' },
      { id: 'en_c2', text: "to make sure you have the best experience.", ipa: '/tuː meɪk ʃʊr juː hæv ðə bɛst ɪkˈspɪriəns/', vi: 'để đảm bảo quý khách có trải nghiệm tốt nhất.' },
      { id: 'en_c3', text: "and send you an updated invoice.", ipa: '/ænd sɛnd juː ən ʌpˈdeɪtɪd ˈɪnvɔɪs/', vi: 'và gửi kèm hóa đơn cập nhật mới cho bạn.' },
      { id: 'en_c4', text: "thank you for your kind patience!", ipa: '/θæŋk juː fɔːr jɔːr kaɪnd ˈpeɪʃns/', vi: 'cảm ơn quý khách đã hết lòng kiên nhẫn!' }
    ],
    core3000List: [
      { word: 'feedback', ipa: '/ˈfiːdbæk/', vi: 'phản hồi', type: 'Noun', rank: 155 },
      { word: 'service', ipa: '/ˈsɜːrvɪs/', vi: 'dịch vụ', type: 'Noun', rank: 80 },
      { word: 'upgrade', ipa: '/ˈʌpɡreɪd/', vi: 'nâng cấp', type: 'Verb/Noun', rank: 220 },
      { word: 'resolve', ipa: '/rɪˈzɑːlv/', vi: 'giải quyết', type: 'Verb', rank: 195 },
      { word: 'apologize', ipa: '/əˈpɑːlədʒaɪz/', vi: 'xin lỗi', type: 'Verb', rank: 230 },
      { word: 'patience', ipa: '/ˈpeɪʃns/', vi: 'sự kiên nhẫn', type: 'Noun', rank: 245 },
      { word: 'fee', ipa: '/fiː/', vi: 'khoản phí', type: 'Noun', rank: 175 },
      { word: 'offer', ipa: '/ˈɔːfər/', vi: 'đưa ra, đề nghị', type: 'Verb/Noun', rank: 95 },
      { word: 'delay', ipa: '/dɪˈleɪ/', vi: 'trì hoãn, chậm trễ', type: 'Noun/Verb', rank: 210 },
      { word: 'invoice', ipa: '/ˈɪnvɔɪs/', vi: 'hóa đơn dịch vụ', type: 'Noun', rank: 260 }
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
    // Fallback rotation 5 ngày cho Tiếng Anh
    const fallbackDay = ((dayNum - 1) % 5) + 1;
    return ENGLISH_DAILY_CHUNKS[fallbackDay] || ENGLISH_DAILY_CHUNKS[1];
  } else {
    if (CHINESE_DAILY_CHUNKS[dayNum]) {
      return CHINESE_DAILY_CHUNKS[dayNum];
    }
    // Fallback rotation 5 ngày cho Tiếng Trung
    const fallbackDay = ((dayNum - 1) % 5) + 1;
    return CHINESE_DAILY_CHUNKS[fallbackDay] || CHINESE_DAILY_CHUNKS[1];
  }
}

