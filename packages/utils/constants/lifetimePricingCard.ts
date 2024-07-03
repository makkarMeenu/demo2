import { CheckCircleIcon } from '@app-launch-kit/components/primitives/icon';

const data = {
  planDescription:
    'Lorem ipsum dolor sit amet consectetur. Pellentesque at sapien vel eget massa consequat parturient volutpat.',
  planOfferings: [
    {
      iconName: CheckCircleIcon,
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      iconName: CheckCircleIcon,
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      iconName: CheckCircleIcon,
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      iconName: CheckCircleIcon,
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
  ],
  totalPrice: '2499',
  currency: 'inr',
  handleButtonPress: () => console.log('Pressed'),
};

export default data;
