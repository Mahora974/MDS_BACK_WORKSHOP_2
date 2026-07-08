import { Module } from '@nestjs/common';
import { BePassengerForController } from './be-passenger-for.controller';
import { BePassengerForService } from './be-passenger-for.service';

@Module({
  controllers: [BePassengerForController],
  providers: [BePassengerForService],
})
export class BePassengerForModule {}
