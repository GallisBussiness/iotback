import { Test, TestingModule } from '@nestjs/testing';
import { HsController } from './hs.controller';
import { HsService } from './hs.service';

describe('HsController', () => {
  let controller: HsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HsController],
      providers: [HsService],
    }).compile();

    controller = module.get<HsController>(HsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
