# Hướng Dẫn Chi Tiết Xây Dựng Nền Tảng Học Tiếng Trung Toàn Diện (HSK Platform)

Tài liệu này được chuyển đổi và nâng cấp từ tài liệu kiến trúc nền tảng ngoại ngữ, tối ưu hóa chuyên sâu cho **Tiếng Trung (Mandarin Chinese - HSK 1 đến HSK 6)** với đầy đủ 5 kỹ năng: **Nghe (听力 - Listening), Nói (口语 - Speaking), Đọc (阅读 - Reading), Viết (书写 - Writing)** và **Game Ghép Từ Vựng (配对游戏 - Word Matching)**.

---

## 1. Tổng Quan Kiến Trúc Hệ Thống

* **Frontend:**
  * **Core Web App hiện tại:** HTML5 Semantic, Modern Vanilla CSS (Aesthetics Hán ngữ hiện đại, Typography `Noto Sans SC`), Javascript ES6+, Web Speech API (`zh-CN`), Canvas API (Ô Mễ Tự `米字格` luyện viết chữ Hán).
  * **Phiên bản mở rộng:** ReactJS / Next.js, Tailwind CSS, Zustand / Redux Toolkit, Axios.
* **Backend:**
  * **Framework:** NestJS (Node.js framework), TypeScript.
  * **Database:** PostgreSQL (Lưu quan hệ User, Progress, HSK Levels, Lessons) hoặc MongoDB.
  * **Speech & AI:** Web Speech API (`zh-CN`) cho Client, OpenAI GPT API / Claude API cho phân tích ngữ pháp tiếng Trung và gợi ý sửa lỗi viết văn.
* **Storage:** Cloudinary / AWS S3 (Lưu trữ âm thanh phát âm bản xứ, hình ảnh minh họa từ vựng).

---

## 2. Đặc Thù Chuyên Biệt Khi Xây Dựng App Học Tiếng Trung

1. **Phiên Âm Pinyin & Chữ Hán (Hanzi):**
   * Cần tính năng bật/tắt Pinyin linh hoạt để học viên không bị phụ thuộc phiên âm.
   * Hiển thị dạng `<ruby><rb>字</rb><rt>zì</rt></ruby>` hoặc CSS Flexbox Ruby token.
2. **Âm Hán Việt & Bộ Thủ (Radicals):**
   * Người Việt học tiếng Trung có lợi thế lớn nhờ âm Hán Việt (chiếm hơn 60% từ vựng).
   * Từ điển tra cứu nhanh phải hiển thị: **Hán tự**, **Pinyin**, **Âm Hán Việt**, **Giải nghĩa tiếng Việt** và **Câu ví dụ**.
3. **Luyện Viết Chữ Hán (Ô Mễ Tự 格子):**
   * Sử dụng khung lưới `米字格` (Mǐ Zì Gé) chuẩn mực giúp người học căn đúng trọng tâm con chữ và nhớ quy tắc bút thuận (trên trước dưới sau, trái trước phải sau, ngoài trước trong sau...).
4. **Nhận Diện Giọng Nói Tiếng Trung (Mandarin Speech Recognition):**
   * Sử dụng Web Speech API với ngôn ngữ `lang = 'zh-CN'`.
   * So sánh độ trùng khớp giữa chuỗi Hán tự mẫu và giọng nói thu được từ mic của học viên.

---

## 3. Database Schema Mẫu (PostgreSQL / TypeORM)

```typescript
// lesson.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

export enum HskLevel {
  HSK1 = 'HSK 1',
  HSK2 = 'HSK 2',
  HSK3 = 'HSK 3',
  HSK4 = 'HSK 4',
  HSK5 = 'HSK 5',
  HSK6 = 'HSK 6',
}

@Entity('chinese_lessons')
export class ChineseLesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: HskLevel, default: HskLevel.HSK1 })
  level: HskLevel;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  // Dữ liệu bài đọc (Hán tự, Pinyin, Dịch nghĩa)
  @Column({ type: 'jsonb' })
  readingData: {
    title: string;
    tokens: Array<{
      hanzi: string;
      pinyin: string;
      vi: string;
      hv?: string;
      sample?: string;
    }>;
    translationVi: string;
    quiz: {
      question: string;
      options: Array<{ text: string; correct: boolean }>;
    };
  };

  // Dữ liệu bài nghe & audio transcript
  @Column({ type: 'jsonb' })
  listeningData: {
    audioUrl?: string;
    dialogues: Array<{
      id: number;
      hanzi: string;
      pinyin: string;
      vi: string;
    }>;
    quiz: {
      sentencePrefix: string;
      missingWord: string;
      sentenceSuffix: string;
      pinyinHint: string;
    };
  };

  // Dữ liệu luyện nói
  @Column({ type: 'jsonb' })
  speakingData: {
    targetHanzi: string;
    targetPinyin: string;
    vietnameseMeaning: string;
  };

  // Dữ liệu luyện viết chữ Hán
  @Column({ type: 'jsonb' })
  writingData: {
    targetChar: string;
    charPinyin: string;
    charMeaning: string;
    charStrokes: string;
    compositionPrompt: string;
    expectedKeywords: string[];
    sampleSolution: string;
  };

  // Thẻ từ vựng cho Game ghép từ
  @Column({ type: 'jsonb' })
  vocabularyPairs: Array<{
    id: string;
    hanzi: string;
    pinyin: string;
    vi: string;
  }>;
}
```

---

## 4. Hướng Dẫn Trải Nghiệm Ứng Dụng Đã Tạo

Ứng dụng web tương tác hoàn chỉnh đã được xây dựng sẵn trong thư mục dự án:
* **[index.html](file:///d:/Atech%20New/app-trung/index.html)**: Trang chủ và toàn bộ giao diện điều hướng của ứng dụng.
* **[style.css](file:///d:/Atech%20New/app-trung/style.css)**: Hệ thống giao diện tông màu Hán ngữ sang trọng (Đỏ Cinnabar, Vàng Kim Hoàng gia, Ngọc Bích Jade), phông chữ Noto Sans SC, khung lưới 米字格, hiệu ứng vi tương tác.
* **[app.js](file:///d:/Atech%20New/app-trung/app.js)**: Toàn bộ logic 5 kỹ năng:
  1. **Đọc (Reading):** Click bất kỳ từ nào để tra từ điển nhanh (Pinyin, Âm Hán Việt, Nghĩa, Ví dụ, Phát âm).
  2. **Nghe (Listening):** Audio player điều chỉnh tốc độ 0.75x, 1.0x, 1.25x; click từng câu thoại; bài tập điền từ.
  3. **Nói (Speaking):** Thu âm Micro với nhận diện tiếng Trung chuẩn `zh-CN`, tự động tính điểm độ chính xác %.
  4. **Viết (Writing):** Canvas tương tác mô phỏng cọ vẽ trên ô Mễ (米字格) có chữ mờ gợi ý, bài tập dịch câu kèm phản hồi ngữ pháp.
  5. **Game ghép từ (Matching Game):** Nối thẻ Hán tự & Pinyin với Tiếng Việt, tính giờ, tính điểm thưởng combo, âm thanh Web Audio sinh động.
  6. **Dashboard:** Theo dõi Streak, XP, cấp độ HSK và thanh kỹ năng được lưu tự động vào `localStorage`.

---

## 5. Cách Khởi Chạy

Bạn có thể mở trực tiếp file `index.html` bằng bất kỳ trình duyệt web nào (Google Chrome, Microsoft Edge) để trải nghiệm đầy đủ tất cả các tính năng ngay lập tức.
