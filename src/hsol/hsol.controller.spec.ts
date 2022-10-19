import { Test, TestingModule } from '@nestjs/testing';
import { HsolController } from './hsol.controller';
import { HsolService } from './hsol.service';

describe('HsolController', () => {
  let controller: HsolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HsolController],
      providers: [HsolService],
    }).compile();

    controller = module.get<HsolController>(HsolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
