import { Controller, Get } from '@nestjs/common';
import { NoticeService } from '../service/notice.service';

@Controller('/api/notice')
export class NoticeController {
  constructor(private readonly NoticeService: NoticeService) {}

  @Get()
  getNewNotice(): Promise<string> {
    return this.NoticeService.getNewNotice();
  }
}
