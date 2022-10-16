import { PartialType } from '@nestjs/mapped-types';
import { CreatePhDto } from './create-ph.dto';

export class UpdatePhDto extends PartialType(CreatePhDto) {}
