import { Injectable } from "@nestjs/common";
import { qrCode } from "./interfaces/qr-code-share.interface";
// import 
// import { DemoDB } from "~/lib/db";    
@Injectable()
export class QrCodesService {
  private readonly qrCodes: qrCode[] = [
    {
      name: "mani",
      desc: '12',
      imgUrl: "big",
      qrCodeId:12
    },
    {
      name: "mani",
      desc: '13',
      imgUrl: "big",
      qrCodeId:13
    },
  ];

  create(qrCode: qrCode) {
    this.qrCodes.push(qrCode);
    return qrCode;
  }

  findAll(): qrCode[] {
    return this.qrCodes;
  }
  findOne(id:number): qrCode {
    return this.qrCodes.find(item => item.qrCodeId === id);
  }
//   async testDb() {
//     console.log('testDb');  
//     return await DemoDB.findMany(
//     //   {
//     //   where: {
//     //     id: 1,
//     //   },
//     // }
//   );
//   }
}