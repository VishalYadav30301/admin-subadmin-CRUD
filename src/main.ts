import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserService } from './modules/user/user.service';

import { UserRole } from './models/user.schema';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist: true}))

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
