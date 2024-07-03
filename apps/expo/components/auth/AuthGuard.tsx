import { Loading } from '@app-launch-kit/components/custom/Loading';
import config from '@app-launch-kit/config';
import { useUser } from '@supabase/auth-helpers-react';
import { Redirect } from 'expo-router';
import React, { useState } from 'react';

const AuthGuard = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const user = useUser();
  const { navigationLinks } = config;
  setTimeout(() => {
    setLoading(false);
  }, 800);
  if (loading) return <Loading />;

  if (!user) {
    return <Redirect href={`/${navigationLinks.signIn}`} />;
  }
  return children;
};

export default AuthGuard;
