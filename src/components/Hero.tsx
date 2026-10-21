import React from 'react';
import { ArrowRight, Mail, MapPin, Database, Server, Search, CheckCircle2 } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';

export const Hero: React.FC = () => {
  const { personal } = portfolioConfig;

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      aria-label="Hero Introduction"
    >
      {/* Subtle technical background grid / glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-brand-blue/10 via-brand-indigo/10 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Headline, Intro Copy, CTAs, Badges */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top metadata row: Location & optional career interest */}
            <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-dark-card border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted font-mono">
                <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                {personal.location}
              </span>

              {personal.careerInterest.enabled && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-blue/10 dark:bg-brand-blue/15 text-brand-blue border border-brand-blue/20 font-medium text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                  {personal.careerInterest.statusText}
                </span>
              )}
            </div>

            {/* Exact primary heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-light-text dark:text-dark-text leading-tight sm:leading-tight">
              {personal.heroHeading}
            </h1>

            {/* Exact supporting headline */}
            <p className="mt-3 text-lg sm:text-xl font-medium text-brand-blue dark:text-blue-400">
              {personal.heroHeadline}
            </p>

            {/* Exact introductory paragraph */}
            <p className="mt-4 text-base sm:text-lg text-light-muted dark:text-dark-muted leading-relaxed max-w-2xl">
              {personal.heroIntroduction}
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={personal.primaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-blue hover:bg-blue-600 text-white font-medium text-sm transition-all shadow-md shadow-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue group"
              >
                <span>{personal.primaryCta.text}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href={personal.secondaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-light-border dark:border-dark-border bg-white dark:bg-dark-card hover:bg-slate-50 dark:hover:bg-dark-cardHover text-light-text dark:text-dark-text font-medium text-sm transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                <Mail className="w-4 h-4 text-brand-blue" />
                <span>{personal.secondaryCta.text}</span>
              </a>
            </div>

            {/* Key Technology Badges */}
            <div className="mt-10 pt-6 border-t border-light-border dark:border-dark-border">
              <p className="text-xs font-mono uppercase tracking-wider text-light-subtle dark:text-dark-subtle mb-3">
                Core Engineering Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {personal.keyTechBadges.map((tech) => (
                  <span
                    key={tech}
                    className="tech-badge"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Custom CSS/SVG Engineering Visual & Monogram */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md card-surface p-6 relative overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-light-border dark:border-dark-border">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-xs text-light-muted dark:text-dark-muted">
                    system-runtime.java
                  </span>
                </div>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  Online
                </span>
              </div>

              {/* Profile Monogram & Summary */}
              <div className="flex items-center gap-4 mb-5 p-3 rounded-lg bg-slate-50 dark:bg-dark-surface/60 border border-light-border dark:border-white/5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-blue to-brand-indigo flex items-center justify-center text-white font-mono font-bold text-xl shadow-md shrink-0">
                  {personal.monogram}
                </div>
                <div>
                  <h2 className="font-semibold text-sm text-light-text dark:text-dark-text">
                    {personal.name}
                  </h2>
                  <p className="text-xs text-light-muted dark:text-dark-muted font-mono">
                    {personal.title}
                  </p>
                  <p className="text-[11px] text-light-subtle dark:text-dark-subtle mt-0.5">
                    {personal.currentCompany} · {personal.experienceSummary}
                  </p>
                </div>
              </div>

              {/* Architecture Blueprint Visual */}
              <div className="space-y-2.5 font-mono text-xs">
                {/* Layer 0: Frontend Layer */}
                <div className="p-2.5 rounded-md bg-slate-50 dark:bg-dark-surface/50 border border-light-border dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
                    <span>Frontend Client Layer</span>
                  </div>
                  <span className="text-[10px] text-rose-500 font-semibold px-1.5 py-0.5 rounded bg-rose-500/10">
                    Angular · TypeScript
                  </span>
                </div>

                {/* Flow indicator */}
                <div className="flex justify-center -my-1 text-light-subtle dark:text-dark-subtle text-[10px]">
                  <span>↓ REST API requests</span>
                </div>

                {/* Layer 1: API Layer */}
                <div className="p-2.5 rounded-md bg-slate-50 dark:bg-dark-surface/50 border border-light-border dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Server className="w-3.5 h-3.5 text-brand-blue" />
                    <span>REST Services & Pub/Sub</span>
                  </div>
                  <span className="text-[10px] text-brand-blue font-semibold px-1.5 py-0.5 rounded bg-brand-blue/10">
                    Java 17 · Spring Boot
                  </span>
                </div>

                {/* Flow indicator */}
                <div className="flex justify-center -my-1 text-light-subtle dark:text-dark-subtle text-[10px]">
                  <span>↓ dual-read / async-sync</span>
                </div>

                {/* Layer 2: Persistence & Search Engine */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-md bg-slate-50 dark:bg-dark-surface/50 border border-light-border dark:border-white/5">
                    <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 text-[11px] font-semibold mb-1">
                      <Database className="w-3 h-3 text-emerald-400" />
                      <span>PostgreSQL/SQL</span>
                    </div>
                    <p className="text-[10px] text-light-subtle dark:text-dark-subtle">
                      ACID transactions
                    </p>
                  </div>

                  <div className="p-2.5 rounded-md bg-slate-50 dark:bg-dark-surface/50 border border-light-border dark:border-white/5">
                    <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 text-[11px] font-semibold mb-1">
                      <Search className="w-3 h-3 text-amber-400" />
                      <span>Elasticsearch</span>
                    </div>
                    <p className="text-[10px] text-light-subtle dark:text-dark-subtle">
                      -25% search latency
                    </p>
                  </div>
                </div>

                {/* Consistency Verification Check */}
                <div className="p-2.5 rounded-md bg-emerald-500/5 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center gap-2 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Consistency verified: OKR rollups & search synchronized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
