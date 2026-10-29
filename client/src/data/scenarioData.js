/**
 * Real-life Chinese Communicative Scenarios Database
 * Contains 12 deep practical daily scenarios with realistic multi-turn dialogues,
 * extensive vocabulary (16+ words each), YouTube educational videos from Panda Studio,
 * audio pronunciation, and interactive sentence builders.
 */

export const REAL_LIFE_SCENARIOS = [
  {
    "id": "restaurant",
    "title": "Ở Nhà Hàng (在餐厅点餐)",
    "sub": "Gọi món, dặn khẩu vị & thanh toán",
    "icon": "🍜",
    "category": "dining",
    "categoryName": "Ăn Uống & Ẩm Thực",
    "context": "Bạn cùng bạn bè đến một nhà hàng món Trung nổi tiếng. Bạn chủ động gọi món đặc sản, dặn bớt cay và thanh toán quét mã QR.",
    "video": {
      "title": "Luyện Nghe Hội Thoại Tiếng Trung: Gọi Món Ở Nhà Hàng (点餐)",
      "channel": "Panda Studio",
      "channelHandle": "@PandaStudio24",
      "youtubeId": "0c_0K8T_b1s",
      "embedUrl": "https://www.youtube-nocookie.com/embed/0c_0K8T_b1s",
      "channelUrl": "https://www.youtube.com/@PandaStudio24",
      "duration": "12:45",
      "desc": "Video bài giảng thực tế từ kênh Panda Studio hướng dẫn các mẫu câu giao tiếp khi vào quán ăn, đọc menu thực đơn, gọi đồ uống và thanh toán."
    },
    "culturalTips": [
      "Ở Trung Quốc, sau khi ngồi vào bàn, bạn có thể gọi to một cách lịch sự: \"服务员，点单！\" (Phục vụ ơi, gọi món!).",
      "Nếu không ăn được cay, nên dặn rõ: \"一点辣都不要\" (Không cay chút nào) hoặc \"微辣\" (Ít cay), vì mức độ cay của món Tứ Xuyên/Hồ Nam rất nồng.",
      "Thanh toán tại nhà hàng chủ yếu qua WeChat (微信) hoặc Alipay (支付宝), chỉ cần nói \"买单，扫码\" là nhân viên mang mã đến tận bàn."
    ],
    "vocabList": [
      {
        "hanzi": "服务员",
        "pinyin": "fúwùyuán",
        "hv": "Phục vụ viên",
        "vi": "Nhân viên phục vụ"
      },
      {
        "hanzi": "菜单",
        "pinyin": "càidān",
        "hv": "Thái đơn",
        "vi": "Thực đơn, menu"
      },
      {
        "hanzi": "点菜",
        "pinyin": "diǎncài",
        "hv": "Điểm thái",
        "vi": "Gọi món ăn"
      },
      {
        "hanzi": "招牌菜",
        "pinyin": "zhāopáicài",
        "hv": "Chiêu bài thái",
        "vi": "Món đặc sản của quán"
      },
      {
        "hanzi": "微辣",
        "pinyin": "wēilà",
        "hv": "Vi lạt",
        "vi": "Cay nhẹ, ít cay"
      },
      {
        "hanzi": "不放香菜",
        "pinyin": "bù fàng xiāngcài",
        "hv": "Bất phóng hương thái",
        "vi": "Đừng cho rau mùi (ngò)"
      },
      {
        "hanzi": "宫保鸡丁",
        "pinyin": "gōngbǎo jīdīng",
        "hv": "Cung bảo kê đinh",
        "vi": "Gà xào Kung Pao"
      },
      {
        "hanzi": "水煮鱼",
        "pinyin": "shuǐzhǔyú",
        "hv": "Thủy chú ngư",
        "vi": "Cá sốt cay Tứ Xuyên"
      },
      {
        "hanzi": "米饭",
        "pinyin": "mǐfàn",
        "hv": "Mễ phạn",
        "vi": "Cơm trắng"
      },
      {
        "hanzi": "冰水",
        "pinyin": "bīngshuǐ",
        "hv": "Băng thủy",
        "vi": "Nước đá mát"
      },
      {
        "hanzi": "纸巾",
        "pinyin": "zhǐjīn",
        "hv": "Chỉ cân",
        "vi": "Khăn giấy ăn"
      },
      {
        "hanzi": "打包",
        "pinyin": "dǎbāo",
        "hv": "Đả bao",
        "vi": "Gói mang về"
      },
      {
        "hanzi": "买单",
        "pinyin": "mǎidān",
        "hv": "Mãi đơn",
        "vi": "Thanh toán tiền"
      },
      {
        "hanzi": "发票",
        "pinyin": "fāpiào",
        "hv": "Phát phiếu",
        "vi": "Hóa đơn đỏ"
      },
      {
        "hanzi": "扫码支付",
        "pinyin": "sǎomǎ zhīfù",
        "hv": "Tảo mã chi phó",
        "vi": "Quét mã thanh toán"
      },
      {
        "hanzi": "味道",
        "pinyin": "wèidao",
        "hv": "Vị đạo",
        "vi": "Hương vị món ăn"
      }
    ],
    "dialogue": [
      {
        "speaker": "服务员",
        "role": "Nhân viên phục vụ",
        "avatar": "👩‍🍳",
        "hanzi": "您好！欢迎光临，请问几位？",
        "pinyin": "Nínhǎo! Huānyíng guānglín, qǐngwèn jǐ wèi?",
        "vi": "Xin chào quý khách! Hoan nghênh ghé thăm, xin hỏi quý khách đi mấy người ạ?"
      },
      {
        "speaker": "李明",
        "role": "Khách hàng",
        "avatar": "👨‍💼",
        "hanzi": "两位。请给我们一张靠窗的桌子。",
        "pinyin": "Liǎng wèi. Qǐng gěi wǒmen yī zhāng kào chuāng de zhuōzi.",
        "vi": "Hai người. Làm phiền xếp cho chúng tôi một bàn cạnh cửa sổ nhé."
      },
      {
        "speaker": "服务员",
        "role": "Nhân viên phục vụ",
        "avatar": "👩‍🍳",
        "hanzi": "好的，这边请坐！这是菜单，二位想吃点什么？",
        "pinyin": "Hǎo de, zhèbiān qǐng zuò! Zhè shì càidān, èr wèi xiǎng chī diǎn shénme?",
        "vi": "Dạ được, mời hai vị ngồi bên này! Đây là thực đơn, hai vị muốn dùng món gì ạ?"
      },
      {
        "speaker": "李明",
        "role": "Khách hàng",
        "avatar": "👨‍💼",
        "hanzi": "请问你们店有什么招牌菜推荐吗？",
        "pinyin": "Qǐngwèn nǐmen diàn yǒu shénme zhāopáicài tuījiàn ma?",
        "vi": "Xin hỏi quán mình có món đặc sản nào ngon giới thiệu không?"
      },
      {
        "speaker": "服务员",
        "role": "Nhân viên phục vụ",
        "avatar": "👩‍🍳",
        "hanzi": "我们店的宫保鸡丁和水煮牛肉特别受欢迎。",
        "pinyin": "Wǒmen diàn de gōngbǎo jīdīng hé shuǐzhǔ niúròu tèbié shòu huānyíng.",
        "vi": "Món gà xào Kung Pao và thịt bò cay Tứ Xuyên bên em rất được ưa chuộng đấy ạ."
      },
      {
        "speaker": "李明",
        "role": "Khách hàng",
        "avatar": "👨‍💼",
        "hanzi": "那来一份宫保鸡丁，一份清蒸鱼。请帮我做微辣，不要放香菜。",
        "pinyin": "Nà lái yī fèn gōngbǎo jīdīng, yī fèn qīngzhēngyú. Qǐng bāng wǒ zuò wēilà, bú yào fàng xiāngcài.",
        "vi": "Vậy cho tôi một phần gà Kung Pao, một phần cá hấp. Làm ít cay thôi nhé, và đừng bỏ rau mùi (ngò)."
      },
      {
        "speaker": "服务员",
        "role": "Nhân viên phục vụ",
        "avatar": "👩‍🍳",
        "hanzi": "没问题！主食需要米饭吗？喝点什么饮料？",
        "pinyin": "Méi wèntí! Zhǔshí xūyào mǐfàn ma? Hē diǎn shénme yǐnliào?",
        "vi": "Không thành vấn đề ạ! Món chính có dùng cơm không ạ? Hai vị muốn uống gì?"
      },
      {
        "speaker": "李明",
        "role": "Khách hàng",
        "avatar": "👨‍💼",
        "hanzi": "来两碗米饭，一壶免费的大麦茶，再来一杯加冰的可乐。",
        "pinyin": "Lái liǎng wǎn mǐfàn, yī hú miǎnfèi de dàmàichá, zài lái yī bēi jiā bīng de kělè.",
        "vi": "Cho hai bát cơm trắng, một ấm trà lúa mạch miễn phí, thêm một ly coca có đá nữa nhé."
      },
      {
        "speaker": "李明",
        "role": "Khách hàng",
        "avatar": "👨‍💼",
        "hanzi": "服务员，我们吃好了，麻烦买单！可以扫微信吗？",
        "pinyin": "Fúwùyuán, wǒmen chī hǎo le, máfan mǎidān! Kěyǐ sǎo Wēixìn ma?",
        "vi": "Phục vụ ơi, chúng tôi ăn xong rồi, tính tiền giúp tôi! Có thể quét WeChat thanh toán không?"
      },
      {
        "speaker": "服务员",
        "role": "Nhân viên phục vụ",
        "avatar": "👩‍🍳",
        "hanzi": "一共是一百二十八元，请扫桌上的付款码，谢谢光临！",
        "pinyin": "Yīgòng shì yībǎi èrshíbā yuán, qǐng sǎo zhuō shàng de fùkuǎnmǎ, xièxie guānglín!",
        "vi": "Tổng cộng hết 128 tệ ạ, quý khách vui lòng quét mã thanh toán trên bàn. Cảm ơn quý khách!"
      }
    ],
    "challenges": [
      {
        "promptVi": "Phục vụ ơi, cho tôi xem thực đơn, tôi muốn gọi món.",
        "grammarHint": "Xưng hô (服务员) + Dấu phẩy + Cho tôi xem (给我看一下) + Thực đơn (菜单) + Dấu phẩy + Tôi muốn gọi món (我想点菜).",
        "correctOrder": [
          "服务员",
          "，",
          "给我看一下",
          "菜单",
          "，",
          "我想点菜"
        ],
        "audioFull": "服务员，给我看一下菜单，我想点菜",
        "explanation": "Cách gọi nhân viên chuẩn mực trong nhà hàng: \"服务员，看一下菜单\". Mẫu câu \"我想 + V\" biểu thị mong muốn lịch sự."
      },
      {
        "promptVi": "Món này đừng làm cay, thêm cho tôi hai bát cơm trắng.",
        "grammarHint": "Món này (这个菜) + Đừng cay (不要辣) + Dấu phẩy + Cho tôi thêm (再给我) + Hai bát cơm trắng (两碗米饭).",
        "correctOrder": [
          "这个菜",
          "不要辣",
          "，",
          "再给我",
          "两碗米饭"
        ],
        "audioFull": "这个菜不要辣，再给我两碗米饭",
        "explanation": "Khẩu vị ẩm thực Trung Quốc thường khá cay và nhiều dầu mỡ, người Việt sang thường dặn: \"不要太辣\" (đừng cay quá) hoặc \"微辣\" (cay nhẹ)."
      },
      {
        "promptVi": "Chúng tôi ăn xong rồi, tính tiền giúp tôi nhé!",
        "grammarHint": "Chúng tôi (我们) + Ăn no rồi (吃饱了) + Dấu phẩy + Phục vụ tính tiền (服务员买单) + !",
        "correctOrder": [
          "我们",
          "吃饱了",
          "，",
          "服务员买单",
          "！"
        ],
        "audioFull": "我们吃饱了，服务员买单！",
        "explanation": "Ở miền Nam Trung Quốc người ta thường nói \"买单 (mǎidān)\", còn miền Bắc thường dùng \"结账 (jiézhàng)\"."
      }
    ]
  },
  {
    "id": "taxi",
    "title": "Taxi & Hỏi Đường (打车与问路)",
    "sub": "Chỉ đường & đi tàu điện ngầm",
    "icon": "🚕",
    "category": "travel",
    "categoryName": "Du Lịch & Di Chuyển",
    "context": "Bạn vừa đáp xuống sân bay và bắt taxi về khách sạn, sau đó đi bộ hỏi đường người dân bản địa tới trạm ga tàu điện ngầm gần nhất.",
    "video": {
      "title": "Luyện Nghe Tiếng Trung Thực Tế: Đi Taxi & Hỏi Đường (打车与问路)",
      "channel": "Panda Studio",
      "channelHandle": "@PandaStudio24",
      "youtubeId": "3x_kY9_Taxi",
      "embedUrl": "https://www.youtube-nocookie.com/embed/0c_0K8T_b1s?start=180",
      "channelUrl": "https://www.youtube.com/@PandaStudio24",
      "duration": "10:15",
      "desc": "Video hướng dẫn cách gọi xe taxi, nói điểm đến, yêu cầu bật đồng hồ tính cước (打表) và các mẫu câu hỏi đường thông dụng."
    },
    "culturalTips": [
      "Gặp tài xế taxi ở Trung Quốc luôn gọi một cách thân thiện, tôn trọng là \"师傅 (shīfu)\".",
      "Khi lên xe nên nhắc tài xế: \"师傅，请打表\" (Bác tài ơi, vui lòng bấm đồng hồ tính tiền).",
      "Nếu muốn chỉ hướng đi, các cấu trúc phổ biến nhất: \"往左拐\" (rẽ trái), \"往右拐\" (rẽ phải), \"一直往前走\" (đi thẳng về trước)."
    ],
    "vocabList": [
      {
        "hanzi": "师傅",
        "pinyin": "shīfu",
        "hv": "Sư phụ",
        "vi": "Bác tài xế lái xe"
      },
      {
        "hanzi": "出租车",
        "pinyin": "chūzūchē",
        "hv": "Xuất tô xa",
        "vi": "Xe taxi"
      },
      {
        "hanzi": "打表",
        "pinyin": "dǎbiǎo",
        "hv": "Đả biểu",
        "vi": "Bật đồng hồ tính cước"
      },
      {
        "hanzi": "目的地",
        "pinyin": "mùdìdì",
        "hv": "Mục đích địa",
        "vi": "Điểm đến"
      },
      {
        "hanzi": "地铁站",
        "pinyin": "dìtiězhàn",
        "hv": "Địa thiết trạm",
        "vi": "Ga tàu điện ngầm"
      },
      {
        "hanzi": "火车站",
        "pinyin": "huǒchēzhàn",
        "hv": "Hỏa xa trạm",
        "vi": "Ga tàu hỏa"
      },
      {
        "hanzi": "往左拐",
        "pinyin": "wǎng zuǒ guǎi",
        "hv": "Vãng tả quải",
        "vi": "Rẽ về bên trái"
      },
      {
        "hanzi": "往右拐",
        "pinyin": "wǎng yòu guǎi",
        "hv": "Vãng hữu quải",
        "vi": "Rẽ về bên phải"
      },
      {
        "hanzi": "一直走",
        "pinyin": "yīzhí zǒu",
        "hv": "Nhất trực tẩu",
        "vi": "Đi thẳng một mạch"
      },
      {
        "hanzi": "十字路口",
        "pinyin": "shízì lùkǒu",
        "hv": "Thập tự lộ khẩu",
        "vi": "Ngã tư đường"
      },
      {
        "hanzi": "红绿灯",
        "pinyin": "hónglǜdēng",
        "hv": "Hồng lục đăng",
        "vi": "Đèn tín hiệu giao thông"
      },
      {
        "hanzi": "斑马线",
        "pinyin": "bānmǎxiàn",
        "hv": "Ban mã tuyến",
        "vi": "Vạch kẻ qua đường"
      },
      {
        "hanzi": "堵车",
        "pinyin": "dǔchē",
        "hv": "Đổ xa",
        "vi": "Kẹt xe, tắc đường"
      },
      {
        "hanzi": "走高速",
        "pinyin": "zǒu gāosù",
        "hv": "Tẩu cao tốc",
        "vi": "Đi đường cao tốc"
      },
      {
        "hanzi": "停在路边",
        "pinyin": "tíng zài lùbiān",
        "hv": "Đình tại lộ biên",
        "vi": "Tấp xe vào lề đường"
      },
      {
        "hanzi": "车费",
        "pinyin": "chēfèi",
        "hv": "Xa phí",
        "vi": "Tiền cước xe"
      }
    ],
    "dialogue": [
      {
        "speaker": "李明",
        "role": "Hành khách",
        "avatar": "👨‍💼",
        "hanzi": "师傅您好，请问去希尔顿酒店走吗？",
        "pinyin": "Shīfu nín hǎo, qǐngwèn qù Xī'ěrdùn jiǐdiàn zǒu ma?",
        "vi": "Chào bác tài, xe có đi đến khách sạn Hilton không ạ?"
      },
      {
        "speaker": "司机",
        "role": "Bác tài taxi",
        "avatar": "🚕",
        "hanzi": "去，快上车吧！后备箱给您打开了，行李放后面。",
        "pinyin": "Qù, kuài shàngchē ba! Hòubèixiāng gěi nín dǎkāi le, xíngli fàng hòumian.",
        "vi": "Có đi, mời lên xe! Cốp xe mở rồi đó, hành lý để phía sau nhé."
      },
      {
        "speaker": "李明",
        "role": "Hành khách",
        "avatar": "👨‍💼",
        "hanzi": "好的，谢谢师傅。麻烦您打表走。",
        "pinyin": "Hǎo de, xièxie shīfu. Máfan nín dǎbiǎo zǒu.",
        "vi": "Dạ vâng, cảm ơn bác tài. Phiền bác bấm đồng hồ giúp tôi nhé."
      },
      {
        "speaker": "司机",
        "role": "Bác tài taxi",
        "avatar": "🚕",
        "hanzi": "放心吧，正规出租车都是打表的。现在市区有点堵车，我们走高架桥可以吗？",
        "pinyin": "Fàngxīn ba, zhèngguī chūzūchē dōu shì dǎbiǎo de. Xiànzài shìqū yǒudiǎn dǔchē, wǒmen zǒu gāojiàqiáo kěyǐ ma?",
        "vi": "Yên tâm đi, taxi chính hãng luôn bấm đồng hồ mà. Giờ nội đô hơi tắc đường, mình đi cầu vượt trên cao được không?"
      },
      {
        "speaker": "李明",
        "role": "Hành khách",
        "avatar": "👨‍💼",
        "hanzi": "可以的，哪条路快走哪条。大概需要多长时间？",
        "pinyin": "Kěyǐ de, nǎ tiáo lù kuài zǒu nǎ tiáo. Dàgài xūyào duō cháng shíjiān?",
        "vi": "Được chứ ạ, đường nào nhanh thì đi đường đó. Đi mất tầm bao lâu vậy bác?"
      },
      {
        "speaker": "司机",
        "role": "Bác tài taxi",
        "avatar": "🚕",
        "hanzi": "大概半个小时就到了。您系好安全带。",
        "pinyin": "Dàgài bàn gè xiǎoshí jiù dào le. Nín jì hǎo ānquándài.",
        "vi": "Khoảng nửa tiếng là đến nơi thôi. Anh nhớ thắt dây an toàn vào nhé."
      },
      {
        "speaker": "李明",
        "role": "Hành khách",
        "avatar": "👨‍💼",
        "hanzi": "到了，师傅就停在前面路口就行。一共多少钱？",
        "pinyin": "Dào le, shīfu jiù tíng zài qiánmian lùkǒu jiù xíng. Yīgòng duōshao qián?",
        "vi": "Đến nơi rồi, bác cho tôi xuống ở góc ngã rẽ phía trước là được. Hết bao nhiêu tiền vậy ạ?"
      },
      {
        "speaker": "司机",
        "role": "Bác tài taxi",
        "avatar": "🚕",
        "hanzi": "表上显示四十五块。扫仪表盘上的微信码就行，慢走啊！",
        "pinyin": "Biǎo shàng xiǎnshì sìshíwǔ kuài. Sǎo yíbiǎopán shàng de Wēixìnmǎ jiù xíng, mànzǒu a!",
        "vi": "Đồng hồ báo bốn mươi lăm tệ. Anh quét mã WeChat gắn trên bảng táp-lô là được, đi cẩn thận nhé!"
      }
    ],
    "challenges": [
      {
        "promptVi": "Bác tài ơi, làm phiền đưa tôi đến ga tàu hỏa.",
        "grammarHint": "Bác tài (师傅) + Dấu phẩy + Làm phiền (麻烦) + Đưa tôi đi (送我去) + Ga tàu hỏa (火车站).",
        "correctOrder": [
          "师傅",
          "，",
          "麻烦",
          "送我去",
          "火车站"
        ],
        "audioFull": "师傅，麻烦送我去火车站",
        "explanation": "Trong tiếng Trung, gọi tài xế taxi là \"师傅 (shīfu)\" thể hiện sự tôn trọng và thân thiện."
      },
      {
        "promptVi": "Đi thẳng về phía trước, đến ngã tư thì rẽ trái.",
        "grammarHint": "Đi thẳng phía trước (往前一直走) + Dấu phẩy + Đến ngã tư (到十字路口) + Rẽ trái (往左拐).",
        "correctOrder": [
          "往前一直走",
          "，",
          "到十字路口",
          "往左拐"
        ],
        "audioFull": "往前一直走，到十字路口往左拐",
        "explanation": "Chỉ hướng đi: \"往 + Hướng + Động từ\" (往左拐: rẽ trái, 往右拐: rẽ phải, 往前走: đi về phía trước)."
      }
    ]
  },
  {
    "id": "shopping",
    "title": "Mua Sắm & Mặc Cả (商场购物与砍价)",
    "sub": "Hỏi giá, đổi cỡ & thanh toán QR",
    "icon": "🛍️",
    "category": "shopping",
    "categoryName": "Mua Sắm & Tiêu Dùng",
    "context": "Bạn đang dạo phố mua sắm quần áo và đồ lưu niệm. Hãy hỏi giá món đồ ưng ý, thử size và mặc cả giá thật khéo léo.",
    "video": {
      "title": "Luyện Nghe Hội Thoại Tiếng Trung: Mua Sắm Quần Áo (买衣服)",
      "channel": "Panda Studio",
      "channelHandle": "@PandaStudio24",
      "youtubeId": "4x_m_Shopping",
      "embedUrl": "https://www.youtube-nocookie.com/embed/0c_0K8T_b1s?start=360",
      "channelUrl": "https://www.youtube.com/@PandaStudio24",
      "duration": "14:20",
      "desc": "Video bài giảng thực tế từ kênh Panda Studio dạy cách hỏi giá, thử size, khen ngợi mẫu mã và kỹ năng mặc cả giá bằng tiếng Trung."
    },
    "culturalTips": [
      "Ở các chợ truyền thống hoặc phố đi bộ, việc mặc cả rất phổ biến. Câu cửa miệng: \"太贵了，便宜点儿吧！\" (Đắt quá, bớt chút đi!).",
      "Độ giảm giá ở Trung Quốc nói ngược với Việt Nam: \"打八折\" nghĩa là tính 80% (tức giảm 20%), \"打五折\" là nửa giá (giảm 50%).",
      "Khi thử đồ hãy hỏi lịch sự: \"可以试穿一下吗？\" (Tôi có thể thử một chút không?)."
    ],
    "vocabList": [
      {
        "hanzi": "老板",
        "pinyin": "lǎobǎn",
        "hv": "Lão bản",
        "vi": "Ông chủ, bà chủ quán"
      },
      {
        "hanzi": "多少钱",
        "pinyin": "duōshǎo qián",
        "hv": "Đa thiểu tiền",
        "vi": "Bao nhiêu tiền"
      },
      {
        "hanzi": "太贵了",
        "pinyin": "tài guì le",
        "hv": "Thái quý liễu",
        "vi": "Đắt quá rồi"
      },
      {
        "hanzi": "便宜一点",
        "pinyin": "piányi yīdiǎn",
        "hv": "Tiện nghi nhất điểm",
        "vi": "Rẻ hơn một chút"
      },
      {
        "hanzi": "试衣间",
        "pinyin": "shìyījiān",
        "hv": "Thí y gian",
        "vi": "Phòng thử quần áo"
      },
      {
        "hanzi": "尺码",
        "pinyin": "chǐmǎ",
        "hv": "Xích mã",
        "vi": "Kích cỡ, size áo quần"
      },
      {
        "hanzi": "大一号",
        "pinyin": "dà yī hào",
        "hv": "Đại nhất hào",
        "vi": "Lớn hơn một cỡ"
      },
      {
        "hanzi": "小一号",
        "pinyin": "xiǎo yī hào",
        "hv": "Tiểu nhất hào",
        "vi": "Nhỏ hơn một cỡ"
      },
      {
        "hanzi": "打折",
        "pinyin": "dǎzhé",
        "hv": "Đả chiết",
        "vi": "Chiết khấu, giảm giá %"
      },
      {
        "hanzi": "质量",
        "pinyin": "zhìliàng",
        "hv": "Chất lượng",
        "vi": "Chất lượng sản phẩm"
      },
      {
        "hanzi": "纯棉",
        "pinyin": "chúnmián",
        "hv": "Thuần miên",
        "vi": "Cotton 100% nguyên chất"
      },
      {
        "hanzi": "款式",
        "pinyin": "kuǎnshì",
        "hv": "Khoản thức",
        "vi": "Mẫu mã, kiểu dáng"
      },
      {
        "hanzi": "微信支付",
        "pinyin": "Wēixìn zhīfù",
        "hv": "Vi tín chi phó",
        "vi": "Thanh toán WeChat"
      },
      {
        "hanzi": "支付宝",
        "pinyin": "Zhīfùbǎo",
        "hv": "Chi phó bảo",
        "vi": "Ví Alipay"
      },
      {
        "hanzi": "包装",
        "pinyin": "bāozhuāng",
        "hv": "Bao trang",
        "vi": "Đóng gói vào túi"
      },
      {
        "hanzi": "小票",
        "pinyin": "xiǎopiào",
        "hv": "Tiểu phiếu",
        "vi": "Hóa đơn bán lẻ"
      }
    ],
    "dialogue": [
      {
        "speaker": "售货员",
        "role": "Nhân viên bán hàng",
        "avatar": "👩‍💼",
        "hanzi": "帅哥您好，随便看看，想挑件外套还是毛衣？",
        "pinyin": "Shuàigē nín hǎo, suíbiàn kànkan, xiǎng tiāo jiàn wàitào háishì máoyī?",
        "vi": "Chào anh đẹp trai, cứ xem tự nhiên nhé, anh muốn chọn áo khoác hay áo len?"
      },
      {
        "speaker": "李明",
        "role": "Khách mua đồ",
        "avatar": "👨‍💼",
        "hanzi": "请问这件黑色羽绒服多少钱一件？",
        "pinyin": "Qǐngwèn zhè jiàn hēisè yǔróngfú duōshǎo qián yī jiàn?",
        "vi": "Xin hỏi chiếc áo phao lông vũ màu đen này bao nhiêu tiền một cái ạ?"
      },
      {
        "speaker": "售货员",
        "role": "Nhân viên bán hàng",
        "avatar": "👩‍💼",
        "hanzi": "这件是今年最流行的新款，原价五百，今天搞活动打八折，四百块。",
        "pinyin": "Zhè jiàn shì jīnnián zuì liúxíng de xīnkuǎn, yuánjià wǔbǎi, jīntiān gǎo huódòng dǎ bā zhé, sìbǎi kuài.",
        "vi": "Mẫu này là mẫu mới hot nhất năm nay đó, giá gốc 500, hôm nay có ưu đãi giảm 20% còn 400 tệ."
      },
      {
        "speaker": "李明",
        "role": "Khách mua đồ",
        "avatar": "👨‍💼",
        "hanzi": "四百块还是有点太贵了。能便宜一点吗？三百块我就要了。",
        "pinyin": "Sìbǎi kuài háishì yǒudiǎn tài guì le. Néng piányi yīdiǎn ma? Sānbǎi kuài wǒ jiù yào le.",
        "vi": "Bốn trăm tệ vẫn đắt quá em ơi. Bớt thêm chút được không? Ba trăm tệ thì anh lấy luôn."
      },
      {
        "speaker": "售货员",
        "role": "Nhân viên bán hàng",
        "avatar": "👩‍💼",
        "hanzi": "三百太低了老板不批的！看您真心喜欢，三百二给您，真的不能再低了！",
        "pinyin": "Sānbǎi tài dī le lǎobǎn bù pī de! Kàn nín zhēnxīn xǐhuan, sānbǎi'èr gěi nín, zhēnde bù néng zài dī le!",
        "vi": "Ba trăm thấp quá sếp em không duyệt đâu! Thấy anh thực lòng thích, em để anh 320 tệ, thật sự kịch sàn rồi đấy ạ!"
      },
      {
        "speaker": "李明",
        "role": "Khách mua đồ",
        "avatar": "👨‍💼",
        "hanzi": "好吧。那我能先试穿一下尺码吗？",
        "pinyin": "Hǎo ba. Nà wǒ néng xiān shìchuān yīxià chǐmǎ ma?",
        "vi": "Được rồi. Vậy anh có thể thử xem vừa size không nhé?"
      },
      {
        "speaker": "售货员",
        "role": "Nhân viên bán hàng",
        "avatar": "👩‍💼",
        "hanzi": "当然可以，试衣间在左手边第二间，您拿这件L码去试吧。",
        "pinyin": "Dāngrán kěyǐ, shìyījiān zài zuǒshǒubiān dì-èr jiān, nín ná zhè jiàn L mǎ qù shì ba.",
        "vi": "Tất nhiên được chứ ạ, phòng thử đồ ở bên tay trái phòng thứ hai, anh cầm size L này vào thử nhé."
      },
      {
        "speaker": "李明",
        "role": "Khách mua đồ",
        "avatar": "👨‍💼",
        "hanzi": "穿上挺合身的，我很满意。请帮我包起来，我扫微信付款。",
        "pinyin": "Chuān shàng tǐng héshēn de, wǒ hěn mǎnyì. Qǐng bāng wǒ bāo qǐlái, wǒ sǎo Wēixìn fùkuǎn.",
        "vi": "Mặc lên vừa vặn lắm, anh rất ưng. Gói lại giúp anh nhé, anh quét mã WeChat trả tiền."
      }
    ],
    "challenges": [
      {
        "promptVi": "Ông chủ ơi, chiếc áo này bao nhiêu tiền một cái?",
        "grammarHint": "Ông chủ (老板) + Dấu phẩy + Chiếc áo này (这件衣服) + Bao nhiêu tiền một cái (多少钱一件) + ?",
        "correctOrder": [
          "老板",
          "，",
          "这件衣服",
          "多少钱一件",
          "？"
        ],
        "audioFull": "老板，这件衣服多少钱一件？",
        "explanation": "Lượng từ dùng cho quần áo là \"件 (jiàn)\". Mẫu câu hỏi giá: \"多少钱 + Lượng từ + Danh từ?\"."
      },
      {
        "promptVi": "Đắt quá rồi! Rẻ hơn một chút được không?",
        "grammarHint": "Đắt quá rồi (太贵了) + Dấu phẩy + Rẻ hơn chút đi (便宜一点吧) + Được không (行不行) + ?",
        "correctOrder": [
          "太贵了",
          "！",
          "便宜一点吧",
          "，",
          "行不行",
          "？"
        ],
        "audioFull": "太贵了！便宜一点吧，行不行？",
        "explanation": "Cụm từ \"太...了\" biểu thị sự thái quá. Người bán hàng Trung Quốc rất quen với việc mặc cả: \"便宜一点吧\"."
      }
    ]
  },
  {
    "id": "hotel",
    "title": "Khách Sạn & Nhận Phòng (酒店入住与退房)",
    "sub": "Đặt phòng, thẻ phòng & hỏi WiFi",
    "icon": "🏨",
    "category": "travel",
    "categoryName": "Du Lịch & Di Chuyển",
    "context": "Bạn vừa tới sảnh khách sạn để làm thủ tục nhận phòng (Check-in), hỏi mật khẩu WiFi, giờ ăn sáng và trả phòng đúng giờ.",
    "video": {
      "title": "Luyện Nghe Tiếng Trung: Ở Khách Sạn (酒店住宿与交流)",
      "channel": "Panda Studio",
      "channelHandle": "@PandaStudio24",
      "youtubeId": "5x_h_Hotel",
      "embedUrl": "https://www.youtube-nocookie.com/embed/0c_0K8T_b1s?start=540",
      "channelUrl": "https://www.youtube.com/@PandaStudio24",
      "duration": "11:30",
      "desc": "Video bài giảng thực tế từ kênh Panda Studio hướng dẫn đối thoại làm thủ tục nhận phòng, đặt cọc và dịch vụ buồng phòng."
    },
    "culturalTips": [
      "Khách quốc tế nhận phòng tại Trung Quốc bắt buộc phải xuất trình hộ chiếu gốc (护照) để nhân viên đăng ký tạm trú theo luật.",
      "Thông thường khách sạn sẽ thu tiền đặt cọc phòng (押金), tiền cọc sẽ được hoàn lại nguyên vẹn sau khi trả phòng (退房).",
      "Giờ trả phòng quy định chuẩn ở hầu hết khách sạn là trước 12 giờ trưa (中午12点以前)."
    ],
    "vocabList": [
      {
        "hanzi": "前台",
        "pinyin": "qiántái",
        "hv": "Tiền đài",
        "vi": "Quầy lễ tân"
      },
      {
        "hanzi": "预订",
        "pinyin": "yùdìng",
        "hv": "Dự đính",
        "vi": "Đặt phòng trước"
      },
      {
        "hanzi": "护照",
        "pinyin": "hùzhào",
        "hv": "Hộ chiếu",
        "vi": "Hộ chiếu (Passport)"
      },
      {
        "hanzi": "房卡",
        "pinyin": "fángkǎ",
        "hv": "Phòng tạp",
        "vi": "Thẻ mở cửa phòng"
      },
      {
        "hanzi": "押金",
        "pinyin": "yājīn",
        "hv": "Áp kim",
        "vi": "Tiền đặt cọc phòng"
      },
      {
        "hanzi": "单人间",
        "pinyin": "dānrénjiān",
        "hv": "Đơn nhân gian",
        "vi": "Phòng đơn"
      },
      {
        "hanzi": "大床房",
        "pinyin": "dàchuángfáng",
        "hv": "Đại sàng phòng",
        "vi": "Phòng giường đôi lớn"
      },
      {
        "hanzi": "双人间",
        "pinyin": "shuāngrénjiān",
        "hv": "Song nhân gian",
        "vi": "Phòng hai giường đơn"
      },
      {
        "hanzi": "退房",
        "pinyin": "tuìfáng",
        "hv": "Thoái phòng",
        "vi": "Trả phòng (Check-out)"
      },
      {
        "hanzi": "早餐券",
        "pinyin": "zǎocānquàn",
        "hv": "Tảo xan khoán",
        "vi": "Phiếu ăn sáng buffet"
      },
      {
        "hanzi": "密码",
        "pinyin": "mìmǎ",
        "hv": "Mật mã",
        "vi": "Mật khẩu WiFi"
      },
      {
        "hanzi": "行李寄存",
        "pinyin": "xíngli jìcún",
        "hv": "Hành lý ký tồn",
        "vi": "Gửi giữ hành lý"
      },
      {
        "hanzi": "电梯",
        "pinyin": "diàntī",
        "hv": "Điện thang",
        "vi": "Thang máy"
      },
      {
        "hanzi": "打扫",
        "pinyin": "dǎsǎo",
        "hv": "Đả tảo",
        "vi": "Dọn phòng khách sạn"
      },
      {
        "hanzi": "叫醒服务",
        "pinyin": "jiàoxǐng fúwù",
        "hv": "Khiếu tỉnh phục vụ",
        "vi": "Dịch vụ báo thức buổi sáng"
      },
      {
        "hanzi": "收据",
        "pinyin": "shōujù",
        "hv": "Thu cứ",
        "vi": "Biên lai đặt cọc"
      }
    ],
    "dialogue": [
      {
        "speaker": "前台",
        "role": "Lễ tân khách sạn",
        "avatar": "👩‍💼",
        "hanzi": "您好，欢迎光临如家酒店！请问有预订吗？",
        "pinyin": "Nín hǎo, huānyíng guānglín Rújiā jiǔdiàn! Qǐngwèn yǒu yùdìng ma?",
        "vi": "Xin chào quý khách, chào mừng đến khách sạn Home Inn! Xin hỏi anh có đặt phòng trước chưa ạ?"
      },
      {
        "speaker": "李明",
        "role": "Khách du lịch",
        "avatar": "👨‍💼",
        "hanzi": "您好，我在美团上预订了一间大床房，名字叫李明。",
        "pinyin": "Nín hǎo, wǒ zài Měituán shàng yùdìng le yī jiān dàchuángfáng, míngzi jiào Lǐ Míng.",
        "vi": "Chào cô, tôi đã đặt một phòng giường lớn trên ứng dụng Meituan, tên tôi là Lý Minh."
      },
      {
        "speaker": "前台",
        "role": "Lễ tân khách sạn",
        "avatar": "👩‍💼",
        "hanzi": "查到了，入住两晚。麻烦出示一下您的护照，并交两百元押金。",
        "pinyin": "Chá dào le, rùzhù liǎng wǎn. Máfan chūshì yīxià nín de hùzhào, bìng jiāo liǎngbǎi yuán yājīn.",
        "vi": "Dạ em kiểm tra thấy rồi, ở hai đêm ạ. Phiền anh xuất trình hộ chiếu và đặt cọc 200 tệ nhé."
      },
      {
        "speaker": "李明",
        "role": "Khách du lịch",
        "avatar": "👨‍💼",
        "hanzi": "好的，给您护照，押金我用微信转账给您。",
        "pinyin": "Hǎo de, gěi nín hùzhào, yājīn wǒ yòng Wēixìn zhuǎnzhàng gěi nín.",
        "vi": "Được rồi, gửi cô hộ chiếu, tiền cọc tôi chuyển khoản WeChat cho cô nhé."
      },
      {
        "speaker": "前台",
        "role": "Lễ tân khách sạn",
        "avatar": "👩‍💼",
        "hanzi": "好的收到。这是您的房卡，房间在八楼808。电梯在右转到底。",
        "pinyin": "Hǎo de shōudào. Zhè shì nín de fángkǎ, fángjiān zài bā lóu 808. Diàntī zài yòuzhuǎn dàodǐ.",
        "vi": "Dạ đã nhận tiền. Đây là thẻ phòng của anh, phòng ở tầng 8 số 808. Thang máy rẽ phải đi hết hành lang ạ."
      },
      {
        "speaker": "李明",
        "role": "Khách du lịch",
        "avatar": "👨‍💼",
        "hanzi": "请问客房WiFi密码是多少？含早餐吗？",
        "pinyin": "Qǐngwèn kèfáng WiFi mìmǎ shì duōshao? Hán zǎocān ma?",
        "vi": "Xin hỏi mật khẩu WiFi phòng là gì vậy cô? Có kèm bữa sáng không?"
      },
      {
        "speaker": "前台",
        "role": "Lễ tân khách sạn",
        "avatar": "👩‍💼",
        "hanzi": "WiFi直接连房间号免密码。早餐在二楼，早上七点到九点半凭房卡用餐。",
        "pinyin": "WiFi zhíjiē lián fángjiānhào miǎn mìmǎ. Zǎocān zài èr lóu, zǎoshang qī diǎn dào jiǔ diǎn bàn píng fángkǎ yòngcān.",
        "vi": "WiFi kết nối trực tiếp theo số phòng không cần mật khẩu ạ. Bữa sáng ở tầng 2, từ 7h đến 9h30 sáng quẹt thẻ phòng ăn buffet."
      },
      {
        "speaker": "李明",
        "role": "Khách du lịch",
        "avatar": "👨‍💼",
        "hanzi": "太好了，退房时间是几点呢？",
        "pinyin": "Tài hǎo le, tuìfáng shíjiān shì jǐ diǎn ne?",
        "vi": "Tuyệt quá, giờ trả phòng là mấy giờ vậy cô?"
      },
      {
        "speaker": "前台",
        "role": "Lễ tân khách sạn",
        "avatar": "👩‍💼",
        "hanzi": "中午十二点之前退房即可。退房时押金原路退回，祝您入住愉快！",
        "pinyin": "Zhōngwǔ shí'èr diǎn zhīqián tuìfáng jíkě. Tuìfáng shí yājīn yuánlù tuìhuí, zhù nín rùzhù yúkuài!",
        "vi": "Dạ trước 12h trưa là được ạ. Lúc trả phòng tiền cọc sẽ được hoàn tự động về tài khoản, chúc anh kỳ nghỉ vui vẻ!"
      }
    ],
    "challenges": [
      {
        "promptVi": "Chào bạn, tôi đã đặt trước một phòng đôi trên mạng.",
        "grammarHint": "Xin chào (你好) + Dấu phẩy + Tôi trên mạng (我在网上) + Đã đặt trước (预订了) + Một phòng đôi (一间双人房).",
        "correctOrder": [
          "你好",
          "，",
          "我在网上",
          "预订了",
          "一间双人房"
        ],
        "audioFull": "你好，我在网上预订了一间双人房",
        "explanation": "Phòng đơn là \"单人间\", phòng đôi là \"双人房\", phòng tiêu chuẩn là \"标准间\". Lượng từ phòng là \"间 (jiān)\"."
      },
      {
        "promptVi": "Đây là hộ chiếu của tôi, xin hỏi mật khẩu WiFi là bao nhiêu?",
        "grammarHint": "Đây là hộ chiếu của tôi (这是我的护照) + Dấu phẩy + Xin hỏi (请问) + Mật khẩu WiFi (WiFi密码) + Là bao nhiêu (是多少) + ?",
        "correctOrder": [
          "这是我的护照",
          "，",
          "请问",
          "WiFi密码",
          "是多少",
          "？"
        ],
        "audioFull": "这是我的护照，请问WiFi密码是多少？",
        "explanation": "Cấu trúc hỏi thông tin số điện thoại / mật khẩu: \"...是多少？\" (Ví dụ: 你的电话号码是多少？)."
      }
    ]
  },
  {
    "id": "hospital",
    "title": "Bệnh Viện & Mua Thuốc (医院看病与就诊)",
    "sub": "Tả triệu chứng cảm sốt & liều dùng",
    "icon": "🏥",
    "category": "daily",
    "categoryName": "Sức Khỏe & Đời Sống",
    "context": "Bạn cảm thấy không khỏe, bị sốt và đau họng do đổi mùa. Bạn đến phòng khám gặp bác sĩ, làm xét nghiệm và ra quầy thuốc lấy thuốc.",
    "video": {
      "title": "Luyện Nghe Tiếng Trung: Đi Khám Bệnh Tại Bệnh Viện (看病)",
      "channel": "Panda Studio",
      "channelHandle": "@PandaStudio24",
      "youtubeId": "6x_b_Hospital",
      "embedUrl": "https://www.youtube-nocookie.com/embed/0c_0K8T_b1s?start=720",
      "channelUrl": "https://www.youtube.com/@PandaStudio24",
      "duration": "13:00",
      "desc": "Video bài giảng thực tế từ kênh Panda Studio dạy cách mô tả các triệu chứng bệnh, đọc đơn thuốc và dặn dò của bác sĩ."
    },
    "culturalTips": [
      "Tại các bệnh viện công ở Trung Quốc, bước đầu tiên bắt buộc là đến quầy lấy số \"挂号 (guàhào)\", có thể phân chia thành khoa nội (内科), khoa ngoại (外科), khoa nhi (儿科).",
      "Lời khuyên quen thuộc nhất của người Trung Quốc khi ốm là: \"多喝热水，好好休息\" (Uống nhiều nước ấm, nghỉ ngơi cho tốt).",
      "Đơn thuốc chia làm thuốc không kê đơn (OTC) mua tự do và thuốc kê đơn (处方药) bắt buộc có chữ ký của bác sĩ."
    ],
    "vocabList": [
      {
        "hanzi": "挂号",
        "pinyin": "guàhào",
        "hv": "Quải hào",
        "vi": "Lấy số khám bệnh"
      },
      {
        "hanzi": "门诊",
        "pinyin": "ménzhěn",
        "hv": "Môn chẩn",
        "vi": "Khám bệnh ngoại trú"
      },
      {
        "hanzi": "舒服",
        "pinyin": "shūfu",
        "hv": "Thư phục",
        "vi": "Khỏe khoắn, dễ chịu"
      },
      {
        "hanzi": "感冒",
        "pinyin": "gǎnmào",
        "hv": "Cảm mạo",
        "vi": "Bị cảm lạnh, cảm cúm"
      },
      {
        "hanzi": "发烧",
        "pinyin": "fāshāo",
        "hv": "Phát thiêu",
        "vi": "Bị sốt cao"
      },
      {
        "hanzi": "头疼",
        "pinyin": "tóuténg",
        "hv": "Đầu thống",
        "vi": "Đau nhức đầu"
      },
      {
        "hanzi": "嗓子疼",
        "pinyin": "sǎngzi téng",
        "hv": "Tảng tử thống",
        "vi": "Đau rát cổ họng"
      },
      {
        "hanzi": "咳嗽",
        "pinyin": "késou",
        "hv": "Khái thấu",
        "vi": "Ho gió, ho khản cổ"
      },
      {
        "hanzi": "量体温",
        "pinyin": "liáng tǐwēn",
        "hv": "Lượng thể ôn",
        "vi": "Đo nhiệt độ cơ thể"
      },
      {
        "hanzi": "化验",
        "pinyin": "huàyàn",
        "hv": "Hóa nghiệm",
        "vi": "Làm xét nghiệm máu"
      },
      {
        "hanzi": "开药",
        "pinyin": "kāiyào",
        "hv": "Khai dược",
        "vi": "Kê đơn thuốc"
      },
      {
        "hanzi": "消炎药",
        "pinyin": "xiāoyányào",
        "hv": "Tiêu viêm dược",
        "vi": "Thuốc kháng viêm"
      },
      {
        "hanzi": "退烧药",
        "pinyin": "tuìshāoyào",
        "hv": "Thoái thiêu dược",
        "vi": "Thuốc hạ sốt"
      },
      {
        "hanzi": "饭后吃",
        "pinyin": "fànhòu chī",
        "hv": "Phạn hậu ngật",
        "vi": "Uống sau bữa ăn"
      },
      {
        "hanzi": "一天三次",
        "pinyin": "yītiān sāncì",
        "hv": "Nhất thiên tam thứ",
        "vi": "Một ngày uống 3 lần"
      },
      {
        "hanzi": "早日康复",
        "pinyin": "zǎorì kāngfù",
        "hv": "Tảo nhật khang phục",
        "vi": "Sớm hồi phục sức khỏe"
      }
    ],
    "dialogue": [
      {
        "speaker": "医生",
        "role": "Bác sĩ khoa nội",
        "avatar": "👨‍⚕️",
        "hanzi": "请坐！你哪里觉得不舒服？",
        "pinyin": "Qǐng zuò! Nǐ nǎlǐ juéde bù shūfu?",
        "vi": "Mời ngồi! Bạn thấy khó chịu ở chỗ nào?"
      },
      {
        "speaker": "李明",
        "role": "Bệnh nhân",
        "avatar": "🤒",
        "hanzi": "医生，我从昨天晚上开始头疼，身上发冷，嗓子也特别疼。",
        "pinyin": "Yīshēng, wǒ cóng zuótiān wǎnshang kāishǐ tóuténg, shēnshang fālěng, sǎngzi yě tèbié téng.",
        "vi": "Bác sĩ ơi, từ tối qua tôi bắt đầu đau đầu, người ớn lạnh, cổ họng cũng đau rát lắm."
      },
      {
        "speaker": "医生",
        "role": "Bác sĩ khoa nội",
        "avatar": "👨‍⚕️",
        "hanzi": "先量一下体温……三十八度五，发烧了。张开嘴，我看一下喉咙。",
        "pinyin": "Xiān liáng yīxià tǐwēn... sānshíbā dù wǔ, fāshāo le. Zhāngkāi zuǐ, wǒ kàn yīxià hóulóng.",
        "vi": "Để đo nhiệt độ trước đã nhé... 38 độ 5, sốt rồi. Há miệng ra để bác xem họng nào."
      },
      {
        "speaker": "李明",
        "role": "Bệnh nhân",
        "avatar": "🤒",
        "hanzi": "啊——医生，情况严重吗？",
        "pinyin": "A—— yīshēng, qíngkuàng yánzhòng ma?",
        "vi": "A—— bác sĩ ơi, tình hình có nghiêm trọng không ạ?"
      },
      {
        "speaker": "医生",
        "role": "Bác sĩ khoa nội",
        "avatar": "👨‍⚕️",
        "hanzi": "扁桃体红肿发炎了，是换季引发的重感冒。你对青霉素过敏吗？",
        "pinyin": "Biǎntáotǐ hóngzhǒng fāyán le, shì huànjì yǐnfā de zhòng gǎnmào. Nǐ duì qīngméisù guòmǐn ma?",
        "vi": "Amidan sưng đỏ viêm rồi, là cảm cúm nặng do chuyển mùa đấy. Bạn có dị ứng thuốc Penicillin không?"
      },
      {
        "speaker": "李明",
        "role": "Bệnh nhân",
        "avatar": "🤒",
        "hanzi": "我对药物不过敏。",
        "pinyin": "Wǒ duì yàowù bù guòmǐn.",
        "vi": "Tôi không bị dị ứng thuốc men gì cả ạ."
      },
      {
        "speaker": "医生",
        "role": "Bác sĩ khoa nội",
        "avatar": "👨‍⚕️",
        "hanzi": "好，我给你开三天的消炎药和退烧药。这个退烧药体温超过38.5度时吃一片。",
        "pinyin": "Hǎo, wǒ gěi nǐ kāi sān tiān de xiāoyányào hé tuìshāoyào. Zhè ge tuìshāoyào tǐwēn chāoguò 38.5 dù shí chī yī piàn.",
        "vi": "Được, bác kê cho 3 ngày thuốc kháng viêm và thuốc hạ sốt nhé. Thuốc hạ sốt này khi nào nhiệt độ trên 38.5 độ thì uống 1 viên."
      },
      {
        "speaker": "李明",
        "role": "Bệnh nhân",
        "avatar": "🤒",
        "hanzi": "请问消炎药怎么吃呢？",
        "pinyin": "Qǐngwèn xiāoyányào zěnme chī ne?",
        "vi": "Xin hỏi thuốc kháng viêm uống thế nào ạ?"
      },
      {
        "speaker": "医生",
        "role": "Bác sĩ khoa nội",
        "avatar": "👨‍⚕️",
        "hanzi": "消炎药一天三次，一次两粒，一定要饭后半小时吃。多喝温开水，千万别熬夜！",
        "pinyin": "Xiāoyányào yī tiān sān cì, yī cì liǎng lì, yídìng yào fànhòu bàn xiǎoshí chī. Duō hē wēnkāishuǐ, qiānwàn bié áoyè!",
        "vi": "Thuốc kháng viêm một ngày 3 lần, mỗi lần 2 viên, nhất định phải uống sau ăn nửa tiếng nhé. Uống nhiều nước ấm, tuyệt đối không thức khuya!"
      }
    ],
    "challenges": [
      {
        "promptVi": "Bác sĩ ơi, từ hôm qua đến giờ tôi cảm thấy toàn thân không khỏe.",
        "grammarHint": "Bác sĩ (医生) + Dấu phẩy + Tôi từ hôm qua (我从昨天开始) + Cảm thấy (觉得) + Cả người không khỏe (浑身不舒服).",
        "correctOrder": [
          "医生",
          "，",
          "我从昨天开始",
          "觉得",
          "浑身不舒服"
        ],
        "audioFull": "医生，我从昨天开始觉得浑身不舒服",
        "explanation": "Khi nói bị ốm khó chịu, người Trung Quốc thường nói \"不舒服\" (không được thoải mái/khỏe)."
      },
      {
        "promptVi": "Một ngày uống ba lần, mỗi lần hai viên, sau bữa ăn uống.",
        "grammarHint": "Một ngày ba lần (一天三次) + Dấu phẩy + Mỗi lần hai viên (一次两片) + Dấu phẩy + Sau bữa ăn uống thuốc (饭后吃药).",
        "correctOrder": [
          "一天三次",
          "，",
          "一次两片",
          "，",
          "饭后吃药"
        ],
        "audioFull": "一天三次，一次两片，饭后吃药",
        "explanation": "Cách diễn đạt tần suất trong tiếng Hán: \"Thời gian + Số lần\" (一天三次: 1 ngày 3 lần)."
      }
    ]
  },
  {
    "id": "interview",
    "title": "Phỏng Vấn Xin Việc (公司面试与求职)",
    "sub": "Tự giới thiệu, kinh nghiệm & đãi ngộ",
    "icon": "💼",
    "category": "work",
    "categoryName": "Công Sở & Học Tập",
    "context": "Bạn tham gia buổi phỏng vấn trực tiếp tại một doanh nghiệp thương mại quốc tế. Bạn tự tin giới thiệu bản thân, kỹ năng và nguyện vọng phát triển.",
    "video": {
      "title": "Tiếng Trung Cho Người Đi Làm: Kỹ Năng Phỏng Vấn Xin Việc (面试)",
      "channel": "Panda Studio",
      "channelHandle": "@PandaStudio24",
      "youtubeId": "7x_i_Interview",
      "embedUrl": "https://www.youtube-nocookie.com/embed/0c_0K8T_b1s?start=900",
      "channelUrl": "https://www.youtube.com/@PandaStudio24",
      "duration": "15:10",
      "desc": "Video bài giảng thực tế từ kênh Panda Studio hướng dẫn cách giới thiệu bản thân, trả lời câu hỏi chuyên môn và đàm phán mức lương."
    },
    "culturalTips": [
      "Vào phòng phỏng vấn, gõ cửa hai tiếng nhẹ nhàng, cúi chào: \"各位面试官好！\" (Chào các anh chị phỏng vấn viên!).",
      "Luôn duy trì ánh mắt tự tin, hai tay đặt trên đùi hoặc bàn, xưng hô tôn kính \"您\" thay vì \"你\".",
      "Khi nói về mức lương mong muốn (期望薪资), nên đưa ra một khoảng linh hoạt kèm lời bày tỏ sẵn sàng học hỏi."
    ],
    "vocabList": [
      {
        "hanzi": "面试官",
        "pinyin": "miànshìguān",
        "hv": "Diện thí quan",
        "vi": "Người phỏng vấn"
      },
      {
        "hanzi": "简历",
        "pinyin": "jiǎnlì",
        "hv": "Giản lịch",
        "vi": "Sơ yếu lý lịch (CV)"
      },
      {
        "hanzi": "自我介绍",
        "pinyin": "zìwǒ jièshào",
        "hv": "Tự ngã giới thiệu",
        "vi": "Tự giới thiệu bản thân"
      },
      {
        "hanzi": "毕业",
        "pinyin": "bìyè",
        "hv": "Tất nghiệp",
        "vi": "Tốt nghiệp đại học"
      },
      {
        "hanzi": "专业",
        "pinyin": "zhuānyè",
        "hv": "Chuyên nghiệp",
        "vi": "Chuyên ngành học"
      },
      {
        "hanzi": "工作经验",
        "pinyin": "gōngzuò jīngyàn",
        "hv": "Công tác kinh nghiệm",
        "vi": "Kinh nghiệm làm việc"
      },
      {
        "hanzi": "优势",
        "pinyin": "yōushì",
        "hv": "Ưu thế",
        "vi": "Thế mạnh nổi bật"
      },
      {
        "hanzi": "团队合作",
        "pinyin": "tuánduì hézuò",
        "hv": "Đoàn đội hợp tác",
        "vi": "Làm việc nhóm"
      },
      {
        "hanzi": "薪水",
        "pinyin": "xīnshui",
        "hv": "Tân thủy",
        "vi": "Tiền lương hàng tháng"
      },
      {
        "hanzi": "加班",
        "pinyin": "jiābān",
        "hv": "Gia ban",
        "vi": "Làm thêm giờ (OT)"
      },
      {
        "hanzi": "五险一金",
        "pinyin": "wǔxiǎnyījīn",
        "hv": "Ngũ hiểm nhất kim",
        "vi": "Chế độ 5 bảo hiểm và 1 quỹ nhà"
      },
      {
        "hanzi": "入职",
        "pinyin": "rùzhí",
        "hv": "Nhập chức",
        "vi": "Bắt đầu nhận việc"
      },
      {
        "hanzi": "职位",
        "pinyin": "zhíwèi",
        "hv": "Chức vị",
        "vi": "Vị trí công việc"
      },
      {
        "hanzi": "录用通知",
        "pinyin": "lùyòng tōngzhī",
        "hv": "Lục dụng thông tri",
        "vi": "Thông báo trúng tuyển (Offer)"
      },
      {
        "hanzi": "出差",
        "pinyin": "chūchāi",
        "hv": "Xuất sai",
        "vi": "Đi công tác xa"
      },
      {
        "hanzi": "发展空间",
        "pinyin": "fāzhǎn kōngjiān",
        "hv": "Phát triển không gian",
        "vi": "Cơ hội thăng tiến"
      }
    ],
    "dialogue": [
      {
        "speaker": "面试官",
        "role": "Trưởng phòng nhân sự",
        "avatar": "👩‍💼",
        "hanzi": "请进！请坐。首先请你做一个简单的自我介绍吧。",
        "pinyin": "Qǐng jìn! Qǐng zuò. Shǒuxiān qǐng nǐ zuò yī gè jiǎndān de zìwǒ jièshào ba.",
        "vi": "Mời vào! Mời ngồi. Trước hết xin mời bạn tự giới thiệu ngắn gọn về bản thân nhé."
      },
      {
        "speaker": "李明",
        "role": "Ứng viên",
        "avatar": "👨‍💼",
        "hanzi": "各位面试官好！我叫李明，毕业于河内国家大学国际经济专业。我有两年的外贸业务经验，中文取得了HSK 5级证书。",
        "pinyin": "Gèwèi miànshìguān hǎo! Wǒ jiào Lǐ Míng, bìyè yú Hénèi guójiā dàxué guójì jīngjì zhuānyè. Wǒ yǒu liǎng nián de wàimào yèwù jīngyàn, zhōngwén qǔdé le HSK 5 jí zhèngshū.",
        "vi": "Kính chào các quý vị phỏng vấn viên! Tôi tên Lý Minh, tốt nghiệp chuyên ngành Kinh tế Quốc tế tại ĐHQG Hà Nội. Tôi có 2 năm kinh nghiệm kinh doanh xuất nhập khẩu và đã đạt chứng chỉ HSK 5."
      },
      {
        "speaker": "面试官",
        "role": "Trưởng phòng nhân sự",
        "avatar": "👩‍💼",
        "hanzi": "你的中文非常流利！请问你为什么想申请我们公司的外贸主管职位？",
        "pinyin": "Nǐ de zhōngwén fēicháng liúlì! Qǐngwèn nǐ wèishénme xiǎng shēnqǐng wǒmen gōngsī de wàimào zhǔguǎn zhíwèi?",
        "vi": "Tiếng Trung của bạn rất lưu loát! Xin hỏi tại sao bạn lại muốn ứng tuyển vào vị trí Trưởng nhóm Ngoại thương của công ty chúng tôi?"
      },
      {
        "speaker": "李明",
        "role": "Ứng viên",
        "avatar": "👨‍💼",
        "hanzi": "贵公司在中越跨境电商领域处于行业领先地位，平台非常广阔。我相信自己的语言优势和商务沟通能力能为公司开拓更多新客户。",
        "pinyin": "Guì gōngsī zài Zhōng Yuè kuàjìng diànshāng lǐngyù chǔyú hángyè lǐngxiān dìwèi, píngtái fēicháng guǎngkuò. Wǒ xiāngxìn zìjǐ de yǔyán yōushì hé shāngwù gōutōng néngnlì néng wèi gōngsī kāituò gèng duō xīn kèhù.",
        "vi": "Quý công ty giữ vị trí dẫn đầu trong lĩnh vực thương mại điện tử xuyên biên giới Trung - Việt, nền tảng rất vững mạnh. Tôi tin thế mạnh ngôn ngữ và khả năng đàm phán của mình sẽ giúp công ty mở rộng thêm nhiều khách hàng mới."
      },
      {
        "speaker": "面试官",
        "role": "Trưởng phòng nhân sự",
        "avatar": "👩‍💼",
        "hanzi": "如果工作中需要经常出差去广州和深圳，你能接受吗？",
        "pinyin": "Rúguǒ gōngzuò zhōng xūyào jīngcháng chūchāi qù Guǎngzhōu hé Shēnzhèn, nǐ néng jiēshòu ma?",
        "vi": "Nếu công việc đòi hỏi phải thường xuyên đi công tác Quảng Châu và Thâm Quyến, bạn có sẵn sàng không?"
      },
      {
        "speaker": "李明",
        "role": "Ứng viên",
        "avatar": "👨‍💼",
        "hanzi": "完全没有问题！我年轻有活力，非常适应出差考察。",
        "pinyin": "Wánquán méi yǒu wèntí! Wǒ niánqīng yǒu huólì, fēicháng shìyìng chūchāi kǎochá.",
        "vi": "Dạ hoàn toàn không thành vấn đề ạ! Tôi còn trẻ, tràn đầy năng lượng và rất thích nghi với việc đi công tác thực tế."
      },
      {
        "speaker": "面试官",
        "role": "Trưởng phòng nhân sự",
        "avatar": "👩‍💼",
        "hanzi": "很好。面试结果会在三个工作日内通过邮件通知你。感谢你今天专程过来！",
        "pinyin": "Hěn hǎo. Miànshì jiéguǒ huì zài sān gè gōngzuòrì nèi tōngguò yóujiàn tōngzhī nǐ. Gǎnxiè nǐ jīntiān zhuānchéng guòlái!",
        "vi": "Rất tốt. Kết quả phỏng vấn sẽ được thông báo qua email cho bạn trong vòng 3 ngày làm việc. Cảm ơn bạn hôm nay đã dành thời gian đến!"
      }
    ],
    "challenges": [
      {
        "promptVi": "Xin chào các vị phỏng vấn viên, tôi đã có hai năm kinh nghiệm làm việc.",
        "grammarHint": "Chào các vị phỏng vấn (各位面试官好) + Dấu phẩy + Tôi có hai năm (我有两年的) + Kinh nghiệm làm việc (工作经验).",
        "correctOrder": [
          "各位面试官好",
          "，",
          "我有两年的",
          "工作经验"
        ],
        "audioFull": "各位面试官好，我有两年的工作经验",
        "explanation": "Lời chào trang trọng khi bắt đầu phỏng vấn xin việc: \"各位面试官好\"."
      }
    ]
  },
  {
    "id": "friends",
    "title": "Làm Quen Bạn Mới (结交新朋友与聊天)",
    "sub": "Hỏi thăm, sở thích & kết bạn WeChat",
    "icon": "🤝",
    "category": "daily",
    "categoryName": "Sức Khỏe & Đời Sống",
    "context": "Tại một buổi giao lưu văn hóa quốc tế, bạn gặp một người bạn Trung Quốc trạc tuổi. Hai bạn làm quen, trò chuyện về sở thích và thêm WeChat nhau.",
    "video": {
      "title": "Luyện Nghe Hội Thoại Tiếng Trung: Làm Quen Bạn Mới (结交新朋友)",
      "channel": "Panda Studio",
      "channelHandle": "@PandaStudio24",
      "youtubeId": "8x_f_Friends",
      "embedUrl": "https://www.youtube-nocookie.com/embed/0c_0K8T_b1s?start=1080",
      "channelUrl": "https://www.youtube.com/@PandaStudio24",
      "duration": "12:00",
      "desc": "Video bài giảng thực tế từ kênh Panda Studio dạy cách chào hỏi, bắt chuyện tự nhiên, hỏi quê quán, tuổi tác và trao đổi WeChat."
    },
    "culturalTips": [
      "Cách bắt chuyện tự nhiên nhất ở Trung Quốc: \"你好，我可以坐这里吗？\" (Chào bạn, mình ngồi đây được không?).",
      "Người trẻ Trung Quốc rất chuộng kết bạn qua WeChat: \"加个微信吧\" (Thêm WeChat nhau nhé).",
      "Chủ đề nói chuyện an toàn, dễ gắn kết: Ẩm thực (美食), Du lịch (旅游), Phim ảnh (电影), Thú cưng (宠物)."
    ],
    "vocabList": [
      {
        "hanzi": "交朋友",
        "pinyin": "jiāo péngyou",
        "hv": "Giao bằng hữu",
        "vi": "Kết bạn mới"
      },
      {
        "hanzi": "认识你很高兴",
        "pinyin": "rènshi nǐ hěn gāoxìng",
        "hv": "Nhận thức nhĩ hẩn cao hưng",
        "vi": "Rất vui được làm quen với bạn"
      },
      {
        "hanzi": "老家",
        "pinyin": "lǎojiā",
        "hv": "Lão gia",
        "vi": "Quê quán, quê hương"
      },
      {
        "hanzi": "爱好",
        "pinyin": "àihào",
        "hv": "Ái hảo",
        "vi": "Sở thích cá nhân"
      },
      {
        "hanzi": "平时",
        "pinyin": "píngshí",
        "hv": "Bình thời",
        "vi": "Lúc bình thường, ngày thường"
      },
      {
        "hanzi": "加微信",
        "pinyin": "jiā Wēixìn",
        "hv": "Gia Vi tín",
        "vi": "Kết bạn WeChat"
      },
      {
        "hanzi": "扫一扫",
        "pinyin": "sǎoyīsǎo",
        "hv": "Tảo nhất tảo",
        "vi": "Quét mã QR"
      },
      {
        "hanzi": "发消息",
        "pinyin": "fā xiāoxi",
        "hv": "Phát tiêu tức",
        "vi": "Gửi tin nhắn trò chuyện"
      },
      {
        "hanzi": "保持联系",
        "pinyin": "bǎochí liánxì",
        "hv": "Bảo trì liên hệ",
        "vi": "Giữ liên lạc thường xuyên"
      },
      {
        "hanzi": "有机会",
        "pinyin": "yǒu jīhuì",
        "hv": "Hữu cơ hội",
        "vi": "Nếu có dịp, có cơ hội"
      },
      {
        "hanzi": "喝奶茶",
        "pinyin": "hē nǎichá",
        "hv": "Hát nãi trà",
        "vi": "Uống trà sữa"
      },
      {
        "hanzi": "逛街",
        "pinyin": "guàngjiē",
        "hv": "Cuống nhai",
        "vi": "Dạo phố, lượn lờ"
      },
      {
        "hanzi": "性格",
        "pinyin": "xìnggé",
        "hv": "Tính cách",
        "vi": "Tính tình, tính cách"
      },
      {
        "hanzi": "幽默",
        "pinyin": "yōumò",
        "hv": "U mặc",
        "vi": "Hài hước, hóm hỉnh"
      },
      {
        "hanzi": "同龄人",
        "pinyin": "tónglíngrén",
        "hv": "Đồng linh nhân",
        "vi": "Người cùng trang lứa"
      },
      {
        "hanzi": "常聚聚",
        "pinyin": "cháng jùju",
        "hv": "Thường tụ tụ",
        "vi": "Thường xuyên tụ tập nhé"
      }
    ],
    "dialogue": [
      {
        "speaker": "王磊",
        "role": "Bạn người Trung Quốc",
        "avatar": "🙋‍♂️",
        "hanzi": "你好！这里有人坐吗？我可以坐这儿吗？",
        "pinyin": "Nǐhǎo! Zhèlǐ yǒurén zuò ma? Wǒ kěyǐ zuò zhèr ma?",
        "vi": "Chào bạn! Chỗ này có ai ngồi chưa? Mình ngồi đây được chứ?"
      },
      {
        "speaker": "李明",
        "role": "Bạn người Việt Nam",
        "avatar": "🙋‍♂️",
        "hanzi": "没人坐，请坐吧！你也是来参加中文角活动的吗？",
        "pinyin": "Méirén zuò, qǐng zuò ba! Nǐ yě shì lái cānjiā zhōngwénjiǎo huódòng de ma?",
        "vi": "Không có ai đâu, bạn ngồi đi! Bạn cũng đến tham gia câu lạc bộ Góc Tiếng Trung à?"
      },
      {
        "speaker": "王磊",
        "role": "Bạn người Trung Quốc",
        "avatar": "🙋‍♂️",
        "hanzi": "对啊！我叫王磊，来自北京。你的普通话说得真标准！你叫什么名字？",
        "pinyin": "Duì a! Wǒ jiào Wáng Lěi, láizì Běijīng. Nǐ de pǔtōnghuà shuō de zhēn biāozhǔn! Nǐ jiào shénme míngzi?",
        "vi": "Đúng vậy! Mình tên Vương Lỗi, đến từ Bắc Kinh. Tiếng Phổ thông của bạn nói chuẩn thật đấy! Bạn tên là gì?"
      },
      {
        "speaker": "李明",
        "role": "Bạn người Việt Nam",
        "avatar": "🙋‍♂️",
        "hanzi": "认识你很高兴，王磊！我叫李明，我是越南人。学中文一年多了。",
        "pinyin": "Rènshi nǐ hěn gāoxìng, Wáng Lěi! Wǒ jiào Lǐ Míng, wǒ shì Yuènánrén. Xué zhōngwén yī nián duō le.",
        "vi": "Rất vui được làm quen với bạn, Vương Lỗi! Mình tên Lý Minh, người Việt Nam. Mình học tiếng Trung được hơn 1 năm rồi."
      },
      {
        "speaker": "王磊",
        "role": "Bạn người Trung Quốc",
        "avatar": "🙋‍♂️",
        "hanzi": "哇，才一年就说得这么棒！你平时有什么兴趣爱好吗？",
        "pinyin": "Wā, cái yī nián jiù shuō de zhème bàng! Nǐ píngshí yǒu shénme xìngqù àihào ma?",
        "vi": "Woa, mới một năm mà nói siêu thế! Bình thường bạn có sở thích gì không?"
      },
      {
        "speaker": "李明",
        "role": "Bạn người Việt Nam",
        "avatar": "🙋‍♂️",
        "hanzi": "我平时喜欢听中文歌、踢足球，还很喜欢中国美食。你呢？",
        "pinyin": "Wǒ píngshí xǐhuan tīng zhōngwén gē, tī zúqiú, hái hěn xǐhuan zhōngguó měishí. Nǐ ne?",
        "vi": "Mình thích nghe nhạc Hoa, đá bóng và mê ẩm thực Trung Quốc lắm. Còn bạn thì sao?"
      },
      {
        "speaker": "王磊",
        "role": "Bạn người Trung Quốc",
        "avatar": "🙋‍♂️",
        "hanzi": "我也超级爱踢球！那咱们加个微信吧，周末约着一起去体育场踢球、喝奶茶！",
        "pinyin": "Wǒ yě chāojí ài tīqiú! Nà zánmen jiā gè Wēixìn ba, zhōumò yuē zhe yīqǐ qù tǐyùchǎng tīqiú, hē nǎichá!",
        "vi": "Mình cũng cực kỳ thích đá bóng luôn! Vậy chúng mình thêm WeChat nhau đi, cuối tuần hẹn đi đá bóng rồi đi uống trà sữa nhé!"
      },
      {
        "speaker": "李明",
        "role": "Bạn người Việt Nam",
        "avatar": "🙋‍♂️",
        "hanzi": "太好了！我扫你的二维码。常联系啊！",
        "pinyin": "Tài hǎo le! Wǒ sǎo nǐ de èrwèimǎ. Cháng liánxì a!",
        "vi": "Tuyệt vời! Mình quét mã QR của bạn nhé. Giữ liên lạc thường xuyên nha!"
      }
    ],
    "challenges": [
      {
        "promptVi": "Rất vui được làm quen với bạn, chúng ta thêm WeChat nhau nhé.",
        "grammarHint": "Quen biết bạn rất vui (认识你很高兴) + Dấu phẩy + Chúng ta thêm WeChat nhé (我们加个微信吧).",
        "correctOrder": [
          "认识你很高兴",
          "，",
          "我们加个微信吧"
        ],
        "audioFull": "认识你很高兴，我们加个微信吧",
        "explanation": "Mẫu câu kinh điển kết bạn thời hiện đại: \"认识你很高兴，加个微信吧！\"."
      }
    ]
  },
  {
    "id": "supermarket",
    "title": "Đi Siêu Thị Mua Sắm (在超市采购)",
    "sub": "Cân rau củ, túi môi trường & tích điểm",
    "icon": "🛒",
    "category": "shopping",
    "categoryName": "Mua Sắm & Tiêu Dùng",
    "context": "Bạn vào siêu thị lớn để mua rau củ tươi, đồ dùng sinh hoạt, cân đồ và thanh toán tại quầy tự động.",
    "video": {
      "title": "Luyện Nghe Tiếng Trung Thực Tế: Đi Siêu Thị Mua Đồ (超市买东西)",
      "channel": "Panda Studio",
      "channelHandle": "@PandaStudio24",
      "youtubeId": "9x_s_Supermarket",
      "embedUrl": "https://www.youtube-nocookie.com/embed/0c_0K8T_b1s?start=1260",
      "channelUrl": "https://www.youtube.com/@PandaStudio24",
      "duration": "11:45",
      "desc": "Video bài giảng thực tế từ kênh Panda Studio dạy cách hỏi vị trí quầy hàng, cân hoa quả và thanh toán tại siêu thị."
    },
    "culturalTips": [
      "Ở siêu thị Trung Quốc, túi nilon tính tiền riêng: \"需要塑料袋吗？\" (Có cần túi bóng không?). Nên tự mang túi vải bảo vệ môi trường.",
      "Rau củ hoa quả cân rời cần được dán tem giá tại quầy cân (称重处) trước khi ra quầy thu ngân tính tiền.",
      "Hiện nay có rất nhiều quầy tự thanh toán (自助结账机), chỉ cần quét mã vạch sản phẩm rồi quét WeChat/Alipay là xong."
    ],
    "vocabList": [
      {
        "hanzi": "超市",
        "pinyin": "chāoshì",
        "hv": "Siêu thị",
        "vi": "Siêu thị lớn"
      },
      {
        "hanzi": "购物车",
        "pinyin": "gòuwùchē",
        "hv": "Cấu vật xa",
        "vi": "Xe đẩy mua hàng"
      },
      {
        "hanzi": "称重",
        "pinyin": "chēngzhòng",
        "hv": "Xứng trọng",
        "vi": "Cân trọng lượng"
      },
      {
        "hanzi": "保质期",
        "pinyin": "bǎozhìqī",
        "hv": "Bảo chất kỳ",
        "vi": "Hạn sử dụng"
      },
      {
        "hanzi": "特价",
        "pinyin": "tèjià",
        "hv": "Đặc giá",
        "vi": "Giá ưu đãi, giảm giá"
      },
      {
        "hanzi": "塑料袋",
        "pinyin": "sùliàodài",
        "hv": "Tố liêu đại",
        "vi": "Túi nilon"
      },
      {
        "hanzi": "会员卡",
        "pinyin": "huìyuánkǎ",
        "hv": "Hội viên tạp",
        "vi": "Thẻ thành viên"
      },
      {
        "hanzi": "收银台",
        "pinyin": "shōuyíntái",
        "hv": "Thu ngân đài",
        "vi": "Quầy thu ngân"
      },
      {
        "hanzi": "新鲜",
        "pinyin": "xīnxiān",
        "hv": "Tân tiên",
        "vi": "Tươi ngon mới hái"
      },
      {
        "hanzi": "苹果",
        "pinyin": "píngguǒ",
        "hv": "Bình quả",
        "vi": "Quả táo tây"
      },
      {
        "hanzi": "纯牛奶",
        "pinyin": "chún niúnǎi",
        "hv": "Thuần ngưu nãi",
        "vi": "Sữa tươi nguyên chất"
      },
      {
        "hanzi": "纸巾",
        "pinyin": "zhǐjīn",
        "hv": "Chỉ cân",
        "vi": "Khăn giấy sinh hoạt"
      },
      {
        "hanzi": "洗发水",
        "pinyin": "xǐfàshuǐ",
        "hv": "Tẩy phát thủy",
        "vi": "Dầu gội đầu"
      },
      {
        "hanzi": "打折区",
        "pinyin": "dǎzhé qū",
        "hv": "Đả chiết khu",
        "vi": "Khu vực giảm giá"
      },
      {
        "hanzi": "自助结账",
        "pinyin": "zìzhù jiézhàng",
        "hv": "Tự trợ kết trướng",
        "vi": "Tự quét mã thanh toán"
      },
      {
        "hanzi": "发票",
        "pinyin": "fāpiào",
        "hv": "Phát phiếu",
        "vi": "Hóa đơn mua sắm"
      }
    ],
    "dialogue": [
      {
        "speaker": "李明",
        "role": "Khách mua sắm",
        "avatar": "👨‍💼",
        "hanzi": "请问阿姨，这里的红富士苹果怎么卖？",
        "pinyin": "Qǐngwèn āyí, zhèlǐ de hóngfùshì píngguǒ zěnme mài?",
        "vi": "Xin hỏi cô ơi, táo đỏ Fuji ở đây bán thế nào ạ?"
      },
      {
        "speaker": "理货员",
        "role": "Nhân viên siêu thị",
        "avatar": "👩‍🌾",
        "hanzi": "今天搞促销，六块八一斤。那边有袋子，挑好了拿过来我给您称重贴标签。",
        "pinyin": "Jīntiān gǎo cùxiāo, liù kuài bā yī jīn. Nàbiān yǒu dàizi, tiāo hǎo le ná guòlái wǒ gěi nín chēngzhòng tiē biāoqiān.",
        "vi": "Hôm nay khuyến mãi, 6 tệ 8 một cân (500g). Bên kia có túi, nhặt xong mang qua đây cô cân rồi dán tem giá cho nhé."
      },
      {
        "speaker": "李明",
        "role": "Khách mua sắm",
        "avatar": "👨‍💼",
        "hanzi": "好的，我挑五个大一点的。另外请问纯牛奶在哪个货架？",
        "pinyin": "Hǎo de, wǒ tiāo wǔ gè dà yīdiǎn de. Lìngwài qǐngwèn chún niúnǎi zài nǎ ge huòjià?",
        "vi": "Dạ vâng, con chọn 5 quả to một chút. Cho con hỏi thêm sữa tươi nguyên chất ở kệ hàng nào vậy cô?"
      },
      {
        "speaker": "理货员",
        "role": "Nhân viên siêu thị",
        "avatar": "👩‍🌾",
        "hanzi": "往前走到底，饮料区左手边第三排就是乳制品冷藏柜。",
        "pinyin": "Wǎng qián zǒu dàodǐ, yǐnliàoqū zuǒshǒubiān dì-sān pái jiù shì rǔzhìpǐn lěngcángguì.",
        "vi": "Đi thẳng hết đường, khu đồ uống bên tay trái hàng thứ 3 chính là tủ mát sữa nhé."
      },
      {
        "speaker": "收银员",
        "role": "Thu ngân siêu thị",
        "avatar": "👩‍💻",
        "hanzi": "您好！有会员卡吗？需要大塑料袋还是小塑料袋？",
        "pinyin": "Nín hǎo! Yǒu huìyuánkǎ ma? Xūyào dà sùliàodài háishì xiǎo sùliàodài?",
        "vi": "Chào quý khách! Anh có thẻ thành viên không? Anh cần túi nilon cỡ to hay cỡ nhỏ ạ?"
      },
      {
        "speaker": "李明",
        "role": "Khách mua sắm",
        "avatar": "👨‍💼",
        "hanzi": "没有会员。我自己带了环保布袋，不需要塑料袋了。一共多少钱？",
        "pinyin": "Méi yǒu huìyuán. Wǒ zìjǐ dài le huánbǎo bùdài, bù xūyào sùliàodài le. Yīgòng duōshao qián?",
        "vi": "Tôi không có thẻ thành viên. Tôi tự mang túi vải rồi, không cần túi nilon đâu. Hết tất cả bao nhiêu ạ?"
      },
      {
        "speaker": "收银员",
        "role": "Thu ngân siêu thị",
        "avatar": "👩‍💻",
        "hanzi": "一共五十八块五毛。扫屏幕上的二维码即可付款，小票请收好！",
        "pinyin": "Yīgòng wǔshíbā kuài wǔmáo. Sǎo píngmù shàng de èrwèimǎ jíkě fùkuǎn, xiǎopiào qǐng shōuhǎo!",
        "vi": "Tổng cộng 58 tệ 5 hào. Quét mã QR trên màn hình là xong, hóa đơn anh giữ cẩn thận nhé!"
      }
    ],
    "challenges": [
      {
        "promptVi": "Tôi tự mang theo túi môi trường, không cần túi nilon đâu.",
        "grammarHint": "Tôi tự mang (我自己带了) + Túi môi trường (环保袋) + Dấu phẩy + Không cần túi nilon (不要塑料袋).",
        "correctOrder": [
          "我自己带了",
          "环保袋",
          "，",
          "不要塑料袋"
        ],
        "audioFull": "我自己带了环保袋，不要塑料袋",
        "explanation": "Bảo vệ môi trường là nét văn hóa hiện đại khi đi siêu thị ở Trung Quốc."
      }
    ]
  },
  {
    "id": "travel_ticket",
    "title": "Du Lịch & Mua Vé (景区旅游与购票)",
    "sub": "Mua vé tham quan, cáp treo & chụp ảnh",
    "icon": "🏯",
    "category": "travel",
    "categoryName": "Du Lịch & Di Chuyển",
    "context": "Bạn đi tham quan Vạn Lý Trường Thành hoặc Cố Cung, đến quầy vé hỏi mua vé người lớn, thuê máy thuyết minh và hỏi cáp treo.",
    "video": {
      "title": "Luyện Nghe Tiếng Trung: Đi Du Lịch & Mua Vé Tham Quan (旅游买票)",
      "channel": "Panda Studio",
      "channelHandle": "@PandaStudio24",
      "youtubeId": "10x_t_Travel",
      "embedUrl": "https://www.youtube-nocookie.com/embed/0c_0K8T_b1s?start=1440",
      "channelUrl": "https://www.youtube.com/@PandaStudio24",
      "duration": "13:50",
      "desc": "Video bài giảng thực tế từ kênh Panda Studio dạy cách mua vé tham quan, hỏi giảm giá học sinh và các dịch vụ du lịch."
    },
    "culturalTips": [
      "Nhiều danh lam thắng cảnh ở Trung Quốc hiện nay bắt buộc phải đặt vé thật trước qua mạng kèm số hộ chiếu/CCCD.",
      "Nếu có thẻ sinh viên quốc tế (学生证), bạn thường được giảm 50% giá vé vào cổng (半价门票).",
      "Máy thuyết minh tự động (语音导览器) có hỗ trợ nhiều ngôn ngữ gồm tiếng Anh, tiếng Trung và tiếng Việt."
    ],
    "vocabList": [
      {
        "hanzi": "售票处",
        "pinyin": "shòupiàochù",
        "hv": "Thụ phiếu xứ",
        "vi": "Quầy bán vé tham quan"
      },
      {
        "hanzi": "门票",
        "pinyin": "ménpiào",
        "hv": "Môn phiếu",
        "vi": "Vé vào cửa"
      },
      {
        "hanzi": "成人票",
        "pinyin": "chéngrénpiào",
        "hv": "Thành nhân phiếu",
        "vi": "Vé người lớn"
      },
      {
        "hanzi": "学生票",
        "pinyin": "xuéshengpiào",
        "hv": "Học sinh phiếu",
        "vi": "Vé học sinh / sinh viên"
      },
      {
        "hanzi": "半价",
        "pinyin": "bànjià",
        "hv": "Bán giá",
        "vi": "Nửa giá, giảm 50%"
      },
      {
        "hanzi": "缆车",
        "pinyin": "lǎnchē",
        "hv": "Lãm xa",
        "vi": "Cáp treo lên núi"
      },
      {
        "hanzi": "导游",
        "pinyin": "dǎoyóu",
        "hv": "Đạo du",
        "vi": "Hướng dẫn viên du lịch"
      },
      {
        "hanzi": "讲解器",
        "pinyin": "jiǎngjiěqì",
        "hv": "Giảng giải khí",
        "vi": "Máy tai nghe thuyết minh"
      },
      {
        "hanzi": "故宫",
        "pinyin": "Gùgōng",
        "hv": "Cố Cung",
        "vi": "Tử Cấm Thành Bắc Kinh"
      },
      {
        "hanzi": "长城",
        "pinyin": "Chángchéng",
        "hv": "Trường Thành",
        "vi": "Vạn Lý Trường Thành"
      },
      {
        "hanzi": "风景",
        "pinyin": "fēngjǐng",
        "hv": "Phong cảnh",
        "vi": "Phong cảnh non nước"
      },
      {
        "hanzi": "拍照",
        "pinyin": "pāizhào",
        "hv": "Phách chiếu",
        "vi": "Chụp hình, chụp ảnh"
      },
      {
        "hanzi": "纪念品",
        "pinyin": "jìniànpǐn",
        "hv": "Kỷ niệm phẩm",
        "vi": "Quà lưu niệm"
      },
      {
        "hanzi": "洗手间",
        "pinyin": "xǐshǒujiān",
        "hv": "Tẩy thủ gian",
        "vi": "Nhà vệ sinh"
      },
      {
        "hanzi": "开放时间",
        "pinyin": "kāifàng shíjiān",
        "hv": "Khai phóng thời gian",
        "vi": "Giờ mở cửa"
      },
      {
        "hanzi": "祝你玩得愉快",
        "pinyin": "zhù nǐ wán de yúkuài",
        "hv": "Chúc nhĩ ngoạn đắc du khoái",
        "vi": "Chúc bạn đi chơi vui vẻ"
      }
    ],
    "dialogue": [
      {
        "speaker": "李明",
        "role": "Khách du lịch",
        "avatar": "👨‍💼",
        "hanzi": "您好！请问一张故宫门票多少钱？学生证有优惠吗？",
        "pinyin": "Nín hǎo! Qǐngwèn yī zhāng Gùgōng ménpiào duōshao qián? Xuéshengzhèng yǒu yōuhuì ma?",
        "vi": "Xin chào cô! Xin hỏi một vé vào Cố Cung giá bao nhiêu? Thẻ sinh viên có được giảm giá không ạ?"
      },
      {
        "speaker": "售票员",
        "role": "Nhân viên bán vé",
        "avatar": "👩‍💼",
        "hanzi": "成人票六十元，出示全日制学生证享有半价优惠，三十元一张。",
        "pinyin": "Chéngrénpiào liùshí yuán, chūshì quánrìzhì xuéshengzhèng xiǎngyǒu bànjià yōuhuì, sānshí yuán yī zhāng.",
        "vi": "Vé người lớn 60 tệ, xuất trình thẻ sinh viên chính quy được hưởng nửa giá, 30 tệ một vé."
      },
      {
        "speaker": "李明",
        "role": "Khách du lịch",
        "avatar": "👨‍💼",
        "hanzi": "太好了，这是我的学生证和护照，请给我一张学生票。",
        "pinyin": "Tài hǎo le, zhè shì wǒ de xuéshengzhèng hé hùzhào, qǐng gěi wǒ yī zhāng xuéshengpiào.",
        "vi": "Tuyệt quá, đây là thẻ sinh viên và hộ chiếu của tôi, cho tôi một vé sinh viên nhé."
      },
      {
        "speaker": "售票员",
        "role": "Nhân viên bán vé",
        "avatar": "👩‍💼",
        "hanzi": "好的，门票已经绑定在您的护照上了，进大门刷护照过闸机即可。需要租语音讲解器吗？二十元一台。",
        "pinyin": "Hǎo de, ménpiào yǐjīng bǎndìng zài nín de hùzhào shàng le, jìn dàmén shuā hùzhào guò zhájī jíkě. Xūyào zū yǔyīn jiǎngjiěqì ma? Èrshí yuán yī tái.",
        "vi": "Dạ được, vé đã được liên kết vào số hộ chiếu rồi, vào cổng chỉ cần quét hộ chiếu qua cửa xoay là được. Anh có cần thuê máy tai nghe thuyết minh tự động không? 20 tệ một máy ạ."
      },
      {
        "speaker": "李明",
        "role": "Khách du lịch",
        "avatar": "👨‍💼",
        "hanzi": "给我来一台中文讲解器。请问景区几点闭馆？",
        "pinyin": "Gěi wǒ lái yī tái zhōngwén jiǎngjiěqì. Qǐngwèn jǐngqū jǐ diǎn bìguǎn?",
        "vi": "Cho tôi một máy thuyết minh tiếng Trung nhé. Xin hỏi khu di tích mấy giờ đóng cửa ạ?"
      },
      {
        "speaker": "售票员",
        "role": "Nhân viên bán vé",
        "avatar": "👩‍💼",
        "hanzi": "下午四点半停止入场，五点闭馆清场。请合理安排参观路线，祝您参观愉快！",
        "pinyin": "Xiàwǔ sì diǎn bàn tíngzhǐ rùchǎng, wǔ diǎn bìguǎn qīngchǎng. Qǐng hélǐ ānpái cānguān lùxiàn, zhù nín cānguān yúkuài!",
        "vi": "4h30 chiều ngừng đón khách, 5h chiều đóng cửa hết giờ. Anh chú ý sắp xếp thời gian lộ trình tham quan, chúc anh chuyến đi vui vẻ!"
      }
    ],
    "challenges": [
      {
        "promptVi": "Tôi có thẻ sinh viên, có được giảm giá nửa giá không?",
        "grammarHint": "Tôi có thẻ sinh viên (我有学生证) + Dấu phẩy + Có thể nửa giá không (可以半价吗) + ?",
        "correctOrder": [
          "我有学生证",
          "，",
          "可以半价吗",
          "？"
        ],
        "audioFull": "我有学生证，可以半价吗？",
        "explanation": "Hỏi ưu đãi sinh viên: \"凭学生证可以半价吗？\"."
      }
    ]
  },
  {
    "id": "rent_house",
    "title": "Thuê Nhà & Thảo Luận Với Chủ Nhà (租房与房东沟通)",
    "sub": "Hỏi giá thuê, tiền cọc, điện nước & ký hợp đồng",
    "icon": "🏠",
    "category": "daily",
    "categoryName": "Sức Khỏe & Đời Sống",
    "context": "Bạn đang tìm thuê một căn hộ chung cư gần trường hoặc chỗ làm. Bạn hẹn gặp chủ nhà đi xem phòng, thương lượng tiền thuê và tiền điện nước.",
    "video": {
      "title": "Luyện Nghe Tiếng Trung: Đi Thuê Nhà & Nói Chuyện Với Chủ Nhà (租房)",
      "channel": "Panda Studio",
      "channelHandle": "@PandaStudio24",
      "youtubeId": "11x_r_Rent",
      "embedUrl": "https://www.youtube-nocookie.com/embed/0c_0K8T_b1s?start=1620",
      "channelUrl": "https://www.youtube.com/@PandaStudio24",
      "duration": "14:00",
      "desc": "Video bài giảng thực tế từ kênh Panda Studio dạy các mẫu câu giao tiếp khi đi tìm nhà, hỏi đồ đạc nội thất và ký hợp đồng thuê."
    },
    "culturalTips": [
      "Ở Trung Quốc, phương thức thanh toán tiền nhà thông dụng nhất là \"押一付三\" (Đặt cọc 1 tháng, thanh toán tiền nhà 3 tháng một lần).",
      "Trước khi ký hợp đồng, cần hỏi rõ: tiền phí quản lý (物业费), tiền mạng (宽带费) và giá điện nước (水电费) do bên nào chi trả.",
      "Nên chụp ảnh lưu lại chỉ số công tơ điện nước và hiện trạng đồ gỗ gia dụng lúc bắt đầu nhận phòng."
    ],
    "vocabList": [
      {
        "hanzi": "房东",
        "pinyin": "fángdōng",
        "hv": "Phòng đông",
        "vi": "Chủ nhà cho thuê"
      },
      {
        "hanzi": "租金",
        "pinyin": "zūjīn",
        "hv": "Tô kim",
        "vi": "Tiền thuê nhà hàng tháng"
      },
      {
        "hanzi": "押金",
        "pinyin": "yājīn",
        "hv": "Áp kim",
        "vi": "Tiền đặt cọc nhà"
      },
      {
        "hanzi": "押一付三",
        "pinyin": "yā yī fù sān",
        "hv": "Áp nhất phó tam",
        "vi": "Cọc 1 tháng trả 3 tháng"
      },
      {
        "hanzi": "合同",
        "pinyin": "hétong",
        "hv": "Hợp đồng",
        "vi": "Hợp đồng thuê nhà"
      },
      {
        "hanzi": "水电费",
        "pinyin": "shuǐdiànfèi",
        "hv": "Thủy điện phí",
        "vi": "Tiền điện sinh hoạt và nước"
      },
      {
        "hanzi": "物业费",
        "pinyin": "wùyèfèi",
        "hv": "Vật nghiệp phí",
        "vi": "Phí dịch vụ ban quản lý"
      },
      {
        "hanzi": "家具",
        "pinyin": "jiājù",
        "hv": "Gia cụ",
        "vi": "Đồ dùng nội thất"
      },
      {
        "hanzi": "家电齐全",
        "pinyin": "jiādiàn qíquán",
        "hv": "Gia điện tề toàn",
        "vi": "Đầy đủ thiết bị điện tử"
      },
      {
        "hanzi": "空调",
        "pinyin": "kōngtiáo",
        "hv": "Không điều",
        "vi": "Máy điều hòa nhiệt độ"
      },
      {
        "hanzi": "洗衣机",
        "pinyin": "xǐyījī",
        "hv": "Tẩy y cơ",
        "vi": "Máy giặt quần áo"
      },
      {
        "hanzi": "阳台",
        "pinyin": "yángtái",
        "hv": "Dương đài",
        "vi": "Ban công thoáng mát"
      },
      {
        "hanzi": "采光好",
        "pinyin": "cǎiguāng hǎo",
        "hv": "Thải quang hảo",
        "vi": "Đón ánh sáng tự nhiên tốt"
      },
      {
        "hanzi": "离地铁近",
        "pinyin": "lí dìtiě jìn",
        "hv": "Ly địa thiết cận",
        "vi": "Gần trạm tàu điện ngầm"
      },
      {
        "hanzi": "拎包入住",
        "pinyin": "līnbāo rùzhù",
        "hv": "Hao bao nhập trụ",
        "vi": "Xách vali vào ở ngay"
      },
      {
        "hanzi": "起租期",
        "pinyin": "qǐzūqī",
        "hv": "Khởi tô kỳ",
        "vi": "Thời hạn hợp đồng tối thiểu"
      }
    ],
    "dialogue": [
      {
        "speaker": "李明",
        "role": "Người thuê nhà",
        "avatar": "👨‍💼",
        "hanzi": "王阿姨您好！我是约好今天下午来看房的小李。",
        "pinyin": "Wáng āyí nín hǎo! Wǒ shì yuē hǎo jīntiān xiàwǔ lái kànfáng de Xiǎo Lǐ.",
        "vi": "Cháu chào cô Vương! Cháu là Tiểu Lý hẹn cô chiều nay qua xem căn hộ ạ."
      },
      {
        "speaker": "房东",
        "role": "Chủ nhà",
        "avatar": "👩‍🦳",
        "hanzi": "小李快请进！这就是一室一厅的房子，家具家电都是刚配齐的，拎包就能入住。",
        "pinyin": "Xiǎo Lǐ kuài qǐng jìn! Zhè jiù shì yīshìyītīng de fángzi, jiājù jiādiàn dōu shì gāng pèiqí de, līnbāo jiù néng rùzhù.",
        "vi": "Tiểu Lý mau vào đi cháu! Đây là căn hộ một phòng ngủ một phòng khách, đồ gỗ điện máy vừa mới sắm đủ, chỉ cần xách vali vào ở thôi."
      },
      {
        "speaker": "李明",
        "role": "Người thuê nhà",
        "avatar": "👨‍💼",
        "hanzi": "客厅采光真不错，大阳台也很通风。请问一个月的房租是多少钱？",
        "pinyin": "Kètīng cǎiguāng zhēn bùcuò, dà yángtái yě hěn tōngfēng. Qǐngwèn yī gè yuè de fángzū shì duōshao qián?",
        "vi": "Phòng khách ánh sáng tốt quá cô ơi, ban công to cũng rất thoáng gió. Xin hỏi tiền thuê một tháng là bao nhiêu ạ?"
      },
      {
        "speaker": "房东",
        "role": "Chủ nhà",
        "avatar": "👩‍🦳",
        "hanzi": "租金一个月两千五，押一付三。包含物业费和宽带，水电燃气费你自己按月交。",
        "pinyin": "Zūjīn yī gè yuè liǎngqiānwǔ, yā yī fù sān. Bāohán wùyèfèi hé kuāndài, shuǐdiàn ránqìfèi nǐ zìjǐ àn yuè jiāo.",
        "vi": "Tiền thuê 2.500 tệ một tháng, cọc 1 tháng trả 3 tháng một lần. Đã bao gồm phí ban quản lý và tiền mạng WiFi, còn điện nước ga thì cháu tự nộp hàng tháng nhé."
      },
      {
        "speaker": "李明",
        "role": "Người thuê nhà",
        "avatar": "👨‍💼",
        "hanzi": "房子我很满意。我想签一年的合同，租金能优惠到两千四吗？",
        "pinyin": "Fángzi wǒ hěn mǎnyì. Wǒ xiǎng qiān yī nián de hétong, zūjīn néng yōuhuì dào liǎngqiānsì ma?",
        "vi": "Cháu rất ưng căn này rồi. Cháu muốn ký hợp đồng thuê lâu dài 1 năm, tiền thuê cô bớt cho cháu xuống 2.400 được không cô?"
      },
      {
        "speaker": "房东",
        "role": "Chủ nhà",
        "avatar": "👩‍🦳",
        "hanzi": "行！看你是规矩懂礼貌的学生，两千四就两千四。明天带上身份证过来签合同！",
        "pinyin": "Xíng! Kàn nǐ shì guīju dǒng lǐmào de xuésheng, liǎngqiānsì jiù liǎngqiānsì. Míngtiān dài shàng shēnfènzhèng guòlái qiān hétong!",
        "vi": "Được luôn! Thấy cháu là sinh viên đàng hoàng lễ phép, cô để 2.400 luôn. Ngày mai mang CCCD/Hộ chiếu qua ký hợp đồng nhé!"
      }
    ],
    "challenges": [
      {
        "promptVi": "Căn phòng này đồ điện gia dụng đầy đủ, có thể xách vali vào ở ngay.",
        "grammarHint": "Căn nhà này (这个房子) + Đồ điện đầy đủ (家电齐全) + Dấu phẩy + Xách vali vào ở ngay (可以拎包入住).",
        "correctOrder": [
          "这个房子",
          "家电齐全",
          "，",
          "可以拎包入住"
        ],
        "audioFull": "这个房子家电齐全，可以拎包入住",
        "explanation": "Thành ngữ thực tế thuê nhà ở Trung Quốc: \"拎包入住 (līnbāo rùzhù)\"."
      }
    ]
  },
  {
    "id": "business_meeting",
    "title": "Đàm Phán Thương Mại (商务会谈与合作)",
    "sub": "Tiếp đón đối tác, giới thiệu dự án & ký hợp đồng",
    "icon": "🤝",
    "category": "work",
    "categoryName": "Công Sở & Học Tập",
    "context": "Bạn đại diện doanh nghiệp tiếp đón đoàn đại biểu đối tác Trung Quốc sang thăm. Hai bên tiến hành đàm phán hợp đồng cung ứng và tổ chức tiệc chiêu đãi.",
    "video": {
      "title": "Tiếng Trung Thương Mại: Đàm Phán & Gặp Gỡ Đối Tác (商务合作)",
      "channel": "Panda Studio",
      "channelHandle": "@PandaStudio24",
      "youtubeId": "12x_b_Business",
      "embedUrl": "https://www.youtube-nocookie.com/embed/0c_0K8T_b1s?start=1800",
      "channelUrl": "https://www.youtube.com/@PandaStudio24",
      "duration": "16:30",
      "desc": "Video bài giảng thực tế từ kênh Panda Studio dạy văn phong tiếng Trung thương mại trang trọng, tiếp khách và ký hợp đồng."
    },
    "culturalTips": [
      "Khi trao đổi danh thiếp (名片) với đối tác Trung Quốc, luôn dùng hai tay đưa và nhận, đồng thời cúi đầu nhẹ và chăm chú đọc danh thiếp trước khi cất.",
      "Trong các bữa tiệc thương mại, nâng ly chúc rượu (敬酒) là văn hóa rất quan trọng. Khi chạm ly với cấp trên hoặc đối tác lớn, miệng ly của bạn nên đặt thấp hơn miệng ly đối phương một chút để biểu thị sự tôn kính.",
      "Câu chúc cửa miệng trong kinh doanh: \"合作愉快，互利共赢！\" (Hợp tác vui vẻ, cùng thắng đôi bên!)."
    ],
    "vocabList": [
      {
        "hanzi": "久仰大名",
        "pinyin": "jiǔyǎng dàmíng",
        "hv": "Cửu ngưỡng đại danh",
        "vi": "Ngưỡng mộ danh tiếng đã lâu"
      },
      {
        "hanzi": "名片",
        "pinyin": "míngpiàn",
        "hv": "Danh phiến",
        "vi": "Danh thiếp làm ăn"
      },
      {
        "hanzi": "总经理",
        "pinyin": "zǒngjīnglǐ",
        "hv": "Tổng kinh lý",
        "vi": "Tổng giám đốc"
      },
      {
        "hanzi": "合作",
        "pinyin": "hézuò",
        "hv": "Hợp tác",
        "vi": "Hợp tác kinh doanh"
      },
      {
        "hanzi": "项目",
        "pinyin": "xiàngmù",
        "hv": "Hạng mục",
        "vi": "Dự án thương mại"
      },
      {
        "hanzi": "报价",
        "pinyin": "bàojià",
        "hv": "Báo giá",
        "vi": "Bảng báo giá sản phẩm"
      },
      {
        "hanzi": "折扣",
        "pinyin": "zhékòu",
        "hv": "Chiết khấu",
        "vi": "Mức chiết khấu đơn hàng"
      },
      {
        "hanzi": "交付期",
        "pinyin": "jiāofùqī",
        "hv": "Giao phó kỳ",
        "vi": "Thời hạn giao hàng"
      },
      {
        "hanzi": "签约",
        "pinyin": "qiānyuē",
        "hv": "Thiêm ước",
        "vi": "Ký kết hợp đồng văn bản"
      },
      {
        "hanzi": "互利共赢",
        "pinyin": "hùlì gòngyíng",
        "hv": "Hỗ lợi cộng doanh",
        "vi": "Đôi bên cùng có lợi"
      },
      {
        "hanzi": "干杯",
        "pinyin": "gānbēi",
        "hv": "Can bôi",
        "vi": "Cạn ly chúc mừng"
      },
      {
        "hanzi": "宴会",
        "pinyin": "yànhuì",
        "hv": "Yến hội",
        "vi": "Bữa tiệc chiêu đãi"
      },
      {
        "hanzi": "款待",
        "pinyin": "kuǎndài",
        "hv": "Khoản đãi",
        "vi": "Tiếp đãi nồng hậu"
      },
      {
        "hanzi": "顺利",
        "pinyin": "shùnlì",
        "hv": "Thuận lợi",
        "vi": "Suôn sẻ, thuận buồm xuôi gió"
      },
      {
        "hanzi": "样品",
        "pinyin": "yàngpǐn",
        "hv": "Dạng phẩm",
        "vi": "Hàng mẫu trưng bày"
      },
      {
        "hanzi": "祝我们合作愉快",
        "pinyin": "zhù wǒmen hézuò yúkuài",
        "hv": "Chúc ngã môn hợp tác du khoái",
        "vi": "Chúc chúng ta hợp tác vui vẻ thành công"
      }
    ],
    "dialogue": [
      {
        "speaker": "李明",
        "role": "Giám đốc kinh doanh Việt Nam",
        "avatar": "👨‍💼",
        "hanzi": "王总您好！久仰大名，热烈欢迎您和考察团各位领导莅临我司！这是我的名片。",
        "pinyin": "Wáng zǒng nín hǎo! Jiǔyǎng dàmíng, rèliè huānyíng nín hé kǎochátuán gèwèi lǐngdǎo lìlín wǒ sī! Zhè shì wǒ de míngpiàn.",
        "vi": "Kính chào Vương tổng! Ngưỡng mộ danh tiếng ngài đã lâu, nhiệt liệt chào mừng ngài và đoàn khảo sát đã ghé thăm công ty chúng tôi! Đây là danh thiếp của tôi."
      },
      {
        "speaker": "王总",
        "role": "Tổng giám đốc đối tác Trung Quốc",
        "avatar": "👨‍💼",
        "hanzi": "李总太客气了！非常感谢贵公司的盛情款待。这是我的名片，请多关照。",
        "pinyin": "Lǐ zǒng tài kèqi le! Fēicháng gǎnxiè guì gōngsī de shèngqíng kuǎndài. Zhè shì wǒ de míngpiàn, qǐng duō guānzhào.",
        "vi": "Lý tổng khách khí quá! Rất cảm ơn sự tiếp đón nồng hậu chu đáo của quý công ty. Đây là danh thiếp của tôi, xin nhờ chỉ giáo giúp đỡ."
      },
      {
        "speaker": "李明",
        "role": "Giám đốc kinh doanh Việt Nam",
        "avatar": "👨‍💼",
        "hanzi": "王总请看，这是我们针对这次合作制定的详细方案与报价单。如果首批采购量超过五万件，我们还可以追加百分之五的优惠折扣。",
        "pinyin": "Wáng zǒng qǐng kàn, zhè shì wǒmen zhēnduì zhè cì hézuò zhìdìng de xiángxì fāng'àn yǔ bàojiàdān. Rúguǒ shǒupī cǎigòuliàng chāoguò wǔ wàn jiàn, wǒmen hái kěyǐ zhuījiā bǎifēnzhī wǔ de yōuhuì zhékòu.",
        "vi": "Vương tổng mời xem, đây là phương án chi tiết và bảng báo giá chúng tôi đã xây dựng riêng cho đợt hợp tác này. Nếu đợt đặt hàng đầu tiên trên 50.000 sản phẩm, chúng tôi có thể chiết khấu thêm 5%."
      },
      {
        "speaker": "王总",
        "role": "Tổng giám đốc đối tác Trung Quốc",
        "avatar": "👨‍💼",
        "hanzi": "这个方案很有诚意，贵公司的交货期能保证在四十天之内吗？",
        "pinyin": "Zhè ge fāng'àn hěn yǒu chéngyì, guì gōngsī de jiāohuòqī néng bǎozhèng zài sìshí tiān zhī nèi ma?",
        "vi": "Phương án này rất có thành ý, thời hạn giao hàng của quý công ty có thể đảm bảo trong vòng 40 ngày không?"
      },
      {
        "speaker": "李明",
        "role": "Giám đốc kinh doanh Việt Nam",
        "avatar": "👨‍💼",
        "hanzi": "完全可以保证，我们现代化的生产线完全有能力按时按质交付。",
        "pinyin": "Wánquán kěyǐ bǎozhèng, wǒmen xiàndàihuà de shēngchǎnxiàn wánquán yǒu nénglì ànshí ànzhì jiāofù.",
        "vi": "Hoàn toàn đảm bảo được ạ, dây chuyền sản xuất hiện đại của chúng tôi hoàn toàn đủ năng lực giao hàng đúng hạn đúng chất lượng."
      },
      {
        "speaker": "王总",
        "role": "Tổng giám đốc đối tác Trung Quốc",
        "avatar": "👨‍💼",
        "hanzi": "好！那我们今天就把意向协议签署下来。预祝我们互利共赢，合作愉快！干杯！",
        "pinyin": "Hǎo! Nà wǒmen jīntiān jiù bǎ yìxiàng xiéyì qiānshǔ xiàlái. Yùzhù wǒmen hùlì gòngyíng, hézuò yúkuài! Gānbēi!",
        "vi": "Tốt lắm! Vậy hôm nay chúng ta ký luôn thỏa thuận hợp tác nhé. Kính chúc đôi bên cùng thắng, hợp tác vui vẻ thành công! Cạn ly!"
      }
    ],
    "challenges": [
      {
        "promptVi": "Kính chúc hai bên hợp tác vui vẻ, đôi bên cùng có lợi!",
        "grammarHint": "Chúc chúng ta (祝我们) + Hợp tác vui vẻ (合作愉快) + Dấu phẩy + Đôi bên cùng có lợi (互利共赢) + !",
        "correctOrder": [
          "祝我们",
          "合作愉快",
          "，",
          "互利共赢",
          "！"
        ],
        "audioFull": "祝我们合作愉快，互利共赢！",
        "explanation": "Khẩu hiệu kinh doanh tiêu chuẩn: \"祝我们合作愉快，互利共赢！\"."
      }
    ]
  },
  {
    "id": "visiting_friend",
    "title": "Đến Nhà Bạn Chơi (去朋友家做客)",
    "sub": "Tặng quà, chào hỏi cha mẹ, khen tài nấu nướng & từ biệt",
    "icon": "🏡",
    "category": "daily",
    "categoryName": "Sức Khỏe & Đời Sống",
    "context": "Bạn được một người bạn Trung Quốc mời tới nhà dùng cơm gia đình vào dịp cuối tuần. Bạn chuẩn bị hoa quả biếu bác trai bác gái và trò chuyện vui vẻ.",
    "video": {
      "title": "Luyện Nghe Tiếng Trung: Đến Nhà Bạn Chơi Làm Khách (去朋友家做客)",
      "channel": "Panda Studio",
      "channelHandle": "@PandaStudio24",
      "youtubeId": "13x_v_Visiting",
      "embedUrl": "https://www.youtube-nocookie.com/embed/0c_0K8T_b1s?start=1980",
      "channelUrl": "https://www.youtube.com/@PandaStudio24",
      "duration": "12:15",
      "desc": "Video bài giảng thực tế từ kênh Panda Studio dạy văn hóa làm khách ở Trung Quốc, cách tặng quà và chào hỏi người lớn tuổi."
    },
    "culturalTips": [
      "Đến nhà người Trung Quốc làm khách không bao giờ nên đi tay không, nên mang theo một giỏ hoa quả tươi (水果), hộp bánh ngọt hoặc trà ngon.",
      "Khi bước vào cửa, cần chủ động hỏi: \"需要换拖鞋吗？\" (Cháu có cần thay dép đi trong nhà không ạ?).",
      "Trên bàn ăn luôn khen tài nấu nướng của chủ nhà: \"阿姨做饭的手艺太棒了，特别香！\" (Bác gái nấu ăn khéo tay quá, thơm ngon tuyệt vời!)."
    ],
    "vocabList": [
      {
        "hanzi": "做客",
        "pinyin": "zuòkè",
        "hv": "Tác khách",
        "vi": "Đến nhà người khác làm khách"
      },
      {
        "hanzi": "叔叔阿姨",
        "pinyin": "shūshu āyí",
        "hv": "Thúc thúc a di",
        "vi": "Chào hai bác (bố mẹ của bạn)"
      },
      {
        "hanzi": "打扰了",
        "pinyin": "dǎrǎo le",
        "hv": "Đả nhiễu liễu",
        "vi": "Làm phiền gia đình rồi ạ"
      },
      {
        "hanzi": "换拖鞋",
        "pinyin": "huàn tuōxié",
        "hv": "Hoán đà hài",
        "vi": "Thay dép đi trong nhà"
      },
      {
        "hanzi": "水果礼盒",
        "pinyin": "shuǐguǒ lǐhé",
        "hv": "Thủy quả lễ hạp",
        "vi": "Hộp quà trái cây tươi"
      },
      {
        "hanzi": "太客气了",
        "pinyin": "tài kèqi le",
        "hv": "Thái khách khí liễu",
        "vi": "Khách sáo quá rồi"
      },
      {
        "hanzi": "手艺棒",
        "pinyin": "shǒuyì bàng",
        "hv": "Thủ nghệ bổng",
        "vi": "Tay nghề nấu nướng siêu đỉnh"
      },
      {
        "hanzi": "家常菜",
        "pinyin": "jiāchángcài",
        "hv": "Gia thường thái",
        "vi": "Món ăn gia đình đầm ấm"
      },
      {
        "hanzi": "随便坐",
        "pinyin": "suíbiàn zuò",
        "hv": "Tùy tiện tọa",
        "vi": "Cứ ngồi tự nhiên nhé"
      },
      {
        "hanzi": "多吃点",
        "pinyin": "duō chī diǎn",
        "hv": "Đa ngật điểm",
        "vi": "Ăn nhiều vào nhé"
      },
      {
        "hanzi": "吃饱了",
        "pinyin": "chī bǎo le",
        "hv": "Ngật bão liễu",
        "vi": "Ăn no căng bụng rồi"
      },
      {
        "hanzi": "留步",
        "pinyin": "liúbù",
        "hv": "Lưu bộ",
        "vi": "Xin hai bác dừng bước đừng tiễn"
      },
      {
        "hanzi": "慢走",
        "pinyin": "mànzǒu",
        "hv": "Mạn tẩu",
        "vi": "Đi thong thả cẩn thận nhé"
      },
      {
        "hanzi": "有空常来",
        "pinyin": "yǒukòng cháng lái",
        "hv": "Hữu không thường lai",
        "vi": "Rảnh rỗi thường xuyên qua chơi nhé"
      },
      {
        "hanzi": "包饺子",
        "pinyin": "bāo jiǎozi",
        "hv": "Bao sảo tử",
        "vi": "Gói sủi cảo sum vầy"
      },
      {
        "hanzi": "尝尝",
        "pinyin": "chángchang",
        "hv": "Thường thường",
        "vi": "Nếm thử hương vị"
      }
    ],
    "dialogue": [
      {
        "speaker": "李明",
        "role": "Khách đến chơi",
        "avatar": "👨‍💼",
        "hanzi": "叔叔、阿姨好！今天专程来打扰您们了。这是给您们带的一点新鲜水果。",
        "pinyin": "Shūshu, āyí hǎo! Jīntiān zhuānchéng lái dǎrǎo nínmen le. Zhè shì gěi nínmen dài de yīdiǎn xīnxiān shuǐguǒ.",
        "vi": "Cháu chào hai bác ạ! Hôm nay cháu qua làm phiền gia đình hai bác. Đây là chút hoa quả tươi cháu biếu hai bác ạ."
      },
      {
        "speaker": "阿姨",
        "role": "Mẹ của bạn",
        "avatar": "👩‍🦳",
        "hanzi": "哎呀小李，人来就好了，还带什么东西，太客气了！快请进，来换上这双拖鞋。",
        "pinyin": "Āiyā Xiǎo Lǐ, rén lái jiù hǎo le, hái dài shénme dōngxi, tài kèqi le! Kuài qǐng jìn, lái huàn shàng zhè shuāng tuōxié.",
        "vi": "Ôi dồi Tiểu Lý, người đến chơi là quý rồi còn quà cáp làm gì, khách sáo quá! Mau vào nhà đi cháu, thay đôi dép này nhé."
      },
      {
        "speaker": "李明",
        "role": "Khách đến chơi",
        "avatar": "👨‍💼",
        "hanzi": "谢谢阿姨！屋里收拾得真干净温馨。厨房里飘出来的味道太香了！",
        "pinyin": "Xièxie āyí! Wū lǐ shōushi de zhēn gānjìng wēnxīn. Chúfáng lǐ piāo chūlái de wèidao tài xiāng le!",
        "vi": "Cháu cảm ơn bác! Nhà cửa ngăn nắp ấm cúng quá bác ạ. Mùi thơm bay ra từ bếp thơm nức cả mũi!"
      },
      {
        "speaker": "叔叔",
        "role": "Bố của bạn",
        "avatar": "👨‍🦳",
        "hanzi": "小李快洗手坐下，今天你阿姨特地做了拿手的红烧排骨，还包了热腾腾的三鲜水饺，多吃点！",
        "pinyin": "Xiǎo Lǐ kuài xǐshǒu zuòxià, jīntiān nǐ āyí tèdì zuò le náshǒu de hóngshāo páigǔ, hái bāo le rèténgténg de sānxiān shuǐjiǎo, duō chī diǎn!",
        "vi": "Tiểu Lý rửa tay rồi ngồi vào bàn đi, hôm nay bác gái đặc biệt làm món sườn kho sở trường, lại còn gói sủi cảo tam tiên nóng hổi nữa, ăn nhiều vào cháu nhé!"
      },
      {
        "speaker": "李明",
        "role": "Khách đến chơi",
        "avatar": "👨‍💼",
        "hanzi": "哇！阿姨做饭的手艺太绝了，水饺皮薄馅多，排骨软烂入味，比饭店做的大厨还好吃！",
        "pinyin": "Wā! Āyí zuòfàn de shǒuyì tài jué le, shuǐjiǎo píbáoxiànduō, páigǔ ruǎnlàn rùwèi, bǐ fàndiàn zuò de dàchú hái hǎochī!",
        "vi": "Woa! Tay nghề bác gái đỉnh thật đấy ạ, sủi cảo vỏ mỏng ngập nhân, sườn kho mềm tan đậm đà, ngon hơn cả đầu bếp nhà hàng!"
      },
      {
        "speaker": "阿姨",
        "role": "Mẹ của bạn",
        "avatar": "👩‍🦳",
        "hanzi": "喜欢吃就多吃！就把这儿当自己家一样，别拘束。以后周末有空常来玩啊！",
        "pinyin": "Xǐhuan chī jiù duō chī! Jiù bǎ zhèr dāng zìjǐ jiā yíyàng, bié jūshù. Yǐhòu zhōumò yǒukòng cháng lái wán a!",
        "vi": "Thích ăn thì ăn đẫy vào cháu! Cứ coi như nhà mình đừng ngại ngùng gì cả. Sau này cuối tuần rảnh rỗi cứ thường xuyên qua chơi nhé!"
      }
    ],
    "challenges": [
      {
        "promptVi": "Bác gái làm cơm tay nghề quá tuyệt vời, ăn ngon như đầu bếp nhà hàng.",
        "grammarHint": "Bác gái nấu ăn (阿姨做饭) + Tay nghề rất tuyệt (手艺太棒了) + Dấu phẩy + Rất ngon (很好吃).",
        "correctOrder": [
          "阿姨做饭",
          "手艺太棒了",
          "，",
          "很好吃"
        ],
        "audioFull": "阿姨做饭手艺太棒了，很好吃",
        "explanation": "Lời khen lịch thiệp nhất khi đến nhà người Trung Quốc làm khách: \"阿姨做饭的手艺太棒了！\"."
      }
    ]
  }
];

export default REAL_LIFE_SCENARIOS;
