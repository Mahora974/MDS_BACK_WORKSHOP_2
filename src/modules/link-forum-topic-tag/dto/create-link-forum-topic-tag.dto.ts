import { IsInt } from 'class-validator';

export class CreateLinkForumTopicTagDto {
  @IsInt()
  idForumTopic: number;

  @IsInt()
  idTag: number;
}
