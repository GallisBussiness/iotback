import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CapteurService } from './capteur.service';
import { CreateCapteurDto } from './dto/create-capteur.dto';
import { UpdateCapteurDto } from './dto/update-capteur.dto';
import { Cron,CronExpression } from '@nestjs/schedule';

@Controller('capteur')
export class CapteurController {
  constructor(private readonly capteurService: CapteurService) {}

  @Post()
  create(@Body() createCapteurDto: CreateCapteurDto) {
    return this.capteurService.create(createCapteurDto);
  }

  @Get()
  findAll() {
    return this.capteurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.capteurService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCapteurDto: UpdateCapteurDto) {
    return this.capteurService.update(id, updateCapteurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.capteurService.remove(id);
  }


  @Cron(CronExpression.EVERY_10_HOURS)
  handleCron() {
   console.log('event schedule run');
  }

}
