import FullLogoLight from '@app-launch-kit/assets/icons/FullLogoLight';
import FullLogoDark from '@app-launch-kit/assets/icons/FullLogoDark';
import {
  Avatar,
  AvatarImage,
} from '@app-launch-kit/components/primitives/avatar';
import { Badge, BadgeText } from '@app-launch-kit/components/primitives/badge';
import {
  Button,
  ButtonText,
} from '@app-launch-kit/components/primitives/button';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import {
  Icon,
  SettingsIcon,
  ChevronDownIcon,
  BellIcon,
  StarIcon,
  SearchIcon,
} from '@app-launch-kit/components/primitives/icon';
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from '@app-launch-kit/components/primitives/input';
import {
  Menu,
  MenuItem,
  MenuItemLabel,
} from '@app-launch-kit/components/primitives/menu';
import { Pressable } from '@app-launch-kit/components/primitives/pressable';
import config from '@app-launch-kit/config';
import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from '@unitools/router';
import { LogOut } from 'lucide-react-native';
import React, { useContext, useEffect, useState } from 'react';

import LogoutModal from '../dashboard/LogoutModal';
import Link from '@unitools/link';
import { ColorContext } from '@app-launch-kit/utils/context/ColorModeContext';
function Header({
  title,
  getSubscriptionStatus,
  handleSignout,
  fetchUserProfile,
}: {
  title: string;
  getSubscriptionStatus: any;
  handleSignout: any;
  fetchUserProfile: any;
}) {
  const user = useUser();
  const userId = user?.id;
  const [profileImage, setProfileImage] = useState(null);
  const [selectedMenuItem, setSelectedMenuItem] = React.useState(new Set([]));
  const [showModal, setShowModal] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState('');
  const router = useRouter();
  const colorMode = useContext(ColorContext);
  useEffect(() => {
    if (userId) {
      try {
        getSubscriptionStatus(userId).then((data: any) => {
          if (data) setSubscriptionStatus(data.status);
          else setSubscriptionStatus('');
        });
      } catch (e) {
        setSubscriptionStatus('');
      }
      const fetchAndSetProfileImage = async () => {
        const profile = await fetchUserProfile(userId);
        if (profile && profile?.profile_image_url) {
          setProfileImage(profile.profile_image_url);
          // const downloadedImageData = await downloadImage(
          //   profile.profile_image_url,
          //   'profile_images'
          // );
          // if (downloadedImageData) {
          //   const result = await getReadableImageResult(downloadedImageData);
          //   setProfileImage(result);
          // }
        }
      };

      fetchAndSetProfileImage();
    }
  }, [userId]);

  return (
    <HStack className="pt-4 pr-4 pb-3 bg-background-0 items-center justify-between border-b border-outline-100">
      <HStack>
        <Link href="/">
          {colorMode === 'light' ? (
            <FullLogoLight width="194" height="35" />
          ) : (
            <FullLogoDark width="194" height="35" />
          )}
        </Link>
      </HStack>
      <Menu
        selectedKeys={selectedMenuItem}
        // @ts-ignore
        size="lg"
        offset={5}
        placement="bottom right"
        disabledKeys={['Notification', 'Subscription Plan']}
        selectionMode="single"
        onSelectionChange={(keys: any) => {
          setSelectedMenuItem(keys);
          if (keys.currentKey === 'Profile Settings') {
            if (title !== `/${config.navigationLinks.profile}`) {
              router.push(`/${config.navigationLinks.profile}`);
            }
          } else if (keys.currentKey === 'Logout') {
            setShowModal(true);
          } else if (keys.currentKey === 'Subscription') {
            if (subscriptionStatus !== 'active') router.push('/pricing');
          }
        }}
        trigger={({ ...triggerProps }) => {
          return (
            <HStack className="items-center" space="md">
              <Input
                variant="outline"
                size="sm"
                className="hidden md:flex"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputSlot>
                  <InputIcon className="ml-3" as={SearchIcon} />
                </InputSlot>
                <InputField placeholder="Search here..." />
              </Input>
              {subscriptionStatus !== 'active' ? (
                <Button
                  size="xs"
                  className="hidden md:flex"
                  onPress={() => {
                    router.push('/pricing');
                  }}
                >
                  <ButtonText>Subscribe</ButtonText>
                </Button>
              ) : (
                ''
              )}

              <Pressable
                {...triggerProps}
                className="flex-row justify-center items-center gap-2"
              >
                <Avatar size="sm">
                  <AvatarImage
                    className="h-8 w-8"
                    source={
                      profileImage
                        ? { uri: profileImage }
                        : require('@app-launch-kit/assets/images/user-profile.svg')
                    }
                    alt="avatar img"
                    height="100%"
                    width="100%"
                  />
                </Avatar>
                <Icon as={ChevronDownIcon} />
              </Pressable>
            </HStack>
          );
        }}
      >
        <MenuItem key="Notification" textValue="Notification">
          <Icon
            as={BellIcon}
            size="sm"
            className="background-background-500 mr-2"
          />
          <MenuItemLabel size="sm">Notification</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Subscription" textValue="Subscription Plan">
          <Icon
            as={StarIcon}
            size="sm"
            className="background-background-500 mr-2"
          />
          <MenuItemLabel size="sm">
            Subscription Plan
            {subscriptionStatus && (
              <Badge
                className="ml-1"
                variant="solid"
                action={
                  subscriptionStatus === 'active' ||
                  subscriptionStatus === 'trialing'
                    ? 'success'
                    : 'error'
                }
              >
                <BadgeText className="text-[10px]">
                  {subscriptionStatus}
                </BadgeText>
              </Badge>
            )}
          </MenuItemLabel>
        </MenuItem>
        <MenuItem key="Profile Settings" textValue="Profile Settings">
          <Icon
            as={SettingsIcon}
            size="sm"
            className="background-background-500 mr-2"
          />
          <MenuItemLabel size="sm">Profile Settings</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Logout" textValue="Logout">
          <Icon
            as={LogOut}
            size="sm"
            className="background-background-500 mr-2"
          />
          <MenuItemLabel size="sm">Logout</MenuItemLabel>
        </MenuItem>
      </Menu>
      {showModal && (
        <LogoutModal
          showModal={showModal}
          setShowModal={setShowModal}
          handleConfirm={handleSignout}
        />
      )}
    </HStack>
  );
}
export default Header;
