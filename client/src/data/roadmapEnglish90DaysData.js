/**
 * LỘ TRÌNH 90 NGÀY NGHE NÓI TIẾNG ANH GIAO TIẾP THỰC CHIẾN - THIẾT KẾ CHỐNG NẢN
 * (90-Day Spoken English Roadmap for Everyday & Professional Communication)
 *
 * Phương pháp:
 * - 15 phút mỗi ngày (Micro-learning)
 * - 3 bước: Active Listening (Nghe ngấm) -> Shadowing (Nhại giọng chuẩn bản ngữ) -> Reflex Drill (Phản xạ tình huống)
 * - Ưu tiên khẩu ngữ & IPA phiên âm quốc tế, không học ngữ pháp khô khan
 * - Chia làm 3 Tháng (Stages) x 4 Tuần x 30 Ngày
 */

export const ROADMAP_ENGLISH_STAGES = [
  {
    id: 1,
    name: 'Tháng 1: Bật Âm Chuẩn IPA & Sinh Tồn Quốc Tế',
    subtitle: 'Ngày 1 - 30 • 150 mẫu câu khẩu ngữ sống còn',
    badge: 'Căn bản sinh tồn',
    color: 'indigo',
    gradient: 'from-blue-600 via-indigo-600 to-violet-600',
    description: 'Chinh phục bảng ngữ âm IPA, ngữ điệu chuẩn Mỹ/Anh, tự tin chào hỏi, giới thiệu bản thân, số đếm, gọi cà phê và hỏi đường cơ bản.',
    mindset: 'Mục tiêu: Bật âm to, tròn vành rõ chữ, nhại giọng chuẩn 15 phút mỗi ngày. Bỏ qua sợ sai ngữ pháp!',
    weeks: [
      { week: 1, title: 'Tuần 1: Ngữ âm IPA, Chào hỏi & Xã giao thường nhật', days: [1, 2, 3, 4, 5, 6, 7] },
      { week: 2, title: 'Tuần 2: Giới thiệu bản thân, Nghề nghiệp & Sở thích', days: [8, 9, 10, 11, 12, 13, 14] },
      { week: 3, title: 'Tuần 3: Số đếm, Giá cả, Mua sắm & Quán cà phê', days: [15, 16, 17, 18, 19, 20, 21] },
      { week: 4, title: 'Tuần 4: Hỏi đường, Phương tiện di chuyển & Thời gian', days: [22, 23, 24, 25, 26, 27, 28, 29, 30] },
    ]
  },
  {
    id: 2,
    name: 'Tháng 2: Phản Xạ Đời Sống & Nối Câu Tự Nhiên',
    subtitle: 'Ngày 31 - 60 • 300 mẫu câu đời sống thực tế',
    badge: 'Thực chiến đời sống',
    color: 'emerald',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    description: 'Phản xạ gọi món nhà hàng Âu Mỹ, đi Uber/Grab, đi tàu điện ngầm, mặc cả mua sắm, diễn tả cảm xúc và hẹn hò bạn bè quốc tế.',
    mindset: 'Mục tiêu: Bật câu trong 2 giây bằng tiếng Anh mà không cần dịch thầm từ tiếng Việt trong đầu.',
    weeks: [
      { week: 5, title: 'Tuần 5: Gọi món, Ẩm thực phương Tây & Thưởng thức đồ uống', days: [31, 32, 33, 34, 35, 36, 37] },
      { week: 6, title: 'Tuần 6: Bắt taxi, Xe buýt, Tàu điện ngầm & Di chuyển sân bay', days: [38, 39, 40, 41, 42, 43, 44] },
      { week: 7, title: 'Tuần 7: Mua sắm, Size đồ, Trả giá & Đổi trả hàng', days: [45, 46, 47, 48, 49, 50, 51] },
      { week: 8, title: 'Tuần 8: Hẹn hò, Thời tiết, Tâm trạng & Bày tỏ cảm xúc', days: [52, 53, 54, 55, 56, 57, 58, 59, 60] },
    ]
  },
  {
    id: 3,
    name: 'Tháng 3: Giao Tiếp Chuyên Nghiệp & Tự Tin Toàn Cầu',
    subtitle: 'Ngày 61 - 90 • Xử lý tình huống & Hội thoại chuyên sâu',
    badge: 'Tự tin độc lập',
    color: 'purple',
    gradient: 'from-purple-600 via-fuchsia-600 to-pink-600',
    description: 'Check-in khách sạn, thuê phòng, đi khám bệnh, giao tiếp công sở, email, gọi điện thoại và kết nối mạng lưới quốc tế.',
    mindset: 'Mục tiêu: Tự tin trò chuyện với người nước ngoài và đồng nghiệp quốc tế, làm chủ phong thái!',
    weeks: [
      { week: 9, title: 'Tuần 9: Khách sạn, Thuê căn hộ & Xử lý sự cố du lịch', days: [61, 62, 63, 64, 65, 66, 67] },
      { week: 10, title: 'Tuần 10: Sức khỏe, Nhà thuốc, Đi khám bệnh & Cấp cứu', days: [68, 69, 70, 71, 72, 73, 74] },
      { week: 11, title: 'Tuần 11: Môi trường công sở, Gọi điện thoại & Họp nhanh', days: [75, 76, 77, 78, 79, 80, 81] },
      { week: 12, title: 'Tuần 12: Đàm phán, Small talk xã giao & Tổng kết bứt phá 90 ngày', days: [82, 83, 84, 85, 86, 87, 88, 89, 90] },
    ]
  }
];

export const ANTI_BURNOUT_ENGLISH_TIPS = [
  {
    title: 'Quy tắc 15 phút mỗi ngày (The 15-Minute Habit)',
    desc: 'Luyện 15 phút đều đặn mỗi ngày giúp não bộ hình thành đường mòn phản xạ ngôn ngữ nhanh hơn 10 lần việc dồn 3 tiếng vào cuối tuần.',
    icon: 'clock',
  },
  {
    title: 'Đừng sợ sai ngữ pháp (Fluency Over Accuracy)',
    desc: 'Trong giao tiếp đời sống, người bản ngữ chỉ quan tâm bạn truyền đạt được ý tưởng. Hãy tự tin nói câu ngắn, bật âm rõ ràng trước khi trau chuốt cấu trúc phức tạp.',
    icon: 'shield',
  },
  {
    title: 'Phương pháp Shadowing (Nhại giọng bắt chước)',
    desc: 'Nghe người bản xứ nói và nhại lại ngay lập tức (về ngữ điệu, nhấn trọng âm, nối âm). Đây là bí quyết của các chuyên gia phiên dịch cabin.',
    icon: 'mic',
  },
  {
    title: 'Học từ vựng theo cụm từ (Learn in Chunks)',
    desc: 'Thay vì học từng từ đơn lẻ như "depend", hãy học cả cụm "It depends on you" (Tùy thuộc vào bạn) để phản xạ nói ngay một câu hoàn chỉnh.',
    icon: 'sparkles',
  },
  {
    title: 'Tự độc thoại và đóng vai (Self-Talk & Roleplay)',
    desc: 'Khi đứng trước gương hoặc đi dạo, hãy thử miêu tả những gì bạn đang làm bằng tiếng Anh hoặc trả lời câu hỏi tưởng tượng.',
    icon: 'smile',
  },
];

// 90 Structured English Days
export const ROADMAP_ENGLISH_DAYS_DATA = Array.from({ length: 90 }, (_, index) => {
  const day = index + 1;
  const stage = day <= 30 ? 1 : day <= 60 ? 2 : 3;
  const week = Math.min(12, Math.floor((day - 1) / 7) + 1);

  // Define thematic titles for each day
  const dailyThemes = [
    // Week 1
    'Chào hỏi thân thiện & Bắt chuyện tự nhiên (Hi, Hello, How are you?)',
    'Lời cảm ơn & Đối đáp lịch sự chuẩn bản xứ (Thanks a lot, You are welcome)',
    'Lời xin lỗi & Xử lý hiểu lầm khéo léo (I am sorry, No worries)',
    'Chào tạm biệt & Hẹn gặp lại (Catch you later, Take care)',
    'Hỏi thăm sức khỏe & Công việc gần đây (How is everything going?)',
    'Bắt chuyện người lạ & Lời khen tinh tế (Nice weather today, I love your style)',
    'Ôn tập & Bật âm phản xạ Tuần 1 (Weekly Review & Speed Drill)',

    // Week 2
    'Giới thiệu tên tuổi & Quê quán (I am from Vietnam, Born and raised)',
    'Nói về nghề nghiệp & Nơi làm việc (I work in IT, I run my own business)',
    'Giới thiệu gia đình & Người thân (I have two siblings, We are close)',
    'Chia sẻ sở thích & Đam mê lúc rảnh (In my free time, I am big on sports)',
    'Hỏi thông tin liên lạc (Can I get your number? Are you on WhatsApp?)',
    'Thói quen hàng ngày & Lịch trình (I usually get up at 6 AM, Hit the gym)',
    'Ôn tập & Thử thách ghép câu Tuần 2 (Weekly Challenge)',

    // Week 3
    'Số đếm & Đếm tiền tệ quốc tế (Dollars, Cents, Bills)',
    'Hỏi giá cả & Mặc cả nhẹ nhàng (How much is this? Any discount?)',
    'Gọi món tại quán Cà phê (Can I get an iced latte with oat milk?)',
    'Thanh toán hóa đơn & Tiền tip (Can I pay by card? Keep the change)',
    'Mua sắm quần áo & Hỏi kích cỡ (Do you have this in medium size?)',
    'Thử đồ tại phòng thay đồ (Can I try this on? Where is the fitting room?)',
    'Ôn tập phản xạ mua sắm Tuần 3 (Shopping Reflex Drill)',

    // Week 4
    'Hỏi đường cơ bản & Vị trí (Excuse me, where is the nearest station?)',
    'Chỉ dẫn rẽ trái, rẽ phải & Đi thẳng (Turn left, Go straight ahead)',
    'Hỏi và trả lời về thời gian (What time is it? Around noon)',
    'Đặt câu hỏi về lịch trình phương tiện (When is the next bus arriving?)',
    'Đi bộ & Nhận biết biển báo công cộng (Cross the street, Pedestrian lane)',
    'Đi taxi/Uber & Báo điểm đến (Could you drop me off near the mall?)',
    'Xử lý tình huống lạc đường (I am lost, could you help me out?)',
    'Tổng kết sinh tồn Tháng 1 - Bài 1',
    'Tổng kết sinh tồn Tháng 1 - Bài 2',
    'Đại hội phản xạ bứt phá 30 ngày Tháng 1 (Stage 1 Milestone Exam)',

    // Week 5 (Month 2 starts)
    'Đặt bàn nhà hàng phương Tây (I would like to book a table for two)',
    'Đọc thực đơn & Hỏi món đặc trưng (What do you recommend here?)',
    'Gọi đồ ăn kiêng & Lưu ý dị ứng (I am allergic to peanuts, Vegetarian)',
    'Yêu cầu thêm đồ dùng & Nước lọc (Could we get some extra napkins and water?)',
    'Khen ngợi món ăn ngon (The steak is cooked to perfection, Delicious)',
    'Phàn nàn món ăn khéo léo (Excuse me, this is not what I ordered)',
    'Chia tiền hóa đơn (Shall we split the bill? It is on me today)',

    // Week 6
    'Mua vé tàu điện ngầm & Thẻ tàu (Metro card, Top up, Transfer line)',
    'Di chuyển trên tàu & Thông báo ga (Next stop is Central Station)',
    'Bắt xe buýt & Hỏi trạm dừng (Does this bus go to downtown?)',
    'Đi xe công nghệ Grab/Uber (I am waiting outside, Looking for your car)',
    'Chuyến bay & Thủ tục sân bay (Terminal 2, Gate boarding, Window seat)',
    'Hành lý & Ký gửi (Carry-on baggage, Overweight luggage)',
    'Ôn tập giao thông & Đi lại Tuần 6 (Commute Reflex Drill)',

    // Week 7
    'Săn hàng giảm giá & Khuyến mãi (Buy one get one free, Huge clearance)',
    'Đổi trả hàng & Hoàn tiền (I would like to return this, Keep receipt)',
    'Mua đồ điện tử & Hỏi bảo hành (Does it come with international warranty?)',
    'Mua sắm trực tuyến & Nhận bưu phẩm (Online order, Package delivery, Tracking)',
    'Đánh giá sản phẩm & Viết review (Five stars, Excellent build quality)',
    'So sánh hai món đồ (This one feels much more durable than that)',
    'Ôn tập kỹ năng mua sắm Tuần 7 (Shopping Mastery)',

    // Week 8
    'Hẹn bạn đi chơi cuối tuần (Are you free this Saturday? Let us hang out)',
    'Bàn luận về thời tiết (It is pouring outside, Chilly evening)',
    'Chia sẻ tâm trạng & Cảm xúc (I feel overwhelmed, Feeling great today)',
    'Động viên & An ủi người khác (Keep your chin up, Everything will be fine)',
    'Kể về một chuyến du lịch (I went on a road trip, Breathtaking view)',
    'Nói về bộ phim & Âm nhạc yêu thích (Have you seen the new movie? Catchy tune)',
    'Hẹn giờ giấc & Hủy lịch hẹn khéo léo (Something came up, Can we reschedule?)',
    'Tổng hợp phản xạ đời sống Tháng 2 - Bài 1',
    'Tổng hợp phản xạ đời sống Tháng 2 - Bài 2',
    'Bứt phá phản xạ 60 ngày Tháng 2 (Stage 2 Milestone Exam)',

    // Week 9 (Month 3 starts)
    'Check-in khách sạn (I have a reservation under the name John)',
    'Yêu cầu tiện ích khách sạn (Extra pillows, Fast Wi-Fi password)',
    'Báo sự cố phòng khách sạn (The AC is leaking, Hot water is not working)',
    'Hỏi về dịch vụ bữa sáng & Check-out (Is breakfast included? Late check-out)',
    'Thuê phòng trọ & Ký hợp đồng thuê (Monthly rent, Security deposit, Lease)',
    'Giao lưu với chủ nhà & Hàng xóm (Friendly neighbor, Rules of the house)',
    'Xử lý sự cố thất lạc đồ đạc (I lost my passport, Where is lost and found?)',

    // Week 10
    'Triệu chứng bệnh thường gặp (I have a sore throat, Terrible headache)',
    'Mua thuốc tại hiệu thuốc (Painkillers, Cough syrup, Antibiotics)',
    'Đặt lịch khám bác sĩ (I need an appointment with a physician)',
    'Tại phòng khám bác sĩ (How long have you had this fever? Deep breath)',
    'Bảo hiểm y tế & Chi phí khám (Health insurance coverage, Medical bill)',
    'Sức khỏe tinh thần & Tập luyện (Stress relief, Regular workout, Healthy diet)',
    'Ôn tập tình huống y tế & Sức khỏe Tuần 10 (Medical & Health Drill)',

    // Week 11
    'Ngày đầu nhận việc & Làm quen đồng nghiệp (Welcome aboard, Meet the team)',
    'Nghe và gọi điện thoại công việc (May I speak with Mr. Smith? Speaking)',
    'Để lại lời nhắn & Ghi chú (Could you take a message for her?)',
    'Hẹn họp nhóm & Gửi lời mời (Quick sync, Set up a Zoom call)',
    'Báo cáo tiến độ công việc (The project is on track, We hit our deadline)',
    'Thảo luận ý kiến trong buổi họp (From my perspective, I totally agree)',
    'Viết email công việc ngắn gọn (Please find attached, Looking forward)',

    // Week 12
    'Đàm phán giá cả & Hợp đồng cơ bản (Win-win solution, We can meet halfway)',
    'Nói chuyện xã giao Small talk trong tiệc (What brings you here? Fantastic event)',
    'Kể chuyện cá nhân thu hút (To make a long story short, It was hilarious)',
    'Giải quyết tranh chấp bất đồng nhã nhặn (I see your point, but let us consider)',
    'Nói về mục tiêu tương lai (My long-term goal is to lead an international team)',
    'Tự tin phỏng vấn tiếng Anh ngắn (Tell me about yourself, My strengths)',
    'Chia tay đồng nghiệp & Lời chúc tốt đẹp (It was a pleasure working with you)',
    'Tổng kết & Đánh giá năng lực nghe nói 90 ngày',
    'Lễ tốt nghiệp phản xạ tiếng Anh 90 ngày - Bài đọc truyền cảm hứng',
    'Chinh phục tự do ngôn ngữ toàn cầu - Tự tin giao tiếp suốt đời!',
  ];

  const title = dailyThemes[index] || `Ngày ${day}: Giao tiếp thực tế`;
  const focus = title.split(':')[1]?.trim() || title;

  return {
    day,
    stage,
    week,
    title: `Ngày ${day}: ${title}`,
    focus: focus,
    tip: ANTI_BURNOUT_ENGLISH_TIPS[(day - 1) % ANTI_BURNOUT_ENGLISH_TIPS.length].desc,
    wordsTarget: 12,
    sentencesTarget: 8,
  };
});
