import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBePassengerForDto } from './dto/create-be-passenger-for.dto';

@Injectable()
export class BePassengerForService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateBePassengerForDto) {
    return this.prisma.bePassengerFor.create({ data });
  }

  findAll() {
    return this.prisma.bePassengerFor.findMany();
  }

  async findOne(idPassenger: number, idCarpool: number) {
    const link = await this.prisma.bePassengerFor.findFirst({
      where: { idPassenger, idCarpool },
    });
    if (!link) throw new NotFoundException('Association introuvable');
    return link;
  }

  async remove(idPassenger: number, idCarpool: number) {
    await this.findOne(idPassenger, idCarpool);
    await this.prisma.bePassengerFor.deleteMany({
      where: { idPassenger, idCarpool },
    });
    return { deleted: true };
  }
}
