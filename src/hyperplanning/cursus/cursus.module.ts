import { Module } from '@nestjs/common';
import { CursusController } from './cursus.controller';
import { CursusService } from './cursus.service';

@Module({
  controllers: [CursusController],
  providers: [CursusService],
})
export class CursusModule {}