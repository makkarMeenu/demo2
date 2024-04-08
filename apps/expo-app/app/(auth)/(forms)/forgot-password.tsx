import {
  Button,
  FormControl,
  Input,
  useToast,
  Box,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  ButtonText,
  ScrollView,
  ButtonSpinner,
  FormControlLabel,
  FormControlLabelText,
} from '@gluestack-ui/themed';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertTriangle } from 'lucide-react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Keyboard } from 'react-native';
import { z } from 'zod';

import { MobileHeader } from '@/components/auth/MobileHeader';
import ScreenDescription from '@/components/auth/ScreenDescription';
import { showToast } from '@/components/common/Toast';
import { useAuthentication } from '@/hooks/auth/useAuthentication';
import { email } from '@/services/zod-validators/email';

export const forgotPasswordSchema = z.object({
  email,
});
export type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;

// forgot password screen
export default function ForgotPassword() {
  return (
    <>
      <Box
        sx={{
          '@md': { display: 'none' },
        }}
      >
        <MobileHeader title="Forgot Password" />
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
            title="Forgot Password?"
            description="Not to worry! Enter email address associated with your account and we'll
          send a link to reset your password."
          />
          <ForgotPasswordForm />
        </Box>
      </ScrollView>
    </>
  );
}

// form for forgot password
const ForgotPasswordForm = () => {
  // react hook form hooks for form validation
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  // toast hook from gluestack-ui for showing toast messages
  const toast = useToast();

  // custom method for initiating password reset
  const { initiatePasswordReset, authLoading } = useAuthentication();

  // uncomment this just to test on native devices
  // const { resetPassword } = useAuthNavigationLinks();

  // method to submit the form which will call the initiatePasswordReset method
  const onSubmit = async (_data: ForgotPasswordSchemaType) => {
    const result = await initiatePasswordReset(_data.email);
    if (result?.data?.initiatePasswordReset?.statusCode === 200) {
      showToast(toast, {
        action: 'success',
        message: result?.data?.initiatePasswordReset?.message ?? '',
      });
      // uncomment this just to test on native devices, remove once reset link is coming in mail
      // router.push({
      //   pathname: `/${resetPassword}`,
      //   params: {
      //     token:
      //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4ZGNjOWNlZi1lNmMzLTQ1Y2ItYTRjMC04ZTUzMmM5MmMzZTQiLCJqdGkiOiJjZTFkNjEwZi04MTAyLTQwNzktYTI5YS1iMDAxN2RmMjhkNTEiLCJlbWFpbCI6InJpeWFAZ21haWwuY29tIiwidHlwIjoidGVtcCIsInJvbGUiOiJTdXBlciBBZG1pbiIsImlhdCI6MTcwODAwMjA4NCwiZXhwIjoxNzA4MDAyNjg0fQ.8xlSl8f3zxrdhHlPy7GrLDCgeVKEGwr816-3EhKiEc4',
      //   },
      // });
      reset();
    } else {
      showToast(toast, {
        action: 'error',
        message: result?.data?.initiatePasswordReset?.message ?? result,
      });
    }
  };

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };
  return (
    <>
      <FormControl my="$8" isInvalid={!!errors.email} isRequired>
        <FormControlLabel>
          <FormControlLabelText>Email</FormControlLabelText>
        </FormControlLabel>
        <Controller
          defaultValue=""
          name="email"
          control={control}
          rules={{
            validate: async (value) => {
              try {
                await forgotPasswordSchema.parseAsync({
                  email: value,
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
                placeholder="Enter email"
                type="text"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                onSubmitEditing={handleKeyPress}
                enterKeyHint="done"
              />
            </Input>
          )}
        />
        <FormControlError>
          <FormControlErrorIcon as={AlertTriangle} size="md" />
          <FormControlErrorText>{errors?.email?.message}</FormControlErrorText>
        </FormControlError>
      </FormControl>
      <Button
        onPress={handleSubmit(onSubmit)}
        disabled={authLoading}
        focusable={!authLoading}
        opacity={authLoading ? 0.4 : 1}
        gap={authLoading ? '$0' : '$2'}
      >
        {authLoading && <ButtonSpinner color="white" />}
        <ButtonText fontSize="$sm">Send Link</ButtonText>
      </Button>
    </>
  );
};
