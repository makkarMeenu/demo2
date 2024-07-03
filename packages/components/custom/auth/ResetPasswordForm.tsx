import {
  Button,
  ButtonText,
  ButtonSpinner,
} from "@app-launch-kit/components/primitives/button";
import {
  FormControl,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
} from "@app-launch-kit/components/primitives/form-control";
import {
  EyeIcon,
  EyeOffIcon,
} from "@app-launch-kit/components/primitives/icon";
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from "@app-launch-kit/components/primitives/input";
import { Text } from "@app-launch-kit/components/primitives/text";
import { useToast } from "@app-launch-kit/components/primitives/toast";
import { VStack } from "@app-launch-kit/components/primitives/vstack";
import config from "@app-launch-kit/config";
import { password } from "@app-launch-kit/utils/validators/zod-validators/password";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "@unitools/router";
import { AlertTriangle } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Keyboard } from "react-native";
import colors from "tailwindcss/colors";
import { z } from "zod";

import { showToast } from "../Toast";

export const resetPasswordSchema = z.object({
  password,
  confirmpassword: password,
});

export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;

const ResetPasswordForm = ({ accessToken, refreshToken }: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  const router = useRouter();
  const { navigationLinks } = config;
  const toast = useToast();
  const supabase = useSupabaseClient();

  useEffect(() => {
    // Authenticate the user using the access token and refresh token
    const getSessionWithTokens = async () => {
      if (accessToken && refreshToken) {
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });

        if (error) {
          alert(`Error signing in: ${error.message}`);
        }
      }
    };

    // Call this function only when accessToken and refreshToken are available.
    if (accessToken && refreshToken) {
      getSessionWithTokens();
    }
  }, [accessToken, refreshToken]);

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (_data: ResetPasswordSchemaType) => {
    setAuthLoading(true);
    try {
      if (_data.password === _data.confirmpassword) {
        const { error } = await supabase.auth.updateUser({
          password: _data.password,
        });

        if (error) {
          throw error;
        }

        showToast(toast, {
          action: "success",
          message: "Password updated successfully",
        });

        reset();
        router.replace(`/${navigationLinks.signIn}`);
      } else {
        showToast(toast, {
          action: "error",
          message: "Passwords do not match",
        });
      }
    } catch (error: any) {
      showToast(toast, {
        action: "error",
        message: error.message || "An error occurred. Please try again.",
      });
      console.error(error);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  const handlePasswordShowState = () => {
    setShowPassword((prev) => !prev);
  };

  const handleConfirmPasswordState = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <VStack className="w-full">
      <VStack space="xl" className="w-full">
        <FormControl isInvalid={!!errors.password} isRequired>
          <Controller
            defaultValue=""
            name="password"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await resetPasswordSchema.parseAsync({ password: value });
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
                  type={showPassword ? "text" : "password"}
                />
                <InputSlot onPress={handlePasswordShowState} className="mr-2">
                  <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorIcon size="sm" as={AlertTriangle} />
            <FormControlErrorText>
              {errors.password?.message}
            </FormControlErrorText>
          </FormControlError>
          <FormControlHelperText>
            <Text size="xs">Must be at least 8 characters</Text>
          </FormControlHelperText>
        </FormControl>

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
                  placeholder="Re-enter password"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  enterKeyHint="done"
                  type={showConfirmPassword ? "text" : "password"}
                />
                <InputSlot
                  onPress={handleConfirmPasswordState}
                  className="mr-2"
                >
                  <InputIcon as={showConfirmPassword ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorIcon size="md" as={AlertTriangle} />
            <FormControlErrorText>
              {errors.confirmpassword?.message}
            </FormControlErrorText>
          </FormControlError>
          <FormControlHelperText>
            <Text size="xs">Both passwords must match</Text>
          </FormControlHelperText>
        </FormControl>
      </VStack>
      <VStack className="mt-7 w-full" />
      <Button
        onPress={handleSubmit(onSubmit)}
        disabled={authLoading}
        focusable={!authLoading}
        className={`${authLoading ? "opacity-40 gap-0" : "opacity-100 gap-2"}`}
      >
        {authLoading && <ButtonSpinner color={colors.white} />}
        <ButtonText className="text-sm">UPDATE PASSWORD</ButtonText>
      </Button>
    </VStack>
  );
};

export default ResetPasswordForm;
