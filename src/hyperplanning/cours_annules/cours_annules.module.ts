import { Module } from '@nestjs/common';
import { Cours_annulesController } from './cours_annules.controller';
import { Cours_annulesService } from './cours_annules.service';

@Module({
  controllers: [Cours_annulesController],
  providers: [Cours_annulesService],
})
export class Cours_annulesModule {}