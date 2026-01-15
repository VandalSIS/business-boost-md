import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronRight, Clock, Coins, ArrowRight, X, CheckCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
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
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=250&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&h=250&fit=crop',
  },
];

const categories = ['Toate', 'Tehnologie', 'Agricultură', 'Social', 'Energie', 'Startup', 'Producție', 'Turism', 'Export'];
const types = ['Toate', 'startup', 'extindere', 'agricultură'];
const values = ['Toate', 'small', 'medium', 'large'];

type Program = typeof allPrograms[0];

const Granturi = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toate');
  const [selectedType, setSelectedType] = useState('Toate');
  const [selectedValue, setSelectedValue] = useState('Toate');
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleOpenModal = (program: Program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
    setIsSubmitted(false);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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
                <div className="card-program h-full flex flex-col group">
                  {/* Program Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="badge-primary">{program.category}</span>
                      <span className="badge-secondary">{getTypeLabel(program.type)}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{program.description}</p>
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
                    <Button 
                      onClick={() => handleOpenModal(program)}
                      className="w-full btn-primary group"
                    >
                      Aplică Acum
                      <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Application Modal */}
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-lg">
                  {isSubmitted ? 'Cerere Trimisă!' : `Aplică la: ${selectedProgram?.title}`}
                </DialogTitle>
              </DialogHeader>
              
              {isSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Mulțumim pentru aplicare!</h3>
                  <p className="text-muted-foreground mb-6">
                    Am primit cererea ta pentru programul <strong>{selectedProgram?.title}</strong>. 
                    Te vom contacta în cel mai scurt timp posibil.
                  </p>
                  <Button onClick={handleCloseModal} className="btn-primary">
                    Închide
                  </Button>
                </div>
              ) : (
                <>
                  {selectedProgram && (
                    <div className="bg-muted rounded-xl p-4 mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Coins className="w-4 h-4 text-secondary" />
                        <span className="font-semibold text-secondary">{selectedProgram.amount}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-warning" />
                        <span className="text-sm text-muted-foreground">Deadline: {selectedProgram.deadline}</span>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="form-label">Nume complet *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="form-label">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="form-label">Telefon *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="+373..."
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="form-label">Companie / Proiect</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="form-label">Descriere scurtă a proiectului</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="form-input resize-none"
                        placeholder="Spune-ne câteva cuvinte despre ideea ta..."
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleCloseModal}
                        className="flex-1"
                      >
                        Anulează
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 btn-primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Se trimite...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Trimite Cererea
                            <Send className="w-4 h-4" />
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </DialogContent>
          </Dialog>

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
