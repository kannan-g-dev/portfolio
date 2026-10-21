import React from 'react';
import { ProjectCaseStudy, isValidUrl } from '../config/portfolio';
import { ArrowUpRight, Github, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  onOpenDetails: (project: ProjectCaseStudy) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenDetails,
}) => {
  const hasGithub = isValidUrl(project.githubUrl);
  const hasDemo = isValidUrl(project.demoUrl);

  return (
    <article className="card-surface p-6 flex flex-col justify-between group h-full">
      <div>
        {/* Category kicker & action */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-brand-blue font-semibold px-2 py-0.5 rounded bg-brand-blue/10 dark:bg-brand-blue/15">
            Case Study
          </span>
          <span className="text-[11px] font-mono text-light-subtle dark:text-dark-subtle">
            Profit.co OKR Platform
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-light-text dark:text-dark-text group-hover:text-brand-blue transition-colors">
          {project.title}
        </h3>

        {/* Overview Summary */}
        <p className="mt-2.5 text-xs sm:text-sm text-light-muted dark:text-dark-muted leading-relaxed line-clamp-3">
          {project.summary}
        </p>

        {/* Challenge highlight */}
        <div className="mt-4 p-3 rounded-lg bg-slate-50 dark:bg-dark-surface/60 border border-light-border dark:border-white/5">
          <p className="text-[11px] font-mono text-light-subtle dark:text-dark-subtle font-medium uppercase mb-1">
            Challenge:
          </p>
          <p className="text-xs text-light-muted dark:text-dark-muted line-clamp-2">
            {project.challenge}
          </p>
        </div>

        {/* Engineering Themes */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.engineeringThemes.slice(0, 3).map((theme) => (
            <span
              key={theme}
              className="inline-flex items-center gap-1 text-[11px] font-mono text-light-subtle dark:text-dark-subtle"
            >
              <Layers className="w-2.5 h-2.5 text-brand-blue" />
              {theme}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-light-border dark:border-dark-border">
        {/* Technologies Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="tech-badge !text-[11px] !py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Verified outcome snippet if available */}
        {project.outcome && (
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 mb-4 font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Outcome verified in production</span>
          </div>
        )}

        {/* Actions row: View Case Study button + optional external links */}
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded px-1 py-0.5"
          >
            <span>Read Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <div className="flex items-center gap-2">
            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-slate-100 dark:hover:bg-dark-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                aria-label={`View GitHub repository for ${project.title}`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {hasDemo && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-slate-100 dark:hover:bg-dark-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                aria-label={`View live demo for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
