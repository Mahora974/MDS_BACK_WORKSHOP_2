import { Module } from '@nestjs/common';
import { Motifs_dispenseController } from './motifs_dispense.controller';
import { Motifs_dispenseService } from './motifs_dispense.service';

@Module({
  controllers: [Motifs_dispenseController],
  providers: [Motifs_dispenseService],
})
export class Motifs_dispenseModule {}