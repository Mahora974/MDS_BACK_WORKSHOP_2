import { Module } from '@nestjs/common';
import { Couts_horaires_sallesController } from './couts_horaires_salles.controller';
import { Couts_horaires_sallesService } from './couts_horaires_salles.service';

@Module({
  controllers: [Couts_horaires_sallesController],
  providers: [Couts_horaires_sallesService],
})
export class Couts_horaires_sallesModule {}