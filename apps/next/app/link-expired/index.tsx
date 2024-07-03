import {
  Button,
  ButtonText,
} from '@app-launch-kit/components/primitives/button';
import { useRouter } from '@unitools/router';

import ScreenDescription from '@app-launch-kit/components/custom/auth/ScreenDescription';
import config from '@app-launch-kit/config';

export default function LinkExpired() {
  const { navigationLinks } = config;
  const route = useRouter();
  return (
    <>
      <ScreenDescription
        title="Session Timeout"
        description="The link you're attempting to use has expired. Please sign in again to verify your identity. "
      />
      <Button
        onPress={() => {
          route.push(`/${navigationLinks.signIn}`);
        }}
      >
        <ButtonText>Re-authenticate</ButtonText>
      </Button>
    </>
  );
}
