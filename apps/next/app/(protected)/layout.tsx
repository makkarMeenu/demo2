'use client';
import { Box } from '@app-launch-kit/components/primitives/box';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import { SafeAreaView } from '@app-launch-kit/components/primitives/safe-area-view';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { usePathname } from '@unitools/router';

import { MobileFooter } from '@app-launch-kit/components/custom/dashboard/MobileFooter';
import AuthGuard from '@/components/auth/AuthGuard';
import Header from '@app-launch-kit/components/custom/dashboard/Header';
import { Sidebar } from '@app-launch-kit/components/custom/dashboard/Sidebar';
import {
  SidebarIconsList,
  bottomTabsList,
} from '@app-launch-kit/utils/constants/dashboard';

import {
  fetchUserProfile,
  getSubscriptionStatus,
  handleSignout,
} from '@app-launch-kit/utils/utils';

const Layout = ({ children }: any) => {
  const pathname = usePathname();
  return (
    <AuthGuard>
      <SafeAreaView className="h-full w-full">
        <VStack className="h-full w-full bg-background-0">
          <Header
            title={pathname}
            getSubscriptionStatus={getSubscriptionStatus}
            handleSignout={handleSignout}
            fetchUserProfile={fetchUserProfile}
          />

          <HStack className="h-full w-full">
            <Box className="hidden md:flex h-full">
              <Sidebar
                sideBarIcons={SidebarIconsList}
                currentPathName={pathname}
              />
            </Box>
            <VStack className="w-full flex-1">{children}</VStack>
          </HStack>
          <MobileFooter footerIcons={bottomTabsList} />
        </VStack>
      </SafeAreaView>
    </AuthGuard>
  );
};
export default Layout;
