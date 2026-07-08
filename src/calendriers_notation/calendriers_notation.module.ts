import { Module } from '@nestjs/common';
import { Calendriers_notationController } from './calendriers_notation.controller';
import { Calendriers_notationService } from './calendriers_notation.service';

@Module({
  controllers: [Calendriers_notationController],
  providers: [Calendriers_notationService],
})
export class Calendriers_notationModule {}