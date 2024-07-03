import React, { useContext } from 'react';
import { Text } from '@app-launch-kit/components/primitives/text';
import { Icon } from '@app-launch-kit/components/primitives/icon';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import {
  Avatar,
  AvatarImage,
} from '@app-launch-kit/components/primitives/avatar';
import { Image } from '@app-launch-kit/components/primitives/image';
import { Divider } from '@app-launch-kit/components/primitives/divider';
import { ColorContext } from '@app-launch-kit/utils/context/ColorModeContext';

type Props = {
  profileURI: string;
  authorName: string;
  profileName: string;
  isVerified?: boolean;
  testimonialContent: string;
  timestamp?: string;
  date?: string;
  logoLight: React.FC;
  logoDark: React.FC;
};

export const SocialMediaTestimonial = ({
  profileURI,
  authorName,
  profileName,
  isVerified = false,
  testimonialContent,
  timestamp,
  date,
  logoDark,
  logoLight,
}: Props) => {
  const colorMode = useContext(ColorContext);

  return (
    <VStack className="justify-between p-5 bg-background-0 shadow-hard5 rounded-lg dark:border dark:border-outline-200">
      <VStack>
        <HStack className="justify-between self-stretch items-center">
          <HStack className="gap-3 items-center">
            <Avatar>
              <AvatarImage
                width={48}
                height={48}
                className="w-12 h-12 object-cover"
                alt="profile-image"
                source={{
                  uri: profileURI,
                }}
              />
            </Avatar>
            <VStack className="gap-1">
              <HStack className="gap-2">
                <Text className="text-sm font-roboto text-typography-900 font-semibold">
                  {authorName}
                </Text>
                {isVerified && (
                  <Image
                    source={require('@app-launch-kit/assets/images/verified.png')}
                    alt="verified-tag"
                    className="w-5 h-5"
                  />
                )}
              </HStack>
              <Text className="font-roboto text-sm text-typography-400">
                {profileName}
              </Text>
            </VStack>
          </HStack>
          {colorMode === 'dark' ? (
            <Icon as={logoDark} className="w-[22px] h-[22px] stroke-none" />
          ) : (
            <Icon as={logoLight} className="w-[22px] h-[22px] stroke-none" />
          )}
        </HStack>
        <Text className="font-roboto text-sm leading-[21px] py-7">
          {testimonialContent}
        </Text>
      </VStack>
      <HStack>
        {timestamp && (
          <Text className="font-roboto text-sm text-typography-500 leading-[21px]">
            {timestamp}
          </Text>
        )}
        {timestamp && date && (
          <Divider
            orientation="vertical"
            className="mx-2 h-[21px] leading-[21px]"
          />
        )}
        {date && (
          <Text className="font-roboto text-sm text-typography-500 leading-[21px]">
            {date}
          </Text>
        )}
      </HStack>
    </VStack>
  );
};
