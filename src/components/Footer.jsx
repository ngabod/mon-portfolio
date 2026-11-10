import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import {
  InstagramIcon,
  LinkedinIcon,
  TikTokIcon,
  TwitterIcon,
  WhatsAppIcon,
} from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const currentYear = new Date().getFullYear();

const socialLinks = [
  { name: 'LinkedIn', href: personalInfo.socials.linkedin, Icon: LinkedinIcon },
  { name: 'Instagram', href: personalInfo.socials.instagram, Icon: InstagramIcon },
  { name: 'TikTok', href: personalInfo.socials.tiktok, Icon: TikTokIcon },
  { name: 'Twitter / X', href: personalInfo.socials.twitter, Icon: TwitterIcon },
  { name: 'WhatsApp', href: personalInfo.socials.whatsapp, Icon: WhatsAppIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-sky-600 bg-sky-700 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <a href="#hero" className="text-lg font-bold tracking-tight text-white">
              {personalInfo.name}
            </a>
            <p className="mt-1 text-sm text-sky-100">{personalInfo.role}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="rounded-lg border border-white/20 p-2.5 text-white transition hover:border-yellow-300 hover:bg-white/10 hover:text-yellow-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-sm sm:flex-row">
          <div className="flex flex-col items-center gap-3 text-sky-100 sm:flex-row sm:gap-6">
            <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 hover:text-yellow-300">
              <Mail className="h-4 w-4 text-yellow-300" />
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 hover:text-yellow-300"
            >
              <Phone className="h-4 w-4 text-yellow-300" />
              {personalInfo.phone}
            </a>
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-yellow-300"
          >
            Haut de page
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        <p className="text-center text-xs text-sky-100/80">
          © {currentYear} {personalInfo.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
