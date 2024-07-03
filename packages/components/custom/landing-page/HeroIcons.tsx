import { Box } from '@app-launch-kit/components/primitives/box';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import { Icon } from '@app-launch-kit/components/primitives/icon';
import NextLogo from '@app-launch-kit/assets/icons/NextLogo';
import ExpoLogo from '@app-launch-kit/assets/icons/ExpoLogo';
import TailwindLogo from '@app-launch-kit/assets/icons/TailwindLogo';
import gluestackLogo from '@app-launch-kit/assets/icons/gluestackLogo';
import SupabaseLogo from '@app-launch-kit/assets/icons/SupabaseLogo';
import NativewindLogo from '@app-launch-kit/assets/icons/NativewindLogo';
import PostgresLogo from '@app-launch-kit/assets/icons/PostgresLogo';
import HeroIconCard from '@app-launch-kit/components/custom/landing-page/HeroIconCard'; // Make sure the path is correct

const icons = [
  { iconName: NextLogo },
  { iconName: ExpoLogo },
  { iconName: TailwindLogo },
  { iconName: gluestackLogo },
  { iconName: SupabaseLogo },
  { iconName: PostgresLogo },
  { iconName: NativewindLogo },
];

const HeroIcons = () => {
  return (
    <HStack space="md" className="flex-wrap md:justify-center items-center">
      {icons.slice(0, 4).map((item, index) => (
        <HeroIconCard key={index} icon={item.iconName} className="xs:hidden" />
      ))}

      {icons.slice(0, 5).map((item, index) => (
        <HeroIconCard
          key={index}
          icon={item.iconName}
          className="hidden xs:flex sm:hidden"
        />
      ))}

      {icons.map((item, index) => (
        <HeroIconCard
          key={index}
          icon={item.iconName}
          className="hidden sm:flex"
        />
      ))}
    </HStack>
  );
};

export default HeroIcons;
