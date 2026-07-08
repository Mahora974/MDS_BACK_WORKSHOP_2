import { Module } from '@nestjs/common';
import { Couts_horaires_enseignantsController } from './couts_horaires_enseignants.controller';
import { Couts_horaires_enseignantsService } from './couts_horaires_enseignants.service';

@Module({
  controllers: [Couts_horaires_enseignantsController],
  providers: [Couts_horaires_enseignantsService],
})
export class Couts_horaires_enseignantsModule {}