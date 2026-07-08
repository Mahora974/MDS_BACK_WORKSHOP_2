import { Type } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateAuthSessionDto {
  @IsInt()
  idUser: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  sessionTokenHash: string;

  @Type(() => Date)
  @IsDate()
  expiresAt: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  revokedAt?: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  ipAddress: string;

  @IsString()
  @IsNotEmpty()
  userAgent: string;
}
