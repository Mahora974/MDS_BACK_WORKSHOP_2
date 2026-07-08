import { Module } from '@nestjs/common';
import { Services_notationController } from './services_notation.controller';
import { Services_notationService } from './services_notation.service';

@Module({
  controllers: [Services_notationController],
  providers: [Services_notationService],
})
export class Services_notationModule {}