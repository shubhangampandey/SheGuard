import { useEffect, useRef, useState } from 'react';
import { BookOpen, Scale, Sparkles } from 'lucide-react';

export const EmpowermentHub = () => {
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

  const resources = [
    {
      icon: BookOpen,
      title: 'Self-Defense Resources',
      description: 'Expert tutorials, video guides, and training programs. Learn to protect yourself with confidence.',
      color: 'primary',
    },
    {
      icon: Scale,
      title: 'Legal Rights Knowledge',
      description: 'Know your rights. Access legal information, helplines, and support services in your area.',
      color: 'secondary',
    },
    {
      icon: Sparkles,
      title: 'Women-Led Initiatives',
      description: 'Discover and support amazing initiatives led by women, for women. Together we rise.',
      color: 'accent',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="text-neon-pink">Empowerment</span>{' '}
            <span className="text-neon-violet">Hub</span>
          </h2>
          <div className="h-1 w-48 mx-auto neon-line" />
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Knowledge is power. Arm yourself with the tools to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="group card-neon p-8 h-full cursor-pointer">
                  <div className="mb-6 flex justify-center">
                    <div className="relative p-4 rounded-2xl bg-gradient-to-br from-card to-muted group-hover:scale-110 transition-transform duration-300">
                      <Icon 
                        className={`w-12 h-12 text-${resource.color} drop-shadow-2xl`} 
                        strokeWidth={1.5} 
                      />
                      <div className={`absolute inset-0 blur-2xl bg-${resource.color}/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 text-neon-${resource.color === 'primary' ? 'pink' : resource.color === 'secondary' ? 'violet' : 'cyan'}`}>
                    {resource.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {resource.description}
                  </p>

                  {/* Plasma glow effect on hover */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/20 group-hover:via-secondary/20 group-hover:to-accent/20 transition-all duration-500 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/30">
            <p className="text-2xl font-bold text-neon-glow mb-4">
              Ready to unlock your full potential?
            </p>
            <p className="text-muted-foreground">
              Explore resources, connect with mentors, and join a community that lifts you higher.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
