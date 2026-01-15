import { Link } from 'react-router-dom';
import { CheckCircle, Users, Briefcase, Leaf, Building, ArrowRight, FileText, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

const eligibleApplicants = [
  { icon: Building, text: 'Startup-uri și întreprinderi noi', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop' },
  { icon: Briefcase, text: 'IMM-uri existente în expansiune', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop' },
  { icon: Users, text: 'Microîntreprinderi și PFA-uri', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop' },
  { icon: Leaf, text: 'Fermieri și producători agricoli', image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop' },
  { icon: Target, text: 'Antreprenori sociali', image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=300&fit=crop' },
];

const successStories = [
  {
    name: 'Maria Ciobanu',
    business: 'Ferma Eco Moldova',
    quote: 'Am primit 200.000 lei pentru extinderea fermei ecologice. Acum avem 3 angajați și exportăm în UE.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&h=200&fit=crop&crop=face',
    amount: '200.000 lei',
  },
  {
    name: 'Andrei Rusu',
    business: 'TechStart Moldova',
    quote: 'De la o idee la un startup cu 10 angajați în doar 18 luni, datorită finanțării primite.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    amount: '350.000 lei',
  },
  {
    name: 'Elena Moraru',
    business: 'Atelier Creativ',
    quote: 'Grantul m-a ajutat să-mi deschid atelierul de design. Acum am clienți din toată țara.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
    amount: '75.000 lei',
  },
];

const fundingTypes = [
  {
    title: 'Capital de Lucru',
    description: 'Finanțare pentru cheltuieli operaționale, materii prime și stocuri.',
    amount: 'Până la 300.000 lei',
  },
  {
    title: 'Echipamente și Utilaje',
    description: 'Granturi pentru achiziția de echipamente moderne și tehnologii noi.',
    amount: 'Până la 1.000.000 lei',
  },
  {
    title: 'Construcții și Renovări',
    description: 'Finanțare pentru spații de producție, depozite și infrastructură.',
    amount: 'Până la 2.000.000 lei',
  },
  {
    title: 'Consultanță și Training',
    description: 'Suport pentru dezvoltarea competențelor și expertizei echipei.',
    amount: 'Până la 50.000 lei',
  },
];

const documents = [
  'Act de identitate al fondatorului/administratorului',
  'Certificat de înregistrare a întreprinderii',
  'Extras din Registrul de Stat',
  'Situațiile financiare pe ultimii 2-3 ani (dacă este cazul)',
  'Plan de afaceri detaliat',
  'Documente justificative pentru cheltuieli',
  'CV-ul echipei de management',
  'Acorduri de parteneriat (dacă este cazul)',
];

const Antreprenori = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="container-custom">
          <RevealOnScroll className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              Antreprenori
            </span>
            <h1 className="mb-6 leading-tight">
              Sprijin Complet pentru <span className="text-secondary">Antreprenorii Moldoveni</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Te ajutăm să accesezi finanțări nerambursabile pentru dezvoltarea afacerii tale. 
              De la startup la extindere, suntem alături de tine la fiecare pas.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Who Can Apply Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <RevealOnScroll className="text-center mb-16">
            <span className="badge-primary mb-4">Eligibilitate</span>
            <h2 className="mb-4">Cine Poate Aplica?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Programele de finanțare sunt disponibile pentru o gamă largă de antreprenori și întreprinderi.
            </p>
          </RevealOnScroll>

          <div className="flex flex-wrap justify-center gap-6">
            {eligibleApplicants.map((item, index) => (
              <RevealOnScroll key={item.text} delay={index * 80} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <div className="bg-card rounded-2xl shadow-card border border-border/50 hover:shadow-card-hover hover:-translate-y-2 transition-all overflow-hidden group h-full">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.text}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-white">{item.text}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <RevealOnScroll className="text-center mb-16">
            <span className="badge-secondary mb-4">Povești de Succes</span>
            <h2 className="mb-4">Antreprenori Care Au Reușit</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descoperă cum am ajutat antreprenorii moldoveni să-și atingă obiectivele de finanțare.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <RevealOnScroll key={story.name} delay={index * 100}>
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-secondary/20"
                  />
                  <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-3">
                    {story.amount}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{story.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{story.business}</p>
                  <p className="text-foreground italic">"{story.quote}"</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Types Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <RevealOnScroll className="text-center mb-16">
            <span className="badge-secondary mb-4">Tipuri de Finanțare</span>
            <h2 className="mb-4">Tipuri de Finanțare Disponibile</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Oferim consultanță pentru diverse tipuri de granturi și finanțări nerambursabile.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            {fundingTypes.map((type, index) => (
              <RevealOnScroll key={type.title} delay={index * 100}>
                <div className="card-service">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{type.title}</h3>
                    <span className="badge-secondary">{type.amount}</span>
                  </div>
                  <p className="text-muted-foreground">{type.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Checklist Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <span className="badge-primary mb-4">Documente</span>
              <h2 className="mb-6">Documente Necesare</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Pentru a aplica la programele de finanțare, vei avea nevoie de următoarele documente. 
                Echipa noastră te va ghida în pregătirea completă a dosarului.
              </p>
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
                  alt="Documente și consultanță"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <p className="text-4xl font-bold mb-2">95%</p>
                    <p className="text-lg">Rată de aprobare cu documentația noastră</p>
                  </div>
                </div>
              </div>
              <Button asChild className="btn-primary px-8">
                <Link to="/contacte">
                  Solicită Ghidare
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Checklist Documente</h3>
                </div>
                <ul className="space-y-4">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-custom">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <Award className="w-16 h-16 mx-auto mb-6 text-secondary" />
              <h2 className="mb-6">Începe Aplicarea Astăzi</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Echipa noastră de experți este pregătită să te ajute să accesezi finanțarea 
                potrivită pentru afacerea ta. Consultația inițială este gratuită!
              </p>
              <Button asChild className="btn-hero text-lg">
                <Link to="/contacte">
                  Contactează-ne
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

export default Antreprenori;
