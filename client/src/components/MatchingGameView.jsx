import React, { useState, useEffect, useMemo } from 'react';
import { getLessonSentenceBuilding } from '../data/lessonEnricher';

// Ngân hàng câu đố ghép câu giao tiếp đời sống thực tế
const LIFE_SENTENCE_PUZZLES = [
  {
    id: 'puz_greet',
    topic: 'Chào hỏi & Làm quen',
    promptVi: 'Hãy sắp xếp các từ thành câu: "Rất vui được quen biết bạn!"',
    tokens: ['认识', '你', '很', '高兴'],
    solution: ['很', '高兴', '认识', '你'],
    targetZh: '很高兴认识你',
    pinyin: 'Hěn gāoxìng rènshi nǐ',
  },
  {
    id: 'puz_name',
    topic: 'Chào hỏi & Làm quen',
    promptVi: 'Hãy sắp xếp các từ thành câu: "Bạn tên là cái gì?"',
    tokens: ['名字', '你', '叫', '什么'],
    solution: ['你', '叫', '什么', '名字'],
    targetZh: '你叫什么名字',
    pinyin: 'Nǐ jiào shénme míngzì',
  },
  {
    id: 'puz_vietnam',
    topic: 'Giới thiệu bản thân',
    promptVi: 'Hãy ghép thành câu: "Tôi là người Việt Nam, tôi học tiếng Trung."',
    tokens: ['学', '我是', '越南人', '中文', '我'],
    solution: ['我是', '越南人', '我', '学', '中文'],
    targetZh: '我是越南人我学中文',
    pinyin: 'Wǒ shì Yuènán rén wǒ xué Zhōngwén',
  },
  {
    id: 'puz_order',
    topic: 'Ăn uống & Nhà hàng',
    promptVi: 'Hãy ghép thành câu: "Tôi muốn gọi một phần đậu phụ Tứ Xuyên và cơm."',
    tokens: ['一份', '米饭', '麻婆豆腐', '我想点', '和'],
    solution: ['我想点', '一份', '麻婆豆腐', '和', '米饭'],
    targetZh: '我想点一份麻婆豆腐和米饭',
    pinyin: 'Wǒ xiǎng diǎn yí fèn mápó dòufu hé mǐfàn',
  },
  {
    id: 'puz_price',
    topic: 'Mua sắm & Mặc cả',
    promptVi: 'Hãy ghép thành câu: "Cái này bao nhiêu tiền? Có thể rẻ hơn chút không?"',
    tokens: ['这个', '便宜一点吗', '多少钱', '能'],
    solution: ['这个', '多少钱', '能', '便宜一点吗'],
    targetZh: '这个多少钱能便宜一点吗',
    pinyin: 'Zhège duōshao qián néng piányi yìdiǎn ma',
  },
  {
    id: 'puz_wechat',
    topic: 'Kết bạn & Giao tiếp',
    promptVi: 'Hãy ghép thành câu: "Chúng mình kết bạn WeChat nhé?"',
    tokens: ['加个', '我们', '微信吧'],
    solution: ['我们', '加个', '微信吧'],
    targetZh: '我们加个微信吧',
    pinyin: 'Wǒmen jiā gè Wēixìn ba',
  },
  {
    id: 'puz_weather',
    topic: 'Hẹn hò & Đời sống',
    promptVi: 'Hãy ghép thành câu: "Hôm nay thời tiết đẹp quá, chúng ta đi uống cà phê nhé!"',
    tokens: ['今天', '真好', '去喝咖啡吧', '天气', '我们'],
    solution: ['今天', '天气', '真好', '我们', '去喝咖啡吧'],
    targetZh: '今天天气真好我们去喝咖啡吧',
    pinyin: 'Jīntiān tiānqì zhēn hǎo wǒmen qù hē kāfēi ba',
  },
  {
    id: 'puz_subway',
    topic: 'Hỏi đường & Đi lại',
    promptVi: 'Hãy ghép thành câu: "Xin hỏi đi đến Cố Cung đi tàu điện ngầm thế nào?"',
    tokens: ['坐地铁', '去故宫', '请问', '怎么走'],
    solution: ['请问', '去故宫', '坐地铁', '怎么走'],
    targetZh: '请问去故宫坐地铁怎么走',
    pinyin: 'Qǐngwèn qù Gùgōng zuò dìtiě zěnme zǒu',
  },
];

const VOCAB_TOPICS = [
  {
    id: 'food_drink',
    name: '🍜 Ẩm Thực & Nhà Hàng',
    words: [
      { id: 'fd_1', hanzi: '菜单', pinyin: 'càidān', vi: 'Thực đơn' },
      { id: 'fd_2', hanzi: '服务员', pinyin: 'fúwùyuán', vi: 'Phục vụ viên' },
      { id: 'fd_3', hanzi: '点菜', pinyin: 'diǎncài', vi: 'Gọi món' },
      { id: 'fd_4', hanzi: '买单', pinyin: 'mǎidān', vi: 'Thanh toán' },
      { id: 'fd_5', hanzi: '冰咖啡', pinyin: 'bīng kāfēi', vi: 'Cà phê đá' },
      { id: 'fd_6', hanzi: '米饭', pinyin: 'mǐfàn', vi: 'Cơm trắng' },
      { id: 'fd_7', hanzi: '面条', pinyin: 'miàntiáo', vi: 'Mì sợi' },
      { id: 'fd_8', hanzi: '牛肉', pinyin: 'niúròu', vi: 'Thịt bò' },
      { id: 'fd_9', hanzi: '筷子', pinyin: 'kuàizi', vi: 'Đôi đũa' },
      { id: 'fd_10', hanzi: '好喝', pinyin: 'hǎohē', vi: 'Ngon miệng' },
      { id: 'fd_11', hanzi: '麻辣', pinyin: 'málà', vi: 'Cay tê' },
      { id: 'fd_12', hanzi: '打包', pinyin: 'dǎbāo', vi: 'Gói mang về' },
    ]
  },
  {
    id: 'travel_transit',
    name: '✈️ Du Lịch & Di Chuyển',
    words: [
      { id: 'tr_1', hanzi: '火车站', pinyin: 'huǒchēzhàn', vi: 'Ga tàu hỏa' },
      { id: 'tr_2', hanzi: '机场', pinyin: 'jīchǎng', vi: 'Sân bay' },
      { id: 'tr_3', hanzi: '飞机票', pinyin: 'fēijīpiào', vi: 'Vé máy bay' },
      { id: 'tr_4', hanzi: '护照', pinyin: 'hùzhào', vi: 'Hộ chiếu' },
      { id: 'tr_5', hanzi: '行李箱', pinyin: 'xínglixiāng', vi: 'Vali hành lý' },
      { id: 'tr_6', hanzi: '出租车', pinyin: 'chūzūchē', vi: 'Xe taxi' },
      { id: 'tr_7', hanzi: '地铁站', pinyin: 'dìtiězhàn', vi: 'Ga tàu điện' },
      { id: 'tr_8', hanzi: '往左拐', pinyin: 'wǎng zuǒ guǎi', vi: 'Rẽ trái' },
      { id: 'tr_9', hanzi: '往右拐', pinyin: 'wǎng yòu guǎi', vi: 'Rẽ phải' },
      { id: 'tr_10', hanzi: '十字路口', pinyin: 'shízì lùkǒu', vi: 'Ngã tư đường' },
      { id: 'tr_11', hanzi: '准时', pinyin: 'zhǔnshí', vi: 'Đúng giờ' },
      { id: 'tr_12', hanzi: '宾馆', pinyin: 'bīnguǎn', vi: 'Khách sạn' },
    ]
  },
  {
    id: 'shopping_pay',
    name: '🛍️ Mua Sắm & Mặc Cả',
    words: [
      { id: 'sh_1', hanzi: '多少钱', pinyin: 'duōshǎo qián', vi: 'Bao nhiêu tiền' },
      { id: 'sh_2', hanzi: '太贵了', pinyin: 'tài guì le', vi: 'Đắt quá rồi' },
      { id: 'sh_3', hanzi: '便宜一点', pinyin: 'piányi yīdiǎn', vi: 'Bớt chút đi' },
      { id: 'sh_4', hanzi: '打折', pinyin: 'dǎzhé', vi: 'Giảm giá' },
      { id: 'sh_5', hanzi: '衣服', pinyin: 'yīfu', vi: 'Quần áo' },
      { id: 'sh_6', hanzi: '试衣间', pinyin: 'shìyījiān', vi: 'Phòng thử đồ' },
      { id: 'sh_7', hanzi: '微信支付', pinyin: 'Wēixìn zhīfù', vi: 'WeChat Pay' },
      { id: 'sh_8', hanzi: '支付宝', pinyin: 'Zhīfùbǎo', vi: 'Alipay' },
      { id: 'sh_9', hanzi: '现金', pinyin: 'xiànjīn', vi: 'Tiền mặt' },
      { id: 'sh_10', hanzi: '刷卡', pinyin: 'shuākǎ', vi: 'Quẹt thẻ' },
      { id: 'sh_11', hanzi: '一斤', pinyin: 'yī jīn', vi: 'Một cân 500g' },
      { id: 'sh_12', hanzi: '发票', pinyin: 'fāpiào', vi: 'Hóa đơn' },
    ]
  },
  {
    id: 'work_business',
    name: '💼 Công Sở & Đàm Phán',
    words: [
      { id: 'wk_1', hanzi: '经理', pinyin: 'jīnglǐ', vi: 'Giám đốc / Quản lý' },
      { id: 'wk_2', hanzi: '同事', pinyin: 'tóngshì', vi: 'Đồng nghiệp' },
      { id: 'wk_3', hanzi: '开会', pinyin: 'kāihuì', vi: 'Họp hành' },
      { id: 'wk_4', hanzi: '合同', pinyin: 'hétong', vi: 'Hợp đồng' },
      { id: 'wk_5', hanzi: '加班', pinyin: 'jiābān', vi: 'Tăng ca' },
      { id: 'wk_6', hanzi: '工资', pinyin: 'gōngzī', vi: 'Tiền lương' },
      { id: 'wk_7', hanzi: '面试', pinyin: 'miànshì', vi: 'Phỏng vấn' },
      { id: 'wk_8', hanzi: '发邮件', pinyin: 'fā yóujiàn', vi: 'Gửi email' },
      { id: 'wk_9', hanzi: '项目', pinyin: 'xiàngmù', vi: 'Dự án' },
      { id: 'wk_10', hanzi: '客户', pinyin: 'kèhù', vi: 'Khách hàng' },
      { id: 'wk_11', hanzi: '出差', pinyin: 'chūchāi', vi: 'Đi công tác' },
      { id: 'wk_12', hanzi: '成功', pinyin: 'chénggōng', vi: 'Thành công' },
    ]
  },
  {
    id: 'health_hospital',
    name: '🏥 Sức Khỏe & Y Tế',
    words: [
      { id: 'hl_1', hanzi: '生病', pinyin: 'shēngbìng', vi: 'Bị ốm / Bệnh' },
      { id: 'hl_2', hanzi: '发烧', pinyin: 'fāshāo', vi: 'Bị sốt' },
      { id: 'hl_3', hanzi: '头疼', pinyin: 'tóuténg', vi: 'Đau đầu' },
      { id: 'hl_4', hanzi: '感冒', pinyin: 'gǎnmào', vi: 'Cảm cúm' },
      { id: 'hl_5', hanzi: '医生', pinyin: 'yīshēng', vi: 'Bác sĩ' },
      { id: 'hl_6', hanzi: '吃药', pinyin: 'chī yào', vi: 'Uống thuốc' },
      { id: 'hl_7', hanzi: '药店', pinyin: 'yàodiàn', vi: 'Hiệu thuốc' },
      { id: 'hl_8', hanzi: '打针', pinyin: 'dǎzhēn', vi: 'Tiêm thuốc' },
      { id: 'hl_9', hanzi: '检查', pinyin: 'jiǎnchá', vi: 'Khám sức khỏe' },
      { id: 'hl_10', hanzi: '身体', pinyin: 'shēntǐ', vi: 'Cơ thể' },
      { id: 'hl_11', hanzi: '休息', pinyin: 'xiūxi', vi: 'Nghỉ ngơi' },
      { id: 'hl_12', hanzi: '舒服', pinyin: 'shūfu', vi: 'Dễ chịu / Khỏe' },
    ]
  },
  {
    id: 'family_life',
    name: '🏠 Gia Đình & Đời Sống',
    words: [
      { id: 'fm_1', hanzi: '爸爸', pinyin: 'bàba', vi: 'Bố / Ba' },
      { id: 'fm_2', hanzi: '妈妈', pinyin: 'māma', vi: 'Mẹ' },
      { id: 'fm_3', hanzi: '爷爷', pinyin: 'yéye', vi: 'Ông nội' },
      { id: 'fm_4', hanzi: '奶奶', pinyin: 'nǎinai', vi: 'Bà nội' },
      { id: 'fm_5', hanzi: '做饭', pinyin: 'zuòfàn', vi: 'Nấu ăn' },
      { id: 'fm_6', hanzi: '洗衣服', pinyin: 'xǐ yīfu', vi: 'Giặt giũ' },
      { id: 'fm_7', hanzi: '起床', pinyin: 'qǐchuáng', vi: 'Thức dậy' },
      { id: 'fm_8', hanzi: '睡觉', pinyin: 'shuìjiào', vi: 'Đi ngủ' },
      { id: 'fm_9', hanzi: '周末', pinyin: 'zhōumò', vi: 'Cuối tuần' },
      { id: 'fm_10', hanzi: '超市', pinyin: 'chāoshì', vi: 'Siêu thị' },
      { id: 'fm_11', hanzi: '邻居', pinyin: 'línjū', vi: 'Hàng xóm' },
      { id: 'fm_12', hanzi: '幸福', pinyin: 'xìngfú', vi: 'Hạnh phúc' },
    ]
  },
  {
    id: 'school_study',
    name: '🎓 Trường Học & Học HSK',
    words: [
      { id: 'sc_1', hanzi: '老师', pinyin: 'lǎoshī', vi: 'Thầy cô' },
      { id: 'sc_2', hanzi: '同学', pinyin: 'tóngxué', vi: 'Bạn học' },
      { id: 'sc_3', hanzi: '汉语', pinyin: 'hànyǔ', vi: 'Tiếng Trung' },
      { id: 'sc_4', hanzi: '拼音', pinyin: 'pīnyīn', vi: 'Phiên âm Pinyin' },
      { id: 'sc_5', hanzi: '汉字', pinyin: 'hànzì', vi: 'Chữ Hán' },
      { id: 'sc_6', hanzi: '词汇', pinyin: 'cíhuì', vi: 'Từ vựng' },
      { id: 'sc_7', hanzi: '语法', pinyin: 'yǔfǎ', vi: 'Ngữ pháp' },
      { id: 'sc_8', hanzi: '考试', pinyin: 'kǎoshì', vi: 'Thi cử' },
      { id: 'sc_9', hanzi: '复习', pinyin: 'fùxí', vi: 'Ôn tập' },
      { id: 'sc_10', hanzi: '作业', pinyin: 'zuòyè', vi: 'Bài tập' },
      { id: 'sc_11', hanzi: '图书馆', pinyin: 'túshūguǎn', vi: 'Thư viện' },
      { id: 'sc_12', hanzi: '毕业', pinyin: 'bìyè', vi: 'Tốt nghiệp' },
    ]
  },
  {
    id: 'weather_emotion',
    name: '🌦️ Thời Tiết & Cảm Xúc',
    words: [
      { id: 'we_1', hanzi: '今天', pinyin: 'jīntiān', vi: 'Hôm nay' },
      { id: 'we_2', hanzi: '明天', pinyin: 'míngtiān', vi: 'Ngày mai' },
      { id: 'we_3', hanzi: '晴天', pinyin: 'qíngtiān', vi: 'Trời nắng' },
      { id: 'we_4', hanzi: '下雨', pinyin: 'xiàyǔ', vi: 'Trời mưa' },
      { id: 'we_5', hanzi: '很冷', pinyin: 'hěn lěng', vi: 'Rất lạnh' },
      { id: 'we_6', hanzi: '很热', pinyin: 'hěn rè', vi: 'Rất nóng' },
      { id: 'we_7', hanzi: '温暖', pinyin: 'wēnnuǎn', vi: 'Ấm áp' },
      { id: 'we_8', hanzi: '高兴', pinyin: 'gāoxìng', vi: 'Vui vẻ' },
      { id: 'we_9', hanzi: '难过', pinyin: 'nánguò', vi: 'Buồn bã' },
      { id: 'we_10', hanzi: '生气', pinyin: 'shēngqì', vi: 'Tức giận' },
      { id: 'we_11', hanzi: '担心', pinyin: 'dānxīn', vi: 'Lo lắng' },
      { id: 'we_12', hanzi: '希望', pinyin: 'xīwàng', vi: 'Hy vọng' },
    ]
  }
];

export default function MatchingGameView({ lesson, showPinyin, onGainXP }) {
  const allTopics = React.useMemo(() => {
    const list = [];
    if (lesson) {
      const lessonWords = [];
      if (lesson.vocabularies && lesson.vocabularies.length > 0) {
        lesson.vocabularies.forEach((v, idx) => {
          lessonWords.push({
            id: `cur_vocab_${idx}`,
            hanzi: v.hanzi,
            pinyin: v.pinyin || '',
            vi: v.vi || v.meaning || '',
          });
        });
      } else if (lesson.matchingWords && lesson.matchingWords.length > 0) {
        lesson.matchingWords.forEach((v, idx) => {
          lessonWords.push({
            id: `cur_match_${idx}`,
            hanzi: v.hanzi,
            pinyin: v.pinyin || '',
            vi: v.vi || v.meaning || '',
          });
        });
      }
      if (lessonWords.length >= 4) {
        list.push({
          id: 'current_lesson',
          name: `🎯 Từ Vựng Bài Đang Học (${lesson.title?.split(':')[0] || 'Bài ' + lesson.id})`,
          words: lessonWords,
        });
      }
    }
    return [...list, ...VOCAB_TOPICS];
  }, [lesson]);

  const [activeTopicId, setActiveTopicId] = useState(
    allTopics.length > 0 && allTopics[0].id === 'current_lesson' ? 'current_lesson' : 'food_drink'
  );
  const [roundNumber, setRoundNumber] = useState(1);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [timer, setTimer] = useState(0);
  const [score, setScore] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const activeTopic = allTopics.find((t) => t.id === activeTopicId) || allTopics[0];

  const initGame = () => {
    if (!activeTopic || !activeTopic.words || activeTopic.words.length === 0) return;
    const shuffledPool = [...activeTopic.words].sort(() => Math.random() - 0.5);
    const count = Math.min(6, shuffledPool.length);
    const selected6 = shuffledPool.slice(0, count);

    const list = [];
    selected6.forEach((w) => {
      list.push({
        pairId: w.id,
        type: 'zh',
        hanzi: w.hanzi,
        pinyin: w.pinyin,
      });
      list.push({
        pairId: w.id,
        type: 'vi',
        vi: w.vi,
      });
    });

    setCards(list.sort(() => Math.random() - 0.5));
    setSelectedCard(null);
    setIsWon(false);
    setTimer(0);
    setScore(0);
  };

  useEffect(() => {
    initGame();
  }, [activeTopicId, roundNumber]);

  useEffect(() => {
    if (isWon) return;
    const interval = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isWon]);

  const handleCardClick = (index) => {
    const clicked = cards[index];
    if (clicked.matched) return;

    if (clicked.type === 'zh') {
      speakText(clicked.hanzi);
    }

    if (!selectedCard) {
      setSelectedCard({ index, ...clicked });
      return;
    }

    if (selectedCard.index === index) return;

    // Check match
    if (selectedCard.pairId === clicked.pairId && selectedCard.type !== clicked.type) {
      const updated = [...cards];
      updated[selectedCard.index].matched = true;
      updated[index].matched = true;
      setCards(updated);
      setSelectedCard(null);
      setScore((s) => s + 20);

      const allMatched = updated.every((c) => c.matched);
      if (allMatched) {
        setIsWon(true);
        if (onGainXP) {
          onGainXP(30, `Thắng Game Ghép từ (${activeTopic.name})`);
        }
      }
    } else {
      setSelectedCard({ index, ...clicked, isError: true });
      setTimeout(() => {
        setSelectedCard(null);
      }, 500);
    }
  };

  return (
    <div className="space-y-6">
      {/* Game Mode Switcher Tab Bar */}
      <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-2">
        <button
          onClick={() => setGameMode('match_words')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
            gameMode === 'match_words'
              ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-400'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <span>🃏</span>
          <span>Chế độ 1: Nối Cặp Từ Vựng (Lật Thẻ Trí Nhớ)</span>
        </button>

        <button
          onClick={() => setGameMode('sentence_puzzle')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
            gameMode === 'sentence_puzzle'
              ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-400'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <span>🧩</span>
          <span>Chế độ 2: Xếp Thẻ Ghép Câu Giao Tiếp Thực Tế</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* MODE 1: NỐI CẶP TỪ VỰNG (MATCH WORDS) */}
      {/* ========================================================================= */}
      {gameMode === 'match_words' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-purple-50 to-white border border-purple-100 rounded-2xl p-6 flex justify-between items-center shadow-sm">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                <span>🃏</span> Lộ Trình Ghép Từ Vựng Đa Chủ Đề (配对)
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Mở rộng hàng trăm từ vựng theo 8 chủ đề thực tế đời sống. Ghép thẻ nhanh để nhận điểm thưởng!
              </p>
            </div>
            <button
              onClick={() => setRoundNumber((r) => r + 1)}
              className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold"
            >
              🔄 Đổi bộ 6 từ ngẫu nhiên
            </button>
          </div>

          {/* Topic Selector Chips */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                🎯 Chọn Chủ Đề Luyện Ghép Từ:
              </span>
              <span className="text-xs font-bold text-rose-600">
                Đang chọn: {activeTopic.name} ({activeTopic.words.length} từ)
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {allTopics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => {
                    setActiveTopicId(topic.id);
                    setRoundNumber(1);
                  }}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                    activeTopicId === topic.id
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                      : 'bg-slate-100 text-slate-700 hover:bg-rose-50 hover:text-rose-600'
                  }`}
                >
                  {topic.name}
                </button>
              ))}
            </div>
          </div>

          {/* Matching Game Arena */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 text-sm font-bold">
              <div className="text-orange-600">
                ⏱️ Thời gian: {Math.floor(timer / 60).toString().padStart(2, '0')}:
                {(timer % 60).toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-slate-500">
                Vòng {roundNumber} (Bộ 6 cặp thẻ từ vựng)
              </div>
              <div className="text-emerald-600">🏆 Điểm số: {score} Điểm</div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {cards.map((card, idx) => {
                const isSelected = selectedCard?.index === idx;
                const isError = isSelected && selectedCard.isError;
                return (
                  <div
                    key={idx}
                    onClick={() => handleCardClick(idx)}
                    className={`h-28 p-3 rounded-2xl border-2 flex flex-col items-center justify-center text-center cursor-pointer select-none transition-all ${
                      card.matched
                        ? 'border-emerald-300 bg-emerald-50 opacity-40 pointer-events-none scale-95'
                        : isError
                        ? 'border-red-500 bg-red-50'
                        : isSelected
                        ? 'border-rose-500 bg-rose-50 shadow-md ring-2 ring-rose-200'
                        : 'border-slate-200 bg-white hover:border-rose-300 hover:shadow-md'
                    }`}
                  >
                    {card.type === 'zh' ? (
                      <>
                        <span className="text-2xl font-bold text-rose-600 chinese-font">
                          {card.hanzi}
                        </span>
                        {showPinyin && (
                          <span className="text-xs text-slate-500 mt-1">{card.pinyin}</span>
                        )}
                      </>
                    ) : (
                      <span className="text-sm font-bold text-slate-800">{card.vi}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Victory modal card */}
          {isWon && (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <div className="text-4xl">🎉</div>
              <h3 className="text-xl font-bold text-emerald-800">Hoàn Thành Xuất Sắc!</h3>
              <p className="text-sm text-emerald-700">
                Bạn đã ghép đúng toàn bộ các từ trong chủ đề <strong>{activeTopic.name}</strong> trong{' '}
                <strong>{timer} giây</strong> (+{score} điểm)!
              </p>
              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={() => setRoundNumber((r) => r + 1)}
                  className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-semibold text-sm hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20"
                >
                  🔄 Chơi vòng tiếp theo (bộ 6 từ khác)
                </button>
              </div>
            </div>
          )}

          {/* Complete Topic Vocabulary Library Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  📖 Toàn Bộ Từ Vựng Chủ Đề: {activeTopic.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Bấm vào biểu tượng loa để nghe phát âm từng từ.</p>
              </div>
              <button
                onClick={() => setRoundNumber((r) => r + 1)}
                className="px-3 py-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-lg text-xs font-bold"
              >
                ▶ Ghép bộ từ này
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {activeTopic.words.map((w) => (
                <div
                  key={w.id}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:bg-white hover:border-rose-300 transition-all"
                >
                  <div>
                    <div className="text-lg font-bold text-rose-600 chinese-font leading-tight">{w.hanzi}</div>
                    {showPinyin && <div className="text-xs text-amber-600 font-medium">{w.pinyin}</div>}
                    <div className="text-xs text-slate-700 font-medium">{w.vi}</div>
                  </div>
                  <button
                    onClick={() => speakText(w.hanzi)}
                    className="w-8 h-8 rounded-full bg-white border border-slate-200 hover:bg-rose-500 hover:text-white flex items-center justify-center text-xs transition-all shadow-sm"
                  >
                    🔊
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 2: ĐỐ VUI XẾP THẺ GHÉP CÂU GIAO TIẾP THỰC TẾ (SENTENCE PUZZLE) */}
      {/* ========================================================================= */}
      {gameMode === 'sentence_puzzle' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 rounded-3xl p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧩</span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Trò Chơi Xếp Thẻ Ghép Câu Giao Tiếp Thực Tế (组词造句)
                </h2>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Sắp xếp các thẻ từ xáo trộn thành câu giao tiếp chuẩn xác theo ngữ pháp SVO tiếng Trung.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-blue-600 text-white font-bold text-xs shadow-xs">
                🏆 Điểm Puzzle: {puzzleScore} XP
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 font-bold text-xs">
                Câu {activePuzzleIdx + 1} / {sentencePuzzles.length}
              </span>
            </div>
          </div>

          {/* Puzzle Category Selector */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Chọn câu đố theo ngữ cảnh giao tiếp:
            </span>
            <div className="flex flex-wrap gap-2">
              {sentencePuzzles.map((puz, idx) => (
                <button
                  key={puz.id || idx}
                  onClick={() => {
                    setActivePuzzleIdx(idx);
                    setSelectedPuzzleTokens([]);
                    setPuzzleFeedback(null);
                    setShowHint(false);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    activePuzzleIdx === idx
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>Câu {idx + 1}: {puz.topic || 'Giao tiếp'}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Puzzle Main Arena */}
          {currentPuzzle && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              {/* Question prompt */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 font-bold text-base sm:text-lg flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">🎯</span>
                  <span>{currentPuzzle.promptVi}</span>
                </div>
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="px-3 py-1 rounded-xl bg-amber-200/70 hover:bg-amber-200 text-amber-900 text-xs font-bold transition-all flex-shrink-0"
                >
                  💡 {showHint ? 'Ẩn gợi ý' : 'Xem gợi ý'}
                </button>
              </div>

              {/* Hint Box */}
              {showHint && (
                <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-900 space-y-1">
                  <div><strong>Pinyin tham khảo:</strong> {currentPuzzle.pinyin}</div>
                  <div><strong>Từ cần xếp:</strong> {currentPuzzle.solution?.join(' + ')}</div>
                </div>
              )}

              {/* User Built Sentence Dropzone */}
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Câu bạn đang xếp (Bấm thẻ để gỡ ra):</span>
                  <span className="text-slate-400 font-normal">
                    {selectedPuzzleTokens.length} / {currentPuzzle.tokens.length} từ
                  </span>
                </div>
                <div className="min-h-[80px] p-4 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/70 flex flex-wrap items-center gap-2.5">
                  {selectedPuzzleTokens.length === 0 ? (
                    <span className="text-xs sm:text-sm text-slate-400 italic">
                      Chạm vào các thẻ từ bên dưới để lắp ghép câu giao tiếp...
                    </span>
                  ) : (
                    selectedPuzzleTokens.map((token, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleRemovePuzzleToken(idx)}
                        className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold chinese-font text-lg shadow-sm hover:bg-rose-600 transition-all active:scale-95 flex items-center gap-1.5"
                        title="Bấm để bỏ từ này ra khỏi câu"
                      >
                        <span>{token.text}</span>
                        <span className="text-xs text-slate-400 hover:text-white">✕</span>
                      </button>
                    ))
                  )}
                </div>
              </div>

              {/* Available Token Pool */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Kho thẻ từ khả dụng (Bấm để chọn):
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {currentPuzzle.tokens.map((token, originIdx) => {
                    const isUsed = selectedPuzzleTokens.some((t) => t.originIdx === originIdx);
                    return (
                      <button
                        key={originIdx}
                        disabled={isUsed}
                        onClick={() => handleSelectPuzzleToken(token, originIdx)}
                        className={`px-5 py-3 rounded-2xl font-bold chinese-font text-lg border transition-all ${
                          isUsed
                            ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed scale-95'
                            : 'bg-white hover:bg-rose-50 text-slate-800 border-slate-300 hover:border-rose-400 shadow-2xs active:scale-95'
                        }`}
                      >
                        {token}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons & Result Feedback */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={handleResetPuzzle}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold"
                >
                  🔄 Xếp lại từ đầu
                </button>

                <div className="flex items-center gap-3">
                  {puzzleFeedback === 'correct' && (
                    <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs sm:text-sm">
                      <span>🎉 Xuất sắc! Câu ghép hoàn toàn chính xác (+25 XP).</span>
                      <button
                        onClick={() => speakText(currentPuzzle.targetZh)}
                        className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1"
                      >
                        🔊 Nghe câu
                      </button>
                    </div>
                  )}

                  {puzzleFeedback === 'wrong' && (
                    <span className="text-rose-600 font-bold text-xs sm:text-sm">
                      ❌ Trật tự từ chưa đúng, hãy thử kiểm tra lại nhé!
                    </span>
                  )}

                  {puzzleFeedback === 'correct' ? (
                    <button
                      onClick={handleNextPuzzle}
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/30 flex items-center gap-1.5"
                    >
                      <span>Câu đố tiếp theo</span>
                      <span>▶</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleCheckPuzzle}
                      disabled={selectedPuzzleTokens.length === 0}
                      className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 disabled:opacity-40 text-white font-bold text-xs sm:text-sm shadow-md shadow-rose-600/30"
                    >
                      Kiểm Tra Đáp Án
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

