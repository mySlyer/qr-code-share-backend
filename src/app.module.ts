import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QrCodesModule } from './qr-code-share/qr-code-share.module';

@Module({
  imports: [
    QrCodesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
