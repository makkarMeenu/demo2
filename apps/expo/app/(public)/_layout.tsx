import { Slot } from 'expo-router';
import React from 'react';
import { SafeAreaView } from '@app-launch-kit/components/primitives/safe-area-view';

const Layout = () => {
  return (
    <SafeAreaView className="h-full w-full">
      <Slot />
    </SafeAreaView>
  );
};

export default Layout;
