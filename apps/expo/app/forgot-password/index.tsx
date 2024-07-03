import ForgotPasswordForm from '@app-launch-kit/components/custom/auth/ForgotPasswordForm';
import ScreenDescription from '@app-launch-kit/components/custom/auth/ScreenDescription';
import React from 'react';

export default function ForgotPassword() {
  return (
    <>
      <ScreenDescription
        title="Forgot Password?"
        description=" Enter email ID associated with your account."
      />
      <ForgotPasswordForm />
    </>
  );
}
