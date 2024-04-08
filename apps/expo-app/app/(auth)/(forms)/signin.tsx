import {
  Button,
  FormControl,
  Input,
  VStack,
  useToast,
  Box,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  InputIcon,
  FormControlHelper,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
  Checkbox,
  ButtonText,
  LinkText,
  InputSlot,
  ButtonSpinner,
  FormControlLabel,
  FormControlLabelText,
  HStack,
} from '@gluestack-ui/themed';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { AlertTriangle, EyeIcon, EyeOffIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Keyboard } from 'react-native';
import { z } from 'zod';

import Footer from '@/components/auth/Footer';
import { MobileHeader } from '@/components/auth/MobileHeader';
import ScreenDescription from '@/components/auth/ScreenDescription';
import StyledExpoRouterLink from '@/components/common/StyledExpoRouterLink';
import { showToast } from '@/components/common/Toast';
import { useAuthNavigationLinks } from '@/hooks/auth/useAuthNavigationLinks';
import { useAuthentication } from '@/hooks/auth/useAuthentication';
import { email } from '@/services/zod-validators/email';

// Schema for sign-in form validation
const signInSchema = z.object({
  email,
  password: z.string().min(1, 'Password is required'),
  rememberme: z.boolean().optional(),
});

// Type for sign-in form data
type SignInSchemaType = z.infer<typeof signInSchema>;

// Main sign-in component
export default function SignIn() {
  const { signUp } = useAuthNavigationLinks();
  return (
    <>
      <Box sx={{ '@md': { display: 'none' } }}>
        {/* Displaying header on mobile */}
        <MobileHeader title={undefined} />
      </Box>
      <VStack flex={1} p="$8" space="lg">
        <ScreenDescription
          title="Log in to your account"
          description="Start making your dreams come true"
        />
        {/* Rendering sign-up form */}
        <SignInForm />
        {/* Footer with sign-up link */}
        <Footer
          footerLinkHref={`/${signUp}`}
          footerLinkText="Sign Up"
          footerText="Don't have an account?"
        />
      </VStack>
    </>
  );
}

// Sign-in form component
const SignInForm = () => {
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

  // Toast hook for displaying messages
  const toast = useToast();

  // Navigation links and authentication functions
  const { forgotPassword, redirectAfterAuth } = useAuthNavigationLinks();
  const { loginUsingEmailAndPassword, authLoading } = useAuthentication();

  // Form submission handler
  const onSubmit = async (_data: SignInSchemaType) => {
    try {
      const result = await loginUsingEmailAndPassword(
        _data.email,
        _data.password
      );

      if (result?.data?.authenticateUser?.statusCode === 200) {
        showToast(toast, {
          action: 'success',
          message: result?.data?.authenticateUser?.message ?? '',
        });
        reset(); // Reset the form after successful login
        router.push(`/${redirectAfterAuth}`); // Redirect to the dashboard (or any other page after login
      } else {
        showToast(toast, {
          action: 'error',
          message: result?.data?.authenticateUser?.message ?? result,
        });
      }
    } catch (error: any) {
      console.log(error.message, 'error is here');
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
    <VStack space="lg">
      <VStack space="lg">
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
                <InputSlot onPress={handleState} pr="$3">
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

          <FormControlHelper />
        </FormControl>
      </VStack>

      <HStack alignItems="center" justifyContent="space-between">
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
              alignSelf="flex-start"
            >
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Remember me</CheckboxLabel>
            </Checkbox>
          )}
        />

        {/* Forgot password link */}
        <StyledExpoRouterLink href={`/${forgotPassword}`}>
          <LinkText fontSize="$xs">Forgot password?</LinkText>
        </StyledExpoRouterLink>
      </HStack>

      {/* Log in button */}
      <Button
        mt="$5"
        onPress={handleSubmit(onSubmit)}
        disabled={authLoading}
        focusable={!authLoading}
        opacity={authLoading ? 0.4 : 1}
        gap={authLoading ? '$0' : '$2'}
      >
        {authLoading && <ButtonSpinner color="white" />}
        <ButtonText>Log in</ButtonText>
      </Button>
    </VStack>
  );
};
