import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, ArrowRight, ChevronRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
  },
];

const categories = ['Toate', 'Ghiduri', 'Știri', 'Povești Succes', 'Legislație'];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toate');

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
                    <article className="card-program h-full flex flex-col">
                      <div className="relative overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 object-cover"
                        />
                        <span className="absolute top-4 left-4 badge-primary">
                          {article.category}
                        </span>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-semibold mb-3 line-clamp-2 hover:text-primary transition-colors">
                          <Link to={`/blog/${article.id}`}>{article.title}</Link>
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
                        <Link
                          to={`/blog/${article.id}`}
                          className="group flex gap-4"
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
                        </Link>
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

      <Footer />
    </div>
  );
};

export default Blog;
