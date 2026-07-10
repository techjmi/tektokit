/**
 * Share - Social sharing buttons component
 * Allows users to share content across various platforms
 */

'use client';

import { useState } from'react';
import Button from'../../ui/Button/Button';
import { Icon } from'../../../icons';
import { classNames } from'../../../utils/base/classNames';
import { copyToClipboard } from'../../../utils/browser/clipboard';
import { SHARE_PLATFORMS, DEFAULT_SHARE_PLATFORMS } from'./shareConstant';

const Share = ({
  layout = 'horizontal',
  showLabels = false,
  variant = 'outline',
  size = 'md',
  className = '',
  config,
  ...rest
}) => {
  const {
    url,
    title = '',
    platforms = DEFAULT_SHARE_PLATFORMS,
  } = config || {};
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !=='undefined' ? window.location.href :'');

  const handleShare = async (platform) => {
    const platformConfig = SHARE_PLATFORMS[platform];
    if (!platformConfig) return;

    if (platform ==='copy') {
      const success = await copyToClipboard(shareUrl);
      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } else {
      const shareLink = platformConfig.getUrl(shareUrl, title);
      window.open(shareLink,'_blank','noopener,noreferrer');
    }
  };

  const layoutClass = layout ==='vertical' ?'flex-col' :'flex-row flex-wrap';

  return (
    <div className={classNames('flex gap-2', layoutClass, className)} {...rest}>
      {platforms.map((platform) => {
        const config = SHARE_PLATFORMS[platform];
        if (!config) return null;

        const label = platform ==='copy' && copied ?'Copied!' : config.label;

        return (
          <Button
            key={platform}
            onClick={() => handleShare(platform)}
            variant={variant}
            size={size}
            icon={config.icon}
            iconPosition="left"
            aria-label={`Share on ${config.label}`}
          >
            {showLabels && label}
          </Button>
        );
      })}
    </div>
  );
};

export default Share;
