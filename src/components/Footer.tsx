import { Heart, Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  return (
    <footer className="relative py-16 px-4 border-t border-primary/30">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heartbeat Animation */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <svg width="200" height="60" viewBox="0 0 200 60" className="overflow-visible">
              <defs>
                <linearGradient id="heartbeatGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#FF0080' }} />
                  <stop offset="50%" style={{ stopColor: '#8B00FF' }} />
                  <stop offset="100%" style={{ stopColor: '#00F0FF' }} />
                </linearGradient>
              </defs>
              <path
                d="M0,30 L40,30 L50,10 L60,50 L70,30 L90,30 L100,20 L110,40 L120,30 L200,30"
                stroke="url(#heartbeatGrad)"
                strokeWidth="3"
                fill="none"
                className="drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(255, 0, 128, 0.8))',
                }}
              >
                <animate
                  attributeName="stroke-dasharray"
                  from="0,500"
                  to="500,0"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        </div>

        {/* Main Message */}
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <span className="text-neon-pink">You Are</span>{' '}
            <span className="text-neon-cyan">Never Alone</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Together we stand. Together we rise. Together we illuminate the future.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="group relative w-14 h-14 rounded-full border-2 border-primary/30 flex items-center justify-center hover:border-primary transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-xl transition-all duration-300 glow-pulse" />
              </a>
            );
          })}
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          <div>
            <h4 className="font-bold text-neon-pink mb-3">Safety</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Emergency Contacts</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Safety Tips</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Report Issue</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-neon-violet mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-secondary transition-colors">Self-Defense</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Legal Rights</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Support Groups</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-neon-cyan mb-3">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Forums</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Volunteer</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-neon-pink mb-3">About</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-primary/20">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary heartbeat" fill="currentColor" />
            <span>by the SheGuard Team</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 SheGuard. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
