import { Text, Divider, HStack } from '@gluestack-ui/themed';
import React from 'react';

export default function SignInDivider() {
  return (
    <HStack my="$4" space="md" alignItems="center" justifyContent="center">
      <Divider
        w="$2/6"
        bg="$backgroundLight200"
        sx={{ _dark: { bg: '$backgroundDark700' } }}
      />
      <Text
        fontWeight="$medium"
        color="$textLight400"
        sx={{ _dark: { color: '$textDark300' } }}
      >
        or
      </Text>
      <Divider
        w="$2/6"
        bg="$backgroundLight200"
        sx={{ _dark: { bg: '$backgroundDark700' } }}
      />
    </HStack>
  );
}
