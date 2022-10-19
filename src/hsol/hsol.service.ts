import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHsolDto } from './dto/create-hsol.dto';
import { UpdateHsolDto } from './dto/update-hsol.dto';
import { Hsol, HsolDocument } from './entities/hsol.entity';

@Injectable()
export class HsolService {
  constructor(
    @InjectModel(Hsol.name) private HsolModel: Model<HsolDocument>,
  ) {}
  async create(createHsolDto: CreateHsolDto): Promise<Hsol> {
    try {
      const createdHsol = new this.HsolModel(createHsolDto);
      return await createdHsol.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Hsol[]> {
    try {
      return await this.HsolModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Hsol> {
    try {
      return await this.HsolModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(
    id: string,
    updateHsolDto: UpdateHsolDto,
  ): Promise<Hsol> {
    try {
      return await this.HsolModel.findByIdAndUpdate(id, updateHsolDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Hsol> {
    try {
      return await this.HsolModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
