import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBeProfessorForDto } from './dto/create-be-professor-for.dto';
import { UpdateBeProfessorForDto } from './dto/update-be-professor-for.dto';

@Injectable()
export class BeProfessorForService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateBeProfessorForDto) {
    return this.prisma.beProfessorFor.create({ data });
  }

  findAll() {
    return this.prisma.beProfessorFor.findMany();
  }

  async findOne(idUser: number, idClassGroup: number, idCategory: number) {
    const link = await this.prisma.beProfessorFor.findFirst({
      where: { idUser, idClassGroup, idCategory },
    });
    if (!link) throw new NotFoundException('Association introuvable');
    return link;
  }

  async update(
    idUser: number,
    idClassGroup: number,
    idCategory: number,
    data: UpdateBeProfessorForDto,
  ) {
    await this.findOne(idUser, idClassGroup, idCategory);
    await this.prisma.beProfessorFor.updateMany({
      where: { idUser, idClassGroup, idCategory },
      data,
    });
    return this.findOne(idUser, idClassGroup, idCategory);
  }

  async remove(idUser: number, idClassGroup: number, idCategory: number) {
    await this.findOne(idUser, idClassGroup, idCategory);
    await this.prisma.beProfessorFor.deleteMany({
      where: { idUser, idClassGroup, idCategory },
    });
    return { deleted: true };
  }
}
