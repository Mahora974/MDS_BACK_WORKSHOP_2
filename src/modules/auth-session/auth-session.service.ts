import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAuthSessionDto } from './dto/create-auth-session.dto';
import { UpdateAuthSessionDto } from './dto/update-auth-session.dto';

@Injectable()
export class AuthSessionService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateAuthSessionDto) {
    return this.prisma.authSession.create({ data });
  }

  findAll() {
    return this.prisma.authSession.findMany();
  }

  async findOne(id: number) {
    const authSession = await this.prisma.authSession.findUnique({ where: { id } });
    if (!authSession) throw new NotFoundException(`AuthSession ${id} introuvable`);
    return authSession;
  }

  update(id: number, data: UpdateAuthSessionDto) {
    return this.prisma.authSession.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.authSession.delete({ where: { id } });
  }
}
