import { HStack } from '@app-launch-kit/components/primitives/hstack';
import { Icon } from '@app-launch-kit/components/primitives/icon';
import { Pressable } from '@app-launch-kit/components/primitives/pressable';
import { Text } from '@app-launch-kit/components/primitives/text';
import { cn } from '@gluestack-ui/nativewind-utils/cn';
import { usePathname, useRouter } from '@unitools/router';
import React from 'react';
import { Platform } from 'react-native';
export const MobileFooter = ({ footerIcons }: { footerIcons: any }) => {
  const router = useRouter();
  const pathname = usePathname();
  const handlePress = (route: any) => {
    router.push(route);
  };
  return (
    <HStack
      className={cn(
        'bg-background-0 justify-between w-full absolute left-0 bottom-0 right-0 p-3 overflow-hidden items-center  border-t-border-300  md:hidden border-t',
        { 'pb-5': Platform.OS === 'ios' },
        { 'pb-5': Platform.OS === 'android' }
      )}
    >
      {footerIcons.map(
        (
          item: { iconText: string; iconName: any; route: any },
          index: React.Key | null | undefined
        ) => {
          const isSelected = pathname === item.route;

          return (
            <Pressable
              className="px-0.5 flex-1 flex-col items-center"
              key={index}
              onPress={() => handlePress(item.route)}
            >
              <Icon
                as={item.iconName}
                size="xl"
                className={cn({
                  'stroke-background-500': !isSelected,
                  'stroke-background-900': isSelected,
                })}
              />
              <Text
                className={cn(
                  'text-xs text-center',
                  { 'text-typography-500': !isSelected },
                  { 'text-typography-900 font-semibold': isSelected }
                )}
              >
                {item.iconText}
              </Text>
            </Pressable>
          );
        }
      )}
    </HStack>
  );
};
