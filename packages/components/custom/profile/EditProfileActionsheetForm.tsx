import { showToast } from '@app-launch-kit/components/custom/Toast';
import EditProfileAlert from '@app-launch-kit/components/custom/profile/EditProfileAlert';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
} from '@app-launch-kit/components/primitives/actionsheet';
import {
  Avatar,
  AvatarImage,
  AvatarBadge,
} from '@app-launch-kit/components/primitives/avatar';
import { Center } from '@app-launch-kit/components/primitives/center';
import { Divider } from '@app-launch-kit/components/primitives/divider';
import { Fab, FabIcon } from '@app-launch-kit/components/primitives/fab';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import {
  Icon,
  EditIcon,
  CloseIcon,
} from '@app-launch-kit/components/primitives/icon';
import { Image } from '@app-launch-kit/components/primitives/image';
import { Pressable } from '@app-launch-kit/components/primitives/pressable';
import { Spinner } from '@app-launch-kit/components/primitives/spinner';
import { Text } from '@app-launch-kit/components/primitives/text';
import { useToast } from '@app-launch-kit/components/primitives/toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Pencil } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from 'tailwindcss/colors';

import EditProfileForm from './EditProfileForm';

import { supabase } from '@app-launch-kit/utils/lib/supabase';
import {
  fetchUserProfile,
  pickImage,
  uploadImage,
} from '@app-launch-kit/utils/utils';
import {
  AccountDetailsSchemaType,
  accountDetailsSchema,
} from './edit-profile-schema';

function EditProfileActionsheetForm({
  showActionsheet,
  handleCloseActionSheet,
  userId,
}: {
  showActionsheet: boolean;
  handleCloseActionSheet: any;
  userId: string | undefined;
}) {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [userName, setUserName] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isProfileLoading, setIsProfileLoading] = useState(false);

  const toast = useToast();

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    setError,
  } = useForm<AccountDetailsSchemaType>({
    resolver: zodResolver(accountDetailsSchema),
  });

  useEffect(() => {
    fetchUserProfile(userId).then((profile: { first_name: any }) => {
      if (profile.first_name) {
        setUserName(profile.first_name);
      }
    });

    const fetchAndSetProfile = async () => {
      try {
        setIsProfileLoading(true);

        const profile = await fetchUserProfile(userId);

        if (profile) {
          if (profile.first_name) {
            setUserName(profile.first_name);
          }

          if (profile?.profile_image_url) {
            setProfileImage(profile.profile_image_url);
          }

          if (profile?.cover_image_url) {
            setCoverImage(profile.cover_image_url);
          }

          profile.first_name && setValue('firstName', profile.first_name);
          profile.last_name && setValue('lastName', profile.last_name);
          profile.phone_number && setValue('phoneNumber', profile.phone_number);

          profile.gender && setValue('gender', profile.gender);
          profile.city && setValue('city', profile.city);
          profile.state && setValue('state', profile.state);
          profile.country && setValue('country', profile.country);
          profile.zipcode && setValue('zipCode', profile.zipcode);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      } finally {
        setIsProfileLoading(false);
      }
    };

    fetchAndSetProfile();
  }, [userId, setValue]);

  const onSubmit = async (_data: AccountDetailsSchemaType) => {
    try {
      setLoading(true);

      let coverImagePath = null;
      if (coverImage) {
        coverImagePath = await uploadImage(coverImage, 'cover_images');
      }

      // Upload profile image if available
      let profileImagePath = null;
      if (profileImage) {
        profileImagePath = await uploadImage(profileImage, 'profile_images');
      }
      const { error, status, statusText } = await supabase
        .from('users')
        .upsert({
          id: userId,
          first_name: _data.firstName,
          last_name: _data.lastName,
          gender: _data.gender,
          city: _data.city,
          state: _data.state,
          country: _data.country,
          zipcode: _data.zipCode,
          phone_number: _data.phoneNumber,
          cover_image_url: coverImagePath,
          profile_image_url: profileImagePath,
        });
      if (error) throw new Error(error.message);
      if (status === 200) {
        showToast(toast, {
          action: 'success',
          message: 'Updated profile successfully',
        });
        setLoading(false);
        handleCloseActionSheet();
      } else {
        showToast(toast, {
          action: 'error',
          message: statusText,
        });
      }
    } catch (error: any) {
      showToast(toast, {
        action: 'error',
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!userName) {
      setShowAlertDialog(true);
    } else {
      handleCloseActionSheet();
    }
  };

  return (
    <Actionsheet
      onClose={handleCloseActionSheet}
      closeOnOverlayClick={false}
      isOpen={showActionsheet}
      className="z-[999]"
      snapPoints={[90]}
    >
      <ActionsheetBackdrop />
      <ActionsheetContent className="z-[999] flex-1 pb-32 px-3">
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        {/* actions */}
        <HStack className="justify-between w-full items-center px-3 pt-1 pb-2">
          <Pressable onPress={handleClose}>
            <Icon as={CloseIcon} />
          </Pressable>

          <Pressable
            onPress={handleSubmit(onSubmit)}
            disabled={loading || isProfileLoading}
            focusable={!loading}
            className={loading ? 'opacity-40 gap-2 cursor-not-allowed' : ''}
          >
            {!isProfileLoading ? (
              loading ? (
                <Spinner color={colors.gray[700]} />
              ) : (
                <Text className="text-typography-900">Update</Text>
              )
            ) : (
              <Spinner color={colors.gray[700]} />
            )}
          </Pressable>
        </HStack>

        {/* divider */}
        <HStack className="px-3 my-1">
          <Divider />
        </HStack>

        <KeyboardAwareScrollView
          style={{
            flex: 1,
          }}
          contentContainerStyle={{
            flexGrow: 1,
            gap: 10,
          }}
        >
          {/* cover image */}
          <Image
            contentFit="fill"
            source={
              coverImage
                ? { uri: coverImage }
                : require('@app-launch-kit/assets/images/coverImage.png')
            }
            className="absolute w-full h-44"
            alt="cover img"
          />

          {/* edit icon */}
          <Fab
            size="sm"
            placement="top right"
            className="z-[999] bg-background-950 mt-28"
            onPress={() => {
              pickImage(setCoverImage);
            }}
          >
            <FabIcon as={Pencil} className="stroke-background-50" />
          </Fab>

          {/* avatar */}
          <Center className="w-full mt-[100px]">
            <Pressable onPress={() => pickImage(setProfileImage)}>
              <Avatar size="2xl">
                <AvatarImage
                  source={
                    profileImage
                      ? { uri: profileImage }
                      : require('@app-launch-kit/assets/images/user-profile.svg')
                  }
                  alt="avatar img"
                />

                <AvatarBadge className="justify-center items-center bg-background-950">
                  <Icon
                    as={EditIcon}
                    className="stroke-background-50"
                    size="sm"
                  />
                </AvatarBadge>
              </Avatar>
            </Pressable>
          </Center>

          {/* form */}
          <EditProfileForm
            control={control}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        </KeyboardAwareScrollView>

        {showAlertDialog && (
          <EditProfileAlert
            showAlertDialog={showAlertDialog}
            setShowAlertDialog={setShowAlertDialog}
          />
        )}
      </ActionsheetContent>
    </Actionsheet>
  );
}

export default EditProfileActionsheetForm;
