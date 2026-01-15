import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

const businessTypes = [
  'Startup / Afacere nouă',
  'IMM existent',
  'Microîntreprindere',
  'Fermă / Agricultură',
  'Antreprenoriat social',
  'Altele',
];

const serviceTypes = [
  'Consultanță granturi',
  'Elaborare plan de afaceri',
  'Management proiect',
  'Analiză eligibilitate',
  'Altele',
];

const faqs = [
  {
    question: 'Cât costă serviciile de consultanță?',
    answer: 'Consultația inițială este gratuită. Pentru serviciile complete de elaborare și management de proiecte, tarifele variază în funcție de complexitatea proiectului. Contactați-ne pentru o ofertă personalizată.',
  },
  {
    question: 'Cât durează procesul de aplicare pentru un grant?',
    answer: 'În medie, pregătirea unei aplicații complete durează între 2-6 săptămâni, în funcție de complexitatea proiectului și disponibilitatea documentelor. Procesul de evaluare ulterior depinde de fiecare program în parte.',
  },
  {
    question: 'Ce documente sunt necesare pentru a începe colaborarea?',
    answer: 'Pentru consultația inițială nu aveți nevoie de documente specifice. Pentru elaborarea proiectului, vom avea nevoie de documente de identificare, certificatul de înregistrare al firmei și situațiile financiare (dacă există).',
  },
  {
    question: 'Lucrați cu startup-uri fără istoric financiar?',
    answer: 'Da, avem expertiză în programe dedicate startup-urilor și antreprenorilor la început de drum. Există granturi specifice pentru afaceri noi care nu necesită istoric financiar.',
  },
  {
    question: 'Care este rata voastră de succes?',
    answer: 'Avem o rată de succes de 95% pentru proiectele pe care le pregătim. Acest lucru se datorează evaluării atente a eligibilității înainte de a începe elaborarea proiectului.',
  },
  {
    question: 'Oferiți suport și după obținerea finanțării?',
    answer: 'Da, oferim servicii complete de management al proiectului, inclusiv monitorizarea implementării, raportarea către finanțatori și suport pentru achiziții publice.',
  },
];

const Contacte = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    serviceType: '',
    budget: '',
    message: '',
    gdpr: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-primary text-primary-foreground">
        <div className="container-custom">
          <RevealOnScroll className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              Contacte
            </span>
            <h1 className="mb-6 leading-tight">
              Hai să Discutăm Despre <span className="text-secondary">Proiectul Tău</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Echipa noastră de experți este pregătită să te ajute. Completează formularul sau contactează-ne direct.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <RevealOnScroll>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Mulțumim pentru mesaj!</h3>
                    <p className="text-muted-foreground mb-6">
                      Am primit solicitarea ta și te vom contacta în cel mai scurt timp posibil.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Trimite alt mesaj
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-semibold mb-2">Solicită o Consultație</h2>
                    <p className="text-muted-foreground mb-8">Completează formularul și te contactăm în 24 de ore.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
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
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
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
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="businessType" className="form-label">Tip afacere *</label>
                          <select
                            id="businessType"
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                          >
                            <option value="">Selectează...</option>
                            {businessTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="serviceType" className="form-label">Serviciu dorit</label>
                          <select
                            id="serviceType"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleInputChange}
                            className="form-input"
                          >
                            <option value="">Selectează...</option>
                            {serviceTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="form-label">Mesaj detaliat</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="form-input resize-none"
                          placeholder="Spune-ne mai multe despre proiectul tău..."
                        />
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="gdpr"
                          name="gdpr"
                          checked={formData.gdpr}
                          onChange={handleInputChange}
                          className="mt-1 rounded border-border"
                          required
                        />
                        <label htmlFor="gdpr" className="text-sm text-muted-foreground">
                          Sunt de acord cu prelucrarea datelor personale conform{' '}
                          <Link to="/politica-confidentialitate" className="text-primary hover:underline">
                            Politicii de Confidențialitate
                          </Link>
                          . *
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="btn-primary w-full py-6 text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Se trimite...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Trimite Mesajul
                            <Send className="w-5 h-5" />
                          </span>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </RevealOnScroll>

            {/* Contact Info */}
            <div className="space-y-8">
              <RevealOnScroll delay={100}>
                <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                  <h3 className="text-xl font-semibold mb-6">Informații de Contact</h3>
                  <ul className="space-y-6">
                    <li>
                      <a href="tel:+37368115114" className="flex items-start gap-4 group">
                        <div className="icon-container group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium">Telefon</p>
                          <p className="text-muted-foreground">+373 68 115 114</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@consultantaafaceri.md" className="flex items-start gap-4 group">
                        <div className="icon-container group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-muted-foreground">info@consultantaafaceri.md</p>
                        </div>
                      </a>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="icon-container">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">Adresă</p>
                        <p className="text-muted-foreground">Chișinău, Republica Moldova</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="icon-container">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">Program</p>
                        <p className="text-muted-foreground">Luni - Vineri: 9:00 - 18:00</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={200}>
                <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Persoana de Contact</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">OB</span>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Olga Braga</p>
                      <p className="text-muted-foreground">Consultant Principal</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Map */}
              <RevealOnScroll delay={300}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87302.71308659156!2d28.772584!3d47.010452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x37d1d6305749dd3c!2zQ2hpyJlpbsSDdSwgTW9sZG92YQ!5e0!3m2!1sen!2s!4v1704067200000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <RevealOnScroll className="text-center mb-12">
            <span className="badge-primary mb-4">FAQ</span>
            <h2 className="mb-4">Întrebări Frecvente</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Răspunsuri la cele mai frecvente întrebări despre serviciile noastre.
            </p>
          </RevealOnScroll>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <RevealOnScroll key={index} delay={index * 50}>
                <div className="bg-card rounded-xl shadow-card border border-border/50 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-muted-foreground">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacte;
