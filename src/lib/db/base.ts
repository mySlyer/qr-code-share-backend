import { Logger } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

const base = new PrismaClient();

base
  .$connect()
  .then(() => {
    Logger.log("[数据库] 连接成功");
  })
  .catch(() => {
    Logger.error("[数据库] 连接失败");
    process.exit(1);
  });
export { base };