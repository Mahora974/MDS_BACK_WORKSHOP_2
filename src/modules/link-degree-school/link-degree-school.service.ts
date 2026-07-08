import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateLinkDegreeSchoolDto } from './dto/create-link-degree-school.dto';

@Injectable()
export class LinkDegreeSchoolService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateLinkDegreeSchoolDto) {
    return this.prisma.linkDegreeSchool.create({ data });
  }

  findAll() {
    return this.prisma.linkDegreeSchool.findMany();
  }

  async findOne(idDegree: number, idSchool: number) {
    const link = await this.prisma.linkDegreeSchool.findFirst({
      where: { idDegree, idSchool },
    });
    if (!link) throw new NotFoundException('Association introuvable');
    return link;
  }

  async remove(idDegree: number, idSchool: number) {
    await this.findOne(idDegree, idSchool);
    await this.prisma.linkDegreeSchool.deleteMany({
      where: { idDegree, idSchool },
    });
    return { deleted: true };
  }
}
