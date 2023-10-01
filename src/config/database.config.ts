import { ConfigService, registerAs } from "@nestjs/config";


export interface DatabaseConfig {
  port: string;
  username: string;
  password: string;
}

export default registerAs('database', () => ({
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
}));