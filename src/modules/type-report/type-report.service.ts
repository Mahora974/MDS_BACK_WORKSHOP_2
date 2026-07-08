import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTypeReportDto } from './dto/create-type-report.dto';
import { UpdateTypeReportDto } from './dto/update-type-report.dto';

@Injectable()
export class TypeReportService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateTypeReportDto) {
    return this.prisma.typeReport.create({ data });
  }

  findAll() {
    return this.prisma.typeReport.findMany();
  }

  async findOne(id: number) {
    const typeReport = await this.prisma.typeReport.findUnique({ where: { id } });
    if (!typeReport) throw new NotFoundException(`TypeReport ${id} introuvable`);
    return typeReport;
  }

  update(id: number, data: UpdateTypeReportDto) {
    return this.prisma.typeReport.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.typeReport.delete({ where: { id } });
  }
}
