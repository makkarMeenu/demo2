import AuthLayout from '@app-launch-kit/components/custom/auth/AuthLayout';
import config from '@app-launch-kit/config';
import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from '@unitools/router';
import { Slot } from 'expo-router';
import React from 'react';

export default function Layout() {
  const user = useUser();
  const router = useRouter();
  const { navigationLinks } = config;
  if (user) {
    router.replace(`/${navigationLinks.redirectAfterAuth}`);
  } else {
    return (
      <AuthLayout>
        <Slot />
      </AuthLayout>
    );
  }
}
