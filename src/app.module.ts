import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { NoticeController } from './controller/notice.controller';
import { NoticeService } from './service/notice.service';

@Module({
  imports: [
    CacheModule.register({
      ttl: 604800, // 캐시 유지 시간 (초)
      max: 100, // 캐시 최대 항목 수
    }),
  ],
  controllers: [AppController, NoticeController],
  providers: [AppService, NoticeService],
})
export class AppModule {}
