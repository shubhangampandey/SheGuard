import { useEffect, useRef } from 'react';

export const NeonOrb = () => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (orbRef.current) {
        const scrolled = window.scrollY;
        const translateY = scrolled * 0.5;
        orbRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={orbRef}
      className="fixed top-20 left-1/2 -translate-x-1/2 w-32 h-32 pointer-events-none z-10 transition-transform duration-100"
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-60 blur-2xl animate-glow-pulse" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary via-secondary to-accent animate-float" />
        <div className="absolute inset-8 rounded-full bg-background/20 backdrop-blur-sm" />
      </div>
    </div>
  );
};
