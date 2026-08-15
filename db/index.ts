import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// قراءة رابط الاتصال من متغيرات البيئة في Render
const connectionString = process.env.DATABASE_URL!;

// إعداد عميل الاتصال بقاعدة بيانات PostgreSQL الخارجية
const client = postgres(connectionString, { ssl: 'require' });

export function getDb() {
  return drizzle(client, { schema });
}
