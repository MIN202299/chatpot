import { OpenAi } from './../core/openai.service';
import { Controller, Post, Body} from "@nestjs/common";
import { ChatCompletionRequestMessage } from 'openai'

@Controller('chat')
export class ChatController {
  constructor(
    private readonly openAi: OpenAi
  ) {}

  @Post('message')
  // Todo 根据管道对输入值进行校验
  // Todo 为接口添加守卫
  getMessage(@Body() messages: Array<ChatCompletionRequestMessage>) {
    // messages
    for (let msg of messages) {
      // console.log(msg.role) // system user assistant
      // console.log(msg.content) // content string msg.name ??
      console.log(msg.role, msg.content)
    }
    return this.openAi.chat(messages)
  }
}