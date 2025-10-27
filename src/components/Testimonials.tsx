import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
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

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Safety Advocate',
      quote: 'SheGuard gave me the confidence to walk home alone at night. The SOS feature is literally life-saving.',
      image: '👩🏾‍💼',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Community Leader',
      quote: 'This platform connected me with amazing women. Together we\'re making our neighborhood safer for everyone.',
      image: '👩🏻‍🦱',
    },
    {
      name: 'Aisha Khan',
      role: 'Self-Defense Instructor',
      quote: 'The resources here are incredible. I use them to train other women and empower them with knowledge.',
      image: '👩🏽‍🎓',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 text-neon-cyan" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Inspiring Voices
          </h2>
          <div className="h-1 w-48 mx-auto neon-line" />
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from empowered women making a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`hologram ${isVisible ? 'visible' : ''} transition-all duration-700`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="card-neon p-8 h-full relative overflow-hidden">
                {/* Neon frame effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-accent to-transparent" />
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent" />

                <div className="relative z-10">
                  <Quote className="w-12 h-12 text-primary mb-4 opacity-50" />
                  
                  <p className="text-lg text-foreground/90 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-3xl border-2 border-primary/30 shadow-lg shadow-primary/50">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-bold text-neon-pink text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-neon-violet">
            Your voice matters. Your story inspires.
          </p>
        </div>
      </div>
    </section>
  );
};
