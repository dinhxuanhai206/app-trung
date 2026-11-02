/**
 * Database 200 Công Thức Ghép Câu Tiếng Trung Thực Tế (200 Sentence Formulas)
 * Trải dài từ HSK 1 đến HSK 5 gồm 20 nhóm chức năng ngữ pháp đời sống chuẩn xác.
 */

export const FORMULA_CATEGORIES = [
  {
    "id": "cat_1",
    "name": "1. Khẳng Định, Phủ Định & Phán Đoán",
    "count": 10
  },
  {
    "id": "cat_2",
    "name": "2. Vị Ngữ Tính Từ & Mức Độ",
    "count": 10
  },
  {
    "id": "cat_3",
    "name": "3. Đại Từ & Mẫu Câu Hỏi Nghi Vấn",
    "count": 10
  },
  {
    "id": "cat_4",
    "name": "4. Trật Tự Thời Gian, Nơi Chốn & Giới Từ",
    "count": 10
  },
  {
    "id": "cat_5",
    "name": "5. Động Từ Năng Nguyện & Nguyện Vọng",
    "count": 10
  },
  {
    "id": "cat_6",
    "name": "6. Bổ Ngữ Kết Quả",
    "count": 10
  },
  {
    "id": "cat_7",
    "name": "7. Bổ Ngữ Trạng Thái & Trình Độ",
    "count": 10
  },
  {
    "id": "cat_8",
    "name": "8. Bổ Ngữ Xu Hướng",
    "count": 10
  },
  {
    "id": "cat_9",
    "name": "9. Bổ Ngữ Khả Năng",
    "count": 10
  },
  {
    "id": "cat_10",
    "name": "10. Cấu Trúc So Sánh",
    "count": 10
  },
  {
    "id": "cat_11",
    "name": "11. Câu Chữ 把 (Xử Lý Đối Tượng)",
    "count": 10
  },
  {
    "id": "cat_12",
    "name": "12. Câu Bị Động 被 / 叫 / 让",
    "count": 10
  },
  {
    "id": "cat_13",
    "name": "13. Liên Từ Giả Thiết & Điều Kiện",
    "count": 10
  },
  {
    "id": "cat_14",
    "name": "14. Liên Từ Nguyên Nhân - Kết Quả",
    "count": 10
  },
  {
    "id": "cat_15",
    "name": "15. Liên Từ Chuyển Ngoặt & Nhượng Bộ",
    "count": 10
  },
  {
    "id": "cat_16",
    "name": "16. Liên Từ Tăng Tiến & Song Song",
    "count": 10
  },
  {
    "id": "cat_17",
    "name": "17. Liên Từ Lựa Chọn & Ngoại Trừ",
    "count": 10
  },
  {
    "id": "cat_18",
    "name": "18. Cấu Trúc Nhấn Mạnh & Tiến Trình",
    "count": 10
  },
  {
    "id": "cat_19",
    "name": "19. Cấu Trúc Mục Đích & Giới Từ Quan Điểm",
    "count": 10
  },
  {
    "id": "cat_20",
    "name": "20. Khẩu Ngữ Giao Tiếp Thường Nhật",
    "count": 10
  }
];

export const FORMULA_GRAMMAR_DATABASE = [
  {
    "id": "cf_1",
    "catId": "cat_1",
    "category": "1. Khẳng Định, Phủ Định & Phán Đoán",
    "name": "S + 是 + N",
    "tag": "Khẳng định danh tính (A là B)",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "是",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "N",
        "type": "var"
      }
    ],
    "description": "Chủ ngữ 我 kết hợp với 是 và cụm tân ngữ định danh.",
    "challenges": [
      {
        "vi": "Tôi là kỹ sư công ty phần mềm.",
        "hanziFull": "我是软件公司的工程师。",
        "pinyinFull": "Wǒ shì ruǎnjiàn gōngsī de gōngchéngshī.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我",
            "pinyin": "wǒ",
            "isFixed": false
          },
          {
            "label": "Là",
            "expected": "是",
            "pinyin": "shì",
            "isFixed": true
          },
          {
            "label": "Tân ngữ",
            "expected": "软件公司的工程师",
            "pinyin": "ruǎnjiàn gōngsī de gōngchéngshī",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我",
            "pinyin": "wǒ",
            "vi": "Tôi"
          },
          {
            "hanzi": "软件公司的工程师",
            "pinyin": "ruǎnjiàn gōngsī de gōngchéngshī",
            "vi": "Kỹ sư phần mềm"
          },
          {
            "hanzi": "他们",
            "pinyin": "tāmen",
            "vi": "Bọn họ"
          },
          {
            "hanzi": "老师",
            "pinyin": "lǎoshī",
            "vi": "Thầy giáo"
          }
        ],
        "analysis": "Chủ ngữ 我 kết hợp với 是 và cụm tân ngữ định danh."
      }
    ]
  },
  {
    "id": "cf_2",
    "catId": "cat_1",
    "category": "1. Khẳng Định, Phủ Định & Phán Đoán",
    "name": "S + 不是 + N",
    "tag": "Phủ định danh tính (A không phải là B)",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "不是",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "N",
        "type": "var"
      }
    ],
    "description": "Phó từ 不 biến điệu thành bú trước shì để phủ định hoàn toàn.",
    "challenges": [
      {
        "vi": "Anh ấy không phải là người nước ngoài.",
        "hanziFull": "他不是外国人。",
        "pinyinFull": "Tā bú shì wàiguórén.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "他",
            "pinyin": "tā",
            "isFixed": false
          },
          {
            "label": "Không phải",
            "expected": "不是",
            "pinyin": "bú shì",
            "isFixed": true
          },
          {
            "label": "Tân ngữ",
            "expected": "外国人",
            "pinyin": "wàiguórén",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "他",
            "pinyin": "tā",
            "vi": "Anh ấy"
          },
          {
            "hanzi": "外国人",
            "pinyin": "wàiguórén",
            "vi": "Người nước ngoài"
          },
          {
            "hanzi": "中国人",
            "pinyin": "Zhōngguórén",
            "vi": "Người TQ"
          },
          {
            "hanzi": "学生",
            "pinyin": "xuésheng",
            "vi": "Học sinh"
          }
        ],
        "analysis": "Phó từ 不 biến điệu thành bú trước shì để phủ định hoàn toàn."
      }
    ]
  },
  {
    "id": "cf_3",
    "catId": "cat_1",
    "category": "1. Khẳng Định, Phủ Định & Phán Đoán",
    "name": "S + 有 + N",
    "tag": "Sở hữu (Ai đó có cái gì)",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "有",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "N",
        "type": "var"
      }
    ],
    "description": "Động từ 有 mang tân ngữ trừu tượng chỉ kinh nghiệm.",
    "challenges": [
      {
        "vi": "Tôi có rất nhiều kinh nghiệm thực tế.",
        "hanziFull": "我有很多实际经验。",
        "pinyinFull": "Wǒ yǒu hěn duō shíjì jīngyàn.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我",
            "pinyin": "wǒ",
            "isFixed": false
          },
          {
            "label": "Có",
            "expected": "有",
            "pinyin": "yǒu",
            "isFixed": true
          },
          {
            "label": "Tân ngữ",
            "expected": "很多实际经验",
            "pinyin": "hěn duō shíjì jīngyàn",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我",
            "pinyin": "wǒ",
            "vi": "Tôi"
          },
          {
            "hanzi": "很多实际经验",
            "pinyin": "hěn duō shíjì jīngyàn",
            "vi": "Nhiều kinh nghiệm thực tế"
          },
          {
            "hanzi": "时间",
            "pinyin": "shíjiān",
            "vi": "Thời gian"
          },
          {
            "hanzi": "问题",
            "pinyin": "wèntí",
            "vi": "Câu hỏi"
          }
        ],
        "analysis": "Động từ 有 mang tân ngữ trừu tượng chỉ kinh nghiệm."
      }
    ]
  },
  {
    "id": "cf_4",
    "catId": "cat_1",
    "category": "1. Khẳng Định, Phủ Định & Phán Đoán",
    "name": "S + 没有 + N",
    "tag": "Phủ định sở hữu (Không có cái gì)",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "没有",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "N",
        "type": "var"
      }
    ],
    "description": "Không dùng 不有, bắt buộc dùng 没有 để phủ định sở hữu.",
    "challenges": [
      {
        "vi": "Hôm nay tôi không có thời gian rảnh.",
        "hanziFull": "今天我没有空闲时间。",
        "pinyinFull": "Jīntiān wǒ méiyǒu kòngxián shíjiān.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "今天我",
            "pinyin": "jīntiān wǒ",
            "isFixed": false
          },
          {
            "label": "Không có",
            "expected": "没有",
            "pinyin": "méiyǒu",
            "isFixed": true
          },
          {
            "label": "Tân ngữ",
            "expected": "空闲时间",
            "pinyin": "kòngxián shíjiān",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "今天我",
            "pinyin": "jīntiān wǒ",
            "vi": "Hôm nay tôi"
          },
          {
            "hanzi": "空闲时间",
            "pinyin": "kòngxián shíjiān",
            "vi": "Thời gian rảnh"
          },
          {
            "hanzi": "作业",
            "pinyin": "zuòyè",
            "vi": "Bài tập"
          },
          {
            "hanzi": "计划",
            "pinyin": "jìhuà",
            "vi": "Kế hoạch"
          }
        ],
        "analysis": "Không dùng 不有, bắt buộc dùng 没有 để phủ định sở hữu."
      }
    ]
  },
  {
    "id": "cf_5",
    "catId": "cat_1",
    "category": "1. Khẳng Định, Phủ Định & Phán Đoán",
    "name": "Địa điểm + 有 + Danh từ",
    "tag": "Câu tồn hiện (Ở đâu có cái gì)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "Địa điểm",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "有",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Danh từ",
        "type": "var"
      }
    ],
    "description": "Cấu trúc tồn hiện: Nơi chốn + 有 + Đối tượng.",
    "challenges": [
      {
        "vi": "Gần công ty có một trạm tàu điện ngầm.",
        "hanziFull": "公司附近有一个地铁站。",
        "pinyinFull": "Gōngsī fùjìn yǒu yí gè dìtiě zhàn.",
        "slots": [
          {
            "label": "Nơi chốn",
            "expected": "公司附近",
            "pinyin": "gōngsī fùjìn",
            "isFixed": false
          },
          {
            "label": "Có",
            "expected": "有",
            "pinyin": "yǒu",
            "isFixed": true
          },
          {
            "label": "Sự vật",
            "expected": "一个地铁站",
            "pinyin": "yí gè dìtiě zhàn",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "公司附近",
            "pinyin": "gōngsī fùjìn",
            "vi": "Gần công ty"
          },
          {
            "hanzi": "一个地铁站",
            "pinyin": "yí gè dìtiě zhàn",
            "vi": "Một trạm tàu điện ngầm"
          },
          {
            "hanzi": "咖啡馆",
            "pinyin": "kāfēiguǎn",
            "vi": "Quán cà phê"
          },
          {
            "hanzi": "银行",
            "pinyin": "yínháng",
            "vi": "Ngân hàng"
          }
        ],
        "analysis": "Cấu trúc tồn hiện: Nơi chốn + 有 + Đối tượng."
      }
    ]
  },
  {
    "id": "cf_6",
    "catId": "cat_1",
    "category": "1. Khẳng Định, Phủ Định & Phán Đoán",
    "name": "S + 在 + Địa điểm",
    "tag": "Vị trí hiện tại (Ai ở đâu)",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "在",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Địa điểm",
        "type": "var"
      }
    ],
    "description": "在 đóng vai trò động từ chỉ nơi chốn hiện diện.",
    "challenges": [
      {
        "vi": "Giám đốc đang ở phòng họp tầng ba.",
        "hanziFull": "经理在三楼会议室。",
        "pinyinFull": "Jīnglǐ zài sān lóu huìyìshì.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "经理",
            "pinyin": "jīnglǐ",
            "isFixed": false
          },
          {
            "label": "Ở",
            "expected": "在",
            "pinyin": "zài",
            "isFixed": true
          },
          {
            "label": "Nơi chốn",
            "expected": "三楼会议室",
            "pinyin": "sān lóu huìyìshì",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "经理",
            "pinyin": "jīnglǐ",
            "vi": "Giám đốc"
          },
          {
            "hanzi": "三楼会议室",
            "pinyin": "sān lóu huìyìshì",
            "vi": "Phòng họp tầng 3"
          },
          {
            "hanzi": "办公室",
            "pinyin": "bàngōngshì",
            "vi": "Văn phòng"
          },
          {
            "hanzi": "家里",
            "pinyin": "jiā lǐ",
            "vi": "Ở nhà"
          }
        ],
        "analysis": "在 đóng vai trò động từ chỉ nơi chốn hiện diện."
      }
    ]
  },
  {
    "id": "cf_7",
    "catId": "cat_1",
    "category": "1. Khẳng Định, Phủ Định & Phán Đoán",
    "name": "S + 不在 + Địa điểm",
    "tag": "Vắng mặt (Ai không ở đâu)",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "不在",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Địa điểm",
        "type": "var"
      }
    ],
    "description": "不在 biểu thị sự vắng mặt tại địa điểm.",
    "challenges": [
      {
        "vi": "Anh ấy hiện tại không có ở văn phòng.",
        "hanziFull": "他现在不在办公室。",
        "pinyinFull": "Tā xiànzài bú zài bàngōngshì.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "他现在",
            "pinyin": "tā xiànzài",
            "isFixed": false
          },
          {
            "label": "Không ở",
            "expected": "不在",
            "pinyin": "bú zài",
            "isFixed": true
          },
          {
            "label": "Nơi chốn",
            "expected": "办公室",
            "pinyin": "bàngōngshì",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "他现在",
            "pinyin": "tā xiànzài",
            "vi": "Anh ấy hiện tại"
          },
          {
            "hanzi": "办公室",
            "pinyin": "bàngōngshì",
            "vi": "Văn phòng"
          },
          {
            "hanzi": "学校",
            "pinyin": "xuéxiào",
            "vi": "Trường học"
          },
          {
            "hanzi": "医院",
            "pinyin": "yīyuàn",
            "vi": "Bệnh viện"
          }
        ],
        "analysis": "不在 biểu thị sự vắng mặt tại địa điểm."
      }
    ]
  },
  {
    "id": "cf_8",
    "catId": "cat_1",
    "category": "1. Khẳng Định, Phủ Định & Phán Đoán",
    "name": "S + 是 + N + 吗?",
    "tag": "Hỏi xác nhận danh tính (Có phải... không?)",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "是",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "N",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "吗?",
        "type": "fixed"
      }
    ],
    "description": "Thêm trợ từ nghi vấn 吗 vào cuối câu để hỏi xác nhận.",
    "challenges": [
      {
        "vi": "Bạn có phải là quản lý dự án mới không?",
        "hanziFull": "你是新来的项目经理吗？",
        "pinyinFull": "Nǐ shì xīn lái de xiàngmù jīnglǐ ma?",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "你",
            "pinyin": "nǐ",
            "isFixed": false
          },
          {
            "label": "Là",
            "expected": "是",
            "pinyin": "shì",
            "isFixed": true
          },
          {
            "label": "Tân ngữ",
            "expected": "新来的项目经理",
            "pinyin": "xīn lái de xiàngmù jīnglǐ",
            "isFixed": false
          },
          {
            "label": "Không",
            "expected": "吗",
            "pinyin": "ma",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "你",
            "pinyin": "nǐ",
            "vi": "Bạn"
          },
          {
            "hanzi": "新来的项目经理",
            "pinyin": "xīn lái de xiàngmù jīnglǐ",
            "vi": "Quản lý mới"
          },
          {
            "hanzi": "老师",
            "pinyin": "lǎoshī",
            "vi": "Thầy giáo"
          },
          {
            "hanzi": "同事",
            "pinyin": "tóngshì",
            "vi": "Đồng nghiệp"
          }
        ],
        "analysis": "Thêm trợ từ nghi vấn 吗 vào cuối câu để hỏi xác nhận."
      }
    ]
  },
  {
    "id": "cf_9",
    "catId": "cat_1",
    "category": "1. Khẳng Định, Phủ Định & Phán Đoán",
    "name": "A + 和/跟 + B + 都是 + N",
    "tag": "Đồng nhất danh tính (Cả A và B đều là)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "和/跟",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "都是",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "N",
        "type": "var"
      }
    ],
    "description": "都 chỉ tính bao quát của cả 2 chủ thể.",
    "challenges": [
      {
        "vi": "Tôi và anh ấy đều là đồng nghiệp cùng phòng ban.",
        "hanziFull": "我和他都是同部门的同事。",
        "pinyinFull": "Wǒ hé tā dōu shì tóng bùmén de tóngshì.",
        "slots": [
          {
            "label": "Đối tượng A",
            "expected": "我",
            "pinyin": "wǒ",
            "isFixed": false
          },
          {
            "label": "Và",
            "expected": "和",
            "pinyin": "hé",
            "isFixed": true
          },
          {
            "label": "Đối tượng B",
            "expected": "他",
            "pinyin": "tā",
            "isFixed": false
          },
          {
            "label": "Đều là",
            "expected": "都是",
            "pinyin": "dōu shì",
            "isFixed": true
          },
          {
            "label": "Tân ngữ chung",
            "expected": "同部门的同事",
            "pinyin": "tóng bùmén de tóngshì",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我",
            "pinyin": "wǒ",
            "vi": "Tôi"
          },
          {
            "hanzi": "他",
            "pinyin": "tā",
            "vi": "Anh ấy"
          },
          {
            "hanzi": "同部门的同事",
            "pinyin": "tóng bùmén de tóngshì",
            "vi": "Đồng nghiệp cùng phòng"
          },
          {
            "hanzi": "同学",
            "pinyin": "tóngxué",
            "vi": "Bạn học"
          }
        ],
        "analysis": "都 chỉ tính bao quát của cả 2 chủ thể."
      }
    ]
  },
  {
    "id": "cf_10",
    "catId": "cat_1",
    "category": "1. Khẳng Định, Phủ Định & Phán Đoán",
    "name": "S + 既不是 + A + 也不是 + B",
    "tag": "Phủ định song song (Vừa không phải A vừa không phải B)",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "既不是",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "也不是",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "Cấu trúc liên kết phủ định kép 既不是...也不是...",
    "challenges": [
      {
        "vi": "Đây vừa không phải lỗi của bạn, vừa không phải lỗi của tôi.",
        "hanziFull": "这既不是你的错，也不是我的错。",
        "pinyinFull": "Zhè jì bú shì nǐ de cuò, yě bú shì wǒ de cuò.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "这",
            "pinyin": "zhè",
            "isFixed": false
          },
          {
            "label": "Vừa không phải",
            "expected": "既不是",
            "pinyin": "jì bú shì",
            "isFixed": true
          },
          {
            "label": "Thành phần A",
            "expected": "你的错",
            "pinyin": "nǐ de cuò",
            "isFixed": false
          },
          {
            "label": "Cũng không phải",
            "expected": "也不是",
            "pinyin": "yě bú shì",
            "isFixed": true
          },
          {
            "label": "Thành phần B",
            "expected": "我的错",
            "pinyin": "wǒ de cuò",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "这",
            "pinyin": "zhè",
            "vi": "Điều này"
          },
          {
            "hanzi": "你的错",
            "pinyin": "nǐ de cuò",
            "vi": "Lỗi của bạn"
          },
          {
            "hanzi": "我的错",
            "pinyin": "wǒ de cuò",
            "vi": "Lỗi của tôi"
          },
          {
            "hanzi": "公司的错",
            "pinyin": "gōngsī de cuò",
            "vi": "Lỗi của cty"
          }
        ],
        "analysis": "Cấu trúc liên kết phủ định kép 既不是...也不是..."
      }
    ]
  },
  {
    "id": "cf_11",
    "catId": "cat_2",
    "category": "2. Vị Ngữ Tính Từ & Mức Độ",
    "name": "S + 很 + Adj",
    "tag": "Mức độ thông thường (Rất...)",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "很",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      }
    ],
    "description": "Phó từ 很 làm cầu nối giữa chủ ngữ và tính từ.",
    "challenges": [
      {
        "vi": "Thời tiết hôm nay rất dễ chịu.",
        "hanziFull": "今天的天气很舒服。",
        "pinyinFull": "Jīntiān de tiānqì hěn shūfu.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "今天的天气",
            "pinyin": "jīntiān de tiānqì",
            "isFixed": false
          },
          {
            "label": "Rất",
            "expected": "很",
            "pinyin": "hěn",
            "isFixed": true
          },
          {
            "label": "Tính từ",
            "expected": "舒服",
            "pinyin": "shūfu",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "今天的天气",
            "pinyin": "jīntiān de tiānqì",
            "vi": "Thời tiết hôm nay"
          },
          {
            "hanzi": "舒服",
            "pinyin": "shūfu",
            "vi": "Dễ chịu"
          },
          {
            "hanzi": "热",
            "pinyin": "rè",
            "vi": "Nóng"
          },
          {
            "hanzi": "冷",
            "pinyin": "lěng",
            "vi": "Lạnh"
          }
        ],
        "analysis": "Phó từ 很 làm cầu nối giữa chủ ngữ và tính từ."
      }
    ]
  },
  {
    "id": "cf_12",
    "catId": "cat_2",
    "category": "2. Vị Ngữ Tính Từ & Mức Độ",
    "name": "S + 不 + Adj",
    "tag": "Phủ định tính chất (Không...)",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "不",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      }
    ],
    "description": "Dùng 不 để phủ định trực tiếp trước tính từ.",
    "challenges": [
      {
        "vi": "Giá của món đồ này không đắt chút nào.",
        "hanziFull": "这件东西的价格不贵。",
        "pinyinFull": "Zhè jiàn dōngxi de jiàgé bú guì.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "这件东西的价格",
            "pinyin": "zhè jiàn dōngxi de jiàgé",
            "isFixed": false
          },
          {
            "label": "Không",
            "expected": "不",
            "pinyin": "bù",
            "isFixed": true
          },
          {
            "label": "Tính từ",
            "expected": "贵",
            "pinyin": "guì",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "这件东西的价格",
            "pinyin": "zhè jiàn dōngxi de jiàgé",
            "vi": "Giá món đồ này"
          },
          {
            "hanzi": "贵",
            "pinyin": "guì",
            "vi": "Đắt"
          },
          {
            "hanzi": "便宜",
            "pinyin": "piányi",
            "vi": "Rẻ"
          },
          {
            "hanzi": "好看",
            "pinyin": "hǎokàn",
            "vi": "Đẹp"
          }
        ],
        "analysis": "Dùng 不 để phủ định trực tiếp trước tính từ."
      }
    ]
  },
  {
    "id": "cf_13",
    "catId": "cat_2",
    "category": "2. Vị Ngữ Tính Từ & Mức Độ",
    "name": "S + 非常 + Adj",
    "tag": "Mức độ cao (Vô cùng, hết sức)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "非常",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      }
    ],
    "description": "非常 nhấn mạnh mức độ cao hơn 很.",
    "challenges": [
      {
        "vi": "Các đồng nghiệp đều vô cùng nhiệt tình.",
        "hanziFull": "同事们都非常热情。",
        "pinyinFull": "Tóngshìmen dōu fēicháng rèqíng.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "同事们",
            "pinyin": "tóngshìmen",
            "isFixed": false
          },
          {
            "label": "Đều",
            "expected": "都",
            "pinyin": "dōu",
            "isFixed": true
          },
          {
            "label": "Vô cùng",
            "expected": "非常",
            "pinyin": "fēicháng",
            "isFixed": true
          },
          {
            "label": "Tính từ",
            "expected": "热情",
            "pinyin": "rèqíng",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "同事们",
            "pinyin": "tóngshìmen",
            "vi": "Các đồng nghiệp"
          },
          {
            "hanzi": "热情",
            "pinyin": "rèqíng",
            "vi": "Nhiệt tình"
          },
          {
            "hanzi": "高兴",
            "pinyin": "gāoxìng",
            "vi": "Vui vẻ"
          },
          {
            "hanzi": "认真",
            "pinyin": "rènzhēn",
            "vi": "Chăm chỉ"
          }
        ],
        "analysis": "非常 nhấn mạnh mức độ cao hơn 很."
      }
    ]
  },
  {
    "id": "cf_14",
    "catId": "cat_2",
    "category": "2. Vị Ngữ Tính Từ & Mức Độ",
    "name": "S + 太 + Adj + 了",
    "tag": "Cảm thán mức độ (Quá... rồi)",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "太",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "了",
        "type": "fixed"
      }
    ],
    "description": "Cấu trúc cảm thán kinh điển: 太 + Adj + 了.",
    "challenges": [
      {
        "vi": "Cảnh đêm của thành phố này quá đẹp rồi!",
        "hanziFull": "这座城市的夜景太美了！",
        "pinyinFull": "Zhè zuò chéngshì de yèjǐng tài měi le!",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "这座城市的夜景",
            "pinyin": "zhè zuò chéngshì de yèjǐng",
            "isFixed": false
          },
          {
            "label": "Quá",
            "expected": "太",
            "pinyin": "tài",
            "isFixed": true
          },
          {
            "label": "Tính từ",
            "expected": "美",
            "pinyin": "měi",
            "isFixed": false
          },
          {
            "label": "Rồi",
            "expected": "了",
            "pinyin": "le",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这座城市的夜景",
            "pinyin": "zhè zuò chéngshì de yèjǐng",
            "vi": "Cảnh đêm thành phố này"
          },
          {
            "hanzi": "美",
            "pinyin": "měi",
            "vi": "Đẹp"
          },
          {
            "hanzi": "热闹",
            "pinyin": "rènao",
            "vi": "Náo nhiệt"
          },
          {
            "hanzi": "大",
            "pinyin": "dà",
            "vi": "Lớn"
          }
        ],
        "analysis": "Cấu trúc cảm thán kinh điển: 太 + Adj + 了."
      }
    ]
  },
  {
    "id": "cf_15",
    "catId": "cat_2",
    "category": "2. Vị Ngữ Tính Từ & Mức Độ",
    "name": "S + 真 + Adj",
    "tag": "Thán từ chân thật (Thật là...)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "真",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      }
    ],
    "description": "真 dùng trong câu cảm thán khen ngợi trực tiếp.",
    "challenges": [
      {
        "vi": "Món ăn Trung Hoa mà bạn nấu thật là ngon!",
        "hanziFull": "你做的中国菜真好吃！",
        "pinyinFull": "Nǐ zuò de Zhōngguó cài zhēn hǎochī!",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "你做的中国菜",
            "pinyin": "nǐ zuò de Zhōngguó cài",
            "isFixed": false
          },
          {
            "label": "Thật là",
            "expected": "真",
            "pinyin": "zhēn",
            "isFixed": true
          },
          {
            "label": "Tính từ",
            "expected": "好吃",
            "pinyin": "hǎochī",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "你做的中国菜",
            "pinyin": "nǐ zuò de Zhōngguó cài",
            "vi": "Món ăn TQ bạn nấu"
          },
          {
            "hanzi": "好吃",
            "pinyin": "hǎochī",
            "vi": "Ngon"
          },
          {
            "hanzi": "好看",
            "pinyin": "hǎokàn",
            "vi": "Đẹp"
          },
          {
            "hanzi": "香",
            "pinyin": "xiāng",
            "vi": "Thơm"
          }
        ],
        "analysis": "真 dùng trong câu cảm thán khen ngợi trực tiếp."
      }
    ]
  },
  {
    "id": "cf_16",
    "catId": "cat_2",
    "category": "2. Vị Ngữ Tính Từ & Mức Độ",
    "name": "S + 特别 + Adj",
    "tag": "Đặc biệt (Mức độ khác thường)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "特别",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      }
    ],
    "description": "特别 mang sắc thái đặc thù nổi bật.",
    "challenges": [
      {
        "vi": "Bộ phim chiếu rạp hôm nay đặc biệt cảm động.",
        "hanziFull": "今天上映的电影特别感人。",
        "pinyinFull": "Jīntiān shàngyìng de diànyǐng tèbié gǎnrén.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "今天上映的电影",
            "pinyin": "jīntiān shàngyìng de diànyǐng",
            "isFixed": false
          },
          {
            "label": "Đặc biệt",
            "expected": "特别",
            "pinyin": "tèbié",
            "isFixed": true
          },
          {
            "label": "Tính từ",
            "expected": "感人",
            "pinyin": "gǎnrén",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "今天上映的电影",
            "pinyin": "jīntiān shàngyìng de diànyǐng",
            "vi": "Bộ phim chiếu hôm nay"
          },
          {
            "hanzi": "感人",
            "pinyin": "gǎnrén",
            "vi": "Cảm động"
          },
          {
            "hanzi": "精彩",
            "pinyin": "jīngcǎi",
            "vi": "Đặc sắc"
          },
          {
            "hanzi": "有趣",
            "pinyin": "yǒuqù",
            "vi": "Thú vị"
          }
        ],
        "analysis": "特别 mang sắc thái đặc thù nổi bật."
      }
    ]
  },
  {
    "id": "cf_17",
    "catId": "cat_2",
    "category": "2. Vị Ngữ Tính Từ & Mức Độ",
    "name": "S + 挺 + Adj + 的",
    "tag": "Khá là... (Khẩu ngữ)",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "挺",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "的",
        "type": "fixed"
      }
    ],
    "description": "挺 + Adj + 的 là cấu trúc khẩu ngữ tự nhiên.",
    "challenges": [
      {
        "vi": "Căn hộ mới thuê này khá là yên tĩnh.",
        "hanziFull": "新租的这套房子挺安静的。",
        "pinyinFull": "Xīn zū de zhè tào fángzi tǐng ānjìng de.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "新租的这套房子",
            "pinyin": "xīn zū de zhè tào fángzi",
            "isFixed": false
          },
          {
            "label": "Khá là",
            "expected": "挺",
            "pinyin": "tǐng",
            "isFixed": true
          },
          {
            "label": "Tính từ",
            "expected": "安静",
            "pinyin": "ānjìng",
            "isFixed": false
          },
          {
            "label": "Đích",
            "expected": "的",
            "pinyin": "de",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "新租的这套房子",
            "pinyin": "xīn zū de zhè tào fángzi",
            "vi": "Căn nhà mới thuê"
          },
          {
            "hanzi": "安静",
            "pinyin": "ānjìng",
            "vi": "Yên tĩnh"
          },
          {
            "hanzi": "干净",
            "pinyin": "gānjìng",
            "vi": "Sạch sẽ"
          },
          {
            "hanzi": "大",
            "pinyin": "dà",
            "vi": "Rộng"
          }
        ],
        "analysis": "挺 + Adj + 的 là cấu trúc khẩu ngữ tự nhiên."
      }
    ]
  },
  {
    "id": "cf_18",
    "catId": "cat_2",
    "category": "2. Vị Ngữ Tính Từ & Mức Độ",
    "name": "S + Adj + 极了",
    "tag": "Cực kỳ, tột bậc",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "极了",
        "type": "fixed"
      }
    ],
    "description": "极了 đứng sau tính từ biểu thị mức độ cao nhất.",
    "challenges": [
      {
        "vi": "Nghe xong tin vui này, mọi người vui mừng khôn xiết.",
        "hanziFull": "听到这个好消息，大家高兴极了。",
        "pinyinFull": "Tīngdào zhège hǎo xiāoxi, dàjiā gāoxìng jí le.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "大家",
            "pinyin": "dàjiā",
            "isFixed": false
          },
          {
            "label": "Tính từ",
            "expected": "高兴",
            "pinyin": "gāoxìng",
            "isFixed": false
          },
          {
            "label": "Cực kỳ",
            "expected": "极了",
            "pinyin": "jí le",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "大家",
            "pinyin": "dàjiā",
            "vi": "Mọi người"
          },
          {
            "hanzi": "高兴",
            "pinyin": "gāoxìng",
            "vi": "Vui vẻ"
          },
          {
            "hanzi": "难过",
            "pinyin": "nánguò",
            "vi": "Buồn rầu"
          },
          {
            "hanzi": "紧张",
            "pinyin": "jǐnzhāng",
            "vi": "Hồi hộp"
          }
        ],
        "analysis": "极了 đứng sau tính từ biểu thị mức độ cao nhất."
      }
    ]
  },
  {
    "id": "cf_19",
    "catId": "cat_2",
    "category": "2. Vị Ngữ Tính Từ & Mức Độ",
    "name": "S + 有点儿 + Adj",
    "tag": "Hơi... một chút (Ý không hài lòng)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "有点儿",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      }
    ],
    "description": "有点儿 thường đi kèm tính từ mang sắc thái tiêu cực hoặc không vừa ý.",
    "challenges": [
      {
        "vi": "Đôi giày này đi vào hơi chật một chút.",
        "hanziFull": "这双鞋子穿起来有点儿紧。",
        "pinyinFull": "Zhè shuāng xiézi chuān qǐlái yǒudiǎnr jǐn.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "这双鞋子",
            "pinyin": "zhè shuāng xiézi",
            "isFixed": false
          },
          {
            "label": "Hơi",
            "expected": "有点儿",
            "pinyin": "yǒudiǎnr",
            "isFixed": true
          },
          {
            "label": "Tính từ",
            "expected": "紧",
            "pinyin": "jǐn",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "这双鞋子",
            "pinyin": "zhè shuāng xiézi",
            "vi": "Đôi giày này"
          },
          {
            "hanzi": "紧",
            "pinyin": "jǐn",
            "vi": "Chật"
          },
          {
            "hanzi": "松",
            "pinyin": "sōng",
            "vi": "Rộng"
          },
          {
            "hanzi": "硬",
            "pinyin": "yìng",
            "vi": "Cứng"
          }
        ],
        "analysis": "有点儿 thường đi kèm tính từ mang sắc thái tiêu cực hoặc không vừa ý."
      }
    ]
  },
  {
    "id": "cf_20",
    "catId": "cat_2",
    "category": "2. Vị Ngữ Tính Từ & Mức Độ",
    "name": "S + 一点儿也 + 不/没 + Adj",
    "tag": "Một chút cũng không...",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "一点儿也",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "不/没",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      }
    ],
    "description": "Cấu trúc phủ định triệt để hoàn toàn: 一点儿也不...",
    "challenges": [
      {
        "vi": "Sau một ngày làm việc tôi một chút cũng không mệt.",
        "hanziFull": "工作了一整天我一点儿也不累。",
        "pinyinFull": "Gōngzuò le yì zhěng tiān wǒ yìdiǎnr yě bú lèi.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我",
            "pinyin": "wǒ",
            "isFixed": false
          },
          {
            "label": "Một chút cũng",
            "expected": "一点儿也",
            "pinyin": "yìdiǎnr yě",
            "isFixed": true
          },
          {
            "label": "Không",
            "expected": "不",
            "pinyin": "bù",
            "isFixed": true
          },
          {
            "label": "Tính từ",
            "expected": "累",
            "pinyin": "lèi",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我",
            "pinyin": "wǒ",
            "vi": "Tôi"
          },
          {
            "hanzi": "累",
            "pinyin": "lèi",
            "vi": "Mệt"
          },
          {
            "hanzi": "渴",
            "pinyin": "kě",
            "vi": "Khát"
          },
          {
            "hanzi": "饿",
            "pinyin": "è",
            "vi": "Đói"
          }
        ],
        "analysis": "Cấu trúc phủ định triệt để hoàn toàn: 一点儿也不..."
      }
    ]
  },
  {
    "id": "cf_21",
    "catId": "cat_3",
    "category": "3. Đại Từ & Mẫu Câu Hỏi Nghi Vấn",
    "name": "S + V + 吗?",
    "tag": "Câu hỏi Có... không?",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "吗?",
        "type": "fixed"
      }
    ],
    "description": "Thêm 吗 vào cuối câu trần thuật để biến thành câu nghi vấn.",
    "challenges": [
      {
        "vi": "Bạn có thích xem phim điện ảnh Trung Quốc không?",
        "hanziFull": "你喜欢看中国电影吗？",
        "pinyinFull": "Nǐ xǐhuan kàn Zhōngguó diànyǐng ma?",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "你",
            "pinyin": "nǐ",
            "isFixed": false
          },
          {
            "label": "Thích xem phim TQ",
            "expected": "喜欢看中国电影",
            "pinyin": "xǐhuan kàn Zhōngguó diànyǐng",
            "isFixed": false
          },
          {
            "label": "Không",
            "expected": "吗",
            "pinyin": "ma",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "你",
            "pinyin": "nǐ",
            "vi": "Bạn"
          },
          {
            "hanzi": "喜欢看中国电影",
            "pinyin": "xǐhuan kàn Zhōngguó diànyǐng",
            "vi": "Thích xem phim TQ"
          },
          {
            "hanzi": "听音乐",
            "pinyin": "tīng yīnyuè",
            "vi": "Nghe nhạc"
          },
          {
            "hanzi": "喝茶",
            "pinyin": "hē chá",
            "vi": "Uống trà"
          }
        ],
        "analysis": "Thêm 吗 vào cuối câu trần thuật để biến thành câu nghi vấn."
      }
    ]
  },
  {
    "id": "cf_22",
    "catId": "cat_3",
    "category": "3. Đại Từ & Mẫu Câu Hỏi Nghi Vấn",
    "name": "S + 呢?",
    "tag": "Thế còn... thì sao? / Đang ở đâu?",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "呢?",
        "type": "fixed"
      }
    ],
    "description": "Trợ từ 呢 dùng để hỏi tỉnh lược tiếp nối chủ đề.",
    "challenges": [
      {
        "vi": "Tôi muốn một cốc trà sữa, còn bạn thì sao?",
        "hanziFull": "我要一杯奶茶，你呢？",
        "pinyinFull": "Wǒ yào yì bēi nǎichá, nǐ ne?",
        "slots": [
          {
            "label": "Mệnh đề 1",
            "expected": "我要一杯奶茶",
            "pinyin": "wǒ yào yì bēi nǎichá",
            "isFixed": false
          },
          {
            "label": "Thế còn bạn",
            "expected": "你",
            "pinyin": "nǐ",
            "isFixed": false
          },
          {
            "label": "Thì sao",
            "expected": "呢",
            "pinyin": "ne",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "我要一杯奶茶",
            "pinyin": "wǒ yào yì bēi nǎichá",
            "vi": "Tôi muốn 1 cốc trà sữa"
          },
          {
            "hanzi": "你",
            "pinyin": "nǐ",
            "vi": "Bạn"
          },
          {
            "hanzi": "他",
            "pinyin": "tā",
            "vi": "Anh ấy"
          },
          {
            "hanzi": "咖啡",
            "pinyin": "kāfēi",
            "vi": "Cà phê"
          }
        ],
        "analysis": "Trợ từ 呢 dùng để hỏi tỉnh lược tiếp nối chủ đề."
      }
    ]
  },
  {
    "id": "cf_23",
    "catId": "cat_3",
    "category": "3. Đại Từ & Mẫu Câu Hỏi Nghi Vấn",
    "name": "S + V + O + 吧?",
    "tag": "Phỏng đoán nhẹ nhàng (Phải không?)",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "吧?",
        "type": "fixed"
      }
    ],
    "description": "吧 biểu thị sự phỏng đoán với độ chắc chắn tương đối cao.",
    "challenges": [
      {
        "vi": "Bạn đã quen với cuộc sống ở đây rồi phải không?",
        "hanziFull": "你已经适应这里的生活了吧？",
        "pinyinFull": "Nǐ yǐjīng shìyìng zhèlǐ de shēnghuó le ba?",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "你",
            "pinyin": "nǐ",
            "isFixed": false
          },
          {
            "label": "Đã quen cuộc sống đây",
            "expected": "已经适应这里的生活了",
            "pinyin": "yǐjīng shìyìng zhèlǐ de shēnghuó le",
            "isFixed": false
          },
          {
            "label": "Phải không",
            "expected": "吧",
            "pinyin": "ba",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "你",
            "pinyin": "nǐ",
            "vi": "Bạn"
          },
          {
            "hanzi": "已经适应这里的生活了",
            "pinyin": "yǐjīng shìyìng zhèlǐ de shēnghuó le",
            "vi": "Đã quen cuộc sống"
          },
          {
            "hanzi": "习惯",
            "pinyin": "xíguàn",
            "vi": "Tập quán"
          },
          {
            "hanzi": "回家",
            "pinyin": "huí jiā",
            "vi": "Về nhà"
          }
        ],
        "analysis": "吧 biểu thị sự phỏng đoán với độ chắc chắn tương đối cao."
      }
    ]
  },
  {
    "id": "cf_24",
    "catId": "cat_3",
    "category": "3. Đại Từ & Mẫu Câu Hỏi Nghi Vấn",
    "name": "谁 + V + O?",
    "tag": "Hỏi Ai làm gì?",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "谁",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O?",
        "type": "var"
      }
    ],
    "description": "Đại từ nghi vấn 谁 làm chủ ngữ trong câu.",
    "challenges": [
      {
        "vi": "Ai phụ trách dự án lần này vậy?",
        "hanziFull": "谁负责这次的项目？",
        "pinyinFull": "Shéi fùzé zhè cì de xiàngmù?",
        "slots": [
          {
            "label": "Ai",
            "expected": "谁",
            "pinyin": "shéi",
            "isFixed": true
          },
          {
            "label": "Phụ trách dự án lần này",
            "expected": "负责这次的项目",
            "pinyin": "fùzé zhè cì de xiàngmù",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "谁",
            "pinyin": "shéi",
            "vi": "Ai"
          },
          {
            "hanzi": "负责这次的项目",
            "pinyin": "fùzé zhè cì de xiàngmù",
            "vi": "Phụ trách dự án lần này"
          },
          {
            "hanzi": "来",
            "pinyin": "lái",
            "vi": "Đến"
          },
          {
            "hanzi": "去",
            "pinyin": "qù",
            "vi": "Đi"
          }
        ],
        "analysis": "Đại từ nghi vấn 谁 làm chủ ngữ trong câu."
      }
    ]
  },
  {
    "id": "cf_25",
    "catId": "cat_3",
    "category": "3. Đại Từ & Mẫu Câu Hỏi Nghi Vấn",
    "name": "S + V + 什么?",
    "tag": "Hỏi Làm cái gì?",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "什么?",
        "type": "fixed"
      }
    ],
    "description": "什么 làm tân ngữ sau động từ để hỏi sự vật.",
    "challenges": [
      {
        "vi": "Cuối tuần này bạn dự định làm gì?",
        "hanziFull": "这个周末你打算做什么？",
        "pinyinFull": "Zhège zhōumò nǐ dǎsuàn zuò shénme?",
        "slots": [
          {
            "label": "Thời gian",
            "expected": "这个周末",
            "pinyin": "zhège zhōumò",
            "isFixed": false
          },
          {
            "label": "Chủ ngữ",
            "expected": "你",
            "pinyin": "nǐ",
            "isFixed": false
          },
          {
            "label": "Dự định làm",
            "expected": "打算做",
            "pinyin": "dǎsuàn zuò",
            "isFixed": false
          },
          {
            "label": "Cái gì",
            "expected": "什么",
            "pinyin": "shénme",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这个周末",
            "pinyin": "zhège zhōumò",
            "vi": "Cuối tuần này"
          },
          {
            "hanzi": "你",
            "pinyin": "nǐ",
            "vi": "Bạn"
          },
          {
            "hanzi": "打算做",
            "pinyin": "dǎsuàn zuò",
            "vi": "Dự định làm"
          },
          {
            "hanzi": "买",
            "pinyin": "mǎi",
            "vi": "Mua"
          }
        ],
        "analysis": "什么 làm tân ngữ sau động từ để hỏi sự vật."
      }
    ]
  },
  {
    "id": "cf_26",
    "catId": "cat_3",
    "category": "3. Đại Từ & Mẫu Câu Hỏi Nghi Vấn",
    "name": "S + 在哪儿 + V?",
    "tag": "Hỏi Làm việc gì ở đâu?",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "在哪儿",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V?",
        "type": "var"
      }
    ],
    "description": "Giới từ 在 đi kèm 哪儿 đứng trước động từ chỉ địa điểm hành động.",
    "challenges": [
      {
        "vi": "Chúng ta gặp nhau ở đâu vào tối nay?",
        "hanziFull": "今晚我们在哪儿见面？",
        "pinyinFull": "Jīnwǎn wǒmen zài nǎr jiànmiàn?",
        "slots": [
          {
            "label": "Thời gian",
            "expected": "今晚",
            "pinyin": "jīnwǎn",
            "isFixed": false
          },
          {
            "label": "Chủ ngữ",
            "expected": "我们",
            "pinyin": "wǒmen",
            "isFixed": false
          },
          {
            "label": "Ở đâu",
            "expected": "在哪儿",
            "pinyin": "zài nǎr",
            "isFixed": true
          },
          {
            "label": "Gặp mặt",
            "expected": "见面",
            "pinyin": "jiànmiàn",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "今晚",
            "pinyin": "jīnwǎn",
            "vi": "Tối nay"
          },
          {
            "hanzi": "我们",
            "pinyin": "wǒmen",
            "vi": "Chúng ta"
          },
          {
            "hanzi": "见面",
            "pinyin": "jiànmiàn",
            "vi": "Gặp gỡ"
          },
          {
            "hanzi": "吃饭",
            "pinyin": "chīfàn",
            "vi": "Ăn cơm"
          }
        ],
        "analysis": "Giới từ 在 đi kèm 哪儿 đứng trước động từ chỉ địa điểm hành động."
      }
    ]
  },
  {
    "id": "cf_27",
    "catId": "cat_3",
    "category": "3. Đại Từ & Mẫu Câu Hỏi Nghi Vấn",
    "name": "S + 怎么 + V?",
    "tag": "Hỏi Phương thức (Làm thế nào?)",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "怎么",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V?",
        "type": "var"
      }
    ],
    "description": "怎么 đứng trước động từ để hỏi cách thức tiến hành.",
    "challenges": [
      {
        "vi": "Xin hỏi đến sân bay đi như thế nào?",
        "hanziFull": "请问去机场怎么走？",
        "pinyinFull": "Qǐngwèn qù jīchǎng zěnme zǒu?",
        "slots": [
          {
            "label": "Hỏi đường",
            "expected": "去机场",
            "pinyin": "qù jīchǎng",
            "isFixed": false
          },
          {
            "label": "Thế nào",
            "expected": "怎么",
            "pinyin": "zěnme",
            "isFixed": true
          },
          {
            "label": "Đi",
            "expected": "走",
            "pinyin": "zǒu",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "去机场",
            "pinyin": "qù jīchǎng",
            "vi": "Đi sân bay"
          },
          {
            "hanzi": "走",
            "pinyin": "zǒu",
            "vi": "Đi bộ/di chuyển"
          },
          {
            "hanzi": "坐车",
            "pinyin": "zuò chē",
            "vi": "Đi xe"
          },
          {
            "hanzi": "坐地铁",
            "pinyin": "zuò dìtiě",
            "vi": "Đi tàu điện"
          }
        ],
        "analysis": "怎么 đứng trước động từ để hỏi cách thức tiến hành."
      }
    ]
  },
  {
    "id": "cf_28",
    "catId": "cat_3",
    "category": "3. Đại Từ & Mẫu Câu Hỏi Nghi Vấn",
    "name": "S + 怎么样?",
    "tag": "Hỏi Đánh giá (Như thế nào?)",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "怎么样?",
        "type": "fixed"
      }
    ],
    "description": "怎么样 đứng cuối câu hỏi ý kiến nhận xét.",
    "challenges": [
      {
        "vi": "Đề xuất hợp tác này bạn thấy thế nào?",
        "hanziFull": "这个合作建议你觉得怎么样？",
        "pinyinFull": "Zhège hézuò jiànyì nǐ juéde zěnmeyàng?",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "这个合作建议",
            "pinyin": "zhège hézuò jiànyì",
            "isFixed": false
          },
          {
            "label": "Bạn thấy",
            "expected": "你觉得",
            "pinyin": "nǐ juéde",
            "isFixed": false
          },
          {
            "label": "Thế nào",
            "expected": "怎么样",
            "pinyin": "zěnmeyàng",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这个合作建议",
            "pinyin": "zhège hézuò jiànyì",
            "vi": "Đề xuất hợp tác này"
          },
          {
            "hanzi": "你觉得",
            "pinyin": "nǐ juéde",
            "vi": "Bạn cảm thấy"
          },
          {
            "hanzi": "方案",
            "pinyin": "fāng'àn",
            "vi": "Phương án"
          },
          {
            "hanzi": "价格",
            "pinyin": "jiàgé",
            "vi": "Giá cả"
          }
        ],
        "analysis": "怎么样 đứng cuối câu hỏi ý kiến nhận xét."
      }
    ]
  },
  {
    "id": "cf_29",
    "catId": "cat_3",
    "category": "3. Đại Từ & Mẫu Câu Hỏi Nghi Vấn",
    "name": "S + V + 不 + V?",
    "tag": "Câu hỏi chính phản (Làm hay không?)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "不",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V?",
        "type": "var"
      }
    ],
    "description": "Lặp lại động từ dạng khẳng định - phủ định để hỏi chính phản.",
    "challenges": [
      {
        "vi": "Trưa nay bạn có đi ăn cơm cùng chúng tôi không?",
        "hanziFull": "中午你跟我们去不去吃饭？",
        "pinyinFull": "Zhōngwǔ nǐ gēn wǒmen qù bu qù chīfàn?",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "你",
            "pinyin": "nǐ",
            "isFixed": false
          },
          {
            "label": "Cùng chúng tôi",
            "expected": "跟我们",
            "pinyin": "gēn wǒmen",
            "isFixed": false
          },
          {
            "label": "Đi hay không",
            "expected": "去不去",
            "pinyin": "qù bu qù",
            "isFixed": true
          },
          {
            "label": "Ăn cơm",
            "expected": "吃饭",
            "pinyin": "chīfàn",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "你",
            "pinyin": "nǐ",
            "vi": "Bạn"
          },
          {
            "hanzi": "跟我们",
            "pinyin": "gēn wǒmen",
            "vi": "Cùng chúng tôi"
          },
          {
            "hanzi": "吃饭",
            "pinyin": "chīfàn",
            "vi": "Ăn cơm"
          },
          {
            "hanzi": "喝咖啡",
            "pinyin": "hē kāfēi",
            "vi": "Uống cà phê"
          }
        ],
        "analysis": "Lặp lại động từ dạng khẳng định - phủ định để hỏi chính phản."
      }
    ]
  },
  {
    "id": "cf_30",
    "catId": "cat_3",
    "category": "3. Đại Từ & Mẫu Câu Hỏi Nghi Vấn",
    "name": "S + 是不是 + V/Adj?",
    "tag": "Có phải là... không? (Dự đoán)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "是不是",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V/Adj?",
        "type": "var"
      }
    ],
    "description": "是不是 đứng trước vị ngữ để hỏi thăm dò sự việc nghi vấn.",
    "challenges": [
      {
        "vi": "Có phải bạn để quên chìa khóa trong xe rồi không?",
        "hanziFull": "你是不是把钥匙忘在车里了？",
        "pinyinFull": "Nǐ shì bú shì bǎ yàoshi wàng zài chē lǐ le?",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "你",
            "pinyin": "nǐ",
            "isFixed": false
          },
          {
            "label": "Có phải",
            "expected": "是不是",
            "pinyin": "shì bú shì",
            "isFixed": true
          },
          {
            "label": "Quên chìa khóa trong xe",
            "expected": "把钥匙忘在车里了",
            "pinyin": "bǎ yàoshi wàng zài chē lǐ le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "你",
            "pinyin": "nǐ",
            "vi": "Bạn"
          },
          {
            "hanzi": "把钥匙忘在车里了",
            "pinyin": "bǎ yàoshi wàng zài chē lǐ le",
            "vi": "Quên chìa khóa trong xe"
          },
          {
            "hanzi": "手机",
            "pinyin": "shǒujī",
            "vi": "Điện thoại"
          },
          {
            "hanzi": "钱包",
            "pinyin": "qiánbāo",
            "vi": "Ví tiền"
          }
        ],
        "analysis": "是不是 đứng trước vị ngữ để hỏi thăm dò sự việc nghi vấn."
      }
    ]
  },
  {
    "id": "cf_31",
    "catId": "cat_4",
    "category": "4. Trật Tự Thời Gian, Nơi Chốn & Giới Từ",
    "name": "S + Thời gian + V + O",
    "tag": "Quy tắc thời gian trước động từ",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Thời gian",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      }
    ],
    "description": "Trạng ngữ chỉ thời gian luôn đứng trước động từ trong tiếng Trung.",
    "challenges": [
      {
        "vi": "Ngày mai lúc 9 giờ sáng chúng tôi sẽ họp.",
        "hanziFull": "我们明天早上九点开会。",
        "pinyinFull": "Wǒmen míngtiān zǎoshang jiǔ diǎn kāihuì.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我们",
            "pinyin": "wǒmen",
            "isFixed": false
          },
          {
            "label": "Thời gian",
            "expected": "明天早上九点",
            "pinyin": "míngtiān zǎoshang jiǔ diǎn",
            "isFixed": false
          },
          {
            "label": "Họp",
            "expected": "开会",
            "pinyin": "kāihuì",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我们",
            "pinyin": "wǒmen",
            "vi": "Chúng tôi"
          },
          {
            "hanzi": "明天早上九点",
            "pinyin": "míngtiān zǎoshang jiǔ diǎn",
            "vi": "Sáng mai 9h"
          },
          {
            "hanzi": "开会",
            "pinyin": "kāihuì",
            "vi": "Họp hành"
          },
          {
            "hanzi": "出发",
            "pinyin": "chūfā",
            "vi": "Xuất phát"
          }
        ],
        "analysis": "Trạng ngữ chỉ thời gian luôn đứng trước động từ trong tiếng Trung."
      }
    ]
  },
  {
    "id": "cf_32",
    "catId": "cat_4",
    "category": "4. Trật Tự Thời Gian, Nơi Chốn & Giới Từ",
    "name": "S + 在 + Địa điểm + V + O",
    "tag": "Quy tắc địa điểm trước hành động",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "在",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Địa điểm",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      }
    ],
    "description": "Cấu trúc hành vi nơi chốn: S + 在 + Địa điểm + Hành động V.",
    "challenges": [
      {
        "vi": "Tôi học tiếng Trung tại thư viện thành phố.",
        "hanziFull": "我在市图书馆学习中文。",
        "pinyinFull": "Wǒ zài shì túshūguǎn xuéxí Zhōngwén.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我",
            "pinyin": "wǒ",
            "isFixed": false
          },
          {
            "label": "Ở thư viện thành phố",
            "expected": "在市图书馆",
            "pinyin": "zài shì túshūguǎn",
            "isFixed": false
          },
          {
            "label": "Học tiếng Trung",
            "expected": "学习中文",
            "pinyin": "xuéxí Zhōngwén",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我",
            "pinyin": "wǒ",
            "vi": "Tôi"
          },
          {
            "hanzi": "在市图书馆",
            "pinyin": "zài shì túshūguǎn",
            "vi": "Ở thư viện tp"
          },
          {
            "hanzi": "学习中文",
            "pinyin": "xuéxí Zhōngwén",
            "vi": "Học tiếng Trung"
          },
          {
            "hanzi": "看书",
            "pinyin": "kàn shū",
            "vi": "Đọc sách"
          }
        ],
        "analysis": "Cấu trúc hành vi nơi chốn: S + 在 + Địa điểm + Hành động V."
      }
    ]
  },
  {
    "id": "cf_33",
    "catId": "cat_4",
    "category": "4. Trật Tự Thời Gian, Nơi Chốn & Giới Từ",
    "name": "S + 从 + Điểm A + 到 + Điểm B",
    "tag": "Phạm vi khoảng cách (Từ đâu đến đâu)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "从",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Điểm A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "到",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Điểm B",
        "type": "var"
      }
    ],
    "description": "从...到... xác định lộ trình từ điểm xuất phát đến điểm kết thúc.",
    "challenges": [
      {
        "vi": "Từ nhà tôi đến công ty đi tàu mất nửa tiếng.",
        "hanziFull": "从我家到公司坐地铁要半个小时。",
        "pinyinFull": "Cóng wǒ jiā dào gōngsī zuò dìtiě yào bàn gè xiǎoshí.",
        "slots": [
          {
            "label": "Từ nhà tôi",
            "expected": "从我家",
            "pinyin": "cóng wǒ jiā",
            "isFixed": false
          },
          {
            "label": "Đến công ty",
            "expected": "到公司",
            "pinyin": "dào gōngsī",
            "isFixed": false
          },
          {
            "label": "Hành động thời gian",
            "expected": "坐地铁要半个小时",
            "pinyin": "zuò dìtiě yào bàn gè xiǎoshí",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "从我家",
            "pinyin": "cóng wǒ jiā",
            "vi": "Từ nhà tôi"
          },
          {
            "hanzi": "到公司",
            "pinyin": "dào gōngsī",
            "vi": "Đến công ty"
          },
          {
            "hanzi": "坐地铁要半个小时",
            "pinyin": "zuò dìtiě yào bàn gè xiǎoshí",
            "vi": "Đi tàu mất nửa tiếng"
          },
          {
            "hanzi": "很远",
            "pinyin": "hěn yuǎn",
            "vi": "Rất xa"
          }
        ],
        "analysis": "从...到... xác định lộ trình từ điểm xuất phát đến điểm kết thúc."
      }
    ]
  },
  {
    "id": "cf_34",
    "catId": "cat_4",
    "category": "4. Trật Tự Thời Gian, Nơi Chốn & Giới Từ",
    "name": "S + 跟/和 + Ai đó + 一起 + V",
    "tag": "Cùng ai đó làm gì",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "跟/和",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Ai đó",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "一起",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "Giới từ 跟/和 liên kết đối tượng hợp tác cùng hành động.",
    "challenges": [
      {
        "vi": "Tôi cùng đồng nghiệp đi ăn trưa.",
        "hanziFull": "我跟同事一起去吃午饭。",
        "pinyinFull": "Wǒ gēn tóngshì yìqǐ qù chī wǔfàn.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我",
            "pinyin": "wǒ",
            "isFixed": false
          },
          {
            "label": "Cùng",
            "expected": "跟",
            "pinyin": "gēn",
            "isFixed": true
          },
          {
            "label": "Đồng nghiệp",
            "expected": "同事",
            "pinyin": "tóngshì",
            "isFixed": false
          },
          {
            "label": "Cùng nhau",
            "expected": "一起",
            "pinyin": "yìqǐ",
            "isFixed": true
          },
          {
            "label": "Đi ăn trưa",
            "expected": "去吃午饭",
            "pinyin": "qù chī wǔfàn",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我",
            "pinyin": "wǒ",
            "vi": "Tôi"
          },
          {
            "hanzi": "同事",
            "pinyin": "tóngshì",
            "vi": "Đồng nghiệp"
          },
          {
            "hanzi": "去吃午饭",
            "pinyin": "qù chī wǔfàn",
            "vi": "Đi ăn trưa"
          },
          {
            "hanzi": "朋友",
            "pinyin": "péngyou",
            "vi": "Bạn bè"
          }
        ],
        "analysis": "Giới từ 跟/和 liên kết đối tượng hợp tác cùng hành động."
      }
    ]
  },
  {
    "id": "cf_35",
    "catId": "cat_4",
    "category": "4. Trật Tự Thời Gian, Nơi Chốn & Giới Từ",
    "name": "S + 给 + Ai đó + V + O",
    "tag": "Làm gì cho/cho ai hưởng",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "给",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Ai đó",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      }
    ],
    "description": "Giới từ 给 dẫn xuất đối tượng tiếp nhận hành động.",
    "challenges": [
      {
        "vi": "Tôi muốn gọi một cuộc điện thoại cho khách hàng.",
        "hanziFull": "我想给客户打个电话。",
        "pinyinFull": "Wǒ xiǎng gěi kèhù dǎ gè diànhuà.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我想",
            "pinyin": "wǒ xiǎng",
            "isFixed": false
          },
          {
            "label": "Cho",
            "expected": "给",
            "pinyin": "gěi",
            "isFixed": true
          },
          {
            "label": "Khách hàng",
            "expected": "客户",
            "pinyin": "kèhù",
            "isFixed": false
          },
          {
            "label": "Gọi điện",
            "expected": "打个电话",
            "pinyin": "dǎ gè diànhuà",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我想",
            "pinyin": "wǒ xiǎng",
            "vi": "Tôi muốn"
          },
          {
            "hanzi": "客户",
            "pinyin": "kèhù",
            "vi": "Khách hàng"
          },
          {
            "hanzi": "打个电话",
            "pinyin": "dǎ gè diànhuà",
            "vi": "Gọi điện thoại"
          },
          {
            "hanzi": "发邮件",
            "pinyin": "fā yóujiàn",
            "vi": "Gửi email"
          }
        ],
        "analysis": "Giới từ 给 dẫn xuất đối tượng tiếp nhận hành động."
      }
    ]
  },
  {
    "id": "cf_36",
    "catId": "cat_4",
    "category": "4. Trật Tự Thời Gian, Nơi Chốn & Giới Từ",
    "name": "S + 对 + Đối tượng + Adj/V",
    "tag": "Đối với ai/cái gì thế nào",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "对",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Đối tượng",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj/V",
        "type": "var"
      }
    ],
    "description": "对 giới thiệu đối tượng nhận tác động hoặc đánh giá.",
    "challenges": [
      {
        "vi": "Tập thể dục thường xuyên rất tốt cho sức khỏe.",
        "hanziFull": "经常运动对身体很有好处。",
        "pinyinFull": "Jīngcháng yùndòng duì shēntǐ hěn yǒu hǎochu.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "经常运动",
            "pinyin": "jīngcháng yùndòng",
            "isFixed": false
          },
          {
            "label": "Đối với sức khỏe",
            "expected": "对身体",
            "pinyin": "duì shēntǐ",
            "isFixed": false
          },
          {
            "label": "Rất có lợi",
            "expected": "很有好处",
            "pinyin": "hěn yǒu hǎochu",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "经常运动",
            "pinyin": "jīngcháng yùndòng",
            "vi": "Thường xuyên thể dục"
          },
          {
            "hanzi": "对身体",
            "pinyin": "duì shēntǐ",
            "vi": "Đối với sức khỏe"
          },
          {
            "hanzi": "很有好处",
            "pinyin": "hěn yǒu hǎochu",
            "vi": "Rất có ích"
          },
          {
            "hanzi": "很好",
            "pinyin": "hěn hǎo",
            "vi": "Rất tốt"
          }
        ],
        "analysis": "对 giới thiệu đối tượng nhận tác động hoặc đánh giá."
      }
    ]
  },
  {
    "id": "cf_37",
    "catId": "cat_4",
    "category": "4. Trật Tự Thời Gian, Nơi Chốn & Giới Từ",
    "name": "S + 往 + Hướng + V",
    "tag": "Phương hướng di chuyển (Hướng về...)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "往",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Hướng",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "往 đi kèm từ chỉ phương vị để chỉ hướng vận động.",
    "challenges": [
      {
        "vi": "Đi thẳng về phía trước rồi rẽ phải ở ngã tư.",
        "hanziFull": "往前直走，在路口右转。",
        "pinyinFull": "Wǎng qián zhí zǒu, zài lùkǒu yòu zhuǎn.",
        "slots": [
          {
            "label": "Hướng về phía trước",
            "expected": "往前",
            "pinyin": "wǎng qián",
            "isFixed": false
          },
          {
            "label": "Đi thẳng",
            "expected": "直走",
            "pinyin": "zhí zǒu",
            "isFixed": false
          },
          {
            "label": "Rẽ phải ở ngã tư",
            "expected": "在路口右转",
            "pinyin": "zài lùkǒu yòu zhuǎn",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "往前",
            "pinyin": "wǎng qián",
            "vi": "Hướng về trước"
          },
          {
            "hanzi": "直走",
            "pinyin": "zhí zǒu",
            "vi": "Đi thẳng"
          },
          {
            "hanzi": "在路口右转",
            "pinyin": "zài lùkǒu yòu zhuǎn",
            "vi": "Rẽ phải ở ngã tư"
          },
          {
            "hanzi": "左转",
            "pinyin": "zuǒ zhuǎn",
            "vi": "Rẽ trái"
          }
        ],
        "analysis": "往 đi kèm từ chỉ phương vị để chỉ hướng vận động."
      }
    ]
  },
  {
    "id": "cf_38",
    "catId": "cat_4",
    "category": "4. Trật Tự Thời Gian, Nơi Chốn & Giới Từ",
    "name": "S + 离 + Nơi chốn + 很远/很近",
    "tag": "Khoảng cách địa lý (Cách... bao xa)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "离",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Nơi chốn",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "很远/很近",
        "type": "fixed"
      }
    ],
    "description": "离 dùng để đo đếm khoảng cách giữa hai địa điểm.",
    "challenges": [
      {
        "vi": "Khách sạn cách sân bay rất gần.",
        "hanziFull": "这家酒店离机场很近。",
        "pinyinFull": "Zhè jiā jiǔdiàn lí jīchǎng hěn jìn.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "这家酒店",
            "pinyin": "zhè jiā jiǔdiàn",
            "isFixed": false
          },
          {
            "label": "Cách",
            "expected": "离",
            "pinyin": "lí",
            "isFixed": true
          },
          {
            "label": "Sân bay",
            "expected": "机场",
            "pinyin": "jīchǎng",
            "isFixed": false
          },
          {
            "label": "Rất gần",
            "expected": "很近",
            "pinyin": "hěn jìn",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "这家酒店",
            "pinyin": "zhè jiā jiǔdiàn",
            "vi": "Khách sạn này"
          },
          {
            "hanzi": "机场",
            "pinyin": "jīchǎng",
            "vi": "Sân bay"
          },
          {
            "hanzi": "很近",
            "pinyin": "hěn jìn",
            "vi": "Rất gần"
          },
          {
            "hanzi": "很远",
            "pinyin": "hěn yuǎn",
            "vi": "Rất xa"
          }
        ],
        "analysis": "离 dùng để đo đếm khoảng cách giữa hai địa điểm."
      }
    ]
  },
  {
    "id": "cf_39",
    "catId": "cat_4",
    "category": "4. Trật Tự Thời Gian, Nơi Chốn & Giới Từ",
    "name": "S + 为 + Ai đó + V",
    "tag": "Vì ai mà phục vụ/làm việc",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "为",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Ai đó",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "为 biểu thị mục đích hoặc người hưởng thụ lợi ích.",
    "challenges": [
      {
        "vi": "Chúng tôi luôn sẵn sàng phục vụ quý khách.",
        "hanziFull": "我们随时为您提供服务。",
        "pinyinFull": "Wǒmen suíshí wèi nín tígōng fúwù.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我们随时",
            "pinyin": "wǒmen suíshí",
            "isFixed": false
          },
          {
            "label": "Vì quý khách",
            "expected": "为您",
            "pinyin": "wèi nín",
            "isFixed": false
          },
          {
            "label": "Cung cấp dịch vụ",
            "expected": "提供服务",
            "pinyin": "tígōng fúwù",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我们随时",
            "pinyin": "wǒmen suíshí",
            "vi": "Chúng tôi luôn sẵn sàng"
          },
          {
            "hanzi": "为您",
            "pinyin": "wèi nín",
            "vi": "Vì quý khách"
          },
          {
            "hanzi": "提供服务",
            "pinyin": "tígōng fúwù",
            "vi": "Cung cấp dịch vụ"
          },
          {
            "hanzi": "帮忙",
            "pinyin": "bāngmáng",
            "vi": "Giúp đỡ"
          }
        ],
        "analysis": "为 biểu thị mục đích hoặc người hưởng thụ lợi ích."
      }
    ]
  },
  {
    "id": "cf_40",
    "catId": "cat_4",
    "category": "4. Trật Tự Thời Gian, Nơi Chốn & Giới Từ",
    "name": "S + 替 + Ai đó + V",
    "tag": "Thay thế/làm hộ ai việc gì",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "替",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Ai đó",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "替 mang nghĩa làm đại diện, làm thay cho người khác.",
    "challenges": [
      {
        "vi": "Tôi có thể nộp báo cáo giúp bạn vào ngày mai.",
        "hanziFull": "明天我可以替你提交报告。",
        "pinyinFull": "Míngtiān wǒ kěyǐ tì nǐ tíjiāo bàogào.",
        "slots": [
          {
            "label": "Thời gian & Có thể",
            "expected": "明天我可以",
            "pinyin": "míngtiān wǒ kěyǐ",
            "isFixed": false
          },
          {
            "label": "Thay bạn",
            "expected": "替你",
            "pinyin": "tì nǐ",
            "isFixed": false
          },
          {
            "label": "Nộp báo cáo",
            "expected": "提交报告",
            "pinyin": "tíjiāo bàogào",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "明天我可以",
            "pinyin": "míngtiān wǒ kěyǐ",
            "vi": "Ngày mai tôi có thể"
          },
          {
            "hanzi": "替你",
            "pinyin": "tì nǐ",
            "vi": "Thay bạn"
          },
          {
            "hanzi": "提交报告",
            "pinyin": "tíjiāo bàogào",
            "vi": "Nộp báo cáo"
          },
          {
            "hanzi": "开会",
            "pinyin": "kāihuì",
            "vi": "Đi họp"
          }
        ],
        "analysis": "替 mang nghĩa làm đại diện, làm thay cho người khác."
      }
    ]
  },
  {
    "id": "cf_41",
    "catId": "cat_5",
    "category": "5. Động Từ Năng Nguyện & Nguyện Vọng",
    "name": "S + 想 + V + O",
    "tag": "Muốn / Dự định làm gì",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "想",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      }
    ],
    "description": "想 biểu thị mong muốn, ý định chủ quan.",
    "challenges": [
      {
        "vi": "Tôi muốn đi du lịch Bắc Kinh vào kỳ nghỉ.",
        "hanziFull": "假期我想去北京旅游。",
        "pinyinFull": "Jiàqī wǒ xiǎng qù Běijīng lǚyóu.",
        "slots": [
          {
            "label": "Chủ ngữ & Muốn",
            "expected": "假期我想",
            "pinyin": "jiàqī wǒ xiǎng",
            "isFixed": false
          },
          {
            "label": "Đi du lịch Bắc Kinh",
            "expected": "去北京旅游",
            "pinyin": "qù Běijīng lǚyóu",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "假期我想",
            "pinyin": "jiàqī wǒ xiǎng",
            "vi": "Nghỉ tôi muốn"
          },
          {
            "hanzi": "去北京旅游",
            "pinyin": "qù Běijīng lǚyóu",
            "vi": "Đi du lịch Bắc Kinh"
          },
          {
            "hanzi": "学中文",
            "pinyin": "xué Zhōngwén",
            "vi": "Học tiếng Trung"
          },
          {
            "hanzi": "买车",
            "pinyin": "mǎi chē",
            "vi": "Mua xe"
          }
        ],
        "analysis": "想 biểu thị mong muốn, ý định chủ quan."
      }
    ]
  },
  {
    "id": "cf_42",
    "catId": "cat_5",
    "category": "5. Động Từ Năng Nguyện & Nguyện Vọng",
    "name": "S + 要 + V + O",
    "tag": "Cần phải / Sắp sửa / Muốn",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "要",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      }
    ],
    "description": "要 mang sắc thái quyết tâm và tính cần thiết cao hơn 想.",
    "challenges": [
      {
        "vi": "Tôi cần phải chuẩn bị tài liệu cho cuộc họp ngày mai.",
        "hanziFull": "我要准备明天开会的材料。",
        "pinyinFull": "Wǒ yào zhǔnbèi míngtiān kāihuì de cáiliào.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我",
            "pinyin": "wǒ",
            "isFixed": false
          },
          {
            "label": "Phải / Cần",
            "expected": "要",
            "pinyin": "yào",
            "isFixed": true
          },
          {
            "label": "Chuẩn bị tài liệu họp",
            "expected": "准备明天开会的材料",
            "pinyin": "zhǔnbèi míngtiān kāihuì de cáiliào",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我",
            "pinyin": "wǒ",
            "vi": "Tôi"
          },
          {
            "hanzi": "准备明天开会的材料",
            "pinyin": "zhǔnbèi míngtiān kāihuì de cáiliào",
            "vi": "Chuẩn bị tài liệu họp"
          },
          {
            "hanzi": "写代码",
            "pinyin": "xiě dàimǎ",
            "vi": "Viết code"
          },
          {
            "hanzi": "发邮件",
            "pinyin": "fā yóujiàn",
            "vi": "Gửi email"
          }
        ],
        "analysis": "要 mang sắc thái quyết tâm và tính cần thiết cao hơn 想."
      }
    ]
  },
  {
    "id": "cf_43",
    "catId": "cat_5",
    "category": "5. Động Từ Năng Nguyện & Nguyện Vọng",
    "name": "S + 会 + V + O",
    "tag": "Biết qua học tập / Sẽ xảy ra",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "会",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      }
    ],
    "description": "会 biểu thị kỹ năng đạt được thông qua quá trình học tập rèn luyện.",
    "challenges": [
      {
        "vi": "Anh ấy biết nói cả tiếng Trung lẫn tiếng Anh.",
        "hanziFull": "他会说中文和英文。",
        "pinyinFull": "Tā huì shuō Zhōngwén hé Yīngwén.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "他",
            "pinyin": "tā",
            "isFixed": false
          },
          {
            "label": "Biết",
            "expected": "会",
            "pinyin": "huì",
            "isFixed": true
          },
          {
            "label": "Nói tiếng Trung và Anh",
            "expected": "说中文和英文",
            "pinyin": "shuō Zhōngwén hé Yīngwén",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "他",
            "pinyin": "tā",
            "vi": "Anh ấy"
          },
          {
            "hanzi": "说中文和英文",
            "pinyin": "shuō Zhōngwén hé Yīngwén",
            "vi": "Nói tiếng Trung & Anh"
          },
          {
            "hanzi": "开车",
            "pinyin": "kāi chē",
            "vi": "Lái xe"
          },
          {
            "hanzi": "游泳",
            "pinyin": "yóuyǒng",
            "vi": "Bơi lội"
          }
        ],
        "analysis": "会 biểu thị kỹ năng đạt được thông qua quá trình học tập rèn luyện."
      }
    ]
  },
  {
    "id": "cf_44",
    "catId": "cat_5",
    "category": "5. Động Từ Năng Nguyện & Nguyện Vọng",
    "name": "S + 能 + V + O",
    "tag": "Có năng lực / Có khả năng",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "能",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      }
    ],
    "description": "能 chỉ điều kiện, năng lực thể chất hoặc lời thỉnh cầu.",
    "challenges": [
      {
        "vi": "Bạn có thể giúp tôi xem qua bản hợp đồng này không?",
        "hanziFull": "你能帮我看一下这份合同吗？",
        "pinyinFull": "Nǐ néng bāng wǒ kàn yíxià zhè fèn hétong ma?",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "你",
            "pinyin": "nǐ",
            "isFixed": false
          },
          {
            "label": "Có thể",
            "expected": "能",
            "pinyin": "néng",
            "isFixed": true
          },
          {
            "label": "Giúp tôi xem hợp đồng",
            "expected": "帮我看一下这份合同",
            "pinyin": "bāng wǒ kàn yíxià zhè fèn hétong",
            "isFixed": false
          },
          {
            "label": "Không",
            "expected": "吗",
            "pinyin": "ma",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "你",
            "pinyin": "nǐ",
            "vi": "Bạn"
          },
          {
            "hanzi": "帮我看一下这份合同",
            "pinyin": "bāng wǒ kàn yíxià zhè fèn hétong",
            "vi": "Giúp tôi xem hợp đồng này"
          },
          {
            "hanzi": "修改",
            "pinyin": "xiūgǎi",
            "vi": "Sửa đổi"
          },
          {
            "hanzi": "签字",
            "pinyin": "qiānzì",
            "vi": "Ký tên"
          }
        ],
        "analysis": "能 chỉ điều kiện, năng lực thể chất hoặc lời thỉnh cầu."
      }
    ]
  },
  {
    "id": "cf_45",
    "catId": "cat_5",
    "category": "5. Động Từ Năng Nguyện & Nguyện Vọng",
    "name": "S + 可以 + V + O",
    "tag": "Được phép / Có thể",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "可以",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      }
    ],
    "description": "可以 chỉ sự cho phép hoặc tính khả thi.",
    "challenges": [
      {
        "vi": "Ở đây có thể thanh toán bằng thẻ tín dụng không?",
        "hanziFull": "这里可以用信用卡付款吗？",
        "pinyinFull": "Zhèlǐ kěyǐ yòng xìnyòngkǎ fùkuǎn ma?",
        "slots": [
          {
            "label": "Địa điểm",
            "expected": "这里",
            "pinyin": "zhèlǐ",
            "isFixed": false
          },
          {
            "label": "Có thể",
            "expected": "可以",
            "pinyin": "kěyǐ",
            "isFixed": true
          },
          {
            "label": "Thanh toán thẻ tín dụng",
            "expected": "用信用卡付款",
            "pinyin": "yòng xìnyòngkǎ fùkuǎn",
            "isFixed": false
          },
          {
            "label": "Không",
            "expected": "吗",
            "pinyin": "ma",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这里",
            "pinyin": "zhèlǐ",
            "vi": "Ở đây"
          },
          {
            "hanzi": "用信用卡付款",
            "pinyin": "yòng xìnyòngkǎ fùkuǎn",
            "vi": "Thanh toán bằng thẻ tín dụng"
          },
          {
            "hanzi": "扫码",
            "pinyin": "sǎo mǎ",
            "vi": "Quét mã"
          },
          {
            "hanzi": "付现金",
            "pinyin": "fù xiànjīn",
            "vi": "Trả tiền mặt"
          }
        ],
        "analysis": "可以 chỉ sự cho phép hoặc tính khả thi."
      }
    ]
  },
  {
    "id": "cf_46",
    "catId": "cat_5",
    "category": "5. Động Từ Năng Nguyện & Nguyện Vọng",
    "name": "S + 应该 + V + O",
    "tag": "Nên làm gì (Đạo lý/Khuyên răn)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "应该",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      }
    ],
    "description": "应该 đưa ra lời khuyên nhủ hợp lý.",
    "challenges": [
      {
        "vi": "Bạn nên nghỉ ngơi nhiều hơn và uống nhiều nước ấm.",
        "hanziFull": "你应该多休息，多喝温水。",
        "pinyinFull": "Nǐ yīnggāi duō xiūxi, duō hē wēnshuǐ.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "你",
            "pinyin": "nǐ",
            "isFixed": false
          },
          {
            "label": "Nên",
            "expected": "应该",
            "pinyin": "yīnggāi",
            "isFixed": true
          },
          {
            "label": "Nghỉ ngơi và uống nước",
            "expected": "多休息，多喝温水",
            "pinyin": "duō xiūxi, duō hē wēnshuǐ",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "你",
            "pinyin": "nǐ",
            "vi": "Bạn"
          },
          {
            "hanzi": "多休息，多喝温水",
            "pinyin": "duō xiūxi, duō hē wēnshuǐ",
            "vi": "Nghỉ nhiều, uống nước ấm"
          },
          {
            "hanzi": "去看医生",
            "pinyin": "qù kàn yīshēng",
            "vi": "Đi khám"
          },
          {
            "hanzi": "请假",
            "pinyin": "qǐngjià",
            "vi": "Xin nghỉ"
          }
        ],
        "analysis": "应该 đưa ra lời khuyên nhủ hợp lý."
      }
    ]
  },
  {
    "id": "cf_47",
    "catId": "cat_5",
    "category": "5. Động Từ Năng Nguyện & Nguyện Vọng",
    "name": "S + 必须 + V + O",
    "tag": "Bắt buộc phải làm gì",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "必须",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      }
    ],
    "description": "必须 biểu thị tính bắt buộc không thể trì hoãn.",
    "challenges": [
      {
        "vi": "Hôm nay chúng ta bắt buộc phải hoàn thành nhiệm vụ này.",
        "hanziFull": "我们今天必须完成这项任务。",
        "pinyinFull": "Wǒmen jīntiān bìxū wánchéng zhè xiàng rènwu.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我们今天",
            "pinyin": "wǒmen jīntiān",
            "isFixed": false
          },
          {
            "label": "Bắt buộc",
            "expected": "必须",
            "pinyin": "bìxū",
            "isFixed": true
          },
          {
            "label": "Hoàn thành nhiệm vụ này",
            "expected": "完成这项任务",
            "pinyin": "wánchéng zhè xiàng rènwu",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我们今天",
            "pinyin": "wǒmen jīntiān",
            "vi": "Chúng ta hôm nay"
          },
          {
            "hanzi": "完成这项任务",
            "pinyin": "wánchéng zhè xiàng rènwu",
            "vi": "Hoàn thành nhiệm vụ này"
          },
          {
            "hanzi": "提交",
            "pinyin": "tíjiāo",
            "vi": "Nộp"
          },
          {
            "hanzi": "交费",
            "pinyin": "jiāofèi",
            "vi": "Nộp phí"
          }
        ],
        "analysis": "必须 biểu thị tính bắt buộc không thể trì hoãn."
      }
    ]
  },
  {
    "id": "cf_48",
    "catId": "cat_5",
    "category": "5. Động Từ Năng Nguyện & Nguyện Vọng",
    "name": "S + 不用 / 不必 + V",
    "tag": "Không cần phải...",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "不用 / 不必",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "不用 là dạng phủ định của 必须 và 要.",
    "challenges": [
      {
        "vi": "Chuyện nhỏ này bạn không cần phải tự mình đi đâu.",
        "hanziFull": "这件小事你不用亲自去。",
        "pinyinFull": "Zhè jiàn xiǎoshì nǐ búyòng qīnzì qù.",
        "slots": [
          {
            "label": "Chủ đề",
            "expected": "这件小事",
            "pinyin": "zhè jiàn xiǎoshì",
            "isFixed": false
          },
          {
            "label": "Chủ ngữ",
            "expected": "你",
            "pinyin": "nǐ",
            "isFixed": false
          },
          {
            "label": "Không cần",
            "expected": "不用",
            "pinyin": "búyòng",
            "isFixed": true
          },
          {
            "label": "Tự mình đi",
            "expected": "亲自去",
            "pinyin": "qīnzì qù",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "这件小事",
            "pinyin": "zhè jiàn xiǎoshì",
            "vi": "Chuyện nhỏ này"
          },
          {
            "hanzi": "你",
            "pinyin": "nǐ",
            "vi": "Bạn"
          },
          {
            "hanzi": "亲自去",
            "pinyin": "qīnzì qù",
            "vi": "Tự mình đi"
          },
          {
            "hanzi": "担心",
            "pinyin": "dānxīn",
            "vi": "Lo lắng"
          }
        ],
        "analysis": "不用 là dạng phủ định của 必须 và 要."
      }
    ]
  },
  {
    "id": "cf_49",
    "catId": "cat_5",
    "category": "5. Động Từ Năng Nguyện & Nguyện Vọng",
    "name": "S + 敢 + V + O",
    "tag": "Dám làm việc gì (Dũng khí)",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "敢",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      }
    ],
    "description": "敢 biểu thị sự can đảm đối diện thử thách.",
    "challenges": [
      {
        "vi": "Lúc đầu tôi không dám nói chuyện với người bản xứ.",
        "hanziFull": "一开始我不敢跟本地人说话。",
        "pinyinFull": "Yì kāishǐ wǒ bù gǎn gēn běndìrén shuōhuà.",
        "slots": [
          {
            "label": "Thời gian",
            "expected": "一开始",
            "pinyin": "yì kāishǐ",
            "isFixed": false
          },
          {
            "label": "Chủ ngữ",
            "expected": "我",
            "pinyin": "wǒ",
            "isFixed": false
          },
          {
            "label": "Không dám",
            "expected": "不敢",
            "pinyin": "bù gǎn",
            "isFixed": true
          },
          {
            "label": "Nói chuyện người bản xứ",
            "expected": "跟本地人说话",
            "pinyin": "gēn běndìrén shuōhuà",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "一开始",
            "pinyin": "yì kāishǐ",
            "vi": "Lúc đầu"
          },
          {
            "hanzi": "我",
            "pinyin": "wǒ",
            "vi": "Tôi"
          },
          {
            "hanzi": "跟本地人说话",
            "pinyin": "gēn běndìrén shuōhuà",
            "vi": "Nói chuyện người bản xứ"
          },
          {
            "hanzi": "表达",
            "pinyin": "biǎodá",
            "vi": "Bày tỏ"
          }
        ],
        "analysis": "敢 biểu thị sự can đảm đối diện thử thách."
      }
    ]
  },
  {
    "id": "cf_50",
    "catId": "cat_5",
    "category": "5. Động Từ Năng Nguyện & Nguyện Vọng",
    "name": "S + 愿意 + V + O",
    "tag": "Bằng lòng / Tự nguyện làm gì",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "愿意",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      }
    ],
    "description": "愿意 nhấn mạnh sự tự nguyện xuất phát từ nội tâm.",
    "challenges": [
      {
        "vi": "Tôi rất sẵn lòng giúp bạn giải quyết vấn đề này.",
        "hanziFull": "我很愿意帮你解决这个问题。",
        "pinyinFull": "Wǒ hěn yuànyì bāng nǐ jiějué zhège wèntí.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我",
            "pinyin": "wǒ",
            "isFixed": false
          },
          {
            "label": "Rất sẵn lòng",
            "expected": "很愿意",
            "pinyin": "hěn yuànyì",
            "isFixed": true
          },
          {
            "label": "Giúp bạn giải quyết việc này",
            "expected": "帮你解决这个问题",
            "pinyin": "bāng nǐ jiějué zhège wèntí",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我",
            "pinyin": "wǒ",
            "vi": "Tôi"
          },
          {
            "hanzi": "帮你解决这个问题",
            "pinyin": "bāng nǐ jiějué zhège wèntí",
            "vi": "Giúp bạn giải quyết việc này"
          },
          {
            "hanzi": "加班",
            "pinyin": "jiābān",
            "vi": "Tăng ca"
          },
          {
            "hanzi": "合作",
            "pinyin": "hézuò",
            "vi": "Hợp tác"
          }
        ],
        "analysis": "愿意 nhấn mạnh sự tự nguyện xuất phát từ nội tâm."
      }
    ]
  },
  {
    "id": "cf_51",
    "catId": "cat_6",
    "category": "6. Bổ Ngữ Kết Quả",
    "name": "S + V + 完 + O + 了",
    "tag": "Đã làm xong việc gì",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "完",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "了",
        "type": "fixed"
      }
    ],
    "description": "完 làm bổ ngữ kết quả chỉ sự hoàn tất.",
    "challenges": [
      {
        "vi": "Tôi đã đọc xong cuốn sách này rồi.",
        "hanziFull": "我已经看完了这本书。",
        "pinyinFull": "Wǒ yǐjīng kàn wán le zhè běn shū.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我已经",
            "pinyin": "wǒ yǐjīng",
            "isFixed": false
          },
          {
            "label": "Đọc xong",
            "expected": "看完了",
            "pinyin": "kàn wán le",
            "isFixed": true
          },
          {
            "label": "Tân ngữ",
            "expected": "这本书",
            "pinyin": "zhè běn shū",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我已经",
            "pinyin": "wǒ yǐjīng",
            "vi": "Tôi đã"
          },
          {
            "hanzi": "这本书",
            "pinyin": "zhè běn shū",
            "vi": "Cuốn sách này"
          },
          {
            "hanzi": "作业",
            "pinyin": "zuòyè",
            "vi": "Bài tập"
          },
          {
            "hanzi": "电影",
            "pinyin": "diànyǐng",
            "vi": "Bộ phim"
          }
        ],
        "analysis": "完 làm bổ ngữ kết quả chỉ sự hoàn tất."
      }
    ]
  },
  {
    "id": "cf_52",
    "catId": "cat_6",
    "category": "6. Bổ Ngữ Kết Quả",
    "name": "S + V + 到 + O + 了",
    "tag": "Đã đạt được / tiếp xúc được",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "到",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "了",
        "type": "fixed"
      }
    ],
    "description": "到 biểu thị hành động đạt được mục tiêu dự tính.",
    "challenges": [
      {
        "vi": "Hôm qua tôi đã mua được vé tàu cao tốc rồi.",
        "hanziFull": "昨天我买到了高铁票。",
        "pinyinFull": "Zuótiān wǒ mǎi dào le gāotiě piào.",
        "slots": [
          {
            "label": "Thời gian & Tôi",
            "expected": "昨天我",
            "pinyin": "zuótiān wǒ",
            "isFixed": false
          },
          {
            "label": "Mua được",
            "expected": "买到了",
            "pinyin": "mǎi dào le",
            "isFixed": true
          },
          {
            "label": "Vé tàu cao tốc",
            "expected": "高铁票",
            "pinyin": "gāotiě piào",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "昨天我",
            "pinyin": "zuótiān wǒ",
            "vi": "Hôm qua tôi"
          },
          {
            "hanzi": "高铁票",
            "pinyin": "gāotiě piào",
            "vi": "Vé tàu cao tốc"
          },
          {
            "hanzi": "机票",
            "pinyin": "jīpiào",
            "vi": "Vé máy bay"
          },
          {
            "hanzi": "门票",
            "pinyin": "ménpiào",
            "vi": "Vé vào cửa"
          }
        ],
        "analysis": "到 biểu thị hành động đạt được mục tiêu dự tính."
      }
    ]
  },
  {
    "id": "cf_53",
    "catId": "cat_6",
    "category": "6. Bổ Ngữ Kết Quả",
    "name": "S + V + 见 + O + 了",
    "tag": "Giác quan cảm nhận (Nhìn/nghe thấy)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "见",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "了",
        "type": "fixed"
      }
    ],
    "description": "见 chuyên dùng làm bổ ngữ kết quả cho 看 và 听.",
    "challenges": [
      {
        "vi": "Tôi đã nhìn thấy xe của bạn ở bãi đỗ xe.",
        "hanziFull": "我在停车场看见你的车了。",
        "pinyinFull": "Wǒ zài tíngchēchǎng kànjiàn nǐ de chē le.",
        "slots": [
          {
            "label": "Nơi chốn",
            "expected": "我在停车场",
            "pinyin": "wǒ zài tíngchēchǎng",
            "isFixed": false
          },
          {
            "label": "Nhìn thấy",
            "expected": "看见",
            "pinyin": "kànjiàn",
            "isFixed": true
          },
          {
            "label": "Tân ngữ",
            "expected": "你的车了",
            "pinyin": "nǐ de chē le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我在停车场",
            "pinyin": "wǒ zài tíngchēchǎng",
            "vi": "Tôi ở bãi xe"
          },
          {
            "hanzi": "你的车了",
            "pinyin": "nǐ de chē le",
            "vi": "Xe của bạn rồi"
          },
          {
            "hanzi": "朋友",
            "pinyin": "péngyou",
            "vi": "Bạn bè"
          },
          {
            "hanzi": "同事",
            "pinyin": "tóngshì",
            "vi": "Đồng nghiệp"
          }
        ],
        "analysis": "见 chuyên dùng làm bổ ngữ kết quả cho 看 và 听."
      }
    ]
  },
  {
    "id": "cf_54",
    "catId": "cat_6",
    "category": "6. Bổ Ngữ Kết Quả",
    "name": "S + V + 懂 + O + 了",
    "tag": "Đã hiểu được thông tin",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "懂",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "了",
        "type": "fixed"
      }
    ],
    "description": "懂 biểu thị sự tiếp thu và thấu hiểu nhận thức.",
    "challenges": [
      {
        "vi": "Tôi đã hiểu rõ ý tứ của thầy giáo rồi.",
        "hanziFull": "我听懂老师的意思了。",
        "pinyinFull": "Wǒ tīng dǒng lǎoshī de yìsi le.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我",
            "pinyin": "wǒ",
            "isFixed": false
          },
          {
            "label": "Nghe hiểu",
            "expected": "听懂",
            "pinyin": "tīng dǒng",
            "isFixed": true
          },
          {
            "label": "Ý của thầy",
            "expected": "老师的意思了",
            "pinyin": "lǎoshī de yìsi le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我",
            "pinyin": "wǒ",
            "vi": "Tôi"
          },
          {
            "hanzi": "老师的意思了",
            "pinyin": "lǎoshī de yìsi le",
            "vi": "Ý của thầy rồi"
          },
          {
            "hanzi": "这道题",
            "pinyin": "zhè dào tí",
            "vi": "Câu hỏi này"
          },
          {
            "hanzi": "文章",
            "pinyin": "wénzhāng",
            "vi": "Bài viết"
          }
        ],
        "analysis": "懂 biểu thị sự tiếp thu và thấu hiểu nhận thức."
      }
    ]
  },
  {
    "id": "cf_55",
    "catId": "cat_6",
    "category": "6. Bổ Ngữ Kết Quả",
    "name": "S + V + 好 + O + 了",
    "tag": "Đã chuẩn bị xong xuôi chu đáo",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "好",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "了",
        "type": "fixed"
      }
    ],
    "description": "好 chỉ hành động không chỉ xong mà còn đạt chuẩn hoàn hảo.",
    "challenges": [
      {
        "vi": "Chúng tôi đã chuẩn bị xong kế hoạch dự án rồi.",
        "hanziFull": "我们已经做好了项目计划。",
        "pinyinFull": "Wǒmen yǐjīng zuò hǎo le xiàngmù jìhuà.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我们已经",
            "pinyin": "wǒmen yǐjīng",
            "isFixed": false
          },
          {
            "label": "Làm xong chu đáo",
            "expected": "做好了",
            "pinyin": "zuò hǎo le",
            "isFixed": true
          },
          {
            "label": "Kế hoạch dự án",
            "expected": "项目计划",
            "pinyin": "xiàngmù jìhuà",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我们已经",
            "pinyin": "wǒmen yǐjīng",
            "vi": "Chúng tôi đã"
          },
          {
            "hanzi": "项目计划",
            "pinyin": "xiàngmù jìhuà",
            "vi": "Kế hoạch dự án"
          },
          {
            "hanzi": "准备",
            "pinyin": "zhǔnbèi",
            "vi": "Chuẩn bị"
          },
          {
            "hanzi": "饭菜",
            "pinyin": "fàncài",
            "vi": "Cơm canh"
          }
        ],
        "analysis": "好 chỉ hành động không chỉ xong mà còn đạt chuẩn hoàn hảo."
      }
    ]
  },
  {
    "id": "cf_56",
    "catId": "cat_6",
    "category": "6. Bổ Ngữ Kết Quả",
    "name": "S + V + 对/错 + 了",
    "tag": "Làm đúng hoặc làm sai",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "对/错",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "了",
        "type": "fixed"
      }
    ],
    "description": "对 và 错 biểu thị tính chính xác của kết quả hành động.",
    "challenges": [
      {
        "vi": "Bài tập lần này bạn đã làm đúng hết rồi.",
        "hanziFull": "这次的练习你全做对了。",
        "pinyinFull": "Zhè cì de liànxí nǐ quán zuò duì le.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "这次的练习你",
            "pinyin": "zhè cì de liànxí nǐ",
            "isFixed": false
          },
          {
            "label": "Làm đúng hết",
            "expected": "全做对了",
            "pinyin": "quán zuò duì le",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这次的练习你",
            "pinyin": "zhè cì de liànxí nǐ",
            "vi": "Bài luyện này bạn"
          },
          {
            "hanzi": "做错了",
            "pinyin": "zuò cuò le",
            "vi": "Làm sai rồi"
          },
          {
            "hanzi": "写对了",
            "pinyin": "xiě duì le",
            "vi": "Viết đúng"
          },
          {
            "hanzi": "猜对了",
            "pinyin": "cāi duì le",
            "vi": "Đoán đúng"
          }
        ],
        "analysis": "对 và 错 biểu thị tính chính xác của kết quả hành động."
      }
    ]
  },
  {
    "id": "cf_57",
    "catId": "cat_6",
    "category": "6. Bổ Ngữ Kết Quả",
    "name": "S + V + 清楚 + 了",
    "tag": "Làm rõ ràng, minh bạch",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "清楚",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "了",
        "type": "fixed"
      }
    ],
    "description": "清楚 chỉ kết quả sáng rõ, không mơ hồ.",
    "challenges": [
      {
        "vi": "Bạn đã nghe rõ điều kiện hợp đồng chưa?",
        "hanziFull": "你听清楚合同的条件了吗？",
        "pinyinFull": "Nǐ tīng qīngchu hétong de tiáojiàn le ma?",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "你",
            "pinyin": "nǐ",
            "isFixed": false
          },
          {
            "label": "Nghe rõ",
            "expected": "听清楚",
            "pinyin": "tīng qīngchu",
            "isFixed": true
          },
          {
            "label": "Điều kiện hợp đồng",
            "expected": "合同的条件了吗",
            "pinyin": "hétong de tiáojiàn le ma",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "你",
            "pinyin": "nǐ",
            "vi": "Bạn"
          },
          {
            "hanzi": "合同的条件了吗",
            "pinyin": "hétong de tiáojiàn le ma",
            "vi": "Đk hợp đồng chưa"
          },
          {
            "hanzi": "看清楚",
            "pinyin": "kàn qīngchu",
            "vi": "Nhìn rõ"
          },
          {
            "hanzi": "说明白",
            "pinyin": "shuō míngbai",
            "vi": "Nói rõ"
          }
        ],
        "analysis": "清楚 chỉ kết quả sáng rõ, không mơ hồ."
      }
    ]
  },
  {
    "id": "cf_58",
    "catId": "cat_6",
    "category": "6. Bổ Ngữ Kết Quả",
    "name": "S + V + 掉 + O + 了",
    "tag": "Loại bỏ, vứt bỏ, mất đi",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "掉",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "了",
        "type": "fixed"
      }
    ],
    "description": "掉 chỉ sự biến mất hoặc loại trừ của sự vật.",
    "challenges": [
      {
        "vi": "Tôi đã xóa file rác cũ trong máy tính rồi.",
        "hanziFull": "我把电脑里的旧文件删掉了。",
        "pinyinFull": "Wǒ bǎ diànnǎo lǐ de jiù wénjiàn shān diào le.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我把电脑里的旧文件",
            "pinyin": "wǒ bǎ diànnǎo lǐ de jiù wénjiàn",
            "isFixed": false
          },
          {
            "label": "Xóa bỏ rồi",
            "expected": "删掉了",
            "pinyin": "shān diào le",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "我把电脑里的旧文件",
            "pinyin": "wǒ bǎ diànnǎo lǐ de jiù wénjiàn",
            "vi": "File cũ trong máy"
          },
          {
            "hanzi": "扔掉了",
            "pinyin": "rēng diào le",
            "vi": "Vứt bỏ rồi"
          },
          {
            "hanzi": "卖掉了",
            "pinyin": "mài diào le",
            "vi": "Bán mất rồi"
          },
          {
            "hanzi": "吃掉了",
            "pinyin": "chī diào le",
            "vi": "Ăn hết rồi"
          }
        ],
        "analysis": "掉 chỉ sự biến mất hoặc loại trừ của sự vật."
      }
    ]
  },
  {
    "id": "cf_59",
    "catId": "cat_6",
    "category": "6. Bổ Ngữ Kết Quả",
    "name": "S + V + 走 + O + 了",
    "tag": "Rời đi, mang đi nơi khác",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "走",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "了",
        "type": "fixed"
      }
    ],
    "description": "走 biểu thị sự dịch chuyển rời xa vị trí ban đầu.",
    "challenges": [
      {
        "vi": "Hôm nay gió lớn đã thổi bay chiếc ô của tôi rồi.",
        "hanziFull": "今天的大风把我的雨伞吹走了。",
        "pinyinFull": "Jīntiān de dà fēng bǎ wǒ de yǔsǎn chuī zǒu le.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "今天的大风把我的雨伞",
            "pinyin": "jīntiān de dà fēng bǎ wǒ de yǔsǎn",
            "isFixed": false
          },
          {
            "label": "Thổi bay đi",
            "expected": "吹走了",
            "pinyin": "chuī zǒu le",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "今天的大风把我的雨伞",
            "pinyin": "jīntiān de dà fēng bǎ wǒ de yǔsǎn",
            "vi": "Gió to thổi ô tôi"
          },
          {
            "hanzi": "拿走了",
            "pinyin": "ná zǒu le",
            "vi": "Cầm đi rồi"
          },
          {
            "hanzi": "带走了",
            "pinyin": "dài zǒu le",
            "vi": "Mang đi rồi"
          },
          {
            "hanzi": "借走了",
            "pinyin": "jiè zǒu le",
            "vi": "Mượn đi rồi"
          }
        ],
        "analysis": "走 biểu thị sự dịch chuyển rời xa vị trí ban đầu."
      }
    ]
  },
  {
    "id": "cf_60",
    "catId": "cat_6",
    "category": "6. Bổ Ngữ Kết Quả",
    "name": "S + V + 给 + Ai đó",
    "tag": "Trao/giao cho ai tiếp nhận",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "给",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Ai đó",
        "type": "var"
      }
    ],
    "description": "给 làm bổ ngữ kết quả định hướng người thụ hưởng.",
    "challenges": [
      {
        "vi": "Tôi đã chuyển giao tài liệu dự án cho trưởng phòng rồi.",
        "hanziFull": "我把项目资料递给经理了。",
        "pinyinFull": "Wǒ bǎ xiàngmù zīliào dì gěi jīnglǐ le.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我把项目资料",
            "pinyin": "wǒ bǎ xiàngmù zīliào",
            "isFixed": false
          },
          {
            "label": "Đưa cho",
            "expected": "递给",
            "pinyin": "dì gěi",
            "isFixed": true
          },
          {
            "label": "Trưởng phòng rồi",
            "expected": "经理了",
            "pinyin": "jīnglǐ le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我把项目资料",
            "pinyin": "wǒ bǎ xiàngmù zīliào",
            "vi": "Tài liệu dự án"
          },
          {
            "hanzi": "经理了",
            "pinyin": "jīnglǐ le",
            "vi": "Giám đốc rồi"
          },
          {
            "hanzi": "寄给",
            "pinyin": "jì gěi",
            "vi": "Gửi cho"
          },
          {
            "hanzi": "送给",
            "pinyin": "sòng gěi",
            "vi": "Tặng cho"
          }
        ],
        "analysis": "给 làm bổ ngữ kết quả định hướng người thụ hưởng."
      }
    ]
  },
  {
    "id": "cf_61",
    "catId": "cat_7",
    "category": "7. Bổ Ngữ Trạng Thái & Trình Độ",
    "name": "S + V + 得 + 很 + Adj",
    "tag": "Đánh giá trình độ (Làm rất tốt/nhanh)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "很",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      }
    ],
    "description": "Trợ từ kết cấu 得 đứng sau động từ để dẫn ra bổ ngữ miêu tả trạng thái.",
    "challenges": [
      {
        "vi": "Cô ấy nói tiếng Trung rất lưu loát.",
        "hanziFull": "她的中文说得很流利。",
        "pinyinFull": "Tā de Zhōngwén shuō de hěn liúlì.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "她的中文",
            "pinyin": "tā de Zhōngwén",
            "isFixed": false
          },
          {
            "label": "Nói",
            "expected": "说",
            "pinyin": "shuō",
            "isFixed": false
          },
          {
            "label": "Đắc",
            "expected": "得",
            "pinyin": "de",
            "isFixed": true
          },
          {
            "label": "Rất lưu loát",
            "expected": "很流利",
            "pinyin": "hěn liúlì",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "她的中文",
            "pinyin": "tā de Zhōngwén",
            "vi": "Tiếng Trung cô ấy"
          },
          {
            "hanzi": "说",
            "pinyin": "shuō",
            "vi": "Nói"
          },
          {
            "hanzi": "很流利",
            "pinyin": "hěn liúlì",
            "vi": "Rất lưu loát"
          },
          {
            "hanzi": "好",
            "pinyin": "hǎo",
            "vi": "Tốt"
          }
        ],
        "analysis": "Trợ từ kết cấu 得 đứng sau động từ để dẫn ra bổ ngữ miêu tả trạng thái."
      }
    ]
  },
  {
    "id": "cf_62",
    "catId": "cat_7",
    "category": "7. Bổ Ngữ Trạng Thái & Trình Độ",
    "name": "S + V + 得 + 不 + Adj",
    "tag": "Phủ định trạng thái trình độ",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "不",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      }
    ],
    "description": "Phủ định đặt trước tính từ bổ ngữ: V + 得 + 不 + Adj.",
    "challenges": [
      {
        "vi": "Tối qua tôi ngủ không được ngon giấc.",
        "hanziFull": "昨晚我睡得不太好。",
        "pinyinFull": "Zuówǎn wǒ shuì de bú tài hǎo.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "昨晚我",
            "pinyin": "zuówǎn wǒ",
            "isFixed": false
          },
          {
            "label": "Ngủ",
            "expected": "睡",
            "pinyin": "shuì",
            "isFixed": false
          },
          {
            "label": "Đắc",
            "expected": "得",
            "pinyin": "de",
            "isFixed": true
          },
          {
            "label": "Không tốt lắm",
            "expected": "不太好",
            "pinyin": "bú tài hǎo",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "昨晚我",
            "pinyin": "zuówǎn wǒ",
            "vi": "Tối qua tôi"
          },
          {
            "hanzi": "睡",
            "pinyin": "shuì",
            "vi": "Ngủ"
          },
          {
            "hanzi": "不太好",
            "pinyin": "bú tài hǎo",
            "vi": "Không tốt lắm"
          },
          {
            "hanzi": "很香",
            "pinyin": "hěn xiāng",
            "vi": "Ngon giấc"
          }
        ],
        "analysis": "Phủ định đặt trước tính từ bổ ngữ: V + 得 + 不 + Adj."
      }
    ]
  },
  {
    "id": "cf_63",
    "catId": "cat_7",
    "category": "7. Bổ Ngữ Trạng Thái & Trình Độ",
    "name": "S + V + O + V + 得 + Adj",
    "tag": "Lặp lại động từ khi có tân ngữ",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      }
    ],
    "description": "Khi có tân ngữ, bắt buộc phải lặp lại động từ trước 得.",
    "challenges": [
      {
        "vi": "Anh ấy viết chữ Hán viết rất đẹp.",
        "hanziFull": "他写汉字写得很漂亮。",
        "pinyinFull": "Tā xiě hànzì xiě de hěn piàoliang.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "他",
            "pinyin": "tā",
            "isFixed": false
          },
          {
            "label": "Động từ tân ngữ",
            "expected": "写汉字",
            "pinyin": "xiě hànzì",
            "isFixed": false
          },
          {
            "label": "Lặp động từ",
            "expected": "写得",
            "pinyin": "xiě de",
            "isFixed": true
          },
          {
            "label": "Rất đẹp",
            "expected": "很漂亮",
            "pinyin": "hěn piàoliang",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "他",
            "pinyin": "tā",
            "vi": "Anh ấy"
          },
          {
            "hanzi": "写汉字",
            "pinyin": "xiě hànzì",
            "vi": "Viết chữ Hán"
          },
          {
            "hanzi": "很漂亮",
            "pinyin": "hěn piàoliang",
            "vi": "Rất đẹp"
          },
          {
            "hanzi": "很快",
            "pinyin": "hěn kuài",
            "vi": "Rất nhanh"
          }
        ],
        "analysis": "Khi có tân ngữ, bắt buộc phải lặp lại động từ trước 得."
      }
    ]
  },
  {
    "id": "cf_64",
    "catId": "cat_7",
    "category": "7. Bổ Ngữ Trạng Thái & Trình Độ",
    "name": "S + V + 得 + 怎么样?",
    "tag": "Hỏi thăm dò trình độ / kết quả",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "怎么样?",
        "type": "fixed"
      }
    ],
    "description": "Dùng 怎么样 sau V + 得 để hỏi đánh giá chất lượng hành động.",
    "challenges": [
      {
        "vi": "Bài thi lần này bạn làm bài thế nào?",
        "hanziFull": "这次考试你考得怎么样？",
        "pinyinFull": "Zhè cì kǎoshì nǐ kǎo de zěnmeyàng?",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "这次考试你",
            "pinyin": "zhè cì kǎoshì nǐ",
            "isFixed": false
          },
          {
            "label": "Thi",
            "expected": "考得",
            "pinyin": "kǎo de",
            "isFixed": true
          },
          {
            "label": "Thế nào",
            "expected": "怎么样",
            "pinyin": "zěnmeyàng",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "这次考试你",
            "pinyin": "zhè cì kǎoshì nǐ",
            "vi": "Kỳ thi này bạn"
          },
          {
            "hanzi": "考得",
            "pinyin": "kǎo de",
            "vi": "Thi"
          },
          {
            "hanzi": "怎么样",
            "pinyin": "zěnmeyàng",
            "vi": "Như thế nào"
          },
          {
            "hanzi": "好不好",
            "pinyin": "hǎo bu hǎo",
            "vi": "Tốt ko"
          }
        ],
        "analysis": "Dùng 怎么样 sau V + 得 để hỏi đánh giá chất lượng hành động."
      }
    ]
  },
  {
    "id": "cf_65",
    "catId": "cat_7",
    "category": "7. Bổ Ngữ Trạng Thái & Trình Độ",
    "name": "S + V + 得 + 太 + Adj + 了",
    "tag": "Khen ngợi/cảm thán trình độ vượt bậc",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "太",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "了",
        "type": "fixed"
      }
    ],
    "description": "Cấu trúc cảm thán trạng thái: V + 得 + 太 + Adj + 了.",
    "challenges": [
      {
        "vi": "Hôm nay bạn hát bài hát này quá tuyệt vời rồi!",
        "hanziFull": "今天你这首歌唱得太棒了！",
        "pinyinFull": "Jīntiān nǐ zhè shǒu gē chàng de tài bàng le!",
        "slots": [
          {
            "label": "Chủ đề",
            "expected": "今天你这首歌",
            "pinyin": "jīntiān nǐ zhè shǒu gē",
            "isFixed": false
          },
          {
            "label": "Hát",
            "expected": "唱得",
            "pinyin": "chàng de",
            "isFixed": true
          },
          {
            "label": "Quá tuyệt rồi",
            "expected": "太棒了",
            "pinyin": "tài bàng le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "今天你这首歌",
            "pinyin": "jīntiān nǐ zhè shǒu gē",
            "vi": "Bài hát hôm nay"
          },
          {
            "hanzi": "唱得",
            "pinyin": "chàng de",
            "vi": "Hát"
          },
          {
            "hanzi": "太棒了",
            "pinyin": "tài bàng le",
            "vi": "Quá tuyệt rồi"
          },
          {
            "hanzi": "好听",
            "pinyin": "hǎotīng",
            "vi": "Hay"
          }
        ],
        "analysis": "Cấu trúc cảm thán trạng thái: V + 得 + 太 + Adj + 了."
      }
    ]
  },
  {
    "id": "cf_66",
    "catId": "cat_7",
    "category": "7. Bổ Ngữ Trạng Thái & Trình Độ",
    "name": "S + V + 得 + 多 / 少",
    "tag": "Mức độ về lượng thực hiện",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "多 / 少",
        "type": "var"
      }
    ],
    "description": "多 và 少 làm bổ ngữ trạng thái chỉ mức độ định lượng.",
    "challenges": [
      {
        "vi": "Bác sĩ dặn tôi phải vận động nhiều và ăn ít đồ dầu mỡ.",
        "hanziFull": "医生让我运动得多，油腻食物吃得少。",
        "pinyinFull": "Yīshēng ràng wǒ yùndòng de duō, yóunì shíwù chī de shǎo.",
        "slots": [
          {
            "label": "Vận động nhiều",
            "expected": "运动得多",
            "pinyin": "yùndòng de duō",
            "isFixed": false
          },
          {
            "label": "Ăn ít đồ dầu mỡ",
            "expected": "油腻食物吃得少",
            "pinyin": "yóunì shíwù chī de shǎo",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "运动得多",
            "pinyin": "yùndòng de duō",
            "vi": "Vận động nhiều"
          },
          {
            "hanzi": "油腻食物吃得少",
            "pinyin": "yóunì shíwù chī de shǎo",
            "vi": "Ăn ít đồ mỡ"
          },
          {
            "hanzi": "睡得早",
            "pinyin": "shuì de zǎo",
            "vi": "Ngủ sớm"
          },
          {
            "hanzi": "喝水多",
            "pinyin": "hē shuǐ duō",
            "vi": "Uống nc nhiều"
          }
        ],
        "analysis": "多 và 少 làm bổ ngữ trạng thái chỉ mức độ định lượng."
      }
    ]
  },
  {
    "id": "cf_67",
    "catId": "cat_7",
    "category": "7. Bổ Ngữ Trạng Thái & Trình Độ",
    "name": "S + V + 得 + 早 / 晚",
    "tag": "Thời điểm sớm hay muộn",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "早 / 晚",
        "type": "var"
      }
    ],
    "description": "早 và 晚 làm bổ ngữ trạng thái biểu thị tính thời gian.",
    "challenges": [
      {
        "vi": "Sáng nay tôi thức dậy rất sớm để chuẩn bị đi làm.",
        "hanziFull": "今天早上我起得很早去上班。",
        "pinyinFull": "Jīntiān zǎoshang wǒ qǐ de hěn zǎo qù shàngbān.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "今天早上我",
            "pinyin": "jīntiān zǎoshang wǒ",
            "isFixed": false
          },
          {
            "label": "Dậy",
            "expected": "起得",
            "pinyin": "qǐ de",
            "isFixed": true
          },
          {
            "label": "Rất sớm",
            "expected": "很早去上班",
            "pinyin": "hěn zǎo qù shàngbān",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "今天早上我",
            "pinyin": "jīntiān zǎoshang wǒ",
            "vi": "Sáng nay tôi"
          },
          {
            "hanzi": "起得",
            "pinyin": "qǐ de",
            "vi": "Thức dậy"
          },
          {
            "hanzi": "很早去上班",
            "pinyin": "hěn zǎo qù shàngbān",
            "vi": "Rất sớm đi làm"
          },
          {
            "hanzi": "睡得晚",
            "pinyin": "shuì de wǎn",
            "vi": "Ngủ muộn"
          }
        ],
        "analysis": "早 và 晚 làm bổ ngữ trạng thái biểu thị tính thời gian."
      }
    ]
  },
  {
    "id": "cf_68",
    "catId": "cat_7",
    "category": "7. Bổ Ngữ Trạng Thái & Trình Độ",
    "name": "S + V + 得 + 极了",
    "tag": "Trình độ đạt tới đỉnh cao",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "极了",
        "type": "fixed"
      }
    ],
    "description": "极了 đặt sau tính từ của bổ ngữ trạng thái.",
    "challenges": [
      {
        "vi": "Đầu bếp này nấu món Tứ Xuyên ngon vô cùng.",
        "hanziFull": "这位厨师川菜做得地道极了。",
        "pinyinFull": "Zhè wèi chúshī chuāncài zuò de dìdao jí le.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "这位厨师川菜",
            "pinyin": "zhè wèi chúshī chuāncài",
            "isFixed": false
          },
          {
            "label": "Làm",
            "expected": "做得",
            "pinyin": "zuò de",
            "isFixed": true
          },
          {
            "label": "Cực kỳ chuẩn vị",
            "expected": "地道极了",
            "pinyin": "dìdao jí le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "这位厨师川菜",
            "pinyin": "zhè wèi chúshī chuāncài",
            "vi": "Đầu bếp nấu món Tứ Xuyên"
          },
          {
            "hanzi": "做得",
            "pinyin": "zuò de",
            "vi": "Làm"
          },
          {
            "hanzi": "地道极了",
            "pinyin": "dìdao jí le",
            "vi": "Cực kỳ chuẩn vị"
          },
          {
            "hanzi": "好吃",
            "pinyin": "hǎochī",
            "vi": "Ngon"
          }
        ],
        "analysis": "极了 đặt sau tính từ của bổ ngữ trạng thái."
      }
    ]
  },
  {
    "id": "cf_69",
    "catId": "cat_7",
    "category": "7. Bổ Ngữ Trạng Thái & Trình Độ",
    "name": "S + V + 得 + 像...一样",
    "tag": "So sánh mức độ hình tượng",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "像...一样",
        "type": "var"
      }
    ],
    "description": "像...一样 làm bổ ngữ trạng thái so sánh ví von trực quan.",
    "challenges": [
      {
        "vi": "Mặt cô ấy đỏ bừng như quả táo chín.",
        "hanziFull": "她的脸红得像熟透的苹果一样。",
        "pinyinFull": "Tā de liǎn hóng de xiàng shútòu de píngguǒ yíyàng.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "她的脸",
            "pinyin": "tā de liǎn",
            "isFixed": false
          },
          {
            "label": "Đỏ bừng",
            "expected": "红得",
            "pinyin": "hóng de",
            "isFixed": true
          },
          {
            "label": "Như táo chín",
            "expected": "像熟透的苹果一样",
            "pinyin": "xiàng shútòu de píngguǒ yíyàng",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "她的脸",
            "pinyin": "tā de liǎn",
            "vi": "Khuôn mặt cô ấy"
          },
          {
            "hanzi": "红得",
            "pinyin": "hóng de",
            "vi": "Đỏ"
          },
          {
            "hanzi": "像熟透的苹果一样",
            "pinyin": "xiàng shútòu de píngguǒ yíyàng",
            "vi": "Như quả táo chín"
          },
          {
            "hanzi": "白",
            "pinyin": "bái",
            "vi": "Trắng"
          }
        ],
        "analysis": "像...一样 làm bổ ngữ trạng thái so sánh ví von trực quan."
      }
    ]
  },
  {
    "id": "cf_70",
    "catId": "cat_7",
    "category": "7. Bổ Ngữ Trạng Thái & Trình Độ",
    "name": "S + V + 得 + 不得了",
    "tag": "Mức độ ghê gớm, không xiết",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "不得了",
        "type": "fixed"
      }
    ],
    "description": "不得了 chỉ mức độ trạng thái đạt tới giới hạn tột cùng.",
    "challenges": [
      {
        "vi": "Sau trận bóng rổ, ai nấy đều khát nước không chịu nổi.",
        "hanziFull": "打完篮球大家都渴得不得了。",
        "pinyinFull": "Dǎ wán lánqiú dàjiā dōu kě de bùdéliǎo.",
        "slots": [
          {
            "label": "Chủ đề",
            "expected": "打完篮球大家",
            "pinyin": "dǎ wán lánqiú dàjiā",
            "isFixed": false
          },
          {
            "label": "Khát",
            "expected": "渴得",
            "pinyin": "kě de",
            "isFixed": true
          },
          {
            "label": "Không chịu nổi",
            "expected": "不得了",
            "pinyin": "bùdéliǎo",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "打完篮球大家",
            "pinyin": "dǎ wán lánqiú dàjiā",
            "vi": "Đánh xong bóng rổ mn"
          },
          {
            "hanzi": "渴得",
            "pinyin": "kě de",
            "vi": "Khát"
          },
          {
            "hanzi": "不得了",
            "pinyin": "bùdéliǎo",
            "vi": "Ghê gớm"
          },
          {
            "hanzi": "累",
            "pinyin": "lèi",
            "vi": "Mệt"
          }
        ],
        "analysis": "不得了 chỉ mức độ trạng thái đạt tới giới hạn tột cùng."
      }
    ]
  },
  {
    "id": "cf_71",
    "catId": "cat_8",
    "category": "8. Bổ Ngữ Xu Hướng",
    "name": "S + V + 来 / 去",
    "tag": "Hướng lại gần hoặc đi xa người nói",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "来 / 去",
        "type": "fixed"
      }
    ],
    "description": "来 chỉ hướng tiến lại gần người nói, 去 chỉ hướng rời xa.",
    "challenges": [
      {
        "vi": "Mau vào đây đi, ngoài trời đang đổ mưa to rồi.",
        "hanziFull": "快进来吧，外面下大雨了。",
        "pinyinFull": "Kuài jìnlái ba, wàimiàn xià dàyǔ le.",
        "slots": [
          {
            "label": "Vào đây",
            "expected": "快进来吧",
            "pinyin": "kuài jìnlái ba",
            "isFixed": true
          },
          {
            "label": "Ngoài trời mưa to",
            "expected": "外面下大雨了",
            "pinyin": "wàimiàn xià dàyǔ le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "快进来吧",
            "pinyin": "kuài jìnlái ba",
            "vi": "Mau vào đây"
          },
          {
            "hanzi": "外面下大雨了",
            "pinyin": "wàimiàn xià dàyǔ le",
            "vi": "Ngoài trời mưa to"
          },
          {
            "hanzi": "出去",
            "pinyin": "chūqù",
            "vi": "Ra ngoài"
          },
          {
            "hanzi": "回去",
            "pinyin": "huíqù",
            "vi": "Về đi"
          }
        ],
        "analysis": "来 chỉ hướng tiến lại gần người nói, 去 chỉ hướng rời xa."
      }
    ]
  },
  {
    "id": "cf_72",
    "catId": "cat_8",
    "category": "8. Bổ Ngữ Xu Hướng",
    "name": "S + 上/下 + 来/去",
    "tag": "Xu hướng lên xuống không gian",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "上/下",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "来/去",
        "type": "fixed"
      }
    ],
    "description": "上 và 下 kết hợp 来/去 tạo thành bổ ngữ xu hướng kép.",
    "challenges": [
      {
        "vi": "Mời bạn lên tầng hai ngồi nghỉ một lát.",
        "hanziFull": "请上二楼来坐一会儿。",
        "pinyinFull": "Qǐng shàng èr lóu lái zuò yíhuìr.",
        "slots": [
          {
            "label": "Mời lên tầng 2",
            "expected": "请上二楼来",
            "pinyin": "qǐng shàng èr lóu lái",
            "isFixed": true
          },
          {
            "label": "Ngồi một lát",
            "expected": "坐一会儿",
            "pinyin": "zuò yíhuìr",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "请上二楼来",
            "pinyin": "qǐng shàng èr lóu lái",
            "vi": "Mời lên tầng 2"
          },
          {
            "hanzi": "坐一会儿",
            "pinyin": "zuò yíhuìr",
            "vi": "Ngồi một lát"
          },
          {
            "hanzi": "下来",
            "pinyin": "xiàlái",
            "vi": "Xuống đây"
          },
          {
            "hanzi": "回去",
            "pinyin": "huíqù",
            "vi": "Về"
          }
        ],
        "analysis": "上 và 下 kết hợp 来/去 tạo thành bổ ngữ xu hướng kép."
      }
    ]
  },
  {
    "id": "cf_73",
    "catId": "cat_8",
    "category": "8. Bổ Ngữ Xu Hướng",
    "name": "S + 回 + 来/去",
    "tag": "Xu hướng quay trở lại vị trí gốc",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "回",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "来/去",
        "type": "fixed"
      }
    ],
    "description": "回 kết hợp 去 chỉ hành động quay trở về nơi chốn xa người nói.",
    "challenges": [
      {
        "vi": "Cuối tuần này bạn có về quê thăm bố mẹ không?",
        "hanziFull": "这个周末你回不回老家去？",
        "pinyinFull": "Zhège zhōumò nǐ huí bu huí lǎojiā qù?",
        "slots": [
          {
            "label": "Thời gian & Bạn",
            "expected": "这个周末你",
            "pinyin": "zhège zhōumò nǐ",
            "isFixed": false
          },
          {
            "label": "Về quê không",
            "expected": "回老家去吗",
            "pinyin": "huí lǎojiā qù ma",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这个周末你",
            "pinyin": "zhège zhōumò nǐ",
            "vi": "Cuối tuần này bạn"
          },
          {
            "hanzi": "回老家去吗",
            "pinyin": "huí lǎojiā qù ma",
            "vi": "Về quê ko"
          },
          {
            "hanzi": "回公司",
            "pinyin": "huí gōngsī",
            "vi": "Về cty"
          },
          {
            "hanzi": "回家",
            "pinyin": "huí jiā",
            "vi": "Về nhà"
          }
        ],
        "analysis": "回 kết hợp 去 chỉ hành động quay trở về nơi chốn xa người nói."
      }
    ]
  },
  {
    "id": "cf_74",
    "catId": "cat_8",
    "category": "8. Bổ Ngữ Xu Hướng",
    "name": "S + V + 出来",
    "tag": "Phát hiện / nhận định từ ẩn thành hiện",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "出来",
        "type": "fixed"
      }
    ],
    "description": "出来 biểu thị sự xuất hiện hoặc nhận biết rõ ràng.",
    "challenges": [
      {
        "vi": "Tôi vừa nghe là nhận ra giọng của bạn ngay rồi.",
        "hanziFull": "我一听就听出你的声音来了。",
        "pinyinFull": "Wǒ yì tīng jiù tīng chū nǐ de shēngyīn lái le.",
        "slots": [
          {
            "label": "Tôi vừa nghe là",
            "expected": "我一听就",
            "pinyin": "wǒ yì tīng jiù",
            "isFixed": false
          },
          {
            "label": "Nhận ra giọng bạn",
            "expected": "听出你的声音来了",
            "pinyin": "tīng chū nǐ de shēngyīn lái le",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "我一听就",
            "pinyin": "wǒ yì tīng jiù",
            "vi": "Tôi vừa nghe là"
          },
          {
            "hanzi": "听出你的声音来了",
            "pinyin": "tīng chū nǐ de shēngyīn lái le",
            "vi": "Nghe ra giọng bạn"
          },
          {
            "hanzi": "看出",
            "pinyin": "kàn chū",
            "vi": "Nhìn ra"
          },
          {
            "hanzi": "想出",
            "pinyin": "xiǎng chū",
            "vi": "Nghĩ ra"
          }
        ],
        "analysis": "出来 biểu thị sự xuất hiện hoặc nhận biết rõ ràng."
      }
    ]
  },
  {
    "id": "cf_75",
    "catId": "cat_8",
    "category": "8. Bổ Ngữ Xu Hướng",
    "name": "S + V + 起来",
    "tag": "Bắt đầu và tiếp diễn / Nhận định khi thử",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "起来",
        "type": "fixed"
      }
    ],
    "description": "起来 biểu thị hành động bắt đầu và đang tiếp tục tăng tiến.",
    "challenges": [
      {
        "vi": "Nghe xong câu chuyện cười, mọi người đều cười òa lên.",
        "hanziFull": "听完笑话大家都会心地笑了起来。",
        "pinyinFull": "Tīng wán xiàohua dàjiā dōu huìxīn de xiào le qǐlái.",
        "slots": [
          {
            "label": "Nghe xong truyện cười",
            "expected": "听完笑话大家",
            "pinyin": "tīng wán xiàohua dàjiā",
            "isFixed": false
          },
          {
            "label": "Cười òa lên",
            "expected": "笑了起来",
            "pinyin": "xiào le qǐlái",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "听完笑话大家",
            "pinyin": "tīng wán xiàohua dàjiā",
            "vi": "Nghe xong truyện"
          },
          {
            "hanzi": "笑了起来",
            "pinyin": "xiào le qǐlái",
            "vi": "Cười òa lên"
          },
          {
            "hanzi": "哭起来",
            "pinyin": "kū qǐlái",
            "vi": "Khóc lên"
          },
          {
            "hanzi": "唱起来",
            "pinyin": "chàng qǐlái",
            "vi": "Hát lên"
          }
        ],
        "analysis": "起来 biểu thị hành động bắt đầu và đang tiếp tục tăng tiến."
      }
    ]
  },
  {
    "id": "cf_76",
    "catId": "cat_8",
    "category": "8. Bổ Ngữ Xu Hướng",
    "name": "S + V + 下去",
    "tag": "Hành động tiếp diễn liên tục trong tương lai",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "下去",
        "type": "fixed"
      }
    ],
    "description": "下去 biểu thị sự tiếp nối không gián đoạn về tương lai.",
    "challenges": [
      {
        "vi": "Chỉ cần kiên trì học tiếp, bạn nhất định sẽ thành công.",
        "hanziFull": "只要坚持学下去，你一定会成功的。",
        "pinyinFull": "Zhǐyào jiānchí xué xiàqù, nǐ yídìng huì chénggōng de.",
        "slots": [
          {
            "label": "Chỉ cần kiên trì",
            "expected": "只要坚持",
            "pinyin": "zhǐyào jiānchí",
            "isFixed": false
          },
          {
            "label": "Học tiếp",
            "expected": "学下去",
            "pinyin": "xué xiàqù",
            "isFixed": true
          },
          {
            "label": "Nhất định thành công",
            "expected": "你一定会成功的",
            "pinyin": "nǐ yídìng huì chénggōng de",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "只要坚持",
            "pinyin": "zhǐyào jiānchí",
            "vi": "Chỉ cần kiên trì"
          },
          {
            "hanzi": "学下去",
            "pinyin": "xué xiàqù",
            "vi": "Học tiếp"
          },
          {
            "hanzi": "做下去",
            "pinyin": "zuò xiàqù",
            "vi": "Làm tiếp"
          },
          {
            "hanzi": "走下去",
            "pinyin": "zǒu xiàqù",
            "vi": "Đi tiếp"
          }
        ],
        "analysis": "下去 biểu thị sự tiếp nối không gián đoạn về tương lai."
      }
    ]
  },
  {
    "id": "cf_77",
    "catId": "cat_8",
    "category": "8. Bổ Ngữ Xu Hướng",
    "name": "S + V + 过来",
    "tag": "Hồi phục / Tỉnh lại trạng thái bình thường",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "过来",
        "type": "fixed"
      }
    ],
    "description": "过来 biểu thị trạng thái trở về quỹ đạo bình thường tích cực.",
    "challenges": [
      {
        "vi": "Uống một cốc nước ấm xong, anh ấy đã tỉnh táo lại.",
        "hanziFull": "喝了杯温水后，他终于清醒过来了。",
        "pinyinFull": "Hē le bēi wēnshuǐ hòu, tā zhōngyú qīngxǐng guòlái le.",
        "slots": [
          {
            "label": "Sau khi uống nước",
            "expected": "喝了杯温水后他",
            "pinyin": "hē le bēi wēnshuǐ hòu tā",
            "isFixed": false
          },
          {
            "label": "Tỉnh táo lại",
            "expected": "清醒过来了",
            "pinyin": "qīngxǐng guòlái le",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "喝了杯温水后他",
            "pinyin": "hē le bēi wēnshuǐ hòu tā",
            "vi": "Uống nước xong anh ấy"
          },
          {
            "hanzi": "清醒过来了",
            "pinyin": "qīngxǐng guòlái le",
            "vi": "Tỉnh táo lại"
          },
          {
            "hanzi": "缓过来",
            "pinyin": "huǎn guòlái",
            "vi": "Hồi sức"
          },
          {
            "hanzi": "明白过来",
            "pinyin": "míngbai guòlái",
            "vi": "Hiểu ra"
          }
        ],
        "analysis": "过来 biểu thị trạng thái trở về quỹ đạo bình thường tích cực."
      }
    ]
  },
  {
    "id": "cf_78",
    "catId": "cat_8",
    "category": "8. Bổ Ngữ Xu Hướng",
    "name": "S + V + 过去",
    "tag": "Mất ý thức / Chuyển sang trạng thái xấu",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "过去",
        "type": "fixed"
      }
    ],
    "description": "过去 biểu thị sự rời xa trạng thái bình thường sang bất tỉnh.",
    "challenges": [
      {
        "vi": "Thời tiết quá nóng bức khiến người cụ già ngất lịm đi.",
        "hanziFull": "天气太闷热，老人晕了过去。",
        "pinyinFull": "Tiānqì tài mēnrè, lǎorén yūn le guòqù.",
        "slots": [
          {
            "label": "Thời tiết oi bức",
            "expected": "天气太闷热老人",
            "pinyin": "tiānqì tài mēnrè lǎorén",
            "isFixed": false
          },
          {
            "label": "Ngất lịm đi",
            "expected": "晕了过去",
            "pinyin": "yūn le guòqù",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "天气太闷热老人",
            "pinyin": "tiānqì tài mēnrè lǎorén",
            "vi": "Thời tiết nóng cụ già"
          },
          {
            "hanzi": "晕了过去",
            "pinyin": "yūn le guòqù",
            "vi": "Ngất lịm đi"
          },
          {
            "hanzi": "睡了过去",
            "pinyin": "shuì le guòqù",
            "vi": "Thiếp đi"
          },
          {
            "hanzi": "昏过去",
            "pinyin": "hūn guòqù",
            "vi": "Hôn mê"
          }
        ],
        "analysis": "过去 biểu thị sự rời xa trạng thái bình thường sang bất tỉnh."
      }
    ]
  },
  {
    "id": "cf_79",
    "catId": "cat_8",
    "category": "8. Bổ Ngữ Xu Hướng",
    "name": "S + V + 上",
    "tag": "Gắn kết / Đạt được mục tiêu / Mặc vào",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "上",
        "type": "fixed"
      }
    ],
    "description": "上 biểu thị tiếp xúc gắn kết hoặc đạt được mục tiêu.",
    "challenges": [
      {
        "vi": "Trời trở lạnh rồi, bạn nhớ mặc thêm áo ấm vào nhé.",
        "hanziFull": "天气变冷了，记得穿上暖和的外套。",
        "pinyinFull": "Tiānqì biàn lěng le, jìde chuān shàng nuǎnhuo de wàitào.",
        "slots": [
          {
            "label": "Trời trở lạnh",
            "expected": "天气变冷了记得",
            "pinyin": "tiānqì biàn lěng le jìde",
            "isFixed": false
          },
          {
            "label": "Mặc áo ấm vào",
            "expected": "穿上暖和的外套",
            "pinyin": "chuān shàng nuǎnhuo de wàitào",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "天气变冷了记得",
            "pinyin": "tiānqì biàn lěng le jìde",
            "vi": "Trời lạnh nhớ"
          },
          {
            "hanzi": "穿上暖和的外套",
            "pinyin": "chuān shàng nuǎnhuo de wàitào",
            "vi": "Mặc áo khoác ấm vào"
          },
          {
            "hanzi": "关上门",
            "pinyin": "guān shàng mén",
            "vi": "Đóng cửa vào"
          },
          {
            "hanzi": "考上大学",
            "pinyin": "kǎo shàng dàxué",
            "vi": "Đỗ đại học"
          }
        ],
        "analysis": "上 biểu thị tiếp xúc gắn kết hoặc đạt được mục tiêu."
      }
    ]
  },
  {
    "id": "cf_80",
    "catId": "cat_8",
    "category": "8. Bổ Ngữ Xu Hướng",
    "name": "S + V + 开",
    "tag": "Tách ra / Phân tán ra các hướng",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "开",
        "type": "fixed"
      }
    ],
    "description": "开 biểu thị sự tách biệt, mở rộng hoặc phân tán.",
    "challenges": [
      {
        "vi": "Mọi người đừng chen lấn, hãy tản rộng ra một chút.",
        "hanziFull": "大家不要挤，请散开一点儿。",
        "pinyinFull": "Dàjiā bú yào jǐ, qǐng sàn kāi yìdiǎnr.",
        "slots": [
          {
            "label": "Mọi người đừng chen",
            "expected": "大家不要挤",
            "pinyin": "dàjiā bú yào jǐ",
            "isFixed": false
          },
          {
            "label": "Tản rộng ra",
            "expected": "请散开一点儿",
            "pinyin": "qǐng sàn kāi yìdiǎnr",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "大家不要挤",
            "pinyin": "dàjiā bú yào jǐ",
            "vi": "Mọi người đừng chen"
          },
          {
            "hanzi": "请散开一点儿",
            "pinyin": "qǐng sàn kāi yìdiǎnr",
            "vi": "Tản rộng ra chút"
          },
          {
            "hanzi": "打开门",
            "pinyin": "dǎ kāi mén",
            "vi": "Mở cửa ra"
          },
          {
            "hanzi": "离开",
            "pinyin": "líkāi",
            "vi": "Rời đi"
          }
        ],
        "analysis": "开 biểu thị sự tách biệt, mở rộng hoặc phân tán."
      }
    ]
  },
  {
    "id": "cf_81",
    "catId": "cat_9",
    "category": "9. Bổ Ngữ Khả Năng",
    "name": "S + V + 得 + 了 (liǎo)",
    "tag": "Có khả năng thực hiện (thời gian/sức lực)",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "了 (liǎo)",
        "type": "fixed"
      }
    ],
    "description": "得了 biểu thị năng lực khách quan cho phép hoàn thành.",
    "challenges": [
      {
        "vi": "Nhiều công việc như thế này một mình tôi làm nổi.",
        "hanziFull": "这么多工作我一个人做得完，做得了。",
        "pinyinFull": "Zhènme duō gōngzuò wǒ yí gè rén zuò de liǎo.",
        "slots": [
          {
            "label": "Công việc nhiều thế này",
            "expected": "这么多工作我一个人",
            "pinyin": "zhènme duō gōngzuò wǒ yí gè rén",
            "isFixed": false
          },
          {
            "label": "Làm nổi",
            "expected": "做得了",
            "pinyin": "zuò de liǎo",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这么多工作我一个人",
            "pinyin": "zhènme duō gōngzuò wǒ yí gè rén",
            "vi": "Nhiều việc một mình tôi"
          },
          {
            "hanzi": "做得了",
            "pinyin": "zuò de liǎo",
            "vi": "Làm nổi"
          },
          {
            "hanzi": "吃得了",
            "pinyin": "chī de liǎo",
            "vi": "Ăn nổi"
          },
          {
            "hanzi": "去得了",
            "pinyin": "qù de liǎo",
            "vi": "Đi được"
          }
        ],
        "analysis": "得了 biểu thị năng lực khách quan cho phép hoàn thành."
      }
    ]
  },
  {
    "id": "cf_82",
    "catId": "cat_9",
    "category": "9. Bổ Ngữ Khả Năng",
    "name": "S + V + 不 + 了 (liǎo)",
    "tag": "Không thể nào làm nổi",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "不",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "了 (liǎo)",
        "type": "fixed"
      }
    ],
    "description": "不了 phủ định khả năng do điều kiện khách quan cản trở.",
    "challenges": [
      {
        "vi": "Tối nay tôi phải tăng ca, không đi dự tiệc được rồi.",
        "hanziFull": "今晚我要加班，去不了聚会了。",
        "pinyinFull": "Jīnwǎn wǒ yào jiābān, qù bù liǎo jùhuì le.",
        "slots": [
          {
            "label": "Tối nay tăng ca",
            "expected": "今晚我要加班",
            "pinyin": "jīnwǎn wǒ yào jiābān",
            "isFixed": false
          },
          {
            "label": "Không đi nổi",
            "expected": "去不了聚会了",
            "pinyin": "qù bù liǎo jùhuì le",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "今晚我要加班",
            "pinyin": "jīnwǎn wǒ yào jiābān",
            "vi": "Tối nay tôi tăng ca"
          },
          {
            "hanzi": "去不了聚会了",
            "pinyin": "qù bù liǎo jùhuì le",
            "vi": "Ko đi tiệc nổi"
          },
          {
            "hanzi": "吃不了",
            "pinyin": "chī bù liǎo",
            "vi": "Ko ăn nổi"
          },
          {
            "hanzi": "受不了",
            "pinyin": "shòu bù liǎo",
            "vi": "Ko chịu nổi"
          }
        ],
        "analysis": "不了 phủ định khả năng do điều kiện khách quan cản trở."
      }
    ]
  },
  {
    "id": "cf_83",
    "catId": "cat_9",
    "category": "9. Bổ Ngữ Khả Năng",
    "name": "S + V + 得/不 + 动",
    "tag": "Có/không đủ sức lực dịch chuyển",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得/不",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "动",
        "type": "fixed"
      }
    ],
    "description": "不动 chỉ sự thiếu hụt sức lực để cử động hoặc nâng vác.",
    "challenges": [
      {
        "vi": "Chiếc vali này nặng quá, tôi xách không nổi nữa rồi.",
        "hanziFull": "这个行李箱太沉了，我搬不动了。",
        "pinyinFull": "Zhège xínglixiāng tài chén le, wǒ bān bú dòng le.",
        "slots": [
          {
            "label": "Vali nặng quá",
            "expected": "这个行李箱太沉了",
            "pinyin": "zhège xínglixiāng tài chén le",
            "isFixed": false
          },
          {
            "label": "Tôi bê ko nổi",
            "expected": "我搬不动了",
            "pinyin": "wǒ bān bú dòng le",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这个行李箱太沉了",
            "pinyin": "zhège xínglixiāng tài chén le",
            "vi": "Vali này nặng quá"
          },
          {
            "hanzi": "我搬不动了",
            "pinyin": "wǒ bān bú dòng le",
            "vi": "Tôi bê ko nổi"
          },
          {
            "hanzi": "走不动",
            "pinyin": "zǒu bú dòng",
            "vi": "Đi ko nổi"
          },
          {
            "hanzi": "跑不动",
            "pinyin": "pǎo bú dòng",
            "vi": "Chạy ko nổi"
          }
        ],
        "analysis": "不动 chỉ sự thiếu hụt sức lực để cử động hoặc nâng vác."
      }
    ]
  },
  {
    "id": "cf_84",
    "catId": "cat_9",
    "category": "9. Bổ Ngữ Khả Năng",
    "name": "S + V + 得/不 + 下",
    "tag": "Không gian có/không đủ dung chứa",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得/不",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "下",
        "type": "fixed"
      }
    ],
    "description": "不下 biểu thị dung lượng không gian không đủ chứa đựng.",
    "challenges": [
      {
        "vi": "Phòng họp nhỏ này ngồi không vừa 20 người đâu.",
        "hanziFull": "这个小会议室坐不下二十个人。",
        "pinyinFull": "Zhège xiǎo huìyìshì zuò bú xià èrshí gè rén.",
        "slots": [
          {
            "label": "Phòng họp nhỏ này",
            "expected": "这个小会议室",
            "pinyin": "zhège xiǎo huìyìshì",
            "isFixed": false
          },
          {
            "label": "Không ngồi vừa",
            "expected": "坐不下二十个人",
            "pinyin": "zuò bú xià èrshí gè rén",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这个小会议室",
            "pinyin": "zhège xiǎo huìyìshì",
            "vi": "Phòng họp nhỏ này"
          },
          {
            "hanzi": "坐不下二十个人",
            "pinyin": "zuò bú xià èrshí gè rén",
            "vi": "Ko chứa vừa 20 ng"
          },
          {
            "hanzi": "装得下",
            "pinyin": "zhuāng de xià",
            "vi": "Đựng vừa"
          },
          {
            "hanzi": "放得下",
            "pinyin": "fàng de xià",
            "vi": "Đặt vừa"
          }
        ],
        "analysis": "不下 biểu thị dung lượng không gian không đủ chứa đựng."
      }
    ]
  },
  {
    "id": "cf_85",
    "catId": "cat_9",
    "category": "9. Bổ Ngữ Khả Năng",
    "name": "S + V + 得/不 + 完",
    "tag": "Có/không thể hoàn tất toàn bộ",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得/不",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "完",
        "type": "fixed"
      }
    ],
    "description": "不完 phủ định khả năng xử lý cạn kiệt số lượng.",
    "challenges": [
      {
        "vi": "Nhiều món ăn ngon thế này hai người chúng ta ăn không hết đâu.",
        "hanziFull": "这么多好吃的，我们俩吃不完。",
        "pinyinFull": "Zhènme duō hǎochī de, wǒmen liǎ chī bù wán.",
        "slots": [
          {
            "label": "Nhiều đồ ăn ngon",
            "expected": "这么多好吃的",
            "pinyin": "zhènme duō hǎochī de",
            "isFixed": false
          },
          {
            "label": "Hai chúng ta ăn ko hết",
            "expected": "我们俩吃不完",
            "pinyin": "wǒmen liǎ chī bù wán",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这么多好吃的",
            "pinyin": "zhènme duō hǎochī de",
            "vi": "Nhiều đồ ngon"
          },
          {
            "hanzi": "我们俩吃不完",
            "pinyin": "wǒmen liǎ chī bù wán",
            "vi": "Hai ng ăn ko hết"
          },
          {
            "hanzi": "看不完",
            "pinyin": "kàn bù wán",
            "vi": "Xem ko hết"
          },
          {
            "hanzi": "用不完",
            "pinyin": "yòng bù wán",
            "vi": "Dùng ko hết"
          }
        ],
        "analysis": "不完 phủ định khả năng xử lý cạn kiệt số lượng."
      }
    ]
  },
  {
    "id": "cf_86",
    "catId": "cat_9",
    "category": "9. Bổ Ngữ Khả Năng",
    "name": "S + V + 得/不 + 到",
    "tag": "Có/không đạt tới hoặc với tới",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得/不",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "到",
        "type": "fixed"
      }
    ],
    "description": "不到 biểu thị không có cách nào tiếp cận hoặc sở hữu.",
    "challenges": [
      {
        "vi": "Cuốn sách cổ này trên mạng căn bản mua không được.",
        "hanziFull": "这本古书在网上根本买不到。",
        "pinyinFull": "Zhè běn gǔshū zài wǎngshàng gēnběn mǎi bú dào.",
        "slots": [
          {
            "label": "Cuốn sách cổ này",
            "expected": "这本古书在网上",
            "pinyin": "zhè běn gǔshū zài wǎngshàng",
            "isFixed": false
          },
          {
            "label": "Căn bản mua ko đc",
            "expected": "根本买不到",
            "pinyin": "gēnběn mǎi bú dào",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这本古书在网上",
            "pinyin": "zhè běn gǔshū zài wǎngshàng",
            "vi": "Sách cổ trên mạng"
          },
          {
            "hanzi": "根本买不到",
            "pinyin": "gēnběn mǎi bú dào",
            "vi": "Mua ko nổi"
          },
          {
            "hanzi": "看得到",
            "pinyin": "kàn de dào",
            "vi": "Nhìn thấy đc"
          },
          {
            "hanzi": "拿得到",
            "pinyin": "ná de dào",
            "vi": "Lấy đc"
          }
        ],
        "analysis": "不到 biểu thị không có cách nào tiếp cận hoặc sở hữu."
      }
    ]
  },
  {
    "id": "cf_87",
    "catId": "cat_9",
    "category": "9. Bổ Ngữ Khả Năng",
    "name": "S + V + 得/不 + 起",
    "tag": "Có/không đủ năng lực kinh tế chi trả",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得/不",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "起",
        "type": "fixed"
      }
    ],
    "description": "不起 biểu thị không đủ tiền bạc hoặc tư cách để chi trả.",
    "challenges": [
      {
        "vi": "Căn biệt thự đắt đỏ này người bình thường mua không nổi.",
        "hanziFull": "这栋昂贵的别墅普通人买不起。",
        "pinyinFull": "Zhè dòng ángguì de biéshù pǔtōngrén mǎi bu qǐ.",
        "slots": [
          {
            "label": "Biệt thự đắt đỏ này",
            "expected": "这栋昂贵的别墅",
            "pinyin": "zhè dòng ángguì de biéshù",
            "isFixed": false
          },
          {
            "label": "Người bình thường mua ko nổi",
            "expected": "普通人买不起",
            "pinyin": "pǔtōngrén mǎi bu qǐ",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这栋昂贵的别墅",
            "pinyin": "zhè dòng ángguì de biéshù",
            "vi": "Căn biệt thự đắt đỏ"
          },
          {
            "hanzi": "普通人买不起",
            "pinyin": "pǔtōngrén mǎi bu qǐ",
            "vi": "Người thường mua ko nổi"
          },
          {
            "hanzi": "住得起",
            "pinyin": "zhù de qǐ",
            "vi": "Ở nổi"
          },
          {
            "hanzi": "看得起",
            "pinyin": "kàn de qǐ",
            "vi": "Coi trọng"
          }
        ],
        "analysis": "不起 biểu thị không đủ tiền bạc hoặc tư cách để chi trả."
      }
    ]
  },
  {
    "id": "cf_88",
    "catId": "cat_9",
    "category": "9. Bổ Ngữ Khả Năng",
    "name": "S + V + 得/不 + 清楚",
    "tag": "Có/không phân biệt rõ ràng",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得/不",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "清楚",
        "type": "fixed"
      }
    ],
    "description": "不清楚 chỉ sự hạn chế về giác quan tiếp nhận.",
    "challenges": [
      {
        "vi": "Chữ trên bảng nhỏ quá, ngồi hàng sau nhìn không rõ.",
        "hanziFull": "黑板上的字太小，后排看不清楚。",
        "pinyinFull": "Hēibǎn shang de zì tài xiǎo, hòupái kàn bu qīngchu.",
        "slots": [
          {
            "label": "Chữ trên bảng nhỏ",
            "expected": "黑板上的字太小",
            "pinyin": "hēibǎn shang de zì tài xiǎo",
            "isFixed": false
          },
          {
            "label": "Hàng sau nhìn ko rõ",
            "expected": "后排看不清楚",
            "pinyin": "hòupái kàn bu qīngchu",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "黑板上的字太小",
            "pinyin": "hēibǎn shang de zì tài xiǎo",
            "vi": "Chữ trên bảng nhỏ"
          },
          {
            "hanzi": "后排看不清楚",
            "pinyin": "hòupái kàn bu qīngchu",
            "vi": "Hàng sau nhìn ko rõ"
          },
          {
            "hanzi": "听得清楚",
            "pinyin": "tīng de qīngchu",
            "vi": "Nghe rõ ràng"
          },
          {
            "hanzi": "说清楚",
            "pinyin": "shuō qīngchu",
            "vi": "Nói rõ"
          }
        ],
        "analysis": "不清楚 chỉ sự hạn chế về giác quan tiếp nhận."
      }
    ]
  },
  {
    "id": "cf_89",
    "catId": "cat_9",
    "category": "9. Bổ Ngữ Khả Năng",
    "name": "S + V + 得/不 + 懂",
    "tag": "Có/không đủ năng lực thấu hiểu",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得/不",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "懂",
        "type": "fixed"
      }
    ],
    "description": "不懂 biểu thị rào cản về tri thức hoặc ngoại ngữ.",
    "challenges": [
      {
        "vi": "Bài luận văn chuyên ngành này tôi đọc không hiểu.",
        "hanziFull": "这篇专业论文我看不懂。",
        "pinyinFull": "Zhè piān zhuānyè lùnwén wǒ kàn bu dǒng.",
        "slots": [
          {
            "label": "Bài luận văn này",
            "expected": "这篇专业论文",
            "pinyin": "zhè piān zhuānyè lùnwén",
            "isFixed": false
          },
          {
            "label": "Tôi đọc ko hiểu",
            "expected": "我看不懂",
            "pinyin": "wǒ kàn bu dǒng",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这篇专业论文",
            "pinyin": "zhè piān zhuānyè lùnwén",
            "vi": "Bài luận chuyên ngành"
          },
          {
            "hanzi": "我看不懂",
            "pinyin": "wǒ kàn bu dǒng",
            "vi": "Tôi đọc ko hiểu"
          },
          {
            "hanzi": "听得懂",
            "pinyin": "tīng de dǒng",
            "vi": "Nghe hiểu đc"
          },
          {
            "hanzi": "学得懂",
            "pinyin": "xué de dǒng",
            "vi": "Học hiểu đc"
          }
        ],
        "analysis": "不懂 biểu thị rào cản về tri thức hoặc ngoại ngữ."
      }
    ]
  },
  {
    "id": "cf_90",
    "catId": "cat_9",
    "category": "9. Bổ Ngữ Khả Năng",
    "name": "S + V + 得/不 + 住",
    "tag": "Có/không giữ vững ổn định",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "得/不",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "住",
        "type": "fixed"
      }
    ],
    "description": "住 biểu thị sự kiên định, dừng lại hoặc cố định.",
    "challenges": [
      {
        "vi": "Bí mật này bạn nhất định phải giữ kín, đừng để lộ ra nhé.",
        "hanziFull": "这个秘密你一定要守得住。",
        "pinyinFull": "Zhège mìmì nǐ yídìng yào shǒu de zhù.",
        "slots": [
          {
            "label": "Bí mật này bạn",
            "expected": "这个秘密你一定要",
            "pinyin": "zhège mìmì nǐ yídìng yào",
            "isFixed": false
          },
          {
            "label": "Giữ vững được",
            "expected": "守得住",
            "pinyin": "shǒu de zhù",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这个秘密你一定要",
            "pinyin": "zhège mìmì nǐ yídìng yào",
            "vi": "Bí mật này bạn phải"
          },
          {
            "hanzi": "守得住",
            "pinyin": "shǒu de zhù",
            "vi": "Giữ kín đc"
          },
          {
            "hanzi": "站不住",
            "pinyin": "zhàn bu zhù",
            "vi": "Đứng ko vững"
          },
          {
            "hanzi": "记不住",
            "pinyin": "jì bu zhù",
            "vi": "Ko nhớ nổi"
          }
        ],
        "analysis": "住 biểu thị sự kiên định, dừng lại hoặc cố định."
      }
    ]
  },
  {
    "id": "cf_91",
    "catId": "cat_10",
    "category": "10. Cấu Trúc So Sánh",
    "name": "A + 比 + B + Adj",
    "tag": "So sánh hơn kinh điển (A hơn B)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "比",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      }
    ],
    "description": "Cấu trúc so sánh chữ 比 kinh điển; tuyệt đối không dùng 很 trước tính từ.",
    "challenges": [
      {
        "vi": "Thời tiết hôm nay nóng hơn hôm qua nhiều.",
        "hanziFull": "今天的天气比昨天热。",
        "pinyinFull": "Jīntiān de tiānqì bǐ zuótiān rè.",
        "slots": [
          {
            "label": "Đối tượng A",
            "expected": "今天的天气",
            "pinyin": "jīntiān de tiānqì",
            "isFixed": false
          },
          {
            "label": "So với",
            "expected": "比",
            "pinyin": "bǐ",
            "isFixed": true
          },
          {
            "label": "Đối tượng B",
            "expected": "昨天",
            "pinyin": "zuótiān",
            "isFixed": false
          },
          {
            "label": "Tính từ",
            "expected": "热",
            "pinyin": "rè",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "今天的天气",
            "pinyin": "jīntiān de tiānqì",
            "vi": "Thời tiết hôm nay"
          },
          {
            "hanzi": "昨天",
            "pinyin": "zuótiān",
            "vi": "Hôm qua"
          },
          {
            "hanzi": "热",
            "pinyin": "rè",
            "vi": "Nóng"
          },
          {
            "hanzi": "冷",
            "pinyin": "lěng",
            "vi": "Lạnh"
          }
        ],
        "analysis": "Cấu trúc so sánh chữ 比 kinh điển; tuyệt đối không dùng 很 trước tính từ."
      }
    ]
  },
  {
    "id": "cf_92",
    "catId": "cat_10",
    "category": "10. Cấu Trúc So Sánh",
    "name": "A + 比 + B + 更 + Adj",
    "tag": "So sánh vượt bậc (A càng... hơn B)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "比",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "更",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      }
    ],
    "description": "更 mang hàm ý đối tượng B vốn dĩ đã tốt, đối tượng A còn tốt hơn.",
    "challenges": [
      {
        "vi": "Kế hoạch lần này chu đáo hơn kế hoạch lần trước rất nhiều.",
        "hanziFull": "这次的方案比上次更周到。",
        "pinyinFull": "Zhè cì de fāng'àn bǐ shàng cì gèng zhōudào.",
        "slots": [
          {
            "label": "Đối tượng A",
            "expected": "这次的方案",
            "pinyin": "zhè cì de fāng'àn",
            "isFixed": false
          },
          {
            "label": "So với lần trước",
            "expected": "比上次",
            "pinyin": "bǐ shàng cì",
            "isFixed": false
          },
          {
            "label": "Càng chu đáo hơn",
            "expected": "更周到",
            "pinyin": "gèng zhōudào",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这次的方案",
            "pinyin": "zhè cì de fāng'àn",
            "vi": "Phương án lần này"
          },
          {
            "hanzi": "比上次",
            "pinyin": "bǐ shàng cì",
            "vi": "So với lần trước"
          },
          {
            "hanzi": "更周到",
            "pinyin": "gèng zhōudào",
            "vi": "Càng chu đáo"
          },
          {
            "hanzi": "更好",
            "pinyin": "gèng hǎo",
            "vi": "Càng tốt"
          }
        ],
        "analysis": "更 mang hàm ý đối tượng B vốn dĩ đã tốt, đối tượng A còn tốt hơn."
      }
    ]
  },
  {
    "id": "cf_93",
    "catId": "cat_10",
    "category": "10. Cấu Trúc So Sánh",
    "name": "A + 比 + B + Adj + 多了 / 得多",
    "tag": "Chênh lệch lớn (Hơn nhiều)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "比",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "多了 / 得多",
        "type": "fixed"
      }
    ],
    "description": "得多 hoặc 多了 đứng sau tính từ biểu thị khoảng cách so sánh rất xa.",
    "challenges": [
      {
        "vi": "Tốc độ tàu cao tốc nhanh hơn ô tô buýt nhiều.",
        "hanziFull": "高铁的速度比公共汽车快得多。",
        "pinyinFull": "Gāotiě de sùdù bǐ gōnggòng qìchē kuài de duō.",
        "slots": [
          {
            "label": "Đối tượng A",
            "expected": "高铁的速度",
            "pinyin": "gāotiě de sùdù",
            "isFixed": false
          },
          {
            "label": "So với xe buýt",
            "expected": "比公共汽车",
            "pinyin": "bǐ gōnggòng qìchē",
            "isFixed": false
          },
          {
            "label": "Nhanh hơn nhiều",
            "expected": "快得多",
            "pinyin": "kuài de duō",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "高铁的速度",
            "pinyin": "gāotiě de sùdù",
            "vi": "Tốc độ tàu cao tốc"
          },
          {
            "hanzi": "比公共汽车",
            "pinyin": "bǐ gōnggòng qìchē",
            "vi": "So với xe buýt"
          },
          {
            "hanzi": "快得多",
            "pinyin": "kuài de duō",
            "vi": "Nhanh hơn nhiều"
          },
          {
            "hanzi": "慢得多",
            "pinyin": "màn de duō",
            "vi": "Chậm hơn nhiều"
          }
        ],
        "analysis": "得多 hoặc 多了 đứng sau tính từ biểu thị khoảng cách so sánh rất xa."
      }
    ]
  },
  {
    "id": "cf_94",
    "catId": "cat_10",
    "category": "10. Cấu Trúc So Sánh",
    "name": "A + 比 + B + Adj + 一点儿 / 一些",
    "tag": "Chênh lệch nhỏ (Hơn một chút)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "比",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "一点儿 / 一些",
        "type": "fixed"
      }
    ],
    "description": "一点儿 đứng sau tính từ chỉ mức chênh lệch nhỏ nhặt.",
    "challenges": [
      {
        "vi": "Bộ quần áo này đắt hơn bộ kia một chút.",
        "hanziFull": "这件衣服比那件贵一点儿。",
        "pinyinFull": "Zhè jiàn yīfu bǐ nà jiàn guì yìdiǎnr.",
        "slots": [
          {
            "label": "Đối tượng A",
            "expected": "这件衣服",
            "pinyin": "zhè jiàn yīfu",
            "isFixed": false
          },
          {
            "label": "So với bộ kia",
            "expected": "比那件",
            "pinyin": "bǐ nà jiàn",
            "isFixed": false
          },
          {
            "label": "Đắt hơn một chút",
            "expected": "贵一点儿",
            "pinyin": "guì yìdiǎnr",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这件衣服",
            "pinyin": "zhè jiàn yīfu",
            "vi": "Bộ quần áo này"
          },
          {
            "hanzi": "比那件",
            "pinyin": "bǐ nà jiàn",
            "vi": "So với bộ kia"
          },
          {
            "hanzi": "贵一点儿",
            "pinyin": "guì yìdiǎnr",
            "vi": "Đắt hơn chút"
          },
          {
            "hanzi": "便宜一些",
            "pinyin": "piányi yìxiē",
            "vi": "Rẻ hơn chút"
          }
        ],
        "analysis": "一点儿 đứng sau tính từ chỉ mức chênh lệch nhỏ nhặt."
      }
    ]
  },
  {
    "id": "cf_95",
    "catId": "cat_10",
    "category": "10. Cấu Trúc So Sánh",
    "name": "A + 没有 + B + (那么) + Adj",
    "tag": "So sánh kém (A không bằng B)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "没有",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "(那么)",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      }
    ],
    "description": "Dạng phủ định của so sánh 比 là A 没有 B 那么 Adj.",
    "challenges": [
      {
        "vi": "Căn phòng này không rộng rãi bằng căn phòng trước.",
        "hanziFull": "这个房间没有之前的那个那么宽敞。",
        "pinyinFull": "Zhège fángjiān méiyǒu zhīqián de nàge nàme kuānchang.",
        "slots": [
          {
            "label": "Đối tượng A",
            "expected": "这个房间",
            "pinyin": "zhège fángjiān",
            "isFixed": false
          },
          {
            "label": "Không bằng căn trước",
            "expected": "没有之前的那个",
            "pinyin": "méiyǒu zhīqián de nàge",
            "isFixed": false
          },
          {
            "label": "Rộng rãi như thế",
            "expected": "那么宽敞",
            "pinyin": "nàme kuānchang",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这个房间",
            "pinyin": "zhège fángjiān",
            "vi": "Phòng này"
          },
          {
            "hanzi": "没有之前的那个",
            "pinyin": "méiyǒu zhīqián de nàge",
            "vi": "Ko bằng phòng trước"
          },
          {
            "hanzi": "那么宽敞",
            "pinyin": "nàme kuānchang",
            "vi": "Rộng rãi thế"
          },
          {
            "hanzi": "大",
            "pinyin": "dà",
            "vi": "Lớn"
          }
        ],
        "analysis": "Dạng phủ định của so sánh 比 là A 没有 B 那么 Adj."
      }
    ]
  },
  {
    "id": "cf_96",
    "catId": "cat_10",
    "category": "10. Cấu Trúc So Sánh",
    "name": "A + 跟/和 + B + 一样 + (Adj)",
    "tag": "So sánh bằng (A giống hệt B)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "跟/和",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "一样",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "(Adj)",
        "type": "var"
      }
    ],
    "description": "跟/和...一样 biểu thị sự tương đồng về tính chất hoặc hình thức.",
    "challenges": [
      {
        "vi": "Sở thích của tôi hoàn toàn giống với sở thích của anh ấy.",
        "hanziFull": "我的爱好跟他的一模一样。",
        "pinyinFull": "Wǒ de àihào gēn tā de yìmúyíyàng.",
        "slots": [
          {
            "label": "Đối tượng A",
            "expected": "我的爱好",
            "pinyin": "wǒ de àihào",
            "isFixed": false
          },
          {
            "label": "Cùng",
            "expected": "跟",
            "pinyin": "gēn",
            "isFixed": true
          },
          {
            "label": "Của anh ấy",
            "expected": "他的",
            "pinyin": "tā de",
            "isFixed": false
          },
          {
            "label": "Giống hệt nhau",
            "expected": "一样",
            "pinyin": "yíyàng",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "我的爱好",
            "pinyin": "wǒ de àihào",
            "vi": "Sở thích tôi"
          },
          {
            "hanzi": "他的",
            "pinyin": "tā de",
            "vi": "Của anh ấy"
          },
          {
            "hanzi": "一样",
            "pinyin": "yíyàng",
            "vi": "Giống nhau"
          },
          {
            "hanzi": "不同",
            "pinyin": "bùtóng",
            "vi": "Khác"
          }
        ],
        "analysis": "跟/和...一样 biểu thị sự tương đồng về tính chất hoặc hình thức."
      }
    ]
  },
  {
    "id": "cf_97",
    "catId": "cat_10",
    "category": "10. Cấu Trúc So Sánh",
    "name": "A + 跟/和 + B + 不一样",
    "tag": "So sánh khác biệt (A khác B)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "跟/和",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "不一样",
        "type": "fixed"
      }
    ],
    "description": "不一样 phủ định sự giống nhau giữa hai đối tượng.",
    "challenges": [
      {
        "vi": "Thói quen sinh hoạt của miền Bắc và miền Nam rất khác nhau.",
        "hanziFull": "北方的生活习惯跟南方不一样。",
        "pinyinFull": "Běifāng de shēnghuó xíguàn gēn nánfāng bù yíyàng.",
        "slots": [
          {
            "label": "Chủ ngữ A",
            "expected": "北方的生活习惯",
            "pinyin": "běifāng de shēnghuó xíguàn",
            "isFixed": false
          },
          {
            "label": "Cùng miền Nam",
            "expected": "跟南方",
            "pinyin": "gēn nánfāng",
            "isFixed": false
          },
          {
            "label": "Không giống nhau",
            "expected": "不一样",
            "pinyin": "bù yíyàng",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "北方的生活习惯",
            "pinyin": "běifāng de shēnghuó xíguàn",
            "vi": "Tập quán miền bắc"
          },
          {
            "hanzi": "跟南方",
            "pinyin": "gēn nánfāng",
            "vi": "Cùng miền nam"
          },
          {
            "hanzi": "不一样",
            "pinyin": "bù yíyàng",
            "vi": "Khác biệt"
          },
          {
            "hanzi": "相同",
            "pinyin": "xiāngtóng",
            "vi": "Tương đồng"
          }
        ],
        "analysis": "不一样 phủ định sự giống nhau giữa hai đối tượng."
      }
    ]
  },
  {
    "id": "cf_98",
    "catId": "cat_10",
    "category": "10. Cấu Trúc So Sánh",
    "name": "A + 不如 + B",
    "tag": "A không bằng B (Văn phong trang trọng)",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "不如",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "不如 mang sắc thái đánh giá chất lượng hoặc lựa chọn tối ưu.",
    "challenges": [
      {
        "vi": "Nghe người khác kể lại không bằng chính mắt mình nhìn thấy.",
        "hanziFull": "听别人说不如自己亲眼看见。",
        "pinyinFull": "Tīng biérén shuō bùrú zìjǐ qīnyǎn kànjiàn.",
        "slots": [
          {
            "label": "Nghe người ta nói",
            "expected": "听别人说",
            "pinyin": "tīng biérén shuō",
            "isFixed": false
          },
          {
            "label": "Không bằng",
            "expected": "不如",
            "pinyin": "bùrú",
            "isFixed": true
          },
          {
            "label": "Tự mắt thấy",
            "expected": "自己亲眼看见",
            "pinyin": "zìjǐ qīnyǎn kànjiàn",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "听别人说",
            "pinyin": "tīng biérén shuō",
            "vi": "Nghe ng khác nói"
          },
          {
            "hanzi": "自己亲眼看见",
            "pinyin": "zìjǐ qīnyǎn kànjiàn",
            "vi": "Tự mắt nhìn thấy"
          },
          {
            "hanzi": "不如",
            "pinyin": "bùrú",
            "vi": "Ko bằng"
          },
          {
            "hanzi": "好",
            "pinyin": "hǎo",
            "vi": "Tốt"
          }
        ],
        "analysis": "不如 mang sắc thái đánh giá chất lượng hoặc lựa chọn tối ưu."
      }
    ]
  },
  {
    "id": "cf_99",
    "catId": "cat_10",
    "category": "10. Cấu Trúc So Sánh",
    "name": "越 + A + 越 + B",
    "tag": "Càng A thì càng B (Tương quan biến đổi)",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "越",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "越",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "越...越... biểu thị mức độ của B biến đổi tỷ lệ thuận theo A.",
    "challenges": [
      {
        "vi": "Càng luyện tập nhiều thì khẩu ngữ sẽ càng trôi chảy.",
        "hanziFull": "越努力练习，口语就越流利。",
        "pinyinFull": "Yuè nǔlì liànxí, kǒuyǔ jiù yuè liúlì.",
        "slots": [
          {
            "label": "Càng chăm chỉ luyện",
            "expected": "越努力练习",
            "pinyin": "yuè nǔlì liànxí",
            "isFixed": true
          },
          {
            "label": "Khẩu ngữ càng trôi chảy",
            "expected": "口语就越流利",
            "pinyin": "kǒuyǔ jiù yuè liúlì",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "越努力练习",
            "pinyin": "yuè nǔlì liànxí",
            "vi": "Càng chăm luyện"
          },
          {
            "hanzi": "口语就越流利",
            "pinyin": "kǒuyǔ jiù yuè liúlì",
            "vi": "Khẩu ngữ càng lưu loát"
          },
          {
            "hanzi": "越快",
            "pinyin": "yuè kuài",
            "vi": "Càng nhanh"
          },
          {
            "hanzi": "越高",
            "pinyin": "yuè gāo",
            "vi": "Càng cao"
          }
        ],
        "analysis": "越...越... biểu thị mức độ của B biến đổi tỷ lệ thuận theo A."
      }
    ]
  },
  {
    "id": "cf_100",
    "catId": "cat_10",
    "category": "10. Cấu Trúc So Sánh",
    "name": "越来越 + Adj / V",
    "tag": "Ngày càng... (Tăng dần theo thời gian)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "越来越",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj / V",
        "type": "var"
      }
    ],
    "description": "越来越 biểu thị sự phát triển liên tục theo dòng thời gian.",
    "challenges": [
      {
        "vi": "Kỹ năng nghe tiếng Trung của tôi ngày càng tiến bộ rõ rệt.",
        "hanziFull": "我的中文听力水平越来越好。",
        "pinyinFull": "Wǒ de Zhōngwén tīnglì shuǐpíng yuèláiyuè hǎo.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我的中文听力水平",
            "pinyin": "wǒ de Zhōngwén tīnglì shuǐpíng",
            "isFixed": false
          },
          {
            "label": "Ngày càng",
            "expected": "越来越",
            "pinyin": "yuèláiyuè",
            "isFixed": true
          },
          {
            "label": "Tốt",
            "expected": "好",
            "pinyin": "hǎo",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我的中文听力水平",
            "pinyin": "wǒ de Zhōngwén tīnglì shuǐpíng",
            "vi": "Trình độ nghe tiếng Trung"
          },
          {
            "hanzi": "好",
            "pinyin": "hǎo",
            "vi": "Tốt"
          },
          {
            "hanzi": "高",
            "pinyin": "gāo",
            "vi": "Cao"
          },
          {
            "hanzi": "快",
            "pinyin": "kuài",
            "vi": "Nhanh"
          }
        ],
        "analysis": "越来越 biểu thị sự phát triển liên tục theo dòng thời gian."
      }
    ]
  },
  {
    "id": "cf_101",
    "catId": "cat_11",
    "category": "11. Câu Chữ 把 (Xử Lý Đối Tượng)",
    "name": "S + 把 + O + V + 在/到 + Địa điểm",
    "tag": "Đặt/để vật vào vị trí cụ thể",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "把",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "在/到",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Địa điểm",
        "type": "var"
      }
    ],
    "description": "Câu chữ 把 chỉ hành động di dời vị trí của đối tượng: V + 在/到 + Nơi chốn.",
    "challenges": [
      {
        "vi": "Làm phiền bạn để tài liệu lên bàn làm việc giúp tôi.",
        "hanziFull": "麻烦你把文件放在我的办公桌上。",
        "pinyinFull": "Máfan nǐ bǎ wénjiàn fàng zài wǒ de bàngōngzhuō shang.",
        "slots": [
          {
            "label": "Làm phiền bạn",
            "expected": "麻烦你",
            "pinyin": "máfan nǐ",
            "isFixed": false
          },
          {
            "label": "Chữ 把",
            "expected": "把",
            "pinyin": "bǎ",
            "isFixed": true
          },
          {
            "label": "Tài liệu",
            "expected": "文件",
            "pinyin": "wénjiàn",
            "isFixed": false
          },
          {
            "label": "Để trên bàn làm việc",
            "expected": "放在我的办公桌上",
            "pinyin": "fàng zài wǒ de bàngōngzhuō shang",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "麻烦你",
            "pinyin": "máfan nǐ",
            "vi": "Làm phiền bạn"
          },
          {
            "hanzi": "文件",
            "pinyin": "wénjiàn",
            "vi": "Tài liệu"
          },
          {
            "hanzi": "放在我的办公桌上",
            "pinyin": "fàng zài wǒ de bàngōngzhuō shang",
            "vi": "Để trên bàn làm việc"
          },
          {
            "hanzi": "电脑",
            "pinyin": "diànnǎo",
            "vi": "Máy tính"
          }
        ],
        "analysis": "Câu chữ 把 chỉ hành động di dời vị trí của đối tượng: V + 在/到 + Nơi chốn."
      }
    ]
  },
  {
    "id": "cf_102",
    "catId": "cat_11",
    "category": "11. Câu Chữ 把 (Xử Lý Đối Tượng)",
    "name": "S + 把 + O + V + 给 + Ai đó",
    "tag": "Chuyển giao đối tượng cho ai",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "把",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "给",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Ai đó",
        "type": "var"
      }
    ],
    "description": "把 + O + V + 给 biểu thị sự chuyển dịch quyền sở hữu hoặc tiếp nhận.",
    "challenges": [
      {
        "vi": "Xin hãy đưa danh thiếp của bạn cho tôi một tấm.",
        "hanziFull": "请把你的名片给我一张。",
        "pinyinFull": "Qǐng bǎ nǐ de míngpiàn gěi wǒ yì zhāng.",
        "slots": [
          {
            "label": "Xin mời",
            "expected": "请",
            "pinyin": "qǐng",
            "isFixed": true
          },
          {
            "label": "Chữ 把",
            "expected": "把",
            "pinyin": "bǎ",
            "isFixed": true
          },
          {
            "label": "Danh thiếp của bạn",
            "expected": "你的名片",
            "pinyin": "nǐ de míngpiàn",
            "isFixed": false
          },
          {
            "label": "Đưa cho tôi một tấm",
            "expected": "给我一张",
            "pinyin": "gěi wǒ yì zhāng",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "你的名片",
            "pinyin": "nǐ de míngpiàn",
            "vi": "Danh thiếp của bạn"
          },
          {
            "hanzi": "给我一张",
            "pinyin": "gěi wǒ yì zhāng",
            "vi": "Đưa cho tôi 1 tấm"
          },
          {
            "hanzi": "手机",
            "pinyin": "shǒujī",
            "vi": "Điện thoại"
          },
          {
            "hanzi": "护照",
            "pinyin": "hùzhào",
            "vi": "Hộ chiếu"
          }
        ],
        "analysis": "把 + O + V + 给 biểu thị sự chuyển dịch quyền sở hữu hoặc tiếp nhận."
      }
    ]
  },
  {
    "id": "cf_103",
    "catId": "cat_11",
    "category": "11. Câu Chữ 把 (Xử Lý Đối Tượng)",
    "name": "S + 把 + O + V + 成 + Cái khác",
    "tag": "Biến đổi đối tượng thành dạng mới",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "把",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "成",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Cái khác",
        "type": "var"
      }
    ],
    "description": "成 làm bổ ngữ kết quả chỉ sự biến đổi tính chất hoặc đơn vị.",
    "challenges": [
      {
        "vi": "Tôi muốn đổi số tiền Đô la Mỹ này sang tiền Nhân Dân Tệ.",
        "hanziFull": "我想把这笔美元换成人民币。",
        "pinyinFull": "Wǒ xiǎng bǎ zhè bǐ měiyuán huàn chéng rénmínbì.",
        "slots": [
          {
            "label": "Tôi muốn",
            "expected": "我想",
            "pinyin": "wǒ xiǎng",
            "isFixed": false
          },
          {
            "label": "Chữ 把",
            "expected": "把",
            "pinyin": "bǎ",
            "isFixed": true
          },
          {
            "label": "Số đô la này",
            "expected": "这笔美元",
            "pinyin": "zhè bǐ měiyuán",
            "isFixed": false
          },
          {
            "label": "Đổi thành NDT",
            "expected": "换成人民币",
            "pinyin": "huàn chéng rénmínbì",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我想",
            "pinyin": "wǒ xiǎng",
            "vi": "Tôi muốn"
          },
          {
            "hanzi": "这笔美元",
            "pinyin": "zhè bǐ měiyuán",
            "vi": "Số tiền USD này"
          },
          {
            "hanzi": "换成人民币",
            "pinyin": "huàn chéng rénmínbì",
            "vi": "Đổi thành NDT"
          },
          {
            "hanzi": "欧元",
            "pinyin": "ōuyuán",
            "vi": "Euro"
          }
        ],
        "analysis": "成 làm bổ ngữ kết quả chỉ sự biến đổi tính chất hoặc đơn vị."
      }
    ]
  },
  {
    "id": "cf_104",
    "catId": "cat_11",
    "category": "11. Câu Chữ 把 (Xử Lý Đối Tượng)",
    "name": "S + 把 + O + V + 完/好 + 了",
    "tag": "Xử lý đối tượng xong xuôi chuẩn chỉnh",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "把",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "完/好",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "了",
        "type": "fixed"
      }
    ],
    "description": "Động tác 喝 tác động làm đối tượng 那杯冰水 đạt trạng thái 完.",
    "challenges": [
      {
        "vi": "Anh ấy đã uống hết cốc nước đá rồi.",
        "hanziFull": "他把那杯冰水喝完了。",
        "pinyinFull": "Tā bǎ nà bēi bīngshuǐ hē wán le.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "他",
            "pinyin": "tā",
            "isFixed": false
          },
          {
            "label": "Chữ 把",
            "expected": "把",
            "pinyin": "bǎ",
            "isFixed": true
          },
          {
            "label": "Cốc nước đá đó",
            "expected": "那杯冰水",
            "pinyin": "nà bēi bīngshuǐ",
            "isFixed": false
          },
          {
            "label": "Uống hết rồi",
            "expected": "喝完了",
            "pinyin": "hē wán le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "他",
            "pinyin": "tā",
            "vi": "Anh ấy"
          },
          {
            "hanzi": "那杯冰水",
            "pinyin": "nà bēi bīngshuǐ",
            "vi": "Cốc nước đá đó"
          },
          {
            "hanzi": "喝完了",
            "pinyin": "hē wán le",
            "vi": "Uống hết rồi"
          },
          {
            "hanzi": "吃完了",
            "pinyin": "chī wán le",
            "vi": "Ăn hết rồi"
          }
        ],
        "analysis": "Động tác 喝 tác động làm đối tượng 那杯冰水 đạt trạng thái 完."
      }
    ]
  },
  {
    "id": "cf_105",
    "catId": "cat_11",
    "category": "11. Câu Chữ 把 (Xử Lý Đối Tượng)",
    "name": "S + 把 + O + V + 进/出 + 来/去",
    "tag": "Di chuyển đối tượng vào/ra không gian",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "把",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "进/出",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "来/去",
        "type": "fixed"
      }
    ],
    "description": "Kết hợp bổ ngữ xu hướng kép 进/出来/去 trong câu chữ 把.",
    "challenges": [
      {
        "vi": "Xin hãy mang hành lý vào trong phòng khách sạn.",
        "hanziFull": "请把行李搬进房间里去。",
        "pinyinFull": "Qǐng bǎ xíngli bān jìn fángjiān lǐ qù.",
        "slots": [
          {
            "label": "Xin mời",
            "expected": "请",
            "pinyin": "qǐng",
            "isFixed": true
          },
          {
            "label": "Chữ 把",
            "expected": "把",
            "pinyin": "bǎ",
            "isFixed": true
          },
          {
            "label": "Hành lý",
            "expected": "行李",
            "pinyin": "xíngli",
            "isFixed": false
          },
          {
            "label": "Chuyển vào trong phòng",
            "expected": "搬进房间里去",
            "pinyin": "bān jìn fángjiān lǐ qù",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "行李",
            "pinyin": "xíngli",
            "vi": "Hành lý"
          },
          {
            "hanzi": "搬进房间里去",
            "pinyin": "bān jìn fángjiān lǐ qù",
            "vi": "Chuyển vào trong phòng"
          },
          {
            "hanzi": "拿出来",
            "pinyin": "ná chū lái",
            "vi": "Lấy ra"
          },
          {
            "hanzi": "放进去",
            "pinyin": "fàng jìn qù",
            "vi": "Để vào"
          }
        ],
        "analysis": "Kết hợp bổ ngữ xu hướng kép 进/出来/去 trong câu chữ 把."
      }
    ]
  },
  {
    "id": "cf_106",
    "catId": "cat_11",
    "category": "11. Câu Chữ 把 (Xử Lý Đối Tượng)",
    "name": "S + 没/没有 + 把 + O + V + Kết quả",
    "tag": "Phủ định của câu chữ 把",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "没/没有",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "把",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả",
        "type": "var"
      }
    ],
    "description": "Phủ định 没/没有 bắt buộc phải đứng trước chữ 把.",
    "challenges": [
      {
        "vi": "Hôm qua tôi chưa gửi bản hợp đồng này đi.",
        "hanziFull": "昨天我没有把这份合同发出去。",
        "pinyinFull": "Zuótiān wǒ méiyǒu bǎ zhè fèn hétong fā chūqù.",
        "slots": [
          {
            "label": "Thời gian & Tôi",
            "expected": "昨天我",
            "pinyin": "zuótiān wǒ",
            "isFixed": false
          },
          {
            "label": "Không",
            "expected": "没有",
            "pinyin": "méiyǒu",
            "isFixed": true
          },
          {
            "label": "Chữ 把",
            "expected": "把",
            "pinyin": "bǎ",
            "isFixed": true
          },
          {
            "label": "Bản hợp đồng này",
            "expected": "这份合同",
            "pinyin": "zhè fèn hétong",
            "isFixed": false
          },
          {
            "label": "Gửi đi",
            "expected": "发出去",
            "pinyin": "fā chūqù",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "昨天我",
            "pinyin": "zuótiān wǒ",
            "vi": "Hôm qua tôi"
          },
          {
            "hanzi": "这份合同",
            "pinyin": "zhè fèn hétong",
            "vi": "Bản hợp đồng này"
          },
          {
            "hanzi": "发出去",
            "pinyin": "fā chūqù",
            "vi": "Gửi đi"
          },
          {
            "hanzi": "打印好",
            "pinyin": "dǎyìn hǎo",
            "vi": "In xong"
          }
        ],
        "analysis": "Phủ định 没/没有 bắt buộc phải đứng trước chữ 把."
      }
    ]
  },
  {
    "id": "cf_107",
    "catId": "cat_11",
    "category": "11. Câu Chữ 把 (Xử Lý Đối Tượng)",
    "name": "S + 别/不要 + 把 + O + V + Kết quả",
    "tag": "Khuyên ngăn đừng làm gì với đối tượng",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "别/不要",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "把",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả",
        "type": "var"
      }
    ],
    "description": "Phó từ ngăn cấm 别/不要 đứng trước 把.",
    "challenges": [
      {
        "vi": "Bạn đừng vứt rác lung tung trên xe buýt.",
        "hanziFull": "别把垃圾扔在公共汽车上。",
        "pinyinFull": "Bié bǎ lājī rēng zài gōnggòng qìchē shang.",
        "slots": [
          {
            "label": "Đừng",
            "expected": "别",
            "pinyin": "bié",
            "isFixed": true
          },
          {
            "label": "Chữ 把",
            "expected": "把",
            "pinyin": "bǎ",
            "isFixed": true
          },
          {
            "label": "Rác",
            "expected": "垃圾",
            "pinyin": "lājī",
            "isFixed": false
          },
          {
            "label": "Vứt trên xe buýt",
            "expected": "扔在公共汽车上",
            "pinyin": "rēng zài gōnggòng qìchē shang",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "垃圾",
            "pinyin": "lājī",
            "vi": "Rác rưởi"
          },
          {
            "hanzi": "扔在公共汽车上",
            "pinyin": "rēng zài gōnggòng qìchē shang",
            "vi": "Vứt trên xe buýt"
          },
          {
            "hanzi": "丢在地上",
            "pinyin": "diū zài dìshang",
            "vi": "Đánh rơi dưới đất"
          },
          {
            "hanzi": "忘记",
            "pinyin": "wàngjì",
            "vi": "Quên"
          }
        ],
        "analysis": "Phó từ ngăn cấm 别/不要 đứng trước 把."
      }
    ]
  },
  {
    "id": "cf_108",
    "catId": "cat_11",
    "category": "11. Câu Chữ 把 (Xử Lý Đối Tượng)",
    "name": "S + 一定要 + 把 + O + V + Kết quả",
    "tag": "Nhấn mạnh quyết tâm xử lý",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "一定要",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "把",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả",
        "type": "var"
      }
    ],
    "description": "Động từ năng nguyện 一定要 đứng trước 把.",
    "challenges": [
      {
        "vi": "Hôm nay chúng ta nhất định phải giải quyết triệt để vấn đề này.",
        "hanziFull": "今天我们一定要把这个问题彻底解决。",
        "pinyinFull": "Jīntiān wǒmen yídìng yào bǎ zhège wèntí chèdǐ jiějué.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "今天我们",
            "pinyin": "jīntiān wǒmen",
            "isFixed": false
          },
          {
            "label": "Nhất định phải",
            "expected": "一定要",
            "pinyin": "yídìng yào",
            "isFixed": true
          },
          {
            "label": "Chữ 把",
            "expected": "把",
            "pinyin": "bǎ",
            "isFixed": true
          },
          {
            "label": "Vấn đề này",
            "expected": "这个问题",
            "pinyin": "zhège wèntí",
            "isFixed": false
          },
          {
            "label": "Giải quyết triệt để",
            "expected": "彻底解决",
            "pinyin": "chèdǐ jiějué",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "今天我们",
            "pinyin": "jīntiān wǒmen",
            "vi": "Hôm nay chúng ta"
          },
          {
            "hanzi": "这个问题",
            "pinyin": "zhège wèntí",
            "vi": "Vấn đề này"
          },
          {
            "hanzi": "彻底解决",
            "pinyin": "chèdǐ jiějué",
            "vi": "Giải quyết triệt để"
          },
          {
            "hanzi": "完成",
            "pinyin": "wánchéng",
            "vi": "Hoàn thành"
          }
        ],
        "analysis": "Động từ năng nguyện 一定要 đứng trước 把."
      }
    ]
  },
  {
    "id": "cf_109",
    "catId": "cat_11",
    "category": "11. Câu Chữ 把 (Xử Lý Đối Tượng)",
    "name": "S + 能不能 + 把 + O + V + Kết quả?",
    "tag": "Thỉnh cầu nhờ vả lịch sự",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "能不能",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "把",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả?",
        "type": "var"
      }
    ],
    "description": "Dùng 能不能 trước 把 để hỏi thăm dò nhã nhặn.",
    "challenges": [
      {
        "vi": "Bạn có thể mở cửa sổ ra giúp một chút không?",
        "hanziFull": "你能不能把窗户打开一点儿？",
        "pinyinFull": "Nǐ néng bu néng bǎ chuānghu dǎkāi yìdiǎnr?",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "你",
            "pinyin": "nǐ",
            "isFixed": false
          },
          {
            "label": "Có thể hay không",
            "expected": "能不能",
            "pinyin": "néng bu néng",
            "isFixed": true
          },
          {
            "label": "Chữ 把",
            "expected": "把",
            "pinyin": "bǎ",
            "isFixed": true
          },
          {
            "label": "Cửa sổ",
            "expected": "窗户",
            "pinyin": "chuānghu",
            "isFixed": false
          },
          {
            "label": "Mở ra chút",
            "expected": "打开一点儿",
            "pinyin": "dǎkāi yìdiǎnr",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "你",
            "pinyin": "nǐ",
            "vi": "Bạn"
          },
          {
            "hanzi": "窗户",
            "pinyin": "chuānghu",
            "vi": "Cửa sổ"
          },
          {
            "hanzi": "打开一点儿",
            "pinyin": "dǎkāi yìdiǎnr",
            "vi": "Mở ra một chút"
          },
          {
            "hanzi": "空调",
            "pinyin": "kōngtiáo",
            "vi": "Điều hòa"
          }
        ],
        "analysis": "Dùng 能不能 trước 把 để hỏi thăm dò nhã nhặn."
      }
    ]
  },
  {
    "id": "cf_110",
    "catId": "cat_11",
    "category": "11. Câu Chữ 把 (Xử Lý Đối Tượng)",
    "name": "S + 差点儿 + 把 + O + V + Kết quả",
    "tag": "Suýt chút nữa xử lý nhầm",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "差点儿",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "把",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả",
        "type": "var"
      }
    ],
    "description": "差点儿 biểu thị sự việc nguy hiểm suýt xảy ra nhưng thực tế đã tránh được.",
    "challenges": [
      {
        "vi": "Tôi suýt chút nữa làm rơi vỡ chiếc cốc thủy tinh.",
        "hanziFull": "我差点儿把玻璃杯摔碎了。",
        "pinyinFull": "Wǒ chàdiǎnr bǎ bōlibēi shuāi suì le.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我",
            "pinyin": "wǒ",
            "isFixed": false
          },
          {
            "label": "Suýt chút nữa",
            "expected": "差点儿",
            "pinyin": "chàdiǎnr",
            "isFixed": true
          },
          {
            "label": "Chữ 把",
            "expected": "把",
            "pinyin": "bǎ",
            "isFixed": true
          },
          {
            "label": "Cốc thủy tinh",
            "expected": "玻璃杯",
            "pinyin": "bōlibēi",
            "isFixed": false
          },
          {
            "label": "Làm vỡ rồi",
            "expected": "摔碎了",
            "pinyin": "shuāi suì le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我",
            "pinyin": "wǒ",
            "vi": "Tôi"
          },
          {
            "hanzi": "玻璃杯",
            "pinyin": "bōlibēi",
            "vi": "Cốc thủy tinh"
          },
          {
            "hanzi": "摔碎了",
            "pinyin": "shuāi suì le",
            "vi": "Làm vỡ rơi"
          },
          {
            "hanzi": "弄丢了",
            "pinyin": "nòng diū le",
            "vi": "Làm mất rồi"
          }
        ],
        "analysis": "差点儿 biểu thị sự việc nguy hiểm suýt xảy ra nhưng thực tế đã tránh được."
      }
    ]
  },
  {
    "id": "cf_111",
    "catId": "cat_12",
    "category": "12. Câu Bị Động 被 / 叫 / 让",
    "name": "S + 被 + Tác nhân + V + Kết quả",
    "tag": "Bị động chuẩn mực",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "被",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Tác nhân",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả",
        "type": "var"
      }
    ],
    "description": "Chủ ngữ là đối tượng tiếp nhận tác động bất lợi: S + 被 + Tác nhân + V.",
    "challenges": [
      {
        "vi": "Chiếc bánh mì trên bàn đã bị chú mèo nhỏ ăn mất rồi.",
        "hanziFull": "桌上的面包被小猫吃掉了。",
        "pinyinFull": "Zhuō shang de miànbāo bèi xiǎomāo chī diào le.",
        "slots": [
          {
            "label": "Chủ thể chịu tác động",
            "expected": "桌上的面包",
            "pinyin": "zhuō shang de miànbāo",
            "isFixed": false
          },
          {
            "label": "Bị",
            "expected": "被",
            "pinyin": "bèi",
            "isFixed": true
          },
          {
            "label": "Mèo con",
            "expected": "小猫",
            "pinyin": "xiǎomāo",
            "isFixed": false
          },
          {
            "label": "Ăn mất rồi",
            "expected": "吃掉了",
            "pinyin": "chī diào le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "桌上的面包",
            "pinyin": "zhuō shang de miànbāo",
            "vi": "Bánh mì trên bàn"
          },
          {
            "hanzi": "小猫",
            "pinyin": "xiǎomāo",
            "vi": "Mèo con"
          },
          {
            "hanzi": "吃掉了",
            "pinyin": "chī diào le",
            "vi": "Ăn mất rồi"
          },
          {
            "hanzi": "喝掉了",
            "pinyin": "hē diào le",
            "vi": "Uống hết"
          }
        ],
        "analysis": "Chủ ngữ là đối tượng tiếp nhận tác động bất lợi: S + 被 + Tác nhân + V."
      }
    ]
  },
  {
    "id": "cf_112",
    "catId": "cat_12",
    "category": "12. Câu Bị Động 被 / 叫 / 让",
    "name": "S + 被 + V + Kết quả",
    "tag": "Bị động ẩn tác nhân",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "被",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả",
        "type": "var"
      }
    ],
    "description": "Trong khẩu ngữ hiện đại, tác nhân sau 被 có thể được lược bỏ.",
    "challenges": [
      {
        "vi": "Chiếc xe đạp cũ của tôi đã bị trộm mất vào tối hôm qua.",
        "hanziFull": "我的旧自行车昨晚被偷了。",
        "pinyinFull": "Wǒ de jiù zìxíngchē zuówǎn bèi tōu le.",
        "slots": [
          {
            "label": "Chủ thể",
            "expected": "我的旧自行车昨晚",
            "pinyin": "wǒ de jiù zìxíngchē zuówǎn",
            "isFixed": false
          },
          {
            "label": "Bị",
            "expected": "被",
            "pinyin": "bèi",
            "isFixed": true
          },
          {
            "label": "Trộm mất rồi",
            "expected": "偷了",
            "pinyin": "tōu le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我的旧自行车昨晚",
            "pinyin": "wǒ de jiù zìxíngchē zuówǎn",
            "vi": "Xe đạp cũ tôi tối qua"
          },
          {
            "hanzi": "偷了",
            "pinyin": "tōu le",
            "vi": "Trộm mất"
          },
          {
            "hanzi": "弄坏了",
            "pinyin": "nòng huài le",
            "vi": "Làm hỏng"
          },
          {
            "hanzi": "拿走了",
            "pinyin": "ná zǒu le",
            "vi": "Cầm đi"
          }
        ],
        "analysis": "Trong khẩu ngữ hiện đại, tác nhân sau 被 có thể được lược bỏ."
      }
    ]
  },
  {
    "id": "cf_113",
    "catId": "cat_12",
    "category": "12. Câu Bị Động 被 / 叫 / 让",
    "name": "S + 没/没有 + 被 + Tác nhân + V",
    "tag": "Phủ định của câu bị động",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "没/没有",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "被",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Tác nhân",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "Phủ định 没/没有 luôn đứng trước giới từ 被.",
    "challenges": [
      {
        "vi": "Ngôi nhà này may mắn không bị cơn bão làm hư hại.",
        "hanziFull": "这栋房子幸运地没有被台风破坏。",
        "pinyinFull": "Zhè dòng fángzi xìngyùn de méiyǒu bèi táifēng pòhuài.",
        "slots": [
          {
            "label": "Chủ thể",
            "expected": "这栋房子幸运地",
            "pinyin": "zhè dòng fángzi xìngyùn de",
            "isFixed": false
          },
          {
            "label": "Không bị",
            "expected": "没有被",
            "pinyin": "méiyǒu bèi",
            "isFixed": true
          },
          {
            "label": "Bão phá hủy",
            "expected": "台风破坏",
            "pinyin": "táifēng pòhuài",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "这栋房子幸运地",
            "pinyin": "zhè dòng fángzi xìngyùn de",
            "vi": "Ngôi nhà này may mắn"
          },
          {
            "hanzi": "台风破坏",
            "pinyin": "táifēng pòhuài",
            "vi": "Bão phá hủy"
          },
          {
            "hanzi": "大火烧毁",
            "pinyin": "dàhuǒ shāohuǐ",
            "vi": "Lửa thiêu"
          },
          {
            "hanzi": "水淹",
            "pinyin": "shuǐ yān",
            "vi": "Ngập lụt"
          }
        ],
        "analysis": "Phủ định 没/没有 luôn đứng trước giới từ 被."
      }
    ]
  },
  {
    "id": "cf_114",
    "catId": "cat_12",
    "category": "12. Câu Bị Động 被 / 叫 / 让",
    "name": "S + 叫 / 让 + Tác nhân + V + Kết quả",
    "tag": "Bị động khẩu ngữ tự nhiên",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "叫 / 让",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Tác nhân",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả",
        "type": "var"
      }
    ],
    "description": "叫 và 让 trong khẩu ngữ tương đương chữ 被, nhưng bắt buộc phải có tác nhân đi kèm.",
    "challenges": [
      {
        "vi": "Tài liệu quan trọng của tôi bị nước mưa làm ướt sũng rồi.",
        "hanziFull": "我的重要文件叫雨水淋湿了。",
        "pinyinFull": "Wǒ de zhòngyào wénjiàn jiào yǔshuǐ lín shī le.",
        "slots": [
          {
            "label": "Chủ thể",
            "expected": "我的重要文件",
            "pinyin": "wǒ de zhòngyào wénjiàn",
            "isFixed": false
          },
          {
            "label": "Bị",
            "expected": "叫",
            "pinyin": "jiào",
            "isFixed": true
          },
          {
            "label": "Nước mưa",
            "expected": "雨水",
            "pinyin": "yǔshuǐ",
            "isFixed": false
          },
          {
            "label": "Làm ướt đẫm",
            "expected": "淋湿了",
            "pinyin": "lín shī le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我的重要文件",
            "pinyin": "wǒ de zhòngyào wénjiàn",
            "vi": "Tài liệu quan trọng"
          },
          {
            "hanzi": "雨水",
            "pinyin": "yǔshuǐ",
            "vi": "Nước mưa"
          },
          {
            "hanzi": "淋湿了",
            "pinyin": "lín shī le",
            "vi": "Làm ướt sũng"
          },
          {
            "hanzi": "弄脏了",
            "pinyin": "nòng zāng le",
            "vi": "Làm bẩn"
          }
        ],
        "analysis": "叫 và 让 trong khẩu ngữ tương đương chữ 被, nhưng bắt buộc phải có tác nhân đi kèm."
      }
    ]
  },
  {
    "id": "cf_115",
    "catId": "cat_12",
    "category": "12. Câu Bị Động 被 / 叫 / 让",
    "name": "S + 给 + V + Kết quả",
    "tag": "Bị động ngoài ý muốn (Khẩu ngữ)",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "给",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả",
        "type": "var"
      }
    ],
    "description": "给 đứng trước động từ để tăng cường ngữ khí bị động/ngoài ý muốn.",
    "challenges": [
      {
        "vi": "Tôi bất cẩn làm đánh rơi vỡ chiếc kính mắt rồi.",
        "hanziFull": "我不小心把眼镜给摔碎了。",
        "pinyinFull": "Wǒ bù xiǎoxīn bǎ yǎnjìng gěi shuāi suì le.",
        "slots": [
          {
            "label": "Tôi bất cẩn",
            "expected": "我不小心把眼镜",
            "pinyin": "wǒ bù xiǎoxīn bǎ yǎnjìng",
            "isFixed": false
          },
          {
            "label": "Cho",
            "expected": "给",
            "pinyin": "gěi",
            "isFixed": true
          },
          {
            "label": "Làm rơi vỡ rồi",
            "expected": "摔碎了",
            "pinyin": "shuāi suì le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我不小心把眼镜",
            "pinyin": "wǒ bù xiǎoxīn bǎ yǎnjìng",
            "vi": "Tôi bất cẩn kính mắt"
          },
          {
            "hanzi": "摔碎了",
            "pinyin": "shuāi suì le",
            "vi": "Làm rơi vỡ rồi"
          },
          {
            "hanzi": "弄丢了",
            "pinyin": "nòng diū le",
            "vi": "Làm mất"
          },
          {
            "hanzi": "弄坏了",
            "pinyin": "nòng huài le",
            "vi": "Làm hỏng"
          }
        ],
        "analysis": "给 đứng trước động từ để tăng cường ngữ khí bị động/ngoài ý muốn."
      }
    ]
  },
  {
    "id": "cf_116",
    "catId": "cat_12",
    "category": "12. Câu Bị Động 被 / 叫 / 让",
    "name": "S + 被人 + V + Kết quả",
    "tag": "Bị người ta làm gì đó",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "被人",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả",
        "type": "var"
      }
    ],
    "description": "被人 chỉ chung chung đối tượng tác nhân không rõ danh tính.",
    "challenges": [
      {
        "vi": "Chỗ ngồi này đã có người khác chiếm trước rồi.",
        "hanziFull": "这个座位已经被人占了。",
        "pinyinFull": "Zhège zuòwèi yǐjīng bèi rén zhàn le.",
        "slots": [
          {
            "label": "Chỗ ngồi này",
            "expected": "这个座位已经",
            "pinyin": "zhège zuòwèi yǐjīng",
            "isFixed": false
          },
          {
            "label": "Bị người ta",
            "expected": "被人",
            "pinyin": "bèi rén",
            "isFixed": true
          },
          {
            "label": "Chiếm mất rồi",
            "expected": "占了",
            "pinyin": "zhàn le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "这个座位已经",
            "pinyin": "zhège zuòwèi yǐjīng",
            "vi": "Chỗ ngồi này đã"
          },
          {
            "hanzi": "占了",
            "pinyin": "zhàn le",
            "vi": "Chiếm rồi"
          },
          {
            "hanzi": "买了",
            "pinyin": "mǎi le",
            "vi": "Mua rồi"
          },
          {
            "hanzi": "借了",
            "pinyin": "jiè le",
            "vi": "Mượn rồi"
          }
        ],
        "analysis": "被人 chỉ chung chung đối tượng tác nhân không rõ danh tính."
      }
    ]
  },
  {
    "id": "cf_117",
    "catId": "cat_12",
    "category": "12. Câu Bị Động 被 / 叫 / 让",
    "name": "S + 被 + Hoàn cảnh + V",
    "tag": "Bị hoàn cảnh/ngoại cảnh tác động",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "被",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Hoàn cảnh",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "被 dùng với nghĩa trung tính hoặc tích cực khi bị cảm hóa/thu hút.",
    "challenges": [
      {
        "vi": "Tôi bị vẻ đẹp của vùng đất này thu hút sâu sắc.",
        "hanziFull": "我被这片美丽的土地深深吸引了。",
        "pinyinFull": "Wǒ bèi zhè piàn měilì de tǔdì shēnshēn xīyǐn le.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我",
            "pinyin": "wǒ",
            "isFixed": false
          },
          {
            "label": "Bị vùng đất này",
            "expected": "被这片美丽的土地",
            "pinyin": "bèi zhè piàn měilì de tǔdì",
            "isFixed": false
          },
          {
            "label": "Thu hút sâu sắc",
            "expected": "深深吸引了",
            "pinyin": "shēnshēn xīyǐn le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我",
            "pinyin": "wǒ",
            "vi": "Tôi"
          },
          {
            "hanzi": "被这片美丽的土地",
            "pinyin": "bèi zhè piàn měilì de tǔdì",
            "vi": "Bị mảnh đất đẹp này"
          },
          {
            "hanzi": "深深吸引了",
            "pinyin": "shēnshēn xīyǐn le",
            "vi": "Thu hút sâu sắc"
          },
          {
            "hanzi": "感动了",
            "pinyin": "gǎndòng le",
            "vi": "Cảm động"
          }
        ],
        "analysis": "被 dùng với nghĩa trung tính hoặc tích cực khi bị cảm hóa/thu hút."
      }
    ]
  },
  {
    "id": "cf_118",
    "catId": "cat_12",
    "category": "12. Câu Bị Động 被 / 叫 / 让",
    "name": "S + 差点儿 + 被 + Tác nhân + V",
    "tag": "Suýt chút nữa bị ai đó tác động",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "差点儿",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "被",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Tác nhân",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "差点儿 kết hợp câu bị động biểu thị nguy cơ suýt xảy ra.",
    "challenges": [
      {
        "vi": "Lúc nãy tôi suýt nữa bị chiếc xe máy quệt phải.",
        "hanziFull": "刚才我差点儿被摩托车撞倒。",
        "pinyinFull": "Gāngcái wǒ chàdiǎnr bèi mótuōchē zhuàng dǎo.",
        "slots": [
          {
            "label": "Thời gian & Tôi",
            "expected": "刚才我",
            "pinyin": "gāngcái wǒ",
            "isFixed": false
          },
          {
            "label": "Suýt chút nữa",
            "expected": "差点儿",
            "pinyin": "chàdiǎnr",
            "isFixed": true
          },
          {
            "label": "Bị xe máy va phải",
            "expected": "被摩托车撞倒",
            "pinyin": "bèi mótuōchē zhuàng dǎo",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "刚才我",
            "pinyin": "gāngcái wǒ",
            "vi": "Vừa nãy tôi"
          },
          {
            "hanzi": "被摩托车撞倒",
            "pinyin": "bèi mótuōchē zhuàng dǎo",
            "vi": "Bị xe máy đâm ngã"
          },
          {
            "hanzi": "骗了",
            "pinyin": "piàn le",
            "vi": "Lừa gạt"
          },
          {
            "hanzi": "发现了",
            "pinyin": "fāxiàn le",
            "vi": "Phát hiện"
          }
        ],
        "analysis": "差点儿 kết hợp câu bị động biểu thị nguy cơ suýt xảy ra."
      }
    ]
  },
  {
    "id": "cf_119",
    "catId": "cat_12",
    "category": "12. Câu Bị Động 被 / 叫 / 让",
    "name": "S + 已经被 + Tác nhân + V + 了",
    "tag": "Đã bị xử lý hoàn toàn",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "已经被",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Tác nhân",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "了",
        "type": "fixed"
      }
    ],
    "description": "已经 tăng cường tính hoàn thành của sự việc bị động.",
    "challenges": [
      {
        "vi": "Vấn đề kỹ thuật này đã được các chuyên gia khắc phục xong rồi.",
        "hanziFull": "这个技术问题已经被专家修复了。",
        "pinyinFull": "Zhège jìshù wèntí yǐjīng bèi zhuānjiā xiūfù le.",
        "slots": [
          {
            "label": "Vấn đề kỹ thuật",
            "expected": "这个技术问题",
            "pinyin": "zhège jìshù wèntí",
            "isFixed": false
          },
          {
            "label": "Đã bị/được",
            "expected": "已经被",
            "pinyin": "yǐjīng bèi",
            "isFixed": true
          },
          {
            "label": "Chuyên gia khắc phục",
            "expected": "专家修复了",
            "pinyin": "zhuānjiā xiūfù le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "这个技术问题",
            "pinyin": "zhège jìshù wèntí",
            "vi": "Vấn đề kỹ thuật này"
          },
          {
            "hanzi": "专家修复了",
            "pinyin": "zhuānjiā xiūfù le",
            "vi": "Chuyên gia khắc phục rồi"
          },
          {
            "hanzi": "解决了",
            "pinyin": "jiějué le",
            "vi": "Giải quyết rồi"
          },
          {
            "hanzi": "处理了",
            "pinyin": "chǔlǐ le",
            "vi": "Xử lý rồi"
          }
        ],
        "analysis": "已经 tăng cường tính hoàn thành của sự việc bị động."
      }
    ]
  },
  {
    "id": "cf_120",
    "catId": "cat_12",
    "category": "12. Câu Bị Động 被 / 叫 / 让",
    "name": "S + 会不会 + 被 + Tác nhân + V?",
    "tag": "Liệu có bị ai làm gì không?",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "会不会",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "被",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Tác nhân",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V?",
        "type": "var"
      }
    ],
    "description": "Dùng 会不会 kết hợp câu bị động để hỏi lo ngại khả năng xấu.",
    "challenges": [
      {
        "vi": "Hành lý để ở sảnh liệu có bị người khác cầm nhầm không?",
        "hanziFull": "行李放在大厅会不会被别人拿错？",
        "pinyinFull": "Xíngli fàng zài dàtīng huì bu huì bèi biérén ná cuò?",
        "slots": [
          {
            "label": "Hành lý để sảnh",
            "expected": "行李放在大厅",
            "pinyin": "xíngli fàng zài dàtīng",
            "isFixed": false
          },
          {
            "label": "Liệu có",
            "expected": "会不会",
            "pinyin": "huì bu huì",
            "isFixed": true
          },
          {
            "label": "Bị người khác cầm nhầm",
            "expected": "被别人拿错",
            "pinyin": "bèi biérén ná cuò",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "行李放在大厅",
            "pinyin": "xíngli fàng zài dàtīng",
            "vi": "Hành lý để ở sảnh"
          },
          {
            "hanzi": "被别人拿错",
            "pinyin": "bèi biérén ná cuò",
            "vi": "Bị ng khác cầm nhầm"
          },
          {
            "hanzi": "弄丢",
            "pinyin": "nòng diū",
            "vi": "Làm mất"
          },
          {
            "hanzi": "发现",
            "pinyin": "fāxiàn",
            "vi": "Phát hiện"
          }
        ],
        "analysis": "Dùng 会不会 kết hợp câu bị động để hỏi lo ngại khả năng xấu."
      }
    ]
  },
  {
    "id": "cf_121",
    "catId": "cat_13",
    "category": "13. Liên Từ Giả Thiết & Điều Kiện",
    "name": "如果 / 要是 + A + 就 + B",
    "tag": "Nếu A thì B (Giả thiết phổ biến)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "如果 / 要是",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "就",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "Nếu vế 1 dùng 如果 thì vế 2 dùng 就 để nối kết quả.",
    "challenges": [
      {
        "vi": "Nếu ngày mai trời mưa, chúng ta sẽ ở nhà đọc sách.",
        "hanziFull": "如果明天下雨，我们就在家看书。",
        "pinyinFull": "Rúguǒ míngtiān xià yǔ, wǒmen jiù zài jiā kàn shū.",
        "slots": [
          {
            "label": "Nếu",
            "expected": "如果",
            "pinyin": "rúguǒ",
            "isFixed": true
          },
          {
            "label": "Ngày mai mưa",
            "expected": "明天下雨",
            "pinyin": "míngtiān xià yǔ",
            "isFixed": false
          },
          {
            "label": "Thì ở nhà đọc sách",
            "expected": "我们就在家看书",
            "pinyin": "wǒmen jiù zài jiā kàn shū",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "明天下雨",
            "pinyin": "míngtiān xià yǔ",
            "vi": "Ngày mai trời mưa"
          },
          {
            "hanzi": "我们就在家看书",
            "pinyin": "wǒmen jiù zài jiā kàn shū",
            "vi": "Thì ở nhà đọc sách"
          },
          {
            "hanzi": "取消",
            "pinyin": "qǔxiāo",
            "vi": "Hủy bỏ"
          },
          {
            "hanzi": "出门",
            "pinyin": "chū mén",
            "vi": "Ra ngoài"
          }
        ],
        "analysis": "Nếu vế 1 dùng 如果 thì vế 2 dùng 就 để nối kết quả."
      }
    ]
  },
  {
    "id": "cf_122",
    "catId": "cat_13",
    "category": "13. Liên Từ Giả Thiết & Điều Kiện",
    "name": "只要 + Điều kiện + 就 + Kết quả",
    "tag": "Chỉ cần... là... (Điều kiện đủ)",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "只要",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Điều kiện",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "就",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả",
        "type": "var"
      }
    ],
    "description": "只要 đưa ra điều kiện tối thiểu là có thể đạt được kết quả mong muốn.",
    "challenges": [
      {
        "vi": "Chỉ cần mỗi ngày kiên trì luyện tập, bạn sẽ nói tốt.",
        "hanziFull": "只要每天坚持练习，你就能说好。",
        "pinyinFull": "Zhǐyào měitiān jiānchí liànxí, nǐ jiù néng shuō hǎo.",
        "slots": [
          {
            "label": "Chỉ cần",
            "expected": "只要",
            "pinyin": "zhǐyào",
            "isFixed": true
          },
          {
            "label": "Mỗi ngày kiên trì luyện",
            "expected": "每天坚持练习",
            "pinyin": "měitiān jiānchí liànxí",
            "isFixed": false
          },
          {
            "label": "Thì bạn sẽ nói tốt",
            "expected": "你就能说好",
            "pinyin": "nǐ jiù néng shuō hǎo",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "每天坚持练习",
            "pinyin": "měitiān jiānchí liànxí",
            "vi": "Mỗi ngày kiên trì luyện"
          },
          {
            "hanzi": "你就能说好",
            "pinyin": "nǐ jiù néng shuō hǎo",
            "vi": "Thì bạn sẽ nói tốt"
          },
          {
            "hanzi": "成功",
            "pinyin": "chénggōng",
            "vi": "Thành công"
          },
          {
            "hanzi": "进步",
            "pinyin": "jìnbù",
            "vi": "Tiến bộ"
          }
        ],
        "analysis": "只要 đưa ra điều kiện tối thiểu là có thể đạt được kết quả mong muốn."
      }
    ]
  },
  {
    "id": "cf_123",
    "catId": "cat_13",
    "category": "13. Liên Từ Giả Thiết & Điều Kiện",
    "name": "只有 + Điều kiện duy nhất + 才 + Kết quả",
    "tag": "Chỉ có... mới... (Điều kiện cần duy nhất)",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "只有",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Điều kiện duy nhất",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "才",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả",
        "type": "var"
      }
    ],
    "description": "只有 đi đôi với 才 để nhấn mạnh tính duy nhất bắt buộc của điều kiện.",
    "challenges": [
      {
        "vi": "Chỉ có nỗ lực không ngừng, ước mơ mới có thể thành hiện thực.",
        "hanziFull": "只有不断努力，梦想才会实现。",
        "pinyinFull": "Zhǐyǒu búduàn nǔlì, mèngxiǎng cái huì shíxiàn.",
        "slots": [
          {
            "label": "Chỉ có",
            "expected": "只有",
            "pinyin": "zhǐyǒu",
            "isFixed": true
          },
          {
            "label": "Không ngừng nỗ lực",
            "expected": "不断努力",
            "pinyin": "búduàn nǔlì",
            "isFixed": false
          },
          {
            "label": "Ước mơ mới thành hiện thực",
            "expected": "梦想才会实现",
            "pinyin": "mèngxiǎng cái huì shíxiàn",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "不断努力",
            "pinyin": "búduàn nǔlì",
            "vi": "Không ngừng nỗ lực"
          },
          {
            "hanzi": "梦想才会实现",
            "pinyin": "mèngxiǎng cái huì shíxiàn",
            "vi": "Ước mơ mới thành hiện thực"
          },
          {
            "hanzi": "能成功",
            "pinyin": "néng chénggōng",
            "vi": "Có thể thành công"
          },
          {
            "hanzi": "赢",
            "pinyin": "yíng",
            "vi": "Thắng"
          }
        ],
        "analysis": "只有 đi đôi với 才 để nhấn mạnh tính duy nhất bắt buộc của điều kiện."
      }
    ]
  },
  {
    "id": "cf_124",
    "catId": "cat_13",
    "category": "13. Liên Từ Giả Thiết & Điều Kiện",
    "name": "哪怕 / 即使 + A + 也 + B",
    "tag": "Cho dù / Ngay cả khi... cũng...",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "哪怕 / 即使",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "也",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "哪怕 / 即使 biểu thị sự nhượng bộ tột cùng ở vế điều kiện.",
    "challenges": [
      {
        "vi": "Cho dù công việc có khó khăn đến đâu, tôi cũng sẽ kiên trì.",
        "hanziFull": "哪怕工作再困难，我也要坚持下去。",
        "pinyinFull": "Nǎpà gōngzuò zài kùnnan, wǒ yě yào jiānchí xiàqù.",
        "slots": [
          {
            "label": "Cho dù",
            "expected": "哪怕",
            "pinyin": "nǎpà",
            "isFixed": true
          },
          {
            "label": "Công việc khó khăn thế nào",
            "expected": "工作再困难",
            "pinyin": "gōngzuò zài kùnnan",
            "isFixed": false
          },
          {
            "label": "Tôi cũng kiên trì tiếp",
            "expected": "我也要坚持下去",
            "pinyin": "wǒ yě yào jiānchí xiàqù",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "工作再困难",
            "pinyin": "gōngzuò zài kùnnan",
            "vi": "Công việc khó khăn"
          },
          {
            "hanzi": "我也要坚持下去",
            "pinyin": "wǒ yě yào jiānchí xiàqù",
            "vi": "Tôi cũng kiên trì tiếp"
          },
          {
            "hanzi": "不放弃",
            "pinyin": "bú fàngqì",
            "vi": "Ko từ bỏ"
          },
          {
            "hanzi": "努力",
            "pinyin": "nǔlì",
            "vi": "Nỗ lực"
          }
        ],
        "analysis": "哪怕 / 即使 biểu thị sự nhượng bộ tột cùng ở vế điều kiện."
      }
    ]
  },
  {
    "id": "cf_125",
    "catId": "cat_13",
    "category": "13. Liên Từ Giả Thiết & Điều Kiện",
    "name": "万一 + Tình huống xấu + 就 + Xử lý",
    "tag": "Lỡ như / Vạn nhất có chuyện xấu",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "万一",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Tình huống xấu",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "就",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Xử lý",
        "type": "var"
      }
    ],
    "description": "万一 chuẩn bị cho xác suất rủi ro bất ngờ.",
    "challenges": [
      {
        "vi": "Hãy mang theo chiếc ô dự phòng, lỡ như trời đổ mưa.",
        "hanziFull": "带把雨伞吧，万一下雨了呢。",
        "pinyinFull": "Dài bǎ yǔsǎn ba, wànyī xià yǔ le ne.",
        "slots": [
          {
            "label": "Mang theo ô đi",
            "expected": "带把雨伞吧",
            "pinyin": "dài bǎ yǔsǎn ba",
            "isFixed": false
          },
          {
            "label": "Lỡ như",
            "expected": "万一",
            "pinyin": "wànyī",
            "isFixed": true
          },
          {
            "label": "Trời mưa thì sao",
            "expected": "下雨了呢",
            "pinyin": "xià yǔ le ne",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "带把雨伞吧",
            "pinyin": "dài bǎ yǔsǎn ba",
            "vi": "Mang ô đi"
          },
          {
            "hanzi": "下雨了呢",
            "pinyin": "xià yǔ le ne",
            "vi": "Trời mưa thì sao"
          },
          {
            "hanzi": "生病",
            "pinyin": "shēngbìng",
            "vi": "Ốm đau"
          },
          {
            "hanzi": "堵车",
            "pinyin": "dǔchē",
            "vi": "Tắc đường"
          }
        ],
        "analysis": "万一 chuẩn bị cho xác suất rủi ro bất ngờ."
      }
    ]
  },
  {
    "id": "cf_126",
    "catId": "cat_13",
    "category": "13. Liên Từ Giả Thiết & Điều Kiện",
    "name": "要是...的话, S + 就...",
    "tag": "Nếu như mà... thì...",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "要是...的话, S",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "就...",
        "type": "fixed"
      }
    ],
    "description": "要是...的话 là dạng giả thiết khẩu ngữ quen thuộc nhất.",
    "challenges": [
      {
        "vi": "Nếu mà bạn rảnh thì cùng tôi đi siêu thị mua sắm nhé.",
        "hanziFull": "要是你有空的话，就跟我去超市逛逛。",
        "pinyinFull": "Yàoshi nǐ yǒu kòng dehuà, jiù gēn wǒ qù chāoshì guàngguang.",
        "slots": [
          {
            "label": "Nếu mà",
            "expected": "要是",
            "pinyin": "yàoshi",
            "isFixed": true
          },
          {
            "label": "Bạn rảnh thì",
            "expected": "你有空的话",
            "pinyin": "nǐ yǒu kòng dehuà",
            "isFixed": false
          },
          {
            "label": "Thì cùng tôi đi siêu thị",
            "expected": "就跟我去超市逛逛",
            "pinyin": "jiù gēn wǒ qù chāoshì guàngguang",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "你有空的话",
            "pinyin": "nǐ yǒu kòng dehuà",
            "vi": "Nếu bạn rảnh"
          },
          {
            "hanzi": "就跟我去超市逛逛",
            "pinyin": "jiù gēn wǒ qù chāoshì guàngguang",
            "vi": "Cùng tôi đi siêu thị"
          },
          {
            "hanzi": "吃饭",
            "pinyin": "chīfàn",
            "vi": "Ăn cơm"
          },
          {
            "hanzi": "看电影",
            "pinyin": "kàn diànyǐng",
            "vi": "Xem phim"
          }
        ],
        "analysis": "要是...的话 là dạng giả thiết khẩu ngữ quen thuộc nhất."
      }
    ]
  },
  {
    "id": "cf_127",
    "catId": "cat_13",
    "category": "13. Liên Từ Giả Thiết & Điều Kiện",
    "name": "无论 / 不管 + Thế nào + 都/也 + V",
    "tag": "Bất kể... đều...",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "无论 / 不管",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Thế nào",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "都/也",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "无论 đi kèm từ ngữ phiếm chỉ (什么, 怎么, 谁) và kết nối bằng 都.",
    "challenges": [
      {
        "vi": "Bất luận gặp phải trở ngại gì, chúng ta cũng không bỏ cuộc.",
        "hanziFull": "无论遇到什么困难，我们都不能放弃。",
        "pinyinFull": "Wúlùn yùdào shénme kùnnan, wǒmen dōu bù néng fàngqì.",
        "slots": [
          {
            "label": "Bất luận",
            "expected": "无论",
            "pinyin": "wúlùn",
            "isFixed": true
          },
          {
            "label": "Gặp khó khăn gì",
            "expected": "遇到什么困难",
            "pinyin": "yùdào shénme kùnnan",
            "isFixed": false
          },
          {
            "label": "Chúng ta đều ko từ bỏ",
            "expected": "我们都不能放弃",
            "pinyin": "wǒmen dōu bù néng fàngqì",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "遇到什么困难",
            "pinyin": "yùdào shénme kùnnan",
            "vi": "Gặp khó khăn gì"
          },
          {
            "hanzi": "Chúng ta đều ko từ bỏ",
            "pinyin": "wǒmen dōu bù néng fàngqì",
            "vi": "Chúng ta đều ko bỏ cuộc"
          },
          {
            "hanzi": "坚持",
            "pinyin": "jiānchí",
            "vi": "Kiên trì"
          },
          {
            "hanzi": "前进",
            "pinyin": "qiánjìn",
            "vi": "Tiến lên"
          }
        ],
        "analysis": "无论 đi kèm từ ngữ phiếm chỉ (什么, 怎么, 谁) và kết nối bằng 都."
      }
    ]
  },
  {
    "id": "cf_128",
    "catId": "cat_13",
    "category": "13. Liên Từ Giả Thiết & Điều Kiện",
    "name": "除非 + Điều kiện kiên quyết + 否则 + Hậu quả",
    "tag": "Trừ phi... nếu không thì...",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "除非",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Điều kiện kiên quyết",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "否则",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Hậu quả",
        "type": "var"
      }
    ],
    "description": "除非 chỉ giải pháp duy nhất để tránh hậu quả xấu 否则.",
    "challenges": [
      {
        "vi": "Trừ phi bạn đích thân giải thích, nếu không anh ấy sẽ không tha thứ đâu.",
        "hanziFull": "除非你亲自解释，否则他不会原谅你的。",
        "pinyinFull": "Chúfēi nǐ qīnzì jiěshì, fǒuzé tā bú huì yuánliàng nǐ de.",
        "slots": [
          {
            "label": "Trừ phi",
            "expected": "除非",
            "pinyin": "chúfēi",
            "isFixed": true
          },
          {
            "label": "Bạn đích thân giải thích",
            "expected": "你亲自解释",
            "pinyin": "nǐ qīnzì jiěshì",
            "isFixed": false
          },
          {
            "label": "Nếu không anh ấy ko tha thứ",
            "expected": "否则他不会原谅你的",
            "pinyin": "fǒuzé tā bú huì yuánliàng nǐ de",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "你亲自解释",
            "pinyin": "nǐ qīnzì jiěshì",
            "vi": "Bạn tự mình giải thích"
          },
          {
            "hanzi": "否则他不会原谅你的",
            "pinyin": "fǒuzé tā bú huì yuánliàng nǐ de",
            "vi": "Nếu ko a ấy ko tha thứ"
          },
          {
            "hanzi": "道歉",
            "pinyin": "dàoqiàn",
            "vi": "Xin lỗi"
          },
          {
            "hanzi": "退款",
            "pinyin": "tuìkuǎn",
            "vi": "Hoàn tiền"
          }
        ],
        "analysis": "除非 chỉ giải pháp duy nhất để tránh hậu quả xấu 否则."
      }
    ]
  },
  {
    "id": "cf_129",
    "catId": "cat_13",
    "category": "13. Liên Từ Giả Thiết & Điều Kiện",
    "name": "一旦 + Thời điểm xảy ra + 就 + Kết quả ngay",
    "tag": "Một khi đã... thì sẽ...",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "一旦",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Thời điểm xảy ra",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "就",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả ngay",
        "type": "var"
      }
    ],
    "description": "一旦 giả định sự việc một khi phát sinh sẽ kéo theo kết quả tất yếu.",
    "challenges": [
      {
        "vi": "Một khi đã hứa với người khác, bạn nhất định phải làm được.",
        "hanziFull": "一旦答应了别人，你就一定要做到。",
        "pinyinFull": "Yídàn dāying le biérén, nǐ jiù yídìng yào zuò dào.",
        "slots": [
          {
            "label": "Một khi",
            "expected": "一旦",
            "pinyin": "yídàn",
            "isFixed": true
          },
          {
            "label": "Đã hứa với người ta",
            "expected": "答应了别人",
            "pinyin": "dāying le biérén",
            "isFixed": false
          },
          {
            "label": "Thì nhất định phải làm đc",
            "expected": "你就一定要做到",
            "pinyin": "nǐ jiù yídìng yào zuò dào",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "答应了别人",
            "pinyin": "dāying le biérén",
            "vi": "Đã nhận lời ng khác"
          },
          {
            "hanzi": "你就一定要做到",
            "pinyin": "nǐ jiù yídìng yào zuò dào",
            "vi": "Bạn nhất định phải làm đc"
          },
          {
            "hanzi": "出发",
            "pinyin": "chūfā",
            "vi": "Xuất phát"
          },
          {
            "hanzi": "决定",
            "pinyin": "juédìng",
            "vi": "Quyết định"
          }
        ],
        "analysis": "一旦 giả định sự việc một khi phát sinh sẽ kéo theo kết quả tất yếu."
      }
    ]
  },
  {
    "id": "cf_130",
    "catId": "cat_13",
    "category": "13. Liên Từ Giả Thiết & Điều Kiện",
    "name": "假使 / 假若 + Giả định + 就 + Kết quả",
    "tag": "Giả sử / Ví thử như...",
    "level": "HSK 5",
    "diagram": [
      {
        "text": "假使 / 假若",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Giả định",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "就",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả",
        "type": "var"
      }
    ],
    "description": "假使 là văn phong trang trọng của 如果.",
    "challenges": [
      {
        "vi": "Giả sử thời gian có thể quay ngược lại, bạn sẽ chọn thế nào?",
        "hanziFull": "假使时间可以倒流，你会怎么选择？",
        "pinyinFull": "Jiǎshǐ shíjiān kěyǐ dàoliú, nǐ huì zěnme xuǎnzé?",
        "slots": [
          {
            "label": "Giả sử",
            "expected": "假使",
            "pinyin": "jiǎshǐ",
            "isFixed": true
          },
          {
            "label": "Thời gian có thể quay ngược",
            "expected": "时间可以倒流",
            "pinyin": "shíjiān kěyǐ dàoliú",
            "isFixed": false
          },
          {
            "label": "Bạn sẽ chọn thế nào",
            "expected": "你会怎么选择",
            "pinyin": "nǐ huì zěnme xuǎnzé",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "时间可以倒流",
            "pinyin": "shíjiān kěyǐ dàoliú",
            "vi": "Thời gian có thể quay ngược"
          },
          {
            "hanzi": "你会怎么选择",
            "pinyin": "nǐ huì zěnme xuǎnzé",
            "vi": "Bạn sẽ chọn thế nào"
          },
          {
            "hanzi": "后悔",
            "pinyin": "hòuhuǐ",
            "vi": "Hối hận"
          },
          {
            "hanzi": "改变",
            "pinyin": "gǎibiàn",
            "vi": "Thay đổi"
          }
        ],
        "analysis": "假使 là văn phong trang trọng của 如果."
      }
    ]
  },
  {
    "id": "cf_131",
    "catId": "cat_14",
    "category": "14. Liên Từ Nguyên Nhân - Kết Quả",
    "name": "因为 + Nguyên nhân + 所以 + Kết quả",
    "tag": "Bởi vì... cho nên...",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "因为",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Nguyên nhân",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "所以",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả",
        "type": "var"
      }
    ],
    "description": "Mẫu câu nhân quả cơ bản nhất trong tiếng Trung.",
    "challenges": [
      {
        "vi": "Bởi vì hôm nay tắc đường, cho nên tôi đến công ty muộn 10 phút.",
        "hanziFull": "因为今天路上堵车，所以我迟到了十分钟。",
        "pinyinFull": "Yīnwèi jīntiān lùshang dǔchē, suǒyǐ wǒ chídào le shí fēnzhōng.",
        "slots": [
          {
            "label": "Bởi vì",
            "expected": "因为",
            "pinyin": "yīnwèi",
            "isFixed": true
          },
          {
            "label": "Hôm nay tắc đường",
            "expected": "今天路上堵车",
            "pinyin": "jīntiān lùshang dǔchē",
            "isFixed": false
          },
          {
            "label": "Cho nên tôi muộn 10p",
            "expected": "所以我迟到了十分钟",
            "pinyin": "suǒyǐ wǒ chídào le shí fēnzhōng",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "今天路上堵车",
            "pinyin": "jīntiān lùshang dǔchē",
            "vi": "Hôm nay trên đường tắc xe"
          },
          {
            "hanzi": "所以我迟到了十分钟",
            "pinyin": "suǒyǐ wǒ chídào le shí fēnzhōng",
            "vi": "Cho nên tôi muộn 10p"
          },
          {
            "hanzi": "请假",
            "pinyin": "qǐngjià",
            "vi": "Xin nghỉ"
          },
          {
            "hanzi": "没去",
            "pinyin": "méi qù",
            "vi": "Ko đi"
          }
        ],
        "analysis": "Mẫu câu nhân quả cơ bản nhất trong tiếng Trung."
      }
    ]
  },
  {
    "id": "cf_132",
    "catId": "cat_14",
    "category": "14. Liên Từ Nguyên Nhân - Kết Quả",
    "name": "既然 + Sự thật đã rồi + 就 + Nên làm gì",
    "tag": "Đã... thì...",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "既然",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Sự thật đã rồi",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "就",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Nên làm gì",
        "type": "var"
      }
    ],
    "description": "既然 đưa ra tiền đề thực tế đã được xác lập.",
    "challenges": [
      {
        "vi": "Đã đến Bắc Kinh rồi, thì nhất định phải đi tham quan Vạn Lý Trường Thành.",
        "hanziFull": "既然来到北京了，就一定要去长城看看。",
        "pinyinFull": "Jìrán lái dào Běijīng le, jiù yídìng yào qù Chángchéng kànkan.",
        "slots": [
          {
            "label": "Đã",
            "expected": "既然",
            "pinyin": "jìrán",
            "isFixed": true
          },
          {
            "label": "Đến Bắc Kinh rồi",
            "expected": "来到北京了",
            "pinyin": "lái dào Běijīng le",
            "isFixed": false
          },
          {
            "label": "Thì nhất định đi Trường Thành",
            "expected": "就一定要去长城看看",
            "pinyin": "jiù yídìng yào qù Chángchéng kànkan",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "来到北京了",
            "pinyin": "lái dào Běijīng le",
            "vi": "Đã đến Bắc Kinh rồi"
          },
          {
            "hanzi": "就一定要去长城看看",
            "pinyin": "jiù yídìng yào qù Chángchéng kànkan",
            "vi": "Thì nhất định đi Trường Thành"
          },
          {
            "hanzi": "去故宫",
            "pinyin": "qù Gùgōng",
            "vi": "Đi Cố Cung"
          },
          {
            "hanzi": "吃烤鸭",
            "pinyin": "chī kǎoyā",
            "vi": "Ăn vịt quay"
          }
        ],
        "analysis": "既然 đưa ra tiền đề thực tế đã được xác lập."
      }
    ]
  },
  {
    "id": "cf_133",
    "catId": "cat_14",
    "category": "14. Liên Từ Nguyên Nhân - Kết Quả",
    "name": "之所以 + Kết quả + 是因为 + Nguyên nhân",
    "tag": "Sở dĩ... là bởi vì...",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "之所以",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "是因为",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Nguyên nhân",
        "type": "var"
      }
    ],
    "description": "Đảo kết quả lên trước để nhấn mạnh nguyên nhân đằng sau.",
    "challenges": [
      {
        "vi": "Sở dĩ anh ấy tiến bộ nhanh như vậy là vì ngày nào cũng chăm chỉ luyện nói.",
        "hanziFull": "他之所以进步这么快，是因为每天努力练口语。",
        "pinyinFull": "Tā zhī suǒyǐ jìnbù zhènme kuài, shì yīnwèi měitiān nǔlì liàn kǒuyǔ.",
        "slots": [
          {
            "label": "Sở dĩ",
            "expected": "之所以",
            "pinyin": "zhī suǒyǐ",
            "isFixed": true
          },
          {
            "label": "Tiến bộ nhanh như vậy",
            "expected": "进步这么快",
            "pinyin": "jìnbù zhènme kuài",
            "isFixed": false
          },
          {
            "label": "Là vì chăm luyện nói",
            "expected": "是因为每天努力练口语",
            "pinyin": "shì yīnwèi měitiān nǔlì liàn kǒuyǔ",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "进步这么快",
            "pinyin": "jìnbù zhènme kuài",
            "vi": "Tiến bộ nhanh thế"
          },
          {
            "hanzi": "是因为每天努力练口语",
            "pinyin": "shì yīnwèi měitiān nǔlì liàn kǒuyǔ",
            "vi": "Là vì chăm luyện khẩu ngữ"
          },
          {
            "hanzi": "聪明",
            "pinyin": "cōngmíng",
            "vi": "Thông minh"
          },
          {
            "hanzi": "勤奋",
            "pinyin": "qínfèn",
            "vi": "Cần cù"
          }
        ],
        "analysis": "Đảo kết quả lên trước để nhấn mạnh nguyên nhân đằng sau."
      }
    ]
  },
  {
    "id": "cf_134",
    "catId": "cat_14",
    "category": "14. Liên Từ Nguyên Nhân - Kết Quả",
    "name": "由于 + Lý do khách quan + 因此 / 所以 + Kết quả",
    "tag": "Do... vì thế... (Văn viết)",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "由于",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Lý do khách quan",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "因此 / 所以",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả",
        "type": "var"
      }
    ],
    "description": "由于 mang sắc thái khách quan, trang trọng hơn 因为.",
    "challenges": [
      {
        "vi": "Do điều kiện thời tiết xấu, vì vậy chuyến bay buộc phải hoãn lại.",
        "hanziFull": "由于天气恶劣，因此航班不得不延误。",
        "pinyinFull": "Yóuyú tiānqì èliè, yīncǐ hángbān bùdébù yánwù.",
        "slots": [
          {
            "label": "Do",
            "expected": "由于",
            "pinyin": "yóuyú",
            "isFixed": true
          },
          {
            "label": "Thời tiết xấu",
            "expected": "天气恶劣",
            "pinyin": "tiānqì èliè",
            "isFixed": false
          },
          {
            "label": "Vì thế chuyến bay bị hoãn",
            "expected": "因此航班不得不延误",
            "pinyin": "yīncǐ hángbān bùdébù yánwù",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "天气恶劣",
            "pinyin": "tiānqì èliè",
            "vi": "Thời tiết khắc nghiệt"
          },
          {
            "hanzi": "因此航班不得不延误",
            "pinyin": "yīncǐ hángbān bùdébù yánwù",
            "vi": "Vì thế chuyến bay hoãn"
          },
          {
            "hanzi": "取消",
            "pinyin": "qǔxiāo",
            "vi": "Hủy"
          },
          {
            "hanzi": "提前",
            "pinyin": "tíqián",
            "vi": "Sớm hơn"
          }
        ],
        "analysis": "由于 mang sắc thái khách quan, trang trọng hơn 因为."
      }
    ]
  },
  {
    "id": "cf_135",
    "catId": "cat_14",
    "category": "14. Liên Từ Nguyên Nhân - Kết Quả",
    "name": "为了 + Mục đích + S + V",
    "tag": "Vì / Để đạt được mục đích gì",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "为了",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Mục đích",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "为了 đứng đầu câu để nêu bật mục đích hành động.",
    "challenges": [
      {
        "vi": "Để nâng cao khả năng giao tiếp, tôi luyện nói chuyện với người bản xứ mỗi ngày.",
        "hanziFull": "为了提高口语能力，我每天跟本地人练习。",
        "pinyinFull": "Wèile tígāo kǒuyǔ nénglì, wǒ měitiān gēn běndìrén liànxí.",
        "slots": [
          {
            "label": "Để",
            "expected": "为了",
            "pinyin": "wèile",
            "isFixed": true
          },
          {
            "label": "Nâng cao khẩu ngữ",
            "expected": "提高口语能力",
            "pinyin": "tígāo kǒuyǔ nénglì",
            "isFixed": false
          },
          {
            "label": "Tôi mỗi ngày luyện",
            "expected": "我每天跟本地人练习",
            "pinyin": "wǒ měitiān gēn běndìrén liànxí",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "提高口语能力",
            "pinyin": "tígāo kǒuyǔ nénglì",
            "vi": "Nâng cao khẩu ngữ"
          },
          {
            "hanzi": "我每天跟本地人练习",
            "pinyin": "wǒ měitiān gēn běndìrén liànxí",
            "vi": "Tôi luyện mỗi ngày"
          },
          {
            "hanzi": "考HSK",
            "pinyin": "kǎo HSK",
            "vi": "Thi HSK"
          },
          {
            "hanzi": "留学",
            "pinyin": "liúxué",
            "vi": "Du học"
          }
        ],
        "analysis": "为了 đứng đầu câu để nêu bật mục đích hành động."
      }
    ]
  },
  {
    "id": "cf_136",
    "catId": "cat_14",
    "category": "14. Liên Từ Nguyên Nhân - Kết Quả",
    "name": "以便 / 以免 + Hậu quả",
    "tag": "Để tiện... / Để tránh...",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "以便 / 以免",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Hậu quả",
        "type": "var"
      }
    ],
    "description": "以便 chỉ sự thuận tiện, 以免 phòng ngừa hậu quả bất lợi.",
    "challenges": [
      {
        "vi": "Hãy lưu số điện thoại này vào danh bạ để tiện liên lạc sau này.",
        "hanziFull": "请把这个号码存好，以便以后联系。",
        "pinyinFull": "Qǐng bǎ zhège hàomǎ cún hǎo, yǐbiàn yǐhòu liánxì.",
        "slots": [
          {
            "label": "Lưu số điện thoại này",
            "expected": "请把这个号码存好",
            "pinyin": "qǐng bǎ zhège hàomǎ cún hǎo",
            "isFixed": false
          },
          {
            "label": "Để tiện liên lạc sau",
            "expected": "以便以后联系",
            "pinyin": "yǐbiàn yǐhòu liánxì",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "请把这个号码存好",
            "pinyin": "qǐng bǎ zhège hàomǎ cún hǎo",
            "vi": "Hãy lưu số này"
          },
          {
            "hanzi": "以便以后联系",
            "pinyin": "yǐbiàn yǐhòu liánxì",
            "vi": "Để tiện liên lạc sau"
          },
          {
            "hanzi": "以免忘了",
            "pinyin": "yǐmiǎn wàng le",
            "vi": "Để tránh quên"
          },
          {
            "hanzi": "方便",
            "pinyin": "fāngbiàn",
            "vi": "Thuận tiện"
          }
        ],
        "analysis": "以便 chỉ sự thuận tiện, 以免 phòng ngừa hậu quả bất lợi."
      }
    ]
  },
  {
    "id": "cf_137",
    "catId": "cat_14",
    "category": "14. Liên Từ Nguyên Nhân - Kết Quả",
    "name": "既然如此, 那就 + Hành động",
    "tag": "Đã như vậy thì...",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "既然如此, 那就",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Hành động",
        "type": "var"
      }
    ],
    "description": "既然如此 tiếp nhận tình thế thực tế để chốt quyết định mới.",
    "challenges": [
      {
        "vi": "Đã như vậy thì chúng ta đổi sang phương án dự phòng đi.",
        "hanziFull": "既然如此，那我们就改用备用方案吧。",
        "pinyinFull": "Jìrán rúcǐ, nà wǒmen jiù gǎi yòng bèiyòng fāng'àn ba.",
        "slots": [
          {
            "label": "Đã như vậy",
            "expected": "既然如此",
            "pinyin": "jìrán rúcǐ",
            "isFixed": true
          },
          {
            "label": "Thì chúng ta dùng phương án dự phòng",
            "expected": "那我们就改用备用方案吧",
            "pinyin": "nà wǒmen jiù gǎi yòng bèiyòng fāng'àn ba",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "那我们就改用备用方案吧",
            "pinyin": "nà wǒmen jiù gǎi yòng bèiyòng fāng'àn ba",
            "vi": "Thì dùng phương án dự phòng"
          },
          {
            "hanzi": "取消",
            "pinyin": "qǔxiāo",
            "vi": "Hủy bỏ"
          },
          {
            "hanzi": "出发",
            "pinyin": "chūfā",
            "vi": "Xuất phát"
          },
          {
            "hanzi": "延期",
            "pinyin": "yánqī",
            "vi": "Hoãn"
          }
        ],
        "analysis": "既然如此 tiếp nhận tình thế thực tế để chốt quyết định mới."
      }
    ]
  },
  {
    "id": "cf_138",
    "catId": "cat_14",
    "category": "14. Liên Từ Nguyên Nhân - Kết Quả",
    "name": "正因为 + Lý do đặc biệt + 才 + Kết quả",
    "tag": "Chính vì... mới...",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "正因为",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Lý do đặc biệt",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "才",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả",
        "type": "var"
      }
    ],
    "description": "正因为...才 nhấn mạnh nguyên nhân mang tính quyết định cốt lõi.",
    "challenges": [
      {
        "vi": "Chính vì có sự giúp đỡ tận tình của bạn, tôi mới hoàn thành suôn sẻ được.",
        "hanziFull": "正因为有你的热心帮助，我才顺利完成。",
        "pinyinFull": "Zhèng yīnwèi yǒu nǐ de rèxīn bāngzhù, wǒ cái shùnlì wánchéng.",
        "slots": [
          {
            "label": "Chính vì có bạn giúp",
            "expected": "正因为有你的热心帮助",
            "pinyin": "zhèng yīnwèi yǒu nǐ de rèxīn bāngzhù",
            "isFixed": false
          },
          {
            "label": "Tôi mới hoàn thành tốt",
            "expected": "我才顺利完成",
            "pinyin": "wǒ cái shùnlì wánchéng",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "正因为有你的热心帮助",
            "pinyin": "zhèng yīnwèi yǒu nǐ de rèxīn bāngzhù",
            "vi": "Chính vì có bạn nhiệt tình giúp"
          },
          {
            "hanzi": "我才顺利完成",
            "pinyin": "wǒ cái shùnlì wánchéng",
            "vi": "Tôi mới hoàn thành tốt"
          },
          {
            "hanzi": "成功",
            "pinyin": "chénggōng",
            "vi": "Thành công"
          },
          {
            "hanzi": "获奖",
            "pinyin": "huòjiǎng",
            "vi": "Đoạt giải"
          }
        ],
        "analysis": "正因为...才 nhấn mạnh nguyên nhân mang tính quyết định cốt lõi."
      }
    ]
  },
  {
    "id": "cf_139",
    "catId": "cat_14",
    "category": "14. Liên Từ Nguyên Nhân - Kết Quả",
    "name": "多亏 / 幸亏 + Yếu tố may mắn + 不然 + Hậu quả",
    "tag": "May mà... nếu không thì...",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "多亏 / 幸亏",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Yếu tố may mắn",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "不然",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Hậu quả",
        "type": "var"
      }
    ],
    "description": "多亏 / 幸亏 biểu thị cảm xúc biết ơn trước sự may mắn.",
    "challenges": [
      {
        "vi": "May mà bạn nhắc nhở kịp thời, nếu không tôi đã quên mang hộ chiếu rồi.",
        "hanziFull": "多亏你及时提醒，不然我就忘了带护照了。",
        "pinyinFull": "Duōkuī nǐ jíshí tíxǐng, bùrán wǒ jiù wàng le dài hùzhào le.",
        "slots": [
          {
            "label": "May mà bạn nhắc",
            "expected": "多亏你及时提醒",
            "pinyin": "duōkuī nǐ jíshí tíxǐng",
            "isFixed": false
          },
          {
            "label": "Nếu ko tôi quên hộ chiếu",
            "expected": "不然我就忘了带护照了",
            "pinyin": "bùrán wǒ jiù wàng le dài hùzhào le",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "多亏你及时提醒",
            "pinyin": "duōkuī nǐ jíshí tíxǐng",
            "vi": "May mà bạn nhắc kịp"
          },
          {
            "hanzi": "不然我就忘了带护照了",
            "pinyin": "bùrán wǒ jiù wàng le dài hùzhào le",
            "vi": "Nếu ko tôi quên hộ chiếu"
          },
          {
            "hanzi": "迟到了",
            "pinyin": "chídào le",
            "vi": "Đã muộn"
          },
          {
            "hanzi": "丢了",
            "pinyin": "diū le",
            "vi": "Đã mất"
          }
        ],
        "analysis": "多亏 / 幸亏 biểu thị cảm xúc biết ơn trước sự may mắn."
      }
    ]
  },
  {
    "id": "cf_140",
    "catId": "cat_14",
    "category": "14. Liên Từ Nguyên Nhân - Kết Quả",
    "name": "既然已经 + V + 了, 就 + B",
    "tag": "Một khi đã làm rồi thì chấp nhận",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "既然已经",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "了, 就",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "既然已经...就 đối diện với sự thật không thể đảo ngược.",
    "challenges": [
      {
        "vi": "Chuyện cũng đã xảy ra rồi, chúng ta đừng tự trách mình nữa.",
        "hanziFull": "事情既然已经发生了，我们就别再自责了。",
        "pinyinFull": "Shìqing jìrán yǐjīng fāshēng le, wǒmen jiù bié zài zìzé le.",
        "slots": [
          {
            "label": "Chuyện đã xảy ra rồi",
            "expected": "事情既然已经发生了",
            "pinyin": "shìqing jìrán yǐjīng fāshēng le",
            "isFixed": false
          },
          {
            "label": "Chúng ta đừng tự trách nữa",
            "expected": "我们就别再自责了",
            "pinyin": "wǒmen jiù bié zài zìzé le",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "事情既然已经发生了",
            "pinyin": "shìqing jìrán yǐjīng fāshēng le",
            "vi": "Chuyện đã xảy ra rồi"
          },
          {
            "hanzi": "我们就别再自责了",
            "pinyin": "wǒmen jiù bié zài zìzé le",
            "vi": "Đừng tự trách nữa"
          },
          {
            "hanzi": "想办法",
            "pinyin": "xiǎng bànfǎ",
            "vi": "Nghĩ cách"
          },
          {
            "hanzi": "面对",
            "pinyin": "miànduì",
            "vi": "Đối mặt"
          }
        ],
        "analysis": "既然已经...就 đối diện với sự thật không thể đảo ngược."
      }
    ]
  },
  {
    "id": "cf_141",
    "catId": "cat_15",
    "category": "15. Liên Từ Chuyển Ngoặt & Nhượng Bộ",
    "name": "虽然 + Thực tế A + 但是 / 可是 + Chuyển ngoặt B",
    "tag": "Tuy... nhưng...",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "虽然",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Thực tế A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "但是 / 可是",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Chuyển ngoặt B",
        "type": "var"
      }
    ],
    "description": "Cặp liên từ chuyển ngoặt thông dụng nhất trong tiếng Trung.",
    "challenges": [
      {
        "vi": "Tuy công việc này rất vất vả, nhưng tôi học hỏi được rất nhiều điều bổ ích.",
        "hanziFull": "虽然这份工作很辛苦，但是我学到了很多有用的东西。",
        "pinyinFull": "Suīrán zhè fèn gōngzuò hěn xīnkǔ, dànshì wǒ xué dào le hěn duō yǒuyòng de dōngxi.",
        "slots": [
          {
            "label": "Tuy",
            "expected": "虽然",
            "pinyin": "suīrán",
            "isFixed": true
          },
          {
            "label": "Công việc vất vả",
            "expected": "这份工作很辛苦",
            "pinyin": "zhè fèn gōngzuò hěn xīnkǔ",
            "isFixed": false
          },
          {
            "label": "Nhưng",
            "expected": "但是",
            "pinyin": "dànshì",
            "isFixed": true
          },
          {
            "label": "Học đc nhiều thứ",
            "expected": "我学到了很多有用的东西",
            "pinyin": "wǒ xué dào le hěn duō yǒuyòng de dōngxi",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "这份工作很辛苦",
            "pinyin": "zhè fèn gōngzuò hěn xīnkǔ",
            "vi": "Công việc này vất vả"
          },
          {
            "hanzi": "我学到了很多有用的东西",
            "pinyin": "wǒ xué dào le hěn duō yǒuyòng de dōngxi",
            "vi": "Tôi học đc nhiều điều"
          },
          {
            "hanzi": "很高兴",
            "pinyin": "hěn gāoxìng",
            "vi": "Rất vui"
          },
          {
            "hanzi": "值得",
            "pinyin": "zhíde",
            "vi": "Đáng giá"
          }
        ],
        "analysis": "Cặp liên từ chuyển ngoặt thông dụng nhất trong tiếng Trung."
      }
    ]
  },
  {
    "id": "cf_142",
    "catId": "cat_15",
    "category": "15. Liên Từ Chuyển Ngoặt & Nhượng Bộ",
    "name": "尽管 + Khó khăn A + 还是 / 仍然 + Cố gắng B",
    "tag": "Dù cho... vẫn...",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "尽管",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Khó khăn A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "还是 / 仍然",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Cố gắng B",
        "type": "var"
      }
    ],
    "description": "尽管 nhấn mạnh sự kiên trì vượt qua nghịch cảnh.",
    "challenges": [
      {
        "vi": "Dù trời đổ mưa to, anh ấy vẫn kiên quyết đến đúng giờ.",
        "hanziFull": "尽管外面下着大雨，他还是按时到了。",
        "pinyinFull": "Jǐnguǎn wàimiàn xià zhe dàyǔ, tā háishì ànshí dào le.",
        "slots": [
          {
            "label": "Dù cho",
            "expected": "尽管",
            "pinyin": "jǐnguǎn",
            "isFixed": true
          },
          {
            "label": "Ngoài trời mưa to",
            "expected": "外面下着大雨",
            "pinyin": "wàimiàn xià zhe dàyǔ",
            "isFixed": false
          },
          {
            "label": "Anh ấy vẫn đến đúng giờ",
            "expected": "他还是按时到了",
            "pinyin": "tā háishì ànshí dào le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "外面下着大雨",
            "pinyin": "wàimiàn xià zhe dàyǔ",
            "vi": "Ngoài trời mưa to"
          },
          {
            "hanzi": "他还是按时到了",
            "pinyin": "tā háishì ànshí dào le",
            "vi": "Anh ấy vẫn đến đúng giờ"
          },
          {
            "hanzi": "去了",
            "pinyin": "qù le",
            "vi": "Đã đi"
          },
          {
            "hanzi": "迟到了",
            "pinyin": "chídào le",
            "vi": "Bị muộn"
          }
        ],
        "analysis": "尽管 nhấn mạnh sự kiên trì vượt qua nghịch cảnh."
      }
    ]
  },
  {
    "id": "cf_143",
    "catId": "cat_15",
    "category": "15. Liên Từ Chuyển Ngoặt & Nhượng Bộ",
    "name": "A, 不过 + B",
    "tag": "Có điều / Nhưng mà (Chuyển ngoặt nhẹ nhàng)",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "A, 不过",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "不过 biểu thị sự bổ sung ý kiến mang tính trung hòa.",
    "challenges": [
      {
        "vi": "Món ăn này mùi vị rất ngon, có điều hơi cay một chút.",
        "hanziFull": "这道菜味道很不错，不过有点儿辣。",
        "pinyinFull": "Zhè dào cài wèidào hěn búcuò, búguò yǒudiǎnr là.",
        "slots": [
          {
            "label": "Món này ngon",
            "expected": "这道菜味道很不错",
            "pinyin": "zhè dào cài wèidào hěn búcuò",
            "isFixed": false
          },
          {
            "label": "Có điều",
            "expected": "不过",
            "pinyin": "búguò",
            "isFixed": true
          },
          {
            "label": "Hơi cay một chút",
            "expected": "有点儿辣",
            "pinyin": "yǒudiǎnr là",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "这道菜味道很不错",
            "pinyin": "zhè dào cài wèidào hěn búcuò",
            "vi": "Món này vị ngon"
          },
          {
            "hanzi": "有点儿辣",
            "pinyin": "yǒudiǎnr là",
            "vi": "Hơi cay một chút"
          },
          {
            "hanzi": "贵",
            "pinyin": "guì",
            "vi": "Đắt"
          },
          {
            "hanzi": "咸",
            "pinyin": "xián",
            "vi": "Mặn"
          }
        ],
        "analysis": "不过 biểu thị sự bổ sung ý kiến mang tính trung hòa."
      }
    ]
  },
  {
    "id": "cf_144",
    "catId": "cat_15",
    "category": "15. Liên Từ Chuyển Ngoặt & Nhượng Bộ",
    "name": "A, 只是 / 就是 + B",
    "tag": "Chỉ là... / Có điều...",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "A, 只是 / 就是",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "只是 chỉ ra khiếm khuyết nhỏ duy nhất của đối tượng.",
    "challenges": [
      {
        "vi": "Căn nhà này ở đâu cũng tốt, chỉ là cách bến tàu hơi xa một chút.",
        "hanziFull": "这套房子哪儿都好，只是离车站有点儿远。",
        "pinyinFull": "Zhè tào fángzi nǎr dōu hǎo, zhǐshì lí chēzhàn yǒudiǎnr yuǎn.",
        "slots": [
          {
            "label": "Nhà này đâu cũng tốt",
            "expected": "这套房子哪儿都好",
            "pinyin": "zhè tào fángzi nǎr dōu hǎo",
            "isFixed": false
          },
          {
            "label": "Chỉ là",
            "expected": "只是",
            "pinyin": "zhǐshì",
            "isFixed": true
          },
          {
            "label": "Cách bến xe hơi xa",
            "expected": "离车站有点儿远",
            "pinyin": "lí chēzhàn yǒudiǎnr yuǎn",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "这套房子哪儿都好",
            "pinyin": "zhè tào fángzi nǎr dōu hǎo",
            "vi": "Nhà này đâu cũng tốt"
          },
          {
            "hanzi": "离车站有点儿远",
            "pinyin": "lí chēzhàn yǒudiǎnr yuǎn",
            "vi": "Cách bến xe hơi xa"
          },
          {
            "hanzi": "贵",
            "pinyin": "guì",
            "vi": "Đắt"
          },
          {
            "hanzi": "小",
            "pinyin": "xiǎo",
            "vi": "Nhỏ"
          }
        ],
        "analysis": "只是 chỉ ra khiếm khuyết nhỏ duy nhất của đối tượng."
      }
    ]
  },
  {
    "id": "cf_145",
    "catId": "cat_15",
    "category": "15. Liên Từ Chuyển Ngoặt & Nhượng Bộ",
    "name": "固然 + A + 但 + B",
    "tag": "Dẫu rằng... nhưng mà... (Thừa nhận khách quan)",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "固然",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "但",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "固然 thừa nhận một vế sự thật trước khi nhấn mạnh vế trọng yếu hơn.",
    "challenges": [
      {
        "vi": "Tiền bạc dẫu quan trọng, nhưng sức khỏe lại càng đáng quý hơn.",
        "hanziFull": "金钱固然重要，但健康更加可贵。",
        "pinyinFull": "Jīnqián gùrán zhòngyào, dàn jiànkāng gèngjiā kěguì.",
        "slots": [
          {
            "label": "Tiền dẫu quan trọng",
            "expected": "金钱固然重要",
            "pinyin": "jīnqián gùrán zhòngyào",
            "isFixed": false
          },
          {
            "label": "Nhưng sức khỏe quý hơn",
            "expected": "但健康更加可贵",
            "pinyin": "dàn jiànkāng gèngjiā kěguì",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "金钱固然重要",
            "pinyin": "jīnqián gùrán zhòngyào",
            "vi": "Tiền dẫu quan trọng"
          },
          {
            "hanzi": "但健康更加可贵",
            "pinyin": "dàn jiànkāng gèngjiā kěguì",
            "vi": "Nhưng sức khỏe quý hơn"
          },
          {
            "hanzi": "生命",
            "pinyin": "shēngmìng",
            "vi": "Tính mạng"
          },
          {
            "hanzi": "时间",
            "pinyin": "shíjiān",
            "vi": "Thời gian"
          }
        ],
        "analysis": "固然 thừa nhận một vế sự thật trước khi nhấn mạnh vế trọng yếu hơn."
      }
    ]
  },
  {
    "id": "cf_146",
    "catId": "cat_15",
    "category": "15. Liên Từ Chuyển Ngoặt & Nhượng Bộ",
    "name": "即使 + A + 还 + B",
    "tag": "Ngay cả khi... vẫn...",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "即使",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "还",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "即使 đưa ra trường hợp ngoại lệ để chứng minh tính kiên định.",
    "challenges": [
      {
        "vi": "Ngay cả vào ngày nghỉ, anh ấy vẫn giữ thói quen dậy sớm tập thể dục.",
        "hanziFull": "即使在周末，他也还保持着早起的习惯。",
        "pinyinFull": "Jíshǐ zài zhōumò, tā yě hái bǎochí zhe zǎoqǐ de xíguàn.",
        "slots": [
          {
            "label": "Ngay cả cuối tuần",
            "expected": "即使在周末",
            "pinyin": "jíshǐ zài zhōumò",
            "isFixed": false
          },
          {
            "label": "Anh ấy vẫn giữ dậy sớm",
            "expected": "他也还保持着早起的习惯",
            "pinyin": "tā yě hái bǎochí zhe zǎoqǐ de xíguàn",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "即使在周末",
            "pinyin": "jíshǐ zài zhōumò",
            "vi": "Ngay cả cuối tuần"
          },
          {
            "hanzi": "他也还保持着早起的习惯",
            "pinyin": "tā yě hái bǎochí zhe zǎoqǐ de xíguàn",
            "vi": "Vẫn giữ thói quen dậy sớm"
          },
          {
            "hanzi": "工作",
            "pinyin": "gōngzuò",
            "vi": "Làm việc"
          },
          {
            "hanzi": "跑步",
            "pinyin": "pǎobù",
            "vi": "Chạy bộ"
          }
        ],
        "analysis": "即使 đưa ra trường hợp ngoại lệ để chứng minh tính kiên định."
      }
    ]
  },
  {
    "id": "cf_147",
    "catId": "cat_15",
    "category": "15. Liên Từ Chuyển Ngoặt & Nhượng Bộ",
    "name": "虽然话是这么说, 可是 + B",
    "tag": "Tuy nói vậy nhưng thực tế...",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "虽然话是这么说, 可是",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "Thành ngữ khẩu ngữ biểu thị khoảng cách giữa lý thuyết và thực hành.",
    "challenges": [
      {
        "vi": "Tuy nói là vậy, nhưng bắt tay vào làm đâu có dễ dàng như thế.",
        "hanziFull": "虽然话是这么说，可是做起来并不容易。",
        "pinyinFull": "Suīrán huà shì zhènme shuō, kěshì zuò qǐlái bìng bù róngyì.",
        "slots": [
          {
            "label": "Tuy nói là vậy",
            "expected": "虽然话是这么说",
            "pinyin": "suīrán huà shì zhènme shuō",
            "isFixed": false
          },
          {
            "label": "Nhưng làm ko dễ",
            "expected": "可是做起来并不容易",
            "pinyin": "kěshì zuò qǐlái bìng bù róngyì",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "虽然话是这么说",
            "pinyin": "suīrán huà shì zhènme shuō",
            "vi": "Tuy nói vậy"
          },
          {
            "hanzi": "可是做起来并不容易",
            "pinyin": "kěshì zuò qǐlái bìng bù róngyì",
            "vi": "Nhưng làm ko dễ đâu"
          },
          {
            "hanzi": "很难",
            "pinyin": "hěn nán",
            "vi": "Rất khó"
          },
          {
            "hanzi": "简单",
            "pinyin": "jiǎndān",
            "vi": "Đơn giản"
          }
        ],
        "analysis": "Thành ngữ khẩu ngữ biểu thị khoảng cách giữa lý thuyết và thực hành."
      }
    ]
  },
  {
    "id": "cf_148",
    "catId": "cat_15",
    "category": "15. Liên Từ Chuyển Ngoặt & Nhượng Bộ",
    "name": "表面上...实际上...",
    "tag": "Bề ngoài thì... thực chất thì...",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "表面上...实际上...",
        "type": "fixed"
      }
    ],
    "description": "Đối chiếu sự tương phản sâu sắc giữa hiện tượng và bản chất.",
    "challenges": [
      {
        "vi": "Bề ngoài anh ấy có vẻ điềm tĩnh, thực chất trong lòng rất căng thẳng.",
        "hanziFull": "他表面上看很平静，实际上内心非常紧张。",
        "pinyinFull": "Tā biǎomiàn shang kàn hěn píngjìng, shíjì shang nèixīn fēicháng jǐnzhāng.",
        "slots": [
          {
            "label": "Bề ngoài bình tĩnh",
            "expected": "他表面上看很平静",
            "pinyin": "tā biǎomiàn shang kàn hěn píngjìng",
            "isFixed": false
          },
          {
            "label": "Thực chất rất căng thẳng",
            "expected": "实际上内心非常紧张",
            "pinyin": "shíjì shang nèixīn fēicháng jǐnzhāng",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "他表面上看很平静",
            "pinyin": "tā biǎomiàn shang kàn hěn píngjìng",
            "vi": "Bề ngoài trông bình tĩnh"
          },
          {
            "hanzi": "实际上内心非常紧张",
            "pinyin": "shíjì shang nèixīn fēicháng jǐnzhāng",
            "vi": "Thực chất trong lòng rất căng thẳng"
          },
          {
            "hanzi": "高兴",
            "pinyin": "gāoxìng",
            "vi": "Vui"
          },
          {
            "hanzi": "害怕",
            "pinyin": "hàipà",
            "vi": "Sợ hãi"
          }
        ],
        "analysis": "Đối chiếu sự tương phản sâu sắc giữa hiện tượng và bản chất."
      }
    ]
  },
  {
    "id": "cf_149",
    "catId": "cat_15",
    "category": "15. Liên Từ Chuyển Ngoặt & Nhượng Bộ",
    "name": "一方面...但另一方面...",
    "tag": "Một mặt... nhưng mặt khác...",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "一方面...但另一方面...",
        "type": "fixed"
      }
    ],
    "description": "Thể hiện tâm trạng mâu thuẫn giằng xé giữa hai sự lựa chọn.",
    "challenges": [
      {
        "vi": "Một mặt tôi muốn đi du học, nhưng mặt khác lại không nỡ rời xa gia đình.",
        "hanziFull": "一方面我想出国留学，但另一方面舍不得家人。",
        "pinyinFull": "Yì fāngmiàn wǒ xiǎng chūguó liúxué, dàn lìng yì fāngmiàn shěbude jiārén.",
        "slots": [
          {
            "label": "Một mặt muốn du học",
            "expected": "一方面我想出国留学",
            "pinyin": "yì fāngmiàn wǒ xiǎng chūguó liúxué",
            "isFixed": false
          },
          {
            "label": "Nhưng mặt khác ko nỡ xa nhà",
            "expected": "但另一方面舍不得家人",
            "pinyin": "dàn lìng yì fāngmiàn shěbude jiārén",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "一方面我想出国留学",
            "pinyin": "yì fāngmiàn wǒ xiǎng chūguó liúxué",
            "vi": "Một mặt muốn đi du học"
          },
          {
            "hanzi": "但另一方面舍不得家人",
            "pinyin": "dàn lìng yì fāngmiàn shěbude jiārén",
            "vi": "Nhưng mặt khác ko nỡ xa người nhà"
          },
          {
            "hanzi": "朋友",
            "pinyin": "péngyou",
            "vi": "Bạn bè"
          },
          {
            "hanzi": "工作",
            "pinyin": "gōngzuò",
            "vi": "Công việc"
          }
        ],
        "analysis": "Thể hiện tâm trạng mâu thuẫn giằng xé giữa hai sự lựa chọn."
      }
    ]
  },
  {
    "id": "cf_150",
    "catId": "cat_15",
    "category": "15. Liên Từ Chuyển Ngoặt & Nhượng Bộ",
    "name": "尽管如此, S + 依然 + V",
    "tag": "Dẫu vậy, vẫn tiếp tục...",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "尽管如此, S",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "依然",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "依然 mang ngữ khí khẳng định mạnh mẽ sau khi vượt qua thử thách.",
    "challenges": [
      {
        "vi": "Dẫu vậy, chúng tôi vẫn tràn đầy niềm tin vào tương lai.",
        "hanziFull": "尽管如此，我们依然对未来充满信心。",
        "pinyinFull": "Jǐnguǎn rúcǐ, wǒmen yīrán duì wèilái chōngmǎn xìnxīn.",
        "slots": [
          {
            "label": "Dẫu vậy",
            "expected": "尽管如此",
            "pinyin": "jǐnguǎn rúcǐ",
            "isFixed": true
          },
          {
            "label": "Chúng tôi vẫn tràn đầy tự tin",
            "expected": "我们依然对未来充满信心",
            "pinyin": "wǒmen yīrán duì wèilái chōngmǎn xìnxīn",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "尽管如此",
            "pinyin": "jǐnguǎn rúcǐ",
            "vi": "Dẫu vậy"
          },
          {
            "hanzi": "我们依然对未来充满信心",
            "pinyin": "wǒmen yīrán duì wèilái chōngmǎn xìnxīn",
            "vi": "Vẫn tràn đầy niềm tin tương lai"
          },
          {
            "hanzi": "坚持",
            "pinyin": "jiānchí",
            "vi": "Kiên trì"
          },
          {
            "hanzi": "努力",
            "pinyin": "nǔlì",
            "vi": "Nỗ lực"
          }
        ],
        "analysis": "依然 mang ngữ khí khẳng định mạnh mẽ sau khi vượt qua thử thách."
      }
    ]
  },
  {
    "id": "cf_151",
    "catId": "cat_16",
    "category": "16. Liên Từ Tăng Tiến & Song Song",
    "name": "不但 / 不仅 + A + 而且 / 还 + B",
    "tag": "Không những... mà còn...",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "不但 / 不仅",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "而且 / 还",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "Cặp liên từ tăng tiến đẳng cấp phổ biến nhất trong tiếng Trung.",
    "challenges": [
      {
        "vi": "Cô ấy không những xinh đẹp mà còn vô cùng thông minh tài năng.",
        "hanziFull": "她不仅长得漂亮，而且非常聪明有才华。",
        "pinyinFull": "Tā bùjǐn zhǎng de piàoliang, érqiě fēicháng cōngmíng yǒu cáihuá.",
        "slots": [
          {
            "label": "Không chỉ",
            "expected": "不仅",
            "pinyin": "bùjǐn",
            "isFixed": true
          },
          {
            "label": "Xinh đẹp",
            "expected": "长得漂亮",
            "pinyin": "zhǎng de piàoliang",
            "isFixed": false
          },
          {
            "label": "Mà còn",
            "expected": "而且",
            "pinyin": "érqiě",
            "isFixed": true
          },
          {
            "label": "Thông minh tài năng",
            "expected": "非常聪明有才华",
            "pinyin": "fēicháng cōngmíng yǒu cáihuá",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "长得漂亮",
            "pinyin": "zhǎng de piàoliang",
            "vi": "Xinh đẹp"
          },
          {
            "hanzi": "非常聪明有才华",
            "pinyin": "fēicháng cōngmíng yǒu cáihuá",
            "vi": "Rất thông minh tài năng"
          },
          {
            "hanzi": "热情",
            "pinyin": "rèqíng",
            "vi": "Nhiệt tình"
          },
          {
            "hanzi": "善良",
            "pinyin": "shànliáng",
            "vi": "Lương thiện"
          }
        ],
        "analysis": "Cặp liên từ tăng tiến đẳng cấp phổ biến nhất trong tiếng Trung."
      }
    ]
  },
  {
    "id": "cf_152",
    "catId": "cat_16",
    "category": "16. Liên Từ Tăng Tiến & Song Song",
    "name": "既 + A + 又 + B",
    "tag": "Vừa A lại vừa B",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "既",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "又",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "既...又... liên kết hai tính chất cùng loại tương hỗ.",
    "challenges": [
      {
        "vi": "Món ăn của quán này vừa rẻ lại vừa thơm ngon miệng.",
        "hanziFull": "这家店的饭菜既便宜又好吃。",
        "pinyinFull": "Zhè jiā diàn de fàncài jì piányi yòu hǎochī.",
        "slots": [
          {
            "label": "Đồ ăn quán này",
            "expected": "这家店的饭菜",
            "pinyin": "zhè jiā diàn de fàncài",
            "isFixed": false
          },
          {
            "label": "Vừa",
            "expected": "既",
            "pinyin": "jì",
            "isFixed": true
          },
          {
            "label": "Rẻ",
            "expected": "便宜",
            "pinyin": "piányi",
            "isFixed": false
          },
          {
            "label": "Lại vừa",
            "expected": "又",
            "pinyin": "yòu",
            "isFixed": true
          },
          {
            "label": "Ngon miệng",
            "expected": "好吃",
            "pinyin": "hǎochī",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "这家店的饭菜",
            "pinyin": "zhè jiā diàn de fàncài",
            "vi": "Cơm canh quán này"
          },
          {
            "hanzi": "便宜",
            "pinyin": "piányi",
            "vi": "Rẻ"
          },
          {
            "hanzi": "好吃",
            "pinyin": "hǎochī",
            "vi": "Ngon miệng"
          },
          {
            "hanzi": "贵",
            "pinyin": "guì",
            "vi": "Đắt"
          }
        ],
        "analysis": "既...又... liên kết hai tính chất cùng loại tương hỗ."
      }
    ]
  },
  {
    "id": "cf_153",
    "catId": "cat_16",
    "category": "16. Liên Từ Tăng Tiến & Song Song",
    "name": "一边 + V1 + 一边 + V2",
    "tag": "Vừa làm việc này vừa làm việc kia",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "一边",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V1",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "一边",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V2",
        "type": "var"
      }
    ],
    "description": "Biểu thị hai hành động xảy ra đồng thời song song.",
    "challenges": [
      {
        "vi": "Chúng tôi vừa thưởng thức trà chiều, vừa trò chuyện vui vẻ.",
        "hanziFull": "我们一边喝下午茶，一边愉快地聊天。",
        "pinyinFull": "Wǒmen yìbiān hē xiàwǔchá, yìbiān yúkuài de liáotiān.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我们",
            "pinyin": "wǒmen",
            "isFixed": false
          },
          {
            "label": "Vừa uống trà chiều",
            "expected": "一边喝下午茶",
            "pinyin": "yìbiān hē xiàwǔchá",
            "isFixed": true
          },
          {
            "label": "Vừa vui vẻ trò chuyện",
            "expected": "一边愉快地聊天",
            "pinyin": "yìbiān yúkuài de liáotiān",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "我们",
            "pinyin": "wǒmen",
            "vi": "Chúng tôi"
          },
          {
            "hanzi": "一边喝下午茶",
            "pinyin": "yìbiān hē xiàwǔchá",
            "vi": "Vừa uống trà chiều"
          },
          {
            "hanzi": "一边愉快地聊天",
            "pinyin": "yìbiān yúkuài de liáotiān",
            "vi": "Vừa trò chuyện vui"
          },
          {
            "hanzi": "看书",
            "pinyin": "kàn shū",
            "vi": "Đọc sách"
          }
        ],
        "analysis": "Biểu thị hai hành động xảy ra đồng thời song song."
      }
    ]
  },
  {
    "id": "cf_154",
    "catId": "cat_16",
    "category": "16. Liên Từ Tăng Tiến & Song Song",
    "name": "一面 + V1 + 一面 + V2",
    "tag": "Một mặt làm V1 một mặt làm V2",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "一面",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V1",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "一面",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V2",
        "type": "var"
      }
    ],
    "description": "一面...一面... mang sắc thái trạng thái trường kỳ song hành.",
    "challenges": [
      {
        "vi": "Anh ấy vừa đi làm để trang trải sinh hoạt, vừa chuẩn bị luận văn tốt nghiệp.",
        "hanziFull": "他一面打工，一面准备毕业论文。",
        "pinyinFull": "Tā yímiàn dǎgōng, yímiàn zhǔnbèi bìyè lùnwén.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "他",
            "pinyin": "tā",
            "isFixed": false
          },
          {
            "label": "Một mặt làm thêm",
            "expected": "一面打工",
            "pinyin": "yímiàn dǎgōng",
            "isFixed": true
          },
          {
            "label": "Một mặt chuẩn bị luận văn",
            "expected": "一面准备毕业论文",
            "pinyin": "yímiàn zhǔnbèi bìyè lùnwén",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "他",
            "pinyin": "tā",
            "vi": "Anh ấy"
          },
          {
            "hanzi": "一面打工",
            "pinyin": "yímiàn dǎgōng",
            "vi": "Một mặt làm thêm"
          },
          {
            "hanzi": "一面准备毕业论文",
            "pinyin": "yímiàn zhǔnbèi bìyè lùnwén",
            "vi": "Một mặt chuẩn bị luận văn"
          },
          {
            "hanzi": "学习",
            "pinyin": "xuéxí",
            "vi": "Học tập"
          }
        ],
        "analysis": "一面...一面... mang sắc thái trạng thái trường kỳ song hành."
      }
    ]
  },
  {
    "id": "cf_155",
    "catId": "cat_16",
    "category": "16. Liên Từ Tăng Tiến & Song Song",
    "name": "又 + Adj1 + 又 + Adj2",
    "tag": "Vừa có tính chất 1 vừa có tính chất 2",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "又",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj1",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "又",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj2",
        "type": "var"
      }
    ],
    "description": "Dùng để khen ngợi hoặc phàn nàn hai đặc điểm cùng chiều.",
    "challenges": [
      {
        "vi": "Căn phòng này vừa sáng sủa lại vừa rộng rãi thoáng mát.",
        "hanziFull": "这个房间又明亮又宽敞。",
        "pinyinFull": "Zhège fángjiān yòu míngliàng yòu kuānchang.",
        "slots": [
          {
            "label": "Căn phòng này",
            "expected": "这个房间",
            "pinyin": "zhège fángjiān",
            "isFixed": false
          },
          {
            "label": "Vừa sáng",
            "expected": "又明亮",
            "pinyin": "yòu míngliàng",
            "isFixed": true
          },
          {
            "label": "Lại vừa rộng",
            "expected": "又宽敞",
            "pinyin": "yòu kuānchang",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这个房间",
            "pinyin": "zhège fángjiān",
            "vi": "Căn phòng này"
          },
          {
            "hanzi": "又明亮",
            "pinyin": "yòu míngliàng",
            "vi": "Vừa sáng sủa"
          },
          {
            "hanzi": "又宽敞",
            "pinyin": "yòu kuānchang",
            "vi": "Lại vừa rộng"
          },
          {
            "hanzi": "干净",
            "pinyin": "gānjìng",
            "vi": "Sạch"
          }
        ],
        "analysis": "Dùng để khen ngợi hoặc phàn nàn hai đặc điểm cùng chiều."
      }
    ]
  },
  {
    "id": "cf_156",
    "catId": "cat_16",
    "category": "16. Liên Từ Tăng Tiến & Song Song",
    "name": "除了 + A + 以外, 还 / 也 + B",
    "tag": "Ngoài A ra còn có thêm B",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "除了",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "以外, 还 / 也",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "除了...以外 đi với 还/也 mang nghĩa cộng dồn thêm vào.",
    "challenges": [
      {
        "vi": "Ngoài tiếng Trung ra, anh ấy còn biết nói cả tiếng Pháp.",
        "hanziFull": "除了中文以外，他还会说法语。",
        "pinyinFull": "Chúle Zhōngwén yǐwài, tā hái huì shuō Fǎyǔ.",
        "slots": [
          {
            "label": "Ngoài tiếng Trung",
            "expected": "除了中文以外",
            "pinyin": "chúle Zhōngwén yǐwài",
            "isFixed": false
          },
          {
            "label": "Anh ấy còn biết nói tiếng Pháp",
            "expected": "他还会说法语",
            "pinyin": "tā hái huì shuō Fǎyǔ",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "除了中文以外",
            "pinyin": "chúle Zhōngwén yǐwài",
            "vi": "Ngoài tiếng Trung ra"
          },
          {
            "hanzi": "他还会说法语",
            "pinyin": "tā hái huì shuō Fǎyǔ",
            "vi": "Anh ấy còn biết tiếng Pháp"
          },
          {
            "hanzi": "英语",
            "pinyin": "Yīngyǔ",
            "vi": "Tiếng Anh"
          },
          {
            "hanzi": "德语",
            "pinyin": "Déyǔ",
            "vi": "Tiếng Đức"
          }
        ],
        "analysis": "除了...以外 đi với 还/也 mang nghĩa cộng dồn thêm vào."
      }
    ]
  },
  {
    "id": "cf_157",
    "catId": "cat_16",
    "category": "16. Liên Từ Tăng Tiến & Song Song",
    "name": "不但不 / 不仅没 + A + 反而 + B",
    "tag": "Không những không... trái lại còn...",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "不但不 / 不仅没",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "反而",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "反而 biểu thị kết quả đi ngược lại hoàn toàn với kỳ vọng thông thường.",
    "challenges": [
      {
        "vi": "Cơn mưa không những không ngớt mà trái lại còn to hơn.",
        "hanziFull": "雨不仅没停，反而越下越大了。",
        "pinyinFull": "Yǔ bùjǐn méi tíng, fǎn'ér yuè xià yuè dà le.",
        "slots": [
          {
            "label": "Mưa không những ko ngớt",
            "expected": "雨不仅没停",
            "pinyin": "yǔ bùjǐn méi tíng",
            "isFixed": false
          },
          {
            "label": "Trái lại",
            "expected": "反而",
            "pinyin": "fǎn'ér",
            "isFixed": true
          },
          {
            "label": "Càng mưa to hơn",
            "expected": "越下越大了",
            "pinyin": "yuè xià yuè dà le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "雨不仅没停",
            "pinyin": "yǔ bùjǐn méi tíng",
            "vi": "Mưa ko những ko tạnh"
          },
          {
            "hanzi": "反而",
            "pinyin": "fǎn'ér",
            "vi": "Trái lại"
          },
          {
            "hanzi": "越下越大了",
            "pinyin": "yuè xià yuè dà le",
            "vi": "Càng mưa to hơn"
          },
          {
            "hanzi": "小了",
            "pinyin": "xiǎo le",
            "vi": "Nhỏ lại"
          }
        ],
        "analysis": "反而 biểu thị kết quả đi ngược lại hoàn toàn với kỳ vọng thông thường."
      }
    ]
  },
  {
    "id": "cf_158",
    "catId": "cat_16",
    "category": "16. Liên Từ Tăng Tiến & Song Song",
    "name": "不仅如此, 而且 + B",
    "tag": "Không chỉ có thế, mà còn...",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "不仅如此, 而且",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "不仅如此 làm cầu nối bổ sung thông tin tăng tiến đặc biệt.",
    "challenges": [
      {
        "vi": "Anh ấy hoàn thành dự án rất xuất sắc, không chỉ có thế mà còn được thăng chức.",
        "hanziFull": "他出色地完成了项目，不仅如此，而且升职了。",
        "pinyinFull": "Tā chūsè de wánchéng le xiàngmù, bùjǐn rúcǐ, érqiě shēngzhí le.",
        "slots": [
          {
            "label": "Hoàn thành xuất sắc",
            "expected": "他出色地完成了项目",
            "pinyin": "tā chūsè de wánchéng le xiàngmù",
            "isFixed": false
          },
          {
            "label": "Không chỉ thế mà còn thăng chức",
            "expected": "不仅如此，而且升职了",
            "pinyin": "bùjǐn rúcǐ, érqiě shēngzhí le",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "他出色地完成了项目",
            "pinyin": "tā chūsè de wánchéng le xiàngmù",
            "vi": "Anh ấy hoàn thành xuất sắc"
          },
          {
            "hanzi": "不仅如此，而且升职了",
            "pinyin": "bùjǐn rúcǐ, érqiě shēngzhí le",
            "vi": "Ko chỉ thế mà còn thăng chức"
          },
          {
            "hanzi": "加薪",
            "pinyin": "jiāxīn",
            "vi": "Tăng lương"
          },
          {
            "hanzi": "表扬",
            "pinyin": "biǎoyáng",
            "vi": "Khen thưởng"
          }
        ],
        "analysis": "不仅如此 làm cầu nối bổ sung thông tin tăng tiến đặc biệt."
      }
    ]
  },
  {
    "id": "cf_159",
    "catId": "cat_16",
    "category": "16. Liên Từ Tăng Tiến & Song Song",
    "name": "连 + A + 都/也 + V, 更别说 + B + 了",
    "tag": "Ngay cả A còn..., huống chi B",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "连",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "都/也",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V, 更别说",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "了",
        "type": "fixed"
      }
    ],
    "description": "So sánh bậc thang tương phản tăng cường độ thuyết phục.",
    "challenges": [
      {
        "vi": "Ngay cả người bản địa còn không biết đường này, huống chi là khách du lịch.",
        "hanziFull": "连本地人都不知道这条路，更别说游客了。",
        "pinyinFull": "Lián běndìrén dōu bù zhīdào zhè tiáo lù, gèng bié shuō yóukè le.",
        "slots": [
          {
            "label": "Ngay cả ng bản địa ko biết",
            "expected": "连本地人都不知道这条路",
            "pinyin": "lián běndìrén dōu bù zhīdào zhè tiáo lù",
            "isFixed": false
          },
          {
            "label": "Huống chi là du khách",
            "expected": "更别说游客了",
            "pinyin": "gèng bié shuō yóukè le",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "连本地人都不知道这条路",
            "pinyin": "lián běndìrén dōu bù zhīdào zhè tiáo lù",
            "vi": "Ngay ng bản xứ ko biết"
          },
          {
            "hanzi": "更别说游客了",
            "pinyin": "gèng bié shuō yóukè le",
            "vi": "Huống chi là du khách"
          },
          {
            "hanzi": "我们",
            "pinyin": "wǒmen",
            "vi": "Chúng tôi"
          },
          {
            "hanzi": "外地人",
            "pinyin": "wàidìrén",
            "vi": "Ng ngoài"
          }
        ],
        "analysis": "So sánh bậc thang tương phản tăng cường độ thuyết phục."
      }
    ]
  },
  {
    "id": "cf_160",
    "catId": "cat_16",
    "category": "16. Liên Từ Tăng Tiến & Song Song",
    "name": "既要 + V1 + 也要 + V2",
    "tag": "Vừa phải làm nhiệm vụ 1 vừa phải làm 2",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "既要",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V1",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "也要",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V2",
        "type": "var"
      }
    ],
    "description": "Văn phong chính luận đặt yêu cầu song toàn trên hai phương diện.",
    "challenges": [
      {
        "vi": "Chúng ta vừa phải chú trọng tốc độ phát triển, vừa phải đảm bảo chất lượng.",
        "hanziFull": "我们既要注重发展速度，也要保证质量。",
        "pinyinFull": "Wǒmen jì yào zhùzhòng fāzhǎn sùdù, yě yào bǎozhèng zhìliàng.",
        "slots": [
          {
            "label": "Chúng ta vừa phải chú trọng tốc độ",
            "expected": "我们既要注重发展速度",
            "pinyin": "wǒmen jì yào zhùzhòng fāzhǎn sùdù",
            "isFixed": false
          },
          {
            "label": "Cũng phải đảm bảo chất lượng",
            "expected": "也要保证质量",
            "pinyin": "yě yào bǎozhèng zhìliàng",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我们既要注重发展速度",
            "pinyin": "wǒmen jì yào zhùzhòng fāzhǎn sùdù",
            "vi": "Vừa phải chú trọng tốc độ"
          },
          {
            "hanzi": "也要保证质量",
            "pinyin": "yě yào bǎozhèng zhìliàng",
            "vi": "Cũng phải đảm bảo chất lượng"
          },
          {
            "hanzi": "节约",
            "pinyin": "jiéyuē",
            "vi": "Tiết kiệm"
          },
          {
            "hanzi": "安全",
            "pinyin": "ānquán",
            "vi": "An toàn"
          }
        ],
        "analysis": "Văn phong chính luận đặt yêu cầu song toàn trên hai phương diện."
      }
    ]
  },
  {
    "id": "cf_161",
    "catId": "cat_17",
    "category": "17. Liên Từ Lựa Chọn & Ngoại Trừ",
    "name": "不是 + A + 就是 + B",
    "tag": "Không phải A thì là B (Loại suy)",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "不是",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "就是",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "Khẳng định chắc chắn sự việc chỉ rơi vào một trong hai trường hợp.",
    "challenges": [
      {
        "vi": "Cuối tuần anh ấy không ở thư viện thì là ở phòng tập gym.",
        "hanziFull": "周末他不是在图书馆，就是在健身房。",
        "pinyinFull": "Zhōumò tā bú shì zài túshūguǎn, jiù shì zài jiànshēnfáng.",
        "slots": [
          {
            "label": "Không phải ở thư viện",
            "expected": "不是在图书馆",
            "pinyin": "bú shì zài túshūguǎn",
            "isFixed": false
          },
          {
            "label": "Thì là ở phòng gym",
            "expected": "就是在健身房",
            "pinyin": "jiù shì zài jiànshēnfáng",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "不是在图书馆",
            "pinyin": "bú shì zài túshūguǎn",
            "vi": "Ko ở thư viện"
          },
          {
            "hanzi": "就是在健身房",
            "pinyin": "jiù shì zài jiànshēnfáng",
            "vi": "Thì là ở gym"
          },
          {
            "hanzi": "在宿舍",
            "pinyin": "zài sùshè",
            "vi": "Ở ktx"
          },
          {
            "hanzi": "在公司",
            "pinyin": "zài gōngsī",
            "vi": "Ở cty"
          }
        ],
        "analysis": "Khẳng định chắc chắn sự việc chỉ rơi vào một trong hai trường hợp."
      }
    ]
  },
  {
    "id": "cf_162",
    "catId": "cat_17",
    "category": "17. Liên Từ Lựa Chọn & Ngoại Trừ",
    "name": "或者 + A + 或者 + B",
    "tag": "Hoặc là A hoặc là B (Câu trần thuật)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "或者",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "或者",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "或者 dùng trong câu trần thuật đưa ra các sự lựa chọn.",
    "challenges": [
      {
        "vi": "Bạn có thể thanh toán bằng WeChat Pay hoặc dùng Alipay.",
        "hanziFull": "你可以用微信支付，或者用支付宝。",
        "pinyinFull": "Nǐ kěyǐ yòng Wēixìn zhīfù, huòzhě yòng Zhīfùbǎo.",
        "slots": [
          {
            "label": "Dùng Wechat Pay",
            "expected": "你可以用微信支付",
            "pinyin": "nǐ kěyǐ yòng Wēixìn zhīfù",
            "isFixed": false
          },
          {
            "label": "Hoặc là dùng Alipay",
            "expected": "或者用支付宝",
            "pinyin": "huòzhě yòng Zhīfùbǎo",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "你可以用微信支付",
            "pinyin": "nǐ kěyǐ yòng Wēixìn zhīfù",
            "vi": "Dùng Wechat"
          },
          {
            "hanzi": "或者用支付宝",
            "pinyin": "huòzhě yòng Zhīfùbǎo",
            "vi": "Hoặc dùng Alipay"
          },
          {
            "hanzi": "刷卡",
            "pinyin": "shuā kǎ",
            "vi": "Quẹt thẻ"
          },
          {
            "hanzi": "付现金",
            "pinyin": "fù xiànjīn",
            "vi": "Tiền mặt"
          }
        ],
        "analysis": "或者 dùng trong câu trần thuật đưa ra các sự lựa chọn."
      }
    ]
  },
  {
    "id": "cf_163",
    "catId": "cat_17",
    "category": "17. Liên Từ Lựa Chọn & Ngoại Trừ",
    "name": "与其 + A + 不如 + B",
    "tag": "Thà B còn hơn A (Lựa chọn tối ưu)",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "与其",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "不如",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "Bỏ phương án A thụ động để chọn phương án B chủ động hữu hiệu.",
    "challenges": [
      {
        "vi": "Thay vì ngồi đây lo lắng, thà chúng ta bắt tay vào hành động ngay.",
        "hanziFull": "与其坐在这里担心，不如我们现在就行动起来。",
        "pinyinFull": "Yǔqí zuò zài zhèlǐ dānxīn, bùrú wǒmen xiànzài jiù xíngdòng qǐlái.",
        "slots": [
          {
            "label": "Thay vì ngồi lo lắng",
            "expected": "与其坐在这里担心",
            "pinyin": "yǔqí zuò zài zhèlǐ dānxīn",
            "isFixed": false
          },
          {
            "label": "Thà hành động ngay",
            "expected": "不如我们现在就行动起来",
            "pinyin": "bùrú wǒmen xiànzài jiù xíngdòng qǐlái",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "与其坐在这里担心",
            "pinyin": "yǔqí zuò zài zhèlǐ dānxīn",
            "vi": "Thay vì ngồi lo"
          },
          {
            "hanzi": "不如我们现在就行动起来",
            "pinyin": "bùrú wǒmen xiànzài jiù xíngdòng qǐlái",
            "vi": "Thà hành động ngay"
          },
          {
            "hanzi": "放弃",
            "pinyin": "fàngqì",
            "vi": "Bỏ cuộc"
          },
          {
            "hanzi": "等待",
            "pinyin": "děngdài",
            "vi": "Chờ đợi"
          }
        ],
        "analysis": "Bỏ phương án A thụ động để chọn phương án B chủ động hữu hiệu."
      }
    ]
  },
  {
    "id": "cf_164",
    "catId": "cat_17",
    "category": "17. Liên Từ Lựa Chọn & Ngoại Trừ",
    "name": "宁可 / 宁愿 + A + 也不 + B",
    "tag": "Thà A chứ dứt khoát không B",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "宁可 / 宁愿",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "也不",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "Sẵn sàng hy sinh chịu thiệt để bảo vệ nguyên tắc phẩm chất.",
    "challenges": [
      {
        "vi": "Anh ấy thà chịu mệt tăng ca, chứ không muốn làm việc cẩu thả qua loa.",
        "hanziFull": "他宁可辛苦加班，也不想敷衍了事。",
        "pinyinFull": "Tā nìngkě xīnkǔ jiābān, yě bù xiǎng fūyǎn liǎoshì.",
        "slots": [
          {
            "label": "Thà chịu mệt tăng ca",
            "expected": "他宁可辛苦加班",
            "pinyin": "tā nìngkě xīnkǔ jiābān",
            "isFixed": false
          },
          {
            "label": "Chứ ko muốn làm cẩu thả",
            "expected": "也不想敷衍了事",
            "pinyin": "yě bù xiǎng fūyǎn liǎoshì",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "他宁可辛苦加班",
            "pinyin": "tā nìngkě xīnkǔ jiābān",
            "vi": "Thà chịu mệt tăng ca"
          },
          {
            "hanzi": "也不想敷衍了事",
            "pinyin": "yě bù xiǎng fūyǎn liǎoshì",
            "vi": "Chứ ko làm cẩu thả"
          },
          {
            "hanzi": "放弃",
            "pinyin": "fàngqì",
            "vi": "Từ bỏ"
          },
          {
            "hanzi": "请假",
            "pinyin": "qǐngjià",
            "vi": "Xin nghỉ"
          }
        ],
        "analysis": "Sẵn sàng hy sinh chịu thiệt để bảo vệ nguyên tắc phẩm chất."
      }
    ]
  },
  {
    "id": "cf_165",
    "catId": "cat_17",
    "category": "17. Liên Từ Lựa Chọn & Ngoại Trừ",
    "name": "是 + A + 还是 + B?",
    "tag": "Là A hay là B? (Câu hỏi lựa chọn)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "是",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "还是",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B?",
        "type": "var"
      }
    ],
    "description": "Trong câu nghi vấn hỏi lựa chọn bắt buộc dùng 还是, không dùng 或者.",
    "challenges": [
      {
        "vi": "Bạn muốn uống trà sữa nóng hay là đồ uống lạnh?",
        "hanziFull": "你想喝热奶茶还是冷饮？",
        "pinyinFull": "Nǐ xiǎng hē rè nǎichá háishi lěngyǐn?",
        "slots": [
          {
            "label": "Bạn muốn uống trà sữa nóng",
            "expected": "你想喝热奶茶",
            "pinyin": "nǐ xiǎng hē rè nǎichá",
            "isFixed": false
          },
          {
            "label": "Hay là đồ uống lạnh",
            "expected": "还是冷饮",
            "pinyin": "háishi lěngyǐn",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "你想喝热奶茶",
            "pinyin": "nǐ xiǎng hē rè nǎichá",
            "vi": "Uống trà sữa nóng"
          },
          {
            "hanzi": "还是冷饮",
            "pinyin": "háishi lěngyǐn",
            "vi": "Hay là đồ uống lạnh"
          },
          {
            "hanzi": "或者",
            "pinyin": "huòzhě",
            "vi": "Hoặc"
          },
          {
            "hanzi": "咖啡",
            "pinyin": "kāfēi",
            "vi": "Cà phê"
          }
        ],
        "analysis": "Trong câu nghi vấn hỏi lựa chọn bắt buộc dùng 还是, không dùng 或者."
      }
    ]
  },
  {
    "id": "cf_166",
    "catId": "cat_17",
    "category": "17. Liên Từ Lựa Chọn & Ngoại Trừ",
    "name": "除了 + A + 以外, 都 + V",
    "tag": "Trừ A ra, tất cả đều... (Ngoại trừ)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "除了",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "以外, 都",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "除了...以外 kết hợp với 都 mang nghĩa loại trừ một phần tử ra khỏi tập hợp.",
    "challenges": [
      {
        "vi": "Trừ Tiểu Vương có việc bận xin phép ra, mọi người đều đã đến đông đủ.",
        "hanziFull": "除了小王有事请假以外，大家全都到了。",
        "pinyinFull": "Chúle Xiǎo Wáng yǒu shì qǐngjià yǐwài, dàjiā quán dōu dào le.",
        "slots": [
          {
            "label": "Trừ Tiểu Vương xin nghỉ",
            "expected": "除了小王有事请假以外",
            "pinyin": "chúle Xiǎo Wáng yǒu shì qǐngjià yǐwài",
            "isFixed": false
          },
          {
            "label": "Mọi người đều đến đủ",
            "expected": "大家全都到了",
            "pinyin": "dàjiā quán dōu dào le",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "除了小王有事请假以外",
            "pinyin": "chúle Xiǎo Wáng yǒu shì qǐngjià yǐwài",
            "vi": "Trừ Tiểu Vương xin nghỉ"
          },
          {
            "hanzi": "大家全都到了",
            "pinyin": "dàjiā quán dōu dào le",
            "vi": "Mn đều đến đông đủ"
          },
          {
            "hanzi": "走了",
            "pinyin": "zǒu le",
            "vi": "Về rồi"
          },
          {
            "hanzi": "没来",
            "pinyin": "méi lái",
            "vi": "Chưa tới"
          }
        ],
        "analysis": "除了...以外 kết hợp với 都 mang nghĩa loại trừ một phần tử ra khỏi tập hợp."
      }
    ]
  },
  {
    "id": "cf_167",
    "catId": "cat_17",
    "category": "17. Liên Từ Lựa Chọn & Ngoại Trừ",
    "name": "哪怕...也比...好",
    "tag": "Cho dù... cũng còn hơn là...",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "哪怕...也比...好",
        "type": "fixed"
      }
    ],
    "description": "Đánh giá so sánh tương đối giữa hai hoàn cảnh khó khăn.",
    "challenges": [
      {
        "vi": "Cho dù kiếm được ít tiền hơn một chút, cũng còn tốt hơn là suốt ngày nhàn rỗi.",
        "hanziFull": "哪怕少挣点儿钱，也比整天闲着强。",
        "pinyinFull": "Nǎpà shǎo zhèng diǎnr qián, yě bǐ zhěngtiān xián zhe qiáng.",
        "slots": [
          {
            "label": "Cho dù kiếm ít tiền chút",
            "expected": "哪怕少挣点儿钱",
            "pinyin": "nǎpà shǎo zhèng diǎnr qián",
            "isFixed": false
          },
          {
            "label": "Cũng hơn suốt ngày nhàn rỗi",
            "expected": "也比整天闲着强",
            "pinyin": "yě bǐ zhěngtiān xián zhe qiáng",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "哪怕少挣点儿钱",
            "pinyin": "nǎpà shǎo zhèng diǎnr qián",
            "vi": "Cho dù kiếm ít tiền"
          },
          {
            "hanzi": "也比整天闲着强",
            "pinyin": "yě bǐ zhěngtiān xián zhe qiáng",
            "vi": "Cũng hơn nhàn rỗi"
          },
          {
            "hanzi": "好",
            "pinyin": "hǎo",
            "vi": "Tốt"
          },
          {
            "hanzi": "舒服",
            "pinyin": "shūfu",
            "vi": "Dễ chịu"
          }
        ],
        "analysis": "Đánh giá so sánh tương đối giữa hai hoàn cảnh khó khăn."
      }
    ]
  },
  {
    "id": "cf_168",
    "catId": "cat_17",
    "category": "17. Liên Từ Lựa Chọn & Ngoại Trừ",
    "name": "要么 + A + 要么 + B",
    "tag": "Hoặc là A hoặc là B (Dứt khoát)",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "要么",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "A",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "要么",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "Yêu cầu quyết định dứt khoát không được dùng dằng.",
    "challenges": [
      {
        "vi": "Hoặc là bạn nghiêm túc làm cho tốt, hoặc là để người khác đảm nhận.",
        "hanziFull": "要么你认真做好，要么就换别人来做。",
        "pinyinFull": "Yàome nǐ rènzhēn zuò hǎo, yàome jiù huàn biérén lái zuò.",
        "slots": [
          {
            "label": "Hoặc là bạn làm nghiêm túc",
            "expected": "要么你认真做好",
            "pinyin": "yàome nǐ rènzhēn zuò hǎo",
            "isFixed": true
          },
          {
            "label": "Hoặc để ng khác làm",
            "expected": "要么就换别人来做",
            "pinyin": "yàome jiù huàn biérén lái zuò",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "要么你认真做好",
            "pinyin": "yàome nǐ rènzhēn zuò hǎo",
            "vi": "Hoặc bạn làm tốt"
          },
          {
            "hanzi": "要么就换别人来做",
            "pinyin": "yàome jiù huàn biérén lái zuò",
            "vi": "Hoặc đổi ng khác làm"
          },
          {
            "hanzi": "放弃",
            "pinyin": "fàngqì",
            "vi": "Bỏ cuộc"
          },
          {
            "hanzi": "休息",
            "pinyin": "xiūxi",
            "vi": "Nghỉ"
          }
        ],
        "analysis": "Yêu cầu quyết định dứt khoát không được dùng dằng."
      }
    ]
  },
  {
    "id": "cf_169",
    "catId": "cat_17",
    "category": "17. Liên Từ Lựa Chọn & Ngoại Trừ",
    "name": "与其抱怨, 不如 + Hành động",
    "tag": "Thay vì than phiền thà hành động",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "与其抱怨, 不如",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Hành động",
        "type": "var"
      }
    ],
    "description": "Khẩu hiệu khích lệ tinh thần hành động tích cực.",
    "challenges": [
      {
        "vi": "Thay vì than vãn điều kiện khó khăn, thà chúng ta nghĩ cách cải thiện nó.",
        "hanziFull": "与其抱怨条件艰苦，不如想办法改变它。",
        "pinyinFull": "Yǔqí bàoyuàn tiáojiàn jiānkǔ, bùrú xiǎng bànfǎ gǎibiàn tā.",
        "slots": [
          {
            "label": "Thay vì than vãn điều kiện",
            "expected": "与其抱怨条件艰苦",
            "pinyin": "yǔqí bàoyuàn tiáojiàn jiānkǔ",
            "isFixed": false
          },
          {
            "label": "Thà nghĩ cách thay đổi",
            "expected": "不如想办法改变它",
            "pinyin": "bùrú xiǎng bànfǎ gǎibiàn tā",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "与其抱怨条件艰苦",
            "pinyin": "yǔqí bàoyuàn tiáojiàn jiānkǔ",
            "vi": "Thay vì than phiền"
          },
          {
            "hanzi": "不如想办法改变它",
            "pinyin": "bùrú xiǎng bànfǎ gǎibiàn tā",
            "vi": "Thà tìm cách thay đổi"
          },
          {
            "hanzi": "放弃",
            "pinyin": "fàngqì",
            "vi": "Bỏ cuộc"
          },
          {
            "hanzi": "离开",
            "pinyin": "líkāi",
            "vi": "Rời đi"
          }
        ],
        "analysis": "Khẩu hiệu khích lệ tinh thần hành động tích cực."
      }
    ]
  },
  {
    "id": "cf_170",
    "catId": "cat_17",
    "category": "17. Liên Từ Lựa Chọn & Ngoại Trừ",
    "name": "与其这样, 倒不如 + B",
    "tag": "So với thế này thà rằng...",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "与其这样, 倒不如",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "B",
        "type": "var"
      }
    ],
    "description": "倒不如 mang sắc thái châm biếm hoặc dứt khoát chấm dứt sự phi lý.",
    "challenges": [
      {
        "vi": "So với việc kéo dài lãng phí thời gian, thà rằng hủy bỏ ngay từ đầu.",
        "hanziFull": "与其这样浪费时间，倒不如一开始就取消。",
        "pinyinFull": "Yǔqí zhèyàng làngfèi shíjiān, dào bùrú yì kāishǐ jiù qǔxiāo.",
        "slots": [
          {
            "label": "So với việc lãng phí thời gian",
            "expected": "与其这样浪费时间",
            "pinyin": "yǔqí zhèyàng làngfèi shíjiān",
            "isFixed": false
          },
          {
            "label": "Thà hủy ngay từ đầu",
            "expected": "倒不如一开始就取消",
            "pinyin": "dào bùrú yì kāishǐ jiù qǔxiāo",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "与其这样浪费时间",
            "pinyin": "yǔqí zhèyàng làngfèi shíjiān",
            "vi": "Thay vì lãng phí tg"
          },
          {
            "hanzi": "倒不如一开始就取消",
            "pinyin": "dào bùrú yì kāishǐ jiù qǔxiāo",
            "vi": "Thà hủy ngay đầu"
          },
          {
            "hanzi": "结束",
            "pinyin": "jiéshù",
            "vi": "Kết thúc"
          },
          {
            "hanzi": "重做",
            "pinyin": "chóng zuò",
            "vi": "Làm lại"
          }
        ],
        "analysis": "倒不如 mang sắc thái châm biếm hoặc dứt khoát chấm dứt sự phi lý."
      }
    ]
  },
  {
    "id": "cf_171",
    "catId": "cat_18",
    "category": "18. Cấu Trúc Nhấn Mạnh & Tiến Trình",
    "name": "S + 是...的 (Nhấn mạnh thời gian/nơi chốn)",
    "tag": "Nhấn mạnh quá khứ đã xảy ra",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "是...的 (Nhấn mạnh thời gian/nơi chốn)",
        "type": "fixed"
      }
    ],
    "description": "Cấu trúc 是...的 chuyên dùng để nhấn mạnh thời gian, địa điểm, phương thức của hành động đã hoàn tất.",
    "challenges": [
      {
        "vi": "Tôi đến Bắc Kinh bằng máy bay vào tuần trước.",
        "hanziFull": "我是上周坐飞机来北京的。",
        "pinyinFull": "Wǒ shì shàng zhōu zuò fēijī lái Běijīng de.",
        "slots": [
          {
            "label": "Chủ ngữ",
            "expected": "我",
            "pinyin": "wǒ",
            "isFixed": false
          },
          {
            "label": "Thị",
            "expected": "是",
            "pinyin": "shì",
            "isFixed": true
          },
          {
            "label": "Tuần trước đi máy bay đến BK",
            "expected": "上周坐飞机来北京",
            "pinyin": "shàng zhōu zuò fēijī lái Běijīng",
            "isFixed": false
          },
          {
            "label": "Đích",
            "expected": "的",
            "pinyin": "de",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "我",
            "pinyin": "wǒ",
            "vi": "Tôi"
          },
          {
            "hanzi": "上周坐飞机来北京",
            "pinyin": "shàng zhōu zuò fēijī lái Běijīng",
            "vi": "Tuần trước đi mb đến BK"
          },
          {
            "hanzi": "坐高铁",
            "pinyin": "zuò gāotiě",
            "vi": "Đi tàu cao tốc"
          },
          {
            "hanzi": "昨天",
            "pinyin": "zuótiān",
            "vi": "Hôm qua"
          }
        ],
        "analysis": "Cấu trúc 是...的 chuyên dùng để nhấn mạnh thời gian, địa điểm, phương thức của hành động đã hoàn tất."
      }
    ]
  },
  {
    "id": "cf_172",
    "catId": "cat_18",
    "category": "18. Cấu Trúc Nhấn Mạnh & Tiến Trình",
    "name": "连 + Đối tượng + 都 / 也 + V",
    "tag": "Ngay cả... cũng...",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "连",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Đối tượng",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "都 / 也",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "连 đưa phần tử cực đoan nhất lên đầu để làm nổi bật mức độ sự việc.",
    "challenges": [
      {
        "vi": "Chữ Hán này khó quá, ngay cả thầy giáo cũng phải tra từ điển.",
        "hanziFull": "这个汉字太难了，连老师都查字典。",
        "pinyinFull": "Zhège hànzì tài nán le, lián lǎoshī dōu chá zìdiǎn.",
        "slots": [
          {
            "label": "Chữ này khó",
            "expected": "这个汉字太难了",
            "pinyin": "zhège hànzì tài nán le",
            "isFixed": false
          },
          {
            "label": "Ngay cả thầy giáo cũng tra từ điển",
            "expected": "连老师都查字典",
            "pinyin": "lián lǎoshī dōu chá zìdiǎn",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "这个汉字太难了",
            "pinyin": "zhège hànzì tài nán le",
            "vi": "Chữ Hán này khó"
          },
          {
            "hanzi": "连老师都查字典",
            "pinyin": "lián lǎoshī dōu chá zìdiǎn",
            "vi": "Ngay cả thầy cũng tra từ điển"
          },
          {
            "hanzi": "学生",
            "pinyin": "xuésheng",
            "vi": "Học sinh"
          },
          {
            "hanzi": "写不出",
            "pinyin": "xiě bu chū",
            "vi": "Ko viết ra"
          }
        ],
        "analysis": "连 đưa phần tử cực đoan nhất lên đầu để làm nổi bật mức độ sự việc."
      }
    ]
  },
  {
    "id": "cf_173",
    "catId": "cat_18",
    "category": "18. Cấu Trúc Nhấn Mạnh & Tiến Trình",
    "name": "甚至 + Yếu tố cực đoan + 都 + V",
    "tag": "Thậm chí... cũng...",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "甚至",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Yếu tố cực đoan",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "都",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "甚至 tăng cấp độ ngạc nhiên vượt quá giới hạn thông thường.",
    "challenges": [
      {
        "vi": "Công việc bận rộn đến mức thậm chí anh ấy quên cả ăn trưa.",
        "hanziFull": "工作太忙，他甚至都忘了吃午饭。",
        "pinyinFull": "Gōngzuò tài máng, tā shènzhì dōu wàng le chī wǔfàn.",
        "slots": [
          {
            "label": "Công việc quá bận",
            "expected": "工作太忙他",
            "pinyin": "gōngzuò tài máng tā",
            "isFixed": false
          },
          {
            "label": "Thậm chí",
            "expected": "甚至",
            "pinyin": "shènzhì",
            "isFixed": true
          },
          {
            "label": "Quên cả ăn trưa",
            "expected": "都忘了吃午饭",
            "pinyin": "dōu wàng le chī wǔfàn",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "工作太忙他",
            "pinyin": "gōngzuò tài máng tā",
            "vi": "Việc bận anh ấy"
          },
          {
            "hanzi": "都忘了吃午饭",
            "pinyin": "dōu wàng le chī wǔfàn",
            "vi": "Quên cả ăn trưa"
          },
          {
            "hanzi": "睡觉",
            "pinyin": "shuìjiào",
            "vi": "Ngủ"
          },
          {
            "hanzi": "喝水",
            "pinyin": "hē shuǐ",
            "vi": "Uống nước"
          }
        ],
        "analysis": "甚至 tăng cấp độ ngạc nhiên vượt quá giới hạn thông thường."
      }
    ]
  },
  {
    "id": "cf_174",
    "catId": "cat_18",
    "category": "18. Cấu Trúc Nhấn Mạnh & Tiến Trình",
    "name": "一 + V1 + 就 + V2",
    "tag": "Hễ / Vừa mới V1 là V2 ngay",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "一",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V1",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "就",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V2",
        "type": "var"
      }
    ],
    "description": "一...就... biểu thị hai hành động nối tiếp nhau cực kỳ khăng khít tức thì.",
    "challenges": [
      {
        "vi": "Tôi hễ về đến nhà là ngả lưng lên giường ngủ ngay.",
        "hanziFull": "我一回到家就躺在床上睡着了。",
        "pinyinFull": "Wǒ yì huí dào jiā jiù tǎng zài chuáng shang shuìzháo le.",
        "slots": [
          {
            "label": "Tôi vừa về đến nhà là",
            "expected": "我一回到家",
            "pinyin": "wǒ yì huí dào jiā",
            "isFixed": false
          },
          {
            "label": "Ngủ say trên giường ngay",
            "expected": "就躺在床上睡着了",
            "pinyin": "jiù tǎng zài chuáng shang shuìzháo le",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "我一回到家",
            "pinyin": "wǒ yì huí dào jiā",
            "vi": "Tôi vừa về nhà"
          },
          {
            "hanzi": "就躺在床上睡着了",
            "pinyin": "jiù tǎng zài chuáng shang shuìzháo le",
            "vi": "Ngủ luôn trên giường"
          },
          {
            "hanzi": "做饭",
            "pinyin": "zuò fàn",
            "vi": "Nấu cơm"
          },
          {
            "hanzi": "洗澡",
            "pinyin": "xǐzǎo",
            "vi": "Tắm"
          }
        ],
        "analysis": "一...就... biểu thị hai hành động nối tiếp nhau cực kỳ khăng khít tức thì."
      }
    ]
  },
  {
    "id": "cf_175",
    "catId": "cat_18",
    "category": "18. Cấu Trúc Nhấn Mạnh & Tiến Trình",
    "name": "刚 + V1 + 就 + V2",
    "tag": "Vừa mới... đã...",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "刚",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V1",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "就",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V2",
        "type": "var"
      }
    ],
    "description": "刚 nhấn mạnh khoảng cách thời gian ngắn ngủi giữa hai biến cố.",
    "challenges": [
      {
        "vi": "Tôi vừa mới ra khỏi cửa thì trời đã đổ mưa rào.",
        "hanziFull": "我刚出门天就下起了大雨。",
        "pinyinFull": "Wǒ gāng chū mén tiān jiù xià qǐ le dàyǔ.",
        "slots": [
          {
            "label": "Tôi vừa ra khỏi cửa",
            "expected": "我刚出门",
            "pinyin": "wǒ gāng chū mén",
            "isFixed": false
          },
          {
            "label": "Trời đã mưa to ngay",
            "expected": "天就下起了大雨",
            "pinyin": "tiān jiù xià qǐ le dàyǔ",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "我刚出门",
            "pinyin": "wǒ gāng chū mén",
            "vi": "Tôi vừa ra cửa"
          },
          {
            "hanzi": "天就下起了大雨",
            "pinyin": "tiān jiù xià qǐ le dàyǔ",
            "vi": "Trời đã mưa to"
          },
          {
            "hanzi": "刮风",
            "pinyin": "guā fēng",
            "vi": "Gió thổi"
          },
          {
            "hanzi": "停了",
            "pinyin": "tíng le",
            "vi": "Đã tạnh"
          }
        ],
        "analysis": "刚 nhấn mạnh khoảng cách thời gian ngắn ngủi giữa hai biến cố."
      }
    ]
  },
  {
    "id": "cf_176",
    "catId": "cat_18",
    "category": "18. Cấu Trúc Nhấn Mạnh & Tiến Trình",
    "name": "正 / 正在 + V + 呢",
    "tag": "Đang diễn ra ngay tại thời điểm nói",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "正 / 正在",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "呢",
        "type": "fixed"
      }
    ],
    "description": "正 / 正在 kết hợp trợ từ ngữ khí 呢 ở cuối câu chỉ hành động đang tiến hành.",
    "challenges": [
      {
        "vi": "Trưởng phòng đang tiếp đón khách hàng quan trọng trong phòng họp.",
        "hanziFull": "经理正在会议室接待重要客户呢。",
        "pinyinFull": "Jīnglǐ zhèngzài huìyìshì jiēdài zhòngyào kèhù ne.",
        "slots": [
          {
            "label": "Giám đốc",
            "expected": "经理",
            "pinyin": "jīnglǐ",
            "isFixed": false
          },
          {
            "label": "Đang",
            "expected": "正在",
            "pinyin": "zhèngzài",
            "isFixed": true
          },
          {
            "label": "Tiếp khách ở phòng họp",
            "expected": "会议室接待重要客户呢",
            "pinyin": "huìyìshì jiēdài zhòngyào kèhù ne",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "经理",
            "pinyin": "jīnglǐ",
            "vi": "Giám đốc"
          },
          {
            "hanzi": "会议室接待重要客户呢",
            "pinyin": "huìyìshì jiēdài zhòngyào kèhù ne",
            "vi": "Đón khách trong phòng họp"
          },
          {
            "hanzi": "开会",
            "pinyin": "kāihuì",
            "vi": "Họp"
          },
          {
            "hanzi": "打电话",
            "pinyin": "dǎ diànhuà",
            "vi": "Gọi điện"
          }
        ],
        "analysis": "正 / 正在 kết hợp trợ từ ngữ khí 呢 ở cuối câu chỉ hành động đang tiến hành."
      }
    ]
  },
  {
    "id": "cf_177",
    "catId": "cat_18",
    "category": "18. Cấu Trúc Nhấn Mạnh & Tiến Trình",
    "name": "S + V + 着 + O",
    "tag": "Duy trì trạng thái động thái",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "着",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      }
    ],
    "description": "Trợ từ động thái 着 biểu thị trạng thái kết quả được duy trì liên tục.",
    "challenges": [
      {
        "vi": "Cửa sổ phòng làm việc đang mở toang để đón gió.",
        "hanziFull": "办公室的窗户开着呢。",
        "pinyinFull": "Bàngōngshì de chuānghu kāi zhe ne.",
        "slots": [
          {
            "label": "Cửa sổ văn phòng",
            "expected": "办公室的窗户",
            "pinyin": "bàngōngshì de chuānghu",
            "isFixed": false
          },
          {
            "label": "Đang mở",
            "expected": "开着呢",
            "pinyin": "kāi zhe ne",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "办公室的窗户",
            "pinyin": "bàngōngshì de chuānghu",
            "vi": "Cửa sổ văn phòng"
          },
          {
            "hanzi": "开着呢",
            "pinyin": "kāi zhe ne",
            "vi": "Đang mở"
          },
          {
            "hanzi": "关着",
            "pinyin": "guān zhe",
            "vi": "Đang đóng"
          },
          {
            "hanzi": "锁着",
            "pinyin": "suǒ zhe",
            "vi": "Đang khóa"
          }
        ],
        "analysis": "Trợ từ động thái 着 biểu thị trạng thái kết quả được duy trì liên tục."
      }
    ]
  },
  {
    "id": "cf_178",
    "catId": "cat_18",
    "category": "18. Cấu Trúc Nhấn Mạnh & Tiến Trình",
    "name": "S + 快要 / 就要 + V + 了",
    "tag": "Sắp sửa diễn ra ngay (Tương lai gần)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "快要 / 就要",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "了",
        "type": "fixed"
      }
    ],
    "description": "快要...了 biểu thị sự việc sắp sửa xảy ra trong khoảnh khắc.",
    "challenges": [
      {
        "vi": "Tàu cao tốc sắp sửa khởi hành rồi, xin quý khách nhanh chóng lên tàu.",
        "hanziFull": "高铁快要开车了，请尽快上车。",
        "pinyinFull": "Gāotiě kuàiyào kāichē le, qǐng jǐnkuài shàng chē.",
        "slots": [
          {
            "label": "Tàu cao tốc",
            "expected": "高铁",
            "pinyin": "gāotiě",
            "isFixed": false
          },
          {
            "label": "Sắp chạy rồi",
            "expected": "快要开车了",
            "pinyin": "kuàiyào kāichē le",
            "isFixed": true
          },
          {
            "label": "Hãy mau lên xe",
            "expected": "请尽快上车",
            "pinyin": "qǐng jǐnkuài shàng chē",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "高铁",
            "pinyin": "gāotiě",
            "vi": "Tàu cao tốc"
          },
          {
            "hanzi": "快要开车了",
            "pinyin": "kuàiyào kāichē le",
            "vi": "Sắp chạy rồi"
          },
          {
            "hanzi": "请尽快上车",
            "pinyin": "qǐng jǐnkuài shàng chē",
            "vi": "Hãy mau lên tàu"
          },
          {
            "hanzi": "出发",
            "pinyin": "chūfā",
            "vi": "Xuất phát"
          }
        ],
        "analysis": "快要...了 biểu thị sự việc sắp sửa xảy ra trong khoảnh khắc."
      }
    ]
  },
  {
    "id": "cf_179",
    "catId": "cat_18",
    "category": "18. Cấu Trúc Nhấn Mạnh & Tiến Trình",
    "name": "S + V + 过了",
    "tag": "Đã từng trải nghiệm trong quá khứ",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "过了",
        "type": "fixed"
      }
    ],
    "description": "Trợ từ 过 biểu thị kinh nghiệm đã từng nếm trải.",
    "challenges": [
      {
        "vi": "Tôi đã từng đến Thượng Hải công tác hai lần rồi.",
        "hanziFull": "我去过上海两次出差了。",
        "pinyinFull": "Wǒ qù guo Shànghǎi liǎng cì chūchāi le.",
        "slots": [
          {
            "label": "Tôi",
            "expected": "我",
            "pinyin": "wǒ",
            "isFixed": false
          },
          {
            "label": "Đã từng đi Thượng Hải 2 lần",
            "expected": "去过上海两次出差了",
            "pinyin": "qù guo Shànghǎi liǎng cì chūchāi le",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "我",
            "pinyin": "wǒ",
            "vi": "Tôi"
          },
          {
            "hanzi": "去过上海两次出差了",
            "pinyin": "qù guo Shànghǎi liǎng cì chūchāi le",
            "vi": "Từng đi Thượng Hải 2 lần công tác"
          },
          {
            "hanzi": "吃过",
            "pinyin": "chī guo",
            "vi": "Từng ăn"
          },
          {
            "hanzi": "学过",
            "pinyin": "xué guo",
            "vi": "Từng học"
          }
        ],
        "analysis": "Trợ từ 过 biểu thị kinh nghiệm đã từng nếm trải."
      }
    ]
  },
  {
    "id": "cf_180",
    "catId": "cat_18",
    "category": "18. Cấu Trúc Nhấn Mạnh & Tiến Trình",
    "name": "S + 一直 + 在 + V",
    "tag": "Liên tục không ngừng nghỉ suốt từ đầu",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "一直",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "在",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "一直 nhấn mạnh tính liên tục không gián đoạn của hành động.",
    "challenges": [
      {
        "vi": "Suốt cả buổi chiều hôm nay tôi liên tục viết báo cáo.",
        "hanziFull": "今天整个下午我一直在写总结报告。",
        "pinyinFull": "Jīntiān zhěng gè xiàwǔ wǒ yìzhí zài xiě zǒngjié bàogào.",
        "slots": [
          {
            "label": "Thời gian",
            "expected": "今天整个下午我",
            "pinyin": "jīntiān zhěng gè xiàwǔ wǒ",
            "isFixed": false
          },
          {
            "label": "Luôn luôn đang viết báo cáo",
            "expected": "一直在写总结报告",
            "pinyin": "yìzhí zài xiě zǒngjié bàogào",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "今天整个下午我",
            "pinyin": "jīntiān zhěng gè xiàwǔ wǒ",
            "vi": "Chiều nay tôi"
          },
          {
            "hanzi": "一直在写总结报告",
            "pinyin": "yìzhí zài xiě zǒngjié bàogào",
            "vi": "Luôn viết báo cáo tổng kết"
          },
          {
            "hanzi": "开会",
            "pinyin": "kāihuì",
            "vi": "Họp"
          },
          {
            "hanzi": "加班",
            "pinyin": "jiābān",
            "vi": "Tăng ca"
          }
        ],
        "analysis": "一直 nhấn mạnh tính liên tục không gián đoạn của hành động."
      }
    ]
  },
  {
    "id": "cf_181",
    "catId": "cat_19",
    "category": "19. Cấu Trúc Mục Đích & Giới Từ Quan Điểm",
    "name": "对 + Ai đó + 来说, S + Adj",
    "tag": "Đối với ai mà nói (Góc nhìn chủ quan)",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "对",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Ai đó",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "来说, S",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Adj",
        "type": "var"
      }
    ],
    "description": "对...来说 xác lập góc nhìn nhận định từ vị trí của đối tượng cụ thể.",
    "challenges": [
      {
        "vi": "Đối với người mới học mà nói, phát âm chuẩn thanh điệu là quan trọng nhất.",
        "hanziFull": "对初学者来说，发准声调是最重要的。",
        "pinyinFull": "Duì chūxuézhě lái shuō, fā zhǔn shēngdiào shì zuì zhòngyào de.",
        "slots": [
          {
            "label": "Đối với người mới học",
            "expected": "对初学者来说",
            "pinyin": "duì chūxuézhě lái shuō",
            "isFixed": true
          },
          {
            "label": "Phát âm chuẩn thanh điệu quan trọng nhất",
            "expected": "发准声调是最重要的",
            "pinyin": "fā zhǔn shēngdiào shì zuì zhòngyào de",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "对初学者来说",
            "pinyin": "duì chūxuézhě lái shuō",
            "vi": "Đối với người mới học"
          },
          {
            "hanzi": "发准声调是最重要的",
            "pinyin": "fā zhǔn shēngdiào shì zuì zhòngyào de",
            "vi": "Phát âm chuẩn thanh điệu quan trọng nhất"
          },
          {
            "hanzi": "写字",
            "pinyin": "xiě zì",
            "vi": "Viết chữ"
          },
          {
            "hanzi": "背单词",
            "pinyin": "bèi dāncí",
            "vi": "Học từ vựng"
          }
        ],
        "analysis": "对...来说 xác lập góc nhìn nhận định từ vị trí của đối tượng cụ thể."
      }
    ]
  },
  {
    "id": "cf_182",
    "catId": "cat_19",
    "category": "19. Cấu Trúc Mục Đích & Giới Từ Quan Điểm",
    "name": "在 + Ai + 看来, Quan điểm",
    "tag": "Dưới góc nhìn của ai",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "在",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Ai",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "看来, Quan điểm",
        "type": "fixed"
      }
    ],
    "description": "在...看来 mở đầu cho một nhận định phân tích độc lập.",
    "challenges": [
      {
        "vi": "Dưới góc nhìn của tôi, phương án này rất có tiềm năng phát triển.",
        "hanziFull": "在我看来，这个方案非常有发展潜力。",
        "pinyinFull": "Zài wǒ kànlái, zhège fāng'àn fēicháng yǒu fāzhǎn qiánlì.",
        "slots": [
          {
            "label": "Dưới mắt tôi",
            "expected": "在我看来",
            "pinyin": "zài wǒ kànlái",
            "isFixed": true
          },
          {
            "label": "Phương án này rất có tiềm năng",
            "expected": "这个方案非常有发展潜力",
            "pinyin": "zhège fāng'àn fēicháng yǒu fāzhǎn qiánlì",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "在我看来",
            "pinyin": "zài wǒ kànlái",
            "vi": "Dưới góc nhìn của tôi"
          },
          {
            "hanzi": "这个方案非常有发展潜力",
            "pinyin": "zhège fāng'àn fēicháng yǒu fāzhǎn qiánlì",
            "vi": "Phương án này rất có tiềm năng"
          },
          {
            "hanzi": "很好",
            "pinyin": "hěn hǎo",
            "vi": "Rất tốt"
          },
          {
            "hanzi": "可行",
            "pinyin": "kěxíng",
            "vi": "Khả thi"
          }
        ],
        "analysis": "在...看来 mở đầu cho một nhận định phân tích độc lập."
      }
    ]
  },
  {
    "id": "cf_183",
    "catId": "cat_19",
    "category": "19. Cấu Trúc Mục Đích & Giới Từ Quan Điểm",
    "name": "关于 + Chủ đề, S + V",
    "tag": "Về / Liên quan đến vấn đề gì",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "关于",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Chủ đề, S",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "关于 giới thiệu chủ đề trung tâm của cuộc thảo luận.",
    "challenges": [
      {
        "vi": "Về việc hợp tác lần này, chúng ta cần thảo luận chi tiết hơn.",
        "hanziFull": "关于这次的合作，我们需要进一步讨论。",
        "pinyinFull": "Guānyú zhè cì de hézuò, wǒmen xūyào jìnyíbù tǎolùn.",
        "slots": [
          {
            "label": "Về việc hợp tác lần này",
            "expected": "关于这次的合作",
            "pinyin": "guānyú zhè cì de hézuò",
            "isFixed": true
          },
          {
            "label": "Chúng ta cần thảo luận thêm",
            "expected": "我们需要进一步讨论",
            "pinyin": "wǒmen xūyào jìnyíbù tǎolùn",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "关于这次的合作",
            "pinyin": "guānyú zhè cì de hézuò",
            "vi": "Về hợp tác lần này"
          },
          {
            "hanzi": "我们需要进一步讨论",
            "pinyin": "wǒmen xūyào jìnyíbù tǎolùn",
            "vi": "Chúng ta cần thảo luận thêm"
          },
          {
            "hanzi": "签约",
            "pinyin": "qiānyuē",
            "vi": "Ký hợp đồng"
          },
          {
            "hanzi": "开会",
            "pinyin": "kāihuì",
            "vi": "Đi họp"
          }
        ],
        "analysis": "关于 giới thiệu chủ đề trung tâm của cuộc thảo luận."
      }
    ]
  },
  {
    "id": "cf_184",
    "catId": "cat_19",
    "category": "19. Cấu Trúc Mục Đích & Giới Từ Quan Điểm",
    "name": "按照 + Quy định / Yêu cầu + V",
    "tag": "Căn cứ theo quy định chuẩn",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "按照",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Quy định / Yêu cầu",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "按照 dẫn xuất tiêu chuẩn hoặc trình tự cần tuân thủ.",
    "challenges": [
      {
        "vi": "Mọi người hãy xếp hàng trật tự theo hướng dẫn của nhân viên.",
        "hanziFull": "请按照工作人员的指引有序排队。",
        "pinyinFull": "Qǐng ànzhào gōngzuò rényuán de zhǐyǐn yǒuxù páiduì.",
        "slots": [
          {
            "label": "Mời",
            "expected": "请",
            "pinyin": "qǐng",
            "isFixed": true
          },
          {
            "label": "Theo chỉ dẫn nhân viên",
            "expected": "按照工作人员的指引",
            "pinyin": "ànzhào gōngzuò rényuán de zhǐyǐn",
            "isFixed": false
          },
          {
            "label": "Xếp hàng trật tự",
            "expected": "有序排队",
            "pinyin": "yǒuxù páiduì",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "按照工作人员的指引",
            "pinyin": "ànzhào gōngzuò rényuán de zhǐyǐn",
            "vi": "Theo chỉ dẫn nhân viên"
          },
          {
            "hanzi": "有序排队",
            "pinyin": "yǒuxù páiduì",
            "vi": "Xếp hàng có trật tự"
          },
          {
            "hanzi": "规定",
            "pinyin": "guīdìng",
            "vi": "Quy định"
          },
          {
            "hanzi": "填写",
            "pinyin": "tiánxiě",
            "vi": "Điền vào"
          }
        ],
        "analysis": "按照 dẫn xuất tiêu chuẩn hoặc trình tự cần tuân thủ."
      }
    ]
  },
  {
    "id": "cf_185",
    "catId": "cat_19",
    "category": "19. Cấu Trúc Mục Đích & Giới Từ Quan Điểm",
    "name": "通过 + Phương thức / Nỗ lực + Đạt kết quả",
    "tag": "Thông qua phương thức gì",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "通过",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Phương thức / Nỗ lực",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Đạt kết quả",
        "type": "var"
      }
    ],
    "description": "通过 nêu lên con đường hoặc phương tiện để đạt mục tiêu.",
    "challenges": [
      {
        "vi": "Thông qua việc tự học kiên trì, anh ấy đã thi đỗ chứng chỉ HSK 5.",
        "hanziFull": "通过自学，他成功考过了HSK五级。",
        "pinyinFull": "Tōngguò zìxué, tā chénggōng kǎo guò le HSK wǔ jí.",
        "slots": [
          {
            "label": "Thông qua tự học",
            "expected": "通过自学",
            "pinyin": "tōngguò zìxué",
            "isFixed": true
          },
          {
            "label": "Anh ấy thi đỗ HSK 5 thành công",
            "expected": "他成功考过了HSK五级",
            "pinyin": "tā chénggōng kǎo guò le HSK wǔ jí",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "通过自学",
            "pinyin": "tōngguò zìxué",
            "vi": "Thông qua tự học"
          },
          {
            "hanzi": "他成功考过了HSK五级",
            "pinyin": "tā chénggōng kǎo guò le HSK wǔ jí",
            "vi": "Đỗ HSK 5 thành công"
          },
          {
            "hanzi": "努力",
            "pinyin": "nǔlì",
            "vi": "Nỗ lực"
          },
          {
            "hanzi": "合作",
            "pinyin": "hézuò",
            "vi": "Hợp tác"
          }
        ],
        "analysis": "通过 nêu lên con đường hoặc phương tiện để đạt mục tiêu."
      }
    ]
  },
  {
    "id": "cf_186",
    "catId": "cat_19",
    "category": "19. Cấu Trúc Mục Đích & Giới Từ Quan Điểm",
    "name": "根据 + Dữ liệu / Tình hình + Phán đoán",
    "tag": "Căn cứ trên dữ liệu khách quan",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "根据",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Dữ liệu / Tình hình",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Phán đoán",
        "type": "var"
      }
    ],
    "description": "根据 dẫn xuất cơ sở thực tế hoặc bằng chứng xác thực.",
    "challenges": [
      {
        "vi": "Căn cứ theo dự báo thời tiết, ngày mai nhiệt độ sẽ giảm sâu.",
        "hanziFull": "根据天气预报，明天会大幅度降温。",
        "pinyinFull": "Gēnjù tiānqì yùbào, míngtiān huì dà fúdù jiàngwēn.",
        "slots": [
          {
            "label": "Căn cứ dự báo thời tiết",
            "expected": "根据天气预报",
            "pinyin": "gēnjù tiānqì yùbào",
            "isFixed": true
          },
          {
            "label": "Ngày mai nhiệt độ giảm mạnh",
            "expected": "明天会大幅度降温",
            "pinyin": "míngtiān huì dà fúdù jiàngwēn",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "根据天气预报",
            "pinyin": "gēnjù tiānqì yùbào",
            "vi": "Căn cứ dự báo thời tiết"
          },
          {
            "hanzi": "明天会大幅度降温",
            "pinyin": "míngtiān huì dà fúdù jiàngwēn",
            "vi": "Ngày mai giảm nhiệt mạnh"
          },
          {
            "hanzi": "数据",
            "pinyin": "shùjù",
            "vi": "Số liệu"
          },
          {
            "hanzi": "规定",
            "pinyin": "guīdìng",
            "vi": "Quy định"
          }
        ],
        "analysis": "根据 dẫn xuất cơ sở thực tế hoặc bằng chứng xác thực."
      }
    ]
  },
  {
    "id": "cf_187",
    "catId": "cat_19",
    "category": "19. Cấu Trúc Mục Đích & Giới Từ Quan Điểm",
    "name": "以 + Tiêu chuẩn / Thái độ + V",
    "tag": "Lấy... làm thái độ hành xử",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "以",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Tiêu chuẩn / Thái độ",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "以...为... là cấu trúc văn phong trang trọng xác định tôn chỉ.",
    "challenges": [
      {
        "vi": "Công ty chúng tôi luôn lấy khách hàng làm trung tâm phục vụ.",
        "hanziFull": "我们公司始终以客户为中心提供服务。",
        "pinyinFull": "Wǒmen gōngsī shǐzhōng yǐ kèhù wéi zhōngxīn tígōng fúwù.",
        "slots": [
          {
            "label": "Công ty chúng tôi luôn",
            "expected": "我们公司始终",
            "pinyin": "wǒmen gōngsī shǐzhōng",
            "isFixed": false
          },
          {
            "label": "Lấy khách hàng làm trung tâm",
            "expected": "以客户为中心",
            "pinyin": "yǐ kèhù wéi zhōngxīn",
            "isFixed": true
          },
          {
            "label": "Cung cấp dịch vụ",
            "expected": "提供服务",
            "pinyin": "tígōng fúwù",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我们公司始终",
            "pinyin": "wǒmen gōngsī shǐzhōng",
            "vi": "Cty chúng tôi luôn"
          },
          {
            "hanzi": "以客户为中心",
            "pinyin": "yǐ kèhù wéi zhōngxīn",
            "vi": "Lấy khách hàng làm trung tâm"
          },
          {
            "hanzi": "提供服务",
            "pinyin": "tígōng fúwù",
            "vi": "Cung cấp dịch vụ"
          },
          {
            "hanzi": "诚信",
            "pinyin": "chéngxìn",
            "vi": "Uy tín"
          }
        ],
        "analysis": "以...为... là cấu trúc văn phong trang trọng xác định tôn chỉ."
      }
    ]
  },
  {
    "id": "cf_188",
    "catId": "cat_19",
    "category": "19. Cấu Trúc Mục Đích & Giới Từ Quan Điểm",
    "name": "在 + Điều kiện / Giúp đỡ + 下, S + V",
    "tag": "Dưới sự giúp đỡ / điều kiện...",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "在",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Điều kiện / Giúp đỡ",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "下, S",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      }
    ],
    "description": "在...下 nêu lên hoàn cảnh tiền đề thúc đẩy kết quả.",
    "challenges": [
      {
        "vi": "Dưới sự hướng dẫn tận tình của giáo viên, tôi đã có tiến bộ vượt bậc.",
        "hanziFull": "在老师的精心指导下，我取得了很大进步。",
        "pinyinFull": "Zài lǎoshī de jīngxīn zhǐdǎo xià, wǒ qǔdé le hěn dà jìnbù.",
        "slots": [
          {
            "label": "Dưới sự chỉ dẫn của thầy",
            "expected": "在老师的精心指导下",
            "pinyin": "zài lǎoshī de jīngxīn zhǐdǎo xià",
            "isFixed": true
          },
          {
            "label": "Tôi đạt tiến bộ lớn",
            "expected": "我取得了很大进步",
            "pinyin": "wǒ qǔdé le hěn dà jìnbù",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "在老师的精心指导下",
            "pinyin": "zài lǎoshī de jīngxīn zhǐdǎo xià",
            "vi": "Dưới sự chỉ dẫn của thầy"
          },
          {
            "hanzi": "我取得了很大进步",
            "pinyin": "wǒ qǔdé le hěn dà jìnbù",
            "vi": "Tôi đạt tiến bộ lớn"
          },
          {
            "hanzi": "成功",
            "pinyin": "chénggōng",
            "vi": "Thành công"
          },
          {
            "hanzi": "成长",
            "pinyin": "chéngzhǎng",
            "vi": "Trưởng thành"
          }
        ],
        "analysis": "在...下 nêu lên hoàn cảnh tiền đề thúc đẩy kết quả."
      }
    ]
  },
  {
    "id": "cf_189",
    "catId": "cat_19",
    "category": "19. Cấu Trúc Mục Đích & Giới Từ Quan Điểm",
    "name": "从 + Góc độ + 来看",
    "tag": "Nhìn nhận từ góc độ chuyên môn",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "从",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Góc độ",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "来看",
        "type": "fixed"
      }
    ],
    "description": "从...来看 chuyển dịch tầm nhìn sang một khía cạnh cụ thể.",
    "challenges": [
      {
        "vi": "Nhìn từ góc độ dài hạn, việc đầu tư này rất có giá trị.",
        "hanziFull": "从长远角度来看，这项投资非常有价值。",
        "pinyinFull": "Cóng chángyuǎn jiǎodù lái kàn, zhè xiàng tóuzī fēicháng yǒu jiàzhí.",
        "slots": [
          {
            "label": "Nhìn từ góc độ dài hạn",
            "expected": "从长远角度来看",
            "pinyin": "cóng chángyuǎn jiǎodù lái kàn",
            "isFixed": true
          },
          {
            "label": "Khoản đầu tư này rất có giá trị",
            "expected": "这项投资非常有价值",
            "pinyin": "zhè xiàng tóuzī fēicháng yǒu jiàzhí",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "从长远角度来看",
            "pinyin": "cóng chángyuǎn jiǎodù lái kàn",
            "vi": "Nhìn từ góc độ lâu dài"
          },
          {
            "hanzi": "这项投资非常有价值",
            "pinyin": "zhè xiàng tóuzī fēicháng yǒu jiàzhí",
            "vi": "Khoản đầu tư này rất có giá trị"
          },
          {
            "hanzi": "目前",
            "pinyin": "mùqián",
            "vi": "Hiện tại"
          },
          {
            "hanzi": "经济",
            "pinyin": "jīngjì",
            "vi": "Kinh tế"
          }
        ],
        "analysis": "从...来看 chuyển dịch tầm nhìn sang một khía cạnh cụ thể."
      }
    ]
  },
  {
    "id": "cf_190",
    "catId": "cat_19",
    "category": "19. Cấu Trúc Mục Đích & Giới Từ Quan Điểm",
    "name": "本着 + Tinh thần / Nguyên tắc + 的态度",
    "tag": "Trên tinh thần nguyên tắc",
    "level": "HSK 5",
    "diagram": [
      {
        "text": "本着",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Tinh thần / Nguyên tắc",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "的态度",
        "type": "fixed"
      }
    ],
    "description": "本着 là cụm từ trang trọng trong văn bản pháp lý và thương mại.",
    "challenges": [
      {
        "vi": "Chúng tôi đàm phán hợp tác trên tinh thần bình đẳng và cùng có lợi.",
        "hanziFull": "我们本着平等互利的原则进行友好谈判。",
        "pinyinFull": "Wǒmen běnzhe píngděng hùlì de yuánzé jìnxíng yǒuhǎo tánpàn.",
        "slots": [
          {
            "label": "Chúng tôi",
            "expected": "我们",
            "pinyin": "wǒmen",
            "isFixed": false
          },
          {
            "label": "Trên tinh thần bình đẳng cùng lợi",
            "expected": "本着平等互利的原则",
            "pinyin": "běnzhe píngděng hùlì de yuánzé",
            "isFixed": true
          },
          {
            "label": "Đàm phán hữu nghị",
            "expected": "进行友好谈判",
            "pinyin": "jìnxíng yǒuhǎo tánpàn",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "我们",
            "pinyin": "wǒmen",
            "vi": "Chúng tôi"
          },
          {
            "hanzi": "本着平等互利的原则",
            "pinyin": "běnzhe píngděng hùlì de yuánzé",
            "vi": "Trên nguyên tắc bình đẳng đôi bên cùng có lợi"
          },
          {
            "hanzi": "进行友好谈判",
            "pinyin": "jìnxíng yǒuhǎo tánpàn",
            "vi": "Tiến hành đàm phán hữu nghị"
          },
          {
            "hanzi": "合作",
            "pinyin": "hézuò",
            "vi": "Hợp tác"
          }
        ],
        "analysis": "本着 là cụm từ trang trọng trong văn bản pháp lý và thương mại."
      }
    ]
  },
  {
    "id": "cf_191",
    "catId": "cat_20",
    "category": "20. Khẩu Ngữ Giao Tiếp Thường Nhật",
    "name": "V + 一下 (Một chút / một lát)",
    "tag": "Giảm nhẹ ngữ khí thỉnh cầu",
    "level": "HSK 1",
    "diagram": [
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "一下 (Một chút / một lát)",
        "type": "fixed"
      }
    ],
    "description": "一下 đặt sau động từ giúp câu nói trở nên mềm mỏng, lịch sự.",
    "challenges": [
      {
        "vi": "Xin vui lòng đợi tôi một lát nhé.",
        "hanziFull": "请稍等我一下。",
        "pinyinFull": "Qǐng shāo děng wǒ yíxià.",
        "slots": [
          {
            "label": "Xin vui lòng",
            "expected": "请稍",
            "pinyin": "qǐng shāo",
            "isFixed": true
          },
          {
            "label": "Đợi tôi một lát",
            "expected": "等我一下",
            "pinyin": "děng wǒ yíxià",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "请稍",
            "pinyin": "qǐng shāo",
            "vi": "Xin vui lòng"
          },
          {
            "hanzi": "等我一下",
            "pinyin": "děng wǒ yíxià",
            "vi": "Đợi tôi một lát"
          },
          {
            "hanzi": "看一眼",
            "pinyin": "kàn yì yǎn",
            "vi": "Nhìn một cái"
          },
          {
            "hanzi": "问一下",
            "pinyin": "wèn yíxià",
            "vi": "Hỏi một chút"
          }
        ],
        "analysis": "一下 đặt sau động từ giúp câu nói trở nên mềm mỏng, lịch sự."
      }
    ]
  },
  {
    "id": "cf_192",
    "catId": "cat_20",
    "category": "20. Khẩu Ngữ Giao Tiếp Thường Nhật",
    "name": "先 + V1 + 然后 / 再 + V2",
    "tag": "Trình tự trước sau (Làm V1 trước rồi mới làm V2)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "先",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V1",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "然后 / 再",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V2",
        "type": "var"
      }
    ],
    "description": "先...然后... sắp xếp thứ tự thực hiện các hoạt động logic.",
    "challenges": [
      {
        "vi": "Chúng ta đi ăn tối trước rồi đi xem phim nhé.",
        "hanziFull": "我们先去吃晚饭，然后再去看电影吧。",
        "pinyinFull": "Wǒmen xiān qù chī wǎnfàn, ránhòu zài qù kàn diànyǐng ba.",
        "slots": [
          {
            "label": "Chúng ta trước tiên",
            "expected": "我们先",
            "pinyin": "wǒmen xiān",
            "isFixed": false
          },
          {
            "label": "Đi ăn tối",
            "expected": "去吃晚饭",
            "pinyin": "qù chī wǎnfàn",
            "isFixed": false
          },
          {
            "label": "Sau đó đi xem phim",
            "expected": "然后再去看电影吧",
            "pinyin": "ránhòu zài qù kàn diànyǐng ba",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "我们先",
            "pinyin": "wǒmen xiān",
            "vi": "Chúng ta trước tiên"
          },
          {
            "hanzi": "去吃晚饭",
            "pinyin": "qù chī wǎnfàn",
            "vi": "Đi ăn tối"
          },
          {
            "hanzi": "然后再去看电影吧",
            "pinyin": "ránhòu zài qù kàn diànyǐng ba",
            "vi": "Sau đó rồi đi xem phim"
          },
          {
            "hanzi": "回家",
            "pinyin": "huí jiā",
            "vi": "Về nhà"
          }
        ],
        "analysis": "先...然后... sắp xếp thứ tự thực hiện các hoạt động logic."
      }
    ]
  },
  {
    "id": "cf_193",
    "catId": "cat_20",
    "category": "20. Khẩu Ngữ Giao Tiếp Thường Nhật",
    "name": "麻烦你 + V + O",
    "tag": "Làm phiền bạn giúp đỡ (Lịch thiệp)",
    "level": "HSK 2",
    "diagram": [
      {
        "text": "麻烦你",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      }
    ],
    "description": "麻烦你 là câu cửa miệng lịch sự khi cần người khác hỗ trợ.",
    "challenges": [
      {
        "vi": "Làm phiền bạn rót giúp tôi một cốc nước ấm.",
        "hanziFull": "麻烦你帮我倒一杯温水。",
        "pinyinFull": "Máfan nǐ bāng wǒ dào yì bēi wēnshuǐ.",
        "slots": [
          {
            "label": "Làm phiền bạn",
            "expected": "麻烦你",
            "pinyin": "máfan nǐ",
            "isFixed": true
          },
          {
            "label": "Rót giúp tôi cốc nước ấm",
            "expected": "帮我倒一杯温水",
            "pinyin": "bāng wǒ dào yì bēi wēnshuǐ",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "麻烦你",
            "pinyin": "máfan nǐ",
            "vi": "Làm phiền bạn"
          },
          {
            "hanzi": "帮我倒一杯温水",
            "pinyin": "bāng wǒ dào yì bēi wēnshuǐ",
            "vi": "Rót giúp tôi cốc nước ấm"
          },
          {
            "hanzi": "拿一下",
            "pinyin": "ná yíxià",
            "vi": "Cầm hộ"
          },
          {
            "hanzi": "开门",
            "pinyin": "kāi mén",
            "vi": "Mở cửa"
          }
        ],
        "analysis": "麻烦你 là câu cửa miệng lịch sự khi cần người khác hỗ trợ."
      }
    ]
  },
  {
    "id": "cf_194",
    "catId": "cat_20",
    "category": "20. Khẩu Ngữ Giao Tiếp Thường Nhật",
    "name": "顺便 + V + O",
    "tag": "Tiện thể / Nhân tiện làm việc gì",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "顺便",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "O",
        "type": "var"
      }
    ],
    "description": "顺便 chỉ việc làm kèm nhân chuyến đi mà không mất công sức riêng.",
    "challenges": [
      {
        "vi": "Lúc tan làm về bạn tiện thể lấy bưu phẩm ở quầy lễ tân giúp tôi nhé.",
        "hanziFull": "下班回家顺便帮我取个快递吧。",
        "pinyinFull": "Xiàbān huí jiā shùnbiàn bāng wǒ qǔ gè kuàidì ba.",
        "slots": [
          {
            "label": "Tan làm về",
            "expected": "下班回家",
            "pinyin": "xiàbān huí jiā",
            "isFixed": false
          },
          {
            "label": "Tiện thể",
            "expected": "顺便",
            "pinyin": "shùnbiàn",
            "isFixed": true
          },
          {
            "label": "Lấy bưu phẩm hộ tôi",
            "expected": "帮我取个快递吧",
            "pinyin": "bāng wǒ qǔ gè kuàidì ba",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "下班回家",
            "pinyin": "xiàbān huí jiā",
            "vi": "Tan sở về nhà"
          },
          {
            "hanzi": "顺便",
            "pinyin": "shùnbiàn",
            "vi": "Tiện thể"
          },
          {
            "hanzi": "帮我取个快递吧",
            "pinyin": "bāng wǒ qǔ gè kuàidì ba",
            "vi": "Lấy bưu phẩm hộ tôi"
          },
          {
            "hanzi": "买菜",
            "pinyin": "mǎi cài",
            "vi": "Mua rau"
          }
        ],
        "analysis": "顺便 chỉ việc làm kèm nhân chuyến đi mà không mất công sức riêng."
      }
    ]
  },
  {
    "id": "cf_195",
    "catId": "cat_20",
    "category": "20. Khẩu Ngữ Giao Tiếp Thường Nhật",
    "name": "差点儿 + V + Kết quả xấu",
    "tag": "Suýt chút nữa gặp nạn",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "差点儿",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "V",
        "type": "var"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả xấu",
        "type": "var"
      }
    ],
    "description": "Khẩu ngữ biểu thị sự may mắn thoát khỏi tình huống sơ suất.",
    "challenges": [
      {
        "vi": "Sáng nay do vội vã quá tôi suýt chút nữa bỏ quên điện thoại.",
        "hanziFull": "早上太着急，我差点儿把手机给落下了。",
        "pinyinFull": "Zǎoshang tài zháojí, wǒ chàdiǎnr bǎ shǒujī gěi là xià le.",
        "slots": [
          {
            "label": "Sáng nay vội quá tôi",
            "expected": "早上太着急我",
            "pinyin": "zǎoshang tài zháojí wǒ",
            "isFixed": false
          },
          {
            "label": "Suýt chút nữa",
            "expected": "差点儿",
            "pinyin": "chàdiǎnr",
            "isFixed": true
          },
          {
            "label": "Để quên điện thoại",
            "expected": "把手机给落下了",
            "pinyin": "bǎ shǒujī gěi là xià le",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "早上太着急我",
            "pinyin": "zǎoshang tài zháojí wǒ",
            "vi": "Sáng nay vội quá tôi"
          },
          {
            "hanzi": "差点儿",
            "pinyin": "chàdiǎnr",
            "vi": "Suýt chút nữa"
          },
          {
            "hanzi": "把手机给落下了",
            "pinyin": "bǎ shǒujī gěi là xià le",
            "vi": "Để quên điện thoại lại"
          },
          {
            "hanzi": "迟到了",
            "pinyin": "chídào le",
            "vi": "Đã muộn"
          }
        ],
        "analysis": "Khẩu ngữ biểu thị sự may mắn thoát khỏi tình huống sơ suất."
      }
    ]
  },
  {
    "id": "cf_196",
    "catId": "cat_20",
    "category": "20. Khẩu Ngữ Giao Tiếp Thường Nhật",
    "name": "好不容易才 + Kết quả",
    "tag": "Khó khăn vất vả lắm mới...",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "好不容易才",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Kết quả",
        "type": "var"
      }
    ],
    "description": "好不容易 nhấn mạnh nỗ lực vượt qua rất nhiều gian nan trở ngại.",
    "challenges": [
      {
        "vi": "Sau 3 tiếng đồng hồ kẹt xe, chúng tôi khó khăn lắm mới đến được sân bay.",
        "hanziFull": "堵车三个小时，我们好不容易才赶到机场。",
        "pinyinFull": "Dǔchē sān gè xiǎoshí, wǒmen hǎobùróngyì cái gǎn dào jīchǎng.",
        "slots": [
          {
            "label": "Tắc xe 3 tiếng chúng tôi",
            "expected": "堵车三个小时我们",
            "pinyin": "dǔchē sān gè xiǎoshí wǒmen",
            "isFixed": false
          },
          {
            "label": "Khó khăn lắm mới",
            "expected": "好不容易才",
            "pinyin": "hǎobùróngyì cái",
            "isFixed": true
          },
          {
            "label": "Đến đc sân bay",
            "expected": "赶到机场",
            "pinyin": "gǎn dào jīchǎng",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "堵车三个小时我们",
            "pinyin": "dǔchē sān gè xiǎoshí wǒmen",
            "vi": "Kẹt xe 3 tiếng chúng tôi"
          },
          {
            "hanzi": "好不容易才",
            "pinyin": "hǎobùróngyì cái",
            "vi": "Khó khăn lắm mới"
          },
          {
            "hanzi": "赶到机场",
            "pinyin": "gǎn dào jīchǎng",
            "vi": "Đến đc sân bay"
          },
          {
            "hanzi": "买到票",
            "pinyin": "mǎi dào piào",
            "vi": "Mua đc vé"
          }
        ],
        "analysis": "好不容易 nhấn mạnh nỗ lực vượt qua rất nhiều gian nan trở ngại."
      }
    ]
  },
  {
    "id": "cf_197",
    "catId": "cat_20",
    "category": "20. Khẩu Ngữ Giao Tiếp Thường Nhật",
    "name": "怪不得 + Lý do sáng tỏ",
    "tag": "Hóa ra là vậy / Chẳng trách...",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "怪不得",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Lý do sáng tỏ",
        "type": "var"
      }
    ],
    "description": "怪不得 biểu thị sự vỡ lẽ khi tìm ra nguyên nhân giải tỏa thắc mắc.",
    "challenges": [
      {
        "vi": "Hóa ra hôm nay là sinh nhật anh ấy, hèn chi lại vui mừng thế.",
        "hanziFull": "原来今天是他的生日，怪不得这么开心。",
        "pinyinFull": "Yuánlái jīntiān shì tā de shēngrì, guàibude zhènme kāixīn.",
        "slots": [
          {
            "label": "Hóa ra nay là sn a ấy",
            "expected": "原来今天是他的生日",
            "pinyin": "yuánlái jīntiān shì tā de shēngrì",
            "isFixed": false
          },
          {
            "label": "Chẳng trách",
            "expected": "怪不得",
            "pinyin": "guàibude",
            "isFixed": true
          },
          {
            "label": "Vui mừng thế",
            "expected": "这么开心",
            "pinyin": "zhènme kāixīn",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "原来今天是他的生日",
            "pinyin": "yuánlái jīntiān shì tā de shēngrì",
            "vi": "Hóa ra nay là sinh nhật"
          },
          {
            "hanzi": "怪不得",
            "pinyin": "guàibude",
            "vi": "Chẳng trách"
          },
          {
            "hanzi": "这么开心",
            "pinyin": "zhènme kāixīn",
            "vi": "Vui vẻ thế"
          },
          {
            "hanzi": "请客",
            "pinyin": "qǐngkè",
            "vi": "Mời khách"
          }
        ],
        "analysis": "怪不得 biểu thị sự vỡ lẽ khi tìm ra nguyên nhân giải tỏa thắc mắc."
      }
    ]
  },
  {
    "id": "cf_198",
    "catId": "cat_20",
    "category": "20. Khẩu Ngữ Giao Tiếp Thường Nhật",
    "name": "巴不得 + Ước mong cháy bỏng",
    "tag": "Chỉ mong sao / Ước gì...",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "巴不得",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Ước mong cháy bỏng",
        "type": "var"
      }
    ],
    "description": "巴不得 thể hiện khao khát mãnh liệt mong sự việc đến thật sớm.",
    "challenges": [
      {
        "vi": "Anh ấy nhớ nhà lắm, chỉ mong sao ngày mai được bay về nước ngay.",
        "hanziFull": "他太想家了，巴不得明天就坐飞机回国。",
        "pinyinFull": "Tā tài xiǎng jiā le, bābude míngtiān jiù zuò fēijī huí guó.",
        "slots": [
          {
            "label": "Anh ấy quá nhớ nhà",
            "expected": "他太想家了",
            "pinyin": "tā tài xiǎng jiā le",
            "isFixed": false
          },
          {
            "label": "Chỉ mong sao",
            "expected": "巴不得",
            "pinyin": "bābude",
            "isFixed": true
          },
          {
            "label": "Mai bay về nước ngay",
            "expected": "明天就坐飞机回国",
            "pinyin": "míngtiān jiù zuò fēijī huí guó",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "他太想家了",
            "pinyin": "tā tài xiǎng jiā le",
            "vi": "Anh ấy quá nhớ nhà"
          },
          {
            "hanzi": "巴不得",
            "pinyin": "bābude",
            "vi": "Chỉ mong sao"
          },
          {
            "hanzi": "明天就坐飞机回国",
            "pinyin": "míngtiān jiù zuò fēijī huí guó",
            "vi": "Mai bay về nước ngay"
          },
          {
            "hanzi": "放假",
            "pinyin": "fàngjià",
            "vi": "Nghỉ lễ"
          }
        ],
        "analysis": "巴不得 thể hiện khao khát mãnh liệt mong sự việc đến thật sớm."
      }
    ]
  },
  {
    "id": "cf_199",
    "catId": "cat_20",
    "category": "20. Khẩu Ngữ Giao Tiếp Thường Nhật",
    "name": "说不定 + Khả năng có thể xảy ra",
    "tag": "Biết đâu chừng / Chưa biết chừng",
    "level": "HSK 3",
    "diagram": [
      {
        "text": "说不定",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Khả năng có thể xảy ra",
        "type": "var"
      }
    ],
    "description": "说不定 dự đoán một khả năng ngẫu nhiên đầy bất ngờ.",
    "challenges": [
      {
        "vi": "Bạn hãy gọi điện thử xem, biết đâu chừng anh ấy đang ở gần đây.",
        "hanziFull": "你打个电话问问，说不定他就在附近呢。",
        "pinyinFull": "Nǐ dǎ gè diànhuà wènwen, shuōbudìng tā jiù zài fùjìn ne.",
        "slots": [
          {
            "label": "Bạn gọi thử xem",
            "expected": "你打个电话问问",
            "pinyin": "nǐ dǎ gè diànhuà wènwen",
            "isFixed": false
          },
          {
            "label": "Biết đâu chừng",
            "expected": "说不定",
            "pinyin": "shuōbudìng",
            "isFixed": true
          },
          {
            "label": "Anh ấy đang ở gần đây",
            "expected": "他就在附近呢",
            "pinyin": "tā jiù zài fùjìn ne",
            "isFixed": false
          }
        ],
        "pool": [
          {
            "hanzi": "你打个电话问问",
            "pinyin": "nǐ dǎ gè diànhuà wènwen",
            "vi": "Bạn gọi hỏi xem"
          },
          {
            "hanzi": "说不定",
            "pinyin": "shuōbudìng",
            "vi": "Biết đâu chừng"
          },
          {
            "hanzi": "他就在附近呢",
            "pinyin": "tā jiù zài fùjìn ne",
            "vi": "Anh ấy ở gần đây"
          },
          {
            "hanzi": "有空",
            "pinyin": "yǒu kòng",
            "vi": "Đang rảnh"
          }
        ],
        "analysis": "说不定 dự đoán một khả năng ngẫu nhiên đầy bất ngờ."
      }
    ]
  },
  {
    "id": "cf_200",
    "catId": "cat_20",
    "category": "20. Khẩu Ngữ Giao Tiếp Thường Nhật",
    "name": "动不动就 + Hành động tiêu cực lặp lại",
    "tag": "Hở một tí là... / Động tí là...",
    "level": "HSK 4",
    "diagram": [
      {
        "text": "动不动就",
        "type": "fixed"
      },
      {
        "text": "+",
        "type": "plus"
      },
      {
        "text": "Hành động tiêu cực lặp lại",
        "type": "var"
      }
    ],
    "description": "动不动就 phàn nàn về một thói quen tiêu cực hay tái diễn.",
    "challenges": [
      {
        "vi": "Có chuyện gì hãy bình tĩnh nói, đừng hở một tí là nổi nóng.",
        "hanziFull": "有话好好商量，别动不动就发脾气。",
        "pinyinFull": "Yǒu huà hǎohǎo shāngliang, bié dòngbudòng jiù fā píqi.",
        "slots": [
          {
            "label": "Có chuyện hãy bàn bạc",
            "expected": "有话好好商量",
            "pinyin": "yǒu huà hǎohǎo shāngliang",
            "isFixed": false
          },
          {
            "label": "Đừng hở tí là nổi cáu",
            "expected": "别动不动就发脾气",
            "pinyin": "bié dòngbudòng jiù fā píqi",
            "isFixed": true
          }
        ],
        "pool": [
          {
            "hanzi": "有话好好商量",
            "pinyin": "yǒu huà hǎohǎo shāngliang",
            "vi": "Có gì bàn bạc kỹ"
          },
          {
            "hanzi": "别动不动就发脾气",
            "pinyin": "bié dòngbudòng jiù fā píqi",
            "vi": "Đừng động tí nổi cáu"
          },
          {
            "hanzi": "辞职",
            "pinyin": "cízhí",
            "vi": "Từ chức"
          },
          {
            "hanzi": "请假",
            "pinyin": "qǐngjià",
            "vi": "Xin nghỉ"
          }
        ],
        "analysis": "动不动就 phàn nàn về một thói quen tiêu cực hay tái diễn."
      }
    ]
  }
];
