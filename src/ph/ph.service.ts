import { Injectable } from '@nestjs/common';
import { CreatePhDto } from './dto/create-ph.dto';
import { UpdatePhDto } from './dto/update-ph.dto';

@Injectable()
export class PhService {
  create(createPhDto: CreatePhDto) {
    return 'This action adds a new ph';
  }

  findAll() {
    return `This action returns all ph`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ph`;
  }

  update(id: number, updatePhDto: UpdatePhDto) {
    return `This action updates a #${id} ph`;
  }

  remove(id: number) {
    return `This action removes a #${id} ph`;
  }
}
