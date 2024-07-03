import {
  BellIcon,
  MoonIcon,
  StarIcon,
  SunIcon,
} from '@app-launch-kit/components/primitives/icon';

type Product = {
  id: string;
  active: boolean;
  unit_amount: number;
  currency: string;
  type: string;
  interval: string;
  product: {
    name: string;
    description: string;
    icon: React.FC;
    tag?: string;
    isHighlighted?: boolean;
  };
};

const products: Product[] = [
  {
    id: 'price_1PLLyGSDEuKE8XTxXYACYYzI',
    active: true,
    unit_amount: 10000,
    currency: 'usd',
    type: 'recurring',
    interval: 'yearly',
    product: {
      name: 'Basic',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, neque!',
      icon: MoonIcon,
    },
  },
  {
    id: 'price_1PLLzhSDEuKE8XTxcTx27WRT',
    active: true,
    unit_amount: 2000,
    currency: 'usd',
    type: 'recurring',
    interval: 'monthly',
    product: {
      name: 'Extended',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, neque!',
      icon: StarIcon,
      tag: 'POPULAR CHOICE',
      isHighlighted: true,
    },
  },
  {
    id: 'price_1PLM0ASDEuKE8XTxxRTBFWfa',
    active: true,
    unit_amount: 20000,
    currency: 'usd',
    type: 'recurring',
    interval: 'yearly',
    product: {
      name: 'Extended',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, neque!',
      icon: SunIcon,
    },
  },
  {
    id: 'price_1PLLyGSDEuKE8XTxlb2rxoBc',
    active: true,
    unit_amount: 1000,
    currency: 'inr',
    type: 'recurring',
    interval: 'monthly',
    product: {
      name: 'Basic',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, neque!',
      icon: BellIcon,
    },
  },
];

export default products;
