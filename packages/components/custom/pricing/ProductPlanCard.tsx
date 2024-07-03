import {
  Button,
  ButtonSpinner,
  ButtonText,
} from '@app-launch-kit/components/primitives/button';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { HStack } from '@app-launch-kit/components/primitives/hstack';

const ProductPlanCard = ({
  id,
  productName,
  price,
  currency,
  priceSuffix,
  loading = false,
  handleButtonClickWithId,
}: {
  id?: string;
  productName: string;
  price: string;
  currency: string;
  priceSuffix: string;
  loading?: boolean;
  handleButtonClickWithId?: any;
}) => {
  const handleButtonPress = () => {
    if (handleButtonClickWithId && id) {
      handleButtonClickWithId(id);
    }
  };

  return (
    <VStack
      className="border border-outline-100 rounded-xl w-full p-4"
      space="4xl"
    >
      <VStack space="2xl">
        <Text className="text-primary-400 font-medium">{productName}</Text>
        <HStack className="items-baseline">
          <Text size="4xl" className="font-semibold text-typography-950">
            {currency === 'usd' && '$'}
            {currency === 'inr' && '₹'} {price}
          </Text>
          <Text size="xs" className="text-typography-900 pl-2">
            {' '}
            {priceSuffix}
          </Text>
        </HStack>
      </VStack>

      <Button onPress={handleButtonPress}>
        {loading ? <ButtonSpinner /> : <ButtonText>Buy Now</ButtonText>}
      </Button>
    </VStack>
  );
};

export default ProductPlanCard;
