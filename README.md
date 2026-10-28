# 🇨🇳 Hoa Văn Học Đường (Chinese Learning Interactive Platform)

Nền tảng học tiếng Trung HSK trực tuyến toàn diện, hiện đại, kết hợp trí tuệ nhân tạo (AI Voice Partner) và phương pháp học phản xạ tự nhiên.

* **Frontend:** React 18, Vite, Tailwind CSS, React Router v6, Web Speech API (`zh-CN`), Canvas API (米字格).
* **Backend:** NestJS, TypeScript, JWT Authentication, RESTful APIs, Swagger.
* **Cơ sở dữ liệu:** 15 Bài học chuẩn HSK 1 - 4, Kho 1,000 từ vựng HSK 1-3, 10 Công thức ngữ pháp, 12 Tình huống thực tế đời sống.

---

## 📑 Mục Lục
1. [Cấu Trúc Thư Mục](#-cấu-trúc-thư-mục)
2. [Hệ Thống Tính Năng Đã Triển Khai](#-hệ-thống-tính-năng-đã-triển-khai)
3. [Hướng Dẫn Khởi Chạy Local](#-hướng-dẫn-khởi-chạy-local)
4. [Hướng Dẫn Triển Khai Lên Đám Mây (Vercel)](#-hướng-dẫn-triển-khai-lên-đám-mây-vercel)
5. [Tài Liệu API Backend](#-tài-liệu-api-backend)

---

## 📁 Cấu Trúc Thư Mục

```
app-trung/
├── client/                               # Frontend React 18 + Vite SPA
│   ├── dist/                             # Bản build Production tối ưu (chạy trên Vercel)
│   ├── src/
│   │   ├── api/                          # Axios Client kết nối NestJS Backend
│   │   ├── components/
│   │   │   ├── Sidebar.jsx               # Menu đa nền tảng (PC Sidebar & Mobile Drawer)
│   │   │   ├── Header.jsx                # Bộ chọn 15 bài học, bật/tắt Pinyin, XP & Streak
│   │   │   ├── BottomNav.jsx             # Thanh điều hướng 1 chạm trên điện thoại (Mobile)
│   │   │   ├── ReadingView.jsx           # 1. Đọc hiểu tương tác, từ điển nhanh & bảng từ vựng
│   │   │   ├── ListeningView.jsx         # 2. Đa hội thoại nghe, avatar nhân vật & quiz điền từ
│   │   │   ├── SpeakingView.jsx          # 3. Luyện nói 20 câu/bài học với Web Speech AI
│   │   │   ├── AiLiveChatView.jsx        # 4. AI đàm thoại song song 1-1, phân tích ngữ pháp
│   │   │   ├── WritingView.jsx           # 5. Luyện viết 20 chữ Hán ô Mễ (米字格) & đặt câu
│   │   │   ├── MatchingGameView.jsx      # 6. Mini-game ghép thẻ từ vựng tính điểm & combo
│   │   │   ├── ScenarioBuilderView.jsx   # 7. 12 Tình huống thực tế & ghép câu đời sống
│   │   │   ├── FormulaView.jsx           # 8. Ghép câu theo 10 công thức ngữ pháp chuẩn
│   │   │   ├── Vocab1000View.jsx         # 9. Kho 1,000 từ vựng HSK 1 - 3 kèm Audio tra cứu
│   │   │   └── DashboardView.jsx         # 10. Bảng phân tích năng lực 5 kỹ năng & huy hiệu
│   │   ├── data/
│   │   │   ├── lessonsData.js            # Dữ liệu 15 bài học HSK 1 - 4
│   │   │   ├── listeningData.js          # Kho đa hội thoại luyện nghe theo từ vựng
│   │   │   ├── scenarioData.js           # 12 Tình huống thực tế đời sống
│   │   │   ├── formulaData.js            # 10 Công thức ngữ pháp HSK
│   │   │   └── aiChatEngine.js           # Động cơ AI phân tích ngữ pháp & 4 Personas
│   │   ├── App.jsx                       # Cấu hình React Router Routes & State toàn cục
│   │   └── main.jsx                      # HashRouter bọc ứng dụng
│   ├── vercel.json                       # Cấu hình Rewrite URL cho Vercel SPA
│   ├── vite.config.js                    # Cấu hình Vite & Proxy API
│   └── package.json
│
├── server/                               # Backend NestJS (TypeScript)
│   ├── src/
│   │   ├── auth/                         # Đăng ký, đăng nhập JWT, mã hóa bcrypt
│   │   ├── lessons/                      # Quản lý bài học HSK, lưu điểm thi
│   │   ├── progress/                     # Theo dõi Streak, XP, cấp độ học viên
│   │   ├── app.module.ts
│   │   └── main.ts                       # Cổng 5000, tiền tố /api, Swagger UI
│   └── package.json
│
├── start_all.bat                         # Khởi chạy 1-click cả Client và Server
├── run_client.bat                        # Khởi chạy riêng Frontend React
├── run_server.bat                        # Khởi chạy riêng Backend NestJS
├── deploy_vercel.bat                     # Triển khai 1-click lên đám mây Vercel
├── vercel.json                           # Cấu hình triển khai Vercel từ thư mục gốc
├── index.html                            # Cổng chào & Portal điều hướng tự động
└── README.md                             # Tài liệu tổng quan dự án
```

---

## 🌟 Hệ Thống Tính Năng Đã Triển Khai

### 1. 📖 Kỹ Năng Đọc Hiểu & Tra Từ Tương Tác (`/reading`)
- Đọc bài khóa chuẩn HSK 1 - 4 với phiên âm Pinyin động (có thể bật/tắt).
- Nhấp trực tiếp vào bất kỳ từ Hán tự nào để mở **Sổ tay từ điển nhanh** (hiển thị Pinyin, Âm Hán Việt, Nghĩa tiếng Việt, Câu ví dụ và phát âm chuẩn).
- Trắc nghiệm kiểm tra độ hiểu bài ngay dưới bài khóa.
- Bảng tổng hợp từ vựng trọng tâm của toàn bộ bài học.

### 2. 🎧 Kỹ Năng Luyện Nghe Đa Hội Thoại (`/listening`)
- Mỗi bài học chia thành **3-4 đoạn hội thoại phong phú**: Đoạn cốt lõi, Đoạn mở rộng từ vựng, Đoạn phản xạ nâng cao.
- Phân biệt vai nói rõ ràng với Avatar Nam / Nữ (`👨 David`, `👩 Vương Lan`).
- Nút **`+ Tạo thêm đoạn nghe từ vựng`**: Tự động ghép nối từ vựng của bài thành đoạn nghe mới.
- Điều chỉnh tốc độ linh hoạt: `0.75x`, `1.0x`, `1.25x`, `1.5x`.
- Nút ẩn/hiện bản dịch tiếng Việt để luyện tai nghe phản xạ 100%.

### 3. 🎙️ Kỹ Năng Luyện Nói AI (`/speaking`)
- Cung cấp **20 câu luyện nói khẩu ngữ** chuẩn ngữ cảnh cho từng bài học.
- Tích hợp Web Speech API chuẩn giọng Bắc Kinh (`zh-CN`).
- Tự động chấm điểm độ chính xác % và đánh dấu từ vựng phát âm chuẩn.

### 4. 🤖 AI Trò Chuyện Song Song 1-1 (`/ai-chat`)
- **Tự động phân tích câu nói của bạn theo thời gian thực**:
  - Chấm điểm độ tự nhiên (Fluency score: `90%`).
  - Nhận diện chủ điểm ngữ pháp.
  - **Gợi ý cách nói chuẩn bản xứ hơn (Native Polish)**.
- **4 Nhân vật AI Persona đối thoại ngữ cảnh**:
  - 👩‍🏫 **Cô giáo Vương (王老师)**: Sửa lỗi phát âm, hướng dẫn ngữ pháp.
  - 👨‍🍳 **Bác chủ quán ăn (李老板)**: Gọi món, hỏi khẩu vị (`微辣`), thanh toán.
  - 🙋‍♂️ **Bạn học David (大卫)**: Tán gẫu cuộc sống, rủ đi chơi, hỏi thăm cuối tuần.
  - 💼 **Quản lý Trương (张经理)**: Giao tiếp công sở và phỏng vấn xin việc.
- **Chế độ thoại liên tục**: Sau khi AI nói xong, micro tự động mở lại để bạn nói tiếp như đang gọi điện thoại thực tế.

### 5. ✍️ Luyện Viết Chữ Hán Ô Mễ (米字格) & Đặt Câu (`/writing`)
- **20 chữ Hán mỗi bài học** trên khung lưới Mễ Tự (米字格) chuẩn thư pháp Trung Hoa.
- Hỗ trợ cảm ứng trên điện thoại (Touch) và chuột máy tính (Mouse).
- Nét chữ mẫu mờ (Ghost guideline) hỗ trợ người mới học.
- Bài tập dịch câu và kiểm tra từ khóa bắt buộc.

### 6. 🧩 Game Ghép Thẻ Từ Vựng (`/matching`)
- Mini-game lật thẻ nối cặp Chữ Hán - Nghĩa / Pinyin.
- Đồng hồ đếm thời gian, tính số lượt lật thẻ, tính điểm combo và thưởng XP.
- Nhiều chủ đề hấp dẫn: Ẩm thực, Du lịch, Mua sắm.

### 7. 💬 12 Hoàn Cảnh Thực Tế & Ghép Câu (`/scenario`)
- 12 hoàn cảnh bao quát đời sống: Nhà hàng, Taxi & hỏi đường, Mua sắm & mặc cả, Khách sạn, Bệnh viện, Quán cà phê, Sân bay, Nhận hàng shipper, Thuê nhà, Công sở, Ngân hàng, Trường học.
- Khay thả từ vựng xếp câu (Slot Tray), ngân hàng từ xáo trộn.
- Giải thích văn hóa và thói quen giao tiếp thực tế của người Trung Quốc.

### 8. 📐 Công Thức Ghép Câu Chuẩn (`/formula`)
- 10 mẫu câu ngữ pháp cốt lõi: `S + 是 + N`, `A + 比 + B + Adj`, `S + 在 + Place + V`, `因为...所以...`, `S + 把 + O + V + Kết quả`, `越...越...`, v.v.
- Khay ô ngữ pháp trực quan, kiểm tra đáp án và phát âm câu mẫu.

### 9. 📚 Kho 1,000 Từ Vựng HSK 1 - 3 (`/vocab1000`)
- Tra cứu đầy đủ 1,000 từ vựng cốt lõi HSK 1 (150 từ), HSK 2 (150 từ), HSK 3 (300 từ) và Giao tiếp mở rộng (400 từ).
- Bộ lọc theo cấp độ HSK và theo chủ đề.
- Thanh tìm kiếm thông minh theo Chữ Hán, Pinyin, Hán Việt và Nghĩa tiếng Việt.
- Nút phát âm Audio từng từ vựng.

### 10. 📱 Thiết Kế Tối Ưu Mobile (Mobile App First)
- Thanh điều hướng đáy màn hình cảm ứng 1 chạm (**Bottom Navigation Bar**).
- Menu trượt **Slide-out Drawer** hiện đại với lớp phủ tối mờ sang trọng.
- Header responsive, co giãn tự động cho mọi dòng điện thoại.

---

## 🚀 Hướng Dẫn Khởi Chạy Local

### Cách 1: 1-Click Tự Động Toàn Bộ (Khuyên dùng trên Windows)
Nhấp đúp chuột vào file:
👉 **[start_all.bat](file:///d:/Atech%20New/app-trung/start_all.bat)**
> Hệ thống sẽ tự động cài đặt thư viện (nếu chưa có) và khởi chạy cả Frontend React (`http://localhost:5173`) lẫn Backend NestJS (`http://localhost:5000/api`) trong 2 cửa sổ riêng biệt.

### Cách 2: Khởi Chạy Thủ Công Qua Terminal

#### Khởi động Frontend:
```bash
cd client
npm install
npm run dev
```
Truy cập: **`http://localhost:5173`**

#### Khởi động Backend:
```bash
cd server
npm install
npm run start:dev
```
API hoạt động tại: **`http://localhost:5000/api`**

---

## ☁️ Hướng Dẫn Triển Khai Lên Đám Mây (Vercel)

Dự án đã được cấu hình sẵn các tệp [client/vercel.json](file:///d:/Atech%20New/app-trung/client/vercel.json) và [vercel.json](file:///d:/Atech%20New/app-trung/vercel.json):

1. Nhấp đúp chuột vào file: 👉 **[deploy_vercel.bat](file:///d:/Atech%20New/app-trung/deploy_vercel.bat)**
2. Cửa sổ sẽ tự động build bản Production vào thư mục `client/dist` và kết nối Vercel CLI.
3. Làm theo hướng dẫn trên màn hình để nhận link website công khai miễn phí dạng:
   `https://chinese-learning-app.vercel.app`

---

## 📡 Tài Liệu API Backend (NestJS)

- **Authentication Module:**
  - `POST /api/auth/register`: Đăng ký tài khoản mới
  - `POST /api/auth/login`: Đăng nhập & nhận JWT Bearer Token
  - `GET /api/auth/profile`: Lấy thông tin người dùng hiện tại (yêu cầu Bearer Token)
- **Lessons Module:**
  - `GET /api/lessons`: Lấy danh sách toàn bộ bài học HSK
  - `GET /api/lessons/:id`: Lấy chi tiết bài học theo ID
  - `POST /api/lessons/:id/submit`: Nộp bài tập và tính điểm thưởng XP
- **Progress Module:**
  - `GET /api/progress`: Lấy thống kê Streak, tổng XP và độ thuần thục 5 kỹ năng
  - `POST /api/progress/add-xp`: Cộng điểm thưởng XP khi hoàn thành bài học

---
*Phát triển bởi đội ngũ Atech - Hoa Văn Học Đường 2026.*
