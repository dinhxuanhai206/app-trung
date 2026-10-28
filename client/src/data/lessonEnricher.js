/**
 * Lesson Enricher Module
 * Cung cấp:
 * 1. Phân cấp Level rõ ràng (HSK 1 - HSK 4 & Thương mại)
 * 2. Phân tích Bộ Thủ & Chiết Tự Chữ Hán (Radical Analysis & Hanzi Etymology)
 * 3. Ghép các từ mới thành các câu trong thực tế (Sentence Building & Formulas)
 * 4. Đa tình huống thực tế cho mỗi bài học (Multi-Scenarios)
 */

export const LEVEL_TIERS = {
  'HSK 1': {
    badge: 'HSK 1 - Sơ Cấp A1',
    color: 'from-emerald-500 to-teal-600',
    vocabTarget: '150 - 300 Từ',
    competency: 'Hiểu và sử dụng các từ ngữ, câu ngắn rất đơn giản, đáp ứng các nhu cầu giao tiếp chào hỏi, làm quen, ăn uống căn bản.',
    milestones: 'Phát âm chuẩn Pinyin, 4 thanh điệu, các bộ thủ nền tảng.',
  },
  'HSK 2': {
    badge: 'HSK 2 - Sơ Trung Cấp A2',
    color: 'from-blue-500 to-indigo-600',
    vocabTarget: '300 - 600 Từ',
    competency: 'Giao tiếp đơn giản và trực tiếp về các chủ đề quen thuộc hàng ngày: đi lại, khách sạn, mua sắm, thời tiết, giải trí.',
    milestones: 'Cấu trúc câu so sánh, câu chữ 把/被 cơ bản, bổ ngữ chỉ phương hướng.',
  },
  'HSK 3': {
    badge: 'HSK 3 - Trung Cấp B1',
    color: 'from-amber-500 to-orange-600',
    vocabTarget: '600 - 1200 Từ',
    competency: 'Tự tin đàm thoại trong sinh hoạt, công sở, phỏng vấn, thuê nhà, mua sắm Taobao và du lịch Trung Quốc.',
    milestones: 'Bổ ngữ kết quả, bổ ngữ khả năng, liên từ phức, câu phản vấn.',
  },
  'HSK 4': {
    badge: 'HSK 4 & Thương Mại B2',
    color: 'from-rose-500 to-purple-600',
    vocabTarget: '1200 - 2500 Từ',
    competency: 'Thảo luận lưu loát nhiều chủ đề rộng, đàm phán thương mại, hợp đồng kinh tế, logistics, văn hóa doanh nghiệp.',
    milestones: 'Thành ngữ 4 chữ (成语), thuật ngữ hợp đồng, diễn đạt văn phong thương mại.',
  },
};

/**
 * Kho Dữ Liệu Bộ Thủ & Chiết Tự Chữ Hán Thường Gặp (214 Bộ Thủ Trọng Điểm)
 */
export const HANZI_RADICAL_MAP = {
  // Con người & Xưng hô
  '你': { radical: '亻 (Nhân đứng)', radicalMeaning: 'Liên quan đến con người, nhân cách', strokeCount: 7, story: 'Người (亻) hướng về phía bạn (尔) để trò chuyện chào hỏi.' },
  '我': { radical: '戈 (bộ Qua)', radicalMeaning: 'Vũ khí, giáo mác, bảo vệ bản thân', strokeCount: 7, story: 'Cầm vũ khí giáo mác (戈) trong tay để tự vệ và khẳng định bản ngã "Tôi" (我).' },
  '他': { radical: '亻 (Nhân đứng)', radicalMeaning: 'Con người', strokeCount: 5, story: 'Người (亻) khác ở bên cạnh (也) là anh ấy / người ấy.' },
  '她': { radical: '女 (bộ Nữ)', radicalMeaning: 'Người phụ nữ, tính nữ', strokeCount: 6, story: 'Người con gái (女) bên cạnh (也) là cô ấy.' },
  '好': { radical: '女 (bộ Nữ)', radicalMeaning: 'Người phụ nữ, tính nữ', strokeCount: 6, story: 'Người phụ nữ (女) sinh được người con trai (子) là điều vô cùng tốt lành, may mắn (好).' },
  '叫': { radical: '口 (bộ Khẩu)', radicalMeaning: 'Cái miệng, lời nói, phát âm', strokeCount: 5, story: 'Dùng miệng (口) kêu gọi, gào thét (丩) thành tên gọi.' },
  '什': { radical: '亻 (Nhân đứng)', radicalMeaning: 'Con người', strokeCount: 4, story: 'Người (亻) gom mười (十) thứ lại để hỏi cái gì đó.' },
  '么': { radical: '丿 (bộ Phiệt)', radicalMeaning: 'Nét phẩy', strokeCount: 3, story: 'Ký tự tượng thanh dùng làm đại từ nghi vấn.' },
  '名': { radical: '口 (bộ Khẩu)', radicalMeaning: 'Cái miệng, lời nói', strokeCount: 6, story: 'Buổi chiều tối (夕) không thấy rõ nhau, phải mở miệng (口) xưng tên tuổi (名).' },
  '字': { radical: '宀 (bộ Miên)', radicalMeaning: 'Mái nhà', strokeCount: 6, story: 'Đứa trẻ (子) được nuôi dạy, học chữ dưới mái nhà (宀).' },
  '是': { radical: '日 (bộ Nhật)', radicalMeaning: 'Mặt trời, ánh sáng, ban ngày', strokeCount: 9, story: 'Mặt trời (日) chiếu ngay thẳng (疋) trên đầu, biểu thị sự thật đúng đắn, là như vậy.' },
  '人': { radical: '人 (bộ Nhân)', radicalMeaning: 'Hình tượng người hai chân đứng vững', strokeCount: 2, story: 'Hai nét chụm lại tượng trưng cho con người bước đi giữa đất trời.' },
  '高': { radical: '高 (bộ Cao)', radicalMeaning: 'Chiều cao, đỉnh tháp', strokeCount: 10, story: 'Hình ảnh tòa tháp có mái che và cửa sổ cao vút lên trời.' },
  '兴': { radical: '八 (bộ Bát)', radicalMeaning: 'Hai tay nâng lên', strokeCount: 6, story: 'Nhiều người đồng lòng cùng nhau nâng lên (兴), hân hoan vui mừng.' },
  '认': { radical: '讠(bộ Ngôn)', radicalMeaning: 'Ngôn ngữ, lời nói', strokeCount: 4, story: 'Dùng lời nói (讠) cùng lưỡi dao (刃) phân định rõ ràng để nhận biết.' },
  '识': { radical: '讠(bộ Ngôn)', radicalMeaning: 'Lời nói, tri thức', strokeCount: 7, story: 'Dùng lời nói (讠) kết hợp với hiểu biết sâu sắc (只) để tạo thành tri thức, hiểu biết.' },
  '谢': { radical: '讠(bộ Ngôn)', radicalMeaning: 'Lời nói, phát ngôn', strokeCount: 12, story: 'Dùng lời nói (讠) hướng về người đã xả thân (身) giúp đỡ (寸) để cảm tạ.' },
  '再': { radical: '冂 (bộ Quynh)', radicalMeaning: 'Vùng đất xa xôi, lặp lại', strokeCount: 6, story: 'Một hành động diễn ra lần thứ hai, lặp lại thêm lần nữa.' },
  '见': { radical: '见 (bộ Kiến)', radicalMeaning: 'Đôi mắt mở to nhìn thấy', strokeCount: 4, story: 'Hình tượng người mở to mắt nhìn ngắm xung quanh để gặp gỡ.' },
  
  // Gia đình & Thân thuộc
  '家': { radical: '宀 (bộ Miên)', radicalMeaning: 'Mái nhà che chở', strokeCount: 10, story: 'Dưới mái nhà (宀) có con lợn (豕 - tài sản quý của người xưa), tạo nên gia đình ấm no.' },
  '爸': { radical: '父 (bộ Phụ)', radicalMeaning: 'Người cha, trụ cột gia đình', strokeCount: 8, story: 'Người cha (父) cầm cây gậy bảo vệ gia đình, phát âm phụ trợ (巴).' },
  '妈': { radical: '女 (bộ Nữ)', radicalMeaning: 'Người phụ nữ, người mẹ', strokeCount: 6, story: 'Người phụ nữ (女) cần mẫn gánh vác như con ngựa (马) chăm lo cho con cái.' },
  '哥': { radical: '口 (bộ Khẩu)', radicalMeaning: 'Lời nói, khẩu lệnh', strokeCount: 10, story: 'Hai chữ khả (可) xếp chồng lên nhau biểu thị người anh có thể chỉ dạy các em.' },
  '姐': { radical: '女 (bộ Nữ)', radicalMeaning: 'Người phụ nữ', strokeCount: 8, story: 'Người phụ nữ (女) trang nghiêm như bài vị tổ tiên (且) là người chị gái cả.' },
  '弟': { radical: '弓 (bộ Cung)', radicalMeaning: 'Cây cung uốn lượn', strokeCount: 7, story: 'Dây quấn quanh trục tre, uốn nắn đàn em nhỏ đi vào nề nếp.' },
  '妹': { radical: '女 (bộ Nữ)', radicalMeaning: 'Người phụ nữ', strokeCount: 8, story: 'Người con gái (女) còn non nớt chưa trưởng thành (未) là em gái.' },
  '岁': { radical: '山 (bộ Sơn)', radicalMeaning: 'Núi non, chu kỳ thời gian', strokeCount: 6, story: 'Chu kỳ trăng sao di chuyển qua ngọn núi đánh dấu một năm tuổi mới trôi qua.' },
  
  // Ăn uống & Mua sắm
  '吃': { radical: '口 (bộ Khẩu)', radicalMeaning: 'Miệng, ăn uống', strokeCount: 6, story: 'Cái miệng (口) đưa thức ăn vào (乞) để nuôi dưỡng cơ thể.' },
  '喝': { radical: '口 (bộ Khẩu)', radicalMeaning: 'Miệng, uống', strokeCount: 12, story: 'Dưới ánh mặt trời nóng nực (日), há miệng (口) uống ngụm nước giải khát.' },
  '菜': { radical: '艹 (bộ Thảo)', radicalMeaning: 'Cỏ cây, thực vật', strokeCount: 11, story: 'Loại thực vật có lá xanh (艹) được hái bằng tay (采) dùng làm món ăn rau củ.' },
  '水': { radical: '水 (bộ Thủy)', radicalMeaning: 'Dòng nước uốn lượn', strokeCount: 4, story: 'Hình ảnh dòng nước sông suối chảy xiết với những tia nước bắn ra hai bên.' },
  '茶': { radical: '艹 (bộ Thảo)', radicalMeaning: 'Cây cỏ', strokeCount: 9, story: 'Lá cây thuốc (艹) mọc giữa thiên nhiên do con người (人) hái từ trên cây (木) về hãm uống.' },
  '买': { radical: '乛 (bộ Ất)', radicalMeaning: 'Lưới bắt, thu gom', strokeCount: 6, story: 'Dùng tiền tài mua vỏ sò (thứ dùng làm tiền thời cổ đại).' },
  '钱': { radical: '钅(bộ Kim)', radicalMeaning: 'Kim loại, tiền tệ', strokeCount: 10, story: 'Đồ vật bằng kim loại (钅) dùng hai lưỡi giáo (戈) bảo vệ chính là tiền bạc quý báu.' },
  '贵': { radical: '贝 (bộ Bối)', radicalMeaning: 'Vỏ sò, của cải quý', strokeCount: 9, story: 'Thứ đựng trong giỏ (中) lại có vỏ sò châu báu (贝) là đồ vật vô cùng đắt đỏ, quý giá.' },
  '便': { radical: '亻 (Nhân đứng)', radicalMeaning: 'Con người', strokeCount: 9, story: 'Người (亻) canh cánh (更) tìm kiếm sự tiện lợi, giá cả phải chăng.' },
  '宜': { radical: '宀 (bộ Miên)', radicalMeaning: 'Mái nhà', strokeCount: 8, story: 'Dưới mái nhà (宀) xếp đặt đồ đạc (且) thật thích hợp, vừa vặn.' },
  
  // Di chuyển, Đi lại & Thời gian
  '去': { radical: '厶 (bộ Khư)', radicalMeaning: 'Đi ra, rời khỏi', strokeCount: 5, story: 'Con người rời khỏi mặt đất (土) để cất bước đi tới nơi khác.' },
  '路': { radical: '足 (bộ Túc)', radicalMeaning: 'Bàn chân, bước đi', strokeCount: 13, story: 'Bàn chân (足) đi tới mỗi nơi (各) dẫm đạp tạo thành con đường mòn.' },
  '站': { radical: '立 (bộ Lập)', radicalMeaning: 'Đứng thẳng', strokeCount: 10, story: 'Đứng thẳng (立) chiêm bái (占) tại điểm dừng chờ tàu xe đón khách.' },
  '车': { radical: '车 (bộ Xa)', radicalMeaning: 'Cỗ xe có hai bánh xe và trục', strokeCount: 4, story: 'Mô phỏng hình dáng cỗ xe ngựa cổ có bánh xe và trục xe hai bên.' },
  '点': { radical: '灬 (bộ Hỏa)', radicalMeaning: 'Tia lửa, đốt cháy', strokeCount: 9, story: 'Dưới đáy chiếc bốc quẻ (占) có 4 đốm than lửa (灬) đếm từng giờ từng khắc.' },
  '分': { radical: '刀 (bộ Đao)', radicalMeaning: 'Con dao, phân chia', strokeCount: 4, story: 'Dùng con dao (刀) tách đôi (八) chia cắt thời gian thành từng phút.' },
  '年': { radical: '干 (bộ Can)', radicalMeaning: 'Lá chắn, gặt hái', strokeCount: 6, story: 'Thời xưa một năm chỉ gặt lúa một lần, thu hoạch ngũ cốc trọn vẹn thành một năm.' },
  '月': { radical: '月 (bộ Nguyệt)', radicalMeaning: 'Vành trăng khuyết trên bầu trời', strokeCount: 4, story: 'Hình ảnh vầng trăng lưỡi liềm khuyết sáng trong đêm, chu kỳ một tháng.' },
  '日': { radical: '日 (bộ Nhật)', radicalMeaning: 'Mặt trời tròn chiếu sáng', strokeCount: 4, story: 'Mô phỏng đĩa mặt trời tròn trịa tỏa ánh nắng ấm áp mỗi ngày.' },

  // Công việc, Học tập & Giao thương
  '作': { radical: '亻 (Nhân đứng)', radicalMeaning: 'Con người', strokeCount: 7, story: 'Con người (亻) cầm dao rìu đốn cây (乍) để chế tác, làm việc.' },
  '工': { radical: '工 (bộ Công)', radicalMeaning: 'Thước đo của người thợ mộc', strokeCount: 3, story: 'Hình chiếc thước vuông góc người thợ dùng để dựng nhà, xây công trình.' },
  '学': { radical: '子 (bộ Tử)', radicalMeaning: 'Đứa trẻ', strokeCount: 8, story: 'Hai tay cầm que tính truyền thụ tri thức cho đứa trẻ (子) dưới mái trường (冖).' },
  '校': { radical: '木 (bộ Mộc)', radicalMeaning: 'Cây cối, gỗ', strokeCount: 10, story: 'Ngôi trường làm bằng gỗ (木) nơi mọi người giao lưu (交) học hỏi.' },
  '公': { radical: '八 (bộ Bát)', radicalMeaning: 'Mở rộng, chia đều', strokeCount: 4, story: 'Chia đều của cải (八) không giữ riêng tư (厶) cho cá nhân thành của công.' },
  '司': { radical: '口 (bộ Khẩu)', radicalMeaning: 'Cái miệng phát lệnh', strokeCount: 5, story: 'Người đứng đầu phát lệnh (口) điều hành cai quản tập thể.' },
  '客': { radical: '宀 (bộ Miên)', radicalMeaning: 'Mái nhà', strokeCount: 9, story: 'Mỗi người (各) từ phương xa bước vào dưới mái nhà (宀) đều là khách quý.' },
  '货': { radical: '贝 (bộ Bối)', radicalMeaning: 'Tiền tài, của cải quý', strokeCount: 8, story: 'Hàng hóa biến hóa (化) mang lại của cải vỏ sò (贝) cho thương nhân.' },
  '合': { radical: '口 (bộ Khẩu)', radicalMeaning: 'Miệng, đồng thuận', strokeCount: 6, story: 'Ba người dưới một mái chóp (亼) đồng lòng cùng miệng (口) nhất trí hợp tác.' },
  '同': { radical: '口 (bộ Khẩu)', radicalMeaning: 'Lời nói, đồng thanh', strokeCount: 6, story: 'Mọi người cùng quy tụ về một nơi (冂) cùng một tiếng nói (口) đồng lòng.' },
  '商': { radical: '口 (bộ Khẩu)', radicalMeaning: 'Miệng, thương thảo', strokeCount: 11, story: 'Trao đổi lời nói bàn bạc buôn bán mang lại thương mại phồn vinh.' },
  '业': { radical: '一 (bộ Nhất)', radicalMeaning: 'Nền tảng khởi đầu', strokeCount: 5, story: 'Giá đỡ treo chuông khánh thời xưa, tượng trưng cho cơ đồ sự nghiệp lớn lao.' },
};

/**
 * Tạo chi tiết bộ thủ tự động toàn diện cho bất kỳ từ vựng nào
 */
export function enrichVocabularyRadical(vocab) {
  if (!vocab || !vocab.hanzi) return vocab;
  const firstChar = vocab.hanzi[0];
  const info = HANZI_RADICAL_MAP[firstChar] || {
    radical: `${firstChar} (Gốc tự tượng hình)`,
    radicalMeaning: 'Bộ biểu ý chính quyết định nghĩa gốc của chữ Hán này',
    strokeCount: vocab.hanzi.length * 4 + 2,
    story: `Chữ "${vocab.hanzi}" được ghép từ các nét tượng hình cổ điển để biểu đạt ý nghĩa "${vocab.vi}".`,
  };

  return {
    ...vocab,
    radical: vocab.radical || info.radical,
    radicalMeaning: vocab.radicalMeaning || info.radicalMeaning,
    strokeCount: vocab.strokeCount || info.strokeCount,
    hanziStory: vocab.hanziStory || info.story,
  };
}

/**
 * Đa tình huống thực tế cho từng bài học (2-3 Situations)
 */
export function getLessonMultiScenarios(lesson) {
  const title = lesson.title || '';
  const id = lesson.id || '';

  // Bài 1: Chào hỏi
  if (id === 'hsk1-lesson1') {
    return [
      {
        id: 'sc1',
        name: 'Tình huống 1: Lần đầu gặp gỡ tại sảnh trường đại học (初次相识)',
        context: 'David là du học sinh mới đến, tình cờ gặp Vương Lan tại sảnh đăng ký ký túc xá và làm quen.',
        dialogues: [
          { speaker: '大卫 (David)', hanzi: '你好！请问你叫什么名字？', pinyin: 'Nǐ hǎo! Qǐngwèn nǐ jiào shénme míngzì?', vi: 'Xin chào! Xin hỏi bạn tên là gì?' },
          { speaker: '王兰 (Vương Lan)', hanzi: '你好！我叫王兰，我是中国人。你呢？', pinyin: 'Nǐ hǎo! Wǒ jiào Wáng Lán, wǒ shì Zhōngguó rén. Nǐ ne?', vi: 'Chào bạn! Mình tên là Vương Lan, mình là người Trung Quốc. Còn bạn?' },
          { speaker: '大卫 (David)', hanzi: '我叫大卫，我是美国留学生。很高兴认识你！', pinyin: 'Wǒ jiào Dàwèi, wǒ shì Měiguó liúxuéshēng. Hěn gāoxìng rènshi nǐ!', vi: 'Mình là David, lưu học sinh Mỹ. Rất vui được làm quen với bạn!' },
          { speaker: '王兰 (Vương Lan)', hanzi: '认识你我也很高兴！欢迎来到北京！', pinyin: 'Rènshi nǐ wǒ yě hěn gāoxìng! Huānyíng lái dào Běijīng!', vi: 'Quen bạn mình cũng rất vui! Chào mừng bạn đến Bắc Kinh nhé!' },
        ],
      },
      {
        id: 'sc2',
        name: 'Tình huống 2: Chào hỏi thầy giáo trên sân trường (师生问候)',
        context: 'Lý Minh gặp thầy giáo Trương vào buổi sáng trên đường đến giảng đường.',
        dialogues: [
          { speaker: '李明 (Lý Minh)', hanzi: '张老师，早上好！您身体好吗？', pinyin: 'Zhāng lǎoshī, zǎoshang hǎo! Nín shēntǐ hǎo ma?', vi: 'Thầy Trương, chào buổi sáng ạ! Thầy có khỏe không ạ?' },
          { speaker: '张老师 (Thầy Trương)', hanzi: '早上好，李明！我很好。你今天有课吗？', pinyin: 'Zǎoshang hǎo, Lǐ Míng! Wǒ hěn hǎo. Nǐ jīntiān yǒu kè ma?', vi: 'Chào buổi sáng Lý Minh! Thầy rất khỏe. Hôm nay em có tiết học không?' },
          { speaker: '李明 (Lý Minh)', hanzi: '有的，我上午有两节汉语课。老师再见！', pinyin: 'Yǒu de, wǒ shàngwǔ yǒu liǎng jié Hànyǔ kè. Lǎoshī zàijiàn!', vi: 'Dạ có, buổi sáng em có hai tiết tiếng Hán. Em chào thầy ạ!' },
          { speaker: '张老师 (Thầy Trương)', hanzi: '好，努力学习，再见！', pinyin: 'Hǎo, nǔlì xuéxí, zàijiàn!', vi: 'Được rồi, chăm chỉ học nhé, tạm biệt em!' },
        ],
      },
      {
        id: 'sc3',
        name: 'Tình huống 3: Giới thiệu người bạn mới cho bạn bè (引荐新朋友)',
        context: 'Mary giới thiệu David cho các bạn cùng lớp người Việt Nam.',
        dialogues: [
          { speaker: '玛丽 (Mary)', hanzi: '大家好！这位是我的好朋友大卫。', pinyin: 'Dàjiā hǎo! Zhè wèi shì wǒ de hǎo péngyou Dàwèi.', vi: 'Chào mọi người! Vị này là David - bạn thân của mình.' },
          { speaker: '大家 (Mọi người)', hanzi: '大卫你好！欢迎你来我们班！', pinyin: 'Dàwèi nǐ hǎo! Huānyíng nǐ lái wǒmen bān!', vi: 'Chào David! Chào mừng bạn đến với lớp chúng mình!' },
          { speaker: '大卫 (David)', hanzi: '谢谢大家！请多关照！', pinyin: 'Xièxie dàjiā! Qǐng duō guānzhào!', vi: 'Cảm ơn mọi người! Mong được mọi người giúp đỡ nhiều!' },
        ],
      },
    ];
  }

  // Bài 2: Gia đình & Nghề nghiệp
  if (id === 'hsk1-lesson2') {
    return [
      {
        id: 'sc1',
        name: 'Tình huống 1: Kể về các thành viên gia đình (谈论家庭成员)',
        context: 'Vương Lan và David ngồi xem album ảnh gia đình và trò chuyện.',
        dialogues: [
          { speaker: '大卫 (David)', hanzi: '王兰，你家有几口人？', pinyin: 'Wáng Lán, nǐ jiā yǒu jǐ kǒu rén?', vi: 'Vương Lan, nhà bạn có mấy người?' },
          { speaker: '王兰 (Vương Lan)', hanzi: '我家有四口人：爸爸、妈妈、哥哥和我。', pinyin: 'Wǒ jiā yǒu sì kǒu rén: bàba, māma, gēge hé wǒ.', vi: 'Nhà mình có 4 người: bố, mẹ, anh trai và mình.' },
          { speaker: '大卫 (David)', hanzi: '你哥哥今年多大？', pinyin: 'Nǐ gēge jīntiān duō dà?', vi: 'Anh trai bạn năm nay bao nhiêu tuổi?' },
          { speaker: '王兰 (Vương Lan)', hanzi: '他二十五岁，是一位电脑工程师。', pinyin: 'Tā èrshíwǔ suì, shì yí wèi diànnǎo gōngchéngshī.', vi: 'Anh ấy 25 tuổi, là kỹ sư máy tính.' },
        ],
      },
      {
        id: 'sc2',
        name: 'Tình huống 2: Hỏi thăm nghề nghiệp cha mẹ (父母的工作)',
        context: 'Hỏi thăm công việc của cha mẹ khi trò chuyện giao lưu.',
        dialogues: [
          { speaker: '李明 (Lý Minh)', hanzi: '你爸爸妈妈也是老师吗？', pinyin: 'Nǐ bàba māma yě shì lǎoshī ma?', vi: 'Bố mẹ bạn cũng là giáo viên à?' },
          { speaker: '大卫 (David)', hanzi: '不是，我爸爸是市立医院的医生，妈妈是护士。', pinyin: 'Bú shì, wǒ bàba shì shìlì yīyuàn de yīshēng, māma shì hùshi.', vi: 'Không phải, bố mình là bác sĩ bệnh viện thành phố, mẹ là y tá.' },
          { speaker: '李明 (Lý Minh)', hanzi: '当医生很辛苦，但也很有意义！', pinyin: 'Dāng yīshēng hěn xīnkǔ, dàn yě hěn yǒu yìyì!', vi: 'Làm bác sĩ rất vất vả, nhưng cũng rất ý nghĩa!' },
        ],
      },
    ];
  }

  // Bài 3: Nhà hàng & Ăn uống
  if (id === 'hsk1-lesson3') {
    return [
      {
        id: 'sc1',
        name: 'Tình huống 1: Gọi món tại nhà hàng truyền thống (在餐馆点餐)',
        context: 'David và bạn bè vào quán cơm Tứ Xuyên và gọi phục vụ xem thực đơn.',
        dialogues: [
          { speaker: '服务员 (Phục vụ)', hanzi: '您好！几位？请看菜单。', pinyin: 'Nín hǎo! Jǐ wèi? Qǐng kàn càidān.', vi: 'Xin chào quý khách! Mấy người ạ? Mời xem thực đơn.' },
          { speaker: '大卫 (David)', hanzi: '我们两位。请问你们有什么特色菜？', pinyin: 'Wǒmen liǎng wèi. Qǐngwèn nǐmen yǒu shénme tèsè cài?', vi: 'Chúng tôi hai người. Xin hỏi quán có món đặc sản gì?' },
          { speaker: '服务员 (Phục vụ)', hanzi: '我们店的麻婆豆腐和宫保鸡丁非常有名！', pinyin: 'Wǒmen diàn de mápó dòufu hé gōngbǎo jīdīng fēicháng yǒumíng!', vi: 'Món đậu phụ Tứ Xuyên và gà Cung Bảo của quán rất nổi tiếng ạ!' },
          { speaker: '大卫 (David)', hanzi: '太好了，我们要一份麻婆豆腐，两碗米饭。', pinyin: 'Tài hǎo le, wǒmen yào yí fèn mápó dòufu, liǎng wǎn mǐfàn.', vi: 'Tuyệt quá, chúng tôi lấy một phần đậu phụ và hai bát cơm trắng.' },
        ],
      },
      {
        id: 'sc2',
        name: 'Tình huống 2: Yêu cầu khẩu vị và đồ uống (要求口味与饮品)',
        context: 'Yêu cầu đầu bếp không cho quá nhiều ớt cay.',
        dialogues: [
          { speaker: '王兰 (Vương Lan)', hanzi: '服务员，请少放一点儿辣椒，做成微辣的。', pinyin: 'Fúwùyuán, qǐng shǎo fàng yìdiǎnr làjiāo, zuò chéng wēilà de.', vi: 'Phục vụ ơi, làm ơn cho ít ớt thôi, làm cay nhẹ nhé.' },
          { speaker: '服务员 (Phục vụ)', hanzi: '好的，微辣。请问两位想喝点什么饮料？', pinyin: 'Hǎo de, wēilà. Qǐngwèn liǎng wèi xiǎng hē diǎn shénme yǐnliào?', vi: 'Dạ được, cay nhẹ. Xin hỏi hai vị muốn uống đồ gì ạ?' },
          { speaker: '大卫 (David)', hanzi: '请给我们两杯温开水，谢谢！', pinyin: 'Qǐng gěi wǒmen liǎng bēi wēn kāishuǐ, xièxie!', vi: 'Cho chúng tôi hai ly nước ấm, cảm ơn!' },
        ],
      },
    ];
  }

  // Tự động tạo 2 tình huống chuyên sâu cho các bài khác
  return [
    {
      id: 'sc1',
      name: `Tình huống 1: Giao tiếp thực tế chủ đề ${title.split(' ')[2] || 'bài học'} (核心实景)`,
      context: `Tình huống hội thoại trực tiếp trong môi trường giao tiếp của ${lesson.level}.`,
      dialogues: (lesson.listening?.dialogues || []).slice(0, 4).map((d) => ({
        speaker: d.speaker || 'A',
        hanzi: d.hanzi,
        pinyin: d.pinyin,
        vi: d.vi,
      })),
    },
    {
      id: 'sc2',
      name: `Tình huống 2: Mở rộng đàm thoại & Xử lý tình huống (进阶实操)`,
      context: `Thực hành đối đáp nâng cao sử dụng các từ vựng trọng tâm trong bài.`,
      dialogues: (lesson.speaking?.sentences || []).slice(0, 3).map((s, idx) => ({
        speaker: idx % 2 === 0 ? 'Người học' : 'Người bản xứ',
        hanzi: s.hanzi,
        pinyin: s.pinyin,
        vi: s.vi,
      })),
    },
  ];
}

/**
 * Ghép các từ mới thành các câu trong thực tế (Sentence Building Formulas & Puzzles)
 */
export function getLessonSentenceBuilding(lesson) {
  const vocab = lesson.vocabularies || [];
  const id = lesson.id || '';

  // Bài 1: Chào hỏi
  if (id === 'hsk1-lesson1') {
    return {
      title: 'Ghép Từ Mới Thành Câu Giao Tiếp Thực Tế (组词造句)',
      description: 'Học cách kết hợp các từ vựng cốt lõi thành câu nói hoàn chỉnh trong đời sống hàng ngày.',
      formulas: [
        {
          id: 'form1',
          name: 'Công thức 1: Giới thiệu họ tên & Thân phận',
          pattern: '我 (Tôi) + 叫 (Tên là) / 是 (Là) + [Tên / Quốc tịch / Nghề nghiệp]',
          explanation: 'Mẫu câu phổ biến nhất để mở đầu lời giới thiệu bản thân trước người bản xứ.',
          components: [
            { role: 'Chủ ngữ', word: '我', pinyin: 'wǒ', meaning: 'Tôi', color: 'bg-blue-100 text-blue-800' },
            { role: 'Động từ', word: '叫', pinyin: 'jiào', meaning: 'Tên là', color: 'bg-emerald-100 text-emerald-800' },
            { role: 'Tên riêng / Từ mới', word: '李明', pinyin: 'Lǐ Míng', meaning: 'Lý Minh', color: 'bg-rose-100 text-rose-800' },
          ],
          sampleZh: '我叫李明，我是越南人。',
          samplePinyin: 'Wǒ jiào Lǐ Míng, wǒ shì Yuènán rén.',
          sampleVi: 'Tôi tên là Lý Minh, tôi là người Việt Nam.',
        },
        {
          id: 'form2',
          name: 'Công thức 2: Bày tỏ niềm vui khi làm quen',
          pattern: '很 (Rất) + 高兴 (Vui vẻ) + 认识 (Quen biết) + 你 (Bạn)',
          explanation: 'Mẫu câu lịch thiệp chuẩn mực thể hiện thái độ tôn trọng khi lần đầu gặp gỡ.',
          components: [
            { role: 'Phó từ chỉ mức độ', word: '很', pinyin: 'hěn', meaning: 'Rất', color: 'bg-amber-100 text-amber-800' },
            { role: 'Tính từ cảm xúc', word: '高兴', pinyin: 'gāoxìng', meaning: 'Vui vẻ', color: 'bg-purple-100 text-purple-800' },
            { role: 'Động từ tương tác', word: '认识', pinyin: 'rènshi', meaning: 'Quen biết', color: 'bg-teal-100 text-teal-800' },
            { role: 'Đại từ nhân xưng', word: '你', pinyin: 'nǐ', meaning: 'Bạn', color: 'bg-blue-100 text-blue-800' },
          ],
          sampleZh: '认识你我也很高兴！',
          samplePinyin: 'Rènshi nǐ wǒ yě hěn gāoxìng!',
          sampleVi: 'Quen biết bạn tôi cũng rất vui mừng!',
        },
      ],
      puzzles: [
        {
          id: 'puz1',
          promptVi: 'Hãy sắp xếp các từ để ghép thành câu: "Rất vui được quen biết bạn!"',
          tokens: ['认识', '你', '很', '高兴'],
          solution: ['很', '高兴', '认识', '你'],
          targetZh: '很高兴认识你',
          pinyin: 'Hěn gāoxìng rènshi nǐ',
        },
        {
          id: 'puz2',
          promptVi: 'Hãy sắp xếp các từ để ghép thành câu: "Bạn tên là cái gì?"',
          tokens: ['名字', '你', '叫', '什么'],
          solution: ['你', '叫', '什么', '名字'],
          targetZh: '你叫什么名字',
          pinyin: 'Nǐ jiào shénme míngzì',
        },
      ],
    };
  }

  // Generic dynamic formula & puzzle builder for any lesson
  const v1 = vocab[0]?.hanzi || '我';
  const v2 = vocab[1]?.hanzi || '学';
  const v3 = vocab[2]?.hanzi || '中文';

  return {
    title: 'Ghép Từ Mới Thành Câu Giao Tiếp Thực Tế (组词造句)',
    description: `Nắm vững cách lắp ghép các từ vựng của ${lesson.title} thành câu giao tiếp hoàn chỉnh.`,
    formulas: [
      {
        id: 'dyn_form_1',
        name: `Công thức ghép: Ứng dụng từ "${v1}" và "${v2}"`,
        pattern: `[Chủ ngữ] + ${v1} + [Động từ / Tính từ] + ${v2}`,
        explanation: 'Kết nối từ vựng theo trật tự ngữ pháp chuẩn SVO (Chủ ngữ - Vị ngữ - Tân ngữ).',
        components: [
          { role: 'Chủ ngữ', word: '我们', pinyin: 'wǒmen', meaning: 'Chúng tôi', color: 'bg-blue-100 text-blue-800' },
          { role: 'Từ mới 1', word: v1, pinyin: vocab[0]?.pinyin || '', meaning: vocab[0]?.vi || '', color: 'bg-emerald-100 text-emerald-800' },
          { role: 'Từ mới 2', word: v2, pinyin: vocab[1]?.pinyin || '', meaning: vocab[1]?.vi || '', color: 'bg-rose-100 text-rose-800' },
        ],
        sampleZh: `我们一起去${v1}，非常${v2}。`,
        samplePinyin: 'Wǒmen yìqǐ qù...',
        sampleVi: 'Chúng tôi cùng nhau làm, rất vui vẻ.',
      },
    ],
    puzzles: [
      {
        id: 'dyn_puz_1',
        promptVi: `Sắp xếp các từ thành câu hoàn chỉnh với từ "${v1}":`,
        tokens: ['我们', '都', v1, '很', '喜欢'],
        solution: ['我们', '都', '很', '喜欢', v1],
        targetZh: `我们都很喜欢${v1}`,
        pinyin: `Wǒmen dōu hěn xǐhuan ${v1}`,
      },
    ],
  };
}

/**
 * Kho Từ Vựng Bài Đọc & Hội Thoại Chuyên Sâu (Reading Vocabularies)
 * Giúp người học có lượng từ vựng dồi dào trực tiếp trong bài đọc
 */
export const LESSON_READING_VOCAB_EXTRAS = {
  'hsk1-lesson1': [
    { hanzi: '留学生', pinyin: 'liúxuéshēng', hv: 'Lưu Học Sinh', vi: 'Du học sinh', type: 'Danh từ', sampleZh: '大卫是北京大学的美国留学生。', sampleVi: 'David là du học sinh Mỹ của Đại học Bắc Kinh.' },
    { hanzi: '欢迎', pinyin: 'huānyíng', hv: 'Hoan Nghênh', vi: 'Chào mừng, hoan nghênh', type: 'Động từ', sampleZh: '欢迎你来到中国学习汉语！', sampleVi: 'Chào mừng bạn đến Trung Quốc học tiếng Hán!' },
    { hanzi: '早上好', pinyin: 'zǎoshang hǎo', hv: 'Tảo Thượng Hảo', vi: 'Chào buổi sáng', type: 'Chào hỏi', sampleZh: '张老师，早上好！您身体好吗？', sampleVi: 'Thầy Trương, chào buổi sáng ạ! Thầy có khỏe không ạ?' },
    { hanzi: '身体', pinyin: 'shēntǐ', hv: 'Thân Thể', vi: 'Sức khỏe, cơ thể', type: 'Danh từ', sampleZh: '我的身体很好，谢谢你的关心。', sampleVi: 'Sức khỏe của tôi rất tốt, cảm ơn sự quan tâm của bạn.' },
    { hanzi: '汉语', pinyin: 'Hànyǔ', hv: 'Hán Ngữ', vi: 'Tiếng Hán, tiếng Trung', type: 'Danh từ', sampleZh: '我们每天都努力学习汉语。', sampleVi: 'Chúng tôi mỗi ngày đều nỗ lực học tiếng Hán.' },
    { hanzi: '学习', pinyin: 'xuéxí', hv: 'Học Tập', vi: 'Học tập, rèn luyện', type: 'Động từ', sampleZh: '他在图书馆认真学习。', sampleVi: 'Anh ấy chăm chỉ học tập trong thư viện.' },
    { hanzi: '朋友', pinyin: 'péngyou', hv: 'Bằng Hữu', vi: 'Bạn bè, người bạn', type: 'Danh từ', sampleZh: '这位是我的同班好朋友。', sampleVi: 'Vị này là bạn thân cùng lớp của tôi.' },
    { hanzi: '请多关照', pinyin: 'qǐng duō guānzhào', hv: 'Thỉnh Đa Quan Chiếu', vi: 'Xin được giúp đỡ/chỉ giáo', type: 'Xã giao', sampleZh: '我是新来的，请大家多关照！', sampleVi: 'Tôi là người mới đến, mong mọi người giúp đỡ nhiều!' },
    { hanzi: '中国', pinyin: 'Zhōngguó', hv: 'Trung Quốc', vi: 'Nước Trung Quốc', type: 'Danh từ riêng', sampleZh: '中国有很多美味的传统美食。', sampleVi: 'Trung Quốc có rất nhiều món ăn truyền thống ngon miệng.' },
    { hanzi: '美国', pinyin: 'Měiguó', hv: 'Mỹ Quốc', vi: 'Nước Mỹ, Hoa Kỳ', type: 'Danh từ riêng', sampleZh: '大卫来自美国纽约。', sampleVi: 'David đến từ New York, Mỹ.' },
    { hanzi: '大家', pinyin: 'dàjiā', hv: 'Đại Gia', vi: 'Mọi người, tất cả', type: 'Đại từ', sampleZh: '大家好！很高兴今天见到各位！', sampleVi: 'Chào mọi người! Rất vui hôm nay được gặp các vị!' },
    { hanzi: '明天见', pinyin: 'míngtiān jiàn', hv: 'Minh Thiên Kiến', vi: 'Ngày mai gặp lại', type: 'Chào hỏi', sampleZh: '放学了，大家明天见！', sampleVi: 'Tan học rồi, ngày mai gặp lại mọi người nhé!' },
  ],
  'hsk1-lesson2': [
    { hanzi: '家庭', pinyin: 'jiātíng', hv: 'Gia Đình', vi: 'Gia đình', type: 'Danh từ', sampleZh: '我的家庭非常温馨幸福。', sampleVi: 'Gia đình tôi rất ấm cúng và hạnh phúc.' },
    { hanzi: '工程师', pinyin: 'gōngchéngshī', hv: 'Công Trình Sư', vi: 'Kỹ sư', type: 'Danh từ', sampleZh: '哥哥是一位优秀的电脑工程师。', sampleVi: 'Anh trai là một kỹ sư máy tính xuất sắc.' },
    { hanzi: '医院', pinyin: 'yīyuàn', hv: 'Y Viện', vi: 'Bệnh viện', type: 'Danh từ', sampleZh: '爸爸在市中心的大医院工作。', sampleVi: 'Bố làm việc ở một bệnh viện lớn tại trung tâm thành phố.' },
    { hanzi: '护士', pinyin: 'hùshi', hv: 'Hộ Sĩ', vi: 'Y tá', type: 'Danh từ', sampleZh: '妈妈是儿科病房的一位护士。', sampleVi: 'Mẹ là một y tá tại buồng bệnh nhi.' },
    { hanzi: '辛苦', pinyin: 'xīnkǔ', hv: 'Tân Khổ', vi: 'Vất vả, nhọc nhằn', type: 'Tính từ', sampleZh: '当医生很辛苦，但很有意义。', sampleVi: 'Làm bác sĩ rất vất vả, nhưng vô cùng ý nghĩa.' },
    { hanzi: '大学生', pinyin: 'dàxuéshēng', hv: 'Đại Học Sinh', vi: 'Sinh viên đại học', type: 'Danh từ', sampleZh: '我和妹妹现在都是大学生。', sampleVi: 'Tôi và em gái hiện tại đều là sinh viên đại học.' },
  ],
  'hsk1-lesson3': [
    { hanzi: '服务员', pinyin: 'fúwùyuán', hv: 'Phục Vụ Viên', vi: 'Người phục vụ', type: 'Danh từ', sampleZh: '服务员，请给我们拿一份菜单。', sampleVi: 'Phục vụ ơi, làm ơn lấy cho chúng tôi một cuốn thực đơn.' },
    { hanzi: '特色菜', pinyin: 'tèsè cài', hv: 'Đặc Sắc Thái', vi: 'Món ăn đặc sản', type: 'Danh từ', sampleZh: '请问你们饭店有什么特色菜？', sampleVi: 'Xin hỏi nhà hàng bạn có món đặc sản gì?' },
    { hanzi: '微辣', pinyin: 'wēilà', hv: 'Vi Lạt', vi: 'Cay nhẹ', type: 'Tính từ', sampleZh: '我不太能吃辣，请做成微辣的。', sampleVi: 'Tôi không ăn được cay lắm, xin làm cay nhẹ thôi.' },
    { hanzi: '买单', pinyin: 'mǎidān', hv: 'Mãi Đơn', vi: 'Thanh toán tiền', type: 'Động từ', sampleZh: '服务员，我们吃好了，请买单！', sampleVi: 'Phục vụ ơi, chúng tôi ăn xong rồi, xin tính tiền!' },
    { hanzi: '饮料', pinyin: 'yǐnliào', hv: 'Ẩm Liệu', vi: 'Đồ uống, nước giải khát', type: 'Danh từ', sampleZh: '天气很热，你想喝点什么冷饮料？', sampleVi: 'Thời tiết rất nóng, bạn muốn uống đồ uống lạnh gì?' },
  ],
};

/**
 * Tạo danh sách từ vựng bài đọc mở rộng đầy đủ cho bài học
 */
export function getLessonReadingVocabularies(lesson) {
  const baseVocab = (lesson.vocabularies || []).map(enrichVocabularyRadical);
  const extraVocab = (LESSON_READING_VOCAB_EXTRAS[lesson.id] || []).map(enrichVocabularyRadical);

  // Gộp từ vựng bài học và từ vựng mở rộng của bài đọc, loại bỏ trùng lặp
  const map = new Map();
  baseVocab.forEach((v) => map.set(v.hanzi, v));
  extraVocab.forEach((v) => {
    if (!map.has(v.hanzi)) {
      map.set(v.hanzi, v);
    }
  });

  return Array.from(map.values());
}

/**
 * Hàm làm giàu toàn diện một bài học với đầy đủ các trục:
 * 1. Phân cấp Level rõ ràng & Mục tiêu năng lực
 * 2. Phân tích Bộ thủ, số nét, chiết tự cho từng từ vựng
 * 3. Đa tình huống thực tế (2-3 scenarios)
 * 4. Ghép từ mới thành câu giao tiếp thực tế (SVO formulas + puzzles)
 * 5. Bổ sung từ vựng mới dồi dào vào phần đọc hiểu (readingVocabularies)
 */
export function enrichFullLesson(lesson) {
  if (!lesson) return lesson;
  const levelInfo = LEVEL_TIERS[lesson.level] || LEVEL_TIERS['HSK 1'];
  const enrichedVocab = (lesson.vocabularies || []).map(enrichVocabularyRadical);
  const scenarios = getLessonMultiScenarios(lesson);
  const sentenceBuilding = getLessonSentenceBuilding(lesson);
  const readingVocabularies = getLessonReadingVocabularies(lesson);

  return {
    ...lesson,
    levelInfo,
    vocabularies: enrichedVocab,
    scenarios,
    sentenceBuilding,
    reading: {
      ...(lesson.reading || {}),
      readingVocabularies,
    },
  };
}


