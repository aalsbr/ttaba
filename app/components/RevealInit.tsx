'use client';

import { useEffect } from 'react';

/**
 * Replicates the original IntersectionObserver that fades `.reveal` elements in
 * as they scroll into view. Runs once after hydration over the whole document.
 */
export function RevealInit() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
