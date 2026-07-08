import { Module } from '@nestjs/common';
import { DureesController } from './durees.controller';
import { DureesService } from './durees.service';

@Module({
  controllers: [DureesController],
  providers: [DureesService],
})
export class DureesModule {}