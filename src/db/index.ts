import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

const connectionConfig = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: process.env.DB_SSL === 'TRUE',
};

export const db = drizzle({
  connection: connectionConfig,
});
