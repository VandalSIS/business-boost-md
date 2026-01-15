import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic
    setEmail('');
    alert('Vă mulțumim pentru abonare!');
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-lg">CA</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white">
                  Consultanța
                </span>
                <span className="text-sm font-medium leading-tight text-white/80">
                  Afaceri
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              Consultanța Afaceri este liderul moldovean în domeniul consultanței pentru accesarea finanțărilor nerambursabile. De 8 ani ajutăm antreprenorii să-și transforme visele în realitate.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Link-uri Rapide</h3>
            <ul className="space-y-4">
              {[
                { name: 'Despre Noi', path: '/antreprenori' },
                { name: 'Servicii', path: '/antreprenori' },
                { name: 'Granturi', path: '/granturi' },
                { name: 'Blog', path: '/blog' },
                { name: 'Politica GDPR', path: '/politica-confidentialitate' },
              ].map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-white transition-colors link-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+37368115114"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  +373 68 115 114
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@consultantaafaceri.md"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  info@consultantaafaceri.md
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Chișinău, Republica Moldova
                </span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/10 rounded-xl">
              <p className="text-sm text-primary-foreground/90">
                <strong>Program:</strong><br />
                Luni - Vineri: 9:00 - 18:00
              </p>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-primary-foreground/80 mb-4">
              Abonează-te pentru a primi ultimele noutăți despre granturi și oportunități de finanțare.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Adresa ta de email"
                  className="w-full px-4 py-3 pr-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                  required
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1.5 top-1.5 bg-white text-primary hover:bg-white/90 rounded-lg"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© 2024 Consultanța Afaceri. Toate drepturile rezervate.</p>
            <p className="text-center md:text-right max-w-2xl">
              Acest site este dezvoltat cu sprijinul partenerilor și donatorilor noștri. 
              Conținutul prezentat este responsabilitatea exclusivă a Consultanța Afaceri 
              și nu reflectă neapărat opiniile partenerilor finanțatori.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
