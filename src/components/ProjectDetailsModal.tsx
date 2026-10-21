import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers, AlertCircle, ExternalLink, Github, Wrench } from 'lucide-react';
import { ProjectCaseStudy, isValidUrl } from '../config/portfolio';

interface ProjectDetailsModalProps {
  project: ProjectCaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const hasGithub = isValidUrl(project.githubUrl);
  const hasDemo = isValidUrl(project.demoUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-white dark:bg-dark-card border border-light-border dark:border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header: Badge, Title & Close Button */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-light-border dark:border-dark-border">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-brand-blue font-semibold px-2 py-0.5 rounded bg-brand-blue/10">
                Engineering Case Study
              </span>
              <span className="text-[11px] font-mono text-light-subtle dark:text-dark-subtle">
                · Enterprise OKR Context
              </span>
            </div>
            <h3
              id="case-study-title"
              className="text-xl sm:text-2xl font-bold text-light-text dark:text-dark-text"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-slate-100 dark:hover:bg-dark-surface border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            aria-label="Close case study details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content sections */}
        <div className="mt-6 space-y-6">
          {/* Overview & Context */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-light-subtle dark:text-dark-subtle mb-2">
              Context & Overview
            </h4>
            <p className="text-sm text-light-muted dark:text-dark-muted leading-relaxed">
              {project.summary}
            </p>
            <p className="mt-2 text-xs text-light-subtle dark:text-dark-subtle italic bg-slate-50 dark:bg-dark-surface/50 p-2.5 rounded border border-light-border dark:border-white/5">
              {project.context}
            </p>
          </div>

          {/* The Engineering Challenge */}
          <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold text-xs uppercase tracking-wider mb-2 font-mono">
              <AlertCircle className="w-4 h-4" />
              <span>The Engineering Challenge</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Technical Approach & Implementation */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-light-subtle dark:text-dark-subtle mb-3">
              <Wrench className="w-4 h-4 text-brand-blue" />
              <span>Engineering Approach & Architecture</span>
            </div>
            <ul className="space-y-2.5">
              {project.approach.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-light-muted dark:text-dark-muted leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-full bg-brand-blue/10 dark:bg-brand-blue/15 text-brand-blue flex items-center justify-center text-[11px] font-mono font-semibold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Themes */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-light-subtle dark:text-dark-subtle mb-2.5">
              <Layers className="w-4 h-4 text-brand-indigo" />
              <span>Core Themes</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.engineeringThemes.map((theme) => (
                <span
                  key={theme}
                  className="text-xs px-2.5 py-1 rounded bg-slate-100 dark:bg-dark-surface border border-light-border dark:border-white/10 text-light-text dark:text-dark-text font-mono"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>

          {/* Outcome (when verified) */}
          {project.outcome && (
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-2 font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Engineering Outcome</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.outcome}
              </p>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-light-subtle dark:text-dark-subtle mb-2">
              Stack & Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="tech-badge"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Optional Links - Only rendered if valid URLs exist */}
          {(hasGithub || hasDemo) && (
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-light-border dark:border-dark-border">
              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-light-border dark:border-dark-border text-xs font-medium hover:border-brand-blue transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              )}
              {hasDemo && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-blue text-white text-xs font-medium hover:bg-blue-600 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
