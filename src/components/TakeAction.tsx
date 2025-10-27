import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Users, Heart, Share2 } from 'lucide-react';

export const TakeAction = () => {
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

  const actions = [
    {
      icon: Users,
      title: 'Join Community',
      description: 'Connect with thousands of women standing together',
    },
    {
      icon: Heart,
      title: 'Volunteer',
      description: 'Make a difference in your local community',
    },
    {
      icon: Share2,
      title: 'Share Awareness',
      description: 'Spread the word and empower others',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="text-neon-pink">Take</span>{' '}
            <span className="text-neon-violet">Action</span>
          </h2>
          <div className="h-1 w-48 mx-auto neon-line" />
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            The future is ours to shape. Choose your path to empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="relative group">
                  {/* Energy portal effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500" />
                  
                  <Button className="relative w-full h-32 text-xl font-bold rounded-2xl border-2 border-primary/30 bg-card hover:bg-card/50 group-hover:scale-105 transition-all duration-300">
                    <div className="flex flex-col items-center gap-3">
                      <Icon className="w-10 h-10 text-accent drop-shadow-2xl" strokeWidth={1.5} />
                      <span className="text-neon-glow">{action.title}</span>
                    </div>
                    
                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </Button>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{action.description}</p>
              </div>
            );
          })}
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="inline-block p-12 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border-2 border-primary/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse" />
            
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-6 text-neon-glow" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Ready to Make History?
              </h3>
              <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
                Join the revolution. Every action creates ripples of change. Together, we're unstoppable.
              </p>
              
              <Button className="btn-neon text-2xl px-16 py-8">
                <span className="relative z-10">Get Started Now</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
