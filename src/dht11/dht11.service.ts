import { Injectable } from '@nestjs/common';
import { CreateDht11Dto } from './dto/create-dht11.dto';
import { UpdateDht11Dto } from './dto/update-dht11.dto';

@Injectable()
export class Dht11Service {
  create(createDht11Dto: CreateDht11Dto) {
    return 'This action adds a new dht11';
  }

  findAll() {
    return `This action returns all dht11`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dht11`;
  }

  update(id: number, updateDht11Dto: UpdateDht11Dto) {
    return `This action updates a #${id} dht11`;
  }

  remove(id: number) {
    return `This action removes a #${id} dht11`;
  }
}
