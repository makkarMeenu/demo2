'use client';
import { useBreakpointValue } from '@gluestack-ui/nativewind-utils/useBreakpointValue';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import {
  Icon,
  ArrowLeftIcon,
} from '@app-launch-kit/components/primitives/icon';
import { Pressable } from '@app-launch-kit/components/primitives/pressable';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { useRouter } from '@unitools/router';

type ScreenDescriptionProps = {
  title?: string;
  description?: string;
};

export default function ScreenDescription(props: ScreenDescriptionProps) {
  const headingSize = useBreakpointValue({
    sm: '2xl',
    md: '3xl',
  });
  const router = useRouter();
  return (
    <VStack className="md:items-center" space="2xl">
      <Pressable
        onPress={() => {
          router.back();
        }}
        className="group/pressable"
      >
        <Icon
          as={ArrowLeftIcon}
          className="md:hidden stroke-background-800"
          size="xl"
        />
      </Pressable>
      <VStack space="md">
        <Heading size={headingSize} className="md:text-center">
          {props.title}
        </Heading>
        <Text className="md:text-center">{props.description}</Text>
      </VStack>
    </VStack>
  );
}
