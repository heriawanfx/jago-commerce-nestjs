import { ConfigService } from "@nestjs/config";
import { SequelizeModuleOptions } from "@nestjs/sequelize";

export class DatabaseConfig {
  static defaultOption : SequelizeModuleOptions = {
      dialect: 'mysql',
      port: parseInt(process.env.DB_PORT as string) as number,
      username: process.env.DB_USERNAME as string,
      password: process.env.DB_PASSWORD as string,
      synchronize: true,
  }
}
