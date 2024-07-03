import { GoogleIcon } from '@app-launch-kit/assets/icons/GoogleIcon';
import {
  Button,
  ButtonIcon,
  ButtonText,
} from '@app-launch-kit/components/primitives/button';
import { useToast } from '@app-launch-kit/components/primitives/toast';
import config from '@app-launch-kit/config';
import { useRouter } from '@unitools/router';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect } from 'react';

import { showToast } from '@app-launch-kit/components/custom/Toast';

import { supabase } from '@app-launch-kit/utils/lib/supabase';

WebBrowser.maybeCompleteAuthSession();

export const GoogleSignInButton = ({ env }: any) => {
  const googleConfig = {
    redirectUri: env.SITE_URL,
    webClientId: env.GOOGLE_CLIENT_ID_WEB,
  };

  const [request, response, promptAsync] =
    Google.useIdTokenAuthRequest(googleConfig);
  const toast = useToast();
  const { navigationLinks } = config;
  const router = useRouter();
  useEffect(() => {
    const handleAuthResponse = async () => {
      try {
        if (response?.type === 'success') {
          const {
            params: { id_token },
          } = response;
          if (id_token) {
            const { data, error } = await supabase.auth.signInWithIdToken({
              provider: 'google',
              token: id_token,
            });
            if (data) {
              router.push(`/${navigationLinks.redirectAfterAuth}`);
            }
            if (error) {
              console.log(error, 'error');
            }
          } else {
            throw new Error('no ID token present!');
          }
        }
        if (response?.type === 'dismiss' || response?.type === 'cancel') {
          showToast(toast, {
            action: 'error',
            message: 'Google Sign In cancelled',
          });
        }
      } catch (error: any) {
        showToast(toast, {
          action: 'error',
          message: error.message,
        });
      }
    };

    handleAuthResponse();
  }, [response, response?.type, request]);

  return (
    <Button
      variant="outline"
      action="secondary"
      className="gap-1"
      onPress={() => {
        promptAsync();
      }}
    >
      <ButtonText className="font-medium">Continue with Google</ButtonText>
      <ButtonIcon as={GoogleIcon} />
    </Button>
  );
};
