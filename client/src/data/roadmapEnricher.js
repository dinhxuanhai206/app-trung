/**
 * ROADMAP ENRICHER MODULE (NÂNG CẤP TOÀN DIỆN CHO 90 NGÀY)
 * Cung cấp giải pháp học nghe nói thực chiến & chống nản chuyên sâu:
 * 1. 10 - 12 Từ vựng thực chiến MỖI NGÀY BIẾN ĐỔI RIÊNG BIỆT (có Hán Việt, Pinyin, Nghĩa, Loại từ, Ví dụ)
 * 2. 8 - 10 Câu khẩu ngữ đời sống thực tế (có phân loại ngữ cảnh, bóc tách cấu trúc)
 * 3. Đoạn hội thoại thực tế phong phú (Roleplay A - B)
 * 4. Bài khóa luyện đọc THUẦN CHỮ HÁN (ẨN PINYIN) + Click tra cứu tức thì + Câu hỏi đọc hiểu
 * 5. Đấu trường Game ôn tập (Ghép thẻ từ vựng đúng bài học ngày đó, Phản xạ, Scramble, Gap-fill, True/False)
 */

import { HSK_1000_VOCABULARY } from './vocab1000Data';

// BỘ TỪ VỰNG THỰC CHIẾN ĐỘC LẬP TỪNG NGÀY (NGÀY 1 - 14)
export const DAILY_ZH_VOCABULARY_MAP = {
  // NGÀY 1: Chào hỏi căn bản & Bật âm Pinyin
  1: [
    { hanzi: '你好', pinyin: 'nǐ hǎo', hv: 'Nhĩ hảo', vi: 'Xin chào', type: 'Chào hỏi', example: '你好！很高兴认识你。' },
    { hanzi: '您', pinyin: 'nín', hv: 'Nẫm', vi: 'Ngài / Bác / Chú (Kính ngữ)', type: 'Đại từ', example: '您好，李老师！' },
    { hanzi: '好', pinyin: 'hǎo', hv: 'Hảo', vi: 'Tốt, an lành, khỏe', type: 'Tính từ', example: '我今天很好。' },
    { hanzi: '吗', pinyin: 'ma', hv: 'Ma', vi: 'Không? / À? (Trợ từ hỏi)', type: 'Trợ từ', example: '你身体好吗？' },
    { hanzi: '我', pinyin: 'wǒ', hv: 'Ngã', vi: 'Tôi, mình, em', type: 'Đại từ', example: '我也是越南人。' },
    { hanzi: '很', pinyin: 'hěn', hv: 'Hẩn', vi: 'Rất', type: 'Phó từ', example: '汉语很有意思。' },
    { hanzi: '也', pinyin: 'yě', hv: 'Dã', vi: 'Cũng', type: 'Phó từ', example: '我也很高兴认识你。' },
    { hanzi: '谢谢', pinyin: 'xièxie', hv: 'Tạ tạ', vi: 'Cảm ơn', type: 'Xã giao', example: '非常谢谢你的帮助！' },
    { hanzi: '再见', pinyin: 'zàijiàn', hv: 'Tái kiến', vi: 'Tạm biệt', type: 'Xã giao', example: '明天见，再见！' },
    { hanzi: '大家', pinyin: 'dàjiā', hv: 'Đại gia', vi: 'Mọi người, tất cả', type: 'Đại từ', example: '大家好，欢迎来到这里！' },
    { hanzi: '欢迎', pinyin: 'huānyíng', hv: 'Hoan nghênh', vi: 'Hoan nghênh, chào mừng', type: 'Động từ', example: '欢迎你来河内旅游！' },
    { hanzi: '高兴', pinyin: 'gāoxìng', hv: 'Cao hưng', vi: 'Vui vẻ, phấn khởi', type: 'Tính từ', example: '认识你，我很高兴。' }
  ],

  // NGÀY 2: Chào hỏi theo các buổi trong ngày & Giờ giấc sinh hoạt
  2: [
    { hanzi: '早上好', pinyin: 'zǎoshang hǎo', hv: 'Tảo thượng hảo', vi: 'Chào buổi sáng', type: 'Chào hỏi', example: '王经理，早上好！' },
    { hanzi: '下午好', pinyin: 'xiàwǔ hǎo', hv: 'Hạ ngọ hảo', vi: 'Chào buổi chiều', type: 'Chào hỏi', example: '大家下午好，我们开会吧。' },
    { hanzi: '晚上好', pinyin: 'wǎnshang hǎo', hv: 'Vãn thượng hảo', vi: 'Chào buổi tối', type: 'Chào hỏi', example: '叔叔阿姨，晚上好！' },
    { hanzi: '晚安', pinyin: 'wǎn\'ān', hv: 'Vãn an', vi: 'Chúc ngủ ngon', type: 'Lời chúc', example: '时间不早了，祝你晚安！' },
    { hanzi: '祝', pinyin: 'zhù', hv: 'Chúc', vi: 'Chúc (chúc tụng)', type: 'Động từ', example: '祝你今天工作顺利！' },
    { hanzi: '早上', pinyin: 'zǎoshang', hv: 'Tảo thượng', vi: 'Buổi sáng sớm (6h - 9h)', type: 'Thời gian', example: '我早上七点吃早饭。' },
    { hanzi: '上午', pinyin: 'shàngwǔ', hv: 'Thượng ngọ', vi: 'Buổi sáng (9h - 11h30)', type: 'Thời gian', example: '上午我有两节中文课。' },
    { hanzi: '中午', pinyin: 'zhōngwǔ', hv: 'Trung ngọ', vi: 'Buổi trưa (11h30 - 13h)', type: 'Thời gian', example: '中午我们一起去食堂吃饭。' },
    { hanzi: '下午', pinyin: 'xiàwǔ', hv: 'Hạ ngọ', vi: 'Buổi chiều (13h - 18h)', type: 'Thời gian', example: '下午三点去见客户。' },
    { hanzi: '晚上', pinyin: 'wǎnshang', hv: 'Vãn thượng', vi: 'Buổi tối (sau 18h)', type: 'Thời gian', example: '晚上我喜欢听音乐。' },
    { hanzi: '今天', pinyin: 'jīntiān', hv: 'Kim thiên', vi: 'Hôm nay', type: 'Thời gian', example: '今天天气特别好。' },
    { hanzi: '明天', pinyin: 'míngtiān', hv: 'Minh thiên', vi: 'Ngày mai', type: 'Thời gian', example: '明天早上我们不见不散！' }
  ],

  // NGÀY 3: Cảm ơn & Đáp lại lời cảm ơn lịch sự
  3: [
    { hanzi: '感谢', pinyin: 'gǎnxiè', hv: 'Cảm tạ', vi: 'Cảm tạ, cảm ơn chân thành', type: 'Động từ', example: '非常感谢您的热情关照！' },
    { hanzi: '帮助', pinyin: 'bāngzhù', hv: 'Bang trợ', vi: 'Giúp đỡ, sự giúp đỡ', type: 'Danh/Động', example: '多亏了你的大力帮助。' },
    { hanzi: '不客气', pinyin: 'bú kèqi', hv: 'Bất khách khí', vi: 'Không có chi / Đừng khách sáo', type: 'Xã giao', example: '不用谢，别客气！' },
    { hanzi: '不用谢', pinyin: 'bú yòng xiè', hv: 'Bất dụng tạ', vi: 'Không cần cảm ơn đâu', type: 'Khẩu ngữ', example: '小事一桩，不用谢！' },
    { hanzi: '应该', pinyin: 'yīnggāi', hv: 'Ưng cai', vi: 'Nên, là bổn phận', type: 'Năng nguyện', example: '这是我应该做的。' },
    { hanzi: '事情', pinyin: 'shìqing', hv: 'Sự tình', vi: 'Sự việc, chuyện', type: 'Danh từ', example: '这是小事情，别放在心上。' },
    { hanzi: '麻烦', pinyin: 'máfan', hv: 'Ma phiền', vi: 'Làm phiền / Phiền phức', type: 'Tính/Động', example: '今天真是不好意思，给您添麻烦了。' },
    { hanzi: '举手之劳', pinyin: 'jǔ shǒu zhī láo', hv: 'Cử thủ chi lao', vi: 'Việc tiện tay giúp đỡ', type: 'Thành ngữ', example: '您太客气了，这只是举手之劳。' },
    { hanzi: '热情', pinyin: 'rèqíng', hv: 'Nhiệt tình', vi: 'Nhiệt tình, niềm nở', type: 'Tính từ', example: '谢谢大家的热情招待！' },
    { hanzi: '关照', pinyin: 'guānzhào', hv: 'Quan chiếu', vi: 'Chiếu cố, chỉ bảo', type: 'Lịch sự', example: '以后请您多关照！' },
    { hanzi: '心意', pinyin: 'xīnyì', hv: 'Tâm ý', vi: 'Tấm lòng, thành ý', type: 'Danh từ', example: '这是我的一点小心意，请收下。' },
    { hanzi: '配合', pinyin: 'pèihé', hv: 'Phối hợp', vi: 'Phối hợp, hợp tác', type: 'Động từ', example: '感谢各位的积极配合！' }
  ],

  // NGÀY 4: Xin lỗi & Thứ lỗi (Xử lý tình huống ngại ngùng)
  4: [
    { hanzi: '对不起', pinyin: 'duìbuqǐ', hv: 'Đối bất khởi', vi: 'Xin lỗi (chân thành)', type: 'Lịch sự', example: '对不起，我来晚了。' },
    { hanzi: '不好意思', pinyin: 'bù hǎoyìsi', hv: 'Bất hảo ý tứ', vi: 'Ngại quá / Làm phiền chút', type: 'Khẩu ngữ', example: '不好意思，借过一下。' },
    { hanzi: '打扰', pinyin: 'dǎrǎo', hv: 'Đả nhiễu', vi: 'Làm phiền, quấy rầy', type: 'Động từ', example: '打扰一下，请问洗手间在哪儿？' },
    { hanzi: '没关系', pinyin: 'méi guānxi', hv: 'Một quan hệ', vi: 'Không sao đâu, không hề gì', type: 'Xã giao', example: '没关系，下次注意就行。' },
    { hanzi: '故意', pinyin: 'gùyì', hv: 'Cố ý', vi: 'Cố ý, chủ tâm', type: 'Phó từ', example: '我不是故意的，请原谅。' },
    { hanzi: '放心', pinyin: 'fàngxīn', hv: 'Phóng tâm', vi: 'Yên tâm, an lòng', type: 'Động từ', example: '你放心吧，我一点都不介意。' },
    { hanzi: '原谅', pinyin: 'yuánliàng', hv: 'Nguyên lượng', vi: 'Tha thứ, thứ lỗi', type: 'Động từ', example: '请原谅我的粗心大意。' },
    { hanzi: '抱歉', pinyin: 'bàoqiàn', hv: 'Bão khiểm', vi: 'Có lỗi, áy náy', type: 'Tính từ', example: '真的很抱歉，让你久等了。' },
    { hanzi: '介意', pinyin: 'jièyì', hv: 'Giới ý', vi: 'Để bụng, bận tâm', type: 'Động từ', example: '你介意我坐在旁边吗？' },
    { hanzi: '别', pinyin: 'bié', hv: 'Biệt', vi: 'Đừng, chớ', type: 'Phó từ', example: '别放在心上，大家都理解。' },
    { hanzi: '误会', pinyin: 'wùhuì', hv: 'Ngộ hội', vi: 'Hiểu lầm', type: 'Danh/Động', example: '这完全是一场误会。' },
    { hanzi: '解释', pinyin: 'jiěshì', hv: 'Giải thích', vi: 'Giải thích, trần tình', type: 'Động từ', example: '你听我慢慢跟你解释。' }
  ],

  // NGÀY 5: Tạm biệt & Hẹn gặp lại
  5: [
    { hanzi: '再见', pinyin: 'zàijiàn', hv: 'Tái kiến', vi: 'Tạm biệt, hẹn gặp lại', type: 'Xã giao', example: '时间差不多了，再见！' },
    { hanzi: '明天见', pinyin: 'míngtiān jiàn', hv: 'Minh thiên kiến', vi: 'Ngày mai gặp lại nhé', type: 'Chào hỏi', example: '明天见，晚上早点休息！' },
    { hanzi: '路上', pinyin: 'lùshang', hv: 'Lộ thượng', vi: 'Trên đường đi', type: 'Danh từ', example: '路上车多，骑车小心点！' },
    { hanzi: '小心', pinyin: 'xiǎoxīn', hv: 'Tiểu tâm', vi: 'Cẩn thận, chú ý', type: 'Tính/Động', example: '路上小心，慢走啊！' },
    { hanzi: '慢走', pinyin: 'màn zǒu', hv: 'Mạn tẩu', vi: 'Đi thong thả (tiễn khách)', type: 'Lịch sự', example: '您慢走，欢迎下次再来！' },
    { hanzi: '联系', pinyin: 'liánxì', hv: 'Liên hệ', vi: 'Liên lạc, kết nối', type: 'Động từ', example: '有空常联系，保持微信互动！' },
    { hanzi: '改天', pinyin: 'gǎitiān', hv: 'Cải thiên', vi: 'Hôm khác, bữa khác', type: 'Thời gian', example: '改天一起出来喝咖啡聊天！' },
    { hanzi: '回头见', pinyin: 'huítóu jiàn', hv: 'Hồi đầu kiến', vi: 'Lát nữa gặp / Gặp lại sau', type: 'Khẩu ngữ', example: '我先去办点事，回头见！' },
    { hanzi: '常', pinyin: 'cháng', hv: 'Thường', vi: 'Thường xuyên', type: 'Phó từ', example: '以后我们要常来常往。' },
    { hanzi: '保重', pinyin: 'bǎozhòng', hv: 'Bảo trọng', vi: 'Bảo trọng, giữ sức khỏe', type: 'Lời dặn', example: '天气转冷了，多保重身体！' },
    { hanzi: '电话', pinyin: 'diànhuà', hv: 'Điện thoại', vi: 'Điện thoại', type: 'Danh từ', example: '到了记得给我打个电话。' },
    { hanzi: '微信', pinyin: 'Wēixìn', hv: 'Vi tín', vi: 'Ứng dụng WeChat', type: 'Danh từ', example: '微信随时留言，我都在。' }
  ],

  // NGÀY 6: Hỏi thăm sức khỏe & Thói quen đời sống
  6: [
    { hanzi: '身体', pinyin: 'shēntǐ', hv: 'Thân thể', vi: 'Sức khỏe, cơ thể', type: 'Danh từ', example: '你最近身体怎么样？' },
    { hanzi: '怎么样', pinyin: 'zěnmeyàng', hv: 'Chẩm ma dạng', vi: 'Như thế nào, ra sao?', type: 'Nghi vấn', example: '今天过得怎么样？' },
    { hanzi: '最近', pinyin: 'zuìjìn', hv: 'Tối cận', vi: 'Dạo này, gần đây', type: 'Thời gian', example: '最近工作挺忙的。' },
    { hanzi: '忙', pinyin: 'máng', hv: 'Mang', vi: 'Bận rộn', type: 'Tính từ', example: '你今天忙不忙？' },
    { hanzi: '累', pinyin: 'lèi', hv: 'Luy', vi: 'Mệt mỏi', type: 'Tính từ', example: '加了一整天班，真有点累。' },
    { hanzi: '舒服', pinyin: 'shūfu', hv: 'Thư phục', vi: 'Dễ chịu, thoải mái', type: 'Tính từ', example: '躺在沙发上真舒服。' },
    { hanzi: '生病', pinyin: 'shēngbìng', hv: 'Sanh bệnh', vi: 'Bị ốm, phát bệnh', type: 'Động từ', example: '他最近生病请假了。' },
    { hanzi: '感冒', pinyin: 'gǎnmào', hv: 'Cảm mạo', vi: 'Cảm cúm', type: 'Danh/Động', example: '天气变化大，容易感冒。' },
    { hanzi: '吃药', pinyin: 'chī yào', hv: 'Ngật dược', vi: 'Uống thuốc', type: 'Động từ', example: '记得按时吃药多休息。' },
    { hanzi: '喝水', pinyin: 'hē shuǐ', hv: 'Hát thủy', vi: 'Uống nước', type: 'Động từ', example: '感冒了要多喝温开水。' },
    { hanzi: '运动', pinyin: 'yùndòng', hv: 'Vận động', vi: 'Thể thao, vận động', type: 'Danh/Động', example: '每天坚持运动半小时。' },
    { hanzi: '健康', pinyin: 'jiànkāng', hv: 'Kiện khang', vi: 'Khỏe mạnh, sức khỏe', type: 'Tính/Danh', example: '身体健康是最大的财富。' }
  ],

  // NGÀY 7: Ôn tập phản xạ & Bứt phá Tuần 1
  7: [
    { hanzi: '复习', pinyin: 'fùxí', hv: 'Phục tập', vi: 'Ôn tập, củng cố', type: 'Động từ', example: '周末我们一起复习口语吧。' },
    { hanzi: '交流', pinyin: 'jiāoliú', hv: 'Giao lưu', vi: 'Giao lưu, trao đổi', type: 'Động từ', example: '多跟中国朋友用汉语交流。' },
    { hanzi: '习惯', pinyin: 'xíguàn', hv: 'Tập quán', vi: 'Thói quen / Quen với', type: 'Danh/Động', example: '养成每天学15分钟的好习惯。' },
    { hanzi: '流利', pinyin: 'liúlì', hv: 'Lưu lợi', vi: 'Lưu loát, trôi chảy', type: 'Tính từ', example: '他的汉语口语非常流利。' },
    { hanzi: '自然', pinyin: 'zìrán', hv: 'Tự nhiên', vi: 'Tự nhiên, chân thật', type: 'Tính từ', example: '说话语调要放松自然。' },
    { hanzi: '发音', pinyin: 'fāyīn', hv: 'Phát âm', vi: 'Phát âm', type: 'Danh/Động', example: '你的声调发音很标准。' },
    { hanzi: '听懂', pinyin: 'tīng dǒng', hv: 'Thính đổng', vi: 'Nghe hiểu', type: 'Bổ ngữ', example: '这句话你听懂了吗？' },
    { hanzi: '回答', pinyin: 'huídá', hv: 'Hồi đáp', vi: 'Trả lời, đối đáp', type: 'Động từ', example: '请快速回答我的问题。' },
    { hanzi: '进步', pinyin: 'jìnbù', hv: 'Tiến bộ', vi: 'Tiến bộ', type: 'Danh/Động', example: '你这一周进步非常大！' },
    { hanzi: '自信', pinyin: 'zìxìn', hv: 'Tự tín', vi: 'Tự tin', type: 'Tính từ', example: '开口说汉语要有自信。' },
    { hanzi: '口语', pinyin: 'kǒuyǔ', hv: 'Khẩu ngữ', vi: 'Khẩu ngữ, văn nói', type: 'Danh từ', example: '练好口语重在每天开口。' },
    { hanzi: '坚持', pinyin: 'jiānchí', hv: 'Kiên trì', vi: 'Kiên trì', type: 'Động từ', example: '只要坚持90天，就能脱口而出！' }
  ],

  // NGÀY 8: Hỏi tên & Xưng hô chuẩn mực
  8: [
    { hanzi: '叫', pinyin: 'jiào', hv: 'Khiếu', vi: 'Tên là, gọi là', type: 'Động từ', example: '你叫什么名字？' },
    { hanzi: '名字', pinyin: 'míngzi', hv: 'Danh tự', vi: 'Họ tên, tên', type: 'Danh từ', example: '我的名字叫大卫。' },
    { hanzi: '什么', pinyin: 'shénme', hv: 'Thập ma', vi: 'Cái gì, gì', type: 'Nghi vấn', example: '这是什么东西？' },
    { hanzi: '贵姓', pinyin: 'guìxìng', hv: 'Quý tính', vi: 'Quý tính (Họ của bạn)', type: 'Lịch sự', example: '请问您贵姓？' },
    { hanzi: '姓', pinyin: 'xìng', hv: 'Tính', vi: 'Mang họ', type: 'Động/Danh', example: '我姓阮，阮文海。' },
    { hanzi: '怎么', pinyin: 'zěnme', hv: 'Chẩm ma', vi: 'Thế nào, ra sao', type: 'Nghi vấn', example: '我应该怎么称呼您？' },
    { hanzi: '称呼', pinyin: 'chēnghu', hv: 'Xưng hô', vi: 'Xưng hô, gọi tên', type: 'Danh/Động', example: '大家平时都称呼我阿海。' },
    { hanzi: '认识', pinyin: 'rènshi', hv: 'Nhận thức', vi: 'Quen biết, làm quen', type: 'Động từ', example: '很高兴认识各位新同事！' },
    { hanzi: '先生', pinyin: 'xiānsheng', hv: 'Tiên sinh', vi: 'Ông, anh, quý ngài', type: 'Danh từ', example: '李先生，里面请！' },
    { hanzi: '女士', pinyin: 'nǚshì', hv: 'Nữ sĩ', vi: 'Bà, cô, quý cô', type: 'Danh từ', example: '王女士是我们的总经理。' },
    { hanzi: '同事', pinyin: 'tóngshì', hv: 'Đồng sự', vi: 'Đồng nghiệp', type: 'Danh từ', example: '我们都是同一家公司的同事。' },
    { hanzi: '自我介绍', pinyin: 'zìwǒ jièshào', hv: 'Tự ngã giới thiệu', vi: 'Tự giới thiệu', type: 'Cụm từ', example: '请允许我做个简短的自我介绍。' }
  ],

  // NGÀY 9: Quốc tịch & Quê quán
  9: [
    { hanzi: '哪国人', pinyin: 'nǎ guó rén', hv: 'Nả quốc nhân', vi: 'Người nước nào', type: 'Nghi vấn', example: '请问你是哪国人？' },
    { hanzi: '越南', pinyin: 'Yuènán', hv: 'Việt Nam', vi: 'Việt Nam', type: 'Địa danh', example: '我是越南人，来自河内。' },
    { hanzi: '中国', pinyin: 'Zhōngguó', hv: 'Trung Quốc', vi: 'Trung Quốc', type: 'Địa danh', example: '我想去中国留学。' },
    { hanzi: '来自', pinyin: 'láizì', hv: 'Lai tự', vi: 'Đến từ', type: 'Động từ', example: '我来自美丽的沿海城市。' },
    { hanzi: '家乡', pinyin: 'jiāxiāng', hv: 'Gia hương', vi: 'Quê hương', type: 'Danh từ', example: '我的家乡有很多好吃的特产。' },
    { hanzi: '城市', pinyin: 'chéngshì', hv: 'Thành thị', vi: 'Thành phố', type: 'Danh từ', example: '河内是一座历史悠久的城市。' },
    { hanzi: '河内', pinyin: 'Hénèi', hv: 'Hà Nội', vi: 'Hà Nội (Thủ đô VN)', type: 'Địa danh', example: '河内的秋天特别迷人。' },
    { hanzi: '北京', pinyin: 'Běijīng', hv: 'Bắc Kinh', vi: 'Bắc Kinh (Thủ đô TQ)', type: 'Địa danh', example: '北京的烤鸭非常出名。' },
    { hanzi: '地方', pinyin: 'dìfang', hv: 'Địa phương', vi: 'Nơi chốn, địa phương', type: 'Danh từ', example: '你住在什么地方？' },
    { hanzi: '居住', pinyin: 'jūzhù', hv: 'Cư trú', vi: 'Sinh sống, cư trú', type: 'Động từ', example: '我在胡志明市居住三年了。' },
    { hanzi: '老家', pinyin: 'lǎojiā', hv: 'Lão gia', vi: 'Quê nhà, gốc quán', type: 'Danh từ', example: '过年我都回老家陪父母。' },
    { hanzi: '美丽', pinyin: 'měilì', hv: 'Mỹ lệ', vi: 'Xinh đẹp', type: 'Tính từ', example: '越南有很多美丽的风景名胜。' }
  ],

  // NGÀY 10: Tuổi tác & Năm sinh
  10: [
    { hanzi: '多大', pinyin: 'duō dà', hv: 'Đa đại', vi: 'Bao nhiêu tuổi', type: 'Nghi vấn', example: '你今年多大了？' },
    { hanzi: '岁', pinyin: 'suì', hv: 'Tuế', vi: 'Tuổi', type: 'Lượng từ', example: '我今年二十五岁。' },
    { hanzi: '年龄', pinyin: 'niánlíng', hv: 'Niên linh', vi: 'Tuổi tác', type: 'Danh từ', example: '年龄不是学习的障碍。' },
    { hanzi: '生日', pinyin: 'shēngrì', hv: 'Sanh nhật', vi: 'Ngày sinh nhật', type: 'Danh từ', example: '祝你生日快乐，心想事成！' },
    { hanzi: '出生', pinyin: 'chūshēng', hv: 'Xuất sanh', vi: 'Sinh ra', type: 'Động từ', example: '我是1998年出生的。' },
    { hanzi: '年', pinyin: 'nián', hv: 'Niên', vi: 'Năm', type: 'Danh từ', example: '今年是哪一年？' },
    { hanzi: '属', pinyin: 'shǔ', hv: 'Chúc', vi: 'Cầm tinh (tuổi con gì)', type: 'Động từ', example: '你属什么？我属虎。' },
    { hanzi: '生肖', pinyin: 'shēngxiào', hv: 'Sanh tiếu', vi: '12 con giáp', type: 'Danh từ', example: '中国有十二生肖文化。' },
    { hanzi: '年轻', pinyin: 'niánqīng', hv: 'Niên khinh', vi: 'Trẻ trung', type: 'Tính từ', example: '你看起来真年轻！' },
    { hanzi: '成熟', pinyin: 'chéngshú', hv: 'Thành thục', vi: 'Chín chắn, trưởng thành', type: 'Tính từ', example: '他说话做事非常成熟稳重。' },
    { hanzi: '快乐', pinyin: 'kuàilè', hv: 'Khoái lạc', vi: 'Vui vẻ, hạnh phúc', type: 'Tính từ', example: '每天快乐生活最重要。' },
    { hanzi: '长大', pinyin: 'zhǎng dà', hv: 'Trưởng đại', vi: 'Lớn lên', type: 'Động từ', example: '我在河内出生并长大。' }
  ],

  // NGÀY 11: Nghề nghiệp & Nơi làm việc
  11: [
    { hanzi: '工作', pinyin: 'gōngzuò', hv: 'Công tác', vi: 'Công việc / Làm việc', type: 'Danh/Động', example: '你做什么工作？' },
    { hanzi: '做', pinyin: 'zuò', hv: 'Tác', vi: 'Làm', type: 'Động từ', example: '你在哪家公司做开发？' },
    { hanzi: '工程师', pinyin: 'gōngchéngshī', hv: 'Công trình sư', vi: 'Kỹ sư', type: 'Nghề nghiệp', example: '他是一名资深软件工程师。' },
    { hanzi: '老师', pinyin: 'lǎoshī', hv: 'Lão sư', vi: 'Thầy cô giáo', type: 'Nghề nghiệp', example: '李老师教我们汉语口语。' },
    { hanzi: '医生', pinyin: 'yīshēng', hv: 'Y sanh', vi: 'Bác sĩ', type: 'Nghề nghiệp', example: '我妈妈在医院当医生。' },
    { hanzi: '公司', pinyin: 'gōngsī', hv: 'Công ty', vi: 'Công ty, doanh nghiệp', type: 'Danh từ', example: '我们的公司在外贸大厦。' },
    { hanzi: '上班', pinyin: 'shàngbān', hv: 'Thượng ban', vi: 'Đi làm việc', type: 'Động từ', example: '每天早上八点半准时上班。' },
    { hanzi: '下班', pinyin: 'xiàbān', hv: 'Hạ ban', vi: 'Tan sở, tan ca', type: 'Động từ', example: '下班后一起吃个便饭吧。' },
    { hanzi: '职务', pinyin: 'zhíwù', hv: 'Chức vụ', vi: 'Chức vụ, vị trí', type: 'Danh từ', example: '你在部门担任什么职务？' },
    { hanzi: '经验', pinyin: 'jīngyàn', hv: 'Kinh nghiệm', vi: 'Kinh nghiệm làm việc', type: 'Danh từ', example: '他在外贸行业有五年经验。' },
    { hanzi: '专业', pinyin: 'zhuānyè', hv: 'Chuyên nghiệp', vi: 'Chuyên ngành / Chuyên môn', type: 'Danh/Tính', example: '大学我学的是计算机专业。' },
    { hanzi: '努力', pinyin: 'nǔlì', hv: 'Nỗ lực', vi: 'Cố gắng, nỗ lực', type: 'Tính/Động', example: '为了梦想我们要努力工作！' }
  ],

  // NGÀY 12: Giới thiệu gia đình & Người thân
  12: [
    { hanzi: '家', pinyin: 'jiā', hv: 'Gia', vi: 'Gia đình, nhà', type: 'Danh từ', example: '我家有四口人。' },
    { hanzi: '爸爸', pinyin: 'bàba', hv: 'Ba ba', vi: 'Bố, cha', type: 'Danh từ', example: '我爸爸今年五十岁。' },
    { hanzi: '妈妈', pinyin: 'māma', hv: 'Ma ma', vi: 'Mẹ', type: 'Danh từ', example: '妈妈做的中国菜特别好吃。' },
    { hanzi: '哥哥', pinyin: 'gēge', hv: 'Ca ca', vi: 'Anh trai', type: 'Danh từ', example: '我哥哥在河内当工程师。' },
    { hanzi: '弟弟', pinyin: 'dìdi', hv: 'Đệ đệ', vi: 'Em trai', type: 'Danh từ', example: '弟弟还在读高中。' },
    { hanzi: '姐姐', pinyin: 'jiějie', hv: 'Tỷ tỷ', vi: 'Chị gái', type: 'Danh từ', example: '姐姐已经结婚了。' },
    { hanzi: '妹妹', pinyin: 'mèimei', hv: 'Muội muội', vi: 'Em gái', type: 'Danh từ', example: '妹妹非常可爱懂事。' },
    { hanzi: '孩子', pinyin: 'háizi', hv: 'Hài tử', vi: 'Con cái, trẻ con', type: 'Danh từ', example: '他们有两个聪明的孩子。' },
    { hanzi: '结婚', pinyin: 'jiéhūn', hv: 'Kết hôn', vi: 'Lập gia đình, kết hôn', type: 'Động từ', example: '你结婚了吗？' },
    { hanzi: '幸福', pinyin: 'xìngfú', hv: 'Hạnh phúc', vi: 'Hạnh phúc', type: 'Tính từ', example: '祝你们全家幸福美满！' },
    { hanzi: '团圆', pinyin: 'tuányuán', hv: 'Đoàn viên', vi: 'Đoàn tụ, sum vầy', type: 'Động từ', example: '中秋节全家人坐在一起团圆。' },
    { hanzi: '照片', pinyin: 'zhàopiàn', hv: 'Chiếu phiến', vi: 'Bức ảnh, tấm hình', type: 'Danh từ', example: '这是我们全家福的照片。' }
  ],

  // NGÀY 13: Sở thích & Thời gian rảnh rỗi
  13: [
    { hanzi: '爱好', pinyin: 'àihào', hv: 'Ái hảo', vi: 'Sở thích', type: 'Danh từ', example: '你业余时间有什么爱好？' },
    { hanzi: '喜欢', pinyin: 'xǐhuan', hv: 'Hỷ hoan', vi: 'Thích, yêu thích', type: 'Động từ', example: '我非常喜欢学外语和旅行。' },
    { hanzi: '听音乐', pinyin: 'tīng yīnyuè', hv: 'Thính âm nhạc', vi: 'Nghe nhạc', type: 'Cụm từ', example: '下班后我喜欢躺着听音乐。' },
    { hanzi: '看电影', pinyin: 'kàn diànyǐng', hv: 'Khán điện ảnh', vi: 'Xem phim', type: 'Cụm từ', example: '周末我们一起去看最新电影吧。' },
    { hanzi: '旅游', pinyin: 'lǚyóu', hv: 'Lữ du', vi: 'Du lịch', type: 'Danh/Động', example: '我打算今年去中国张家界旅游。' },
    { hanzi: '踢足球', pinyin: 'tī zúqiú', hv: 'Thích túc cầu', vi: 'Đá bóng', type: 'Cụm từ', example: '星期天下午跟同事一起踢足球。' },
    { hanzi: '喝咖啡', pinyin: 'hē kāfēi', hv: 'Hát ca phê', vi: 'Uống cà phê', type: 'Cụm từ', example: '出来喝杯滴漏咖啡聊聊天。' },
    { hanzi: '逛街', pinyin: 'guàngjiē', hv: 'Cuống nhai', vi: 'Đi dạo phố, mua sắm', type: 'Động từ', example: '女孩子通常很喜欢逛街购物。' },
    { hanzi: '运动', pinyin: 'yùndòng', hv: 'Vận động', vi: 'Tập thể dục, thể thao', type: 'Danh/Động', example: '经常运动可以增强免疫力。' },
    { hanzi: '烹饪', pinyin: 'pēngrèn', hv: 'Phanh nhẫm', vi: 'Nấu nướng, làm bếp', type: 'Danh từ', example: '我的爱好之一是周末在家烹饪美食。' },
    { hanzi: '阅读', pinyin: 'yuèdú', hv: 'Duyệt độc', vi: 'Đọc sách', type: 'Danh/Động', example: '睡前阅读半小时是个好习惯。' },
    { hanzi: '摄影', pinyin: 'shèyǐng', hv: 'Nhiếp ảnh', vi: 'Chụp ảnh, quay phim', type: 'Danh/Động', example: '他对风景摄影非常痴迷。' }
  ],

  // NGÀY 14: Ôn tập Tuần 2 & Thử thách tự giới thiệu hoàn chỉnh
  14: [
    { hanzi: '表达', pinyin: 'biǎodá', hv: 'Biểu đạt', vi: 'Bày tỏ, diễn đạt', type: 'Động từ', example: '大胆表达自己的真实想法。' },
    { hanzi: '流利', pinyin: 'liúlì', hv: 'Lưu lợi', vi: 'Lưu loát, trôi chảy', type: 'Tính từ', example: '口语练习多了就会越来越流利。' },
    { hanzi: '沟通', pinyin: 'gōutōng', hv: 'Câu thông', vi: 'Giao tiếp, kết nối', type: 'Động từ', example: '语言是人与人沟通的桥梁。' },
    { hanzi: '自信', pinyin: 'zìxìn', hv: 'Tự tín', vi: 'Tự tin', type: 'Tính từ', example: '站在台上要大方自信地介绍自己。' },
    { hanzi: '展示', pinyin: 'zhǎnshì', hv: 'Triển thị', vi: 'Thể hiện, phô diễn', type: 'Động từ', example: '展示出你最好的精神面貌。' },
    { hanzi: '语调', pinyin: 'yǔdiào', hv: 'Ngữ điệu', vi: 'Ngữ điệu câu', type: 'Danh từ', example: '说话的语调要抑扬顿挫。' },
    { hanzi: '熟练', pinyin: 'shúliàn', hv: 'Thục luyện', vi: 'Thành thạo, nhuần nhuyễn', type: 'Tính từ', example: '熟练掌握3000个高频词汇。' },
    { hanzi: '勇气', pinyin: 'yǒngqì', hv: 'Dũng khí', vi: 'Dũng khí, sự can đảm', type: 'Danh từ', example: '开口说外语需要迈出第一步的勇气。' },
    { hanzi: '互动', pinyin: 'hùdòng', hv: 'Hỗ động', vi: 'Tương tác qua lại', type: 'Động từ', example: '和语伴保持高频的中文口语互动。' },
    { hanzi: '收获', pinyin: 'shōuhuò', hv: 'Thu hoạch', vi: 'Thu hoạch, thành quả', type: 'Danh/Động', example: '这两周我的中文口语收获满满。' },
    { hanzi: '成就感', pinyin: 'chéngjiùgǎn', hv: 'Thành tựu cảm', vi: 'Cảm giác thành tựu', type: 'Danh từ', example: '能够用中文自我介绍让我充满成就感。' },
    { hanzi: '加油', pinyin: 'jiāyóu', hv: 'Gia du', vi: 'Cố lên!', type: 'Khẩu ngữ', example: '还有76天，大家一起加油！' }
  ],

  // NGÀY 15: Giờ giấc làm việc & Lịch trình công sở (HSK 1 - 2)
  15: [
    { hanzi: '点', pinyin: 'diǎn', hv: 'Điểm', vi: 'Giờ (thời gian)', type: 'Thời gian', example: '我们上午九点开始上班。' },
    { hanzi: '分', pinyin: 'fēn', hv: 'Phân', vi: 'Phút', type: 'Thời gian', example: '现在是八点三十分。' },
    { hanzi: '半', pinyin: 'bàn', hv: 'Bán', vi: 'Rưỡi, nửa', type: 'Thời gian', example: '中午十二点半去吃午饭。' },
    { hanzi: '上班', pinyin: 'shàngbān', hv: 'Thượng ban', vi: 'Đi làm, vào ca', type: 'Động từ', example: '你每天几点上班？' },
    { hanzi: '下班', pinyin: 'xiàbān', hv: 'Hạ ban', vi: 'Tan ca, về', type: 'Động từ', example: '今天工作多，要很晚才下班。' },
    { hanzi: '迟到', pinyin: 'chídào', hv: 'Trì đáo', vi: 'Đến muộn, đi trễ', type: 'Động từ', example: '路上堵车，我不小心迟到了十分钟。' },
    { hanzi: '准时', pinyin: 'zhǔnshí', hv: 'Chuẩn thời', vi: 'Đúng giờ', type: 'Tính/Phó', example: '请大家准时到会议室开会。' },
    { hanzi: '休息', pinyin: 'xiūxi', hv: 'Hưu tức', vi: 'Nghỉ ngơi, giải lao', type: 'Động từ', example: '累了就喝杯水休息一下吧。' },
    { hanzi: '加班', pinyin: 'jiābān', hv: 'Gia ban', vi: 'Làm thêm giờ (OT)', type: 'Động từ', example: '今晚团队需要加班完成这个方案。' },
    { hanzi: '星期', pinyin: 'xīngqī', hv: 'Tinh kỳ', vi: 'Thứ, tuần lễ', type: 'Thời gian', example: '星期五下午我们有个部门总结。' },
    { hanzi: '什么时候', pinyin: 'shénme shíhou', hv: 'Thập ma thời hậu', vi: 'Khi nào, bao giờ', type: 'Nghi vấn', example: '你什么时候有空见个面？' },
    { hanzi: '安排', pinyin: 'ānpái', hv: 'An bài', vi: 'Sắp xếp, bố trí', type: 'Động từ', example: '这是今天的工作安排。' }
  ],

  // NGÀY 16: Số đếm, Hỏi giá & Mua sắm sinh hoạt (HSK 1 - 2)
  16: [
    { hanzi: '多少钱', pinyin: 'duōshao qián', hv: 'Đa thiểu tiền', vi: 'Bao nhiêu tiền?', type: 'Nghi vấn', example: '请问这本笔记本多少钱？' },
    { hanzi: '块', pinyin: 'kuài', hv: 'Khối', vi: 'Đồng, tệ (khẩu ngữ)', type: 'Lượng từ', example: '一共是四十五块钱。' },
    { hanzi: '百', pinyin: 'bǎi', hv: 'Bách', vi: 'Trăm (100)', type: 'Số từ', example: '押金一共两百元。' },
    { hanzi: '千', pinyin: 'qiān', hv: 'Thiên', vi: 'Nghìn (1.000)', type: 'Số từ', example: '这部手机三千多块。' },
    { hanzi: '太贵了', pinyin: 'tài guì le', hv: 'Thái quý liễu', vi: 'Đắt quá rồi!', type: 'Khẩu ngữ', example: '太贵了，能不能便宜一点？' },
    { hanzi: '便宜', pinyin: 'piányi', hv: 'Tiện nghi', vi: 'Rẻ, giá mềm', type: 'Tính từ', example: '这里的水果既新鲜又便宜。' },
    { hanzi: '打折', pinyin: 'dǎzhé', hv: 'Đả chiết', vi: 'Giảm giá, chiết khấu', type: 'Động từ', example: '今天全场商品打八折。' },
    { hanzi: '买单', pinyin: 'mǎidān', hv: 'Mãi đơn', vi: 'Thanh toán, tính tiền', type: 'Động từ', example: '服务员，我们这桌买单！' },
    { hanzi: '现金', pinyin: 'xiànjīn', hv: 'Hiện kim', vi: 'Tiền mặt', type: 'Danh từ', example: '请问可以付现金吗？' },
    { hanzi: '刷卡', pinyin: 'shuākǎ', hv: 'Soát tạp', vi: 'Quẹt thẻ ngân hàng', type: 'Động từ', example: '您想微信扫码还是刷卡？' },
    { hanzi: '小票', pinyin: 'xiǎopiào', hv: 'Tiểu phiếu', vi: 'Hóa đơn thanh toán', type: 'Danh từ', example: '这是您的小票，请拿好。' },
    { hanzi: '找钱', pinyin: 'zhǎoqián', hv: 'Thối tiền', vi: 'Thối lại tiền thừa', type: 'Động từ', example: '找您二十块零钱。' }
  ],

  // NGÀY 17: Đồ dùng văn phòng & Thiết bị công sở (HSK 1 - 2)
  17: [
    { hanzi: '电脑', pinyin: 'diànnǎo', hv: 'Điện não', vi: 'Máy vi tính, laptop', type: 'Danh từ', example: '我的电脑运行有点慢。' },
    { hanzi: '文件', pinyin: 'wénjiàn', hv: 'Văn kiện', vi: 'Tài liệu, tệp tin', type: 'Danh từ', example: '我已经把文件发到你的邮箱了。' },
    { hanzi: '打印', pinyin: 'dǎyìn', hv: 'Đả ấn', vi: 'In ấn', type: 'Động từ', example: '帮我打印三份会议材料。' },
    { hanzi: '桌子', pinyin: 'zhuōzi', hv: 'Trác tử', vi: 'Bàn làm việc', type: 'Danh từ', example: '材料放在你的桌子上了。' },
    { hanzi: '椅子', pinyin: 'yǐzi', hv: 'Ỷ tử', vi: 'Ghế ngồi', type: 'Danh từ', example: '请随便坐，拉一把椅子过来。' },
    { hanzi: '发送', pinyin: 'fāsòng', hv: 'Phát tống', vi: 'Gửi đi (email, tin nhắn)', type: 'Động từ', example: '邮件已经成功发送了。' },
    { hanzi: '收到', pinyin: 'shōudào', hv: 'Thu đáo', vi: 'Đã nhận được', type: 'Động từ', example: '你收到我发的设计方案了吗？' },
    { hanzi: '查收', pinyin: 'cháshōu', hv: 'Tra thu', vi: 'Kiểm tra và nhận', type: 'Lịch sự', example: '附件请查收，有修改随时沟通。' },
    { hanzi: '网络', pinyin: 'wǎngluò', hv: 'Võng lạc', vi: 'Mạng internet, wifi', type: 'Danh từ', example: '办公室的无线网络密码是多少？' },
    { hanzi: '笔', pinyin: 'bǐ', hv: 'Bút', vi: 'Cây bút viết', type: 'Danh từ', example: '我借用一下你的黑色签字笔。' },
    { hanzi: '本子', pinyin: 'běnzi', hv: 'Bản tử', vi: 'Quyển sổ ghi chép', type: 'Danh từ', example: '开会时记得带上笔记本。' },
    { hanzi: '帮忙', pinyin: 'bāngmáng', hv: 'Bang mang', vi: 'Giúp một tay', type: 'Động từ', example: '能不能请你帮个忙？' }
  ],

  // NGÀY 18: Ăn trưa đồng nghiệp & Ẩm thực thường nhật (HSK 1 - 2)
  18: [
    { hanzi: '吃饭', pinyin: 'chīfàn', hv: 'Ngật phạn', vi: 'Ăn cơm, dùng bữa', type: 'Động từ', example: '中午大家一起去吃饭吧！' },
    { hanzi: '茶', pinyin: 'chá', hv: 'Trà', vi: 'Nước trà', type: 'Danh từ', example: '请喝杯绿茶润润喉咙。' },
    { hanzi: '咖啡', pinyin: 'kāfēi', hv: 'Ca phê', vi: 'Cà phê', type: 'Danh từ', example: '下午来一杯冰美式咖啡提提神。' },
    { hanzi: '菜', pinyin: 'cài', hv: 'Thái', vi: 'Món ăn, thức ăn', type: 'Danh từ', example: '这道四川菜味道特别正宗。' },
    { hanzi: '好吃', pinyin: 'hǎochī', hv: 'Hảo ngật', vi: 'Ngon miệng', type: 'Tính từ', example: '这家餐厅的面条非常好吃。' },
    { hanzi: '饱', pinyin: 'bǎo', hv: 'Bão', vi: 'No bụng', type: 'Tính từ', example: '我已经吃得很饱了，谢谢！' },
    { hanzi: '点菜', pinyin: 'diǎncài', hv: 'Điểm thái', vi: 'Gọi món, gọi đồ ăn', type: 'Động từ', example: '服务员，请给我们拿菜单点菜。' },
    { hanzi: '请客', pinyin: 'qǐngkè', hv: 'Thỉnh khách', vi: 'Mời bữa ăn, bao ăn', type: 'Động từ', example: '今天项目顺利上线，我请客！' },
    { hanzi: '米饭', pinyin: 'mǐfàn', hv: 'Mễ phạn', vi: 'Cơm trắng', type: 'Danh từ', example: '再来一碗热腾腾的米饭。' },
    { hanzi: '微辣', pinyin: 'wēilà', hv: 'Vi lạt', vi: 'Cay ít, cay nhẹ', type: 'Hương vị', example: '这几道菜请师傅做微辣。' },
    { hanzi: '打包', pinyin: 'dǎbāo', hv: 'Đả bao', vi: 'Gói đồ ăn mang về', type: 'Động từ', example: '吃不完的菜请帮我们打包。' },
    { hanzi: '味道', pinyin: 'wèidao', hv: 'Vị đạo', vi: 'Hương vị', type: 'Danh từ', example: '这里的菜很符合大家的口味。' }
  ],

  // NGÀY 19: Phương hướng & Chỉ đường đến văn phòng (HSK 2)
  19: [
    { hanzi: '在哪儿', pinyin: 'zài nǎr', hv: 'Tại na nhi', vi: 'Ở đâu?', type: 'Nghi vấn', example: '请问王经理的办公室在哪儿？' },
    { hanzi: '怎么走', pinyin: 'zěnme zǒu', hv: 'Chẩm ma tẩu', vi: 'Đi như thế nào?', type: 'Nghi vấn', example: '去最近的地铁站怎么走？' },
    { hanzi: '前面', pinyin: 'qiánmian', hv: 'Tiền diện', vi: 'Phía trước', type: 'Phương vị', example: '一直往前走一百米就是了。' },
    { hanzi: '后面', pinyin: 'hòumian', hv: 'Hậu diện', vi: 'Phía sau', type: 'Phương vị', example: '停车场在办公大楼后面。' },
    { hanzi: '左拐', pinyin: 'zuǒ guǎi', hv: 'Tả quải', vi: 'Rẽ trái', type: 'Hướng đi', example: '出了电梯往左拐就是会议室。' },
    { hanzi: '右拐', pinyin: 'yòu guǎi', hv: 'Hữu quải', vi: 'Rẽ phải', type: 'Hướng đi', example: '在下一个路口往右拐。' },
    { hanzi: '电梯', pinyin: 'diàntī', hv: 'Điện thê', vi: 'Thang máy', type: 'Danh từ', example: '我们坐电梯上五楼。' },
    { hanzi: '大楼', pinyin: 'dàlóu', hv: 'Đại lầu', vi: 'Tòa nhà cao tầng', type: 'Danh từ', example: '公司在市中心的那座写字楼里。' },
    { hanzi: '附近', pinyin: 'fùjìn', hv: 'Phụ cận', vi: 'Gần đây, lân cận', type: 'Danh từ', example: '公司附近有很多便利店。' },
    { hanzi: '远', pinyin: 'yuǎn', hv: 'Viễn', vi: 'Xa', type: 'Tính từ', example: '这里离火车站有点远。' },
    { hanzi: '近', pinyin: 'jìn', hv: 'Cận', vi: 'Gần', type: 'Tính từ', example: '我家离公司挺近的，走路十分钟。' },
    { hanzi: '路口', pinyin: 'lùkǒu', hv: 'Lộ khẩu', vi: 'Ngã tư, giao lộ', type: 'Danh từ', example: '我们在十字路口见。' }
  ],

  // NGÀY 20: Đặt lịch họp & Trao đổi công việc nội bộ (HSK 2)
  20: [
    { hanzi: '开会', pinyin: 'kāihuì', hv: 'Khai hội', vi: 'Họp, mở cuộc họp', type: 'Động từ', example: '下午两点我们准时在二号会议室开会。' },
    { hanzi: '准备', pinyin: 'zhǔnbèi', hv: 'Chuẩn bị', vi: 'Chuẩn bị', type: 'Động từ', example: '材料大家都准备齐全了吗？' },
    { hanzi: '讨论', pinyin: 'tǎolùn', hv: 'Thảo luận', vi: 'Bàn bạc, thảo luận', type: 'Động từ', example: '今天重点讨论下个季度的计划。' },
    { hanzi: '问题', pinyin: 'wèntí', hv: 'Vấn đề', vi: 'Câu hỏi, vấn đề khó khăn', type: 'Danh từ', example: '请问大家还有什么疑问吗？' },
    { hanzi: '解决', pinyin: 'jiějué', hv: 'Giải quyết', vi: 'Xử lý xong, giải quyết', type: 'Động từ', example: '这个问题我们必须尽快解决。' },
    { hanzi: '意见', pinyin: 'yìjiàn', hv: 'Ý kiến', vi: 'Ý kiến đóng góp', type: 'Danh từ', example: '我想听听大家的不同意见。' },
    { hanzi: '同意', pinyin: 'tóngyì', hv: 'Đồng ý', vi: 'Đồng tình, nhất trí', type: 'Động từ', example: '大家都同意这个方案吗？' },
    { hanzi: '决定', pinyin: 'juédìng', hv: 'Quyết định', vi: 'Quyết định', type: 'Động từ', example: '经过讨论，领导最终做出了决定。' },
    { hanzi: '稍等', pinyin: 'shāoděng', hv: 'Sảo đẳng', vi: 'Chờ một lát', type: 'Khẩu ngữ', example: '请稍等片刻，我马上把文件发您。' },
    { hanzi: '重要', pinyin: 'zhòngyào', hv: 'Trọng yếu', vi: 'Quan trọng', type: 'Tính từ', example: '今天有个非常重要的会议。' },
    { hanzi: '清楚', pinyin: 'qīngchu', hv: 'Thanh sở', vi: 'Rõ ràng', type: 'Tính từ', example: '大家都听清楚了吗？' },
    { hanzi: '完成', pinyin: 'wánchéng', hv: 'Hoàn thành', vi: 'Làm xong, hoàn tất', type: 'Động từ', example: '今天务必把报表完成。' }
  ]
};

// KHO TỪ VỰNG THỰC CHIẾN HSK 3 & HSK 4 (CÔNG SỞ, MARKETING, BOOKING & ĐÀM PHÁN)
export const CHINESE_WORKPLACE_HSK4_POOL = [
  // Nhóm Booking & Khách sạn & Tiếp đón (HSK 3 - 4)
  { hanzi: '预订', pinyin: 'yùdìng', hv: 'Dự đính', vi: 'Đặt trước (phòng, vé, bàn)', type: 'Booking', example: '我在网上预订了一间大床房。' },
  { hanzi: '办理', pinyin: 'bànlǐ', hv: 'Biện lý', vi: 'Làm thủ tục, giải quyết', type: 'Công việc', example: '你好，我来办理入住手续。' },
  { hanzi: '前台', pinyin: 'qiántái', hv: 'Tiền đài', vi: 'Quầy lễ tân', type: 'Địa điểm', example: '行李可以寄存在前台吗？' },
  { hanzi: '押金', pinyin: 'yājīn', hv: 'Áp kim', vi: 'Tiền đặt cọc', type: 'Tài chính', example: '入住需要交两百元押金。' },
  { hanzi: '退房', pinyin: 'tuìfáng', hv: 'Thoái phòng', vi: 'Trả phòng (Check-out)', type: 'Booking', example: '请问最晚几点退房？' },
  { hanzi: '升级', pinyin: 'shēngjí', hv: 'Thăng cấp', vi: 'Nâng cấp phòng/dịch vụ', type: 'Dịch vụ', example: '免费为您升级成海景套房。' },
  { hanzi: '发票', pinyin: 'fāpiào', hv: 'Phát phiếu', vi: 'Hóa đơn tài chính VAT', type: 'Tài chính', example: '请帮我们开一张公司的增值税专用发票。' },
  { hanzi: '出差', pinyin: 'chūchāi', hv: 'Xuất sai', vi: 'Đi công tác xa', type: 'Công việc', example: '下周经理要去广州出差五天。' },
  { hanzi: '航班', pinyin: 'hángbān', hv: 'Hàng ban', vi: 'Chuyến bay', type: 'Giao thông', example: '由于天气原因，航班延误了一个小时。' },
  { hanzi: '接待', pinyin: 'jiēdài', hv: 'Tiếp đãi', vi: 'Đón tiếp (đối tác, khách)', type: 'Xã giao', example: '今天下午我们要去机场接待中国代表团。' },
  
  // Nhóm Hợp đồng & Đàm phán & Giá cả (HSK 4)
  { hanzi: '合同', pinyin: 'hétong', hv: 'Hợp đồng', vi: 'Bản hợp đồng kinh tế', type: 'Thương mại', example: '双方已经正式签署了合作合同。' },
  { hanzi: '谈判', pinyin: 'tánpàn', hv: 'Đàm phán', vi: 'Đàm phán, thương lượng', type: 'Thương mại', example: '这次价格谈判进行得非常顺利。' },
  { hanzi: '折扣', pinyin: 'zhékòu', hv: 'Chiết khấu', vi: 'Mức giảm giá, chiết khấu', type: 'Thương mại', example: '如果批量采购，能给我们多少折扣？' },
  { hanzi: '报价', pinyin: 'bàojià', hv: 'Báo giá', vi: 'Bảng báo giá', type: 'Thương mại', example: '明天上午前把最新报价单发给我。' },
  { hanzi: '合作', pinyin: 'hézuò', hv: 'Hợp tác', vi: 'Hợp tác đôi bên', type: 'Thương mại', example: '期待我们两家公司能有长期合作！' },
  { hanzi: '签字', pinyin: 'qiānzì', hv: 'Thiêm tự', vi: 'Ký tên xác nhận', type: 'Công việc', example: '请领导在这份文件右下角签字。' },
  { hanzi: '盖章', pinyin: 'gàizhāng', hv: 'Cái chương', vi: 'Đóng dấu mộc đỏ', type: 'Thương mại', example: '合同签字盖章后立即生效。' },
  { hanzi: '违约', pinyin: 'wéiyuē', hv: 'Vi ước', vi: 'Vi phạm hợp đồng', type: 'Pháp lý', example: '任何一方违约都需要承担违约责任。' },
  { hanzi: '赔偿', pinyin: 'péicháng', hv: 'Bồi thường', vi: 'Đền bù, bồi thường', type: 'Pháp lý', example: '由于货物破损，对方同意赔偿全部损失。' },
  { hanzi: '汇款', pinyin: 'huìkuǎn', hv: 'Hối khoản', vi: 'Chuyển khoản thanh toán', type: 'Tài chính', example: '财务部已经在今天上午完成了汇款。' },

  // Nhóm Marketing & Quảng cáo & Khách hàng (HSK 4)
  { hanzi: '客户', pinyin: 'kèhù', hv: 'Khách hộ', vi: 'Khách hàng, đối tác', type: 'Thương mại', example: '我们要始终以客户的需求为中心。' },
  { hanzi: '市场', pinyin: 'shìchǎng', hv: 'Thị trường', vi: 'Thị trường tiêu thụ', type: 'Kinh doanh', example: '开拓东南亚新市场很有潜力。' },
  { hanzi: '营销', pinyin: 'yíngxiāo', hv: 'Doanh tiêu', vi: 'Marketing, tiếp thị', type: 'Kinh doanh', example: '这次数字营销活动的效果非常好。' },
  { hanzi: '推广', pinyin: 'tuīguǎng', hv: 'Thôi quảng', vi: 'Quảng bá, lan tỏa', type: 'Marketing', example: '通过社交媒体平台全面推广新产品。' },
  { hanzi: '广告', pinyin: 'guǎnggào', hv: 'Quảng cáo', vi: 'Mẩu quảng cáo (Ads)', type: 'Marketing', example: '在抖音投放视频广告吸引年轻人群。' },
  { hanzi: '竞争', pinyin: 'jìngzhēng', hv: 'Cạnh tranh', vi: 'Cạnh tranh thị trường', type: 'Kinh tế', example: '同行之间的竞争变得越来越激烈。' },
  { hanzi: '利润', pinyin: 'lìrùn', hv: 'Lợi nhuận', vi: 'Lợi nhuận kinh doanh', type: 'Tài chính', example: '这个季度的净利润增长了百分之十五。' },
  { hanzi: '成本', pinyin: 'chéngběn', hv: 'Thành bản', vi: 'Chi phí, giá vốn', type: 'Tài chính', example: '优化供应链有助于大幅降低运营成本。' },
  { hanzi: '预算', pinyin: 'yùsuàn', hv: 'Dự toán', vi: 'Ngân sách kế hoạch', type: 'Tài chính', example: '这次展会活动的总预算是十万元。' },
  { hanzi: '方案', pinyin: 'fāng\'àn', hv: 'Phương án', vi: 'Phương án, proposal', type: 'Công việc', example: '策划部提交了一套很有创意的方案。' },

  // Nhóm Chăm sóc khách hàng & Xử lý phản hồi (HSK 4)
  { hanzi: '反馈', pinyin: 'fǎnkuì', hv: 'Phản quế', vi: 'Phản hồi, góp ý (feedback)', type: 'Dịch vụ', example: '非常感谢您的宝贵反馈，我们会认真改进。' },
  { hanzi: '投诉', pinyin: 'tóusù', hv: 'Đầu tố', vi: 'Khiếu nại của khách', type: 'Dịch vụ', example: '客服部门正在积极处理用户的投诉。' },
  { hanzi: '满意', pinyin: 'mǎnyì', hv: 'Mãn ý', vi: 'Hài lòng, vừa ý', type: 'Cảm xúc', example: '客户对我们交付的产品质量感到非常满意。' },
  { hanzi: '解释', pinyin: 'jiěshì', hv: 'Giải thích', vi: 'Trần tình, giải thích rõ', type: 'Giao tiếp', example: '请允许我向您详细解释事情的原因。' },
  { hanzi: '保证', pinyin: 'bǎozhèng', hv: 'Bảo chứng', vi: 'Đảm bảo, cam kết', type: 'Cam kết', example: '我们保证在三个工作日内完成交付。' },
  { hanzi: '质量', pinyin: 'zhìliàng', hv: 'Chất lượng', vi: 'Chất lượng sản phẩm', type: 'Sản phẩm', example: '产品质量是企业生存的根本。' },
  { hanzi: '包装', pinyin: 'bāozhuāng', hv: 'Bao trang', vi: 'Quy cách đóng gói', type: 'Vận chuyển', example: '出口产品的包装一定要防潮防震。' },
  { hanzi: '物流', pinyin: 'wùliú', hv: 'Vật lưu', vi: 'Vận chuyển Logistics', type: 'Vận tải', example: '跨国物流通常需要五到七个工作日。' },
  { hanzi: '跟踪', pinyin: 'gēnzōng', hv: 'Căn tung', vi: 'Theo dõi đơn hàng / tiến độ', type: 'Công việc', example: '随时在系统上跟踪货物的运输状态。' },
  { hanzi: '效率', pinyin: 'xiàolǜ', hv: 'Hiệu suất', vi: 'Hiệu quả làm việc', type: 'Năng suất', example: '采用新技术可以大幅提升团队工作效率。' }
];

/**
 * Lấy danh sách 12 từ vựng thực chiến độc lập theo từng ngày (1 - 90)
 * Thiết kế lộ trình chuẩn từ HSK 1 -> HSK 4 cho Đời sống & Công sở
 */
export function getDailyChineseVocabularies(dayNum, rawDay) {
  // 1. Kiểm tra bảng từ vựng chuyên biệt các ngày đầu (Days 1 - 20)
  if (DAILY_ZH_VOCABULARY_MAP[dayNum]) {
    return DAILY_ZH_VOCABULARY_MAP[dayNum];
  }

  // 2. GIAI ĐOẠN 1 (Ngày 21 - 30): HSK 1 & HSK 2 Nền móng đời sống & công sở
  if (dayNum <= 30) {
    const totalHSK = Math.min(300, HSK_1000_VOCABULARY.length);
    const startIndex = ((dayNum - 21) * 12) % (totalHSK - 12);
    const slice = HSK_1000_VOCABULARY.slice(startIndex, startIndex + 12);
    return slice.map((item) => ({
      hanzi: item.hanzi,
      pinyin: item.pinyin,
      hv: item.hv || '',
      vi: item.vi,
      type: item.topic || 'HSK 1 - 2',
      example: item.sample || `${item.hanzi}很好。`
    }));
  }

  // 3. GIAI ĐOẠN 2 (Ngày 31 - 60): HSK 2+ & HSK 3 Thực chiến đời sống & họp hành, văn phòng
  if (dayNum <= 60) {
    const offset = 200;
    const poolSize = 400; // HSK 2 - 3 range
    const startIndex = offset + (((dayNum - 31) * 12) % poolSize);
    const slice = HSK_1000_VOCABULARY.slice(startIndex, startIndex + 12);
    return slice.map((item) => ({
      hanzi: item.hanzi,
      pinyin: item.pinyin,
      hv: item.hv || '',
      vi: item.vi,
      type: item.topic || 'HSK 3 Đời sống',
      example: item.sample || `${item.hanzi}非常重要。`
    }));
  }

  // 4. GIAI ĐOẠN 3 (Ngày 61 - 90): HSK 3+ & HSK 4 Công sở chuyên sâu, Đàm phán, Marketing & Booking
  const poolLen = CHINESE_WORKPLACE_HSK4_POOL.length;
  const startIndex = ((dayNum - 61) * 6) % poolLen;
  const workplaceWords = [];
  for (let i = 0; i < 12; i++) {
    workplaceWords.push(CHINESE_WORKPLACE_HSK4_POOL[(startIndex + i) % poolLen]);
  }
  return workplaceWords;
}

export const TOPIC_EXTENSIONS = {
  // Tuần 1: Chào hỏi, xưng hô, cảm ơn, xin lỗi, giao lưu cơ bản
  week1: {
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
  },

  // Giai đoạn 3 (Ngày 61 - 90): HSK 3+ & HSK 4 Công sở chuyên sâu, Đàm phán, Booking & Marketing
  stage3Commerce: {
    extraSentences: [
      { hanzi: '如果在原报价基础上给予百分之五的折扣，我们可以当场签约。', pinyin: 'Rúguǒ zài yuán bàojià jīchǔ shàng jǐyǔ bǎifēnzhī wǔ de zhékòu, wǒmen kěyǐ dāngchǎng qiānyuē.', vi: 'Nếu trên cơ sở báo giá gốc giảm thêm 5% chiết khấu, chúng tôi có thể ký hợp đồng ngay tại chỗ.', tag: 'Đàm phán giá cả HSK 4', breakdown: '原报价 (báo giá gốc) + 折扣 (chiết khấu) + 签约 (ký hợp đồng)' },
      { hanzi: '双方代表经过友好协商，正式达成了为期三年的战略合作协议。', pinyin: 'Shuāngfāng dàibiǎo jīngguò yǒuhǎo xiéshāng, zhèngshì dáchéng le wéiqī sān nián de zhànlüè hézuò xiéyì.', vi: 'Đại diện hai bên sau khi bàn bạc hữu nghị đã chính thức đạt được thỏa thuận hợp tác chiến lược 3 năm.', tag: 'Ký kết hợp tác', breakdown: '协商 (bàn bạc/thương lượng) + 达成 (đạt được) + 协议 (thỏa thuận)' },
      { hanzi: '我们已经在网上成功预订了五间豪华单人房，请协助办理入住。', pinyin: 'Wǒmen yǐjīng zài wǎngshàng chénggōng yùdìng le wǔ jiān háohuá dānrén fáng, qǐng xiézhù bànlǐ rùzhù.', vi: 'Chúng tôi đã đặt trước thành công 5 phòng đơn cao cấp trên mạng, xin vui lòng hỗ trợ làm thủ tục nhận phòng.', tag: 'Dịch vụ Booking', breakdown: '预订 (đặt trước) + 豪华 (sang trọng) + 办理入住 (làm thủ tục check-in)' },
      { hanzi: '这次新产品的线上营销推广活动，带来了超过百分之三十的业绩增长。', pinyin: 'Zhè cì xīn chǎnpǐn de xiànshàng yíngxiāo tuīguǎng huódòng, dài lái le chāoguò bǎifēnzhī sānshí de yèjì zēngzhǎng.', vi: 'Chiến dịch marketing quảng bá trực tuyến cho sản phẩm mới lần này đã mang lại mức tăng trưởng doanh số hơn 30%.', tag: 'Chiến dịch Marketing', breakdown: '营销推广 (marketing quảng bá) + 业绩增长 (tăng trưởng doanh số)' },
      { hanzi: '对于此次发货延误给贵公司造成的损失，我们深表歉意并将全力补偿。', pinyin: 'Duìyú cǐ cì fāhuò yánwù gěi guì gōngsī zàochéng de sǔnshī, wǒmen shēn biǎo qiànyì bìng jiāng quánlì bǔcháng.', vi: 'Đối với những tổn thất do chậm trễ giao hàng gây ra cho quý công ty, chúng tôi thành thật cáo lỗi và sẽ dốc sức bồi thường.', tag: 'Xử lý sự cố đối tác', breakdown: '延误 (chậm trễ/delay) + 深表歉意 (thành thật cáo lỗi) + 补偿 (bồi thường)' },
    ],
    readingPassage: {
      title: '商务实践课：国际商务谈判与战略合作 (Bài Đọc HSK 4: Đàm Phán Thương Mại & Hợp Tác Chiến Lược)',
      description: 'Luyện đọc đoạn văn thực tế về đàm phán hợp đồng, phân tích chiết khấu và marketing sản phẩm mới trong môi trường doanh nghiệp Trung - Việt.',
      hanzi: '今天上午，海越科技公司与中国合作伙伴在深圳举行了商务洽谈会。会议主要讨论了智能设备代理采购的合同条款以及下半年的市场营销方案。中方代表李经理表示，如果订单采购总量达到一万台以上，他们愿意在出厂价格的基础上给予百分之八的特别折扣，并提供全面的售后技术支持。越方代表认真审核了质量检测报告和运输物流方案后，双方顺利签署了长期供货协议。这次合作不仅降低了采购成本，也为双方开拓东南亚新兴市场打下了坚实的基础。',
      pinyin: 'Jīntiān shàngwǔ, Hǎiyuè Kējì Gōngsī yǔ Zhōngguó hézuò huǒbàn zài Shēnzhèn jǔxíng le shāngwù qiàtánhuì. Huìyì zhǔyào tǎolùn le zhìnéng shèbèi dàilǐ cǎigòu de hétong tiáokuǎn yǐjí xiàbànnián de shìchǎng yíngxiāo fāng\'àn. Zhōngfāng dàibiǎo Lǐ Jīnglǐ biǎoshì, rúguǒ dìngdān cǎigòu zǒngliàng dádào yí wàn tái yǐshàng, tāmen yuànyì zài chūchǎng jiàgé de jīchǔ shàng jǐyǔ bǎifēnzhī bā de tèbié zhékòu, bìng tígōng quánmiàn de shòuhòu jìshù zhīchí. Yuèfāng dàibiǎo rènzhēn shěnhé le zhìliàng jiǎncè bàogào hé yùnshū wùliú fāng\'àn hòu, shuāngfāng shùnlì qiānshǔ le chángqī gōnghuò xiéyì. Zhè cì hézuò bùjǐn jiàngdī le cǎigòu chéngběn, yě wèi shuāngfāng kāituò Dōngnányà xīnxīng shìchǎng dǎxià le jiānshí de jīchǔ.',
      vi: 'Sáng nay, Công ty Công nghệ Hải Việt cùng đối tác Trung Quốc đã tổ chức buổi đàm phán thương mại tại Thâm Quyến. Hội nghị chủ yếu thảo luận về các điều khoản hợp đồng thu mua đại lý thiết bị thông minh cùng phương án tiếp thị marketing nửa cuối năm. Đại diện phía Trung Quốc, Giám đốc Lý cho biết, nếu tổng lượng đơn đặt hàng đạt trên 10.000 máy, họ sẵn sàng giảm chiết khấu đặc biệt 8% trên giá xuất xưởng, đồng thời cung cấp hỗ trợ kỹ thuật hậu mãi toàn diện. Đại diện phía Việt Nam sau khi thẩm định kỹ lưỡng báo cáo kiểm định chất lượng và phương án vận tải logistics, hai bên đã thuận lợi ký kết thỏa thuận cung ứng hàng dài hạn. Sự hợp tác lần này không chỉ giúp cắt giảm chi phí thu mua, mà còn đặt nền móng vững chắc cho hai bên cùng khai phá thị trường mới nổi tại Đông Nam Á.',
      tokens: [
        { zh: '合作伙伴', py: 'hézuò huǒbàn', vi: 'đối tác hợp tác' },
        { zh: '合同条款', py: 'hétong tiáokuǎn', vi: 'điều khoản hợp đồng' },
        { zh: '营销方案', py: 'yíngxiāo fāng\'àn', vi: 'phương án marketing' },
        { zh: '特别折扣', py: 'tèbié zhékòu', vi: 'chiết khấu đặc biệt' },
        { zh: '售后支持', py: 'shòuhòu zhīchí', vi: 'hỗ trợ hậu mãi' },
        { zh: '签署协议', py: 'qiānshǔ xiéyì', vi: 'ký kết thỏa thuận' },
        { zh: '采购成本', py: 'cǎigòu chéngběn', vi: 'chi phí thu mua' },
        { zh: '开拓市场', py: 'kāituò shìchǎng', vi: 'mở rộng thị trường' }
      ],
      questions: [
        {
          q: '想要获得8%的特别折扣，采购总量需要达到多少？(Muốn nhận chiết khấu 8%, lượng đặt mua cần đạt bao nhiêu?)',
          options: ['一千台 (1.000 máy)', '一万台以上 (Trên 10.000 máy)', '五千台 (5.000 máy)'],
          correct: 1,
          explain: 'Bài đọc nêu rõ: "如果订单采购总量达到一万台以上，他们愿意在出厂价格的基础上给予百分之八的特别折扣。"'
        },
        {
          q: '签署长期协议后，双方将共同开拓哪里的新兴市场？(Sau khi ký thỏa thuận, hai bên sẽ cùng mở rộng thị trường mới nào?)',
          options: ['欧洲市场 (Thị trường châu Âu)', '东南亚市场 (Thị trường Đông Nam Á)', '北美市场 (Thị trường Bắc Mỹ)'],
          correct: 1,
          explain: 'Bài đọc viết: "也为双方开拓东南亚新兴市场打下了坚实的基础。"'
        }
      ]
    },
    dialogue: {
      title: 'Đàm phán hợp đồng kinh tế & Chiết khấu số lượng lớn',
      roleA: 'Đại diện công ty (A)',
      roleB: 'Đối tác Trung Quốc Lý Giám đốc (B)',
      lines: [
        { speaker: 'A', zh: '李经理，我们对贵公司的智能产品非常感兴趣，但报价稍微偏高了一点。', py: 'Lǐ Jīnglǐ, wǒmen duì guì gōngsī de zhìnéng chǎnpǐn fēicháng gǎn xìngqù, dàn bàojià shāowēi piāngāo le yìdiǎn.', vi: 'Giám đốc Lý, chúng tôi rất quan tâm đến sản phẩm thông minh của quý công ty, nhưng báo giá hơi cao một chút.' },
        { speaker: 'B', zh: '这是最新的出厂价。如果你们首批订单能达到五千台，我们可以给九折优惠。', py: 'Zhè shì zuìxīn de chūchǎngjià. Rúguǒ nǐmen shǒupī dìngdān néng dádào wǔqiān tái, wǒmen kěyǐ gěi jiǔ zhé yōuhuì.', vi: 'Đây là giá xuất xưởng mới nhất rồi. Nếu đợt đặt hàng đầu tiên đạt 5.000 máy, chúng tôi có thể giảm 10% (đánh 9折).' },
        { speaker: 'A', zh: '太好了！另外关于售后服务和发票开具，合同里能明确写清楚吗？', py: 'Tài hǎo le! Lìngwài guānyú shòuhòu fúwù hé fāpiào kāijù, hétong lǐ néng míngquè xiě qīngchu ma?', vi: 'Tuyệt quá! Ngoài ra về dịch vụ hậu mãi và xuất hóa đơn VAT, trong hợp đồng có thể ghi rõ ràng được không?' },
        { speaker: 'B', zh: '没问题，我们法务部今天下午就会把修改好的正式合同发给您审核。', py: 'Méi wèntí, wǒmen fǎwùbù jīntiān xiàwǔ jiù huì bǎ xiūgǎi hǎo de zhèngshì hétong fā gěi nín shěnhé.', vi: 'Không thành vấn đề, bộ phận pháp chế của chúng tôi chiều nay sẽ gửi bản hợp đồng chính thức đã sửa đổi cho anh xem xét.' },
        { speaker: 'A', zh: '好的，核对无误后我们立刻签字盖章，期待合作愉快！', py: 'Hǎo de, héduì wúwù hòu wǒmen lìkè qiānzì gàizhāng, qīdài hézuò yúkuài!', vi: 'Vâng, kiểm tra đối chiếu không sai sót chúng tôi sẽ lập tức ký tên đóng dấu, chúc đôi bên hợp tác vui vẻ!' },
        { speaker: 'B', zh: '合作愉快！今晚我做东，请各位品尝地道的广东早茶和晚宴！', py: 'Hézuò yúkuài! Jīnwǎn wǒ zuòdōng, qǐng gèwèi pǐncháng dìdao de Guǎngdōng zǎochá hé wǎnyàn!', vi: 'Hợp tác vui vẻ! Tối nay tôi làm chủ chi, mời mọi người thưởng thức trà và tiệc tối chuẩn vị Quảng Đông!' },
      ]
    },
    scrambleList: [
      {
        prompt: 'Câu 1: "Sau khi đối chiếu không sai sót, chúng tôi lập tức ký tên đóng dấu."',
        targetZh: '核对无误后我们立刻签字盖章。',
        targetPy: 'Héduì wúwù hòu wǒmen lìkè qiānzì gàizhāng.',
        words: ['签字盖章。', '核对无误后', '我们立刻']
      },
      {
        prompt: 'Câu 2: "Rất cảm ơn những phản hồi quý báu của quý khách."',
        targetZh: '非常感谢您的宝贵反馈。',
        targetPy: 'Fēicháng gǎnxiè nín de bǎoguì fǎnkuì.',
        words: ['宝贵反馈。', '非常感谢', '您的']
      },
      {
        prompt: 'Câu 3: "Đơn đặt hàng đạt trên 5.000 máy sẽ được chiết khấu 10%."',
        targetZh: '订单达到五千台可以打九折。',
        targetPy: 'Dìngdān dádào wǔqiān tái kěyǐ dǎ jiǔ zhé.',
        words: ['可以打九折。', '订单达到五千台']
      }
    ],
    reflexQuestions: [
      {
        question: 'Khi muốn đề nghị đối tác giảm giá thêm dựa trên số lượng mua lớn:',
        options: ['如果批量采购，能给我们多少折扣？', '我不买了', '太便宜了'],
        correct: 0,
        explain: '折扣 (Zhékòu) = Chiết khấu/giảm giá. 批量采购 = Mua sỉ số lượng lớn.'
      },
      {
        question: 'Khi nhận phòng khách sạn (check-in) và đã đặt trước trên ứng dụng:',
        options: ['你好，我在网上预订了房间，办理入住。', '退房', '没有房间'],
        correct: 0,
        explain: '网上预订 = Đặt trên mạng. 办理入住 = Làm thủ tục nhận phòng.'
      },
      {
        question: 'Tại buổi đàm phán khi đối tác đưa ra phương án hợp lý, bạn nói:',
        options: ['这个方案很合理，期待合作愉快！', '我不懂', '太差了'],
        correct: 0,
        explain: '期待合作愉快 (Qīdài hézuò yúkuài) = Chúc đôi bên hợp tác vui vẻ thành công!'
      }
    ],
    gapFill: {
      question: 'Điền từ: "双方在平等互利的基础上顺利____了合作合同。"',
      options: ['签署 (ký kết)', '退货', '取消'],
      correct: 0,
      audioText: '双方在平等互利的基础上顺利签署了合作合同。',
      explain: '签署 (Qiānshǔ) = Ký kết văn bản, hợp đồng chính thức.'
    },
    trueFalseDrill: [
      { audio: '双方已经正式签署了合作合同。', statement: 'Nghĩa câu này là: "Đôi bên đã chính thức ký kết hợp đồng hợp tác."', isTrue: true },
      { audio: '由于产品质量问题，客户要求全额退款。', statement: 'Nghĩa câu này là: "Khách hàng rất khen ngợi sản phẩm."', isTrue: false },
      { audio: '我们保证在三个工作日内完成交付。', statement: 'Nghĩa câu này là: "Chúng tôi cam kết hoàn tất bàn giao trong 3 ngày làm việc."', isTrue: true },
    ]
  }
};

/**
 * Trích xuất và bổ sung toàn diện cho bài học từng ngày
 */
export function enrichDayData(rawDay) {
  const dayNum = rawDay.day || 1;
  const weekNum = rawDay.week || Math.ceil(dayNum / 7);

  let template = TOPIC_EXTENSIONS.week1;
  if (weekNum === 1) template = TOPIC_EXTENSIONS.week1;
  else if (weekNum === 2) template = TOPIC_EXTENSIONS.week2;
  else if (dayNum > 60) template = TOPIC_EXTENSIONS.stage3Commerce;
  else template = TOPIC_EXTENSIONS.defaultTemplate;

  // 1. TỪ VỰNG THỰC CHIẾN ĐỘC LẬP TỪNG NGÀY (KHÔNG BỊ TRÙNG KHI CHUYỂN NGÀY)
  const vocabularies = getDailyChineseVocabularies(dayNum, rawDay);

  // 2. CÂU THỰC TẾ: 3 câu gốc của ngày + các câu mở rộng
  const coreSentences = (rawDay.sentences || []).map((s, idx) => ({
    ...s,
    tag: idx === 0 ? 'Mẫu câu cốt lõi' : idx === 1 ? 'Phản xạ thực tế' : 'Cách nói tự nhiên'
  }));

  const fullSentences = [...coreSentences, ...template.extraSentences];

  // 3. Dialogue thực tế
  const dialogue = {
    ...template.dialogue,
    title: `Hội thoại Ngày ${dayNum}: ${rawDay.title || template.dialogue.title}`
  };

  // 4. Bài khóa luyện đọc thuần chữ Hán (KHÔNG HIỆN PINYIN MẶC ĐỊNH)
  const readingPassage = template.readingPassage;

  // 5. Scramble Games
  const scrambleList = template.scrambleList;

  // 6. Matching Pairs: TỰ ĐỘNG LẤY TỪ VỰNG CỦA CHÍNH NGÀY ĐÓ ĐỂ GHÉP ĐÔI!
  const matchingPairs = vocabularies.slice(0, 6).map((v, i) => ({
    id: `m_${dayNum}_${i}`,
    zh: v.hanzi,
    vi: v.vi
  }));

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
