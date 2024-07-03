const { createEnv } = require('@t3-oss/env-nextjs');
import { z } from 'zod';

// Define your environment schema using Zod
export const environmentSchema = {
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  NEXT_PUBLIC_GOOGLE_CLIENT_ID_WEB: z.string(),
  NEXT_PUBLIC_STRIPE_API_KEY: z.string(),
  NEXT_PUBLIC_STRIPE_WEBHOOK_SIGNING_SECRET: z.string(),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string(),
};

// Create the environment configuration
const env = createEnv({
  server: {}, // Server-side variables (not exposed to the client)
  client: environmentSchema, // Client-side variables with type validation
  runtimeEnv: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_GOOGLE_CLIENT_ID_WEB:
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID_WEB,
    NEXT_PUBLIC_STRIPE_API_KEY: process.env.NEXT_PUBLIC_STRIPE_API_KEY,
    NEXT_PUBLIC_STRIPE_WEBHOOK_SIGNING_SECRET:
      process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SIGNING_SECRET,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  } as const,

  onValidationError: (error: any) => {
    console.error(
      '❌ Invalid environment variables:',
      error.flatten().fieldErrors
    );
    throw new Error('Invalid environment variables');
  },

  onInvalidAccess: (variable: any) => {
    throw new Error(
      '❌ Attempted to access a server-side environment variable on the client'
    );
  },
  emptyStringAsUndefined: false,
});

type SanitizedEnvVariableType = {
  [key in keyof typeof env as key extends `NEXT_PUBLIC_${infer c}`
    ? c
    : key]: (typeof env)[key];
};
const sanitizedEnv: SanitizedEnvVariableType = Object.keys(env).reduce(
  (acc: any, key: any) => {
    const newKey = key.replace(/^NEXT_PUBLIC_/, '');
    // @ts-ignore
    acc[newKey] = env[key];
    return acc;
  },
  {}
);

export { sanitizedEnv as env };
