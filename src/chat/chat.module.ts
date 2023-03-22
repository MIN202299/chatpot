import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller'
import { OpenAi } from '../core/openai.service'

@Module({
  imports: [],
  providers: [OpenAi],
  controllers: [ChatController]
})
export class ChatModule {}