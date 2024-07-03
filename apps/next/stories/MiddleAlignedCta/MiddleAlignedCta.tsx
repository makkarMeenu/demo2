import React from 'react';
import MiddleAlignedCta from '@app-launch-kit/components/custom/cta/MiddleAlignedCta';
import { middleAlignedCta } from '@app-launch-kit/utils/constants/cta';

export const MiddleAlignedCtaBasic = () => {
  return <MiddleAlignedCta {...middleAlignedCta} />;
};
