import React from 'react';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import { Divider } from '@app-launch-kit/components/primitives/divider';
import { Icon, StarIcon } from '@app-launch-kit/components/primitives/icon';
import { Grid, GridItem } from '@app-launch-kit/components/primitives/grid';
import { GoogleIcon } from '@app-launch-kit/components/../assets/icons/GoogleIcon';
import { TestimonialCard } from '@app-launch-kit/components/custom/testimonials/TestimonialCard';
import { ScrollView } from '@app-launch-kit/components/primitives/scroll-view';

type Testimonial = {
  id: number;
  value?: number;
  testimonialContent: string;
  authorName: string;
  authorProfileURI: string;
  authorDesignation: string;
  authorSocials?: string;
  isInteractive?: boolean;
};

type Props = {
  testimonials: Testimonial[];
};

export const TwoColumnTestimonial = ({ testimonials }: Props) => {
  return (
    <ScrollView>
      <VStack className="items-center px-4 bg-background-0">
        <VStack className="items-center md:max-w-[719px] mt-6 md:mt-[120px]">
          <Text className="text-center text-lg font-roboto text-typography-400 not-italic">
            OUR CLIENTS
          </Text>
          <HStack className="mt-4 items-center">
            <Text className="font-roboto text-md text-typography-900">4.0</Text>
            <Divider
              orientation="vertical"
              className="mx-4 h-[30px] border-outline-100"
            />
            <HStack className="gap-1">
              <Icon
                as={StarIcon}
                className="fill-yellow-400 stroke-yellow-400"
                size="lg"
              />
              <Icon
                as={StarIcon}
                className="fill-yellow-400 stroke-yellow-400"
                size="lg"
              />
              <Icon
                as={StarIcon}
                className="fill-yellow-400 stroke-yellow-400"
                size="lg"
              />
              <Icon
                as={StarIcon}
                className="fill-yellow-400 stroke-yellow-400"
                size="lg"
              />
              <Icon
                as={StarIcon}
                className="fill-background-200 stroke-background-200"
                size="lg"
              />
            </HStack>
            <Divider
              orientation="vertical"
              className="mx-4 border-outline-100 h-[30px]"
            />
            <Icon as={GoogleIcon} className="stroke-none mr-[6px] w-5 h-5" />
            <Text className="font-roboto text-sm text-typography-400">
              Rating
            </Text>
          </HStack>
          <Heading className="font-roboto text-3xl md:text-4xl mt-5 text-center">
            Discover why hiring managers are raving about our platform
          </Heading>
        </VStack>
        <Grid
          className="gap-8 mt-10 md:mt-20 mb-[60px] md:mb-[120px] md:w-[85%]"
          _extra={{
            className: 'grid-cols-1 md:grid-cols-2',
          }}
        >
          {testimonials.map((item, index) => {
            return (
              <GridItem
                key={index}
                _extra={{
                  className: 'col-span-1',
                }}
              >
                <TestimonialCard
                  key={item.id}
                  value={item.value}
                  testimonialContent={item.testimonialContent}
                  authorName={item.authorName}
                  authorProfileURI={item.authorProfileURI}
                  authorDesignation={item.authorDesignation}
                  authorSocials={item.authorSocials}
                  isInteractive={item.isInteractive}
                />
              </GridItem>
            );
          })}
        </Grid>
      </VStack>
    </ScrollView>
  );
};
