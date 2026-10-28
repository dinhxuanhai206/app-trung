import React, { useState, useEffect } from 'react';

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

export default function MatchingGameView({ showPinyin, onGainXP }) {
  const [activeTopicId, setActiveTopicId] = useState('food_drink');
  const [roundNumber, setRoundNumber] = useState(1);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [timer, setTimer] = useState(0);
  const [score, setScore] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const activeTopic = VOCAB_TOPICS.find((t) => t.id === activeTopicId) || VOCAB_TOPICS[0];

  const initGame = () => {
    const shuffledPool = [...activeTopic.words].sort(() => Math.random() - 0.5);
    const selected6 = shuffledPool.slice(0, 6);

    const list = [];
    selected6.forEach((w) => {
      list.push({
        pairId: w.id,
        type: 'zh',
        hanzi: w.hanzi,
        pinyin: w.pinyin,
        matched: false,
      });
      list.push({
        pairId: w.id,
        type: 'vi',
        vi: w.vi,
        matched: false,
      });
    });

    list.sort(() => Math.random() - 0.5);
    setCards(list);
    setSelectedCard(null);
    setTimer(0);
    setScore(0);
    setIsWon(false);
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

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      window.speechSynthesis.speak(u);
    }
  };

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
        onGainXP(30, `Thắng Game Ghép từ (${activeTopic.name})`);
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
      <div className="bg-gradient-to-r from-purple-50 to-white border border-purple-100 rounded-2xl p-6 flex justify-between items-center shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2.5">
            <span>🧩</span> Lộ Trình Ghép Từ Vựng Đa Chủ Đề (配对)
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
          {VOCAB_TOPICS.map((topic) => (
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
            const isError = isSelected && selectedCard?.isError;

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
  );
}
