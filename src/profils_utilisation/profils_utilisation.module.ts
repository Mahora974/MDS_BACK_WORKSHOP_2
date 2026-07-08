import { Module } from '@nestjs/common';
import { Profils_utilisationController } from './profils_utilisation.controller';
import { Profils_utilisationService } from './profils_utilisation.service';

@Module({
  controllers: [Profils_utilisationController],
  providers: [Profils_utilisationService],
})
export class Profils_utilisationModule {}