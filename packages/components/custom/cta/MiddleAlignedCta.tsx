import React from 'react';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Box } from '@app-launch-kit/components/primitives/box';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import { Image } from '@app-launch-kit/components/primitives/image';
import { ScrollView } from '@app-launch-kit/components/primitives/scroll-view';
import {
  Button,
  ButtonGroup,
  ButtonText,
  ButtonIcon,
} from '@app-launch-kit/components/primitives/button';
import { ChevronRightIcon } from '@app-launch-kit/components/primitives/icon';
import Header from '@app-launch-kit/components/custom/cta/Header';

type Props = {
  heading: string;
  description: string;
  imageURI: string;
};

const MiddleAlignedCta = (props: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="h-full w-full"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <VStack className="bg-background-0 md:max-w-[1440px] md:w-full md:mx-auto">
        <Header />
        <Box className="px-5 md:max-w-[80%] mx-auto w-full">
          <Box className="gap-5 md:gap-10 md:items-center mb-10 md:mb-16 mt-6 md:mt-[72px]">
            <Box className="gap-3 md:items-center">
              <Heading className="font-roboto text-4xl md:text-5xl tracking-[0.2px] md:text-center">
                {props.heading}
              </Heading>
              <Text className="font-roboto text-typography-500 text-lg font-normal md:text-center">
                {props.description}
              </Text>
            </Box>
            <ButtonGroup className="gap-4 flex-row">
              <Button>
                <ButtonText>Get strated</ButtonText>
              </Button>
              <Button variant="outline" action="secondary">
                <ButtonText>Learn more</ButtonText>
              </Button>
            </ButtonGroup>
          </Box>
          <Box className="aspect-square md:aspect-video">
            <Image
              alt="cta-image"
              className="w-full h-full object-cover"
              width="100%"
              height="100%"
              source={{
                uri: 'https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
            />
          </Box>
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default MiddleAlignedCta;
