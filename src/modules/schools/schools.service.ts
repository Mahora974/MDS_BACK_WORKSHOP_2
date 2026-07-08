import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';

@Injectable()
export class SchoolsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateSchoolDto) {
    return this.prisma.school.create({ data });
  }

  findAll() {
    return this.prisma.school.findMany();
  }

  async findOne(id: number) {
    const school = await this.prisma.school.findUnique({ where: { id } });
    if (!school) throw new NotFoundException(`School ${id} introuvable`);
    return school;
  }

  update(id: number, data: UpdateSchoolDto) {
    return this.prisma.school.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.school.delete({ where: { id } });
  }
}
