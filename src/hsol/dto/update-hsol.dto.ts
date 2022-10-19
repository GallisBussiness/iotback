import { PartialType } from '@nestjs/mapped-types';
import { CreateHsolDto } from './create-hsol.dto';

export class UpdateHsolDto extends PartialType(CreateHsolDto) {}
