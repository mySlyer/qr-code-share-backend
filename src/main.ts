import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { headersMiddleware } from './middleware/HeadersMiddleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(headersMiddleware);
  await app.listen(3000);
}
bootstrap();
