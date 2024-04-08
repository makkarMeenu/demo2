import {
  Button,
  ButtonText,
  Heading,
  Center,
  Text,
} from '@gluestack-ui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';

import { useAuthNavigationLinks } from '@/hooks/auth/useAuthNavigationLinks';
import { useAuthentication } from '@/hooks/auth/useAuthentication';

const Demo = () => {
  const { signOut, getUserById } = useAuthentication();
  const [userEmail, setUserEmail] = useState<any>(null);

  const { signIn } = useAuthNavigationLinks();

  useEffect(() => {
    const fetchAuthenticatedUser = async () => {
      try {
        const user = await AsyncStorage.getItem('authenticatedUser');
        if (user) {
          const userData = JSON.parse(user);
          const userId = userData?.data?.user?.id;
          const token = userData?.data?.accessToken;
          const fetchedEmail = await getUserById(userId, token);
          setUserEmail(fetchedEmail);
        }
      } catch (error) {
        console.error('Error fetching authenticated user:', error);
      }
    };

    fetchAuthenticatedUser();
  }, []);

  const handleSignout = async () => {
    await signOut();
    router.push(`/${signIn}`);
  };

  return (
    <Center flex={1}>
      <Heading>You are logged in</Heading>
      <Text>Hi, {userEmail}</Text>
      <Button onPress={handleSignout}>
        <ButtonText>Sign Out</ButtonText>
      </Button>
    </Center>
  );
};

export default Demo;
