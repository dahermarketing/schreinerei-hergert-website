/* Kontakt screen — Schreinerei Hergert */
const { Button, Input, Select, Textarea, SectionHeading, Badge } = (window.HergertDesignSystem_5a1fa2 || {});
const { Section, CONTACT } = (window.HShell || {});
const { Mail, Phone, MapPin, Clock, Check, ArrowRight, Navigation } = (window.HIcons || {});

function InfoRow({ icon: Icon, label, children }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 46, height: 46, borderRadius: 'var(--radius-sm)', background: 'var(--white)', border: '1px solid var(--border-subtle)', color: 'var(--oak-600)', flex: 'none' }}><Icon size={20} /></span>
      <div>
        <div className="h-eyebrow" style={{ color: 'var(--text-muted)', marginBottom: 4 }}>{label}</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-body)', lineHeight: 1.6 }}>{children}</div>
      </div>
    </div>
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {
  const [f, setF] = React.useState({ name: '', email: '', phone: '', anliegen: '', message: '' });
  const [consent, setConsent] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));

  const validate = (state, c) => {
    const er = {};
    if (!state.name.trim()) er.name = 'Bitte geben Sie Ihren Namen an.';
    if (!state.email.trim()) er.email = 'Bitte geben Sie Ihre E-Mail an.';
    else if (!EMAIL_RE.test(state.email)) er.email = 'Bitte gültige E-Mail angeben.';
    if (!state.anliegen) er.anliegen = 'Bitte wählen Sie ein Anliegen.';
    if (!state.message.trim()) er.message = 'Bitte beschreiben Sie kurz Ihr Projekt.';
    if (!c) er.consent = 'Bitte stimmen Sie der Datenschutzerklärung zu.';
    return er;
  };

  React.useEffect(() => { if (touched) setErrors(validate(f, consent)); }, [f, consent, touched]);

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    const er = validate(f, consent);
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <div style={{ background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: 'var(--space-7) var(--space-6)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: 999, background: 'var(--green-100)', color: 'var(--green-600)' }}><Check size={28} /></span>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h3)', color: 'var(--text-heading)', margin: 0 }}>Vielen Dank für Ihre Anfrage!</h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-secondary)', maxWidth: 380, margin: 0 }}>Wir melden uns in der Regel innerhalb eines Werktags bei Ihnen. <span style={{ color: 'var(--text-muted)' }}>(Demo – es wurde nichts gesendet.)</span></p>
        <Button variant="secondary" size="sm" onClick={() => { setSent(false); setF({ name: '', email: '', phone: '', anliegen: '', message: '' }); setConsent(false); setTouched(false); }} style={{ marginTop: 8 }}>Neue Anfrage</Button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit}
      style={{ background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <div className="h-cols-2-form">
        <Input label="Name" placeholder="Ihr Name" required value={f.name} onChange={set('name')} error={errors.name} />
        <Input label="Telefon" placeholder="0621 …" helper="Optional" value={f.phone} onChange={set('phone')} />
      </div>
      <Input label="E-Mail" type="email" placeholder="name@beispiel.de" required value={f.email} onChange={set('email')} error={errors.email} />
      <Select label="Anliegen" placeholder="Bitte wählen" required value={f.anliegen} onChange={set('anliegen')} error={errors.anliegen}
        options={['Möbel nach Maß', 'Innenausbau', 'Gewerbelösungen', 'Sonstiges']} />
      <Textarea label="Nachricht" rows={5} placeholder="Beschreiben Sie kurz Ihr Projekt …" required value={f.message} onChange={set('message')} error={errors.message} />

      <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: 'pointer' }}>
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)}
          style={{ width: 20, height: 20, marginTop: 2, accentColor: 'var(--oak-500)', flex: 'none', cursor: 'pointer' }} />
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', lineHeight: 1.55, color: 'var(--text-secondary)' }}>
          Ich habe die <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--oak-600)', textDecoration: 'underline', textUnderlineOffset: 2 }}>Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung der Anfrage zu. <span style={{ color: 'var(--accent-brand)' }}>*</span>
        </span>
      </label>
      {errors.consent && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: 'var(--accent-brand)', marginTop: -8 }}>{errors.consent}</span>}

      <Button type="submit" variant="primary" fullWidth iconRight={<ArrowRight size={17} />}>Anfrage senden</Button>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', margin: 0, textAlign: 'center' }}>Wir antworten in der Regel innerhalb eines Werktags.</p>
    </form>
  );
}

function MapEmbed() {
  return (
    <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-subtle)', aspectRatio: '16 / 10', background: 'var(--cream-200)' }}>
      <iframe title="Standort Schreinerei Hergert auf Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        src="https://maps.google.com/maps?q=Mannheim-Sandhofen&z=13&output=embed"
        style={{ width: '100%', height: '100%', border: 0, display: 'block', filter: 'grayscale(0.1) contrast(0.96)' }}></iframe>
      <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer"
        style={{ position: 'absolute', right: 12, bottom: 12, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--white)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-md)', padding: '9px 14px', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)' }}>
        <Navigation size={16} style={{ color: 'var(--oak-600)' }} />Route planen
      </a>
    </div>
  );
}

function Kontakt() {
  return (
    <React.Fragment>
      <Section tight style={{ paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-6)' }}>
        <div style={{ maxWidth: 740 }}>
          <SectionHeading level={1} eyebrow="Kontakt" maxWidth="740px"
            title="Wir freuen uns auf Ihre Anfrage"
            intro="Ob Möbelstück, Einbauschrank oder Gewerbeauftrag – beschreiben Sie uns kurz Ihr Vorhaben. Wir beraten Sie persönlich und unverbindlich." />
        </div>
        <div className="h-split h-split--form" style={{ marginTop: 'var(--space-6)' }}>
          <ContactForm />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <InfoRow icon={Phone} label="Telefon"><a href={CONTACT.tel}>{CONTACT.phone}</a></InfoRow>
              <InfoRow icon={Mail} label="E-Mail"><a href={`mailto:${CONTACT.email}`} style={{ wordBreak: 'break-word' }}>{CONTACT.email}</a></InfoRow>
              <InfoRow icon={MapPin} label="Adresse">{CONTACT.street}<br />{CONTACT.region}</InfoRow>
              <InfoRow icon={Clock} label="Öffnungszeiten">Mo–Fr nach Vereinbarung</InfoRow>
            </div>
            <MapEmbed />
          </div>
        </div>
      </Section>

      <Section tint="var(--cream-50)" tight>
        <div className="h-split" style={{ alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <Badge variant="eyebrow">Anfahrt</Badge>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h3)', color: 'var(--text-heading)', margin: 0 }}>So finden Sie uns</h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>
              Unsere Werkstatt liegt in Mannheim-Sandhofen und ist gut über die B44 erreichbar. Parkmöglichkeiten finden Sie direkt vor Ort. Ein Besuch ist jederzeit nach Vereinbarung möglich – rufen Sie uns gerne vorab an.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-2)', flexWrap: 'wrap' }}>
              <Button href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" variant="secondary" iconLeft={<Navigation size={16} />} style={{ whiteSpace: 'nowrap' }}>Route planen</Button>
              <Button href={CONTACT.tel} variant="ghost" iconLeft={<Phone size={16} />} style={{ whiteSpace: 'nowrap' }}>{CONTACT.phone}</Button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
            {[{ k: 'B44', v: 'Direkt erreichbar' }, { k: 'Parken', v: 'Vor Ort möglich' }, { k: 'Termin', v: 'Nach Vereinbarung' }, { k: 'Region', v: 'Mannheim & Umgebung' }].map((x) => (
              <div key={x.k} style={{ background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h4)', color: 'var(--oak-600)' }}>{x.k}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: 4 }}>{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
}

window.HScreens = window.HScreens || {};
window.HScreens.Kontakt = Kontakt;
