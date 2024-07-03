'use client';
import {
  Button,
  ButtonText,
} from '@app-launch-kit/components/primitives/button';
import {
  ArrowRightIcon,
  Icon,
} from '@app-launch-kit/components/primitives/icon';
import { Image } from '@app-launch-kit/components/primitives/image';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';

import LeftPanelLogo from '@app-launch-kit/assets/icons/LeftPanelLogo';
import FullLogoDark from '@app-launch-kit/assets/icons/FullLogoDark';

const AuthLayoutLeftPanel = () => {
  return (
    <VStack className="w-full" space="md">
      <Image
        source={require('@app-launch-kit/assets/images/gradientImage.png')}
        className="w-full h-full absolute"
        alt="Gluestack logo"
        contentFit="fill"
      />
      <VStack
        className="items-center h-full justify-center self-center max-w-[370px] w-full"
        space="2xl"
      >
        <VStack className="w-full">
          <FullLogoDark width="220" />
        </VStack>
        <Text className="text-[#F3F4F6] self-start text-[30px]">
          The universal starter kit to launch your app
        </Text>
        <VStack className="w-full">
          <LeftPanelLogo />
        </VStack>

        <Button className="gap-2 self-start px-3 bg-[#F0F0F0] hover:bg-[#FAFAFA] group-active/button:bg-[#FCFCFC]">
          <ButtonText className="text-xs  group-hover/button:text-[#171717] group-active/button:text-[#171717] text-[#171717]">
            Explore Docs
          </ButtonText>
          <Icon as={ArrowRightIcon} className="stroke-[#171717]" size="xs" />
        </Button>
      </VStack>
    </VStack>
  );
};

export default AuthLayoutLeftPanel;
