import { Module } from '@nestjs/common';
import { Type_dernier_diplomeController } from './type_dernier_diplome.controller';
import { Type_dernier_diplomeService } from './type_dernier_diplome.service';

@Module({
  controllers: [Type_dernier_diplomeController],
  providers: [Type_dernier_diplomeService],
})
export class Type_dernier_diplomeModule {}