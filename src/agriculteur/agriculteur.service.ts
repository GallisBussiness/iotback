import { Injectable } from '@nestjs/common';
import { CreateAgriculteurDto } from './dto/create-agriculteur.dto';
import { UpdateAgriculteurDto } from './dto/update-agriculteur.dto';

@Injectable()
export class AgriculteurService {
  create(createAgriculteurDto: CreateAgriculteurDto) {
    return 'This action adds a new agriculteur';
  }

  findAll() {
    return `This action returns all agriculteur`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agriculteur`;
  }

  update(id: number, updateAgriculteurDto: UpdateAgriculteurDto) {
    return `This action updates a #${id} agriculteur`;
  }

  remove(id: number) {
    return `This action removes a #${id} agriculteur`;
  }
}
