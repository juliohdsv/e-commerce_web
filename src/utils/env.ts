import { z } from "zod";
import "dotenv/config";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  ENV: z.string(),
  PORT: z.string().transform((PORT) => Number(PORT)),
  JWT_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
