import React from 'react';
import { SectionHeading } from './SectionHeading';
import { portfolioConfig } from '../config/portfolio';
import { Code2, Server, Database, Wrench, Layout, CheckSquare } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  programming: <Code2 className="w-5 h-5 text-brand-blue" />,
  backend: <Server className="w-5 h-5 text-brand-indigo" />,
  dataAndSearch: <Database className="w-5 h-5 text-brand-cyan" />,
  tools: <Wrench className="w-5 h-5 text-brand-violet" />,
  frontend: <Layout className="w-5 h-5 text-amber-500" />,
  engineeringPractices: <CheckSquare className="w-5 h-5 text-emerald-500" />,
};

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioConfig;

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-light-border dark:border-dark-border">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Technical Skills"
          title="Technologies, tools, and engineering disciplines"
          description="A categorized breakdown of tools used in daily backend production, search operations, and ongoing engineering practices."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillCategories).map(([key, category]) => (
            <div
              key={key}
              className="card-surface p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-dark-surface/80 border border-light-border dark:border-white/5">
                    {categoryIcons[key] || <Code2 className="w-5 h-5 text-brand-blue" />}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-light-text dark:text-dark-text">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-light-muted dark:text-dark-muted mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="tech-badge"
                    >
                      <span>{skill.name}</span>
                      {skill.tag && skill.tag !== 'Core' && (
                        <span className="ml-1.5 text-[10px] opacity-75 font-normal">
                          · {skill.tag}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend / Context note */}
        <div className="mt-8 pt-4 flex flex-wrap items-center gap-6 text-xs text-light-subtle dark:text-dark-subtle font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-blue" />
            <span>Core: Applied in daily production & backend maintenance</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Practiced: Applied in integration workflows & tasks</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            <span>No arbitrary percentage ratings or invented senior claims</span>
          </div>
        </div>
      </div>
    </section>
  );
};
