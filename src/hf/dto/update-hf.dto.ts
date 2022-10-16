import { PartialType } from '@nestjs/mapped-types';
import { CreateHfDto } from './create-hf.dto';

export class UpdateHfDto extends PartialType(CreateHfDto) {}
