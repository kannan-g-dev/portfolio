import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import { portfolioConfig, ProjectCaseStudy } from '../config/portfolio';

export const Projects: React.FC = () => {
  const { caseStudies } = portfolioConfig;
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetails = (project: ProjectCaseStudy) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseDetails = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-light-border dark:border-dark-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Engineering Case Studies"
          title="Featured Production Problems & Solutions"
          description="Detailed technical investigations from my work on the Profit.co OKR platform, covering API reliability, parent-child data synchronization, latency optimization, and Elasticsearch search consistency."
        />

        {/* Disclaimer / Labeling */}
        <div className="mb-8 p-3.5 rounded-lg bg-slate-50 dark:bg-dark-surface/50 border border-light-border dark:border-white/5 flex items-start gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 mt-2" />
          <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed">
            <strong className="text-light-text dark:text-dark-text">Professional Case Studies:</strong> These studies represent real backend engineering workflows solved within enterprise product code. Implementation details are generalized to protect confidential customer data and proprietary internal infrastructure.
          </p>
        </div>

        {/* 2x2 Grid of 4 Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* Modal for detailed case study inspection */}
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseDetails}
        />
      </div>
    </section>
  );
};
