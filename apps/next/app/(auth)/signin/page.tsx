import ScreenDescription from '@app-launch-kit/components/custom/auth/ScreenDescription';
import SignInForm from '@app-launch-kit/components/custom/auth/SignInForm';
const SignIn = () => {
  return (
    <>
      <ScreenDescription
        title="Sign in"
        description="Sign in and start using AppLaunchKit"
      />
      <SignInForm />
    </>
  );
};

export default SignIn;
