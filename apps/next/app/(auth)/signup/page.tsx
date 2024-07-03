import ScreenDescription from '@app-launch-kit/components/custom/auth/ScreenDescription';
import SignUpForm from '@app-launch-kit/components/custom/auth/SignUpForm';

const SignIn = () => {
  return (
    <>
      <ScreenDescription
        title="Sign up"
        description="Sign up and start using AppLaunchKit"
      />
      <SignUpForm />
    </>
  );
};

export default SignIn;
