import { PartialType } from '@nestjs/mapped-types';
import { CreateHDto } from './create-h.dto';

export class UpdateHDto extends PartialType(CreateHDto) {}
