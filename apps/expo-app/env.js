/* eslint-disable no-undef */
const dotenv = require('dotenv');
const path = require('path');
const z = require('zod');

const APP_ENV = process.env.APP_ENV ?? 'development';
const envPath = path.resolve(__dirname, `.env.${APP_ENV}`);

dotenv.config({
  path: envPath,
});

const schema = z.object({
  APP_ENV: z.enum(['development', 'staging', 'production']),
  EXPO_PUBLIC_GRAPHQL_URL: z.string().url(),
  EXPO_PUBLIC_WS_URL: z.string().url(),
});

/**
 * @type {Record<keyof z.infer<typeof schema> , string | undefined>}
 */
const _schemaEnv = {
  APP_ENV,
  EXPO_PUBLIC_GRAPHQL_URL: process.env.EXPO_PUBLIC_GRAPHQL_URL,
  EXPO_PUBLIC_WS_URL: process.env.EXPO_PUBLIC_WS_URL,
};

const _env = {
  ..._schemaEnv,
};

const parsed = schema.safeParse(_env);

if (parsed.success === false) {
  console.error(
    '❌ Invalid environment variables:',
    parsed.error.flatten().fieldErrors,

    `\n❌ Missing variables in .env.${APP_ENV} file, Make sure all required variables are defined in the .env.${APP_ENV} file.`,
    `\n💡 Tip: If you recently updated the .env.${APP_ENV} file and the error still persists, try restarting the server with the -cc flag to clear the cache.`
  );
  throw new Error(
    'Invalid environment variables, Check terminal for more details '
  );
}

const Env = parsed.data;
const SchemaEnv = schema.parse(_schemaEnv);
module.exports = {
  Env,
  SchemaEnv,
};
