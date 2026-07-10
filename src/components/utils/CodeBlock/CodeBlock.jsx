'use client';

import { useState } from 'react';
import { classNames } from '../../../utils/base/classNames';
import Badge from '../../ui/Badge/Badge';

const CodeBlock = ({
  code,
  language = 'javascript',
  showLineNumbers = false,
  className = '',
  badgeVariant = 'warning',
  copyLabel = 'Copy',
  copiedLabel = 'Copied!',
  ...props
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  return (
    <div className={classNames('relative group', className)} {...props}>
      {/* Copy Button */}
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
        <Badge
          color={copied ? 'success' : badgeVariant}
          className="cursor-pointer select-none transition-all hover:scale-105 text-xs sm:text-sm"
          onClick={handleCopy}
        >
          {copied ? copiedLabel : copyLabel}
        </Badge>
      </div>

      {/* Code Container */}
      <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 md:p-5 pr-16 sm:pr-20 rounded-lg overflow-x-auto text-xs sm:text-sm leading-relaxed">
        <code className={language ? `language-${language}` : ''}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
