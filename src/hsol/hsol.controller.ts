import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HsolService } from './hsol.service';
import { CreateHsolDto } from './dto/create-hsol.dto';
import { UpdateHsolDto } from './dto/update-hsol.dto';

@Controller('hsol')
export class HsolController {
  constructor(private readonly hsolService: HsolService) {}

  @Post()
  create(@Body() createHsolDto: CreateHsolDto) {
    return this.hsolService.create(createHsolDto);
  }

  @Get()
  findAll() {
    return this.hsolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hsolService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHsolDto: UpdateHsolDto) {
    return this.hsolService.update(id, updateHsolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hsolService.remove(id);
  }
}
