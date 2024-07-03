import { Icon } from '@app-launch-kit/components/primitives/icon';
import { Pressable } from '@app-launch-kit/components/primitives/pressable';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { useRouter } from '@unitools/router';
import { LucideIcon } from 'lucide-react-native';
type Icons = {
  iconName: LucideIcon | typeof Icon;
  routeName: string;
};
export const Sidebar = ({
  sideBarIcons,
  currentPathName,
}: {
  sideBarIcons: Icons[];
  currentPathName: string;
}) => {
  const router = useRouter();

  const handlePress = (routeName: string) => {
    router.push(routeName);
  };
  return (
    <VStack
      className="h-full flex-1 py-4 px-2 items-center border-r justify-between border-outline-100"
      space="xl"
    >
      <VStack className="w-full px-2 pt-3 pb-4" space="xs">
        {sideBarIcons.map((item: Icons, index: number) => {
          return (
            <Pressable
              onPress={() => handlePress(item.routeName)}
              key={index}
              className={`flex-row px-4 py-4 items-center gap-2 rounded hover:bg-background-100
              ${
                currentPathName === item.routeName
                  ? 'bg-background-50'
                  : 'bg-background-0'
              }
              `}
            >
              <Icon
                as={item.iconName}
                className={`
              ${
                currentPathName === item.routeName
                  ? 'stroke-background-900'
                  : 'stroke-background-500'
              }

              `}
              />
            </Pressable>
          );
        })}
      </VStack>
    </VStack>
  );
};
