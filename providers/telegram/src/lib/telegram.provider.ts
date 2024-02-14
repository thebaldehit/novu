import {
  ChannelTypeEnum,
  ISendMessageSuccessResponse,
  IChatOptions,
  IChatProvider,
} from '@novu/stateless';

import { Telegraf } from 'telegraf';

export class TelegramChatProvider implements IChatProvider {
  id = 'telegram';
  channelType = ChannelTypeEnum.CHAT as ChannelTypeEnum.CHAT;
  private bot: Telegraf;

  constructor(
    private config: {
      apiKey: string;
    }
  ) {
    console.log(config);
    this.bot = new Telegraf(this.config.apiKey);
  }

  async sendMessage(
    options: IChatOptions
  ): Promise<ISendMessageSuccessResponse> {
    try {
      this.bot.telegram.sendMessage(options.channel, options.content);
    } catch {
      return;
    }
    return {
      id: 'id_returned_by_provider',
      date: 'current_time',
    };
  }
}
