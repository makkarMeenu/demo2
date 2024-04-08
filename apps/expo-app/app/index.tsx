import { Text, Center, Link, LinkText } from '@gluestack-ui/themed';
import React from 'react';

const Home = () => {
  return (
    <Center flex={1} p="$2">
      <Text>
        You have your project ready. If you want to add more plugins to it, go
        to{' '}
        <Link href="https://framework-v3-docs.vercel.app/">
          <LinkText>Framework v3 Docs</LinkText>
        </Link>{' '}
        and add other plugins.
      </Text>
      <Text>Add links and use hooks to navigate to other pages.</Text>
    </Center>
  );
};

export default Home;
