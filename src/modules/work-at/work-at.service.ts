import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateWorkAtDto } from './dto/create-work-at.dto';

@Injectable()
export class WorkAtService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateWorkAtDto) {
    return this.prisma.workAt.create({ data });
  }

  findAll() {
    return this.prisma.workAt.findMany();
  }

  async findOne(idUser: number, idSchool: number) {
    const link = await this.prisma.workAt.findFirst({
      where: { idUser, idSchool },
    });
    if (!link) throw new NotFoundException('Association introuvable');
    return link;
  }

  async remove(idUser: number, idSchool: number) {
    await this.findOne(idUser, idSchool);
    await this.prisma.workAt.deleteMany({
      where: { idUser, idSchool },
    });
    return { deleted: true };
  }
}
