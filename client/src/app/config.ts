import { error } from "console";
import { z } from "zod";

const configSchema = z.object({
  NEXT_PUBLIC_API_ENDPOINT: z.string(),
});

const configServer = configSchema.safeParse({
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

if (!configServer.success) {
  console.log(configServer.error.issues);
  throw new Error("Khai bao .env khong hop le");
}

const envConfig = configServer.data;
export default envConfig;
