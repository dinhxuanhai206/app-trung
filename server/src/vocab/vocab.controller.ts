import { Controller, Get, Param, Query } from '@nestjs/common';
import { VocabService } from './vocab.service';

@Controller('vocab')
export class VocabController {
  constructor(private readonly vocabService: VocabService) {}

  @Get()
  searchVocab(
    @Query('q') q?: string,
    @Query('level') level?: string,
    @Query('topic') topic?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    return this.vocabService.search({ q, level, topic, page, limit });
  }

  @Get('stats')
  getStats() {
    return this.vocabService.getStats();
  }

  @Get('random')
  getRandomVocab(
    @Query('count') count?: number,
    @Query('level') level?: string,
  ) {
    return this.vocabService.getRandom(count ? Number(count) : 10, level);
  }

  @Get(':id')
  getVocabDetail(@Param('id') id: string) {
    return this.vocabService.findById(Number(id));
  }
}
