import { HStack, Icon, ArrowLeftIcon } from '@gluestack-ui/themed';
import React from 'react';

import StyledExpoRouterLink from '@/components/common/StyledExpoRouterLink';
import { Text } from '@gluestack-ui/themed';
export const MobileHeader = ({ title }: { title: string | undefined }) => {
  return (
    <HStack space="md" px="$3" alignItems="center" py="$3">
      <StyledExpoRouterLink href=".." mt="$1">
        <Icon
          size="md"
          as={ArrowLeftIcon}
          color="$background800"
          sx={{
            _dark: {
              color: '$background800',
            },
          }}
        />
      </StyledExpoRouterLink>
      <Text>{title}</Text>
    </HStack>
  );
};
