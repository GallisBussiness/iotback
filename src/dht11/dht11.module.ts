import { Module } from '@nestjs/common';
import { Dht11Service } from './dht11.service';
import { Dht11Controller } from './dht11.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Dht11, Dht11Schema } from './entities/dht11.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: Dht11.name, schema: Dht11Schema}])],
  controllers: [Dht11Controller],
  providers: [Dht11Service]
})
export class Dht11Module {}
