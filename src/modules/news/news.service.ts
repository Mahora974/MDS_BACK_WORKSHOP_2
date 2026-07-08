import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Injectable()
export class NewsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateNewsDto) {
    return this.prisma.news.create({ data });
  }

  findAll() {
    return this.prisma.news.findMany();
  }

  async findOne(id: number) {
    const news = await this.prisma.news.findUnique({ where: { id } });
    if (!news) throw new NotFoundException(`News ${id} introuvable`);
    return news;
  }

  update(id: number, data: UpdateNewsDto) {
    return this.prisma.news.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.news.delete({ where: { id } });
  }
}
