import AuthLayoutLeftPanel from '@app-launch-kit/components/custom/auth/AuthLayoutLeftPanel';
import { Box } from '@app-launch-kit/components/primitives/box';
import { Grid, GridItem } from '@app-launch-kit/components/primitives/grid';
import { SafeAreaView } from '@app-launch-kit/components/primitives/safe-area-view';
import { ScrollView } from '@app-launch-kit/components/primitives/scroll-view';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AuthLayout = ({ children }: any) => {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
      {/* <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
        <Box className="web:overflow-hidden h-full">
          <ScrollView
            className="flex-1"
            contentContainerStyle={{
              alignItems: 'center',
              flexGrow: 1,
              justifyContent: 'center',
            }}
            bounces={false}
            showsVerticalScrollIndicator={false}
          >
            <Grid
              _extra={{ className: 'grid-col-12' }}
              className="w-full h-full bg-background-0 flex-1 overflow-hidden"
            >
              <GridItem
                _extra={{
                  className: 'md:col-span-6',
                }}
                className="hidden md:flex"
              >
                <AuthLayoutLeftPanel />
              </GridItem>
              <GridItem
                _extra={{
                  className: 'md:col-span-6 col-span-12',
                }}
                className="w-full md:max-w-[440px] p-9 md:m-auto"
              >
                <VStack className="md:gap-10 gap-16">{children}</VStack>
              </GridItem>
            </Grid>
          </ScrollView>
        </Box>
      {/* </KeyboardAwareScrollView> */}
    </SafeAreaView>
  );
};

export default AuthLayout;
