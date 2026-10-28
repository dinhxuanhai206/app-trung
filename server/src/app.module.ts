import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { LessonsModule } from './lessons/lessons.module';
import { ProgressModule } from './progress/progress.module';
import { FormulasModule } from './formulas/formulas.module';
import { ScenariosModule } from './scenarios/scenarios.module';
import { VocabModule } from './vocab/vocab.module';
import { AiChatModule } from './ai-chat/ai-chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    LessonsModule,
    ProgressModule,
    FormulasModule,
    ScenariosModule,
    VocabModule,
    AiChatModule,
  ],
})
export class AppModule {}
