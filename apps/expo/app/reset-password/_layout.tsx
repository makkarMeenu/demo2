import AuthLayout from '@app-launch-kit/components/custom/auth/AuthLayout';
import { Slot } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <AuthLayout>
      <Slot />
    </AuthLayout>
  );
}
