import { IsInt } from 'class-validator';

export class CreateBeNotifiedForDto {
  @IsInt()
  idUser: number;

  @IsInt()
  idTypeEvent: number;
}
