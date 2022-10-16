import { Injectable } from '@nestjs/common';
import { CreateHfDto } from './dto/create-hf.dto';
import { UpdateHfDto } from './dto/update-hf.dto';

@Injectable()
export class HfService {
  create(createHfDto: CreateHfDto) {
    return 'This action adds a new hf';
  }

  findAll() {
    return `This action returns all hf`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hf`;
  }

  update(id: number, updateHfDto: UpdateHfDto) {
    return `This action updates a #${id} hf`;
  }

  remove(id: number) {
    return `This action removes a #${id} hf`;
  }
}
