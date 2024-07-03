import React from 'react';
import {
  Button,
  ButtonText,
} from '@app-launch-kit/components/primitives/button';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import {
  Icon,
  CheckCircleIcon,
} from '@app-launch-kit/components/primitives/icon';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Badge, BadgeIcon } from '@app-launch-kit/components/primitives/badge';
import { Box } from '@app-launch-kit/components/primitives/box';
import { View } from '@app-launch-kit/components/primitives/view';
import { productPlanOfferingsFourCards } from '@app-launch-kit/utils/constants/productPlanOfferings';

const ProductPlanCardWithIcons = ({
  productName,
  price,
  currency,
  priceSuffix,
  index,
  isHighlighted = false,
  handleButtonClick,
  icon,
  tag,
}: {
  productName: string;
  productDescription: string;
  price: number;
  currency: string;
  priceSuffix: string;
  index: number;
  isHighlighted?: boolean;
  handleButtonClick: (index: number) => void;
  icon: any;
  tag?: string;
}) => {
  const handleButtonPress = () => {
    handleButtonClick(index);
  };
  return (
    <VStack
      className={`border rounded-2xl w-full p-5 md:p-6 gap-7 relative ${isHighlighted ? 'border-info-400 border' : 'border-outline-100'}`}
    >
      {tag && (
        <View className="absolute left-0 right-0 -top-[12px] flex justify-center items-center">
          <View className="bg-info-500 rounded-full py-1 px-3 items-center justify-center">
            <Text className="text-[#FEFEFF] font-roboto text-[10px] leading-normal font-normal">
              {tag}
            </Text>
          </View>
        </View>
      )}

      <VStack className="items-start md:items-center gap-2">
        <Badge variant="solid" action="info" className="p-4 rounded-full">
          <BadgeIcon as={icon} className="w-[20px] h-[20px]" />
        </Badge>
        <Text className="font-roboto text-base text-typography-900 font-medium">
          {productName}
        </Text>
      </VStack>

      <VStack className="items-start md:items-center gap-[6px]">
        <Text
          size="4xl"
          className="font-roboto font-semibold text-typography-950"
        >
          {currency === 'usd' && '$'}
          {currency === 'inr' && '₹'}
          {price}
        </Text>
        <Text className="font-roboto text-xs text-typography-400">
          {priceSuffix}
        </Text>
      </VStack>

      <Box className="gap-4">
        {productPlanOfferingsFourCards.map((item: any, index: number) => {
          return (
            <HStack className="items-center" key={index} space="md">
              <Icon
                size="sm"
                as={item.iconName}
                className={`shrink-0 ${item.iconName === CheckCircleIcon ? 'stroke-green-600' : 'stroke-background-800'}`}
              />
              <Text className="font-roboto text-sm text-typography-600">
                {item.description}
              </Text>
            </HStack>
          );
        })}
      </Box>
      <Box className="gap-3">
        <Button
          className={`group/button ${isHighlighted ? 'bg-info-500 border-info-300 hover:bg-info-600 hover:border-info-400 active:bg-info-400 active:border-info-500 data-[focus-visible=true]:web:ring-info-300' : 'bg-background-100 hover:bg-background-200 active:bg-background-100 data-[focus-visible=true]:web:ring-background-200'}`}
          onPress={handleButtonPress}
        >
          <ButtonText
            className={`font-roboto text-sm ${isHighlighted ? 'text-typography-0 group-hover/button:text-typography-0 group-active/button:text-typography-0' : 'text-typography-900 group-hover/button:text-typography-900 group-active/button:text-typography-900'}`}
          >
            Get started
          </ButtonText>
        </Button>
        <Text className="font-roboto text-sm font-normal leading-[21px] text-typography-400 self-center">
          No credit card required
        </Text>
      </Box>
    </VStack>
  );
};
export default ProductPlanCardWithIcons;
