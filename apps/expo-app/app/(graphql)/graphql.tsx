import { Text, Box, Spinner } from '@gluestack-ui/themed';
import React from 'react';
import { SafeAreaView } from 'react-native';

import { useHelloQuery } from '@/generated/hooks/base';

const Index = () => {
  const { data, error, loading } = useHelloQuery();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          {data && (
            <Box style={{ alignItems: 'center' }}>
              <Text>{data.getHello}</Text>
            </Box>
          )}
          {error && (
            <Box style={{ alignItems: 'center' }}>
              <Text>{JSON.stringify(error)}</Text>
            </Box>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default Index;
