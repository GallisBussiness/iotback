import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePhDto } from './dto/create-ph.dto';
import { UpdatePhDto } from './dto/update-ph.dto';
import { Ph, PhDocument } from './entities/ph.entity';

@Injectable()
export class PhService {
  constructor(
    @InjectModel(Ph.name) private PhModel: Model<PhDocument>,
  ) {}
  async create(createPhDto: CreatePhDto): Promise<Ph> {
    try {
      const createdPh = new this.PhModel(createPhDto);
      return await createdPh.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Ph[]> {
    try {
      return await this.PhModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Ph> {
    try {
      return await this.PhModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(
    id: string,
    updatePhDto: UpdatePhDto,
  ): Promise<Ph> {
    try {
      return await this.PhModel.findByIdAndUpdate(id, updatePhDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Ph> {
    try {
      return await this.PhModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
