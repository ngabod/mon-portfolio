import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import {
  InstagramIcon,
  LinkedinIcon,
  TikTokIcon,
  TwitterIcon,
  WhatsAppIcon,
} from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const socialLinks = [
  { name: 'LinkedIn', href: personalInfo.socials.linkedin, Icon: LinkedinIcon },
  { name: 'Instagram', href: personalInfo.socials.instagram, Icon: InstagramIcon },
  { name: 'TikTok', href: personalInfo.socials.tiktok, Icon: TikTokIcon },
  { name: 'Twitter / X', href: personalInfo.socials.twitter, Icon: TwitterIcon },
  { name: 'WhatsApp', href: personalInfo.socials.whatsapp, Icon: WhatsAppIcon },
];

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = encodeURIComponent(`Message de ${name}`);
    const body = encodeURIComponent(`${message}\n\nDe : ${name}\nEmail : ${email}`);

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#f7fbff] py-24">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-yellow-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full border border-sky-200 bg-white px-4 py-1.5 text-sm font-semibold text-sky-700">
            Contact
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Écrivez-moi
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Décrivez votre besoin et votre application de messagerie s’ouvrira pour m’envoyer votre message.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-sky-900/5 sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-slate-700">
                Votre nom
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-slate-700">
                Votre adresse e-mail
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                placeholder="vous@exemple.com"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-slate-700">
              Votre message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows="6"
              required
              className="w-full resize-y rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              placeholder="Écrivez votre message ici..."
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700 sm:w-auto"
          >
            Envoyer le message
            <Send className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:gap-8">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 font-medium text-slate-600 transition hover:text-sky-700"
          >
            <Mail className="h-4 w-4 text-sky-600" />
            {personalInfo.email}
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 font-medium text-slate-600 transition hover:text-sky-700"
          >
            <Phone className="h-4 w-4 text-sky-600" />
            {personalInfo.phone}
          </a>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-8 text-center">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-500">
            Retrouvez-moi sur les réseaux
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 hover:shadow-md"
              >
                <Icon className="h-4 w-4" />
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
