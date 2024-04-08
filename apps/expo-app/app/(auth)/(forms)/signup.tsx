import {
  Button,
  Checkbox,
  VStack,
  Link,
  FormControl,
  Box,
  LinkText,
  Input,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  InputIcon,
  useToast,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckIcon,
  ButtonText,
  InputField,
  InputSlot,
  ButtonSpinner,
  FormControlLabel,
  FormControlLabelText,
} from '@gluestack-ui/themed';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router'; // Assuming this is a custom router utility
import { AlertTriangle, EyeIcon, EyeOffIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Keyboard } from 'react-native';
import { z } from 'zod';

import Footer from '@/components/auth/Footer';
import { MobileHeader } from '@/components/auth/MobileHeader';
import ScreenDescription from '@/components/auth/ScreenDescription';
import { showToast } from '@/components/common/Toast';
import { useAuthNavigationLinks } from '@/hooks/auth/useAuthNavigationLinks';
import { useAuthentication } from '@/hooks/auth/useAuthentication';
import { email } from '@/services/zod-validators/email';
import { password } from '@/services/zod-validators/password';

// Schema for sign-up form validation
export const signUpSchema = z.object({
  email,
  password,
  confirmpassword: password,
  policy: z.boolean().optional(),
});

// Type for sign-up form data
export type SignUpSchemaType = z.infer<typeof signUpSchema>;

// Main component for sign-up page
export default function SignUp() {
  const { signIn } = useAuthNavigationLinks();
  return (
    <>
      <Box sx={{ '@md': { display: 'none' } }}>
        {/* Displaying header on mobile */}
        <MobileHeader title={undefined} />
      </Box>
      <VStack flex={1} p="$8" space="xl">
        <ScreenDescription
          title="Sign up to continue"
          description="Start making your dreams come true"
        />
        {/* Rendering sign-up form */}
        <SignUpForm />
        {/* Footer with sign-in link */}
        <Footer
          footerLinkHref={`/${signIn}`}
          footerLinkText="Login"
          footerText="Already have an account?"
        />
      </VStack>
    </>
  );
}

// Sign-up form component
const SignUpForm = () => {
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

  // Toast hook for displaying messages
  const toast = useToast();

  // Authentication functions and navigation links
  const { signUpUsingEmailAndPassword, authLoading } = useAuthentication();
  const { signIn } = useAuthNavigationLinks();

  // Form submission handler
  const onSubmit = async (_data: SignUpSchemaType) => {
    try {
      // Check if passwords match
      if (_data.password === _data.confirmpassword) {
        const result = await signUpUsingEmailAndPassword(
          _data.email,
          _data.password
        );

        // Handle the result as needed
        if (
          result?.data?.registerUser?.statusCode === 200 ||
          result?.data?.registerUser?.statusCode === 201
        ) {
          showToast(toast, {
            action: 'success',
            message: result?.data?.registerUser?.message ?? '',
          });

          reset(); // Reset the form after successful registration
          router.replace(`/${signIn}`); // Redirect to sign-in page
        } else {
          showToast(toast, {
            action: 'error',
            message: result?.data?.registerUser?.message ?? result,
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
                <InputSlot onPress={handleConfirmPwState} pr="$3">
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
      </VStack>

      {/* Remember Me checkbox */}
      <Controller
        name="policy"
        defaultValue={false}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Checkbox
            aria-label="policy"
            size="sm"
            value="policy"
            isChecked={value}
            onChange={onChange}
            alignSelf="flex-start"
            mt="$5"
          >
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel
              sx={{
                _text: {
                  fontSize: '$sm',
                },
              }}
            >
              {/* Terms and Privacy policy links */}I accept the{' '}
              <Link>
                <LinkText>Terms of Use</LinkText>
              </Link>{' '}
              &{' '}
              <Link>
                <LinkText>Privacy Policy</LinkText>
              </Link>
            </CheckboxLabel>
          </Checkbox>
        )}
      />
      {/* Sign-up button */}
      <Button
        mt="$5"
        onPress={handleSubmit(onSubmit)}
        disabled={authLoading}
        focusable={!authLoading}
        opacity={authLoading ? 0.4 : 1}
        gap={authLoading ? '$0' : '$2'}
      >
        {authLoading && <ButtonSpinner color="white" />}
        <ButtonText>Sign up</ButtonText>
      </Button>
    </VStack>
  );
};
