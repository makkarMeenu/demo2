import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
import React, { createContext, useState, useEffect } from 'react';

import { createApolloClient } from '@/apollo/clientFactory';
import { RenewAccessTokenDocument } from '@/generated/hooks/auth';
import { SessionContextType, UserSession } from '@/types/auth/sessionTypes';

export const SessionContext = createContext<SessionContextType | null>(null);

export const SessionProvider: any = ({ children }: any) => {
  const [user, setUser] = useState<UserSession | null>(null);
  const [status, setStatus] = useState<
    'loading' | 'authenticated' | 'unauthenticated'
  >('loading');

  // Function to validate and refresh the token
  const validateRefreshToken = async (
    refreshToken: string,
    authenticatedUserParsedData: UserSession
  ) => {
    try {
      const client = createApolloClient(refreshToken);
      const data = await client.mutate({
        mutation: RenewAccessTokenDocument,
      });

      if (data.data.renewAccessToken.statusCode === 200) {
        const refreshedUserData = {
          ...authenticatedUserParsedData,
          data: {
            ...authenticatedUserParsedData.data, // Spread the original data inside "data"
            accessToken: data.data.renewAccessToken.data.accessToken, // Modify the access token
          },
        };
        setUser(refreshedUserData);
        setStatus('authenticated');
        await AsyncStorage.setItem(
          'authenticatedUser',
          JSON.stringify(refreshedUserData)
        );
      } else {
        setStatus('unauthenticated');
        setUser(null);
        await AsyncStorage.removeItem('authenticatedUser');
      }
    } catch (error: any) {
      console.log(error.message, ' error.');
      setStatus('unauthenticated');
      setUser(null);
      AsyncStorage.removeItem('authenticatedUser');
    }
  };
  const checkAuthState = async () => {
    const authenticatedUser = await AsyncStorage.getItem('authenticatedUser');
    if (authenticatedUser) {
      const authenticatedUserParsedData = JSON.parse(authenticatedUser);
      const accessToken = authenticatedUserParsedData.data.accessToken;

      // There will be mutation in backend that will send response that whether access token is valid or not .
      // Call that mutation here and on basis of that
      const validAccessToken = true;
      if (validAccessToken) {
        const decodedAccessToken = jwtDecode(accessToken);
        if (
          decodedAccessToken.exp &&
          decodedAccessToken.exp * 1000 < Date.now()
        ) {
          await validateRefreshToken(
            authenticatedUserParsedData.data.renewAccessToken,
            authenticatedUserParsedData
          );
        } else {
          setStatus('authenticated');
          setUser(authenticatedUserParsedData);
        }
      } else {
        setStatus('unauthenticated');
        setUser(null);
      }
    } else {
      setStatus('unauthenticated');
      setUser(null);
    }
  };

  useEffect(() => {
    checkAuthState();
  }, []);

  return (
    <SessionContext.Provider value={{ user, setUser, status, setStatus }}>
      {children}
    </SessionContext.Provider>
  );
};
