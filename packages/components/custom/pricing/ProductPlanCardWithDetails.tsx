import {
  Button,
  ButtonText,
} from '@app-launch-kit/components/primitives/button';
import { Divider } from '@app-launch-kit/components/primitives/divider';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import {
  Icon,
  CheckCircleIcon,
} from '@app-launch-kit/components/primitives/icon';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Badge, BadgeText } from '@app-launch-kit/components/primitives/badge';
import productPlanOfferings from '@app-launch-kit/utils/constants/productPlanOfferings';

const ProductPlanCardWithDetails = ({
  productName,
  productDescription,
  price,
  currency,
  priceSuffix,
  index,
  isHighlighed = false,
  handleButtonClick,
  tag,
  tagAction,
}: {
  productName: string;
  productDescription: string;
  price: number;
  currency: string;
  priceSuffix: string;
  index: number;
  isHighlighed?: boolean;
  handleButtonClick: (index: number) => void;
  tag?: string;
  tagAction?: 'error' | 'warning' | 'success' | 'info' | 'muted';
}) => {
  const handleButtonPress = () => {
    handleButtonClick(index);
  };

  return (
    <VStack
      className={`rounded-2xl w-full p-4 bg-background-50 ${isHighlighed ? 'border-2 border-info-500' : ''}`}
      space="lg"
    >
      <VStack>
        <HStack className="justify-between items-center">
          <Text className="font-roboto text-sm text-info-600 font-medium mb-[6px]">
            {productName}
          </Text>

          {tag && (
            <Badge
              variant="solid"
              action={tagAction ? tagAction : 'info'}
              className="px-3 py-[6px] rounded-full ml-[6px]"
            >
              <BadgeText className="font-roboto text-xs font-normal">
                {tag}
              </BadgeText>
            </Badge>
          )}
        </HStack>

        <HStack className="items-end gap-[9px]">
          <Text
            size="4xl"
            className="font-roboto font-semibold text-typography-950"
          >
            {currency === 'usd' && '$'}
            {currency === 'inr' && '₹'}
            {price}
          </Text>

          <Text className="font-roboto text-xs text-typography-400 py-[6px]">
            {priceSuffix}
          </Text>
        </HStack>
      </VStack>

      <Text className="font-roboto text-typography-400 text-xs font-normal">
        {productDescription}
      </Text>

      <Divider className="border-outline-100" />

      {productPlanOfferings.map((item: any, index: number) => {
        return (
          <HStack className="items-center" key={index} space="md">
            <Icon
              size="sm"
              as={item.iconName}
              className={`shrink-0 ${item.iconName === CheckCircleIcon ? 'stroke-green-600' : 'stroke-background-800'}`}
            />
            <Text className="font-roboto text-sm text-typography-600 flex-1">
              {item.description}
            </Text>
          </HStack>
        );
      })}

      <Button
        onPress={handleButtonPress}
        variant="solid"
        className={`group/button ${isHighlighed ? 'bg-info-500 border-info-300 hover:bg-info-600 hover:border-info-400 active:bg-info-400 active:border-info-500 data-[focus-visible=true]:web:ring-info-300' : 'bg-background-100 hover:bg-background-200 active:bg-background-100 data-[focus-visible=true]:web:ring-background-200'}`}
      >
        <ButtonText
          className={`font-roboto text-sm ${isHighlighed ? 'text-typography-0 group-hover/button:text-typography-0 group-active/button:text-typography-0' : 'text-typography-900 group-hover/button:text-typography-900 group-active/button:text-typography-900'}`}
        >
          Buy Now
        </ButtonText>
      </Button>
    </VStack>
  );
};
export default ProductPlanCardWithDetails;
