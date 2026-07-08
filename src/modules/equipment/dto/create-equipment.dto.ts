import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateEquipmentDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  serialNumber?: string;

  @Type(() => Date)
  @IsDate()
  receptionDate: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  qrCode: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsBoolean()
  isBorrowed?: boolean;

  @IsOptional()
  @IsInt()
  idCurrentBorrower?: number;

  @IsInt()
  idSchool: number;
}
