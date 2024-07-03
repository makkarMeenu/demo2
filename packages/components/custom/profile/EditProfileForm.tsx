import {
  Icon,
  ChevronDownIcon,
} from '@app-launch-kit/components/primitives/icon';
import { Input, InputField } from '@app-launch-kit/components/primitives/input';
import {
  Select,
  SelectBackdrop,
  SelectTrigger,
  SelectInput,
  SelectPortal,
  SelectContent,
  SelectItem,
} from '@app-launch-kit/components/primitives/select';
import { VStack } from '@app-launch-kit/components/primitives/vstack';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { Keyboard } from 'react-native';

import { Schema } from './types';

import EditProfileFormControl from './EditProfileFormControl';
import {
  AccountDetailsSchemaType,
  accountDetailsSchema,
} from './edit-profile-schema';

type Props = {
  control: Control<Schema, any>;
  errors: FieldErrors<Schema>;
  handleSubmit: any;
  onSubmit: (_data: AccountDetailsSchemaType) => Promise<void>;
};

const EditProfileForm = ({
  control,
  errors,
  handleSubmit,
  onSubmit,
}: Props) => {
  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  return (
    <>
      <VStack className="md:flex-row" space="lg">
        {/* first name */}
        <EditProfileFormControl
          isInvalid={!!errors.firstName}
          label="First Name"
          errorMessage={errors?.firstName?.message}
          required
        >
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
        </EditProfileFormControl>

        {/* last name */}
        <EditProfileFormControl
          isInvalid={!!errors.lastName}
          label="Last Name"
          errorMessage={errors?.lastName?.message}
        >
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
        </EditProfileFormControl>
      </VStack>

      <VStack className="md:flex-row" space="lg">
        {/* gender */}
        <EditProfileFormControl
          isInvalid={!!errors.gender}
          label="Gender"
          errorMessage={errors?.gender?.message}
        >
          <Controller
            name="gender"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                selectedValue={value}
                onValueChange={onChange}
                className="flex-1"
              >
                <SelectTrigger className="justify-between">
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
            )}
          />
        </EditProfileFormControl>

        {/* phone number */}
        <EditProfileFormControl
          isInvalid={!!errors.phoneNumber}
          label="Phone Number"
          errorMessage={errors?.phoneNumber?.message}
          required
        >
          <Controller
            name="phoneNumber"
            control={control}
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
                  placeholder="Enter phone number"
                  keyboardType="number-pad"
                  value={String(value)}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                />
              </Input>
            )}
          />
        </EditProfileFormControl>
      </VStack>

      <VStack className="md:flex-row" space="lg">
        {/* country */}
        <EditProfileFormControl
          isInvalid={!!errors.country}
          label="Country"
          errorMessage={errors?.country?.message}
        >
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
        </EditProfileFormControl>

        {/* state */}
        <EditProfileFormControl
          isInvalid={!!errors.state}
          label="State"
          errorMessage={errors?.state?.message}
        >
          <Controller
            name="state"
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
        </EditProfileFormControl>
      </VStack>

      <VStack className="md:flex-row" space="lg">
        {/* city */}
        <EditProfileFormControl
          isInvalid={!!errors.city}
          label="City"
          errorMessage={errors?.city?.message}
        >
          <Controller
            name="city"
            control={control}
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
        </EditProfileFormControl>

        {/* zip code */}
        <EditProfileFormControl
          isInvalid={!!errors.zipCode}
          label="Zip Code"
          errorMessage={errors?.zipCode?.message}
        >
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
        </EditProfileFormControl>
      </VStack>
    </>
  );
};

export default EditProfileForm;
