import React from 'react';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Text } from '@app-launch-kit/components/primitives/text';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import { Box } from '@app-launch-kit/components/primitives/box';
import {
  Button,
  ButtonText,
  ButtonIcon,
} from '@app-launch-kit/components/primitives/button';
import { Image } from '@app-launch-kit/components/primitives/image';

type Props = {
  imageURI: string;
  title: string;
  description: string;
  ctaButtonText: string;
  ctaButtonIcon: React.FC;
};

const CtaWithBackgroundImage = (props: Props) => {
  return (
    <VStack className="h-[600px] justify-end">
      <Image
        width="100%"
        height="100%"
        className="w-full h-full absolute object-cover object-[50%_25%]"
        alt="podcast-image"
        source={{
          uri: props.imageURI,
        }}
      />
      <Box className="bg-gradient-to-b from-[rgba(0,0,0,0.00)] to-[rgba(24,23,25,0.90)] h-2/5 absolute bottom-0 left-0 w-full" />
      <Box className="gap-5 md:gap-10 items-start md:items-center px-4 pb-10 md:pb-[100px]">
        <Box className="gap-4">
          <Heading className="font-roboto text-4xl md:text-6xl md:text-center text-[#fff]">
            {props.title}
          </Heading>
          <Text className="font-roboto text-lg font-normal text-[#D4D4D4] md:text-center">
            {props.description}
          </Text>
        </Box>
        <Button size="md">
          <ButtonText className="font-roboto">{props.ctaButtonText}</ButtonText>
          <ButtonIcon as={props.ctaButtonIcon} className="ml-1" />
        </Button>
      </Box>
    </VStack>
  );
};

export default CtaWithBackgroundImage;
