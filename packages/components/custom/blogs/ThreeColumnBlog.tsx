import React from 'react';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import {
  Input,
  InputField,
  InputSlot,
  InputIcon,
} from '@app-launch-kit/components/primitives/input';
import { SearchIcon } from '@app-launch-kit/components/primitives/icon';
import { Grid, GridItem } from '@app-launch-kit/components/primitives/grid';
import { BlogCard } from './BlogCard';
import { ScrollView } from '@app-launch-kit/components/primitives/scroll-view';
import { BlogPost } from './types';

type Props = {
  blogPosts: BlogPost[];
};

export const ThreeColumnBlog: React.FC<Props> = ({ blogPosts }: Props) => {
  return (
    <ScrollView className="flex" contentContainerStyle={{ flexGrow: 1 }}>
      <VStack className="bg-background-0 items-start md:items-center">
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
        <Grid
          className="gap-3 mt-7 md:mt-[56px] mb-[49px] md:py-6"
          _extra={{
            className: 'grid-cols-1 md:grid-cols-3',
          }}
        >
          {blogPosts.map((post) => (
            <GridItem
              _extra={{
                className: 'col-span-1',
              }}
            >
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
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </ScrollView>
  );
};
