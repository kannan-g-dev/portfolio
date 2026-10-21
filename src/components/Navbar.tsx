import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { portfolioConfig } from '../config/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';

const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Approach', href: '#approach', id: 'approach' },
  { label: 'Resume', href: '#resume', id: 'resume' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(
    navItems.map((item) => item.id),
    'home'
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-light-bg/85 dark:bg-dark-bg/85 backdrop-blur-md border-b border-light-border dark:border-dark-border py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 font-bold tracking-tight text-light-text dark:text-dark-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
            aria-label="Kannan Ganesan - Home"
          >
            <span className="w-8 h-8 rounded-lg bg-dark-card border border-white/10 dark:border-white/10 flex items-center justify-center font-mono text-sm font-bold text-white shadow-sm group-hover:border-brand-blue/50 transition-colors">
              K<span className="text-brand-blue">G</span>
            </span>
            <span className="font-semibold text-sm hidden sm:inline-block">
              {portfolioConfig.personal.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${
                    isActive
                      ? 'text-brand-blue bg-brand-blue/10 dark:bg-brand-blue/15 font-semibold'
                      : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-slate-100 dark:hover:bg-dark-card/50'
                  }`}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right actions: Resume link, Theme toggle, Mobile hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Resume CTA in header */}
            <a
              href="#resume"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:border-brand-blue/50 dark:hover:border-brand-blue/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              <FileText className="w-3.5 h-3.5 text-brand-blue" />
              <span>Resume</span>
            </a>

            {/* Dark / Light Mode Switch */}
            <ThemeToggle />

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-slate-100 dark:hover:bg-dark-card border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-0 top-[57px] bg-black/60 backdrop-blur-sm z-30"
          onClick={closeMenu}
        >
          <div
            className="bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border px-4 py-6 shadow-xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={closeMenu}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-brand-blue bg-brand-blue/10 dark:bg-brand-blue/15 font-semibold'
                        : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-slate-100 dark:hover:bg-dark-card'
                    }`}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-4 mt-2 border-t border-light-border dark:border-dark-border">
                <a
                  href="#resume"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-brand-blue text-white font-medium text-sm hover:bg-blue-600 transition-colors shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume Section</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
