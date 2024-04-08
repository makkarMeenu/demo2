import { z } from 'zod';
export const password = z
  .string()
  .min(8, 'Must be at least 8 characters in length')
  .regex(new RegExp('.*[A-Z].*'), 'One uppercase character')
  .regex(new RegExp('.*[a-z].*'), 'One lowercase character')
  .regex(new RegExp('.*\\d.*'), 'One number')
  .regex(
    new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
    'One special character'
  );
