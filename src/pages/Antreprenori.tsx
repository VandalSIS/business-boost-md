import { Link } from 'react-router-dom';
import { CheckCircle, Users, Briefcase, Leaf, Building, ArrowRight, FileText, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

const eligibleApplicants = [
  { icon: Building, text: 'Startup-uri și întreprinderi noi' },
  { icon: Briefcase, text: 'IMM-uri existente în expansiune' },
  { icon: Users, text: 'Microîntreprinderi și PFA-uri' },
  { icon: Leaf, text: 'Fermieri și producători agricoli' },
  { icon: Target, text: 'Antreprenori sociali' },
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {eligibleApplicants.map((item, index) => (
              <RevealOnScroll key={item.text} delay={index * 80}>
                <div className="flex items-center gap-4 p-6 bg-card rounded-2xl shadow-card border border-border/50 hover:shadow-card-hover hover:-translate-y-1 transition-all">
                  <div className="icon-container">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-medium">{item.text}</span>
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
