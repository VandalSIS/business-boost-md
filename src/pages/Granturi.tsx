import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronRight, Clock, Coins, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

const allPrograms = [
  {
    id: 1,
    title: 'Inovații Digitale IMM',
    description: 'Finanțare pentru transformarea digitală a întreprinderilor mici și mijlocii. Include achiziția de software, echipamente IT și implementarea soluțiilor digitale.',
    amount: '100.000 - 500.000 lei',
    deadline: '30.06.2025',
    category: 'Tehnologie',
    type: 'extindere',
    value: 'medium',
  },
  {
    id: 2,
    title: 'Agricultură Ecologică',
    description: 'Granturi pentru ferme sustenabile și practici agricole ecologice. Suport pentru certificări bio, echipamente moderne și infrastructură agricolă.',
    amount: '50.000 - 300.000 lei',
    deadline: '15.05.2025',
    category: 'Agricultură',
    type: 'agricultură',
    value: 'medium',
  },
  {
    id: 3,
    title: 'Antreprenoriat Feminin',
    description: 'Sprijin financiar dedicat femeilor antreprenor din Moldova. Program special pentru afaceri conduse de femei în diverse domenii.',
    amount: '30.000 - 150.000 lei',
    deadline: '31.07.2025',
    category: 'Social',
    type: 'startup',
    value: 'small',
  },
  {
    id: 4,
    title: 'Eficiență Energetică',
    description: 'Finanțare pentru modernizarea și reducerea consumului energetic. Include panouri solare, izolații termice și echipamente eficiente energetic.',
    amount: '200.000 - 800.000 lei',
    deadline: '30.08.2025',
    category: 'Energie',
    type: 'extindere',
    value: 'large',
  },
  {
    id: 5,
    title: 'Startup Tineri',
    description: 'Capital de pornire pentru tinerii antreprenori sub 35 ani. Suport pentru lansarea primei afaceri și mentorat gratuit.',
    amount: '20.000 - 100.000 lei',
    deadline: '15.09.2025',
    category: 'Startup',
    type: 'startup',
    value: 'small',
  },
  {
    id: 6,
    title: 'Retehnologizare Producție',
    description: 'Modernizarea liniilor de producție și achiziția de echipamente industriale moderne pentru creșterea competitivității.',
    amount: 'până la 1.000.000 lei',
    deadline: '31.10.2025',
    category: 'Producție',
    type: 'extindere',
    value: 'large',
  },
  {
    id: 7,
    title: 'Turism Rural',
    description: 'Dezvoltarea pensiunilor rurale și a serviciilor turistice în zonele rurale ale Moldovei. Include construcții și amenajări.',
    amount: '100.000 - 400.000 lei',
    deadline: '28.02.2025',
    category: 'Turism',
    type: 'extindere',
    value: 'medium',
  },
  {
    id: 8,
    title: 'Export și Internaționalizare',
    description: 'Suport pentru companiile care doresc să exporte produse sau servicii pe piețele internaționale.',
    amount: '50.000 - 200.000 lei',
    deadline: '30.04.2025',
    category: 'Export',
    type: 'extindere',
    value: 'medium',
  },
];

const categories = ['Toate', 'Tehnologie', 'Agricultură', 'Social', 'Energie', 'Startup', 'Producție', 'Turism', 'Export'];
const types = ['Toate', 'startup', 'extindere', 'agricultură'];
const values = ['Toate', 'small', 'medium', 'large'];

const Granturi = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toate');
  const [selectedType, setSelectedType] = useState('Toate');
  const [selectedValue, setSelectedValue] = useState('Toate');

  const filteredPrograms = allPrograms.filter((program) => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Toate' || program.category === selectedCategory;
    const matchesType = selectedType === 'Toate' || program.type === selectedType;
    const matchesValue = selectedValue === 'Toate' || program.value === selectedValue;

    return matchesSearch && matchesCategory && matchesType && matchesValue;
  });

  const getValueLabel = (value: string) => {
    switch (value) {
      case 'small': return 'până la 150k';
      case 'medium': return '150k - 500k';
      case 'large': return '500k+';
      default: return value;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'startup': return 'Startup';
      case 'extindere': return 'Extindere';
      case 'agricultură': return 'Agricultură';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-primary-foreground">
        <div className="container-custom">
          <RevealOnScroll className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              Oportunități
            </span>
            <h1 className="mb-6 leading-tight">
              Granturi și Finanțări <span className="text-secondary">Disponibile</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Explorează toate programele de finanțare nerambursabilă disponibile pentru antreprenori și IMM-uri din Moldova.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-background border-b border-border sticky top-[72px] z-40">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Caută programe..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input pl-12"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto">
              {categories.slice(0, 5).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-primary/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-muted-foreground">
              {filteredPrograms.length} programe găsite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program, index) => (
              <RevealOnScroll key={program.id} delay={index * 50}>
                <div className="card-program h-full flex flex-col">
                  <div className="p-6 flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="badge-primary">{program.category}</span>
                      <span className="badge-secondary">{getTypeLabel(program.type)}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{program.description}</p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Coins className="w-4 h-4 text-secondary" />
                        <span className="font-semibold text-secondary">{program.amount}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-warning" />
                        <span className="text-muted-foreground">Deadline: {program.deadline}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 pt-0">
                    <Button asChild variant="outline" className="w-full group">
                      <Link to={`/granturi/${program.id}`}>
                        Detalii Program
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">Nu au fost găsite programe care să corespundă criteriilor.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Toate');
                  setSelectedType('Toate');
                  setSelectedValue('Toate');
                }}
                className="mt-4"
              >
                Resetează filtrele
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Nu Găsești Programul Potrivit?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Contactează-ne pentru o consultație personalizată. Echipa noastră te va ajuta să identifici 
                cele mai potrivite surse de finanțare pentru afacerea ta.
              </p>
              <Button asChild className="btn-hero text-lg">
                <Link to="/contacte">
                  Solicită Consultanță
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Granturi;
