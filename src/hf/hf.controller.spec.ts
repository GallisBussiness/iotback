import { Test, TestingModule } from '@nestjs/testing';
import { HfController } from './hf.controller';
import { HfService } from './hf.service';

describe('HfController', () => {
  let controller: HfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HfController],
      providers: [HfService],
    }).compile();

    controller = module.get<HfController>(HfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
