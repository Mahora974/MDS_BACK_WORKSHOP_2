import { Module } from '@nestjs/common';
import { AlternancesController } from './alternances.controller';
import { AlternancesService } from './alternances.service';

@Module({
  controllers: [AlternancesController],
  providers: [AlternancesService],
})
export class AlternancesModule {}