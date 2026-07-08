import { Module } from '@nestjs/common';
import { FamillesController } from './familles.controller';
import { FamillesService } from './familles.service';

@Module({
  controllers: [FamillesController],
  providers: [FamillesService],
})
export class FamillesModule {}