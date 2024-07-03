import { z } from 'zod';

// Define your environment schema using Zod
export const environmentSchema = z.object({
  SITE_URL: z.string().url(),
  SUPABASE_URL: z.string().url(),
  SUPABASE_ANON_KEY: z.string(),
  GOOGLE_CLIENT_ID_WEB: z.string(),
  GOOGLE_CLIENT_ID_IOS: z.string(),
  GOOGLE_CLIENT_ID_ANDROID: z.string(),
  STRIPE_API_KEY: z.string(),
  STRIPE_WEBHOOK_SIGNING_SECRET: z.string(),
  STRIPE_PUBLISHABLE_KEY: z.string(),
});

const _schemaEnv = {
  SITE_URL: process.env.EXPO_PUBLIC_SITE_URL,
  SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
  SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
  GOOGLE_CLIENT_ID_WEB: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID_WEB,
  GOOGLE_CLIENT_ID_IOS: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID_IOS,
  GOOGLE_CLIENT_ID_ANDROID: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID_ANDROID,
  STRIPE_API_KEY: process.env.EXPO_PUBLIC_STRIPE_API_KEY,
  STRIPE_WEBHOOK_SIGNING_SECRET:
    process.env.EXPO_PUBLIC_STRIPE_WEBHOOK_SIGNING_SECRET,
  STRIPE_PUBLISHABLE_KEY: process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY,
};

const parsed = environmentSchema.safeParse(_schemaEnv);

if (parsed.success === false) {
  console.error(
    '❌ Invalid environment variables:',
    parsed.error.flatten().fieldErrors,

    `\n❌ Missing variables in .env file, Make sure all required variables are defined in the .env file.`,
    `\n💡 Tip: If you recently updated the .env file and the error still persists, try restarting the server with the -cc flag to clear the cache.`
  );
  throw new Error(
    'Invalid environment variables, Check terminal for more details '
  );
}

const SchemaEnv = environmentSchema.parse(_schemaEnv);
export { SchemaEnv as env };
