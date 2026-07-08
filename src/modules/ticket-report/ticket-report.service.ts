import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTicketReportDto } from './dto/create-ticket-report.dto';
import { UpdateTicketReportDto } from './dto/update-ticket-report.dto';

@Injectable()
export class TicketReportService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateTicketReportDto) {
    return this.prisma.ticketReport.create({ data });
  }

  findAll() {
    return this.prisma.ticketReport.findMany();
  }

  async findOne(id: number) {
    const ticketReport = await this.prisma.ticketReport.findUnique({ where: { id } });
    if (!ticketReport) throw new NotFoundException(`TicketReport ${id} introuvable`);
    return ticketReport;
  }

  update(id: number, data: UpdateTicketReportDto) {
    return this.prisma.ticketReport.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.ticketReport.delete({ where: { id } });
  }
}
