import { PartialType } from '@nestjs/mapped-types';
import { CreateDht11Dto } from './create-dht11.dto';

export class UpdateDht11Dto extends PartialType(CreateDht11Dto) {}
