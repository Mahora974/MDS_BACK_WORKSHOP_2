import { Module } from '@nestjs/common';
import { Parametres_baseController } from './parametres_base.controller';
import { Parametres_baseService } from './parametres_base.service';

@Module({
  controllers: [Parametres_baseController],
  providers: [Parametres_baseService],
})
export class Parametres_baseModule {}