import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

import {
  useAuthenticateUserMutation,
  useRegisterUserMutation,
  useInitiatePasswordResetMutation,
  useCompletePasswordResetMutation,
  useGetUserByIdLazyQuery,
} from '@/generated/hooks/auth';
import { useSession } from '@/hooks/auth/useSession';
export const useAuthentication = () => {
  const { setUser, setStatus } = useSession();
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState('');
  const [signinEmail] = useAuthenticateUserMutation();
  const [registerUser] = useRegisterUserMutation();
  const [initiatePasswordResetMutation] = useInitiatePasswordResetMutation();
  const [completePasswordResetMutation] = useCompletePasswordResetMutation();
  const [getUserByIdQuery] = useGetUserByIdLazyQuery();

  const loginUsingEmailAndPassword = async (
    username: string,
    password: string
  ) => {
    setAuthLoading(true);
    try {
      const result = await signinEmail({
        variables: {
          email: username,
          password,
          role: 1,
        },
      });
      if (result.data?.authenticateUser?.statusCode === 200) {
        setStatus('authenticated');
        // @ts-ignore
        setUser(result?.data?.authenticateUser);
        AsyncStorage.setItem(
          'authenticatedUser',
          JSON.stringify(result.data.authenticateUser)
        );
      } else {
        setAuthError(
          result.data?.authenticateUser?.message ?? 'Some Error Occured'
        );
        setStatus('unauthenticated');
        setUser(null);
      }
      return result;
    } catch (error: any) {
      setAuthError(error.message);
      setStatus('unauthenticated');
      setUser(null);
      return error.message;
    } finally {
      setAuthLoading(false);
    }
  };

  const signUpUsingEmailAndPassword = async (
    username: string,
    password: string
  ) => {
    setAuthLoading(true);
    try {
      const result = await registerUser({
        variables: {
          email: username,
          password,
          role: 1,
        },
      });
      if (result.data?.registerUser?.statusCode === 200) {
      } else {
        setAuthError(
          result.data?.registerUser?.message ?? 'Some Error Occured'
        );
      }
      return result;
    } catch (error: any) {
      setAuthError(error.message);
      console.log(error.message, 'error');
      return error.message;
    } finally {
      setStatus('unauthenticated');
      setUser(null);
      setAuthLoading(false);
    }
  };

  const signOut = () => {
    try {
      AsyncStorage.removeItem('authenticatedUser');
      setStatus('unauthenticated');
      setUser(null);
    } catch (error: any) {
      console.log(error.message);
      setAuthError(error.message);
      return error.message;
    }
  };

  const initiatePasswordReset = async (email: string) => {
    setAuthLoading(true);
    try {
      const result = await initiatePasswordResetMutation({
        variables: {
          email,
        },
      });
      if (result.data?.initiatePasswordReset?.statusCode === 200) {
      } else {
        setAuthError(
          result.data?.initiatePasswordReset?.message ?? 'Some Error Occured'
        );
      }
      return result;
    } catch (error: any) {
      setAuthError(error.message);
      console.log(error.message, 'error');
      return error.message;
    } finally {
      setStatus('unauthenticated');
      setUser(null);
      setAuthLoading(false);
    }
  };

  const completePasswordReset = async (
    newPassword: string,
    token: string | string[]
  ) => {
    setAuthLoading(true);
    try {
      const result = await completePasswordResetMutation({
        variables: {
          newPassword,
        },
        context: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      });
      if (result.data?.completePasswordReset?.statusCode === 200) {
      } else {
        setAuthError(
          result.data?.completePasswordReset?.message ?? 'Some Error Occured'
        );
      }
      return result;
    } catch (error: any) {
      setAuthError(error.message);
      console.log(error.message, 'error');
      return error.message;
    } finally {
      setStatus('unauthenticated');
      setUser(null);
      setAuthLoading(false);
    }
  };

  const getUserById = async (id: string, token: string | string[]) => {
    setAuthLoading(true);
    try {
      const result = await getUserByIdQuery({
        variables: {
          getUserById: id,
        },
        context: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      });
      if (result.data?.getUserById?.statusCode === 200) {
        return result?.data?.getUserById?.data?.email;
      } else {
        setAuthError(result.data?.getUserById?.error ?? 'Some Error Occured');
      }
      return result;
    } catch (error: any) {
      setAuthError(error.message);
      console.log(error, 'error');
    } finally {
      setAuthLoading(false);
    }
  };

  return {
    loginUsingEmailAndPassword,
    signUpUsingEmailAndPassword,
    signOut,
    initiatePasswordReset,
    getUserById,
    completePasswordReset,
    authLoading,
    authError,
  };
};
