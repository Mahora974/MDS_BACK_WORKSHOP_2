import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';

@Injectable()
export class EquipmentService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateEquipmentDto) {
    return this.prisma.equipment.create({ data });
  }

  findAll() {
    return this.prisma.equipment.findMany();
  }

  async findOne(id: number) {
    const equipment = await this.prisma.equipment.findUnique({ where: { id } });
    if (!equipment) throw new NotFoundException(`Equipment ${id} introuvable`);
    return equipment;
  }

  update(id: number, data: UpdateEquipmentDto) {
    return this.prisma.equipment.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.equipment.delete({ where: { id } });
  }
}
