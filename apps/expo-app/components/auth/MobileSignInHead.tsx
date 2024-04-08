import { Text, VStack, Heading } from '@gluestack-ui/themed';
import React from 'react';

import { MobileHeader } from './MobileHeader';

export default function MobileSignInHead(props: any) {
  return (
    <VStack px="$3" mt="$4.5" space="md">
      <MobileHeader />
      <VStack space="xs" ml="$1" my="$4">
        <Heading
          color="$textLight50"
          size="2xl"
          sx={{ '_dark': { color: '$textDark50' }, '@md': { size: '3xl' } }}
        >
          {props.title}
        </Heading>
        <Text
          fontSize="$md"
          fontWeight="normal"
          color="$primary300"
          sx={{
            _dark: { color: '$textDark400' },
          }}
        >
          {props.subTitle}
        </Text>
      </VStack>
    </VStack>
  );
}
