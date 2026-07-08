import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateNewsDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  // @default(true) en base -> optionnel
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsInt()
  idTypeEvent: number;

  @IsInt()
  idSchool: number;

  @IsInt()
  idAuthor: number;
}
