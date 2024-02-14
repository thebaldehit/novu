import { ICredentials } from '@novu/shared';
import { ChannelTypeEnum } from '@novu/stateless';
import { TelegramChatProvider } from '@novu/telegram';
import { BaseChatHandler } from './base.handler';

export class TelegramHandler extends BaseChatHandler {
  constructor() {
    super('telegram', ChannelTypeEnum.CHAT);
  }

  buildProvider(credentials: ICredentials) {
    const config: { apiKey: string } = { apiKey: credentials.apiKey as string };
    this.provider = new TelegramChatProvider(config);
  }
}
