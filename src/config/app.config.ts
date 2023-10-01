import { registerAs } from "@nestjs/config";

export interface AppConfig {
    port: string;
  }

export default registerAs('app', () => ({
    port: process.env.PORT,
  }));