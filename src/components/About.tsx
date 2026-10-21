import React from 'react';
import { SectionHeading } from './SectionHeading';
import { portfolioConfig } from '../config/portfolio';
import { Layers, Database, ShieldAlert, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const { about } = portfolioConfig;

  const focusIcons = [
    <Layers key="api" className="w-5 h-5 text-brand-blue" />,
    <Database key="data" className="w-5 h-5 text-brand-indigo" />,
    <Cpu key="consistency" className="w-5 h-5 text-brand-cyan" />,
    <ShieldAlert key="debug" className="w-5 h-5 text-brand-violet" />,
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-t border-light-border dark:border-dark-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Background & Context"
          title="Practical backend engineering, production support, and reliable data flow"
          description="How I approach day-to-day software development, systems investigation, and engineering at Profit.co."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-4 text-base text-light-muted dark:text-dark-muted leading-relaxed">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Engineering Focus Grid (no arbitrary metrics/counters) */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-light-subtle dark:text-dark-subtle mb-4">
              Core Engineering Focus
            </h3>
            <div className="grid grid-cols-1 gap-3.5">
              {about.engineeringFocus.map((focus, index) => (
                <div
                  key={focus.title}
                  className="card-surface p-4 flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-dark-surface/80 border border-light-border dark:border-white/5 shrink-0 mt-0.5">
                    {focusIcons[index % focusIcons.length]}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-light-text dark:text-dark-text">
                      {focus.title}
                    </h4>
                    <p className="mt-1 text-xs text-light-muted dark:text-dark-muted leading-relaxed">
                      {focus.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
