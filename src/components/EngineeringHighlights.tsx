import React from 'react';
import { SectionHeading } from './SectionHeading';
import { portfolioConfig } from '../config/portfolio';
import { Zap, Database, ShieldCheck, BookOpen, Check } from 'lucide-react';

const iconMap = {
  Zap: <Zap className="w-5 h-5 text-amber-500" />,
  Database: <Database className="w-5 h-5 text-brand-blue" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
  BookOpen: <BookOpen className="w-5 h-5 text-brand-indigo" />,
};

export const EngineeringHighlights: React.FC = () => {
  const { engineeringApproach } = portfolioConfig;

  return (
    <section id="approach" className="py-16 md:py-24 border-t border-light-border dark:border-dark-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Engineering Philosophy"
          title="How I Approach Engineering"
          description="My core principles when designing services, diagnosing production behavior, and validating system integrity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineeringApproach.map((item) => (
            <div
              key={item.title}
              className="card-surface p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-dark-surface/80 border border-light-border dark:border-white/5">
                    {iconMap[item.icon]}
                  </div>
                  <h3 className="text-lg font-bold text-light-text dark:text-dark-text">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-light-muted dark:text-dark-muted leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-light-border dark:border-dark-border">
                <ul className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs font-mono text-light-subtle dark:text-dark-subtle"
                    >
                      <Check className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
