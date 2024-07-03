import React, { useContext } from 'react';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import {
  Avatar,
  AvatarImage,
} from '@app-launch-kit/components/primitives/avatar';
import { Image } from '@app-launch-kit/components/primitives/image';
import { ColorContext } from '@app-launch-kit/utils/context/ColorModeContext';

type Props = {
  profileURI: string;
  authorName: string;
  profileName: string;
  testimonialContent: string;
};

export const CarouselTestimonialCard = ({
  profileURI,
  authorName,
  profileName,
  testimonialContent,
}: Props) => {
  const colorMode = useContext(ColorContext);

  return (
    <VStack className="justify-between p-5 bg-background-0 shadow-soft1 border rounded-lg  border-outline-100">
      <VStack>
        <Image
          alt="logo"
          className="w-[120px] h-[22px]"
          source={
            colorMode === 'dark'
              ? require('@app-launch-kit/assets/images/gluestack-full-logo-dark.png')
              : require('@app-launch-kit/assets/images/gluestack-full-logo-light.png')
          }
        />
        <Text className="font-roboto text-sm py-6">{testimonialContent}</Text>
      </VStack>
      <HStack className="gap-3 items-center">
        <Avatar>
          <AvatarImage
            alt="user-profile"
            width={48}
            height={48}
            className="w-12 h-12 object-contain"
            source={{
              uri: profileURI,
            }}
          />
        </Avatar>
        <VStack className="gap-[2px]">
          <Text className="text-sm font-roboto text-typography-900 font-semibold">
            {authorName}
          </Text>
          <Text className="font-roboto text-sm text-typography-400">
            {profileName}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};
