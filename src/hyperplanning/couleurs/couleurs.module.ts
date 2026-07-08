import { Module } from '@nestjs/common';
import { CouleursController } from './couleurs.controller';
import { CouleursService } from './couleurs.service';

@Module({
  controllers: [CouleursController],
  providers: [CouleursService],
})
export class CouleursModule {}