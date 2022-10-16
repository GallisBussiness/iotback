import { PartialType } from '@nestjs/mapped-types';
import { CreateAgriculteurDto } from './create-agriculteur.dto';

export class UpdateAgriculteurDto extends PartialType(CreateAgriculteurDto) {}
