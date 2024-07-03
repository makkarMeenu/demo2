import React from 'react';
import { Text } from '@app-launch-kit/components/primitives/text';
import { Box } from '@app-launch-kit/components/primitives/box';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import {
  Button,
  ButtonText,
  ButtonGroup,
  ButtonIcon,
} from '@app-launch-kit/components/primitives/button';
import { ChevronRightIcon } from '@app-launch-kit/components/primitives/icon';

type Props = {
  heading: string;
  description: string;
};

const HorizontalCta = (props: Props) => {
  return (
    <Box className="gap-10 bg-background-0 p-6 md:p-20 md:flex-row md:justify-between max-w-7xl mx-auto">
      <VStack className="gap-3">
        <Heading className="font-roboto text-4xl md:text-5xl tracking-[0.2px]">
          {props.heading}
        </Heading>
        <Text className="font-roboto text-lg text-typography-500 font-normal">
          {props.description}
        </Text>
      </VStack>
      <ButtonGroup className="gap-6 flex-row items-center">
        <Button>
          <ButtonText>Get Started</ButtonText>
        </Button>
        <Button variant="link">
          <ButtonText>Learn more</ButtonText>
          <ButtonIcon as={ChevronRightIcon} />
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default HorizontalCta;
