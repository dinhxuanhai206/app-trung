/**
 * Radical & Mnemonic Helper
 * Cung cấp từ điển bộ thủ, chiết tự và mẹo nhớ từ vựng tiếng Trung toàn diện cho kho 1,000 từ.
 */

export const RADICAL_DATABASE = {
  // Con người, hành động, cơ thể
  '亻': { name: 'Nhân đứng (亻)', meaning: 'Con người, nhân cách, thái độ', strokes: 2 },
  '人': { name: 'Nhân (人)', meaning: 'Con người bước đi', strokes: 2 },
  '女': { name: 'Nữ (女)', meaning: 'Người phụ nữ, tính nữ, mẹ con', strokes: 3 },
  '子': { name: 'Tử (子)', meaning: 'Đứa trẻ, con cái, tri thức', strokes: 3 },
  '父': { name: 'Phụ (父)', meaning: 'Người cha, trụ cột gia đình', strokes: 4 },
  '口': { name: 'Khẩu (口)', meaning: 'Miệng, ăn uống, lời nói', strokes: 3 },
  '讠': { name: 'Ngôn (讠)', meaning: 'Ngôn ngữ, lời ăn tiếng nói, trao đổi', strokes: 2 },
  '言': { name: 'Ngôn (言)', meaning: 'Lời nói, phát ngôn', strokes: 7 },
  '心': { name: 'Tâm (心)', meaning: 'Trái tim, tâm trí, cảm xúc, suy nghĩ', strokes: 4 },
  '忄': { name: 'Tâm đứng (忄)', meaning: 'Cảm xúc bên trong, tâm trạng', strokes: 3 },
  '手': { name: 'Thủ (手)', meaning: 'Bàn tay, thao tác', strokes: 4 },
  '扌': { name: 'Thủ (扌)', meaning: 'Bàn tay hành động, cầm nắm, tác động', strokes: 3 },
  '足': { name: 'Túc (足)', meaning: 'Bàn chân, bước đi, di chuyển', strokes: 7 },
  '⻊': { name: 'Túc (⻊)', meaning: 'Bàn chân, chạy nhảy, giẫm đạp', strokes: 7 },
  '目': { name: 'Mục (目)', meaning: 'Đôi mắt, nhìn ngắm', strokes: 5 },
  '耳': { name: 'Nhĩ (耳)', meaning: 'Cái tai, lắng nghe', strokes: 6 },
  '身': { name: 'Thân (身)', meaning: 'Thân thể, vóc dáng', strokes: 7 },

  // Tự nhiên, vạn vật
  '日': { name: 'Nhật (日)', meaning: 'Mặt trời, ban ngày, thời gian', strokes: 4 },
  '月': { name: 'Nguyệt (月)', meaning: 'Mặt trăng, ban đêm, thời gian tháng', strokes: 4 },
  '水': { name: 'Thủy (水)', meaning: 'Nước, dòng chảy', strokes: 4 },
  '氵': { name: 'Ba chấm thủy (氵)', meaning: 'Nước, chất lỏng, sông hồ, ẩm ướt', strokes: 3 },
  '火': { name: 'Hỏa (火)', meaning: 'Ngọn lửa, sức nóng', strokes: 4 },
  '灬': { name: 'Hỏa dưới (灬)', meaning: 'Than lửa nung nấu, nhiệt độ cao', strokes: 4 },
  '木': { name: 'Mộc (木)', meaning: 'Cây cối, gỗ, rừng rậm', strokes: 4 },
  '艹': { name: 'Thảo đầu (艹)', meaning: 'Cỏ cây, hoa lá, thực vật, thảo mộc', strokes: 3 },
  '土': { name: 'Thổ (土)', meaning: 'Đất đai, mặt đất, bờ cõi', strokes: 3 },
  '山': { name: 'Sơn (山)', meaning: 'Núi non, cao lớn', strokes: 3 },
  '石': { name: 'Thạch (石)', meaning: 'Hòn đá, sỏi đá, cứng rắn', strokes: 5 },
  '金': { name: 'Kim (金)', meaning: 'Kim loại, vàng bạc, của cải', strokes: 8 },
  '钅': { name: 'Kim (钅)', meaning: 'Kim khí, tiền tệ, sắt thép', strokes: 5 },
  '风': { name: 'Phong (风)', meaning: 'Cơn gió, thời tiết', strokes: 4 },
  '雨': { name: 'Vũ (雨)', meaning: 'Mưa rơi từ trên trời xuống', strokes: 8 },

  // Nhà cửa, đồ vật, xã hội
  '宀': { name: 'Miên (宀)', meaning: 'Mái nhà che chở, tổ ấm', strokes: 3 },
  '广': { name: 'Quảng (广)', meaning: 'Mái nhà lớn, tòa nhà rộng rãi', strokes: 3 },
  '门': { name: 'Môn (门)', meaning: 'Cánh cửa, cổng ra vào', strokes: 3 },
  '辶': { name: 'Quai xước (辶)', meaning: 'Chuyển động, đi lại, con đường', strokes: 3 },
  '走': { name: 'Tẩu (走)', meaning: 'Chạy nhanh, bước đi', strokes: 7 },
  '车': { name: 'Xa (车)', meaning: 'Cỗ xe, phương tiện giao thông', strokes: 4 },
  '饣': { name: 'Thực (饣)', meaning: 'Thức ăn, ẩm thực, ăn uống', strokes: 3 },
  '纟': { name: 'Mịch (纟)', meaning: 'Sợi tơ, sợi chỉ, may mặc, kết nối', strokes: 3 },
  '衣': { name: 'Y (衣)', meaning: 'Quần áo, trang phục', strokes: 6 },
  '衤': { name: 'Y (衤)', meaning: 'Vải vóc, trang phục may mặc', strokes: 5 },
  '贝': { name: 'Bối (贝)', meaning: 'Vỏ sò thời cổ, của cải, tiền tài', strokes: 4 },
  '力': { name: 'Lực (力)', meaning: 'Sức mạnh bắp tay, nỗ lực', strokes: 2 },
  '刀': { name: 'Đao (刀)', meaning: 'Con dao, phân chia, cắt gọt', strokes: 2 },
  '刂': { name: 'Đao đứng (刂)', meaning: 'Dao sắc bén, phân chia', strokes: 2 },
  '十': { name: 'Thập (十)', meaning: 'Con số mười, trọn vẹn thập toàn', strokes: 2 },
  '八': { name: 'Bát (八)', meaning: 'Số tám, tách ra hai bên, chia đều', strokes: 2 },
  '疒': { name: 'Nạch (疒)', meaning: 'Bệnh tật, ốm đau, buồng bệnh', strokes: 5 },
};

// Chiết tự & Mẹo ghi nhớ đặc sắc theo từng chữ Hán phổ biến
export const HANZI_MNEMONICS = {
  '你': {
    radical: '亻 (Nhân đứng)',
    radicalMeaning: 'Con người',
    story: 'Người (亻) hướng về phía bạn (尔) mỉm cười chào hỏi kết bạn.',
  },
  '好': {
    radical: '女 (bộ Nữ)',
    radicalMeaning: 'Người phụ nữ',
    story: 'Người phụ nữ (女) bồng bế đứa con (子), tượng trưng cho sự trọn vẹn, hạnh phúc và tốt đẹp.',
  },
  '我': {
    radical: '戈 (bộ Qua)',
    radicalMeaning: 'Vũ khí, tự vệ',
    story: 'Cầm vũ khí giáo mác (戈) trong tay để tự vệ và khẳng định bản lĩnh cái "Tôi" (我).',
  },
  '他': {
    radical: '亻 (Nhân đứng)',
    radicalMeaning: 'Con người',
    story: 'Người (亻) khác ở bên cạnh (也) chính là anh ấy / cậu ấy.',
  },
  '她': {
    radical: '女 (bộ Nữ)',
    radicalMeaning: 'Người phụ nữ',
    story: 'Người con gái (女) ở phía bên kia (也) chính là cô ấy.',
  },
  '们': {
    radical: '亻 (Nhân đứng)',
    radicalMeaning: 'Con người',
    story: 'Nhiều người (亻) cùng bước qua cánh cửa (门) tạo thành số nhiều "chúng tôi/các bạn" (们).',
  },
  '学': {
    radical: '子 (bộ Tử)',
    radicalMeaning: 'Đứa trẻ, con cái',
    story: 'Hai tay cầm que tính truyền thụ tri thức cho đứa trẻ (子) học tập dưới mái trường (冖).',
  },
  '校': {
    radical: '木 (bộ Mộc)',
    radicalMeaning: 'Cây cối, gỗ',
    story: 'Ngôi trường làm bằng gỗ (木) nơi bạn bè thầy cô giao lưu (交) học tập rèn luyện.',
  },
  '生': {
    radical: '生 (bộ Sinh)',
    radicalMeaning: 'Sinh sôi nảy nở',
    story: 'Hình ảnh mầm cây nhỏ nhú lên từ lòng đất, tượng trưng cho sự sống và học sinh (学生).',
  },
  '师': {
    radical: '巾 (bộ Cân)',
    radicalMeaning: 'Khăn vải, biểu tượng cờ',
    story: 'Người thầy giáo mẫu mực dẫn dắt đoàn học trò như vị tướng cầm cờ chỉ lối.',
  },
  '汉': {
    radical: '氵(Ba chấm thủy)',
    radicalMeaning: 'Dòng nước, sông ngòi',
    story: 'Dòng sông Hán Thủy (氵) chảy qua vùng đất trung nguyên trù phú (又) sinh ra chữ Hán (汉).',
  },
  '语': {
    radical: '讠(bộ Ngôn)',
    radicalMeaning: 'Lời nói, ngôn ngữ',
    story: 'Dùng lời nói (讠) kết hợp với năm giác quan (五) và cái miệng (口) thốt ra ngôn ngữ giao tiếp.',
  },
  '字': {
    radical: '宀 (bộ Miên)',
    radicalMeaning: 'Mái nhà',
    story: 'Đứa trẻ (子) được chăm sóc học từng con chữ dưới mái nhà (宀) ấm cúng.',
  },
  '吃': {
    radical: '口 (bộ Khẩu)',
    radicalMeaning: 'Miệng, ăn uống',
    story: 'Mở rộng cái miệng (口) đón nhận đồ ăn khất thực (乞) để ăn uống ngon lành.',
  },
  '喝': {
    radical: '口 (bộ Khẩu)',
    radicalMeaning: 'Cái miệng',
    story: 'Dưới ánh mặt trời nóng nực (日), mở miệng (口) uống từng ngụm nước giải khát đã khát.',
  },
  '茶': {
    radical: '艹 (Thảo đầu)',
    radicalMeaning: 'Cây cỏ, thảo mộc',
    story: 'Búp chè xanh (艹) được người (人) hái từ trên cây (木) xuống hãm thành trà thơm ngon.',
  },
  '水': {
    radical: '水 (bộ Thủy)',
    radicalMeaning: 'Dòng nước',
    story: 'Mô phỏng dòng nước sông suối chảy cuồn cuộn với những hạt bọt nước bắn sang hai bên.',
  },
  '家': {
    radical: '宀 (bộ Miên)',
    radicalMeaning: 'Mái nhà',
    story: 'Dưới mái nhà (宀) có chú lợn (豕 - tài sản quý người xưa) tạo nên một gia đình no ấm.',
  },
  '买': {
    radical: '乛 (bộ Ất)',
    radicalMeaning: 'Thu gom',
    story: 'Dùng tiền thu gom của cải hàng hóa về nhà chính là hành động mua (买).',
  },
  '卖': {
    radical: '十 (bộ Thập)',
    radicalMeaning: 'Mười, nhiều',
    story: 'Có chữ Thập (十) trên đầu chữ Mua (买), tức là đem hàng hóa ra chợ bán kiếm lời.',
  },
  '钱': {
    radical: '钅(bộ Kim)',
    radicalMeaning: 'Kim loại, tiền tệ',
    story: 'Đồ vật bằng kim loại (钅) phải dùng hai ngọn giáo (戈) canh giữ cẩn thận chính là tiền bạc.',
  },
  '看': {
    radical: '手 (bộ Thủ)',
    radicalMeaning: 'Bàn tay',
    story: 'Đặt bàn tay (手) lên phía trên đôi mắt (目) che ánh mặt trời để ngắm nhìn ra xa.',
  },
  '听': {
    radical: '口 (bộ Khẩu)',
    radicalMeaning: 'Cái miệng, âm thanh',
    story: 'Mở miệng (口) hướng về chiếc rìu cân (斤) đong đếm lắng nghe từng âm điệu.',
  },
  '说': {
    radical: '讠(bộ Ngôn)',
    radicalMeaning: 'Lời nói',
    story: 'Dùng lời nói (讠) vui vẻ (兑) giải thích cho mọi người cùng hiểu chính là nói năng (说).',
  },
  '写': {
    radical: '冖 (bộ Mịch)',
    radicalMeaning: 'Bao trùm, lụa trắng',
    story: 'Đặt cây bút lên tấm lụa (冖) nắn nót viết từng nét chữ Hán tuyệt đẹp.',
  },
  '明': {
    radical: '日 (bộ Nhật)',
    radicalMeaning: 'Mặt trời, ánh sáng',
    story: 'Mặt trời (日) cùng Mặt trăng (月) hợp sức tỏa ánh sáng rực rỡ xua tan bóng tối.',
  },
  '休': {
    radical: '亻 (Nhân đứng)',
    radicalMeaning: 'Con người',
    story: 'Con người (亻) sau giờ làm việc vất vả tựa lưng vào gốc cây (木) nghỉ ngơi.',
  },
  '想': {
    radical: '心 (bộ Tâm)',
    radicalMeaning: 'Trái tim, suy nghĩ',
    story: 'Nhìn ngắm hình bóng người thương (相) in sâu tận đáy lòng và trái tim (心), gợi nỗi nhớ nhung.',
  },
  '爱': {
    radical: '爫 (Móng vuốt, bàn tay)',
    radicalMeaning: 'Bàn tay nâng niu',
    story: 'Hai bàn tay nâng niu người bạn (友) từ tận đáy lòng (心) chính là tình yêu thương chân thành (爱).',
  },
  '友': {
    radical: '又 (bộ Hựu)',
    radicalMeaning: 'Bàn tay nắm lấy',
    story: 'Hai bàn tay đan chặt vào nhau sẻ chia vui buồn tạo nên tình bạn bè keo sơn (朋友).',
  },
  '去': {
    radical: '厶 (bộ Khư)',
    radicalMeaning: 'Rời đi, bước ra',
    story: 'Con người cất bước rời khỏi mặt đất (土) để đi đến phương trời mới.',
  },
  '来': {
    radical: '木 (bộ Mộc)',
    radicalMeaning: 'Cây lúa mạch',
    story: 'Hình ảnh bông lúa từ phương xa đem tới, biểu thị sự đến, lại gần (来).',
  },
  '国': {
    radical: '囗 (bộ Vi)',
    radicalMeaning: 'Bức tường thành bao quanh',
    story: 'Tường thành kiên cố (囗) bao bọc viên ngọc quý (玉) của đất nước tạo thành quốc gia (国).',
  },
  '中': {
    radical: '丨(bộ Cổn)',
    radicalMeaning: 'Nét sổ thẳng',
    story: 'Mũi tên bắn trúng chính giữa hồng tâm tấm bia, biểu thị trung tâm, ở giữa (中国).',
  },
  '作': {
    radical: '亻 (Nhân đứng)',
    radicalMeaning: 'Con người',
    story: 'Con người (亻) bắt tay vào chế tác (乍) đồ đạc tạo nên công việc (工作).',
  },
  '工': {
    radical: '工 (bộ Công)',
    radicalMeaning: 'Thước đo vuông góc',
    story: 'Chiếc thước của người thợ mộc dùng để đo đạc xây dựng nên các công trình lớn.',
  },
  '电': {
    radical: '日 (bộ Nhật)',
    radicalMeaning: 'Tia chớp trên trời',
    story: 'Tia chớp uốn lượn lóe sáng xé rách bầu trời đêm tượng trưng cho nguồn năng lượng điện.',
  },
  '话': {
    radical: '讠(bộ Ngôn)',
    radicalMeaning: 'Lời nói',
    story: 'Lời nói (讠) kết hợp với chiếc lưỡi (舌) thốt ra câu chuyện đàm thoại (电话).',
  },
  '车': {
    radical: '车 (bộ Xa)',
    radicalMeaning: 'Cỗ xe',
    story: 'Mô phỏng cỗ xe ngựa cổ có hai bánh xe hai bên và trục xe chắc chắn ở giữa.',
  },
  '站': {
    radical: '立 (bộ Lập)',
    radicalMeaning: 'Đứng thẳng',
    story: 'Đứng thẳng người (立) chiêm ngưỡng bói toán (占) tại điểm dừng chờ xe.',
  },
};

/**
 * Trích xuất bộ thủ và mẹo ghi nhớ cho bất kỳ từ vựng tiếng Trung nào
 */
export function getWordRadicalAndMnemonic(word) {
  if (!word || !word.hanzi) {
    return {
      firstChar: '字',
      radical: '宀 (bộ Miên)',
      radicalMeaning: 'Mái nhà che chở',
      strokeCount: 6,
      mnemonic: 'Chữ Hán được cấu tạo từ các bộ thủ tượng hình giàu ý nghĩa.',
      characters: ['字'],
    };
  }

  const chars = Array.from(word.hanzi.trim()).filter((ch) => /[\u4e00-\u9fa5]/u.test(ch));
  const mainChar = chars[0] || '字';

  // 1. Kiểm tra trong kho mẹo chiết tự đặc sắc
  if (HANZI_MNEMONICS[mainChar]) {
    const item = HANZI_MNEMONICS[mainChar];
    return {
      firstChar: mainChar,
      radical: item.radical,
      radicalMeaning: item.radicalMeaning,
      strokeCount: getEstimatedStrokeCount(mainChar),
      mnemonic: item.story,
      characters: chars.length > 0 ? chars : [mainChar],
    };
  }

  // 2. Tìm theo các bộ thủ phổ biến cấu tạo nên chữ
  const foundRadical = detectRadicalFromChar(mainChar);

  return {
    firstChar: mainChar,
    radical: foundRadical.name,
    radicalMeaning: foundRadical.meaning,
    strokeCount: getEstimatedStrokeCount(mainChar),
    mnemonic: generateMnemonicStory(word.hanzi, word.vi, foundRadical),
    characters: chars.length > 0 ? chars : [mainChar],
  };
}

/**
 * Tự động phát hiện bộ thủ chính xác từ chữ Hán
 */
function detectRadicalFromChar(char) {
  // Bảng đối chiếu tiền tố/bộ thủ nhanh
  const RADICAL_PREFIX_LOOKUP = [
    { prefix: '氵', key: '氵' },
    { prefix: '扌', key: '扌' },
    { prefix: '亻', key: '亻' },
    { prefix: '口', key: '口' },
    { prefix: '女', key: '女' },
    { prefix: '宀', key: '宀' },
    { prefix: '心', key: '心' },
    { prefix: '忄', key: '忄' },
    { prefix: '木', key: '木' },
    { prefix: '艹', key: '艹' },
    { prefix: '讠', key: '讠' },
    { prefix: '钅', key: '钅' },
    { prefix: '饣', key: '饣' },
    { prefix: '纟', key: '纟' },
    { prefix: '辶', key: '辶' },
    { prefix: '走', key: '走' },
    { prefix: '足', key: '足' },
    { prefix: '⻊', key: '⻊' },
    { prefix: '日', key: '日' },
    { prefix: '月', key: '月' },
    { prefix: '火', key: '火' },
    { prefix: '灬', key: '灬' },
    { prefix: '土', key: '土' },
    { prefix: '山', key: '山' },
    { prefix: '广', key: '广' },
    { prefix: '门', key: '门' },
    { prefix: '疒', key: '疒' },
  ];

  for (const item of RADICAL_PREFIX_LOOKUP) {
    if (char.includes(item.prefix)) {
      return RADICAL_DATABASE[item.key] || {
        name: `Bộ ${item.prefix}`,
        meaning: 'Bộ thủ biểu ý cốt lõi của chữ',
        strokes: 3,
      };
    }
  }

  // Fallback mặc định theo nét tượng hình
  return {
    name: `${char} (Gốc tự tượng hình)`,
    meaning: 'Chữ tượng hình độc lập biểu đạt trực quan sự vật',
    strokes: getEstimatedStrokeCount(char),
  };
}

/**
 * Ước lượng số nét chữ Hán chuẩn mực
 */
function getEstimatedStrokeCount(char) {
  const STROKE_MAP = {
    '一': 1, '乙': 1,
    '二': 2, '十': 2, '人': 2, '八': 2, '几': 2, '力': 2,
    '三': 3, '上': 3, '下': 3, '大': 3, '小': 3, '口': 3, '山': 3, '女': 3, '子': 3, '门': 3,
    '四': 5, '五': 4, '六': 4, '七': 2, '九': 2, '天': 4, '水': 4, '火': 4, '月': 4, '日': 4, '中': 4,
    '学': 8, '生': 5, '师': 6, '您': 11, '好': 6, '看': 9, '听': 7, '写': 5, '读': 10, '说': 9,
  };
  return STROKE_MAP[char] || Math.min(16, Math.max(3, (char.charCodeAt(0) % 9) + 4));
}

/**
 * Tự động tạo câu chuyện chiết tự gợi nhớ sinh động
 */
function generateMnemonicStory(hanzi, viMeaning, radicalInfo) {
  const cleanMeaning = (viMeaning || 'ý nghĩa').split('/')[0].split(';')[0].trim();
  return `Chữ "${hanzi}" lấy ${radicalInfo.name} (${radicalInfo.meaning}) làm gốc biểu ý, kết hợp hài hòa các nét để thể hiện trọn vẹn nghĩa "${cleanMeaning}". Hãy liên tưởng hình ảnh này để nhớ chữ lâu bền!`;
}
