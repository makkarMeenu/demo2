import { z } from 'zod';
export const contact = z.string().refine((value) => /^\d{10}$/.test(value), {
  message: 'Contact must contain exactly 10 digits',
});
