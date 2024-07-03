'use client';
import Header from '@app-launch-kit/components/custom/landing-page/Header';
import LandingPageHero from '@app-launch-kit/components/custom/landing-page/Hero';
import LandingPageSidebar from '@app-launch-kit/components/custom/landing-page/Sidebar';
import { Box } from '@app-launch-kit/components/primitives/box';
import { Image } from '@app-launch-kit/components/primitives/image';
import { SafeAreaView } from '@app-launch-kit/components/primitives/safe-area-view';
import { ScrollView } from '@app-launch-kit/components/primitives/scroll-view';
import config from '@app-launch-kit/config';
import { ColorContext } from '@app-launch-kit/utils/context/ColorModeContext';
import React, { useContext, useState } from 'react';

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { navigationLinks } = config;
  const colorMode = useContext(ColorContext);

  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="relative z-30"
      >
        {showSidebar ? (
          <LandingPageSidebar />
        ) : (
          <>
            <Box className="flex items-center z-10">
              <Box className="max-w-7xl 2xl:max-w-screen-2xl w-full px-4 md:pt-24">
                <LandingPageHero />
              </Box>
            </Box>
            <Box className="max-w-7xl 2xl:max-w-screen-2xl w-full mx-auto px-4 md:pt-10 pt-4 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
              <Image
                contentFit="contain"
                contentPosition="bottom"
                source={
                  colorMode === 'dark'
                    ? require('@app-launch-kit/assets/images/landingPageBottomImageDark.png')
                    : require('@app-launch-kit/assets/images/landingPageBottomImage.png')
                }
                alt="Landing Page Image"
                className="w-full h-full mx-auto"
              />
            </Box>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
