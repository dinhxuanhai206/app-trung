import { Injectable, NotFoundException } from '@nestjs/common';

export interface LessonItem {
  id: string;
  level: string;
  title: string;
  description: string;
  reading: any;
  listening: any;
  speaking: any;
  writing: any;
  matchingWords: any[];
}

@Injectable()
export class LessonsService {
  private lessons: LessonItem[] = [
    {
      id: 'hsk1-lesson1',
      level: 'HSK 1',
      title: 'Bài 1: Chào hỏi & Giao tiếp cơ bản (问候与基础交流)',
      description: 'Học cách chào hỏi, cảm ơn, xin lỗi và tự giới thiệu bản thân bằng tiếng Trung chuẩn.',
      reading: {
        title: '你好，很高兴认识你',
        tokens: [
          { hanzi: '你好', pinyin: 'nǐ hǎo', vi: 'Xin chào', hv: 'Nhĩ Hảo', sample: '你好！我是李明。' },
          { hanzi: '！我', pinyin: 'wǒ', vi: 'Tôi', hv: 'Ngã', sample: '我是学生。' },
          { hanzi: '是', pinyin: 'shì', vi: 'Là', hv: 'Thị', sample: '他是老师。' },
          { hanzi: '大卫', pinyin: 'Dàwèi', vi: 'David', hv: 'Đại Vệ', sample: '大卫是美国人。' },
          { hanzi: '，你', pinyin: 'nǐ', vi: 'Bạn', hv: 'Nhĩ', sample: '你好！' },
          { hanzi: '叫', pinyin: 'jiào', vi: 'Tên là', hv: 'Khiếu', sample: '我叫王兰。' },
          { hanzi: '什么', pinyin: 'shénme', vi: 'Gì', hv: 'Thập Ma', sample: '这是什么？' },
          { hanzi: '名字', pinyin: 'míngzi', vi: 'Tên', hv: 'Danh Tự', sample: '你的名字。' },
        ],
        translationVi: 'David: Chào bạn, tôi là David! Bạn tên là gì?\nVương Lan: Chào David, tôi là Vương Lan. Rất vui được quen biết bạn!',
        quiz: {
          question: 'Trong bài hội thoại, ai là người bắt chuyện trước?',
          options: [
            { text: 'A. 王兰 (Vương Lan)', correct: false },
            { text: 'B. 大卫 (David)', correct: true },
          ],
        },
      },
      listening: {
        dialogues: [
          { id: 0, hanzi: '你好，请问你叫什么名字？', pinyin: 'Nǐ hǎo, qǐngwèn nǐ jiào shénme míngzì?', vi: 'Xin chào, bạn tên là gì?' },
          { id: 1, hanzi: '我叫王兰，我是中国人。', pinyin: 'Wǒ jiào Wáng Lán, wǒ shì Zhōngguó rén.', vi: 'Tôi tên là Vương Lan, tôi là người Trung Quốc.' },
        ],
        quiz: {
          prompt: 'Nghe và điền từ:',
          sentencePrefix: '很高兴',
          missingWord: '认识',
          sentenceSuffix: '你！',
        },
      },
      speaking: {
        targetHanzi: '很高兴认识你',
        targetPinyin: 'Hěn gāoxìng rènshi nǐ',
        vietnameseMeaning: 'Rất vui được làm quen với bạn',
      },
      writing: {
        targetChar: '中',
        charPinyin: 'zhōng',
        charMeaning: 'Trung (trong Trung Quốc, Trung tâm)',
        compositionTask: {
          prompt: 'Dịch câu: "Tôi là người Việt Nam"',
          expectedKeywords: ['我', '是', '越南人'],
          sampleSolution: '我是越南人 (Wǒ shì Yuènán rén)',
        },
      },
      matchingWords: [
        { id: 'w1', hanzi: '你好', pinyin: 'nǐ hǎo', vi: 'Xin chào' },
        { id: 'w2', hanzi: '谢谢', pinyin: 'xièxie', vi: 'Cảm ơn' },
        { id: 'w3', hanzi: '再见', pinyin: 'zàijiàn', vi: 'Tạm biệt' },
        { id: 'w4', hanzi: '朋友', pinyin: 'péngyou', vi: 'Bạn bè' },
      ],
    },
    {
      id: 'hsk2-lesson2',
      level: 'HSK 2',
      title: 'Bài 2: Mua sắm & Ăn uống (购物与饮食)',
      description: 'Hỏi giá tiền, mặc cả và gọi món ăn đồ uống.',
      reading: {
        title: '在水果店买苹果 (Mua hoa quả)',
        tokens: [
          { hanzi: '老板', pinyin: 'lǎobǎn', vi: 'Ông chủ', hv: 'Lão Bản', sample: '老板好！' },
          { hanzi: '，苹果', pinyin: 'píngguǒ', vi: 'Quả táo', hv: 'Bình Quả', sample: '买苹果。' },
          { hanzi: '多少钱', pinyin: 'duōshǎo qián', vi: 'Bao nhiêu tiền', hv: 'Đa Thiểu Tiền', sample: '多少钱？' },
        ],
        translationVi: 'Khách hàng: Ông chủ, táo bao nhiêu tiền?\nChủ tiệm: Năm tệ một cân!',
        quiz: {
          question: 'Khách hàng muốn mua loại trái cây nào?',
          options: [
            { text: 'A. 苹果 (Quả táo)', correct: true },
            { text: 'B. 西瓜 (Dưa hấu)', correct: false },
          ],
        },
      },
      listening: {
        dialogues: [
          { id: 0, hanzi: '这个多少钱一件？', pinyin: 'Zhège duōshǎo qián yī jiàn?', vi: 'Cái này bao nhiêu tiền một cái?' },
          { id: 1, hanzi: '太贵了，便宜一点吧。', pinyin: 'Tài guì le, piányi yīdiǎn ba.', vi: 'Đắt quá, rẻ một chút đi.' },
        ],
        quiz: {
          prompt: 'Nghe và điền từ:',
          sentencePrefix: '太贵了，',
          missingWord: '便宜',
          sentenceSuffix: '一点吧。',
        },
      },
      speaking: {
        targetHanzi: '这个多少钱',
        targetPinyin: 'Zhège duōshǎo qián',
        vietnameseMeaning: 'Cái này bao nhiêu tiền?',
      },
      writing: {
        targetChar: '学',
        charPinyin: 'xué',
        charMeaning: 'Học (trong Học tập, Trường học)',
        compositionTask: {
          prompt: 'Dịch câu: "Tôi muốn mua một ly cà phê"',
          expectedKeywords: ['我想', '买', '咖啡'],
          sampleSolution: '我想买一杯咖啡 (Wǒ xiǎng mǎi yībēi kāfēi)',
        },
      },
      matchingWords: [
        { id: 'w21', hanzi: '多少钱', pinyin: 'duōshǎo qián', vi: 'Bao nhiêu tiền' },
        { id: 'w22', hanzi: '便宜', pinyin: 'piányi', vi: 'Rẻ' },
        { id: 'w23', hanzi: '贵', pinyin: 'guì', vi: 'Đắt' },
        { id: 'w24', hanzi: '苹果', pinyin: 'píngguǒ', vi: 'Quả táo' },
      ],
    },
    {
      id: 'hsk3-lesson3',
      level: 'HSK 3',
      title: 'Bài 3: Du lịch & Đời sống (旅行与生活)',
      description: 'Lập kế hoạch du lịch, hỏi đường và giao tiếp đời sống thường nhật.',
      reading: { title: '去北京旅游', tokens: [{ hanzi: '旅游', pinyin: 'lǚyóu', vi: 'Du lịch' }], translationVi: 'Đi Bắc Kinh du lịch' },
      listening: { dialogues: [{ id: 0, hanzi: '你打算去哪里旅游？', pinyin: 'Nǐ dǎsuàn qù nǎlǐ lǚyóu?', vi: 'Bạn định đi đâu du lịch?' }] },
      speaking: { targetHanzi: '我打算去北京旅游', targetPinyin: 'Wǒ dǎsuàn qù Běijīng lǚyóu', vietnameseMeaning: 'Tôi dự định đi du lịch Bắc Kinh' },
      writing: { targetChar: '旅', charPinyin: 'lǚ', charMeaning: 'Lữ (Du lịch, lữ hành)' },
      matchingWords: [{ id: 'w31', hanzi: '旅游', pinyin: 'lǚyóu', vi: 'Du lịch' }]
    },
    {
      id: 'hsk1-lesson4',
      level: 'HSK 1',
      title: 'Bài 4: Gia đình & Người thân (家庭与家人)',
      description: 'Giới thiệu các thành viên trong gia đình và nghề nghiệp cơ bản.',
      reading: { title: '我的家', tokens: [{ hanzi: '我家有四口人', pinyin: 'Wǒ jiā yǒu sì kǒu rén', vi: 'Nhà tôi có 4 người' }] },
      listening: { dialogues: [{ id: 0, hanzi: '你家有几口人？', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', vi: 'Nhà bạn có mấy người?' }] },
      speaking: { targetHanzi: '我家有爸爸妈妈和我', targetPinyin: 'Wǒ jiā yǒu bàba māma hé wǒ', vietnameseMeaning: 'Nhà tôi có bố mẹ và tôi' },
      writing: { targetChar: '家', charPinyin: 'jiā', charMeaning: 'Gia (Nhà, gia đình)' },
      matchingWords: [{ id: 'w41', hanzi: '爸爸', pinyin: 'bàba', vi: 'Bố' }]
    },
    {
      id: 'hsk1-lesson5',
      level: 'HSK 1',
      title: 'Bài 5: Thời gian & Sinh hoạt (时间与日常生活)',
      description: 'Cách xem giờ, nói về các ngày trong tuần và lịch trình biểu sinh hoạt.',
      reading: { title: '现在几点', tokens: [{ hanzi: '现在八点', pinyin: 'xiànzài bā diǎn', vi: 'Bây giờ 8 giờ' }] },
      listening: { dialogues: [{ id: 0, hanzi: '现在几点了？', pinyin: 'Xiànzài jǐ diǎn le?', vi: 'Bây giờ mấy giờ rồi?' }] },
      speaking: { targetHanzi: '现在是早上八点半', targetPinyin: 'Xiànzài shì zǎoshang bā diǎn bàn', vietnameseMeaning: 'Bây giờ là 8 rưỡi sáng' },
      writing: { targetChar: '时', charPinyin: 'shí', charMeaning: 'Thời (Thời gian, giờ)' },
      matchingWords: [{ id: 'w51', hanzi: '现在', pinyin: 'xiànzài', vi: 'Bây giờ' }]
    },
    {
      id: 'hsk2-lesson6',
      level: 'HSK 2',
      title: 'Bài 6: Nhà hàng & Thưởng thức ẩm thực (餐馆点餐与美食)',
      description: 'Kỹ năng gọi món, hỏi độ cay, khẩu vị và thưởng thức món ăn Trung Hoa.',
      reading: { title: '在餐馆点菜', tokens: [{ hanzi: '服务员点菜', pinyin: 'fúwùyuán diǎncài', vi: 'Phục vụ gọi món' }] },
      listening: { dialogues: [{ id: 0, hanzi: '服务员，请给我们一份菜单。', pinyin: 'Fúwùyuán, qǐng gěi wǒmen yī fèn càidān.', vi: 'Phục vụ, xin cho một cuốn thực đơn.' }] },
      speaking: { targetHanzi: '服务员，请给我们一份菜单', targetPinyin: 'Fúwùyuán, qǐng gěi wǒmen yī fèn càidān', vietnameseMeaning: 'Phục vụ, cho xin thực đơn' },
      writing: { targetChar: '食', charPinyin: 'shí', charMeaning: 'Thực (Ăn, thực phẩm)' },
      matchingWords: [{ id: 'w61', hanzi: '点菜', pinyin: 'diǎncài', vi: 'Gọi món' }]
    },
    {
      id: 'hsk2-lesson7',
      level: 'HSK 2',
      title: 'Bài 7: Thời tiết & Bốn mùa (天气与四季)',
      description: 'Dự báo thời tiết, nhiệt độ nóng lạnh và khí hậu bốn mùa.',
      reading: { title: '今天天气怎么样', tokens: [{ hanzi: '今天晴天', pinyin: 'jīntiān qíngtiān', vi: 'Hôm nay trời nắng' }] },
      listening: { dialogues: [{ id: 0, hanzi: '明天会下雨吗？', pinyin: 'Míngtiān huì xiàyǔ ma?', vi: 'Ngày mai có mưa không?' }] },
      speaking: { targetHanzi: '今天天气非常晴朗暖和', targetPinyin: 'Jīntiān tiānqì fēicháng qínglǎng nuǎnhuo', vietnameseMeaning: 'Hôm nay thời tiết rất nắng ráo ấm áp' },
      writing: { targetChar: '天', charPinyin: 'tiān', charMeaning: 'Thiên (Trời, ngày)' },
      matchingWords: [{ id: 'w71', hanzi: '天气', pinyin: 'tiānqì', vi: 'Thời tiết' }]
    },
    {
      id: 'hsk3-lesson8',
      level: 'HSK 3',
      title: 'Bài 8: Khách sạn & Thủ tục lưu trú (酒店入住与服务)',
      description: 'Làm thủ tục nhận phòng check-in, đặt phòng trước và dịch vụ phòng.',
      reading: { title: '办理入住', tokens: [{ hanzi: '预订房间', pinyin: 'yùdìng fángjiān', vi: 'Đặt phòng' }] },
      listening: { dialogues: [{ id: 0, hanzi: '我要办理入住手续。', pinyin: 'Wǒ yào bànlǐ rùzhù shǒuxù.', vi: 'Tôi muốn làm thủ tục nhận phòng.' }] },
      speaking: { targetHanzi: '你好，我有预订一个大床房', targetPinyin: 'Nǐ hǎo, wǒ yǒu yùdìng yī gè dàchuángfáng', vietnameseMeaning: 'Xin chào, tôi đã đặt trước một phòng giường đơn lớn' },
      writing: { targetChar: '店', charPinyin: 'diàn', charMeaning: 'Điếm (Khách sạn, quán)' },
      matchingWords: [{ id: 'w81', hanzi: '入住', pinyin: 'rùzhù', vi: 'Nhận phòng' }]
    },
    {
      id: 'hsk3-lesson9',
      level: 'HSK 3',
      title: 'Bài 9: Sức khỏe & Thăm khám bệnh (健康与就医看病)',
      description: 'Mô tả triệu chứng bệnh, đi khám tại bệnh viện và mua thuốc theo đơn.',
      reading: { title: '去医院看病', tokens: [{ hanzi: '发烧头疼', pinyin: 'fāshāo tóuténg', vi: 'Sốt đau đầu' }] },
      listening: { dialogues: [{ id: 0, hanzi: '你哪里不舒服？', pinyin: 'Nǐ nǎlǐ bù shūfu?', vi: 'Bạn không khỏe ở chỗ nào?' }] },
      speaking: { targetHanzi: '我有点感冒发烧，想开点药', targetPinyin: 'Wǒ yǒudiǎn gǎnmào fāshāo, xiǎng kāi diǎn yào', vietnameseMeaning: 'Tôi hơi cảm cúm phát sốt, muốn kê ít thuốc' },
      writing: { targetChar: '医', charPinyin: 'yī', charMeaning: 'Y (Bác sĩ, y tế)' },
      matchingWords: [{ id: 'w91', hanzi: '医生', pinyin: 'yīshēng', vi: 'Bác sĩ' }]
    },
    {
      id: 'hsk4-lesson10',
      level: 'HSK 4',
      title: 'Bài 10: Phỏng vấn xin việc & Công sở (职场面试与商务)',
      description: 'Kỹ năng phỏng vấn tuyển dụng, giới thiệu kinh nghiệm làm việc.',
      reading: { title: '应聘面试', tokens: [{ hanzi: '工作经验', pinyin: 'gōngzuò jīngyàn', vi: 'Kinh nghiệm làm việc' }] },
      listening: { dialogues: [{ id: 0, hanzi: '祝贺你通过了面试。', pinyin: 'Zhùhè nǐ tōngguò le miànshì.', vi: 'Chúc mừng bạn đã đỗ phỏng vấn.' }] },
      speaking: { targetHanzi: '祝我们未来合作愉快', targetPinyin: 'Zhù wǒmen wèilái hézuò yúkuài', vietnameseMeaning: 'Chúc cho sự hợp tác tương lai tốt đẹp' },
      writing: { targetChar: '业', charPinyin: 'yè', charMeaning: 'Nghiệp (Doanh nghiệp, Tốt nghiệp)' },
      matchingWords: [{ id: 'w101', hanzi: '面试', pinyin: 'miànshì', vi: 'Phỏng vấn' }]
    },
    {
      id: 'hsk2-lesson11',
      level: 'HSK 2',
      title: 'Bài 11: Đi lại & Phương tiện giao thông (交通与出行)',
      description: 'Hỏi đường, bắt taxi, đi tàu điện ngầm và xe buýt tại Trung Quốc.',
      reading: { title: '去火车站', tokens: [{ hanzi: '坐地铁', pinyin: 'zuò dìtiě', vi: 'Đi tàu điện ngầm' }] },
      listening: { dialogues: [{ id: 0, hanzi: '师傅，去北京饭店，请打表。', pinyin: 'Shīfu, qù Běijīng Fàndiàn, qǐng dǎbiǎo.', vi: 'Bác tài, đi khách sạn Bắc Kinh, vui lòng bật đồng hồ cước.' }] },
      speaking: { targetHanzi: '请问去最近的地铁站怎么走？', targetPinyin: 'Qǐngwèn qù zuì jìn de dìtiězhàn zěnme zǒu?', vietnameseMeaning: 'Xin hỏi đến ga tàu điện ngầm gần nhất đi như thế nào?' },
      writing: { targetChar: '车', charPinyin: 'chē', charMeaning: 'Xa (Xe cộ, phương tiện)' },
      matchingWords: [{ id: 'w111', hanzi: '地铁', pinyin: 'dìtiě', vi: 'Tàu điện ngầm' }]
    },
    {
      id: 'hsk2-lesson12',
      level: 'HSK 2',
      title: 'Bài 12: Sở thích & Thể thao giải trí (爱好与运动娱乐)',
      description: 'Trò chuyện về sở thích cá nhân, các môn thể thao và thư giãn cuối tuần.',
      reading: { title: '周末的爱好', tokens: [{ hanzi: '游泳听音乐', pinyin: 'yóuyǒng tīng yīnyuè', vi: 'Bơi lội nghe nhạc' }] },
      listening: { dialogues: [{ id: 0, hanzi: '周末一起看足球比赛吧。', pinyin: 'Zhōumò yīqǐ kàn zúqiú bǐsài ba.', vi: 'Cuối tuần cùng xem bóng đá nhé.' }] },
      speaking: { targetHanzi: '我平时喜欢运动和听流行音乐', targetPinyin: 'Wǒ píngshí xǐhuan yùndòng hé tīng liúxíng yīnyuè', vietnameseMeaning: 'Bình thường tôi thích rèn luyện thể thao và nghe nhạc thịnh hành' },
      writing: { targetChar: '乐', charPinyin: 'yuè / lè', charMeaning: 'Nhạc (âm nhạc) / Lạc (vui vẻ)' },
      matchingWords: [{ id: 'w121', hanzi: '运动', pinyin: 'yùndòng', vi: 'Thể thao' }]
    },
    {
      id: 'hsk3-lesson13',
      level: 'HSK 3',
      title: 'Bài 13: Mua sắm trực tuyến & Thanh toán (网购与移动支付)',
      description: 'Mua sắm online, nhận bưu phẩm và thanh toán quét mã không dùng tiền mặt.',
      reading: { title: '网购与扫码', tokens: [{ hanzi: '扫码付款', pinyin: 'sǎomǎ fùkuǎn', vi: 'Quét mã thanh toán' }] },
      listening: { dialogues: [{ id: 0, hanzi: '您的快递到了。', pinyin: 'Nín de kuàidì dào le.', vi: 'Bưu phẩm của bạn đã tới.' }] },
      speaking: { targetHanzi: '请问这里可以用微信或者支付宝付款吗？', targetPinyin: 'Qǐngwèn zhèlǐ kěyǐ yòng Wēixìn huòzhě Zhīfùbǎo fùkuǎn ma?', vietnameseMeaning: 'Xin hỏi ở đây có thể thanh toán bằng WeChat hoặc Alipay không?' },
      writing: { targetChar: '电', charPinyin: 'diàn', charMeaning: 'Điện (Điện thoại, Điện tử)' },
      matchingWords: [{ id: 'w131', hanzi: '网购', pinyin: 'wǎnggòu', vi: 'Mua online' }]
    },
    {
      id: 'hsk3-lesson14',
      level: 'HSK 3',
      title: 'Bài 14: Du học & Môi trường học tập (留学与校园生活)',
      description: 'Đăng ký môn học, thư viện, thi cử và xin học bổng du học.',
      reading: { title: '图书馆借书', tokens: [{ hanzi: '借书', pinyin: 'jiè shū', vi: 'Mượn sách' }] },
      listening: { dialogues: [{ id: 0, hanzi: '恭喜你获得奖学金！', pinyin: 'Gōngxǐ nǐ huòdé jiǎngxuéjīn!', vi: 'Chúc mừng bạn nhận được học bổng!' }] },
      speaking: { targetHanzi: '努力学习中文，争取取得优异的成绩', targetPinyin: 'Nǔlì xuéxí Zhōngwén, zhēngqǔ qǔdé yōuyì de chéngjì', vietnameseMeaning: 'Nỗ lực học tiếng Trung, phấn đấu đạt thành tích xuất sắc' },
      writing: { targetChar: '学', charPinyin: 'xué', charMeaning: 'Học (Học tập, Trường học)' },
      matchingWords: [{ id: 'w141', hanzi: '奖学金', pinyin: 'jiǎngxuéjīn', vi: 'Học bổng' }]
    },
    {
      id: 'hsk4-lesson15',
      level: 'HSK 4',
      title: 'Bài 15: Đàm phán thương mại & Ký kết hợp đồng (商务谈判与合作)',
      description: 'Đàm phán giá cả, điều khoản giao hàng và ký kết hợp đồng kinh tế.',
      reading: { title: '价格谈判', tokens: [{ hanzi: '商业合同', pinyin: 'shāngyè hétong', vi: 'Hợp đồng thương mại' }] },
      listening: { dialogues: [{ id: 0, hanzi: '祝贺我们今天圆满签订了合作协议！', pinyin: 'Zhùhè wǒmen jīntiān yuánmǎn qiāndìng le hézuò xiéyì!', vi: 'Chúc mừng hôm nay chúng ta đã ký kết viên mãn thỏa thuận hợp tác!' }] },
      speaking: { targetHanzi: '互利共赢是双方长期合作的基础', targetPinyin: 'Hù lì gòng yíng shì shuāngfāng chángqī hézuò de jīchǔ', vietnameseMeaning: 'Đôi bên cùng có lợi là nền tảng cho sự hợp tác lâu dài' },
      writing: { targetChar: '商', charPinyin: 'shāng', charMeaning: 'Thương (Thương mại, Doanh nhân)' },
      matchingWords: [{ id: 'w151', hanzi: '合同', pinyin: 'hétong', vi: 'Hợp đồng' }]
    },
  ];

  findAll() {
    return this.lessons.map(({ id, level, title, description }) => ({
      id,
      level,
      title,
      description,
    }));
  }

  findById(id: string) {
    const lesson = this.lessons.find(l => l.id === id);
    if (!lesson) {
      throw new NotFoundException(`Không tìm thấy bài học với mã: ${id}`);
    }
    return lesson;
  }

  submitExercise(id: string, submission: { skill: string; answers: any; score: number }) {
    const lesson = this.findById(id);
    return {
      success: true,
      lessonId: id,
      skill: submission.skill,
      score: submission.score,
      xpEarned: Math.round(submission.score * 0.25),
      timestamp: new Date(),
    };
  }
}
