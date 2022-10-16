import { Injectable } from '@nestjs/common';
import { CreateHDto } from './dto/create-h.dto';
import { UpdateHDto } from './dto/update-h.dto';

@Injectable()
export class HsService {
  create(createHDto: CreateHDto) {
    return 'This action adds a new h';
  }

  findAll() {
    return `This action returns all hs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} h`;
  }

  update(id: number, updateHDto: UpdateHDto) {
    return `This action updates a #${id} h`;
  }

  remove(id: number) {
    return `This action removes a #${id} h`;
  }
}
