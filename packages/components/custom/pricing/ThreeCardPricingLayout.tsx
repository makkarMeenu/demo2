import { useEffect, useState } from 'react';
import ProductPlanLayout from '@app-launch-kit/components/custom/pricing/ProductPlanLayout';
import SubscriptionIntervalSelector from '@app-launch-kit/components/custom/pricing/SubscriptionIntervalSelector';
import { Box } from '@app-launch-kit/components/primitives/box';
import { ScrollView } from '@app-launch-kit/components/primitives/scroll-view';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import productPrices from '@app-launch-kit/utils/constants/products';
import subscriptionIntervals from '@app-launch-kit/utils/constants/subscriptionIntervals';
import { SubscriptionIntervalsType } from '@app-launch-kit/components/custom/pricing/types';

export const ThreeCardPricingLayout = () => {
  const [selectedSubscriptioninterval, setSelectedSubscriptioninterval] =
    useState<SubscriptionIntervalsType>(subscriptionIntervals[0]);

  const [filteredProductPrices, setFilteredProductPrices] = useState(
    productPrices.filter(
      (item: any) =>
        item.interval === selectedSubscriptioninterval.interval_type
    )
  );
  useEffect(() => {
    setFilteredProductPrices(
      productPrices
        .filter(
          (item: any) =>
            item.interval === selectedSubscriptioninterval.interval_type
        )
        .sort((a, b) => {
          return a.product.name.localeCompare(b.product.name);
        })
    );
  }, [selectedSubscriptioninterval]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="h-full w-full bg-background-0"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <VStack className="h-full w-full bg-background-0 p-6 md:p-9 items-center justify-center">
        <VStack className="md:max-w-4xl gap-10 md:gap-[73px]">
          <Box className="md:justify-center md:items-center">
            <Text className="font-roboto text-typography-900 text-4xl md:text-5xl font-bold md:max-w-2xl md:text-center">
              Simple and Affordable Pricing Plans
            </Text>
            <Text className="font-roboto text-typography-500 text-lg mt-3 mb-9">
              Start tracking and improving your finance management.
            </Text>
            <SubscriptionIntervalSelector
              subscriptionIntervals={subscriptionIntervals}
              setSelectedSubscriptioninterval={setSelectedSubscriptioninterval}
              selectedSubscriptioninterval={selectedSubscriptioninterval}
            />
          </Box>
          <ProductPlanLayout data={filteredProductPrices} />
        </VStack>
      </VStack>
    </ScrollView>
  );
};
