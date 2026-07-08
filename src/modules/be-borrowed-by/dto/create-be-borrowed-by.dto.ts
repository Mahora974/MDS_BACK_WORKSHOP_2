import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsInt, IsOptional } from 'class-validator';

export class CreateBeBorrowedByDto {
  @IsInt()
  idUser: number;

  @IsInt()
  idEquipment: number;

  @Type(() => Date)
  @IsDate()
  startBorrowDate: Date;

  @Type(() => Date)
  @IsDate()
  endBorrowDate: Date;

  @IsOptional()
  @IsBoolean()
  isCurrent?: boolean;
}
