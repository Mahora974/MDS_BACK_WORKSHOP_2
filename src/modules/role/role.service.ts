import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateRoleDto) {
    return this.prisma.role.create({ data });
  }

  findAll() {
    return this.prisma.role.findMany();
  }

  async findOne(id: number) {
    const role = await this.prisma.role.findUnique({ where: { id } });
    if (!role) throw new NotFoundException(`Role ${id} introuvable`);
    return role;
  }

  update(id: number, data: UpdateRoleDto) {
    return this.prisma.role.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.role.delete({ where: { id } });
  }
}
