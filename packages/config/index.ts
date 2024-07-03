export type ConfigProps = {
  navigationLinks: {
    signIn: string;
    signUp: string;
    forgotPassword: string;
    resetPassword: string;
    redirectAfterAuth: string;
    dashboard: string;
    profile: string;
    privacyPolicy: string;
    termsOfService: string;
    linkExpired: string;
    payment: string;
  };
  auth: {
    credentialsAuth: {
      resetPasswordRedirectUri: string;
    };
    googleAuth: {
      mobile: {
        scopes: string[];
      };
      web: {
        redirectUri: string;
      };
    };
  };
};

const config = {
  navigationLinks: {
    signIn: "signin",
    signUp: "signup",
    forgotPassword: "forgot-password",
    resetPassword: "reset-password",
    redirectAfterAuth: "profile",
    dashboard: "home",
    profile: "profile",
    privacyPolicy: "privacy-policy",
    termsOfService: "terms-of-service",
    linkExpired: "link-expired",
    payment: "pricing",
  },
  auth: {
    credentialsAuth: {
      resetPasswordRedirectUri: "reset-password",
    },
    googleAuth: {
      mobile: {
        scopes: ["https://www.googleapis.com/auth/drive.readonly"],
      },
      web: {
        // redirectUri: Env.EXPO_PUBLIC_SITE_URL,
      },
    },
  },
} as ConfigProps;

export default config;
