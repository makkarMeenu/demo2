'use client';
import localFont from 'next/font/local';
import { Roboto } from 'next/font/google';
import './globals.css';
import { GluestackUIProvider } from '@app-launch-kit/components/primitives/gluestack-ui-provider';
import { MoonIcon, SunIcon } from '@app-launch-kit/components/primitives/icon';
import StyledJsxRegistry from './registry';
import { OverlayProvider } from '@gluestack-ui/overlay';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { supabase } from '@app-launch-kit/utils/lib/supabase';
import { useEffect, useState } from 'react';
import { ColorContext } from '@app-launch-kit/utils/context/ColorModeContext';
import { Fab, FabIcon } from '@app-launch-kit/components/primitives/fab';
import { useColorScheme } from 'react-native';
import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb';

const myFont = localFont({
  src: './../assets/fonts/SpaceMono-Regular.ttf',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}
const roboto = Roboto({
  weight: '400',
  variable: '--font-roboto-400',
  subsets: ['latin'],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('dark');
  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };
  const colorScheme = useColorScheme();
  useEffect(() => {
    if (!isWeb) {
      setColorMode(colorScheme === 'light' ? 'light' : 'dark');
    }
  }, [colorScheme]);
  return (
    <html lang="en">
      <body className={`${roboto.variable}`} style={{ display: 'flex' }}>
        <StyledJsxRegistry>
          <SessionContextProvider supabaseClient={supabase}>
            <GluestackUIProvider mode={colorMode}>
              <OverlayProvider>
                <ColorContext.Provider value={colorMode}>
                  {children}
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
        </StyledJsxRegistry>
      </body>
    </html>
  );
};

function Providers({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
