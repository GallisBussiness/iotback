import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCultureDto } from './dto/create-culture.dto';
import { UpdateCultureDto } from './dto/update-culture.dto';
import { Culture, CultureDocument } from './entities/culture.entity';

@Injectable()
export class CultureService {
  constructor(
    @InjectModel(Culture.name) private cultureModel: Model<CultureDocument>,
  ) {}
  async create(createCultureDto: CreateCultureDto): Promise<Culture> {
    try {
      const createdCulture = new this.cultureModel(createCultureDto);
      return await createdCulture.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Culture[]> {
    try {
      return await this.cultureModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Culture> {
    try {
      return await this.cultureModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(
    id: string,
    updateCultureDto: UpdateCultureDto,
  ): Promise<Culture> {
    try {
      return await this.cultureModel.findByIdAndUpdate(id, updateCultureDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Culture> {
    try {
      return await this.cultureModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
