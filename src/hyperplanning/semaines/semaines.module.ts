import { Module } from '@nestjs/common';
import { SemainesController } from './semaines.controller';
import { SemainesService } from './semaines.service';

@Module({
  controllers: [SemainesController],
  providers: [SemainesService],
})
export class SemainesModule {}