import {
  Center,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';

const WebSideContainer = () => {
  return (
    <Center flex={1} p="$8" justifyContent="center" bg="$primary500">
      <VStack space="lg" w="70%">
        <Heading size="4xl" color="$text50">
          Start making your dreams come true
        </Heading>
        <Text color="$text50">
          Create an account and discover the worlds best UI component framework.
        </Text>
        <HStack alignItems="center" space="sm">
          <Image
            w="$80"
            h="$10"
            alt="Gluestack-ui pro"
            resizeMode="contain"
            source={require('@/assets/images/avatar-group.svg')}
          />
          <Text color="$text50">Join 10,0000 users</Text>
        </HStack>
      </VStack>
    </Center>
  );
};

export default WebSideContainer;
