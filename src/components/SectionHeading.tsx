import React from 'react';

interface SectionHeadingProps {
  id?: string;
  kicker: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  kicker,
  title,
  description,
  centered = false,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="h-px w-6 bg-brand-blue/60" aria-hidden="true"></span>
        <p className="text-xs font-mono uppercase tracking-widest text-brand-blue font-semibold">
          {kicker}
        </p>
      </div>
      <h2
        id={id}
        className="text-2xl sm:text-3xl font-bold tracking-tight text-light-text dark:text-dark-text"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-light-muted dark:text-dark-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
