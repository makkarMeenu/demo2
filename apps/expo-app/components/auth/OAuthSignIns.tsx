import { Button, ButtonIcon, Link, HStack } from '@gluestack-ui/themed';
import React from 'react';

import { FacebookIcon, GoogleIcon } from '@/assets/Icons/Social';
const SignInOptions: any = {
  Facebook: {
    icon: FacebookIcon,
  },
  Google: {
    icon: GoogleIcon,
  },
};

export default function OAuthSignIns() {
  return (
    <HStack
      sx={{
        '@md': {
          mt: '$4',
        },
      }}
      mt="$6"
      mb="$9"
      alignItems="center"
      justifyContent="center"
      space="lg"
    >
      {Object.keys(SignInOptions).map((key, index) => {
        const { icon: Icon } = SignInOptions[key];
        return (
          <Link href="" key={index}>
            <Button action="secondary" variant="link" onPress={() => {}}>
              <ButtonIcon as={Icon} size="md" />
            </Button>
          </Link>
        );
      })}
    </HStack>
  );
}
