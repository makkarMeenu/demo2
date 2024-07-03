import { env } from '@unitools/env';
const { SITE_URL } = env;

export const success_url = `${SITE_URL}/subscription?status=success`;
export const cancel_url = `${SITE_URL}/subscription?status=failed`;
