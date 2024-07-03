import DashboardActionItems from '@app-launch-kit/components/custom/dashboard/ActionItems';
import Leaves from '@app-launch-kit/components/custom/dashboard/Leaves';
import UpcomingHolidays from '@app-launch-kit/components/custom/dashboard/UpcomingHolidays';
import EditProfileActionsheetForm from '@app-launch-kit/components/custom/profile/EditProfileActionsheetForm';
import EditProfileModalForm from '@app-launch-kit/components/custom/profile/EditProfileModalForm';
import { Box } from '@app-launch-kit/components/primitives/box';
import { Grid, GridItem } from '@app-launch-kit/components/primitives/grid';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import { ScrollView } from '@app-launch-kit/components/primitives/scroll-view';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { fetchUserProfile } from '@app-launch-kit/utils/utils';
import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb';
import { useUser } from '@supabase/auth-helpers-react';
import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';

const HomeScreen = () => {
  const user = useUser();
  const [userName, setUserName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showActionsheet, setShowActionsheet] = useState(false);
  useEffect(() => {
    fetchUserProfile(user?.id).then((profile) => {
      if (profile.first_name) {
        setUserName(profile.first_name + ' ' + profile.last_name);
      } else {
        setShowActionsheet(true);
        setShowModal(true);
      }
    });
  }, [user?.id, showModal, showActionsheet]);
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
                className: 'col-span-12 md:col-span-6 lg:col-span-4',
              }}
            >
              <UpcomingHolidays />
            </GridItem>
            <GridItem
              _extra={{
                className: 'col-span-12 md:col-span-6 lg:col-span-4',
              }}
            >
              <Leaves />
            </GridItem>
            <GridItem
              _extra={{
                className: 'col-span-12 md:col-span-6 lg:col-span-4',
              }}
            >
              <UpcomingHolidays />
            </GridItem>
          </Grid>
          {showModal && Platform.OS === 'web' && (
            <EditProfileModalForm
              userId={user?.id}
              showModal={showModal}
              handleCloseModal={() => setShowModal(false)}
            />
          )}
          {showActionsheet && Platform.OS !== 'web' && (
            <EditProfileActionsheetForm
              userId={user?.id}
              showActionsheet={showActionsheet}
              handleCloseActionSheet={() => setShowActionsheet(false)}
            />
          )}
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
