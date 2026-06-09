/* Über uns screen — Schreinerei Hergert */
const { Button, SectionHeading, Badge, StatBlock } = (window.HergertDesignSystem_5a1fa2 || {});
const { Section, CtaBanner } = (window.HShell || {});
const { Check, ArrowRight } = (window.HIcons || {});
const UA = 'assets';

function UeberHero() {
  return (
    <Section tight style={{ paddingTop: 'var(--space-7)' }}>
      <div className="h-split">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Badge variant="eyebrow">Über uns · seit 1928</Badge>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h1)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text-heading)', margin: 0, textWrap: 'balance' }}>
            Ein Familienbetrieb in dritter Generation
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lg)', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>
            Was 1928 als kleine Schreinerei in Mannheim-Sandhofen begann, ist heute ein eingespielter Handwerksbetrieb – inhabergeführt von Anfang an, bis heute. Tradition und moderne Technik gehen bei uns Hand in Hand.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', lineHeight: 1.7, color: 'var(--text-body)', margin: 0 }}>
            Hinter jedem Projekt steht ein Gesicht: Wir beraten Sie persönlich, planen sorgfältig und fertigen in der eigenen Werkstatt – damit am Ende genau das entsteht, was Sie sich vorgestellt haben.
          </p>
          <div style={{ marginTop: 'var(--space-2)' }}>
            <Button href="kontakt.html" variant="primary" iconRight={<ArrowRight size={17} />} style={{ whiteSpace: 'nowrap' }}>Kontakt aufnehmen</Button>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <image-slot id="ueber-team" class="h-frame h-portrait-slot" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
            shape="rounded" radius="12" src={`${UA}/photos/esszimmer.jpg`} placeholder="Werkstatt- oder Teamfoto hier ablegen"></image-slot>
          <div style={{ position: 'absolute', left: 'var(--space-3)', bottom: 'var(--space-3)', background: 'var(--white)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', padding: '12px 16px', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)' }}>
            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Familie Hergert</div>
            <div style={{ color: 'var(--text-secondary)' }}>Inhaber · 3. Generation</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const MILESTONES = [
  { year: '1928', title: 'Gründung in Mannheim', body: 'Die Schreinerei Hergert nimmt in Mannheim-Sandhofen ihre Arbeit auf – klassisches Möbelhandwerk.' },
  { year: '1960er', title: 'Zweite Generation', body: 'Der Betrieb wächst, neue Maschinen ergänzen das traditionelle Handwerk. Erste Gewerbeprojekte.' },
  { year: '1990er', title: 'Schwerpunkt Innenausbau', body: 'Einbauschränke und passgenaue Lösungen für schwierige Grundrisse werden zum Schwerpunkt.' },
  { year: 'Heute', title: 'Dritte Generation', body: 'Moderne CNC-Technik trifft auf jahrzehntelange Erfahrung – Maßarbeit für Privat- und Gewerbekunden.' },
];

function Timeline() {
  return (
    <Section tint="#FFFFFF">
      <SectionHeading eyebrow="Geschichte" title="Fast ein Jahrhundert Handwerk" intro="Vier Stationen aus der Geschichte eines Mannheimer Familienbetriebs." />
      <div className="h-cols-4" style={{ gap: 'var(--grid-gutter)', marginTop: 'var(--space-6)' }}>
        {MILESTONES.map((m) => (
          <div key={m.year} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', paddingTop: 'var(--space-4)', borderTop: '2px solid var(--oak-300)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 34, lineHeight: 1, color: 'var(--oak-600)', fontVariantNumeric: 'tabular-nums' }}>{m.year}</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h4)', lineHeight: 1.25, color: 'var(--text-heading)', margin: 0 }}>{m.title}</h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', lineHeight: 1.65, color: 'var(--text-secondary)', margin: 0 }}>{m.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const VALUES = [
  { title: 'Präzision', body: 'Saubere Verarbeitung bis ins letzte Detail – maßgenau, langlebig, ehrlich gebaut.' },
  { title: 'Regional verwurzelt', body: 'Wir arbeiten für Menschen und Betriebe in Mannheim und der Region – kurze Wege, persönliche Beratung.' },
  { title: 'Handwerkstradition', body: 'Wissen aus drei Generationen, kombiniert mit moderner Fertigung und aktuellen Materialien.' },
];

function Values() {
  return (
    <Section tint="#1C1C1C">
      <div className="h-split">
        <div className="h-frame" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', aspectRatio: '3 / 4' }}>
          <img src={`${UA}/photos/wandkommode-eiche.jpg`} alt="Detailarbeit aus Eiche" loading="lazy" width={3024} height={4032} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#BD9B73', display: 'inline-block', lineHeight: 1.4 }}>
              Werte
              <span style={{ display: 'block', width: 24, height: 2, background: '#BD9B73', marginTop: 6 }} />
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h2)', lineHeight: 1.15, letterSpacing: '-0.02em', color: '#FFFFFF', margin: 'var(--space-4) 0 0', textWrap: 'pretty' }}>
              Worauf es uns ankommt
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 'var(--radius-sm)', background: 'rgba(160,120,80,0.2)', color: '#BD9B73', flex: 'none' }}><Check size={18} /></span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h4)', color: '#FFFFFF', margin: '2px 0 4px' }}>{v.title}</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', lineHeight: 1.65, color: '#E9CDA2', margin: 0 }}>{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function UeberUns() {
  return (
    <React.Fragment>
      <UeberHero />
      <Timeline />
      <Values />
      <CtaBanner />
    </React.Fragment>
  );
}

window.HScreens = window.HScreens || {};
window.HScreens.UeberUns = UeberUns;
