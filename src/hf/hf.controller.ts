import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HfService } from './hf.service';
import { CreateHfDto } from './dto/create-hf.dto';
import { UpdateHfDto } from './dto/update-hf.dto';

@Controller('hf')
export class HfController {
  constructor(private readonly hfService: HfService) {}

  @Post()
  create(@Body() createHfDto: CreateHfDto) {
    return this.hfService.create(createHfDto);
  }

  @Get()
  findAll() {
    return this.hfService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hfService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHfDto: UpdateHfDto) {
    return this.hfService.update(id, updateHfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hfService.remove(id);
  }
}
