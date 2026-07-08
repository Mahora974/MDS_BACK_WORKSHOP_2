import { Module } from '@nestjs/common';
import { Baccalaureat_specialitesController } from './baccalaureat_specialites.controller';
import { Baccalaureat_specialitesService } from './baccalaureat_specialites.service';

@Module({
  controllers: [Baccalaureat_specialitesController],
  providers: [Baccalaureat_specialitesService],
})
export class Baccalaureat_specialitesModule {}