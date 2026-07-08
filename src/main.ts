import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import type { Request, Response } from 'express';
import { AppModule } from './app.module';
import { PrismaExceptionFilter } from './hyperplanning/common/prisma-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new PrismaExceptionFilter());

  // --- OpenAPI + documentation Scalar ---
  const openApiConfig = new DocumentBuilder()
    .setTitle('Workshop API')
    .setDescription('API du projet workshop (NestJS + Prisma + PostgreSQL)')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, openApiConfig);

  // Spec brute (utile pour import Postman/Insomnia/CI)
  app.use('/openapi.json', (_req: Request, res: Response) => res.json(document));

  // UI Scalar sur /reference
  app.use('/reference', apiReference({ content: document }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
