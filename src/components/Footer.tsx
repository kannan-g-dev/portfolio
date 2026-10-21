import React from 'react';
import { ArrowUp, Github, Mail, Linkedin } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';

export const Footer: React.FC = () => {
  const { personal, contact } = portfolioConfig;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-light-border dark:border-dark-border bg-slate-50/50 dark:bg-dark-surface/40">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-light-border dark:border-dark-border">
          {/* Left info */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-dark-card border border-white/10 flex items-center justify-center font-mono text-sm font-bold text-white shadow-sm">
              K<span className="text-brand-blue">G</span>
            </span>
            <div>
              <p className="text-sm font-bold text-light-text dark:text-dark-text">
                {personal.name}
              </p>
              <p className="text-xs text-light-muted dark:text-dark-muted font-mono">
                {personal.title} · {personal.location}
              </p>
            </div>
          </div>

          {/* Center / Right Links */}
          <div className="flex items-center gap-4 text-xs font-mono text-light-muted dark:text-dark-muted">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-1.5 hover:text-brand-blue transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{contact.email}</span>
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-brand-blue transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            {contact.linkedinUrl && (
              <>
                <span aria-hidden="true">·</span>
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-brand-blue transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </>
            )}
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-light-border dark:border-dark-border bg-white dark:bg-dark-card text-xs font-mono text-light-muted dark:text-dark-muted hover:text-brand-blue dark:hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-light-subtle dark:text-dark-subtle font-mono">
          <p>© {currentYear} {personal.name}. All rights reserved.</p>
          <p>Built with React, Vite, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};
