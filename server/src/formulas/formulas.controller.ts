import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { FormulasService } from './formulas.service';

@Controller('formulas')
export class FormulasController {
  constructor(private readonly formulasService: FormulasService) {}

  @Get()
  getAllFormulas() {
    return this.formulasService.findAll();
  }

  @Get(':id')
  getFormulaDetail(@Param('id') id: string) {
    return this.formulasService.findById(id);
  }

  @Post(':id/validate')
  validateChallenge(
    @Param('id') id: string,
    @Body() body: { challengeIndex: number; filledSlots: string[] },
  ) {
    return this.formulasService.validateChallenge(
      id,
      body.challengeIndex,
      body.filledSlots,
    );
  }
}
