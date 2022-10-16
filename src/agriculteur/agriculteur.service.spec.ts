import { Test, TestingModule } from '@nestjs/testing';
import { AgriculteurService } from './agriculteur.service';

describe('AgriculteurService', () => {
  let service: AgriculteurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgriculteurService],
    }).compile();

    service = module.get<AgriculteurService>(AgriculteurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
