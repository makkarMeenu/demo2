import React from 'react';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import { Image } from '@app-launch-kit/components/primitives/image';

import { Box } from '@app-launch-kit/components/primitives/box';
import {
  Avatar,
  AvatarImage,
} from '@app-launch-kit/components/primitives/avatar';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import { Text } from '@app-launch-kit/components/primitives/text';
import { BlogCardProps } from './types';

export const BlogCard: React.FC<BlogCardProps> = ({
  publishedDate,
  category,
  readTime,
  title,
  description,
  authorName,
  designation,
  authorProfileURI,
  bannerURI,
  isHorizontal,
}) => {
  return isHorizontal ? (
    <HStack className="border rounded-lg border-transparent gap-5 items-stretch">
      <Image
        width={285}
        height={264}
        className="h-[264px] w-full md:w-[285px] rounded-lg"
        source={{
          uri: bannerURI,
        }}
        alt="image"
      />
      <VStack className="justify-between">
        <HStack className="items-center self-stretch gap-2 mb-2">
          {publishedDate && (
            <Text className="  text-typography-700 text-sm non-italic font-normal leading-[21px]">
              {publishedDate}
            </Text>
          )}
          {category && (
            <Box className="py-1 px-[10px] bg-background-100 rounded-full">
              <Text className="  text-typography-900 text-xs font-normal leading-normal">
                {category}
              </Text>
            </Box>
          )}
          {readTime && (
            <Text className="  text-typography-400 text-sm non-italic font-normal leading-[21px]">
              {readTime}
            </Text>
          )}
        </HStack>
        <Text className="  text-typography-900 text-lg font-extrabold mb-[10px]">
          {title}
        </Text>
        <Text className="  text-sm font-normal mb-8">{description}</Text>

        <HStack className="border-t border-outline-100 pt-3 items-center gap-3">
          <Avatar size="md">
            <AvatarImage
              width={48}
              height={48}
              className="w-12 h-12 object-cover"
              alt="Author Profile Image"
              source={{
                uri: authorProfileURI,
              }}
            />
          </Avatar>
          <VStack>
            <Heading size="sm">{authorName}</Heading>
            <Text size="sm">{designation}</Text>
          </VStack>
        </HStack>
      </VStack>
    </HStack>
  ) : (
    <VStack className="border rounded-lg bg-background-0 border-transparent gap-4 items-start p-5">
      <Box className="h-[261px] rounded-lg w-full">
        <Image
          width="100%"
          height="100%"
          className="h-full rounded-lg w-full object-cover"
          source={{
            uri: bannerURI,
          }}
          alt="blog-image"
        />
      </Box>
      <VStack>
        <HStack className="mb-2 gap-2 items-center">
          {publishedDate && (
            <Text className="  text-typography-700 text-sm non-italic font-normal leading-[21px]">
              {publishedDate}
            </Text>
          )}
          {category && (
            <Box className="py-1 px-[10px] bg-background-100 rounded-full">
              <Text className="  text-typography-900 text-xs font-normal leading-normal">
                {category}
              </Text>
            </Box>
          )}
          {readTime && (
            <Text className="  text-typography-400 text-sm non-italic font-normal leading-[21px]">
              {readTime}
            </Text>
          )}
        </HStack>
        <Text className="  text-typography-900 text-lg font-extrabold mb-[10px]">
          {title}
        </Text>
        <Text className="  text-sm font-normal mb-8">{description}</Text>
        <HStack className="border-t border-outline-100 pt-3 items-center gap-3">
          <Avatar size="md">
            <AvatarImage
              width={48}
              height={48}
              className="w-12 h-12 object-cover"
              alt="Author Profile Image"
              source={{
                uri: authorProfileURI,
              }}
            />
          </Avatar>
          <VStack>
            <Heading size="sm">{authorName}</Heading>
            <Text size="sm">{designation}</Text>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
};
