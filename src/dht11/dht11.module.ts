import { Module } from '@nestjs/common';
import { Dht11Service } from './dht11.service';
import { Dht11Controller } from './dht11.controller';

@Module({
  controllers: [Dht11Controller],
  providers: [Dht11Service]
})
export class Dht11Module {}
