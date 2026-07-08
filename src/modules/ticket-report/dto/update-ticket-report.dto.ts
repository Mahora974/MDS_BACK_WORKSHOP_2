import { PartialType } from '@nestjs/mapped-types';
import { CreateTicketReportDto } from './create-ticket-report.dto';

export class UpdateTicketReportDto extends PartialType(CreateTicketReportDto) {}
