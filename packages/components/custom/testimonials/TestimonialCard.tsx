import React, { useState } from 'react';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import {
  Avatar,
  AvatarImage,
} from '@app-launch-kit/components/primitives/avatar';
import { Divider } from '@app-launch-kit/components/primitives/divider';
import { Icon, StarIcon } from '@app-launch-kit/components/primitives/icon';
import { Pressable } from '@app-launch-kit/components/primitives/pressable';

type Props = {
  value?: number;
  testimonialContent: string;
  authorName: string;
  authorProfileURI: string;
  authorDesignation: string;
  authorSocials?: string;
  isInteractive?: boolean;
};

const RatingIcon = ({ iconSize, isFilled }: any) => {
  return (
    <Icon
      as={StarIcon}
      className={`${isFilled ? 'fill-yellow-400 stroke-yellow-400' : 'fill-background-200 stroke-background-200'}`}
      size={iconSize}
    />
  );
};

const RatingComponent = ({
  iconSize,
  totalRating = 5,
  ratingValue,
  setRatingValue,
  isInteractive,
}: {
  iconSize: any;
  totalRating?: number;
  ratingValue: number;
  isInteractive: boolean;
  setRatingValue: (value: number) => void;
}) => {
  const renderRating = Array.from({ length: totalRating }, (_, index) => {
    const starNumber = index + 1;
    const isFilled = starNumber <= ratingValue;
    return (
      <Pressable
        onPress={isInteractive ? () => setRatingValue(starNumber) : undefined}
      >
        <RatingIcon iconSize={iconSize} isFilled={isFilled} />
      </Pressable>
    );
  });
  return (
    <HStack className="py-4 mb-6 self-center gap-1">{renderRating}</HStack>
  );
};

export const TestimonialCard = ({
  value = 5,
  testimonialContent,
  authorName,
  authorProfileURI,
  authorDesignation,
  authorSocials,
  isInteractive = true,
}: Props) => {
  const [ratingValue, setRatingValue] = useState(value);
  return (
    <VStack className="p-5 bg-background-0 shadow-soft1 rounded-lg border border-outline-100">
      <RatingComponent
        iconSize="lg"
        ratingValue={ratingValue}
        setRatingValue={setRatingValue}
        isInteractive={isInteractive}
      />
      <Text size="sm" className="mb-7 font-roboto leading-[21px]">
        {testimonialContent}
      </Text>
      <HStack
        space="md"
        className="border-t border-outline-100 pt-3 items-center"
      >
        <Avatar>
          <AvatarImage
            width={48}
            height={48}
            className="w-12 h-12 object-cover"
            alt="uer-profile"
            source={{
              uri: authorProfileURI,
            }}
          />
        </Avatar>
        <VStack>
          <Text
            size="sm"
            className="font-roboto text-typography-900 font-semibold"
          >
            {authorName}
          </Text>
          <HStack className="mt-[2px]">
            <Text
              size="sm"
              className="font-roboto font-normal text-typography-400 leading-[21px]"
            >
              {authorDesignation}
            </Text>
            {authorDesignation && authorSocials && (
              <Divider
                orientation="vertical"
                className="border-outline-50 mx-[4px] h-5 leading-[21px]"
              />
            )}
            {authorSocials && (
              <Text
                size="sm"
                className="font-roboto font-normal text-typography-400 leading-[21px]"
              >
                {authorSocials}
              </Text>
            )}
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};
