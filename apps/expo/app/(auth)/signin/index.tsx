import ScreenDescription from '@app-launch-kit/components/custom/auth/ScreenDescription';
import SignInForm from '@app-launch-kit/components/custom/auth/SignInForm';
import React from 'react';

const SignIn = () => {
  return (
    <>
      {/* You might not need `ScreenDescription` component in your application, use this component as a reference to implement your own UI specific to a particular screen */}
      <ScreenDescription
        title="Login"
        description="Login to start using AppLaunchKit"
      />

      <SignInForm />
    </>
  );
};

export default SignIn;
