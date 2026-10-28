import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { LessonsService } from './lessons.service';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Get()
  getAllLessons() {
    return this.lessonsService.findAll();
  }

  @Get(':id')
  getLessonDetail(@Param('id') id: string) {
    return this.lessonsService.findById(id);
  }

  @Post(':id/submit')
  submitExercise(
    @Param('id') id: string,
    @Body() body: { skill: string; answers: any; score: number },
  ) {
    return this.lessonsService.submitExercise(id, body);
  }
}
