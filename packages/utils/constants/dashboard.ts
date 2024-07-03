import {
  CalendarDaysIcon,
  ChevronRightIcon,
  FavouriteIcon,
  GlobeIcon,
  MailIcon,
  PhoneIcon,
} from '@app-launch-kit/components/primitives/icon';
import { BookKey, User, AreaChart, Home } from 'lucide-react-native';
import { Icon } from '@app-launch-kit/components/primitives/icon';
import { LucideIcon } from 'lucide-react-native';

export type HolidaysCardData = {
  icon: any;
  title: string;
  description: string;
};
export type LeavesCardData = {
  title: string;
  description: string;
  leaves: number;
  isDisabled: boolean;
};
export type ColleaguesCardData = {
  image: any;
  title: string;
  position: string;
};

export type AccountCardType = {
  iconName: LucideIcon | typeof Icon;
  subText: string;
  endIcon: LucideIcon | typeof Icon;
};

export type BottomTabs = {
  iconName: LucideIcon | typeof Icon;
  iconText: string;
  route: string;
};

export type CardData = {
  iconName: LucideIcon | typeof Icon;
  title: string;
  description: string;
  routeName: string;
  isDisabled: boolean;
};

export const bottomTabsList: BottomTabs[] = [
  {
    iconName: Home,
    iconText: 'Home',
    route: '/home',
  },

  {
    iconName: GlobeIcon,
    iconText: 'Community',
    route: '/',
  },
  {
    iconName: MailIcon,
    iconText: 'Inbox',
    route: '/',
  },
  {
    iconName: FavouriteIcon,
    iconText: 'Favourite',
    route: '/',
  },
  {
    iconName: User,
    iconText: 'Profile',
    route: '/profile',
  },
];

export const HeadingCards: CardData[] = [
  {
    iconName: User,
    title: 'View your profile',
    description: 'Update your details',
    routeName: '/profile',
    isDisabled: false,
  },
  {
    iconName: BookKey,
    title: 'Unlock your skills',
    description: 'Add your skills here',
    routeName: '',
    isDisabled: true,
  },
  {
    iconName: AreaChart,
    title: 'Your goals',
    description: 'Set a target to accomplish',
    routeName: '',
    isDisabled: true,
  },
];
export const HolidaysCards: HolidaysCardData[] = [
  {
    icon: CalendarDaysIcon,
    title: 'Navaratri',
    description: '12 March, Monday (Optional holiday)',
  },
  {
    icon: CalendarDaysIcon,
    title: 'Durga Puja',
    description: '12 October, Tuesday',
  },
  {
    icon: CalendarDaysIcon,
    title: 'Diwali',
    description: '12 March, Wednesday',
  },
  {
    icon: CalendarDaysIcon,
    title: 'Christmas',
    description: '12 March, Thursday',
  },
];
export const LeavesCards: LeavesCardData[] = [
  {
    title: 'Earned Leaves',
    description: 'Available 24',
    leaves: 24,
    isDisabled: false,
  },
  {
    title: 'Sick Leaves',
    description: 'Available 24',
    leaves: 24,
    isDisabled: false,
  },
  {
    title: 'Menstrual Leaves',
    description: 'Available 20',
    leaves: 20,
    isDisabled: false,
  },
  {
    title: 'Optional Leaves',
    description: 'Available 0',
    leaves: 0,
    isDisabled: true,
  },
];
export const ColleaguesCards: ColleaguesCardData[] = [
  {
    image: require('@app-launch-kit/assets/images/image7.png'),
    title: 'Emily Zho',
    position: 'UI/UX Designer',
  },
  {
    image: require('@app-launch-kit/assets/images/image4.png'),
    title: 'Marilyn Monroe',
    position: 'SDE II',
  },
  {
    image: require('@app-launch-kit/assets/images/image5.png'),
    title: 'James Kant',
    position: 'SDE III',
  },
  {
    image: require('@app-launch-kit/assets/images/image6.png'),
    title: 'Richard Faynmen',
    position: 'CEO Marketing',
  },
];

export const accountData: AccountCardType[] = [
  {
    iconName: MailIcon,
    subText: 'Settings',
    endIcon: ChevronRightIcon,
  },
  {
    iconName: GlobeIcon,
    subText: 'Notifications',
    endIcon: ChevronRightIcon,
  },
  {
    iconName: PhoneIcon,
    subText: 'Rewards',
    endIcon: ChevronRightIcon,
  },
];
export type Icons = {
  iconName: LucideIcon | typeof Icon;
  routeName: string;
};

export const SidebarIconsList: Icons[] = [
  {
    iconName: Home,
    routeName: '/home',
  },
  {
    iconName: User,
    routeName: '/profile',
  },
];
