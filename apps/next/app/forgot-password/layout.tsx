'use client';
import { useUser } from '@supabase/auth-helpers-react';
import config from '@app-launch-kit/config';
import { useRouter } from '@unitools/router';
import AuthLayout from '@app-launch-kit/components/custom/auth/AuthLayout';

export default function Layout({ children }: any) {
  const user = useUser();
  const router = useRouter();
  const { navigationLinks } = config;
  if (user) {
    router.replace(`/${navigationLinks.redirectAfterAuth}`);
  } else {
    return <AuthLayout>{children}</AuthLayout>;
  }
}
