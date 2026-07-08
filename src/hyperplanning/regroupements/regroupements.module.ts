import { Module } from '@nestjs/common';
import { RegroupementsController } from './regroupements.controller';
import { RegroupementsService } from './regroupements.service';

@Module({
  controllers: [RegroupementsController],
  providers: [RegroupementsService],
})
export class RegroupementsModule {}