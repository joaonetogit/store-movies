import { ISocialLink } from '@/types/constants/DataFooterSocials';
import { Github, Linkedin } from 'lucide-react';

export const DataFooterSocials: ISocialLink[] = [
  {
    link: 'https://www.linkedin.com/in/joao-pinheiro-neto/',
    icon: <Linkedin size={24} />,
  },
  {
    link: 'https://github.com/joaonetogit',
    icon: <Github size={24} />,
  },
] as const;
