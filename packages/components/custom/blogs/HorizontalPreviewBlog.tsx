import React from 'react';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import { View } from '@app-launch-kit/components/primitives/view';
import { Box } from '@app-launch-kit/components/primitives/box';
import { BlogCard } from './BlogCard';
import {
  Input,
  InputField,
  InputSlot,
  InputIcon,
} from '@app-launch-kit/components/primitives/input';
import { SearchIcon } from '@app-launch-kit/components/primitives/icon';
import { ScrollView } from '@app-launch-kit/components/primitives/scroll-view';
import { BlogPost } from './types';

type Props = {
  blogPosts: BlogPost[];
};

export const HorizontalPreviewBlog: React.FC<Props> = ({
  blogPosts,
}: Props) => {
  return (
    <ScrollView>
      <VStack className="bg-background-0 md:items-center">
        <VStack className="items-start md:items-center mt-[60px] md:mt-[121px] px-6">
          <Heading className="  not-italic text-4xl md:text-5xl font-bold">
            Check out our latest blogs
          </Heading>
          <Text className="mt-3   text-typography-500 text-base md:text-lg not-italic ">
            Find The latest industry news, interviews, technologies, resources
            and more.
          </Text>
          <Input className="mt-8 w-full md:w-[406px]">
            <InputField placeholder="Search for blogs" />
            <InputSlot>
              <InputIcon
                as={SearchIcon}
                className="w-5 h-5 mr-3 stroke-background-800"
              />
            </InputSlot>
          </Input>
        </VStack>
        <View className="flex-column mt-10 md:mt-[80px] mb-[49px] md:w-[720px]">
          <Box className="hidden md:flex gap-[56px]">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                isHorizontal
                publishedDate={post.publishedDate}
                category={post.category}
                readTime={post.readTime}
                title={post.title}
                description={post.description}
                authorName={post.authorName}
                designation={post.designation}
                authorProfileURI={post.authorProfileURI}
                bannerURI={post.bannerURI}
              />
            ))}
          </Box>
          <Box className="flex md:hidden">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                publishedDate={post.publishedDate}
                category={post.category}
                readTime={post.readTime}
                title={post.title}
                description={post.description}
                authorName={post.authorName}
                designation={post.designation}
                authorProfileURI={post.authorProfileURI}
                bannerURI={post.bannerURI}
              />
            ))}
          </Box>
        </View>
      </VStack>
    </ScrollView>
  );
};
