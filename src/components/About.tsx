import { useEffect, useRef, useState } from 'react';
import { Shield } from 'lucide-react';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '1 in 3', label: 'Women experience violence globally' },
    { value: '87%', label: 'Feel unsafe walking alone at night' },
    { value: '70%', label: 'Face harassment in public spaces' },
    { value: '43%', label: 'Experience online abuse' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 text-neon-violet" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Why We Rise
          </h2>
          <div className="h-1 w-48 mx-auto neon-line" />
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            The statistics are alarming. But together, we're changing the narrative.
          </p>
        </div>

        {/* 3D Shield */}
        <div className={`flex justify-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative w-32 h-32 tilt-3d hover:scale-110 transition-transform duration-300">
            <Shield className="w-full h-full text-primary drop-shadow-2xl animate-glow-pulse" strokeWidth={1.5} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`card-neon p-8 text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl font-black mb-4 text-neon-pink" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {stat.value}
              </div>
              <div className="h-0.5 w-16 mx-auto bg-gradient-to-r from-primary via-secondary to-accent mb-4" />
              <p className="text-lg text-foreground/90">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-neon-cyan">
            It's time to illuminate the path to safety and empowerment.
          </p>
        </div>
      </div>
    </section>
  );
};
