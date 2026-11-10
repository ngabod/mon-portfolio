import React, { useState } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [photoUnavailable, setPhotoUnavailable] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#f7fbff] py-28 sm:py-32"
    >
      <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-yellow-200/50 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <div className="relative mx-auto aspect-square w-[min(76vw,22rem)] rounded-full bg-gradient-to-br from-sky-400 via-sky-300 to-yellow-300 p-2 shadow-2xl shadow-sky-900/15 sm:w-80 lg:w-full">
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border-8 border-white bg-sky-100">
              {!photoUnavailable && personalInfo.photo ? (
                <img
                  src={personalInfo.photo}
                  alt={`Portrait de ${personalInfo.name}`}
                  className="h-full w-full object-cover"
                  onError={() => setPhotoUnavailable(true)}
                />
              ) : (
                <span className="select-none text-7xl font-extrabold tracking-tight text-sky-700 sm:text-8xl">
                  DN
                </span>
              )}
            </div>
            <span className="absolute bottom-8 right-1 h-8 w-8 rounded-full border-4 border-white bg-yellow-400 sm:bottom-10 sm:right-2 sm:h-10 sm:w-10" />
          </div>
        </div>

        <div className="text-center lg:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            {personalInfo.role}
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            David <span className="cyber-gradient-text">NGABO</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl lg:mx-0">
            {personalInfo.bio}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:bg-sky-700"
            >
              Me contacter
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-700"
            >
              Voir mes projets
            </a>
          </div>
          <a
            href="#about"
            className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-sky-700"
          >
            Découvrir mon parcours
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
