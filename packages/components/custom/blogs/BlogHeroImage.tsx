import React from 'react';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import { View } from '@app-launch-kit/components/primitives/view';
import { Box } from '@app-launch-kit/components/primitives/box';
import { Image } from '@app-launch-kit/components/primitives/image';
import { ScrollView } from '@app-launch-kit/components/primitives/scroll-view';
import { BlogCard } from './BlogCard';
import {
  Input,
  InputField,
  InputSlot,
  InputIcon,
} from '@app-launch-kit/components/primitives/input';
import { SearchIcon } from '@app-launch-kit/components/primitives/icon';
import { BlogPost } from './types';

type Props = {
  blogPosts: BlogPost[];
};

export const BlogHeroImage: React.FC<Props> = ({ blogPosts }: Props) => {
  return (
    <ScrollView>
      <VStack className="bg-background-0 items-center">
        <Box className="h-[216px] w-full">
          <Image
            width="100%"
            height="100%"
            className="h-full w-full object-cover"
            source={{
              uri: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wJTIwYW5kJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D',
            }}
            alt="image"
          />
        </Box>
        <VStack className="items-start md:items-center bg-background-dark py-8 px-5 w-full md:w-[85%] justify-center mt-[-10%] md:rounded-2xl">
          <Heading className="  not-italic text-4xl md:text-5xl font-bold text-[#fff]">
            Check out our latest blogs
          </Heading>
          <Text className="mt-3   text-typography-500 text-base md:text-lg not-italic text-[#d4d4d4]">
            Find The latest industry news, interviews, technologies, resources
            and more.
          </Text>
          <Input className="mt-8 w-full md:w-[406px] data-[hover=true]:[border-[#8C8D8D]] focus:border-[#FCFCFC]  data-[focus=true]:hover:border-[#FCFCFC] data-[focus=true]:web:ring-1 data-[focus=true]:web:ring-inset data-[focus=true]:web:ring-[#FCFCFC]">
            <InputField
              placeholder="Search for blogs"
              className="placeholder:text-[#8C8C8C] text-[#f5f5f5]"
            />
            <InputSlot>
              <InputIcon
                as={SearchIcon}
                className="w-5 h-5 mr-3 stroke-[#f2f1f1]"
              />
            </InputSlot>
          </Input>
        </VStack>
        <View className="flex-column md:flex-row mt-[28px] md:mt-[56px] mb-[49px] gap-3 md:w-[88%]">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              publishedDate={post.publishedDate}
              readTime={post.readTime}
              title={post.title}
              description={post.description}
              authorName={post.authorName}
              designation={post.designation}
              authorProfileURI={post.authorProfileURI}
              bannerURI={post.bannerURI}
            />
          ))}
        </View>
      </VStack>
    </ScrollView>
  );
};
