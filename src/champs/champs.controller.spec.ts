import { Test, TestingModule } from '@nestjs/testing';
import { ChampsController } from './champs.controller';
import { ChampsService } from './champs.service';

describe('ChampsController', () => {
  let controller: ChampsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChampsController],
      providers: [ChampsService],
    }).compile();

    controller = module.get<ChampsController>(ChampsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
