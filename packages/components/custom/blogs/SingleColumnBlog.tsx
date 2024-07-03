import React, { useMemo } from 'react';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import { BlogCard } from './BlogCard';
import {
  Button,
  ButtonIcon,
  ButtonText,
} from '@app-launch-kit/components/primitives/button';
import { ScrollView } from '@app-launch-kit/components/primitives/scroll-view';
import {
  Menu,
  MenuItem,
  MenuItemLabel,
} from '@app-launch-kit/components/primitives/menu';
import {
  Icon,
  CalendarDaysIcon,
  StarIcon,
  ChevronDownIcon,
  InfoIcon,
  EditIcon,
} from '@app-launch-kit/components/primitives/icon';
import { Tab, BlogPost } from './types';

type Props = {
  foodData: BlogPost[];
  trendsData: BlogPost[];
  guidesData: BlogPost[];
  insightsData: BlogPost[];
};

export const SingleColumnBlog: React.FC<Props> = ({
  foodData,
  trendsData,
  guidesData,
  insightsData,
}: Props) => {
  const [activeTab, setActiveTab] = React.useState<Tab>(Tab.FOOD);

  const blogData = useMemo(() => {
    switch (activeTab) {
      case Tab.FOOD:
        return foodData;
      case Tab.TRENDS:
        return trendsData;
      case Tab.GUIDES:
        return guidesData;
      case Tab.INSIGHTS:
        return insightsData;
      default:
        return foodData;
    }
  }, [activeTab]);

  const handleClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <ScrollView>
      <VStack className="bg-background-0 items-center py-24">
        <VStack className="items-start md:w-[60%] lg:w-[50%] px-5">
          <Heading className="  not-italic text-4xl md:text-5xl font-bold">
            Check out our latest blogs
          </Heading>
          <Text className="mt-3   text-typography-500 text-base md:text-lg not-italic ">
            Discover the latest industry news, interviews, technologies,
            resources, and more. Stay updated with in-depth articles and
            insights from experts in the field.
          </Text>
          <HStack className="gap-2 p-1 bg-background-50 flex-start mt-8 mb-[28px] md:mb-[58px] w-full rounded-lg">
            <Button
              className={`px-4 bg-transparent py-2 items-center flex-1 active:bg-background-0 hover:bg-background-0 ${activeTab === Tab.FOOD ? 'bg-background-0 shadow-button' : ''}`}
              onPress={() => handleClick(Tab.FOOD)}
            >
              <Text
                className={`  font-medium text-typography-700 ${
                  activeTab === Tab.FOOD ? 'text-typography-900' : ''
                }`}
              >
                Food
              </Text>
            </Button>
            <Button
              className={`px-4 bg-transparent py-2 items-center md:w-[163px] flex-1 active:bg-background-0 hover:bg-background-0 ${
                activeTab === Tab.TRENDS ? 'bg-background-0 shadow-button' : ''
              }`}
              onPress={() => handleClick(Tab.TRENDS)}
            >
              <Text
                className={`  font-medium text-typography-700 ${
                  activeTab === Tab.TRENDS ? 'text-typography-900' : ''
                }`}
              >
                Trends
              </Text>
            </Button>
            <Button
              className={`px-4 bg-transparent py-2 items-center md:w-[163px] flex-1 active:bg-background-0 hover:bg-background-0 ${
                activeTab === Tab.GUIDES ? 'bg-background-0 shadow-button' : ''
              }`}
              onPress={() => {
                handleClick(Tab.GUIDES);
              }}
            >
              <Text
                className={`  font-medium text-typography-700 ${
                  activeTab === Tab.GUIDES ? 'text-typography-900' : ''
                }`}
              >
                Guides
              </Text>
            </Button>
            <Button
              className={`px-4 bg-transparent py-2 items-center md:w-[163px] flex-1 active:bg-background-0 hover:bg-background-0 ${
                activeTab === Tab.INSIGHTS
                  ? 'bg-background-0 shadow-button'
                  : ''
              }`}
              onPress={() => handleClick(Tab.INSIGHTS)}
            >
              <Text
                className={`  font-medium text-typography-700 ${
                  activeTab === Tab.INSIGHTS ? 'text-typography-900' : ''
                }`}
              >
                Insights
              </Text>
            </Button>
          </HStack>
          <HStack className="w-full justify-between">
            <Text className="text-typography-400  text-xl md:text-2xl font-semibold non-italic   mb-1 md:mb-4">
              Results for{' '}
              <Text className="text-typography-900   text-xl md:text-2xl font-semibold non-italic">
                {activeTab}
              </Text>
            </Text>

            <Menu
              placement="bottom right"
              offset={10}
              trigger={({ ...triggerProps }) => {
                return (
                  <Button {...triggerProps} className="px-[12px]">
                    <ButtonText className="text-xs  ">Sort by</ButtonText>
                    <ButtonIcon
                      as={ChevronDownIcon}
                      size="sm"
                      className="ml-1"
                    />
                  </Button>
                );
              }}
            >
              <MenuItem key="Published" textValue="Published">
                <Icon as={CalendarDaysIcon} size="sm" className="mr-2" />
                <MenuItemLabel size="sm" className=" ">
                  Date Published
                </MenuItemLabel>
              </MenuItem>
              <MenuItem key="Popularity" textValue="Popularity">
                <Icon as={StarIcon} size="sm" className="mr-2" />
                <MenuItemLabel size="sm" className=" ">
                  Popularity
                </MenuItemLabel>
              </MenuItem>
              <MenuItem key="Relevance" textValue="Relevance">
                <Icon as={InfoIcon} size="sm" className="mr-2" />
                <MenuItemLabel size="sm" className=" ">
                  Relevance
                </MenuItemLabel>
              </MenuItem>
              <MenuItem key="Featured" textValue="Featured">
                <Icon as={EditIcon} size="sm" className="mr-2" />
                <MenuItemLabel size="sm" className=" ">
                  Featured
                </MenuItemLabel>
              </MenuItem>
            </Menu>
          </HStack>
        </VStack>
        <VStack className="md:w-[60%] lg:w-[50%] gap-3 md:gap-5">
          {blogData.map((post) => (
            <BlogCard
              key={post.id}
              readTime={post.readTime}
              title={post.title}
              description={post.description}
              authorName={post.authorName}
              designation={post.designation}
              authorProfileURI={post.authorProfileURI}
              bannerURI={post.bannerURI}
            />
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
};
