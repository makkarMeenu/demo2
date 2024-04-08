import { LinkText, Text, HStack } from '@gluestack-ui/themed';
import React from 'react';

import StyledExpoRouterLink from '../common/StyledExpoRouterLink';
type FooterProps = {
  footerText?: string;
  footerLinkText?: string;
  footerLinkHref?: string;
};

export default function Footer(props: FooterProps) {
  return (
    <HStack space="xs" alignItems="center" justifyContent="center" mt="auto">
      <Text
        color="$text700"
        sx={{
          _dark: {
            color: '$textDark400',
          },
        }}
        fontSize="$sm"
      >
        {props.footerText}
      </Text>

      <StyledExpoRouterLink href={props.footerLinkHref}>
        <LinkText fontSize="$sm">{props.footerLinkText}</LinkText>
      </StyledExpoRouterLink>
    </HStack>
  );
}
