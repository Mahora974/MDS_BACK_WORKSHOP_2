import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateDegreeDto } from './dto/create-degree.dto';
import { UpdateDegreeDto } from './dto/update-degree.dto';

@Injectable()
export class DegreeService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateDegreeDto) {
    return this.prisma.degree.create({ data });
  }

  findAll() {
    return this.prisma.degree.findMany();
  }

  async findOne(id: number) {
    const degree = await this.prisma.degree.findUnique({ where: { id } });
    if (!degree) throw new NotFoundException(`Degree ${id} introuvable`);
    return degree;
  }

  update(id: number, data: UpdateDegreeDto) {
    return this.prisma.degree.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.degree.delete({ where: { id } });
  }
}
