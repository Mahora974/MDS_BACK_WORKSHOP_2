import { Module } from '@nestjs/common';
import { WorkAtController } from './work-at.controller';
import { WorkAtService } from './work-at.service';

@Module({
  controllers: [WorkAtController],
  providers: [WorkAtService],
})
export class WorkAtModule {}
