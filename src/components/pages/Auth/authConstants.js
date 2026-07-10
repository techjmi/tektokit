/**
 * Auth component constants
 */

export const SOCIAL_PROVIDERS = {
  google: 'google',
  facebook: 'facebook',
  github: 'github',
};

export const DEFAULT_TEXTS = {
  signIn: {
    title: 'Sign in to your account',
    subtitle: null,
    emailLabel: 'Email address',
    emailPlaceholder: 'Enter your email',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Enter your password',
    submitText: 'Sign in',
    loadingText: 'Signing in...',
    forgotPasswordText: 'Forgot your password?',
    signUpText: 'create a new account',
    dividerText: 'Or continue with',
  },
  signUp: {
    title: 'Create your account',
    subtitle: null,
    nameLabel: 'Full name',
    namePlaceholder: 'Enter your full name',
    emailLabel: 'Email address',
    emailPlaceholder: 'Enter your email',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Create a password',
    confirmPasswordLabel: 'Confirm password',
    confirmPasswordPlaceholder: 'Confirm your password',
    submitText: 'Create account',
    loadingText: 'Creating account...',
    signInText: 'Sign in',
    dividerText: 'Or sign up with',
    termsText: 'By creating an account, you agree to our',
    termsLinkText: 'Terms of Service',
    andText: 'and',
    privacyLinkText: 'Privacy Policy',
  },
};

export const DEFAULT_SOCIAL_PROVIDERS = {
  signIn: ['google', 'facebook'],
  signUp: ['google', 'github'],
};
