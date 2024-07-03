import { Box } from '@app-launch-kit/components/primitives/box';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import { Icon } from '@app-launch-kit/components/primitives/icon';
import { HStack } from '@app-launch-kit/components/primitives/hstack';

import HeroIcons from '@app-launch-kit/components/custom/landing-page/HeroIcons';
import ActionButtons from '@app-launch-kit/components/custom/landing-page/ActionButtons';
import { useContext } from 'react';
import { ColorContext } from '@app-launch-kit/utils/context/ColorModeContext';
import GettingStartedBtnIcon from '@app-launch-kit/assets/icons/GettingStartedBtnIcon';

const LandingPageHero = () => {
  const colorMode = useContext(ColorContext);

  return (
    <VStack className="flex-1 gap-24 pt-10 md:pt-0">
      <Box className="md:items-center w-full gap-6">
        <Box className="justify-center max-w-7xl 2xl:max-w-screen-2xl gap-4">
          <HStack className="py-1.5 gap-2 md:justify-center items-center whitespace-nowrap">
            <Icon
              as={GettingStartedBtnIcon}
              className="w-4 h-4 min-w-[20px] flex-shrink-0"
            />
            <Text className="text-sm xs:text-lg">
              Get started by editing{' '}
              <Text className="font-bold text-sm xs:text-lg">pages/index</Text>
            </Text>
          </HStack>
          <Heading className="text-3xl xs:text-5xl md:text-6xl text-typography-950 leading-10 md:leading-[70px] leading-[45px] xs:leading-[65px] md:text-center font-bold">
            Only Starter Kit You’ll Ever Need
          </Heading>

          <Text className=" md:text-center text-xl  text-typography-600">
            Expo Starter kit with expo-router, gluestack-ui-nativewind and more
          </Text>
        </Box>
        <HeroIcons />
        <ActionButtons />
      </Box>
    </VStack>
  );
};

export default LandingPageHero;
