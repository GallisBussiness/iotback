import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAgriculteurDto } from './dto/create-agriculteur.dto';
import { UpdateAgriculteurDto } from './dto/update-agriculteur.dto';
import { Agriculteur, AgriculteurDocument } from './entities/agriculteur.entity';

@Injectable()
export class AgriculteurService {
  constructor(
    @InjectModel(Agriculteur.name) private AgriculteurModel: Model<AgriculteurDocument>,
  ) {}

  async create(createAgriculteurDto: CreateAgriculteurDto): Promise<Agriculteur> {
    try {
      const createdAgriculteur = new this.AgriculteurModel(createAgriculteurDto);
      return await createdAgriculteur.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Agriculteur[]> {
    try {
      return await this.AgriculteurModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Agriculteur> {
    try {
      return await this.AgriculteurModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(
    id: string,
    updateAgriculteurDto: UpdateAgriculteurDto,
  ): Promise<Agriculteur> {
    try {
      return await this.AgriculteurModel.findByIdAndUpdate(id, updateAgriculteurDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Agriculteur> {
    try {
      return await this.AgriculteurModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
