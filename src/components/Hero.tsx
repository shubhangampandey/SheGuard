import { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { CyberGrid } from './CyberGrid';

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xRotation = ((clientY / innerHeight) - 0.5) * 10;
        const yRotation = ((clientX / innerWidth) - 0.5) * -10;
        
        const cityscape = heroRef.current.querySelector('.cityscape') as HTMLElement;
        if (cityscape) {
          cityscape.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <CyberGrid />
      
      {/* 3D Cityscape Background */}
      <div className="cityscape absolute inset-0 transition-transform duration-300 ease-out">
        <div className="absolute bottom-0 left-0 right-0 h-2/3">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 bg-gradient-to-t from-primary/20 via-secondary/10 to-transparent border-t border-primary/30"
              style={{
                left: `${i * 5}%`,
                width: `${Math.random() * 4 + 2}%`,
                height: `${Math.random() * 60 + 20}%`,
                transform: `translateZ(${Math.random() * 50}px)`,
                boxShadow: '0 0 20px rgba(255, 0, 128, 0.3)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 animate-slide-up">
          <h1 className="text-7xl md:text-9xl font-black mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="text-neon-pink">She</span>
            <span className="text-neon-cyan">Guard</span>
          </h1>
          <div className="h-1 w-64 mx-auto neon-line" />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-neon-glow animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Empower Her Future
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Join the neon network of women rising together. Safety, strength, solidarity.
        </p>

        <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <Button className="btn-neon text-xl px-12 py-6 relative overflow-hidden group">
            <span className="relative z-10">Take a Stand</span>
          </Button>
        </div>

        {/* 3D Silhouette */}
        <div className="mt-16 relative animate-float">
          <div className="w-64 h-96 mx-auto relative">
            <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-2xl">
              <defs>
                <linearGradient id="silhouetteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#FF0080', stopOpacity: 0.8 }} />
                  <stop offset="50%" style={{ stopColor: '#8B00FF', stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: '#00F0FF', stopOpacity: 0.8 }} />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Woman silhouette */}
              <ellipse cx="100" cy="60" rx="30" ry="35" fill="url(#silhouetteGrad)" filter="url(#glow)" />
              <path 
                d="M 70 95 Q 70 120 80 150 L 75 240 L 65 390 L 85 390 L 95 250 L 100 250 L 105 250 L 115 390 L 135 390 L 125 240 L 120 150 Q 130 120 130 95 Z" 
                fill="url(#silhouetteGrad)" 
                filter="url(#glow)"
              />
              {/* Arms */}
              <path d="M 80 150 L 40 200 L 45 210 L 85 160" fill="url(#silhouetteGrad)" filter="url(#glow)" />
              <path d="M 120 150 L 160 200 L 155 210 L 115 160" fill="url(#silhouetteGrad)" filter="url(#glow)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
