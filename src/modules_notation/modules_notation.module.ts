import { Module } from '@nestjs/common';
import { Modules_notationController } from './modules_notation.controller';
import { Modules_notationService } from './modules_notation.service';

@Module({
  controllers: [Modules_notationController],
  providers: [Modules_notationService],
})
export class Modules_notationModule {}