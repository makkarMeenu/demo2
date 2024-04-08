import {
  Heading,
  VStack,
  Text,
  useBreakpointValue,
} from '@gluestack-ui/themed';
import React from 'react';

type ScreenDescriptionProps = {
  title?: string;
  description?: string;
};

export default function ScreenDescription(props: ScreenDescriptionProps) {
  const headingSize = useBreakpointValue({ base: '2xl', md: '3xl' });
  return (
    <VStack space="sm">
      <Heading size={headingSize}>{props.title}</Heading>
      <Text fontSize="$sm">{props.description}</Text>
    </VStack>
  );
}
