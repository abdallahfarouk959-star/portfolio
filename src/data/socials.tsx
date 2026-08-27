import { Social } from '../types';
import { Linkedin, Github, Facebook, Instagram } from 'lucide-react';

export const SOCIALS: Social[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.5 2 2.05 6.45 2.05 12c0 2.11.55 4.07 1.6 5.83L2 22l4.36-1.42C8 21.39 10 22 12.04 22 17.58 22 22.03 17.55 22.03 12 22.03 6.45 17.58 2 12.04 2zM16.6 14.7c-.26.73-1.49 1.4-2.05 1.49-.53.09-1.24.13-3.15-.62-2.77-1.05-4.58-3.78-4.72-3.98-.14-.2-1.15-1.66-1.15-3.18 0-1.52.72-2.26.97-2.56.25-.3.6-.36.8-.36.2 0 .44 0 .67 0 .22 0 .52-.07.79.53.26.6.88 1.98.95 2.12.07.14.11.3.03.49-.09.19-.13.3-.25.48-.12.18-.26.39-.37.53-.12.14-.24.3-.11.59.13.29.57.96 1.23 1.55.85.74 1.57.95 1.87 1.07.3.12.48.1.66-.06.18-.16.74-.86.95-1.16.21-.29.44-.24.73-.14.29.1 1.86.88 2.18 1.04.32.16.53.24.48.39-.04.15-.22.48-.48 1.21z" />
      </svg>
    ),
    link: "https://wa.me/201150220510",
    label: "WhatsApp",
  },
  {
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/abdallah-m-farouk-8959b1300/",
    label: "LinkedIn",
  },
  {
    icon: <Github />,
    link: "https://github.com/abdallahfarouk959-star",
    label: "GitHub",
  },
  {
    icon: <Facebook />,
    link: "https://www.facebook.com/abdallah.farouk.35110/",
    label: "Facebook",
  },
  {
    icon: <Instagram />,
    link: "https://www.instagram.com/abdallah_farouk_7/",
    label: "Instagram",
  },
];
