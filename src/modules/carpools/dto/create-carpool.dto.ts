import { Type } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCarpoolDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  departure: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  arrival: string;

  @IsInt()
  nbAvailablePlaces: number;

  @IsInt()
  nbMaxPlaces: number;

  @Type(() => Date)
  @IsDate()
  startDate: Date;

  @IsInt()
  idDriver: number;
}
