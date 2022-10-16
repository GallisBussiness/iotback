import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgriculteurService } from './agriculteur.service';
import { CreateAgriculteurDto } from './dto/create-agriculteur.dto';
import { UpdateAgriculteurDto } from './dto/update-agriculteur.dto';

@Controller('agriculteur')
export class AgriculteurController {
  constructor(private readonly agriculteurService: AgriculteurService) {}

  @Post()
  create(@Body() createAgriculteurDto: CreateAgriculteurDto) {
    return this.agriculteurService.create(createAgriculteurDto);
  }

  @Get()
  findAll() {
    return this.agriculteurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agriculteurService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgriculteurDto: UpdateAgriculteurDto) {
    return this.agriculteurService.update(id, updateAgriculteurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agriculteurService.remove(id);
  }
}
