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
    <Section tint="#1C1C1C" tight>
      <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto', marginBottom: 'var(--space-6)' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#BD9B73', display: 'inline-block', lineHeight: 1.4 }}>
          Hand aufs Herz
          <span style={{ display: 'block', width: 24, height: 2, background: '#BD9B73', marginTop: 6, marginLeft: 'auto', marginRight: 'auto' }} />
        </span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h2)', lineHeight: 1.12, letterSpacing: '-0.02em', color: '#FFFFFF', margin: 'var(--space-4) 0 var(--space-3)', textWrap: 'pretty' }}>Was nervt dich aktuell?</h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: '#E9CDA2', margin: 0, lineHeight: 1.7 }}>Niemand wechselt den Job, wenn alles perfekt ist.</p>
      </div>
      <div className="h-cols-3" style={{ marginTop: 'var(--space-6)' }}>
        {PAIN_POINTS.map((p) => (
          <div key={p.title} style={{ background: 'rgba(160,120,80,0.1)', border: '1px solid rgba(160,120,80,0.25)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h4)', color: '#FFFFFF' }}>{p.title}</div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', lineHeight: 1.7, color: '#E9CDA2', margin: 0 }}>{p.text}</p>
          </div>
        ))}
      </div>
      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-lg)', color: '#BD9B73', textAlign: 'center', marginTop: 'var(--space-6)', marginBottom: 0 }}>
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
    <Section tint="#F1ECE3" tight>
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

function JobCard({ eyebrow, position, subline, aufgaben, anforderungen }) {
  return (
    <div style={{ background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{eyebrow}</span>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h3)', color: 'var(--text-heading)', margin: 0, lineHeight: 1.2 }}>{position}</h3>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--text-secondary)', margin: 0 }}>{subline}</p>
        </div>
        <Badge variant="eyebrow">Jetzt gesucht</Badge>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }} className="h-job-cols">
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-heading)', marginBottom: 'var(--space-3)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Dein Aufgabenbereich</div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {aufgaben.map((a) => (
              <li key={a} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: 999, background: 'var(--oak-100, #f5e6d0)', color: 'var(--oak-600)', flex: 'none', marginTop: 2 }}><Check size={12} /></span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', lineHeight: 1.6, color: 'var(--text-body)' }}>{a}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-heading)', marginBottom: 'var(--space-3)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Was du mitbringen solltest</div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {anforderungen.map((r) => (
              <li key={r} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: 999, background: 'var(--cream-200, #ede4d6)', color: 'var(--text-muted)', flex: 'none', marginTop: 2 }}><Check size={12} /></span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', lineHeight: 1.6, color: 'var(--text-body)' }}>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-4)' }}>
        <Button href={`mailto:${CONTACT.email}`} variant="primary" iconRight={<ArrowRight size={16} />}>Jetzt bewerben — kein Anschreiben nötig</Button>
      </div>
    </div>
  );
}

function OpenJobs() {
  return (
    <Section tint="#FFFFFF" tight>
      <SectionHeading eyebrow="Stellenangebote" title="Offene Stellen" maxWidth="600px" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', marginTop: 'var(--space-6)' }}>
        <div className="job-active">
          <JobCard
            eyebrow="Vollzeit · Mannheim-Sandhofen · ab sofort"
            position="Schreinergeselle (M/W/D)"
            subline="Für Werkstatt & Montage in der Region Mannheim. Regionale Projekte statt weiter Reisen."
            aufgaben={[
              'Ganzheitliches Arbeiten: Projekte von der Werkstatt bis zum Einbau beim Kunden',
              'Fertigung: Bedienung unseres modernen Maschinenparks inkl. CNC für präzise Ergebnisse',
              'Montage: Fachgerechter Einbau und Kundenbetreuung vor Ort (Privat & Industrie)',
              'Teamwork: Enge Zusammenarbeit mit den Kollegen auf Augenhöhe',
            ]}
            anforderungen={[
              'Abgeschlossene Ausbildung als Schreiner',
              'Idealerweise Berufserfahrung — Berufseinsteiger ausdrücklich willkommen',
              'Hohes Verantwortungsbewusstsein und selbstständige Arbeitsweise',
              'Führerschein Klasse B',
            ]}
          />
        </div>
        <div className="job-active">
          <JobCard
            eyebrow="Vollzeit · Mannheim-Sandhofen · ab sofort"
            position="Schreinermeister (M/W/D)"
            subline="Verantwortungsvolle Stelle mit eigenem Projektbereich — von der Planung bis zur Übergabe."
            aufgaben={[
              'Betreuung von Projekten von der Planung bis zur Fertigung und Montage',
              'Kundenberatung und Angebotskalkulation',
              'Eigenverantwortliche Projektsteuerung',
              'Zusammenarbeit mit dem Team und externen Dienstleistern',
            ]}
            anforderungen={[
              'Abgeschlossene Schreiner-Ausbildung mit Meisterbrief',
              'Idealerweise Berufserfahrung — ambitionierte Einsteiger willkommen',
              'Unternehmerisches Denken und hoher Qualitätsanspruch',
              'Führerschein Klasse B',
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

function Initiativbewerbung() {
  return (
    <Section tint="#F3E7D3" tight>
      <div className="h-split" style={{ alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Badge variant="eyebrow">Initiativbewerbung</Badge>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h2)', lineHeight: 1.15, color: 'var(--text-heading)', margin: 0 }}>
            Kein passendes Stellenangebot dabei?
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', lineHeight: 1.75, color: 'var(--text-secondary)', margin: 0 }}>
            Wir freuen uns immer über Initiativbewerbungen von Menschen, die Leidenschaft für das Handwerk mitbringen.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.65)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)' }}>
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
