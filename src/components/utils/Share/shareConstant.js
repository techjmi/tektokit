/**
 * Share Component Constants
 * Platform configurations for social sharing
 */

export const SHARE_PLATFORMS = {
  copy: {
    label:'Copy Link',
    icon:'FiCopy',
    getUrl: (url) => url,
  },
  twitter: {
    label:'Twitter',
    icon:'FiTwitter',
    getUrl: (url, title) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title ||'')}`,
  },
  facebook: {
    label:'Facebook',
    icon:'FiFacebook',
    getUrl: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  linkedin: {
    label:'LinkedIn',
    icon:'FiLinkedin',
    getUrl: (url, title) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title ||'')}`,
  },
  whatsapp: {
    label:'WhatsApp',
    icon:'FiMessageCircle',
    getUrl: (url, title) => `https://wa.me/?text=${encodeURIComponent((title ? title +'' :'') + url)}`,
  },
  telegram: {
    label:'Telegram',
    icon:'FiSend',
    getUrl: (url, title) => `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title ||'')}`,
  },
  email: {
    label:'Email',
    icon:'FiMail',
    getUrl: (url, title) => `mailto:?subject=${encodeURIComponent(title ||'')}&body=${encodeURIComponent(url)}`,
  },
};

export const DEFAULT_SHARE_PLATFORMS = ['copy','twitter','facebook','linkedin','whatsapp'];
