import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from './config/modules/config.module';
import {SlackModule} from 'nestjs-slack';

@Module({
  imports: [ConfigModule, SlackModule.forRoot({
    type: 'api',token: process.env.SLACK_APP_TOKEN
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
