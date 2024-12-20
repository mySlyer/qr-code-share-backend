import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
// import { Roles } from "../common/decorators/roles.decorator";
// import { RolesGuard } from "../common/guards/roles.guard";
// import { ParseIntPipe } from "../common/pipes/parse-int.pipe";
// import { CreateCatDto } from "./dto/create-cat.dto";
import { QrCodesService } from './qr-code-share.service';
import { CreateQrCodeDto } from './dto/upload-qrcode.dto';
import { qrCode } from './interfaces/qr-code-share.interface';
// import { Cat } from "./interfaces/cat.interface";

// @UseGuards(RolesGuard)
@Controller('qr-code-share')
export class QrCodesController {
  constructor(private readonly qrCodesService: QrCodesService) {}

  @Get()
  async findAll() {
    // return this.qrCodesService.testDb();
    return this.qrCodesService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id')
    id: number,
  ) {
    console.log('id', id);
    return this.qrCodesService.findOne(Number(id));
    // get by ID logic
  }

  @Post()
  async create(@Body() qrCodeData: CreateQrCodeDto) {
    console.log('qrCodeData controller', qrCodeData);
    return this.qrCodesService.createQrCode(qrCodeData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() qrCodeData: qrCode) {
    const qrCodeId = parseInt(id, 10);
    const updatedQrCode = await this.qrCodesService.updateQrCode(
      qrCodeId,
      qrCodeData,
    );
    if (!updatedQrCode) {
      throw new NotFoundException(`QR code with ID ${qrCodeId} not found`);
    }
    return updatedQrCode;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const qrCodeId = parseInt(id, 10);
    const deletedQrCode = await this.qrCodesService.deleteQrCode(qrCodeId);
    if (!deletedQrCode) {
      throw new NotFoundException(`QR code with ID ${qrCodeId} not found`);
    }
    return deletedQrCode;
  }
}
