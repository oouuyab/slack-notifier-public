import {Module} from '@nestjs/common';
import * as NestConfigModule from '@nestjs/config';

@Module({
  imports: [
    NestConfigModule.ConfigModule.forRoot({
      envFilePath: `src/config/envs/.env.${process.env.NODE_ENV}`,
    })
  ]
})
export class ConfigModule {}