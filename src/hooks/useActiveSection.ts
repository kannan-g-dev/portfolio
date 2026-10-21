import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[], defaultSection: string = 'home'): string {
  const [activeSection, setActiveSection] = useState<string>(defaultSection);

  useEffect(() => {
    // Return early if running on server or empty sections
    if (typeof window === 'undefined' || sectionIds.length === 0) return;

    const handleScroll = () => {
      // Find the section closest to viewport top + offset
      const scrollPosition = window.scrollY + 140; // 140px offset for sticky header

      let current = defaultSection;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = sectionId;
            break;
          }
        }
      }

      // If at the very bottom of the page, activate the last section (typically contact)
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        current = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(current);
    };

    // Run once on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, defaultSection]);

  return activeSection;
}
