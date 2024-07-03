'use client';
import {
  Button,
  ButtonSpinner,
  ButtonText,
} from '@app-launch-kit/components/primitives/button';
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from '@app-launch-kit/components/primitives/form-control';
import { InputField, Input } from '@app-launch-kit/components/primitives/input';
import { useToast } from '@app-launch-kit/components/primitives/toast';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import config from '@app-launch-kit/config';
import { email } from '@app-launch-kit/utils/validators/zod-validators/email';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { AlertTriangle } from 'lucide-react-native';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Keyboard } from 'react-native';
import { z } from 'zod';
import { env } from '@unitools/env';

import { showToast } from '../Toast';

export const forgotPasswordSchema = z.object({
  email,
});
export type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;
const ForgotPasswordForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const toast = useToast();
  const [authLoading, setLoading] = useState(false);
  const supabase = useSupabaseClient();

  const onSubmit = async (_data: ForgotPasswordSchemaType) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(_data.email, {
        redirectTo:
          env.SITE_URL + config.auth.credentialsAuth.resetPasswordRedirectUri,
      });

      if (error) {
        throw error;
      }

      showToast(toast, {
        action: 'success',
        message: 'Password reset link sent successfully!',
      });
      reset();
    } catch (error: any) {
      showToast(toast, {
        action: 'error',
        message: error.message || 'An error occurred. Please try again.',
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
    <VStack space="xl" className="w-full">
      <FormControl className="w-full" isInvalid={!!errors.email} isRequired>
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
                await forgotPasswordSchema.parseAsync({ email: value });
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
        className={`${authLoading ? 'opacity-40 gap-0' : 'opacity-100 gap-2'}`}
      >
        {authLoading && <ButtonSpinner className="color-white" />}
        <ButtonText className="text-sm">Send Link</ButtonText>
      </Button>
    </VStack>
  );
};

export default ForgotPasswordForm;
