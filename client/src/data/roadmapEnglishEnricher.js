/**
 * ROADMAP ENGLISH ENRICHER MODULE (LEVEL A1 -> A2 -> B1 CÔNG SỞ, MARKETING & BOOKING)
 *
 * Thiết kế chuẩn hóa cho dân văn phòng & người mới bắt đầu:
 * 1. 10 - 12 Từ vựng thực chiến mỗi ngày đi từ từ ngữ A1 ngắn gọn, dễ nhớ lên B1 chuyên nghiệp.
 * 2. 8 - 10 Câu khẩu ngữ công sở, marketing & booking (kèm IPA chuẩn, phân loại ngữ cảnh, bóc tách cấu trúc).
 * 3. Hội thoại Roleplay thực tế: Đồng nghiệp văn phòng, sếp & nhân viên, khách hàng & nhân viên booking.
 * 4. Bài đọc ngắn gọn, giàu tính ứng dụng thực tế.
 * 5. Đấu trường 4 Game ôn tập bám sát từ vựng trong ngày.
 */

export const DAILY_EN_VOCAB_MAP = {
  // === LEVEL A1: TUẦN 1 - CHÀO HỎI CÔNG SỞ, VỊ TRÍ & ĐỒNG NGHIỆP ===
  // NGÀY 1: Chào hỏi buổi sáng tại công ty
  1: [
    { word: 'Hi', ipa: '/haɪ/', vi: 'Chào thân mật', type: 'Chào hỏi', example: 'Hi everyone, good morning!' },
    { word: 'Hello', ipa: '/həˈloʊ/', vi: 'Xin chào', type: 'Chào hỏi', example: 'Hello! I am new here.' },
    { word: 'Good morning', ipa: '/ɡʊd ˈmɔːrnɪŋ/', vi: 'Chào buổi sáng', type: 'Chào hỏi', example: 'Good morning, team!' },
    { word: 'Team', ipa: '/tiːm/', vi: 'Đội ngũ, nhóm', type: 'Danh từ', example: 'Our marketing team is ready.' },
    { word: 'Office', ipa: '/ˈɔːfɪs/', vi: 'Văn phòng', type: 'Danh từ', example: 'Welcome to our new office!' },
    { word: 'Work', ipa: '/wɜːrk/', vi: 'Làm việc / Công việc', type: 'Danh/Động', example: 'Time to get to work.' },
    { word: 'Name', ipa: '/neɪm/', vi: 'Họ tên', type: 'Danh từ', example: 'My name is David.' },
    { word: 'Nice', ipa: '/naɪs/', vi: 'Tốt đẹp, vui vẻ', type: 'Tính từ', example: 'Nice to meet you all!' },
    { word: 'Meet', ipa: '/miːt/', vi: 'Gặp gỡ, làm quen', type: 'Động từ', example: 'Glad to meet you in person.' },
    { word: 'Help', ipa: '/help/', vi: 'Giúp đỡ', type: 'Danh/Động', example: 'Can you help me with this?' },
    { word: 'Start', ipa: '/stɑːrt/', vi: 'Bắt đầu', type: 'Động từ', example: 'We start work at 8:30 AM.' },
    { word: 'Today', ipa: '/təˈdeɪ/', vi: 'Hôm nay', type: 'Thời gian', example: 'Have a productive day today!' }
  ],

  // NGÀY 2: Giới thiệu phòng ban & Vị trí công việc
  2: [
    { word: 'Job', ipa: '/dʒɑːb/', vi: 'Công việc', type: 'Danh từ', example: 'I love my new job here.' },
    { word: 'Role', ipa: '/roʊl/', vi: 'Vai trò, vị trí', type: 'Danh từ', example: 'What is your current role?' },
    { word: 'Desk', ipa: '/desk/', vi: 'Bàn làm việc', type: 'Danh từ', example: 'This is my work desk.' },
    { word: 'Boss', ipa: '/bɔːs/', vi: 'Sếp, cấp trên', type: 'Danh từ', example: 'My boss is very friendly.' },
    { word: 'Colleague', ipa: '/ˈkɑːliːɡ/', vi: 'Đồng nghiệp', type: 'Danh từ', example: 'Say hi to your new colleague.' },
    { word: 'Staff', ipa: '/stæf/', vi: 'Nhân viên công ty', type: 'Danh từ', example: 'Our hotel staff is helpful.' },
    { word: 'Dept', ipa: '/dɪˈpɑːrtmənt/', vi: 'Phòng ban (Department)', type: 'Danh từ', example: 'I work in the Booking Dept.' },
    { word: 'Call', ipa: '/kɔːl/', vi: 'Cuộc gọi / Gọi điện', type: 'Danh/Động', example: 'I have a quick client call.' },
    { word: 'Email', ipa: '/ˈiːmeɪl/', vi: 'Thư điện tử', type: 'Danh/Động', example: 'Check your email inbox, please.' },
    { word: 'Manage', ipa: '/ˈmænɪdʒ/', vi: 'Quản lý, xử lý', type: 'Động từ', example: 'I manage customer bookings.' },
    { word: 'Join', ipa: '/dʒɔɪn/', vi: 'Tham gia, gia nhập', type: 'Động từ', example: 'I joined this company last week.' },
    { word: 'Seat', ipa: '/siːt/', vi: 'Chỗ ngồi', type: 'Danh từ', example: 'Take a seat over there.' }
  ],

  // NGÀY 3: Cảm ơn & Nhờ vả việc vặt văn phòng
  3: [
    { word: 'Thanks', ipa: '/θæŋks/', vi: 'Cảm ơn nhiều', type: 'Lịch sự', example: 'Thanks a lot for your help!' },
    { word: 'Please', ipa: '/pliːz/', vi: 'Làm ơn, xin vui lòng', type: 'Lịch sự', example: 'Send me the file, please.' },
    { word: 'Welcome', ipa: '/ˈwelkəm/', vi: 'Không có chi', type: 'Lịch sự', example: 'You are always welcome.' },
    { word: 'Easy', ipa: '/ˈiːzi/', vi: 'Dễ dàng, đơn giản', type: 'Tính từ', example: 'This booking tool is easy to use.' },
    { word: 'Quick', ipa: '/kwɪk/', vi: 'Nhanh chóng', type: 'Tính từ', example: 'Let us have a quick check.' },
    { word: 'Favor', ipa: '/ˈfeɪvər/', vi: 'Sự giúp đỡ, việc nhờ', type: 'Danh từ', example: 'Could you do me a small favor?' },
    { word: 'File', ipa: '/faɪl/', vi: 'Tệp tài liệu', type: 'Danh từ', example: 'I saved the file on Desktop.' },
    { word: 'Send', ipa: '/send/', vi: 'Gửi đi', type: 'Động từ', example: 'I will send it right now.' },
    { word: 'Print', ipa: '/prɪnt/', vi: 'In ấn', type: 'Động từ', example: 'Can you print two copies for me?' },
    { word: 'Copy', ipa: '/ˈkɑːpi/', vi: 'Bản sao / Sao chép', type: 'Danh/Động', example: 'Make a copy of this form.' },
    { word: 'Paper', ipa: '/ˈpeɪpər/', vi: 'Giấy in', type: 'Danh từ', example: 'The printer is out of paper.' },
    { word: 'Check', ipa: '/tʃek/', vi: 'Kiểm tra', type: 'Động từ', example: 'Please check the guest name.' }
  ],

  // NGÀY 4: Xin lỗi khi đến muộn hoặc quên việc
  4: [
    { word: 'Sorry', ipa: '/ˈsɑːri/', vi: 'Xin lỗi', type: 'Lịch sự', example: 'Sorry, I am a bit late.' },
    { word: 'Late', ipa: '/leɪt/', vi: 'Đến muộn, trễ', type: 'Tính từ', example: 'The traffic was heavy today.' },
    { word: 'Busy', ipa: '/ˈbɪzi/', vi: 'Bận rộn', type: 'Tính từ', example: 'I was busy with client calls.' },
    { word: 'Forget', ipa: '/fərˈɡet/', vi: 'Quên mất', type: 'Động từ', example: 'I forgot to attach the PDF.' },
    { word: 'Traffic', ipa: '/ˈtræfɪk/', vi: 'Giao thông, xe cộ', type: 'Danh từ', example: 'Heavy traffic on my way here.' },
    { word: 'Again', ipa: '/əˈɡen/', vi: 'Lại, lần nữa', type: 'Phó từ', example: 'It will not happen again.' },
    { word: 'Fix', ipa: '/fɪks/', vi: 'Sửa chữa, khắc phục', type: 'Động từ', example: 'I will fix this mistake right now.' },
    { word: 'Now', ipa: '/naʊ/', vi: 'Ngay bây giờ', type: 'Thời gian', example: 'Let me do it right now.' },
    { word: 'Fine', ipa: '/faɪn/', vi: 'Ổn, tốt', type: 'Tính từ', example: 'No problem, you are totally fine.' },
    { word: 'Mind', ipa: '/maɪnd/', vi: 'Bận tâm, để bụng', type: 'Động từ', example: 'Never mind, do not worry.' },
    { word: 'Worry', ipa: '/ˈwɜːri/', vi: 'Lo lắng', type: 'Động từ', example: 'No worries at all!' },
    { word: 'Note', ipa: '/noʊt/', vi: 'Ghi chú, lưu ý', type: 'Danh/Động', example: 'I made a note of your request.' }
  ],

  // NGÀY 5: Rủ đồng nghiệp đi ăn trưa & Cà phê
  5: [
    { word: 'Lunch', ipa: '/lʌntʃ/', vi: 'Bữa trưa', type: 'Danh từ', example: 'Are you ready for lunch?' },
    { word: 'Food', ipa: '/fuːd/', vi: 'Đồ ăn', type: 'Danh từ', example: 'The food here is delicious.' },
    { word: 'Cafe', ipa: '/kæˈfeɪ/', vi: 'Quán cà phê', type: 'Danh từ', example: 'Let us go to the cafe downstairs.' },
    { word: 'Coffee', ipa: '/ˈkɔːfi/', vi: 'Cà phê', type: 'Danh từ', example: 'I need an iced black coffee.' },
    { word: 'Break', ipa: '/breɪk/', vi: 'Nghỉ giải lao', type: 'Danh từ', example: 'Take a short 10-minute break.' },
    { word: 'Menu', ipa: '/ˈmenjuː/', vi: 'Thực đơn', type: 'Danh từ', example: 'Look at the lunch menu.' },
    { word: 'Eat', ipa: '/iːt/', vi: 'Ăn', type: 'Động từ', example: 'What do you want to eat?' },
    { word: 'Drink', ipa: '/drɪŋk/', vi: 'Đồ uống / Uống', type: 'Danh/Động', example: 'Get a cold drink.' },
    { word: 'Table', ipa: '/ˈteɪbl/', vi: 'Bàn ăn', type: 'Danh từ', example: 'Find a free table for four.' },
    { word: 'Pay', ipa: '/peɪ/', vi: 'Thanh toán, trả tiền', type: 'Động từ', example: 'I will pay for lunch today.' },
    { word: 'Split', ipa: '/splɪt/', vi: 'Chia đều tiền', type: 'Động từ', example: 'Let us split the bill evenly.' },
    { word: 'Bill', ipa: '/bɪl/', vi: 'Hóa đơn tính tiền', type: 'Danh từ', example: 'Can we get the bill, please?' }
  ],

  // NGÀY 6: Tạm biệt cuối ngày & Chúc cuối tuần
  6: [
    { word: 'Bye', ipa: '/baɪ/', vi: 'Tạm biệt', type: 'Tạm biệt', example: 'Bye, see you tomorrow!' },
    { word: 'Leave', ipa: '/liːv/', vi: 'Rời đi, ra về', type: 'Động từ', example: 'I am leaving the office now.' },
    { word: 'Home', ipa: '/hoʊm/', vi: 'Nhà', type: 'Danh từ', example: 'Drive safely on your way home.' },
    { word: 'Done', ipa: '/dʌn/', vi: 'Xong xuôi', type: 'Tính từ', example: 'All my tasks are done today.' },
    { word: 'Weekend', ipa: '/ˈwiːkend/', vi: 'Cuối tuần', type: 'Danh từ', example: 'Have a wonderful weekend!' },
    { word: 'Rest', ipa: '/rest/', vi: 'Nghỉ ngơi', type: 'Danh/Động', example: 'Get some good rest tonight.' },
    { word: 'Monday', ipa: '/ˈmʌndeɪ/', vi: 'Thứ Hai', type: 'Thời gian', example: 'See you on Monday morning.' },
    { word: 'Soon', ipa: '/suːn/', vi: 'Sớm', type: 'Phó từ', example: 'Talk to you very soon.' },
    { word: 'Relax', ipa: '/rɪˈlæks/', vi: 'Thư giãn', type: 'Động từ', example: 'Just relax and take it easy.' },
    { word: 'Fun', ipa: '/fʌn/', vi: 'Vui vẻ', type: 'Tính từ', example: 'Have fun with your family!' },
    { word: 'Enjoy', ipa: '/ɪnˈdʒɔɪ/', vi: 'Tận hưởng', type: 'Động từ', example: 'Enjoy your evening!' },
    { word: 'Safe', ipa: '/seɪf/', vi: 'An toàn, bình an', type: 'Tính từ', example: 'Stay safe and healthy.' }
  ],

  // NGÀY 7: Ôn tập phản xạ công sở A1 Tuần 1
  7: [
    { word: 'Review', ipa: '/rɪˈvjuː/', vi: 'Ôn tập, xem lại', type: 'Danh/Động', example: 'Let us review Week 1 phrases.' },
    { word: 'Speak', ipa: '/spiːk/', vi: 'Nói', type: 'Động từ', example: 'Speak clearly and confidently.' },
    { word: 'Listen', ipa: '/ˈlɪsn/', vi: 'Lắng nghe', type: 'Động từ', example: 'Listen to the audio sample.' },
    { word: 'Fast', ipa: '/fæst/', vi: 'Nhanh', type: 'Tính từ', example: 'Do not speak too fast.' },
    { word: 'Clear', ipa: '/klɪr/', vi: 'Rõ ràng', type: 'Tính từ', example: 'The message is very clear.' },
    { word: 'Word', ipa: '/wɜːrd/', vi: 'Từ vựng', type: 'Danh từ', example: 'Learn 12 practical words a day.' },
    { word: 'Sound', ipa: '/saʊnd/', vi: 'Âm thanh / Phát âm', type: 'Danh từ', example: 'Practice English vowel sounds.' },
    { word: 'Daily', ipa: '/ˈdeɪli/', vi: 'Hàng ngày', type: 'Tính/Phó', example: 'Practice 15 minutes daily.' },
    { word: 'Easy', ipa: '/ˈiːzi/', vi: 'Dễ dàng', type: 'Tính từ', example: 'Keep it easy and simple.' },
    { word: 'Try', ipa: '/traɪ/', vi: 'Cố gắng, thử', type: 'Động từ', example: 'Always try your best.' },
    { word: 'Best', ipa: '/best/', vi: 'Tốt nhất', type: 'Tính từ', example: 'All the best with your study!' },
    { word: 'Win', ipa: '/wɪn/', vi: 'Chiến thắng, đạt mục tiêu', type: 'Động từ', example: 'Small daily steps win big results.' }
  ],

  // === LEVEL A1: TUẦN 2 - THIẾT BỊ VĂN PHÒNG, FILE & GIỜ GIẤC ===
  // NGÀY 8: Máy tính, Wi-Fi & Đăng nhập hệ thống
  8: [
    { word: 'Laptop', ipa: '/ˈlæptɑːp/', vi: 'Máy tính xách tay', type: 'Danh từ', example: 'Bring your laptop to the meeting room.' },
    { word: 'Wi-Fi', ipa: '/ˈwaɪ faɪ/', vi: 'Mạng không dây', type: 'Danh từ', example: 'What is the guest Wi-Fi password?' },
    { word: 'Login', ipa: '/ˈlɔːɡɪn/', vi: 'Đăng nhập', type: 'Danh/Động', example: 'Login to your company account.' },
    { word: 'Password', ipa: '/ˈpæswɜːrd/', vi: 'Mật khẩu', type: 'Danh từ', example: 'Never share your work password.' },
    { word: 'Link', ipa: '/lɪŋk/', vi: 'Đường dẫn liên kết', type: 'Danh từ', example: 'Click on the booking link.' },
    { word: 'Screen', ipa: '/skriːn/', vi: 'Màn hình máy tính', type: 'Danh từ', example: 'Share your screen with the team.' },
    { word: 'Click', ipa: '/klɪk/', vi: 'Nhấp chuột', type: 'Động từ', example: 'Click the confirm button.' },
    { word: 'Mouse', ipa: '/maʊs/', vi: 'Chuột máy tính', type: 'Danh từ', example: 'My computer mouse is not working.' },
    { word: 'Tech', ipa: '/tek/', vi: 'Kỹ thuật / Công nghệ', type: 'Danh từ', example: 'Ask the IT tech team for help.' },
    { word: 'App', ipa: '/æp/', vi: 'Ứng dụng phần mềm', type: 'Danh từ', example: 'Download our booking app.' },
    { word: 'Web', ipa: '/web/', vi: 'Trang web', type: 'Danh từ', example: 'Check our official marketing web page.' },
    { word: 'Power', ipa: '/ˈpaʊər/', vi: 'Nguồn điện / Nút bật', type: 'Danh từ', example: 'Plug in the power cable.' }
  ],

  // NGÀY 9: Gửi file, Đính kèm tài liệu & Tải dữ liệu
  9: [
    { word: 'Doc', ipa: '/dɑːk/', vi: 'Tài liệu (Document)', type: 'Danh từ', example: 'Open this marketing plan doc.' },
    { word: 'PDF', ipa: '/ˌpiː diː ˈef/', vi: 'Định dạng PDF', type: 'Danh từ', example: 'Send me the contract in PDF.' },
    { word: 'Open', ipa: '/ˈoʊpən/', vi: 'Mở ra', type: 'Động từ', example: 'Open the attached spreadsheet.' },
    { word: 'Download', ipa: '/ˌdaʊnˈloʊd/', vi: 'Tải xuống', type: 'Động từ', example: 'Download the guest list file.' },
    { word: 'Save', ipa: '/seɪv/', vi: 'Lưu lại', type: 'Động từ', example: 'Save the changes before closing.' },
    { word: 'Share', ipa: '/ʃer/', vi: 'Chia sẻ', type: 'Động từ', example: 'Share the Google Drive folder.' },
    { word: 'Folder', ipa: '/ˈfoʊldər/', vi: 'Thư mục tệp tin', type: 'Danh từ', example: 'Create a new folder for campaign ads.' },
    { word: 'Drive', ipa: '/draɪv/', vi: 'Ổ lưu trữ đám mây', type: 'Danh từ', example: 'Upload all photos to Google Drive.' },
    { word: 'Size', ipa: '/saɪz/', vi: 'Dung lượng, kích cỡ', type: 'Danh từ', example: 'The file size is too big to email.' },
    { word: 'Attach', ipa: '/əˈtætʃ/', vi: 'Đính kèm', type: 'Động từ', example: 'Attach the booking receipt.' },
    { word: 'Format', ipa: '/ˈfɔːrmæt/', vi: 'Định dạng', type: 'Danh từ', example: 'Use the standard report format.' },
    { word: 'Draft', ipa: '/dræft/', vi: 'Bản thảo sơ bộ', type: 'Danh từ', example: 'This is the first marketing draft.' }
  ],

  // NGÀY 10: Xem giờ giấc, Lịch hẹn & Giờ làm việc
  10: [
    { word: 'Time', ipa: '/taɪm/', vi: 'Thời gian, giờ giấc', type: 'Danh từ', example: 'What time is our next meeting?' },
    { word: 'Clock', ipa: '/klɑːk/', vi: 'Đồng hồ', type: 'Danh từ', example: 'It is 9 o’clock sharp.' },
    { word: 'Hour', ipa: '/ˈaʊər/', vi: 'Giờ, tiếng đồng hồ', type: 'Danh từ', example: 'The meeting takes about an hour.' },
    { word: 'Minute', ipa: '/ˈmɪnɪt/', vi: 'Phút', type: 'Danh từ', example: 'Give me five minutes, please.' },
    { word: 'Early', ipa: '/ˈɜːrli/', vi: 'Sớm', type: 'Tính/Phó', example: 'He arrived 10 minutes early.' },
    { word: 'Ontime', ipa: '/ɑːn ˈtaɪm/', vi: 'Đúng giờ', type: 'Cụm từ', example: 'Please submit the report on time.' },
    { word: 'Shift', ipa: '/ʃɪft/', vi: 'Ca làm việc', type: 'Danh từ', example: 'I work the morning shift today.' },
    { word: 'End', ipa: '/end/', vi: 'Kết thúc', type: 'Danh/Động', example: 'Our shift ends at 5 PM.' },
    { word: 'Later', ipa: '/ˈleɪtər/', vi: 'Lát nữa, sau', type: 'Phó từ', example: 'See you in the cafe later.' },
    { word: 'Schedule', ipa: '/ˈskedʒuːl/', vi: 'Lịch trình làm việc', type: 'Danh từ', example: 'Check my work schedule.' },
    { word: 'Calendar', ipa: '/ˈkælɪndər/', vi: 'Lịch biểu', type: 'Danh từ', example: 'I put the event on Google Calendar.' },
    { word: 'Urgent', ipa: '/ˈɜːrdʒənt/', vi: 'Gấp, khẩn cấp', type: 'Tính từ', example: 'This is an urgent client request.' }
  ],

  // === LEVEL A1: TUẦN 3 - BOOKING CĂN BẢN (ĐẶT BÀN & PHÒNG HỌP) ===
  // NGÀY 15: Từ vựng cốt lõi của ngành Booking
  15: [
    { word: 'Book', ipa: '/bʊk/', vi: 'Đặt chỗ trước', type: 'Động từ', example: 'I would like to book a table for two.' },
    { word: 'Reserve', ipa: '/rɪˈzɜːrv/', vi: 'Đặt trước, giữ chỗ', type: 'Động từ', example: 'Can I reserve a room for tomorrow?' },
    { word: 'Place', ipa: '/pleɪs/', vi: 'Địa điểm, chỗ ngồi', type: 'Danh từ', example: 'This restaurant is a great place to meet.' },
    { word: 'Person', ipa: '/ˈpɜːrsn/', vi: 'Người, khách', type: 'Danh từ', example: 'We have four persons in our group.' },
    { word: 'Count', ipa: '/kaʊnt/', vi: 'Đếm, số lượng', type: 'Động từ', example: 'Count the total number of guests.' },
    { word: 'Guest', ipa: '/ɡest/', vi: 'Khách hàng, khách mời', type: 'Danh từ', example: 'The guest is waiting at the lobby.' },
    { word: 'Host', ipa: '/hoʊst/', vi: 'Chủ tiệc / Người đón tiếp', type: 'Danh từ', example: 'The host will seat you shortly.' },
    { word: 'Slot', ipa: '/slɑːt/', vi: 'Khung giờ đặt', type: 'Danh từ', example: 'Do you have an open time slot at 7 PM?' },
    { word: 'Available', ipa: '/əˈveɪləbl/', vi: 'Còn trống, có sẵn', type: 'Tính từ', example: 'Is the VIP room available tonight?' },
    { word: 'Booked', ipa: '/bʊkt/', vi: 'Đã có người đặt', type: 'Tính từ', example: 'All tables are fully booked.' },
    { word: 'Date', ipa: '/deɪt/', vi: 'Ngày tháng', type: 'Danh từ', example: 'What date are you looking for?' },
    { word: 'Name', ipa: '/neɪm/', vi: 'Tên người đặt', type: 'Danh từ', example: 'Under what name is the booking?' }
  ],

  // NGÀY 16: Đặt bàn ăn tiếp khách cho sếp & đối tác
  16: [
    { word: 'Dinner', ipa: '/ˈdɪnər/', vi: 'Bữa tối', type: 'Danh từ', example: 'Booking a dinner table for business clients.' },
    { word: 'Window', ipa: '/ˈwɪndoʊ/', vi: 'Cửa sổ', type: 'Danh từ', example: 'Can we get a table by the window?' },
    { word: 'Quiet', ipa: '/ˈkwaɪət/', vi: 'Yên tĩnh', type: 'Tính từ', example: 'We need a quiet corner to discuss work.' },
    { word: 'Chair', ipa: '/tʃer/', vi: 'Cái ghế', type: 'Danh từ', example: 'Please pull up an extra chair.' },
    { word: 'Order', ipa: '/ˈɔːrdər/', vi: 'Gọi món, đặt hàng', type: 'Danh/Động', example: 'Are you ready to order your drinks?' },
    { word: 'Arrive', ipa: '/əˈraɪv/', vi: 'Đến nơi', type: 'Động từ', example: 'Our guests will arrive around 6:30 PM.' },
    { word: 'Ready', ipa: '/ˈredi/', vi: 'Sẵn sàng', type: 'Tính từ', example: 'Your table is ready for you.' },
    { word: 'Smoke', ipa: '/smoʊk/', vi: 'Hút thuốc', type: 'Động từ', example: 'Non-smoking area, please.' },
    { word: 'Special', ipa: '/ˈspeʃl/', vi: 'Đặc biệt', type: 'Tính từ', example: 'Any special dietary requests?' },
    { word: 'View', ipa: '/vjuː/', vi: 'Tầm nhìn, cảnh quan', type: 'Danh từ', example: 'A rooftop table with a city view.' },
    { word: 'Hold', ipa: '/hoʊld/', vi: 'Giữ chỗ', type: 'Động từ', example: 'Please hold the table for 15 minutes.' },
    { word: 'Confirm', ipa: '/kənˈfɜːrm/', vi: 'Xác nhận', type: 'Động từ', example: 'I am calling to confirm our reservation.' }
  ],

  // NGÀY 17: Đặt phòng họp văn phòng & Thiết bị trình chiếu
  17: [
    { word: 'Boardroom', ipa: '/ˈbɔːrdruːm/', vi: 'Phòng họp lớn ban giám đốc', type: 'Danh từ', example: 'Book the boardroom for our client pitch.' },
    { word: 'Projector', ipa: '/prəˈdʒektər/', vi: 'Máy chiếu', type: 'Danh từ', example: 'Turn on the projector screen.' },
    { word: 'Mic', ipa: '/maɪk/', vi: 'Microphone thu âm', type: 'Danh từ', example: 'Test the mic before the meeting.' },
    { word: 'Cable', ipa: '/ˈkeɪbl/', vi: 'Dây cáp kết nối (HDMI)', type: 'Danh từ', example: 'Do you have an HDMI cable?' },
    { word: 'Setup', ipa: '/ˈsetʌp/', vi: 'Sắp xếp, chuẩn bị', type: 'Danh/Động', example: 'Set up the room for 10 people.' },
    { word: 'Clean', ipa: '/kliːn/', vi: 'Sạch sẽ / Dọn dẹp', type: 'Tính/Động', example: 'Make sure the meeting table is clean.' },
    { word: 'Need', ipa: '/niːd/', vi: 'Cần thiết', type: 'Động từ', example: 'We need two bottles of water.' },
    { word: 'Extra', ipa: '/ˈekstrə/', vi: 'Thêm, phụ trợ', type: 'Tính từ', example: 'Bring two extra chairs.' },
    { word: 'Test', ipa: '/test/', vi: 'Kiểm tra chạy thử', type: 'Danh/Động', example: 'Test the video sound first.' },
    { word: 'Use', ipa: '/juːz/', vi: 'Sử dụng', type: 'Động từ', example: 'Who is using Room 3 right now?' },
    { word: 'Remote', ipa: '/rɪˈmoʊt/', vi: 'Điều khiển từ xa', type: 'Danh từ', example: 'Where is the AC remote?' },
    { word: 'Air-con', ipa: '/ˈer kɑːn/', vi: 'Máy lạnh, điều hòa', type: 'Danh từ', example: 'Turn down the air-con, please.' }
  ]
};

// KHO TỪ VỰNG A2 & B1 CHO CÔNG SỞ, MARKETING & BOOKING (NGÀY 18 - 90)
export const ENGLISH_WORKPLACE_POOL = [
  // --- Nhóm Booking & Khách sạn / Du lịch (A2 -> B1) ---
  { word: 'Confirm', ipa: '/kənˈfɜːrm/', vi: 'Xác nhận đặt chỗ', type: 'Động từ', example: 'Please confirm your booking details.' },
  { word: 'Deposit', ipa: '/dɪˈpɑːzɪt/', vi: 'Tiền cọc giữ chỗ', type: 'Danh từ', example: 'A 20% deposit is required upon booking.' },
  { word: 'Receipt', ipa: '/rɪˈsiːt/', vi: 'Hóa đơn thanh toán', type: 'Danh từ', example: 'Here is your official receipt.' },
  { word: 'Reschedule', ipa: '/ˌriːˈskedʒuːl/', vi: 'Dời đổi lịch hẹn', type: 'Động từ', example: 'Can we reschedule our appointment to Friday?' },
  { word: 'Cancel', ipa: '/ˈkænsl/', vi: 'Hủy bỏ đặt chỗ', type: 'Động từ', example: 'I need to cancel my flight booking.' },
  { word: 'Refund', ipa: '/ˈriːfʌnd/', vi: 'Hoàn lại tiền', type: 'Danh/Động', example: 'You will receive a full refund within 3 days.' },
  { word: 'Policy', ipa: '/ˈpɑːləsi/', vi: 'Chính sách quy định', type: 'Danh từ', example: 'Check our hotel cancellation policy.' },
  { word: 'Flight', ipa: '/flaɪt/', vi: 'Chuyến bay', type: 'Danh từ', example: 'Book a round-trip flight to Singapore.' },
  { word: 'Airline', ipa: '/ˈerlaɪn/', vi: 'Hãng hàng không', type: 'Danh từ', example: 'Which airline do you prefer to fly with?' },
  { word: 'Hotel', ipa: '/hoʊˈtel/', vi: 'Khách sạn', type: 'Danh từ', example: 'We booked a 4-star business hotel.' },
  { word: 'Check-in', ipa: '/ˈtʃek ɪn/', vi: 'Thủ tục nhận phòng', type: 'Danh/Động', example: 'Hotel check-in starts at 2 PM.' },
  { word: 'Check-out', ipa: '/ˈtʃek aʊt/', vi: 'Thủ tục trả phòng', type: 'Danh/Động', example: 'Late check-out is available upon request.' },
  { word: 'Keycard', ipa: '/ˈkiːkɑːrd/', vi: 'Thẻ từ mở phòng', type: 'Danh từ', example: 'Here is your electronic room keycard.' },
  { word: 'Upgrade', ipa: '/ˌʌpˈɡreɪd/', vi: 'Nâng hạng phòng / dịch vụ', type: 'Danh/Động', example: 'We offer a complimentary room upgrade.' },
  { word: 'Suite', ipa: '/swiːt/', vi: 'Phòng VIP cao cấp', type: 'Danh từ', example: 'Book the executive suite for the CEO.' },
  { word: 'Shuttle', ipa: '/ˈʃʌtl/', vi: 'Xe đưa đón sân bay', type: 'Danh từ', example: 'The airport shuttle bus runs every 30 minutes.' },
  { word: 'Driver', ipa: '/ˈdraɪvər/', vi: 'Tài xế lái xe', type: 'Danh từ', example: 'Our driver will meet you at Terminal 2.' },
  { word: 'Overbooked', ipa: '/ˌoʊvərˈbʊkt/', vi: 'Bị đặt quá số chỗ', type: 'Tính từ', example: 'The hotel was unfortunately overbooked.' },
  { word: 'Alternative', ipa: '/ɔːlˈtɜːrnətɪv/', vi: 'Phương án thay thế', type: 'Danh/Tính', example: 'We provided an alternative 5-star hotel nearby.' },
  { word: 'Compensate', ipa: '/ˈkɑːmpənseɪt/', vi: 'Bồi thường tổn thất', type: 'Động từ', example: 'We will compensate you with a dinner voucher.' },
  { word: 'Voucher', ipa: '/ˈvaʊtʃər/', vi: 'Phiếu quà tặng / giảm giá', type: 'Danh từ', example: 'Use this $50 voucher for your next stay.' },
  { word: 'Luggage', ipa: '/ˈlʌɡɪdʒ/', vi: 'Hành lý mang theo', type: 'Danh từ', example: 'Leave your luggage at the front desk.' },
  { word: 'Passport', ipa: '/ˈpæspɔːrt/', vi: 'Hộ chiếu xuất nhập cảnh', type: 'Danh từ', example: 'Please show your passport at check-in.' },

  // --- Nhóm Marketing & Truyền thông số (A2 -> B1) ---
  { word: 'Target', ipa: '/ˈtɑːrɡɪt/', vi: 'Mục tiêu, nhắm đến', type: 'Danh/Động', example: 'We target young office workers aged 22 to 35.' },
  { word: 'Customer', ipa: '/ˈkʌstəmər/', vi: 'Khách hàng', type: 'Danh từ', example: 'Customer satisfaction is our top priority.' },
  { word: 'Client', ipa: '/ˈklaɪənt/', vi: 'Khách hàng đối tác', type: 'Danh từ', example: 'Meet with our corporate client.' },
  { word: 'Market', ipa: '/ˈmɑːrkɪt/', vi: 'Thị trường', type: 'Danh từ', example: 'Entering the international booking market.' },
  { word: 'Product', ipa: '/ˈprɑːdʌkt/', vi: 'Sản phẩm', type: 'Danh từ', example: 'Launch our new travel booking product.' },
  { word: 'Feature', ipa: '/ˈfiːtʃər/', vi: 'Tính năng nổi bật', type: 'Danh từ', example: 'What are the core features of this app?' },
  { word: 'Benefit', ipa: '/ˈbenɪfɪt/', vi: 'Lợi ích khách hàng nhận được', type: 'Danh từ', example: 'Highlight customer benefits in your copy.' },
  { word: 'Brand', ipa: '/brænd/', vi: 'Thương hiệu', type: 'Danh từ', example: 'Build brand awareness across social media.' },
  { word: 'Content', ipa: '/ˈkɑːntent/', vi: 'Nội dung tiếp thị', type: 'Danh từ', example: 'Create viral video content on TikTok.' },
  { word: 'Social', ipa: '/ˈsoʊʃl/', vi: 'Mạng xã hội (Social Media)', type: 'Tính từ', example: 'Run social media marketing campaigns.' },
  { word: 'Promo', ipa: '/ˈproʊmoʊ/', vi: 'Chương trình khuyến mãi', type: 'Danh từ', example: 'Our summer booking promo starts on Monday.' },
  { word: 'Discount', ipa: '/ˈdɪskaʊnt/', vi: 'Mức giảm giá', type: 'Danh từ', example: 'Get an early-bird 15% discount.' },
  { word: 'Campaign', ipa: '/kæmˈpeɪn/', vi: 'Chiến dịch tiếp thị', type: 'Danh từ', example: 'Launch an omnichannel marketing campaign.' },
  { word: 'Budget', ipa: '/ˈbʌdʒɪt/', vi: 'Ngân sách chi tiêu', type: 'Danh từ', example: 'Allocate a $5,000 monthly ad budget.' },
  { word: 'Click', ipa: '/klɪk/', vi: 'Lượt nhấp chuột', type: 'Danh từ', example: 'Track cost per click (CPC) on Google Ads.' },
  { word: 'Reach', ipa: '/riːtʃ/', vi: 'Độ tiếp cận người dùng', type: 'Danh/Động', example: 'The post reached over 50,000 viewers.' },
  { word: 'Lead', ipa: '/liːd/', vi: 'Khách hàng tiềm năng (Leads)', type: 'Danh từ', example: 'Generate 200 qualified sales leads this week.' },
  { word: 'Review', ipa: '/rɪˈvjuː/', vi: 'Đánh giá từ khách', type: 'Danh/Động', example: 'We received 5-star customer reviews.' },
  { word: 'Feedback', ipa: '/ˈfiːdbæk/', vi: 'Ý kiến phản hồi', type: 'Danh từ', example: 'Gather user feedback to improve the service.' },
  { word: 'Conversion', ipa: '/kənˈvɜːrʒn/', vi: 'Tỷ lệ chuyển đổi', type: 'Danh từ', example: 'Improve our website booking conversion rate.' },
  { word: 'ROI', ipa: '/ˌɑːr oʊ ˈaɪ/', vi: 'Tỷ suất hoàn vốn đầu tư', type: 'Thuật ngữ', example: 'Measure the ROI of our Facebook ad campaign.' },
  { word: 'Analytics', ipa: '/ˌænəˈlɪtɪks/', vi: 'Số liệu phân tích dữ liệu', type: 'Danh từ', example: 'Review Google Analytics traffic reports.' },
  { word: 'Traffic', ipa: '/ˈtræfɪk/', vi: 'Lượng truy cập trang web', type: 'Danh từ', example: 'Website traffic doubled this month.' },
  { word: 'Revenue', ipa: '/ˈrevənuː/', vi: 'Doanh thu thu về', type: 'Danh từ', example: 'Target $100K in quarterly revenue.' },
  { word: 'Influencer', ipa: '/ˈɪnfluənsər/', vi: 'Người có sức ảnh hưởng (KOL)', type: 'Danh từ', example: 'Partner with travel influencers.' },
  { word: 'Strategy', ipa: '/ˈstrætədʒi/', vi: 'Chiến lược phát triển', type: 'Danh từ', example: 'Present our digital marketing strategy.' },
  { word: 'Audience', ipa: '/ˈɔːdiəns/', vi: 'Khán giả / Tệp khách hàng', type: 'Danh từ', example: 'Engage our target audience effectively.' },
  { word: 'Creative', ipa: '/kriˈeɪtɪv/', vi: 'Ý tưởng sáng tạo / Ấn phẩm', type: 'Tính/Danh', example: 'Design new video creatives for ads.' },
  { word: 'Launch', ipa: '/lɔːntʃ/', vi: 'Ra mắt, khai trương', type: 'Động từ', example: 'Launch the mobile app in Q3.' },
  { word: 'Pitch', ipa: '/pɪtʃ/', vi: 'Bài thuyết trình chào hàng', type: 'Danh/Động', example: 'Pitch our booking solution to hotel partners.' },

  // --- Nhóm Quản trị Công sở & Đàm phán Hợp đồng (B1) ---
  { word: 'Agenda', ipa: '/əˈdʒendə/', vi: 'Chương trình nội dung họp', type: 'Danh từ', example: 'Send the meeting agenda beforehand.' },
  { word: 'Progress', ipa: '/ˈprɑːɡres/', vi: 'Tiến độ hoàn thành', type: 'Danh từ', example: 'The marketing project is making great progress.' },
  { word: 'Update', ipa: '/ˌʌpˈdeɪt/', vi: 'Cập nhật tình hình', type: 'Danh/Động', example: 'Give me a quick status update.' },
  { word: 'Status', ipa: '/ˈsteɪtəs/', vi: 'Tình trạng công việc', type: 'Danh từ', example: 'What is the current status of the contract?' },
  { word: 'Task', ipa: '/tæsk/', vi: 'Nhiệm vụ được giao', type: 'Danh từ', example: 'Complete all pending tasks before 5 PM.' },
  { word: 'Deadline', ipa: '/ˈdedlaɪn/', vi: 'Hạn chót hoàn thành', type: 'Danh từ', example: 'The campaign deadline is this Friday.' },
  { word: 'Priority', ipa: '/praɪˈɔːrəti/', vi: 'Việc ưu tiên hàng đầu', type: 'Danh từ', example: 'Resolving client complaints is top priority.' },
  { word: 'ASAP', ipa: '/ˌeɪ es eɪ ˈpiː/', vi: 'Càng sớm càng tốt (As soon as possible)', type: 'Viết tắt', example: 'Please send the invoice ASAP.' },
  { word: 'Opinion', ipa: '/əˈpɪnjən/', vi: 'Ý kiến cá nhân', type: 'Danh từ', example: 'In my opinion, option B is much safer.' },
  { word: 'Suggest', ipa: '/səɡˈdʒest/', vi: 'Gợi ý, đề xuất', type: 'Động từ', example: 'I suggest we negotiate with the hotel supplier.' },
  { word: 'Solution', ipa: '/səˈluːʃn/', vi: 'Giải pháp khắc phục', type: 'Danh từ', example: 'We found an immediate solution to the issue.' },
  { word: 'Assign', ipa: '/əˈsaɪn/', vi: 'Phân công trách nhiệm', type: 'Động từ', example: 'Assign this lead to our senior sales manager.' },
  { word: 'Follow-up', ipa: '/ˈfɑːloʊ ʌp/', vi: 'Theo dõi tiếp tục, nhắc lại', type: 'Danh/Động', example: 'Send a follow-up email to the partner.' },
  { word: 'Negotiate', ipa: '/nɪˈɡoʊʃieɪt/', vi: 'Đàm phán thương lượng', type: 'Động từ', example: 'Negotiate bulk booking discount rates.' },
  { word: 'Contract', ipa: '/ˈkɑːntrækt/', vi: 'Hợp đồng kinh tế', type: 'Danh từ', example: 'Sign the annual partnership contract.' },
  { word: 'Terms', ipa: '/tɜːrmz/', vi: 'Điều khoản hợp đồng', type: 'Danh từ', example: 'Agree on the payment terms and conditions.' },
  { word: 'Clause', ipa: '/klɔːz/', vi: 'Điều khoản nhỏ', type: 'Danh từ', example: 'Review the cancellation clause carefully.' },
  { word: 'Proposal', ipa: '/prəˈpoʊzl/', vi: 'Bản đề xuất kế hoạch', type: 'Danh từ', example: 'Submit our business proposal tomorrow.' },
  { word: 'Partnership', ipa: '/ˈpɑːrtnərʃɪp/', vi: 'Quan hệ đối tác hợp tác', type: 'Danh từ', example: 'Establish a fruitful strategic partnership.' },
  { word: 'Deal', ipa: '/diːl/', vi: 'Thương vụ, thỏa thuận', type: 'Danh từ', example: 'Successfully close the big booking deal.' },
  { word: 'Handshake', ipa: '/ˈhændʃeɪk/', vi: 'Cái bắt tay hợp tác', type: 'Danh từ', example: 'Seal the agreement with a firm handshake.' },
  { word: 'Empathy', ipa: '/ˈempəθi/', vi: 'Sự thấu cảm với khách', type: 'Danh từ', example: 'Listen to frustrated clients with genuine empathy.' },
  { word: 'Retain', ipa: '/rɪˈteɪn/', vi: 'Giữ chân khách hàng', type: 'Động từ', example: 'Retain valuable VIP corporate clients.' },
  { word: 'Crisis', ipa: '/ˈkraɪsɪs/', vi: 'Khủng hoảng, sự cố lớn', type: 'Danh từ', example: 'Manage the overbooking crisis professionally.' },
  { word: 'Networking', ipa: '/ˈnetwɜːrkɪŋ/', vi: 'Kết nối mạng lưới đối tác', type: 'Danh từ', example: 'Great business networking at the cocktail party.' },
  { word: 'Interview', ipa: '/ˈɪntərvjuː/', vi: 'Buổi phỏng vấn', type: 'Danh từ', example: 'Ace your marketing job interview.' },
  { word: 'Salary', ipa: '/ˈsæləri/', vi: 'Mức lương công sở', type: 'Danh từ', example: 'Discuss competitive salary and bonus packages.' },
  { word: 'Package', ipa: '/ˈpækɪdʒ/', vi: 'Gói đãi ngộ / Gói dịch vụ', type: 'Danh từ', example: 'We offer an attractive travel package.' }
];

/**
 * Trích xuất 10-12 từ vựng tiếng Anh theo từng ngày (1 - 90)
 * Bám sát lộ trình A1 -> A2 -> B1 cho công sở, marketing & booking
 */
export function getDailyEnglishVocabularies(dayNum) {
  // 1. Kiểm tra bộ từ vựng chuyên biệt cho giai đoạn A1 (Ngày 1 - 17)
  if (DAILY_EN_VOCAB_MAP[dayNum]) {
    return DAILY_EN_VOCAB_MAP[dayNum];
  }

  // 2. Cho các ngày tiếp theo: Trích xuất lát cắt thông minh từ ENGLISH_WORKPLACE_POOL
  const poolLen = ENGLISH_WORKPLACE_POOL.length;
  const startIndex = ((dayNum - 1) * 7) % Math.max(1, poolLen - 12);
  const slice = ENGLISH_WORKPLACE_POOL.slice(startIndex, startIndex + 12);

  if (slice.length < 12) {
    const extraNeeded = 12 - slice.length;
    return [...slice, ...ENGLISH_WORKPLACE_POOL.slice(0, extraNeeded)];
  }

  return slice;
}

export const ENGLISH_TOPIC_EXTENSIONS = {
  // Giai đoạn A1: Công sở căn bản & Giao tiếp đồng nghiệp
  week1: {
    extraSentences: [
      { en: 'Good morning! Could you send me the latest file, please?', ipa: '/ɡʊd ˈmɔːrnɪŋ kʊd juː send miː ðə ˈleɪtɪst faɪl pliːz/', vi: 'Chào buổi sáng! Bạn gửi giúp mình file tài liệu mới nhất được không?', tag: 'Nhờ vả văn phòng', breakdown: 'Good morning (chào buổi sáng) + send me (gửi tôi) + latest file (file mới nhất)' },
      { en: 'Thanks a lot for helping me out with this task.', ipa: '/θæŋks ə lɑːt fɔːr ˈhelpɪŋ miː aʊt wɪð ðɪs tæsk/', vi: 'Cảm ơn bạn rất nhiều vì đã giúp đỡ mình hoàn thành việc này.', tag: 'Cảm ơn công sở', breakdown: 'thanks a lot (cảm ơn nhiều) + helping me out (giúp đỡ)' },
      { en: 'Sorry for being late, heavy traffic held me up.', ipa: '/ˈsɑːri fɔːr ˈbiːɪŋ leɪt ˈhevi ˈtræfɪk held miː ʌp/', vi: 'Xin lỗi vì mình đến trễ, đường sá kẹt xe quá.', tag: 'Xin lỗi đến muộn', breakdown: 'sorry for being late (xin lỗi đến muộn) + heavy traffic (tắc đường)' },
      { en: 'Are you free for lunch? Let us grab a quick bite!', ipa: '/ɑːr juː friː fɔːr lʌntʃ let ʌs ɡræb ə kwɪk baɪt/', vi: 'Trưa nay bạn rảnh không? Cùng nhau đi ăn chút gì nhé!', tag: 'Rủ ăn trưa', breakdown: 'are you free (bạn rảnh không) + grab a quick bite (ăn nhanh)' },
      { en: 'I am heading home now, see you on Monday morning!', ipa: '/aɪ æm ˈhedɪŋ hoʊm naʊ siː juː ɑːn ˈmʌndeɪ ˈmɔːrnɪŋ/', vi: 'Mình chuẩn bị về đây, hẹn gặp lại bạn vào sáng thứ Hai nhé!', tag: 'Tạm biệt cuối ngày', breakdown: 'heading home (đi về nhà) + see you on Monday (hẹn thứ Hai)' },
    ],
    readingPassage: {
      title: 'A Typical Morning at the Modern Office (Một buổi sáng công sở điển hình)',
      text: 'Good communication at the workplace begins with simple courtesy. When you walk into the office, a warm "Good morning team!" sets a positive tone for the whole day. Always remember to say "please" when requesting a file, and express sincere "thanks" when colleagues assist you. Small polite habits build great teamwork and lasting trust.',
      ipa: '/ɡʊd kəˌmjuːnɪˈkeɪʃn æt ðə ˈwɜːrkpleɪs bɪˈɡɪnz wɪð ˈsɪmpl ˈkɜːrtəsi.../',
      vi: 'Giao tiếp tốt tại nơi làm việc bắt đầu bằng sự lịch thiệp giản dị. Khi bước vào văn phòng, một lời chào ấm áp "Good morning team!" sẽ mang lại năng lượng tích cực cho cả ngày. Hãy luôn nhớ dùng từ "please" khi nhờ chuyển tài liệu, và nói lời "thanks" chân thành khi được đồng nghiệp hỗ trợ. Những thói quen lịch sự nhỏ bé sẽ xây dựng tinh thần đồng đội vững chắc và sự tin cậy lâu dài.',
      tokens: [
        { en: 'workplace', ipa: '/ˈwɜːrkpleɪs/', vi: 'nơi làm việc, công sở' },
        { en: 'courtesy', ipa: '/ˈkɜːrtəsi/', vi: 'phép lịch sự' },
        { en: 'positive tone', ipa: '/ˈpɑːzətɪv toʊn/', vi: 'bầu không khí tích cực' },
        { en: 'teamwork', ipa: '/ˈtiːmwɜːrk/', vi: 'tinh thần đồng đội' },
        { en: 'lasting trust', ipa: '/ˈlæstɪŋ trʌst/', vi: 'sự tin tưởng lâu dài' },
      ],
      questions: [
        {
          q: 'What should you say when walking into the office in the morning?',
          options: ['Stay silent', 'Good morning team!', 'I want to go home'],
          answer: 1,
          explanation: '"Good morning team!" tạo ra bầu không khí thân thiện và tích cực cho cả ngày làm việc.'
        }
      ]
    }
  },

  // Giai đoạn A1/A2: Booking phòng họp & Đặt bàn tiếp khách
  week3: {
    extraSentences: [
      { en: 'I would like to book a quiet table for four tonight, please.', ipa: '/aɪ wʊd laɪk tuː bʊk ə ˈkwaɪət ˈteɪbl fɔːr fɔːr təˈnaɪt pliːz/', vi: 'Tôi muốn đặt một bàn yên tĩnh cho 4 người vào tối nay ạ.', tag: 'Đặt bàn tiếp khách', breakdown: 'I would like to book (tôi muốn đặt) + quiet table for four (bàn yên tĩnh 4 người)' },
      { en: 'Is meeting room 2 available tomorrow at 9 AM?', ipa: '/ɪz ˈmiːtɪŋ ruːm tuː əˈveɪləbl təˈmɔːroʊ æt naɪn eɪ em/', vi: 'Phòng họp số 2 có còn trống vào 9 giờ sáng mai không?', tag: 'Đặt phòng họp', breakdown: 'is room available (phòng còn trống không)' },
      { en: 'Could you please confirm the reservation code via email?', ipa: '/kʊd juː pliːz kənˈfɜːrm ðə ˌrezərˈveɪʃn koʊd ˈvaɪə ˈiːmeɪl/', vi: 'Bạn có thể vui lòng xác nhận mã đặt chỗ qua email giúp tôi được không?', tag: 'Xác nhận mã booking', breakdown: 'confirm reservation code (xác nhận mã đặt chỗ) + via email (qua email)' },
      { en: 'We are running 15 minutes late due to traffic, please hold our table.', ipa: '/wiː ɑːr ˈrʌnɪŋ ˌfɪfˈtiːn ˈmɪnɪts leɪt duː tuː ˈtræfɪk pliːz hoʊld aʊər ˈteɪbl/', vi: 'Chúng tôi đến muộn khoảng 15 phút do kẹt xe, vui lòng giữ bàn giúp nhé.', tag: 'Báo trễ giờ', breakdown: 'running late (đến muộn) + hold table (giữ bàn)' },
      { en: 'Can I pay the deposit with a corporate credit card?', ipa: '/kæn aɪ peɪ ðə dɪˈpɑːzɪt wɪð ə ˈkɔːrpərət ˈkredɪt kɑːrd/', vi: 'Tôi có thể thanh toán tiền cọc bằng thẻ tín dụng công ty được không?', tag: 'Thanh toán cọc', breakdown: 'pay deposit (trả tiền cọc) + corporate credit card (thẻ cty)' },
    ],
    readingPassage: {
      title: 'Professional Booking Protocol (Quy trình đặt chỗ chuyên nghiệp)',
      text: 'Booking a venue for corporate clients requires precision and clarity. Always specify the exact date, arrival time, and headcount. If you require special audio-visual equipment like an HDMI projector, state it in advance. Polite confirmation by email ensures smooth execution and leaves a great impression on your business partners.',
      ipa: '/ˈbʊkɪŋ ə ˈvenjuː fɔːr ˈkɔːrpərət ˈklaɪənts rɪˈkwaɪərz prɪˈsɪʒn.../',
      vi: 'Việc đặt địa điểm cho đối tác kinh doanh đòi hỏi sự chính xác và rõ ràng. Hãy luôn nêu cụ thể ngày tháng, giờ đến và số lượng khách. Nếu bạn cần thiết bị trình chiếu như máy chiếu cáp HDMI, hãy báo trước. Việc gửi email xác nhận lịch thiệp sẽ đảm bảo mọi việc diễn ra suôn sẻ và để lại ấn tượng tốt đẹp trong mắt đối tác.',
      tokens: [
        { en: 'corporate clients', ipa: '/ˈkɔːrpərət ˈklaɪənts/', vi: 'đối tác doanh nghiệp' },
        { en: 'headcount', ipa: '/ˈhedkaʊnt/', vi: 'số lượng người' },
        { en: 'in advance', ipa: '/ɪn ədˈvæns/', vi: 'trước thời hạn' },
        { en: 'smooth execution', ipa: '/smuːð ˌeksɪˈkjuːʃn/', vi: 'vận hành êm đẹp' },
      ],
      questions: [
        {
          q: 'What information must you always specify when booking?',
          options: ['Only your hobby', 'Exact date, time, and headcount', 'Your favourite song'],
          answer: 1,
          explanation: 'Quy trình chuẩn đòi hỏi nêu rõ ngày, giờ và số lượng khách tham dự.'
        }
      ]
    }
  },

  // Giai đoạn A2/B1: Marketing Campaigns & Khách hàng
  week5: {
    extraSentences: [
      { en: 'Our main marketing goal is to increase booking conversion rates by 20%.', ipa: '/aʊər meɪn ˈmɑːrkɪtɪŋ ɡoʊl ɪz tuː ɪnˈkriːs ˈbʊkɪŋ kənˈvɜːrʒn reɪts baɪ ˈtwenti pərˈsent/', vi: 'Mục tiêu tiếp thị chính của chúng ta là tăng tỷ lệ chuyển đổi đặt chỗ thêm 20%.', tag: 'Mục tiêu chiến dịch', breakdown: 'marketing goal (mục tiêu marketing) + conversion rate (tỷ lệ chuyển đổi)' },
      { en: 'We should run targeted social media ads to reach young travelers.', ipa: '/wiː ʃʊd rʌn ˈtɑːrɡɪtɪd ˈsoʊʃl ˈmiːdiə ædz tuː riːtʃ jʌŋ ˈtrævələrz/', vi: 'Chúng ta nên chạy quảng cáo mạng xã hội nhắm mục tiêu để tiếp cận du khách trẻ.', tag: 'Chạy quảng cáo', breakdown: 'targeted ads (quảng cáo nhắm mục tiêu) + reach (tiếp cận)' },
      { en: 'What is our allocated ad budget for this product launch?', ipa: '/wʌt ɪz aʊər ˈæləkeɪtɪd æd ˈbʌdʒɪt fɔːr ðɪs ˈprɑːdʌkt lɔːntʃ/', vi: 'Ngân sách quảng cáo được duyệt cho đợt ra mắt sản phẩm này là bao nhiêu?', tag: 'Hỏi ngân sách', breakdown: 'allocated budget (ngân sách được duyệt) + product launch (ra mắt sản phẩm)' },
      { en: 'Customer reviews show that 95% of guests loved our quick support.', ipa: '/ˈkʌstəmər rɪˈvjuːz ʃoʊ ðæt ˈnaɪnti faɪv pərˈsent əv ɡests lʌvd aʊər kwɪk səˈpɔːrt/', vi: 'Đánh giá từ khách hàng cho thấy 95% khách rất hài lòng với sự hỗ trợ nhanh chóng.', tag: 'Phản hồi khách', breakdown: 'customer reviews (đánh giá của khách) + quick support (hỗ trợ nhanh)' },
      { en: 'Let us offer a 15% discount voucher to retain repeat bookings.', ipa: '/let ʌs ˈɔːfər ə ˌfɪfˈtiːn pərˈsent ˈdɪskaʊnt ˈvaʊtʃər tuː rɪˈteɪn rɪˈpiːt ˈbʊkɪŋz/', vi: 'Hãy tặng voucher giảm giá 15% để giữ chân khách hàng đặt chỗ quay lại.', tag: 'Chương trình khuyến mãi', breakdown: 'discount voucher (voucher giảm giá) + retain bookings (giữ chân khách đặt lại)' },
    ],
    readingPassage: {
      title: 'Digital Marketing in the Booking Industry (Tiếp thị số trong ngành Booking)',
      text: 'In the modern booking industry, effective marketing connects the right travelers with memorable experiences. By analyzing customer data and listening to social media feedback, businesses can optimize their advertising budget. Delivering consistent value, fast customer care, and attractive promotional deals turns first-time guests into loyal brand advocates.',
      ipa: '/ɪn ðə ˈmɑːdərn ˈbʊkɪŋ ˈɪndəstri ɪˈfektɪv ˈmɑːrkɪtɪŋ kəˈnekts.../',
      vi: 'Trong ngành dịch vụ đặt chỗ hiện đại, tiếp thị hiệu quả là cầu nối giữa khách du lịch với những trải nghiệm đáng nhớ. Bằng cách phân tích dữ liệu khách hàng và lắng nghe phản hồi trên mạng xã hội, doanh nghiệp có thể tối ưu hóa ngân sách quảng cáo. Mang lại giá trị ổn định, chăm sóc khách hàng nhanh chóng và ưu đãi hấp dẫn sẽ biến khách hàng lần đầu thành khách hàng trung thành của thương hiệu.',
      tokens: [
        { en: 'booking industry', ipa: '/ˈbʊkɪŋ ˈɪndəstri/', vi: 'ngành dịch vụ đặt chỗ' },
        { en: 'optimize budget', ipa: '/ˈɑːptɪmaɪz ˈbʌdʒɪt/', vi: 'tối ưu ngân sách' },
        { en: 'promotional deals', ipa: '/prəˈmoʊʃənl diːlz/', vi: 'các ưu đãi khuyến mãi' },
        { en: 'loyal advocates', ipa: '/ˈlɔɪəl ˈædvəkəts/', vi: 'người ủng hộ trung thành' },
      ],
      questions: [
        {
          q: 'How can booking businesses optimize their advertising budget?',
          options: ['By spending randomly', 'By analyzing customer data and social feedback', 'By closing social channels'],
          answer: 1,
          explanation: 'Phân tích dữ liệu khách hàng và phản hồi mạng xã hội giúp tối ưu ngân sách quảng cáo chuẩn xác.'
        }
      ]
    }
  }
};

/**
 * Làm giàu dữ liệu tiếng Anh theo ngày bài học (1 - 90)
 * Bám sát định hướng Công sở, Marketing & Booking
 */
export function enrichEnglishDayData(rawDay) {
  const dayNum = rawDay?.day || 1;
  const weekNum = rawDay?.week || Math.min(12, Math.floor((dayNum - 1) / 7) + 1);

  // Chọn bộ dữ liệu theo giai đoạn
  let extension = ENGLISH_TOPIC_EXTENSIONS.week1;
  if (weekNum >= 3 && weekNum < 5) {
    extension = ENGLISH_TOPIC_EXTENSIONS.week3;
  } else if (weekNum >= 5) {
    extension = ENGLISH_TOPIC_EXTENSIONS.week5;
  }

  // 1. TỪ VỰNG TIẾNG ANH ĐỘC LẬP TỪNG NGÀY (A1 -> A2 -> B1 CÔNG SỞ, MARKETING & BOOKING)
  const vocabularies = getDailyEnglishVocabularies(dayNum).map((v, i) => ({
    ...v,
    id: `en-v-${dayNum}-${i}`,
  }));

  // 2. CÂU KHẨU NGỮ THỰC TẾ
  const sentences = [
    ...extension.extraSentences,
    {
      en: 'Could you please speak a little slower? I am taking notes.',
      ipa: '/kʊd juː pliːz spiːk ə ˈlɪtl ˈsloʊər aɪ æm ˈteɪkɪŋ noʊts/',
      vi: 'Bạn nói chậm lại một chút được không? Tôi đang ghi chú lại.',
      tag: 'Giao tiếp công sở',
      breakdown: 'speak a little slower (nói chậm lại một chút) + taking notes (đang ghi chú)'
    },
    {
      en: 'I will send you a quick follow-up email after this meeting.',
      ipa: '/aɪ wɪl send juː ə kwɪk ˈfɑːloʊ ʌp ˈiːmeɪl ˈæftər ðɪs ˈmiːtɪŋ/',
      vi: 'Tôi sẽ gửi cho bạn một email tóm tắt tiếp theo ngay sau cuộc họp này.',
      tag: 'Theo sát công việc',
      breakdown: 'follow-up email (email tóm tắt tiếp theo) + after meeting (sau cuộc họp)'
    },
    {
      en: 'It was a pleasure working with your team on this project!',
      ipa: '/ɪt wʌz ə ˈpleʒər ˈwɜːrkɪŋ wɪð jɔːr tiːm ɑːn ðɪs ˈprɑːdʒekt/',
      vi: 'Rất vinh hạnh được làm việc cùng đội ngũ của bạn trong dự án này!',
      tag: 'Kết nối đối tác',
      breakdown: 'pleasure working with you (vinh hạnh làm việc cùng bạn)'
    }
  ];

  // 3. HỘI THOẠI ROLEPLAY CÔNG SỞ & BOOKING
  const dialogue = {
    title: `Hội thoại Ngày ${dayNum}: ${rawDay?.title?.split('(')[0] || 'Office & Client Communication'}`,
    roleA: dayNum <= 30 ? 'Alex (Đồng nghiệp / Khách hàng)' : 'Sarah (Quản lý Marketing & Booking)',
    roleB: 'Bạn (Chuyên viên văn phòng)',
    lines: [
      { speaker: 'A', en: 'Good morning! Did you have a chance to look at the latest update?', ipa: '/ɡʊd ˈmɔːrnɪŋ dɪd juː hæv ə tʃæns tuː lʊk æt ðə ˈleɪtɪst ˌʌpˈdeɪt/', vi: 'Chào buổi sáng! Bạn đã kịp xem qua bản cập nhật mới nhất chưa?' },
      { speaker: 'B', en: 'Yes, I just reviewed it. Everything is on schedule for our team.', ipa: '/jes aɪ dʒʌst rɪˈvjuːd ɪt ˈevriθɪŋ ɪz ɑːn ˈskedʒuːl fɔːr aʊər tiːm/', vi: 'Vâng, tôi vừa xem qua xong. Mọi việc đều đang đúng tiến độ của nhóm mình.' },
      { speaker: 'A', en: 'Great! Could you help confirm the booking details for our client meeting?', ipa: '/ɡreɪt kʊd juː help kənˈfɜːrm ðə ˈbʊkɪŋ ˈdiːteɪlz fɔːr aʊər ˈklaɪənt ˈmiːtɪŋ/', vi: 'Tuyệt vời! Bạn xác nhận giúp chi tiết đặt chỗ cho cuộc gặp đối tác nhé?' },
      { speaker: 'B', en: 'Done! I booked Room 2 and sent the calendar invites already.', ipa: '/dʌn aɪ bʊkt ruːm tuː ænd sent ðə ˈkælɪndər ˈɪnvaɪts ɔːlˈredi/', vi: 'Xong rồi ạ! Tôi đã đặt Phòng 2 và gửi lời mời lịch họp qua email rồi.' },
      { speaker: 'A', en: 'Awesome teamwork! Thanks for your fast and reliable support.', ipa: '/ˈɔːsəm ˈtiːmwɜːrk θæŋks fɔːr jɔːr fæst ænd rɪˈlaɪəbl səˈpɔːrt/', vi: 'Làm việc nhóm rất cừ! Cảm ơn sự hỗ trợ nhanh chóng và đáng tin cậy của bạn.' }
    ]
  };

  // 4. BÀI ĐỌC THỰC TẾ
  const readingPassage = extension.readingPassage;

  // 5. GAME 1: MATCHING PAIRS (GHÉP TỪ VỰNG ĐÚNG BÀI TRONG NGÀY)
  const matchingPairs = vocabularies.slice(0, 6).map((v) => ({
    zh: v.word,
    vi: v.vi,
    ipa: v.ipa
  }));

  // 6. GAME 2: SENTENCE SCRAMBLE (CÂU GIAO TIẾP CÔNG SỞ & BOOKING)
  const scrambleList = [
    {
      target: 'Could you please send me the file?',
      words: ['Could', 'you', 'please', 'send', 'me', 'the', 'file?'],
      vi: 'Bạn có thể gửi giúp tôi file tài liệu được không?'
    },
    {
      target: 'I would like to book a table for four.',
      words: ['I', 'would', 'like', 'to', 'book', 'a', 'table', 'for', 'four.'],
      vi: 'Tôi muốn đặt một chiếc bàn cho 4 người.'
    },
    {
      target: 'The marketing campaign was a great success.',
      words: ['The', 'marketing', 'campaign', 'was', 'a', 'great', 'success.'],
      vi: 'Chiến dịch marketing đã thành công vô cùng rực rỡ.'
    }
  ];

  // 7. GAME 3: PHẢN XẠ TÌNH HUỐNG CÔNG SỞ & BOOKING (2S REFLEX)
  const reflexList = [
    {
      question: 'Khi đồng nghiệp nói: "Could you please print this report for me?", bạn phản hồi lịch thiệp nhất là:',
      options: [
        'Sure, I will print it right now!',
        'I do not care about your report.',
        'Give me money first.'
      ],
      correctIndex: 0,
      explanation: '"Sure, I will print it right now!" là cách trả lời vừa nhiệt tình vừa chuyên nghiệp trong văn phòng.'
    },
    {
      question: 'Khi khách hàng hỏi: "Is there any quiet table available tonight?", bạn là nhân viên booking sẽ nói:',
      options: [
        'Yes, we have a quiet table by the window for you.',
        'We have no food for you.',
        'Why are you calling me?'
      ],
      correctIndex: 0,
      explanation: '"Yes, we have a quiet table by the window for you." là câu xác nhận dịch vụ chuẩn mực.'
    },
    {
      question: 'Khi sếp hỏi tiến độ chiến dịch: "How is our marketing campaign going?", bạn trả lời:',
      options: [
        'Everything is on track and leads are increasing.',
        'I forgot what campaign you are talking about.',
        'I do not know anything.'
      ],
      correctIndex: 0,
      explanation: '"Everything is on track and leads are increasing." thể hiện bạn nắm chắc tiến độ và báo cáo tự tin.'
    }
  ];

  // 8. GAME 4: THỬ THÁCH ĐÚNG / SAI (TRUE/FALSE SPEED DRILL)
  const trueFalseDrills = [
    {
      statement: 'Trong giao tiếp công sở, cụm từ "ASAP" là viết tắt của "As soon as possible" (Càng sớm càng tốt).',
      isTrue: true,
      explanation: 'Chính xác! "ASAP" là từ viết tắt cực kỳ phổ biến trong email và tin nhắn văn phòng quốc tế.'
    },
    {
      statement: 'Trong ngành Marketing, thuật ngữ "ROI" có nghĩa là "Running on internet" (Chạy trên mạng).',
      isTrue: false,
      explanation: 'Sai! "ROI" là viết tắt của "Return on Investment" (Tỷ suất sinh lời trên vốn đầu tư).'
    },
    {
      statement: 'Khi đặt phòng khách sạn, "Check-out" là thủ tục nhận chìa khóa phòng khi mới đến.',
      isTrue: false,
      explanation: 'Sai! "Check-in" mới là thủ tục nhận phòng, còn "Check-out" là thủ tục thanh toán và trả phòng khi ra về.'
    }
  ];

  return {
    ...rawDay,
    vocabularies,
    sentences,
    dialogue,
    readingPassage,
    matchingPairs,
    scrambleList,
    reflexList,
    trueFalseDrills
  };
}
