import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhService } from './ph.service';
import { CreatePhDto } from './dto/create-ph.dto';
import { UpdatePhDto } from './dto/update-ph.dto';

@Controller('ph')
export class PhController {
  constructor(private readonly phService: PhService) {}

  @Post()
  create(@Body() createPhDto: CreatePhDto) {
    return this.phService.create(createPhDto);
  }

  @Get()
  findAll() {
    return this.phService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhDto: UpdatePhDto) {
    return this.phService.update(id, updatePhDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phService.remove(id);
  }
}
