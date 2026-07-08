import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateForumMessageDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsOptional()
  @IsBoolean()
  isAnswer?: boolean;

  @IsInt()
  idTopic: number;

  @IsInt()
  idAuthor: number;
}
