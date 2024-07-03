'use client';
import AuthLayout from '@app-launch-kit/components/custom/auth/AuthLayout';
import { Loading } from '@app-launch-kit/components/custom/Loading';
import config from '@app-launch-kit/config';
import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from '@unitools/router';
import { useEffect, useState } from 'react';

export default function Layout({ children }: any) {
  const [loading, setLoading] = useState(true);
  const user = useUser();
  const router = useRouter();
  const { navigationLinks } = config;

  setTimeout(() => {
    setLoading(false);
  }, 800);

  useEffect(() => {
    if (user) router.replace(`/${navigationLinks.redirectAfterAuth}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (loading) return <Loading />;

  return <AuthLayout>{children}</AuthLayout>;
}
