/**
 * LỘ TRÌNH 90 NGÀY TIẾNG ANH GIAO TIẾP CÔNG SỞ, MARKETING & BOOKING
 * (Level A1 -> A2 -> B1 • Thiết kế chuyên biệt cho dân văn phòng & người mới bắt đầu)
 *
 * Phương pháp:
 * - Đi từ Level A1 (Từ vựng ngắn, dễ nhớ, thực chiến, không học từ đao to búa lớn)
 * - Tịnh tiến lên A2 (Xử lý booking khách sạn/vé máy bay, họp nhóm, chạy chiến dịch marketing cơ bản)
 * - Đạt mốc B1 (Thuyết trình ý tưởng, đàm phán hợp đồng, chốt booking lớn, xử lý khủng hoảng khách hàng)
 * - 15 phút mỗi ngày theo phương pháp Chunking (Ghép 2-3 cụm từ thành câu nói hoàn chỉnh)
 */

export const ROADMAP_ENGLISH_STAGES = [
  {
    id: 1,
    name: 'Tháng 1: Level A1 - Tiếng Anh Công Sở Căn Bản & Booking Nhập Môn',
    subtitle: 'Ngày 1 - 30 • Level A1/A1+ • Từ vựng ngắn, dễ phát âm, áp dụng ngay',
    badge: 'Level A1 Công Sở',
    color: 'indigo',
    gradient: 'from-blue-600 via-indigo-600 to-violet-600',
    description: 'Bắt đầu từ số 0 với từ vựng ngắn, đơn giản: Chào hỏi đồng nghiệp, máy tính, gửi email/file, gọi điện ngắn, đặt phòng họp & đặt bàn ăn tiếp khách.',
    mindset: 'Mục tiêu A1: Bật âm rõ ràng, học từ vựng ngắn gọn 3-6 chữ cái. Không sợ sai, ưu tiên nói câu ngắn thực dụng!',
    weeks: [
      { week: 1, title: 'Tuần 1: Chào hỏi công sở, Giới thiệu vị trí & Kết nối đồng nghiệp', days: [1, 2, 3, 4, 5, 6, 7] },
      { week: 2, title: 'Tuần 2: Thiết bị văn phòng, Giờ giấc & Lịch làm việc', days: [8, 9, 10, 11, 12, 13, 14] },
      { week: 3, title: 'Tuần 3: Booking Nhập Môn - Đặt phòng họp & Đặt bàn tiếp khách', days: [15, 16, 17, 18, 19, 20, 21] },
      { week: 4, title: 'Tuần 4: Nghe gọi điện thoại công việc & Chat tin nhắn văn phòng', days: [22, 23, 24, 25, 26, 27, 28, 29, 30] },
    ]
  },
  {
    id: 2,
    name: 'Tháng 2: Level A2 - Marketing Căn Bản, Họp Nhóm & Booking Chuyên Nghiệp',
    subtitle: 'Ngày 31 - 60 • Level A2/A2+ • Xử lý booking vé/khách sạn & Chạy chiến dịch',
    badge: 'Level A2 Marketing & Booking',
    color: 'emerald',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    description: 'Nâng vốn từ vựng vào nghiệp vụ thực tế: Chạy quảng cáo, khuyến mãi, booking vé máy bay & khách sạn công tác, họp nhóm báo cáo tiến độ và xử lý khiếu nại khách hàng.',
    mindset: 'Mục tiêu A2: Nối 2-3 cụm từ (Chunks) thành câu dài tự nhiên, phản xạ 2 giây trong môi trường làm việc.',
    weeks: [
      { week: 5, title: 'Tuần 5: Marketing Căn Bản - Khách hàng, Sản phẩm & Kênh quảng bá', days: [31, 32, 33, 34, 35, 36, 37] },
      { week: 6, title: 'Tuần 6: Booking Chuyên Nghiệp - Đặt vé máy bay & Khách sạn công tác', days: [38, 39, 40, 41, 42, 43, 44] },
      { week: 7, title: 'Tuần 7: Họp nhóm, Báo cáo tiến độ & Quản lý Deadline công việc', days: [45, 46, 47, 48, 49, 50, 51] },
      { week: 8, title: 'Tuần 8: Chăm sóc khách hàng (Customer Care) & Xử lý sự cố booking', days: [52, 53, 54, 55, 56, 57, 58, 59, 60] },
    ]
  },
  {
    id: 3,
    name: 'Tháng 3: Level B1 - Thuyết Trình Marketing, Đàm Phán & Chốt Deal Lớn',
    subtitle: 'Ngày 61 - 90 • Level B1 • Làm chủ đàm phán hợp đồng & Khách hàng VIP',
    badge: 'Level B1 Độc Lập',
    color: 'purple',
    gradient: 'from-purple-600 via-fuchsia-600 to-pink-600',
    description: 'Thuyết trình kế hoạch marketing, phân tích chỉ số ROI/Conversion, đàm phán giá cả chiết khấu, ký hợp đồng đối tác, xử lý khủng hoảng và chăm sóc khách hàng VIP.',
    mindset: 'Mục tiêu B1: Tự tin thuyết trình và đàm phán bằng tiếng Anh với đối tác nước ngoài, phong thái chuyên nghiệp độc lập!',
    weeks: [
      { week: 9, title: 'Tuần 9: Thuyết trình ý tưởng Marketing (Marketing Pitch & Strategy)', days: [61, 62, 63, 64, 65, 66, 67] },
      { week: 10, title: 'Tuần 10: Đàm phán giá cả, Chiết khấu đối tác & Ký hợp đồng lớn', days: [68, 69, 70, 71, 72, 73, 74] },
      { week: 11, title: 'Tuần 11: Xử lý khủng hoảng khách hàng, Bồi thường & Giữ chân khách', days: [75, 76, 77, 78, 79, 80, 81] },
      { week: 12, title: 'Tuần 12: Networking tiệc đối tác, Phỏng vấn & Tổng kết bứt phá 90 ngày', days: [82, 83, 84, 85, 86, 87, 88, 89, 90] },
    ]
  }
];

export const ANTI_BURNOUT_ENGLISH_TIPS = [
  {
    title: 'Học từ vựng ngắn trước (A1 First)',
    desc: 'Người mới bắt đầu chỉ cần học các từ 3-6 chữ cái (team, meet, plan, call, book, room). Đừng ép mình nhớ các từ học thuật phức tạp.',
    icon: 'smile',
  },
  {
    title: 'Nói theo cụm từ công sở (Chunking)',
    desc: 'Học cả cụm "Could you send me..." hay "I want to book..." để ghép trực tiếp vào công việc hàng ngày mà không phải đau đầu nghĩ ngữ pháp.',
    icon: 'sparkles',
  },
  {
    title: 'Tập nhại giọng 15 phút (Shadowing)',
    desc: 'Mỗi ngày mở đoạn hội thoại văn phòng lên và nhại giọng theo 3 lần. Tai nghe quen âm điệu thì miệng sẽ bật ra tự nhiên.',
    icon: 'mic',
  },
  {
    title: 'Áp dụng ngay vào công việc thực tế',
    desc: 'Học từ nào hãy thử gõ vào tin nhắn Slack, email hoặc nhẩm thử khi đặt phòng họp. Từ vựng gắn với công việc sẽ nhớ lâu gấp 5 lần.',
    icon: 'shield',
  },
  {
    title: 'Không sợ nói sai (Fluency First)',
    desc: 'Trong công việc, đối tác chỉ cần bạn truyền đạt đúng thông tin (giờ giấc, số lượng, file). Hãy tự tin mở miệng nói!',
    icon: 'clock',
  },
];

// 90 Structured English Workplace, Marketing & Booking Days
export const ROADMAP_ENGLISH_DAYS_DATA = Array.from({ length: 90 }, (_, index) => {
  const day = index + 1;
  const stage = day <= 30 ? 1 : day <= 60 ? 2 : 3;
  const week = Math.min(12, Math.floor((day - 1) / 7) + 1);

  // 90 Chuỗi chuyên đề công sở, Marketing & Booking đi từ A1 -> B1
  const dailyThemes = [
    // === THÁNG 1 (A1): CÔNG SỞ CĂN BẢN & BOOKING NHẬP MÔN ===
    // Tuần 1: Chào hỏi công sở, Giới thiệu vị trí & Kết nối đồng nghiệp
    'Chào hỏi buổi sáng tại công ty (Good morning team, How are you?)',
    'Giới thiệu phòng ban & Vị trí công việc (My name, My role, Marketing team)',
    'Cảm ơn sự giúp đỡ & Nhờ việc vặt văn phòng (Thanks for help, Could you print this?)',
    'Xin lỗi khi đến muộn hoặc quên việc (Sorry I am late, Traffic was bad)',
    'Rủ đồng nghiệp đi ăn trưa & Cà phê (Lunch time, Coffee break, Split bill)',
    'Tạm biệt cuối ngày & Chúc cuối tuần (See you Monday, Have a nice weekend)',
    'Ôn tập phản xạ công sở A1 Tuần 1 (Weekly Review & Speed Reflex)',

    // Tuần 2: Thiết bị văn phòng, Giờ giấc & Lịch làm việc
    'Máy tính, Wi-Fi & Đăng nhập hệ thống (Laptop, Wi-Fi password, Login link)',
    'Gửi file, Đính kèm tài liệu & Tải file (Check the file, Send PDF, Download)',
    'Xem giờ giấc, Lịch hẹn & Giờ làm việc (What time? 9 AM, Start on time)',
    'Đặt lịch họp nội bộ nhanh (Quick meeting, Meeting room, Are you free?)',
    'Xin phép nghỉ ốm, Về sớm & Nghỉ phép (Take a day off, Sick leave, Feel tired)',
    'Trò chuyện giải lao bên máy nước (Weather today, Busy week, Nice coffee)',
    'Ôn tập & Thử thách ghép câu văn phòng Tuần 2 (Office Review)',

    // Tuần 3: Booking Nhập Môn - Đặt phòng họp & Đặt bàn tiếp khách
    'Booking căn bản: Từ vựng cốt lõi của ngành Booking (Book, Reserve, Table, Seat, Guest)',
    'Đặt bàn ăn trưa / tối cho sếp & đối tác (Table for four, Quiet area, Window seat)',
    'Đặt phòng họp văn phòng & Thiết bị trình chiếu (Boardroom, Projector, Screen, Cable)',
    'Xác nhận mã booking & Gửi tin nhắn xác nhận (Booking code, Confirm SMS, Status)',
    'Thanh toán tiền cọc & Hóa đơn đặt chỗ (Pay deposit, Credit card, Bill, Receipt)',
    'Đổi giờ booking & Báo đến trễ 15 phút (Change time, 15 minutes late, Please hold table)',
    'Ôn tập quy trình Booking A1 Tuần 3 (Booking Reflex Drill)',

    // Tuần 4: Gọi điện thoại công việc & Chat tin nhắn văn phòng
    'Nhấc máy & Nghe cuộc gọi công việc (Hello speaking, Who is calling, Hold on)',
    'Nối máy cho người khác & Báo người bận (Transfer call, She is busy, Take message)',
    'Nhắn tin nhanh qua Slack / Teams / Zalo (Ping you, Noted, Got it, Reply soon)',
    'Viết Email ngắn gọn chào hỏi & Gửi file (Dear team, Please find attached, Best regards)',
    'Hỏi đường đến văn phòng đối tác (Where is the office? 5th floor, Lift, Near lobby)',
    'Đón khách tại sảnh lễ tân công ty (Welcome to our office, Please take a seat, Tea)',
    'Tổng kết sinh tồn công sở Tháng 1 - Bài 1',
    'Tổng kết sinh tồn công sở Tháng 1 - Bài 2',
    'Đại hội phản xạ A1 Tháng 1: Tự tin giao tiếp công sở & Booking cơ bản',

    // === THÁNG 2 (A2): MARKETING CĂN BẢN, HỌP NHÓM & BOOKING CHUYÊN NGHIỆP ===
    // Tuần 5: Marketing Căn Bản - Khách hàng, Sản phẩm & Kênh quảng bá
    'Khách hàng mục tiêu & Nhu cầu thị trường (Target customer, Market need, User demand)',
    'Sản phẩm, Dịch vụ & Điểm nổi bật (Product feature, Best service, Brand value)',
    'Kênh Social Media & Bài viết Content (Post on Facebook, Share video, Viral reach)',
    'Chương trình Khuyến mãi & Giảm giá (Special promo, Discount 20%, Gift voucher, Deal)',
    'Chạy quảng cáo cơ bản & Ngân sách (Run ads, Ad budget, Cost per click, Show results)',
    'Thu thập đánh giá & Phản hồi của khách (Customer review, Five stars, Feedback survey)',
    'Ôn tập phản xạ Marketing A2 Tuần 5 (Marketing Core Review)',

    // Tuần 6: Booking Chuyên Nghiệp - Đặt vé máy bay & Khách sạn công tác
    'Đặt vé máy bay đi công tác (Book flight, Round-trip, Window seat, Airline ticket)',
    'Đặt phòng khách sạn cho sếp / đoàn khách (Hotel reservation, Deluxe room, Breakfast included)',
    'Làm thủ tục Check-in / Check-out khách sạn (Check-in desk, Passport, Room keycard, Check-out bill)',
    'Yêu cầu nâng hạng phòng & Tiện ích thêm (Room upgrade, Extra towels, Airport shuttle)',
    'Đổi ngày booking & Hủy phòng hoàn tiền (Change date, Cancel booking, Refund policy, Fee)',
    'Đặt xe đưa đón sân bay & Thuê xe công vụ (Airport pickup, Driver contact, Flight number, Car plate)',
    'Ôn tập kịch bản Booking công tác Tuần 6 (Business Travel Mastery)',

    // Tuần 7: Họp nhóm, Báo cáo tiến độ & Quản lý Deadline
    'Mở đầu cuộc họp nhóm & Nêu nội dung (Meeting agenda, Main goal, Let us start, Share screen)',
    'Báo cáo tiến độ hoàn thành công việc (Progress update, Task status, On track, Complete)',
    'Nhắc nhở hạn chót & Ưu tiên công việc (Deadline tomorrow, Urgent task, High priority, ASAP)',
    'Đưa ra ý kiến & Đóng góp giải pháp (In my opinion, Good idea, Better solution, Suggest)',
    'Phân công nhiệm vụ cụ thể cho từng người (Assign task, Who will lead? Handle this, Teamwork)',
    'Tổng kết cuộc họp & Các bước tiếp theo (Meeting wrap-up, Action items, Next steps, Send notes)',
    'Ôn tập kỹ năng họp văn phòng A2 Tuần 7 (Team Meeting Drill)',

    // Tuần 8: Chăm sóc khách hàng (Customer Care) & Xử lý sự cố booking
    'Tiếp nhận yêu cầu & Lắng nghe khách hàng (Customer query, How can I assist? Check system)',
    'Giải thích chính sách booking & Bảng giá rõ ràng (Price list, Terms and conditions, VAT tax, Policy)',
    'Xử lý sự cố trùng lịch / Hết phòng (Overbooked issue, Sold out, Alternative room, Sincere apology)',
    'Xử lý khiếu nại chất lượng dịch vụ (Customer complaint, Fix problem, Manager assist, Resolve now)',
    'Báo cáo chỉ số Marketing tuần (Weekly report, Website traffic, Leads generated, Sales chart)',
    'Tương tác với đối tác nhà cung cấp dịch vụ (Vendor contact, Supplier order, Invoice request, Partner deal)',
    'Tổng kết phản xạ công sở Tháng 2 - Bài 1',
    'Tổng kết phản xạ công sở Tháng 2 - Bài 2',
    'Bứt phá phản xạ A2 Tháng 2: Làm chủ Marketing & Xử lý Booking mượt mà',

    // === THÁNG 3 (B1): THUYẾT TRÌNH MARKETING, ĐÀM PHÁN & CHỐT DEAL LỚN ===
    // Tuần 9: Thuyết trình ý tưởng Marketing (Marketing Pitch & Strategy)
    'Mở đầu bài thuyết trình chuyên nghiệp (Welcome everyone, Strategy presentation, Agenda overview)',
    'Phân tích khách hàng mục tiêu & Hành vi mua sắm (Audience persona, Consumer behavior, Buying journey)',
    'Trình bày chiến dịch Marketing Đa kênh (Omnichannel campaign, Social influencer, Creative concept)',
    'Phân tích chỉ số hiệu quả ROI & Tỷ lệ chuyển đổi (Conversion rate, Return on investment, Campaign analytics)',
    'Quản lý ngân sách tiếp thị (Marketing budget allocation, Estimated cost, Revenue forecast)',
    'Hỏi đáp & Trả lời phản biện trong buổi thuyết trình (Q&A session, Address questions, Professional clarification)',
    'Ôn tập Thuyết trình Marketing B1 Tuần 9 (Marketing Pitch Mastery)',

    // Tuần 10: Đàm phán giá cả, Chiết khấu đối tác & Ký hợp đồng lớn
    'Đàm phán giá cả & Chiết khấu số lượng lớn (Negotiate price, Bulk booking discount, Wholesale rate, Win-win)',
    'Soạn thảo & Thống nhất các điều khoản hợp đồng (Contract clauses, Terms of agreement, Scope of work)',
    'Quy định thanh toán & Xuất hóa đơn quốc tế (Payment schedule, Wire transfer, VAT invoice, Due date)',
    'Đặt cọc & Chính sách hủy hợp đồng lớn (Security deposit, Cancellation clause, Non-refundable terms)',
    'Chốt deal & Ký kết hợp đồng hợp tác (Close the deal, Sign contract, Strategic partnership, Handshake)',
    'Chăm sóc đối tác sau khi ký hợp đồng (Post-sale support, Client retention, Account manager check-in)',
    'Ôn tập Đàm phán & Chốt Deal B1 Tuần 10 (Deal Closing Drill)',

    // Tuần 11: Xử lý khủng hoảng khách hàng, Bồi thường & Giữ chân khách
    'Xử lý sự cố booking khẩn cấp ngoài giờ (Emergency crisis, Urgent escalation, 24/7 hotline support)',
    'Xoa dịu khách hàng giận dữ một cách khôn khéo (Empathy and patience, De-escalate anger, Sincere validation)',
    'Đề xuất gói bồi thường & Quà tặng giữ chân khách (Compensation offer, Complimentary service, Free voucher, Retain)',
    'Báo cáo tổng kết sự cố cho ban giám đốc (Incident report, Root-cause analysis, Corrective action, Prevent)',
    'Viết Email đối ngoại gửi khách hàng VIP (VIP client letter, Exclusive privileges, High-profile hospitality)',
    'Đánh giá hiệu suất nhân viên & Khen thưởng (Performance review, KPI achievements, Outstanding contribution, Bonus)',
    'Ôn tập Quản trị Khách hàng & Khủng hoảng Tuần 11 (Crisis Management Drill)',

    // Tuần 12: Networking tiệc đối tác, Phỏng vấn & Bứt phá B1
    'Giao tiếp Small Talk trong tiệc tiếp khách quốc tế (Business networking, Cocktail party, Exchange business cards)',
    'Kể câu chuyện thành công của thương hiệu (Brand storytelling, Company mission, Core values, Customer trust)',
    'Phỏng vấn công việc ngành Marketing & Booking (Job interview, Career strengths, Marketing experience, Track record)',
    'Đàm phán mức lương & Đãi ngộ công sở (Salary negotiation, Compensation package, Benefits, Offer letter)',
    'Nói về chiến lược phát triển tương lai (Future business outlook, Market expansion, Digital innovation, Vision)',
    'Viết email cảm ơn & Lời chúc tốt đẹp sau sự kiện (Thank-you note, Fruitful collaboration, Looking forward, Best regards)',
    'Tổng kết & Đánh giá năng lực nghe nói tiếng Anh 90 ngày',
    'Lễ tốt nghiệp phản xạ tiếng Anh công sở: Tự tin nói trước đám đông',
    'Chinh phục tự do ngôn ngữ công sở, marketing & booking: Tự tin làm việc với đối tác quốc tế!'
  ];

  const title = dailyThemes[index] || `Ngày ${day}: Tiếng Anh Giao Tiếp Công Sở`;
  const focus = title.split('(')[1]?.replace(')', '') || title;

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
