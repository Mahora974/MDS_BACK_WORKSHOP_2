import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeTopicDto } from './create-type-topic.dto';

export class UpdateTypeTopicDto extends PartialType(CreateTypeTopicDto) {}
