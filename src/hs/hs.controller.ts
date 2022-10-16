import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HsService } from './hs.service';
import { CreateHDto } from './dto/create-h.dto';
import { UpdateHDto } from './dto/update-h.dto';

@Controller('hs')
export class HsController {
  constructor(private readonly hsService: HsService) {}

  @Post()
  create(@Body() createHDto: CreateHDto) {
    return this.hsService.create(createHDto);
  }

  @Get()
  findAll() {
    return this.hsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHDto: UpdateHDto) {
    return this.hsService.update(+id, updateHDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hsService.remove(+id);
  }
}
