import {Injectable} from '@nestjs/common';
import {SlackService} from 'nestjs-slack';

interface PostMessagePayloadInterface {
  channel: string;
  blocks: any[];
}

@Injectable()
export class AppService {
  constructor(private _slackService: SlackService) {
  }

  async postMessage(payload: PostMessagePayloadInterface): Promise<void> {
    try {
      await this._slackService.postMessage({
        channel: payload.channel,
        blocks: payload.blocks
      });
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
