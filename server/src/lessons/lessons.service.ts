import { Injectable, NotFoundException } from '@nestjs/common';
import { LESSONS_DATA } from './lessons.data';

export interface LessonSummary {
  id: string;
  level: string;
  title: string;
  description: string;
}

@Injectable()
export class LessonsService {
  private readonly lessons = LESSONS_DATA;

  findAll(): LessonSummary[] {
    return this.lessons.map(({ id, level, title, description }) => ({
      id,
      level,
      title,
      description,
    }));
  }

  findById(id: string) {
    const lesson = this.lessons.find((l) => l.id === id);
    if (!lesson) {
      throw new NotFoundException(`Không tìm thấy bài học với mã: ${id}`);
    }
    return lesson;
  }

  submitExercise(
    id: string,
    submission: { skill: string; answers: any; score: number },
  ) {
    // Validate lesson existence
    this.findById(id);

    return {
      success: true,
      lessonId: id,
      skill: submission.skill,
      score: submission.score,
      xpEarned: Math.round((submission.score || 100) * 0.25),
      timestamp: new Date().toISOString(),
    };
  }
}
