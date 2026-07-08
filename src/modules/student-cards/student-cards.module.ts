import { Module } from '@nestjs/common';
import { StudentCardsController } from './student-cards.controller';
import { StudentCardsService } from './student-cards.service';

@Module({
  controllers: [StudentCardsController],
  providers: [StudentCardsService],
})
export class StudentCardsModule {}
