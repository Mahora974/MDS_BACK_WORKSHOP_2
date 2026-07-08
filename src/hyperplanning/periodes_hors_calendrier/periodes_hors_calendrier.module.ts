import { Module } from '@nestjs/common';
import { Periodes_hors_calendrierController } from './periodes_hors_calendrier.controller';
import { Periodes_hors_calendrierService } from './periodes_hors_calendrier.service';

@Module({
  controllers: [Periodes_hors_calendrierController],
  providers: [Periodes_hors_calendrierService],
})
export class Periodes_hors_calendrierModule {}