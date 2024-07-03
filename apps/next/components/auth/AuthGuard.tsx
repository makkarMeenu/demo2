'use client';
import config from '@app-launch-kit/config';
import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from '@unitools/router';
import { useEffect, useState } from 'react';
import { Loading } from '@app-launch-kit/components/custom/Loading';

const AuthGuard = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const user = useUser();
  const router = useRouter();
  const { navigationLinks } = config;
  setTimeout(() => {
    setLoading(false);
  }, 800);
  useEffect(() => {
    if (!loading && !user) {
      router.replace(`/${navigationLinks.signIn}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (loading) return <Loading />;
  return children;
};

export default AuthGuard;
