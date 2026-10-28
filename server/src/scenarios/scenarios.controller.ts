import { Controller, Get, Param, Post, Query, Body } from '@nestjs/common';
import { ScenariosService } from './scenarios.service';

@Controller('scenarios')
export class ScenariosController {
  constructor(private readonly scenariosService: ScenariosService) {}

  @Get()
  getAllScenarios(@Query('category') category?: string) {
    return this.scenariosService.findAll(category);
  }

  @Get(':id')
  getScenarioDetail(@Param('id') id: string) {
    return this.scenariosService.findById(id);
  }

  @Post(':id/validate')
  validateChallenge(
    @Param('id') id: string,
    @Body() body: { challengeIndex: number; userOrder: string[] },
  ) {
    return this.scenariosService.validateChallenge(
      id,
      body.challengeIndex,
      body.userOrder,
    );
  }
}
