import { Module } from '@nestjs/common';
import { Motifs_absence_retardController } from './motifs_absence_retard.controller';
import { Motifs_absence_retardService } from './motifs_absence_retard.service';

@Module({
  controllers: [Motifs_absence_retardController],
  providers: [Motifs_absence_retardService],
})
export class Motifs_absence_retardModule {}