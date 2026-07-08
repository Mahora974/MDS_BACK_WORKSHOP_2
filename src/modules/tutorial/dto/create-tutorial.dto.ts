import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateTutorialDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;

  @IsInt()
  idCategory: number;

  @IsInt()
  idAuthor: number;

  @IsInt()
  idSchool: number;
}
