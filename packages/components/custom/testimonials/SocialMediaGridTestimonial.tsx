import React, { useState } from 'react';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Box } from '@app-launch-kit/components/primitives/box';
import {
  Button,
  ButtonText,
  ButtonIcon,
} from '@app-launch-kit/components/primitives/button';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import { Image } from '@app-launch-kit/components/primitives/image';
import {
  ChevronDownIcon,
  ChevronUpIcon,
} from '@app-launch-kit/components/primitives/icon';
import { ScrollView } from '@app-launch-kit/components/primitives/scroll-view';
import { View } from '@app-launch-kit/components/primitives/view';
import { SocialMediaTestimonial } from '@app-launch-kit/components/custom/testimonials/SocialMediaTestimonial';
import data from '@app-launch-kit/utils/constants/socialMediaTestimonials';

export const SocialMediaGridTestimonial = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <ScrollView>
      <VStack className="px-6 md:px-[60px] xl:px-[120px] py-11 md:py-[88px] bg-background-0">
        <Box className="gap-2 md:gap-3 items-center mb-10 md:mb-20">
          <Box className="shadow-soft1 self-center flex-row gap-2 items-center py-2 px-4 rounded-[32px] border border-outline-200">
            <Text className="font-roboto text-base text-background-900">
              Testimonials
            </Text>
            <Box className="bg-[#272625] p-[6px] rounded-3xl">
              <Image
                source={require('@app-launch-kit/assets/images/twitterLogoDark.png')}
                alt="verified-tag"
                className="w-3 h-3"
              />
            </Box>
          </Box>
          <Heading className="text-3xl md:text-4xl font-roboto">
            Public Cheers for Us!
          </Heading>
          <Text className="font-roboto md:text-base">
            Find out how our users are spreading the word!
          </Text>
        </Box>
        <View className="gap-5 web:grid web:md:grid-cols-2 web:lg:grid-cols-3 relative pb-[54px]">
          {data.map((data, index) =>
            index < 6 || showMore ? (
              <Box
                key={index}
                className={`md:flex-row md:col-span-1 ${index === 1 ? 'lg:row-span-3' : 'lg:row-span-2'}`}
              >
                <SocialMediaTestimonial {...data} />
              </Box>
            ) : null
          )}

          {!showMore && data.length > 6 && (
            <Box className="web:bg-gradient-to-b from-[rgba(255,255,255,0.50)] to-[#FFF] web:dark:bg-gradient-to-b dark:from-[rgba(18,18,18,0.50)] dark:to-[#121212] h-2/5 absolute bottom-0 left-0 w-full" />
          )}
        </View>
        {data.length > 6 && (
          <Button
            className="self-center gap-1 md:h-[48px]"
            onPress={() => setShowMore(!showMore)}
          >
            <ButtonText className="font-roboto text-lg md:text-xl font-normal">
              {showMore ? 'Show less' : 'Show more'}
            </ButtonText>
            {showMore ? (
              <ButtonIcon className="w-5 h-5" as={ChevronUpIcon} />
            ) : (
              <ButtonIcon className="w-5 h-5" as={ChevronDownIcon} />
            )}
          </Button>
        )}
      </VStack>
    </ScrollView>
  );
};
