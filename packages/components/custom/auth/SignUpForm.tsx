'use client';
import {
  Button,
  ButtonText,
  ButtonSpinner,
} from '@app-launch-kit/components/primitives/button';
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from '@app-launch-kit/components/primitives/checkbox';
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from '@app-launch-kit/components/primitives/form-control';
import { HStack } from '@app-launch-kit/components/primitives/hstack';
import { CheckIcon } from '@app-launch-kit/components/primitives/icon';
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from '@app-launch-kit/components/primitives/input';
import { Link, LinkText } from '@app-launch-kit/components/primitives/link';
import { Text } from '@app-launch-kit/components/primitives/text';
import { useToast } from '@app-launch-kit/components/primitives/toast';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import config from '@app-launch-kit/config';
import { email } from '@app-launch-kit/utils/validators/zod-validators/email';
import { password } from '@app-launch-kit/utils/validators/zod-validators/password';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@app-launch-kit/utils/lib/supabase';
import { useRouter } from '@unitools/router';
import { AlertTriangle, EyeIcon, EyeOffIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Keyboard } from 'react-native';
import colors from 'tailwindcss/colors';
import { z } from 'zod';

import Footer from '@app-launch-kit/components/custom/auth/Footer';
import { GoogleSignInButton } from './GoogleSignInButton';
import { showToast } from '@app-launch-kit/components/custom/Toast';

// Schema for sign-up form validation
export const signUpSchema = z.object({
  email,
  password,
  confirmpassword: password,
  policy: z.boolean().optional(),
});

// Type for sign-up form data
export type SignUpSchemaType = z.infer<typeof signUpSchema>;

// Sign-up form component
export default function SignUpForm({ env }: any) {
  // React hook form methods
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  // Local state for managing email focus, password visibility, and confirm password visibility
  const [isEmailFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [authLoading, setLoading] = useState(false);

  // Toast hook for displaying messages
  const toast = useToast();

  const router = useRouter();

  // Authentication functions and navigation links
  const { navigationLinks } = config;

  // Form submission handler
  const onSubmit = async (_data: SignUpSchemaType) => {
    try {
      // Check if passwords match
      if (_data.password === _data.confirmpassword) {
        setLoading(true);
        try {
          const {
            data: { session },
            error,
          } = await supabase.auth.signUp({
            email: _data.email,
            password: _data.password,
          });

          if (session && session.access_token) {
            showToast(toast, {
              action: 'success',
              message:
                "You've successfully signed up! Please sign in to continue.",
            });
            reset();
            router.replace(`/${navigationLinks.signIn}`);
          }
          if (error) {
            throw new Error(error.message);
          }
          if (!session) {
            showToast(toast, {
              action: 'success',
              message: 'Please check your email to verify your account.',
            });
            reset();
            router.replace(`/${navigationLinks.signIn}`);
          }
        } catch (error: any) {
          showToast(toast, {
            action: 'error',
            message: error.message,
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
    } finally {
      setLoading(false);
    }
  };

  // Handle keyboard submit
  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  // Toggle password visibility
  const handleState = () => {
    setShowPassword((showState) => !showState);
  };

  // Toggle confirm password visibility
  const handleConfirmPwState = () => {
    setShowConfirmPassword((showState) => !showState);
  };

  return (
    <VStack className="w-full">
      <VStack space="xl">
        {/* Email input field */}
        <FormControl
          isInvalid={(!!errors.email || isEmailFocused) && !!errors.email}
          isRequired
        >
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Controller
            name="email"
            defaultValue=""
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signUpSchema.parseAsync({ email: value });
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
          {/* Display error for email field */}
          <FormControlError>
            <FormControlErrorIcon size="md" as={AlertTriangle} />
            <FormControlErrorText>
              {errors?.email?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        {/* Password input field */}
        <FormControl isInvalid={!!errors.password} isRequired>
          <FormControlLabel>
            <FormControlLabelText>Password</FormControlLabelText>
          </FormControlLabel>
          <Controller
            defaultValue=""
            name="password"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signUpSchema.parseAsync({ password: value });
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
                  textContentType="oneTimeCode"
                />
                {/* Toggle password visibility icon */}
                <InputSlot onPress={handleState} className="pr-3">
                  <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            )}
          />
          {/* Display error for password field */}
          <FormControlError>
            <FormControlErrorIcon size="sm" as={AlertTriangle} />
            <FormControlErrorText>
              {errors?.password?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        {/* Confirm Password input field */}
        <FormControl isInvalid={!!errors.confirmpassword} isRequired>
          <FormControlLabel>
            <FormControlLabelText>Confirm Password</FormControlLabelText>
          </FormControlLabel>
          <Controller
            defaultValue=""
            name="confirmpassword"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signUpSchema.parseAsync({ password: value });
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
                  placeholder="Re-enter Passowrd"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  enterKeyHint="done"
                  textContentType="oneTimeCode"
                  type={showConfirmPassword ? 'text' : 'password'}
                />
                {/* Toggle confirm password visibility icon */}
                <InputSlot onPress={handleConfirmPwState} className="pr-3">
                  <InputIcon as={showConfirmPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            )}
          />
          {/* Display error for confirm password field */}
          <FormControlError>
            <FormControlErrorIcon size="sm" as={AlertTriangle} />
            <FormControlErrorText>
              {errors?.confirmpassword?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        {/* Remember Me checkbox */}
        <Controller
          name="policy"
          defaultValue={false}
          control={control}
          render={({ field: { onChange, value } }) => (
            <HStack className="items-center gap-0.5">
              <Checkbox
                aria-label="policy"
                size="sm"
                value="policy"
                isChecked={value}
                onChange={onChange}
              >
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>I accept the</CheckboxLabel>
              </Checkbox>
              <Link href={`/${navigationLinks.termsOfService}`}>
                <LinkText className="text-sm text-primary-700 ml-1 group-hover/link:text-primary-800  group-active/link:text-primary-900 ">
                  Terms of Use
                </LinkText>
              </Link>
              <Text> &</Text>
              <Link href={`/${navigationLinks.privacyPolicy}`}>
                <LinkText className="text-sm text-primary-700 ml-1 group-hover/link:text-primary-800  group-active/link:text-primary-900">
                  Privacy Policy
                </LinkText>
              </Link>
            </HStack>
          )}
        />
      </VStack>
      {/* Sign-up button */}
      <VStack className="my-7" space="lg">
        <Button
          className={`${authLoading ? 'opacity-40 gap-2' : 'opacity-100'}`}
          onPress={handleSubmit(onSubmit)}
          disabled={authLoading}
          focusable={!authLoading}
        >
          {authLoading && <ButtonSpinner color={colors.gray[500]} />}
          <ButtonText>Sign up</ButtonText>
        </Button>

        {/* Google sign-in button, you will see a different file for web and native with extensions GoogleSignInButton.web.tsx and GoogleSignInButton.tsx */}
        {/* <GoogleSignInButton /> */}
      </VStack>
      <Footer
        footerLinkHref={`/${navigationLinks.signIn}`}
        footerLinkText="Login"
        footerText="Already have an account?"
      />
    </VStack>
  );
}
