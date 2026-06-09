/* Karriere screen — Schreinerei Hergert */
const { Button, SectionHeading, Badge, PhotoTile } = (window.HergertDesignSystem_5a1fa2 || {});
const { Section, CONTACT } = (window.HShell || {});
const { Check, Mail, Phone, MapPin, ArrowRight } = (window.HIcons || {});

function KarriereHero() {
  return (
    <Section tight style={{ paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-8)' }}>
      <div className="h-hero-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', justifyContent: 'center' }}>
          <span className="h-eyebrow">MANNHEIM-SANDHOFEN · SEIT 1928</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h1)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text-heading)', margin: 0, textWrap: 'balance' }}>
            Werde Teil unseres Teams
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lg)', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0, maxWidth: 520 }}>
            In unserem Familienbetrieb verbinden wir Tradition mit modernster Technik – seit 3 Generationen. Wir suchen Menschen, denen Qualität und Handwerk am Herzen liegen.
          </p>
          <div style={{ marginTop: 'var(--space-2)' }}>
            <Button href={`mailto:${CONTACT.email}`} variant="primary" iconRight={<ArrowRight size={17} />}>Jetzt bewerben</Button>
          </div>
        </div>
        <div>
          <PhotoTile src="assets/photos/teekueche-industrie.jpg" alt="Handwerk bei Schreinerei Hergert" />
        </div>
      </div>
    </Section>
  );
}

const PAIN_POINTS = [
  { title: 'Der Montage-Frust', text: 'Du verbringst mehr Zeit auf der Autobahn als bei deiner Familie?' },
  { title: 'Der Maschinen-Ärger', text: 'Du willst Qualität liefern, kämpfst aber täglich mit veraltetem Werkzeug?' },
  { title: 'Der Freitags-Stress', text: 'Während andere ins Wochenende starten, drückt dir noch jemand eine Änderung rein?' },
];

function PainPoints() {
  return (
    <Section tint="var(--cream-50)" tight>
      <SectionHeading eyebrow="Hand aufs Herz" title="Was nervt dich aktuell?" intro="Niemand wechselt den Job, wenn alles perfekt ist." maxWidth="600px" />
      <div className="h-cols-3" style={{ marginTop: 'var(--space-6)' }}>
        {PAIN_POINTS.map((p) => (
          <div key={p.title} style={{ background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h4)', color: 'var(--text-heading)' }}>{p.title}</div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>{p.text}</p>
          </div>
        ))}
      </div>
      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-lg)', color: 'var(--oak-600)', textAlign: 'center', marginTop: 'var(--space-6)', marginBottom: 0 }}>
        Genau das wollen wir ändern.
      </p>
    </Section>
  );
}

const BENEFITS = [
  'Kurzer Freitag — Früher Start ins Wochenende',
  '30 Tage Urlaub',
  'Top Verdienst + Urlaubs- und Weihnachtsgeld',
  'Betriebliche Altersvorsorge',
  'Modernster Maschinenpark (inkl. CNC)',
  'Regelmäßige Weiterbildungen',
  'Sicherer Arbeitsplatz in einem kollegialen Team',
];

function Benefits() {
  return (
    <Section tight>
      <SectionHeading eyebrow="Deine Vorteile" title="Was wir dir bieten" maxWidth="600px" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
        {BENEFITS.map((b) => (
          <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-4)', background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 999, background: 'var(--green-100)', color: 'var(--green-600)', flex: 'none' }}>
              <Check size={18} />
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-body)', lineHeight: 1.5 }}>{b}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function JobCard({ position, badge, description, requirements }) {
  const reqs = requirements.split(' · ');
  return (
    <div style={{ background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h3)', color: 'var(--text-heading)', margin: 0 }}>{position}</h3>
        <Badge variant="eyebrow">{badge}</Badge>
      </div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>{description}</p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {reqs.map((r) => (
          <span key={r} style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', background: 'var(--cream-100, #f5ede0)', borderRadius: 'var(--radius-sm)', padding: '4px 12px', border: '1px solid var(--border-subtle)' }}>{r}</span>
        ))}
      </div>
      <div>
        <Button href={`mailto:${CONTACT.email}`} variant="primary" iconRight={<ArrowRight size={16} />}>Jetzt bewerben</Button>
      </div>
    </div>
  );
}

function OpenJobs() {
  return (
    <Section tint="var(--cream-50)" tight>
      <SectionHeading eyebrow="Stellenangebote" title="Offene Stellen" maxWidth="600px" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
        <div className="job-active">
          <JobCard
            position="Schreinergeselle (M/W/D)"
            badge="Jetzt gesucht"
            description="Für Werkstatt & Montage in der Region Mannheim. Regionale Projekte statt weiter Reisen."
            requirements="Abgeschlossene Schreiner-Ausbildung · Führerschein B"
          />
        </div>
        <div className="job-active">
          <JobCard
            position="Schreinermeister (M/W/D)"
            badge="Jetzt gesucht"
            description="Verantwortungsvolle Stelle mit Projekt-Verantwortung von der Planung bis zur Fertigung und Montage."
            requirements="Schreiner-Ausbildung + Meisterbrief · Führerschein B"
          />
        </div>
      </div>
    </Section>
  );
}

function Initiativbewerbung() {
  return (
    <Section tight>
      <div className="h-split" style={{ alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Badge variant="eyebrow">Initiativbewerbung</Badge>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h2)', lineHeight: 1.15, color: 'var(--text-heading)', margin: 0 }}>
            Kein passendes Stellenangebot dabei?
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', lineHeight: 1.75, color: 'var(--text-secondary)', margin: 0 }}>
            Wir freuen uns immer über Initiativbewerbungen von Menschen, die Leidenschaft für das Handwerk mitbringen.
          </p>
          <div style={{ background: 'var(--cream-50)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>
              Für das erste Kennenlernen brauchen wir kein Anschreiben und keinen Lebenslauf.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)' }}>
          {[
            { Icon: Mail, href: `mailto:${CONTACT.email}`, text: CONTACT.email },
            { Icon: Phone, href: CONTACT.tel, text: CONTACT.phone },
          ].map(({ Icon, href, text }) => (
            <a key={href} href={href} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', color: 'var(--text-body)', textDecoration: 'none' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: 'var(--cream-50)', border: '1px solid var(--border-subtle)', color: 'var(--oak-600)', flex: 'none' }}>
                <Icon size={18} />
              </span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', wordBreak: 'break-word' }}>{text}</span>
            </a>
          ))}
          <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: 'var(--cream-50)', border: '1px solid var(--border-subtle)', color: 'var(--oak-600)', flex: 'none', marginTop: 2 }}>
              <MapPin size={18} />
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-body)', lineHeight: 1.6, paddingTop: 8 }}>
              {CONTACT.street}<br />{CONTACT.region}
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Karriere() {
  return (
    <React.Fragment>
      <KarriereHero />
      <PainPoints />
      <Benefits />
      <OpenJobs />
      <Initiativbewerbung />
    </React.Fragment>
  );
}

window.HScreens = window.HScreens || {};
window.HScreens.Karriere = Karriere;
