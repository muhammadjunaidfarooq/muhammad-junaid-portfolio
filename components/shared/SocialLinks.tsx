import Link from 'next/link';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/muhammadjunaidfarooq',
    label: 'LinkedIn Profile'
  },
  {
    icon: FaGithub,
    href: 'https://github.com/muhammadjunaidfarooq',
    label: 'GitHub Profile'
  },
  {
    icon: FaXTwitter,
    href: 'https://x.com/junaidfarooq202',
    label: 'X (Twitter) Profile'
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/junaidfarooq202',
    label: 'Instagram Profile'
  },
  {
    icon: FaFacebook,
    href: 'https://web.facebook.com/junaidfarooq202',
    label: 'Facebook Profile'
  },
];

export const SocialLinks = () => (
  <ul className="social-list">
    {socialLinks.map((social) => (
      <li key={social.href} className="social-item">
        <Link
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={social.label}
        >
          <social.icon />
        </Link>
      </li>
    ))}
  </ul>
);