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
import { CheckIcon } from 'lucide-react-native';
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from '@app-launch-kit/components/primitives/input';
import { Link, LinkText } from '@app-launch-kit/components/primitives/link';
import { useToast } from '@app-launch-kit/components/primitives/toast';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import config from '@app-launch-kit/config';
import { email } from '@app-launch-kit/utils/validators/zod-validators/email';
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

// Schema for sign-in form validation
const signInSchema = z.object({
  email,
  password: z.string().min(1, 'Password is required'),
  rememberme: z.boolean().optional(),
});

// Type for sign-in form data
type SignInSchemaType = z.infer<typeof signInSchema>;

// Sign-in form component
export default function SignInForm({ env }: any) {
  // React hook form methods
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
  });

  // Local state for managing email focus and password visibility
  const [isEmailFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [authLoading, setLoading] = useState(false);

  // Toast hook for displaying messages
  const toast = useToast();

  // unitools router hook
  const router = useRouter();

  // Navigation links and authentication functions
  const { navigationLinks } = config;

  // Form submission handler
  const onSubmit = async (_data: SignInSchemaType) => {
    setLoading(true);
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.signInWithPassword({
        email: _data.email,
        password: _data.password,
      });

      if (error) throw new Error(error.message);
      if (session) {
        reset(); // Reset the form after successful login
        // Redirect to the dashboard (or any other page after login
        router.push(`/${navigationLinks.redirectAfterAuth}`);
        setLoading(false);
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

  // Handle keyboard submit
  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  // Toggle password visibility
  const handleState = () => {
    setShowPassword((showState) => !showState);
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
                  await signInSchema.parseAsync({ email: value });
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
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  enterKeyHint="done"
                  type="text"
                />
              </Input>
            )}
          />
          {/* Display error for email field */}
          <FormControlError>
            <FormControlErrorIcon as={AlertTriangle} />
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
            name="password"
            defaultValue=""
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signInSchema.parseAsync({ password: value });
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
                {/* Toggle password visibility icon */}
                <InputSlot onPress={handleState} className="pr-3">
                  <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            )}
          />
          {/* Display error for password field */}
          <FormControlError>
            <FormControlErrorIcon as={AlertTriangle} />
            <FormControlErrorText>
              {errors?.password?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <HStack className="justify-between">
          {/* Remember me checkbox */}
          <Controller
            name="rememberme"
            defaultValue={false}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                aria-label="Remember me"
                size="sm"
                value="Remember me"
                isChecked={value}
                onChange={onChange}
                className="self-start"
              >
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Remember me</CheckboxLabel>
              </Checkbox>
            )}
          />

          {/* Forgot password link */}
          <Link href={`/${navigationLinks.forgotPassword}`}>
            <LinkText className="font-medium text-sm text-primary-700 group-hover/link:text-primary-800 group-active/link:text-primary-900">
              Forgot password?
            </LinkText>
          </Link>
        </HStack>
      </VStack>

      {/* Log in button */}
      <VStack className="my-7" space="lg">
        <Button
          className={`${authLoading ? 'gap-2 opacity-40' : 'opacity-100'}`}
          onPress={handleSubmit(onSubmit)}
          disabled={authLoading}
          focusable={!authLoading}
        >
          {authLoading && <ButtonSpinner color={colors.gray[500]} />}
          <ButtonText>Log in</ButtonText>
        </Button>

        {/* Google sign-in button, you will see a different file for web and native with extensions GoogleSignInButton.web.tsx and GoogleSignInButton.tsx */}
        {/* <GoogleSignInButton /> */}
      </VStack>
      <Footer
        footerLinkHref={`/${navigationLinks.signUp}`}
        footerLinkText="Sign Up"
        footerText="Don't have an account?"
      />
    </VStack>
  );
}
