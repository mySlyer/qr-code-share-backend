import { Injectable } from '@nestjs/common';
import { qrCode } from './interfaces/qr-code-share.interface';
import { QrCodeDB } from 'src/lib/db/qr-code';
// import
// import { DemoDB } from "~/lib/db";
@Injectable()
export class QrCodesService {
  create(qrCode: qrCode) {
    // this.qrCodes.push(qrCode);
    return qrCode;
  }

  async findAll() {
    const res = await QrCodeDB.findMany();
    return res;
  }
  async findOne(id: number) {
    console.log('id', typeof id, id);
    const qrcode = await QrCodeDB.findUnique({ where: { id } });
    console.log('qrcode', qrcode);
    return {
      data: qrcode,
    };
  }

  async createQrCode(qrCode: { content: string; name: string; desc?: string }) {
    console.log('qrCode service', qrCode);
    const res = await QrCodeDB.create({
      data: {
        ...qrCode,
      },
    });
    return {
      data: res,
    };
  }

  async updateQrCode(id: number, qrCodeData: qrCode) {
    const res = await QrCodeDB.update({
      where: { id },
      data: qrCodeData,
    });
    console.log('res', res);
    return res;
  }

  async deleteQrCode(id: number): Promise<qrCode> {
    const res = QrCodeDB.delete({
      where: { id },
    });
    return res;
  }
}
