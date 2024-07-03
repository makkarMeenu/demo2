import { city } from '@app-launch-kit/utils/validators/zod-validators/city';
import { country } from '@app-launch-kit/utils/validators/zod-validators/country';
import { firstName } from '@app-launch-kit/utils/validators/zod-validators/firstName';
import { gender } from '@app-launch-kit/utils/validators/zod-validators/gender';
import { lastName } from '@app-launch-kit/utils/validators/zod-validators/lastName';
import { phoneNumber } from '@app-launch-kit/utils/validators/zod-validators/phoneNumber';
import { state } from '@app-launch-kit/utils/validators/zod-validators/state';
import { zipCode } from '@app-launch-kit/utils/validators/zod-validators/zipCode';
import { z } from 'zod';
export const accountDetailsSchema = z.object({
  firstName,
  lastName,
  gender,
  city,
  state,
  country,
  phoneNumber,
  zipCode,
});

export type AccountDetailsSchemaType = z.infer<typeof accountDetailsSchema>;
