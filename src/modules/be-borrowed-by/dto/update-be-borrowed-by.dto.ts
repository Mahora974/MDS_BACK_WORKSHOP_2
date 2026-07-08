import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsOptional } from 'class-validator';

// Les clés (idUser, idEquipment, startBorrowDate) ne se modifient pas : on recrée l'association.
export class UpdateBeBorrowedByDto {
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  endBorrowDate?: Date;

  @IsOptional()
  @IsBoolean()
  isCurrent?: boolean;
}
