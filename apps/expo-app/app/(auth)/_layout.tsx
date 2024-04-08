import {
  Box,
  StatusBar,
  ScrollView,
  VStack,
  SafeAreaView,
} from '@gluestack-ui/themed';
import { Slot } from 'expo-router';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function AuthLayout() {
  return (
    <SafeAreaView flex={1}>
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box
          sx={{
            _web: {
              height: '100vh',
              overflow: 'hidden',
            },
          }}
          height="100%"
        >
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <ScrollView
            flex={1}
            contentContainerStyle={{
              alignItems: 'center',
              flexGrow: 1,
              justifyContent: 'center',
            }}
            bounces={false}
          >
            <VStack w="$full" flex={1} overflow="hidden" flexDirection="row">
              <Slot />
            </VStack>
          </ScrollView>
        </Box>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
