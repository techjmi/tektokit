/**
 * UserProfile - User profile display component
 * Shows user avatar, name, email, and optional additional info
 */

'use client';

import Avatar from '../../ui/Avatar/Avatar';
import { classNames } from '../../../utils/base/classNames';
import { USER_PROFILE_SIZES, USER_PROFILE_LAYOUTS } from'./userProfileConstants';

const UserProfile = ({
  layout = 'horizontal',
  size = 'md',
  showEmail = true,
  showRole = true,
  showBio = false,
  showStatus = false,
  className = '',
  avatarClassName = '',
  nameClassName = '',
  emailClassName = '',
  roleClassName = '',
  children,
  config,
  ...rest
}) => {
  if (!config) return null;

  const {
    image,
    name,
    email,
    role,
    bio,
    status,
    href,
    onClick,
  } = config;
  const currentSize = USER_PROFILE_SIZES[size] || USER_PROFILE_SIZES.md;

  const layoutClasses = {
    horizontal: `${USER_PROFILE_LAYOUTS.horizontal} ${currentSize.gap}`,
    vertical: `${USER_PROFILE_LAYOUTS.vertical} ${currentSize.gap}`,
  };

  const content = (
    <div className={classNames('inline-flex', layoutClasses[layout] || layoutClasses.horizontal, className)} {...rest}>
      <div className="relative">
        <Avatar
          src={image}
          name={name}
          size={currentSize.avatar}
          status={showStatus ? status : undefined}
          className={avatarClassName}
        />
      </div>

      <div className={classNames('flex flex-col', layout ==='horizontal' ?'items-start' :'items-center')}>
        {name && (
          <div className={classNames(currentSize.name, nameClassName)}>
            {name}
          </div>
        )}

        {showEmail && email && (
          <div className={classNames(currentSize.email,'opacity-70', emailClassName)}>
            {email}
          </div>
        )}

        {showRole && role && (
          <div className={classNames(currentSize.role,'opacity-60', roleClassName)}>
            {role}
          </div>
        )}

        {showBio && bio && (
          <p className={classNames(
           'text-sm opacity-70 mt-2 max-w-md',
            layout ==='vertical' ?'text-center' :'text-left'
          )}>
            {bio}
          </p>
        )}

        {children}
      </div>
    </div>
  );

  if (href || onClick) {
    return (
      <a
        href={href}
        onClick={onClick}
        className="inline-block transition-opacity hover:opacity-80 cursor-pointer"
      >
        {content}
      </a>
    );
  }

  return content;
};

export default UserProfile;
