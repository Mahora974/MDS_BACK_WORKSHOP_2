import { Module } from '@nestjs/common';
import { Motifs_annulationController } from './motifs_annulation.controller';
import { Motifs_annulationService } from './motifs_annulation.service';

@Module({
  controllers: [Motifs_annulationController],
  providers: [Motifs_annulationService],
})
export class Motifs_annulationModule {}