import { Module } from '@nestjs/common';
import { Motifs_dechargeController } from './motifs_decharge.controller';
import { Motifs_dechargeService } from './motifs_decharge.service';

@Module({
  controllers: [Motifs_dechargeController],
  providers: [Motifs_dechargeService],
})
export class Motifs_dechargeModule {}