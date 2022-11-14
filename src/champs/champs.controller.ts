import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChampsService } from './champs.service';
import { CreateChampDto } from './dto/create-champ.dto';
import { UpdateChampDto } from './dto/update-champ.dto';

@Controller('champs')
export class ChampsController {
  constructor(private readonly champsService: ChampsService) {}

  @Post()
  create(@Body() createChampDto: CreateChampDto) {
    return this.champsService.create(createChampDto);
  }

  @Get()
  findAll() {
    return this.champsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.champsService.findOne(id);
  }

  @Get('/byuser/:id')
  findByUser(@Param('id') id: string) {
    return this.champsService.findByUser(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChampDto: UpdateChampDto) {
    return this.champsService.update(id, updateChampDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.champsService.remove(id);
  }
}
