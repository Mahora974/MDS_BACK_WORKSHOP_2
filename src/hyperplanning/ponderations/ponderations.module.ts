import { Module } from '@nestjs/common';
import { PonderationsController } from './ponderations.controller';
import { PonderationsService } from './ponderations.service';

@Module({
  controllers: [PonderationsController],
  providers: [PonderationsService],
})
export class PonderationsModule {}