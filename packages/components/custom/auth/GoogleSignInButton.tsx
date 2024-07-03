import { GoogleIcon } from '@app-launch-kit/assets/icons/GoogleIcon';
import {
  Button,
  ButtonIcon,
  ButtonText,
} from '@app-launch-kit/components/primitives/button';
import { useToast } from '@app-launch-kit/components/primitives/toast';
import config from '@app-launch-kit/config';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from '@unitools/router';
import { env } from '@unitools/env';

import { showToast } from '../Toast';

export const GoogleSignInButton = () => {
  GoogleSignin.configure({
    scopes: config.auth.googleAuth.mobile.scopes, // what API you want to access on behalf of the user, default is email and profile
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    webClientId: env.GOOGLE_CLIENT_ID_WEB, // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
    iosClientId: env.GOOGLE_CLIENT_ID_IOS, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    // androidClientId: Env.EXPO_PUBLIC_GOOGLE_CLIENT_ID_ANDROID, // [Android]  optional, if you want to specify the client ID of type ANDROID (otherwise, it is taken from google-services.json)
    // hostedDomain: '', // specifies a hosted domain restriction
    // googleServicePlistPath: "", // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    // openIdRealm: "", // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    // profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });

  const toast = useToast();
  const { navigationLinks } = config;
  const router = useRouter();
  const supabase = useSupabaseClient();
  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const { idToken } = userInfo;
      if (idToken) {
        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: 'google',
          token: idToken,
        });
        if (data.session) router.push(`/${navigationLinks.redirectAfterAuth}`);
        if (error) console.log(error, 'error');
      } else {
        throw new Error('No ID token present!');
      }
    } catch (error: any) {
      if (
        error.code === statusCodes.SIGN_IN_CANCELLED ||
        error.code === statusCodes.IN_PROGRESS ||
        error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
      ) {
        showToast(toast, {
          action: 'error',
          message: error.message,
        });
      } else {
        showToast(toast, {
          action: 'error',
          message: 'Some error occurred',
        });
      }
    }
  };

  return (
    <Button
      variant="outline"
      action="secondary"
      className="gap-1"
      onPress={() => {
        googleSignIn();
      }}
    >
      <ButtonText className="font-medium">Continue with Google</ButtonText>
      <ButtonIcon as={GoogleIcon} />
    </Button>
  );
};
