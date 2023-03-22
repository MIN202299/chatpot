import { Injectable, Logger } from "@nestjs/common";
import { Configuration, OpenAIApi, ChatCompletionRequestMessage, CreateChatCompletionResponse } from 'openai'
import { OPENAI_MODEL } from './openai.config'
import { AxiosResponse, AxiosRequestConfig } from 'axios'
import { BadRequestException } from "@nestjs/common/exceptions/bad-request.exception";

@Injectable()
export class OpenAi {
  private openai: OpenAIApi;
  private configuration;
  private temperature = 0.9; // 0 - 2
  private max_tokens;
  private axiosConfig = {
    timeout: 50000
  }
  private logger = new Logger('CHATPOT')
  constructor() {
    this.configuration = new Configuration({
      apiKey: process.env.API_KEY
    })
    this.openai = new OpenAIApi(this.configuration)
  }

  async chat(messages: Array<ChatCompletionRequestMessage>) {
    let data: CreateChatCompletionResponse
    try {
      const res: any = await this.openai.createChatCompletion({
        messages,
        model: OPENAI_MODEL.CHAT_GEN,
        temperature: this.temperature,
        max_tokens: this.max_tokens
      }, this.axiosConfig)
      console.log(res)
      data = res.data
    } catch(err) {
      this.logger.error(err)
    }
    if (!data) throw new BadRequestException('openai 响应出错')
    return data
  }
}