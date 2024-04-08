import { z } from 'zod';

export const phoneNumber = z.string().min(1, 'Phone number is required');
