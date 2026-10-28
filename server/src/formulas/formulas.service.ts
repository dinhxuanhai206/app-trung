import { Injectable, NotFoundException } from '@nestjs/common';
import { FORMULA_GRAMMAR_DATABASE, FormulaItem } from './formulas.data';

@Injectable()
export class FormulasService {
  private readonly formulas: FormulaItem[] = FORMULA_GRAMMAR_DATABASE;

  findAll() {
    return this.formulas.map(({ id, name, tag, level, diagram, description }) => ({
      id,
      name,
      tag,
      level,
      diagram,
      description,
    }));
  }

  findById(id: string) {
    const formula = this.formulas.find((f) => f.id === id);
    if (!formula) {
      throw new NotFoundException(`Không tìm thấy cấu trúc ngữ pháp với mã: ${id}`);
    }
    return formula;
  }

  validateChallenge(
    id: string,
    challengeIndex: number,
    filledSlots: string[],
  ) {
    const formula = this.findById(id);
    const challenge = formula.challenges[challengeIndex];
    if (!challenge) {
      throw new NotFoundException('Không tìm thấy bài tập thử thách ngữ pháp');
    }

    const expected = challenge.slots.map((s) => s.expected);
    const isCorrect =
      expected.length === filledSlots.length &&
      expected.every((val, idx) => val === filledSlots[idx]);

    return {
      isCorrect,
      expected,
      userAnswer: filledSlots,
      analysis: challenge.analysis,
      hanziFull: challenge.hanziFull,
      pinyinFull: challenge.pinyinFull,
    };
  }
}
