/**
 * ROADMAP ENGLISH ENRICHER MODULE (NÂNG CẤP TOÀN DIỆN 90 NGÀY)
 * Cung cấp dữ liệu học tiếng Anh giao tiếp 90 ngày:
 * 1. 10 - 12 Từ vựng thực chiến MỖI NGÀY BIẾN ĐỔI ĐỘC LẬP (Word, IPA phiên âm, Nghĩa tiếng Việt, Loại từ, Ví dụ)
 * 2. 8 - 10 Câu khẩu ngữ đời sống bản xứ (Có IPA, Nghĩa, Phân loại ngữ cảnh, Bóc tách cấu trúc)
 * 3. Hội thoại thực tế phong phú (Speaker A & B)
 * 4. Đoạn văn luyện đọc tiếng Anh thực chiến + Tra cứu từ vựng tức thì + Câu hỏi đọc hiểu
 * 5. Đấu trường 4 Game ôn tập (Ghép thẻ từ vựng đúng bài học ngày đó, Phản xạ, Scramble, True/False)
 */

export const DAILY_EN_VOCAB_MAP = {
  // NGÀY 1: Chào hỏi thân thiện & Bắt chuyện tự nhiên
  1: [
    { word: 'Hello', ipa: '/həˈloʊ/', vi: 'Xin chào', type: 'Chào hỏi', example: 'Hello! It is so nice to meet you.' },
    { word: 'Hi', ipa: '/haɪ/', vi: 'Chào thân mật', type: 'Chào hỏi', example: 'Hi there, how is everything going?' },
    { word: 'Good morning', ipa: '/ɡʊd ˈmɔːrnɪŋ/', vi: 'Chào buổi sáng', type: 'Chào hỏi', example: 'Good morning, everyone! Hope you had a great sleep.' },
    { word: 'Good evening', ipa: '/ɡʊd ˈiːvnɪŋ/', vi: 'Chào buổi tối', type: 'Chào hỏi', example: 'Good evening! Welcome to our gathering tonight.' },
    { word: 'Nice', ipa: '/naɪs/', vi: 'Tốt đẹp, dễ chịu', type: 'Tính từ', example: 'It is a really nice day today.' },
    { word: 'Meet', ipa: '/miːt/', vi: 'Gặp gỡ, làm quen', type: 'Động từ', example: 'Nice to meet you in person!' },
    { word: 'Pleasure', ipa: '/ˈpleʒər/', vi: 'Niềm vinh hạnh', type: 'Danh từ', example: 'It was a real pleasure chatting with you.' },
    { word: 'Welcome', ipa: '/ˈwelkəm/', vi: 'Chào mừng, hoan nghênh', type: 'Chào hỏi', example: 'Welcome to our international community!' },
    { word: 'Friend', ipa: '/frend/', vi: 'Bạn bè', type: 'Danh từ', example: 'We have been best friends for years.' },
    { word: 'Introduce', ipa: '/ˌɪntrəˈduːs/', vi: 'Giới thiệu', type: 'Động từ', example: 'Allow me to introduce myself.' },
    { word: 'Today', ipa: '/təˈdeɪ/', vi: 'Hôm nay', type: 'Thời gian', example: 'How are you feeling today?' },
    { word: 'Great', ipa: '/ɡreɪt/', vi: 'Tuyệt vời, rất tốt', type: 'Tính từ', example: 'I am doing great, thank you!' }
  ],

  // NGÀY 2: Lời cảm ơn & Đối đáp lịch sự chuẩn bản xứ
  2: [
    { word: 'Thank you', ipa: '/θæŋk juː/', vi: 'Cảm ơn bạn', type: 'Lịch sự', example: 'Thank you so much for your tremendous help.' },
    { word: 'Appreciate', ipa: '/əˈpriːʃieɪt/', vi: 'Trân trọng, cảm kích', type: 'Động từ', example: 'I really appreciate your kind support today.' },
    { word: 'Grateful', ipa: '/ˈɡreɪtfl/', vi: 'Biết ơn sâu sắc', type: 'Tính từ', example: 'I am truly grateful for this wonderful opportunity.' },
    { word: 'You are welcome', ipa: '/jʊər ˈwelkəm/', vi: 'Không có chi', type: 'Lịch sự', example: 'No problem at all, you are always welcome!' },
    { word: 'Don’t mention it', ipa: '/doʊnt ˈmenʃn ɪt/', vi: 'Đừng bận tâm / Khách sáo gì', type: 'Khẩu ngữ', example: 'Don’t mention it, that is what friends are for.' },
    { word: 'Favor', ipa: '/ˈfeɪvər/', vi: 'Sự giúp đỡ, ân huệ', type: 'Danh từ', example: 'Could you do me a quick favor?' },
    { word: 'Anytime', ipa: '/ˈenitaɪm/', vi: 'Bất cứ lúc nào (sẵn lòng)', type: 'Khẩu ngữ', example: 'Happy to help, anytime!' },
    { word: 'Kind', ipa: '/kaɪnd/', vi: 'Tốt bụng, tử tế', type: 'Tính từ', example: 'That is very kind of you to say.' },
    { word: 'Help', ipa: '/help/', vi: 'Giúp đỡ', type: 'Danh/Động', example: 'Thanks for lending me a helping hand.' },
    { word: 'Generous', ipa: '/ˈdʒenərəs/', vi: 'Hào phóng, rộng rãi', type: 'Tính từ', example: 'Thank you for your generous hospitality.' },
    { word: 'Glad', ipa: '/ɡlæd/', vi: 'Rất vui, hài lòng', type: 'Tính từ', example: 'I am glad that I could be of help.' },
    { word: 'Support', ipa: '/səˈpɔːrt/', vi: 'Ủng hộ, tương trợ', type: 'Danh/Động', example: 'Thank you for supporting our project.' }
  ],

  // NGÀY 3: Lời xin lỗi & Xử lý hiểu lầm khéo léo
  3: [
    { word: 'Sorry', ipa: '/ˈsɑːri/', vi: 'Xin lỗi', type: 'Lịch sự', example: 'I am so sorry for keeping you waiting.' },
    { word: 'Apologize', ipa: '/əˈpɑːlədʒaɪz/', vi: 'Tỏ lời xin lỗi chính thức', type: 'Động từ', example: 'I sincerely apologize for the misunderstanding.' },
    { word: 'Excuse me', ipa: '/ɪkˈskjuːz miː/', vi: 'Xin lỗi (Làm phiền chút)', type: 'Lịch sự', example: 'Excuse me, could you tell me where the exit is?' },
    { word: 'Mistake', ipa: '/mɪˈsteɪk/', vi: 'Sai sót, lỗi lầm', type: 'Danh từ', example: 'It was totally my mistake, my bad!' },
    { word: 'Forgive', ipa: '/fərˈɡɪv/', vi: 'Tha thứ, bỏ qua', type: 'Động từ', example: 'Please forgive me for interrupting you.' },
    { word: 'Mind', ipa: '/maɪnd/', vi: 'Để bụng, bận tâm', type: 'Động từ', example: 'Never mind, it is not a big deal.' },
    { word: 'No worries', ipa: '/noʊ ˈwɜːriz/', vi: 'Đừng lo / Không sao đâu', type: 'Khẩu ngữ', example: 'No worries at all, it happens to everyone.' },
    { word: 'Fault', ipa: '/fɔːlt/', vi: 'Lỗi thuộc về ai', type: 'Danh từ', example: 'Do not blame yourself, it is not your fault.' },
    { word: 'Accident', ipa: '/ˈæksɪdənt/', vi: 'Sự cố ngẫu nhiên', type: 'Danh từ', example: 'I dropped the cup by accident.' },
    { word: 'Intentional', ipa: '/ɪnˈtenʃənl/', vi: 'Có chủ đích, cố ý', type: 'Tính từ', example: 'It was not intentional, believe me.' },
    { word: 'Bother', ipa: '/ˈbɑːðər/', vi: 'Làm phiền, quấy rầy', type: 'Động từ', example: 'Sorry to bother you while you are busy.' },
    { word: 'Trouble', ipa: '/ˈtrʌbl/', vi: 'Rắc rối, phiền phức', type: 'Danh từ', example: 'I hate to cause you any trouble.' }
  ],

  // NGÀY 4: Chào tạm biệt & Hẹn gặp lại
  4: [
    { word: 'Goodbye', ipa: '/ˌɡʊdˈbaɪ/', vi: 'Tạm biệt', type: 'Tạm biệt', example: 'Goodbye, have a safe flight home!' },
    { word: 'See you later', ipa: '/siː juː ˈleɪtər/', vi: 'Hẹn gặp lại sau', type: 'Tạm biệt', example: 'I have to run now, see you later!' },
    { word: 'Catch you later', ipa: '/kætʃ juː ˈleɪtər/', vi: 'Gặp lại sau nhé (khẩu ngữ)', type: 'Tạm biệt', example: 'Catch you later, stay awesome!' },
    { word: 'Take care', ipa: '/teɪk ker/', vi: 'Bảo trọng nhé / Giữ gìn sức khỏe', type: 'Tạm biệt', example: 'Drive safely and take care of yourself.' },
    { word: 'Safe travels', ipa: '/seɪf ˈtrævlz/', vi: 'Lên đường bình an', type: 'Lời chúc', example: 'Safe travels on your journey back.' },
    { word: 'Stay in touch', ipa: '/steɪ ɪn tʌtʃ/', vi: 'Giữ liên lạc nhé', type: 'Cụm từ', example: 'Let us definitely stay in touch on WhatsApp.' },
    { word: 'Soon', ipa: '/suːn/', vi: 'Sớm, chẳng bao lâu', type: 'Phó từ', example: 'Hope to see you again very soon.' },
    { word: 'Tomorrow', ipa: '/təˈmɔːroʊ/', vi: 'Ngày mai', type: 'Thời gian', example: 'See you first thing tomorrow morning.' },
    { word: 'Contact', ipa: '/ˈkɑːntækt/', vi: 'Liên hệ', type: 'Danh/Động', example: 'Feel free to contact me whenever you need.' },
    { word: 'Farewell', ipa: '/ˌferˈwel/', vi: 'Lời tạm biệt chia tay', type: 'Danh từ', example: 'A warm farewell party for our team.' },
    { word: 'Drop by', ipa: '/drɑːp baɪ/', vi: 'Ghé chơi, tạt qua', type: 'Cụm động từ', example: 'Drop by my office anytime.' },
    { word: 'Keep in mind', ipa: '/kiːp ɪn maɪnd/', vi: 'Ghi nhớ điều này', type: 'Cụm từ', example: 'Keep in mind that practice makes perfect.' }
  ],

  // NGÀY 5: Hỏi thăm sức khỏe & Cuộc sống dạo này
  5: [
    { word: 'Lately', ipa: '/ˈleɪtli/', vi: 'Dạo gần đây', type: 'Phó từ', example: 'How have you been doing lately?' },
    { word: 'Busy', ipa: '/ˈbɪzi/', vi: 'Bận rộn', type: 'Tính từ', example: 'I have been pretty busy with work recently.' },
    { word: 'Work', ipa: '/wɜːrk/', vi: 'Công việc', type: 'Danh/Động', example: 'How is work going these days?' },
    { word: 'Health', ipa: '/helθ/', vi: 'Sức khỏe', type: 'Danh từ', example: 'Good health is the greatest wealth.' },
    { word: 'Lifestyle', ipa: '/ˈlaɪfstaɪl/', vi: 'Lối sống', type: 'Danh từ', example: 'Adopting a healthy, active lifestyle.' },
    { word: 'Exhausted', ipa: '/ɪɡˈzɔːstɪd/', vi: 'Kiệt sức, mệt nhoài', type: 'Tính từ', example: 'After 10 hours at the desk, I am totally exhausted.' },
    { word: 'Energetic', ipa: '/ˌenərˈdʒetɪk/', vi: 'Tràn đầy năng lượng', type: 'Tính từ', example: 'A morning jog keeps me feeling energetic all day.' },
    { word: 'Balance', ipa: '/ˈbæləns/', vi: 'Sự cân bằng', type: 'Danh/Động', example: 'Maintaining a healthy work-life balance.' },
    { word: 'Manage', ipa: '/ˈmænɪdʒ/', vi: 'Xoay xở, quản lý', type: 'Động từ', example: 'How do you manage your tight schedule?' },
    { word: 'Relax', ipa: '/rɪˈlæks/', vi: 'Thư giãn, nghỉ ngơi', type: 'Động từ', example: 'Take the weekend off and just relax.' },
    { word: 'Routine', ipa: '/ruːˈtiːn/', vi: 'Thói quen thường nhật', type: 'Danh từ', example: 'My morning routine includes coffee and shadowing.' },
    { word: 'Catch up', ipa: '/kætʃ ʌp/', vi: 'Gặp gỡ hàn huyên cập nhật', type: 'Cụm động từ', example: 'We have not caught up in ages!' }
  ],

  // NGÀY 6: Bắt chuyện người lạ & Lời khen tinh tế
  6: [
    { word: 'Weather', ipa: '/ˈweðər/', vi: 'Thời tiết', type: 'Danh từ', example: 'The weather today is absolutely gorgeous.' },
    { word: 'Sunny', ipa: '/ˈsʌni/', vi: 'Nắng ấm, trời nắng', type: 'Tính từ', example: 'It is warm and sunny outside.' },
    { word: 'Gorgeous', ipa: '/ˈɡɔːrdʒəs/ ', vi: 'Lộng lẫy, tuyệt đẹp', type: 'Tính từ', example: 'What a gorgeous sunset this evening!' },
    { word: 'Outfit', ipa: '/ˈaʊtfɪt/', vi: 'Bộ trang phục', type: 'Danh từ', example: 'I love your outfit, the color suits you so well.' },
    { word: 'Style', ipa: '/staɪl/', vi: 'Phong cách', type: 'Danh từ', example: 'You have got impeccable fashion style.' },
    { word: 'Smile', ipa: '/smaɪl/', vi: 'Nụ cười', type: 'Danh/Động', example: 'A warm smile can brighten anyone’s day.' },
    { word: 'Compliment', ipa: '/ˈkɑːmplɪmənt/', vi: 'Lời khen ngợi', type: 'Danh/Động', example: 'Thank you for the wonderful compliment!' },
    { word: 'Charming', ipa: '/ˈtʃɑːrmɪŋ/', vi: 'Duyên dáng, cuốn hút', type: 'Tính từ', example: 'This cozy coffee shop is quite charming.' },
    { word: 'Atmosphere', ipa: '/ˈætməsfɪr/', vi: 'Bầu không khí', type: 'Danh từ', example: 'The lively atmosphere puts everyone at ease.' },
    { word: 'Coffee', ipa: '/ˈkɔːfi/', vi: 'Cà phê', type: 'Danh từ', example: 'Would you care for a cup of black coffee?' },
    { word: 'Conversation', ipa: '/ˌkɑːnvərˈseɪʃn/', vi: 'Cuộc trò chuyện', type: 'Danh từ', example: 'Starting a casual conversation with a neighbor.' },
    { word: 'Positive', ipa: '/ˈpɑːzətɪv/', vi: 'Tích cực, lạc quan', type: 'Tính từ', example: 'Always surround yourself with positive energy.' }
  ],

  // NGÀY 7: Ôn tập phản xạ Tuần 1
  7: [
    { word: 'Review', ipa: '/rɪˈvjuː/', vi: 'Ôn tập, củng cố', type: 'Danh/Động', example: 'Let us review the core phrases from Week 1.' },
    { word: 'Practice', ipa: '/ˈpræktɪs/', vi: 'Luyện tập thực hành', type: 'Danh/Động', example: 'Daily practice makes English second nature.' },
    { word: 'Fluency', ipa: '/ˈfluːənsi/', vi: 'Sự lưu loát, trôi chảy', type: 'Danh từ', example: 'Focus on natural fluency over grammatical perfection.' },
    { word: 'Natural', ipa: '/ˈnætʃrəl/', vi: 'Tự nhiên', type: 'Tính từ', example: 'Your pronunciation sounds very natural.' },
    { word: 'Pronunciation', ipa: '/prəˌnʌnsiˈeɪʃn/', vi: 'Phát âm chuẩn', type: 'Danh từ', example: 'Shadowing helps tune your pronunciation.' },
    { word: 'Confidence', ipa: '/ˈkɑːnfɪdəns/', vi: 'Sự tự tin', type: 'Danh từ', example: 'Speak up with confidence, mistakes are proof you try.' },
    { word: 'Shadowing', ipa: '/ˈʃædoʊɪŋ/', vi: 'Kỹ thuật nhại giọng', type: 'Danh từ', example: 'Shadowing 15 minutes a day rewires your speech habits.' },
    { word: 'Progress', ipa: '/ˈprɑːɡres/', vi: 'Sự tiến bộ', type: 'Danh từ', example: 'You are making noticeable progress every day.' },
    { word: 'Reflex', ipa: '/ˈriːfleks/', vi: 'Phản xạ giao tiếp', type: 'Danh từ', example: 'Train your brain for immediate reflex.' },
    { word: 'Habit', ipa: '/ˈhæbɪt/', vi: 'Thói quen', type: 'Danh từ', example: 'Turn speaking English into a daily habit.' },
    { word: 'Improvement', ipa: '/ɪmˈpruːvmənt/', vi: 'Sự cải thiện', type: 'Danh từ', example: 'Consistent effort brings huge improvement.' },
    { word: 'Speaking', ipa: '/ˈspiːkɪŋ/', vi: 'Kỹ năng nói', type: 'Danh từ', example: 'Speaking aloud unlocks your communicative power.' }
  ],

  // NGÀY 8: Giới thiệu tên tuổi & Quê quán
  8: [
    { word: 'Born', ipa: '/bɔːrn/', vi: 'Sinh ra', type: 'Động từ', example: 'I was born in a coastal town.' },
    { word: 'Raised', ipa: '/reɪzd/', vi: 'Lớn lên, nuôi dưỡng', type: 'Động từ', example: 'Born and raised in Hanoi, Vietnam.' },
    { word: 'Hometown', ipa: '/ˈhoʊmtaʊn/', vi: 'Quê hương, nơi chôn rau cắt rốn', type: 'Danh từ', example: 'Hanoi is my beloved hometown.' },
    { word: 'Origin', ipa: '/ˈɔːrɪdʒɪn/', vi: 'Gốc gác, nguồn gốc', type: 'Danh từ', example: 'Where is your family of origin from?' },
    { word: 'Capital', ipa: '/ˈkæpɪtl/', vi: 'Thủ đô', type: 'Danh từ', example: 'Hanoi is the historic capital of Vietnam.' },
    { word: 'Citizen', ipa: '/ˈsɪtɪzn/', vi: 'Công dân', type: 'Danh từ', example: 'Becoming a global citizen who speaks fluent English.' },
    { word: 'Nationality', ipa: '/ˌnæʃəˈnæləti/', vi: 'Quốc tịch', type: 'Danh từ', example: 'What is your current nationality?' },
    { word: 'Accent', ipa: '/ˈæksent/', vi: 'Giọng điệu, âm điệu', type: 'Danh từ', example: 'I really love your international accent.' },
    { word: 'Relocate', ipa: '/ˌriːˈloʊkeɪt/', vi: 'Chuyển chỗ ở, di dời', type: 'Động từ', example: 'I relocated to this city two years ago.' },
    { word: 'Culture', ipa: '/ˈkʌltʃər/', vi: 'Văn hóa bản địa', type: 'Danh từ', example: 'Sharing unique aspects of Vietnamese culture.' },
    { word: 'Background', ipa: '/ˈbækɡraʊnd/', vi: 'Nền tảng, xuất thân', type: 'Danh từ', example: 'Coming from a diverse cultural background.' },
    { word: 'Identity', ipa: '/aɪˈdentəti/', vi: 'Bản sắc, danh tính', type: 'Danh từ', example: 'Be proud of your cultural identity.' }
  ],

  // NGÀY 9: Nghề nghiệp & Nơi làm việc
  9: [
    { word: 'Career', ipa: '/kəˈrɪr/', vi: 'Sự nghiệp', type: 'Danh từ', example: 'Building a fulfilling career in technology.' },
    { word: 'Profession', ipa: '/prəˈfeʃn/', vi: 'Nghề nghiệp chuyên môn', type: 'Danh từ', example: 'What profession are you pursuing?' },
    { word: 'Company', ipa: '/ˈkʌmpəni/', vi: 'Công ty, doanh nghiệp', type: 'Danh từ', example: 'I work for an innovative software company.' },
    { word: 'Office', ipa: '/ˈɔːfɪs/', vi: 'Văn phòng', type: 'Danh từ', example: 'Our modern office is right in the city center.' },
    { word: 'Engineer', ipa: '/ˌendʒɪˈnɪr/', vi: 'Kỹ sư', type: 'Nghề nghiệp', example: 'He works as a Senior Software Engineer.' },
    { word: 'Remote', ipa: '/rɪˈmoʊt/', vi: 'Làm việc từ xa', type: 'Tính từ', example: 'I have been working remotely for over a year.' },
    { word: 'Salary', ipa: '/ˈsæləri/', vi: 'Tiền lương', type: 'Danh từ', example: 'Offering a highly competitive salary package.' },
    { word: 'Position', ipa: '/pəˈzɪʃn/', vi: 'Vị trí công việc', type: 'Danh từ', example: 'What position do you hold at your firm?' },
    { word: 'Industry', ipa: '/ˈɪndəstri/', vi: 'Ngành nghề', type: 'Danh từ', example: 'The tech industry is expanding rapidly.' },
    { word: 'Colleague', ipa: '/ˈkɑːliːɡ/', vi: 'Đồng nghiệp', type: 'Danh từ', example: 'My colleagues are supportive and friendly.' },
    { word: 'Responsibility', ipa: '/rɪˌspɑːnsəˈbɪləti/', vi: 'Trách nhiệm công việc', type: 'Danh từ', example: 'Overseeing client communication responsibilities.' },
    { word: 'Deadline', ipa: '/ˈdedlaɪn/', vi: 'Hạn chót công việc', type: 'Danh từ', example: 'We successfully met our project deadline.' }
  ],

  // NGÀY 10: Gia đình & Người thân
  10: [
    { word: 'Family', ipa: '/ˈfæməli/', vi: 'Gia đình', type: 'Danh từ', example: 'Family always comes first in my life.' },
    { word: 'Parents', ipa: '/ˈperənts/', vi: 'Bố mẹ, phụ huynh', type: 'Danh từ', example: 'My parents live peacefully in the countryside.' },
    { word: 'Siblings', ipa: '/ˈsɪblɪŋz/', vi: 'Anh chị em ruột', type: 'Danh từ', example: 'Do you have any brothers or siblings?' },
    { word: 'Brother', ipa: '/ˈbrʌðər/', vi: 'Anh / Em trai', type: 'Danh từ', example: 'My older brother is an architect.' },
    { word: 'Sister', ipa: '/ˈsɪstər/', vi: 'Chị / Em gái', type: 'Danh từ', example: 'My younger sister is studying abroad.' },
    { word: 'Close-knit', ipa: '/ˌkloʊs ˈnɪt/', vi: 'Khăng khít, gắn bó', type: 'Tính từ', example: 'We come from a warm, close-knit family.' },
    { word: 'Together', ipa: '/təˈɡeðər/', vi: 'Cùng nhau', type: 'Phó từ', example: 'We love having dinner together on Sundays.' },
    { word: 'Married', ipa: '/ˈmærid/', vi: 'Đã kết hôn', type: 'Tính từ', example: 'Are you single or married?' },
    { word: 'Children', ipa: '/ˈtʃɪldrən/', vi: 'Con cái, trẻ thơ', type: 'Danh từ', example: 'They have two lovely young children.' },
    { word: 'Relative', ipa: '/ˈrelətɪv/', vi: 'Họ hàng, thân nhân', type: 'Danh từ', example: 'Visiting relatives during traditional holidays.' },
    { word: 'Gathering', ipa: '/ˈɡæðərɪŋ/', vi: 'Buổi sum họp', type: 'Danh từ', example: 'A cheerful family gathering on New Year’s Eve.' },
    { word: 'Affection', ipa: '/əˈfekʃn/', vi: 'Tình thương mến', type: 'Danh từ', example: 'Showing mutual affection and deep respect.' }
  ]
};

// KHO TỪ VỰNG TIẾNG ANH GIAO TIẾP DỒI DÀO CHO NGÀY 11 - 90
export const ENGLISH_COMMUNICATIVE_POOL = [
  { word: 'Hobby', ipa: '/ˈhɑːbi/', vi: 'Sở thích', type: 'Danh từ', example: 'Photography is my favorite creative hobby.' },
  { word: 'Travel', ipa: '/ˈtrævl/', vi: 'Du lịch', type: 'Động từ', example: 'I love to travel and explore new cultures.' },
  { word: 'Passport', ipa: '/ˈpæspɔːrt/', vi: 'Hộ chiếu', type: 'Danh từ', example: 'Keep your passport in a secure pocket.' },
  { word: 'Luggage', ipa: '/ˈlʌɡɪdʒ/', vi: 'Hành lý', type: 'Danh từ', example: 'Could you help me lift this heavy luggage?' },
  { word: 'Flight', ipa: '/flaɪt/', vi: 'Chuyến bay', type: 'Danh từ', example: 'Our flight is boarding at Gate 14.' },
  { word: 'Boarding', ipa: '/ˈbɔːrdɪŋ/', vi: 'Lên máy bay/tàu', type: 'Danh từ', example: 'Boarding pass is required at the checkpoint.' },
  { word: 'Restaurant', ipa: '/ˈrestrɑːnt/', vi: 'Nhà hàng', type: 'Danh từ', example: 'Let us try that new Italian restaurant.' },
  { word: 'Menu', ipa: '/ˈmenjuː/', vi: 'Thực đơn', type: 'Danh từ', example: 'Could we see the dessert menu, please?' },
  { word: 'Order', ipa: '/ˈɔːrdər/', vi: 'Gọi món, đặt hàng', type: 'Động từ', example: 'Are you ready to order your main dish?' },
  { word: 'Delicious', ipa: '/dɪˈlɪʃəs/', vi: 'Thơm ngon tuyệt hảo', type: 'Tính từ', example: 'This grilled salmon is delicious!' },
  { word: 'Vegetarian', ipa: '/ˌvedʒəˈteriən/', vi: 'Ăn chay', type: 'Tính từ', example: 'Do you have any vegetarian options here?' },
  { word: 'Beverage', ipa: '/ˈbevərɪdʒ/', vi: 'Đồ uống giải khát', type: 'Danh từ', example: 'What beverage would you like to have?' },
  { word: 'Receipt', ipa: '/rɪˈsiːt/', vi: 'Hóa đơn thanh toán', type: 'Danh từ', example: 'Would you like a copy of your receipt?' },
  { word: 'Discount', ipa: '/ˈdɪskaʊnt/', vi: 'Giảm giá, chiết khấu', type: 'Danh từ', example: 'Is there any seasonal discount available?' },
  { word: 'Credit card', ipa: '/ˈkredɪt kɑːrd/', vi: 'Thẻ tín dụng', type: 'Danh từ', example: 'You can tap your credit card right here.' },
  { word: 'Fitting room', ipa: '/ˈfɪtɪŋ ruːm/', vi: 'Phòng thử đồ', type: 'Danh từ', example: 'The fitting rooms are located to your left.' },
  { word: 'Exchange', ipa: '/ɪksˈtʃeɪndʒ/', vi: 'Đổi hàng', type: 'Động từ', example: 'Can I exchange this for a medium size?' },
  { word: 'Refund', ipa: '/ˈriːfʌnd/', vi: 'Hoàn lại tiền', type: 'Danh/Động', example: 'Full refund within 30 days of purchase.' },
  { word: 'Subway', ipa: '/ˈsʌbweɪ/', vi: 'Tàu điện ngầm', type: 'Danh từ', example: 'Take the subway Line 2 directly to downtown.' },
  { word: 'Bus stop', ipa: '/bʌs stɑːp/', vi: 'Trạm xe buýt', type: 'Danh từ', example: 'The nearest bus stop is right across the street.' },
  { word: 'Direction', ipa: '/dəˈrekʃn/', vi: 'Phương hướng, chỉ đường', type: 'Danh từ', example: 'Could you give me directions to the museum?' },
  { word: 'Straight', ipa: '/streɪt/', vi: 'Đi thẳng', type: 'Phó từ', example: 'Go straight for two blocks, then turn right.' },
  { word: 'Intersection', ipa: '/ˌɪntərˈsekʃn/', vi: 'Ngã tư đường', type: 'Danh từ', example: 'Stop at the traffic light at the intersection.' },
  { word: 'Hotel', ipa: '/hoʊˈtel/', vi: 'Khách sạn', type: 'Danh từ', example: 'I have a hotel reservation under John.' },
  { word: 'Check-in', ipa: '/ˈtʃek ɪn/', vi: 'Thủ tục nhận phòng', type: 'Danh từ', example: 'What time is hotel check-in today?' },
  { word: 'Hospital', ipa: '/ˈhɑːspɪtl/', vi: 'Bệnh viện', type: 'Danh từ', example: 'Where is the nearest general hospital?' },
  { word: 'Pharmacy', ipa: '/ˈfɑːrməsi/', vi: 'Hiệu thuốc', type: 'Danh từ', example: 'I need to pick up some cough medicine at the pharmacy.' },
  { word: 'Appointment', ipa: '/əˈpɔɪntmənt/', vi: 'Cuộc hẹn', type: 'Danh từ', example: 'I would like to schedule a doctor appointment.' },
  { word: 'Emergency', ipa: '/iˈmɜːrdʒənsi/', vi: 'Tình huống khẩn cấp', type: 'Danh từ', example: 'Call 911 immediately in case of emergency.' },
  { word: 'Insurance', ipa: '/ɪnˈʃʊrəns/', vi: 'Bảo hiểm', type: 'Danh từ', example: 'Does your clinic accept international travel insurance?' },
  { word: 'Agreement', ipa: '/əˈɡriːmənt/', vi: 'Thỏa thuận, hợp đồng', type: 'Danh từ', example: 'We have reached a win-win mutual agreement.' },
  { word: 'Negotiate', ipa: '/nɪˈɡoʊʃieɪt/', vi: 'Đàm phán thương lượng', type: 'Động từ', example: 'We can negotiate terms that benefit both parties.' },
  { word: 'Presentation', ipa: '/ˌpriːzenˈteɪʃn/', vi: 'Bài thuyết trình', type: 'Danh từ', example: 'Delivering a confident keynote presentation.' },
  { word: 'Success', ipa: '/səkˈses/', vi: 'Sự thành công', type: 'Danh từ', example: 'Consistent dedication leads to lasting success.' }
];

/**
 * Trích xuất 10-12 từ vựng tiếng Anh theo từng ngày (1 - 90)
 */
export function getDailyEnglishVocabularies(dayNum) {
  if (DAILY_EN_VOCAB_MAP[dayNum]) {
    return DAILY_EN_VOCAB_MAP[dayNum];
  }

  // Nếu ngày >= 11, lấy lát cắt thông minh từ ENGLISH_COMMUNICATIVE_POOL
  const poolLen = ENGLISH_COMMUNICATIVE_POOL.length;
  const startIndex = ((dayNum - 1) * 7) % Math.max(1, poolLen - 12);
  const slice = ENGLISH_COMMUNICATIVE_POOL.slice(startIndex, startIndex + 12);

  // Bổ sung nếu thiếu
  if (slice.length < 12) {
    const extraNeeded = 12 - slice.length;
    return [...slice, ...ENGLISH_COMMUNICATIVE_POOL.slice(0, extraNeeded)];
  }

  return slice;
}

export const ENGLISH_TOPIC_EXTENSIONS = {
  // Tuần 1: Chào hỏi, xưng hô, xã giao
  week1: {
    extraSentences: [
      { en: 'How have you been doing lately?', ipa: '/haʊ hæv juː biːn ˈduːɪŋ ˈleɪtli/', vi: 'Dạo gần đây bạn thế nào rồi?', tag: 'Hỏi han thân mật', breakdown: 'How have you been (dạo này ra sao) + lately (gần đây)' },
      { en: 'I have been pretty busy, but everything is on track.', ipa: '/aɪ hæv biːn ˈprɪti ˈbɪzi bʌt ˈevriθɪŋ ɪz ɑːn træk/', vi: 'Mình khá là bận, nhưng mọi thứ đều ổn thỏa theo đúng kế hoạch.', tag: 'Trả lời tự nhiên', breakdown: 'pretty busy (khá bận) + on track (đúng tiến độ)' },
      { en: 'I really appreciate your kind help today!', ipa: '/aɪ ˈriːəli əˈpriːʃieɪt jɔːr kaɪnd help təˈdeɪ/', vi: 'Tôi thật sự rất trân trọng sự giúp đỡ nhiệt tình của bạn hôm nay!', tag: 'Cảm ơn chân thành', breakdown: 'appreciate (trân trọng) + kind help (sự giúp đỡ tốt bụng)' },
      { en: 'Don’t mention it, that is what friends are for.', ipa: '/doʊnt ˈmenʃn ɪt ðæt ɪz wʌt frendz ɑːr fɔːr/', vi: 'Khách sáo làm gì, bạn bè là để giúp nhau lúc này mà.', tag: 'Khẩu ngữ bản xứ', breakdown: 'Don’t mention it (đừng nhắc đến) + what friends are for (bạn bè là vậy)' },
      { en: 'We should definitely grab a cup of coffee sometime soon!', ipa: '/wiː ʃʊd ˈdefɪnətli ɡræb ə kʌp əv ˈkɔːfi ˈsʌmtaɪm suːn/', vi: 'Hôm nào nhất định chúng ta phải đi cà phê chuyện trò nhé!', tag: 'Rủ rê giao lưu', breakdown: 'grab a cup of coffee (đi uống cà phê) + sometime soon (sớm thôi)' },
    ],
    readingPassage: {
      title: 'Making a Great First Impression (Tạo ấn tượng ban đầu tuyệt vời)',
      text: 'Good communication starts with a warm smile and confident eye contact. When you greet someone in English, a simple "Hi, how is your day going?" can break the ice instantly. Remember to listen actively and express sincere appreciation whenever someone helps you. Confidence and friendliness open doors everywhere.',
      ipa: '/ɡʊd kəˌmjuːnɪˈkeɪʃn stɑːrts wɪð ə wɔːrm smaɪl ænd ˈkɑːnfɪdənt aɪ ˈkɑːntækt.../',
      vi: 'Giao tiếp tốt bắt đầu bằng một nụ cười ấm áp và ánh mắt tự tin. Khi bạn chào hỏi ai đó bằng tiếng Anh, một câu đơn giản như "Hi, how is your day going?" có thể ngay lập tức phá tan sự xa lạ. Hãy nhớ lắng nghe chăm chú và bày tỏ sự biết ơn chân thành khi có người giúp đỡ bạn. Sự tự tin và thân thiện sẽ mở ra mọi cánh cửa.',
      tokens: [
        { en: 'warm smile', ipa: '/wɔːrm smaɪl/', vi: 'nụ cười ấm áp' },
        { en: 'eye contact', ipa: '/aɪ ˈkɑːntækt/', vi: 'giao tiếp bằng ánh mắt' },
        { en: 'break the ice', ipa: '/breɪk ðiː aɪs/', vi: 'phá tan bầu không khí ngượng ngùng' },
        { en: 'listen actively', ipa: '/ˈlɪsn ˈæktɪvli/', vi: 'lắng nghe chủ động' },
        { en: 'appreciation', ipa: '/əˌpriːʃiˈeɪʃn/', vi: 'sự trân trọng, biết ơn' },
      ],
      questions: [
        {
          q: 'What is the best way to break the ice with someone new?',
          options: ['Ask about their salary', 'Give a warm smile and ask how their day is', 'Stay completely silent'],
          answer: 1,
          explanation: 'A warm smile and a friendly greeting instantly break the ice (tạo sự gần gũi).'
        },
        {
          q: 'What quality opens doors everywhere according to the text?',
          options: ['Wealth and luxury', 'Confidence and friendliness', 'Speaking very loudly'],
          answer: 1,
          explanation: 'The text highlights that confidence and friendliness open doors everywhere.'
        }
      ]
    }
  },

  // Tuần 3: Mua sắm & Cà phê
  week3: {
    extraSentences: [
      { en: 'Can I get an iced Americano with no sugar?', ipa: '/kæn aɪ ɡet ən aɪst əˌmerɪˈkɑːnoʊ wɪð noʊ ˈʃʊɡər/', vi: 'Cho tôi một ly Americano đá không đường được không?', tag: 'Gọi đồ uống', breakdown: 'Can I get (cho tôi) + iced Americano (cà phê đá) + with no sugar (không đường)' },
      { en: 'For here or to go?', ipa: '/fɔːr hɪr ɔːr tuː ɡoʊ/', vi: 'Dùng tại quán hay mang đi ạ?', tag: 'Nhân viên hỏi', breakdown: 'For here (dùng ở đây) + to go (mang về)' },
      { en: 'Do you happen to have this shirt in a larger size?', ipa: '/duː juː ˈhæpən tuː hæv ðɪs ʃɜːrt ɪn ə ˈlɑːrdʒər saɪz/', vi: 'Bạn có chiếc áo này với size lớn hơn không?', tag: 'Hỏi kích cỡ', breakdown: 'Do you happen to have (bạn có... không) + larger size (size to hơn)' },
      { en: 'Could you give me a receipt for reimbursement?', ipa: '/kʊd juː ɡɪv miː ə rɪˈsiːt fɔːr ˌriːɪmˈbɜːrsmənt/', vi: 'Bạn xuất giúp tôi hóa đơn để thanh toán lại với công ty nhé?', tag: 'Thanh toán', breakdown: 'receipt (hóa đơn) + for reimbursement (để hoàn tiền)' },
      { en: 'Keep the change, you were wonderful today!', ipa: '/kiːp ðə tʃeɪndʒ juː wɜːr ˈwʌndərfəl təˈdeɪ/', vi: 'Cứ giữ lại tiền thối nhé, hôm nay bạn phục vụ rất tuyệt vời!', tag: 'Văn hóa Tip', breakdown: 'Keep the change (giữ tiền thối) + wonderful (tuyệt vời)' },
    ],
    readingPassage: {
      title: 'The Art of Ordering Coffee in English (Nghệ thuật gọi cà phê bằng tiếng Anh)',
      text: 'Ordering at an international coffee shop can feel intimidating, but you only need a few key phrases. First, specify the temperature (hot or iced), then choose your size (small, medium, or large), and finally name your drink. For example: "Could I please get a large iced latte with almond milk?" Remember to smile and say thank you!',
      ipa: '/ˈɔːrdərɪŋ æt ən ˌɪntərˈnæʃnəl ˈkɔːfi ʃɑːp kæn fiːl ɪnˈtɪmɪdeɪtɪŋ.../',
      vi: 'Gọi đồ uống tại một quán cà phê quốc tế có thể khiến bạn hơi bỡ ngỡ, nhưng bạn chỉ cần vài cụm từ then chốt. Trước tiên, hãy nêu nhiệt độ (nóng hay đá), sau đó chọn kích cỡ (nhỏ, vừa, hay lớn), và cuối cùng là tên đồ uống. Ví dụ: "Could I please get a large iced latte with almond milk?". Hãy nhớ mỉm cười và cảm ơn nhé!',
      tokens: [
        { en: 'intimidating', ipa: '/ɪnˈtɪmɪdeɪtɪŋ/', vi: 'đáng sợ, e ngại' },
        { en: 'specify', ipa: '/ˈspesɪfaɪ/', vi: 'nêu cụ thể' },
        { en: 'iced latte', ipa: '/aɪst ˈlɑːteɪ/', vi: 'latte đá' },
        { en: 'almond milk', ipa: '/ˈɑːmənd mɪlk/', vi: 'sữa hạnh nhân' },
      ],
      questions: [
        {
          q: 'What should you specify first when ordering coffee?',
          options: ['Your home address', 'Temperature (hot or iced) and size', 'Your wifi password'],
          answer: 1,
          explanation: 'The guide recommends mentioning temperature and size first.'
        }
      ]
    }
  },

  // Tuần 5: Gọi món & Ẩm thực
  week5: {
    extraSentences: [
      { en: 'We would like a table for two by the window, please.', ipa: '/wiː wʊd laɪk ə ˈteɪbl fɔːr tuː baɪ ðə ˈwɪndoʊ pliːz/', vi: 'Chúng tôi muốn một bàn hai người cạnh cửa sổ ạ.', tag: 'Yêu cầu bàn', breakdown: 'table for two (bàn 2 người) + by the window (cạnh cửa sổ)' },
      { en: 'What dish do you recommend for someone trying this for the first time?', ipa: '/wʌt dɪʃ duː juː ˌrekəˈmend/', vi: 'Bạn gợi ý món nào cho người lần đầu ghé quán?', tag: 'Hỏi tư vấn món', breakdown: 'recommend (gợi ý) + for the first time (lần đầu tiên)' },
      { en: 'Excuse me, could we get some extra napkins and water?', ipa: '/ɪkˈskjuːz miː kʊd wiː ɡet sʌm ˈekstrə ˈnæpkɪnz ænd ˈwɔːtər/', vi: 'Xin lỗi, làm ơn cho chúng tôi xin thêm khăn ăn và nước lọc nhé?', tag: 'Yêu cầu thêm', breakdown: 'extra napkins (thêm khăn giấy) + water (nước lọc)' },
      { en: 'Everything tasted absolutely magnificent, compliments to the chef!', ipa: '/ˈevriθɪŋ ˈteɪstɪd ˌæbsəˈluːtli mæɡˈnɪfɪsnt ˈkɑːmplɪmənts tuː ðə ʃef/', vi: 'Mọi món đều tuyệt ngon, xin gửi lời khen ngợi đến đầu bếp!', tag: 'Khen ngợi', breakdown: 'tasted magnificent (vị ngon xuất sắc) + compliments (lời khen)' },
      { en: 'Shall we split the bill, or is it on one card today?', ipa: '/ʃæl wiː splɪt ðə bɪl ɔːr ɪz ɪt ɑːn wʌn kɑːrd təˈdeɪ/', vi: 'Chúng mình cưa đôi hóa đơn nhé, hay quẹt một thẻ hôm nay?', tag: 'Thanh toán', breakdown: 'split the bill (chia đôi hóa đơn)' },
    ],
    readingPassage: {
      title: 'Dining Out in English with Confidence (Tự tin ăn uống tại nhà hàng quốc tế)',
      text: 'Eating at restaurants abroad is one of the greatest joys of traveling. When you arrive, tell the host how many people are in your party. When the server arrives, ask for their signature dish if you are unsure. When the meal is done, politely ask for the check. Politeness and a friendly smile guarantee wonderful service every single time.',
      ipa: '/ˈiːtɪŋ æt ˈrestrɑːnts əˈbrɔːd ɪz wʌn əv ðə ˈɡreɪtɪst dʒɔɪz.../',
      vi: 'Ăn uống tại các nhà hàng quốc tế là một trong những niềm vui tuyệt vời nhất khi đi du lịch. Khi tới nơi, hãy báo nhân viên bàn bạn có bao nhiêu người. Khi phục vụ tới, hãy mạnh dạn hỏi món đặc trưng của quán nếu bạn chưa biết chọn gì. Khi ăn xong, hãy lịch sự xin hóa đơn tính tiền. Sự lịch thiệp và nụ cười thân thiện sẽ đảm bảo bạn nhận được dịch vụ tuyệt vời.',
      tokens: [
        { en: 'dining out', ipa: '/ˈdaɪnɪŋ aʊt/', vi: 'đi ăn ngoài nhà hàng' },
        { en: 'party', ipa: '/ˈpɑːrti/', vi: 'nhóm người đi cùng' },
        { en: 'signature dish', ipa: '/ˈsɪɡnətʃər dɪʃ/', vi: 'món ăn đặc sắc độc quyền' },
        { en: 'check / bill', ipa: '/tʃek / bɪl/', vi: 'hóa đơn tính tiền' },
      ],
      questions: [
        {
          q: 'What should you ask if you are unsure what to eat?',
          options: ['Give me food now', 'What is your favorite dish here?', 'Why is this place expensive?'],
          answer: 1,
          explanation: 'Asking "What is your favorite dish here?" is a friendly, proven way to get great recommendations.'
        }
      ]
    }
  }
};

/**
 * Hàm làm giàu dữ liệu tiếng Anh cho bất kỳ ngày nào trong 90 ngày
 */
export function enrichEnglishDayData(rawDay) {
  const dayNum = rawDay?.day || 1;
  const weekNum = rawDay?.week || Math.min(12, Math.floor((dayNum - 1) / 7) + 1);

  // Chọn bộ dữ liệu tương ứng hoặc mặc định
  let extension = ENGLISH_TOPIC_EXTENSIONS.week1;
  if (weekNum >= 3 && weekNum < 5) {
    extension = ENGLISH_TOPIC_EXTENSIONS.week3;
  } else if (weekNum >= 5) {
    extension = ENGLISH_TOPIC_EXTENSIONS.week5;
  }

  // 1. TỪ VỰNG TIẾNG ANH ĐỘC LẬP TỪNG NGÀY (KHÔNG BỊ TRÙNG KHI QUA NGÀY MỚI)
  const vocabularies = getDailyEnglishVocabularies(dayNum).map((v, i) => ({
    ...v,
    id: `en-v-${dayNum}-${i}`,
  }));

  // 2. Tạo 8-10 câu thực tế
  const sentences = [
    ...extension.extraSentences,
    {
      en: 'Could you please speak a little slower? I am still practicing.',
      ipa: '/kʊd juː pliːz spiːk ə ˈlɪtl ˈsloʊər aɪ æm stɪl ˈpræktɪsɪŋ/',
      vi: 'Bạn có thể nói chậm lại một chút được không? Tôi đang luyện tập nghe nói.',
      tag: 'Cứu cánh giao tiếp',
      breakdown: 'speak a little slower (nói chậm hơn một chút) + practicing (đang luyện)'
    },
    {
      en: 'What does this word mean in this context?',
      ipa: '/wʌt dʌz ðɪs wɜːrd miːn ɪn ðɪs ˈkɑːntekst/',
      vi: 'Từ này có nghĩa là gì trong ngữ cảnh này vậy?',
      tag: 'Hỏi từ vựng',
      breakdown: 'What does... mean (nghĩa là gì) + in this context (trong ngữ cảnh này)'
    },
    {
      en: 'It was fantastic talking to you, let us stay in touch!',
      ipa: '/ɪt wʌz fænˈtæstɪk ˈtɔːkɪŋ tuː juː let ʌs steɪ ɪn tʌtʃ/',
      vi: 'Trò chuyện với bạn thật là tuyệt vời, giữ liên lạc nhé!',
      tag: 'Kết nối bạn bè',
      breakdown: 'fantastic (tuyệt vời) + stay in touch (giữ liên lạc)'
    }
  ];

  // 3. Hội thoại A-B
  const dialogue = {
    title: `Giao tiếp thực tế Ngày ${dayNum}: ${rawDay?.title?.split(':')[1] || 'Everyday English'}`,
    roleA: 'Alex (Bản xứ US)',
    roleB: 'Bạn (Người học tiếng Anh)',
    lines: [
      { speaker: 'A', en: 'Hey there! How is your day treating you so far?', ipa: '/heɪ ðer haʊ ɪz jɔːr deɪ ˈtriːtɪŋ juː soʊ fɑːr/', vi: 'Chào bạn! Hôm nay mọi thứ ổn cả chứ?' },
      { speaker: 'B', en: 'Pretty good, thanks! I am actually working on my English communication skills.', ipa: '/ˈprɪti ɡʊd θæŋks aɪ æm ˈæktʃuəli ˈwɜːrkɪŋ ɑːn maɪ ˈɪŋɡlɪʃ/', vi: 'Khá là tốt, cảm ơn bạn! Thật ra mình đang nỗ lực cải thiện kỹ năng giao tiếp tiếng Anh.' },
      { speaker: 'A', en: 'That is awesome! Your pronunciation sounds really natural and clear.', ipa: '/ðæt ɪz ˈɔːsəm jɔːr prəˌnʌnsiˈeɪʃn saʊndz ˈriːəli ˈnætʃrəl/', vi: 'Tuyệt vời quá! Phát âm của bạn nghe rất tự nhiên và rõ ràng đấy.' },
      { speaker: 'B', en: 'Thank you, that means a lot to me! I practice shadowing 15 minutes every single day.', ipa: '/θæŋk juː ðæt miːnz ə lɑːt tuː miː aɪ ˈpræktɪs ˈʃædoʊɪŋ/', vi: 'Cảm ơn bạn nhiều, điều đó có ý nghĩa lớn với mình lắm! Mình luyện nhại giọng 15 phút mỗi ngày.' },
      { speaker: 'A', en: 'Consistency is key. Keep it up, you are doing fantastic!', ipa: '/kənˈsɪstənsi ɪz kiː kiːp ɪt ʌp juː ɑːr ˈduːɪŋ fænˈtæstɪk/', vi: 'Sự kiên trì là chìa khóa then chốt. Cố lên nhé, bạn đang làm rất cừ đấy!' }
    ]
  };

  // 4. Bài đọc thuần Tiếng Anh
  const readingPassage = extension.readingPassage;

  // 5. Matching pairs: TỰ ĐỘNG LẤY TỪ VỰNG TIẾNG ANH CỦA CHÍNH NGÀY ĐÓ ĐỂ GHÉP ĐÔI!
  const matchingPairs = vocabularies.slice(0, 6).map((v) => ({
    zh: v.word, // Dùng cùng key để dùng chung component
    vi: v.vi,
    ipa: v.ipa
  }));

  // 6. Scramble puzzle cho Game 2
  const scrambleList = [
    {
      target: 'How have you been doing lately?',
      words: ['How', 'have', 'you', 'been', 'doing', 'lately?'],
      vi: 'Dạo gần đây bạn thế nào rồi?'
    },
    {
      target: 'Could I get an iced latte please?',
      words: ['Could', 'I', 'get', 'an', 'iced', 'latte', 'please?'],
      vi: 'Cho tôi một ly latte đá được không ạ?'
    },
    {
      target: 'It was a pleasure meeting you today.',
      words: ['It', 'was', 'a', 'pleasure', 'meeting', 'you', 'today.'],
      vi: 'Rất vui và vinh hạnh được gặp bạn hôm nay.'
    }
  ];

  // 7. Reflex scenarios cho Game 3
  const reflexList = [
    {
      question: 'Khi một người bạn bản xứ nói "Thank you so much for your help!", bạn phản xạ đáp lại thế nào?',
      options: [
        'You are welcome, happy to help anytime!',
        'No, I did not do anything.',
        'Never mind, give me money.'
      ],
      correctIndex: 0,
      explanation: '"You are welcome, happy to help anytime!" là câu đối đáp vừa tự nhiên vừa lịch thiệp.'
    },
    {
      question: 'Khi phục vụ bàn hỏi "Are you ready to order or do you need a few more minutes?", bạn muốn xem thêm thực đơn thì nói:',
      options: [
        'Could we have a couple more minutes, please?',
        'I do not like food.',
        'Go away please.'
      ],
      correctIndex: 0,
      explanation: '"Could we have a couple more minutes, please?" là câu chuẩn để xin thêm ít phút suy nghĩ.'
    },
    {
      question: 'Khi ai đó nói quá nhanh và bạn muốn họ nói chậm lại, bạn nên nói:',
      options: [
        'Could you please speak a little slower?',
        'You speak terrible English.',
        'Stop talking right now.'
      ],
      correctIndex: 0,
      explanation: '"Could you please speak a little slower?" thể hiện sự tôn trọng và mong muốn người khác nói chậm lại.'
    }
  ];

  // 8. True/False drills cho Game 4
  const trueFalseDrills = [
    {
      statement: 'Trong tiếng Anh giao tiếp, "No worries" có nghĩa tương đương với "You are welcome" hoặc "It is okay".',
      isTrue: true,
      explanation: 'Chính xác! "No worries" là khẩu ngữ cực kỳ phổ biến ở Úc, Anh, Mỹ mang nghĩa "Đừng bận tâm / Không sao đâu".'
    },
    {
      statement: 'Khi đi nhà hàng, câu "It is on me" có nghĩa là "Món ăn này bị đổ lên áo tôi".',
      isTrue: false,
      explanation: 'Sai! "It is on me" là thành ngữ có nghĩa "Bữa này để tôi bao / tôi trả tiền".'
    },
    {
      statement: 'Phương pháp Shadowing nghĩa là vừa nghe người bản xứ vừa nhại lại ngay lập tức về ngữ điệu và trọng âm.',
      isTrue: true,
      explanation: 'Chính xác! Shadowing giúp cơ miệng và thính giác hình thành phản xạ nói lưu loát chuẩn xác.'
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
