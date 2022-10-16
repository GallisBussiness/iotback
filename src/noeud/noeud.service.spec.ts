import { Test, TestingModule } from '@nestjs/testing';
import { NoeudService } from './noeud.service';

describe('NoeudService', () => {
  let service: NoeudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoeudService],
    }).compile();

    service = module.get<NoeudService>(NoeudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
