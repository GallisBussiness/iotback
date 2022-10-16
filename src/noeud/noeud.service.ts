import { Injectable } from '@nestjs/common';
import { CreateNoeudDto } from './dto/create-noeud.dto';
import { UpdateNoeudDto } from './dto/update-noeud.dto';

@Injectable()
export class NoeudService {
  create(createNoeudDto: CreateNoeudDto) {
    return 'This action adds a new noeud';
  }

  findAll() {
    return `This action returns all noeud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} noeud`;
  }

  update(id: number, updateNoeudDto: UpdateNoeudDto) {
    return `This action updates a #${id} noeud`;
  }

  remove(id: number) {
    return `This action removes a #${id} noeud`;
  }
}
