import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateParkingDto } from './dto/create-parking.dto';
import { UpdateParkingDto } from './dto/update-parking.dto';

@Injectable()
export class ParkingsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateParkingDto) {
    return this.prisma.parking.create({ data });
  }

  findAll() {
    return this.prisma.parking.findMany();
  }

  async findOne(id: number) {
    const parking = await this.prisma.parking.findUnique({ where: { id } });
    if (!parking) throw new NotFoundException(`Parking ${id} introuvable`);
    return parking;
  }

  update(id: number, data: UpdateParkingDto) {
    return this.prisma.parking.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.parking.delete({ where: { id } });
  }
}
