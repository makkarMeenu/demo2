'use client';
import { useRouter } from '@unitools/router';
import { useEffect, useState } from 'react';
import { Linking } from 'react-native';

import { notFound } from 'next/navigation';

import ResetPasswordForm from '@app-launch-kit/components/custom/auth/ResetPasswordForm';
import ScreenDescription from '@app-launch-kit/components/custom/auth/ScreenDescription';
import config from '@app-launch-kit/config';
import checkTokenExpiry from '@app-launch-kit/utils/helpers/checkTokenExpiry';

export default function ResetPassword() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const router = useRouter();
  const { navigationLinks } = config;
  useEffect(() => {
    Linking.getInitialURL()
      .then(async (url) => {
        if (url) {
          const hashParams = url.split('#')[1];
          if (hashParams) {
            const params = new URLSearchParams(hashParams);
            const accessToken: any = params.get('access_token');
            const refreshToken: any = params.get('refresh_token');
            setAccessToken(accessToken);
            setRefreshToken(refreshToken);
          }
        }
      })
      .catch((error) => {
        console.error('Error getting initial URL:', error);
      });
  }, []);

  if (!accessToken) {
    notFound();
  }
  if (!accessToken || checkTokenExpiry(accessToken.toString())) {
    return router.replace(navigationLinks.linkExpired);
  }

  return (
    <>
      <ScreenDescription
        title="Create new password"
        description="Your new password must be different from previously used passwords"
      />
      <ResetPasswordForm
        accessToken={accessToken}
        refreshToken={refreshToken}
      />
    </>
  );
}
