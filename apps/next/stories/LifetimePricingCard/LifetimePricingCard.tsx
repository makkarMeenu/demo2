import React from 'react';
import { LifetimePricingCard } from '@app-launch-kit/components/custom/pricing/LifetimePricingCard';
import data from '@app-launch-kit/utils/constants/lifetimePricingCard';

export const LifetimePricingCardBasic = () => {
  return <LifetimePricingCard {...data} />;
};
