import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Dht11Service } from './dht11.service';
import { CreateDht11Dto } from './dto/create-dht11.dto';
import { UpdateDht11Dto } from './dto/update-dht11.dto';

@Controller('dht11')
export class Dht11Controller {
  constructor(private readonly dht11Service: Dht11Service) {}

  @Post()
  create(@Body() createDht11Dto: CreateDht11Dto) {
    return this.dht11Service.create(createDht11Dto);
  }

  @Get()
  findAll() {
    return this.dht11Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dht11Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDht11Dto: UpdateDht11Dto) {
    return this.dht11Service.update(+id, updateDht11Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dht11Service.remove(+id);
  }
}
