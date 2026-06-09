/* Leistungen screen — Schreinerei Hergert */
const { Button, SectionHeading, Badge, PhotoTile, Card } = (window.HergertDesignSystem_5a1fa2 || {});
const { Section, CtaBanner } = (window.HShell || {});
const { ArrowRight, Check, Ruler, Boxes, Building } = (window.HIcons || {});
const LA = 'assets';

function PageHero() {
  return (
    <Section tight style={{ paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-5)' }}>
      <div style={{ maxWidth: 860 }}>
        <SectionHeading level={1} eyebrow="Leistungen" maxWidth="860px"
          title="Wo Standard aufhört, fangen wir an"
          intro="Drei Schwerpunkte, ein Anspruch: handwerkliche Präzision. Vom einzelnen Möbelstück bis zum kompletten Innenausbau – maßgefertigt für Privat- und Gewerbekunden in Mannheim und der Region." />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: 'var(--space-5)' }}>
        {[{ i: Ruler, t: 'Möbel nach Maß' }, { i: Boxes, t: 'Innenausbau' }, { i: Building, t: 'Gewerbelösungen' }].map(({ i: Ic, t }) => (
          <a key={t} href={`#${t.split(' ')[0].toLowerCase()}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 16px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-default)', background: 'var(--white)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-body)' }}>
            <Ic size={17} style={{ color: 'var(--oak-600)' }} />{t}
          </a>
        ))}
      </div>
    </Section>
  );
}

const BLOCKS = [
  {
    id: 'möbel', eyebrow: 'Möbel nach Maß', title: 'Maßgeschreinert und nicht von der Stange',
    body: 'Ob Waschtisch, Esstisch, Sideboard oder Garderobe – wir fertigen Möbel, die es so nicht zu kaufen gibt. Jedes Stück entsteht in unserer Werkstatt, abgestimmt auf Ihren Raum, Ihre Maße und Ihren Stil.',
    img: 'waschtisch-schwebend.jpg', imgW: 3024, imgH: 4032,
    bullets: ['Massivholz & Furniere in Eiche, Nussbaum u. a.', 'Grifflose Fronten und feine Detaillösungen', 'Vom Entwurf bis zur Montage aus einer Hand'],
  },
  {
    id: 'innenausbau', eyebrow: 'Innenausbau', title: 'Raumpotenzial intelligent nutzen',
    body: 'Dachschrägen, Nischen, Treppenräume: Wir verwandeln schwierige Grundrisse in durchdachten Stauraum. Passgenaue Einbauschränke und Einbauten, die jeden Zentimeter sinnvoll nutzen.',
    img: 'dachschraegenschrank-led.jpg', imgW: 1071, imgH: 1008,
    bullets: ['Einbauschränke für Dachschrägen & Nischen', 'Integrierte Beleuchtung und Technik', 'Hauswirtschafts- und Ankleidelösungen'],
  },
  {
    id: 'gewerbelösungen', eyebrow: 'Gewerbelösungen', title: 'Maßarbeit für Unternehmen',
    body: 'Von Empfangsbereichen über Teeküchen bis zu Trennwänden und Staubschutz – wir realisieren maßgeschneiderte Einrichtungen für Büros, Praxen und Gewerbe in der Region.',
    img: 'trennwaende-buero.jpg', imgW: 1216, imgH: 874,
    bullets: ['Empfangstheken & Büroeinrichtung', 'Glas- und Holztrennwände', 'Termingerechte, saubere Ausführung'],
  },
];

function DetailBlock({ block, flip }) {
  const media = (
    <div className="h-frame" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', aspectRatio: '4 / 3' }}>
      <img src={`${LA}/photos/${block.img}`} alt={block.title} loading="lazy" width={block.imgW} height={block.imgH} />
    </div>
  );
  const text = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      <Badge variant="eyebrow">{block.eyebrow}</Badge>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h2)', lineHeight: 1.2, letterSpacing: '-0.01em', color: 'var(--text-heading)', margin: 0, textWrap: 'balance' }}>{block.title}</h2>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lg)', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>{block.body}</p>
      <ul style={{ listStyle: 'none', margin: '4px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
        {block.bullets.map((b) => (
          <li key={b} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 'var(--text-base)', color: 'var(--text-body)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, borderRadius: 999, background: 'var(--oak-100)', color: 'var(--oak-700)', flex: 'none', marginTop: 1 }}><Check size={14} /></span>
            {b}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 'var(--space-2)' }}>
        <Button href="kontakt.html" variant="secondary" size="sm" iconRight={<ArrowRight size={16} />} style={{ whiteSpace: 'nowrap' }}>Dazu anfragen</Button>
      </div>
    </div>
  );
  return (
    <div id={block.id} className="h-split" style={{ scrollMarginTop: 100 }}>
      {flip ? <React.Fragment>{text}{media}</React.Fragment> : <React.Fragment>{media}{text}</React.Fragment>}
    </div>
  );
}

const GALLERY = [
  { img: 'badschrank-eiche.jpg', cap: 'Badschrank', meta: 'Eiche' },
  { img: 'esszimmer.jpg', cap: 'Esszimmer', meta: 'Massivholz' },
  { img: 'schrank-eiche-ablagefach.jpg', cap: 'Einbauschrank', meta: 'Eiche · Ablagefach' },
  { img: 'teekueche-industrie.jpg', cap: 'Teeküche', meta: 'Gewerbe' },
  { img: 'hauswirtschaftsraum.jpg', cap: 'Hauswirtschaftsraum', meta: 'Stauraum' },
  { img: 'dachschraegenschrank-2.jpg', cap: 'Dachschräge', meta: 'Einbau' },
];

function Leistungen() {
  return (
    <React.Fragment>
      <PageHero />
      <Section tint="#FFFFFF">
        <DetailBlock block={BLOCKS[0]} flip={false} />
      </Section>
      <Section tint="#F1ECE3">
        <DetailBlock block={BLOCKS[1]} flip={true} />
      </Section>
      <Section tint="#FFFFFF">
        <DetailBlock block={BLOCKS[2]} flip={false} />
      </Section>
      <Section tint="#F1ECE3">
        <SectionHeading eyebrow="Projektbeispiele" title="Handwerk im Detail" intro="Sechs Arbeitsbeispiele aus Mannheim und der Region." />
        <div className="h-portfolio" style={{ marginTop: 'var(--space-6)' }}>
          {GALLERY.map((g) => <PhotoTile key={g.img} image={`${LA}/photos/${g.img}`} imageAlt={`${g.cap} – ${g.meta}`} ratio="4 / 3" caption={g.cap} meta={g.meta} />)}
        </div>
      </Section>
      <CtaBanner />
    </React.Fragment>
  );
}

window.HScreens = window.HScreens || {};
window.HScreens.Leistungen = Leistungen;
