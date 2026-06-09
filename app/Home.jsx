/* Home screen — Schreinerei Hergert */
const { Button, Card, PhotoTile, StatBlock, SectionHeading, Testimonial, IconButton, Badge } = (window.HergertDesignSystem_5a1fa2 || {});
const { Section, CtaBanner, CONTACT } = (window.HShell || {});
const { ArrowRight, ArrowLeft, Ruler, Boxes, Building, Check, Phone, ChevronDown } = (window.HIcons || {});
const HA = 'assets';

function Hero() {
  return (
    <Section tight style={{ paddingTop: 'var(--space-7)' }}>
      <div className="h-hero-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Badge variant="eyebrow">Seit 1928 · Mannheim-Sandhofen</Badge>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-hero)', lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--text-heading)', margin: 0, textWrap: 'balance' }}>
            Ihr Schreiner in Mannheim – Maßmöbel &amp; Innenausbau
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lg)', lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: 520, margin: 0 }}>
            Inhabergeführt, 3. Generation. Wir fertigen, was es so nicht zu kaufen gibt – präzise, regional und mit Blick fürs Detail.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-2)', flexWrap: 'wrap' }}>
            <Button href="kontakt.html" variant="primary" size="lg" iconRight={<ArrowRight size={18} />} style={{ whiteSpace: 'nowrap' }}>Jetzt anfragen</Button>
            <Button href="leistungen.html" variant="secondary" size="lg" style={{ whiteSpace: 'nowrap' }}>Unsere Leistungen</Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginTop: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
            <Check size={16} style={{ color: 'var(--oak-600)' }} /> Antwort in der Regel innerhalb eines Werktags
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div className="h-frame" style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', aspectRatio: '4 / 5' }}>
            <img src={`${HA}/photos/waschtisch-eiche.jpg`} alt="Maßgefertigter Doppelwaschtisch aus Eiche mit Ablage-Nische" />
          </div>
          <div style={{ position: 'absolute', left: 'var(--space-3)', bottom: 'var(--space-3)', background: 'var(--white)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: '16px 20px', display: 'flex', gap: 'var(--space-4)' }}>
            <StatBlock value="98" label="Jahre" align="left" />
            <div style={{ width: 1, background: 'var(--border-subtle)' }} />
            <StatBlock value="3." label="Generation" align="left" accent />
          </div>
        </div>
      </div>
    </Section>
  );
}

const SERVICES = [
  { eyebrow: 'Möbel nach Maß', title: 'Maßgeschreinert, nicht von der Stange', img: 'waschtisch-schwebend.jpg', body: 'Wir fertigen, was es so nicht zu kaufen gibt – präzise, langlebig und ganz nach Ihren individuellen Wünschen.' },
  { eyebrow: 'Innenausbau', title: 'Raumpotenzial voll ausschöpfen', img: 'dachschraegenschrank-led.jpg', body: 'Passgenaue Einbauten schaffen Stauraum und Ordnung – für jede Nische, jede Dachschräge, jeden Winkel.' },
  { eyebrow: 'Gewerbelösungen', title: 'Maßarbeit für Unternehmen', img: 'trennwaende-buero.jpg', body: 'Empfangsbereiche, Teeküchen, Trennwände oder Staubschutz – maßgeschneidert für Büro, Praxis und Handel.' },
];

function Services() {
  return (
    <Section tint="var(--cream-50)">
      <SectionHeading eyebrow="Leistungen" title="Unsere Leistungen im Überblick" intro="Vom maßgefertigten Einzelstück bis zum kompletten Innenausbau realisieren wir individuelle Wünsche für Privat- und Gewerbekunden." />
      <div className="h-cols-3" style={{ marginTop: 'var(--space-6)' }}>
        {SERVICES.map((s) => (
          <Card key={s.eyebrow} image={`${HA}/photos/${s.img}`} imageAlt={s.title} eyebrow={s.eyebrow} title={s.title}
            href="leistungen.html"
            footer={<Button variant="ghost" size="sm" iconRight={<ArrowRight size={16} />} style={{ paddingLeft: 0 }}>Mehr erfahren</Button>}
          >
            {s.body}
          </Card>
        ))}
      </div>
    </Section>
  );
}

const TILES = [
  { img: 'sitzfenster.jpg', caption: 'Sitzfenster', meta: 'Eiche · mit Stauraum' },
  { img: 'schlafzimmerschrank-anthrazit.jpg', caption: 'Einbauschrank', meta: 'Anthrazit · Schiebeleiter' },
  { img: 'garderobe-eckbank.jpg', caption: 'Garderobe', meta: 'Eiche · Eckbank' },
  { img: 'kommode-weiss.jpg', caption: 'Ankleide', meta: 'Weiß · grifflos' },
  { img: 'dachschraegenschrank-led.jpg', caption: 'Dachschräge', meta: 'Weiß · LED-Beleuchtung' },
  { img: 'weinregal-eiche.png', caption: 'Weinregal', meta: 'Eiche · beleuchtet' },
  { img: 'wandkommode-eiche.jpg', caption: 'Wandkommode', meta: 'Eiche · schwebend' },
  { img: 'badschrank-eiche.jpg', caption: 'Badschrank', meta: 'Eiche · Spiegelschrank' },
  { img: 'schranktreppe.jpg', caption: 'Schranktreppe', meta: 'Stauraum unter der Treppe' },
];

function Portfolio() {
  return (
    <Section>
      <SectionHeading eyebrow="Referenzen" title="Ausgewählte Arbeiten" intro="Ein Auszug aus Projekten in Mannheim und der Region – Innenausbau, maßgefertigte Möbel und mehr." />
      <div className="h-portfolio" style={{ marginTop: 'var(--space-6)' }}>
        {TILES.map((t) => (
          <PhotoTile key={t.img} image={`${HA}/photos/${t.img}`} imageAlt={`${t.caption} – ${t.meta}`} caption={t.caption} meta={t.meta} ratio="3 / 4" />
        ))}
      </div>
    </Section>
  );
}

function Trust() {
  return (
    <Section tint="var(--oak-100)">
      <div className="h-split">
        <div style={{ position: 'relative' }}>
          <image-slot id="home-inhaber" class="h-frame h-portrait-slot" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
            shape="rounded" radius="12" placeholder="Inhaber- oder Teamfoto hier ablegen"></image-slot>
          <div style={{ position: 'absolute', left: 'var(--space-3)', bottom: 'var(--space-3)', background: 'var(--white)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', padding: '12px 16px', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)' }}>
            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Familie Hergert</div>
            <div style={{ color: 'var(--text-secondary)' }}>Inhaber · 3. Generation</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <SectionHeading eyebrow="Familienbetrieb seit 1928" title="98 Jahre Schreinerhandwerk in Mannheim"
            intro="Was 1928 als kleine Schreinerei in Mannheim-Sandhofen begann, führen wir heute in dritter Generation. Inhabergeführt von Anfang an – mit der Sorgfalt und Verlässlichkeit, der Privat- und Gewerbekunden seit Generationen vertrauen." />
          <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
            <StatBlock value="1928" label="gegründet" align="left" />
            <StatBlock value="98" label="Jahre Erfahrung" align="left" accent />
            <StatBlock value="3." label="Generation" align="left" />
          </div>
        </div>
      </div>
    </Section>
  );
}

const QUOTES = [
  { quote: 'Unser Dachgeschoss war wegen der Schrägen kaum nutzbar. Daraus wurde ein Einbauschrank, der jeden Winkel nutzt. Gute Beratung, saubere Arbeit.', name: 'M. Steinbach', meta: 'Privatkunde, Mannheim-Rheinau' },
  { quote: 'Empfangstheke und Büroeinrichtung für unsere neuen Räume – termingerecht, maßgenau und ohne Komplikationen. Sehr zu empfehlen.', name: 'J. Kramer', meta: 'Geschäftsführerin, Mannheim' },
  { quote: 'Professionelle Beratung, pünktliche Ausführung. Der Einbauschrank ist exakt so geworden, wie wir ihn uns vorgestellt haben. Sehr gerne wieder!', name: 'Familie Müller', meta: 'Privatkunden, Mannheim-Neckarau' },
];

function Testimonials() {
  const [i, setI] = React.useState(0);
  const q = QUOTES[i];
  const go = (d) => setI((p) => (p + d + QUOTES.length) % QUOTES.length);
  return (
    <Section tint="var(--cream-50)">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-5)' }}>
        <Badge variant="eyebrow">Was Kunden sagen</Badge>
        <Testimonial quote={q.quote} name={q.name} meta={q.meta} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginTop: 'var(--space-2)' }}>
          <IconButton label="Vorheriges" variant="outline" onClick={() => go(-1)}><ArrowLeft size={18} /></IconButton>
          <div style={{ display: 'flex', gap: 8 }}>
            {QUOTES.map((_, n) => (
              <button key={n} aria-label={`Stimme ${n + 1}`} onClick={() => setI(n)} style={{ border: 'none', padding: 0, cursor: 'pointer', width: n === i ? 24 : 8, height: 8, borderRadius: 999, background: n === i ? 'var(--oak-500)' : 'var(--cream-400)', transition: 'all var(--duration-base) var(--ease-standard)' }} />
            ))}
          </div>
          <IconButton label="Nächstes" variant="outline" onClick={() => go(1)}><ArrowRight size={18} /></IconButton>
        </div>
      </div>
    </Section>
  );
}

const FAQS = [
  {
    q: 'Was kostet ein Maßmöbel bei Schreinerei Hergert?',
    a: 'Die Kosten hängen von Abmessungen, Materialwahl und Ausführung ab. Einfache Einbauschränke beginnen bei ca. 1.500 €, aufwendigere Schrankwände oder komplette Innenausbauten entsprechend mehr. Wir erstellen Ihnen gerne ein kostenloses, unverbindliches Angebot nach einem persönlichen Beratungsgespräch.',
  },
  {
    q: 'Wie lange dauert die Fertigung eines Maßmöbels?',
    a: 'Je nach Projektumfang und Auftragslage dauert die Fertigung in der Regel 4 bis 8 Wochen ab Auftragserteilung. Bei komplexeren Projekten wie vollständigem Innenausbau kann es etwas länger sein. Im Erstgespräch nennen wir Ihnen eine konkrete Einschätzung für Ihr Vorhaben.',
  },
  {
    q: 'In welchem Gebiet ist Schreinerei Hergert tätig?',
    a: 'Wir sind hauptsächlich in Mannheim und der gesamten Rhein-Neckar-Region tätig – darunter Ludwigshafen, Heidelberg, Schwetzingen, Viernheim und Weinheim. Unsere Werkstatt befindet sich in Mannheim-Sandhofen und ist gut über die B44 erreichbar.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--border-subtle)' }}>
      <button onClick={() => setOpen((o) => !o)} aria-expanded={open}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-4) 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-lg)', color: 'var(--text-heading)', lineHeight: 1.35 }}>{q}</span>
        <span style={{ flex: 'none', color: 'var(--oak-500)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}><ChevronDown size={22} /></span>
      </button>
      {open && (
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', lineHeight: 1.75, color: 'var(--text-secondary)', margin: '0 0 var(--space-4)' }}>{a}</p>
      )}
    </div>
  );
}

function Faq() {
  return (
    <Section tight>
      <SectionHeading eyebrow="FAQ" title="Häufig gestellte Fragen" maxWidth="680px" />
      <div style={{ maxWidth: 720, marginTop: 'var(--space-6)', borderTop: '1px solid var(--border-subtle)' }}>
        {FAQS.map((item) => <FaqItem key={item.q} {...item} />)}
      </div>
    </Section>
  );
}

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Services />
      <Portfolio />
      <Trust />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </React.Fragment>
  );
}

window.HScreens = window.HScreens || {};
window.HScreens.Home = Home;
