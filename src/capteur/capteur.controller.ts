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
// import { Cron,CronExpression } from '@nestjs/schedule';
// import { Dht11Service } from 'src/dht11/dht11.service';
// import { PhService } from 'src/ph/ph.service';
// import { HfService } from 'src/hf/hf.service';
// import { HsolService } from 'src/hsol/hsol.service';

@Controller('capteur')
export class CapteurController {
  constructor(
    private readonly capteurService: CapteurService,
    // private readonly dht11Service: Dht11Service,
    // private readonly phService: PhService,
    // private readonly hfService: HfService,
    // private readonly hsolService: HsolService
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


  // @Cron(CronExpression.EVERY_10_MINUTES)
  // async handleCron() {
  // const capteurs = await this.findAll();
  // capteurs.forEach(c => {
  //   if(c.type.nom.toLocaleUpperCase() === 'PH') {
  //      this.phService.create({
  //       valeur: Math.random() * 10,
  //       capteur: c._id
  //      })
  //   } 
  //   else if(c.type.nom.toLocaleUpperCase() === 'HUMIDITÉ DES SOLS') {
  //     this.hsolService.create({
  //       valeur: Math.random() * 10,
  //       capteur: c._id
  //      })
  //   }
  //   else if(c.type.nom.toUpperCase() === 'HUMIDITÉ DES FEUILLES') {
  //     this.hfService.create({
  //       valeur: Math.random() * 10,
  //       capteur: c._id
  //      })
  //   }
  //   else if(c.type.nom.toUpperCase() === 'DHT11') {
  //     this.dht11Service.create({
  //       temperature: Math.random() * 10,
  //       humidite: Math.random() * 10,
  //       capteur: c._id
  //      })
  //   }
  // }) 
  // }

}
