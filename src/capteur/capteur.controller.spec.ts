import { Test, TestingModule } from '@nestjs/testing';
import { CapteurController } from './capteur.controller';
import { CapteurService } from './capteur.service';

describe('CapteurController', () => {
  let controller: CapteurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CapteurController],
      providers: [CapteurService],
    }).compile();

    controller = module.get<CapteurController>(CapteurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
