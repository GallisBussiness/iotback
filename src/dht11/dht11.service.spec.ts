import { Test, TestingModule } from '@nestjs/testing';
import { Dht11Service } from './dht11.service';

describe('Dht11Service', () => {
  let service: Dht11Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Dht11Service],
    }).compile();

    service = module.get<Dht11Service>(Dht11Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
