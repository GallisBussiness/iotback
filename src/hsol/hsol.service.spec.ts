import { Test, TestingModule } from '@nestjs/testing';
import { HsolService } from './hsol.service';

describe('HsolService', () => {
  let service: HsolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HsolService],
    }).compile();

    service = module.get<HsolService>(HsolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
