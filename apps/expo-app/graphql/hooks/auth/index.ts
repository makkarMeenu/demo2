import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AggregateModules = {
  __typename?: 'AggregateModules';
  _avg?: Maybe<ModulesAvgAggregate>;
  _count?: Maybe<ModulesCountAggregate>;
  _max?: Maybe<ModulesMaxAggregate>;
  _min?: Maybe<ModulesMinAggregate>;
  _sum?: Maybe<ModulesSumAggregate>;
};

export type AggregateModulesResponse = {
  __typename?: 'AggregateModulesResponse';
  data?: Maybe<AggregateModules>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type AggregatePermissions = {
  __typename?: 'AggregatePermissions';
  _avg?: Maybe<PermissionsAvgAggregate>;
  _count?: Maybe<PermissionsCountAggregate>;
  _max?: Maybe<PermissionsMaxAggregate>;
  _min?: Maybe<PermissionsMinAggregate>;
  _sum?: Maybe<PermissionsSumAggregate>;
};

export type AggregatePermissionsResponse = {
  __typename?: 'AggregatePermissionsResponse';
  data?: Maybe<AggregatePermissions>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type AggregateRoles = {
  __typename?: 'AggregateRoles';
  _avg?: Maybe<RolesAvgAggregate>;
  _count?: Maybe<RolesCountAggregate>;
  _max?: Maybe<RolesMaxAggregate>;
  _min?: Maybe<RolesMinAggregate>;
  _sum?: Maybe<RolesSumAggregate>;
};

export type AggregateRolesResponse = {
  __typename?: 'AggregateRolesResponse';
  data?: Maybe<AggregateRoles>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type AggregateUsers = {
  __typename?: 'AggregateUsers';
  _count?: Maybe<UsersCountAggregate>;
  _max?: Maybe<UsersMaxAggregate>;
  _min?: Maybe<UsersMinAggregate>;
};

export type AggregateUsersResponse = {
  __typename?: 'AggregateUsersResponse';
  data?: Maybe<AggregateUsers>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type AllUserResponse = {
  __typename?: 'AllUserResponse';
  data?: Maybe<Array<UserClient>>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type AuthInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Scalars['Float']['input'];
};

export type AuthPhoneResponseDto = {
  __typename?: 'AuthPhoneResponseDto';
  accessToken: Scalars['String']['output'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  data?: Maybe<AuthResponseDto>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type AuthResponseDto = {
  __typename?: 'AuthResponseDto';
  accessToken: Scalars['String']['output'];
  renewAccessToken: Scalars['String']['output'];
  user: UserClient;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type CreateManyOutputResponse = {
  __typename?: 'CreateManyOutputResponse';
  data?: Maybe<CrudManyOutput>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type CrudManyOutput = {
  __typename?: 'CrudManyOutput';
  count: Scalars['Float']['output'];
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumgenderNullableFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumgenderNullableFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type EnumprovidersFieldUpdateOperationsInput = {
  set?: InputMaybe<Providers>;
};

export type EnumprovidersFilter = {
  equals?: InputMaybe<Providers>;
  in?: InputMaybe<Array<Providers>>;
  not?: InputMaybe<NestedEnumprovidersFilter>;
  notIn?: InputMaybe<Array<Providers>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type ModulesAvgAggregate = {
  __typename?: 'ModulesAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type ModulesCount = {
  __typename?: 'ModulesCount';
  permissions: Scalars['Int']['output'];
};

export type ModulesCountAggregate = {
  __typename?: 'ModulesCountAggregate';
  _all: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type ModulesMaxAggregate = {
  __typename?: 'ModulesMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type ModulesMinAggregate = {
  __typename?: 'ModulesMinAggregate';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type ModulesRelationFilter = {
  is?: InputMaybe<ModulesWhereInput>;
  isNot?: InputMaybe<ModulesWhereInput>;
};

export type ModulesResponse = {
  __typename?: 'ModulesResponse';
  data?: Maybe<Array<Modules>>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export enum ModulesScalarFieldEnum {
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type ModulesSumAggregate = {
  __typename?: 'ModulesSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUser: AuthResponse;
  completePasswordReset: AuthResponse;
  delete_modules: CreateManyOutputResponse;
  delete_modules_by_pk: UniqueModulesResponse;
  delete_permissions: CreateManyOutputResponse;
  delete_permissions_by_pk: UniquePermissionsResponse;
  delete_roles: CreateManyOutputResponse;
  delete_roles_by_pk: UniqueRolesResponse;
  delete_roles_permissions: CreateManyOutputResponse;
  delete_users: CreateManyOutputResponse;
  delete_users_by_pk: UniqueUsersResponse;
  delete_users_permissions: CreateManyOutputResponse;
  delete_users_roles: CreateManyOutputResponse;
  initiatePasswordReset: AuthResponse;
  insert_modules: CreateManyOutputResponse;
  insert_modules_one: UniqueModulesResponse;
  insert_permissions: CreateManyOutputResponse;
  insert_permissions_one: UniquePermissionsResponse;
  insert_roles: CreateManyOutputResponse;
  insert_roles_one: UniqueRolesResponse;
  insert_roles_permissions: CreateManyOutputResponse;
  insert_users: CreateManyOutputResponse;
  insert_users_one: UniqueUsersResponse;
  insert_users_permissions: CreateManyOutputResponse;
  insert_users_roles: CreateManyOutputResponse;
  registerUser: AuthResponse;
  renewAccessToken: RenewTokenResponse;
  sendVerificationOtp: AuthResponse;
  update_many_modules: CreateManyOutputResponse;
  update_many_permissions: CreateManyOutputResponse;
  update_many_roles: CreateManyOutputResponse;
  update_many_roles_permissions: CreateManyOutputResponse;
  update_many_users: CreateManyOutputResponse;
  update_many_users_permissions: CreateManyOutputResponse;
  update_many_users_roles: CreateManyOutputResponse;
  update_modules_by_pk: UniqueModulesResponse;
  update_permissions: UniquePermissionsResponse;
  update_permissions_by_pk: UniquePermissionsResponse;
  update_roles: UniqueRolesResponse;
  update_roles_by_pk: UniqueRolesResponse;
  update_users: UniqueUsersResponse;
  update_users_by_pk: UniqueUsersResponse;
  validateOtp: AuthResponse;
};


export type MutationAuthenticateUserArgs = {
  authData: AuthInput;
};


export type MutationCompletePasswordResetArgs = {
  newPassword: Scalars['String']['input'];
};


export type MutationDelete_ModulesArgs = {
  where?: InputMaybe<ModulesWhereInput>;
};


export type MutationDelete_Modules_By_PkArgs = {
  where: ModulesWhereUniqueInput;
};


export type MutationDelete_PermissionsArgs = {
  where?: InputMaybe<PermissionsWhereInput>;
};


export type MutationDelete_Permissions_By_PkArgs = {
  where: PermissionsWhereUniqueInput;
};


export type MutationDelete_RolesArgs = {
  where?: InputMaybe<RolesWhereInput>;
};


export type MutationDelete_Roles_By_PkArgs = {
  where: RolesWhereUniqueInput;
};


export type MutationDelete_Roles_PermissionsArgs = {
  where?: InputMaybe<Role_PermissionsWhereInput>;
};


export type MutationDelete_UsersArgs = {
  where?: InputMaybe<UsersWhereInput>;
};


export type MutationDelete_Users_By_PkArgs = {
  where: UsersWhereUniqueInput;
};


export type MutationDelete_Users_PermissionsArgs = {
  where?: InputMaybe<User_PermissionsWhereInput>;
};


export type MutationDelete_Users_RolesArgs = {
  where?: InputMaybe<User_RolesWhereInput>;
};


export type MutationInitiatePasswordResetArgs = {
  email: Scalars['String']['input'];
};


export type MutationInsert_ModulesArgs = {
  data: Array<ModulesCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationInsert_Modules_OneArgs = {
  data: ModulesCreateInput;
};


export type MutationInsert_PermissionsArgs = {
  data: Array<PermissionsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationInsert_Permissions_OneArgs = {
  data: PermissionsCreateInput;
};


export type MutationInsert_RolesArgs = {
  data: Array<RolesCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationInsert_Roles_OneArgs = {
  data: RolesCreateInput;
};


export type MutationInsert_Roles_PermissionsArgs = {
  data: Array<Role_PermissionsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationInsert_UsersArgs = {
  data: Array<UsersCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationInsert_Users_OneArgs = {
  data?: InputMaybe<UsersCreateInput>;
};


export type MutationInsert_Users_PermissionsArgs = {
  data: Array<User_PermissionsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationInsert_Users_RolesArgs = {
  data: Array<User_RolesCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRegisterUserArgs = {
  authData: AuthInput;
};


export type MutationSendVerificationOtpArgs = {
  phone_no: Scalars['String']['input'];
};


export type MutationUpdate_Many_ModulesArgs = {
  data: ModulesUpdateManyMutationInput;
  where?: InputMaybe<ModulesWhereInput>;
};


export type MutationUpdate_Many_PermissionsArgs = {
  data: PermissionsUpdateManyMutationInput;
  where?: InputMaybe<PermissionsWhereInput>;
};


export type MutationUpdate_Many_RolesArgs = {
  data: RolesUpdateManyMutationInput;
  where?: InputMaybe<RolesWhereInput>;
};


export type MutationUpdate_Many_Roles_PermissionsArgs = {
  data: Role_PermissionsUpdateManyMutationInput;
  where?: InputMaybe<Role_PermissionsWhereInput>;
};


export type MutationUpdate_Many_UsersArgs = {
  data: UsersUpdateManyMutationInput;
  where?: InputMaybe<UsersWhereInput>;
};


export type MutationUpdate_Many_Users_PermissionsArgs = {
  data: User_PermissionsUpdateManyMutationInput;
  where?: InputMaybe<User_PermissionsWhereInput>;
};


export type MutationUpdate_Many_Users_RolesArgs = {
  data: User_RolesUpdateManyMutationInput;
  where?: InputMaybe<User_RolesWhereInput>;
};


export type MutationUpdate_Modules_By_PkArgs = {
  data: ModulesUpdateInput;
  where: ModulesWhereUniqueInput;
};


export type MutationUpdate_PermissionsArgs = {
  data: PermissionsUpdateInput;
  where: PermissionsWhereUniqueInput;
};


export type MutationUpdate_Permissions_By_PkArgs = {
  data: PermissionsUpdateInput;
  where: PermissionsWhereUniqueInput;
};


export type MutationUpdate_RolesArgs = {
  data: RolesUpdateInput;
  where: RolesWhereUniqueInput;
};


export type MutationUpdate_Roles_By_PkArgs = {
  data: RolesUpdateInput;
  where: RolesWhereUniqueInput;
};


export type MutationUpdate_UsersArgs = {
  data: UsersUpdateInput;
  where: UsersWhereUniqueInput;
};


export type MutationUpdate_Users_By_PkArgs = {
  data: UsersUpdateInput;
  where: UsersWhereUniqueInput;
};


export type MutationValidateOtpArgs = {
  data: ValidateOtpDto;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumgenderNullableFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumgenderNullableFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type NestedEnumprovidersFilter = {
  equals?: InputMaybe<Providers>;
  in?: InputMaybe<Array<Providers>>;
  not?: InputMaybe<NestedEnumprovidersFilter>;
  notIn?: InputMaybe<Array<Providers>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedUuidFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedUuidFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableEnumgenderFieldUpdateOperationsInput = {
  set?: InputMaybe<Gender>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Oauth_IdentitiesAvgAggregate = {
  __typename?: 'Oauth_identitiesAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Oauth_IdentitiesCountAggregate = {
  __typename?: 'Oauth_identitiesCountAggregate';
  _all: Scalars['Int']['output'];
  expires_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  provider_id: Scalars['Int']['output'];
  provider_name: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type Oauth_IdentitiesListRelationFilter = {
  every?: InputMaybe<Oauth_IdentitiesWhereInput>;
  none?: InputMaybe<Oauth_IdentitiesWhereInput>;
  some?: InputMaybe<Oauth_IdentitiesWhereInput>;
};

export type Oauth_IdentitiesMaxAggregate = {
  __typename?: 'Oauth_identitiesMaxAggregate';
  expires_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  provider_id?: Maybe<Scalars['String']['output']>;
  provider_name?: Maybe<Providers>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type Oauth_IdentitiesMinAggregate = {
  __typename?: 'Oauth_identitiesMinAggregate';
  expires_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  provider_id?: Maybe<Scalars['String']['output']>;
  provider_name?: Maybe<Providers>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type Oauth_IdentitiesSumAggregate = {
  __typename?: 'Oauth_identitiesSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type PermissionsAvgAggregate = {
  __typename?: 'PermissionsAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  module_id?: Maybe<Scalars['Float']['output']>;
};

export type PermissionsCount = {
  __typename?: 'PermissionsCount';
  role_permissions: Scalars['Int']['output'];
  user_permissions: Scalars['Int']['output'];
};

export type PermissionsCountAggregate = {
  __typename?: 'PermissionsCountAggregate';
  _all: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  is_enabled: Scalars['Int']['output'];
  module_id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type PermissionsListRelationFilter = {
  every?: InputMaybe<PermissionsWhereInput>;
  none?: InputMaybe<PermissionsWhereInput>;
  some?: InputMaybe<PermissionsWhereInput>;
};

export type PermissionsMaxAggregate = {
  __typename?: 'PermissionsMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_enabled?: Maybe<Scalars['Boolean']['output']>;
  module_id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type PermissionsMinAggregate = {
  __typename?: 'PermissionsMinAggregate';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_enabled?: Maybe<Scalars['Boolean']['output']>;
  module_id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type PermissionsRelationFilter = {
  is?: InputMaybe<PermissionsWhereInput>;
  isNot?: InputMaybe<PermissionsWhereInput>;
};

export type PermissionsResponse = {
  __typename?: 'PermissionsResponse';
  data?: Maybe<Array<Permissions>>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export enum PermissionsScalarFieldEnum {
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  IsEnabled = 'is_enabled',
  ModuleId = 'module_id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type PermissionsSumAggregate = {
  __typename?: 'PermissionsSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  module_id?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAllUsers: AllUserResponse;
  getHello: Scalars['String']['output'];
  getUserById: UserResponse;
  modules: ModulesResponse;
  modules_aggregate: AggregateModulesResponse;
  modules_by_pk: UniqueModulesResponse;
  permissions: PermissionsResponse;
  permissions_aggregate: AggregatePermissionsResponse;
  permissions_by_pk: UniquePermissionsResponse;
  roles: RolesResponse;
  roles_aggregate: AggregateRolesResponse;
  roles_by_pk: UniqueRolesResponse;
  users: UsersResponse;
  users_aggregate: AggregateUsersResponse;
  users_by_pk: UniqueUsersResponse;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryModulesArgs = {
  cursor?: InputMaybe<ModulesWhereUniqueInput>;
  distinct?: InputMaybe<Array<ModulesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ModulesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ModulesWhereInput>;
};


export type QueryModules_AggregateArgs = {
  cursor?: InputMaybe<ModulesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ModulesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ModulesWhereInput>;
};


export type QueryModules_By_PkArgs = {
  where: ModulesWhereUniqueInput;
};


export type QueryPermissionsArgs = {
  cursor?: InputMaybe<PermissionsWhereUniqueInput>;
  distinct?: InputMaybe<Array<PermissionsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PermissionsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PermissionsWhereInput>;
};


export type QueryPermissions_AggregateArgs = {
  cursor?: InputMaybe<PermissionsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PermissionsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PermissionsWhereInput>;
};


export type QueryPermissions_By_PkArgs = {
  where: PermissionsWhereUniqueInput;
};


export type QueryRolesArgs = {
  cursor?: InputMaybe<RolesWhereUniqueInput>;
  distinct?: InputMaybe<Array<RolesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RolesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RolesWhereInput>;
};


export type QueryRoles_AggregateArgs = {
  cursor?: InputMaybe<RolesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<RolesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RolesWhereInput>;
};


export type QueryRoles_By_PkArgs = {
  where: RolesWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UsersWhereUniqueInput>;
  distinct?: InputMaybe<Array<UsersScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UsersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersWhereInput>;
};


export type QueryUsers_AggregateArgs = {
  cursor?: InputMaybe<UsersWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UsersOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UsersWhereInput>;
};


export type QueryUsers_By_PkArgs = {
  where: UsersWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RenewTokenResponse = {
  __typename?: 'RenewTokenResponse';
  data?: Maybe<RenewTokenResponseDto>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type RenewTokenResponseDto = {
  __typename?: 'RenewTokenResponseDto';
  accessToken: Scalars['String']['output'];
};

export type Role_PermissionsAvgAggregate = {
  __typename?: 'Role_permissionsAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  permission_id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
};

export type Role_PermissionsCountAggregate = {
  __typename?: 'Role_permissionsCountAggregate';
  _all: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  permission_id: Scalars['Int']['output'];
  role_id: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type Role_PermissionsListRelationFilter = {
  every?: InputMaybe<Role_PermissionsWhereInput>;
  none?: InputMaybe<Role_PermissionsWhereInput>;
  some?: InputMaybe<Role_PermissionsWhereInput>;
};

export type Role_PermissionsMaxAggregate = {
  __typename?: 'Role_permissionsMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  permission_id?: Maybe<Scalars['Int']['output']>;
  role_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Role_PermissionsMinAggregate = {
  __typename?: 'Role_permissionsMinAggregate';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  permission_id?: Maybe<Scalars['Int']['output']>;
  role_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Role_PermissionsSumAggregate = {
  __typename?: 'Role_permissionsSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  permission_id?: Maybe<Scalars['Int']['output']>;
  role_id?: Maybe<Scalars['Int']['output']>;
};

export type RolesAvgAggregate = {
  __typename?: 'RolesAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type RolesCount = {
  __typename?: 'RolesCount';
  role_permissions: Scalars['Int']['output'];
  user_roles: Scalars['Int']['output'];
};

export type RolesCountAggregate = {
  __typename?: 'RolesCountAggregate';
  _all: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  is_active: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type RolesMaxAggregate = {
  __typename?: 'RolesMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type RolesMinAggregate = {
  __typename?: 'RolesMinAggregate';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type RolesRelationFilter = {
  is?: InputMaybe<RolesWhereInput>;
  isNot?: InputMaybe<RolesWhereInput>;
};

export type RolesResponse = {
  __typename?: 'RolesResponse';
  data?: Maybe<Array<Roles>>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export enum RolesScalarFieldEnum {
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type RolesSumAggregate = {
  __typename?: 'RolesSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UniqueModulesResponse = {
  __typename?: 'UniqueModulesResponse';
  data?: Maybe<Modules>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type UniquePermissionsResponse = {
  __typename?: 'UniquePermissionsResponse';
  data?: Maybe<Permissions>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type UniqueRolesResponse = {
  __typename?: 'UniqueRolesResponse';
  data?: Maybe<Roles>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type UniqueUsersResponse = {
  __typename?: 'UniqueUsersResponse';
  data?: Maybe<Users>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type UserClient = {
  __typename?: 'UserClient';
  avatar?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verified?: Maybe<Scalars['Boolean']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  last_login?: Maybe<Scalars['DateTime']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  data?: Maybe<UserClient>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export type User_OtpsAvgAggregate = {
  __typename?: 'User_otpsAvgAggregate';
  count?: Maybe<Scalars['Float']['output']>;
};

export type User_OtpsCountAggregate = {
  __typename?: 'User_otpsCountAggregate';
  _all: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  expires_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  is_used: Scalars['Int']['output'];
  otp_value: Scalars['Int']['output'];
  purpose: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type User_OtpsMaxAggregate = {
  __typename?: 'User_otpsMaxAggregate';
  count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  expires_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  is_used?: Maybe<Scalars['Boolean']['output']>;
  otp_value?: Maybe<Scalars['String']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type User_OtpsMinAggregate = {
  __typename?: 'User_otpsMinAggregate';
  count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  expires_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  is_used?: Maybe<Scalars['Boolean']['output']>;
  otp_value?: Maybe<Scalars['String']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type User_OtpsNullableRelationFilter = {
  is?: InputMaybe<User_OtpsWhereInput>;
  isNot?: InputMaybe<User_OtpsWhereInput>;
};

export type User_OtpsSumAggregate = {
  __typename?: 'User_otpsSumAggregate';
  count?: Maybe<Scalars['Int']['output']>;
};

export type User_PermissionsAvgAggregate = {
  __typename?: 'User_permissionsAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  permission_id?: Maybe<Scalars['Float']['output']>;
};

export type User_PermissionsCountAggregate = {
  __typename?: 'User_permissionsCountAggregate';
  _all: Scalars['Int']['output'];
  granted: Scalars['Int']['output'];
  granted_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  permission_id: Scalars['Int']['output'];
  revoked_at: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type User_PermissionsListRelationFilter = {
  every?: InputMaybe<User_PermissionsWhereInput>;
  none?: InputMaybe<User_PermissionsWhereInput>;
  some?: InputMaybe<User_PermissionsWhereInput>;
};

export type User_PermissionsMaxAggregate = {
  __typename?: 'User_permissionsMaxAggregate';
  granted?: Maybe<Scalars['Boolean']['output']>;
  granted_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  permission_id?: Maybe<Scalars['Int']['output']>;
  revoked_at?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type User_PermissionsMinAggregate = {
  __typename?: 'User_permissionsMinAggregate';
  granted?: Maybe<Scalars['Boolean']['output']>;
  granted_at?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  permission_id?: Maybe<Scalars['Int']['output']>;
  revoked_at?: Maybe<Scalars['DateTime']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type User_PermissionsSumAggregate = {
  __typename?: 'User_permissionsSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  permission_id?: Maybe<Scalars['Int']['output']>;
};

export type User_RolesAvgAggregate = {
  __typename?: 'User_rolesAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
};

export type User_RolesCountAggregate = {
  __typename?: 'User_rolesCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  role_id: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
};

export type User_RolesListRelationFilter = {
  every?: InputMaybe<User_RolesWhereInput>;
  none?: InputMaybe<User_RolesWhereInput>;
  some?: InputMaybe<User_RolesWhereInput>;
};

export type User_RolesMaxAggregate = {
  __typename?: 'User_rolesMaxAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  role_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type User_RolesMinAggregate = {
  __typename?: 'User_rolesMinAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  role_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type User_RolesSumAggregate = {
  __typename?: 'User_rolesSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  role_id?: Maybe<Scalars['Int']['output']>;
};

export type UsersCount = {
  __typename?: 'UsersCount';
  oauth_identities: Scalars['Int']['output'];
  user_permissions: Scalars['Int']['output'];
  user_roles: Scalars['Int']['output'];
};

export type UsersCountAggregate = {
  __typename?: 'UsersCountAggregate';
  _all: Scalars['Int']['output'];
  avatar: Scalars['Int']['output'];
  city: Scalars['Int']['output'];
  country: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  email_verified: Scalars['Int']['output'];
  first_name: Scalars['Int']['output'];
  gender: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  is_active: Scalars['Int']['output'];
  last_login: Scalars['Int']['output'];
  last_name: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  phone_number: Scalars['Int']['output'];
  reset_token: Scalars['Int']['output'];
  reset_token_expiry: Scalars['Int']['output'];
  state: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
};

export type UsersMaxAggregate = {
  __typename?: 'UsersMaxAggregate';
  avatar?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verified?: Maybe<Scalars['Boolean']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  last_login?: Maybe<Scalars['DateTime']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  reset_token?: Maybe<Scalars['String']['output']>;
  reset_token_expiry?: Maybe<Scalars['DateTime']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersMinAggregate = {
  __typename?: 'UsersMinAggregate';
  avatar?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verified?: Maybe<Scalars['Boolean']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['String']['output']>;
  is_active?: Maybe<Scalars['Boolean']['output']>;
  last_login?: Maybe<Scalars['DateTime']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  reset_token?: Maybe<Scalars['String']['output']>;
  reset_token_expiry?: Maybe<Scalars['DateTime']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersRelationFilter = {
  is?: InputMaybe<UsersWhereInput>;
  isNot?: InputMaybe<UsersWhereInput>;
};

export type UsersResponse = {
  __typename?: 'UsersResponse';
  data?: Maybe<Array<Users>>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  statusCode?: Maybe<Scalars['Int']['output']>;
};

export enum UsersScalarFieldEnum {
  Avatar = 'avatar',
  City = 'city',
  Country = 'country',
  CreatedAt = 'created_at',
  Email = 'email',
  EmailVerified = 'email_verified',
  FirstName = 'first_name',
  Gender = 'gender',
  Id = 'id',
  IsActive = 'is_active',
  LastLogin = 'last_login',
  LastName = 'last_name',
  Password = 'password',
  PhoneNumber = 'phone_number',
  ResetToken = 'reset_token',
  ResetTokenExpiry = 'reset_token_expiry',
  State = 'state',
  UpdatedAt = 'updated_at'
}

export type UuidFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedUuidFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Others = 'Others'
}

export type Modules = {
  __typename?: 'modules';
  _count: ModulesCount;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Permissions>>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type ModulesCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<PermissionsCreateNestedManyWithoutModulesInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ModulesCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ModulesCreateNestedOneWithoutPermissionsInput = {
  connect?: InputMaybe<ModulesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ModulesCreateOrConnectWithoutPermissionsInput>;
  create?: InputMaybe<ModulesCreateWithoutPermissionsInput>;
};

export type ModulesCreateOrConnectWithoutPermissionsInput = {
  create: ModulesCreateWithoutPermissionsInput;
  where: ModulesWhereUniqueInput;
};

export type ModulesCreateWithoutPermissionsInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ModulesOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  permissions?: InputMaybe<PermissionsOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrderInput>;
};

export type ModulesUpdateInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  permissions?: InputMaybe<PermissionsUpdateManyWithoutModulesNestedInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ModulesUpdateManyMutationInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ModulesUpdateOneRequiredWithoutPermissionsNestedInput = {
  connect?: InputMaybe<ModulesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ModulesCreateOrConnectWithoutPermissionsInput>;
  create?: InputMaybe<ModulesCreateWithoutPermissionsInput>;
  update?: InputMaybe<ModulesUpdateToOneWithWhereWithoutPermissionsInput>;
  upsert?: InputMaybe<ModulesUpsertWithoutPermissionsInput>;
};

export type ModulesUpdateToOneWithWhereWithoutPermissionsInput = {
  data: ModulesUpdateWithoutPermissionsInput;
  where?: InputMaybe<ModulesWhereInput>;
};

export type ModulesUpdateWithoutPermissionsInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ModulesUpsertWithoutPermissionsInput = {
  create: ModulesCreateWithoutPermissionsInput;
  update: ModulesUpdateWithoutPermissionsInput;
  where?: InputMaybe<ModulesWhereInput>;
};

export type ModulesWhereInput = {
  AND?: InputMaybe<Array<ModulesWhereInput>>;
  NOT?: InputMaybe<Array<ModulesWhereInput>>;
  OR?: InputMaybe<Array<ModulesWhereInput>>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<PermissionsListRelationFilter>;
  updated_at?: InputMaybe<DateTimeNullableFilter>;
};

export type ModulesWhereUniqueInput = {
  AND?: InputMaybe<Array<ModulesWhereInput>>;
  NOT?: InputMaybe<Array<ModulesWhereInput>>;
  OR?: InputMaybe<Array<ModulesWhereInput>>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<PermissionsListRelationFilter>;
  updated_at?: InputMaybe<DateTimeNullableFilter>;
};

export type Oauth_Identities = {
  __typename?: 'oauth_identities';
  expires_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  provider_id: Scalars['String']['output'];
  provider_name: Providers;
  user_id: Scalars['String']['output'];
  users: Users;
};

export type Oauth_IdentitiesCreateManyUsersInput = {
  expires_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  provider_id: Scalars['String']['input'];
  provider_name: Providers;
};

export type Oauth_IdentitiesCreateManyUsersInputEnvelope = {
  data: Array<Oauth_IdentitiesCreateManyUsersInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Oauth_IdentitiesCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<Oauth_IdentitiesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Oauth_IdentitiesCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<Oauth_IdentitiesCreateWithoutUsersInput>>;
  createMany?: InputMaybe<Oauth_IdentitiesCreateManyUsersInputEnvelope>;
};

export type Oauth_IdentitiesCreateOrConnectWithoutUsersInput = {
  create: Oauth_IdentitiesCreateWithoutUsersInput;
  where: Oauth_IdentitiesWhereUniqueInput;
};

export type Oauth_IdentitiesCreateWithoutUsersInput = {
  expires_at?: InputMaybe<Scalars['DateTime']['input']>;
  provider_id: Scalars['String']['input'];
  provider_name: Providers;
};

export type Oauth_IdentitiesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Oauth_IdentitiesProvider_NameProvider_IdCompoundUniqueInput = {
  provider_id: Scalars['String']['input'];
  provider_name: Providers;
};

export type Oauth_IdentitiesScalarWhereInput = {
  AND?: InputMaybe<Array<Oauth_IdentitiesScalarWhereInput>>;
  NOT?: InputMaybe<Array<Oauth_IdentitiesScalarWhereInput>>;
  OR?: InputMaybe<Array<Oauth_IdentitiesScalarWhereInput>>;
  expires_at?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  provider_id?: InputMaybe<StringFilter>;
  provider_name?: InputMaybe<EnumprovidersFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type Oauth_IdentitiesUpdateManyMutationInput = {
  expires_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  provider_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider_name?: InputMaybe<EnumprovidersFieldUpdateOperationsInput>;
};

export type Oauth_IdentitiesUpdateManyWithWhereWithoutUsersInput = {
  data: Oauth_IdentitiesUpdateManyMutationInput;
  where: Oauth_IdentitiesScalarWhereInput;
};

export type Oauth_IdentitiesUpdateManyWithoutUsersNestedInput = {
  connect?: InputMaybe<Array<Oauth_IdentitiesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Oauth_IdentitiesCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<Oauth_IdentitiesCreateWithoutUsersInput>>;
  createMany?: InputMaybe<Oauth_IdentitiesCreateManyUsersInputEnvelope>;
  delete?: InputMaybe<Array<Oauth_IdentitiesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Oauth_IdentitiesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Oauth_IdentitiesWhereUniqueInput>>;
  set?: InputMaybe<Array<Oauth_IdentitiesWhereUniqueInput>>;
  update?: InputMaybe<Array<Oauth_IdentitiesUpdateWithWhereUniqueWithoutUsersInput>>;
  updateMany?: InputMaybe<Array<Oauth_IdentitiesUpdateManyWithWhereWithoutUsersInput>>;
  upsert?: InputMaybe<Array<Oauth_IdentitiesUpsertWithWhereUniqueWithoutUsersInput>>;
};

export type Oauth_IdentitiesUpdateWithWhereUniqueWithoutUsersInput = {
  data: Oauth_IdentitiesUpdateWithoutUsersInput;
  where: Oauth_IdentitiesWhereUniqueInput;
};

export type Oauth_IdentitiesUpdateWithoutUsersInput = {
  expires_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  provider_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  provider_name?: InputMaybe<EnumprovidersFieldUpdateOperationsInput>;
};

export type Oauth_IdentitiesUpsertWithWhereUniqueWithoutUsersInput = {
  create: Oauth_IdentitiesCreateWithoutUsersInput;
  update: Oauth_IdentitiesUpdateWithoutUsersInput;
  where: Oauth_IdentitiesWhereUniqueInput;
};

export type Oauth_IdentitiesUser_IdProvider_NameCompoundUniqueInput = {
  provider_name: Providers;
  user_id: Scalars['String']['input'];
};

export type Oauth_IdentitiesWhereInput = {
  AND?: InputMaybe<Array<Oauth_IdentitiesWhereInput>>;
  NOT?: InputMaybe<Array<Oauth_IdentitiesWhereInput>>;
  OR?: InputMaybe<Array<Oauth_IdentitiesWhereInput>>;
  expires_at?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  provider_id?: InputMaybe<StringFilter>;
  provider_name?: InputMaybe<EnumprovidersFilter>;
  user_id?: InputMaybe<UuidFilter>;
  users?: InputMaybe<UsersRelationFilter>;
};

export type Oauth_IdentitiesWhereUniqueInput = {
  AND?: InputMaybe<Array<Oauth_IdentitiesWhereInput>>;
  NOT?: InputMaybe<Array<Oauth_IdentitiesWhereInput>>;
  OR?: InputMaybe<Array<Oauth_IdentitiesWhereInput>>;
  expires_at?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  provider_id?: InputMaybe<StringFilter>;
  provider_name?: InputMaybe<EnumprovidersFilter>;
  provider_name_provider_id?: InputMaybe<Oauth_IdentitiesProvider_NameProvider_IdCompoundUniqueInput>;
  user_id?: InputMaybe<UuidFilter>;
  user_id_provider_name?: InputMaybe<Oauth_IdentitiesUser_IdProvider_NameCompoundUniqueInput>;
  users?: InputMaybe<UsersRelationFilter>;
};

export type Permissions = {
  __typename?: 'permissions';
  _count: PermissionsCount;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_enabled?: Maybe<Scalars['Boolean']['output']>;
  module_id: Scalars['Int']['output'];
  modules: Modules;
  name: Scalars['String']['output'];
  role_permissions?: Maybe<Array<Role_Permissions>>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_permissions?: Maybe<Array<User_Permissions>>;
};

export type PermissionsCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  modules: ModulesCreateNestedOneWithoutPermissionsInput;
  name: Scalars['String']['input'];
  role_permissions?: InputMaybe<Role_PermissionsCreateNestedManyWithoutPermissionsInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_permissions?: InputMaybe<User_PermissionsCreateNestedManyWithoutPermissionsInput>;
};

export type PermissionsCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  module_id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PermissionsCreateManyModulesInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PermissionsCreateManyModulesInputEnvelope = {
  data: Array<PermissionsCreateManyModulesInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PermissionsCreateNestedManyWithoutModulesInput = {
  connect?: InputMaybe<Array<PermissionsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PermissionsCreateOrConnectWithoutModulesInput>>;
  create?: InputMaybe<Array<PermissionsCreateWithoutModulesInput>>;
  createMany?: InputMaybe<PermissionsCreateManyModulesInputEnvelope>;
};

export type PermissionsCreateNestedOneWithoutRole_PermissionsInput = {
  connect?: InputMaybe<PermissionsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PermissionsCreateOrConnectWithoutRole_PermissionsInput>;
  create?: InputMaybe<PermissionsCreateWithoutRole_PermissionsInput>;
};

export type PermissionsCreateNestedOneWithoutUser_PermissionsInput = {
  connect?: InputMaybe<PermissionsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PermissionsCreateOrConnectWithoutUser_PermissionsInput>;
  create?: InputMaybe<PermissionsCreateWithoutUser_PermissionsInput>;
};

export type PermissionsCreateOrConnectWithoutModulesInput = {
  create: PermissionsCreateWithoutModulesInput;
  where: PermissionsWhereUniqueInput;
};

export type PermissionsCreateOrConnectWithoutRole_PermissionsInput = {
  create: PermissionsCreateWithoutRole_PermissionsInput;
  where: PermissionsWhereUniqueInput;
};

export type PermissionsCreateOrConnectWithoutUser_PermissionsInput = {
  create: PermissionsCreateWithoutUser_PermissionsInput;
  where: PermissionsWhereUniqueInput;
};

export type PermissionsCreateWithoutModulesInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  role_permissions?: InputMaybe<Role_PermissionsCreateNestedManyWithoutPermissionsInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_permissions?: InputMaybe<User_PermissionsCreateNestedManyWithoutPermissionsInput>;
};

export type PermissionsCreateWithoutRole_PermissionsInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  modules: ModulesCreateNestedOneWithoutPermissionsInput;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_permissions?: InputMaybe<User_PermissionsCreateNestedManyWithoutPermissionsInput>;
};

export type PermissionsCreateWithoutUser_PermissionsInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  modules: ModulesCreateNestedOneWithoutPermissionsInput;
  name: Scalars['String']['input'];
  role_permissions?: InputMaybe<Role_PermissionsCreateNestedManyWithoutPermissionsInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PermissionsModule_IdNameCompoundUniqueInput = {
  module_id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type PermissionsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PermissionsOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  is_enabled?: InputMaybe<SortOrderInput>;
  module_id?: InputMaybe<SortOrder>;
  modules?: InputMaybe<ModulesOrderByWithRelationInput>;
  name?: InputMaybe<SortOrder>;
  role_permissions?: InputMaybe<Role_PermissionsOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrderInput>;
  user_permissions?: InputMaybe<User_PermissionsOrderByRelationAggregateInput>;
};

export type PermissionsScalarWhereInput = {
  AND?: InputMaybe<Array<PermissionsScalarWhereInput>>;
  NOT?: InputMaybe<Array<PermissionsScalarWhereInput>>;
  OR?: InputMaybe<Array<PermissionsScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  is_enabled?: InputMaybe<BoolNullableFilter>;
  module_id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeNullableFilter>;
};

export type PermissionsUpdateInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  is_enabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  modules?: InputMaybe<ModulesUpdateOneRequiredWithoutPermissionsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  role_permissions?: InputMaybe<Role_PermissionsUpdateManyWithoutPermissionsNestedInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user_permissions?: InputMaybe<User_PermissionsUpdateManyWithoutPermissionsNestedInput>;
};

export type PermissionsUpdateManyMutationInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  is_enabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type PermissionsUpdateManyWithWhereWithoutModulesInput = {
  data: PermissionsUpdateManyMutationInput;
  where: PermissionsScalarWhereInput;
};

export type PermissionsUpdateManyWithoutModulesNestedInput = {
  connect?: InputMaybe<Array<PermissionsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PermissionsCreateOrConnectWithoutModulesInput>>;
  create?: InputMaybe<Array<PermissionsCreateWithoutModulesInput>>;
  createMany?: InputMaybe<PermissionsCreateManyModulesInputEnvelope>;
  delete?: InputMaybe<Array<PermissionsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PermissionsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PermissionsWhereUniqueInput>>;
  set?: InputMaybe<Array<PermissionsWhereUniqueInput>>;
  update?: InputMaybe<Array<PermissionsUpdateWithWhereUniqueWithoutModulesInput>>;
  updateMany?: InputMaybe<Array<PermissionsUpdateManyWithWhereWithoutModulesInput>>;
  upsert?: InputMaybe<Array<PermissionsUpsertWithWhereUniqueWithoutModulesInput>>;
};

export type PermissionsUpdateOneRequiredWithoutRole_PermissionsNestedInput = {
  connect?: InputMaybe<PermissionsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PermissionsCreateOrConnectWithoutRole_PermissionsInput>;
  create?: InputMaybe<PermissionsCreateWithoutRole_PermissionsInput>;
  update?: InputMaybe<PermissionsUpdateToOneWithWhereWithoutRole_PermissionsInput>;
  upsert?: InputMaybe<PermissionsUpsertWithoutRole_PermissionsInput>;
};

export type PermissionsUpdateOneRequiredWithoutUser_PermissionsNestedInput = {
  connect?: InputMaybe<PermissionsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PermissionsCreateOrConnectWithoutUser_PermissionsInput>;
  create?: InputMaybe<PermissionsCreateWithoutUser_PermissionsInput>;
  update?: InputMaybe<PermissionsUpdateToOneWithWhereWithoutUser_PermissionsInput>;
  upsert?: InputMaybe<PermissionsUpsertWithoutUser_PermissionsInput>;
};

export type PermissionsUpdateToOneWithWhereWithoutRole_PermissionsInput = {
  data: PermissionsUpdateWithoutRole_PermissionsInput;
  where?: InputMaybe<PermissionsWhereInput>;
};

export type PermissionsUpdateToOneWithWhereWithoutUser_PermissionsInput = {
  data: PermissionsUpdateWithoutUser_PermissionsInput;
  where?: InputMaybe<PermissionsWhereInput>;
};

export type PermissionsUpdateWithWhereUniqueWithoutModulesInput = {
  data: PermissionsUpdateWithoutModulesInput;
  where: PermissionsWhereUniqueInput;
};

export type PermissionsUpdateWithoutModulesInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  is_enabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  role_permissions?: InputMaybe<Role_PermissionsUpdateManyWithoutPermissionsNestedInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user_permissions?: InputMaybe<User_PermissionsUpdateManyWithoutPermissionsNestedInput>;
};

export type PermissionsUpdateWithoutRole_PermissionsInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  is_enabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  modules?: InputMaybe<ModulesUpdateOneRequiredWithoutPermissionsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user_permissions?: InputMaybe<User_PermissionsUpdateManyWithoutPermissionsNestedInput>;
};

export type PermissionsUpdateWithoutUser_PermissionsInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  is_enabled?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  modules?: InputMaybe<ModulesUpdateOneRequiredWithoutPermissionsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  role_permissions?: InputMaybe<Role_PermissionsUpdateManyWithoutPermissionsNestedInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type PermissionsUpsertWithWhereUniqueWithoutModulesInput = {
  create: PermissionsCreateWithoutModulesInput;
  update: PermissionsUpdateWithoutModulesInput;
  where: PermissionsWhereUniqueInput;
};

export type PermissionsUpsertWithoutRole_PermissionsInput = {
  create: PermissionsCreateWithoutRole_PermissionsInput;
  update: PermissionsUpdateWithoutRole_PermissionsInput;
  where?: InputMaybe<PermissionsWhereInput>;
};

export type PermissionsUpsertWithoutUser_PermissionsInput = {
  create: PermissionsCreateWithoutUser_PermissionsInput;
  update: PermissionsUpdateWithoutUser_PermissionsInput;
  where?: InputMaybe<PermissionsWhereInput>;
};

export type PermissionsWhereInput = {
  AND?: InputMaybe<Array<PermissionsWhereInput>>;
  NOT?: InputMaybe<Array<PermissionsWhereInput>>;
  OR?: InputMaybe<Array<PermissionsWhereInput>>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  is_enabled?: InputMaybe<BoolNullableFilter>;
  module_id?: InputMaybe<IntFilter>;
  modules?: InputMaybe<ModulesRelationFilter>;
  name?: InputMaybe<StringFilter>;
  role_permissions?: InputMaybe<Role_PermissionsListRelationFilter>;
  updated_at?: InputMaybe<DateTimeNullableFilter>;
  user_permissions?: InputMaybe<User_PermissionsListRelationFilter>;
};

export type PermissionsWhereUniqueInput = {
  AND?: InputMaybe<Array<PermissionsWhereInput>>;
  NOT?: InputMaybe<Array<PermissionsWhereInput>>;
  OR?: InputMaybe<Array<PermissionsWhereInput>>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_enabled?: InputMaybe<BoolNullableFilter>;
  module_id?: InputMaybe<IntFilter>;
  module_id_name?: InputMaybe<PermissionsModule_IdNameCompoundUniqueInput>;
  modules?: InputMaybe<ModulesRelationFilter>;
  name?: InputMaybe<StringFilter>;
  role_permissions?: InputMaybe<Role_PermissionsListRelationFilter>;
  updated_at?: InputMaybe<DateTimeNullableFilter>;
  user_permissions?: InputMaybe<User_PermissionsListRelationFilter>;
};

export enum Providers {
  Apple = 'Apple',
  Facebook = 'Facebook',
  Google = 'Google',
  LinkedIn = 'LinkedIn'
}

export type Role_Permissions = {
  __typename?: 'role_permissions';
  created_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  permission_id: Scalars['Int']['output'];
  permissions: Permissions;
  role_id: Scalars['Int']['output'];
  roles: Roles;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
};

export type Role_PermissionsCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  permission_id: Scalars['Int']['input'];
  role_id: Scalars['Int']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Role_PermissionsCreateManyPermissionsInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  role_id: Scalars['Int']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Role_PermissionsCreateManyPermissionsInputEnvelope = {
  data: Array<Role_PermissionsCreateManyPermissionsInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Role_PermissionsCreateManyRolesInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  permission_id: Scalars['Int']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Role_PermissionsCreateManyRolesInputEnvelope = {
  data: Array<Role_PermissionsCreateManyRolesInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Role_PermissionsCreateNestedManyWithoutPermissionsInput = {
  connect?: InputMaybe<Array<Role_PermissionsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Role_PermissionsCreateOrConnectWithoutPermissionsInput>>;
  create?: InputMaybe<Array<Role_PermissionsCreateWithoutPermissionsInput>>;
  createMany?: InputMaybe<Role_PermissionsCreateManyPermissionsInputEnvelope>;
};

export type Role_PermissionsCreateNestedManyWithoutRolesInput = {
  connect?: InputMaybe<Array<Role_PermissionsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Role_PermissionsCreateOrConnectWithoutRolesInput>>;
  create?: InputMaybe<Array<Role_PermissionsCreateWithoutRolesInput>>;
  createMany?: InputMaybe<Role_PermissionsCreateManyRolesInputEnvelope>;
};

export type Role_PermissionsCreateOrConnectWithoutPermissionsInput = {
  create: Role_PermissionsCreateWithoutPermissionsInput;
  where: Role_PermissionsWhereUniqueInput;
};

export type Role_PermissionsCreateOrConnectWithoutRolesInput = {
  create: Role_PermissionsCreateWithoutRolesInput;
  where: Role_PermissionsWhereUniqueInput;
};

export type Role_PermissionsCreateWithoutPermissionsInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  roles: RolesCreateNestedOneWithoutRole_PermissionsInput;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Role_PermissionsCreateWithoutRolesInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  permissions: PermissionsCreateNestedOneWithoutRole_PermissionsInput;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Role_PermissionsIdRole_IdPermission_IdCompoundUniqueInput = {
  id: Scalars['Int']['input'];
  permission_id: Scalars['Int']['input'];
  role_id: Scalars['Int']['input'];
};

export type Role_PermissionsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Role_PermissionsScalarWhereInput = {
  AND?: InputMaybe<Array<Role_PermissionsScalarWhereInput>>;
  NOT?: InputMaybe<Array<Role_PermissionsScalarWhereInput>>;
  OR?: InputMaybe<Array<Role_PermissionsScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  permission_id?: InputMaybe<IntFilter>;
  role_id?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeNullableFilter>;
};

export type Role_PermissionsUpdateManyMutationInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type Role_PermissionsUpdateManyWithWhereWithoutPermissionsInput = {
  data: Role_PermissionsUpdateManyMutationInput;
  where: Role_PermissionsScalarWhereInput;
};

export type Role_PermissionsUpdateManyWithWhereWithoutRolesInput = {
  data: Role_PermissionsUpdateManyMutationInput;
  where: Role_PermissionsScalarWhereInput;
};

export type Role_PermissionsUpdateManyWithoutPermissionsNestedInput = {
  connect?: InputMaybe<Array<Role_PermissionsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Role_PermissionsCreateOrConnectWithoutPermissionsInput>>;
  create?: InputMaybe<Array<Role_PermissionsCreateWithoutPermissionsInput>>;
  createMany?: InputMaybe<Role_PermissionsCreateManyPermissionsInputEnvelope>;
  delete?: InputMaybe<Array<Role_PermissionsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Role_PermissionsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Role_PermissionsWhereUniqueInput>>;
  set?: InputMaybe<Array<Role_PermissionsWhereUniqueInput>>;
  update?: InputMaybe<Array<Role_PermissionsUpdateWithWhereUniqueWithoutPermissionsInput>>;
  updateMany?: InputMaybe<Array<Role_PermissionsUpdateManyWithWhereWithoutPermissionsInput>>;
  upsert?: InputMaybe<Array<Role_PermissionsUpsertWithWhereUniqueWithoutPermissionsInput>>;
};

export type Role_PermissionsUpdateManyWithoutRolesNestedInput = {
  connect?: InputMaybe<Array<Role_PermissionsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Role_PermissionsCreateOrConnectWithoutRolesInput>>;
  create?: InputMaybe<Array<Role_PermissionsCreateWithoutRolesInput>>;
  createMany?: InputMaybe<Role_PermissionsCreateManyRolesInputEnvelope>;
  delete?: InputMaybe<Array<Role_PermissionsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Role_PermissionsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Role_PermissionsWhereUniqueInput>>;
  set?: InputMaybe<Array<Role_PermissionsWhereUniqueInput>>;
  update?: InputMaybe<Array<Role_PermissionsUpdateWithWhereUniqueWithoutRolesInput>>;
  updateMany?: InputMaybe<Array<Role_PermissionsUpdateManyWithWhereWithoutRolesInput>>;
  upsert?: InputMaybe<Array<Role_PermissionsUpsertWithWhereUniqueWithoutRolesInput>>;
};

export type Role_PermissionsUpdateWithWhereUniqueWithoutPermissionsInput = {
  data: Role_PermissionsUpdateWithoutPermissionsInput;
  where: Role_PermissionsWhereUniqueInput;
};

export type Role_PermissionsUpdateWithWhereUniqueWithoutRolesInput = {
  data: Role_PermissionsUpdateWithoutRolesInput;
  where: Role_PermissionsWhereUniqueInput;
};

export type Role_PermissionsUpdateWithoutPermissionsInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  roles?: InputMaybe<RolesUpdateOneRequiredWithoutRole_PermissionsNestedInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type Role_PermissionsUpdateWithoutRolesInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  permissions?: InputMaybe<PermissionsUpdateOneRequiredWithoutRole_PermissionsNestedInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type Role_PermissionsUpsertWithWhereUniqueWithoutPermissionsInput = {
  create: Role_PermissionsCreateWithoutPermissionsInput;
  update: Role_PermissionsUpdateWithoutPermissionsInput;
  where: Role_PermissionsWhereUniqueInput;
};

export type Role_PermissionsUpsertWithWhereUniqueWithoutRolesInput = {
  create: Role_PermissionsCreateWithoutRolesInput;
  update: Role_PermissionsUpdateWithoutRolesInput;
  where: Role_PermissionsWhereUniqueInput;
};

export type Role_PermissionsWhereInput = {
  AND?: InputMaybe<Array<Role_PermissionsWhereInput>>;
  NOT?: InputMaybe<Array<Role_PermissionsWhereInput>>;
  OR?: InputMaybe<Array<Role_PermissionsWhereInput>>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  permission_id?: InputMaybe<IntFilter>;
  permissions?: InputMaybe<PermissionsRelationFilter>;
  role_id?: InputMaybe<IntFilter>;
  roles?: InputMaybe<RolesRelationFilter>;
  updated_at?: InputMaybe<DateTimeNullableFilter>;
};

export type Role_PermissionsWhereUniqueInput = {
  AND?: InputMaybe<Array<Role_PermissionsWhereInput>>;
  NOT?: InputMaybe<Array<Role_PermissionsWhereInput>>;
  OR?: InputMaybe<Array<Role_PermissionsWhereInput>>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  id_role_id_permission_id?: InputMaybe<Role_PermissionsIdRole_IdPermission_IdCompoundUniqueInput>;
  permission_id?: InputMaybe<IntFilter>;
  permissions?: InputMaybe<PermissionsRelationFilter>;
  role_id?: InputMaybe<IntFilter>;
  roles?: InputMaybe<RolesRelationFilter>;
  updated_at?: InputMaybe<DateTimeNullableFilter>;
};

export type Roles = {
  __typename?: 'roles';
  _count: RolesCount;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  role_permissions?: Maybe<Array<Role_Permissions>>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_roles?: Maybe<Array<User_Roles>>;
};

export type RolesCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  role_permissions?: InputMaybe<Role_PermissionsCreateNestedManyWithoutRolesInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_roles?: InputMaybe<User_RolesCreateNestedManyWithoutRolesInput>;
};

export type RolesCreateManyInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RolesCreateNestedOneWithoutRole_PermissionsInput = {
  connect?: InputMaybe<RolesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RolesCreateOrConnectWithoutRole_PermissionsInput>;
  create?: InputMaybe<RolesCreateWithoutRole_PermissionsInput>;
};

export type RolesCreateNestedOneWithoutUser_RolesInput = {
  connect?: InputMaybe<RolesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RolesCreateOrConnectWithoutUser_RolesInput>;
  create?: InputMaybe<RolesCreateWithoutUser_RolesInput>;
};

export type RolesCreateOrConnectWithoutRole_PermissionsInput = {
  create: RolesCreateWithoutRole_PermissionsInput;
  where: RolesWhereUniqueInput;
};

export type RolesCreateOrConnectWithoutUser_RolesInput = {
  create: RolesCreateWithoutUser_RolesInput;
  where: RolesWhereUniqueInput;
};

export type RolesCreateWithoutRole_PermissionsInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_roles?: InputMaybe<User_RolesCreateNestedManyWithoutRolesInput>;
};

export type RolesCreateWithoutUser_RolesInput = {
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  role_permissions?: InputMaybe<Role_PermissionsCreateNestedManyWithoutRolesInput>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RolesOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  is_active?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  role_permissions?: InputMaybe<Role_PermissionsOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrderInput>;
  user_roles?: InputMaybe<User_RolesOrderByRelationAggregateInput>;
};

export type RolesUpdateInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  is_active?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  role_permissions?: InputMaybe<Role_PermissionsUpdateManyWithoutRolesNestedInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user_roles?: InputMaybe<User_RolesUpdateManyWithoutRolesNestedInput>;
};

export type RolesUpdateManyMutationInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  is_active?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type RolesUpdateOneRequiredWithoutRole_PermissionsNestedInput = {
  connect?: InputMaybe<RolesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RolesCreateOrConnectWithoutRole_PermissionsInput>;
  create?: InputMaybe<RolesCreateWithoutRole_PermissionsInput>;
  update?: InputMaybe<RolesUpdateToOneWithWhereWithoutRole_PermissionsInput>;
  upsert?: InputMaybe<RolesUpsertWithoutRole_PermissionsInput>;
};

export type RolesUpdateOneRequiredWithoutUser_RolesNestedInput = {
  connect?: InputMaybe<RolesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RolesCreateOrConnectWithoutUser_RolesInput>;
  create?: InputMaybe<RolesCreateWithoutUser_RolesInput>;
  update?: InputMaybe<RolesUpdateToOneWithWhereWithoutUser_RolesInput>;
  upsert?: InputMaybe<RolesUpsertWithoutUser_RolesInput>;
};

export type RolesUpdateToOneWithWhereWithoutRole_PermissionsInput = {
  data: RolesUpdateWithoutRole_PermissionsInput;
  where?: InputMaybe<RolesWhereInput>;
};

export type RolesUpdateToOneWithWhereWithoutUser_RolesInput = {
  data: RolesUpdateWithoutUser_RolesInput;
  where?: InputMaybe<RolesWhereInput>;
};

export type RolesUpdateWithoutRole_PermissionsInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  is_active?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user_roles?: InputMaybe<User_RolesUpdateManyWithoutRolesNestedInput>;
};

export type RolesUpdateWithoutUser_RolesInput = {
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  is_active?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  role_permissions?: InputMaybe<Role_PermissionsUpdateManyWithoutRolesNestedInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type RolesUpsertWithoutRole_PermissionsInput = {
  create: RolesCreateWithoutRole_PermissionsInput;
  update: RolesUpdateWithoutRole_PermissionsInput;
  where?: InputMaybe<RolesWhereInput>;
};

export type RolesUpsertWithoutUser_RolesInput = {
  create: RolesCreateWithoutUser_RolesInput;
  update: RolesUpdateWithoutUser_RolesInput;
  where?: InputMaybe<RolesWhereInput>;
};

export type RolesWhereInput = {
  AND?: InputMaybe<Array<RolesWhereInput>>;
  NOT?: InputMaybe<Array<RolesWhereInput>>;
  OR?: InputMaybe<Array<RolesWhereInput>>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  is_active?: InputMaybe<BoolNullableFilter>;
  name?: InputMaybe<StringFilter>;
  role_permissions?: InputMaybe<Role_PermissionsListRelationFilter>;
  updated_at?: InputMaybe<DateTimeNullableFilter>;
  user_roles?: InputMaybe<User_RolesListRelationFilter>;
};

export type RolesWhereUniqueInput = {
  AND?: InputMaybe<Array<RolesWhereInput>>;
  NOT?: InputMaybe<Array<RolesWhereInput>>;
  OR?: InputMaybe<Array<RolesWhereInput>>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_active?: InputMaybe<BoolNullableFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  role_permissions?: InputMaybe<Role_PermissionsListRelationFilter>;
  updated_at?: InputMaybe<DateTimeNullableFilter>;
  user_roles?: InputMaybe<User_RolesListRelationFilter>;
};

export type User_Otps = {
  __typename?: 'user_otps';
  count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  expires_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  is_used?: Maybe<Scalars['Boolean']['output']>;
  otp_value: Scalars['String']['output'];
  purpose?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['String']['output'];
  users: Users;
};

export type User_OtpsCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<User_OtpsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<User_OtpsCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<User_OtpsCreateWithoutUsersInput>;
};

export type User_OtpsCreateOrConnectWithoutUsersInput = {
  create: User_OtpsCreateWithoutUsersInput;
  where: User_OtpsWhereUniqueInput;
};

export type User_OtpsCreateWithoutUsersInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  expires_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_used?: InputMaybe<Scalars['Boolean']['input']>;
  otp_value: Scalars['String']['input'];
  purpose?: InputMaybe<Scalars['String']['input']>;
};

export type User_OtpsOrderByWithRelationInput = {
  count?: InputMaybe<SortOrderInput>;
  created_at?: InputMaybe<SortOrderInput>;
  expires_at?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  is_used?: InputMaybe<SortOrderInput>;
  otp_value?: InputMaybe<SortOrder>;
  purpose?: InputMaybe<SortOrderInput>;
  user_id?: InputMaybe<SortOrder>;
  users?: InputMaybe<UsersOrderByWithRelationInput>;
};

export type User_OtpsUpdateOneWithoutUsersNestedInput = {
  connect?: InputMaybe<User_OtpsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<User_OtpsCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<User_OtpsCreateWithoutUsersInput>;
  delete?: InputMaybe<User_OtpsWhereInput>;
  disconnect?: InputMaybe<User_OtpsWhereInput>;
  update?: InputMaybe<User_OtpsUpdateToOneWithWhereWithoutUsersInput>;
  upsert?: InputMaybe<User_OtpsUpsertWithoutUsersInput>;
};

export type User_OtpsUpdateToOneWithWhereWithoutUsersInput = {
  data: User_OtpsUpdateWithoutUsersInput;
  where?: InputMaybe<User_OtpsWhereInput>;
};

export type User_OtpsUpdateWithoutUsersInput = {
  count?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_used?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  otp_value?: InputMaybe<StringFieldUpdateOperationsInput>;
  purpose?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type User_OtpsUpsertWithoutUsersInput = {
  create: User_OtpsCreateWithoutUsersInput;
  update: User_OtpsUpdateWithoutUsersInput;
  where?: InputMaybe<User_OtpsWhereInput>;
};

export type User_OtpsWhereInput = {
  AND?: InputMaybe<Array<User_OtpsWhereInput>>;
  NOT?: InputMaybe<Array<User_OtpsWhereInput>>;
  OR?: InputMaybe<Array<User_OtpsWhereInput>>;
  count?: InputMaybe<IntNullableFilter>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  expires_at?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<UuidFilter>;
  is_used?: InputMaybe<BoolNullableFilter>;
  otp_value?: InputMaybe<StringFilter>;
  purpose?: InputMaybe<StringNullableFilter>;
  user_id?: InputMaybe<UuidFilter>;
  users?: InputMaybe<UsersRelationFilter>;
};

export type User_OtpsWhereUniqueInput = {
  AND?: InputMaybe<Array<User_OtpsWhereInput>>;
  NOT?: InputMaybe<Array<User_OtpsWhereInput>>;
  OR?: InputMaybe<Array<User_OtpsWhereInput>>;
  count?: InputMaybe<IntNullableFilter>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  expires_at?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_used?: InputMaybe<BoolNullableFilter>;
  otp_value?: InputMaybe<StringFilter>;
  purpose?: InputMaybe<StringNullableFilter>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<UsersRelationFilter>;
};

export type User_Permissions = {
  __typename?: 'user_permissions';
  granted: Scalars['Boolean']['output'];
  granted_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  permission_id: Scalars['Int']['output'];
  permissions: Permissions;
  revoked_at?: Maybe<Scalars['DateTime']['output']>;
  user_id: Scalars['String']['output'];
  users: Users;
};

export type User_PermissionsCreateManyInput = {
  granted?: InputMaybe<Scalars['Boolean']['input']>;
  granted_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  permission_id: Scalars['Int']['input'];
  revoked_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_id: Scalars['String']['input'];
};

export type User_PermissionsCreateManyPermissionsInput = {
  granted?: InputMaybe<Scalars['Boolean']['input']>;
  granted_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  revoked_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_id: Scalars['String']['input'];
};

export type User_PermissionsCreateManyPermissionsInputEnvelope = {
  data: Array<User_PermissionsCreateManyPermissionsInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_PermissionsCreateManyUsersInput = {
  granted?: InputMaybe<Scalars['Boolean']['input']>;
  granted_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  permission_id: Scalars['Int']['input'];
  revoked_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_PermissionsCreateManyUsersInputEnvelope = {
  data: Array<User_PermissionsCreateManyUsersInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_PermissionsCreateNestedManyWithoutPermissionsInput = {
  connect?: InputMaybe<Array<User_PermissionsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_PermissionsCreateOrConnectWithoutPermissionsInput>>;
  create?: InputMaybe<Array<User_PermissionsCreateWithoutPermissionsInput>>;
  createMany?: InputMaybe<User_PermissionsCreateManyPermissionsInputEnvelope>;
};

export type User_PermissionsCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<User_PermissionsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_PermissionsCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<User_PermissionsCreateWithoutUsersInput>>;
  createMany?: InputMaybe<User_PermissionsCreateManyUsersInputEnvelope>;
};

export type User_PermissionsCreateOrConnectWithoutPermissionsInput = {
  create: User_PermissionsCreateWithoutPermissionsInput;
  where: User_PermissionsWhereUniqueInput;
};

export type User_PermissionsCreateOrConnectWithoutUsersInput = {
  create: User_PermissionsCreateWithoutUsersInput;
  where: User_PermissionsWhereUniqueInput;
};

export type User_PermissionsCreateWithoutPermissionsInput = {
  granted?: InputMaybe<Scalars['Boolean']['input']>;
  granted_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  revoked_at?: InputMaybe<Scalars['DateTime']['input']>;
  users: UsersCreateNestedOneWithoutUser_PermissionsInput;
};

export type User_PermissionsCreateWithoutUsersInput = {
  granted?: InputMaybe<Scalars['Boolean']['input']>;
  granted_at?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  permissions: PermissionsCreateNestedOneWithoutUser_PermissionsInput;
  revoked_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_PermissionsIdUser_IdPermission_IdCompoundUniqueInput = {
  id: Scalars['Int']['input'];
  permission_id: Scalars['Int']['input'];
  user_id: Scalars['String']['input'];
};

export type User_PermissionsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type User_PermissionsScalarWhereInput = {
  AND?: InputMaybe<Array<User_PermissionsScalarWhereInput>>;
  NOT?: InputMaybe<Array<User_PermissionsScalarWhereInput>>;
  OR?: InputMaybe<Array<User_PermissionsScalarWhereInput>>;
  granted?: InputMaybe<BoolFilter>;
  granted_at?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  permission_id?: InputMaybe<IntFilter>;
  revoked_at?: InputMaybe<DateTimeNullableFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type User_PermissionsUpdateManyMutationInput = {
  granted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  granted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  revoked_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type User_PermissionsUpdateManyWithWhereWithoutPermissionsInput = {
  data: User_PermissionsUpdateManyMutationInput;
  where: User_PermissionsScalarWhereInput;
};

export type User_PermissionsUpdateManyWithWhereWithoutUsersInput = {
  data: User_PermissionsUpdateManyMutationInput;
  where: User_PermissionsScalarWhereInput;
};

export type User_PermissionsUpdateManyWithoutPermissionsNestedInput = {
  connect?: InputMaybe<Array<User_PermissionsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_PermissionsCreateOrConnectWithoutPermissionsInput>>;
  create?: InputMaybe<Array<User_PermissionsCreateWithoutPermissionsInput>>;
  createMany?: InputMaybe<User_PermissionsCreateManyPermissionsInputEnvelope>;
  delete?: InputMaybe<Array<User_PermissionsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<User_PermissionsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<User_PermissionsWhereUniqueInput>>;
  set?: InputMaybe<Array<User_PermissionsWhereUniqueInput>>;
  update?: InputMaybe<Array<User_PermissionsUpdateWithWhereUniqueWithoutPermissionsInput>>;
  updateMany?: InputMaybe<Array<User_PermissionsUpdateManyWithWhereWithoutPermissionsInput>>;
  upsert?: InputMaybe<Array<User_PermissionsUpsertWithWhereUniqueWithoutPermissionsInput>>;
};

export type User_PermissionsUpdateManyWithoutUsersNestedInput = {
  connect?: InputMaybe<Array<User_PermissionsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_PermissionsCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<User_PermissionsCreateWithoutUsersInput>>;
  createMany?: InputMaybe<User_PermissionsCreateManyUsersInputEnvelope>;
  delete?: InputMaybe<Array<User_PermissionsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<User_PermissionsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<User_PermissionsWhereUniqueInput>>;
  set?: InputMaybe<Array<User_PermissionsWhereUniqueInput>>;
  update?: InputMaybe<Array<User_PermissionsUpdateWithWhereUniqueWithoutUsersInput>>;
  updateMany?: InputMaybe<Array<User_PermissionsUpdateManyWithWhereWithoutUsersInput>>;
  upsert?: InputMaybe<Array<User_PermissionsUpsertWithWhereUniqueWithoutUsersInput>>;
};

export type User_PermissionsUpdateWithWhereUniqueWithoutPermissionsInput = {
  data: User_PermissionsUpdateWithoutPermissionsInput;
  where: User_PermissionsWhereUniqueInput;
};

export type User_PermissionsUpdateWithWhereUniqueWithoutUsersInput = {
  data: User_PermissionsUpdateWithoutUsersInput;
  where: User_PermissionsWhereUniqueInput;
};

export type User_PermissionsUpdateWithoutPermissionsInput = {
  granted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  granted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  revoked_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UsersUpdateOneRequiredWithoutUser_PermissionsNestedInput>;
};

export type User_PermissionsUpdateWithoutUsersInput = {
  granted?: InputMaybe<BoolFieldUpdateOperationsInput>;
  granted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  permissions?: InputMaybe<PermissionsUpdateOneRequiredWithoutUser_PermissionsNestedInput>;
  revoked_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type User_PermissionsUpsertWithWhereUniqueWithoutPermissionsInput = {
  create: User_PermissionsCreateWithoutPermissionsInput;
  update: User_PermissionsUpdateWithoutPermissionsInput;
  where: User_PermissionsWhereUniqueInput;
};

export type User_PermissionsUpsertWithWhereUniqueWithoutUsersInput = {
  create: User_PermissionsCreateWithoutUsersInput;
  update: User_PermissionsUpdateWithoutUsersInput;
  where: User_PermissionsWhereUniqueInput;
};

export type User_PermissionsWhereInput = {
  AND?: InputMaybe<Array<User_PermissionsWhereInput>>;
  NOT?: InputMaybe<Array<User_PermissionsWhereInput>>;
  OR?: InputMaybe<Array<User_PermissionsWhereInput>>;
  granted?: InputMaybe<BoolFilter>;
  granted_at?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  permission_id?: InputMaybe<IntFilter>;
  permissions?: InputMaybe<PermissionsRelationFilter>;
  revoked_at?: InputMaybe<DateTimeNullableFilter>;
  user_id?: InputMaybe<UuidFilter>;
  users?: InputMaybe<UsersRelationFilter>;
};

export type User_PermissionsWhereUniqueInput = {
  AND?: InputMaybe<Array<User_PermissionsWhereInput>>;
  NOT?: InputMaybe<Array<User_PermissionsWhereInput>>;
  OR?: InputMaybe<Array<User_PermissionsWhereInput>>;
  granted?: InputMaybe<BoolFilter>;
  granted_at?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  id_user_id_permission_id?: InputMaybe<User_PermissionsIdUser_IdPermission_IdCompoundUniqueInput>;
  permission_id?: InputMaybe<IntFilter>;
  permissions?: InputMaybe<PermissionsRelationFilter>;
  revoked_at?: InputMaybe<DateTimeNullableFilter>;
  user_id?: InputMaybe<UuidFilter>;
  users?: InputMaybe<UsersRelationFilter>;
};

export type User_Roles = {
  __typename?: 'user_roles';
  id: Scalars['Int']['output'];
  role_id: Scalars['Int']['output'];
  roles: Roles;
  user_id: Scalars['String']['output'];
  users: Users;
};

export type User_RolesCreateManyInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  role_id: Scalars['Int']['input'];
  user_id: Scalars['String']['input'];
};

export type User_RolesCreateManyRolesInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  user_id: Scalars['String']['input'];
};

export type User_RolesCreateManyRolesInputEnvelope = {
  data: Array<User_RolesCreateManyRolesInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_RolesCreateManyUsersInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  role_id: Scalars['Int']['input'];
};

export type User_RolesCreateManyUsersInputEnvelope = {
  data: Array<User_RolesCreateManyUsersInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_RolesCreateNestedManyWithoutRolesInput = {
  connect?: InputMaybe<Array<User_RolesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_RolesCreateOrConnectWithoutRolesInput>>;
  create?: InputMaybe<Array<User_RolesCreateWithoutRolesInput>>;
  createMany?: InputMaybe<User_RolesCreateManyRolesInputEnvelope>;
};

export type User_RolesCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<User_RolesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_RolesCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<User_RolesCreateWithoutUsersInput>>;
  createMany?: InputMaybe<User_RolesCreateManyUsersInputEnvelope>;
};

export type User_RolesCreateOrConnectWithoutRolesInput = {
  create: User_RolesCreateWithoutRolesInput;
  where: User_RolesWhereUniqueInput;
};

export type User_RolesCreateOrConnectWithoutUsersInput = {
  create: User_RolesCreateWithoutUsersInput;
  where: User_RolesWhereUniqueInput;
};

export type User_RolesCreateWithoutRolesInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  users: UsersCreateNestedOneWithoutUser_RolesInput;
};

export type User_RolesCreateWithoutUsersInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  roles: RolesCreateNestedOneWithoutUser_RolesInput;
};

export type User_RolesIdUser_IdRole_IdCompoundUniqueInput = {
  id: Scalars['Int']['input'];
  role_id: Scalars['Int']['input'];
  user_id: Scalars['String']['input'];
};

export type User_RolesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type User_RolesScalarWhereInput = {
  AND?: InputMaybe<Array<User_RolesScalarWhereInput>>;
  NOT?: InputMaybe<Array<User_RolesScalarWhereInput>>;
  OR?: InputMaybe<Array<User_RolesScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  role_id?: InputMaybe<IntFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type User_RolesUpdateManyMutationInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type User_RolesUpdateManyWithWhereWithoutRolesInput = {
  data: User_RolesUpdateManyMutationInput;
  where: User_RolesScalarWhereInput;
};

export type User_RolesUpdateManyWithWhereWithoutUsersInput = {
  data: User_RolesUpdateManyMutationInput;
  where: User_RolesScalarWhereInput;
};

export type User_RolesUpdateManyWithoutRolesNestedInput = {
  connect?: InputMaybe<Array<User_RolesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_RolesCreateOrConnectWithoutRolesInput>>;
  create?: InputMaybe<Array<User_RolesCreateWithoutRolesInput>>;
  createMany?: InputMaybe<User_RolesCreateManyRolesInputEnvelope>;
  delete?: InputMaybe<Array<User_RolesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<User_RolesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<User_RolesWhereUniqueInput>>;
  set?: InputMaybe<Array<User_RolesWhereUniqueInput>>;
  update?: InputMaybe<Array<User_RolesUpdateWithWhereUniqueWithoutRolesInput>>;
  updateMany?: InputMaybe<Array<User_RolesUpdateManyWithWhereWithoutRolesInput>>;
  upsert?: InputMaybe<Array<User_RolesUpsertWithWhereUniqueWithoutRolesInput>>;
};

export type User_RolesUpdateManyWithoutUsersNestedInput = {
  connect?: InputMaybe<Array<User_RolesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_RolesCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<User_RolesCreateWithoutUsersInput>>;
  createMany?: InputMaybe<User_RolesCreateManyUsersInputEnvelope>;
  delete?: InputMaybe<Array<User_RolesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<User_RolesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<User_RolesWhereUniqueInput>>;
  set?: InputMaybe<Array<User_RolesWhereUniqueInput>>;
  update?: InputMaybe<Array<User_RolesUpdateWithWhereUniqueWithoutUsersInput>>;
  updateMany?: InputMaybe<Array<User_RolesUpdateManyWithWhereWithoutUsersInput>>;
  upsert?: InputMaybe<Array<User_RolesUpsertWithWhereUniqueWithoutUsersInput>>;
};

export type User_RolesUpdateWithWhereUniqueWithoutRolesInput = {
  data: User_RolesUpdateWithoutRolesInput;
  where: User_RolesWhereUniqueInput;
};

export type User_RolesUpdateWithWhereUniqueWithoutUsersInput = {
  data: User_RolesUpdateWithoutUsersInput;
  where: User_RolesWhereUniqueInput;
};

export type User_RolesUpdateWithoutRolesInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  users?: InputMaybe<UsersUpdateOneRequiredWithoutUser_RolesNestedInput>;
};

export type User_RolesUpdateWithoutUsersInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  roles?: InputMaybe<RolesUpdateOneRequiredWithoutUser_RolesNestedInput>;
};

export type User_RolesUpsertWithWhereUniqueWithoutRolesInput = {
  create: User_RolesCreateWithoutRolesInput;
  update: User_RolesUpdateWithoutRolesInput;
  where: User_RolesWhereUniqueInput;
};

export type User_RolesUpsertWithWhereUniqueWithoutUsersInput = {
  create: User_RolesCreateWithoutUsersInput;
  update: User_RolesUpdateWithoutUsersInput;
  where: User_RolesWhereUniqueInput;
};

export type User_RolesWhereInput = {
  AND?: InputMaybe<Array<User_RolesWhereInput>>;
  NOT?: InputMaybe<Array<User_RolesWhereInput>>;
  OR?: InputMaybe<Array<User_RolesWhereInput>>;
  id?: InputMaybe<IntFilter>;
  role_id?: InputMaybe<IntFilter>;
  roles?: InputMaybe<RolesRelationFilter>;
  user_id?: InputMaybe<UuidFilter>;
  users?: InputMaybe<UsersRelationFilter>;
};

export type User_RolesWhereUniqueInput = {
  AND?: InputMaybe<Array<User_RolesWhereInput>>;
  NOT?: InputMaybe<Array<User_RolesWhereInput>>;
  OR?: InputMaybe<Array<User_RolesWhereInput>>;
  id?: InputMaybe<IntFilter>;
  id_user_id_role_id?: InputMaybe<User_RolesIdUser_IdRole_IdCompoundUniqueInput>;
  role_id?: InputMaybe<IntFilter>;
  roles?: InputMaybe<RolesRelationFilter>;
  user_id?: InputMaybe<UuidFilter>;
  users?: InputMaybe<UsersRelationFilter>;
};

export type Users = {
  __typename?: 'users';
  _count: UsersCount;
  avatar?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verified?: Maybe<Scalars['Boolean']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  last_login?: Maybe<Scalars['DateTime']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  oauth_identities?: Maybe<Array<Oauth_Identities>>;
  password?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  reset_token?: Maybe<Scalars['String']['output']>;
  reset_token_expiry?: Maybe<Scalars['DateTime']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  user_otps?: Maybe<User_Otps>;
  user_permissions?: Maybe<Array<User_Permissions>>;
  user_roles?: Maybe<Array<User_Roles>>;
};

export type UsersCreateInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<Scalars['Boolean']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  last_login?: InputMaybe<Scalars['DateTime']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  oauth_identities?: InputMaybe<Oauth_IdentitiesCreateNestedManyWithoutUsersInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  reset_token?: InputMaybe<Scalars['String']['input']>;
  reset_token_expiry?: InputMaybe<Scalars['DateTime']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_otps?: InputMaybe<User_OtpsCreateNestedOneWithoutUsersInput>;
  user_permissions?: InputMaybe<User_PermissionsCreateNestedManyWithoutUsersInput>;
  user_roles?: InputMaybe<User_RolesCreateNestedManyWithoutUsersInput>;
};

export type UsersCreateManyInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<Scalars['Boolean']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  last_login?: InputMaybe<Scalars['DateTime']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  reset_token?: InputMaybe<Scalars['String']['input']>;
  reset_token_expiry?: InputMaybe<Scalars['DateTime']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UsersCreateNestedOneWithoutUser_PermissionsInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutUser_PermissionsInput>;
  create?: InputMaybe<UsersCreateWithoutUser_PermissionsInput>;
};

export type UsersCreateNestedOneWithoutUser_RolesInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutUser_RolesInput>;
  create?: InputMaybe<UsersCreateWithoutUser_RolesInput>;
};

export type UsersCreateOrConnectWithoutUser_PermissionsInput = {
  create: UsersCreateWithoutUser_PermissionsInput;
  where: UsersWhereUniqueInput;
};

export type UsersCreateOrConnectWithoutUser_RolesInput = {
  create: UsersCreateWithoutUser_RolesInput;
  where: UsersWhereUniqueInput;
};

export type UsersCreateWithoutUser_PermissionsInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<Scalars['Boolean']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  last_login?: InputMaybe<Scalars['DateTime']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  oauth_identities?: InputMaybe<Oauth_IdentitiesCreateNestedManyWithoutUsersInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  reset_token?: InputMaybe<Scalars['String']['input']>;
  reset_token_expiry?: InputMaybe<Scalars['DateTime']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_otps?: InputMaybe<User_OtpsCreateNestedOneWithoutUsersInput>;
  user_roles?: InputMaybe<User_RolesCreateNestedManyWithoutUsersInput>;
};

export type UsersCreateWithoutUser_RolesInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<Scalars['Boolean']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  last_login?: InputMaybe<Scalars['DateTime']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  oauth_identities?: InputMaybe<Oauth_IdentitiesCreateNestedManyWithoutUsersInput>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  reset_token?: InputMaybe<Scalars['String']['input']>;
  reset_token_expiry?: InputMaybe<Scalars['DateTime']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  user_otps?: InputMaybe<User_OtpsCreateNestedOneWithoutUsersInput>;
  user_permissions?: InputMaybe<User_PermissionsCreateNestedManyWithoutUsersInput>;
};

export type UsersOrderByWithRelationInput = {
  avatar?: InputMaybe<SortOrderInput>;
  city?: InputMaybe<SortOrderInput>;
  country?: InputMaybe<SortOrderInput>;
  created_at?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrderInput>;
  email_verified?: InputMaybe<SortOrderInput>;
  first_name?: InputMaybe<SortOrderInput>;
  gender?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  is_active?: InputMaybe<SortOrderInput>;
  last_login?: InputMaybe<SortOrderInput>;
  last_name?: InputMaybe<SortOrderInput>;
  oauth_identities?: InputMaybe<Oauth_IdentitiesOrderByRelationAggregateInput>;
  password?: InputMaybe<SortOrderInput>;
  phone_number?: InputMaybe<SortOrderInput>;
  reset_token?: InputMaybe<SortOrderInput>;
  reset_token_expiry?: InputMaybe<SortOrderInput>;
  state?: InputMaybe<SortOrderInput>;
  updated_at?: InputMaybe<SortOrderInput>;
  user_otps?: InputMaybe<User_OtpsOrderByWithRelationInput>;
  user_permissions?: InputMaybe<User_PermissionsOrderByRelationAggregateInput>;
  user_roles?: InputMaybe<User_RolesOrderByRelationAggregateInput>;
};

export type UsersUpdateInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email_verified?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumgenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_active?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  last_login?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oauth_identities?: InputMaybe<Oauth_IdentitiesUpdateManyWithoutUsersNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reset_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reset_token_expiry?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user_otps?: InputMaybe<User_OtpsUpdateOneWithoutUsersNestedInput>;
  user_permissions?: InputMaybe<User_PermissionsUpdateManyWithoutUsersNestedInput>;
  user_roles?: InputMaybe<User_RolesUpdateManyWithoutUsersNestedInput>;
};

export type UsersUpdateManyMutationInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email_verified?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumgenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_active?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  last_login?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reset_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reset_token_expiry?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UsersUpdateOneRequiredWithoutUser_PermissionsNestedInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutUser_PermissionsInput>;
  create?: InputMaybe<UsersCreateWithoutUser_PermissionsInput>;
  update?: InputMaybe<UsersUpdateToOneWithWhereWithoutUser_PermissionsInput>;
  upsert?: InputMaybe<UsersUpsertWithoutUser_PermissionsInput>;
};

export type UsersUpdateOneRequiredWithoutUser_RolesNestedInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutUser_RolesInput>;
  create?: InputMaybe<UsersCreateWithoutUser_RolesInput>;
  update?: InputMaybe<UsersUpdateToOneWithWhereWithoutUser_RolesInput>;
  upsert?: InputMaybe<UsersUpsertWithoutUser_RolesInput>;
};

export type UsersUpdateToOneWithWhereWithoutUser_PermissionsInput = {
  data: UsersUpdateWithoutUser_PermissionsInput;
  where?: InputMaybe<UsersWhereInput>;
};

export type UsersUpdateToOneWithWhereWithoutUser_RolesInput = {
  data: UsersUpdateWithoutUser_RolesInput;
  where?: InputMaybe<UsersWhereInput>;
};

export type UsersUpdateWithoutUser_PermissionsInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email_verified?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumgenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_active?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  last_login?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oauth_identities?: InputMaybe<Oauth_IdentitiesUpdateManyWithoutUsersNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reset_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reset_token_expiry?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user_otps?: InputMaybe<User_OtpsUpdateOneWithoutUsersNestedInput>;
  user_roles?: InputMaybe<User_RolesUpdateManyWithoutUsersNestedInput>;
};

export type UsersUpdateWithoutUser_RolesInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  country?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email_verified?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  first_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumgenderFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_active?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  last_login?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  last_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  oauth_identities?: InputMaybe<Oauth_IdentitiesUpdateManyWithoutUsersNestedInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone_number?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reset_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reset_token_expiry?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user_otps?: InputMaybe<User_OtpsUpdateOneWithoutUsersNestedInput>;
  user_permissions?: InputMaybe<User_PermissionsUpdateManyWithoutUsersNestedInput>;
};

export type UsersUpsertWithoutUser_PermissionsInput = {
  create: UsersCreateWithoutUser_PermissionsInput;
  update: UsersUpdateWithoutUser_PermissionsInput;
  where?: InputMaybe<UsersWhereInput>;
};

export type UsersUpsertWithoutUser_RolesInput = {
  create: UsersCreateWithoutUser_RolesInput;
  update: UsersUpdateWithoutUser_RolesInput;
  where?: InputMaybe<UsersWhereInput>;
};

export type UsersWhereInput = {
  AND?: InputMaybe<Array<UsersWhereInput>>;
  NOT?: InputMaybe<Array<UsersWhereInput>>;
  OR?: InputMaybe<Array<UsersWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  country?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  email_verified?: InputMaybe<BoolNullableFilter>;
  first_name?: InputMaybe<StringNullableFilter>;
  gender?: InputMaybe<EnumgenderNullableFilter>;
  id?: InputMaybe<UuidFilter>;
  is_active?: InputMaybe<BoolNullableFilter>;
  last_login?: InputMaybe<DateTimeNullableFilter>;
  last_name?: InputMaybe<StringNullableFilter>;
  oauth_identities?: InputMaybe<Oauth_IdentitiesListRelationFilter>;
  password?: InputMaybe<StringNullableFilter>;
  phone_number?: InputMaybe<StringNullableFilter>;
  reset_token?: InputMaybe<StringNullableFilter>;
  reset_token_expiry?: InputMaybe<DateTimeNullableFilter>;
  state?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeNullableFilter>;
  user_otps?: InputMaybe<User_OtpsNullableRelationFilter>;
  user_permissions?: InputMaybe<User_PermissionsListRelationFilter>;
  user_roles?: InputMaybe<User_RolesListRelationFilter>;
};

export type UsersWhereUniqueInput = {
  AND?: InputMaybe<Array<UsersWhereInput>>;
  NOT?: InputMaybe<Array<UsersWhereInput>>;
  OR?: InputMaybe<Array<UsersWhereInput>>;
  avatar?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  country?: InputMaybe<StringNullableFilter>;
  created_at?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<BoolNullableFilter>;
  first_name?: InputMaybe<StringNullableFilter>;
  gender?: InputMaybe<EnumgenderNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<BoolNullableFilter>;
  last_login?: InputMaybe<DateTimeNullableFilter>;
  last_name?: InputMaybe<StringNullableFilter>;
  oauth_identities?: InputMaybe<Oauth_IdentitiesListRelationFilter>;
  password?: InputMaybe<StringNullableFilter>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  reset_token?: InputMaybe<StringNullableFilter>;
  reset_token_expiry?: InputMaybe<DateTimeNullableFilter>;
  state?: InputMaybe<StringNullableFilter>;
  updated_at?: InputMaybe<DateTimeNullableFilter>;
  user_otps?: InputMaybe<User_OtpsNullableRelationFilter>;
  user_permissions?: InputMaybe<User_PermissionsListRelationFilter>;
  user_roles?: InputMaybe<User_RolesListRelationFilter>;
};

export type ValidateOtpDto = {
  otp: Scalars['String']['input'];
  phone_no: Scalars['String']['input'];
};

export type RegisterUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Scalars['Float']['input'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'AuthResponse', statusCode?: number | null, status: string, message?: string | null, error?: string | null, data?: { __typename?: 'AuthResponseDto', accessToken: string, user: { __typename?: 'UserClient', id: string, email?: string | null } } | null } };

export type AuthenticateUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Scalars['Float']['input'];
}>;


export type AuthenticateUserMutation = { __typename?: 'Mutation', authenticateUser: { __typename?: 'AuthResponse', statusCode?: number | null, status: string, message?: string | null, error?: string | null, data?: { __typename?: 'AuthResponseDto', accessToken: string, renewAccessToken: string, user: { __typename?: 'UserClient', id: string, email?: string | null, avatar?: string | null, phone_number?: string | null, first_name?: string | null } } | null } };

export type RenewAccessTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RenewAccessTokenMutation = { __typename?: 'Mutation', renewAccessToken: { __typename?: 'RenewTokenResponse', error?: string | null, message?: string | null, status: string, statusCode?: number | null, data?: { __typename?: 'RenewTokenResponseDto', accessToken: string } | null } };

export type Update_Users_By_PkMutationVariables = Exact<{
  data: UsersUpdateInput;
  where: UsersWhereUniqueInput;
}>;


export type Update_Users_By_PkMutation = { __typename?: 'Mutation', update_users_by_pk: { __typename?: 'UniqueUsersResponse', error?: string | null, message?: string | null, status: string, statusCode?: number | null, data?: { __typename?: 'users', email?: string | null, phone_number?: string | null, avatar?: string | null, id: string, first_name?: string | null } | null } };

export type ValidateOtpMutationVariables = Exact<{
  data: ValidateOtpDto;
}>;


export type ValidateOtpMutation = { __typename?: 'Mutation', validateOtp: { __typename?: 'AuthResponse', error?: string | null, message?: string | null, status: string, statusCode?: number | null, data?: { __typename?: 'AuthResponseDto', renewAccessToken: string, accessToken: string, user: { __typename?: 'UserClient', phone_number?: string | null, email?: string | null, avatar?: string | null, first_name?: string | null, id: string } } | null } };

export type InitiatePasswordResetMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type InitiatePasswordResetMutation = { __typename?: 'Mutation', initiatePasswordReset: { __typename?: 'AuthResponse', statusCode?: number | null, status: string, message?: string | null, error?: string | null } };

export type CompletePasswordResetMutationVariables = Exact<{
  newPassword: Scalars['String']['input'];
}>;


export type CompletePasswordResetMutation = { __typename?: 'Mutation', completePasswordReset: { __typename?: 'AuthResponse', error?: string | null, message?: string | null, status: string, statusCode?: number | null } };

export type GetUserByIdQueryVariables = Exact<{
  getUserById: Scalars['String']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserById: { __typename?: 'UserResponse', error?: string | null, message?: string | null, status: string, statusCode?: number | null, data?: { __typename?: 'UserClient', email?: string | null } | null } };


export const RegisterUserDocument = gql`
    mutation registerUser($email: String!, $password: String!, $role: Float!) {
  registerUser(authData: {email: $email, password: $password, role: $role}) {
    statusCode
    status
    message
    data {
      ... on AuthResponseDto {
        accessToken
        user {
          id
          email
        }
      }
    }
    error
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const AuthenticateUserDocument = gql`
    mutation authenticateUser($email: String!, $password: String!, $role: Float!) {
  authenticateUser(authData: {email: $email, password: $password, role: $role}) {
    statusCode
    status
    message
    data {
      ... on AuthResponseDto {
        accessToken
        renewAccessToken
        user {
          id
          email
          avatar
          phone_number
          first_name
        }
      }
    }
    error
  }
}
    `;
export type AuthenticateUserMutationFn = Apollo.MutationFunction<AuthenticateUserMutation, AuthenticateUserMutationVariables>;

/**
 * __useAuthenticateUserMutation__
 *
 * To run a mutation, you first call `useAuthenticateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateUserMutation, { data, loading, error }] = useAuthenticateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useAuthenticateUserMutation(baseOptions?: Apollo.MutationHookOptions<AuthenticateUserMutation, AuthenticateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthenticateUserMutation, AuthenticateUserMutationVariables>(AuthenticateUserDocument, options);
      }
export type AuthenticateUserMutationHookResult = ReturnType<typeof useAuthenticateUserMutation>;
export type AuthenticateUserMutationResult = Apollo.MutationResult<AuthenticateUserMutation>;
export type AuthenticateUserMutationOptions = Apollo.BaseMutationOptions<AuthenticateUserMutation, AuthenticateUserMutationVariables>;
export const RenewAccessTokenDocument = gql`
    mutation RenewAccessToken {
  renewAccessToken {
    data {
      accessToken
    }
    error
    message
    status
    statusCode
  }
}
    `;
export type RenewAccessTokenMutationFn = Apollo.MutationFunction<RenewAccessTokenMutation, RenewAccessTokenMutationVariables>;

/**
 * __useRenewAccessTokenMutation__
 *
 * To run a mutation, you first call `useRenewAccessTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRenewAccessTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [renewAccessTokenMutation, { data, loading, error }] = useRenewAccessTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRenewAccessTokenMutation(baseOptions?: Apollo.MutationHookOptions<RenewAccessTokenMutation, RenewAccessTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RenewAccessTokenMutation, RenewAccessTokenMutationVariables>(RenewAccessTokenDocument, options);
      }
export type RenewAccessTokenMutationHookResult = ReturnType<typeof useRenewAccessTokenMutation>;
export type RenewAccessTokenMutationResult = Apollo.MutationResult<RenewAccessTokenMutation>;
export type RenewAccessTokenMutationOptions = Apollo.BaseMutationOptions<RenewAccessTokenMutation, RenewAccessTokenMutationVariables>;
export const Update_Users_By_PkDocument = gql`
    mutation Update_users_by_pk($data: usersUpdateInput!, $where: usersWhereUniqueInput!) {
  update_users_by_pk(data: $data, where: $where) {
    error
    message
    status
    statusCode
    data {
      email
      phone_number
      avatar
      id
      first_name
    }
  }
}
    `;
export type Update_Users_By_PkMutationFn = Apollo.MutationFunction<Update_Users_By_PkMutation, Update_Users_By_PkMutationVariables>;

/**
 * __useUpdate_Users_By_PkMutation__
 *
 * To run a mutation, you first call `useUpdate_Users_By_PkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_Users_By_PkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUsersByPkMutation, { data, loading, error }] = useUpdate_Users_By_PkMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdate_Users_By_PkMutation(baseOptions?: Apollo.MutationHookOptions<Update_Users_By_PkMutation, Update_Users_By_PkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Update_Users_By_PkMutation, Update_Users_By_PkMutationVariables>(Update_Users_By_PkDocument, options);
      }
export type Update_Users_By_PkMutationHookResult = ReturnType<typeof useUpdate_Users_By_PkMutation>;
export type Update_Users_By_PkMutationResult = Apollo.MutationResult<Update_Users_By_PkMutation>;
export type Update_Users_By_PkMutationOptions = Apollo.BaseMutationOptions<Update_Users_By_PkMutation, Update_Users_By_PkMutationVariables>;
export const ValidateOtpDocument = gql`
    mutation ValidateOtp($data: validateOtpDto!) {
  validateOtp(data: $data) {
    data {
      user {
        phone_number
        email
        avatar
        first_name
        id
      }
      renewAccessToken
      accessToken
    }
    error
    message
    status
    statusCode
  }
}
    `;
export type ValidateOtpMutationFn = Apollo.MutationFunction<ValidateOtpMutation, ValidateOtpMutationVariables>;

/**
 * __useValidateOtpMutation__
 *
 * To run a mutation, you first call `useValidateOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidateOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validateOtpMutation, { data, loading, error }] = useValidateOtpMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useValidateOtpMutation(baseOptions?: Apollo.MutationHookOptions<ValidateOtpMutation, ValidateOtpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ValidateOtpMutation, ValidateOtpMutationVariables>(ValidateOtpDocument, options);
      }
export type ValidateOtpMutationHookResult = ReturnType<typeof useValidateOtpMutation>;
export type ValidateOtpMutationResult = Apollo.MutationResult<ValidateOtpMutation>;
export type ValidateOtpMutationOptions = Apollo.BaseMutationOptions<ValidateOtpMutation, ValidateOtpMutationVariables>;
export const InitiatePasswordResetDocument = gql`
    mutation InitiatePasswordReset($email: String!) {
  initiatePasswordReset(email: $email) {
    statusCode
    status
    message
    error
  }
}
    `;
export type InitiatePasswordResetMutationFn = Apollo.MutationFunction<InitiatePasswordResetMutation, InitiatePasswordResetMutationVariables>;

/**
 * __useInitiatePasswordResetMutation__
 *
 * To run a mutation, you first call `useInitiatePasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInitiatePasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [initiatePasswordResetMutation, { data, loading, error }] = useInitiatePasswordResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useInitiatePasswordResetMutation(baseOptions?: Apollo.MutationHookOptions<InitiatePasswordResetMutation, InitiatePasswordResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InitiatePasswordResetMutation, InitiatePasswordResetMutationVariables>(InitiatePasswordResetDocument, options);
      }
export type InitiatePasswordResetMutationHookResult = ReturnType<typeof useInitiatePasswordResetMutation>;
export type InitiatePasswordResetMutationResult = Apollo.MutationResult<InitiatePasswordResetMutation>;
export type InitiatePasswordResetMutationOptions = Apollo.BaseMutationOptions<InitiatePasswordResetMutation, InitiatePasswordResetMutationVariables>;
export const CompletePasswordResetDocument = gql`
    mutation CompletePasswordReset($newPassword: String!) {
  completePasswordReset(newPassword: $newPassword) {
    error
    message
    status
    statusCode
  }
}
    `;
export type CompletePasswordResetMutationFn = Apollo.MutationFunction<CompletePasswordResetMutation, CompletePasswordResetMutationVariables>;

/**
 * __useCompletePasswordResetMutation__
 *
 * To run a mutation, you first call `useCompletePasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompletePasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completePasswordResetMutation, { data, loading, error }] = useCompletePasswordResetMutation({
 *   variables: {
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useCompletePasswordResetMutation(baseOptions?: Apollo.MutationHookOptions<CompletePasswordResetMutation, CompletePasswordResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompletePasswordResetMutation, CompletePasswordResetMutationVariables>(CompletePasswordResetDocument, options);
      }
export type CompletePasswordResetMutationHookResult = ReturnType<typeof useCompletePasswordResetMutation>;
export type CompletePasswordResetMutationResult = Apollo.MutationResult<CompletePasswordResetMutation>;
export type CompletePasswordResetMutationOptions = Apollo.BaseMutationOptions<CompletePasswordResetMutation, CompletePasswordResetMutationVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($getUserById: String!) {
  getUserById(id: $getUserById) {
    error
    message
    status
    statusCode
    data {
      email
    }
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      getUserById: // value for 'getUserById'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables> & ({ variables: GetUserByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export function useGetUserByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdSuspenseQueryHookResult = ReturnType<typeof useGetUserByIdSuspenseQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;