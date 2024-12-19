import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
// import { Roles } from "../common/decorators/roles.decorator";
// import { RolesGuard } from "../common/guards/roles.guard";
// import { ParseIntPipe } from "../common/pipes/parse-int.pipe";
// import { CreateCatDto } from "./dto/create-cat.dto";
import { QrCodesService } from "./qr-code-share.service";
import { CreateQrCodeDto } from "./dto/upload-qrcode.dto";
// import { Cat } from "./interfaces/cat.interface";

// @UseGuards(RolesGuard)
@Controller("qr-code-share")
export class QrCodesController {
  constructor(private readonly qrCodesService: QrCodesService) {}

  @Post()
  // @Roles(["admin"])
  async create(@Body() createQrCodeDto: CreateQrCodeDto) {
    this.qrCodesService.create(createQrCodeDto);
  }

  @Get()
  async findAll() {
    // return this.qrCodesService.testDb();
    return this.qrCodesService.findAll();
  }

  @Get(":id")
  findOne(
    @Param("id" )
    id: number
  ) {
    return this.qrCodesService.findOne(id);
    // get by ID logic
  }
  @Get("test/")
  testDb(
    @Param("id" )
    id: number
  ) {
    // get by ID logic
    return { hello: " world" };

    // return await this.catsService.testDb()
  }
}