import { Module } from '@nestjs/common';
import { AppariteursController } from './appariteurs.controller';
import { AppariteursService } from './appariteurs.service';

@Module({
  controllers: [AppariteursController],
  providers: [AppariteursService],
})
export class AppariteursModule {}