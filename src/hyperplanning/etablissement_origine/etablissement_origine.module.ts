import { Module } from '@nestjs/common';
import { Etablissement_origineController } from './etablissement_origine.controller';
import { Etablissement_origineService } from './etablissement_origine.service';

@Module({
  controllers: [Etablissement_origineController],
  providers: [Etablissement_origineService],
})
export class Etablissement_origineModule {}