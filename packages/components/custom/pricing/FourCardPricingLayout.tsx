import React, { useEffect, useState } from 'react';
import { Box } from '@app-launch-kit/components/primitives/box';
import { ScrollView } from '@app-launch-kit/components/primitives/scroll-view';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import productsWithIcons from '@app-launch-kit/utils/constants/productsWithIcons';
import ProductPlanCardWithIcons from '@app-launch-kit/components/custom/pricing/ProductPlanCardWithIcons';

export const FourCardPricingLayout = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="h-full w-full bg-background-0"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <VStack className="h-full w-full bg-background-0 p-6 md:p-9 md:items-center md:justify-center bg-background-0 gap-10 md:gap-20">
        <Box className="md:justify-center md:items-center md:max-w-4xl gap-6">
          <Text className="font-roboto text-typography-900 text-4xl md:text-5xl font-bold md:text-center">
            Plans that scale with business
          </Text>
          <Text className="font-roboto text-typography-500 text-base md:text-center md:max-w-3xl">
            Lorem ipsum dolor sit amet consectetur. Pellentesque at sapien vel
            eget massa consequat parturient volutpat. eget massa consequat
            parturient volutpat.
          </Text>
        </Box>
        <VStack className="gap-8 md:gap-4 max-w-full lg:max-w-7xl xl:max-w-[2000px] md:flex-row">
          {productsWithIcons.map((item, index) => {
            return (
              <ProductPlanCardWithIcons
                key={item.id}
                productName={item.product.name}
                price={item.unit_amount}
                currency={item.currency}
                priceSuffix={`${item.interval}`}
                index={index}
                isHighlighted={item.product.isHighlighted}
                productDescription={item.product.description}
                tag={item.product.tag}
                handleButtonClick={handleButtonClick}
                icon={item.product.icon}
              />
            );
          })}
        </VStack>
      </VStack>
    </ScrollView>
  );
};
