import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(125)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(125)
  surname: string;

  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  password?: string;

  @IsOptional()
  @IsString()
  gridstackLayoutJson?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsInt()
  idRole: number;

  @IsInt()
  idSchool: number;

  @IsOptional()
  @IsInt()
  idClassGroup?: number;

  @IsOptional()
  @IsUUID()
  microsoftUserId?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  microsoftSubject?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  microsoftIssuer?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  microsoftPreferredUsername?: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  lastLoginAt?: Date;
}
