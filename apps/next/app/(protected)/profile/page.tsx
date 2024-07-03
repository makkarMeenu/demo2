'use client';
import {
  Avatar,
  AvatarImage,
} from '@app-launch-kit/components/primitives/avatar';
import {
  Button,
  ButtonText,
  ButtonIcon,
} from '@app-launch-kit/components/primitives/button';
import { Center } from '@app-launch-kit/components/primitives/center';
import { Divider } from '@app-launch-kit/components/primitives/divider';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import { Icon, EditIcon } from '@app-launch-kit/components/primitives/icon';
import { Image } from '@app-launch-kit/components/primitives/image';
import { Pressable } from '@app-launch-kit/components/primitives/pressable';
import { ScrollView } from '@app-launch-kit/components/primitives/scroll-view';
import { Text } from '@app-launch-kit/components/primitives/text';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { accountData } from '@app-launch-kit/utils/constants/dashboard';
import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb';
import { useUser } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';

import EditProfileModalForm from '@app-launch-kit/components/custom/profile/EditProfileModalForm';
import {
  // downloadImage,
  fetchUserProfile,
  // getReadableImageResult,
  // handleSignout,
} from '@app-launch-kit/utils/utils';
import { Box } from '@app-launch-kit/components/primitives/box';

const Profile = () => {
  const user = useUser();
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [userName, setUserName] = useState('');
  const [countryName, setCountryName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showActionsheet, setShowActionsheet] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profile = await fetchUserProfile(user?.id);
        if (!profile.first_name) {
          setShowModal(true);
          setShowActionsheet(true);
          return;
        }

        setUserName(`${profile.first_name} ${profile.last_name}`);
        setCountryName(profile.country);

        if (profile.profile_image_url) {
          setProfileImage(profile.profile_image_url);
          // const downloadedProfileImageData = await downloadImage(
          //   profile.profile_image_url,
          //   'profile_images'
          // );
          // if (downloadedProfileImageData) {
          //   const result = await getReadableImageResult(
          //     downloadedProfileImageData
          //   );
          // setProfileImage(result);
          // } else {
          //   console.error('Profile image download failed');
          // }
          // } else {
          //   console.warn('No profile image path provided');
        }

        if (profile.cover_image_url) {
          setCoverImage(profile.cover_image_url);
          // const downloadedCoverImageData = await downloadImage(
          //   profile.cover_image_url,
          //   'cover_images'
          // );
          // if (downloadedCoverImageData) {
          //   const result = await getReadableImageResult(
          //     downloadedCoverImageData
          //   );
          //   setCoverImage(result);
          // } else {
          //   console.error('Cover image download failed');
          // }
          // } else {
          //   console.warn('No cover image path provided');
        }
      } catch (error) {
        console.error('Error in fetchData:', error);
      }
    };

    fetchData();
  }, [showModal, showActionsheet, user]);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: isWeb ? 0 : 70,
        flexGrow: 1,
      }}
      className="flex-1 mb-20 md:mb-2"
    >
      <VStack className="h-full w-full" space="2xl">
        <Box className="absolute w-full h-56">
          <Image
            source={
              coverImage
                ? { uri: coverImage }
                : require('@app-launch-kit/assets/images/coverImage.png')
            }
            alt="cover img"
            height="100%"
            width="100%"
            className="object-cover"
          />
        </Box>

        <Center className="w-full mt-[140px]">
          <VStack space="lg" className="items-center">
            <Avatar size="2xl">
              <AvatarImage
                source={
                  profileImage
                    ? { uri: profileImage }
                    : require('@app-launch-kit/assets/images/user-profile.svg')
                }
                alt="avatar img"
                width="100%"
                height="100%"
              />
            </Avatar>
            <VStack className="w-full items-center">
              <Text size="2xl" className="text-typography-900">
                {userName}
              </Text>
              <Text className="text-sm text-typography-900">{countryName}</Text>
            </VStack>
          </VStack>
        </Center>
        <VStack className="mx-6 gap-10">
          <VStack className="md:gap-6 gap-4">
            <HStack className="justify-between items-center">
              <Heading size="xl">Accounts</Heading>
              <Button
                onPress={() => {
                  setShowModal(!showModal);
                }}
                className="gap-3"
              >
                <ButtonText>Edit Profile</ButtonText>
                <ButtonIcon
                  as={EditIcon}
                  className="background-typography-900"
                  fill="currentColor"
                />
              </Button>
              {showModal && user && (
                <EditProfileModalForm
                  userId={user?.id}
                  showModal={showModal}
                  handleOpenModal={() => {
                    setShowModal(true);
                  }}
                  handleCloseModal={() => {
                    setShowModal(false);
                  }}
                />
              )}
            </HStack>
            <VStack className="py-2 px-4 border rounded-xl border-outline-100 justify-between items-center">
              {accountData.map((item, index) => {
                return (
                  <VStack key={index} className="w-full">
                    <Pressable className="cursor-pointer rounded-sm">
                      <HStack
                        space="2xl"
                        className="justify-between items-center w-full flex-1 py-3 px-2"
                      >
                        <HStack
                          className=" justify-start items-center"
                          space="md"
                        >
                          <Icon
                            as={item.iconName}
                            className="stroke-background-500"
                          />
                          <Text size="lg" className="text-typography-900">
                            {item.subText}
                          </Text>
                        </HStack>
                        <Icon
                          as={item.endIcon}
                          className="stroke-background-500"
                        />
                      </HStack>
                    </Pressable>
                    {accountData.length - 1 !== index && (
                      <Divider className="my-1" />
                    )}
                  </VStack>
                );
              })}
            </VStack>
          </VStack>
          <VStack className="md:gap-6 gap-4">
            <Heading size="xl">Preferences</Heading>
            <VStack className="py-2 px-4 border rounded-xl border-outline-100 justify-between items-center">
              {accountData.map((item, index) => {
                return (
                  <VStack key={index} className="w-full">
                    <Pressable className="cursor-pointer rounded-sm">
                      <HStack
                        space="2xl"
                        className="justify-between items-center w-full flex-1 py-3 px-2"
                      >
                        <HStack className="items-center" space="md">
                          <Icon
                            as={item.iconName}
                            className="stroke-background-500"
                          />
                          <Text size="lg" className="text-typography-900">
                            {item.subText}
                          </Text>
                        </HStack>
                        <Icon
                          as={item.endIcon}
                          className="stroke-background-500"
                        />
                      </HStack>
                    </Pressable>
                    {accountData.length - 1 !== index && (
                      <Divider className="my-1" />
                    )}
                  </VStack>
                );
              })}
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Profile;
