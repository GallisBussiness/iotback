import { Test, TestingModule } from '@nestjs/testing';
import { Dht11Controller } from './dht11.controller';
import { Dht11Service } from './dht11.service';

describe('Dht11Controller', () => {
  let controller: Dht11Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Dht11Controller],
      providers: [Dht11Service],
    }).compile();

    controller = module.get<Dht11Controller>(Dht11Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
