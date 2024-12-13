import { SocialLink } from '../types';
import { 
  LinkedInIcon, 
  WhatsAppIcon, 
  EmailIcon 
} from '../components/icons';
import { contactInfo } from './contact';

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    href: contactInfo.linkedin,
    icon: LinkedInIcon
  },
  {
    name: 'WhatsApp',
    href: `https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, '')}`,
    icon: WhatsAppIcon
  },
  {
    name: 'Email',
    href: `mailto:${contactInfo.email}`,
    icon: EmailIcon
  }
];