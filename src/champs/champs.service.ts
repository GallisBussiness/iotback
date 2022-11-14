import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChampDto } from './dto/create-champ.dto';
import { UpdateChampDto } from './dto/update-champ.dto';
import { Champ, ChampDocument } from './entities/champ.entity';

@Injectable()
export class ChampsService {
  constructor(
    @InjectModel(Champ.name) private champModel: Model<ChampDocument>,
  ) {}

  async create(createChampDto: CreateChampDto): Promise<Champ> {
    try {
      const createdChamp = new this.champModel(createChampDto);
      return await createdChamp.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Champ[]> {
    try {
      return await this.champModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Champ> {
    try {
      return await this.champModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findByUser(id: string): Promise<Champ[]> {
    try {
      return await this.champModel.find({user: id});
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateChampDto: UpdateChampDto): Promise<Champ> {
    try {
      return this.champModel.findByIdAndUpdate(id, updateChampDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Champ> {
    try {
      return await this.champModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
