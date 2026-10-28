/**
 * Real-life Chinese Communicative Scenarios Database
 * Contains 12 practical daily scenarios with rich vocabulary, step-by-step challenges, audio, and cultural context.
 */

export const REAL_LIFE_SCENARIOS = [
  {
    id: 'restaurant',
    title: 'Ở Nhà Hàng (在餐厅点餐)',
    sub: 'Gọi món, dặn khẩu vị & thanh toán',
    icon: '🍜',
    category: 'dining',
    categoryName: 'Ăn Uống & Ẩm Thực',
    context: 'Bạn đang đi ăn tối tại một nhà hàng Trung Quốc nổi tiếng. Hãy gọi món ngon, dặn nhân viên không bỏ quá nhiều ớt và thanh toán tiện lợi.',
    vocabList: [
      { hanzi: '服务员', pinyin: 'fúwùyuán', vi: 'Phục vụ viên' },
      { hanzi: '菜单', pinyin: 'càidān', vi: 'Thực đơn' },
      { hanzi: '点菜', pinyin: 'diǎncài', vi: 'Gọi món' },
      { hanzi: '买单', pinyin: 'mǎidān', vi: 'Thanh toán' },
      { hanzi: '一杯', pinyin: 'yībēi', vi: 'Một cốc/ly' },
      { hanzi: '冰咖啡', pinyin: 'bīng kāfēi', vi: 'Cà phê đá' },
      { hanzi: '不要辣', pinyin: 'bú yào là', vi: 'Không cay' },
      { hanzi: '米饭', pinyin: 'mǐfàn', vi: 'Cơm trắng' },
    ],
    challenges: [
      {
        promptVi: 'Phục vụ ơi, cho tôi xem thực đơn, tôi muốn gọi món.',
        grammarHint: 'Xưng hô (服务员) + Dấu phẩy + Cho tôi xem (给我看一下) + Thực đơn (菜单) + Dấu phẩy + Tôi muốn gọi món (我想点菜).',
        correctOrder: ['服务员', '，', '给我看一下', '菜单', '，', '我想点菜'],
        audioFull: '服务员，给我看一下菜单，我想点菜',
        explanation: 'Cách gọi nhân viên chuẩn mực trong nhà hàng: "服务员，看一下菜单". Mẫu câu "我想 + V" biểu thị mong muốn lịch sự.'
      },
      {
        promptVi: 'Tôi muốn uống một ly cà phê đá, đừng cho quá ngọt.',
        grammarHint: 'Tôi (我) + Muốn (想) + Uống (喝) + Một ly cà phê đá (一杯冰咖啡) + Dấu phẩy + Đừng quá ngọt (别太甜).',
        correctOrder: ['我', '想', '喝', '一杯冰咖啡', '，', '别太甜'],
        audioFull: '我想喝一杯冰咖啡，别太甜',
        explanation: 'Cấu trúc lượng từ tiếng Trung: Số từ + Lượng từ + Danh từ (一杯 + 冰咖啡). "别..." là câu mệnh lệnh phủ định (đừng...).'
      },
      {
        promptVi: 'Món này đừng làm cay, thêm cho tôi hai bát cơm trắng.',
        grammarHint: 'Món này (这个菜) + Đừng cay (不要辣) + Dấu phẩy + Cho tôi thêm (再给我) + Hai bát cơm trắng (两碗米饭).',
        correctOrder: ['这个菜', '不要辣', '，', '再给我', '两碗米饭'],
        audioFull: '这个菜不要辣，再给我两碗米饭',
        explanation: 'Khẩu vị ẩm thực Trung Quốc thường khá cay và nhiều dầu mỡ, người Việt sang thường dặn: "不要太辣" (đừng cay quá) hoặc "微辣" (cay nhẹ).'
      },
      {
        promptVi: 'Chúng tôi ăn xong rồi, tính tiền giúp tôi nhé!',
        grammarHint: 'Chúng tôi (我们) + Ăn no rồi (吃饱了) + Dấu phẩy + Phục vụ tính tiền (服务员买单) + !',
        correctOrder: ['我们', '吃饱了', '，', '服务员买单', '！'],
        audioFull: '我们吃饱了，服务员买单！',
        explanation: 'Ở miền Nam Trung Quốc người ta thường nói "买单 (mǎidān)", còn miền Bắc thường dùng "结账 (jiézhàng)".'
      }
    ]
  },
  {
    id: 'taxi',
    title: 'Taxi & Hỏi Đường (打车与问路)',
    sub: 'Chỉ đường & đi tàu điện ngầm',
    icon: '🚕',
    category: 'travel',
    categoryName: 'Du Lịch & Di Chuyển',
    context: 'Bạn vừa xuống sân bay và cần gọi taxi về khách sạn, sau đó đi bộ hỏi đường đến ga tàu điện ngầm gần nhất.',
    vocabList: [
      { hanzi: '师傅', pinyin: 'shīfu', vi: 'Bác tài xế' },
      { hanzi: '火车站', pinyin: 'huǒchēzhàn', vi: 'Ga tàu hỏa' },
      { hanzi: '地铁站', pinyin: 'dìtiězhàn', vi: 'Ga tàu điện ngầm' },
      { hanzi: '往左拐', pinyin: 'wǎng zuǒ guǎi', vi: 'Rẽ trái' },
      { hanzi: '往右拐', pinyin: 'wǎng yòu guǎi', vi: 'Rẽ phải' },
      { hanzi: '一直走', pinyin: 'yīzhí zǒu', vi: 'Đi thẳng' },
      { hanzi: '十字路口', pinyin: 'shízì lùkǒu', vi: 'Ngã tư đường' },
    ],
    challenges: [
      {
        promptVi: 'Bác tài ơi, làm phiền đưa tôi đến ga tàu hỏa.',
        grammarHint: 'Bác tài (师傅) + Dấu phẩy + Làm phiền (麻烦) + Đưa tôi đi (送我去) + Ga tàu hỏa (火车站).',
        correctOrder: ['师傅', '，', '麻烦', '送我去', '火车站'],
        audioFull: '师傅，麻烦送我去火车站',
        explanation: 'Trong tiếng Trung, gọi tài xế taxi là "师傅 (shīfu)" thể hiện sự tôn trọng và thân thiện.'
      },
      {
        promptVi: 'Xin hỏi, đi đến trạm tàu điện ngầm đi như thế nào?',
        grammarHint: 'Xin hỏi (请问) + Dấu phẩy + Đi (去) + Trạm tàu điện ngầm (地铁站) + Đi như thế nào (怎么走) + ?',
        correctOrder: ['请问', '，', '去', '地铁站', '怎么走', '？'],
        audioFull: '请问，去地铁站怎么走？',
        explanation: 'Mẫu câu hỏi đường kinh điển trong tiếng Hán: "请问 + 去 + Địa điểm + 怎么走？".'
      },
      {
        promptVi: 'Đi thẳng về phía trước, đến ngã tư thì rẽ trái.',
        grammarHint: 'Đi thẳng phía trước (往前一直走) + Dấu phẩy + Đến ngã tư (到十字路口) + Rẽ trái (往左拐).',
        correctOrder: ['往前一直走', '，', '到十字路口', '往左拐'],
        audioFull: '往前一直走，到十字路口往左拐',
        explanation: 'Chỉ hướng đi: "往 + Hướng + Động từ" (往左拐: rẽ trái, 往右拐: rẽ phải, 往前走: đi về phía trước).'
      }
    ]
  },
  {
    id: 'shopping',
    title: 'Mua Sắm & Mặc Cả (购物与砍价)',
    sub: 'Hỏi giá, đổi cỡ & thanh toán QR',
    icon: '🛍️',
    category: 'shopping',
    categoryName: 'Mua Sắm & Tiêu Dùng',
    context: 'Bạn đang dạo phố mua sắm quần áo và đồ lưu niệm. Hãy hỏi giá món đồ ưng ý, thử size và mặc cả giá thật khéo.',
    vocabList: [
      { hanzi: '多少钱', pinyin: 'duōshǎo qián', vi: 'Bao nhiêu tiền' },
      { hanzi: '太贵了', pinyin: 'tài guì le', vi: 'Đắt quá rồi' },
      { hanzi: '便宜一点', pinyin: 'piányi yīdiǎn', vi: 'Bớt chút đi' },
      { hanzi: '试衣间', pinyin: 'shìyījiān', vi: 'Phòng thử đồ' },
      { hanzi: '大一号', pinyin: 'dà yī hào', vi: 'Lớn hơn 1 size' },
      { hanzi: '微信支付', pinyin: 'Wēixìn zhīfù', vi: 'Thanh toán WeChat' },
    ],
    challenges: [
      {
        promptVi: 'Ông chủ ơi, chiếc áo này bao nhiêu tiền một cái?',
        grammarHint: 'Ông chủ (老板) + Dấu phẩy + Chiếc áo này (这件衣服) + Bao nhiêu tiền một cái (多少钱一件) + ?',
        correctOrder: ['老板', '，', '这件衣服', '多少钱一件', '？'],
        audioFull: '老板，这件衣服多少钱一件？',
        explanation: 'Lượng từ dùng cho quần áo là "件 (jiàn)". Mẫu câu hỏi giá: "多少钱 + Lượng từ + Danh từ?".'
      },
      {
        promptVi: 'Đắt quá rồi! Rẻ hơn một chút được không?',
        grammarHint: 'Đắt quá rồi (太贵了) + Dấu phẩy + Rẻ hơn chút đi (便宜一点吧) + Được không (行不行) + ?',
        correctOrder: ['太贵了', '！', '便宜一点吧', '，', '行不行', '？'],
        audioFull: '太贵了！便宜一点吧，行不行？',
        explanation: 'Cụm từ "太...了" biểu thị sự thái quá. Người bán hàng Trung Quốc rất quen với việc mặc cả: "便宜一点吧".'
      },
      {
        promptVi: 'Tôi có thể dùng WeChat Pay để quét mã thanh toán không?',
        grammarHint: 'Tôi có thể (我可以) + Dùng WeChat (用微信) + Quét mã thanh toán (扫码支付) + Được không (吗) + ?',
        correctOrder: ['我可以', '用微信', '扫码支付', '吗', '？'],
        audioFull: '我可以用微信扫码支付吗？',
        explanation: 'Tại Trung Quốc hiện nay hầu hết giao dịch đều không dùng tiền mặt mà dùng quét mã: "扫码支付 (sǎomǎ zhīfù)".'
      }
    ]
  },
  {
    id: 'hotel',
    title: 'Khách Sạn & Nhận Phòng (酒店入住)',
    sub: 'Đặt phòng, thẻ phòng & hỏi WiFi',
    icon: '🏨',
    category: 'travel',
    categoryName: 'Du Lịch & Di Chuyển',
    context: 'Bạn vừa đến quầy lễ tân khách sạn để làm thủ tục nhận phòng (Check-in), hỏi mật khẩu WiFi và giờ ăn sáng.',
    vocabList: [
      { hanzi: '预订', pinyin: 'yùdìng', vi: 'Đặt trước' },
      { hanzi: '护照', pinyin: 'hùzhào', vi: 'Hộ chiếu' },
      { hanzi: '房卡', pinyin: 'fángkǎ', vi: 'Thẻ phòng' },
      { hanzi: '押金', pinyin: 'yājīn', vi: 'Tiền đặt cọc' },
      { hanzi: '密码', pinyin: 'mìmǎ', vi: 'Mật khẩu' },
      { hanzi: '退房', pinyin: 'tuìfáng', vi: 'Trả phòng' },
    ],
    challenges: [
      {
        promptVi: 'Chào bạn, tôi đã đặt trước một phòng đôi trên mạng.',
        grammarHint: 'Xin chào (你好) + Dấu phẩy + Tôi trên mạng (我在网上) + Đã đặt trước (预订了) + Một phòng đôi (一间双人房).',
        correctOrder: ['你好', '，', '我在网上', '预订了', '一间双人房'],
        audioFull: '你好，我在网上预订了一间双人房',
        explanation: 'Phòng đơn là "单人间", phòng đôi là "双人房", phòng tiêu chuẩn là "标准间". Lượng từ phòng là "间 (jiān)".'
      },
      {
        promptVi: 'Đây là hộ chiếu của tôi, xin hỏi mật khẩu WiFi là bao nhiêu?',
        grammarHint: 'Đây là hộ chiếu của tôi (这是我的护照) + Dấu phẩy + Xin hỏi (请问) + Mật khẩu WiFi (WiFi密码) + Là bao nhiêu (是多少) + ?',
        correctOrder: ['这是我的护照', '，', '请问', 'WiFi密码', '是多少', '？'],
        audioFull: '这是我的护照，请问WiFi密码是多少？',
        explanation: 'Cấu trúc hỏi thông tin số điện thoại / mật khẩu: "...是多少？" (Ví dụ: 你的电话号码是多少？).'
      },
      {
        promptVi: 'Ngày mai mấy giờ trả phòng, và bữa sáng bắt đầu lúc mấy giờ?',
        grammarHint: 'Ngày mai mấy giờ trả phòng (明天几点退房) + Dấu phẩy + Bữa sáng mấy giờ bắt đầu (早餐几点开始) + ?',
        correctOrder: ['明天几点退房', '，', '早餐几点开始', '？'],
        audioFull: '明天几点退房，早餐几点开始？',
        explanation: 'Giờ check-out thông thường ở các khách sạn Trung Quốc là trước 12:00 trưa (中午12点以前).'
      }
    ]
  },
  {
    id: 'hospital',
    title: 'Bệnh Viện & Mua Thuốc (看病与买药)',
    sub: 'Tả triệu chứng cảm sốt & liều dùng',
    icon: '🏥',
    category: 'daily',
    categoryName: 'Sức Khỏe & Đời Sống',
    context: 'Bạn cảm thấy không khỏe, bị sốt và đau đầu do thời tiết thay đổi. Bạn đến gặp bác sĩ và ra nhà thuốc mua thuốc uống.',
    vocabList: [
      { hanzi: '舒服', pinyin: 'shūfu', vi: 'Dễ chịu/khỏe' },
      { hanzi: '感冒', pinyin: 'gǎnmào', vi: 'Cảm cúm' },
      { hanzi: '发烧', pinyin: 'fāshāo', vi: 'Bị sốt' },
      { hanzi: '头疼', pinyin: 'tóuténg', vi: 'Đau đầu' },
      { hanzi: '吃药', pinyin: 'chīyào', vi: 'Uống thuốc' },
      { hanzi: '多喝水', pinyin: 'duō hē shuǐ', vi: 'Uống nhiều nước' },
    ],
    challenges: [
      {
        promptVi: 'Bác sĩ ơi, từ hôm qua đến giờ tôi cảm thấy toàn thân không khỏe.',
        grammarHint: 'Bác sĩ (医生) + Dấu phẩy + Tôi từ hôm qua (我从昨天开始) + Cảm thấy (觉得) + Cả người không khỏe (浑身不舒服).',
        correctOrder: ['医生', '，', '我从昨天开始', '觉得', '浑身不舒服'],
        audioFull: '医生，我从昨天开始觉得浑身不舒服',
        explanation: 'Khi nói bị ốm khó chịu, người Trung Quốc thường nói "不舒服" (không được thoải mái/khỏe).'
      },
      {
        promptVi: 'Tôi bị đau đầu dữ dội và có vẻ như đang sốt 38 độ.',
        grammarHint: 'Tôi đau đầu (我头疼) + Dấu phẩy + Hơi sốt (有点发烧) + Ba mươi tám độ (三十八度).',
        correctOrder: ['我头疼', '，', '有点发烧', '三十八度'],
        audioFull: '我头疼，有点发烧三十八度',
        explanation: 'Trong tiếng Hán, triệu chứng đau đầu là "头疼", đau bụng là "肚子疼", sốt là "发烧".'
      },
      {
        promptVi: 'Loại thuốc này mỗi ngày uống ba lần, mỗi lần hai viên sau bữa ăn.',
        grammarHint: 'Loại thuốc này (这种药) + Mỗi ngày uống ba lần (每天吃三次) + Dấu phẩy + Sau bữa ăn hai viên (饭后两片).',
        correctOrder: ['这种药', '每天吃三次', '，', '饭后两片'],
        audioFull: '这种药每天吃三次，饭后两片',
        explanation: 'Lượng từ dùng cho viên thuốc là "片 (piàn)" hoặc "粒 (lì)". Uống thuốc trong tiếng Trung là "吃药" (nghĩa đen là ăn thuốc).'
      }
    ]
  },
  {
    id: 'cafe',
    title: 'Cà Phê & Trà Sữa (咖啡馆与奶茶)',
    sub: 'Độ ngọt, đá & uống tại chỗ hay mang đi',
    icon: '☕',
    category: 'dining',
    categoryName: 'Ăn Uống & Ẩm Thực',
    context: 'Vào quán cà phê hiện đại hoặc tiệm trà sữa nổi tiếng để gọi thức uống mang đi (Take away) với các tùy chọn chuẩn vị.',
    vocabList: [
      { hanzi: '冰块', pinyin: 'bīngkuài', vi: 'Viên đá' },
      { hanzi: '微糖', pinyin: 'wēi táng', vi: 'Ít đường (30%)' },
      { hanzi: '少冰', pinyin: 'shǎo bīng', vi: 'Ít đá' },
      { hanzi: '打包', pinyin: 'dǎbāo', vi: 'Mang về / Đóng gói' },
      { hanzi: '在这儿喝', pinyin: 'zài zhèr hē', vi: 'Uống tại quán' },
      { hanzi: '大杯', pinyin: 'dà bēi', vi: 'Ly lớn (Size L)' },
    ],
    challenges: [
      {
        promptVi: 'Cho tôi một ly trà sữa trân châu lớn, ít đường và ít đá.',
        grammarHint: 'Đến một ly (来一杯) + Trà sữa trân châu lớn (大杯珍珠奶茶) + Dấu phẩy + Ít đường ít đá (微糖少冰).',
        correctOrder: ['来一杯', '大杯珍珠奶茶', '，', '微糖少冰'],
        audioFull: '来一杯大杯珍珠奶茶，微糖少冰',
        explanation: '"微糖少冰" là cụm từ cửa miệng cực kỳ phổ biến của giới trẻ Trung Quốc khi order trà sữa!'
      },
      {
        promptVi: 'Tôi muốn đóng gói mang đi, làm phiền cho tôi thêm một cái túi.',
        grammarHint: 'Tôi mang đi (我要打包) + Dấu phẩy + Làm phiền cho tôi (麻烦给我) + Một chiếc túi (一个袋子).',
        correctOrder: ['我要打包', '，', '麻烦给我', '一个袋子'],
        audioFull: '我要打包，麻烦给我一个袋子',
        explanation: 'Nếu uống tại chỗ: "在店里喝" hoặc "堂食 (tángshí)". Nếu mang về: "打包 (dǎbāo)" hoặc "带走 (dàizǒu)".'
      }
    ]
  },
  {
    id: 'airport',
    title: 'Sân Bay & Ga Tàu (机场与高铁站)',
    sub: 'Làm thủ tục, hành lý & cửa lên máy bay',
    icon: '✈️',
    category: 'travel',
    categoryName: 'Du Lịch & Di Chuyển',
    context: 'Làm thủ tục gửi hành lý tại quầy check-in sân bay, hỏi cửa ra máy bay và giờ tàu cao tốc khởi hành.',
    vocabList: [
      { hanzi: '登机牌', pinyin: 'dēngjīpái', vi: 'Thẻ lên máy bay' },
      { hanzi: '登机口', pinyin: 'dēngjīkǒu', vi: 'Cửa lên máy bay' },
      { hanzi: '行李箱', pinyin: 'xínglixiāng', vi: 'Vali hành lý' },
      { hanzi: '托运', pinyin: 'tuōyùn', vi: 'Ký gửi hành lý' },
      { hanzi: '准时', pinyin: 'zhǔnshí', vi: 'Đúng giờ' },
      { hanzi: '起飞', pinyin: 'qǐfēi', vi: 'Cất cánh' },
    ],
    challenges: [
      {
        promptVi: 'Tôi muốn làm thủ tục lên máy bay và ký gửi một kiện hành lý.',
        grammarHint: 'Tôi muốn làm (我要办理) + Thẻ lên máy bay (登机牌) + Dấu phẩy + Ký gửi một kiện hành lý (托运一件行李).',
        correctOrder: ['我要办理', '登机牌', '，', '托运一件行李'],
        audioFull: '我要办理登机牌，托运一件行李',
        explanation: 'Ký gửi hành lý là "托运 (tuōyùn)", hành lý xách tay lên máy bay là "随身行李 (suíshēn xíngli)".'
      },
      {
        promptVi: 'Xin hỏi, cửa lên máy bay số 25 đi lối nào vậy?',
        grammarHint: 'Xin hỏi (请问) + Dấu phẩy + Cửa lên máy bay số 25 (二十五号登机口) + Đi như thế nào (怎么走) + ?',
        correctOrder: ['请问', '，', '二十五号登机口', '怎么走', '？'],
        audioFull: '请问，二十五号登机口怎么走？',
        explanation: 'Số cửa / số cổng: Con số + 号 (hào) + 登机口 (Ví dụ: 12号登机口).'
      }
    ]
  },
  {
    id: 'delivery',
    title: 'Nhận Hàng & Shipper (快递与外卖)',
    sub: 'Nghe điện thoại shipper & lấy bưu kiện',
    icon: '📦',
    category: 'daily',
    categoryName: 'Sức Khỏe & Đời Sống',
    context: 'Shipper giao đồ ăn hoặc chuyển phát nhanh gọi điện báo hàng đã đến dưới sảnh chung cư.',
    vocabList: [
      { hanzi: '快递', pinyin: 'kuàidì', vi: 'Chuyển phát nhanh' },
      { hanzi: '外卖', pinyin: 'wàimài', vi: 'Đồ ăn giao tận nơi' },
      { hanzi: '下楼', pinyin: 'xià lóu', vi: 'Xuống dưới lầu' },
      { hanzi: '门口', pinyin: 'ménkǒu', vi: 'Cổng / Cửa ra vào' },
      { hanzi: '柜子', pinyin: 'guìzi', vi: 'Tủ gửi đồ thông minh' },
    ],
    challenges: [
      {
        promptVi: 'Xin chào, đồ ăn của bạn đã được giao đến dưới lầu rồi.',
        grammarHint: 'Xin chào (你好) + Dấu phẩy + Đồ ăn ngoài của bạn (你的外卖) + Đã giao đến (已经送到) + Dưới lầu rồi (楼下了).',
        correctOrder: ['你好', '，', '你的外卖', '已经送到', '楼下了'],
        audioFull: '你好，你的外卖已经送到楼下了',
        explanation: 'Giao đồ ăn tận nơi (Meituan, Ele.me) ở Trung Quốc rất thịnh hành, shipper thường gọi báo: "外卖到了".'
      },
      {
        promptVi: 'Làm phiền bạn để bưu kiện ở tủ gửi đồ thông minh ở cổng giúp tôi.',
        grammarHint: 'Làm phiền bạn (麻烦你) + Để bưu kiện (把快递放在) + Tủ gửi đồ ở cổng (门口的快递柜).',
        correctOrder: ['麻烦你', '把快递放在', '门口的快递柜'],
        audioFull: '麻烦你把快递放在门口的快递柜',
        explanation: 'Các khu chung cư Trung Quốc đều có tủ giữ đồ tự động "快递柜 (kuàidìguì)" để người nhận mở bằng mã OTP.'
      }
    ]
  },
  {
    id: 'renting',
    title: 'Thuê Nhà & Cuộc Sống (租房生活)',
    sub: 'Hỏi giá thuê, xem phòng & ban công',
    icon: '🏠',
    category: 'daily',
    categoryName: 'Sức Khỏe & Đời Sống',
    context: 'Đi xem căn hộ chung cư cho thuê gần trường đại học hoặc công ty, trao đổi về tiền cọc và nội thất.',
    vocabList: [
      { hanzi: '房租', pinyin: 'fángzū', vi: 'Tiền thuê nhà' },
      { hanzi: '空调', pinyin: 'kōngtiáo', vi: 'Máy điều hòa' },
      { hanzi: '阳台', pinyin: 'yángtái', vi: 'Ban công' },
      { hanzi: '按月付', pinyin: 'àn yuè fù', vi: 'Thanh toán theo tháng' },
      { hanzi: '交通方便', pinyin: 'jiāotōng fāngbiàn', vi: 'Giao thông thuận tiện' },
    ],
    challenges: [
      {
        promptVi: 'Xin hỏi, căn nhà này mỗi tháng tiền thuê là bao nhiêu?',
        grammarHint: 'Xin hỏi (请问) + Dấu phẩy + Căn nhà này (这套房子) + Tiền thuê mỗi tháng (每个月房租) + Là bao nhiêu (是多少) + ?',
        correctOrder: ['请问', '，', '这套房子', '每个月房租', '是多少', '？'],
        audioFull: '请问，这套房子每个月房租是多少？',
        explanation: 'Lượng từ dùng cho căn nhà/căn hộ là "套 (tào)" (一套房子: một căn hộ).'
      },
      {
        promptVi: 'Phòng này có ban công lớn, giao thông đi lại cũng rất thuận tiện.',
        grammarHint: 'Căn phòng này (这个房间) + Có ban công lớn (有个大阳台) + Dấu phẩy + Giao thông cũng rất tiện (交通也很方便).',
        correctOrder: ['这个房间', '有个大阳台', '，', '交通也很方便'],
        audioFull: '这个房间有个大阳台，交通也很方便',
        explanation: 'Gần tàu điện ngầm và trạm xe buýt thường được mô tả là "交通便利" hoặc "交通方便".'
      }
    ]
  },
  {
    id: 'office',
    title: 'Công Sở & Công Việc (职场与办公)',
    sub: 'Hẹn giờ họp, gửi tài liệu & báo cáo',
    icon: '💼',
    category: 'work',
    categoryName: 'Công Sở & Học Tập',
    context: 'Làm việc trong môi trường văn phòng: Báo cáo tiến độ với sếp, hẹn giờ họp và gửi email tài liệu.',
    vocabList: [
      { hanzi: '开会', pinyin: 'kāihuì', vi: 'Mở cuộc họp' },
      { hanzi: '准时', pinyin: 'zhǔnshí', vi: 'Đúng giờ' },
      { hanzi: '发邮件', pinyin: 'fā yóujiàn', vi: 'Gửi thư điện tử' },
      { hanzi: '报告', pinyin: 'bàogào', vi: 'Bản báo cáo' },
      { hanzi: '经理', pinyin: 'jīnglǐ', vi: 'Giám đốc/Quản lý' },
    ],
    challenges: [
      {
        promptVi: 'Cuộc họp chiều nay lúc hai giờ rưỡi, xin mọi người hãy đến đúng giờ.',
        grammarHint: 'Chiều nay hai giờ rưỡi họp (今天下午两点半开会) + Dấu phẩy + Xin mọi người (请大家) + Đến đúng giờ (准时参加).',
        correctOrder: ['今天下午两点半开会', '，', '请大家', '准时参加'],
        audioFull: '今天下午两点半开会，请大家准时参加',
        explanation: 'Trong tiếng Hán, trạng từ chỉ thời gian luôn đứng trước động từ: "下午两点半开会".'
      },
      {
        promptVi: 'Tôi đã gửi bản báo cáo công việc vào hòm thư điện tử của bạn rồi.',
        grammarHint: 'Tôi đã (我已经) + Gửi báo cáo công việc (把工作报告) + Gửi vào hòm thư bạn (发到你的邮箱了).',
        correctOrder: ['我已经', '把工作报告', '发到你的邮箱了'],
        audioFull: '我已经把工作报告发到你的邮箱了',
        explanation: 'Cấu trúc câu chữ "把 (bǎ)" cực kỳ phổ biến trong giao tiếp công sở: S + 把 + O + V + Kết quả.'
      }
    ]
  },
  {
    id: 'bank',
    title: 'Ngân Hàng & Ví Điện Tử (银行与支付)',
    sub: 'Mở thẻ ngân hàng & liên kết WeChat/Alipay',
    icon: '🏦',
    category: 'shopping',
    categoryName: 'Mua Sắm & Tiêu Dùng',
    context: 'Đến quầy giao dịch ngân hàng để mở tài khoản, lấy thẻ ATM và liên kết với ứng dụng thanh toán điện tử.',
    vocabList: [
      { hanzi: '银行卡', pinyin: 'yínhángkǎ', vi: 'Thẻ ngân hàng' },
      { hanzi: '开户', pinyin: 'kāihù', vi: 'Mở tài khoản' },
      { hanzi: '绑定', pinyin: 'bǎngdìng', vi: 'Liên kết/kết nối' },
      { hanzi: '支付宝', pinyin: 'Zhīfùbǎo', vi: 'Ví Alipay' },
      { hanzi: '零钱', pinyin: 'língqián', vi: 'Tiền lẻ' },
    ],
    challenges: [
      {
        promptVi: 'Tôi là lưu học sinh, tôi muốn làm một chiếc thẻ ngân hàng.',
        grammarHint: 'Tôi là lưu học sinh (我是留学生) + Dấu phẩy + Tôi muốn làm (我想办) + Một thẻ ngân hàng (一张银行卡).',
        correctOrder: ['我是留学生', '，', '我想办', '一张银行卡'],
        audioFull: '我是留学生，我想办一张银行卡',
        explanation: 'Động từ làm thủ tục giấy tờ, thẻ là "办 (bàn)" (办卡, 办签证, 办护照). Lượng từ của thẻ là "张 (zhāng)".'
      },
      {
        promptVi: 'Chiếc thẻ này có thể liên kết trực tiếp với WeChat và Alipay không?',
        grammarHint: 'Chiếc thẻ này (这张卡) + Có thể trực tiếp liên kết (可以直接绑定) + WeChat và Alipay không (微信和支付宝吗) + ?',
        correctOrder: ['这张卡', '可以直接绑定', '微信和支付宝吗', '？'],
        audioFull: '这张卡可以直接绑定微信和支付宝吗？',
        explanation: '"绑定 (bǎngdìng)" là thuật ngữ công nghệ rất quen thuộc để chỉ việc liên kết thẻ vào app di động.'
      }
    ]
  },
  {
    id: 'study',
    title: 'Trường Học & Thư Viện (校园与图书馆)',
    sub: 'Mượn sách, hỏi phòng học & ôn tập HSK',
    icon: '🎓',
    category: 'work',
    categoryName: 'Công Sở & Học Tập',
    context: 'Giao tiếp trong trường đại học: Đi tìm phòng học, mượn sách tham khảo tại thư viện và rủ bạn cùng ôn tập HSK.',
    vocabList: [
      { hanzi: '图书馆', pinyin: 'túshūguǎn', vi: 'Thư viện' },
      { hanzi: '借书', pinyin: 'jiè shū', vi: 'Mượn sách' },
      { hanzi: '自习室', pinyin: 'zìxíshì', vi: 'Phòng tự học' },
      { hanzi: '复习', pinyin: 'fùxí', vi: 'Ôn tập' },
      { hanzi: '考试', pinyin: 'kǎoshì', vi: 'Kỳ thi' },
    ],
    challenges: [
      {
        promptVi: 'Cuối tuần này chúng mình cùng đến thư viện tự học ôn thi nhé.',
        grammarHint: 'Cuối tuần này (这个周末) + Chúng mình cùng đi (我们一起去) + Thư viện phòng tự học (图书馆自习室) + Ôn thi nhé (复习考试吧).',
        correctOrder: ['这个周末', '我们一起去', '图书馆自习室', '复习考试吧'],
        audioFull: '这个周末我们一起去图书馆自习室复习考试吧',
        explanation: '"自习室 (zìxíshì)" là phòng tự học yên tĩnh cực kỳ phổ biến trong tất cả các trường học ở Trung Quốc.'
      },
      {
        promptVi: 'Quyển sách luyện thi HSK này có thể mượn trong bao lâu?',
        grammarHint: 'Quyển sách này (这本HSK书) + Có thể mượn (可以借) + Bao lâu (多长时间) + ?',
        correctOrder: ['这本HSK书', '可以借', '多长时间', '？'],
        audioFull: '这本HSK书可以借多长时间？',
        explanation: 'Hỏi khoảng thời gian: "...多长时间？" (bao lâu). Lượng từ dùng cho sách là "本 (běn)".'
      }
    ]
  }
];
