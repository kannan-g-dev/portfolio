import React from 'react';
import { SectionHeading } from './SectionHeading';
import { portfolioConfig } from '../config/portfolio';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioConfig;

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-light-border dark:border-dark-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Career Experience"
          title="Professional Software Engineering"
          description="Direct engineering experience building and maintaining enterprise OKR backend services, search integration, and data reliability."
        />

        <div className="space-y-8">
          {experience.map((entry, index) => (
            <div
              key={`${entry.company}-${index}`}
              className="card-surface p-6 sm:p-8"
            >
              {/* Header row: Role, Company, Period, Location */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-light-border dark:border-dark-border">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-brand-blue/10 dark:bg-brand-blue/15 text-brand-blue">
                      <Briefcase className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
                        {entry.role}
                      </h3>
                      <p className="text-sm font-semibold text-brand-blue dark:text-blue-400">
                        {entry.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-light-muted dark:text-dark-muted">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 dark:bg-dark-surface/60 border border-light-border dark:border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                    {entry.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 dark:bg-dark-surface/60 border border-light-border dark:border-white/5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {entry.location}
                  </span>
                </div>
              </div>

              {/* Role Overview */}
              <p className="mt-6 text-sm sm:text-base text-light-muted dark:text-dark-muted leading-relaxed">
                {entry.overview}
              </p>

              {/* Scannable Responsibility Groups */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {entry.responsibilities.map((group) => (
                  <div
                    key={group.category}
                    className="p-4 rounded-lg bg-slate-50 dark:bg-dark-surface/50 border border-light-border dark:border-white/5"
                  >
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-light-text dark:text-dark-text mb-3">
                      {group.category}
                    </h4>
                    <ul className="space-y-2.5">
                      {group.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-light-muted dark:text-dark-muted leading-relaxed"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Technical Focus Tags */}
              <div className="mt-6 pt-5 border-t border-light-border dark:border-dark-border">
                <span className="text-xs font-mono uppercase tracking-wider text-light-subtle dark:text-dark-subtle block mb-2">
                  Technical Focus:
                </span>
                <div className="flex flex-wrap gap-2">
                  {entry.technicalFocus.map((tech) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};
