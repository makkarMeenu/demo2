import {
  Button,
  ButtonText,
  ButtonIcon,
} from '@app-launch-kit/components/primitives/button';
import { ExternalLinkIcon } from '@app-launch-kit/components/primitives/icon';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import { useRouter } from '@unitools/router';

const ActionButtons = () => {
  const router = useRouter();
  return (
    <HStack className="items-center flex-wrap w-full sm:w-auto" space="md">
      <Button
        variant="outline"
        action="secondary"
        onPress={() => {
          router.push('https://docs.applaunchk.it/');
        }}
        className="gap-3 px-4 xs:px-7 w-full xs:w-1/2 sm:w-auto"
      >
        <ButtonText>View docs</ButtonText>
        <ButtonIcon as={ExternalLinkIcon} className="stroke-background-800" />
      </Button>
      <Button
        onPress={() => {
          router.push('/signup');
        }}
        className="gap-3 px-4 xs:px-7 w-full xs:w-1/2 sm:w-auto"
      >
        <ButtonText>Signup</ButtonText>
      </Button>
    </HStack>
  );
};

export default ActionButtons;
