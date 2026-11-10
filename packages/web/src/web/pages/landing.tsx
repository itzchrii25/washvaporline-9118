import { useState, type FormEvent, type ReactNode } from "react";
import { motion, MotionConfig } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  Menu,
  X,
  Wind,
  ShieldCheck,
  Leaf,
  Sparkles,
  Building2,
  Hammer,
  Sofa,
  MapPin,
  Clock3,
  Check,
  MoveHorizontal,
  ChevronDown,
  Droplets,
  MessageCircle,
  Send,
} from "lucide-react";

const phone = "tel:+393208703773";
const whatsapp = (
  text = "Ciao Wash Vapor Line! Vorrei un preventivo gratuito per un intervento di pulizia a vapore.",
) => `https://wa.me/393208703773?text=${encodeURIComponent(text)}`;
const maps = "https://www.google.com/maps/search/?api=1&query=Via+Campania+73042+Casarano+LE";
const services = [
  {
    icon: Building2,
    title: "Pulizia edifici",
    tag: "CASE · UFFICI · CONDOMINI",
    text: "Ambienti curati, dal primo all’ultimo dettaglio. Pulizia professionale per abitazioni, uffici e spazi comuni.",
  },
  {
    icon: Wind,
    title: "Sanificazione a vapore",
    tag: "IGIENE IN PROFONDITÀ",
    text: "La forza del vapore per trattare superfici e ambienti, raggiungendo anche lo sporco più ostinato.",
  },
  {
    icon: Hammer,
    title: "Pulizie post-cantiere",
    tag: "UN NUOVO INIZIO",
    text: "Dopo lavori o ristrutturazioni, rimuoviamo polvere e residui per rendere i tuoi spazi pronti da vivere.",
  },
  {
    icon: Sofa,
    title: "Trattamenti speciali",
    tag: "SOLUZIONI SU MISURA",
    text: "Divani, tessuti e superfici delicate: valutiamo materiali e necessità per scegliere il trattamento adatto.",
  },
];
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}
function WAButton({
  children = "Richiedi un preventivo gratis",
  className = "",
  text,
}: {
  children?: ReactNode;
  className?: string;
  text?: string;
}) {
  return (
    <a
      className={`button primary ${className}`}
      href={whatsapp(text)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={20} />
      {children}
      <ArrowUpRight size={20} />
    </a>
  );
}
function Brand() {
  return (
    <a href="#home" className="brand" aria-label="Wash Vapor Line, torna all’inizio">
      <img src="/images/logo.webp" alt="Wash Vapor Line" width="145" height="68" />
    </a>
  );
}

export default function Landing() {
  const [menu, setMenu] = useState(false);
  const [compare, setCompare] = useState(48);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [service, setService] = useState("Sanificazione a vapore");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [prepared, setPrepared] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = `Ciao Wash Vapor Line! Sono ${name.trim()}. Vorrei un preventivo gratuito per: ${service}. ${message.trim()}`;
    window.open(whatsapp(text), "_blank", "noopener,noreferrer");
    setPrepared(true);
  }
  return (
    <MotionConfig reducedMotion="user">
      <div id="home">
        <a className="skip-link" href="#servizi">
          Vai al contenuto
        </a>
        <header className="header">
          <div className="container nav-row">
            <Brand />
            <nav
              className={menu ? "nav-links is-open" : "nav-links"}
              aria-label="Navigazione principale"
            >
              {[
                ["Servizi", "servizi"],
                ["Perché il vapore", "vantaggi"],
                ["Prima & dopo", "risultati"],
                ["Contatti", "contatti"],
              ].map(([label, id]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                  {label}
                </a>
              ))}
            </nav>
            <a className="nav-call button" href={phone}>
              <Phone size={16} />
              Chiama ora
              <ArrowUpRight size={16} />
            </a>
            <button
              className="menu-toggle"
              aria-label={menu ? "Chiudi menu" : "Apri menu"}
              aria-expanded={menu}
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="steam steam-one" />
            <div className="steam steam-two" />
            <div className="container hero-grid">
              <div className="hero-copy">
                <motion.div
                  className="location-badge"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span className="live-dot" />
                  SANIFICAZIONE & PULIZIA A VAPORE A CASARANO
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  Igiene profonda.
                  <br />
                  <span>Pulizia a vapore.</span>
                  <br />
                  Ambienti da vivere.
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                >
                  <p className="hero-description">
                    Il benessere dei tuoi spazi comincia da qui. Pulizia e sanificazione
                    professionale per case, uffici ed edifici <strong>a Casarano.</strong>
                  </p>
                  <WAButton />
                  <div className="hero-note">
                    <ShieldCheck size={15} />
                    Senza impegno
                    <span />
                    Un intervento su misura per te
                  </div>
                </motion.div>
                <div className="hero-bottom">
                  <div className="mini-icon">
                    <Wind size={24} />
                  </div>
                  <div>
                    <strong>La forza del vapore. La cura dei dettagli.</strong>
                    <p>Più pulito, naturalmente.</p>
                  </div>
                </div>
              </div>
              <motion.div
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="photo-frame">
                  <img
                    src="/images/hero.webp"
                    alt="Dettaglio illustrativo di pulizia professionale di un divano"
                    fetchPriority="high"
                    width="1400"
                    height="933"
                  />
                  <div className="photo-gradient" />
                  <div className="photo-top">
                    <span>
                      <span className="live-dot" />
                      PULIZIA CHE FA LA DIFFERENZA
                    </span>
                    <Sparkles size={19} />
                  </div>
                  <div className="photo-bottom">
                    <span>Una nuova sensazione di pulito.</span>
                    <p>Per gli spazi che ami.</p>
                  </div>
                </div>
                <div className="floating-card">
                  <div className="floating-icon">
                    <ShieldCheck size={29} />
                  </div>
                  <div>
                    <strong>Pulito in profondità</strong>
                    <p>Non solo quello che vedi.</p>
                  </div>
                  <Check size={18} className="floating-check" />
                </div>
                <div className="circle-seal">
                  <Wind size={27} />
                  <span>
                    VAPORE
                    <br />
                    <strong>PROFESSIONALE</strong>
                  </span>
                </div>
                <span className="image-caption">Immagine illustrativa</span>
              </motion.div>
            </div>
          </section>

          <div className="trust-strip">
            <div className="container trust-grid">
              <span>
                <MapPin />A Casarano, vicino a te
              </span>
              <span>
                <Leaf />
                Meno chimici aggressivi
              </span>
              <span>
                <ShieldCheck />
                Cura professionale
              </span>
              <span>
                <MessageCircle />
                Preventivo gratuito
              </span>
            </div>
          </div>

          <section id="servizi" className="section services">
            <div className="container">
              <Reveal className="section-heading">
                <div>
                  <span className="eyebrow">I NOSTRI SERVIZI</span>
                  <h2>
                    Ogni ambiente merita
                    <br />
                    <span>un nuovo livello di pulito.</span>
                  </h2>
                </div>
                <p>
                  Dalla pulizia quotidiana agli interventi più impegnativi.
                  <br />
                  La soluzione giusta, con la cura di chi sa fare.
                </p>
              </Reveal>
              <div className="service-grid">
                {services.map((s, i) => (
                  <Reveal key={s.title} delay={i * 0.06}>
                    <a
                      className="service-card"
                      href={whatsapp(
                        `Ciao Wash Vapor Line! Vorrei un preventivo gratuito per ${s.title.toLowerCase()}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="service-top">
                        <span className="service-icon">
                          <s.icon size={29} strokeWidth={1.5} />
                        </span>
                        <span className="service-number">0{i + 1}</span>
                      </div>
                      <span className="card-tag">{s.tag}</span>
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                      <div className="service-link">
                        Preventivo personalizzato gratuito
                        <span>
                          <ArrowUpRight size={21} />
                        </span>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
              <div className="service-help">
                <span>
                  Hai un’esigenza particolare? <strong>Parliamone.</strong>
                </span>
                <a href={whatsapp()} target="_blank" rel="noopener noreferrer">
                  Scrivici su WhatsApp
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </section>

          <section id="vantaggi" className="section benefits">
            <div className="container">
              <Reveal className="center-heading">
                <span className="eyebrow">PERCHÉ IL VAPORE?</span>
                <h2>
                  Potente sullo sporco.
                  <br />
                  <span>Delicato sui tuoi ambienti.</span>
                </h2>
                <p>Un modo intelligente di prendersi cura degli spazi che vivi ogni giorno.</p>
              </Reveal>
              <div className="benefit-grid">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Igiene profonda",
                    text: "Il calore aiuta a ridurre la presenza di batteri sulle superfici trattabili.",
                  },
                  {
                    icon: Leaf,
                    title: "Scelta più ecologica",
                    text: "Meno ricorso a prodotti chimici aggressivi, grazie alla forza del vapore.",
                  },
                  {
                    icon: Sparkles,
                    title: "Pulito che si nota",
                    text: "Rimozione dello sporco in profondità, per ambienti curati e rinnovati.",
                  },
                  {
                    icon: Droplets,
                    title: "Asciugatura rapida",
                    text: "Umidità contenuta e tempi di asciugatura variabili in base ai materiali.",
                  },
                ].map((b, i) => (
                  <Reveal className="benefit-card" key={b.title} delay={i * 0.07}>
                    <span className="benefit-icon">
                      <b.icon size={27} strokeWidth={1.6} />
                    </span>
                    <h3>{b.title}</h3>
                    <p>{b.text}</p>
                  </Reveal>
                ))}
              </div>
              <p className="technical-note">
                L’efficacia del trattamento dipende da temperatura, tempo di contatto e superficie.
                Valutiamo sempre la compatibilità dei materiali prima dell’intervento.
              </p>
            </div>
          </section>

          <section id="risultati" className="section results">
            <div className="container result-grid">
              <Reveal className="result-copy">
                <span className="eyebrow">PRIMA & DOPO</span>
                <h2>
                  Il cambiamento?
                  <br />
                  <span>Si vede. Si sente.</span>
                </h2>
                <p>
                  Riscopri il piacere di un ambiente fresco e curato. Dal tessuto del tuo divano
                  alle superfici di casa, ogni dettaglio conta.
                </p>
                <div className="comparison-instruction">
                  <MoveHorizontal size={21} />
                  <span>Trascina il cursore e scopri la differenza</span>
                </div>
                <p className="demo-note">
                  Confronto dimostrativo con immagine ed effetti visivi: non rappresenta un
                  intervento reale né garantisce un risultato.
                </p>
                <a className="text-link" href="#contatti">
                  Dai nuova vita ai tuoi ambienti
                  <ArrowUpRight size={18} />
                </a>
              </Reveal>
              <Reveal>
                <div className="comparison">
                  <img
                    src="/images/treatment.webp"
                    alt="Superficie di un divano, simulazione visiva dopo la pulizia"
                    loading="lazy"
                    width="1400"
                    height="933"
                  />
                  <div
                    className="before-image"
                    style={{ clipPath: `inset(0 ${100 - compare}% 0 0)` }}
                  >
                    <img src="/images/treatment.webp" alt="" loading="lazy" />
                  </div>
                  <span className="compare-label before-label">PRIMA</span>
                  <span className="compare-label after-label">DOPO</span>
                  <div className="comparison-line" style={{ left: `${compare}%` }}>
                    <span>
                      <MoveHorizontal size={23} />
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="95"
                    value={compare}
                    onChange={(e) => setCompare(Number(e.target.value))}
                    aria-label="Confronto dimostrativo prima e dopo"
                  />
                  <span className="demo-badge">SIMULAZIONE VISIVA</span>
                </div>
              </Reveal>
            </div>
          </section>

          <section className="container">
            <Reveal className="cta-banner">
              <div className="cta-decoration">
                <Wind size={230} strokeWidth={0.5} />
              </div>
              <div>
                <span className="eyebrow">IL TUO PROSSIMO PASSO È SEMPLICE</span>
                <h2>
                  Tu pensa a viverli.
                  <br />
                  Al pulito pensiamo noi.
                </h2>
                <p>Raccontaci di cosa hai bisogno. Il preventivo è gratuito.</p>
              </div>
              <div className="cta-actions">
                <WAButton className="white-button">Parliamone su WhatsApp</WAButton>
                <a href={phone}>
                  <Phone size={17} />
                  Oppure chiamaci: 320 870 3773
                </a>
              </div>
            </Reveal>
          </section>

          <section id="contatti" className="section contact">
            <div className="container">
              <Reveal className="section-heading">
                <div>
                  <span className="eyebrow">DOVE SIAMO & CONTATTI</span>
                  <h2>
                    Il tuo pulito,
                    <br />
                    <span>a portata di messaggio.</span>
                  </h2>
                </div>
                <p>
                  Siamo a Casarano. Contattaci per verificare
                  <br />
                  la disponibilità e organizzare il tuo intervento.
                </p>
              </Reveal>
              <div className="contact-grid">
                <Reveal className="contact-details">
                  <div className="contact-items">
                    <a href={maps} target="_blank" rel="noopener noreferrer">
                      <MapPin />
                      <div>
                        <span>DOVE TROVARCI</span>
                        <strong>Via Campania</strong>
                        <p>73042 Casarano (LE)</p>
                      </div>
                      <ArrowUpRight size={19} />
                    </a>
                    <a href={phone}>
                      <Phone />
                      <div>
                        <span>CHIAMACI DIRETTAMENTE</span>
                        <strong>320 870 3773</strong>
                        <p>Un contatto diretto, senza attese online.</p>
                      </div>
                      <ArrowUpRight size={19} />
                    </a>
                    <div>
                      <Clock3 />
                      <div>
                        <span>ORARI DI APERTURA</span>
                        <strong>Lunedì – Sabato</strong>
                        <p>08:00 – 19:00 · Domenica chiuso</p>
                      </div>
                    </div>
                  </div>
                  <div className="map-panel">
                    {mapLoaded ? (
                      <iframe
                        title="Wash Vapor Line, Via Campania a Casarano"
                        src="https://maps.google.com/maps?q=Via%20Campania%2C%20Casarano%20LE&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    ) : (
                      <div className="map-placeholder">
                        <MapPin size={29} />
                        <strong>Ci trovi a Casarano</strong>
                        <button onClick={() => setMapLoaded(true)}>
                          Mostra Google Maps
                          <ArrowUpRight size={15} />
                        </button>
                        <small>Caricando la mappa ti colleghi a Google.</small>
                      </div>
                    )}
                    <a
                      className="map-directions"
                      href={maps}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ottieni indicazioni
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </Reveal>
                <Reveal className="quote-form">
                  <span className="form-icon">
                    <MessageCircle size={27} />
                  </span>
                  <h3>Partiamo dal tuo ambiente.</h3>
                  <p>Compila due dettagli e inviaci la tua richiesta su WhatsApp.</p>
                  <form onSubmit={submit}>
                    <label htmlFor="name">Come ti chiami?</label>
                    <input
                      id="name"
                      name="name"
                      aria-label="Come ti chiami?"
                      autoComplete="name"
                      placeholder="Il tuo nome"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setPrepared(false);
                      }}
                      required
                      maxLength={80}
                    />
                    <label htmlFor="service">Di quale servizio hai bisogno?</label>
                    <div className="select-wrap">
                      <select
                        id="service"
                        value={service}
                        onChange={(e) => {
                          setService(e.target.value);
                          setPrepared(false);
                        }}
                      >
                        {services.map((s) => (
                          <option key={s.title}>{s.title}</option>
                        ))}
                        <option>Altro / Vorrei un consiglio</option>
                      </select>
                      <ChevronDown size={17} />
                    </div>
                    <label htmlFor="message">
                      Raccontaci qualcosa in più <span>(facoltativo)</span>
                    </label>
                    <textarea
                      id="message"
                      aria-label="Raccontaci qualcosa in più"
                      placeholder="Tipo di ambiente, zona, esigenze particolari…"
                      rows={3}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        setPrepared(false);
                      }}
                      maxLength={1500}
                    />
                    <button className="button primary" type="submit">
                      <Send size={18} />
                      Richiedi preventivo su WhatsApp
                      <ArrowUpRight size={18} />
                    </button>
                    <p className="form-privacy">
                      Nessun dato viene salvato da questo modulo. Si apre WhatsApp con il messaggio
                      pronto: sarai tu a inviarlo.
                    </p>
                    {prepared && (
                      <output className="form-status" aria-live="polite">
                        Messaggio preparato. Se WhatsApp non si è aperto,{" "}
                        <a
                          href={whatsapp(
                            `Ciao! Sono ${name}. Vorrei un preventivo per ${service}. ${message}`,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          clicca qui
                        </a>
                        .
                      </output>
                    )}
                  </form>
                </Reveal>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="container footer-main">
            <div>
              <Brand />
              <p>
                La forza del vapore.
                <br />
                La cura dei tuoi ambienti.
              </p>
            </div>
            <div>
              <span>WASH VAPOR LINE</span>
              <p>
                Via Campania, 73042 Casarano (LE)
                <br />
                <a href={phone}>+39 320 870 3773</a>
                <br />
                Lun – Sab · 08:00 – 19:00
              </p>
            </div>
            <div className="footer-links">
              <a href="#servizi">I nostri servizi</a>
              <a href="#vantaggi">Perché il vapore</a>
              <a href="#contatti">
                Richiedi un preventivo
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="container footer-bottom">
            <span>© {new Date().getFullYear()} Wash Vapor Line. Tutti i diritti riservati.</span>
            <span>Pulizia professionale a Casarano, Lecce.</span>
          </div>
        </footer>
        <a
          className="desktop-wa"
          href={whatsapp()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contatta Wash Vapor Line su WhatsApp"
        >
          <MessageCircle size={26} />
        </a>
        <div className="mobile-dock">
          <a href={phone}>
            <Phone size={19} />
            <span>
              Chiama ora<small>320 870 3773</small>
            </span>
          </a>
          <a href={whatsapp()} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={21} />
            <span>
              Preventivo rapido<small>Su WhatsApp</small>
            </span>
          </a>
        </div>
      </div>
    </MotionConfig>
  );
}
