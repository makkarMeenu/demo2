import { Loading } from '@app-launch-kit/components/custom/Loading';
import { Slot } from 'expo-router';
import React, { Suspense } from 'react';

const Layout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Slot />
    </Suspense>
  );
};

export default Layout;
