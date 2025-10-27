import { useEffect, useRef, useState } from 'react';
import { AlertCircle, MapPin, Users } from 'lucide-react';

export const SOSFeatures = () => {
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

  const features = [
    {
      icon: AlertCircle,
      title: 'One-Tap SOS Alert',
      description: 'Instantly alert emergency contacts and authorities with a single tap. Your location and details are shared immediately.',
    },
    {
      icon: MapPin,
      title: 'Live Location Tracking',
      description: 'Share your real-time location with trusted contacts. They can follow your journey and know you\'re safe.',
    },
    {
      icon: Users,
      title: 'Community Safety Heatmap',
      description: 'See real-time safety reports from other users. Avoid unsafe areas and choose better routes.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 text-neon-cyan" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            SOS Features
          </h2>
          <div className="h-1 w-48 mx-auto neon-line" />
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced safety tools at your fingertips. Always protected, always connected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`relative group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="card-neon p-8 h-full float">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <Icon className="w-16 h-16 text-accent drop-shadow-2xl" strokeWidth={1.5} />
                      <div className="absolute inset-0 blur-xl bg-accent/30 animate-glow-pulse" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-neon-pink">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3D Phone Mockup */}
        <div className={`flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <div className="relative tilt-3d" style={{ transformStyle: 'preserve-3d' }}>
            <div className="w-64 h-[32rem] bg-gradient-to-br from-card to-card/50 rounded-3xl border-2 border-primary/30 shadow-2xl p-4 animate-float">
              <div className="w-full h-full bg-background/50 rounded-2xl border border-primary/20 overflow-hidden">
                <div className="h-full flex flex-col items-center justify-center gap-6 p-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-accent animate-glow-pulse flex items-center justify-center">
                    <AlertCircle className="w-20 h-20 text-background" strokeWidth={2} />
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-neon-pink mb-2">SOS ACTIVE</p>
                    <p className="text-sm text-muted-foreground">Help is on the way</p>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
