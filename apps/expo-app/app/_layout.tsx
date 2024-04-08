import { ApolloProvider } from '@apollo/client';
import { useApolloClientDevTools } from '@dev-plugins/apollo-client';
import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { config } from '@gluestack-ui/config-v2';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useNavigationContainerRef } from 'expo-router';
import React, { useEffect, useLayoutEffect, useState } from 'react';

import { useApollo } from '@/apollo/clientFactory';
import { SessionProvider } from '@/context/auth/SessionProvider';
import { useSession } from '@/hooks/auth/useSession';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <SessionProvider>
      <ApolloSessionProvider>
        <Layout />
      </ApolloSessionProvider>
    </SessionProvider>
  );
}

const Layout = () => {
  const navigationRef = useNavigationContainerRef();
  useReactNavigationDevTools(navigationRef);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  });

  if (isLoading) {
    return null;
  }

  return (
    <GluestackUIProvider config={config}>
      <Stack screenOptions={{ headerShown: false }} />
    </GluestackUIProvider>
  );
};

const ApolloSessionProvider = ({ children }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user } = useSession();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { client, networkError, clearNetworkError } = useApollo(
    {},
    user?.data?.accessToken ?? null
  );
  useApolloClientDevTools(client);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
