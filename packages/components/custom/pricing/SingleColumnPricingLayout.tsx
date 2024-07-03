import React from 'react';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import { Box } from '@app-launch-kit/components/primitives/box';
import { ScrollView } from '@app-launch-kit/components/primitives/scroll-view';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { LifetimePricingCard } from './LifetimePricingCard';
import { SingleColumnPricingLayout as Props } from './types';

export const SingleColumnPricingLayout = ({ title, data }: Props) => {
  return (
    <ScrollView>
      <VStack className="p-6 md:py-[120px] md:px-[70px] gap-10 md:gap-20 items-center bg-background-0">
        <Heading className="font-roboto text-typography-900 text-4xl md:text-5xl font-bold max-w-[600px] md:text-center">
          {title}
        </Heading>
        <Box className="max-w-[1000px] gap-8">
          <LifetimePricingCard {...data} />
        </Box>
      </VStack>
    </ScrollView>
  );
};
