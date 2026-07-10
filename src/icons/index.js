/**
 * Centralized icon system
 * Uses react-icons for easy icon management
 * Provides a unified Icon component for all icons
 */

// Social Icons (FontAwesome)
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebookMessenger,
  FaGoogle,
  FaGithub,
  FaWhatsapp,
  FaYoutube,
  FaTelegramPlane,
  FaHeart,
  FaBookOpen,
} from "react-icons/fa";

// UI / General Icons (Feather)
import {
  FiMail,
  FiDownload,
  FiMapPin,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiSearch,
  FiEye,
  FiEyeOff,
  FiLock,
  FiPhone,
  FiCalendar,
  FiClock,
  FiCheck,
  FiAlertCircle,
  FiInfo,
  FiLoader,
  FiHome,
  FiSettings,
  FiChevronRight,
  FiChevronLeft,
  FiChevronDown,
  FiArrowRight,
  FiShield,
  FiFileText,
  FiShare2,
  FiLink,
  FiCheckCircle,
  FiTrash2,
  FiPlay,
  FiPause,
  FiVolume2,
  FiVolumeX,
  FiLogOut,
  FiGrid,
  FiBookOpen,
  FiZap,
  FiCode,
  FiEdit,
  FiGlobe,
  FiPackage,
  FiSun,
  FiMoon,
  FiUsers,
  FiLayout,
  FiActivity,
  FiHeadphones,
} from "react-icons/fi";

// Navigation / Controls Icons (Material Design)
import {
  MdClose,
  MdAdd,
  MdRemove,
  MdMenu,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdStarHalf,
  MdOutlineStar,
  MdStarBorder,
  MdArrowBack
} from "react-icons/md";

/**
 * Icon registry
 * Maps string names to icon components for easy usage
 */
export const ICONS = {
  // Social
  google: FaGoogle,
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  instagram: FaInstagram,
  messenger: FaFacebookMessenger,
  github: FaGithub,
  whatsapp: FaWhatsapp,
  youtube: FaYoutube,
  telegram: FaTelegramPlane,
  
  // User / Commerce
  cart: FiShoppingCart,
  user: FiUser,
  users: FiUsers,
  heart: FiHeart,
  "heart-filled": FaHeart,
  
  // UI
  mail: FiMail,
  download: FiDownload,
  location: FiMapPin,
  close: MdClose,
  add: MdAdd,
  plus: MdAdd,
  remove: MdRemove,
  minus: MdRemove,
  share: FiShare2,
  link: FiLink,
  checkCircle: FiCheckCircle,
  trash: FiTrash2,
  delete: FiTrash2,
  logout: FiLogOut,
  dashboard: FiGrid,
  book: FaBookOpen,
  
  // Navigation
  menu: MdMenu,
  arrowLeft: MdKeyboardArrowLeft,
  arrowRight: MdKeyboardArrowRight,
  arrowUp: MdKeyboardArrowUp,
  arrowDown: MdKeyboardArrowDown,
  chevronDown: FiChevronDown,
  chevronRight: FiChevronRight,
  chevronLeft: FiChevronLeft,
  back: MdArrowBack,
  
  // Form / Input Icons
  search: FiSearch,
  eye: FiEye,
  eyeOff: FiEyeOff,
  lock: FiLock,
  phone: FiPhone,
  calendar: FiCalendar,
  clock: FiClock,
  check: FiCheck,
  alertCircle: FiAlertCircle,
  info: FiInfo,
  loader: FiLoader,
  home: FiHome,
  settings: FiSettings,
  shield: FiShield,
  document: FiFileText,
  
  // Rating
  starHalf: MdStarHalf,
  star: MdOutlineStar,
  starBorder: MdStarBorder,

  // Media Controls
  play: FiPlay,
  pause: FiPause,
  volume: FiVolume2,
  volumeOff: FiVolumeX,

  // Feature Icons
  zap: FiZap,
  code: FiCode,
  paintBrush: FiEdit,
  globe: FiGlobe,
  package: FiPackage,
  layout: FiLayout,
  activity: FiActivity,
  headphones: FiHeadphones,

  // Theme Icons
  sun: FiSun,
  moon: FiMoon,
};

/**
 * Icon component
 * Renders an icon by name from the icon registry
 * 
 * @param {string} name - Icon name from ICONS registry
 * @param {number} size - Icon size in pixels (default: 18)
 * @param {string} color - Icon color
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to icon component
 * 
 * @example
 * <Icon name="heart" size={24} color="red" />
 * <Icon name="search" className="search-icon" />
 */
export function Icon({ name, size = 18, color, className, ...props }) {
  const IconComponent = ICONS[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} color={color} className={className} {...props} />;
}
