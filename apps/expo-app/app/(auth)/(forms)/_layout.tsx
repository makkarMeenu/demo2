import { Box, useBreakpointValue } from '@gluestack-ui/themed';
import { Slot } from 'expo-router';
import React from 'react';

import WebSideContainer from '@/components/auth/WebSideContainer';

// layout for all the forms, including login, register, forgot password, etc.
export default function FormLayout() {
  const shadow = useBreakpointValue({
    base: 'none',
    md: '4',
  });

  return (
    <>
      {/* webside container layout part show on web only */}
      <Box display="none" sx={{ '@md': { display: 'flex' } }} flex={1}>
        <WebSideContainer />
      </Box>
      {/* all the screens will come here  in the place of slot */}
      <Box
        bg="$background0"
        flex={1}
        sx={{
          '@md': {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <Box
          sx={{
            '@md': {
              width: '70%',
            },
          }}
        >
          <Box
            bg="$background0"
            softShadow={shadow}
            sx={{
              '@md': {
                borderRadius: '$md',
              },
            }}
          >
            <Slot />
          </Box>
        </Box>
      </Box>
    </>
  );
}
