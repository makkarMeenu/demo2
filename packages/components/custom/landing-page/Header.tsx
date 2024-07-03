import FullLogoLight from '@app-launch-kit/assets/icons/FullLogoLight';
import FullLogoDark from '@app-launch-kit/assets/icons/FullLogoDark';
import { Box } from '@app-launch-kit/components/primitives/box';
import {
  Button,
  ButtonText,
} from '@app-launch-kit/components/primitives/button';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import { Link } from '@app-launch-kit/components/primitives/link';
import { useContext } from 'react';
import { ColorContext } from '@app-launch-kit/utils/context/ColorModeContext';
import { useRouter } from '@unitools/router';

export default function Header({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
}) {
  const colorMode = useContext(ColorContext);
  const router = useRouter();
  return (
    <Box className="w-full z-30 border-b border-b-solid border-b-outline-100 py-4">
      <Box className="max-w-7xl 2xl:max-w-screen-2xl 2xl:max-w-screen-2xl w-full mx-auto md:px-6 ">
        <HStack className="items-center justify-between h-12 md:h-10 ">
          <Box className="mr-4 pt-2 md:pt-0">
            <Link className="relative " href="/">
              {colorMode === 'light' ? (
                <FullLogoLight width="194" height="35" />
              ) : (
                <FullLogoDark width="194" height="35" />
              )}
            </Link>
          </Box>

          <HStack className="grow justify-end flex-wrap items-center hidden md:flex gap-3">
            <Button
              onPress={() => {
                router.push('/signin');
              }}
              variant="outline"
              action="secondary"
            >
              <ButtonText className="flex-shrink-0">Login</ButtonText>
            </Button>
            <Button
              onPress={() => {
                router.push('/signup');
              }}
            >
              <ButtonText>Signup</ButtonText>
            </Button>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
}
