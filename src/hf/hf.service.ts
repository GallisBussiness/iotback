import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHfDto } from './dto/create-hf.dto';
import { UpdateHfDto } from './dto/update-hf.dto';
import { Hf, HfDocument } from './entities/hf.entity';

@Injectable()
export class HfService {
  constructor(
    @InjectModel(Hf.name) private HfModel: Model<HfDocument>,
  ) {}
  async create(createHfDto: CreateHfDto): Promise<Hf> {
    try {
      const createdHf = new this.HfModel(createHfDto);
      return await createdHf.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Hf[]> {
    try {
      return await this.HfModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Hf> {
    try {
      return await this.HfModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(
    id: string,
    updateHfDto: UpdateHfDto,
  ): Promise<Hf> {
    try {
      return await this.HfModel.findByIdAndUpdate(id, updateHfDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Hf> {
    try {
      return await this.HfModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
