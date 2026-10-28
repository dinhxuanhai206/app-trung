# 📖 Hướng Dẫn Sử Dụng & Vận Hành Hệ Thống Hoa Văn Học Đường

Chào mừng bạn đến với tài liệu hướng dẫn chi tiết của **Hoa Văn Học Đường (Chinese Learning Interactive Platform)**.

---

## 📌 1. Danh Sách Các File Tài Liệu Markdown Trong Dự Án

| Tên File Markdown | Nội Dung & Mục Đích |
| :--- | :--- |
| 👉 **[README.md](file:///d:/Atech%20New/app-trung/README.md)** | **Tài liệu tổng quan chính**: Kiến trúc thư mục, danh mục 10 tính năng lớn, hướng dẫn khởi chạy local, lệnh API NestJS và cách deploy lên Vercel. |
| 👉 **[HUONG_DAN_CHI_TIET.md](file:///d:/Atech%20New/app-trung/HUONG_DAN_CHI_TIET.md)** | **File hiện tại**: Cẩm nang hướng dẫn sử dụng chi tiết từng kỹ năng, mẹo học tập, cách kết nối điện thoại và xử lý sự cố. |
| 👉 **[chinese_learning_platform_development_guide.md](file:///d:/Atech%20New/app-trung/chinese_learning_platform_development_guide.md)** | Tài liệu đặc tả kỹ thuật và kế hoạch lộ trình phát triển ban đầu của dự án tiếng Trung. |

---

## 🚀 2. Cách Khởi Chạy Ứng Dụng Nhanh Nhất (1-Click)

Bạn không cần mở terminal gõ lệnh phức tạp, chỉ cần dùng các file kịch bản đã tạo sẵn ở thư mục gốc:

1. **Khởi chạy cả Hệ thống (Client React + Server NestJS)**:
   - Nhấp đúp chuột vào: **[start_all.bat](file:///d:/Atech%20New/app-trung/start_all.bat)**
   - Hệ thống sẽ mở 2 cửa sổ terminal tự động chạy:
     - Frontend React (Vite): [http://localhost:5173](http://localhost:5173)
     - Backend NestJS: `http://localhost:5000/api`
2. **Chỉ chạy riêng Frontend React**:
   - Nhấp đúp chuột vào: **[run_client.bat](file:///d:/Atech%20New/app-trung/run_client.bat)**
3. **Triển khai lên Đám mây Vercel**:
   - Nhấp đúp chuột vào: **[deploy_vercel.bat](file:///d:/Atech%20New/app-trung/deploy_vercel.bat)**

---

## 🎯 3. Hướng Dẫn Chi Tiết Từng Phân Hệ Học Tập

### 1. Kỹ Năng Đọc Hiểu (Reading - `/reading`)
- Xem bài khóa chuẩn HSK có kèm Pinyin.
- Bấm vào nút **🔤 Hiện Pinyin / Ẩn Pinyin** trên Header để thử thách đọc chay chữ Hán không cần phiên âm.
- **Tra từ điển nhanh**: Nhấp chuột/chạm tay vào bất kỳ chữ Hán nào trên bài khóa, sổ tay bên phải sẽ hiện ngay Pinyin, Âm Hán Việt, Nghĩa tiếng Việt, Câu ví dụ và phát âm chuẩn.
- Làm câu hỏi trắc nghiệm đọc hiểu ở cuối bài để nhận **+15 XP**.
- Tham khảo **Bảng từ vựng trọng tâm** tóm tắt toàn bộ từ mới của bài học.

### 2. Kỹ Năng Nghe Đa Hội Thoại (Listening - `/listening`)
- Mỗi bài học có 3-4 đoạn hội thoại theo các chủ đề: Hội thoại cốt lõi, Mở rộng từ vựng, Phản xạ tốc độ cao.
- Có avatar nhân vật Nam / Nữ (`👨 David`, `👩 Vương Lan`) giúp nhận diện người nói.
- **Bấm vào nút `+ Tạo thêm đoạn nghe từ vựng`**: Hệ thống sẽ tự động tổng hợp từ vựng bài học và tạo thêm đoạn nghe mới.
- Bấm nút **🙈 Ẩn dịch** để luyện tai nghe phản xạ 100% bằng âm thanh tiếng Trung.
- Điều chỉnh tốc độ đọc phù hợp trình độ: `0.75x`, `1.0x`, `1.25x`, `1.5x`.
- Làm bài tập nghe điền từ còn thiếu để nhận **+15 XP**.

### 3. Kỹ Năng Luyện Nói AI (Speaking - `/speaking`)
- Mỗi bài học có **20 câu luyện nói** phong phú từ cơ bản đến nâng cao.
- Chọn số câu `1` đến `20` ở thanh chọn câu.
- Bấm nút **🎙️ Bắt đầu ghi âm**, nói to rõ ràng bằng tiếng Trung.
- Hệ thống sẽ chấm điểm độ chính xác % và bôi màu từng từ đúng/sai.

### 4. AI Trò Chuyện Song Song 1-1 (AI Live Chat - `/ai-chat`)
- Trò chuyện trực tiếp bằng giọng nói thật của bạn với AI theo thời gian thực.
- **4 Nhân vật AI đa dạng**:
  - `👩‍🏫 Cô giáo Vương`: Sửa lỗi phát âm, giải thích ngữ pháp.
  - `👨‍🍳 Bác chủ quán ăn`: Gọi món, hỏi khẩu vị (`微辣`), thanh toán tiền.
  - `🙋‍♂️ Bạn học David`: Tán gẫu cuộc sống, rủ đi chơi, hỏi thăm cuối tuần.
  - `💼 Quản lý Trương`: Phỏng vấn công sở và kinh nghiệm làm việc.
- **AI tự động phân tích**:
  - Chấm điểm độ tự nhiên (Fluency score: `90%`).
  - Nhận diện chủ điểm ngữ pháp.
  - **Gợi ý cách nói chuẩn bản xứ hơn (Native Polish)**.
- **Chế độ tự động mở mic**: Sau khi AI nói xong câu trả lời, mic sẽ tự động mở lại để bạn đối đáp tiếp như đang gọi điện thoại thực sự!

### 5. Kỹ Năng Luyện Viết Ô Mễ (Writing - `/writing`)
- Luyện viết **20 chữ Hán mỗi bài học** trên ô lưới Mễ Tự (米字格).
- Hỗ trợ vẽ bằng chuột hoặc cảm ứng ngón tay trên điện thoại.
- Bấm nút **Hiện nét mẫu** để xem chữ mờ hướng dẫn viết đúng hình dáng.
- Làm bài tập dịch và viết câu giao tiếp ở cột bên phải để nhận **+20 XP**.

### 6. 12 Hoàn Cảnh Thực Tế & Ghép Câu (Scenario - `/scenario`)
- Bao quát 12 hoàn cảnh đời sống thực tế:
  1. 🍜 Ở Nhà Hàng
  2. 🚕 Taxi & Hỏi Đường
  3. 🛍️ Mua Sắm & Mặc Cả
  4. 🏨 Khách Sạn & Nhận Phòng
  5. 🏥 Bệnh Viện & Mua Thuốc
  6. ☕ Quán Cà Phê & Trà Sữa
  7. ✈️ Sân Bay & Ga Tàu Hỏa
  8. 📦 Nhận Hàng & Shipper
  9. 🏠 Thuê Nhà & Cuộc Sống
  10. 💼 Công Sở & Công Việc
  11. 🏦 Ngân Hàng & Ví Điện Tử
  12. 🎓 Trường Học & Thư Viện
- Có thanh từ vựng cốt lõi kèm Audio phát âm.
- Nhấp chọn các từ trong ngân hàng từ để xếp lên khay câu.
- Bấm nút **🎙️ Luyện nói câu này** để luyện phát âm câu vừa ghép và nhận thêm điểm thưởng!

### 7. Công Thức Ghép Câu Chuẩn (Formula - `/formula`)
- 10 công thức ngữ pháp nền tảng HSK:
  - `S + 是 + N`
  - `S + 不是 + N`
  - `A + 比 + B + Adj`
  - `S + 在 + Place + V`
  - `因为...所以...`
  - `S + 把 + O + V + Kết quả`
  - `越...越...`
  - v.v.
- Điền các thành phần ngữ pháp vào đúng ô slot và kiểm tra đáp án.

### 8. Kho 1,000 Từ Vựng HSK 1 - 3 (Vocab 1000 - `/vocab1000`)
- Tra cứu đầy đủ 1,000 từ vựng cốt lõi có phân trang (30 từ/trang).
- Lọc theo cấp độ: `HSK 1`, `HSK 2`, `HSK 3`, `HSK 3+`.
- Thanh tìm kiếm thông minh: Tìm theo Hán tự, Pinyin, Hán Việt hoặc Tiếng Việt.
- Bấm nút 🔊 trên mỗi thẻ từ để nghe phát âm chuẩn bản xứ.

---

## 📱 4. Cách Mở Trên Điện Thoại Di Động

1. Đảm bảo điện thoại và máy tính của bạn đang kết nối **chung một mạng WiFi**.
2. Trên máy tính, mở terminal xem địa chỉ IP nội bộ (gõ lệnh `ipconfig`, ví dụ IP máy tính là `192.168.1.15`).
3. Trên trình duyệt điện thoại (Safari hoặc Chrome), truy cập:
   `http://192.168.1.15:5173`
4. Bạn sẽ thấy giao diện được tự động tối ưu cho điện thoại với:
   - Thanh điều hướng đáy màn hình cảm ứng 1 chạm (**Bottom Navigation Bar**).
   - Menu trượt **Slide-out Drawer** hiện đại.
   - Các ô viết chữ Hán, thẻ bài học co giãn hoàn hảo.

---

## 🔧 5. Xử Lý Các Sự Cố Thường Gặp

| Tình Huống | Nguyên Nhân & Cách Xử Lý |
| :--- | :--- |
| **Không nói được micro với AI** | Trình duyệt chưa được cấp quyền micro. Bạn hãy nhìn lên góc thanh địa chỉ trình duyệt, bấm vào biểu tượng Micro/Khóa bảo mật và chọn **"Allow" (Cho phép)**. Khuyên dùng Google Chrome hoặc Microsoft Edge. |
| **Không nghe thấy tiếng phát âm** | Kiểm tra âm lượng loa của máy tính/điện thoại. Đảm bảo trình duyệt hỗ trợ SpeechSynthesis (tất cả trình duyệt hiện đại Chrome, Safari, Edge đều hỗ trợ sẵn). |
| **Lỗi cổng 5173 đã bị chiếm dụng** | Nếu cổng 5173 đang chạy một ứng dụng khác, Vite sẽ tự động đổi sang `http://localhost:5174`. Bạn hãy kiểm tra thông báo trên cửa sổ terminal `run_client.bat`. |

---
*Chúc bạn có những giờ phút học tiếng Trung thật bổ ích và tiến bộ vượt bậc cùng Hoa Văn Học Đường!*
