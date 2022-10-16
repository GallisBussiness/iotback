import { PartialType } from '@nestjs/mapped-types';
import { CreateNoeudDto } from './create-noeud.dto';

export class UpdateNoeudDto extends PartialType(CreateNoeudDto) {}
