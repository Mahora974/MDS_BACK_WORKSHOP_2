import { Module } from '@nestjs/common';
import { RubriquesController } from './rubriques.controller';
import { RubriquesService } from './rubriques.service';

@Module({
  controllers: [RubriquesController],
  providers: [RubriquesService],
})
export class RubriquesModule {}