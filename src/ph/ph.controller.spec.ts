import { Test, TestingModule } from '@nestjs/testing';
import { PhController } from './ph.controller';
import { PhService } from './ph.service';

describe('PhController', () => {
  let controller: PhController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhController],
      providers: [PhService],
    }).compile();

    controller = module.get<PhController>(PhController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
