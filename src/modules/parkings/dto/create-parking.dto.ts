import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateParkingDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  name?: string;

  @IsInt()
  nbMaxPlace: number;

  // @default en base -> optionnel
  @IsOptional()
  @IsBoolean()
  isFull?: boolean;

  @IsInt()
  idSchool: number;
}
