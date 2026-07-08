import { Module } from '@nestjs/common';
import { TicketReportController } from './ticket-report.controller';
import { TicketReportService } from './ticket-report.service';

@Module({
  controllers: [TicketReportController],
  providers: [TicketReportService],
})
export class TicketReportModule {}
