/**
 * WhatsAppButton - Floating WhatsApp contact button
 * Fixed position button for quick WhatsApp contact
 */

'use client';

import { Icon } from'../../../../icons';
import { classNames } from'../../../../utils/base/classNames';

const WhatsAppButton = ({
  phoneNumber,
  message ='Hello!',
  position ='bottom-right',
  size ='lg',
  showTooltip = false,
  tooltipText ='Chat with us',
  className ='',
}) => {
  if (!phoneNumber) return null;

  const cleanNumber = phoneNumber.replace(/[^0-9]/g,'');
  const whatsappUrl = `https://wa.me/${cleanNumber}${message ? `?text=${encodeURIComponent(message)}` :''}`;

  const positionClasses = {
   'bottom-right':'bottom-6 right-6',
   'bottom-left':'bottom-6 left-6',
   'top-right':'top-6 right-6',
   'top-left':'top-6 left-6',
  };

  const sizeClasses = {
    sm:'w-12 h-12',
    md:'w-14 h-14',
    lg:'w-16 h-16',
  };

  const iconSizes = {
    sm: 24,
    md: 28,
    lg: 32,
  };

  return (
    <div className={classNames('fixed z-50 group', positionClasses[position] || positionClasses['bottom-right'])}>
      {showTooltip && tooltipText && (
        <div className={classNames(
         'absolute mb-2 px-3 py-2   text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none',
          position.includes('bottom') ?'bottom-full' :'top-full',
          position.includes('right') ?'right-0' :'left-0'
        )}>
          {tooltipText}
          <div className={classNames(
           'absolute w-2 h-2  transform rotate-45',
            position.includes('bottom') ?'bottom-[-4px]' :'top-[-4px]',
            position.includes('right') ?'right-4' :'left-4'
          )} />
        </div>
      )}
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className={classNames(
         'flex items-center justify-center rounded-full bg-green-500  shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300',
          sizeClasses[size],
          className
        )}
      >
        <Icon name="FiMessageCircle" size={iconSizes[size]} />
      </a>
    </div>
  );
};

WhatsAppButton.displayName ='WhatsAppButton';

export default WhatsAppButton;
