import { Module } from '@nestjs/common';
import { TypeReportController } from './type-report.controller';
import { TypeReportService } from './type-report.service';

@Module({
  controllers: [TypeReportController],
  providers: [TypeReportService],
})
export class TypeReportModule {}
