import React from 'react';
import { SingleColumnPricingLayout } from '@app-launch-kit/components/custom/pricing/SingleColumnPricingLayout';
import data from '@app-launch-kit/utils/constants/lifetimePricingCard';

export const SingleColumnPricingLayoutBasic = () => {
  return (
    <SingleColumnPricingLayout
      data={data}
      title="All features for one price. Try gluestack now!"
    />
  );
};
