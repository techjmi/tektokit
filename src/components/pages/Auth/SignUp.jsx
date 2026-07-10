/**
 * SignUp Component
 * Authentication sign up form with social signup options
 */

'use client';

import React, { useState } from 'react';
import { classNames } from '../../../utils/base/classNames';
import { Button } from '../../ui/Button';
import { Input } from '../../forms/Input';
import { SocialButtons } from '../../ui/SocialButtons';
import { DEFAULT_TEXTS, DEFAULT_SOCIAL_PROVIDERS } from './authConstants';

const SignUp = ({
  onSubmit,
  onSocialSignup,
  signInLink = '/auth/signin',
  termsLink = '/terms',
  privacyLink = '/privacy',
  className = '',
  config,
  ...props
}) => {
  const texts = { ...DEFAULT_TEXTS.signUp, ...(config?.texts || {}) };
  const socialProviders = config?.socialProviders || DEFAULT_SOCIAL_PROVIDERS.signUp;
  const showSocialSignup = config?.showSocialSignup !== false;
  const showTerms = config?.showTerms !== false;
  const showName = config?.showName !== false;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    setIsLoading(true);
    if (onSubmit) {
      await onSubmit(formData);
    }
    setIsLoading(false);
  };

  const handleSocialSignup = (provider) => {
    if (onSocialSignup) {
      onSocialSignup(provider);
    }
  };

  return (
    <div className={classNames('max-w-md w-full mx-auto', className)} {...props}>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{texts.title}</h1>
        {texts.subtitle && <p className="text-base opacity-70">{texts.subtitle}</p>}
        {!texts.subtitle && signInLink && (
          <p className="text-base opacity-70">
            Already have an account?{" "}
            <a href={signInLink} className="underline hover:text-primary transition-colors">
              {texts.signInText}
            </a>
          </p>
        )}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        {showName && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {texts.nameLabel} <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder={texts.namePlaceholder}
              required
              icon="user"
              iconPosition="left"
            />
          </div>
        )}

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

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
            {texts.confirmPasswordLabel} <span className="text-red-500">*</span>
          </label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder={texts.confirmPasswordPlaceholder}
            required
            icon="lock"
            iconPosition="left"
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" disabled={isLoading} className="w-full" size="lg">
          {isLoading ? texts.loadingText : texts.submitText}
        </Button>
      </form>

      {/* Terms */}
      {showTerms && (
        <p className="text-xs text-center opacity-60 mt-4">
          {texts.termsText}{" "}
          <a href={termsLink} className="underline">{texts.termsLinkText}</a>
          {" "}{texts.andText}{" "}
          <a href={privacyLink} className="underline">{texts.privacyLinkText}</a>
        </p>
      )}

      {/* Social Signup */}
      {showSocialSignup && (
        <SocialButtons
          providers={socialProviders}
          onProviderClick={handleSocialSignup}
          dividerText={texts.dividerText}
          showDivider={true}
        />
      )}
    </div>
  );
};

export default SignUp;
