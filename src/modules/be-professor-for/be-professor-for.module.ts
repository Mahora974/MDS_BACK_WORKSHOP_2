import { Module } from '@nestjs/common';
import { BeProfessorForController } from './be-professor-for.controller';
import { BeProfessorForService } from './be-professor-for.service';

@Module({
  controllers: [BeProfessorForController],
  providers: [BeProfessorForService],
})
export class BeProfessorForModule {}
