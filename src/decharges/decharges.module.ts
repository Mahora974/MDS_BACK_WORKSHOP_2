import { Module } from '@nestjs/common';
import { DechargesController } from './decharges.controller';
import { DechargesService } from './decharges.service';

@Module({
  controllers: [DechargesController],
  providers: [DechargesService],
})
export class DechargesModule {}