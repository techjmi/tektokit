/**
 * Social Links Constants
 * Platform configurations for social media links
 */

export const SOCIAL_PLATFORMS = {
  facebook: { icon:'facebook', label:'Facebook' },
  twitter: { icon:'twitter', label:'Twitter' },
  instagram: { icon:'instagram', label:'Instagram' },
  linkedin: { icon:'linkedin', label:'LinkedIn' },
  youtube: { icon:'youtube', label:'YouTube' },
  github: { icon:'github', label:'GitHub' },
  whatsapp: { icon:'whatsapp', label:'WhatsApp' },
  telegram: { icon:'telegram', label:'Telegram' },
  email: { icon:'mail', label:'Email' },
  phone: { icon:'phone', label:'Phone' },
};

export const SOCIAL_LINK_SIZES = {
  sm: {
    container:'w-8 h-8 text-sm',
    icon: 16,
  },
  md: {
    container:'w-10 h-10 text-base',
    icon: 20,
  },
  lg: {
    container:'w-12 h-12 text-lg',
    icon: 24,
  },
};

export const SOCIAL_LINK_VARIANTS = {
  default:'border border-border hover:bg-primary hover:border-primary hover:text-white transition-all duration-200',
  outlined:'border-2 border-border hover:border-primary hover:bg-red-500 hover:text-white transition-all duration-200',
  filled:'bg-primary text-white hover:bg-primary/90 transition-all duration-200',
  simple:'text-muted-foreground hover:text-primary transition-colors duration-200',
};

// className="w-10 h-10 rounded-full border border-border text-foreground flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-200"