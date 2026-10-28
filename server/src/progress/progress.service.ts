import { Injectable } from '@nestjs/common';

export interface UserProgressData {
  userId: string;
  xp: number;
  streak: number;
  completedLessons: string[];
  skills: {
    reading: number;
    listening: number;
    speaking: number;
    writing: number;
    matching: number;
  };
}

@Injectable()
export class ProgressService {
  private progressMap: Map<string, UserProgressData> = new Map([
    [
      'demo-user-1',
      {
        userId: 'demo-user-1',
        xp: 150,
        streak: 5,
        completedLessons: ['hsk1-lesson1'],
        skills: {
          reading: 85,
          listening: 70,
          speaking: 65,
          writing: 60,
          matching: 90,
        },
      },
    ],
  ]);

  getUserProgress(userId: string): UserProgressData {
    if (!this.progressMap.has(userId)) {
      this.progressMap.set(userId, {
        userId,
        xp: 0,
        streak: 1,
        completedLessons: [],
        skills: {
          reading: 0,
          listening: 0,
          speaking: 0,
          writing: 0,
          matching: 0,
        },
      });
    }
    return this.progressMap.get(userId);
  }

  updateProgress(userId: string, update: Partial<UserProgressData>) {
    const current = this.getUserProgress(userId);
    const updated = {
      ...current,
      ...update,
      skills: {
        ...current.skills,
        ...(update.skills || {}),
      },
    };
    this.progressMap.set(userId, updated);
    return updated;
  }
}
