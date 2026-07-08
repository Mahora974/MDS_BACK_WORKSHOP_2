import { Module } from '@nestjs/common';
import { DispensesController } from './dispenses.controller';
import { DispensesService } from './dispenses.service';

@Module({
  controllers: [DispensesController],
  providers: [DispensesService],
})
export class DispensesModule {}