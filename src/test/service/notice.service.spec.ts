import { Test, TestingModule } from '@nestjs/testing';
import { NoticeService } from '../../service/notice.service';

describe('NoticeService', () => {
  let service: NoticeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoticeService],
    }).compile();

    service = module.get<NoticeService>(NoticeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return content from steam store news', async () => {
    const result = await service.getNewNotice();
    expect(result).toBeDefined();
  });
});
