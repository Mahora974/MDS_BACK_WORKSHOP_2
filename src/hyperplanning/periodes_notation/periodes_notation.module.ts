import { Module } from '@nestjs/common';
import { Periodes_notationController } from './periodes_notation.controller';
import { Periodes_notationService } from './periodes_notation.service';

@Module({
  controllers: [Periodes_notationController],
  providers: [Periodes_notationService],
})
export class Periodes_notationModule {}