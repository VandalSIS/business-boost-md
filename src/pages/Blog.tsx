import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight, ChevronRight, Tag, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

const articles = [
  {
    id: 1,
    title: '5 Pași pentru a Obține un Grant în Moldova',
    excerpt: 'Ghid complet pentru antreprenorii care doresc să acceseze finanțări nerambursabile. Descoperă secretele unei aplicații de succes.',
    category: 'Ghiduri',
    author: 'Olga Braga',
    date: '15 Ianuarie 2025',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    content: `
      <h2>Introducere</h2>
      <p>Accesarea unui grant poate părea un proces complicat, dar cu pregătirea potrivită și o strategie bine gândită, șansele tale de succes cresc semnificativ. În acest ghid, îți vom prezenta cei 5 pași esențiali pentru a obține finanțare nerambursabilă în Moldova.</p>
      
      <h2>Pasul 1: Identifică Programul Potrivit</h2>
      <p>Primul și cel mai important pas este să găsești programul de finanțare care se potrivește cel mai bine cu proiectul și afacerea ta. Nu toate granturile sunt la fel - unele sunt destinate startup-urilor, altele pentru IMM-uri existente, iar altele pentru sectoare specifice precum agricultura sau tehnologia.</p>
      <p><strong>Sfat:</strong> Verifică criteriile de eligibilitate înainte de a investi timp în pregătirea documentației.</p>
      
      <h2>Pasul 2: Pregătește un Plan de Afaceri Solid</h2>
      <p>Planul de afaceri este documentul central al oricărei aplicații pentru grant. Acesta trebuie să demonstreze viabilitatea ideii tale, potențialul de creștere și impactul pe care îl va avea finanțarea asupra afacerii.</p>
      <p>Un plan de afaceri bun include: rezumat executiv, descrierea afacerii, analiza pieței, strategia de marketing, proiecții financiare și echipa de management.</p>
      
      <h2>Pasul 3: Adună Documentația Necesară</h2>
      <p>Fiecare program de finanțare are cerințe specifice de documentație. În general, vei avea nevoie de: actul de identitate, certificatul de înregistrare, situațiile financiare, și diverse declarații pe proprie răspundere.</p>
      
      <h2>Pasul 4: Completează Aplicația cu Atenție</h2>
      <p>Formularul de aplicare trebuie completat cu maximă atenție. Răspunde la toate întrebările în mod clar și concis. Folosește date concrete și exemple specifice pentru a-ți susține afirmațiile.</p>
      
      <h2>Pasul 5: Urmărește și Răspunde Prompt</h2>
      <p>După depunerea aplicației, monitorizează constant statusul acesteia. Fii pregătit să răspunzi rapid la orice solicitări suplimentare din partea evaluatorilor.</p>
      
      <h2>Concluzie</h2>
      <p>Obținerea unui grant necesită pregătire, răbdare și perseverență. Cu acești 5 pași și sprijinul unei echipe de consultanți experimentați, șansele tale de succes sunt semnificativ mai mari. Contactează-ne pentru o consultație gratuită!</p>
    `,
  },
  {
    id: 2,
    title: 'Ce Greșeli Evită în Elaborarea Planului de Afaceri',
    excerpt: 'Top 10 greșeli frecvente în planurile de afaceri și cum să le eviți pentru a-ți maximiza șansele de aprobare.',
    category: 'Ghiduri',
    author: 'Echipa CA',
    date: '12 Ianuarie 2025',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&h=400&fit=crop',
    content: `
      <h2>De ce contează planul de afaceri?</h2>
      <p>Planul de afaceri este cartea ta de vizită în fața evaluatorilor. Un plan bine structurat poate face diferența între aprobare și respingere. Iată cele mai frecvente greșeli pe care trebuie să le eviți:</p>
      
      <h2>1. Lipsa unei cercetări de piață adecvate</h2>
      <p>Mulți antreprenori își supraestimează piața țintă sau nu oferă date concrete despre competiție. Investește timp în cercetare și folosește surse credibile.</p>
      
      <h2>2. Proiecții financiare nerealiste</h2>
      <p>Cifrele exagerate sau nejustificate sunt un semnal de alarmă pentru evaluatori. Bazează-ți proiecțiile pe date reale și explică ipotezele folosite.</p>
      
      <h2>3. Descrierea vagă a produsului/serviciului</h2>
      <p>Fii specific în descrierea ofertei tale. Ce problemă rezolvi? Cum te diferențiezi de competiție? Ce valoare aduci clienților?</p>
      
      <h2>4. Ignorarea riscurilor</h2>
      <p>Orice afacere are riscuri. Identifică-le și prezintă strategii de mitigare. Acest lucru demonstrează maturitate și pregătire.</p>
      
      <h2>5. Lipsa unui plan de marketing clar</h2>
      <p>Cum vei ajunge la clienți? Ce canale vei folosi? Care este bugetul de marketing? Răspunde la aceste întrebări în detaliu.</p>
      
      <h2>Concluzie</h2>
      <p>Un plan de afaceri bun necesită timp și efort, dar recompensa merită. Evită aceste greșeli frecvente și crește-ți șansele de succes!</p>
    `,
  },
  {
    id: 3,
    title: 'Poveste de Succes: De la Idee la Fabrică în 18 Luni',
    excerpt: 'Cum a reușit Ion Popescu să transforme o idee simplă într-o fabrică de producție cu finanțare de 500.000 lei.',
    category: 'Povești Succes',
    author: 'Olga Braga',
    date: '8 Ianuarie 2025',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    content: `
      <h2>Începutul călătoriei</h2>
      <p>Ion Popescu, un inginer de 35 de ani din Chișinău, a avut mereu visul de a-și deschide propria fabrică de componente metalice. În 2023, a decis că este momentul să facă pasul.</p>
      
      <h2>Provocarea inițială</h2>
      <p>"Nu aveam suficient capital pentru echipamentele necesare", povestește Ion. "Aveam experiența tehnică, cunoșteam piața, dar îmi lipseau resursele financiare pentru a începe."</p>
      
      <h2>Descoperirea oportunității</h2>
      <p>Într-o zi, Ion a auzit despre programele de granturi disponibile pentru IMM-uri. A contactat echipa Consultanța Afaceri pentru o consultație gratuită.</p>
      
      <h2>Procesul de aplicare</h2>
      <p>"Echipa m-a ghidat prin întregul proces. Am lucrat împreună la planul de afaceri, am pregătit documentația și am depus aplicația în doar 6 săptămâni", spune Ion.</p>
      
      <h2>Rezultatul</h2>
      <p>După 3 luni de așteptare, Ion a primit vestea: aplicația fusese aprobată! A obținut 500.000 lei pentru achiziția echipamentelor și amenajarea spațiului de producție.</p>
      
      <h2>Situația actuală</h2>
      <p>Astăzi, fabrica lui Ion are 12 angajați și deservește clienți din toată Moldova. Cifra de afaceri a crescut cu 200% în primul an de activitate.</p>
      
      <h2>Sfatul lui Ion</h2>
      <p>"Nu vă fie teamă să aplicați! Cu pregătirea potrivită și sprijinul unor profesioniști, visul vostru poate deveni realitate."</p>
    `,
  },
  {
    id: 4,
    title: 'Noutăți Legislative: Modificări la Legea IMM-urilor',
    excerpt: 'Analiză detaliată a ultimelor modificări legislative care afectează întreprinderile mici și mijlocii din Moldova.',
    category: 'Legislație',
    author: 'Echipa CA',
    date: '5 Ianuarie 2025',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
    content: `
      <h2>Context legislativ</h2>
      <p>Parlamentul Republicii Moldova a adoptat recent o serie de modificări importante la Legea privind susținerea sectorului întreprinderilor mici și mijlocii. Aceste schimbări intră în vigoare de la 1 ianuarie 2025.</p>
      
      <h2>Principalele modificări</h2>
      <p><strong>1. Noi criterii de clasificare:</strong> Pragurile pentru definirea microîntreprinderilor, întreprinderilor mici și mijlocii au fost actualizate pentru a reflecta realitățile economice actuale.</p>
      
      <p><strong>2. Facilități fiscale extinse:</strong> IMM-urile vor beneficia de facilități fiscale suplimentare în primii 3 ani de activitate.</p>
      
      <p><strong>3. Acces simplificat la finanțare:</strong> Au fost introduse noi mecanisme de garantare a creditelor pentru IMM-uri.</p>
      
      <h2>Impact asupra antreprenorilor</h2>
      <p>Aceste modificări sunt de așteptat să stimuleze crearea de noi afaceri și să faciliteze dezvoltarea celor existente. Antreprenorii vor avea acces mai ușor la finanțare și vor beneficia de un mediu fiscal mai favorabil.</p>
      
      <h2>Ce trebuie să faci?</h2>
      <p>Recomandăm tuturor antreprenorilor să se familiarizeze cu noile prevederi și să evalueze cum pot beneficia de facilitățile oferite. Echipa noastră este disponibilă pentru consultații personalizate.</p>
    `,
  },
  {
    id: 5,
    title: 'Agricultură Sustenabilă: Oportunități de Finanțare în 2025',
    excerpt: 'Prezentare completă a programelor de granturi disponibile pentru fermieri și producători agricoli în acest an.',
    category: 'Știri',
    author: 'Olga Braga',
    date: '2 Ianuarie 2025',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
    content: `
      <h2>Oportunități pentru sectorul agricol</h2>
      <p>Anul 2025 aduce oportunități semnificative pentru fermierii și producătorii agricoli din Moldova. Mai multe programe de finanțare sunt disponibile pentru cei care doresc să-și modernizeze fermele sau să treacă la practici sustenabile.</p>
      
      <h2>Programul "Agricultură Ecologică"</h2>
      <p>Acest program oferă granturi între 50.000 și 300.000 lei pentru ferme care adoptă practici agricole ecologice. Sunt eligibile: certificări bio, echipamente pentru agricultura organică, sisteme de irigare eficiente.</p>
      
      <h2>Fondul pentru Modernizarea Fermelor</h2>
      <p>Granturi de până la 500.000 lei pentru achiziția de utilaje agricole moderne, construcția de sere și solarii, sisteme de depozitare și procesare.</p>
      
      <h2>Programul de Eficiență Energetică în Agricultură</h2>
      <p>Finanțare pentru instalarea panourilor solare, pompe de căldură și alte soluții de energie regenerabilă pentru ferme.</p>
      
      <h2>Cum poți aplica?</h2>
      <p>Fiecare program are cerințe specifice de eligibilitate și documentație. Echipa noastră de consultanți specializați în agricultură te poate ghida prin întregul proces de aplicare.</p>
      
      <h2>Deadline-uri importante</h2>
      <p>Majoritatea programelor au sesiuni de depunere în prima jumătate a anului. Nu rata aceste oportunități - contactează-ne acum pentru o evaluare gratuită!</p>
    `,
  },
  {
    id: 6,
    title: 'Antreprenoriat Feminin: Granturi și Programe Dedicate',
    excerpt: 'Ghid complet pentru femeile antreprenor care doresc să acceseze finanțări dedicate și programe de sprijin.',
    category: 'Ghiduri',
    author: 'Olga Braga',
    date: '28 Decembrie 2024',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop',
    content: `
      <h2>Sprijin pentru femeile antreprenor</h2>
      <p>Moldova oferă o serie de programe dedicate femeilor care doresc să înceapă sau să-și dezvolte afacerile. Aceste inițiative recunosc rolul important al femeilor în economia națională și oferă sprijin țintit.</p>
      
      <h2>Programul "Antreprenoriat Feminin"</h2>
      <p>Granturi între 30.000 și 150.000 lei pentru afaceri conduse de femei. Sunt eligibile startup-uri și IMM-uri existente în care femeile dețin cel puțin 51% din capital sau ocupă poziții de conducere.</p>
      
      <h2>Ce cheltuieli sunt acoperite?</h2>
      <p>• Achiziția de echipamente și utilaje<br>
      • Capital de lucru<br>
      • Marketing și promovare<br>
      • Certificări și licențe<br>
      • Training și dezvoltare profesională</p>
      
      <h2>Programe de mentorat</h2>
      <p>Pe lângă finanțare, există programe de mentorat care conectează femeile antreprenor cu lideri de afaceri experimentați. Aceste programe oferă ghidare, networking și suport pe termen lung.</p>
      
      <h2>Povești de succes</h2>
      <p>Multe femei din Moldova au reușit să-și construiască afaceri de succes cu ajutorul acestor programe. De la magazine online la fabrici de producție, oportunitățile sunt diverse.</p>
      
      <h2>Primul pas</h2>
      <p>Contactează-ne pentru o consultație gratuită și descoperă ce program se potrivește cel mai bine cu planurile tale de afaceri!</p>
    `,
  },
  {
    id: 7,
    title: 'Digitalizarea Afacerii: De la Idee la Implementare',
    excerpt: 'Cum să profiți de programele de digitalizare și să transformi afacerea ta pentru era digitală.',
    category: 'Ghiduri',
    author: 'Echipa CA',
    date: '20 Decembrie 2024',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
    content: `
      <h2>De ce digitalizarea este esențială?</h2>
      <p>În era digitală, afacerile care nu se adaptează riscă să rămână în urmă. Digitalizarea nu este doar despre tehnologie - este despre eficiență, competitivitate și satisfacția clienților.</p>
      
      <h2>Programe de finanțare pentru digitalizare</h2>
      <p>Programul "Inovații Digitale IMM" oferă granturi între 100.000 și 500.000 lei pentru transformarea digitală. Sunt eligibile: software de gestiune, platforme e-commerce, automatizări, soluții cloud.</p>
      
      <h2>Ce poți digitaliza?</h2>
      <p><strong>Vânzări și marketing:</strong> Magazine online, CRM, marketing automation<br>
      <strong>Operațiuni:</strong> ERP, gestiunea stocurilor, facturare electronică<br>
      <strong>Comunicare:</strong> Platforme de colaborare, videoconferințe<br>
      <strong>Analiză:</strong> Business intelligence, raportare automată</p>
      
      <h2>Pași pentru digitalizare de succes</h2>
      <p>1. Evaluează situația actuală<br>
      2. Identifică prioritățile<br>
      3. Alege soluțiile potrivite<br>
      4. Planifică implementarea<br>
      5. Formează echipa<br>
      6. Monitorizează rezultatele</p>
      
      <h2>Beneficii concrete</h2>
      <p>Companiile care s-au digitalizat raportează: reducerea costurilor cu 20-30%, creșterea productivității cu 25%, satisfacție mai mare a clienților.</p>
    `,
  },
  {
    id: 8,
    title: 'Planul de Afaceri Perfect: Structură și Exemple Concrete',
    excerpt: 'Template-uri și exemple practice pentru a crea un plan de afaceri care convinge evaluatorii.',
    category: 'Ghiduri',
    author: 'Olga Braga',
    date: '15 Decembrie 2024',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    content: `
      <h2>Structura unui plan de afaceri profesionist</h2>
      <p>Un plan de afaceri bine structurat este cheia succesului în obținerea finanțării. Iată componentele esențiale și cum să le dezvolți:</p>
      
      <h2>1. Rezumat Executiv</h2>
      <p>Aceasta este "cartea de vizită" a planului tău. Deși apare prima, se scrie ultima. Include: descrierea afacerii, propunerea unică de valoare, obiectivele financiare și suma solicitată.</p>
      
      <h2>2. Descrierea Afacerii</h2>
      <p>Prezintă în detaliu: ce faci, cum faci, de ce faci. Include istoricul companiei (dacă există), misiunea, viziunea și valorile.</p>
      
      <h2>3. Analiza Pieței</h2>
      <p>Demonstrează că înțelegi piața: dimensiunea pieței, tendințe, segmente de clienți, analiza competiției. Folosește date concrete din surse credibile.</p>
      
      <h2>4. Strategia de Marketing</h2>
      <p>Cum vei ajunge la clienți? Detalează: canalele de vânzare, strategia de prețuri, activitățile de promovare, bugetul de marketing.</p>
      
      <h2>5. Planul Operațional</h2>
      <p>Explică cum funcționează afacerea: procesele de producție/livrare, echipamentele necesare, furnizorii, locația.</p>
      
      <h2>6. Echipa de Management</h2>
      <p>Prezintă oamenii din spatele afacerii: experiența, competențele, rolurile. Echipa este adesea factorul decisiv în evaluare.</p>
      
      <h2>7. Proiecții Financiare</h2>
      <p>Include: prognoza veniturilor pe 3-5 ani, proiecția fluxului de numerar, punctul de break-even, indicatorii financiari cheie.</p>
      
      <h2>Sfaturi finale</h2>
      <p>• Fii realist și onest<br>
      • Folosește un limbaj clar și concis<br>
      • Include grafice și tabele<br>
      • Verifică de mai multe ori pentru erori<br>
      • Cere feedback înainte de a trimite</p>
    `,
  },
];

const categories = ['Toate', 'Ghiduri', 'Știri', 'Povești Succes', 'Legislație'];

type Article = typeof articles[0];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toate');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleOpenArticle = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Toate' || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const popularArticles = articles.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-primary-foreground">
        <div className="container-custom">
          <RevealOnScroll className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              Blog
            </span>
            <h1 className="mb-6 leading-tight">
              Resurse și <span className="text-secondary">Ghiduri Utile</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Articole, ghiduri și povești de succes pentru antreprenorii care vor să-și dezvolte afacerea.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Category Tabs */}
              <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
                {categories.map((category) => (
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

              {/* Articles Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {filteredArticles.map((article, index) => (
                  <RevealOnScroll key={article.id} delay={index * 50}>
                    <article 
                      className="card-program h-full flex flex-col cursor-pointer group"
                      onClick={() => handleOpenArticle(article)}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-4 left-4 badge-primary">
                          {article.category}
                        </span>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            {article.author}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {article.readTime}
                          </div>
                        </div>
                      </div>
                    </article>
                  </RevealOnScroll>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">Nu au fost găsite articole care să corespundă criteriilor.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <RevealOnScroll>
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
                  <h3 className="font-semibold mb-4">Caută Articole</h3>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Caută..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="form-input pl-12"
                    />
                  </div>
                </div>
              </RevealOnScroll>

              {/* Categories */}
              <RevealOnScroll delay={100}>
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
                  <h3 className="font-semibold mb-4">Categorii</h3>
                  <ul className="space-y-3">
                    {categories.filter(c => c !== 'Toate').map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => setSelectedCategory(category)}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-full text-left"
                        >
                          <Tag className="w-4 h-4" />
                          {category}
                          <span className="ml-auto text-sm">
                            ({articles.filter(a => a.category === category).length})
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              {/* Popular Articles */}
              <RevealOnScroll delay={200}>
                <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
                  <h3 className="font-semibold mb-4">Articole Populare</h3>
                  <ul className="space-y-4">
                    {popularArticles.map((article) => (
                      <li key={article.id}>
                        <button
                          onClick={() => handleOpenArticle(article)}
                          className="group flex gap-4 w-full text-left"
                        >
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                          />
                          <div>
                            <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                              {article.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">{article.date}</p>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              {/* Newsletter */}
              <RevealOnScroll delay={300}>
                <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                  <h3 className="font-semibold mb-2">Newsletter</h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Primește cele mai noi articole și oportunități de finanțare direct în inbox.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Email-ul tău"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                    />
                    <Button type="submit" className="w-full bg-white text-primary hover:bg-white/90">
                      Abonează-te
                    </Button>
                  </form>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Article Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto p-0">
          {selectedArticle && (
            <>
              {/* Article Header Image */}
              <div className="relative">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-3 backdrop-blur-sm">
                    {selectedArticle.category}
                  </span>
                  <h2 className="text-base md:text-lg font-bold mb-2">{selectedArticle.title}</h2>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {selectedArticle.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {selectedArticle.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {selectedArticle.readTime}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Article Content */}
              <div className="p-5 md:p-6">
                <div 
                  className="max-w-none text-sm
                    [&_h2]:text-sm [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-4 [&_h2]:mb-2 [&_h2]:border-b [&_h2]:border-border [&_h2]:pb-1
                    [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-2 [&_p]:text-[13px]
                    [&_strong]:text-foreground [&_strong]:font-medium"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />
                
                {/* CTA at the end */}
                <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                  <h3 className="text-lg font-semibold mb-2">Ai nevoie de consultanță?</h3>
                  <p className="text-muted-foreground mb-4">
                    Echipa noastră de experți este pregătită să te ajute să accesezi finanțarea potrivită pentru afacerea ta.
                  </p>
                  <div className="flex gap-3">
                    <Button asChild className="btn-primary">
                      <Link to="/contacte" onClick={handleCloseModal}>
                        Contactează-ne
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" onClick={handleCloseModal}>
                      Închide
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Blog;
