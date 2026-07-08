import { Module } from '@nestjs/common';
import { BeNotifiedForController } from './be-notified-for.controller';
import { BeNotifiedForService } from './be-notified-for.service';

@Module({
  controllers: [BeNotifiedForController],
  providers: [BeNotifiedForService],
})
export class BeNotifiedForModule {}
