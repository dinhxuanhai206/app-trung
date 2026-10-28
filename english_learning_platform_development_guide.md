# Hướng Dẫn Chi Tiết Xây Dựng Website Học Tiếng Anh Toàn Diện (ReactJS + NestJS)

Tài liệu này cung cấp lộ trình và kiến trúc hoàn chỉnh để xây dựng một nền tảng học tiếng Anh trực tuyến thực tế, bao gồm các kỹ năng **Nghe (Listening), Nói (Speaking), Đọc (Reading), Viết (Writing)** và **Bài tập ghép từ (Word Matching)**.

---

## 1. Tổng Quan Kiến Trúc Hệ Thống

* **Frontend:** ReactJS (Vite/Next.js), Tailwind CSS, Zustand / Redux Toolkit, Axios, Web Speech API (cho phần Speaking).
* **Backend:** NestJS (Node.js framework), TypeScript, TypeORM / Mongoose, JWT Authentication.
* **Database:** PostgreSQL hoặc MongoDB (Khuyên dùng PostgreSQL cho dữ liệu quan hệ như tiến độ học tập, bài học, người dùng).
* **Storage:** AWS S3 hoặc Cloudinary (Lưu trữ file âm thanh, hình ảnh, tài liệu đọc).

---

## 2. Lộ Trình Phát Triển (Phân Chia Theo Sprint)

### Giai Đoạn 1: Thiết Kế Cơ Sở Dữ Liệu & Backend Authentication (NestJS)
* **Mục tiêu:** Xây dựng hệ thống API cốt lõi, quản lý người dùng và phân quyền (Học viên, Giảng viên, Quản trị viên).
* **Database Models (Entities):**
  * `User`: `id`, `email`, `password`, `role`, `avatar`, `createdAt`.
  * `Course`: `id`, `title`, `description`, `level` (Beginner, Intermediate, Advanced).
  * `Lesson`: `id`, `courseId`, `title`, `type` (Listening, Speaking, Reading, Writing, Vocabulary).
  * `Exercise`: `id`, `lessonId`, `questionData` (JSON chứa nội dung câu hỏi, audio URL, từ vựng...).
  * `UserProgress`: `id`, `userId`, `lessonId`, `score`, `completedStatus`.

### Giai Đoạn 2: Xây Dựng Giao Diện & Tính Năng Nền Tảng (ReactJS)
* **Mục tiêu:** Khởi tạo dự án React, cấu hình Routing (`react-router-dom`), Tailwind CSS, và Layout tổng quan (Sidebar, Header, Dashboard).
* **Tính năng:** Đăng nhập, đăng ký, trang chủ lộ trình khóa học.

### Giai Đoạn 3: Triển Khai Các Kỹ Năng Học Tập (Core Features)

#### 1. Kỹ Năng Đọc (Reading)
* **Backend:** API trả về nội dung bài đọc (HTML/Markdown) và danh sách câu hỏi trắc nghiệm/điền từ kèm theo.
* **Frontend:** 
  * Hiển thị văn bản bài đọc dạng chia đôi màn hình hoặc cuộn mượt mà.
  * Tích hợp tính năng click vào từ vựng để tra nghĩa nhanh (gọi API từ điển phụ hoặc tra từ trực tiếp).
  * Phần câu hỏi kiểm tra độ hiểu bài ở cuối trang.

#### 2. Kỹ Năng Nghe (Listening)
* **Backend:** Lưu trữ file audio trên Cloudinary/S3, trả về URL audio và transcript.
* **Frontend:**
  * Sử dụng thẻ `<audio>` tùy chỉnh giao diện (thanh tua, chỉnh tốc độ phát 0.75x, 1x, 1.25x).
  * Tính năng hiển thị/ẩn transcript tương tác (click vào câu nào audio nhảy đến đoạn đó).
  * Bài tập điền từ vào chỗ trống (Fill-in-the-blank) dựa trên audio đang nghe.

#### 3. Kỹ Năng Nói (Speaking)
* **Công nghệ cốt lõi:** Sử dụng **Web Speech API (`SpeechRecognition` / `webkitSpeechRecognition`)** tích hợp sẵn trong trình duyệt.
* **Frontend:**
  * Hiển thị câu mẫu.
  * Nút "Record" thu âm giọng nói của người dùng, chuyển đổi giọng nói thành văn bản (Speech-to-Text).
  * So sánh văn bản người dùng nói với câu mẫu, tính điểm độ khớp (Accuracy Score) và bôi màu xanh/đỏ cho từng từ.

#### 4. Kỹ Năng Viết (Writing)
* **Backend:** API nhận đoạn văn người dùng viết, có thể tích hợp AI (OpenAI API) hoặc chấm điểm dựa trên từ khóa bắt buộc và độ dài.
* **Frontend:**
  * Ô soạn thảo văn bản (Textarea/Rich Text Editor).
  * Đồng hồ đếm ngược (nếu là bài thi thử).
  * Hiển thị nhận xét, gợi ý sửa lỗi (Feedback) chi tiết sau khi nộp bài.

#### 5. Bài Tập Ghép Từ (Word Matching Game)
* **Cơ chế:** Cung cấp 2 cột (Cột A: Từ vựng tiếng Anh, Cột B: Nghĩa tiếng Việt hoặc hình ảnh).
* **Frontend:** 
  * Sử dụng Drag-and-Drop (hoặc click chọn cặp tương ứng).
  * Hiệu ứng nối đường thẳng (SVG lines) hoặc đổi màu khi ghép đúng/sai.
  * Tính giờ và tính điểm thưởng (Gamification).

### Giai Đoạn 4: Theo Dõi Tiến Độ & Tối Ưu (Dashboard & Analytics)
* **Backend:** API tổng hợp số bài học đã hoàn thành, biểu đồ điểm số theo tuần/tháng.
* **Frontend:** Trang Dashboard cá nhân hiển thị chuỗi ngày học liên tục (Streak), biểu đồ trực quan (Recharts/Chart.js).

---

## 3. Mã Nguồn Mẫu Cơ Bản (Mô Phỏng Cấu Trúc)

### Ví dụ 1: NestJS Controller cho Bài Học (Lesson Module)
```typescript
import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { LessonsService } from './lessons.service';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Get(':id')
  async getLessonDetail(@Param('id') id: string) {
    return this.lessonsService.findById(id);
  }

  @Post(':id/submit')
  async submitExercise(
    @Param('id') lessonId: string,
    @Body() submissionData: { userId: string; answers: any; score: number },
  ) {
    return this.lessonsService.saveProgress(lessonId, submissionData);
  }
}
```

### Ví dụ 2: React Component cho Tính Năng Speaking (Web Speech API)
```jsx
import React, { useState } from 'react';

export default function SpeakingExercise({ targetSentence }) {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Trình duyệt của bạn không hỗ trợ nhận diện giọng nói.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setTranscript(speechToText);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognition.start();
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-lg mx-auto mt-10">
      <h3 className="text-lg font-bold mb-2">Luyện Phát Âm</h3>
      <p className="text-gray-600 mb-4">Đọc câu sau: <span className="font-semibold text-blue-600">"{targetSentence}"</span></p>
      
      <button 
        onClick={startListening}
        className={`px-4 py-2 rounded text-white ${isListening ? 'bg-red-500' : 'bg-green-500'}`}
      >
        {isListening ? 'Đang nghe...' : 'Bắt đầu nói'}
      </button>

      <div className="mt-4">
        <p className="text-sm text-gray-500">Bạn đã nói:</p>
        <p className="p-2 bg-gray-100 rounded mt-1">{transcript || 'Chưa có dữ liệu...'}</p>
      </div>
    </div>
  );
}
```

---

## 4. Hướng Dẫn Triển Khai (Deployment)
1. **Database:** Sử dụng Supabase hoặc ElephantSQL cho PostgreSQL.
2. **Backend:** Deploy lên Render, Railway hoặc AWS EC2.
3. **Frontend:** Deploy lên Vercel hoặc Netlify để tận dụng tối ưu tốc độ phân phối tĩnh.
