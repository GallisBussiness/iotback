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
import { Dht11Service } from 'src/dht11/dht11.service';

@Controller('capteur')
export class CapteurController {
  constructor(
    private readonly capteurService: CapteurService,
    private readonly dht11Service: Dht11Service,
    ) {}

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

  @Get('getcapteurbynoeud/:id')
  findCapteurByNoeud(@Param('id') id: string) {
    return this.capteurService.findCapteurByNoeud(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCapteurDto: UpdateCapteurDto) {
    return this.capteurService.update(id, updateCapteurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.capteurService.remove(id);
  }


  @Cron(CronExpression.EVERY_11_HOURS)
  async handleCron() {
  const capteurs = await this.findAll();
  capteurs.forEach(async (c) => {
    if(c.type.nom.toLocaleUpperCase() === 'PH') {
       await this.dht11Service.create({
        valeur: Math.random() * 10,
        capteur: c._id
       })
    } 
    else if(c.type.nom.toLocaleUpperCase() === 'HSOL') {
      await this.dht11Service.create({
        valeur: Math.random() * 10,
        capteur: c._id
       })
    }
    else if(c.type.nom.toUpperCase() === 'HFEUILLES') {
     await  this.dht11Service.create({
        valeur: Math.random() * 10,
        capteur: c._id
       })
    }
    else if(c.type.nom.toUpperCase() === 'DHT11') {
       await this.dht11Service.create({
        temperature: Math.random() * 10,
        humidite: Math.random() * 10,
        capteur: c._id
       })
    }
  }) 
  }

}
