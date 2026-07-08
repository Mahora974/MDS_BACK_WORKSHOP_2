import { Module } from '@nestjs/common';
import { BaccalaureatsController } from './baccalaureats.controller';
import { BaccalaureatsService } from './baccalaureats.service';

@Module({
  controllers: [BaccalaureatsController],
  providers: [BaccalaureatsService],
})
export class BaccalaureatsModule {}