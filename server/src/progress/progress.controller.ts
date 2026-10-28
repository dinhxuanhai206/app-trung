import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getMyProgress(@Request() req: any) {
    return this.progressService.getUserProgress(req.user.userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('update')
  updateProgress(@Request() req: any, @Body() body: any) {
    return this.progressService.updateProgress(req.user.userId, body);
  }
}
