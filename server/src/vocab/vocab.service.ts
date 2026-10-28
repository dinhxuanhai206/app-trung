import { Injectable, NotFoundException } from '@nestjs/common';
import { HSK_1000_VOCABULARY } from './vocab.data';

export interface VocabQueryDto {
  q?: string;
  level?: string;
  topic?: string;
  page?: number;
  limit?: number;
}

@Injectable()
export class VocabService {
  private readonly vocabList = HSK_1000_VOCABULARY;

  search(query: VocabQueryDto) {
    const { q, level, topic, page = 1, limit = 20 } = query;
    let results = this.vocabList;

    if (level && level !== 'all') {
      results = results.filter((item) => item.level.toLowerCase() === level.toLowerCase());
    }

    if (topic && topic !== 'all') {
      results = results.filter((item) => item.topic.toLowerCase() === topic.toLowerCase());
    }

    if (q) {
      const lowerQ = q.toLowerCase().trim();
      results = results.filter(
        (item) =>
          item.hanzi.toLowerCase().includes(lowerQ) ||
          item.pinyin.toLowerCase().includes(lowerQ) ||
          item.vi.toLowerCase().includes(lowerQ) ||
          (item.hv && item.hv.toLowerCase().includes(lowerQ)),
      );
    }

    const total = results.length;
    const pageNum = Math.max(1, Number(page));
    const limitNum = Math.max(1, Math.min(100, Number(limit)));
    const startIndex = (pageNum - 1) * limitNum;
    const data = results.slice(startIndex, startIndex + limitNum);

    return {
      total,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum),
      data,
    };
  }

  findById(id: number) {
    const item = this.vocabList.find((v) => v.id === Number(id));
    if (!item) {
      throw new NotFoundException(`Không tìm thấy từ vựng có mã số: ${id}`);
    }
    return item;
  }

  getRandom(count = 10, level?: string) {
    let pool = this.vocabList;
    if (level && level !== 'all') {
      pool = pool.filter((item) => item.level.toLowerCase() === level.toLowerCase());
    }
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, pool.length));
  }

  getStats() {
    const levels: Record<string, number> = {};
    const topics: Record<string, number> = {};

    for (const item of this.vocabList) {
      levels[item.level] = (levels[item.level] || 0) + 1;
      topics[item.topic] = (topics[item.topic] || 0) + 1;
    }

    return {
      totalWords: this.vocabList.length,
      levels,
      topics,
    };
  }
}
