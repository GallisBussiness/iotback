import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNoeudDto } from './dto/create-noeud.dto';
import { UpdateNoeudDto } from './dto/update-noeud.dto';
import { Noeud, NoeudDocument } from './entities/noeud.entity';

@Injectable()
export class NoeudService {
  constructor(
    @InjectModel(Noeud.name) private NoeudModel: Model<NoeudDocument>,
  ) {}
  async create(createNoeudDto: CreateNoeudDto): Promise<Noeud> {
    try {
      const createdNoeud = new this.NoeudModel(createNoeudDto);
      return await createdNoeud.save();
    } catch (error) {
      console.log(error)
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Noeud[]> {
    try {
      return await this.NoeudModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Noeud> {
    try {
      return await this.NoeudModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findNoeudByChamp(id: string): Promise<Noeud[]> {
    try {
      return await this.NoeudModel.find({champ: id});
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(
    id: string,
    updateNoeudDto: UpdateNoeudDto,
  ): Promise<Noeud> {
    try {
      return await this.NoeudModel.findByIdAndUpdate(id, updateNoeudDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Noeud> {
    try {
      return await this.NoeudModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
