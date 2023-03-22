import { ChatModule } from './chat/chat.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot(), // 默认加载 .env 文件
    ChatModule
  ],
})
export class AppModule {}
