import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-sky-600 bg-sky-700 py-3 shadow-sm'
          : 'border-sky-600/50 bg-sky-700/95 py-4 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-5">
          <a href="#hero" onClick={closeMenu} className="flex shrink-0 items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 font-bold text-sky-950 shadow-md shadow-sky-950/20">
              DN
            </span>
            <span className="font-bold tracking-tight text-white">{personalInfo.name}</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-white transition hover:bg-white/15 hover:text-yellow-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-yellow-400 px-4 py-2.5 text-sm font-semibold text-sky-950 transition hover:bg-yellow-300 lg:inline-flex"
          >
            Me contacter
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            className="rounded-xl border border-white/30 bg-white/10 p-2 text-white transition hover:bg-white/20 lg:hidden"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          className="absolute left-0 right-0 top-full border-b border-sky-600 bg-sky-700 px-4 pb-5 pt-3 shadow-lg lg:hidden"
          aria-label="Navigation mobile"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-medium text-white transition hover:bg-white/15 hover:text-yellow-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
