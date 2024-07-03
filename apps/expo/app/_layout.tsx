import '../globals.css';
import { Fab, FabIcon } from '@app-launch-kit/components/primitives/fab';
import { GluestackUIProvider } from '@app-launch-kit/components/primitives/gluestack-ui-provider';
import { MoonIcon, SunIcon } from '@app-launch-kit/components/primitives/icon';
import { ColorContext } from '@app-launch-kit/utils/context/ColorModeContext';
import { supabase } from '@app-launch-kit/utils/lib/supabase';
import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';
import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { SplashScreen, Stack, useNavigationContainerRef } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Layout />;
}

function Layout() {
  const navigationRef = useNavigationContainerRef();
  useReactNavigationDevTools(navigationRef);
  const [isLoading, setIsLoading] = useState(true);
  const colorScheme = useColorScheme();

  const [colorMode, setColorMode] = useState<'light' | 'dark'>('dark');
  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };
  useEffect(() => {
    setIsLoading(false);
    if (!isWeb) {
      setColorMode(colorScheme === 'light' ? 'light' : 'dark');
    }
  }, [colorScheme]);

  if (isLoading) {
    return null;
  }

  return (
    <SessionContextProvider supabaseClient={supabase}>
      <GluestackUIProvider mode={colorMode}>
        <OverlayProvider>
          <ColorContext.Provider value={colorMode}>
            <Stack screenOptions={{ headerShown: false }} />
            <Fab
              size="md"
              placement="bottom right"
              className="absolute bottom-10 right-10 hidden md:flex"
              onPress={toggleColorMode}
            >
              <FabIcon as={colorMode === 'light' ? MoonIcon : SunIcon} />
            </Fab>
          </ColorContext.Provider>
        </OverlayProvider>
      </GluestackUIProvider>
    </SessionContextProvider>
  );
}
