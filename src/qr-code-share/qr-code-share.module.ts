import { Module } from '@nestjs/common';
import { QrCodesController } from './qr-code-share.controller';
import { QrCodesService } from './qr-code-share.service';

@Module({
  controllers: [QrCodesController],
  providers: [QrCodesService],
})
export class QrCodesModule {}