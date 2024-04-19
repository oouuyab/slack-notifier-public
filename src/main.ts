import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 8000);

  console.log(`🪁 Slack-Notifier-Public is running on: ${await app.getUrl()}`);
}

bootstrap();
