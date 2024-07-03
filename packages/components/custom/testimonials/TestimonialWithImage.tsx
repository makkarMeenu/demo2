import React from 'react';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Image } from '@app-launch-kit/components/primitives/image';
import {
  DoubleQuoteOrange,
  DoubleQuoteGray,
} from '@app-launch-kit/components/../assets/icons/DoubleQuote';
import { Icon } from '@app-launch-kit/components/primitives/icon';
import { Box } from '@app-launch-kit/components/primitives/box';

type Props = {
  testimonialContent: string;
  authorName: string;
  designation: string;
  profileURI: string;
  hasColor?: boolean;
};

export const TestimonialWithImage = ({
  testimonialContent,
  authorName,
  designation,
  profileURI,
  hasColor = false,
}: Props) => {
  return (
    <Box
      className={`md:flex-row gap-7 md:gap-[56px] p-5 md:px-[88px] md:py-[64px] ${hasColor ? 'bg-orange-50' : 'bg-background-0'} rounded-3xl shadow-soft2`}
    >
      <Box className="h-[250px] w-full md:h-[312px] md:w-[312px] shrink-0">
        <Image
          alt="testimonial-image"
          width="100%"
          height="100%"
          className="h-full w-full rounded-lg object-cover"
          source={{
            uri: profileURI,
          }}
        />
      </Box>
      <VStack className="justify-between">
        <VStack>
          {hasColor ? (
            <Icon
              className="w-[48px] h-[48px] md:w-[72px] md:h-[72px] stroke-none"
              as={DoubleQuoteOrange}
            />
          ) : (
            <Icon
              className="w-[48px] h-[48px] md:w-[72px] md:h-[72px] stroke-none"
              as={DoubleQuoteGray}
            />
          )}

          <Text
            className={`font-roboto mt-3 text-lg md:text-2xl   ${hasColor ? 'text-[#181718]' : 'text-typography-900'}`}
          >
            {testimonialContent}
          </Text>
        </VStack>
        <VStack className="gap-1 mt-6">
          <Text
            className={`font-roboto text-base font-semibold md:text-xl ${hasColor ? 'text-[#181718]' : 'text-typography-900'}`}
          >
            {authorName}
          </Text>
          <Text
            className={`font-roboto text-sm ${hasColor ? 'text-[#181718]' : 'text-typography-400'}`}
          >
            {designation}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};
