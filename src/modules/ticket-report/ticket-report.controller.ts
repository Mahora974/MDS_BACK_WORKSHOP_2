import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TicketReportService } from './ticket-report.service';
import { CreateTicketReportDto } from './dto/create-ticket-report.dto';
import { UpdateTicketReportDto } from './dto/update-ticket-report.dto';

@Controller('ticket-reports')
export class TicketReportController {
  constructor(private readonly ticketReportService: TicketReportService) {}

  @Post()
  create(@Body() dto: CreateTicketReportDto) {
    return this.ticketReportService.create(dto);
  }

  @Get()
  findAll() {
    return this.ticketReportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ticketReportService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateTicketReportDto) {
    return this.ticketReportService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ticketReportService.remove(id);
  }
}
