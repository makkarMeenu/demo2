import React from 'react';
import { Text } from '@app-launch-kit/components/primitives/text';
import { ChevronRightIcon } from '@app-launch-kit/components/primitives/icon';
import {
  ButtonGroup,
  Button,
  ButtonText,
  ButtonIcon,
} from '@app-launch-kit/components/primitives/button';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import { Box } from '@app-launch-kit/components/primitives/box';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Image } from '@app-launch-kit/components/primitives/image';

type Props = {
  imageURI: string;
  heading: string;
  description: string;
};

const CtaWithSplitImage = (props: Props) => {
  return (
    <Box className="md:flex-row bg-background-0 p-5 md:p-9 gap-7 max-w-7xl md:mx-auto">
      <Box className="md:basis-[45%] xl:basis-[50%] w-full h-[300px] md:h-auto">
        <Image
          className="w-full h-full rounded-lg object-cover"
          width="100%"
          height="100%"
          alt="split-image"
          source={{
            uri: props.imageURI,
          }}
        />
      </Box>
      <VStack className="md:basis-[55%] xl:basis-[50%] md:pt-[180px]">
        <Heading className="font-roboto text-4xl md:text-5xl xl:text-6xl tracking-[0.2px] pb-4 text-typography-950">
          {props.heading}
        </Heading>
        <Text className="font-roboto text-typography-700 text-md md:text-lg font-normal">
          {props.description}
        </Text>
        <ButtonGroup className="flex-row mt-10 gap-6">
          <Button>
            <ButtonText className="font-roboto">Get started</ButtonText>
          </Button>
          <Button variant="link">
            <ButtonText className="font-roboto">Learn more</ButtonText>
            <ButtonIcon as={ChevronRightIcon} />
          </Button>
        </ButtonGroup>
      </VStack>
    </Box>
  );
};

export default CtaWithSplitImage;
