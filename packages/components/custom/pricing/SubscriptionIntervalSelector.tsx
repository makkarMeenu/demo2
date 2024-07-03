import { HStack } from '@app-launch-kit/components/primitives/hstack';
import { Pressable } from '@app-launch-kit/components/primitives/pressable';
import { Text } from '@app-launch-kit/components/primitives/text';

interface SubscriptionIntervalsType {
  id: number;
  interval_title: string;
  interval_type: 'monthly' | 'quarterly' | 'yearly';
}
const SubscriptionInterval = ({
  title,
  selected,
  handleOnPress,
  id,
}: {
  id: number;
  title: string;
  selected: boolean;
  handleOnPress: (id: number) => void;
}) => {
  const handleOnClick = () => {
    handleOnPress(id);
  };
  return (
    <Pressable
      key={id}
      onPress={() => handleOnClick()}
      className={`group/pressable flex-1 md:flex-row md:flex-wrap cursor-pointer items-center justify-center rounded-lg px-4 py-3.5 ${
        selected ? 'bg-background-0 shadow-soft3' : ''
      }`}
    >
      <Text
        className={`font-roboto select-none group-hover/pressable:text-typography-900 text-center  font-semibold ${selected ? 'text-typography-900' : 'text-typography-700'} `}
      >
        {title}
      </Text>
    </Pressable>
  );
};

function SubscriptionIntervalSelector({
  subscriptionIntervals,
  setSelectedSubscriptioninterval,
  selectedSubscriptioninterval,
}: {
  subscriptionIntervals: any;
  setSelectedSubscriptioninterval: (
    selectedInterval: SubscriptionIntervalsType
  ) => void;
  selectedSubscriptioninterval: any;
}) {
  const handleOnPress = (id: number) => {
    const selectedInterval = subscriptionIntervals.find(
      (item: SubscriptionIntervalsType) => {
        return item.id === id;
      }
    );
    setSelectedSubscriptioninterval(selectedInterval);
  };
  if (subscriptionIntervals.length > 1)
    return (
      <HStack className="bg-background-100 rounded-lg p-1 w-full md:w-1/2 self-center">
        {subscriptionIntervals.map(
          (item: SubscriptionIntervalsType, index: number) => {
            return (
              <SubscriptionInterval
                key={index}
                title={item.interval_title}
                selected={item.id === selectedSubscriptioninterval.id}
                handleOnPress={handleOnPress}
                id={item.id}
              />
            );
          }
        )}
      </HStack>
    );
  return <></>;
}

export default SubscriptionIntervalSelector;
