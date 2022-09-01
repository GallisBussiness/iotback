import { Test, TestingModule } from '@nestjs/testing';
import { ChampsService } from './champs.service';

describe('ChampsService', () => {
  let service: ChampsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChampsService],
    }).compile();

    service = module.get<ChampsService>(ChampsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
