import React, { useRef, useState } from 'react';
import {
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { Box } from '@app-launch-kit/components/primitives/box';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Text } from '@app-launch-kit/components/primitives/text';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import { CarouselTestimonialCard } from '@app-launch-kit/components/custom/testimonials/CarouselTestimonialCard';
import { Pressable } from '@app-launch-kit/components/primitives/pressable';
import { Icon } from '@app-launch-kit/components/primitives/icon';

type Testimonial = {
  profileURI: string;
  authorName: string;
  profileName: string;
  testimonialContent: string;
};

type Props = {
  testimonials: Testimonial[];
};

export const TestimonialsCarousel = ({ testimonials }: Props) => {
  const flatListRef = useRef<FlatList>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isContentAtRight, setIsContentAtRight] = useState(true);
  const scrollAmount = 312;

  const handleScrollLeft = () => {
    const newScrollPosition = Math.max(scrollPosition - scrollAmount, 0);
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({
        offset: newScrollPosition,
        animated: true,
      });
      setScrollPosition(newScrollPosition);
    }
  };

  const handleScrollRight = () => {
    const newScrollPosition = scrollPosition + scrollAmount;
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({
        offset: newScrollPosition,
        animated: true,
      });
      setScrollPosition(newScrollPosition);
    }
  };

  const checkContentAtLeft = () => {
    return scrollPosition > 0;
  };

  const isCloseToRight = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!event.nativeEvent) return false;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isScrollAtEnd =
      contentOffset?.x + layoutMeasurement?.width >= contentSize?.width - 1; // Slight offset to ensure accurate detection
    return isScrollAtEnd;
  };

  return (
    <Box className="bg-background-0 items-center px-5 py-24 md:pt-[89px]">
      <VStack className="mb-10 md:mb-20">
        <Box className="gap-3 items-center">
          <Box className="px-4 py-2 bg-background-50 rounded-[32px]">
            <Text className="font-roboto text-base text-typography-900">
              Testimonials
            </Text>
          </Box>
          <Heading className="font-roboto text-2xl md:text-3xl">
            What our clients have to say
          </Heading>
        </Box>
      </VStack>
      <Box className="w-[100%] relative items-center">
        <FlatList
          horizontal
          contentContainerClassName="gap-6 p-4"
          className="w-[100%] md:w-[69%] lg:w-[75%] xl:w-[60%]"
          showsHorizontalScrollIndicator={false}
          ref={flatListRef}
          data={testimonials}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Box className="w-[280px] min-h-[367px] flex-row">
              <CarouselTestimonialCard {...item} />
            </Box>
          )}
          onScroll={({ nativeEvent }) => {
            if (nativeEvent) {
              setScrollPosition(nativeEvent.contentOffset.x);
              //@ts-ignore
              setIsContentAtRight(!isCloseToRight({ nativeEvent }));
            }
          }}
          scrollEventThrottle={20} // Ensure smooth scrolling
        />
        <ScrollLeft
          handleScrollLeft={handleScrollLeft}
          disabled={!checkContentAtLeft()}
        />
        <ScrollRight
          handleScrollRight={handleScrollRight}
          disabled={!isContentAtRight}
        />
      </Box>
    </Box>
  );
};

const ScrollLeft = ({ handleScrollLeft, disabled }: any) => {
  return (
    <Pressable
      className={`absolute top-[45%] left-10 lg:left-[62px] xl:left-[190px] hidden md:flex p-2 rounded-full bg-background-50 hover:bg-background-100 ${
        disabled
          ? 'data-[disabled=true]:opacity-0'
          : 'data-[disabled=true]:opacity-100'
      }`}
      disabled={disabled}
      onPress={handleScrollLeft}
    >
      <Icon as={ChevronLeft} className="w-5 h-5" />
    </Pressable>
  );
};

const ScrollRight = ({ handleScrollRight, disabled }: any) => {
  return (
    <Pressable
      className={`absolute top-[45%] right-10 lg:right-[62px] xl:right-[190px] hidden md:flex p-2 rounded-full bg-background-50 hover:bg-background-100 ${
        disabled
          ? 'data-[disabled=true]:opacity-0'
          : 'data-[disabled=true]:opacity-100'
      }`}
      onPress={handleScrollRight}
      disabled={disabled}
    >
      <Icon as={ChevronRight} className="w-5 h-5 dark:text-background-800" />
    </Pressable>
  );
};
