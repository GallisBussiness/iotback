import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCapteurDto } from './dto/create-capteur.dto';
import { UpdateCapteurDto } from './dto/update-capteur.dto';
import { Capteur, CapteurDocument } from './entities/capteur.entity';

@Injectable()
export class CapteurService {
  constructor(
    @InjectModel(Capteur.name) private capteurModel: Model<CapteurDocument>,
  ) {}

  async create(createCapteurDto: CreateCapteurDto): Promise<Capteur> {
    try {
      const createdCapteur = new this.capteurModel(createCapteurDto);
      return await createdCapteur.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Capteur[]> {
    try {
      return await this.capteurModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Capteur> {
    try {
      return await this.capteurModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(
    id: string,
    updateCapteurDto: UpdateCapteurDto,
  ): Promise<Capteur> {
    try {
      return await this.capteurModel.findByIdAndUpdate(id, updateCapteurDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Capteur> {
    try {
      return await this.capteurModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}
