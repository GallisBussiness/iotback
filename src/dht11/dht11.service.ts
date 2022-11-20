import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose, Types } from 'mongoose';
import { CreateDht11Dto } from './dto/create-dht11.dto';
import { UpdateDht11Dto } from './dto/update-dht11.dto';
import { Dht11, Dht11Document } from './entities/dht11.entity';

@Injectable()
export class Dht11Service {
  constructor(
    @InjectModel(Dht11.name) private Dht11Model: Model<Dht11Document>,
  ) {}
  async create(createDht11Dto: CreateDht11Dto): Promise<Dht11> {
    try {
      const createdDht11 = new this.Dht11Model(createDht11Dto);
      return await createdDht11.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Dht11[]> {
    try {
      return await this.Dht11Model.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAllByCapteur(id: string): Promise<Dht11[]> {
    try {
      return await this.Dht11Model.find({capteur: new Types.ObjectId(id)}).sort({createdAt: 'desc'}).limit(10);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Dht11> {
    try {
      return await this.Dht11Model.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(
    id: string,
    updateDht11Dto: UpdateDht11Dto,
  ): Promise<Dht11> {
    try {
      return await this.Dht11Model.findByIdAndUpdate(id, updateDht11Dto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Dht11> {
    try {
      return await this.Dht11Model.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
