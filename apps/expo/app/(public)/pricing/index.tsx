import ProductPlanLayout from '@app-launch-kit/components/custom/pricing/ProductPlanLayout';
import SubscriptionIntervalSelector from '@app-launch-kit/components/custom/pricing/SubscriptionIntervalSelector';
import { Box } from '@app-launch-kit/components/primitives/box';
import {
  Button,
  ButtonSpinner,
} from '@app-launch-kit/components/primitives/button';
import {
  ArrowLeftIcon,
  Icon,
} from '@app-launch-kit/components/primitives/icon';
import { Pressable } from '@app-launch-kit/components/primitives/pressable';
import { ScrollView } from '@app-launch-kit/components/primitives/scroll-view';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { productPlanData } from '@app-launch-kit/utils/utils';
import { useRouter } from '@unitools/router';
import React, { useEffect, useState } from 'react';

const Pricing = () => {
  const router = useRouter();

  const [productPriceData, setProductPriceData] = useState([]);
  const [subscriptionIntervals, setSubscriptionIntervals] = useState([]);
  const [selectedSubscriptioninterval, setSelectedSubscriptioninterval] =
    useState({ id: 1, interval_title: '', interval_type: '' });

  const loading =
    productPriceData.length === 0 || subscriptionIntervals.length === 0;

  const filteredProductPrices = productPriceData.filter(
    (item: any) =>
      item?.interval === selectedSubscriptioninterval?.interval_type
  );

  const routeToCheckout = (priceId: string) => {
    router.push(`/checkout?id=${priceId}`);
  };

  useEffect(() => {
    productPlanData(setProductPriceData, setSubscriptionIntervals);
  }, []);

  useEffect(() => {
    if (subscriptionIntervals.length > 0)
      setSelectedSubscriptioninterval(subscriptionIntervals[0]);
  }, [subscriptionIntervals]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="h-full w-full bg-background-0"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <VStack className="h-full w-full md:justify-center bg-background-0 md:p-9 p-5 md:gap-10 gap-16">
        <VStack className="max-w-4xl md:self-center" space="2xl">
          <Box className="md:justify-center md:self-center gap-2">
            <Pressable
              onPress={() => {
                router.back();
              }}
              className="md:hidden"
            >
              <Icon
                as={ArrowLeftIcon}
                className="md:hidden stroke-background-800"
                size="xl"
              />
            </Pressable>
            <Text className="text-typography-950 md:text-center md:text-5xl text-4xl leading-normal font-semibold max-w-sm sm:max-w-none">
              Simple and Affordable Pricing Plans
            </Text>
            <Text className="text-typography-700 md:text-center text-xl">
              Start tracking and improving your finance management.
            </Text>
          </Box>
          {loading ? (
            <Box className="justify-center items-center">
              <Button size="sm">
                <ButtonSpinner color="gray" />
              </Button>
            </Box>
          ) : (
            <>
              <SubscriptionIntervalSelector
                subscriptionIntervals={subscriptionIntervals}
                setSelectedSubscriptioninterval={
                  setSelectedSubscriptioninterval
                }
                selectedSubscriptioninterval={selectedSubscriptioninterval}
              />

              <ProductPlanLayout
                data={filteredProductPrices}
                handleButtonClickWithId={routeToCheckout}
              />
            </>
          )}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Pricing;
