import { Module } from '@nestjs/common';
import { BeBorrowedByController } from './be-borrowed-by.controller';
import { BeBorrowedByService } from './be-borrowed-by.service';

@Module({
  controllers: [BeBorrowedByController],
  providers: [BeBorrowedByService],
})
export class BeBorrowedByModule {}
