import {Injectable} from '@nestjs/common';
import {SlackService} from 'nestjs-slack';

@Injectable()
export class AppService {
  constructor(private _slackService: SlackService) {
  }

  async postMessage(param: any): Promise<void> {
    try {
      await this._slackService.postMessage({
        channel: param.channel,
        blocks: param.block,
      });
    } catch (error) {
      console.error(JSON.stringify(error.data));
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
