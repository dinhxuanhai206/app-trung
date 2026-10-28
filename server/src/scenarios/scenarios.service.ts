import { Injectable, NotFoundException } from '@nestjs/common';
import { REAL_LIFE_SCENARIOS } from './scenarios.data';

@Injectable()
export class ScenariosService {
  private readonly scenarios = REAL_LIFE_SCENARIOS;

  findAll(category?: string) {
    if (category && category !== 'all') {
      return this.scenarios.filter((s) => s.category === category);
    }
    return this.scenarios;
  }

  findById(id: string) {
    const scenario = this.scenarios.find((s) => s.id === id);
    if (!scenario) {
      throw new NotFoundException(`Không tìm thấy kịch bản giao tiếp: ${id}`);
    }
    return scenario;
  }

  validateChallenge(
    id: string,
    challengeIndex: number,
    userOrder: string[],
  ) {
    const scenario = this.findById(id);
    const challenge = scenario.challenges[challengeIndex];
    if (!challenge) {
      throw new NotFoundException('Không tìm thấy thử thách câu giao tiếp');
    }

    const correctOrder = challenge.correctOrder;
    const isCorrect =
      correctOrder.length === userOrder.length &&
      correctOrder.every((word, idx) => word === userOrder[idx]);

    return {
      isCorrect,
      correctOrder,
      userOrder,
      audioFull: challenge.audioFull,
      explanation: challenge.explanation,
    };
  }
}
