import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCarpoolDto } from './dto/create-carpool.dto';
import { UpdateCarpoolDto } from './dto/update-carpool.dto';

@Injectable()
export class CarpoolsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateCarpoolDto) {
    return this.prisma.carpool.create({ data });
  }

  findAll() {
    return this.prisma.carpool.findMany();
  }

  async findOne(id: number) {
    const carpool = await this.prisma.carpool.findUnique({ where: { id } });
    if (!carpool) throw new NotFoundException(`Carpool ${id} introuvable`);
    return carpool;
  }

  update(id: number, data: UpdateCarpoolDto) {
    return this.prisma.carpool.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.carpool.delete({ where: { id } });
  }
}
