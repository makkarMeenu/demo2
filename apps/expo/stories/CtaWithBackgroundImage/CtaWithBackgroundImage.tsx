import React from 'react';
import CtaWithBackgroundImage from '@app-launch-kit/components/custom/cta/CtaWithBackgroundImage';
import { ctaWithBackground } from '@app-launch-kit/utils/constants/cta';

export const CtaWithBackgroundImageBasic = () => {
  return <CtaWithBackgroundImage {...ctaWithBackground} />;
};
