import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  // Enable CORS for React frontend & external clients
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Global API prefix
  app.setGlobalPrefix('api');

  // Request transformation
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const port = process.env.PORT || 5000;
  await app.listen(port);
  logger.log(`🚀 Chinese Learning Backend (NestJS) running on: http://localhost:${port}/api`);
}

bootstrap();
