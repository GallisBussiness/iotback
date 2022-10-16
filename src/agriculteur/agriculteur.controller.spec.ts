import { Test, TestingModule } from '@nestjs/testing';
import { AgriculteurController } from './agriculteur.controller';
import { AgriculteurService } from './agriculteur.service';

describe('AgriculteurController', () => {
  let controller: AgriculteurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgriculteurController],
      providers: [AgriculteurService],
    }).compile();

    controller = module.get<AgriculteurController>(AgriculteurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
