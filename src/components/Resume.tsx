import React, { useState, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { portfolioConfig } from '../config/portfolio';
import { FileText, Download, ExternalLink, Mail, Info } from 'lucide-react';

export const Resume: React.FC = () => {
  const { resume, contact } = portfolioConfig;
  const [isAvailable, setIsAvailable] = useState<boolean>(resume.enabled);
  const [checking, setChecking] = useState<boolean>(resume.enabled);

  useEffect(() => {
    // If enabled in configuration, verify file actually exists via HEAD request
    if (resume.enabled) {
      let isMounted = true;
      fetch(resume.filePath, { method: 'HEAD' })
        .then((res) => {
          if (isMounted) {
            setIsAvailable(res.ok);
            setChecking(false);
          }
        })
        .catch(() => {
          if (isMounted) {
            setIsAvailable(false);
            setChecking(false);
          }
        });
      return () => {
        isMounted = false;
      };
    } else {
      setIsAvailable(false);
      setChecking(false);
    }
  }, [resume.enabled, resume.filePath]);

  return (
    <section id="resume" className="py-16 md:py-24 border-t border-light-border dark:border-dark-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Curriculum Vitae"
          title="Resume & Professional Background"
          description="Detailed summary of my work experience, backend technical stack, and software engineering background."
        />

        <div className="max-w-2xl card-surface p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/15 text-brand-blue shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-light-text dark:text-dark-text">
                Kannan Ganesan — Software Engineer Resume
              </h3>
              <p className="mt-1 text-sm text-light-muted dark:text-dark-muted">
                Highlights 4+ years of backend engineering experience, Java 17/Spring Boot microservices, Elasticsearch tuning, and Angular full-stack work at Profit.co.
              </p>
            </div>
          </div>

          {/* Availability Handling */}
          {checking ? (
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-dark-surface/50 border border-light-border dark:border-white/5 text-xs font-mono text-light-muted dark:text-dark-muted">
              Checking resume availability...
            </div>
          ) : isAvailable ? (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={resume.filePath}
                  download={resume.fileName}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-blue hover:bg-blue-600 text-white font-medium text-xs sm:text-sm transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </a>

                <a
                  href={resume.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-light-border dark:border-dark-border bg-white dark:bg-dark-card hover:bg-slate-50 dark:hover:bg-dark-cardHover text-light-text dark:text-dark-text font-medium text-xs sm:text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  <ExternalLink className="w-4 h-4 text-brand-blue" />
                  <span>View in New Tab</span>
                </a>
              </div>
              <p className="text-xs text-light-subtle dark:text-dark-subtle font-mono">
                Filename: {resume.fileName}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-surface/60 border border-light-border dark:border-white/5 flex items-start gap-3">
                <Info className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                <div className="text-xs text-light-muted dark:text-dark-muted leading-relaxed">
                  <p className="font-medium text-light-text dark:text-dark-text mb-1">
                    Resume available upon request
                  </p>
                  <p>
                    A customized, up-to-date PDF resume is available directly upon request. You can also drop your <code className="font-mono text-brand-blue bg-slate-100 dark:bg-dark-card px-1 py-0.5 rounded">resume.pdf</code> into the project's <code className="font-mono text-brand-blue bg-slate-100 dark:bg-dark-card px-1 py-0.5 rounded">public/</code> directory and set <code className="font-mono text-brand-blue bg-slate-100 dark:bg-dark-card px-1 py-0.5 rounded">enabled: true</code> in <code className="font-mono text-brand-blue bg-slate-100 dark:bg-dark-card px-1 py-0.5 rounded">portfolio.ts</code>.
                  </p>
                </div>
              </div>

              <a
                href={`mailto:${contact.email}?subject=Resume%20Request%20-%20Kannan%20Ganesan`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-blue hover:bg-blue-600 text-white font-medium text-xs sm:text-sm transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                <Mail className="w-4 h-4" />
                <span>Request Resume via Email</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
