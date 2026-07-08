import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBeBorrowedByDto } from './dto/create-be-borrowed-by.dto';
import { UpdateBeBorrowedByDto } from './dto/update-be-borrowed-by.dto';

@Injectable()
export class BeBorrowedByService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateBeBorrowedByDto) {
    return this.prisma.beBorrowedBy.create({ data });
  }

  findAll() {
    return this.prisma.beBorrowedBy.findMany();
  }

  async findOne(idUser: number, idEquipment: number, startBorrowDate: string) {
    const link = await this.prisma.beBorrowedBy.findFirst({
      where: { idUser, idEquipment, startBorrowDate: new Date(startBorrowDate) },
    });
    if (!link) throw new NotFoundException('Association introuvable');
    return link;
  }

  async update(
    idUser: number,
    idEquipment: number,
    startBorrowDate: string,
    data: UpdateBeBorrowedByDto,
  ) {
    await this.findOne(idUser, idEquipment, startBorrowDate);
    await this.prisma.beBorrowedBy.updateMany({
      where: { idUser, idEquipment, startBorrowDate: new Date(startBorrowDate) },
      data,
    });
    return this.findOne(idUser, idEquipment, startBorrowDate);
  }

  async remove(idUser: number, idEquipment: number, startBorrowDate: string) {
    await this.findOne(idUser, idEquipment, startBorrowDate);
    await this.prisma.beBorrowedBy.deleteMany({
      where: { idUser, idEquipment, startBorrowDate: new Date(startBorrowDate) },
    });
    return { deleted: true };
  }
}
