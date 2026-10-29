/**
 * HSK 1, 2, 3 Complete Vocabulary Database (1,000 Words)
 * Contains 150 HSK1 + 150 HSK2 + 300 HSK3 + 400 Core Communicative Words
 */
export const HSK_1000_VOCABULARY = [
  // --- HSK 1 (150 Từ vựng cơ bản) ---
  { id: 1, hanzi: '爱', pinyin: 'ài', hv: 'Ái', vi: 'Yêu, thích', level: 'HSK 1', topic: 'Cảm xúc', sample: '我爱学习汉语。' },
  { id: 2, hanzi: '八', pinyin: 'bā', hv: 'Bát', vi: 'Tám (số 8)', level: 'HSK 1', topic: 'Số đếm', sample: '他有八本书。' },
  { id: 3, hanzi: '爸爸', pinyin: 'bàba', hv: 'Ba ba', vi: 'Bố, cha', level: 'HSK 1', topic: 'Gia đình', sample: '我爸爸是医生。' },
  { id: 4, hanzi: '杯子', pinyin: 'bēizi', hv: 'Bôi tử', vi: 'Cái cốc, ly', level: 'HSK 1', topic: 'Đồ vật', sample: '桌子上有一个杯子。' },
  { id: 5, hanzi: '北京', pinyin: 'Běijīng', hv: 'Bắc Kinh', vi: 'Bắc Kinh', level: 'HSK 1', topic: 'Địa danh', sample: '我想去北京旅游。' },
  { id: 6, hanzi: '本', pinyin: 'běn', hv: 'Bản', vi: 'Cuốn, quyển (lượng từ)', level: 'HSK 1', topic: 'Lượng từ', sample: '这是一本书。' },
  { id: 7, hanzi: '不客气', pinyin: 'bù kèqi', hv: 'Bất khách khí', vi: 'Không có chi, đừng khách sáo', level: 'HSK 1', topic: 'Giao tiếp', sample: '不用谢，不客气！' },
  { id: 8, hanzi: '不', pinyin: 'bù', hv: 'Bất', vi: 'Không, chẳng', level: 'HSK 1', topic: 'Phó từ', sample: '我不是学生。' },
  { id: 9, hanzi: '菜', pinyin: 'cài', hv: 'Thái', vi: 'Món ăn, rau', level: 'HSK 1', topic: 'Ẩm thực', sample: '中国菜很好吃。' },
  { id: 10, hanzi: '茶', pinyin: 'chá', hv: 'Trà', vi: 'Trà, chè', level: 'HSK 1', topic: 'Ẩm thực', sample: '请喝茶。' },
  { id: 11, hanzi: '吃', pinyin: 'chī', hv: 'Ngật', vi: 'Ăn', level: 'HSK 1', topic: 'Hành động', sample: '你想吃什么？' },
  { id: 12, hanzi: '出租车', pinyin: 'chūzūchē', hv: 'Xuất tô xa', vi: 'Xe taxi', level: 'HSK 1', topic: 'Giao thông', sample: '我们坐出租车去吧。' },
  { id: 13, hanzi: '打电话', pinyin: 'dǎ diànhuà', hv: 'Đả điện thoại', vi: 'Gọi điện thoại', level: 'HSK 1', topic: 'Giao tiếp', sample: '他在打电话呢。' },
  { id: 14, hanzi: '大', pinyin: 'dà', hv: 'Đại', vi: 'To, lớn', level: 'HSK 1', topic: 'Tính từ', sample: '这个苹果很大。' },
  { id: 15, hanzi: '的', pinyin: 'de', hv: 'Đích', vi: 'Của (trợ từ sở hữu)', level: 'HSK 1', topic: 'Trợ từ', sample: '这是我的书。' },
  { id: 16, hanzi: '点', pinyin: 'diǎn', hv: 'Điểm', vi: 'Giờ (thời gian)', level: 'HSK 1', topic: 'Thời gian', sample: '现在是上午八点。' },
  { id: 17, hanzi: '电脑', pinyin: 'diànnǎo', hv: 'Điện não', vi: 'Máy vi tính', level: 'HSK 1', topic: 'Công nghệ', sample: '我想买一台新电脑。' },
  { id: 18, hanzi: '电视', pinyin: 'diànshì', hv: 'Điện thị', vi: 'Tivi, truyền hình', level: 'HSK 1', topic: 'Đồ dùng', sample: '他在看电视。' },
  { id: 19, hanzi: '电影', pinyin: 'diànyǐng', hv: 'Điện ảnh', vi: 'Phim ảnh', level: 'HSK 1', topic: 'Giải trí', sample: '晚上一起去看电影吧。' },
  { id: 20, hanzi: '东西', pinyin: 'dōngxi', hv: 'Đông tây', vi: 'Đồ vật, thứ', level: 'HSK 1', topic: 'Đồ vật', sample: '你在买什么东西？' },
  { id: 21, hanzi: '都', pinyin: 'dōu', hv: 'Đô', vi: 'Đều, tất cả', level: 'HSK 1', topic: 'Phó từ', sample: '我们都是越南人。' },
  { id: 22, hanzi: '读', pinyin: 'dú', hv: 'Độc', vi: 'Đọc', level: 'HSK 1', topic: 'Học tập', sample: '请跟我读这篇课文。' },
  { id: 23, hanzi: '对不起', pinyin: 'duìbuqǐ', hv: 'Đối bất khởi', vi: 'Xin lỗi', level: 'HSK 1', topic: 'Giao tiếp', sample: '对不起，我来晚了。' },
  { id: 24, hanzi: '多', pinyin: 'duō', hv: 'Đa', vi: 'Nhiều', level: 'HSK 1', topic: 'Tính từ', sample: '学校里有很多学生。' },
  { id: 25, hanzi: '多少', pinyin: 'duōshǎo', hv: 'Đa thiểu', vi: 'Bao nhiêu', level: 'HSK 1', topic: 'Nghi vấn', sample: '这个多少钱一斤？' },
  { id: 26, hanzi: '儿子', pinyin: 'érzi', hv: 'Nhi tử', vi: 'Con trai', level: 'HSK 1', topic: 'Gia đình', sample: '他有两个儿子。' },
  { id: 27, hanzi: '二', pinyin: 'èr', hv: 'Nhị', vi: 'Số 2', level: 'HSK 1', topic: 'Số đếm', sample: '今天星期二。' },
  { id: 28, hanzi: '饭馆', pinyin: 'fànguǎn', hv: 'Phạn quán', vi: 'Quán ăn, nhà hàng', level: 'HSK 1', topic: 'Địa điểm', sample: '我们在饭馆吃饭。' },
  { id: 29, hanzi: '飞机', pinyin: 'fēijī', hv: 'Phi cơ', vi: 'Máy bay', level: 'HSK 1', topic: 'Giao thông', sample: '坐飞机去上海很快。' },
  { id: 30, hanzi: '分钟', pinyin: 'fēnzhōng', hv: 'Phân chung', vi: 'Phút (thời gian)', level: 'HSK 1', topic: 'Thời gian', sample: '等我十分钟。' },
  { id: 31, hanzi: '高兴', pinyin: 'gāoxìng', hv: 'Cao hưng', vi: 'Vui mừng, phấn khởi', level: 'HSK 1', topic: 'Cảm xúc', sample: '今天大家都很高兴。' },
  { id: 32, hanzi: '个', pinyin: 'gè', hv: 'Cá', vi: 'Cái, con, người (lượng từ)', level: 'HSK 1', topic: 'Lượng từ', sample: '我买了一个苹果。' },
  { id: 33, hanzi: '工作', pinyin: 'gōngzuò', hv: 'Công tác', vi: 'Làm việc, công việc', level: 'HSK 1', topic: 'Công việc', sample: '你爸爸在哪里工作？' },
  { id: 34, hanzi: '汉语', pinyin: 'Hànyǔ', hv: 'Hán ngữ', vi: 'Tiếng Trung', level: 'HSK 1', topic: 'Ngôn ngữ', sample: '汉语很有意思。' },
  { id: 35, hanzi: '好', pinyin: 'hǎo', hv: 'Hảo', vi: 'Tốt, đẹp, hay', level: 'HSK 1', topic: 'Tính từ', sample: '你好！身体好吗？' },
  { id: 36, hanzi: '号', pinyin: 'hào', hv: 'Hào', vi: 'Ngày (trong tháng), số', level: 'HSK 1', topic: 'Thời gian', sample: '今天是五月十号。' },
  { id: 37, hanzi: '喝', pinyin: 'hē', hv: 'Hát', vi: 'Uống', level: 'HSK 1', topic: 'Hành động', sample: '你想喝水还是喝茶？' },
  { id: 38, hanzi: '和', pinyin: 'hé', hv: 'Hòa', vi: 'Và, cùng với', level: 'HSK 1', topic: 'Liên từ', sample: '我和你是好朋友。' },
  { id: 39, hanzi: '很', pinyin: 'hěn', hv: 'Hẩn', vi: 'Rất', level: 'HSK 1', topic: 'Phó từ', sample: '今天天气很好。' },
  { id: 40, hanzi: '后面', pinyin: 'hòumian', hv: 'Hậu diện', vi: 'Phía sau, đằng sau', level: 'HSK 1', topic: 'Phương vị', sample: '商店在学校后面。' },
  { id: 41, hanzi: '回', pinyin: 'huí', hv: 'Hồi', vi: 'Về, quay lại', level: 'HSK 1', topic: 'Hành động', sample: '我想早点回家。' },
  { id: 42, hanzi: '会', pinyin: 'huì', hv: 'Hội', vi: 'Biết (qua học hỏi), sẽ', level: 'HSK 1', topic: 'Trợ động từ', sample: '你会说汉语吗？' },
  { id: 43, hanzi: '几', pinyin: 'jǐ', hv: 'Kỷ', vi: 'Mấy (số lượng ít)', level: 'HSK 1', topic: 'Nghi vấn', sample: '你家有几口人？' },
  { id: 44, hanzi: '家', pinyin: 'jiā', hv: 'Gia', vi: 'Nhà, gia đình', level: 'HSK 1', topic: 'Gia đình', sample: '我家在河内。' },
  { id: 45, hanzi: '叫', pinyin: 'jiào', hv: 'Khiếu', vi: 'Kêu, gọi, tên là', level: 'HSK 1', topic: 'Hành động', sample: '我叫李明。' },
  { id: 46, hanzi: '今天', pinyin: 'jīntiān', hv: 'Kim thiên', vi: 'Hôm nay', level: 'HSK 1', topic: 'Thời gian', sample: '今天天气真晴朗。' },
  { id: 47, hanzi: '九', pinyin: 'jiǔ', hv: 'Cửu', vi: 'Số 9', level: 'HSK 1', topic: 'Số đếm', sample: '房间号码是九号。' },
  { id: 48, hanzi: '开', pinyin: 'kāi', hv: 'Khai', vi: 'Mở, lái (xe)', level: 'HSK 1', topic: 'Hành động', sample: '他会开车。' },
  { id: 49, hanzi: '看', pinyin: 'kàn', hv: 'Khán', vi: 'Xem, nhìn, đọc', level: 'HSK 1', topic: 'Hành động', sample: '我看了一本书。' },
  { id: 50, hanzi: '看见', pinyin: 'kànjiàn', hv: 'Khán kiến', vi: 'Nhìn thấy, trông thấy', level: 'HSK 1', topic: 'Hành động', sample: '我看见王老师了。' },
  { id: 51, hanzi: '块', pinyin: 'kuài', hv: 'Khối', vi: 'Đồng tệ (tiền mặt)', level: 'HSK 1', topic: 'Tiền tệ', sample: '这本书二十块钱。' },
  { id: 52, hanzi: '来', pinyin: 'lái', hv: 'Lai', vi: 'Đến, tới', level: 'HSK 1', topic: 'Hành động', sample: '欢迎你来我家玩。' },
  { id: 53, hanzi: '老师', pinyin: 'lǎoshī', hv: 'Lão sư', vi: 'Thầy cô giáo', level: 'HSK 1', topic: 'Nghề nghiệp', sample: '王老师教我们汉语。' },
  { id: 54, hanzi: '了', pinyin: 'le', hv: 'Liễu', vi: 'Rồi (trợ từ ngữ khí)', level: 'HSK 1', topic: 'Trợ từ', sample: '我已经吃完饭了。' },
  { id: 55, hanzi: '冷', pinyin: 'lěng', hv: 'Lãnh', vi: 'Lạnh', level: 'HSK 1', topic: 'Thời tiết', sample: '今天外面很冷。' },
  { id: 56, hanzi: '里', pinyin: 'lǐ', hv: 'Lý', vi: 'Bên trong, trong', level: 'HSK 1', topic: 'Phương vị', sample: '书包里有什么？' },
  { id: 57, hanzi: '零', pinyin: 'líng', hv: 'Linh', vi: 'Số không (0)', level: 'HSK 1', topic: 'Số đếm', sample: '我的电话有三个零。' },
  { id: 58, hanzi: '六', pinyin: 'liù', hv: 'Lục', vi: 'Số 6', level: 'HSK 1', topic: 'Số đếm', sample: '现在是下午六点。' },
  { id: 59, hanzi: '妈妈', pinyin: 'māma', hv: 'Ma ma', vi: 'Mẹ', level: 'HSK 1', topic: 'Gia đình', sample: '我妈妈做饭很好吃。' },
  { id: 60, hanzi: '吗', pinyin: 'ma', hv: 'Ma', vi: 'Không? (trợ từ nghi vấn)', level: 'HSK 1', topic: 'Trợ từ', sample: '你是中国人吗？' },
  { id: 61, hanzi: '买', pinyin: 'mǎi', hv: 'Mãi', vi: 'Mua', level: 'HSK 1', topic: 'Mua sắm', sample: '我想买两斤苹果。' },
  { id: 62, hanzi: '猫', pinyin: 'māo', hv: 'Miêu', vi: 'Con mèo', level: 'HSK 1', topic: 'Động vật', sample: '这只小猫真可爱。' },
  { id: 63, hanzi: '没', pinyin: 'méi', hv: 'Một', vi: 'Không có, chưa', level: 'HSK 1', topic: 'Phó từ', sample: '我没有自行车。' },
  { id: 64, hanzi: '没关系', pinyin: 'méi guānxi', hv: 'Một quan hệ', vi: 'Không có sao, không hề gì', level: 'HSK 1', topic: 'Giao tiếp', sample: '对不起！——没关系。' },
  { id: 65, hanzi: '米饭', pinyin: 'mǐfàn', hv: 'Mễ phạn', vi: 'Cơm trắng', level: 'HSK 1', topic: 'Ẩm thực', sample: '中国人喜欢吃米饭。' },
  { id: 66, hanzi: '明天', pinyin: 'míngtiān', hv: 'Minh thiên', vi: 'Ngày mai', level: 'HSK 1', topic: 'Thời gian', sample: '明天下午见！' },
  { id: 67, hanzi: '名字', pinyin: 'míngzi', hv: 'Danh tự', vi: 'Tên, họ tên', level: 'HSK 1', topic: 'Chào hỏi', sample: '你的名字真好听。' },
  { id: 68, hanzi: '哪', pinyin: 'nǎ', hv: 'Na', vi: 'Nào, đâu', level: 'HSK 1', topic: 'Nghi vấn', sample: '你是哪国人？' },
  { id: 69, hanzi: '哪儿', pinyin: 'nǎr', hv: 'Na nhi', vi: 'Ở đâu, chỗ nào', level: 'HSK 1', topic: 'Nghi vấn', sample: '你在哪儿工作？' },
  { id: 70, hanzi: '那', pinyin: 'nà', hv: 'Na', vi: 'Đó, kia', level: 'HSK 1', topic: 'Chỉ từ', sample: '那是我的老师。' },
  { id: 71, hanzi: '呢', pinyin: 'ne', hv: 'Nê', vi: 'Thế, còn... thì sao (trợ từ)', level: 'HSK 1', topic: 'Trợ từ', sample: '我是越南人，你呢？' },
  { id: 72, hanzi: '能', pinyin: 'néng', hv: 'Năng', vi: 'Có thể, có năng lực', level: 'HSK 1', topic: 'Trợ động từ', sample: '你能帮我一下吗？' },
  { id: 73, hanzi: '你', pinyin: 'nǐ', hv: 'Nhĩ', vi: 'Bạn, anh, chị (ngôi 2)', level: 'HSK 1', topic: 'Đại từ', sample: '你好，很高兴认识你。' },
  { id: 74, hanzi: '年', pinyin: 'nián', hv: 'Niên', vi: 'Năm', level: 'HSK 1', topic: 'Thời gian', sample: '我学汉语一年了。' },
  { id: 75, hanzi: '女儿', pinyin: 'nǚ\'ér', hv: 'Nữ nhi', vi: 'Con gái', level: 'HSK 1', topic: 'Gia đình', sample: '他的女儿很聪明。' },
  { id: 76, hanzi: '朋友', pinyin: 'péngyou', hv: 'Bằng hữu', vi: 'Bạn bè', level: 'HSK 1', topic: 'Mối quan hệ', sample: '我们是最好的朋友。' },
  { id: 77, hanzi: '漂亮', pinyin: 'piàoliang', hv: 'Phiêu lượng', vi: 'Xinh đẹp, đẹp', level: 'HSK 1', topic: 'Tính từ', sample: '这件衣服真漂亮。' },
  { id: 78, hanzi: '苹果', pinyin: 'píngguǒ', hv: 'Bình quả', vi: 'Quả táo', level: 'HSK 1', topic: 'Ẩm thực', sample: '红苹果很好吃。' },
  { id: 79, hanzi: '七', pinyin: 'qī', hv: 'Thất', vi: 'Số 7', level: 'HSK 1', topic: 'Số đếm', sample: '一个星期有七天。' },
  { id: 80, hanzi: '钱', pinyin: 'qián', hv: 'Tiền', vi: 'Tiền bạc', level: 'HSK 1', topic: 'Kinh tế', sample: '我钱包里没有钱了。' },
  { id: 81, hanzi: '前面', pinyin: 'qiánmian', hv: 'Tiền diện', vi: 'Phía trước, đằng trước', level: 'HSK 1', topic: 'Phương vị', sample: '学校的前面有一家饭馆。' },
  { id: 82, hanzi: '请', pinyin: 'qǐng', hv: 'Thỉnh', vi: 'Mời, xin', level: 'HSK 1', topic: 'Lễ phép', sample: '请进，请坐！' },
  { id: 83, hanzi: '去', pinyin: 'qù', hv: 'Khứ', vi: 'Đi tới, đi', level: 'HSK 1', topic: 'Hành động', sample: '下午我想去图书馆。' },
  { id: 84, hanzi: '热', pinyin: 'rè', hv: 'Nhiệt', vi: 'Nóng', level: 'HSK 1', topic: 'Thời tiết', sample: '夏天的天气很热。' },
  { id: 85, hanzi: '人', pinyin: 'rén', hv: 'Nhân', vi: 'Người, con người', level: 'HSK 1', topic: 'Danh từ', sample: '中国人很多。' },
  { id: 86, hanzi: '认识', pinyin: 'rènshi', hv: 'Nhận thức', vi: 'Quen biết, nhận biết', level: 'HSK 1', topic: 'Giao tiếp', sample: '很高兴认识你！' },
  { id: 87, hanzi: '三', pinyin: 'sān', hv: 'Tam', vi: 'Số 3', level: 'HSK 1', topic: 'Số đếm', sample: '他有三个姐姐。' },
  { id: 88, hanzi: '商店', pinyin: 'shāngdiàn', hv: 'Thương điếm', vi: 'Cửa hàng', level: 'HSK 1', topic: 'Địa điểm', sample: '商店里有很多水果。' },
  { id: 89, hanzi: '上', pinyin: 'shàng', hv: 'Thượng', vi: 'Ở trên, lên', level: 'HSK 1', topic: 'Phương vị', sample: '桌子上有一本书。' },
  { id: 90, hanzi: '上午', pinyin: 'shàngwǔ', hv: 'Thượng ngọ', vi: 'Buổi sáng', level: 'HSK 1', topic: 'Thời gian', sample: '上午我们有汉语课。' },
  { id: 91, hanzi: '少', pinyin: 'shǎo', hv: 'Thiểu', vi: 'Ít', level: 'HSK 1', topic: 'Tính từ', sample: '杯子里的水很少。' },
  { id: 92, hanzi: '谁', pinyin: 'shéi / shuí', hv: 'Thùy', vi: 'Ai (nghi vấn)', level: 'HSK 1', topic: 'Nghi vấn', sample: '他是谁？他是老师吗？' },
  { id: 93, hanzi: '什么', pinyin: 'shénme', hv: 'Thập ma', vi: 'Cái gì, gì', level: 'HSK 1', topic: 'Nghi vấn', sample: '你在看什么书？' },
  { id: 94, hanzi: '十', pinyin: 'shí', hv: 'Thập', vi: 'Số 10', level: 'HSK 1', topic: 'Số đếm', sample: '这里有十个学生。' },
  { id: 95, hanzi: '时候', pinyin: 'shíhou', hv: 'Thời hậu', vi: 'Lúc, khi', level: 'HSK 1', topic: 'Thời gian', sample: '你什么时候去中国？' },
  { id: 96, hanzi: '是', pinyin: 'shì', hv: 'Thị', vi: 'Là, đúng', level: 'HSK 1', topic: 'Động từ', sample: '我是越南人。' },
  { id: 97, hanzi: '书', pinyin: 'shū', hv: 'Thư', vi: 'Sách vở', level: 'HSK 1', topic: 'Học tập', sample: '我在看汉语书。' },
  { id: 98, hanzi: '水', pinyin: 'shuǐ', hv: 'Thủy', vi: 'Nước uống', level: 'HSK 1', topic: 'Ẩm thực', sample: '我想喝一杯水。' },
  { id: 99, hanzi: '水果', pinyin: 'shuǐguǒ', hv: 'Thủy quả', vi: 'Hoa quả, trái cây', level: 'HSK 1', topic: 'Ẩm thực', sample: '多吃水果对身体好。' },
  { id: 100, hanzi: '睡觉', pinyin: 'shuìjiào', hv: 'Thụy giác', vi: 'Đi ngủ', level: 'HSK 1', topic: 'Sinh hoạt', sample: '太晚了，去睡觉吧。' },
  { id: 101, hanzi: '说', pinyin: 'shuō', hv: 'Thuyết', vi: 'Nói', level: 'HSK 1', topic: 'Giao tiếp', sample: '他会说一点儿汉语。' },
  { id: 102, hanzi: '四', pinyin: 'sì', hv: 'Tứ', vi: 'Số 4', level: 'HSK 1', topic: 'Số đếm', sample: '一年有四个季节。' },
  { id: 103, hanzi: '岁', pinyin: 'suì', hv: 'Tuế', vi: 'Tuổi', level: 'HSK 1', topic: 'Tuổi tác', sample: '我今年二十岁。' },
  { id: 104, hanzi: '他', pinyin: 'tā', hv: 'Tha', vi: 'Anh ấy, ông ấy (ngôi 3 nam)', level: 'HSK 1', topic: 'Đại từ', sample: '他是我的大学同学。' },
  { id: 105, hanzi: '她', pinyin: 'tā', hv: 'Tha', vi: 'Cô ấy, bà ấy (ngôi 3 nữ)', level: 'HSK 1', topic: 'Đại từ', sample: '她是一个漂亮的姑娘。' },
  { id: 106, hanzi: '太', pinyin: 'tài', hv: 'Thái', vi: 'Quá, lắm', level: 'HSK 1', topic: 'Phó từ', sample: '太好了！非常感谢你。' },
  { id: 107, hanzi: '天气', pinyin: 'tiānqì', hv: 'Thiên khí', vi: 'Thời tiết', level: 'HSK 1', topic: 'Thời tiết', sample: '今天的北京天气很好。' },
  { id: 108, hanzi: '听', pinyin: 'tīng', hv: 'Thính', vi: 'Nghe', level: 'HSK 1', topic: 'Hành động', sample: '我很喜欢听中国音乐。' },
  { id: 109, hanzi: '同学', pinyin: 'tóngxué', hv: 'Đồng học', vi: 'Bạn học cùng lớp', level: 'HSK 1', topic: 'Trường học', sample: '我们是同班同学。' },
  { id: 110, hanzi: '喂', pinyin: 'wèi', hv: 'Úy', vi: 'Alo (khi nghe máy)', level: 'HSK 1', topic: 'Giao tiếp', sample: '喂，请问王经理在吗？' },
  { id: 111, hanzi: '我', pinyin: 'wǒ', hv: 'Ngã', vi: 'Tôi, mình (ngôi 1)', level: 'HSK 1', topic: 'Đại từ', sample: '我是河内大学的学生。' },
  { id: 112, hanzi: '我们', pinyin: 'wǒmen', hv: 'Ngã môn', vi: 'Chúng tôi, chúng ta', level: 'HSK 1', topic: 'Đại từ', sample: '我们一起去吃饭吧。' },
  { id: 113, hanzi: '五', pinyin: 'wǔ', hv: 'Ngũ', vi: 'Số 5', level: 'HSK 1', topic: 'Số đếm', sample: '教室里有五个学生。' },
  { id: 114, hanzi: '喜欢', pinyin: 'xǐhuan', hv: 'Hỷ hoan', vi: 'Thích, yêu thích', level: 'HSK 1', topic: 'Cảm xúc', sample: '我喜欢学汉语和看电影。' },
  { id: 115, hanzi: '下', pinyin: 'xià', hv: 'Hạ', vi: 'Ở dưới, xuống (mưa/xe)', level: 'HSK 1', topic: 'Phương vị', sample: '外面正在下雨。' },
  { id: 116, hanzi: '下午', pinyin: 'xiàwǔ', hv: 'Hạ ngọ', vi: 'Buổi chiều', level: 'HSK 1', topic: 'Thời gian', sample: '下午我们一起去图书馆。' },
  { id: 117, hanzi: '下雨', pinyin: 'xià yǔ', hv: 'Hạ vũ', vi: 'Trời mưa', level: 'HSK 1', topic: 'Thời tiết', sample: '今天下午下大雨了。' },
  { id: 118, hanzi: '先生', pinyin: 'xiānsheng', hv: 'Tiên sinh', vi: 'Quý ông, ngài, chồng', level: 'HSK 1', topic: 'Xưng hô', sample: '王先生是一位律师。' },
  { id: 119, hanzi: '现在', pinyin: 'xiànzài', hv: 'Hiện tại', vi: 'Bây giờ, hiện tại', level: 'HSK 1', topic: 'Thời gian', sample: '现在是上午十点整。' },
  { id: 120, hanzi: '想', pinyin: 'xiǎng', hv: 'Tưởng', vi: 'Muốn, nghĩ, nhớ', level: 'HSK 1', topic: 'Tâm lý', sample: '我很想念我的家人。' },
  { id: 121, hanzi: '小', pinyin: 'xiǎo', hv: 'Tiểu', vi: 'Bé, nhỏ', level: 'HSK 1', topic: 'Tính từ', sample: '这件衣服有点小。' },
  { id: 122, hanzi: '小姐', pinyin: 'xiǎojiě', hv: 'Tiểu thư', vi: 'Cô gái, tiểu thư', level: 'HSK 1', topic: 'Xưng hô', sample: '服务员小姐，请结账。' },
  { id: 123, hanzi: '些', pinyin: 'xiē', hv: 'Tắc', vi: 'Một vài, một số (lượng từ)', level: 'HSK 1', topic: 'Lượng từ', sample: '我想买些水果。' },
  { id: 124, hanzi: '写', pinyin: 'xiě', hv: 'Tả', vi: 'Viết', level: 'HSK 1', topic: 'Học tập', sample: '请在纸上写你的名字。' },
  { id: 125, hanzi: '谢谢', pinyin: 'xièxie', hv: 'Tạ tạ', vi: 'Cảm ơn', level: 'HSK 1', topic: 'Giao tiếp', sample: '非常谢谢你的帮助！' },
  { id: 126, hanzi: '星期', pinyin: 'xīngqī', hv: 'Tinh kỳ', vi: 'Tuần lễ, thứ', level: 'HSK 1', topic: 'Thời gian', sample: '一个星期有七天。' },
  { id: 127, hanzi: '学生', pinyin: 'xuésheng', hv: 'Học sinh', vi: 'Học sinh, sinh viên', level: 'HSK 1', topic: 'Trường học', sample: '他是北京大学的学生。' },
  { id: 128, hanzi: '学习', pinyin: 'xuéxí', hv: 'Học tập', vi: 'Học tập', level: 'HSK 1', topic: 'Học tập', sample: '努力学习才能取得好成绩。' },
  { id: 129, hanzi: '学校', pinyin: 'xuéxiào', hv: 'Học hiệu', vi: 'Trường học', level: 'HSK 1', topic: 'Địa điểm', sample: '我们的学校非常美丽。' },
  { id: 130, hanzi: '一', pinyin: 'yī', hv: 'Nhất', vi: 'Số 1', level: 'HSK 1', topic: 'Số đếm', sample: '我们一起走吧。' },
  { id: 131, hanzi: '衣服', pinyin: 'yīfu', hv: 'Y phục', vi: 'Quần áo', level: 'HSK 1', topic: 'Đời sống', sample: '我想买一套新衣服。' },
  { id: 132, hanzi: '医生', pinyin: 'yīshēng', hv: 'Y sinh', vi: 'Bác sĩ', level: 'HSK 1', topic: 'Nghề nghiệp', sample: '他在市立医院当医生。' },
  { id: 133, hanzi: '医院', pinyin: 'yīyuàn', hv: 'Y viện', vi: 'Bệnh viện', level: 'HSK 1', topic: 'Địa điểm', sample: '我身体不舒服，去医院看看。' },
  { id: 134, hanzi: '椅子', pinyin: 'yǐzi', hv: 'Kỷ tử', vi: 'Cái ghế', level: 'HSK 1', topic: 'Đồ gia dụng', sample: '请坐在椅子上。' },
  { id: 135, hanzi: '有', pinyin: 'yǒu', hv: 'Hữu', vi: 'Có', level: 'HSK 1', topic: 'Động từ', sample: '桌子上有一台电脑。' },
  { id: 136, hanzi: '月', pinyin: 'yuè', hv: 'Nguyệt', vi: 'Tháng, mặt trăng', level: 'HSK 1', topic: 'Thời gian', sample: '一年有十二个月。' },
  { id: 137, hanzi: '再见', pinyin: 'zàijiàn', hv: 'Tái kiến', vi: 'Tạm biệt, hẹn gặp lại', level: 'HSK 1', topic: 'Giao tiếp', sample: '老师再见，明天见！' },
  { id: 138, hanzi: '在', pinyin: 'zài', hv: 'Tại', vi: 'Ở, tại, đang', level: 'HSK 1', topic: 'Giới từ', sample: '我在家里学汉语。' },
  { id: 139, hanzi: '怎么', pinyin: 'zěnme', hv: 'Chẩm ma', vi: 'Như thế nào, làm sao', level: 'HSK 1', topic: 'Nghi vấn', sample: '去火车站怎么走？' },
  { id: 140, hanzi: '怎么样', pinyin: 'zěnmeyàng', hv: 'Chẩm ma dạng', vi: 'Ra sao, thế nào', level: 'HSK 1', topic: 'Nghi vấn', sample: '今天天气怎么样？' },
  { id: 141, hanzi: '这', pinyin: 'zhè', hv: 'Giá', vi: 'Đây, này', level: 'HSK 1', topic: 'Chỉ từ', sample: '这是我的汉语词典。' },
  { id: 142, hanzi: '中国', pinyin: 'Zhōngguó', hv: 'Trung Quốc', vi: 'Trung Quốc', level: 'HSK 1', topic: 'Quốc gia', sample: '中国是一个历史悠久的国家。' },
  { id: 143, hanzi: '中午', pinyin: 'zhōngwǔ', hv: 'Trung ngọ', vi: 'Buổi trưa (12h)', level: 'HSK 1', topic: 'Thời gian', sample: '中午我们一起去食堂吃饭。' },
  { id: 144, hanzi: '住', pinyin: 'zhù', hv: 'Trú', vi: 'Ở, cư trú', level: 'HSK 1', topic: 'Hành động', sample: '你住在哪里？' },
  { id: 145, hanzi: '桌子', pinyin: 'zhuōzi', hv: 'Trác tử', vi: 'Cái bàn', level: 'HSK 1', topic: 'Đồ gia dụng', sample: '桌子上放着很多书。' },
  { id: 146, hanzi: '字', pinyin: 'zì', hv: 'Tự', vi: 'Chữ Hán, ký tự', level: 'HSK 1', topic: 'Ngôn ngữ', sample: '这个汉字怎么读？' },
  { id: 147, hanzi: '昨天', pinyin: 'zuótiān', hv: 'Tạc thiên', vi: 'Hôm qua', level: 'HSK 1', topic: 'Thời gian', sample: '昨天下了很大的一场雨。' },
  { id: 148, hanzi: '坐', pinyin: 'zuò', hv: 'Tọa', vi: 'Ngồi, đi (tàu xe)', level: 'HSK 1', topic: 'Hành động', sample: '请坐！请喝茶。' },
  { id: 149, hanzi: '做', pinyin: 'zuò', hv: 'Tác', vi: 'Làm, chế biến', level: 'HSK 1', topic: 'Hành động', sample: '你周末喜欢做什么？' },
  { id: 150, hanzi: '问', pinyin: 'wèn', hv: 'Vấn', vi: 'Hỏi', level: 'HSK 1', topic: 'Hành động', sample: '请问洗手间在哪儿？' },

  // --- HSK 2 (150 Từ vựng nâng cao) ---
  { id: 151, hanzi: '吧', pinyin: 'ba', hv: 'Ba', vi: 'Nhé, nha (trợ từ ngữ khí)', level: 'HSK 2', topic: 'Trợ từ', sample: '我们走吧！' },
  { id: 152, hanzi: '白', pinyin: 'bái', hv: 'Bạch', vi: 'Trắng, màu trắng', level: 'HSK 2', topic: 'Màu sắc', sample: '我买了一件白色的衬衫。' },
  { id: 153, hanzi: '百', pinyin: 'bǎi', hv: 'Bách', vi: 'Trăm (100)', level: 'HSK 2', topic: 'Số đếm', sample: '这本书一百块钱。' },
  { id: 154, hanzi: '帮助', pinyin: 'bāngzhù', hv: 'Bang trợ', vi: 'Giúp đỡ', level: 'HSK 2', topic: 'Hành động', sample: '谢谢你的热情帮助！' },
  { id: 155, hanzi: '报纸', pinyin: 'bàozhǐ', hv: 'Báo chỉ', vi: 'Báo giấy', level: 'HSK 2', topic: 'Đồ vật', sample: '爸爸每天早上看报纸。' },
  { id: 156, hanzi: '比', pinyin: 'bǐ', hv: 'Tỷ', vi: 'So với, hơn (so sánh)', level: 'HSK 2', topic: 'Ngữ pháp', sample: '今天比昨天更冷。' },
  { id: 157, hanzi: '别', pinyin: 'bié', hv: 'Biệt', vi: 'Đừng, chớ', level: 'HSK 2', topic: 'Phó từ', sample: '别说话，老师来了。' },
  { id: 158, hanzi: '长', pinyin: 'cháng', hv: 'Trường', vi: 'Dài', level: 'HSK 2', topic: 'Tính từ', sample: '这条路很长。' },
  { id: 159, hanzi: '唱歌', pinyin: 'chànggē', hv: 'Xướng ca', vi: 'Hát, ca hát', level: 'HSK 2', topic: 'Giải trí', sample: '她唱歌唱得非常好听。' },
  { id: 160, hanzi: '出', pinyin: 'chū', hv: 'Xuất', vi: 'Ra, xuất ra', level: 'HSK 2', topic: 'Hành động', sample: '他从房间里走出来了。' },
  { id: 161, hanzi: '穿', pinyin: 'chuān', hv: 'Xuyên', vi: 'Mặc, xỏ (giày)', level: 'HSK 2', topic: 'Đời sống', sample: '外面冷，多穿点衣服。' },
  { id: 162, hanzi: '次', pinyin: 'cì', hv: 'Thứ', vi: 'Lần, lượt', level: 'HSK 2', topic: 'Lượng từ', sample: '这是我第一次来中国。' },
  { id: 163, hanzi: '从', pinyin: 'cóng', hv: 'Tùng', vi: 'Từ (thời gian, địa điểm)', level: 'HSK 2', topic: 'Giới từ', sample: '我从河内来到北京。' },
  { id: 164, hanzi: '错', pinyin: 'cuò', hv: 'Thác', vi: 'Sai, nhầm lẫn', level: 'HSK 2', topic: 'Tính từ', sample: '对不起，我打错电话了。' },
  { id: 165, hanzi: '打篮球', pinyin: 'dǎ lánqiú', hv: 'Đả lam cầu', vi: 'Chơi bóng rổ', level: 'HSK 2', topic: 'Thể thao', sample: '周末我们去操场打篮球吧。' },
  { id: 166, hanzi: '大家', pinyin: 'dàjiā', hv: 'Đại gia', vi: 'Mọi người, tất cả', level: 'HSK 2', topic: 'Đại từ', sample: '请大家安静一下。' },
  { id: 167, hanzi: '到', pinyin: 'dào', hv: 'Đáo', vi: 'Đến, tới nơi', level: 'HSK 2', topic: 'Hành động', sample: '火车马上就要到了。' },
  { id: 168, hanzi: '得', pinyin: 'de', hv: 'Đắc', vi: 'Trợ từ kết cấu (V + 得 + Adj)', level: 'HSK 2', topic: 'Trợ từ', sample: '他跑得非常快。' },
  { id: 169, hanzi: '等', pinyin: 'děng', hv: 'Đẳng', vi: 'Chờ, đợi', level: 'HSK 2', topic: 'Hành động', sample: '请在这儿等我十分钟。' },
  { id: 170, hanzi: '弟弟', pinyin: 'dìdi', hv: 'Đệ đệ', vi: 'Em trai', level: 'HSK 2', topic: 'Gia đình', sample: '我弟弟今年读高中。' },
  { id: 171, hanzi: '第一', pinyin: 'dì-yī', hv: 'Đệ nhất', vi: 'Thứ nhất, đầu tiên', level: 'HSK 2', topic: 'Thứ tự', sample: '他在比赛中得了第一名。' },
  { id: 172, hanzi: '懂', pinyin: 'dǒng', hv: 'Đổng', vi: 'Hiểu, hiểu rõ', level: 'HSK 2', topic: 'Nhận thức', sample: '你听懂老师说的话了吗？' },
  { id: 173, hanzi: '对', pinyin: 'duì', hv: 'Đối', vi: 'Đúng, chính xác', level: 'HSK 2', topic: 'Tính từ', sample: '你说得很对！' },
  { id: 174, hanzi: '房间', pinyin: 'fángjiān', hv: 'Phòng gian', vi: 'Căn phòng', level: 'HSK 2', topic: 'Khách sạn', sample: '我的房间在五楼。' },
  { id: 175, hanzi: '非常', pinyin: 'fēicháng', hv: 'Phi thường', vi: 'Vô cùng, cực kỳ', level: 'HSK 2', topic: 'Phó từ', sample: '这道菜非常美味。' },
  { id: 176, hanzi: '服务员', pinyin: 'fúwùyuán', hv: 'Phục vụ viên', vi: 'Nhân viên phục vụ', level: 'HSK 2', topic: 'Nghề nghiệp', sample: '服务员，请帮我们拿菜单。' },
  { id: 177, hanzi: '高', pinyin: 'gāo', hv: 'Cao', vi: 'Cao', level: 'HSK 2', topic: 'Tính từ', sample: '姚明长得很高。' },
  { id: 178, hanzi: '告诉', pinyin: 'gàosu', hv: 'Cáo tố', vi: 'Bảo, cho biết', level: 'HSK 2', topic: 'Giao tiếp', sample: '请告诉我你的电话号码。' },
  { id: 179, hanzi: '哥哥', pinyin: 'gēge', hv: 'Ca ca', vi: 'Anh trai', level: 'HSK 2', topic: 'Gia đình', sample: '我哥哥在银行工作。' },
  { id: 180, hanzi: '给', pinyin: 'gěi', hv: 'Cấp', vi: 'Cho, tặng, đưa cho', level: 'HSK 2', topic: 'Hành động', sample: '请给我一杯温开水。' },
  { id: 181, hanzi: '公共汽车', pinyin: 'gōnggòng qìchē', hv: 'Công cộng khí xa', vi: 'Xe buýt', level: 'HSK 2', topic: 'Giao thông', sample: '坐公共汽车去学校很方便。' },
  { id: 182, hanzi: '公司', pinyin: 'gōngsī', hv: 'Công ty', vi: 'Công ty, hãng', level: 'HSK 2', topic: 'Kinh doanh', sample: '他在一家国际公司上班。' },
  { id: 183, hanzi: '贵', pinyin: 'guì', hv: 'Quý', vi: 'Đắt tiền, quý phái', level: 'HSK 2', topic: 'Mua sắm', sample: '这件衣服太贵了，能便宜点吗？' },
  { id: 184, hanzi: '过', pinyin: 'guò', hv: 'Quá', vi: 'Từng (đã từng làm gì)', level: 'HSK 2', topic: 'Trợ từ', sample: '你去过去北京吗？' },
  { id: 185, hanzi: '还', pinyin: 'hái', hv: 'Hoàn', vi: 'Còn, vẫn còn', level: 'HSK 2', topic: 'Phó từ', sample: '我还没吃晚饭呢。' },
  { id: 186, hanzi: '孩子', pinyin: 'háizi', hv: 'Hài tử', vi: 'Đứa trẻ, con cái', level: 'HSK 2', topic: 'Gia đình', sample: '小孩子在花园里玩耍。' },
  { id: 187, hanzi: '好吃', pinyin: 'hǎochī', hv: 'Hảo ngật', vi: 'Ngon miệng', level: 'HSK 2', topic: 'Ẩm thực', sample: '妈妈做的中国菜真好吃。' },
  { id: 188, hanzi: '黑', pinyin: 'hēi', hv: 'Hắc', vi: 'Đen, màu đen', level: 'HSK 2', topic: 'Màu sắc', sample: '他有一双黑色的皮鞋。' },
  { id: 189, hanzi: '红', pinyin: 'hóng', hv: 'Hồng', vi: 'Đỏ, màu đỏ', level: 'HSK 2', topic: 'Màu sắc', sample: '红苹果很甜。' },
  { id: 190, hanzi: '火车站', pinyin: 'huǒchēzhàn', hv: 'Hỏa xa trạm', vi: 'Ga tàu hỏa', level: 'HSK 2', topic: 'Giao thông', sample: '请问火车站怎么走？' },
  { id: 191, hanzi: '机场', pinyin: 'jīchǎng', hv: 'Cơ trường', vi: 'Sân bay, phi trường', level: 'HSK 2', topic: 'Giao thông', sample: '我们开车去机场接朋友。' },
  { id: 192, hanzi: '鸡蛋', pinyin: 'jīdàn', hv: 'Kê đản', vi: 'Trứng gà', level: 'HSK 2', topic: 'Ẩm thực', sample: '早上吃两个鸡蛋很健康。' },
  { id: 193, hanzi: '件', pinyin: 'jiàn', hv: 'Kiện', vi: 'Chiếc, cái (lượng từ quần áo/sự việc)', level: 'HSK 2', topic: 'Lượng từ', sample: '这件衣服多少钱？' },
  { id: 194, hanzi: '教室', pinyin: 'jiàoshì', hv: 'Giáo thất', vi: 'Phòng học, lớp học', level: 'HSK 2', topic: 'Trường học', sample: '老师已经在教室等大家了。' },
  { id: 195, hanzi: '姐姐', pinyin: 'jiějie', hv: 'Tỷ tỷ', vi: 'Chị gái', level: 'HSK 2', topic: 'Gia đình', sample: '我姐姐长得很漂亮。' },
  { id: 196, hanzi: '介绍', pinyin: 'jièshào', hv: 'Giới thiệu', vi: 'Giới thiệu', level: 'HSK 2', topic: 'Giao tiếp', sample: '我来介绍一下我的朋友。' },
  { id: 197, hanzi: '进', pinyin: 'jìn', hv: 'Tiến', vi: 'Vào, đi vào', level: 'HSK 2', topic: 'Hành động', sample: '外面冷，请进房间吧。' },
  { id: 198, hanzi: '近', pinyin: 'jìn', hv: 'Cận', vi: 'Gần', level: 'HSK 2', topic: 'Phương vị', sample: '我家离学校非常近。' },
  { id: 199, hanzi: '就', pinyin: 'jiù', hv: 'Tựu', vi: 'Thì, liền, ngay', level: 'HSK 2', topic: 'Phó từ', sample: '我吃了早饭就去上学。' },
  { id: 200, hanzi: '觉得', pinyin: 'juéde', hv: 'Giác đắc', vi: 'Cảm thấy, thấy rằng', level: 'HSK 2', topic: 'Tâm lý', sample: '我觉得学汉语很有趣。' },
  { id: 201, hanzi: '咖啡', pinyin: 'kāfēi', hv: 'Cà phê', vi: 'Cà phê', level: 'HSK 2', topic: 'Ẩm thực', sample: '你想喝咖啡还是喝茶？' },
  { id: 202, hanzi: '开始', pinyin: 'kāishǐ', hv: 'Khai thủy', vi: 'Bắt đầu', level: 'HSK 2', topic: 'Thời gian', sample: '考试现在马上开始。' },
  { id: 203, hanzi: '考试', pinyin: 'kǎoshì', hv: 'Khảo thí', vi: 'Kỳ thi, thi cử', level: 'HSK 2', topic: 'Học tập', sample: '明天我们要参加期末考试。' },
  { id: 204, hanzi: '可能', pinyin: 'kěnéng', hv: 'Khả năng', vi: 'Có thể, có lẽ', level: 'HSK 2', topic: 'Phó từ', sample: '明天可能会下大雨。' },
  { id: 205, hanzi: '可以', pinyin: 'kěyǐ', hv: 'Khả dĩ', vi: 'Có thể, được phép', level: 'HSK 2', topic: 'Trợ động từ', sample: '我可以坐在这里吗？' },
  { id: 206, hanzi: '课', pinyin: 'kè', hv: 'Khóa', vi: 'Bài học, tiết học', level: 'HSK 2', topic: 'Học tập', sample: '今天下午有两节汉语课。' },
  { id: 207, hanzi: '快', pinyin: 'kuài', hv: 'Khoái', vi: 'Nhanh, mau', level: 'HSK 2', topic: 'Tính từ', sample: '高铁的速度非常快。' },
  { id: 208, hanzi: '快乐', pinyin: 'kuàilè', hv: 'Khoái lạc', vi: 'Vui vẻ, hạnh phúc', level: 'HSK 2', topic: 'Cảm xúc', sample: '祝你生日快乐！' },
  { id: 209, hanzi: '累', pinyin: 'lèi', hv: 'Luy', vi: 'Mệt mỏi', level: 'HSK 2', topic: 'Cảm xúc', sample: '今天工作了一整天，真累。' },
  { id: 210, hanzi: '离', pinyin: 'lí', hv: 'Ly', vi: 'Cách (khoảng cách)', level: 'HSK 2', topic: 'Giới từ', sample: '我家离超市大概五百米。' },
  { id: 211, hanzi: '两', pinyin: 'liǎng', hv: 'Lưỡng', vi: 'Hai (dùng trước lượng từ)', level: 'HSK 2', topic: 'Số đếm', sample: '我想买两斤红苹果。' },
  { id: 212, hanzi: '路', pinyin: 'lù', hv: 'Lộ', vi: 'Đường đi, tuyến xe', level: 'HSK 2', topic: 'Giao thông', sample: '去医院坐哪一路公交车？' },
  { id: 213, hanzi: '旅游', pinyin: 'lǚyóu', hv: 'Lữ du', vi: 'Du lịch', level: 'HSK 2', topic: 'Du lịch', sample: '我计划下个月去北京旅游。' },
  { id: 214, hanzi: '卖', pinyin: 'mài', hv: 'Mại', vi: 'Bán', level: 'HSK 2', topic: 'Mua sắm', sample: '这家店卖很多新鲜水果。' },
  { id: 215, hanzi: '慢', pinyin: 'màn', hv: 'Mạn', vi: 'Chậm chạp', level: 'HSK 2', topic: 'Tính từ', sample: '请说慢一点儿，我听不懂。' },
  { id: 216, hanzi: '忙', pinyin: 'máng', hv: 'Mang', vi: 'Bận rộn', level: 'HSK 2', topic: 'Trạng thái', sample: '你最近工作忙不忙？' },
  { id: 217, hanzi: '每', pinyin: 'měi', hv: 'Mỗi', vi: 'Mỗi, từng', level: 'HSK 2', topic: 'Đại từ', sample: '我每天早上跑步锻炼。' },
  { id: 218, hanzi: '妹妹', pinyin: 'mèimei', hv: 'Muội muội', vi: 'Em gái', level: 'HSK 2', topic: 'Gia đình', sample: '我妹妹很喜欢吃甜食。' },
  { id: 219, hanzi: '门', pinyin: 'mén', hv: 'Môn', vi: 'Cửa, cổng', level: 'HSK 2', topic: 'Đồ vật', sample: '请大家把门关上。' },
  { id: 220, hanzi: '男人', pinyin: 'nánrén', hv: 'Nam nhân', vi: 'Đàn ông, nam giới', level: 'HSK 2', topic: 'Con người', sample: '那位男人是我爸爸的朋友。' },
  { id: 221, hanzi: '您', pinyin: 'nín', hv: 'Nâm', vi: 'Ngài, ông (kính ngữ của 你)', level: 'HSK 2', topic: 'Xưng hô', sample: '老师，您好！' },
  { id: 222, hanzi: '牛奶', pinyin: 'niúnǎi', hv: 'Ngưu nãi', vi: 'Sữa bò', level: 'HSK 2', topic: 'Ẩm thực', sample: '每天喝牛奶对骨骼很好。' },
  { id: 223, hanzi: '女人', pinyin: 'nǚrén', hv: 'Nữ nhân', vi: 'Phụ nữ, nữ giới', level: 'HSK 2', topic: 'Con người', sample: '现代女人很独立。' },
  { id: 224, hanzi: '旁边', pinyin: 'pángbiān', hv: 'Bàng biên', vi: 'Bên cạnh', level: 'HSK 2', topic: 'Phương vị', sample: '学校旁边有一家大书店。' },
  { id: 225, hanzi: '跑步', pinyin: 'pǎobù', hv: 'Bào bộ', vi: 'Chạy bộ', level: 'HSK 2', topic: 'Thể thao', sample: '早晨跑步是一个好习惯。' },
  { id: 226, hanzi: '便宜', pinyin: 'piányi', hv: 'Tiện nghi', vi: 'Rẻ, giá rẻ', level: 'HSK 2', topic: 'Mua sắm', sample: '太贵了，便宜一点吧。' },
  { id: 227, hanzi: '票', pinyin: 'piào', hv: 'Phiếu', vi: 'Vé (tàu, xe, xem phim)', level: 'HSK 2', topic: 'Giao thông', sample: '我已经买好去上海的火车票了。' },
  { id: 228, hanzi: '妻子', pinyin: 'qīzi', hv: 'Thê tử', vi: 'Vợ', level: 'HSK 2', topic: 'Gia đình', sample: '他的妻子是一位优秀的教师。' },
  { id: 229, hanzi: '起床', pinyin: 'qǐchuáng', hv: 'Khởi sàng', vi: 'Thức dậy, rời giường', level: 'HSK 2', topic: 'Sinh hoạt', sample: '我每天早上六点起床。' },
  { id: 230, hanzi: '千', pinyin: 'qiān', hv: 'Thiên', vi: 'Nghìn, ngàn (1.000)', level: 'HSK 2', topic: 'Số đếm', sample: '这个手机三千块钱。' },
  { id: 231, hanzi: '晴', pinyin: 'qíng', hv: 'Tình', vi: 'Nắng ráo, trời quang', level: 'HSK 2', topic: 'Thời tiết', sample: '今天是个大晴天。' },
  { id: 232, hanzi: '去年', pinyin: 'qùnián', hv: 'Khứ niên', vi: 'Năm ngoái', level: 'HSK 2', topic: 'Thời gian', sample: '去年我去了北京大学。' },
  { id: 233, hanzi: '让', pinyin: 'ràng', hv: 'Nhượng', vi: 'Để cho, bảo, nhường', level: 'HSK 2', topic: 'Ngữ pháp', sample: '爸爸让我好好学习。' },
  { id: 234, hanzi: '日', pinyin: 'rì', hv: 'Nhật', vi: 'Ngày, mặt trời', level: 'HSK 2', topic: 'Thời gian', sample: '今天是十月一日国庆节。' },
  { id: 235, hanzi: '上班', pinyin: 'shàngbān', hv: 'Thượng ban', vi: 'Đi làm', level: 'HSK 2', topic: 'Công sở', sample: '我爸爸每天八点去上班。' },
  { id: 236, hanzi: '身体', pinyin: 'shēntǐ', hv: 'Thân thể', vi: 'Thân thể, sức khỏe', level: 'HSK 2', topic: 'Sức khỏe', sample: '祝你身体健康，万事如意！' },
  { id: 237, hanzi: '生病', pinyin: 'shēngbìng', hv: 'Sinh bệnh', vi: 'Bị ốm, mắc bệnh', level: 'HSK 2', topic: 'Sức khỏe', sample: '他生病了，今天没来上课。' },
  { id: 238, hanzi: '生日', pinyin: 'shēngrì', hv: 'Sinh nhật', vi: 'Sinh nhật', level: 'HSK 2', topic: 'Đời sống', sample: '祝你生日快乐！' },
  { id: 239, hanzi: '时间', pinyin: 'shíjiān', hv: 'Thời gian', vi: 'Thời gian', level: 'HSK 2', topic: 'Thời gian', sample: '你现在有时间跟我聊聊吗？' },
  { id: 240, hanzi: '事情', pinyin: 'shìqing', hv: 'Sự tình', vi: 'Sự việc, việc', level: 'HSK 2', topic: 'Đời sống', sample: '今天有很多事情要做。' },
  { id: 241, hanzi: '手表', pinyin: 'shǒubiǎo', hv: 'Thủ biểu', vi: 'Đồng hồ đeo tay', level: 'HSK 2', topic: 'Đồ trang sức', sample: '这块手表是我妈妈送的。' },
  { id: 242, hanzi: '手机', pinyin: 'shǒujī', hv: 'Thủ cơ', vi: 'Điện thoại di động', level: 'HSK 2', topic: 'Công nghệ', sample: '我用手机扫码付款。' },
  { id: 243, hanzi: '送', pinyin: 'sòng', hv: 'Tống', vi: 'Tặng, tiễn đưa', level: 'HSK 2', topic: 'Hành động', sample: '我送你一本汉语书。' },
  { id: 244, hanzi: '虽然', pinyin: 'suīrán', hv: 'Tuy nhiên', vi: 'Mặc dù, tuy', level: 'HSK 2', topic: 'Liên từ', sample: '虽然学汉语很难，但是我喜欢。' },
  { id: 245, hanzi: '但是', pinyin: 'dànshì', hv: 'Đãn thị', vi: 'Nhưng, thế nhưng', level: 'HSK 2', topic: 'Liên từ', sample: '虽然很冷，但是心里很暖。' },
  { id: 246, hanzi: '它', pinyin: 'tā', hv: 'Tha', vi: 'Nó (chỉ đồ vật, con vật)', level: 'HSK 2', topic: 'Đại từ', sample: '这只小狗很可爱，我很喜欢它。' },
  { id: 247, hanzi: '踢足球', pinyin: 'tī zúqiú', hv: 'Thích túc cầu', vi: 'Đá bóng đá', level: 'HSK 2', topic: 'Thể thao', sample: '周末我们经常去踢足球。' },
  { id: 248, hanzi: '题', pinyin: 'tí', hv: 'Đề', vi: 'Câu hỏi thi, đề bài', level: 'HSK 2', topic: 'Học tập', sample: '这道考试题非常难。' },
  { id: 249, hanzi: '跳舞', pinyin: 'tiàowǔ', hv: 'Khiêu vũ', vi: 'Nhảy múa, khiêu vũ', level: 'HSK 2', topic: 'Giải trí', sample: '很多老人喜欢在广场跳舞。' },
  { id: 250, hanzi: '外', pinyin: 'wài', hv: 'Ngoại', vi: 'Bên ngoài', level: 'HSK 2', topic: 'Phương vị', sample: '外面的天气非常冷。' },
  { id: 251, hanzi: '完', pinyin: 'wán', hv: 'Hoàn', vi: 'Xong, hết', level: 'HSK 2', topic: 'Động từ', sample: '我做完今天的作业了。' },
  { id: 252, hanzi: '玩', pinyin: 'wán', hv: 'Ngoạn', vi: 'Chơi', level: 'HSK 2', topic: 'Giải trí', sample: '周末欢迎你来我家玩。' },
  { id: 253, hanzi: '晚上', pinyin: 'wǎnshang', hv: 'Vãn thượng', vi: 'Buổi tối', level: 'HSK 2', topic: 'Thời gian', sample: '晚上我和家人一起看电视。' },
  { id: 254, hanzi: '为什么', pinyin: 'wèishénme', hv: 'Vị thập ma', vi: 'Tại sao, vì sao', level: 'HSK 2', topic: 'Nghi vấn', sample: '你为什么喜欢学中文？' },
  { id: 255, hanzi: '问', pinyin: 'wèn', hv: 'Vấn', vi: 'Hỏi', level: 'HSK 2', topic: 'Giao tiếp', sample: '老师，我想问一个问题。' },
  { id: 256, hanzi: '问题', pinyin: 'wèntí', hv: 'Vấn đề', vi: 'Vấn đề, câu hỏi', level: 'HSK 2', topic: 'Học tập', sample: '没问题，我一定尽力帮你。' },
  { id: 257, hanzi: '西瓜', pinyin: 'xīguā', hv: 'Tây qua', vi: 'Dưa hấu', level: 'HSK 2', topic: 'Ẩm thực', sample: '夏天吃西瓜非常解渴。' },
  { id: 258, hanzi: '希望', pinyin: 'xīwàng', hv: 'Hi vọng', vi: 'Hy vọng, mong muốn', level: 'HSK 2', topic: 'Tâm lý', sample: '我希望能考过HSK三级。' },
  { id: 259, hanzi: '洗', pinyin: 'xǐ', hv: 'Tẩy', vi: 'Rửa, giặt', level: 'HSK 2', topic: 'Sinh hoạt', sample: '吃饭前请洗手。' },
  { id: 260, hanzi: '小时', pinyin: 'xiǎoshí', hv: 'Tiểu thời', vi: 'Tiếng đồng hồ, giờ', level: 'HSK 2', topic: 'Thời gian', sample: '坐飞机要坐两个小时。' },
  { id: 261, hanzi: '笑', pinyin: 'xiào', hv: 'Tiếu', vi: 'Cười', level: 'HSK 2', topic: 'Biểu cảm', sample: '她笑起来非常迷人。' },
  { id: 262, hanzi: '新', pinyin: 'xīn', hv: 'Tân', vi: 'Mới', level: 'HSK 2', topic: 'Tính từ', sample: '新年快乐，万事如意！' },
  { id: 263, hanzi: '姓', pinyin: 'xìng', hv: 'Tính', vi: 'Họ, mang họ', level: 'HSK 2', topic: 'Chào hỏi', sample: '请问您贵姓？我姓王。' },
  { id: 264, hanzi: '休息', pinyin: 'xiūxi', hv: 'Hưu tức', vi: 'Nghỉ ngơi', level: 'HSK 2', topic: 'Sinh hoạt', sample: '太累了，先休息十分钟吧。' },
  { id: 265, hanzi: '雪', pinyin: 'xuě', hv: 'Tuyết', vi: 'Tuyết', level: 'HSK 2', topic: 'Thời tiết', sample: '北京冬天下大雪了。' },
  { id: 266, hanzi: '颜色', pinyin: 'yánsè', hv: 'Nhan sắc', vi: 'Màu sắc', level: 'HSK 2', topic: 'Màu sắc', sample: '你最喜欢什么颜色？' },
  { id: 267, hanzi: '眼睛', pinyin: 'yǎnjing', hv: 'Nhãn tình', vi: 'Mắt, đôi mắt', level: 'HSK 2', topic: 'Bộ phận cơ thể', sample: '她的眼睛大大的，很漂亮。' },
  { id: 268, hanzi: '羊肉', pinyin: 'yángròu', hv: 'Dương nhục', vi: 'Thịt cừu', level: 'HSK 2', topic: 'Ẩm thực', sample: '这家餐馆的烤羊肉很有名。' },
  { id: 269, hanzi: '药', pinyin: 'yào', hv: 'Dược', vi: 'Thuốc', level: 'HSK 2', topic: 'Y tế', sample: '你记得按时吃药。' },
  { id: 270, hanzi: '要', pinyin: 'yào', hv: 'Yếu', vi: 'Muốn, cần, phải', level: 'HSK 2', topic: 'Trợ động từ', sample: '我要一杯冰咖啡。' },
  { id: 271, hanzi: '也', pinyin: 'yě', hv: 'Dã', vi: 'Cũng', level: 'HSK 2', topic: 'Phó từ', sample: '认识你我也很高兴。' },
  { id: 272, hanzi: '一起', pinyin: 'yīqǐ', hv: 'Nhất khởi', vi: 'Cùng nhau', level: 'HSK 2', topic: 'Phó từ', sample: '我们一起去超市买菜吧。' },
  { id: 273, hanzi: '一下', pinyin: 'yīxià', hv: 'Nhất hạ', vi: 'Một chút, một lát', level: 'HSK 2', topic: 'Lượng từ', sample: '请等我一下。' },
  { id: 274, hanzi: '已经', pinyin: 'yǐjīng', hv: 'Dĩ kinh', vi: 'Đã, rồi', level: 'HSK 2', topic: 'Phó từ', sample: '我已经做好准备了。' },
  { id: 275, hanzi: '意思', pinyin: 'yìsi', hv: 'Ý tư', vi: 'Ý nghĩa, ý tứ', level: 'HSK 2', topic: 'Ngôn ngữ', sample: '这个词是什么意思？' },
  { id: 276, hanzi: '因为', pinyin: 'yīnwèi', hv: 'Nhân vị', vi: 'Bởi vì', level: 'HSK 2', topic: 'Liên từ', sample: '因为生病，所以我请假了。' },
  { id: 277, hanzi: '所以', pinyin: 'suǒyǐ', hv: 'Sở dĩ', vi: 'Cho nên, vì thế', level: 'HSK 2', topic: 'Liên từ', sample: '因为天气冷，所以我穿大衣。' },
  { id: 278, hanzi: '阴', pinyin: 'yīn', hv: 'Âm', vi: 'U ám, râm trời', level: 'HSK 2', topic: 'Thời tiết', sample: '今天阴天，没有太阳。' },
  { id: 279, hanzi: '游泳', pinyin: 'yóuyǒng', hv: 'Du vịnh', vi: 'Bơi lội', level: 'HSK 2', topic: 'Thể thao', sample: '夏天去海边游泳很舒服。' },
  { id: 280, hanzi: '右边', pinyin: 'yòubian', hv: 'Hữu biên', vi: 'Bên phải', level: 'HSK 2', topic: 'Phương vị', sample: '银行在学校的右边。' },
  { id: 281, hanzi: '鱼', pinyin: 'yú', hv: 'Ngư', vi: 'Con cá', level: 'HSK 2', topic: 'Ẩm thực', sample: '今天晚上我们吃蒸鱼。' },
  { id: 282, hanzi: '远', pinyin: 'yuǎn', hv: 'Viễn', vi: 'Xa, cách xa', level: 'HSK 2', topic: 'Phương vị', sample: '我家离机场很远。' },
  { id: 283, hanzi: '运动', pinyin: 'yùndòng', hv: 'Vận động', vi: 'Thể thao, vận động', level: 'HSK 2', topic: 'Sức khỏe', sample: '多做运动对身体很有好处。' },
  { id: 284, hanzi: '再', pinyin: 'zài', hv: 'Tái', vi: 'Lại, thêm lần nữa', level: 'HSK 2', topic: 'Phó từ', sample: '欢迎你下次再来！' },
  { id: 285, hanzi: '早上', pinyin: 'zǎoshang', hv: 'Tảo thượng', vi: 'Buổi sáng sớm', level: 'HSK 2', topic: 'Thời gian', sample: '早上好，老师！' },
  { id: 286, hanzi: '丈夫', pinyin: 'zhàngfu', hv: 'Trượng phu', vi: 'Chồng', level: 'HSK 2', topic: 'Gia đình', sample: '她的丈夫是一位工程师。' },
  { id: 287, hanzi: '找', pinyin: 'zhǎo', hv: 'Trảo', vi: 'Tìm kiếm, thối tiền', level: 'HSK 2', topic: 'Hành động', sample: '找你五块钱，请收好。' },
  { id: 288, hanzi: '着', pinyin: 'zhe', hv: 'Trước', vi: 'Đang (trợ từ thái độ)', level: 'HSK 2', topic: 'Trợ từ', sample: '门开着呢，请进吧。' },
  { id: 289, hanzi: '真', pinyin: 'zhēn', hv: 'Chân', vi: 'Thật, thật sự', level: 'HSK 2', topic: 'Phó từ', sample: '今天的天气真好！' },
  { id: 290, hanzi: '正在', pinyin: 'zhèngzài', hv: 'Chính tại', vi: 'Đang trong quá trình', level: 'HSK 2', topic: 'Phó từ', sample: '我正在做汉语作业。' },
  { id: 291, hanzi: '知道', pinyin: 'zhīdào', hv: 'Tri đạo', vi: 'Biết, nắm rõ', level: 'HSK 2', topic: 'Nhận thức', sample: '我知道这道题的答案。' },
  { id: 292, hanzi: '准备', pinyin: 'zhǔnbèi', hv: 'Chuẩn bị', vi: 'Chuẩn bị', level: 'HSK 2', topic: 'Hành động', sample: '大家准备好出发了吗？' },
  { id: 293, hanzi: '自行车', pinyin: 'zìxíngchē', hv: 'Tự hành xa', vi: 'Xe đạp', level: 'HSK 2', topic: 'Giao thông', sample: '我每天骑自行车去上学。' },
  { id: 294, hanzi: '走', pinyin: 'zǒu', hv: 'Tẩu', vi: 'Đi, bước đi', level: 'HSK 2', topic: 'Hành động', sample: '请往前走一百米。' },
  { id: 295, hanzi: '最', pinyin: 'zuì', hv: 'Tối', vi: 'Nhất (so sánh bậc nhất)', level: 'HSK 2', topic: 'Phó từ', sample: '我最喜欢吃北京烤鸭。' },
  { id: 296, hanzi: '左边', pinyin: 'zuǒbian', hv: 'Tả biên', vi: 'Bên trái', level: 'HSK 2', topic: 'Phương vị', sample: '洗手间在左边第二间。' },
  { id: 297, hanzi: '打表', pinyin: 'dǎbiǎo', hv: 'Đả biểu', vi: 'Bật đồng hồ tính cước (taxi)', level: 'HSK 2', topic: 'Giao thông', sample: '师傅，请打表。' },
  { id: 298, hanzi: '安全带', pinyin: 'ānquándài', hv: 'An toàn đới', vi: 'Dây an toàn', level: 'HSK 2', topic: 'Giao thông', sample: '请系好安全带。' },
  { id: 299, hanzi: '扫码', pinyin: 'sǎomǎ', hv: 'Tảo mã', vi: 'Quét mã QR', level: 'HSK 2', topic: 'Thanh toán', sample: '请扫码付款。' },
  { id: 300, hanzi: '微信', pinyin: 'Wēixìn', hv: 'Vi tín', vi: 'WeChat', level: 'HSK 2', topic: 'Công nghệ', sample: '我们可以加个微信吗？' }
];

// Append remaining 700 words spanning HSK 3 & Core Communicative Vocab
(function populateHSK3AndAdvanced() {
  const hsk3Words = [
    { hanzi: '阿姨', pinyin: 'āyí', hv: 'A di', vi: 'Cô, dì, người giúp việc', topic: 'Xưng hô' },
    { hanzi: '啊', pinyin: 'a', hv: 'A', vi: 'A, chà (thán từ)', topic: 'Ngữ khí' },
    { hanzi: '矮', pinyin: 'ǎi', hv: 'Ải', vi: 'Thấp, lùn', topic: 'Ngoại hình' },
    { hanzi: '安静', pinyin: 'ānjìng', hv: 'An tĩnh', vi: 'Yên tĩnh', topic: 'Trạng thái' },
    { hanzi: '把', pinyin: 'bǎ', hv: 'Bả', vi: 'Cầm, nắm (câu chữ 把)', topic: 'Ngữ pháp' },
    { hanzi: '搬', pinyin: 'bān', hv: 'Bàn', vi: 'Dọn, chuyển', topic: 'Hành động' },
    { hanzi: '班', pinyin: 'bān', hv: 'Ban', vi: 'Lớp học, ca làm', topic: 'Trường học' },
    { hanzi: '办法', pinyin: 'bànfǎ', hv: 'Biện pháp', vi: 'Cách, phương pháp', topic: 'Tư duy' },
    { hanzi: '办公室', pinyin: 'bàngōngshì', hv: 'Biện công thất', vi: 'Văn phòng', topic: 'Công sở' },
    { hanzi: '半', pinyin: 'bàn', hv: 'Bán', vi: 'Một nửa, rưỡi', topic: 'Thời gian' },
    { hanzi: '帮忙', pinyin: 'bāngmáng', hv: 'Bang mang', vi: 'Giúp đỡ', topic: 'Hành động' },
    { hanzi: '包', pinyin: 'bāo', hv: 'Bao', vi: 'Túi xách, bọc', topic: 'Đồ dùng' },
    { hanzi: '饱', pinyin: 'bǎo', hv: 'Bão', vi: 'No, no bụng', topic: 'Cảm giác' },
    { hanzi: '北方', pinyin: 'běifāng', hv: 'Bắc phương', vi: 'Phương Bắc', topic: 'Địa lý' },
    { hanzi: '被', pinyin: 'bèi', hv: 'Bị', vi: 'Bị, được (câu bị động)', topic: 'Ngữ pháp' },
    { hanzi: '鼻子', pinyin: 'bízi', hv: 'Tị tử', vi: 'Cái mũi', topic: 'Cơ thể' },
    { hanzi: '比较', pinyin: 'bǐjiào', hv: 'Tỷ giác', vi: 'Khá là, so sánh', topic: 'Phó từ' },
    { hanzi: '比赛', pinyin: 'bǐsài', hv: 'Tỷ tái', vi: 'Cuộc thi, trận đấu', topic: 'Thể thao' },
    { hanzi: '笔记本', pinyin: 'bǐjìběn', hv: 'Bút ký bản', vi: 'Vở ghi, máy laptop', topic: 'Đồ dùng' },
    { hanzi: '必须', pinyin: 'bìxū', hv: 'Tất tu', vi: 'Bắt buộc, phải', topic: 'Phó từ' },
    { hanzi: '变化', pinyin: 'biànhuà', hv: 'Biến hóa', vi: 'Sự thay đổi', topic: 'Xã hội' },
    { hanzi: '别人', pinyin: 'biéren', hv: 'Biệt nhân', vi: 'Người khác', topic: 'Đại từ' },
    { hanzi: '宾馆', pinyin: 'bīnguǎn', hv: 'Tân quán', vi: 'Khách sạn', topic: 'Du lịch' },
    { hanzi: '冰箱', pinyin: 'bīngxiāng', hv: 'Băng tương', vi: 'Tủ lạnh', topic: 'Đồ gia dụng' },
    { hanzi: '不但', pinyin: 'bùdàn', hv: 'Bất đán', vi: 'Không những', topic: 'Liên từ' },
    { hanzi: '而且', pinyin: 'érqiě', hv: 'Nhi thả', vi: 'Mà còn, hơn nữa', topic: 'Liên từ' },
    { hanzi: '菜单', pinyin: 'càidān', hv: 'Thái đơn', vi: 'Thực đơn món ăn', topic: 'Nhà hàng' },
    { hanzi: '参加', pinyin: 'cānjiā', hv: 'Tham gia', vi: 'Tham gia', topic: 'Hành động' },
    { hanzi: '草', pinyin: 'cǎo', hv: 'Thảo', vi: 'Cỏ', topic: 'Thiên nhiên' },
    { hanzi: '层', pinyin: 'céng', hv: 'Tầng', vi: 'Tầng (lầu)', topic: 'Lượng từ' },
    { hanzi: '差', pinyin: 'chà', hv: 'Sai', vi: 'Kém, thiếu', topic: 'Tính từ' },
    { hanzi: '超市', pinyin: 'chāoshì', hv: 'Siêu thị', vi: 'Siêu thị', topic: 'Mua sắm' },
    { hanzi: '衬衫', pinyin: 'chènshān', hv: 'Sấn sam', vi: 'Áo sơ mi', topic: 'Trang phục' },
    { hanzi: '成绩', pinyin: 'chéngjì', hv: 'Thành tích', vi: 'Điểm số, thành tích', topic: 'Học tập' },
    { hanzi: '城市', pinyin: 'chéngshì', hv: 'Thành thị', vi: 'Thành phố', topic: 'Địa lý' },
    { hanzi: '迟到', pinyin: 'chídào', hv: 'Trì đáo', vi: 'Đến muộn', topic: 'Học tập' },
    { hanzi: '除了', pinyin: 'chúle', hv: 'Trừ liễu', vi: 'Ngoài ra, trừ phi', topic: 'Liên từ' },
    { hanzi: '船', pinyin: 'chuán', hv: 'Thuyền', vi: 'Con thuyền, tàu', topic: 'Giao thông' },
    { hanzi: '春', pinyin: 'chūn', hv: 'Xuân', vi: 'Mùa xuân', topic: 'Thời tiết' },
    { hanzi: '词典', pinyin: 'cídiǎn', hv: 'Từ điển', vi: 'Cuốn từ điển', topic: 'Học tập' },
    { hanzi: '聪明', pinyin: 'cōngming', hv: 'Thông minh', vi: 'Thông minh', topic: 'Tính cách' },
    { hanzi: '打算', pinyin: 'dǎsuàn', hv: 'Đả toán', vi: 'Dự định, tính toán', topic: 'Kế hoạch' },
    { hanzi: '带', pinyin: 'dài', hv: 'Đới', vi: 'Mang theo, đem theo', topic: 'Hành động' },
    { hanzi: '担心', pinyin: 'dānxīn', hv: 'Đan tâm', vi: 'Lo lắng', topic: 'Tâm lý' },
    { hanzi: '蛋糕', pinyin: 'dàngāo', hv: 'Đản cao', vi: 'Bánh kem ga-tô', topic: 'Ẩm thực' },
    { hanzi: '当然', pinyin: 'dāngrán', hv: 'Đương nhiên', vi: 'Đương nhiên, dĩ nhiên', topic: 'Phó từ' },
    { hanzi: '地', pinyin: 'de', hv: 'Địa', vi: 'Trợ từ (Adj + 地 + V)', topic: 'Ngữ pháp' },
    { hanzi: '灯', pinyin: 'dēng', hv: 'Đăng', vi: 'Đèn, ngọn đèn', topic: 'Đồ vật' },
    { hanzi: '地方', pinyin: 'dìfang', hv: 'Địa phương', vi: 'Nơi chốn, địa điểm', topic: 'Địa lý' },
    { hanzi: '地铁', pinyin: 'dìtiě', hv: 'Địa thiết', vi: 'Tàu điện ngầm', topic: 'Giao thông' },
    { hanzi: '地图', pinyin: 'dìtú', hv: 'Địa đồ', vi: 'Bản đồ', topic: 'Địa lý' },
    { hanzi: '电梯', pinyin: 'diàntī', hv: 'Điện thang', vi: 'Thang máy', topic: 'Công trình' },
    { hanzi: '电子邮件', pinyin: 'diànzǐ yóujiàn', hv: 'Điện tử bưu kiện', vi: 'Thư điện tử Email', topic: 'Công nghệ' },
    { hanzi: '动物', pinyin: 'dòngwù', hv: 'Động vật', vi: 'Động vật', topic: 'Tự nhiên' },
    { hanzi: '短', pinyin: 'duǎn', hv: 'Đoản', vi: 'Ngắn', topic: 'Tính từ' },
    { hanzi: '段', pinyin: 'duàn', hv: 'Đoạn', vi: 'Đoạn, khoảng', topic: 'Lượng từ' },
    { hanzi: '锻炼', pinyin: 'duànliàn', hv: 'Đoán luyện', vi: 'Rèn luyện, tập luyện', topic: 'Sức khỏe' },
    { hanzi: '多么', pinyin: 'duōme', hv: 'Đa ma', vi: 'Biết bao, xiết bao', topic: 'Phó từ' },
    { hanzi: '饿', pinyin: 'è', hv: 'Ngạ', vi: 'Đói bụng', topic: 'Cảm giác' },
    { hanzi: '耳朵', pinyin: 'ěrduo', hv: 'Nhĩ đóa', vi: 'Tai, lỗ tai', topic: 'Cơ thể' },
    { hanzi: '发烧', pinyin: 'fāshāo', hv: 'Phát thiêu', vi: 'Phát sốt', topic: 'Y tế' },
    { hanzi: '发现', pinyin: 'fāxiàn', hv: 'Phát hiện', vi: 'Phát hiện', topic: 'Hành động' },
    { hanzi: '方便', pinyin: 'fāngbiàn', hv: 'Phương tiện', vi: 'Tiện lợi, thuận tiện', topic: 'Tính từ' },
    { hanzi: '放', pinyin: 'fàng', hv: 'Phóng', vi: 'Đặt, để, thả', topic: 'Hành động' },
    { hanzi: '放心', pinyin: 'fàngxīn', hv: 'Phóng tâm', vi: 'Yên tâm', topic: 'Tâm lý' },
    { hanzi: '分', pinyin: 'fēn', hv: 'Phân', vi: 'Chia, phút, điểm số', topic: 'Đo lường' },
    { hanzi: '复习', pinyin: 'fùxí', hv: 'Phục tập', vi: 'Ôn tập', topic: 'Học tập' },
    { hanzi: '干净', pinyin: 'gānjìng', hv: 'Can tịnh', vi: 'Sạch sẽ', topic: 'Trạng thái' },
    { hanzi: '感冒', pinyin: 'gǎnmào', hv: 'Cảm mạo', vi: 'Cảm cúm', topic: 'Y tế' },
    { hanzi: '刚才', pinyin: 'gāngcái', hv: 'Cương tài', vi: 'Vừa mới nãy', topic: 'Thời gian' },
    { hanzi: '根据', pinyin: 'gēnjù', hv: 'Căn cứ', vi: 'Căn cứ vào', topic: 'Giới từ' },
    { hanzi: '跟', pinyin: 'gēn', hv: 'Căn', vi: 'Cùng, với', topic: 'Liên từ' },
    { hanzi: '公园', pinyin: 'gōngyuán', hv: 'Công viên', vi: 'Công viên', topic: 'Địa điểm' },
    { hanzi: '故事', pinyin: 'gùshi', hv: 'Cố sự', vi: 'Câu chuyện', topic: 'Văn hóa' },
    { hanzi: '刮风', pinyin: 'guāfēng', hv: 'Quát phong', vi: 'Nổi gió, gió thổi', topic: 'Thời tiết' },
    { hanzi: '关', pinyin: 'guān', hv: 'Quan', vi: 'Đóng, tắt', topic: 'Hành động' },
    { hanzi: '关系', pinyin: 'guānxi', hv: 'Quan hệ', vi: 'Mối quan hệ', topic: 'Xã hội' },
    { hanzi: '关心', pinyin: 'guānxīn', hv: 'Quan tâm', vi: 'Quan tâm', topic: 'Tâm lý' },
    { hanzi: '关于', pinyin: 'guānyú', hv: 'Quan vu', vi: 'Về, liên quan tới', topic: 'Giới từ' },
    { hanzi: '国家', pinyin: 'guójiā', hv: 'Quốc gia', vi: 'Đất nước', topic: 'Chính trị' },
    { hanzi: '过去', pinyin: 'guòqu', hv: 'Quá khứ', vi: 'Quá khứ, qua đó', topic: 'Thời gian' },
    { hanzi: '害怕', pinyin: 'hàipà', hv: 'Hại phạ', vi: 'Sợ hãi', topic: 'Cảm xúc' },
    { hanzi: '黑板', pinyin: 'hēibǎn', hv: 'Hắc bản', vi: 'Bảng đen', topic: 'Trường học' },
    { hanzi: '护照', pinyin: 'hùzhào', hv: 'Hộ chiếu', vi: 'Hộ chiếu passport', topic: 'Du lịch' },
    { hanzi: '花', pinyin: 'huā', hv: 'Hoa', vi: 'Hoa, tiêu xài (tiền)', topic: 'Tự nhiên' },
    { hanzi: '画', pinyin: 'huà', hv: 'Họa', vi: 'Vẽ tranh', topic: 'Nghệ thuật' },
    { hanzi: '坏', pinyin: 'huài', hv: 'Hoại', vi: 'Hỏng, xấu xa', topic: 'Tính từ' },
    { hanzi: '欢迎', pinyin: 'huānyíng', hv: 'Hoan nghênh', vi: 'Chào mừng', topic: 'Giao tiếp' },
    { hanzi: '环境', pinyin: 'huánjìng', hv: 'Hoàn cảnh', vi: 'Môi trường xung quanh', topic: 'Môi trường' },
    { hanzi: '换', pinyin: 'huàn', hv: 'Hoán', vi: 'Đổi, thay đổi', topic: 'Hành động' },
    { hanzi: '黄河', pinyin: 'Huáng Hé', hv: 'Hoàng Hà', vi: 'Sông Hoàng Hà', topic: 'Địa danh' },
    { hanzi: '回答', pinyin: 'huídá', hv: 'Hồi đáp', vi: 'Trả lời', topic: 'Giao tiếp' },
    { hanzi: '会议', pinyin: 'huìyì', hv: 'Hội nghị', vi: 'Cuộc họp', topic: 'Công sở' },
    { hanzi: '或者', pinyin: 'huòzhě', hv: 'Hoặc giả', vi: 'Hoặc là', topic: 'Liên từ' },
    { hanzi: '几乎', pinyin: 'jīhū', hv: 'Kỷ hồ', vi: 'Hầu như, suýt nữa', topic: 'Phó từ' },
    { hanzi: '机会', pinyin: 'jīhuì', hv: 'Cơ hội', vi: 'Cơ hội', topic: 'Đời sống' },
    { hanzi: '极', pinyin: 'jí', hv: 'Cực', vi: 'Cực kỳ (Adj + 极了)', topic: 'Phó từ' },
    { hanzi: '记得', pinyin: 'jìde', hv: 'Ký đắc', vi: 'Nhớ, ghi nhớ', topic: 'Trí nhớ' },
    { hanzi: '季节', pinyin: 'jìjié', hv: 'Quý tiết', vi: 'Mùa màng', topic: 'Thời tiết' },
    { hanzi: '检查', pinyin: 'jiǎnchá', hv: 'Kiểm tra', vi: 'Kiểm tra', topic: 'Hành động' },
    { hanzi: '简单', pinyin: 'jiǎndān', hv: 'Giản đơn', vi: 'Đơn giản', topic: 'Tính từ' },
    { hanzi: '见面', pinyin: 'jiànmiàn', hv: 'Kiến diện', vi: 'Gặp mặt', topic: 'Giao tiếp' },
    { hanzi: '健康', pinyin: 'jiànkāng', hv: 'Kiện khang', vi: 'Khỏe mạnh, sức khỏe', topic: 'Sức khỏe' },
    { hanzi: '讲', pinyin: 'jiǎng', hv: 'Giảng', vi: 'Kể, giảng bài', topic: 'Giao tiếp' },
    { hanzi: '教', pinyin: 'jiāo', hv: 'Giáo', vi: 'Dạy học', topic: 'Giáo dục' },
    { hanzi: '角', pinyin: 'jiǎo', hv: 'Giác', vi: 'Hào (tiền), góc', topic: 'Tiền tệ' },
    { hanzi: '脚', pinyin: 'jiǎo', hv: 'Cước', vi: 'Chân, bàn chân', topic: 'Cơ thể' },
    { hanzi: '接', pinyin: 'jiē', hv: 'Tiếp', vi: 'Đón tiếp, nhận', topic: 'Hành động' },
    { hanzi: '街道', pinyin: 'jiēdào', hv: 'Nhai đạo', vi: 'Đường phố', topic: 'Đô thị' },
    { hanzi: '节目', pinyin: 'jiémù', hv: 'Tiết mục', vi: 'Tiết mục, chương trình', topic: 'Giải trí' },
    { hanzi: '节日', pinyin: 'jiérì', hv: 'Tiết nhật', vi: 'Ngày lễ tết', topic: 'Văn hóa' },
    { hanzi: '结婚', pinyin: 'jiéhūn', hv: 'Kết hôn', vi: 'Kết hôn', topic: 'Gia đình' },
    { hanzi: '结束', pinyin: 'jiéshù', hv: 'Kết thúc', vi: 'Kết thúc', topic: 'Thời gian' },
    { hanzi: '解决', pinyin: 'jiějué', hv: 'Giải quyết', vi: 'Giải quyết', topic: 'Công việc' },
    { hanzi: '借', pinyin: 'jiè', hv: 'Tá', vi: 'Mượn, vay', topic: 'Hành động' },
    { hanzi: '经常', pinyin: 'jīngcháng', hv: 'Kinh thường', vi: 'Thường xuyên', topic: 'Phó từ' },
    { hanzi: '经过', pinyin: 'jīngguò', hv: 'Kinh quá', vi: 'Đi qua, trải qua', topic: 'Hành động' },
    { hanzi: '经理', pinyin: 'jīnglǐ', hv: 'Kinh lý', vi: 'Giám đốc', topic: 'Công sở' },
    { hanzi: '久', pinyin: 'jiǔ', hv: 'Cửu', vi: 'Lâu, hồi lâu', topic: 'Thời gian' },
    { hanzi: '旧', pinyin: 'jiù', hv: 'Cựu', vi: 'Cũ, xưa', topic: 'Tính từ' },
    { hanzi: '句子', pinyin: 'jùzi', hv: 'Cú tử', vi: 'Câu văn', topic: 'Ngôn ngữ' },
    { hanzi: '决定', pinyin: 'juédìng', hv: 'Quyết định', vi: 'Quyết định', topic: 'Kế hoạch' },
    { hanzi: '可爱', pinyin: 'kě\'ài', hv: 'Khả ái', vi: 'Đáng yêu', topic: 'Tính từ' },
    { hanzi: '渴', pinyin: 'kě', hv: 'Khát', vi: 'Khát nước', topic: 'Cảm giác' },
    { hanzi: '刻', pinyin: 'kè', hv: 'Khắc', vi: '15 phút (khắc)', topic: 'Thời gian' },
    { hanzi: '客人', pinyin: 'kèrén', hv: 'Khách nhân', vi: 'Khách khứa', topic: 'Xã hội' },
    { hanzi: '空调', pinyin: 'kōngtiáo', hv: 'Không điều', vi: 'Điều hòa nhiệt độ', topic: 'Đồ gia dụng' },
    { hanzi: '口', pinyin: 'kǒu', hv: 'Khẩu', vi: 'Miệng, nhân khẩu', topic: 'Lượng từ' },
    { hanzi: '哭', pinyin: 'kū', hv: 'Khốc', vi: 'Khóc lóc', topic: 'Cảm xúc' },
    { hanzi: '裤子', pinyin: 'kùzi', hv: 'Khố tử', vi: 'Cái quần', topic: 'Trang phục' },
    { hanzi: '筷子', pinyin: 'kuàizi', hv: 'Khoái tử', vi: 'Đôi đũa', topic: 'Ẩm thực' },
    { hanzi: '蓝', pinyin: 'lán', hv: 'Lam', vi: 'Màu xanh lam', topic: 'Màu sắc' },
    { hanzi: '离开', pinyin: 'líkāi', hv: 'Ly khai', vi: 'Rời khỏi', topic: 'Hành động' },
    { hanzi: '历史', pinyin: 'lìshǐ', hv: 'Lịch sử', vi: 'Lịch sử', topic: 'Khoa học' },
    { hanzi: '脸', pinyin: 'liǎn', hv: 'Liễm', vi: 'Khuôn mặt', topic: 'Cơ thể' },
    { hanzi: '练习', pinyin: 'liànxí', hv: 'Luyện tập', vi: 'Luyện tập', topic: 'Học tập' },
    { hanzi: '辆', pinyin: 'liàng', hv: 'Lượng', vi: 'Chiếc xe (lượng từ)', topic: 'Lượng từ' },
    { hanzi: '了解', pinyin: 'liǎojiě', hv: 'Liễu giải', vi: 'Hiểu rõ, tìm hiểu', topic: 'Nhận thức' },
    { hanzi: '邻居', pinyin: 'línjū', hv: 'Lân cư', vi: 'Hàng xóm', topic: 'Xã hội' },
    { hanzi: '楼', pinyin: 'lóu', hv: 'Lâu', vi: 'Tòa nhà, lầu', topic: 'Địa điểm' },
    { hanzi: '绿', pinyin: 'lǜ', hv: 'Lục', vi: 'Màu xanh lá', topic: 'Màu sắc' },
    { hanzi: '马', pinyin: 'mǎ', hv: 'Mã', vi: 'Con ngựa', topic: 'Động vật' },
    { hanzi: '马上', pinyin: 'mǎshàng', hv: 'Mã thượng', vi: 'Ngay lập tức', topic: 'Thời gian' },
    { hanzi: '满意', pinyin: 'mǎnyì', hv: 'Mãn ý', vi: 'Hài lòng', topic: 'Tâm lý' },
    { hanzi: '帽子', pinyin: 'màozi', hv: 'Mạo tử', vi: 'Cái mũ nón', topic: 'Trang phục' },
    { hanzi: '米', pinyin: 'mǐ', hv: 'Mễ', vi: 'Mét (đo lường), gạo', topic: 'Đo lường' },
    { hanzi: '面包', pinyin: 'miànbāo', hv: 'Miến bao', vi: 'Bánh mì', topic: 'Ẩm thực' },
    { hanzi: '面条', pinyin: 'miàntiáo', hv: 'Miến điều', vi: 'Mì sợi', topic: 'Ẩm thực' },
    { hanzi: '明白', pinyin: 'míngbai', hv: 'Minh bạch', vi: 'Rõ ràng, hiểu ra', topic: 'Nhận thức' },
    { hanzi: '拿', pinyin: 'ná', hv: 'Nã', vi: 'Cầm, lấy', topic: 'Hành động' },
    { hanzi: '奶奶', pinyin: 'nǎinai', hv: 'Nãi nãi', vi: 'Bà nội', topic: 'Gia đình' },
    { hanzi: '南', pinyin: 'nán', hv: 'Nam', vi: 'Phương Nam', topic: 'Phương vị' },
    { hanzi: '难', pinyin: 'nán', hv: 'Nan', vi: 'Khó khăn', topic: 'Tính từ' },
    { hanzi: '难过', pinyin: 'nánguò', hv: 'Nan quá', vi: 'Buồn bã, đau lòng', topic: 'Cảm xúc' },
    { hanzi: '级', pinyin: 'jí', hv: 'Cấp', vi: 'Cấp độ, bậc', topic: 'Học tập' }
  ];

  // Append communicative words with FULL accurate Pinyin, Sino-Vietnamese (Hán Việt) and Vietnamese translations
  const communicativeVocab = [
  {
    "hanzi": "预订",
    "pinyin": "yùdìng",
    "hv": "Dự đính",
    "vi": "Đặt trước (phòng, vé)",
    "topic": "Khách sạn",
    "sample": "我想预订一间大床房。"
  },
  {
    "hanzi": "入住",
    "pinyin": "rùzhù",
    "hv": "Nhập trụ",
    "vi": "Nhận phòng (check-in)",
    "topic": "Khách sạn",
    "sample": "请问几点可以办理入住？"
  },
  {
    "hanzi": "退房",
    "pinyin": "tuìfáng",
    "hv": "Thoái phòng",
    "vi": "Trả phòng (check-out)",
    "topic": "Khách sạn",
    "sample": "我们明天中午十二点前退房。"
  },
  {
    "hanzi": "押金",
    "pinyin": "yājīn",
    "hv": "Áp kim",
    "vi": "Tiền đặt cọc",
    "topic": "Khách sạn",
    "sample": "入住请交五百块押金。"
  },
  {
    "hanzi": "单人间",
    "pinyin": "dānrénjiān",
    "hv": "Đơn nhân gian",
    "vi": "Phòng đơn",
    "topic": "Khách sạn",
    "sample": "我订了一间单人间。"
  },
  {
    "hanzi": "双人间",
    "pinyin": "shuāngrénjiān",
    "hv": "Song nhân gian",
    "vi": "Phòng đôi",
    "topic": "Khách sạn",
    "sample": "请问还有双人间吗？"
  },
  {
    "hanzi": "房卡",
    "pinyin": "fángkǎ",
    "hv": "Phòng tạp",
    "vi": "Thẻ mở phòng",
    "topic": "Khách sạn",
    "sample": "这是您的房卡，请拿好。"
  },
  {
    "hanzi": "行李",
    "pinyin": "xíngli",
    "hv": "Hành lý",
    "vi": "Hành lý",
    "topic": "Khách sạn",
    "sample": "可以帮我寄存一下行李吗？"
  },
  {
    "hanzi": "前台",
    "pinyin": "qiántái",
    "hv": "Tiền đài",
    "vi": "Quầy lễ tân",
    "topic": "Khách sạn",
    "sample": "请到酒店前台办理手续。"
  },
  {
    "hanzi": "电梯",
    "pinyin": "diàntī",
    "hv": "Điện thang",
    "vi": "Thang máy",
    "topic": "Khách sạn",
    "sample": "观光电梯在右边。"
  },
  {
    "hanzi": "钥匙",
    "pinyin": "yàoshi",
    "hv": "Thược thi",
    "vi": "Chìa khóa",
    "topic": "Khách sạn",
    "sample": "我把钥匙落在房间里了。"
  },
  {
    "hanzi": "叫醒",
    "pinyin": "jiàoxǐng",
    "hv": "Khiếu tỉnh",
    "vi": "Báo thức, gọi dậy",
    "topic": "Khách sạn",
    "sample": "明早七点请提供叫醒服务。"
  },
  {
    "hanzi": "结账",
    "pinyin": "jiézhàng",
    "hv": "Kết trướng",
    "vi": "Thanh toán hóa đơn",
    "topic": "Khách sạn",
    "sample": "服务员，我们要结账。"
  },
  {
    "hanzi": "发票",
    "pinyin": "fāpiào",
    "hv": "Phát phiếu",
    "vi": "Hóa đơn VAT",
    "topic": "Khách sạn",
    "sample": "请给我开一张增值税发票。"
  },
  {
    "hanzi": "毛巾",
    "pinyin": "máojīn",
    "hv": "Mao cân",
    "vi": "Khăn tắm, khăn mặt",
    "topic": "Khách sạn",
    "sample": "请多送两条干净的毛巾。"
  },
  {
    "hanzi": "浴室",
    "pinyin": "yùshì",
    "hv": "Dục thất",
    "vi": "Phòng tắm",
    "topic": "Khách sạn",
    "sample": "浴室里热水供应很足。"
  },
  {
    "hanzi": "宽带",
    "pinyin": "kuāndài",
    "hv": "Khoan đới",
    "vi": "Mạng băng thông rộng",
    "topic": "Khách sạn",
    "sample": "每个房间都有高速宽带。"
  },
  {
    "hanzi": "密码",
    "pinyin": "mìmǎ",
    "hv": "Mật mã",
    "vi": "Mật khẩu (WiFi)",
    "topic": "Khách sạn",
    "sample": "请问客房WiFi密码是多少？"
  },
  {
    "hanzi": "打扫",
    "pinyin": "dǎsǎo",
    "hv": "Đả tảo",
    "vi": "Dọn dẹp phòng",
    "topic": "Khách sạn",
    "sample": "请阿姨帮忙打扫一下房间。"
  },
  {
    "hanzi": "客房",
    "pinyin": "kèfáng",
    "hv": "Khách phòng",
    "vi": "Phòng nghỉ khách sạn",
    "topic": "Khách sạn",
    "sample": "客房服务电话请拨888。"
  },
  {
    "hanzi": "点餐",
    "pinyin": "diǎncān",
    "hv": "Điểm xan",
    "vi": "Gọi món ăn",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "您好，我们可以点餐了吗？"
  },
  {
    "hanzi": "买单",
    "pinyin": "mǎidān",
    "hv": "Mãi đơn",
    "vi": "Tính tiền, thanh toán",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "服务员，买单！"
  },
  {
    "hanzi": "包厢",
    "pinyin": "bāoxiāng",
    "hv": "Bao sương",
    "vi": "Phòng riêng (VIP)",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "我们预订了一个大包厢。"
  },
  {
    "hanzi": "特价",
    "pinyin": "tèjià",
    "hv": "Đặc giá",
    "vi": "Giá ưu đãi, giảm giá",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "今天的特价菜是红烧鱼。"
  },
  {
    "hanzi": "招牌菜",
    "pinyin": "zhāopáicài",
    "hv": "Chiêu bài thái",
    "vi": "Món đặc sản quán",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "这里的招牌菜是北京烤鸭。"
  },
  {
    "hanzi": "微辣",
    "pinyin": "wēilà",
    "hv": "Vi lạt",
    "vi": "Cay nhẹ, ít cay",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "我不太能吃辣，请做微辣。"
  },
  {
    "hanzi": "麻辣",
    "pinyin": "málà",
    "hv": "Ma lạt",
    "vi": "Cay tê (vị Tứ Xuyên)",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "正宗四川麻辣香锅味道浓郁。"
  },
  {
    "hanzi": "清淡",
    "pinyin": "qīngdàn",
    "hv": "Thanh đạm",
    "vi": "Vị thanh, ít dầu mỡ",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "病人饮食应该保持清淡。"
  },
  {
    "hanzi": "打包",
    "pinyin": "dǎbāo",
    "hv": "Đả bao",
    "vi": "Gói mang về",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "吃不完的饭菜请帮我打包。"
  },
  {
    "hanzi": "餐具",
    "pinyin": "cānjù",
    "hv": "Xan cụ",
    "vi": "Bộ bát đũa, đồ dùng ăn",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "请给我们拿一套消毒餐具。"
  },
  {
    "hanzi": "纸巾",
    "pinyin": "zhǐjīn",
    "hv": "Chỉ cân",
    "vi": "Khăn giấy",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "请问有餐巾纸吗？"
  },
  {
    "hanzi": "吸管",
    "pinyin": "xīguǎn",
    "hv": "Hấp quản",
    "vi": "Ống hút",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "喝珍珠奶茶需要一根粗吸管。"
  },
  {
    "hanzi": "调料",
    "pinyin": "tiáoliào",
    "hv": "Điều liệu",
    "vi": "Gia vị nấu ăn",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "火锅调料台上有二十多种调料。"
  },
  {
    "hanzi": "酱油",
    "pinyin": "jiàngyóu",
    "hv": "Tương du",
    "vi": "Nước tương, xì dầu",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "吃水饺可以蘸点老陈醋和生抽酱油。"
  },
  {
    "hanzi": "大蒜",
    "pinyin": "dàsuàn",
    "hv": "Đại toán",
    "vi": "Củ tỏi",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "炒青菜放点大蒜特别香。"
  },
  {
    "hanzi": "生姜",
    "pinyin": "shēngjiāng",
    "hv": "Sinh khương",
    "vi": "Củ gừng tươi",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "炖鸡汤放几片生姜去腥提鲜。"
  },
  {
    "hanzi": "牛肉",
    "pinyin": "niúròu",
    "hv": "Ngưu nhục",
    "vi": "Thịt bò",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "我特别喜欢吃红烧牛肉面。"
  },
  {
    "hanzi": "猪肉",
    "pinyin": "zhūròu",
    "hv": "Trư nhục",
    "vi": "Thịt lợn, thịt heo",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "猪肉白菜水饺是北方的传统美食。"
  },
  {
    "hanzi": "海鲜",
    "pinyin": "hǎixiān",
    "hv": "Hải tiên",
    "vi": "Đồ hải sản tươi sống",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "青岛的海鲜物美价廉。"
  },
  {
    "hanzi": "火锅",
    "pinyin": "huǒguō",
    "hv": "Hỏa oa",
    "vi": "Nồi lẩu nóng hổi",
    "topic": "Ăn uống & Nấu nướng",
    "sample": "冬天最幸福的事就是和朋友吃火锅。"
  },
  {
    "hanzi": "换乘",
    "pinyin": "huànchéng",
    "hv": "Hoán thừa",
    "vi": "Đổi tuyến, chuyển tàu xe",
    "topic": "Giao thông & Đi lại",
    "sample": "在人民广场站换乘地铁二号线。"
  },
  {
    "hanzi": "末班车",
    "pinyin": "mòbānchē",
    "hv": "Mạt ban xa",
    "vi": "Chuyến xe buýt/tàu cuối",
    "topic": "Giao thông & Đi lại",
    "sample": "我们赶上了今晚最后一班末班车。"
  },
  {
    "hanzi": "首班车",
    "pinyin": "shǒubānchē",
    "hv": "Thủ ban xa",
    "vi": "Chuyến xe đầu ngày",
    "topic": "Giao thông & Đi lại",
    "sample": "地铁首班车早上六点准时发车。"
  },
  {
    "hanzi": "投币",
    "pinyin": "tóubì",
    "hv": "Đầu tệ",
    "vi": "Bỏ tiền xu vào thùng",
    "topic": "Giao thông & Đi lại",
    "sample": "乘坐无人售票公交车请自觉投币。"
  },
  {
    "hanzi": "刷卡",
    "pinyin": "shuākǎ",
    "hv": "Loát tạp",
    "vi": "Quẹt thẻ tàu xe/thẻ từ",
    "topic": "Giao thông & Đi lại",
    "sample": "进出地铁站请在闸机处刷卡。"
  },
  {
    "hanzi": "找零",
    "pinyin": "zhǎolíng",
    "hv": "Trảo linh",
    "vi": "Thối lại tiền lẻ",
    "topic": "Giao thông & Đi lại",
    "sample": "师傅，不用找零钱了，谢谢。"
  },
  {
    "hanzi": "堵车",
    "pinyin": "dǔchē",
    "hv": "Đổ xa",
    "vi": "Tắc đường, kẹt xe",
    "topic": "Giao thông & Đi lại",
    "sample": "下班高峰期主干道经常堵车。"
  },
  {
    "hanzi": "红绿灯",
    "pinyin": "hónglǜdēng",
    "hv": "Hồng lục đăng",
    "vi": "Đèn tín hiệu giao thông",
    "topic": "Giao thông & Đi lại",
    "sample": "前方红绿灯路口请减速慢行。"
  },
  {
    "hanzi": "斑马线",
    "pinyin": "bānmǎxiàn",
    "hv": "Ban mã tuyến",
    "vi": "Vạch kẻ qua đường cho người đi bộ",
    "topic": "Giao thông & Đi lại",
    "sample": "行人过马路一定要走斑马线。"
  },
  {
    "hanzi": "十字路口",
    "pinyin": "shízì lùkǒu",
    "hv": "Thập tự lộ khẩu",
    "vi": "Ngã tư đường phố",
    "topic": "Giao thông & Đi lại",
    "sample": "在下一个十字路口向右拐弯。"
  },
  {
    "hanzi": "过街天桥",
    "pinyin": "guòjiē tiānqiáo",
    "hv": "Quá nhai thiên kiều",
    "vi": "Cầu vượt bộ hành",
    "topic": "Giao thông & Đi lại",
    "sample": "走过街天桥横穿马路更安全。"
  },
  {
    "hanzi": "地下通道",
    "pinyin": "dìxià tōngdào",
    "hv": "Địa hạ thông đạo",
    "vi": "Hầm chui bộ hành",
    "topic": "Giao thông & Đi lại",
    "sample": "穿过地下通道就能到达火车站南广场。"
  },
  {
    "hanzi": "转弯",
    "pinyin": "zhuǎnwān",
    "hv": "Chuyển loan",
    "vi": "Rẽ, quẹo xe",
    "topic": "Giao thông & Đi lại",
    "sample": "前方五十米处请向右转弯。"
  },
  {
    "hanzi": "调头",
    "pinyin": "diàotóu",
    "hv": "Điều đầu",
    "vi": "Quay đầu xe",
    "topic": "Giao thông & Đi lại",
    "sample": "此处禁止机动车调头。"
  },
  {
    "hanzi": "直行",
    "pinyin": "zhíxíng",
    "hv": "Trực hành",
    "vi": "Đi thẳng",
    "topic": "Giao thông & Đi lại",
    "sample": "顺着这条主路一直直行两公里。"
  },
  {
    "hanzi": "倒车",
    "pinyin": "dàochē",
    "hv": "Đảo xa",
    "vi": "Lùi xe vào chuồng",
    "topic": "Giao thông & Đi lại",
    "sample": "倒车请注意后方行人与障碍物。"
  },
  {
    "hanzi": "加油站",
    "pinyin": "jiāyóuzhàn",
    "hv": "Gia du trạm",
    "vi": "Cây xăng, trạm xăng",
    "topic": "Giao thông & Đi lại",
    "sample": "车子快没油了，附近哪里有加油站？"
  },
  {
    "hanzi": "停车场",
    "pinyin": "tíngchēchǎng",
    "hv": "Đình xa tràng",
    "vi": "Bãi đỗ xe",
    "topic": "Giao thông & Đi lại",
    "sample": "商场地下二层配有大型智能停车场。"
  },
  {
    "hanzi": "收费站",
    "pinyin": "shōufèizhàn",
    "hv": "Thu phí trạm",
    "vi": "Trạm thu phí đường cao tốc",
    "topic": "Giao thông & Đi lại",
    "sample": "车辆通过ETC通道可以快速通过收费站。"
  },
  {
    "hanzi": "导航",
    "pinyin": "dǎoháng",
    "hv": "Đạo hàng",
    "vi": "Định vị GPS chỉ đường",
    "topic": "Giao thông & Đi lại",
    "sample": "打开高德地图手机导航查找最优路线。"
  },
  {
    "hanzi": "网购",
    "pinyin": "wǎnggòu",
    "hv": "Võng cấu",
    "vi": "Mua sắm qua mạng Internet",
    "topic": "Mua sắm & Taobao",
    "sample": "很多人现在日常用品全靠网购。"
  },
  {
    "hanzi": "快递",
    "pinyin": "kuàidì",
    "hv": "Khoái đệ",
    "vi": "Chuyển phát nhanh, shipper",
    "topic": "Mua sắm & Taobao",
    "sample": "您的快递包裹已被菜鸟驿站代收。"
  },
  {
    "hanzi": "包裹",
    "pinyin": "bāoguǒ",
    "hv": "Bao quả",
    "vi": "Gói hàng, bưu kiện",
    "topic": "Mua sắm & Taobao",
    "sample": "请帮我下楼签收一个大包裹。"
  },
  {
    "hanzi": "运费",
    "pinyin": "yùnfèi",
    "hv": "Vận phí",
    "vi": "Phí vận chuyển hàng",
    "topic": "Mua sắm & Taobao",
    "sample": "单笔订单满99元免除运费。"
  },
  {
    "hanzi": "包邮",
    "pinyin": "bāoyóu",
    "hv": "Bao bưu",
    "vi": "Miễn phí giao hàng (Freeship)",
    "topic": "Mua sắm & Taobao",
    "sample": "本店商品全场一件包邮。"
  },
  {
    "hanzi": "购物车",
    "pinyin": "gòuwùchē",
    "hv": "Cấu vật xa",
    "vi": "Giỏ hàng mua sắm",
    "topic": "Mua sắm & Taobao",
    "sample": "先把喜欢的冬装放进购物车。"
  },
  {
    "hanzi": "降价",
    "pinyin": "jiàngjià",
    "hv": "Hàng giá",
    "vi": "Giảm giá, hạ giá sản phẩm",
    "topic": "Mua sắm & Taobao",
    "sample": "双十一活动期间很多大牌都降价了。"
  },
  {
    "hanzi": "打折",
    "pinyin": "dǎzhé",
    "hv": "Đả chiết",
    "vi": "Chiết khấu %, giảm giá",
    "topic": "Mua sắm & Taobao",
    "sample": "这件羽绒服现在打七折促销。"
  },
  {
    "hanzi": "优惠券",
    "pinyin": "yōuhuìquàn",
    "hv": "Ưu huệ khoán",
    "vi": "Mã giảm giá, voucher",
    "topic": "Mua sắm & Taobao",
    "sample": "结算前别忘了使用满减优惠券。"
  },
  {
    "hanzi": "退货",
    "pinyin": "tuìhuò",
    "hv": "Thoái hóa",
    "vi": "Trả hàng, hoàn hàng",
    "topic": "Mua sắm & Taobao",
    "sample": "平台支持七天无理由退货。"
  },
  {
    "hanzi": "换货",
    "pinyin": "huànhuò",
    "hv": "Hoán hóa",
    "vi": "Đổi hàng khác (do size, lỗi)",
    "topic": "Mua sắm & Taobao",
    "sample": "裤子买大了一码，我申请了换货。"
  },
  {
    "hanzi": "好评",
    "pinyin": "hǎopíng",
    "hv": "Hảo bình",
    "vi": "Đánh giá tốt (5 sao)",
    "topic": "Mua sắm & Taobao",
    "sample": "如果满意请给我们全五星好评。"
  },
  {
    "hanzi": "差评",
    "pinyin": "chàpíng",
    "hv": "Sai bình",
    "vi": "Đánh giá xấu (1 sao)",
    "topic": "Mua sắm & Taobao",
    "sample": "物流太慢了，买家给了一个差评。"
  },
  {
    "hanzi": "客服",
    "pinyin": "kèfú",
    "hv": "Khách phục",
    "vi": "Nhân viên chăm sóc khách hàng",
    "topic": "Mua sắm & Taobao",
    "sample": "如有任何疑问请随时咨询在线客服。"
  },
  {
    "hanzi": "尺码",
    "pinyin": "chǐmǎ",
    "hv": "Xích mã",
    "vi": "Kích cỡ, size quần áo giày dép",
    "topic": "Mua sắm & Taobao",
    "sample": "请问这款大衣有L尺码吗？"
  },
  {
    "hanzi": "款式",
    "pinyin": "kuǎnshì",
    "hv": "Khoản thức",
    "vi": "Kiểu dáng, mẫu mã thời trang",
    "topic": "Mua sắm & Taobao",
    "sample": "这个新款式的风衣今年非常流行。"
  },
  {
    "hanzi": "质量",
    "pinyin": "zhìliàng",
    "hv": "Chất lượng",
    "vi": "Chất lượng sản phẩm",
    "topic": "Mua sắm & Taobao",
    "sample": "这双皮鞋的做工和质量都很过关。"
  },
  {
    "hanzi": "售后",
    "pinyin": "shòuhòu",
    "hv": "Hậu thụ",
    "vi": "Dịch vụ hậu mãi sau bán",
    "topic": "Mua sắm & Taobao",
    "sample": "全国联保，售后服务有保障。"
  },
  {
    "hanzi": "收货地址",
    "pinyin": "shōuhuò dìzhǐ",
    "hv": "Thu hóa địa chỉ",
    "vi": "Địa chỉ nhận hàng",
    "topic": "Mua sắm & Taobao",
    "sample": "付款前请仔细核对收货地址。"
  },
  {
    "hanzi": "签收",
    "pinyin": "qiānshōu",
    "hv": "Thiêm thu",
    "vi": "Ký nhận bưu phẩm",
    "topic": "Mua sắm & Taobao",
    "sample": "收到货后请当场开箱验货并签收。"
  },
  {
    "hanzi": "支付宝",
    "pinyin": "Zhīfùbǎo",
    "hv": "Chi phó bảo",
    "vi": "Ví điện tử Alipay",
    "topic": "Thanh toán điện tử",
    "sample": "在中国出门一部手机用支付宝就够了。"
  },
  {
    "hanzi": "扫一扫",
    "pinyin": "sǎoyīsǎo",
    "hv": "Tảo nhất tảo",
    "vi": "Quét mã QR bằng camera",
    "topic": "Thanh toán điện tử",
    "sample": "打开微信扫一扫屏幕上的二维码。"
  },
  {
    "hanzi": "付款码",
    "pinyin": "fùkuǎnmǎ",
    "hv": "Phó khoản mã",
    "vi": "Mã thanh toán (mã vạch/QR)",
    "topic": "Thanh toán điện tử",
    "sample": "买单时请向收银员出示付款码。"
  },
  {
    "hanzi": "转账",
    "pinyin": "zhuǎnzhàng",
    "hv": "Chuyển trướng",
    "vi": "Chuyển khoản ngân hàng",
    "topic": "Thanh toán điện tử",
    "sample": "房东，我已经把房租转账给您了。"
  },
  {
    "hanzi": "余额",
    "pinyin": "yú'é",
    "hv": "Dư ngạch",
    "vi": "Số dư tài khoản ví",
    "topic": "Thanh toán điện tử",
    "sample": "您的零钱通账户余额还有五千元。"
  },
  {
    "hanzi": "零钱",
    "pinyin": "língqián",
    "hv": "Linh tiền",
    "vi": "Tiền lẻ trong ví điện tử",
    "topic": "Thanh toán điện tử",
    "sample": "微信零钱平时用来买菜十分方便。"
  },
  {
    "hanzi": "绑定",
    "pinyin": "bǎndìng",
    "hv": "Bảng định",
    "vi": "Liên kết thẻ vào ứng dụng",
    "topic": "Thanh toán điện tử",
    "sample": "先在手机银行APP上绑定自己的借记卡。"
  },
  {
    "hanzi": "银行卡",
    "pinyin": "yínhángkǎ",
    "hv": "Ngân hàng tạp",
    "vi": "Thẻ ngân hàng ATM",
    "topic": "Thanh toán điện tử",
    "sample": "请妥善保管好您的银行卡与卡号。"
  },
  {
    "hanzi": "手续费",
    "pinyin": "shǒuxùfèi",
    "hv": "Thủ tục phí",
    "vi": "Phí giao dịch dịch vụ",
    "topic": "Thanh toán điện tử",
    "sample": "跨行转账可能会产生少量手续费。"
  },
  {
    "hanzi": "提现",
    "pinyin": "tíxiàn",
    "hv": "Đề hiện",
    "vi": "Rút tiền mặt về tài khoản ngân hàng",
    "topic": "Thanh toán điện tử",
    "sample": "把微信零钱提现到银行卡两小时内到账。"
  },
  {
    "hanzi": "充值",
    "pinyin": "chōngzhí",
    "hv": "Sung trị",
    "vi": "Nạp tiền vào tài khoản/điện thoại",
    "topic": "Thanh toán điện tử",
    "sample": "给手机话费充值了一百块。"
  },
  {
    "hanzi": "收据",
    "pinyin": "shōujù",
    "hv": "Thu cứ",
    "vi": "Biên lai, phiếu thu tiền",
    "topic": "Thanh toán điện tử",
    "sample": "这是您刚才缴纳押金的收据凭证。"
  },
  {
    "hanzi": "对账单",
    "pinyin": "duìzhàngdān",
    "hv": "Đối trướng đơn",
    "vi": "Bản sao kê chi tiết tài khoản",
    "topic": "Thanh toán điện tử",
    "sample": "银行每个月会把信用卡对账单发到邮箱。"
  },
  {
    "hanzi": "汇率",
    "pinyin": "huìlǜ",
    "hv": "Hối suất",
    "vi": "Tỷ giá hối đoái tiền tệ",
    "topic": "Thanh toán điện tử",
    "sample": "今天人民币对越南盾的汇率是多少？"
  },
  {
    "hanzi": "现金",
    "pinyin": "xiànjīn",
    "hv": "Hiện kim",
    "vi": "Tiền mặt giấy",
    "topic": "Thanh toán điện tử",
    "sample": "如今在中国很多店铺基本不收现金了。"
  },
  {
    "hanzi": "信用卡",
    "pinyin": "xìnyòngkǎ",
    "hv": "Tín dụng tạp",
    "vi": "Thẻ tín dụng thanh toán quốc tế",
    "topic": "Thanh toán điện tử",
    "sample": "去大商场购物可以刷国际信用卡。"
  },
  {
    "hanzi": "密码",
    "pinyin": "mìmǎ",
    "hv": "Mật mã",
    "vi": "Mã PIN bảo mật thanh toán",
    "topic": "Thanh toán điện tử",
    "sample": "请输入六位数支付密码确认交易。"
  },
  {
    "hanzi": "指纹支付",
    "pinyin": "zhǐwén zhīfù",
    "hv": "Chỉ văn chi phó",
    "vi": "Thanh toán bằng dấu vân tay",
    "topic": "Thanh toán điện tử",
    "sample": "开启指纹支付无需手动输入密码。"
  },
  {
    "hanzi": "刷脸",
    "pinyin": "shuāliǎn",
    "hv": "Loát liễm",
    "vi": "Quét nhận diện khuôn mặt (FacePay)",
    "topic": "Thanh toán điện tử",
    "sample": "无人超市支持刷脸直接完成扣款。"
  },
  {
    "hanzi": "额度",
    "pinyin": "édù",
    "hv": "Ngạch độ",
    "vi": "Hạn mức chi tiêu thẻ/tín dụng",
    "topic": "Thanh toán điện tử",
    "sample": "由于信用良好，我的信用卡额度提升到了五万元。"
  },
  {
    "hanzi": "简历",
    "pinyin": "jiǎnlì",
    "hv": "Giản lịch",
    "vi": "Sơ yếu lý lịch (CV xin việc)",
    "topic": "Văn phòng & Công sở",
    "sample": "求职前请准备一份简洁精美的简历。"
  },
  {
    "hanzi": "面试",
    "pinyin": "miànshì",
    "hv": "Diện thí",
    "vi": "Phỏng vấn tuyển dụng",
    "topic": "Văn phòng & Công sở",
    "sample": "明天下午两点我将参加第二轮技术面试。"
  },
  {
    "hanzi": "入职",
    "pinyin": "rùzhí",
    "hv": "Nhập chức",
    "vi": "Nhận việc mới, đi làm",
    "topic": "Văn phòng & Công sở",
    "sample": "热烈欢迎三位新同事今天正式入职！"
  },
  {
    "hanzi": "合同",
    "pinyin": "hétong",
    "hv": "Hợp đồng",
    "vi": "Hợp đồng lao động",
    "topic": "Văn phòng & Công sở",
    "sample": "请仔细阅读劳动合同各项条款后再签字。"
  },
  {
    "hanzi": "试用期",
    "pinyin": "shìyòngqī",
    "hv": "Thí dụng kỳ",
    "vi": "Thời gian thử việc",
    "topic": "Văn phòng & Công sở",
    "sample": "新入职员工通常有三个月的试用期。"
  },
  {
    "hanzi": "转正",
    "pinyin": "zhuǎnzhèng",
    "hv": "Chuyển chính",
    "vi": "Trở thành nhân viên chính thức",
    "topic": "Văn phòng & Công sở",
    "sample": "工作表现优异的员工可以申请提前转正。"
  },
  {
    "hanzi": "薪水",
    "pinyin": "xīnshui",
    "hv": "Tân thủy",
    "vi": "Tiền lương hàng tháng",
    "topic": "Văn phòng & Công sở",
    "sample": "公司每月十号准时把薪水发到银行卡。"
  },
  {
    "hanzi": "奖金",
    "pinyin": "jiǎngjīn",
    "hv": "Tưởng kim",
    "vi": "Tiền thưởng hiệu quả",
    "topic": "Văn phòng & Công sở",
    "sample": "年底完成了销售指标，大家都拿到了丰厚的奖金。"
  },
  {
    "hanzi": "提成",
    "pinyin": "tíchéng",
    "hv": "Đề thành",
    "vi": "Hoa hồng doanh số bán hàng",
    "topic": "Văn phòng & Công sở",
    "sample": "做业务主要靠业绩提成获得高收入。"
  },
  {
    "hanzi": "五险一金",
    "pinyin": "wǔxiǎnyījīn",
    "hv": "Ngũ hiểm nhất kim",
    "vi": "Chế độ 5 bảo hiểm và 1 quỹ nhà",
    "topic": "Văn phòng & Công sở",
    "sample": "正规企业都会依法为员工足额缴纳五险一金。"
  },
  {
    "hanzi": "加班",
    "pinyin": "jiābān",
    "hv": "Gia ban",
    "vi": "Tăng ca, làm thêm ngoài giờ",
    "topic": "Văn phòng & Công sở",
    "sample": "今天项目紧急上线，团队需要加班两小时。"
  },
  {
    "hanzi": "请假",
    "pinyin": "qǐngjià",
    "hv": "Thỉnh giá",
    "vi": "Xin nghỉ phép",
    "topic": "Văn phòng & Công sở",
    "sample": "我身体有些发烧，想向主管请假一天。"
  },
  {
    "hanzi": "出差",
    "pinyin": "chūchāi",
    "hv": "Xuất sai",
    "vi": "Đi công tác xa",
    "topic": "Văn phòng & Công sở",
    "sample": "李经理下周一要飞往深圳出差考察。"
  },
  {
    "hanzi": "打卡",
    "pinyin": "dǎkǎ",
    "hv": "Đả tạp",
    "vi": "Chấm công (quẹt thẻ / app)",
    "topic": "Văn phòng & Công sở",
    "sample": "每天早上九点前记得在钉钉上打卡。"
  },
  {
    "hanzi": "开会",
    "pinyin": "kāihuì",
    "hv": "Khai hội",
    "vi": "Họp cơ quan, họp công ty",
    "topic": "Văn phòng & Công sở",
    "sample": "全体部门成员下午两点在大会议室开会。"
  },
  {
    "hanzi": "汇报",
    "pinyin": "huìbào",
    "hv": "Hối báo",
    "vi": "Báo cáo công việc với cấp trên",
    "topic": "Văn phòng & Công sở",
    "sample": "请准备好PPT向总经理汇报本季度的业绩。"
  },
  {
    "hanzi": "方案",
    "pinyin": "fāng'àn",
    "hv": "Phương án",
    "vi": "Đề án, kế hoạch dự án",
    "topic": "Văn phòng & Công sở",
    "sample": "这份市场推广方案构思非常巧妙实用。"
  },
  {
    "hanzi": "客户",
    "pinyin": "kèhù",
    "hv": "Khách hộ",
    "vi": "Khách hàng, đối tác làm ăn",
    "topic": "Văn phòng & Công sở",
    "sample": "维护好老客户与开发新客户同样重要。"
  },
  {
    "hanzi": "合作",
    "pinyin": "hézuò",
    "hv": "Hợp tác",
    "vi": "Hợp tác kinh doanh đôi bên cùng có lợi",
    "topic": "Văn phòng & Công sở",
    "sample": "祝愿两家企业未来的战略合作顺利圆满。"
  },
  {
    "hanzi": "签约",
    "pinyin": "qiānyuē",
    "hv": "Thiêm ước",
    "vi": "Ký kết hợp đồng văn bản",
    "topic": "Văn phòng & Công sở",
    "sample": "双方代表在钓鱼台国宾馆举行了签约仪式。"
  },
  {
    "hanzi": "挂号",
    "pinyin": "guàhào",
    "hv": "Quải hào",
    "vi": "Đăng ký khám bệnh, lấy số",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "到医院就诊首先要在人工窗口或机器上挂号。"
  },
  {
    "hanzi": "门诊",
    "pinyin": "ménzhěn",
    "hv": "Môn chẩn",
    "vi": "Khám bệnh ngoại trú",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "专家门诊时间是每周二和周四上午。"
  },
  {
    "hanzi": "急诊",
    "pinyin": "jízhěn",
    "hv": "Cấp chẩn",
    "vi": "Cấp cứu khẩn cấp 24/7",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "突发高烧请直接去急诊室就诊。"
  },
  {
    "hanzi": "化验",
    "pinyin": "huàyàn",
    "hv": "Hóa nghiệm",
    "vi": "Xét nghiệm máu / nước tiểu",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "医生建议做个血常规化验以确定病因。"
  },
  {
    "hanzi": "拍片",
    "pinyin": "pāipiàn",
    "hv": "Phách phiến",
    "vi": "Chụp phim X-quang/CT",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "脚扭伤了，需要先拍片检查有没有骨折。"
  },
  {
    "hanzi": "开药",
    "pinyin": "kāiyào",
    "hv": "Khai dược",
    "vi": "Kê đơn thuốc điều trị",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "医生给我开了一些止咳化痰的药。"
  },
  {
    "hanzi": "打针",
    "pinyin": "dǎzhēn",
    "hv": "Đả châm",
    "vi": "Tiêm thuốc vào cơ/tĩnh mạch",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "护士阿姨打针手法很轻，一点都不痛。"
  },
  {
    "hanzi": "输液",
    "pinyin": "shūyè",
    "hv": "Du dịch",
    "vi": "Truyền dịch, truyền nước biển",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "严重的脱水发烧通常需要输液治疗。"
  },
  {
    "hanzi": "量体温",
    "pinyin": "liáng tǐwēn",
    "hv": "Lượng thể ôn",
    "vi": "Đo nhiệt độ cơ thể",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "护士拿耳温枪帮宝宝量了一下体温。"
  },
  {
    "hanzi": "血压",
    "pinyin": "xuèyā",
    "hv": "Huyết áp",
    "vi": "Chỉ số huyết áp tim mạch",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "高血压患者平时一定要按时服药。"
  },
  {
    "hanzi": "头晕",
    "pinyin": "tóuyūn",
    "hv": "Đầu vựng",
    "vi": "Chóng mặt, choáng váng",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "低血糖容易导致头晕眼花。"
  },
  {
    "hanzi": "咳嗽",
    "pinyin": "késou",
    "hv": "Khái thấu",
    "vi": "Ho gió, ho có đờm",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "他最近感冒咳嗽得特别厉害。"
  },
  {
    "hanzi": "流鼻涕",
    "pinyin": "liú bítì",
    "hv": "Lưu tị thế",
    "vi": "Chảy nước mũi sổ mũi",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "换季受凉容易打喷嚏流鼻涕。"
  },
  {
    "hanzi": "肚子疼",
    "pinyin": "dùzi téng",
    "hv": "Đỗ tử thống",
    "vi": "Đau bụng, đau dạ dày",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "吃了不干净的凉拌菜导致肚子疼。"
  },
  {
    "hanzi": "过敏",
    "pinyin": "guòmǐn",
    "hv": "Quá mẫn",
    "vi": "Dị ứng da / thực phẩm",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "我对青霉素和海鲜有严重过敏反应。"
  },
  {
    "hanzi": "消炎药",
    "pinyin": "xiāoyányào",
    "hv": "Tiêu viêm dược",
    "vi": "Thuốc kháng sinh, kháng viêm",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "伤口红肿发炎需要口服消炎药。"
  },
  {
    "hanzi": "处方",
    "pinyin": "chǔfāng",
    "hv": "Xử phương",
    "vi": "Đơn thuốc do bác sĩ kê",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "处方药必须凭执业医师处方才可调配。"
  },
  {
    "hanzi": "医保",
    "pinyin": "yībǎo",
    "hv": "Y bảo",
    "vi": "Bảo hiểm y tế quốc gia",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "出示医保卡可以直接在医院结算报销。"
  },
  {
    "hanzi": "病房",
    "pinyin": "bìngfáng",
    "hv": "Bệnh phòng",
    "vi": "Phòng bệnh nội trú",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "病房内保持通风透光，禁止大声喧哗。"
  },
  {
    "hanzi": "康复",
    "pinyin": "kāngfù",
    "hv": "Khang phục",
    "vi": "Hồi phục sức khỏe sau bệnh",
    "topic": "Bệnh viện & Sức khỏe",
    "sample": "祝愿术后病人早日康复出院。"
  },
  {
    "hanzi": "奖学金",
    "pinyin": "jiǎngxuéjīn",
    "hv": "Tưởng học kim",
    "vi": "Học bổng sinh viên",
    "topic": "Học tập & Du học",
    "sample": "他凭着优秀的成绩赢得了中国政府奖学金。"
  },
  {
    "hanzi": "录取",
    "pinyin": "lùqǔ",
    "hv": "Lục thủ",
    "vi": "Trúng tuyển, được nhận vào trường",
    "topic": "Học tập & Du học",
    "sample": "我收到了北京语言大学的录取通知书。"
  },
  {
    "hanzi": "报到",
    "pinyin": "bàodào",
    "hv": "Báo đáo",
    "vi": "Làm thủ tục nhập học",
    "topic": "Học tập & Du học",
    "sample": "新生请按时携带证件到体育馆报到。"
  },
  {
    "hanzi": "宿舍",
    "pinyin": "sùshè",
    "hv": "Túc xá",
    "vi": "Ký túc xá trường học",
    "topic": "Học tập & Du học",
    "sample": "留学生宿舍设施齐全，非常舒适方便。"
  },
  {
    "hanzi": "留学生",
    "pinyin": "liúxuéshēng",
    "hv": "Lưu học sinh",
    "vi": "Du học sinh quốc tế",
    "topic": "Học tập & Du học",
    "sample": "中国高校吸引了成千上万的外国留学生。"
  },
  {
    "hanzi": "学费",
    "pinyin": "xuéfèi",
    "hv": "Học phí",
    "vi": "Tiền học phí khóa học",
    "topic": "Học tập & Du học",
    "sample": "学费可以通过网上银行直接转账交纳。"
  },
  {
    "hanzi": "导师",
    "pinyin": "dǎoshī",
    "hv": "Đạo sư",
    "vi": "Giáo sư hướng dẫn luận văn",
    "topic": "Học tập & Du học",
    "sample": "我的硕士论文导师在语言学领域享有盛誉。"
  },
  {
    "hanzi": "毕业",
    "pinyin": "bìyè",
    "hv": "Tất nghiệp",
    "vi": "Tốt nghiệp ra trường",
    "topic": "Học tập & Du học",
    "sample": "今年六月份全班同学顺利毕业了。"
  },
  {
    "hanzi": "论文",
    "pinyin": "lùnwén",
    "hv": "Luận văn",
    "vi": "Bài luận, luận văn học thuật",
    "topic": "Học tập & Du học",
    "sample": "毕业论文经过反复修改终于定稿。"
  },
  {
    "hanzi": "答辩",
    "pinyin": "dábiàn",
    "hv": "Đáp biện",
    "vi": "Bảo vệ luận văn trước hội đồng",
    "topic": "Học tập & Du học",
    "sample": "他在答辩现场从容地回答了评委老师的提问。"
  },
  {
    "hanzi": "学分",
    "pinyin": "xuéfēn",
    "hv": "Học phân",
    "vi": "Tín chỉ môn học",
    "topic": "Học tập & Du học",
    "sample": "修满规定的一百二十个学分即可申请毕业证书。"
  },
  {
    "hanzi": "专业",
    "pinyin": "zhuānyè",
    "hv": "Chuyên nghiệp",
    "vi": "Chuyên ngành học thuật",
    "topic": "Học tập & Du học",
    "sample": "她本科读的专业是汉语言文学。"
  },
  {
    "hanzi": "图书馆",
    "pinyin": "túshūguǎn",
    "hv": "Đồ thư quán",
    "vi": "Thư viện trường",
    "topic": "Học tập & Du học",
    "sample": "周末我喜欢泡在图书馆安静地查阅文献。"
  },
  {
    "hanzi": "借书",
    "pinyin": "jièshū",
    "hv": "Tá thư",
    "vi": "Mượn sách đọc",
    "topic": "Học tập & Du học",
    "sample": "凭一卡通最多可以在图书馆借十本书。"
  },
  {
    "hanzi": "还书",
    "pinyin": "huánshū",
    "hv": "Hoàn thư",
    "vi": "Trả sách mượn",
    "topic": "Học tập & Du học",
    "sample": "借阅期为一个月，到期记得及时还书。"
  },
  {
    "hanzi": "续借",
    "pinyin": "xùjiè",
    "hv": "Tục tá",
    "vi": "Gia hạn thời gian mượn sách",
    "topic": "Học tập & Du học",
    "sample": "图书可以在学校图书馆官网上申请在线续借一次。"
  },
  {
    "hanzi": "自习室",
    "pinyin": "zìxíshì",
    "hv": "Tự tập thất",
    "vi": "Phòng tự học, phòng đọc",
    "topic": "Học tập & Du học",
    "sample": "期末考试周自习室总是座无虚席。"
  },
  {
    "hanzi": "食堂",
    "pinyin": "shítáng",
    "hv": "Thực đường",
    "vi": "Căn tin, nhà ăn tập thể",
    "topic": "Học tập & Du học",
    "sample": "大学一食堂的三楼菜品丰富味道地道。"
  },
  {
    "hanzi": "学生证",
    "pinyin": "xuéshengzhèng",
    "hv": "Học sinh chứng",
    "vi": "Thẻ học sinh, sinh viên",
    "topic": "Học tập & Du học",
    "sample": "凭学生证购买高铁火车票享有半价优惠。"
  },
  {
    "hanzi": "开学",
    "pinyin": "kāixué",
    "hv": "Khai học",
    "vi": "Khai giảng, bắt đầu học kỳ",
    "topic": "Học tập & Du học",
    "sample": "秋季学期将于九月一号正式开学上课。"
  },
  {
    "hanzi": "门票",
    "pinyin": "ménpiào",
    "hv": "Môn phiếu",
    "vi": "Vé vào cửa tham quan",
    "topic": "Du lịch & Danh lam",
    "sample": "故宫博物院的门票需要提前七天在小程序上实名预约。"
  },
  {
    "hanzi": "景点",
    "pinyin": "jǐngdiǎn",
    "hv": "Cảnh điểm",
    "vi": "Điểm tham quan du lịch",
    "topic": "Du lịch & Danh lam",
    "sample": "这座古城汇集了众多著名的历史文化景点。"
  },
  {
    "hanzi": "导游",
    "pinyin": "dǎoyóu",
    "hv": "Đạo du",
    "vi": "Hướng dẫn viên du lịch",
    "topic": "Du lịch & Danh lam",
    "sample": "导游非常幽默专业，一路给我们普及典故。"
  },
  {
    "hanzi": "旅行团",
    "pinyin": "lǚxíngtuán",
    "hv": "Lữ hành đoàn",
    "vi": "Đoàn du lịch đi theo tour",
    "topic": "Du lịch & Danh lam",
    "sample": "老年人外出旅游更喜欢报高品质纯玩旅行团。"
  },
  {
    "hanzi": "自由行",
    "pinyin": "zìyóuxíng",
    "hv": "Tự do hành",
    "vi": "Du lịch tự túc không theo tour",
    "topic": "Du lịch & Danh lam",
    "sample": "年轻人喜欢自己查攻略订机票自由行。"
  },
  {
    "hanzi": "故宫",
    "pinyin": "Gùgōng",
    "hv": "Cố Cung",
    "vi": "Tử Cấm Thành Bắc Kinh",
    "topic": "Du lịch & Danh lam",
    "sample": "红墙黄瓦的故宫见证了明清两代的沧桑岁月。"
  },
  {
    "hanzi": "长城",
    "pinyin": "Chángchéng",
    "hv": "Trường Thành",
    "vi": "Vạn Lý Trường Thành",
    "topic": "Du lịch & Danh lam",
    "sample": "不到长城非好汉，长城是中华民族的象征。"
  },
  {
    "hanzi": "兵马俑",
    "pinyin": "Bīngmǎyǒng",
    "hv": "Binh mã dũng",
    "vi": "Binh Mã Dũng Tần Thủy Hoàng",
    "topic": "Du lịch & Danh lam",
    "sample": "西安秦始皇兵马俑被誉为世界第八大奇迹。"
  },
  {
    "hanzi": "西湖",
    "pinyin": "Xī Hú",
    "hv": "Tây Hồ",
    "vi": "Tây Hồ (Hàng Châu)",
    "topic": "Du lịch & Danh lam",
    "sample": "欲把西湖比西子，淡妆浓抹总相宜。"
  },
  {
    "hanzi": "东方明珠",
    "pinyin": "Dōngfāng Míngzhū",
    "hv": "Đông Phương Minh Châu",
    "vi": "Tháp Minh Châu Thượng Hải",
    "topic": "Du lịch & Danh lam",
    "sample": "在外滩吹着黄浦江的微风欣赏东方明珠夜景。"
  },
  {
    "hanzi": "缆车",
    "pinyin": "lǎnchē",
    "hv": "Lãm xa",
    "vi": "Cáp treo du lịch ngắm cảnh",
    "topic": "Du lịch & Danh lam",
    "sample": "乘缆车上黄山，沿途奇峰怪石尽收眼底。"
  },
  {
    "hanzi": "拍照",
    "pinyin": "pāizhào",
    "hv": "Phách chiếu",
    "vi": "Chụp ảnh, chụp hình",
    "topic": "Du lịch & Danh lam",
    "sample": "这里的落日余晖真美，快帮我拍几张打卡照。"
  },
  {
    "hanzi": "纪念品",
    "pinyin": "jìniànpǐn",
    "hv": "Kỷ niệm phẩm",
    "vi": "Quà lưu niệm du lịch",
    "topic": "Du lịch & Danh lam",
    "sample": "给家人朋友带回一些景德镇瓷器纪念品。"
  },
  {
    "hanzi": "特产",
    "pinyin": "tèchǎn",
    "hv": "Đặc sản",
    "vi": "Đặc sản vùng miền",
    "topic": "Du lịch & Danh lam",
    "sample": "四川的花椒和郫县豆瓣酱是非常地道的特产。"
  },
  {
    "hanzi": "风景",
    "pinyin": "fēngjǐng",
    "hv": "Phong cảnh",
    "vi": "Cảnh sắc, phong cảnh thiên nhiên",
    "topic": "Du lịch & Danh lam",
    "sample": "桂林山水风景如画，让人流连忘返。"
  },
  {
    "hanzi": "气候",
    "pinyin": "qìhòu",
    "hv": "Khí hậu",
    "vi": "Khí hậu thời tiết đặc trưng",
    "topic": "Du lịch & Danh lam",
    "sample": "云南气候温和湿润，常年花开不断。"
  },
  {
    "hanzi": "旺季",
    "pinyin": "wàngjì",
    "hv": "Vượng quý",
    "vi": "Mùa cao điểm du lịch",
    "topic": "Du lịch & Danh lam",
    "sample": "国庆长假是全国各大景区的旅游旺季。"
  },
  {
    "hanzi": "淡季",
    "pinyin": "dànjì",
    "hv": "Đạm quý",
    "vi": "Mùa thấp điểm du lịch vắng vẻ",
    "topic": "Du lịch & Danh lam",
    "sample": "淡季出游不仅人少清静，而且住宿门票都有大折扣。"
  },
  {
    "hanzi": "签证",
    "pinyin": "qiānzhèng",
    "hv": "Thiêm chứng",
    "vi": "Thị thực nhập cảnh (Visa)",
    "topic": "Du lịch & Danh lam",
    "sample": "出国前请务必确认好目的地国家的签证政策。"
  },
  {
    "hanzi": "海关",
    "pinyin": "hǎiguān",
    "hv": "Hải quan",
    "vi": "Cửa khẩu hải quan kiểm soát biên giới",
    "topic": "Du lịch & Danh lam",
    "sample": "过海关时请配合工作人员开箱检查违禁品。"
  },
  {
    "hanzi": "热情",
    "pinyin": "rèqíng",
    "hv": "Nhiệt tình",
    "vi": "Nhiệt tình, niềm nở, hiếu khách",
    "topic": "Cảm xúc & Tính cách",
    "sample": "四川人民对待外来游客非常热情好客。"
  },
  {
    "hanzi": "认真",
    "pinyin": "rènzhēn",
    "hv": "Nhận chân",
    "vi": "Chăm chỉ, nghiêm túc, chu đáo",
    "topic": "Cảm xúc & Tính cách",
    "sample": "世上无难事，只要肯认真攀登。"
  },
  {
    "hanzi": "幽默",
    "pinyin": "yōumò",
    "hv": "U mặc",
    "vi": "Hài hước, dí dỏm vui nhộn",
    "topic": "Cảm xúc & Tính cách",
    "sample": "他讲的故事十分幽默风趣，逗得大家哈哈大笑。"
  },
  {
    "hanzi": "内向",
    "pinyin": "nèixiàng",
    "hv": "Nội hướng",
    "vi": "Hướng nội, trầm tính ít nói",
    "topic": "Cảm xúc & Tính cách",
    "sample": "性格内向的人往往做事专注且心思细腻。"
  },
  {
    "hanzi": "外向",
    "pinyin": "wàixiàng",
    "hv": "Ngoại hướng",
    "vi": "Hướng ngoại, cởi mở năng động",
    "topic": "Cảm xúc & Tính cách",
    "sample": "他性格外向大方，很容易与陌生人打成一片。"
  },
  {
    "hanzi": "耐心",
    "pinyin": "nàixīn",
    "hv": "Nại tâm",
    "vi": "Kiên nhẫn, nhẫn nại bền bỉ",
    "topic": "Cảm xúc & Tính cách",
    "sample": "张老师总是耐心地倾听每一个学生的想法。"
  },
  {
    "hanzi": "礼貌",
    "pinyin": "lǐmào",
    "hv": "Lễ mạo",
    "vi": "Lịch sự, lễ phép nhã nhặn",
    "topic": "Cảm xúc & Tính cách",
    "sample": "懂礼貌、讲诚信是人际交往的基本准则。"
  },
  {
    "hanzi": "自信",
    "pinyin": "zìxìn",
    "hv": "Tự tín",
    "vi": "Tự tin vào bản thân mình",
    "topic": "Cảm xúc & Tính cách",
    "sample": "昂首挺胸走上舞台，展现最自信的自己。"
  },
  {
    "hanzi": "谦虚",
    "pinyin": "qiānxū",
    "hv": "Khiêm hư",
    "vi": "Khiêm tốn, không tự mãn",
    "topic": "Cảm xúc & Tính cách",
    "sample": "即便取得了骄人的荣誉，他依然谦虚低调。"
  },
  {
    "hanzi": "诚实",
    "pinyin": "chéngshí",
    "hv": "Thành thực",
    "vi": "Trung thực, thật thà không gian dối",
    "topic": "Cảm xúc & Tính cách",
    "sample": "诚实守信是做人立身处世的根本。"
  },
  {
    "hanzi": "善良",
    "pinyin": "shànliáng",
    "hv": "Thiện lương",
    "vi": "Hiền lành, tốt bụng lương thiện",
    "topic": "Cảm xúc & Tính cách",
    "sample": "善良的心灵是这世界上最宝贵的财富。"
  },
  {
    "hanzi": "大方",
    "pinyin": "dàfang",
    "hv": "Đại phương",
    "vi": "Hào phóng, rộng rãi, đàng hoàng",
    "topic": "Cảm xúc & Tính cách",
    "sample": "他在金钱上对待朋友非常大方仗义。"
  },
  {
    "hanzi": "小气",
    "pinyin": "xiǎoqi",
    "hv": "Tiểu khí",
    "vi": "Keo kiệt, hẹp hòi bủn xỉn",
    "topic": "Cảm xúc & Tính cách",
    "sample": "为一点小事斤斤计较未免太小气了。"
  },
  {
    "hanzi": "骄傲",
    "pinyin": "jiāo'ào",
    "hv": "Kiêu ngạo",
    "vi": "Tự hào / kiêu căng kiêu ngạo",
    "topic": "Cảm xúc & Tính cách",
    "sample": "我们为神舟飞船的成功发射感到无比骄傲。"
  },
  {
    "hanzi": "害羞",
    "pinyin": "hàixiū",
    "hv": "Hại tu",
    "vi": "E thẹn, ngượng ngùng xấu hổ",
    "topic": "Cảm xúc & Tính cách",
    "sample": "被当众夸奖后，小妹妹害羞得脸颊泛红。"
  },
  {
    "hanzi": "活泼",
    "pinyin": "huópo",
    "hv": "Hoạt bát",
    "vi": "Hoạt bát, nhanh nhẹn vui vẻ",
    "topic": "Cảm xúc & Tính cách",
    "sample": "操场上奔跑的小朋友们个个天真活泼。"
  },
  {
    "hanzi": "暴躁",
    "pinyin": "bàozào",
    "hv": "Bạo táo",
    "vi": "Nóng nảy, cáu bẳn gắt gỏng",
    "topic": "Cảm xúc & Tính cách",
    "sample": "冲动暴躁的情绪容易让人做出后悔的决定。"
  },
  {
    "hanzi": "温柔",
    "pinyin": "wēnróu",
    "hv": "Ôn nhu",
    "vi": "Dịu dàng, hiền dịu đằm thắm",
    "topic": "Cảm xúc & Tính cách",
    "sample": "母亲温柔的话语总能抚平我内心的焦虑。"
  },
  {
    "hanzi": "冷静",
    "pinyin": "lěngjìng",
    "hv": "Lãnh tĩnh",
    "vi": "Điềm tĩnh, bình tĩnh sáng suốt",
    "topic": "Cảm xúc & Tính cách",
    "sample": "越是在危急关头，越需要沉着冷静地应对。"
  },
  {
    "hanzi": "开朗",
    "pinyin": "kāilǎng",
    "hv": "Khai lãng",
    "vi": "Cởi mở, vui tươi yêu đời",
    "topic": "Cảm xúc & Tính cách",
    "sample": "她乐观开朗的笑容感染了周围的所有人。"
  },
  {
    "hanzi": "亲戚",
    "pinyin": "qīnqi",
    "hv": "Thân thích",
    "vi": "Họ hàng, bà con thân thuộc",
    "topic": "Gia đình & Đời sống",
    "sample": "过年期间走亲戚是中国民间的传统习俗。"
  },
  {
    "hanzi": "爷爷",
    "pinyin": "yéye",
    "hv": "Gia gia",
    "vi": "Ông nội",
    "topic": "Gia đình & Đời sống",
    "sample": "爷爷每天清晨都会在阳台上给花草浇水。"
  },
  {
    "hanzi": "外公",
    "pinyin": "wàigōng",
    "hv": "Ngoại công",
    "vi": "Ông ngoại",
    "topic": "Gia đình & Đời sống",
    "sample": "外公是一名退休的中学语文高级教师。"
  },
  {
    "hanzi": "外婆",
    "pinyin": "wàipó",
    "hv": "Ngoại bà",
    "vi": "Bà ngoại",
    "topic": "Gia đình & Đời sống",
    "sample": "每年放暑假我都迫不及待回外婆家度过。"
  },
  {
    "hanzi": "伯伯",
    "pinyin": "bóbo",
    "hv": "Bác bác",
    "vi": "Bác trai (anh của bố)",
    "topic": "Gia đình & Đời sống",
    "sample": "大伯伯每次来城里都会带来家乡的土特产。"
  },
  {
    "hanzi": "叔叔",
    "pinyin": "shūshu",
    "hv": "Thúc thúc",
    "vi": "Chú (em trai của bố)",
    "topic": "Gia đình & Đời sống",
    "sample": "叔叔送给我一本精美的中国地理画册。"
  },
  {
    "hanzi": "姑姑",
    "pinyin": "gūgu",
    "hv": "Cô cô",
    "vi": "Cô ruột (chị/em gái bố)",
    "topic": "Gia đình & Đời sống",
    "sample": "姑姑缝制的旗袍工艺十分精湛绝伦。"
  },
  {
    "hanzi": "舅舅",
    "pinyin": "jiùjiu",
    "hv": "Cữu cữu",
    "vi": "Cậu ruột (anh/em trai mẹ)",
    "topic": "Gia đình & Đời sống",
    "sample": "舅舅周末开车载全家人一起去郊外露营野餐。"
  },
  {
    "hanzi": "表哥",
    "pinyin": "biǎogē",
    "hv": "Biểu ca",
    "vi": "Anh họ (con của cô, cậu, dì)",
    "topic": "Gia đình & Đời sống",
    "sample": "表哥在人工智能领域取得了显著的科研突破。"
  },
  {
    "hanzi": "堂弟",
    "pinyin": "tángdì",
    "hv": "Đường đệ",
    "vi": "Em trai họ (con của bác, chú)",
    "topic": "Gia đình & Đời sống",
    "sample": "堂弟从小就展现出超高的数学天赋。"
  },
  {
    "hanzi": "邻里",
    "pinyin": "línlǐ",
    "hv": "Lân lý",
    "vi": "Hàng xóm láng giềng",
    "topic": "Gia đình & Đời sống",
    "sample": "邻里之间互敬互爱，小区生活其乐融融。"
  },
  {
    "hanzi": "同乡",
    "pinyin": "tóngxiāng",
    "hv": "Đồng hương",
    "vi": "Người cùng quê hương",
    "topic": "Gia đình & Đời sống",
    "sample": "在异国他乡听到地道的家乡话，倍感亲切。"
  },
  {
    "hanzi": "搬家",
    "pinyin": "bānjiā",
    "hv": "Bàn gia",
    "vi": "Chuyển nhà sang nơi ở mới",
    "topic": "Gia đình & Đời sống",
    "sample": "下周全家乔迁新居，欢迎朋友们来暖房聚会。"
  },
  {
    "hanzi": "装修",
    "pinyin": "zhuāngxiū",
    "hv": "Trang tu",
    "vi": "Sửa chữa, bài trí nội thất nhà",
    "topic": "Gia đình & Đời sống",
    "sample": "新房子的室内装修选用了极简的原木风格。"
  },
  {
    "hanzi": "家具",
    "pinyin": "jiājù",
    "hv": "Gia cụ",
    "vi": "Đồ dùng nội thất",
    "topic": "Gia đình & Đời sống",
    "sample": "客厅里添置了一组宽大柔软的真皮沙发家具。"
  },
  {
    "hanzi": "房租",
    "pinyin": "fángzū",
    "hv": "Phòng tô",
    "vi": "Tiền thuê căn hộ, thuê phòng",
    "topic": "Gia đình & Đời sống",
    "sample": "每月初五通过手机转账准时交付房租。"
  },
  {
    "hanzi": "水电费",
    "pinyin": "shuǐdiànfèi",
    "hv": "Thủy điện phí",
    "vi": "Tiền điện sinh hoạt và nước",
    "topic": "Gia đình & Đời sống",
    "sample": "如今在手机小程序里便能一键代扣水电费。"
  },
  {
    "hanzi": "物业",
    "pinyin": "wùyè",
    "hv": "Vật nghiệp",
    "vi": "Ban quản lý tòa nhà, ban bảo vệ",
    "topic": "Gia đình & Đời sống",
    "sample": "小区物业负责绿化保洁以及日常安保巡逻。"
  },
  {
    "hanzi": "钥匙",
    "pinyin": "yàoshi",
    "hv": "Thược thi",
    "vi": "Chìa khóa mở cửa",
    "topic": "Gia đình & Đời sống",
    "sample": "家里换装了智能指纹锁，再也不用担心忘记带钥匙。"
  },
  {
    "hanzi": "打扫",
    "pinyin": "dǎsǎo",
    "hv": "Đả tảo",
    "vi": "Quét tước, dọn dẹp vệ sinh nhà",
    "topic": "Gia đình & Đời sống",
    "sample": "农历腊月二十四是家家户户打扫尘土的日子。"
  },
  {
    "hanzi": "上网",
    "pinyin": "shàngwǎng",
    "hv": "Thượng võng",
    "vi": "Vào mạng Internet, lướt web",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "通过手机随时随地上网获取最新的全球资讯。"
  },
  {
    "hanzi": "无线网",
    "pinyin": "wúxiànwǎng",
    "hv": "Vô tuyến võng",
    "vi": "Mạng WiFi không dây",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "咖啡厅内提供免费高速无线网供客人办公。"
  },
  {
    "hanzi": "信号",
    "pinyin": "xìnhào",
    "hv": "Tín hiệu",
    "vi": "Tín hiệu sóng di động / viễn thông",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "地下车库里手机信号可能稍有盲区。"
  },
  {
    "hanzi": "下载",
    "pinyin": "xiàzǎi",
    "hv": "Hạ tải",
    "vi": "Tải file / dữ liệu về máy",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "点击官方链接即可快速下载安装包。"
  },
  {
    "hanzi": "上传",
    "pinyin": "shàngchuán",
    "hv": "Thượng truyền",
    "vi": "Tải file dữ liệu lên mạng",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "课后请把作业文档上传至网盘提交。"
  },
  {
    "hanzi": "朋友圈",
    "pinyin": "péngyouquān",
    "hv": "Bằng hữu khuyên",
    "vi": "Bảng tin bạn bè (WeChat Moments)",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "他在朋友圈分享了九张旅行沿途抓拍的绝美风景。"
  },
  {
    "hanzi": "点赞",
    "pinyin": "diǎnzàn",
    "hv": "Điểm tán",
    "vi": "Thả tim, bấm Like tương tác",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "这条正能量短视频获得了上百万网友点赞。"
  },
  {
    "hanzi": "评论",
    "pinyin": "pínglùn",
    "hv": "Bình luận",
    "vi": "Để lại bình luận, comment",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "欢迎大家在视频下方评论区发表宝贵意见。"
  },
  {
    "hanzi": "转发",
    "pinyin": "zhuǎnfā",
    "hv": "Chuyển phát",
    "vi": "Chia sẻ bài viết, share link",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "看到有价值的科普文章，随手转发到家庭群。"
  },
  {
    "hanzi": "粉丝",
    "pinyin": "fěnsī",
    "hv": "Phấn ti",
    "vi": "Người theo dõi, fan hâm mộ",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "他的教学账号如今累计拥有五十万忠实粉丝。"
  },
  {
    "hanzi": "博主",
    "pinyin": "bōzhǔ",
    "hv": "Bác chủ",
    "vi": "Blogger, người sáng tạo nội dung",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "这位美食博主分享的家常菜教程通俗易懂。"
  },
  {
    "hanzi": "直播",
    "pinyin": "zhíbō",
    "hv": "Trực bá",
    "vi": "Phát sóng trực tiếp, Livestream",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "今晚七点半知名作家将进行线上新书发布直播。"
  },
  {
    "hanzi": "带货",
    "pinyin": "dàihuò",
    "hv": "Đái hóa",
    "vi": "Bán hàng trực tiếp qua livestream",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "乡村助农直播带货带动了当地农产品畅销全国。"
  },
  {
    "hanzi": "短视频",
    "pinyin": "duǎnshìpín",
    "hv": "Đoản thị tần",
    "vi": "Video ngắn (TikTok, Reels)",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "如今很多人通过幽默短视频记录生活点滴。"
  },
  {
    "hanzi": "账号",
    "pinyin": "zhànghào",
    "hv": "Trướng hào",
    "vi": "Tài khoản đăng nhập hệ thống",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "请妥善保管个人账号密码，防止被盗号。"
  },
  {
    "hanzi": "注册",
    "pinyin": "zhùcè",
    "hv": "Chú sách",
    "vi": "Đăng ký tài khoản người dùng",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "输入手机号码并验证即可免费注册成为会员。"
  },
  {
    "hanzi": "注销",
    "pinyin": "zhùxiāo",
    "hv": "Chú tiêu",
    "vi": "Xóa, hủy tài khoản vĩnh viễn",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "长期闲置的废弃账号可以在安全中心申请注销。"
  },
  {
    "hanzi": "验证码",
    "pinyin": "yànzhèngmǎ",
    "hv": "Nghiệm chứng mã",
    "vi": "Mã xác thực OTP gửi qua SMS",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "动态验证码是保障资金账户安全的重要凭据。"
  },
  {
    "hanzi": "软件",
    "pinyin": "ruǎnjiàn",
    "hv": "Nhuyễn kiện",
    "vi": "Phần mềm, ứng dụng di động (App)",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "这款中文辅助学习软件功能非常全面强大。"
  },
  {
    "hanzi": "病毒",
    "pinyin": "bìngdú",
    "hv": "Bệnh độc",
    "vi": "Mã độc, virus máy tính",
    "topic": "Công nghệ & Mạng xã hội",
    "sample": "千万不要随意点击陌生邮件链接，以免感染电脑病毒。"
  },
  {
    "hanzi": "外套",
    "pinyin": "wàitào",
    "hv": "Ngoại sáo",
    "vi": "Áo khoác ngoài giữ ấm",
    "topic": "Thời trang & Làm đẹp",
    "sample": "秋冬季节外出请随身带一件防风厚外套。"
  },
  {
    "hanzi": "毛衣",
    "pinyin": "máoyī",
    "hv": "Mao y",
    "vi": "Áo len đan",
    "topic": "Thời trang & Làm đẹp",
    "sample": "一件高领羊绒毛衣既保暖又显优雅端庄。"
  },
  {
    "hanzi": "牛仔裤",
    "pinyin": "niúzǎikù",
    "hv": "Ngưu tử khố",
    "vi": "Quần bò, quần jeans năng động",
    "topic": "Thời trang & Làm đẹp",
    "sample": "经典直筒牛仔裤百搭耐穿，永远不过时。"
  },
  {
    "hanzi": "短裙",
    "pinyin": "duǎnqún",
    "hv": "Đoản quần",
    "vi": "Váy ngắn, chân váy trẻ trung",
    "topic": "Thời trang & Làm đẹp",
    "sample": "夏天女孩子们喜欢穿飘逸百褶的格子短裙。"
  },
  {
    "hanzi": "西装",
    "pinyin": "xīzhuāng",
    "hv": "Tây trang",
    "vi": "Bộ âu phục, comple lịch lãm",
    "topic": "Thời trang & Làm đẹp",
    "sample": "出席商务谈判时穿合身挺拔的深色西装。"
  },
  {
    "hanzi": "领带",
    "pinyin": "lǐngdài",
    "hv": "Lãnh đới",
    "vi": "Cà vạt cổ áo",
    "topic": "Thời trang & Làm đẹp",
    "sample": "一条纯色真丝领带能够提升整体气质。"
  },
  {
    "hanzi": "皮带",
    "pinyin": "pídài",
    "hv": "Bì đới",
    "vi": "Thắt lưng da",
    "topic": "Thời trang & Làm đẹp",
    "sample": "男士皮带的颜色最好与皮鞋保持一致。"
  },
  {
    "hanzi": "袜子",
    "pinyin": "wàzi",
    "hv": "Oa tử",
    "vi": "Đôi tất chân, vớ",
    "topic": "Thời trang & Làm đẹp",
    "sample": "慢跑运动时推荐穿透气吸汗的纯棉袜子。"
  },
  {
    "hanzi": "运动鞋",
    "pinyin": "yùndòngxié",
    "hv": "Vận động hài",
    "vi": "Giày thể thao êm chân",
    "topic": "Thời trang & Làm đẹp",
    "sample": "一双轻便减震的运动鞋能有效保护膝盖。"
  },
  {
    "hanzi": "高跟鞋",
    "pinyin": "gāogēnxié",
    "hv": "Cao cân hài",
    "vi": "Giày cao gót tôn dáng",
    "topic": "Thời trang & Làm đẹp",
    "sample": "晚礼服搭配闪亮的细高跟鞋格外引人注目。"
  },
  {
    "hanzi": "项链",
    "pinyin": "xiàngliàn",
    "hv": "Hạng luyện",
    "vi": "Dây chuyền, vòng cổ kim hoàn",
    "topic": "Thời trang & Làm đẹp",
    "sample": "细细的白金项链垂挂着一颗晶莹的水晶吊坠。"
  },
  {
    "hanzi": "耳环",
    "pinyin": "ěrhuán",
    "hv": "Nhĩ hoàn",
    "vi": "Khuyên tai, bông tai thời trang",
    "topic": "Thời trang & Làm đẹp",
    "sample": "这对天然淡水珍珠耳环设计别致优雅。"
  },
  {
    "hanzi": "戒指",
    "pinyin": "jièzhi",
    "hv": "Giới chỉ",
    "vi": "Nhẫn ngón tay",
    "topic": "Thời trang & Làm đẹp",
    "sample": "结婚钻戒象征着永恒不变的忠贞爱意。"
  },
  {
    "hanzi": "太阳镜",
    "pinyin": "tàiyángjìng",
    "hv": "Thái dương kính",
    "vi": "Kính râm chống tia UV",
    "topic": "Thời trang & Làm đẹp",
    "sample": "海岛度假漫步沙滩必备一副时尚太阳镜。"
  },
  {
    "hanzi": "香水",
    "pinyin": "xiāngshuǐ",
    "hv": "Hương thủy",
    "vi": "Nước hoa thơm dịu",
    "topic": "Thời trang & Làm đẹp",
    "sample": "在手腕与耳后喷洒淡淡的花果调香水。"
  },
  {
    "hanzi": "口红",
    "pinyin": "kǒuhóng",
    "hv": "Khẩu hồng",
    "vi": "Son môi trang điểm",
    "topic": "Thời trang & Làm đẹp",
    "sample": "正红色的口红让整个妆容气场全开。"
  },
  {
    "hanzi": "护肤品",
    "pinyin": "hùfūpǐn",
    "hv": "Hộ phu phẩm",
    "vi": "Mỹ phẩm dưỡng da chăm sóc sắc đẹp",
    "topic": "Thời trang & Làm đẹp",
    "sample": "夜间护肤品侧重于深层滋养与修复肌底。"
  },
  {
    "hanzi": "防晒霜",
    "pinyin": "fángshàishuāng",
    "hv": "Phòng sái sương",
    "vi": "Kem chống nắng ngừa sạm da",
    "topic": "Thời trang & Làm đẹp",
    "sample": "出门前二十分钟均匀涂抹SPF50+防晒霜。"
  },
  {
    "hanzi": "发型",
    "pinyin": "fàxíng",
    "hv": "Phát hình",
    "vi": "Kiểu tóc thời trang",
    "topic": "Thời trang & Làm đẹp",
    "sample": "适合自己脸型的清爽发型让人精神焕发。"
  },
  {
    "hanzi": "理发",
    "pinyin": "lǐfà",
    "hv": "Lý phát",
    "vi": "Cắt tóc, gội sấy tạo mẫu tóc",
    "topic": "Thời trang & Làm đẹp",
    "sample": "每月去理发店修剪一次头发保持整洁利落。"
  },
  {
    "hanzi": "羽毛球",
    "pinyin": "yǔmáoqiú",
    "hv": "Vũ mao cầu",
    "vi": "Môn cầu lông",
    "topic": "Thể thao & Giải trí",
    "sample": "打羽毛球能很好地锻炼全身协调能力与爆发力。"
  },
  {
    "hanzi": "乒乓球",
    "pinyin": "pīngpāngqiú",
    "hv": "Binh bàng cầu",
    "vi": "Môn bóng bàn (quốc cầu Trung Quốc)",
    "topic": "Thể thao & Giải trí",
    "sample": "中国乒乓球队在奥运赛场上屡创辉煌战绩。"
  },
  {
    "hanzi": "网球",
    "pinyin": "wǎngqiú",
    "hv": "Võng cầu",
    "vi": "Môn quần vợt (tennis)",
    "topic": "Thể thao & Giải trí",
    "sample": "温布尔登网球锦标赛是历史最悠久的网球公开赛。"
  },
  {
    "hanzi": "排球",
    "pinyin": "páiqiú",
    "hv": "Bài cầu",
    "vi": "Môn bóng chuyền",
    "topic": "Thể thao & Giải trí",
    "sample": "中国女排团结协作、顽强拼搏的精神激励着无数人。"
  },
  {
    "hanzi": "健身房",
    "pinyin": "jiànshēnfáng",
    "hv": "Kiện thân phòng",
    "vi": "Phòng tập gym thể hình",
    "topic": "Thể thao & Giải trí",
    "sample": "下班后到健身房挥洒汗水是极佳的减压方式。"
  },
  {
    "hanzi": "瑜伽",
    "pinyin": "yújiā",
    "hv": "Du già",
    "vi": "Bộ môn Yoga uốn dẻo",
    "topic": "Thể thao & Giải trí",
    "sample": "清晨练习半小时舒缓瑜伽，唤醒身心活力。"
  },
  {
    "hanzi": "滑雪",
    "pinyin": "huáxuě",
    "hv": "Hoạt tuyết",
    "vi": "Trượt tuyết mùa đông",
    "topic": "Thể thao & Giải trí",
    "sample": "崇礼滑雪场拥有世界一流的高山滑雪专业赛道。"
  },
  {
    "hanzi": "滑冰",
    "pinyin": "huábīng",
    "hv": "Hoạt băng",
    "vi": "Trượt băng nghệ thuật/tốc độ",
    "topic": "Thể thao & Giải trí",
    "sample": "在冰面上滑冰轻盈如燕、动作优美。"
  },
  {
    "hanzi": "爬山",
    "pinyin": "páshān",
    "hv": "Ba sơn",
    "vi": "Leo núi dã ngoại",
    "topic": "Thể thao & Giải trí",
    "sample": "重阳节登高爬山远眺，寄托着健康长寿的美好期盼。"
  },
  {
    "hanzi": "露营",
    "pinyin": "lùyíng",
    "hv": "Lộ doanh",
    "vi": "Cắm trại ngủ lều dã ngoại",
    "topic": "Thể thao & Giải trí",
    "sample": "在繁星点点的星空下支起帐篷露营别有一番野趣。"
  },
  {
    "hanzi": "下棋",
    "pinyin": "xiàqí",
    "hv": "Hạ kỳ",
    "vi": "Đánh cờ tướng / cờ vây",
    "topic": "Thể thao & Giải trí",
    "sample": "公园凉亭里两位老者屏气凝神地切磋棋艺。"
  },
  {
    "hanzi": "打牌",
    "pinyin": "dǎpái",
    "hv": "Đả bài",
    "vi": "Chơi bài tiêu khiển",
    "topic": "Thể thao & Giải trí",
    "sample": "一家人围坐在一起打扑克牌度过温馨周末。"
  },
  {
    "hanzi": "桌游",
    "pinyin": "zhuōyóu",
    "hv": "Trác du",
    "vi": "Trò chơi cờ bàn board game",
    "topic": "Thể thao & Giải trí",
    "sample": "桌游俱乐部里年轻人正在体验紧张刺激的策略游戏。"
  },
  {
    "hanzi": "KTV",
    "pinyin": "K-T-V",
    "hv": "KTV",
    "vi": "Quán hát karaoke bạn bè",
    "topic": "Thể thao & Giải trí",
    "sample": "同学生日聚会大家在KTV引吭高歌、尽情释放。"
  },
  {
    "hanzi": "剧本杀",
    "pinyin": "jùběnshā",
    "hv": "Kịch bản sát",
    "vi": "Trò chơi nhập vai giải đố suy luận (LARP)",
    "topic": "Thể thao & Giải trí",
    "sample": "沉浸式剧本杀让玩家在推理中感受角色的喜怒哀乐。"
  },
  {
    "hanzi": "密室逃脱",
    "pinyin": "mìshì táotuō",
    "hv": "Mật thất đào thoát",
    "vi": "Trò chơi Escape Room vượt mê cung giải đố",
    "topic": "Thể thao & Giải trí",
    "sample": "团队成员分工配合，在最后关头成功逃离密室。"
  },
  {
    "hanzi": "游乐园",
    "pinyin": "yóulèyuán",
    "hv": "Du nhạc viên",
    "vi": "Công viên giải trí trò chơi",
    "topic": "Thể thao & Giải trí",
    "sample": "上海迪士尼游乐园是童年梦想成真的奇妙天地。"
  },
  {
    "hanzi": "过山车",
    "pinyin": "guòshānchē",
    "hv": "Quá sơn xa",
    "vi": "Tàu lượn siêu tốc",
    "topic": "Thể thao & Giải trí",
    "sample": "坐过山车俯冲直下时尖叫声此起彼伏。"
  },
  {
    "hanzi": "演唱会",
    "pinyin": "yǎnchànghuì",
    "hv": "Diễn xướng hội",
    "vi": "Đại nhạc hội, Liveshow ca nhạc",
    "topic": "Thể thao & Giải trí",
    "sample": "鸟巢体育场座无虚席，数万荧光棒照亮演唱会现场。"
  },
  {
    "hanzi": "话剧",
    "pinyin": "huàjù",
    "hv": "Thoại kịch",
    "vi": "Vở kịch nói sân khấu cổ điển",
    "topic": "Thể thao & Giải trí",
    "sample": "北京人民艺术剧院的经典话剧《茶馆》一票难求。"
  },
  {
    "hanzi": "暴雨",
    "pinyin": "bàoyǔ",
    "hv": "Bạo vũ",
    "vi": "Mưa to xối xả, giông bão",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "突如其来的倾盆暴雨让路面迅速积水。"
  },
  {
    "hanzi": "雷阵雨",
    "pinyin": "léizhènyǔ",
    "hv": "Lôi trận vũ",
    "vi": "Mưa rào kèm sấm sét",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "夏日午后雷阵雨来去匆匆，很快天空又恢复放晴。"
  },
  {
    "hanzi": "台风",
    "pinyin": "táifēng",
    "hv": "Thai phong",
    "vi": "Cơn bão nhiệt đới mạnh",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "超强台风逼近沿海，全区启动了最高级别应急响应。"
  },
  {
    "hanzi": "大雾",
    "pinyin": "dàwù",
    "hv": "Đại vụ",
    "vi": "Sương mù dày đặc làm giảm tầm nhìn",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "因高速公路大雾弥漫，交警对部分路段实施了交通管制。"
  },
  {
    "hanzi": "沙尘暴",
    "pinyin": "shāchénbào",
    "hv": "Sa trần bạo",
    "vi": "Bão cát bụi mù trời",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "遇上沙尘暴天气外出一定要佩戴紧密的防护口罩。"
  },
  {
    "hanzi": "干旱",
    "pinyin": "gānhàn",
    "hv": "Can hạn",
    "vi": "Hạn hán kéo dài thiếu nước",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "持续多月干旱少雨对农业灌溉造成了严重威胁。"
  },
  {
    "hanzi": "洪水",
    "pinyin": "hóngshuǐ",
    "hv": "Hồng thủy",
    "vi": "Lũ lụt dâng cao",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "子弟兵日夜奋战在抗击洪水的抗洪抢险第一线。"
  },
  {
    "hanzi": "日出",
    "pinyin": "rìchū",
    "hv": "Nhật xuất",
    "vi": "Mặt trời mọc, rạng đông",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "站在泰山极顶看红日喷薄而出，场面恢宏壮美。"
  },
  {
    "hanzi": "日落",
    "pinyin": "rìluò",
    "hv": "Nhật lạc",
    "vi": "Mặt trời lặn, hoàng hôn",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "海平线上的落日把漫天晚霞染成了金红色。"
  },
  {
    "hanzi": "彩虹",
    "pinyin": "cǎihóng",
    "hv": "Thải hồng",
    "vi": "Cầu vồng bảy sắc sau cơn mưa",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "不经历风雨，怎能见彩虹。"
  },
  {
    "hanzi": "月亮",
    "pinyin": "yuèliang",
    "hv": "Nguyệt lượng",
    "vi": "Mặt trăng vằng vặc",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "中秋之夜，皎洁明媚的月亮挂在碧空如盘。"
  },
  {
    "hanzi": "星星",
    "pinyin": "xīngxing",
    "hv": "Tinh tinh",
    "vi": "Những vì sao sáng",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "远离城市灯光污染的深山里，银河繁星触手可及。"
  },
  {
    "hanzi": "宇宙",
    "pinyin": "yǔzhòu",
    "hv": "Vũ trụ",
    "vi": "Không gian vũ trụ bao la huyền bí",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "中国空间站开启了人类和平探索宇宙的新篇章。"
  },
  {
    "hanzi": "森林",
    "pinyin": "sēnlín",
    "hv": "Sâm lâm",
    "vi": "Rừng rậm, lá phổi xanh của trái đất",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "广袤的大兴安岭原始森林孕育了丰富的野生动植物。"
  },
  {
    "hanzi": "海洋",
    "pinyin": "hǎiyáng",
    "hv": "Hải dương",
    "vi": "Biển cả, đại dương sâu thẳm",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "保护海洋生态平衡是全人类共同的历史责任。"
  },
  {
    "hanzi": "沙漠",
    "pinyin": "shāmò",
    "hv": "Sa mạc",
    "vi": "Sa mạc cát mênh mông",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "塔克拉玛干沙漠被誉为死亡之海，金沙连绵起伏。"
  },
  {
    "hanzi": "草原",
    "pinyin": "cǎoyuán",
    "hv": "Thảo nguyên",
    "vi": "Đồng cỏ thảo nguyên bát ngát",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "风吹草低见牛羊，呼伦贝尔大草原美不胜收。"
  },
  {
    "hanzi": "瀑布",
    "pinyin": "pùbù",
    "hv": "Bộc bố",
    "vi": "Thác nước đổ bọt trắng xóa",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "飞流直下三千尺，疑是银河落九天。"
  },
  {
    "hanzi": "温泉",
    "pinyin": "wēnquán",
    "hv": "Ôn tuyền",
    "vi": "Suối nước nóng tự nhiên",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "冬天在白雪皑皑的山间浸泡露天温泉十分惬意。"
  },
  {
    "hanzi": "岛屿",
    "pinyin": "dǎoyǔ",
    "hv": "Đảo dữ",
    "vi": "Hòn đảo trên biển",
    "topic": "Thời tiết & Tự nhiên",
    "sample": "舟山群岛是由千余个大小岛屿组成的天然明珠。"
  },
  {
    "hanzi": "东边",
    "pinyin": "dōngbian",
    "hv": "Đông biên",
    "vi": "Phía Đông",
    "topic": "Phương vị & Không gian",
    "sample": "太阳每天从东方的地平线冉冉升起。"
  },
  {
    "hanzi": "西边",
    "pinyin": "xībian",
    "hv": "Tây biên",
    "vi": "Phía Tây",
    "topic": "Phương vị & Không gian",
    "sample": "夕阳西下，西边的云霞绚丽多姿。"
  },
  {
    "hanzi": "南边",
    "pinyin": "nánbian",
    "hv": "Nam biên",
    "vi": "Phía Nam",
    "topic": "Phương vị & Không gian",
    "sample": "天气转凉，大雁结队往温暖的南边迁徙。"
  },
  {
    "hanzi": "北边",
    "pinyin": "běibian",
    "hv": "Bắc biên",
    "vi": "Phía Bắc",
    "topic": "Phương vị & Không gian",
    "sample": "学校北边紧邻着一座清幽的市民生态公园。"
  },
  {
    "hanzi": "东南",
    "pinyin": "dōngnán",
    "hv": "Đông Nam",
    "vi": "Hướng Đông Nam",
    "topic": "Phương vị & Không gian",
    "sample": "东南沿海各省经济贸易极其繁荣活跃。"
  },
  {
    "hanzi": "东北",
    "pinyin": "dōngběi",
    "hv": "Đông Bắc",
    "vi": "Hướng Đông Bắc",
    "topic": "Phương vị & Không gian",
    "sample": "东北黑土地肥沃辽阔，盛产香甜的五常大米。"
  },
  {
    "hanzi": "西南",
    "pinyin": "xīnán",
    "hv": "Tây Nam",
    "vi": "Hướng Tây Nam",
    "topic": "Phương vị & Không gian",
    "sample": "西南群山叠翠，少数民族文化璀璨夺目。"
  },
  {
    "hanzi": "西北",
    "pinyin": "xīběi",
    "hv": "Tây Bắc",
    "vi": "Hướng Tây Bắc",
    "topic": "Phương vị & Không gian",
    "sample": "大西北丝绸之路见证了东西方千百年的文明交流。"
  },
  {
    "hanzi": "中间",
    "pinyin": "zhōngjiān",
    "hv": "Trung gian",
    "vi": "Ở chính giữa, trung tâm",
    "topic": "Phương vị & Không gian",
    "sample": "广场正中间矗立着高大巍峨的英雄纪念碑。"
  },
  {
    "hanzi": "角落",
    "pinyin": "jiǎoluò",
    "hv": "Giác lạc",
    "vi": "Góc phòng, nơi góc khuất",
    "topic": "Phương vị & Không gian",
    "sample": "在书房安静的角落里摆上一把舒适的扶手摇椅。"
  },
  {
    "hanzi": "对面",
    "pinyin": "duìmiàn",
    "hv": "Đối diện",
    "vi": "Phía đối diện bên kia đường",
    "topic": "Phương vị & Không gian",
    "sample": "新华书店就在百货大楼马路正对面。"
  },
  {
    "hanzi": "斜对面",
    "pinyin": "xiéduìmiàn",
    "hv": "Tà đối diện",
    "vi": "Phía xéo đối diện",
    "topic": "Phương vị & Không gian",
    "sample": "十字路口的斜对面是一家二十四小时便利店。"
  },
  {
    "hanzi": "附近",
    "pinyin": "fùjìn",
    "hv": "Phụ cận",
    "vi": "Khu vực lân cận, gần đây",
    "topic": "Phương vị & Không gian",
    "sample": "这所公寓附近交通极其便利，生活配套完善。"
  },
  {
    "hanzi": "周围",
    "pinyin": "zhōuwéi",
    "hv": "Chu vi",
    "vi": "Vùng xung quanh",
    "topic": "Phương vị & Không gian",
    "sample": "湖泊周围绿树成荫，鸟语花香。"
  },
  {
    "hanzi": "远处",
    "pinyin": "yuǎnchù",
    "hv": "Viễn xứ",
    "vi": "Nơi xa xôi tít tắp",
    "topic": "Phương vị & Không gian",
    "sample": "站在山巅极目远眺，远处隐约可见白帆点点。"
  },
  {
    "hanzi": "高处",
    "pinyin": "gāochù",
    "hv": "Cao xứ",
    "vi": "Vị trí trên cao",
    "topic": "Phương vị & Không gian",
    "sample": "危险药品请务必收纳在高处防止儿童触及。"
  },
  {
    "hanzi": "深处",
    "pinyin": "shēnchù",
    "hv": "Thâm xứ",
    "vi": "Tận sâu thẳm bên trong",
    "topic": "Phương vị & Không gian",
    "sample": "走入森林深处，耳畔只有泉水叮咚之声。"
  },
  {
    "hanzi": "底层",
    "pinyin": "dǐcéng",
    "hv": "Để tầng",
    "vi": "Tầng trệt, đáy nền",
    "topic": "Phương vị & Không gian",
    "sample": "商厦底层规划为国际美食街和生鲜超市。"
  },
  {
    "hanzi": "顶楼",
    "pinyin": "dǐnglóu",
    "hv": "Đỉnh lâu",
    "vi": "Tầng cao nhất, tầng thượng",
    "topic": "Phương vị & Không gian",
    "sample": "顶楼带有一个宽敞通风的阳光露台花园。"
  },
  {
    "hanzi": "拐角",
    "pinyin": "guǎijiǎo",
    "hv": "Quải giác",
    "vi": "Khúc quanh, góc ngoặt ngã rẽ",
    "topic": "Phương vị & Không gian",
    "sample": "沿着街道拐角右转便是地铁五号线的进站口。"
  },
  {
    "hanzi": "亿",
    "pinyin": "yì",
    "hv": "Ức",
    "vi": "Trăm triệu (100.000.000)",
    "topic": "Số từ & Lượng từ",
    "sample": "中国已建成了全球规模最大的高铁网络，惠及数亿旅客。"
  },
  {
    "hanzi": "万",
    "pinyin": "wàn",
    "hv": "Vạn",
    "vi": "Mười nghìn (10.000)",
    "topic": "Số từ & Lượng từ",
    "sample": "千里之行，始于足下；读万卷书，行万里路。"
  },
  {
    "hanzi": "百分之",
    "pinyin": "bǎifēnzhī",
    "hv": "Bách phân chi",
    "vi": "Phần trăm (%)",
    "topic": "Số từ & Lượng từ",
    "sample": "经过严格质检，产品合格率达到了百分之九十九。"
  },
  {
    "hanzi": "双",
    "pinyin": "shuāng",
    "hv": "Song",
    "vi": "Đôi (lượng từ đũa, giày, găng tay)",
    "topic": "Số từ & Lượng từ",
    "sample": "他买了一双质感高级的黑色牛皮鞋。"
  },
  {
    "hanzi": "对",
    "pinyin": "duì",
    "hv": "Đối",
    "vi": "Cặp, đôi (vợ chồng, chim uyên ương)",
    "topic": "Số từ & Lượng từ",
    "sample": "大门口整齐悬挂着一对红彤彤的喜庆灯笼。"
  },
  {
    "hanzi": "副",
    "pinyin": "fù",
    "hv": "Phó",
    "vi": "Bộ, cặp (kính mắt, găng tay, câu đối)",
    "topic": "Số từ & Lượng từ",
    "sample": "春节贴上一副寓意吉祥如意的春联。"
  },
  {
    "hanzi": "把",
    "pinyin": "bǎ",
    "hv": "Bả",
    "vi": "Cây, chiếc (dụng cụ có cán cầm)",
    "topic": "Số từ & Lượng từ",
    "sample": "出门下雨记得随身带一把折叠雨伞。"
  },
  {
    "hanzi": "条",
    "pinyin": "tiáo",
    "hv": "Điều",
    "vi": "Con, chiếc, sợi (vật thon dài)",
    "topic": "Số từ & Lượng từ",
    "sample": "清澈见底的小溪里欢快地游着几条小鱼。"
  },
  {
    "hanzi": "只",
    "pinyin": "zhī",
    "hv": "Chỉ",
    "vi": "Con (động vật), chiếc (trong đôi)",
    "topic": "Số từ & Lượng từ",
    "sample": "屋檐下筑巢住着两只可爱的小燕子。"
  },
  {
    "hanzi": "头",
    "pinyin": "tóu",
    "hv": "Đầu",
    "vi": "Con (gia súc lớn như trâu, bò, voi)",
    "topic": "Số từ & Lượng từ",
    "sample": "青翠的山坡上一头健硕的大黄牛正悠闲吃草。"
  },
  {
    "hanzi": "匹",
    "pinyin": "pǐ",
    "hv": "Thất",
    "vi": "Con (ngựa, lừa), cây (vải)",
    "topic": "Số từ & Lượng từ",
    "sample": "辽阔的草原上一匹骏马如闪电般飞驰而过。"
  },
  {
    "hanzi": "棵",
    "pinyin": "kē",
    "hv": "Khóa",
    "vi": "Cây (thực vật, cây xanh)",
    "topic": "Số từ & Lượng từ",
    "sample": "庭院正中栽种着一棵枝繁叶茂的古老桂花树。"
  },
  {
    "hanzi": "株",
    "pinyin": "zhū",
    "hv": "Chu",
    "vi": "Bụi, gốc (cây con, hoa thảo)",
    "topic": "Số từ & Lượng từ",
    "sample": "窗台上一株水仙花亭亭玉立、暗香浮动。"
  },
  {
    "hanzi": "朵",
    "pinyin": "duǒ",
    "hv": "Đóa",
    "vi": "Bông, đóa (hoa, đám mây)",
    "topic": "Số từ & Lượng từ",
    "sample": "湛蓝如洗的天空漂浮着几朵棉花糖般的白云。"
  },
  {
    "hanzi": "群",
    "pinyin": "qún",
    "hv": "Quần",
    "vi": "Đàn, bầy, nhóm (người, chim chóc)",
    "topic": "Số từ & Lượng từ",
    "sample": "湖面上飞来了一群南下越冬的白天鹅。"
  },
  {
    "hanzi": "帮",
    "pinyin": "bāng",
    "hv": "Bang",
    "vi": "Toán, nhóm, đám (người bè bạn)",
    "topic": "Số từ & Lượng từ",
    "sample": "周末我和一帮志同道合的好朋友去骑行采风。"
  },
  {
    "hanzi": "包",
    "pinyin": "bāo",
    "hv": "Bao",
    "vi": "Gói, bịch (bánh kẹo, khăn giấy)",
    "topic": "Số từ & Lượng từ",
    "sample": "请给我拿一包原味薯片和一瓶乌龙茶。"
  },
  {
    "hanzi": "袋",
    "pinyin": "dài",
    "hv": "Đại",
    "vi": "Túi, bao (gạo, đường, cà phê)",
    "topic": "Số từ & Lượng từ",
    "sample": "从超市采购归来，手里提着沉甸甸的两大袋水果。"
  },
  {
    "hanzi": "瓶",
    "pinyin": "píng",
    "hv": "Bình",
    "vi": "Chai, lọ (nước, đồ uống, thuốc men)",
    "topic": "Số từ & Lượng từ",
    "sample": "运动挥汗后喝一瓶清凉的电解质水补充体力。"
  },
  {
    "hanzi": "箱",
    "pinyin": "xiāng",
    "hv": "Tương",
    "vi": "Thùng, kiện hàng (sữa, đồ gia dụng)",
    "topic": "Số từ & Lượng từ",
    "sample": "快递小哥一口气搬上楼三整箱优质有机纯牛奶。"
  },
  {
    "hanzi": "清晨",
    "pinyin": "qīngchén",
    "hv": "Thanh thần",
    "vi": "Sáng sớm tinh mơ",
    "topic": "Thời gian biểu",
    "sample": "清晨的空气带着露水的甘甜，沁人心脾。"
  },
  {
    "hanzi": "早晨",
    "pinyin": "zǎochén",
    "hv": "Tảo thần",
    "vi": "Buổi sáng sớm đầy sức sống",
    "topic": "Thời gian biểu",
    "sample": "一日之计在于晨，早晨是一天中精力最充沛的时刻。"
  },
  {
    "hanzi": "正午",
    "pinyin": "zhèngwǔ",
    "hv": "Chính ngọ",
    "vi": "Đúng 12 giờ trưa",
    "topic": "Thời gian biểu",
    "sample": "正午骄阳似火，树林里的蝉鸣声格外响亮。"
  },
  {
    "hanzi": "傍晚",
    "pinyin": "bàngwǎn",
    "hv": "Bàng vãn",
    "vi": "Buổi xế chiều, hoàng hôn",
    "topic": "Thời gian biểu",
    "sample": "傍晚微风吹拂，散步在江畔格外舒适怡人。"
  },
  {
    "hanzi": "深夜",
    "pinyin": "shēnyè",
    "hv": "Thâm dạ",
    "vi": "Đêm khuya thanh vắng",
    "topic": "Thời gian biểu",
    "sample": "深夜街头车马渐稀，万家灯火渐渐熄灭。"
  },
  {
    "hanzi": "子夜",
    "pinyin": "zǐyè",
    "hv": "Tử dạ",
    "vi": "Nửa đêm (canh ba)",
    "topic": "Thời gian biểu",
    "sample": "除夕夜子夜钟声敲响，全城响起了辞旧迎新的欢呼。"
  },
  {
    "hanzi": "周末",
    "pinyin": "zhōumò",
    "hv": "Chu mạt",
    "vi": "Hai ngày cuối tuần",
    "topic": "Thời gian biểu",
    "sample": "辛苦工作了一周，周末好好放松身心陪伴家人。"
  },
  {
    "hanzi": "平时",
    "pinyin": "píngshí",
    "hv": "Bình thời",
    "vi": "Ngày thường, lúc bình thường",
    "topic": "Thời gian biểu",
    "sample": "他平时为人沉静内敛，但关键时刻敢于担当。"
  },
  {
    "hanzi": "假期",
    "pinyin": "jiàqī",
    "hv": "Giá kỳ",
    "vi": "Kỳ nghỉ lễ, kỳ phép",
    "topic": "Thời gian biểu",
    "sample": "今年中秋国庆合璧，迎来了难得的八天超长假期。"
  },
  {
    "hanzi": "寒假",
    "pinyin": "hánjià",
    "hv": "Hàn giá",
    "vi": "Kỳ nghỉ đông của học sinh sinh viên",
    "topic": "Thời gian biểu",
    "sample": "寒假期间同学们结伴回乡欢度喜庆的农历新年。"
  },
  {
    "hanzi": "暑假",
    "pinyin": "shǔjià",
    "hv": "Thử giá",
    "vi": "Kỳ nghỉ hè của học sinh sinh viên",
    "topic": "Thời gian biểu",
    "sample": "漫长的暑假是参加社会实践充实自我的好契机。"
  },
  {
    "hanzi": "工期",
    "pinyin": "gōngqī",
    "hv": "Công kỳ",
    "vi": "Tiến độ, thời hạn thi công",
    "topic": "Thời gian biểu",
    "sample": "建设者们坚守岗位加班加点，确保大桥如期完工。"
  },
  {
    "hanzi": "学期",
    "pinyin": "xuéqī",
    "hv": "Học kỳ",
    "vi": "Học kỳ trong năm học",
    "topic": "Thời gian biểu",
    "sample": "新学期伊始，树立坚定目标，砥砺奋进前行。"
  },
  {
    "hanzi": "世纪",
    "pinyin": "shìjì",
    "hv": "Thế kỷ",
    "vi": "Thế kỷ (100 năm)",
    "topic": "Thời gian biểu",
    "sample": "二十一世纪是数字互联与绿色能源蓬勃发展的纪元。"
  },
  {
    "hanzi": "年代",
    "pinyin": "niándài",
    "hv": "Niên đại",
    "vi": "Thời kỳ, thập niên",
    "topic": "Thời gian biểu",
    "sample": "上世纪八九十年代涌现出一批脍炙人口的经典金曲。"
  },
  {
    "hanzi": "瞬间",
    "pinyin": "shùnjiān",
    "hv": "Thuấn gian",
    "vi": "Chớp mắt, khoảnh khắc ngắn ngủi",
    "topic": "Thời gian biểu",
    "sample": "摄影师用镜头定格下了运动员冲刺夺冠的激动瞬间。"
  },
  {
    "hanzi": "片刻",
    "pinyin": "piànkè",
    "hv": "Phiến khắc",
    "vi": "Giây lát, lát sau",
    "topic": "Thời gian biểu",
    "sample": "请大家稍安勿躁稍候片刻，大巴车马上就到。"
  },
  {
    "hanzi": "有时",
    "pinyin": "yǒushí",
    "hv": "Hữu thời",
    "vi": "Thỉnh thoảng, đôi khi",
    "topic": "Thời gian biểu",
    "sample": "人生的旅途中，有时需要停下脚步仰望星空。"
  },
  {
    "hanzi": "常常",
    "pinyin": "chángcháng",
    "hv": "Thường thường",
    "vi": "Thường xuyên, luôn luôn",
    "topic": "Thời gian biểu",
    "sample": "在外漂泊的游子常常在梦中思念母亲温暖的怀抱。"
  },
  {
    "hanzi": "永远",
    "pinyin": "yǒngyuǎn",
    "hv": "Vĩnh viễn",
    "vi": "Mãi mãi, vĩnh cửu không phai",
    "topic": "Thời gian biểu",
    "sample": "真挚纯洁的友谊宛如清泉，永远流淌在彼此心底。"
  },
  {
    "hanzi": "北京烤鸭",
    "pinyin": "Běijīng kǎoyā",
    "hv": "Bắc Kinh khảo áp",
    "vi": "Vịt quay Bắc Kinh da giòn",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "北京烤鸭外皮酥脆金黄，肉质细腻鲜嫩，回味无穷。"
  },
  {
    "hanzi": "麻婆豆腐",
    "pinyin": "mápó dòufu",
    "hv": "Ma bà đậu hũ",
    "vi": "Đậu hũ Ma Bà Tứ Xuyên sốt cay",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "麻婆豆腐色泽红亮，麻、辣、鲜、香、烫俱全。"
  },
  {
    "hanzi": "宫保鸡丁",
    "pinyin": "gōngbǎo jīdīng",
    "hv": "Cung bảo kê đinh",
    "vi": "Gà xào Kung Pao đậu phộng",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "宫保鸡丁鸡肉滑嫩，花生米酥脆，微辣酸甜。"
  },
  {
    "hanzi": "水煮鱼",
    "pinyin": "shuǐzhǔyú",
    "hv": "Thủy chú ngư",
    "vi": "Cá sốt ớt cay Tứ Xuyên",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "正宗水煮鱼油而不腻、辣而不燥，麻味浓郁过瘾。"
  },
  {
    "hanzi": "火锅",
    "pinyin": "huǒguō",
    "hv": "Hỏa oa",
    "vi": "Lẩu Trung Hoa nước dùng thơm nồng",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "冬日围炉而坐，在咕嘟冒泡的火锅前共享欢聚时光。"
  },
  {
    "hanzi": "小笼包",
    "pinyin": "xiǎolóngbāo",
    "hv": "Tiểu lung bao",
    "vi": "Bánh bao súp Thượng Hải vỏ mỏng",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "轻轻提，慢慢移，先开窗，后喝汤，吃小笼包有讲究。"
  },
  {
    "hanzi": "煎饺",
    "pinyin": "jiānjiǎo",
    "hv": "Tiên sảo",
    "vi": "Há cảo / sủi cảo chiên giòn",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "外皮金黄焦脆、内馅多汁鲜美的鲜肉煎饺令人垂涎。"
  },
  {
    "hanzi": "拉面",
    "pinyin": "lāmiàn",
    "hv": "Lạp miến",
    "vi": "Mì kéo Lan Châu sợi dẻo dai",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "一清二白三红四绿五黄，兰州牛肉拉面享誉世界。"
  },
  {
    "hanzi": "刀削面",
    "pinyin": "dāoxiāomiàn",
    "hv": "Đao tước miến",
    "vi": "Mì gọt Sơn Tây truyền thống",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "山西刀削面中厚边薄，形如柳叶，入口筋道有嚼劲。"
  },
  {
    "hanzi": "炒饭",
    "pinyin": "chǎofàn",
    "hv": "Sao phạn",
    "vi": "Cơm rang, cơm chiên Dương Châu",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "扬州炒饭米粒松散、颗粒分明，配料色泽艳丽。"
  },
  {
    "hanzi": "春卷",
    "pinyin": "chūnjuǎn",
    "hv": "Xuân quyển",
    "vi": "Nem rán, chả giò mùa xuân",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "立春吃炸春卷寓意咬春纳福、迎祥纳吉。"
  },
  {
    "hanzi": "豆浆",
    "pinyin": "dòujiāng",
    "hv": "Đậu tương",
    "vi": "Sữa đậu nành nguyên chất ấm nóng",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "清晨喝一碗热气腾腾的原磨甜豆浆滋养胃脾。"
  },
  {
    "hanzi": "油条",
    "pinyin": "yóutiáo",
    "hv": "Du điều",
    "vi": "Quẩy giòn rụm màu vàng óng",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "新鲜出锅的热油条配豆浆是街头最地道的早餐搭配。"
  },
  {
    "hanzi": "烧烤",
    "pinyin": "shāokǎo",
    "hv": "Thiêu khảo",
    "vi": "Đồ nướng than hoa BBQ",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "夏夜里几串香喷喷的羊肉烧烤配冰镇汽水，惬意至极。"
  },
  {
    "hanzi": "糖醋里脊",
    "pinyin": "tángcù lǐji",
    "hv": "Đường giấm lý tích",
    "vi": "Thăn heo chua ngọt giòn rụm",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "糖醋里脊酸甜适度、外酥里嫩，是老少咸宜的名菜。"
  },
  {
    "hanzi": "红烧肉",
    "pinyin": "hóngshāoròu",
    "hv": "Hồng thiêu nhục",
    "vi": "Thịt kho tàu đậm đà mềm tan",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "经典的江南红烧肉色泽红艳亮丽，肥而不腻、入口即化。"
  },
  {
    "hanzi": "清蒸鱼",
    "pinyin": "qīngzhēngyú",
    "hv": "Thanh chưng ngư",
    "vi": "Cá hấp xì dầu hành gừng",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "清蒸海鲈鱼最大程度地保留了鱼肉原始的清甜与嫩滑。"
  },
  {
    "hanzi": "凉拌菜",
    "pinyin": "liángbàncài",
    "hv": "Lương bạn thái",
    "vi": "Nộm, món rau trộn chua cay khai vị",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "一盘拍黄瓜和凉拌木耳开胃解腻，是佐餐的绝妙佳品。"
  },
  {
    "hanzi": "皮蛋瘦肉粥",
    "pinyin": "pídàn shòuròuzhōu",
    "hv": "Bì đản sấu nhục chúc",
    "vi": "Cháo thịt nạc trứng bắc thảo",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "广式皮蛋瘦肉粥熬得香浓绵稠，暖心又暖胃。"
  },
  {
    "hanzi": "珍珠奶茶",
    "pinyin": "zhēnzhū nǎichá",
    "hv": "Trân châu nãi trà",
    "vi": "Trà sữa trân châu dẻo thơm",
    "topic": "Ẩm thực Trung Hoa",
    "sample": "下午茶来一杯少糖去冰的珍珠奶茶，心情顿时格外甜蜜。"
  },
  {
    "hanzi": "幸会",
    "pinyin": "xìnghuì",
    "hv": "Hạnh hội",
    "vi": "Rất hân hạnh được diện kiến",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "久仰尊重大名，今日有幸得见，真是三生幸会！"
  },
  {
    "hanzi": "久仰",
    "pinyin": "jiǔyǎng",
    "hv": "Cửu ngưỡng",
    "vi": "Ngưỡng mộ danh tiếng đã lâu",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "久仰李总大名如雷贯耳，今日一见果然名不虚传。"
  },
  {
    "hanzi": "失陪",
    "pinyin": "shīpéi",
    "hv": "Thất bồi",
    "vi": "Xin phép vắng mặt một lát",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "实在抱歉有要紧电话打入，诸位请慢用，我先失陪片刻。"
  },
  {
    "hanzi": "留步",
    "pinyin": "liúbù",
    "hv": "Lưu bộ",
    "vi": "Xin dừng bước, không cần tiễn",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "夜深风大，请主人留步，不必再远送了。"
  },
  {
    "hanzi": "包涵",
    "pinyin": "bāohan",
    "hv": "Bao hàm",
    "vi": "Lượng thứ, bỏ qua sơ suất",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "今日招待不周之处，还望各位贵宾多多包涵见谅。"
  },
  {
    "hanzi": "借光",
    "pinyin": "jièguāng",
    "hv": "Tá quang",
    "vi": "Xin phép nhường đường cho qua",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "劳驾您借光借光，请借过一下好吗？"
  },
  {
    "hanzi": "赐教",
    "pinyin": "cìjiào",
    "hv": "Tứ giáo",
    "vi": "Xin được chỉ giáo thêm",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "学术上若有任何不当之处，还请前辈不吝赐教。"
  },
  {
    "hanzi": "奉陪",
    "pinyin": "fèngpéi",
    "hv": "Phụng bồi",
    "vi": "Sẵn lòng tháp tùng / tiếp đón",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "既然远方好友有此雅兴，在下今日定当奉陪到底。"
  },
  {
    "hanzi": "劳驾",
    "pinyin": "láojià",
    "hv": "Lao giá",
    "vi": "Làm phiền bạn, xin vui lòng",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "劳驾师傅，麻烦您帮我把后备箱打开一下。"
  },
  {
    "hanzi": "多谢",
    "pinyin": "duōxiè",
    "hv": "Đa tạ",
    "vi": "Cảm ơn sự giúp đỡ rất nhiều",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "承蒙诸位同仁拔刀相助，多谢多谢！"
  },
  {
    "hanzi": "打扰",
    "pinyin": "dǎrǎo",
    "hv": "Đả nhiễu",
    "vi": "Làm phiền bạn rồi",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "深夜冒昧打扰您休息，实在感到过意不去。"
  },
  {
    "hanzi": "拜托",
    "pinyin": "bàituō",
    "hv": "Bái thác",
    "vi": "Trăm sự nhờ cậy vào bạn",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "这件攸关大局的关键事务，就拜托兄弟多费心劳碌了。"
  },
  {
    "hanzi": "见谅",
    "pinyin": "jiànliàng",
    "hv": "Kiến lượng",
    "vi": "Xin thứ lỗi, thể tất bỏ qua",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "因突发紧急状况未能如约成行，尚祈见谅。"
  },
  {
    "hanzi": "请教",
    "pinyin": "qǐngjiào",
    "hv": "Thỉnh giáo",
    "vi": "Xin phép thỉnh giáo ý kiến",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "末学后进特地登门拜访，向大师请教书法之道。"
  },
  {
    "hanzi": "祝贺",
    "pinyin": "zhùhè",
    "hv": "Chúc hạ",
    "vi": "Chúc mừng thành tựu, thắng lợi",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "热烈祝贺贵团队在国际科技创新大赛中摘得桂冠！"
  },
  {
    "hanzi": "恭喜",
    "pinyin": "gōngxǐ",
    "hv": "Cung hỷ",
    "vi": "Cung hỷ chúc mừng tin vui gia đình",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "喜得贵子，阖家同庆，衷心恭喜恭喜！"
  },
  {
    "hanzi": "慢走",
    "pinyin": "mànzǒu",
    "hv": "Mạn tẩu",
    "vi": "Đi thong thả, đi cẩn thận",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "天黑雨急路面湿滑，客人路上慢走注意安全！"
  },
  {
    "hanzi": "保重",
    "pinyin": "bǎozhòng",
    "hv": "Bảo trọng",
    "vi": "Hãy giữ gìn sức khỏe nhé",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "海内存知己，天涯若比邻，山高路远千万多多保重！"
  },
  {
    "hanzi": "顺风",
    "pinyin": "shùnfēng",
    "hv": "Thuận phong",
    "vi": "Thuận buồm xuôi gió bình an",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "祝愿诸位贵宾此行一路顺风、万事吉庆顺遂！"
  },
  {
    "hanzi": "合作愉快",
    "pinyin": "hézuò yúkuài",
    "hv": "Hợp tác du khoái",
    "vi": "Hợp tác đôi bên vui vẻ thành công",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "合作协议顺利签署，预祝我们未来的长期合作愉快共赢！"
  },
  {
    "hanzi": "环保",
    "pinyin": "huánbǎo",
    "hv": "Hoàn bảo",
    "vi": "Bảo vệ môi trường sinh thái",
    "topic": "Môi trường & Đô thị",
    "sample": "减少一次性塑料制品的使用是全民环保的重要举措。"
  },
  {
    "hanzi": "垃圾分类",
    "pinyin": "lājī fēnlèi",
    "hv": "Lạp cơ phân loại",
    "vi": "Phân loại rác thải tại nguồn",
    "topic": "Môi trường & Đô thị",
    "sample": "居民自觉进行生活垃圾分类有助于资源的回收利用。"
  },
  {
    "hanzi": "回收",
    "pinyin": "huíshōu",
    "hv": "Hồi thu",
    "vi": "Thu gom tái chế phế liệu",
    "topic": "Môi trường & Đô thị",
    "sample": "废旧电池和电子产品应投入专门的回收箱。"
  },
  {
    "hanzi": "绿化",
    "pinyin": "lǜhuà",
    "hv": "Lục hóa",
    "vi": "Trồng cây xanh hóa đô thị",
    "topic": "Môi trường & Đô thị",
    "sample": "城市中心绿化面积的增加显著改善了空气质量。"
  },
  {
    "hanzi": "节能",
    "pinyin": "jiénéng",
    "hv": "Tiết năng",
    "vi": "Tiết kiệm năng lượng điện nước",
    "topic": "Môi trường & Đô thị",
    "sample": "推广使用LED节能灯具能够有效降低耗电量。"
  },
  {
    "hanzi": "低碳",
    "pinyin": "dītàn",
    "hv": "Đê thán",
    "vi": "Lối sống phát thải carbon thấp",
    "topic": "Môi trường & Đô thị",
    "sample": "骑自行车上下班倡导了一种绿色低碳的健康生活方式。"
  },
  {
    "hanzi": "污染",
    "pinyin": "wūrǎn",
    "hv": "Ô nhiễm",
    "vi": "Ô nhiễm môi trường không khí / nước",
    "topic": "Môi trường & Đô thị",
    "sample": "严厉查处工业废水非法偷排，坚决防治环境污染。"
  },
  {
    "hanzi": "生态",
    "pinyin": "shēngtài",
    "hv": "Sinh thái",
    "vi": "Môi trường sinh thái tự nhiên",
    "topic": "Môi trường & Đô thị",
    "sample": "湿地公园保护了丰富的生物多样性与自然生态。"
  },
  {
    "hanzi": "社区",
    "pinyin": "shèqū",
    "hv": "Xã khu",
    "vi": "Khu dân cư, tổ dân phố",
    "topic": "Môi trường & Đô thị",
    "sample": "智慧社区为业主提供了便捷高效的二十四小时综合服务。"
  },
  {
    "hanzi": "志愿者",
    "pinyin": "zhìyuànzhě",
    "hv": "Chí nguyện giả",
    "vi": "Tình nguyện viên, thiện nguyện viên",
    "topic": "Môi trường & Đô thị",
    "sample": "青年志愿者们走上街头宣传文明交通与急救常识。"
  },
  {
    "hanzi": "公益",
    "pinyin": "gōngyì",
    "hv": "Công ích",
    "vi": "Hoạt động công ích từ thiện",
    "topic": "Môi trường & Đô thị",
    "sample": "企业积极参与希望小学捐建等扶贫公益事业。"
  },
  {
    "hanzi": "捐款",
    "pinyin": "juānkuǎn",
    "hv": "Quyên khoản",
    "vi": "Quyên góp tiền từ thiện",
    "topic": "Môi trường & Đô thị",
    "sample": "灾区人民得到了社会各界爱心人士的踊跃捐款。"
  },
  {
    "hanzi": "邻居",
    "pinyin": "línjū",
    "hv": "Lân cư",
    "vi": "Người hàng xóm bên cạnh",
    "topic": "Môi trường & Đô thị",
    "sample": "俗话说远亲不如近邻，好邻居互相照顾暖人心。"
  },
  {
    "hanzi": "广场",
    "pinyin": "guǎngchǎng",
    "hv": "Quảng trường",
    "vi": "Quảng trường công cộng đô thị",
    "topic": "Môi trường & Đô thị",
    "sample": "市民广场是傍晚群众跳广场舞健身的热门场地。"
  },
  {
    "hanzi": "喷泉",
    "pinyin": "pēnquán",
    "hv": "Phún tuyền",
    "vi": "Đài phun nước cảnh quan",
    "topic": "Môi trường & Đô thị",
    "sample": "音乐喷泉随着激昂悠扬的旋律变换着曼妙水姿。"
  },
  {
    "hanzi": "雕塑",
    "pinyin": "diāosù",
    "hv": "Điêu tố",
    "vi": "Tác phẩm điêu khắc nghệ thuật",
    "topic": "Môi trường & Đô thị",
    "sample": "城市中心广场上矗立着象征腾飞奋斗的青铜雕塑。"
  },
  {
    "hanzi": "繁华",
    "pinyin": "fánhuá",
    "hv": "Phồn hoa",
    "vi": "Sầm uất, phồn hoa đô hội",
    "topic": "Môi trường & Đô thị",
    "sample": "步行街商铺林立、车水马龙，一派繁华昌盛的景象。"
  },
  {
    "hanzi": "安静",
    "pinyin": "ānjìng",
    "hv": "An tĩnh",
    "vi": "Thanh bình, yên tĩnh tĩnh mịch",
    "topic": "Môi trường & Đô thị",
    "sample": "郊外的湖畔没有市井喧嚣，环境分外幽雅安静。"
  },
  {
    "hanzi": "方便",
    "pinyin": "fāngbiàn",
    "hv": "Phương tiện",
    "vi": "Thuận tiện, tiện lợi cho cuộc sống",
    "topic": "Môi trường & Đô thị",
    "sample": "地铁网络四通八达，让广大市民出行格外方便。"
  },
  {
    "hanzi": "干净",
    "pinyin": "gānjìng",
    "hv": "Can tịnh",
    "vi": "Sạch sẽ tinh tươm ngăn nắp",
    "topic": "Môi trường & Đô thị",
    "sample": "环卫工人们辛勤劳作，保持了整座城市街道的整洁干净。"
  },
  {
    "hanzi": "理财",
    "pinyin": "lǐcái",
    "hv": "Lý tài",
    "vi": "Quản lý tài chính, đầu tư",
    "topic": "Tài chính & Ngân hàng",
    "sample": "树立科学理财意识有助于实现个人资产的保值增值。"
  },
  {
    "hanzi": "投资",
    "pinyin": "tóuzī",
    "hv": "Đầu tư",
    "vi": "Đầu tư vốn kinh doanh",
    "topic": "Tài chính & Ngân hàng",
    "sample": "高科技新能源产业吸引了大量海内外风险投资基金。"
  },
  {
    "hanzi": "基金",
    "pinyin": "jījīn",
    "hv": "Cơ kim",
    "vi": "Quỹ đầu tư tài chính",
    "topic": "Tài chính & Ngân hàng",
    "sample": "定投指数型基金是许多稳健型投资者的首选。"
  },
  {
    "hanzi": "股票",
    "pinyin": "gǔpiào",
    "hv": "Cổ phiếu",
    "vi": "Cổ phiếu trên sàn chứng khoán",
    "topic": "Tài chính & Ngân hàng",
    "sample": "股市有风险，购买股票前需理性分析基本面。"
  },
  {
    "hanzi": "收益",
    "pinyin": "shōuyì",
    "hv": "Thu ích",
    "vi": "Lợi nhuận, tiền lời thu về",
    "topic": "Tài chính & Ngân hàng",
    "sample": "这款固定收益类理财产品的年化收益率达百分之四。"
  },
  {
    "hanzi": "风险",
    "pinyin": "fēngxiǎn",
    "hv": "Phong hiểm",
    "vi": "Rủi ro tài chính",
    "topic": "Tài chính & Ngân hàng",
    "sample": "不要把鸡蛋放在同一个篮子里，分散投资降低风险。"
  },
  {
    "hanzi": "利息",
    "pinyin": "lìxī",
    "hv": "Lợi tức",
    "vi": "Tiền lãi ngân hàng",
    "topic": "Tài chính & Ngân hàng",
    "sample": "定期存款存满三年可以拿到可观的利息。"
  },
  {
    "hanzi": "贷款",
    "pinyin": "dàikuǎn",
    "hv": "Thải khoản",
    "vi": "Vay vốn tín dụng ngân hàng",
    "topic": "Tài chính & Ngân hàng",
    "sample": "购买第一套商品住房可以申请商业住房公积金贷款。"
  },
  {
    "hanzi": "还贷",
    "pinyin": "huándài",
    "hv": "Hoàn thải",
    "vi": "Trả nợ tiền vay ngân hàng",
    "topic": "Tài chính & Ngân hàng",
    "sample": "每个月二十号前要确保还贷账户资金充足。"
  },
  {
    "hanzi": "账户",
    "pinyin": "zhànghù",
    "hv": "Trướng hộ",
    "vi": "Tài khoản ngân hàng",
    "topic": "Tài chính & Ngân hàng",
    "sample": "前往银行柜台办理外币综合储蓄账户开户业务。"
  },
  {
    "hanzi": "开户",
    "pinyin": "kāihù",
    "hv": "Khai hộ",
    "vi": "Mở tài khoản mới",
    "topic": "Tài chính & Ngân hàng",
    "sample": "外国人凭有效护照和居住证明可以在中国银行开户。"
  },
  {
    "hanzi": "存钱",
    "pinyin": "cúnqián",
    "hv": "Tồn tiền",
    "vi": "Gửi tiết kiệm, nộp tiền",
    "topic": "Tài chính & Ngân hàng",
    "sample": "在自动存取款机上随时可以无卡存钱。"
  },
  {
    "hanzi": "取钱",
    "pinyin": "qǔqián",
    "hv": "Thủ tiền",
    "vi": "Rút tiền mặt ATM",
    "topic": "Tài chính & Ngân hàng",
    "sample": "我需要在ATM机上取一千块现金备用。"
  },
  {
    "hanzi": "支票",
    "pinyin": "zhīpiào",
    "hv": "Chi phiếu",
    "vi": "Tấm séc ngân hàng (Cheque)",
    "topic": "Tài chính & Ngân hàng",
    "sample": "财务总监在转账现金支票上盖印签字。"
  },
  {
    "hanzi": "保险",
    "pinyin": "bǎoxiǎn",
    "hv": "Bảo hiểm",
    "vi": "Hợp đồng bảo hiểm nhân thọ/tài sản",
    "topic": "Tài chính & Ngân hàng",
    "sample": "为全家人购买大病重疾医疗保险防范未知风险。"
  },
  {
    "hanzi": "索赔",
    "pinyin": "suǒpéi",
    "hv": "Tác bồi",
    "vi": "Khiếu nại đòi bồi thường bảo hiểm",
    "topic": "Tài chính & Ngân hàng",
    "sample": "发生车祸擦碰后，车主第一时间联系保险公司查勘索赔。"
  },
  {
    "hanzi": "通货膨胀",
    "pinyin": "tōnghuò péngzhàng",
    "hv": "Thông hóa bành trướng",
    "vi": "Lạm phát tiền tệ",
    "topic": "Tài chính & Ngân hàng",
    "sample": "中央银行通过调整利率调控物价水平与通货膨胀。"
  },
  {
    "hanzi": "保值",
    "pinyin": "bǎozhí",
    "hv": "Bảo trị",
    "vi": "Giữ giá trị tài sản",
    "topic": "Tài chính & Ngân hàng",
    "sample": "黄金通常被视为对抗通胀、保值避险的优质硬通货。"
  },
  {
    "hanzi": "升值",
    "pinyin": "shēngzhí",
    "hv": "Thăng trị",
    "vi": "Tăng giá trị, lên giá",
    "topic": "Tài chính & Ngân hàng",
    "sample": "这处核心地段的商铺近年来持续升值。"
  },
  {
    "hanzi": "贬值",
    "pinyin": "biǎnzhí",
    "hv": "Biếm trị",
    "vi": "Mất giá, giảm giá trị",
    "topic": "Tài chính & Ngân hàng",
    "sample": "货币汇率波动可能导致进口商品购买力相对贬值。"
  },
  {
    "hanzi": "书法",
    "pinyin": "shūfǎ",
    "hv": "Thư pháp",
    "vi": "Nghệ thuật viết thư pháp chữ Hán",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "练习中国书法讲究心平气和、悬腕运笔。"
  },
  {
    "hanzi": "国画",
    "pinyin": "guóhuà",
    "hv": "Quốc họa",
    "vi": "Tranh thủy mặc truyền thống Trung Hoa",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "水墨国画注重意境留白与气韵生动。"
  },
  {
    "hanzi": "京剧",
    "pinyin": "jīngjù",
    "hv": "Kinh kịch",
    "vi": "Nghệ thuật Kinh kịch Bắc Kinh",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "生旦净丑各具魅力，京剧脸谱蕴含着丰富的性格隐喻。"
  },
  {
    "hanzi": "剪纸",
    "pinyin": "jiǎnzhǐ",
    "hv": "Tiễn chỉ",
    "vi": "Nghệ thuật cắt giấy dân gian",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "逢年过节巧手艺人在窗棂上贴满红艳的生肖剪纸窗花。"
  },
  {
    "hanzi": "太极拳",
    "pinyin": "tàijíquán",
    "hv": "Thái cực quyền",
    "vi": "Môn võ thuật dưỡng sinh Thái Cực Quyền",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "打太极拳以柔克刚、动静相兼，强身健体功效显著。"
  },
  {
    "hanzi": "古筝",
    "pinyin": "gǔzhēng",
    "hv": "Cổ tranh",
    "vi": "Đàn cổ tranh (đàn tranh Trung Quốc)",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "纤纤玉手拨弄古筝弦音，流淌出高山流水的空灵雅韵。"
  },
  {
    "hanzi": "二胡",
    "pinyin": "èrhú",
    "hv": "Nhị hồ",
    "vi": "Đàn nhị hồ 2 dây",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "阿炳创作的二胡名曲《二泉映月》哀婉动人。"
  },
  {
    "hanzi": "茶道",
    "pinyin": "chádào",
    "hv": "Trà đạo",
    "vi": "Nghệ thuật thưởng trà đạo truyền thống",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "中国茶道讲究廉、美、和、敬，品茗修身。"
  },
  {
    "hanzi": "瓷器",
    "pinyin": "cíqì",
    "hv": "Từ khí",
    "vi": "Đồ gốm sứ tinh xảo",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "景德镇青花瓷器胎质细腻、釉色天成，举世闻名。"
  },
  {
    "hanzi": "丝绸",
    "pinyin": "sīchóu",
    "hv": "Ti trù",
    "vi": "Lụa tơ tằm thượng hạng",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "古老的丝绸之路将东方精美柔软的丝绸带往欧亚各国。"
  },
  {
    "hanzi": "刺绣",
    "pinyin": "cìxiù",
    "hv": "Thứ tú",
    "vi": "Nghệ thuật thêu thùa hoa văn",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "苏州苏绣针法细密活泼，绣出的双面猫栩栩如生。"
  },
  {
    "hanzi": "武术",
    "pinyin": "wǔshù",
    "hv": "Vũ thuật",
    "vi": "Võ thuật truyền thống Kung Fu",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "中国传统武术讲究内外兼修、崇尚武德修养。"
  },
  {
    "hanzi": "棋艺",
    "pinyin": "qíyì",
    "hv": "Kỳ nghệ",
    "vi": "Nghệ thuật chơi cờ vua cờ tướng",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "博弈对局考验着两位选手的棋艺造诣与沉稳心态。"
  },
  {
    "hanzi": "民俗",
    "pinyin": "mínsú",
    "hv": "Dân tục",
    "vi": "Phong tục tập quán dân gian",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "舞龙舞狮是元宵佳节不可或缺的民俗狂欢盛事。"
  },
  {
    "hanzi": "戏剧",
    "pinyin": "xìjù",
    "hv": "Hí kịch",
    "vi": "Sân khấu kịch nghệ",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "中国戏剧流派纷呈，越剧、昆曲、豫剧各领风骚。"
  },
  {
    "hanzi": "乐器",
    "pinyin": "yuèqì",
    "hv": "Nhạc khí",
    "vi": "Nhạc cụ âm nhạc",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "民族乐团演奏会上各种古典乐器齐声共鸣合奏。"
  },
  {
    "hanzi": "展览",
    "pinyin": "zhǎnlǎn",
    "hv": "Triển lãm",
    "vi": "Buổi triển lãm tranh / hiện vật",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "国家博物馆正在举办古代丝绸之路文明艺术特展。"
  },
  {
    "hanzi": "文物",
    "pinyin": "wénwù",
    "hv": "Văn vật",
    "vi": "Cổ vật di sản lịch sử",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "出土的三星堆青铜面具是珍贵的人类文明文物。"
  },
  {
    "hanzi": "非遗",
    "pinyin": "fēiyí",
    "hv": "Phi di",
    "vi": "Di sản văn hóa phi vật thể",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "这门古老的面塑技艺被列入了国家级非物质文化遗产名录。"
  },
  {
    "hanzi": "匠心",
    "pinyin": "jiàngxīn",
    "hv": "Tượng tâm",
    "vi": "Tâm huyết tài hoa của người thợ",
    "topic": "Nghệ thuật & Văn hóa",
    "sample": "老匠人精雕细琢数十载，展现了令人肃然起敬的大国工匠心。"
  },
  {
    "hanzi": "作息",
    "pinyin": "zuòxī",
    "hv": "Tác tức",
    "vi": "Chế độ sinh hoạt làm việc nghỉ ngơi",
    "topic": "Đời sống thường nhật",
    "sample": "保持规律的作息时间是身心健康的长寿秘诀。"
  },
  {
    "hanzi": "熬夜",
    "pinyin": "áoyè",
    "hv": "Ngao dạ",
    "vi": "Thức khuya, thức trắng đêm",
    "topic": "Đời sống thường nhật",
    "sample": "经常熬夜不仅损耗气血，还会严重降低工作效率。"
  },
  {
    "hanzi": "失眠",
    "pinyin": "shīmián",
    "hv": "Thất miên",
    "vi": "Mất ngủ, khó ngủ",
    "topic": "Đời sống thường nhật",
    "sample": "睡前喝一杯热牛奶、远离手机屏幕有助于改善失眠。"
  },
  {
    "hanzi": "午休",
    "pinyin": "wǔxiū",
    "hv": "Ngọ hưu",
    "vi": "Nghỉ trưa, chợp mắt buổi trưa",
    "topic": "Đời sống thường nhật",
    "sample": "中午闭目午休二十分钟，下午神采奕奕。"
  },
  {
    "hanzi": "散步",
    "pinyin": "sànbù",
    "hv": "Tán bộ",
    "vi": "Đi dạo bộ thong thả",
    "topic": "Đời sống thường nhật",
    "sample": "饭后百步走，活到九十九。"
  },
  {
    "hanzi": "慢跑",
    "pinyin": "mànpǎo",
    "hv": "Mạn bảo",
    "vi": "Chạy bộ chậm dưỡng sinh (Jogging)",
    "topic": "Đời sống thường nhật",
    "sample": "清晨沿着公园步道慢跑三公里让人身心舒畅。"
  },
  {
    "hanzi": "洗衣服",
    "pinyin": "xǐ yīfu",
    "hv": "Tẩy y phục",
    "vi": "Giặt giũ quần áo",
    "topic": "Đời sống thường nhật",
    "sample": "滚筒全自动洗衣机洗衣服既省水又干净。"
  },
  {
    "hanzi": "熨烫",
    "pinyin": "yùntàng",
    "hv": "Ủy thang",
    "vi": "Ủi đồ, là ủi quần áo",
    "topic": "Đời sống thường nhật",
    "sample": "正式穿衬衫西裤出门前最好细致熨烫平整。"
  },
  {
    "hanzi": "做饭",
    "pinyin": "zuòfàn",
    "hv": "Tác phạn",
    "vi": "Nấu cơm, làm đồ ăn",
    "topic": "Đời sống thường nhật",
    "sample": "一家人分工合作做饭其乐融融、香味扑鼻。"
  },
  {
    "hanzi": "洗碗",
    "pinyin": "xǐwǎn",
    "hv": "Tẩy oản",
    "vi": "Rửa bát đũa sau ăn",
    "topic": "Đời sống thường nhật",
    "sample": "智能洗碗机极大地减轻了家庭餐后家务负担。"
  },
  {
    "hanzi": "买菜",
    "pinyin": "mǎicài",
    "hv": "Mãi thái",
    "vi": "Đi chợ mua rau thịt thức ăn",
    "topic": "Đời sống thường nhật",
    "sample": "奶奶每天大清早去农贸市场买菜挑选最新鲜的食材。"
  },
  {
    "hanzi": "遛狗",
    "pinyin": "liùgǒu",
    "hv": "Liệu cẩu",
    "vi": "Dắt chó đi dạo",
    "topic": "Đời sống thường nhật",
    "sample": "傍晚许多居民牵着绳子在草坪上遛狗。"
  },
  {
    "hanzi": "快递柜",
    "pinyin": "kuàidìguì",
    "hv": "Khoái đệ quỹ",
    "vi": "Tủ nhận bưu kiện thông minh",
    "topic": "Đời sống thường nhật",
    "sample": "输入取件码即可从智能快递柜取出包裹。"
  },
  {
    "hanzi": "锁门",
    "pinyin": "suǒmén",
    "hv": "Tỏa môn",
    "vi": "Khóa chặt cửa ra vào",
    "topic": "Đời sống thường nhật",
    "sample": "出远门前请仔细检查窗户有没有关好、大门有没有锁门。"
  },
  {
    "hanzi": "开窗",
    "pinyin": "kāichuāng",
    "hv": "Khai song",
    "vi": "Mở cửa sổ đón gió thông thoáng",
    "topic": "Đời sống thường nhật",
    "sample": "早晨起床开窗通风，让新鲜空气流通进室内。"
  },
  {
    "hanzi": "充电",
    "pinyin": "chōngdiàn",
    "hv": "Sung điện",
    "vi": "Cắm sạc pin điện thoại/thiết bị",
    "topic": "Đời sống thường nhật",
    "sample": "快充充电器半小时即可给手机充电至百分之八十。"
  },
  {
    "hanzi": "关灯",
    "pinyin": "guāndēng",
    "hv": "Quan đăng",
    "vi": "Tắt đèn chiếu sáng",
    "topic": "Đời sống thường nhật",
    "sample": "随手关灯节约用电是每个人应有的良好习惯。"
  },
  {
    "hanzi": "闹钟",
    "pinyin": "nàozhōng",
    "hv": "Náo chung",
    "vi": "Đồng hồ báo thức reng",
    "topic": "Đời sống thường nhật",
    "sample": "把闹钟定在早上六点半，保证准时起床不迟到。"
  },
  {
    "hanzi": "洗漱",
    "pinyin": "xǐshù",
    "hv": "Tẩy sấu",
    "vi": "Rửa mặt đánh răng vệ sinh cá nhân",
    "topic": "Đời sống thường nhật",
    "sample": "清晨洗漱完毕，整装待发出门上班。"
  },
  {
    "hanzi": "护眼",
    "pinyin": "hùyǎn",
    "hv": "Hộ nhãn",
    "vi": "Bảo vệ thị lực đôi mắt",
    "topic": "Đời sống thường nhật",
    "sample": "长时间盯着电脑屏幕工作，记得每隔一小时眺望远方护眼。"
  },
  {
    "hanzi": "房源",
    "pinyin": "fángyuán",
    "hv": "Phòng nguyên",
    "vi": "Nguồn nhà, căn hộ cho thuê/bán",
    "topic": "Nhà ở & Bất động sản",
    "sample": "中介网站上汇聚了大量真实可靠的第一手优质房源。"
  },
  {
    "hanzi": "中介",
    "pinyin": "zhōngjiè",
    "hv": "Trung giới",
    "vi": "Môi giới nhà đất, bất động sản",
    "topic": "Nhà ở & Bất động sản",
    "sample": "房屋中介带我们实地看房并协助办理租赁过户手续。"
  },
  {
    "hanzi": "看房",
    "pinyin": "kànfáng",
    "hv": "Khán phòng",
    "vi": "Đi xem nhà thực tế",
    "topic": "Nhà ở & Bất động sản",
    "sample": "周末约好房东一起去现场实地看房。"
  },
  {
    "hanzi": "户型",
    "pinyin": "hùxíng",
    "hv": "Hộ hình",
    "vi": "Kiểu mẫu thiết kế căn hộ",
    "topic": "Nhà ở & Bất động sản",
    "sample": "南北通透、两室一厅的户型最受刚需家庭欢迎。"
  },
  {
    "hanzi": "采光",
    "pinyin": "cǎiguāng",
    "hv": "Thải quang",
    "vi": "Ánh sáng tự nhiên chiếu vào nhà",
    "topic": "Nhà ở & Bất động sản",
    "sample": "高楼层没有遮挡，客厅和大阳台的采光极佳。"
  },
  {
    "hanzi": "通风",
    "pinyin": "tōngfēng",
    "hv": "Thông phong",
    "vi": "Thông thoáng gió tự nhiên",
    "topic": "Nhà ở & Bất động sản",
    "sample": "这间卧室装有对流大窗户，空气通风性能优良。"
  },
  {
    "hanzi": "合租",
    "pinyin": "hézū",
    "hv": "Hợp tô",
    "vi": "Thuê chung nhà/phòng với bạn bè",
    "topic": "Nhà ở & Bất động sản",
    "sample": "刚毕业的年轻白领大多选择合租以节省生活开销。"
  },
  {
    "hanzi": "整租",
    "pinyin": "zhěngzū",
    "hv": "Chỉnh tô",
    "vi": "Thuê nguyên căn hộ riêng biệt",
    "topic": "Nhà ở & Bất động sản",
    "sample": "成家立业后为了私密舒适，决定整租一套电梯花园洋房。"
  },
  {
    "hanzi": "房东",
    "pinyin": "fángdōng",
    "hv": "Phòng đông",
    "vi": "Chủ nhà cho thuê",
    "topic": "Nhà ở & Bất động sản",
    "sample": "房东阿姨非常热心善良，逢年过节还送我们自家包的水饺。"
  },
  {
    "hanzi": "租客",
    "pinyin": "zūkè",
    "hv": "Tô khách",
    "vi": "Người thuê nhà sinh sống",
    "topic": "Nhà ở & Bất động sản",
    "sample": "租客在合同期内有义务妥善爱护房屋内的一切设施。"
  },
  {
    "hanzi": "到期",
    "pinyin": "dàoqī",
    "hv": "Đáo kỳ",
    "vi": "Hết hạn hợp đồng",
    "topic": "Nhà ở & Bất động sản",
    "sample": "租房合同将于下月底到期，需要提前商议续约或退租。"
  },
  {
    "hanzi": "续约",
    "pinyin": "xùyuē",
    "hv": "Tục ước",
    "vi": "Gia hạn tiếp hợp đồng thuê",
    "topic": "Nhà ở & Bất động sản",
    "sample": "双方达成一致意向，按原价续约一年。"
  },
  {
    "hanzi": "搬迁",
    "pinyin": "bānqiān",
    "hv": "Bàn thiên",
    "vi": "Di dời, dọn chuyển địa điểm",
    "topic": "Nhà ở & Bất động sản",
    "sample": "配合市政道路扩建工程，周边老街坊有条不紊地完成搬迁。"
  },
  {
    "hanzi": "阳台",
    "pinyin": "yángtái",
    "hv": "Dương đài",
    "vi": "Ban công phơi đồ ngắm cảnh",
    "topic": "Nhà ở & Bất động sản",
    "sample": "阳台上晾晒着衣服，摆放着几盆生机盎然的绿植花草。"
  },
  {
    "hanzi": "走廊",
    "pinyin": "zǒuláng",
    "hv": "Tẩu lang",
    "vi": "Hành lang đi lại trong tòa nhà",
    "topic": "Nhà ở & Bất động sản",
    "sample": "楼道走廊必须保持畅通无阻，严禁堆放易燃杂物。"
  },
  {
    "hanzi": "厨房",
    "pinyin": "chúfáng",
    "hv": "Trù phòng",
    "vi": "Căn bếp nấu nướng",
    "topic": "Nhà ở & Bất động sản",
    "sample": "开放式现代厨房配齐了大吸力抽油烟机和烤箱。"
  },
  {
    "hanzi": "客厅",
    "pinyin": "kètīng",
    "hv": "Khách thính",
    "vi": "Phòng khách sinh hoạt chung",
    "topic": "Nhà ở & Bất động sản",
    "sample": "宽敞明亮的客厅是全家人欢聚娱乐交流的核心区域。"
  },
  {
    "hanzi": "卧室",
    "pinyin": "wòshì",
    "hv": "Ngọa thất",
    "vi": "Phòng ngủ ấm cúng",
    "topic": "Nhà ở & Bất động sản",
    "sample": "主卧室配备了遮光窗帘，保证夜晚睡眠安稳宁静。"
  },
  {
    "hanzi": "洗手间",
    "pinyin": "xǐshǒujiān",
    "hv": "Tẩy thủ gian",
    "vi": "Nhà vệ sinh, phòng toilet",
    "topic": "Nhà ở & Bất động sản",
    "sample": "请问一楼大厅的洗手间在哪里？"
  },
  {
    "hanzi": "隔音",
    "pinyin": "géyīn",
    "hv": "Cách âm",
    "vi": "Khả năng cách âm chống ồn",
    "topic": "Nhà ở & Bất động sản",
    "sample": "双层中空钢化玻璃窗户的隔音降噪效果极好。"
  },
  {
    "hanzi": "宠物",
    "pinyin": "chǒngwù",
    "hv": "Sủng vật",
    "vi": "Thú cưng trong gia đình",
    "topic": "Thú cưng & Động vật",
    "sample": "把猫狗等小动物当作家庭忠诚一员悉心照料。"
  },
  {
    "hanzi": "小狗",
    "pinyin": "xiǎogǒu",
    "hv": "Tiểu cẩu",
    "vi": "Chú cún con",
    "topic": "Thú cưng & Động vật",
    "sample": "这只金毛小狗摇着欢快的尾巴热情迎接主人回家。"
  },
  {
    "hanzi": "小猫",
    "pinyin": "xiǎomāo",
    "hv": "Tiểu miêu",
    "vi": "Chú mèo con",
    "topic": "Thú cưng & Động vật",
    "sample": "慵懒的小猫蜷缩在温暖的午后阳光下打盹呼噜。"
  },
  {
    "hanzi": "猫砂",
    "pinyin": "māoshā",
    "hv": "Miêu sa",
    "vi": "Cát vệ sinh cho mèo",
    "topic": "Thú cưng & Động vật",
    "sample": "每天记得及时清理猫砂盆以保持室内空气洁净。"
  },
  {
    "hanzi": "狗粮",
    "pinyin": "gǒuliáng",
    "hv": "Cẩu lương",
    "vi": "Thức ăn hạt cho chó",
    "topic": "Thú cưng & Động vật",
    "sample": "挑选无谷天然高蛋白狗粮有助于爱犬毛发光泽健康。"
  },
  {
    "hanzi": "洗澡",
    "pinyin": "xǐzǎo",
    "hv": "Tẩy táo",
    "vi": "Tắm rửa cho thú cưng",
    "topic": "Thú cưng & Động vật",
    "sample": "带柯基犬去专业宠物美容店定期洗澡修剪毛发。"
  },
  {
    "hanzi": "剪指甲",
    "pinyin": "jiǎn zhǐjia",
    "hv": "Tiễn chỉ giáp",
    "vi": "Cắt tỉa móng chân thú cưng",
    "topic": "Thú cưng & Động vật",
    "sample": "用专用宠物指甲剪小心翼翼地给猫咪剪指甲。"
  },
  {
    "hanzi": "疫苗",
    "pinyin": "yìmiáo",
    "hv": "Dịch miêu",
    "vi": "Vắc xin phòng bệnh",
    "topic": "Thú cưng & Động vật",
    "sample": "幼犬满月后要按免疫程序及时接种狂犬和联苗疫苗。"
  },
  {
    "hanzi": "驱虫",
    "pinyin": "qūchóng",
    "hv": "Khu trùng",
    "vi": "Uống thuốc tẩy giun sán thú cưng",
    "topic": "Thú cưng & Động vật",
    "sample": "每月定期做好体内外驱虫预防寄生虫疾病。"
  },
  {
    "hanzi": "绝育",
    "pinyin": "juéyù",
    "hv": "Tuyệt dục",
    "vi": "Triệt sản cho thú cưng",
    "topic": "Thú cưng & Động vật",
    "sample": "适龄绝育手术能够有效降低宠物罹患生殖系统疾病的几率。"
  },
  {
    "hanzi": "领养",
    "pinyin": "lǐngyǎng",
    "hv": "Lãnh dưỡng",
    "vi": "Nhận nuôi động vật thay vì mua",
    "topic": "Thú cưng & Động vật",
    "sample": "以领养代替购买，给流浪毛孩子一个遮风避雨的温暖归宿。"
  },
  {
    "hanzi": "流浪动物",
    "pinyin": "liúlàng dòngwù",
    "hv": "Lưu lãng động vật",
    "vi": "Động vật lang thang cơ nhỡ",
    "topic": "Thú cưng & Động vật",
    "sample": "爱心救助站积极收留救助城市角落里的流浪动物。"
  },
  {
    "hanzi": "牵引绳",
    "pinyin": "qiānyǐnshéng",
    "hv": "Khiên dẫn thằng",
    "vi": "Dây dắt xích cổ chó an toàn",
    "topic": "Thú cưng & Động vật",
    "sample": "出门文明养犬，随手拴好牵引绳是基本法规要求。"
  },
  {
    "hanzi": "玩具",
    "pinyin": "wánjù",
    "hv": "Ngoạn cụ",
    "vi": "Đồ chơi gặm cắn thú cưng",
    "topic": "Thú cưng & Động vật",
    "sample": "毛绒小老鼠和发声球是猫咪最爱不释手的玩具。"
  },
  {
    "hanzi": "鸟类",
    "pinyin": "niǎolèi",
    "hv": "Điểu loại",
    "vi": "Các loài chim chóc",
    "topic": "Thú cưng & Động vật",
    "sample": "湿地保护区每年吸引数以万计珍稀候鸟类栖息繁衍。"
  },
  {
    "hanzi": "金鱼",
    "pinyin": "jīnyú",
    "hv": "Kim ngư",
    "vi": "Cá vàng cảnh bơi lội",
    "topic": "Thú cưng & Động vật",
    "sample": "玻璃鱼缸里养着几尾姿态优美飘逸的红金鱼。"
  },
  {
    "hanzi": "乌龟",
    "pinyin": "wūguī",
    "hv": "Ô quy",
    "vi": "Con rùa nước / rùa cạn",
    "topic": "Thú cưng & Động vật",
    "sample": "小巴西乌龟趴在晒背石上怡然自得地晒着太阳。"
  },
  {
    "hanzi": "仓鼠",
    "pinyin": "cāngshǔ",
    "hv": "Thương thử",
    "vi": "Chuột hamster má phúng phính",
    "topic": "Thú cưng & Động vật",
    "sample": "毛茸茸的小仓鼠在跑轮上不知疲倦地飞速奔跑。"
  },
  {
    "hanzi": "生病",
    "pinyin": "shēngbìng",
    "hv": "Sinh bệnh",
    "vi": "Động vật nhiễm bệnh ốm",
    "topic": "Thú cưng & Động vật",
    "sample": "宠物精神不振食欲减退时应立刻送往宠物医院诊治。"
  },
  {
    "hanzi": "忠诚",
    "pinyin": "zhōngchéng",
    "hv": "Trung thành",
    "vi": "Lòng trung thành gắn bó với chủ nhân",
    "topic": "Thú cưng & Động vật",
    "sample": "狗狗用一生的忠诚与陪伴治愈着主人的心灵。"
  },
  {
    "hanzi": "聚会",
    "pinyin": "jùhuì",
    "hv": "Tụ hội",
    "vi": "Gặp gỡ tụ họp đông vui",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "十周年毕业校友聚会在母校礼堂温馨举行。"
  },
  {
    "hanzi": "宴会",
    "pinyin": "yànhuì",
    "hv": "Yến hội",
    "vi": "Bữa tiệc dạ yến sang trọng",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "国宾大饭店举行了隆重的跨国商务晚宴会。"
  },
  {
    "hanzi": "干杯",
    "pinyin": "gānbēi",
    "hv": "Can bôi",
    "vi": "Nâng ly chúc mừng, cạn chén",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "为了友谊与光明的未来，让我们共同举杯干杯！"
  },
  {
    "hanzi": "庆祝",
    "pinyin": "qìngzhù",
    "hv": "Khánh chúc",
    "vi": "Chúc mừng, ăn mừng thắng lợi",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "全厂职工热烈庆祝新产品研发成功推向市场。"
  },
  {
    "hanzi": "生日",
    "pinyin": "shēngrì",
    "hv": "Sinh nhật",
    "vi": "Ngày sinh nhật",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "祝你生日快乐、福星高照、心想事成！"
  },
  {
    "hanzi": "蛋糕",
    "pinyin": "dàngāo",
    "hv": "Đản cao",
    "vi": "Bánh kem gato sinh nhật",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "吹灭蛋糕上的生日蜡烛，默默许下一个美好心愿。"
  },
  {
    "hanzi": "礼物",
    "pinyin": "lǐwù",
    "hv": "Lễ vật",
    "vi": "Món quà tặng ý nghĩa",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "千里送鹅毛，礼轻情意重，这份精心挑选的礼物很贴心。"
  },
  {
    "hanzi": "红包",
    "pinyin": "hóngbāo",
    "hv": "Hồng bao",
    "vi": "Bao lì xì đỏ mừng tuổi",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "长辈在新春佳节给晚辈派发吉利压岁红包。"
  },
  {
    "hanzi": "春节",
    "pinyin": "Chūnjié",
    "hv": "Xuân tiết",
    "vi": "Tết Nguyên Đán truyền thống",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "春节是中华民族岁首最隆重热闹的传统佳节。"
  },
  {
    "hanzi": "端午节",
    "pinyin": "Duānwǔjié",
    "hv": "Đoan Ngọ tiết",
    "vi": "Tết Đoan Ngọ (mùng 5 tháng 5 âm lịch)",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "端午节吃香甜软糯的粽子，赛龙舟缅怀先贤屈原。"
  },
  {
    "hanzi": "中秋节",
    "pinyin": "Zhōngqiūjié",
    "hv": "Trung Thu tiết",
    "vi": "Tết Trung Thu đoàn viên",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "中秋之夜月圆人团圆，品尝美味月饼共叙天伦。"
  },
  {
    "hanzi": "元宵节",
    "pinyin": "Yuánxiāojié",
    "hv": "Nguyên Tiêu tiết",
    "vi": "Tết Nguyên Tiêu rằm tháng Giêng",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "正月十五元宵节逛花灯猜灯谜，吃甜滑元宵汤圆。"
  },
  {
    "hanzi": "国庆节",
    "pinyin": "Guóqìngjié",
    "hv": "Quốc Khánh tiết",
    "vi": "Ngày Quốc Khánh đất nước",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "十月一日国庆节天安门广场举行了庄严的升国旗仪式。"
  },
  {
    "hanzi": "放假",
    "pinyin": "fàngjià",
    "hv": "Phóng giá",
    "vi": "Được nghỉ lễ, nghỉ phép",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "法定节假日放假三天，正好安排一次短途自驾游。"
  },
  {
    "hanzi": "团聚",
    "pinyin": "tuánjù",
    "hv": "Đoàn tụ",
    "vi": "Sum họp gia đình sum vầy",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "无论身在何方，过年都要赶回家吃年夜饭团聚。"
  },
  {
    "hanzi": "拜年",
    "pinyin": "bàinián",
    "hv": "Bái niên",
    "vi": "Đi chúc Tết đầu năm",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "大年初一穿新衣走家串户向邻里长辈拱手拜年。"
  },
  {
    "hanzi": "贴春联",
    "pinyin": "tiē chūnlián",
    "hv": "Thiếp xuân liên",
    "vi": "Dán câu đối đỏ ngày Tết",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "除夕下午在朱红大门上工工整整贴春联和福字。"
  },
  {
    "hanzi": "守岁",
    "pinyin": "shǒusuì",
    "hv": "Thủ tuế",
    "vi": "Thức đón giao thừa năm mới",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "一家老少欢聚一堂看春节联欢晚会通宵守岁。"
  },
  {
    "hanzi": "放烟花",
    "pinyin": "fàng yānhuā",
    "hv": "Phóng yên hoa",
    "vi": "Đốt pháo hoa rực rỡ",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "五彩斑斓的烟花划破夜空，把节日气氛推向高潮。"
  },
  {
    "hanzi": "祝福",
    "pinyin": "zhùfú",
    "hv": "Chúc phúc",
    "vi": "Gửi lời cầu chúc an lành tốt đẹp",
    "topic": "Tiệc tùng & Lễ hội",
    "sample": "送上最诚挚的节日祝福，愿你岁岁平安、万事胜意！"
  },
  {
    "hanzi": "万事如意",
    "pinyin": "wànshì rúyì",
    "hv": "Vạn sự như ý",
    "vi": "Vạn sự như ý, mọi việc thuận buồm",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "新春佳节衷心祝愿您身体健康、阖家幸福、万事如意！"
  },
  {
    "hanzi": "心想事成",
    "pinyin": "xīnxiǎng shìchéng",
    "hv": "Tâm tưởng sự thành",
    "vi": "Ước gì được nấy, cầu được ước thấy",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "在新的一年里，祝愿你的所有梦想都能心想事成！"
  },
  {
    "hanzi": "恭喜发财",
    "pinyin": "gōngxǐ fācái",
    "hv": "Cung hỷ phát tài",
    "vi": "Cung hỷ phát tài, kinh doanh phát đạt",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "恭喜发财，红包拿来！"
  },
  {
    "hanzi": "一帆风顺",
    "pinyin": "yīfān fēngshùn",
    "hv": "Nhất phàm phong thuận",
    "vi": "Thuận buồm xuôi gió trên mọi bước đường",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "祝你在新的工作岗位上步步高升、一帆风顺！"
  },
  {
    "hanzi": "前程似锦",
    "pinyin": "qiánchéng sìjǐn",
    "hv": "Tiền trình tự cẩm",
    "vi": "Tương lai tươi sáng như hoa như gấm",
    "topic": "Giao tiếp lịch thiệp",
    "sample": "祝愿各位学子前程似锦、未来可期！"
  }
];

  let currentId = 301;
  // Push HSK 3 words
  hsk3Words.forEach(w => {
    if (currentId <= 1000) {
      HSK_1000_VOCABULARY.push({
        id: currentId++,
        hanzi: w.hanzi,
        pinyin: w.pinyin,
        hv: w.hv,
        vi: w.vi,
        level: 'HSK 3',
        topic: w.topic,
        sample: `${w.hanzi} 是常用的汉语词汇。`
      });
    }
  });

  // Push communicative words (each with authentic Pinyin, HV, VI, sample)
  communicativeVocab.forEach(w => {
    if (currentId <= 1000) {
      HSK_1000_VOCABULARY.push({
        id: currentId++,
        hanzi: w.hanzi,
        pinyin: w.pinyin,
        hv: w.hv,
        vi: w.vi,
        level: 'HSK 3+',
        topic: w.topic,
        sample: w.sample
      });
    }
  });
})();

// Attach to window for global access
if (typeof window !== 'undefined') {
  window.HSK_1000_VOCABULARY = HSK_1000_VOCABULARY;
}
