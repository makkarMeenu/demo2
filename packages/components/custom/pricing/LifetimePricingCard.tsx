import React from 'react';
import { Text } from '@app-launch-kit/components/primitives/text';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Box } from '@app-launch-kit/components/primitives/box';
import { Divider } from '@app-launch-kit/components/primitives/divider';
import {
  Button,
  ButtonText,
} from '@app-launch-kit/components/primitives/button';
import { Icon } from '@app-launch-kit/components/primitives/icon';
import { LifetimePricingCard as Props } from './types';

export const LifetimePricingCard = ({
  planDescription,
  planOfferings,
  totalPrice,
  currency,
  handleButtonPress,
}: Props) => {
  return (
    <Box className="gap-10 p-8 bg-background-0 border border-outline-100 shadow-soft3 rounded-2xl md:flex-row">
      <VStack className="gap-6 md:basis-[65%]">
        <Box className="gap-4">
          <Text className="font-roboto text-xl font-medium text-typography-950">
            Lifetime Membership
          </Text>
          <Text className="font-roboto text-typography-500 text-base font-normal">
            {planDescription}
          </Text>
        </Box>
        <Box className="gap-[37px]">
          <HStack className="items-center">
            <Divider horizontal className="w-2" />
            <Text className="font-roboto px-3 text-sm leading-[21px]">
              What's included in the plan
            </Text>
            <Divider horizontal className="flex-1" />
          </HStack>
          <Box className="md:flex-row gap-y-3 md:flex-wrap md:gap-x-8 md:gap-y-7">
            {planOfferings.map((item, index) => (
              <HStack
                className="items-center gap-3 md:basis-5/12 md:grow"
                key={index}
              >
                <Icon
                  as={item.iconName}
                  size="sm"
                  className="stroke-green-600 shrink-0"
                />
                <Text className="font-roboto text-typography-600 text-sm">
                  {item.description}
                </Text>
              </HStack>
            ))}
          </Box>
        </Box>
      </VStack>
      <VStack className="justify-center rounded-2xl p-5 md:px-6 md:py-8 gap-6 bg-background-50 font-medium md:gap-9 md:basis-[35%]">
        <Box className="gap-[11px] items-center">
          <Text className="font-roboto text-typography-600 text-lg font-medium">
            Pay once, own it forever
          </Text>
          <Text className="font-roboto text-3xl md:text-5xl font-semibold text-typography-950">
            {currency === 'inr' && '₹'}
            {currency === 'usd' && '$'}
            {totalPrice}
          </Text>
        </Box>
        <Box className="gap-3 lg:px-4">
          <Button size="sm" onPress={handleButtonPress}>
            <ButtonText className="font-roboto">Get Started</ButtonText>
          </Button>
          <Text className="font-roboto text-typography-400 text-xs self-center">
            No credit card required
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};
