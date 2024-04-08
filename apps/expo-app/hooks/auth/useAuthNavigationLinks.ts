export const useAuthNavigationLinks = () => {
  const signIn = 'signin';
  const signUp = 'signup';
  const forgotPassword = 'forgot-password';
  const resetPassword = 'reset-password';
  const redirectAfterAuth = 'demo';
  return {
    signIn,
    signUp,
    forgotPassword,
    resetPassword,
    redirectAfterAuth,
  };
};
