import {
  VStack,
  Box,
  Text,
  Button,
  FormControl,
  FormControlHelperText,
  EyeIcon,
  EyeOffIcon,
  ButtonText,
  Input,
  useToast,
  InputField,
  FormControlHelper,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  InputIcon,
  InputSlot,
  ScrollView,
  ButtonSpinner,
  Center,
  LinkText,
  HStack,
} from '@gluestack-ui/themed';
import { zodResolver } from '@hookform/resolvers/zod';
import { router, useLocalSearchParams } from 'expo-router';
import { AlertTriangle } from 'lucide-react-native';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Keyboard } from 'react-native';
import { z } from 'zod';

import { MobileHeader } from '@/components/auth/MobileHeader';
import ScreenDescription from '@/components/auth/ScreenDescription';
import StyledExpoRouterLink from '@/components/common/StyledExpoRouterLink';
import { showToast } from '@/components/common/Toast';
import { useAuthNavigationLinks } from '@/hooks/auth/useAuthNavigationLinks';
import { useAuthentication } from '@/hooks/auth/useAuthentication';
import { password } from '@/services/zod-validators/password';
import checkTokenExpiry from '@/utils/checkTokenExpiry';

export const resetPasswordSchema = z.object({
  password,
  confirmpassword: password,
});

export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;

// reset password screen to create new password
export default function ResetPassword() {
  // get the token from the url
  const params = useLocalSearchParams();
  const { token } = params;

  // check if the token is expired or there is no token, show link expired
  if (!token || checkTokenExpiry(token.toString())) {
    return <LinkExpiredScreen />;
  }

  return (
    <>
      <Box
        sx={{
          '@md': { display: 'none' },
        }}
      >
        <MobileHeader title="Create Password" />
      </Box>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        flex={1}
        bounces={false}
      >
        <Box
          bg="$backgroundLight0"
          pt="$8"
          pb="$4"
          px="$4"
          sx={{ '@md': { p: '$8' }, '_dark': { bg: '$backgroundDark800' } }}
          flex={1}
        >
          <ScreenDescription
            title="Create new password"
            description="Your new password must be different from previous used passwords and
        must be of at least 8 characters."
          />
          <ResetPasswordForm token={token} />
        </Box>
      </ScrollView>
    </>
  );
}

// form for reset password
const ResetPasswordForm = ({ token }: { token: string | string[] }) => {
  // Local state for managing hide/show of password and confirm password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // react hook form hooks for form validation and submission
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(resetPasswordSchema),
  });

  // toast hook from gluestack-ui for showing toast messages
  const toast = useToast();

  // auth functions for password reset
  const { completePasswordReset, authLoading } = useAuthentication();

  // custom hooks to get the navigation links
  const { signIn } = useAuthNavigationLinks();

  // form submission method, if password and confirm password matches, then submit the form and if it is successful, then show the success message and redirect to sign in page
  const onSubmit = async (data: ResetPasswordSchemaType) => {
    try {
      if (data.password === data.confirmpassword) {
        const result = await completePasswordReset(data.password, token);
        // Handle the result as needed
        if (result?.data?.completePasswordReset?.statusCode === 200) {
          showToast(toast, {
            action: 'success',
            message: result.data?.completePasswordReset?.message ?? '',
          });

          reset();
          router.replace(`/${signIn}`);
        } else {
          showToast(toast, {
            action: 'error',
            message: result?.data?.completePasswordReset?.message ?? result,
          });
        }
      } else {
        showToast(toast, {
          action: 'error',
          message: 'Passwords do not match',
        });
      }
    } catch (error: any) {
      // Handle errors
      showToast(toast, {
        action: 'error',
        message: error?.message,
      });
      console.error(error);
    }
  };

  // keyPress handler for form submission
  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  // method to handle the show/hide of password
  const handlePasswordShowState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  // method to handle the show/hide of confirm password
  const handleConfirmPasswordState = () => {
    setShowConfirmPassword((showConfirmPassword) => {
      return !showConfirmPassword;
    });
  };

  return (
    <VStack
      mt="$7"
      space="md"
      sx={{
        '@md': { mt: '$8' },
      }}
    >
      <Box>
        <FormControl isInvalid={!!errors.password} isRequired>
          <Controller
            defaultValue=""
            name="password"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await resetPasswordSchema.parseAsync({
                    password: value,
                  });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input>
                <InputField
                  autoCapitalize="none"
                  placeholder="Enter password"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  enterKeyHint="done"
                  type={showPassword ? 'text' : 'password'}
                />
                <InputSlot onPress={handlePasswordShowState} mr="$2">
                  <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorIcon size="sm" as={AlertTriangle} />
            <FormControlErrorText>
              {errors?.password?.message}
            </FormControlErrorText>
          </FormControlError>
          <FormControlHelperText>
            <Text size="xs">Must be at least 8 characters</Text>
          </FormControlHelperText>
          <FormControlHelper />
        </FormControl>
      </Box>

      <Box>
        <FormControl isInvalid={!!errors.confirmpassword} isRequired>
          <Controller
            defaultValue=""
            name="confirmpassword"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await resetPasswordSchema.parseAsync({
                    confirmpassword: value,
                  });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input>
                <InputField
                  placeholder="Re-enter Passowrd"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  enterKeyHint="done"
                  type={showConfirmPassword ? 'text' : 'password'}
                />
                <InputSlot onPress={handleConfirmPasswordState} mr="$2">
                  <InputIcon as={showConfirmPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            )}
          />

          <FormControlError>
            <FormControlErrorIcon size="md" as={AlertTriangle} />
            <FormControlErrorText>
              {errors?.confirmpassword?.message}
            </FormControlErrorText>
          </FormControlError>
          <FormControlHelperText>
            <Text size="xs"> Both Password must match</Text>
          </FormControlHelperText>
          <FormControlErrorText>
            <Text size="xs">{errors.confirmpassword?.message}</Text>
          </FormControlErrorText>
        </FormControl>
      </Box>

      <Button
        onPress={handleSubmit(onSubmit)}
        disabled={authLoading}
        focusable={!authLoading}
        opacity={authLoading ? 0.4 : 1}
        gap={authLoading ? '$0' : '$2'}
        sx={{ '@md': { mt: '$40' } }}
      >
        {authLoading && <ButtonSpinner color="white" />}
        <ButtonText fontSize="$sm">UPDATE PASSWORD</ButtonText>
      </Button>
    </VStack>
  );
};

// link expired screen
const LinkExpiredScreen = () => {
  const { signIn } = useAuthNavigationLinks();
  return (
    <Center flex={1} bg="white">
      <Text size="xl" textAlign="center">
        The link you are trying to use has expired.
      </Text>
      <HStack>
        <Text>Go to </Text>
        <StyledExpoRouterLink href={`/${signIn}`}>
          <LinkText>Sign In</LinkText>
        </StyledExpoRouterLink>
      </HStack>
    </Center>
  );
};
