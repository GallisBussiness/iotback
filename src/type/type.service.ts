import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Type, TypeDocument } from './entities/type.entity';

@Injectable()
export class TypeService {
  constructor(@InjectModel(Type.name) private typeModel: Model<TypeDocument>) {}
  async create(createTypeDto: CreateTypeDto): Promise<Type> {
    try {
      const createdType = new this.typeModel(createTypeDto);
      return await createdType.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Type[]> {
    try {
      return await this.typeModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Type> {
    try {
      return await this.typeModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateTypeDto: UpdateTypeDto): Promise<Type> {
    try {
      return await this.typeModel.findByIdAndUpdate(id, updateTypeDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Type> {
    try {
      return await this.typeModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
