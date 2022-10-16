import { Test, TestingModule } from '@nestjs/testing';
import { NoeudController } from './noeud.controller';
import { NoeudService } from './noeud.service';

describe('NoeudController', () => {
  let controller: NoeudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoeudController],
      providers: [NoeudService],
    }).compile();

    controller = module.get<NoeudController>(NoeudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
