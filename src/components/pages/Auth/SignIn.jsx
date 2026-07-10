/**
 * SignIn Component
 * Authentication sign in form with social login options
 */

'use client';

import React, { useState } from 'react';
import { classNames } from '../../../utils/base/classNames';
import { Button } from '../../ui/Button';
import { Input } from '../../forms/Input';
import { SocialButtons } from '../../ui/SocialButtons';
import { DEFAULT_TEXTS, DEFAULT_SOCIAL_PROVIDERS } from './authConstants';

const SignIn = ({
  onSubmit,
  onSocialLogin,
  forgotPasswordLink = '/auth/forgot-password',
  signUpLink = '/auth/signup',
  className = '',
  config,
  ...props
}) => {
  const texts = { ...DEFAULT_TEXTS.signIn, ...(config?.texts || {}) };
  const socialProviders = config?.socialProviders || DEFAULT_SOCIAL_PROVIDERS.signIn;
  const showSocialLogin = config?.showSocialLogin !== false;

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (onSubmit) {
      await onSubmit(formData);
    }
    setIsLoading(false);
  };

  const handleSocialLogin = (provider) => {
    if (onSocialLogin) {
      onSocialLogin(provider);
    }
  };

  return (
    <div className={classNames('max-w-md w-full mx-auto', className)} {...props}>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{texts.title}</h1>
        {texts.subtitle && <p className="text-base opacity-70">{texts.subtitle}</p>}
        {!texts.subtitle && signUpLink && (
          <p className="text-base opacity-70">
            Or{" "}
            <a href={signUpLink} className="underline hover:text-primary transition-colors">
              {texts.signUpText}
            </a>
          </p>
        )}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            {texts.emailLabel} <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={texts.emailPlaceholder}
            required
            icon="mail"
            iconPosition="left"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            {texts.passwordLabel} <span className="text-red-500">*</span>
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder={texts.passwordPlaceholder}
            required
            icon="lock"
            iconPosition="left"
          />
        </div>

        {/* Forgot Password */}
        {forgotPasswordLink && (
          <div>
            <a href={forgotPasswordLink} className="text-sm hover:underline hover:text-primary transition-colors">
              {texts.forgotPasswordText}
            </a>
          </div>
        )}

        {/* Submit Button */}
        <Button type="submit" disabled={isLoading} className="w-full" size="lg">
          {isLoading ? texts.loadingText : texts.submitText}
        </Button>
      </form>

      {/* Social Login */}
      {showSocialLogin && (
        <SocialButtons
          providers={socialProviders}
          onProviderClick={handleSocialLogin}
          dividerText={texts.dividerText}
          showDivider={true}
        />
      )}
    </div>
  );
};

export default SignIn;
