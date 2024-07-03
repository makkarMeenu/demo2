'use client';
import { showToast } from '@app-launch-kit/components/custom/Toast';
import EditProfileAlert from '@app-launch-kit/components/custom/profile/EditProfileAlert';
import {
  Avatar,
  AvatarImage,
  AvatarBadge,
} from '@app-launch-kit/components/primitives/avatar';
import {
  Button,
  ButtonText,
  ButtonSpinner,
} from '@app-launch-kit/components/primitives/button';
import { Box } from '@app-launch-kit/components/primitives/box';
import { Center } from '@app-launch-kit/components/primitives/center';
import { Fab, FabIcon } from '@app-launch-kit/components/primitives/fab';
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from '@app-launch-kit/components/primitives/form-control';
import { Heading } from '@app-launch-kit/components/primitives/heading';
import {
  Icon,
  ChevronDownIcon,
  EditIcon,
} from '@app-launch-kit/components/primitives/icon';
import { Image } from '@app-launch-kit/components/primitives/image';
import { Input, InputField } from '@app-launch-kit/components/primitives/input';
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@app-launch-kit/components/primitives/modal';
import { Pressable } from '@app-launch-kit/components/primitives/pressable';
import {
  Select,
  SelectBackdrop,
  SelectTrigger,
  SelectInput,
  SelectPortal,
  SelectContent,
  SelectItem,
} from '@app-launch-kit/components/primitives/select';
import { useToast } from '@app-launch-kit/components/primitives/toast';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { ColorContext } from '@app-launch-kit/utils/context/ColorModeContext';
import { supabase } from '@app-launch-kit/utils/lib/supabase';
import {
  fetchUserProfile,
  pickImage,
  uploadImage,
} from '@app-launch-kit/utils/utils';
import { city } from '@app-launch-kit/utils/validators/zod-validators/city';
import { country } from '@app-launch-kit/utils/validators/zod-validators/country';
import { firstName } from '@app-launch-kit/utils/validators/zod-validators/firstName';
import { gender } from '@app-launch-kit/utils/validators/zod-validators/gender';
import { lastName } from '@app-launch-kit/utils/validators/zod-validators/lastName';
import { phoneNumber } from '@app-launch-kit/utils/validators/zod-validators/phoneNumber';
import { state } from '@app-launch-kit/utils/validators/zod-validators/state';
import { zipCode } from '@app-launch-kit/utils/validators/zod-validators/zipCode';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertTriangle, Pencil } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Keyboard } from 'react-native';
import colors from 'tailwindcss/colors';
import { z } from 'zod';

export const accountDetailsSchema = z.object({
  firstName,
  lastName,
  gender,
  city,
  state,
  country,
  phoneNumber,
  zipCode,
});
export type AccountDetailsSchemaType = z.infer<typeof accountDetailsSchema>;

function EditProfileModalForm({
  userId,
  showModal,
  handleOpenModal,
  handleCloseModal,
}: {
  userId: string | undefined;
  showModal: boolean;
  handleOpenModal?: any;
  handleCloseModal?: any;
}) {
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const ref = React.useRef(null);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const [userName, setUserName] = useState(null);
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
        handleCloseModal();
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
  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      size="lg"
      className="py-12 shrink grow-0"
      isOpen={showModal}
      onClose={() => {
        handleCloseModal();
      }}
      finalFocusRef={ref}
    >
      <ModalBackdrop
        animate={{
          opacity: 0.9,
        }}
      />
      <ModalContent className="shrink grow-0 p-4" focusScope={false}>
        <ModalHeader className="pt-0 pb-3 px-0">
          <Heading size="lg">Edit Profile</Heading>
        </ModalHeader>
        <ModalBody className="flex-1 px-0">
          <VStack className="self-center w-full">
            <Box className="absolute w-full h-44">
              <Image
                source={
                  coverImage
                    ? { uri: coverImage }
                    : require('@app-launch-kit/assets/images/coverImage.png')
                }
                alt="cover img"
                className="w-full h-full object-cover"
                height="100%"
                width="100%"
              />
            </Box>

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
            <Center className="w-full mt-[100px]">
              <Pressable
                onPress={() => {
                  pickImage(setProfileImage);
                }}
              >
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
            <VStack className="mt-8 h-full gap-10">
              <VStack space="lg">
                <VStack className="md:flex-row" space="lg">
                  <FormControl
                    className="flex-1"
                    isRequired
                    isInvalid={!!errors.firstName}
                  >
                    <FormControlLabel>
                      <FormControlLabelText>First Name</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                      name="firstName"
                      defaultValue=""
                      control={control}
                      rules={{
                        validate: async (value) => {
                          try {
                            await accountDetailsSchema.parseAsync({
                              name: value,
                            });
                            return true;
                          } catch (error: any) {
                            return error.message;
                          }
                        },
                      }}
                      render={({ field: { onBlur, onChange, value } }) => (
                        <Input>
                          <InputField
                            placeholder="Johnathan"
                            type="text"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            onSubmitEditing={handleKeyPress}
                          />
                        </Input>
                      )}
                    />
                    <FormControlError>
                      <FormControlErrorIcon as={AlertTriangle} />
                      <FormControlErrorText>
                        {errors?.firstName?.message}
                      </FormControlErrorText>
                    </FormControlError>
                  </FormControl>

                  <FormControl
                    className="flex-1"
                    isInvalid={!!errors?.lastName}
                  >
                    <FormControlLabel>
                      <FormControlLabelText>Last Name</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                      name="lastName"
                      defaultValue=""
                      control={control}
                      rules={{
                        validate: async (value) => {
                          try {
                            await accountDetailsSchema.parseAsync({
                              name: value,
                            });
                            return true;
                          } catch (error: any) {
                            return error.message;
                          }
                        },
                      }}
                      render={({ field: { onBlur, onChange, value } }) => (
                        <Input>
                          <InputField
                            placeholder="Doe"
                            type="text"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            onSubmitEditing={handleKeyPress}
                          />
                        </Input>
                      )}
                    />
                    <FormControlError>
                      <FormControlErrorIcon as={AlertTriangle} />
                      <FormControlErrorText>
                        {errors?.lastName?.message}
                      </FormControlErrorText>
                    </FormControlError>
                  </FormControl>
                </VStack>
                <VStack className="md:flex-row" space="lg">
                  <FormControl className="flex-1" isInvalid={!!errors.gender}>
                    <FormControlLabel>
                      <FormControlLabelText>Gender</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                      name="gender"
                      defaultValue=""
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <>
                          <Select
                            selectedValue={value}
                            onValueChange={onChange}
                            className="flex-1"
                          >
                            <SelectTrigger>
                              <SelectInput placeholder="Select Gender" />
                              <Icon
                                as={ChevronDownIcon}
                                className="mr-3 stroke-background-500"
                              />
                            </SelectTrigger>
                            <SelectPortal>
                              <SelectBackdrop />
                              <SelectContent>
                                <SelectItem label="Male" value="Male" />
                                <SelectItem label="Female" value="Female" />
                                <SelectItem label="Others" value="Others" />
                              </SelectContent>
                            </SelectPortal>
                          </Select>
                        </>
                      )}
                    />
                    <FormControlError>
                      <FormControlErrorIcon as={AlertTriangle} />
                      <FormControlErrorText>
                        {errors?.gender?.message}
                      </FormControlErrorText>
                    </FormControlError>
                  </FormControl>

                  <FormControl
                    className="flex-1"
                    isInvalid={!!errors.phoneNumber}
                    isRequired
                  >
                    <FormControlLabel>
                      <FormControlLabelText>Phone number</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                      name="phoneNumber"
                      control={control}
                      defaultValue=""
                      rules={{
                        validate: async (value) => {
                          try {
                            await accountDetailsSchema.parseAsync({
                              phoneNumber: value,
                            });
                            return true;
                          } catch (error: any) {
                            return error.message;
                          }
                        },
                      }}
                      render={({ field: { onBlur, onChange, value } }) => (
                        <Input>
                          <InputField
                            placeholder="Phone number"
                            type="text"
                            keyboardType="phone-pad"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            onSubmitEditing={handleKeyPress}
                          />
                        </Input>
                      )}
                    />
                    <FormControlError>
                      <FormControlErrorIcon as={AlertTriangle} />
                      <FormControlErrorText>
                        {errors?.phoneNumber?.message}
                      </FormControlErrorText>
                    </FormControlError>
                  </FormControl>
                </VStack>

                <VStack className="md:flex-row" space="lg">
                  <FormControl className="flex-1" isInvalid={!!errors.country}>
                    <FormControlLabel>
                      <FormControlLabelText>Country</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                      name="country"
                      defaultValue=""
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <Input>
                          <InputField
                            placeholder="Country"
                            type="text"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            onSubmitEditing={handleKeyPress}
                          />
                        </Input>
                      )}
                    />
                    <FormControlError>
                      <FormControlErrorIcon as={AlertTriangle} />
                      <FormControlErrorText>
                        {errors?.country?.message}
                      </FormControlErrorText>
                    </FormControlError>
                  </FormControl>

                  <FormControl className="flex-1" isInvalid={!!errors?.state}>
                    <FormControlLabel>
                      <FormControlLabelText>State</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                      name="state"
                      defaultValue=""
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <Input>
                          <InputField
                            placeholder="State"
                            type="text"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            onSubmitEditing={handleKeyPress}
                          />
                        </Input>
                      )}
                    />
                    <FormControlError>
                      <FormControlErrorIcon as={AlertTriangle} />
                      <FormControlErrorText>
                        {errors?.state?.message}
                      </FormControlErrorText>
                    </FormControlError>
                  </FormControl>
                </VStack>
                <VStack className="md:flex-row" space="lg">
                  <FormControl className="flex-1">
                    <FormControlLabel>
                      <FormControlLabelText>City</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                      name="city"
                      control={control}
                      defaultValue=""
                      render={({ field: { onChange, onBlur, value } }) => (
                        <Input>
                          <InputField
                            placeholder="City"
                            type="text"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            onSubmitEditing={handleKeyPress}
                          />
                        </Input>
                      )}
                    />
                    <FormControlError>
                      <FormControlErrorIcon as={AlertTriangle} />
                      <FormControlErrorText>
                        {errors?.city?.message}
                      </FormControlErrorText>
                    </FormControlError>
                  </FormControl>

                  <FormControl className="flex-1" isInvalid={!!errors.zipCode}>
                    <FormControlLabel>
                      <FormControlLabelText>Zip Code</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                      name="zipCode"
                      defaultValue=""
                      control={control}
                      rules={{
                        validate: async (value) => {
                          try {
                            await accountDetailsSchema.parseAsync({
                              name: value,
                            });
                            return true;
                          } catch (error: any) {
                            return error.message;
                          }
                        },
                      }}
                      render={({ field: { onBlur, onChange, value } }) => (
                        <Input>
                          <InputField
                            placeholder="Enter zip code"
                            keyboardType="number-pad"
                            value={String(value)}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            onSubmitEditing={handleKeyPress}
                          />
                        </Input>
                      )}
                    />
                    <FormControlError>
                      <FormControlErrorIcon as={AlertTriangle} />
                      <FormControlErrorText>
                        {errors?.zipCode?.message}
                      </FormControlErrorText>
                    </FormControlError>
                  </FormControl>
                </VStack>
              </VStack>
            </VStack>
          </VStack>
          {showAlertDialog && (
            <EditProfileAlert
              showAlertDialog={showAlertDialog}
              setShowAlertDialog={setShowAlertDialog}
            />
          )}
        </ModalBody>
        <ModalFooter className="gap-3 pt-4 pb-0 pl-3 pr-0">
          <Button
            onPress={() => {
              if (!userName) {
                setShowAlertDialog(true);
              } else handleCloseModal();
            }}
            action="secondary"
            variant="outline"
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button
            onPress={handleSubmit(onSubmit)}
            disabled={loading || isProfileLoading}
            focusable={!loading}
            className={`${loading ? 'opacity-40 gap-2 cursor-not-allowed' : ''}`}
          >
            {!isProfileLoading ? (
              <>
                {loading && <ButtonSpinner color={colors.gray[700]} />}
                <ButtonText>{loading ? 'Updating' : 'Update'}</ButtonText>
              </>
            ) : (
              <ButtonText>Loading</ButtonText>
            )}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default EditProfileModalForm;
