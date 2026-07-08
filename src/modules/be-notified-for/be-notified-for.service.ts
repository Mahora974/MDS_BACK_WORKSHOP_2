import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBeNotifiedForDto } from './dto/create-be-notified-for.dto';

@Injectable()
export class BeNotifiedForService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateBeNotifiedForDto) {
    return this.prisma.beNotifiedFor.create({ data });
  }

  findAll() {
    return this.prisma.beNotifiedFor.findMany();
  }

  async findOne(idUser: number, idTypeEvent: number) {
    const link = await this.prisma.beNotifiedFor.findFirst({
      where: { idUser, idTypeEvent },
    });
    if (!link) throw new NotFoundException('Association introuvable');
    return link;
  }

  async remove(idUser: number, idTypeEvent: number) {
    await this.findOne(idUser, idTypeEvent);
    await this.prisma.beNotifiedFor.deleteMany({
      where: { idUser, idTypeEvent },
    });
    return { deleted: true };
  }
}
