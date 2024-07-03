import React, { useContext } from 'react';
import { Text } from '@app-launch-kit/components/primitives/text';
import { Image } from '@app-launch-kit/components/primitives/image';
import { Box } from '@app-launch-kit/components/primitives/box';
import {
  Button,
  ButtonGroup,
  ButtonIcon,
  ButtonText,
} from '@app-launch-kit/components/primitives/button';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import { Pressable } from '@app-launch-kit/components/primitives/pressable';
import { Link, LinkText } from '@app-launch-kit/components/primitives/link';
import {
  Icon,
  ChevronDownIcon,
  ChevronRightIcon,
  MenuIcon,
} from '@app-launch-kit/components/primitives/icon';
import { ColorContext } from '@app-launch-kit/utils/context/ColorModeContext';

const headerItems = [
  {
    item: 'Product',
    isPressable: true,
  },
  {
    item: 'Features',
    isPressable: true,
  },
  {
    item: 'Investors',
    isPressable: false,
    href: '#',
  },
  {
    item: 'Contact',
    isPressable: false,
    href: '#',
  },
];

type Props = {};

const Header = (props: Props) => {
  const colorMode = useContext(ColorContext);
  return (
    <>
      <HStack className="flex-row items-center flex-1 justify-between hidden md:flex sticky top-0">
        <Box className="flex-row items-center">
          <Box className="px-4 py-3">
            {colorMode === 'light' ? (
              <Image
                className="w-[120px] h-[22px]"
                alt="logo"
                source={require('@app-launch-kit/assets/images/gluestack-full-logo-light.png')}
              />
            ) : (
              <Image
                className="w-[120px] h-[22px]"
                alt="logo"
                source={require('@app-launch-kit/assets/images/gluestack-full-logo-dark.png')}
              />
            )}
          </Box>
          <Box className="flex-row">
            {headerItems.map((item, index) =>
              item.isPressable ? (
                <Pressable className="flex-row items-center gap-2 px-4 py-3 group/pressable">
                  <Text className="font-roboto text-sm non-italic font-normal leading-[21px] group-hover/pressable:text-typography-800">
                    {item.item}
                  </Text>
                  <Icon as={ChevronDownIcon} className="w-4 h-4" />
                </Pressable>
              ) : (
                <Link href={item.href!} className="px-4 py-3 group/link">
                  <LinkText className="font-roboto font-normal leading-[21px] text-typography-700 no-underline text-sm non-italic group-hover/link:text-typography-800 group-active/link:text-typography-800">
                    {item.item}
                  </LinkText>
                </Link>
              )
            )}
          </Box>
        </Box>
        <ButtonGroup className="flex-row gap-[10px] items-center px-4">
          <Button variant="link" size="sm" className="px-[14px]">
            <ButtonText className="font-roboto">Log In</ButtonText>
          </Button>
          <Button size="sm" className="gap-1">
            <ButtonText className="font-roboto">Get Full Access</ButtonText>
            <ButtonIcon as={ChevronRightIcon} />
          </Button>
        </ButtonGroup>
      </HStack>
      <Box className="md:hidden flex-row justify-between px-4 py-3">
        {colorMode === 'light' ? (
          <Image
            className="w-[120px] h-[22px]"
            alt="logo"
            source={require('@app-launch-kit/assets/images/gluestack-full-logo-light.png')}
          />
        ) : (
          <Image
            className="w-[120px] h-[22px]"
            alt="logo"
            source={require('@app-launch-kit/assets/images/gluestack-full-logo-dark.png')}
          />
        )}
        <Pressable>
          <Icon as={MenuIcon} className="w-7 h-7" />
        </Pressable>
      </Box>
    </>
  );
};

export default Header;
