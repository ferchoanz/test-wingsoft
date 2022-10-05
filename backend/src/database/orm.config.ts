import { DataSourceOptions } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot();

export const ormConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABSE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
  synchronize: Boolean(process.env.DB_SYNC),
};