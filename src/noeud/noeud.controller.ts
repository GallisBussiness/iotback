import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NoeudService } from './noeud.service';
import { CreateNoeudDto } from './dto/create-noeud.dto';
import { UpdateNoeudDto } from './dto/update-noeud.dto';

@Controller('noeud')
export class NoeudController {
  constructor(private readonly noeudService: NoeudService) {}

  @Post()
  create(@Body() createNoeudDto: CreateNoeudDto) {
    return this.noeudService.create(createNoeudDto);
  }

  @Get()
  findAll() {
    return this.noeudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noeudService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoeudDto: UpdateNoeudDto) {
    return this.noeudService.update(+id, updateNoeudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noeudService.remove(+id);
  }
}
