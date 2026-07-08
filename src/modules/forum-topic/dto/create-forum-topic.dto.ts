import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateForumTopicDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  idAuthor: number;

  @IsInt()
  idTypeTopic: number;
}
