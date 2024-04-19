import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/message')
  async postMessage(@Body() body: any): Promise<void> {
    console.log(body);
    await this.appService.postMessage(body);
  }
}
