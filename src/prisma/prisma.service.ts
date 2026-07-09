import 'dotenv/config';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const schema = PrismaService.schemaFromUrl(process.env.DATABASE_URL);
    const adapter = new PrismaPg(
      { connectionString: process.env.DATABASE_URL },
      schema ? { schema } : undefined,
    );
    super({ adapter });
  }

  private static schemaFromUrl(url?: string): string | undefined {
    try {
      return new URL(url ?? '').searchParams.get('schema') ?? undefined;
    } catch {
      return undefined;
    }
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
