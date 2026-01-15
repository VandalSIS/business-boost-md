import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Laptop, TrendingUp, Phone, CheckCircle, Users, Award, Briefcase, Clock, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';
import RevealOnScroll from '@/components/RevealOnScroll';
import heroImage from '@/assets/hero-business.jpg';

const services = [
  {
    icon: FileText,
    title: 'Consultanță Granturi',
    description: 'Identificăm cele mai potrivite surse de finanțare pentru afacerea ta și te ghidăm pas cu pas în procesul de aplicare.',
  },
  {
    icon: Laptop,
    title: 'Elaborare Proiecte',
    description: 'Pregătim documentație completă și planuri de afaceri profesionale care maximizează șansele de aprobare.',
  },
  {
    icon: TrendingUp,
    title: 'Management Proiecte',
    description: 'Te ghidăm în implementarea și raportarea finanțărilor pentru a asigura succesul proiectului tău.',
  },
];

const programs = [
  {
    id: 1,
    title: 'Inovații Digitale IMM',
    description: 'Finanțare pentru transformarea digitală a întreprinderilor mici și mijlocii.',
    amount: '100.000 - 500.000 lei',
    deadline: '30.06.2025',
    category: 'Tehnologie',
  },
  {
    id: 2,
    title: 'Agricultură Ecologică',
    description: 'Granturi pentru ferme sustenabile și practici agricole ecologice.',
    amount: '50.000 - 300.000 lei',
    deadline: '15.05.2025',
    category: 'Agricultură',
  },
  {
    id: 3,
    title: 'Antreprenoriat Feminin',
    description: 'Sprijin financiar dedicat femeilor antreprenor din Moldova.',
    amount: '30.000 - 150.000 lei',
    deadline: '31.07.2025',
    category: 'Social',
  },
  {
    id: 4,
    title: 'Eficiență Energetică',
    description: 'Finanțare pentru modernizarea și reducerea consumului energetic.',
    amount: '200.000 - 800.000 lei',
    deadline: '30.08.2025',
    category: 'Energie',
  },
  {
    id: 5,
    title: 'Startup Tineri',
    description: 'Capital de pornire pentru tinerii antreprenori sub 35 ani.',
    amount: '20.000 - 100.000 lei',
    deadline: '15.09.2025',
    category: 'Startup',
  },
  {
    id: 6,
    title: 'Retehnologizare Producție',
    description: 'Modernizarea liniilor de producție și achiziția de echipamente.',
    amount: 'până la 1.000.000 lei',
    deadline: '31.10.2025',
    category: 'Producție',
  },
];

const testimonials = [
  {
    name: 'Ion Popescu',
    role: 'Director, Fabrica Moldovei SRL',
    quote: 'Am obținut 500.000 lei pentru extinderea fabricii. Echipa Consultanța Afaceri ne-a ghidat profesional prin întreg procesul de aplicare.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Maria Ciobanu',
    role: 'Proprietar, Ferma Ecologică',
    quote: 'Grant de 200.000 lei pentru ferma ecologică. Profesionalism și dedicare la cel mai înalt nivel!',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Andrei Rusu',
    role: 'CEO, TechStart Moldova',
    quote: 'De la o idee la un startup finanțat în doar 3 luni. Recomand cu încredere serviciile lor!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
];

const stats = [
  { value: 250, suffix: '+', label: 'Proiecte Finanțate' },
  { value: 15, suffix: ' mil.', label: 'Lei Atrași' },
  { value: 8, suffix: '', label: 'Ani Experiență' },
  { value: 95, suffix: '%', label: 'Rată Succes' },
];

const steps = [
  {
    number: '01',
    title: 'Consultație Inițială',
    description: 'Discutăm despre ideea ta de afacere și obiectivele de dezvoltare.',
  },
  {
    number: '02',
    title: 'Analiză Oportunități',
    description: 'Identificăm sursele de finanțare potrivite pentru proiectul tău.',
  },
  {
    number: '03',
    title: 'Elaborare Documentație',
    description: 'Pregătim planul de afaceri și dosarul complet de aplicare.',
  },
  {
    number: '04',
    title: 'Depunere & Monitorizare',
    description: 'Te ghidăm până la aprobarea și implementarea finanțării.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              🇲🇩 Consultanță pentru Antreprenorii Moldoveni
            </span>
            <h1 className="text-white mb-6 leading-tight">
              Transformăm Idei în <span className="text-secondary">Afaceri de Succes</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Consultanță profesională pentru accesarea granturilor și finanțărilor nerambursabile în Republica Moldova. Expertiza de 8 ani, peste 250 de proiecte finanțate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-hero text-lg">
                <Link to="/contacte">
                  Programează Consultație
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild className="btn-hero-outline text-lg">
                <Link to="/granturi">Vezi Oportunități</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 mt-12 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                Consultație Gratuită
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                95% Rată de Succes
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                Suport Complet
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <RevealOnScroll className="text-center mb-16">
            <span className="badge-primary mb-4">Servicii</span>
            <h2 className="mb-4">Serviciile Noastre</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Oferim suport complet pentru accesarea finanțărilor nerambursabile, de la consultanță inițială până la implementarea proiectului.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <RevealOnScroll key={service.title} delay={index * 100}>
                <div className="card-service h-full text-center group">
                  <div className="icon-container-lg mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <RevealOnScroll className="text-center mb-16">
            <span className="badge-secondary mb-4">Oportunități</span>
            <h2 className="mb-4">Oportunități de Finanțare Actuale</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descoperă programele de granturi disponibile pentru antreprenori și IMM-uri din Moldova.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <RevealOnScroll key={program.id} delay={index * 80}>
                <div className="card-program h-full flex flex-col">
                  <div className="p-6 flex-1">
                    <span className="badge-primary mb-3">{program.category}</span>
                    <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{program.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Sumă:</span>
                        <span className="font-semibold text-secondary">{program.amount}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Deadline:</span>
                        <span className="badge-deadline">{program.deadline}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <Button asChild variant="outline" className="w-full group">
                      <Link to={`/granturi/${program.id}`}>
                        Află mai mult
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="btn-primary px-8 py-6 text-lg">
              <Link to="/granturi">
                Vezi Toate Oportunitățile
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <RevealOnScroll key={stat.label} delay={index * 100}>
                <div className="card-stat">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-primary-foreground/80">{stat.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <RevealOnScroll className="text-center mb-16">
            <span className="badge-primary mb-4">Testimoniale</span>
            <h2 className="mb-4">Poveștile Noastre de Succes</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descoperă cum am ajutat antreprenorii moldoveni să-și atingă obiectivele.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <RevealOnScroll key={testimonial.name} delay={index * 100}>
                <div className="card-testimonial h-full flex flex-col">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-foreground italic mb-6 flex-1">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <RevealOnScroll className="text-center mb-16">
            <span className="badge-primary mb-4">Proces</span>
            <h2 className="mb-4">Cum Funcționează</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un proces simplu și eficient pentru a-ți transforma ideea în realitate.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <RevealOnScroll key={step.number} delay={index * 100}>
                <div className="relative">
                  <div className="text-6xl font-bold text-primary/10 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 right-0 translate-x-1/2">
                      <ChevronRight className="w-6 h-6 text-primary/30" />
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Începe Astăzi - Solicită o Consultație Gratuită</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Fă primul pas către finanțarea afacerii tale. Echipa noastră de experți te așteaptă pentru o consultație personalizată.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-hero text-lg">
                  <Link to="/contacte">
                    Contactează-ne Acum
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="btn-hero-outline text-lg">
                  <a href="tel:+37368115114">
                    <Phone className="mr-2 w-5 h-5" />
                    +373 68 115 114
                  </a>
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
