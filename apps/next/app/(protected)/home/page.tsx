'use client';
import { Box } from '@app-launch-kit/components/primitives/box';
import { Grid, GridItem } from '@app-launch-kit/components/primitives/grid';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import { ScrollView } from '@app-launch-kit/components/primitives/scroll-view';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb';
import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from '@unitools/router';
import { useEffect, useState } from 'react';

import DashboardActionItems from '@app-launch-kit/components/custom/dashboard/ActionItems';
import Leaves from '@app-launch-kit/components/custom/dashboard/Leaves';
import UpcomingHolidays from '@app-launch-kit/components/custom/dashboard/UpcomingHolidays';
import config from '@app-launch-kit/config';
import { fetchUserProfile } from '@app-launch-kit/utils/utils';

const HomeScreen = () => {
  const user = useUser();
  const [userName, setUserName] = useState('');

  const router = useRouter();
  useEffect(() => {
    fetchUserProfile(user?.id).then((profile) => {
      if (profile) {
        setUserName(profile.first_name + ' ' + profile.last_name);
      } else {
        router.replace(`/${config.navigationLinks.profile}`);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);
  return (
    <Box className="flex-1 ">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: isWeb ? 0 : 50,
        }}
        className="flex-1 mb-20 md:mb-2"
      >
        <VStack className="p-4 pb-0 md:px-10 md:pt-6  w-full" space="2xl">
          <Heading size="2xl">Welcome {userName}</Heading>
          <DashboardActionItems />
          <Box className="bg-background-50 p-4 rounded-md">
            <Text className="text-center font-medium">
              To fully experience the process, visit the profile section to
              explore the editing features.
            </Text>
          </Box>
          <Grid
            className="gap-5"
            _extra={{
              className: 'grid-cols-12',
            }}
          >
            <GridItem
              _extra={{
                className: 'col-span-12 sm:col-span-6 lg:col-span-4',
              }}
            >
              <UpcomingHolidays />
            </GridItem>
            <GridItem
              _extra={{
                className: 'col-span-12 sm:col-span-6 lg:col-span-4',
              }}
            >
              <Leaves />
            </GridItem>
            <GridItem
              _extra={{
                className: 'col-span-12 sm:col-span-6 lg:col-span-4',
              }}
            >
              <UpcomingHolidays />
            </GridItem>
          </Grid>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
