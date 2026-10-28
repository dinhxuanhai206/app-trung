import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AiChatService } from './ai-chat.service';

@Controller('ai-chat')
export class AiChatController {
  constructor(private readonly aiChatService: AiChatService) {}

  @Get('personas')
  getPersonas() {
    return this.aiChatService.getPersonas();
  }

  @Get('personas/:id')
  getPersonaDetail(@Param('id') id: string) {
    return this.aiChatService.getPersonaById(id);
  }

  @Get('topics')
  getTopics() {
    return this.aiChatService.getQuickTopics();
  }

  @Post('analyze')
  analyzeSpeech(@Body() body: { text: string }) {
    return this.aiChatService.analyzeSpoken(body.text);
  }

  @Post('message')
  sendMessage(
    @Body() body: { personaId: string; userText: string },
  ) {
    const analysis = this.aiChatService.analyzeSpoken(body.userText);
    const reply = this.aiChatService.generateResponse(
      body.personaId,
      body.userText,
    );

    return {
      personaId: body.personaId,
      userText: body.userText,
      analysis,
      reply,
      timestamp: new Date().toISOString(),
    };
  }
}
