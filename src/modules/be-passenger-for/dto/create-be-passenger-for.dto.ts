import { IsInt } from 'class-validator';

export class CreateBePassengerForDto {
  @IsInt()
  idPassenger: number;

  @IsInt()
  idCarpool: number;
}
