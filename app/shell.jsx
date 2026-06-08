/* Shared site shell for the Schreinerei Hergert website.
   Header (responsive + drawer), Footer, CTA banner, mobile thumb bar,
   and the Page wrapper. Cookie consent is handled by Cookiebot. */

const { Button, StatBlock } = (window.HergertDesignSystem_5a1fa2 || {});
const { Mail, Phone, MapPin, Facebook, Instagram, ArrowRight, Menu, X } = (window.HIcons || {});

const ASSET = 'assets';
const CONTACT = {
  phone: '0621 771352',
  tel: 'tel:+496217711352',
  email: 'schreinerei-hergert@t-online.de',
  street: 'Mannheim-Sandhofen',
  region: 'Baden-Württemberg',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Schreinerei+Hergert+Mannheim-Sandhofen',
};
const NAV = [
  { label: 'Home', href: 'index.html', key: 'home' },
  { label: 'Leistungen', href: 'leistungen.html', key: 'leistungen' },
  { label: 'Über uns', href: 'ueber-uns.html', key: 'ueber' },
  { label: 'Kontakt', href: 'kontakt.html', key: 'kontakt' },
];

function Container({ children, style }) {
  return <div className="h-wrap" style={style}>{children}</div>;
}

function Section({ children, tint, tight, style, id }) {
  return (
    <section id={id} className={`h-section${tight ? ' h-section--tight' : ''}`} style={{ background: tint || 'transparent', ...style }}>
      <Container>{children}</Container>
    </section>
  );
}

/* ---------- Header ---------- */
function Header({ active }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <React.Fragment>
      <header className={`h-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="h-header__bar">
          <a className="h-logo" href="index.html" aria-label="Schreinerei Hergert — Startseite">
            <img src={`${ASSET}/logo-hergert.png`} alt="Schreinerei Hergert" />
          </a>
          <nav className="h-nav" aria-label="Hauptnavigation">
            <ul className="h-nav__list">
              {NAV.map((l) => (
                <li key={l.key}>
                  <a className={`h-nav__link${active === l.key ? ' is-active' : ''}`} href={l.href}
                    aria-current={active === l.key ? 'page' : undefined}>{l.label}</a>
                </li>
              ))}
            </ul>
            <Button href="kontakt.html" className="h-nav-cta" variant="primary" size="sm" iconRight="→" style={{ whiteSpace: 'nowrap' }}>Anfragen</Button>
            <button className="h-burger" aria-label="Menü öffnen" aria-expanded={open} onClick={() => setOpen(true)}>
              <Menu size={22} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`h-drawer-scrim${open ? ' is-open' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`h-drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="h-drawer__top">
          <img src={`${ASSET}/logo-hergert.png`} alt="Schreinerei Hergert" />
          <button className="h-burger" style={{ display: 'inline-flex' }} aria-label="Menü schließen" onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>
        <ul className="h-drawer__links">
          {NAV.map((l) => (
            <li key={l.key}>
              <a className={active === l.key ? 'is-active' : ''} href={l.href} onClick={() => setOpen(false)}>
                {l.label}<ArrowRight size={20} />
              </a>
            </li>
          ))}
        </ul>
        <div className="h-drawer__cta">
          <Button href="kontakt.html" variant="primary" fullWidth iconRight="→" onClick={() => setOpen(false)}>Jetzt anfragen</Button>
          <a className="h-drawer__call" href={CONTACT.tel}><Phone size={18} />{CONTACT.phone}</a>
        </div>
      </aside>
    </React.Fragment>
  );
}

/* ---------- CTA banner ---------- */
function CtaBanner() {
  return (
    <section style={{ background: 'var(--ink-900)', color: 'var(--text-inverse)' }}>
      <div className="h-wrap" style={{ padding: 'var(--space-9) var(--page-padding)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)' }}>
        <span className="h-eyebrow" style={{ color: 'var(--oak-300)' }}>Ihr Projekt beginnt hier</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h1)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--cream-50)', maxWidth: 640, margin: 0, textWrap: 'balance' }}>
          Bereit für Ihr Maßmöbel?
        </h2>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lg)', lineHeight: 1.7, color: 'rgb(248 245 240 / 0.72)', maxWidth: 540, margin: 0 }}>
          Wir beraten Sie gerne – unverbindlich und kostenlos, persönlich in Mannheim und der Region.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-2)', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button href="kontakt.html" variant="primary" iconRight={<ArrowRight size={17} />} style={{ background: 'var(--cream-50)', color: 'var(--ink-900)', border: '1px solid var(--cream-50)', whiteSpace: 'nowrap' }}>Jetzt unverbindlich anfragen</Button>
          <Button href={CONTACT.tel} variant="ghost" iconLeft={<Phone size={17} />} style={{ color: 'var(--cream-100)', border: '1px solid rgb(248 245 240 / 0.3)', whiteSpace: 'nowrap' }}>{CONTACT.phone}</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer({ active }) {
  return (
    <footer style={{ background: 'var(--cream-200)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="h-wrap" style={{ padding: 'var(--space-8) var(--page-padding) var(--space-5)' }}>
        <div className="h-footer-grid">
          <div>
            <img src={`${ASSET}/logo-hergert.png`} alt="Schreinerei Hergert" style={{ height: 42, width: 'auto' }} />
            <p style={{ marginTop: 'var(--space-3)', maxWidth: 340, fontSize: 'var(--text-sm)', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              Ihr Schreiner in Mannheim-Sandhofen. Maßmöbel &amp; Innenausbau seit 1928 – inhabergeführt in 3. Generation.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
              {[Facebook, Instagram].map((Ic, i) => (
                <a key={i} href="#" aria-label="Social-Media-Profil" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 42, height: 42, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)', color: 'var(--text-secondary)', background: 'var(--white)' }}>
                  <Ic size={18} />
                </a>
              ))}
            </div>
          </div>
          <nav aria-label="Footer-Navigation">
            <div className="h-eyebrow" style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-3)' }}>Navigation</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {NAV.map((l) => (
                <li key={l.key}>
                  <a href={l.href} style={{ fontSize: 'var(--text-base)', color: active === l.key ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: active === l.key ? 600 : 400 }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <div className="h-eyebrow" style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-3)' }}>Kontakt</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--text-body)' }}>
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}><MapPin size={18} style={{ color: 'var(--oak-500)', flex: 'none', marginTop: 2 }} /><span>{CONTACT.street}<br />{CONTACT.region}</span></li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Phone size={18} style={{ color: 'var(--oak-500)', flex: 'none' }} /><a href={CONTACT.tel}>{CONTACT.phone}</a></li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Mail size={18} style={{ color: 'var(--oak-500)', flex: 'none' }} /><a href={`mailto:${CONTACT.email}`} style={{ wordBreak: 'break-word' }}>{CONTACT.email}</a></li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: 'var(--space-6)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-3)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
          <span>© 2025 Schreinerei Hergert. Alle Rechte vorbehalten.</span>
          <span style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <a href="impressum.html">Impressum</a>
            <a href="datenschutz.html">Datenschutz</a>
            <a href="javascript:Cookiebot.renew()">Cookie-Einstellungen</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Mobile thumb CTA bar ---------- */
function ThumbBar() {
  return (
    <div className="h-thumbbar">
      <a className="h-thumbbar__call" href={CONTACT.tel}><Phone size={18} />Anrufen</a>
      <a className="h-thumbbar__ask" href="kontakt.html">Anfragen<ArrowRight size={18} /></a>
    </div>
  );
}

/* ---------- Page wrapper ---------- */
function Page({ active, children }) {
  return (
    <React.Fragment>
      <Header active={active} />
      <main className="h-main">{children}</main>
      <Footer active={active} />
      <ThumbBar />
    </React.Fragment>
  );
}

function mountPage(active, Screen) {
  ReactDOM.createRoot(document.getElementById('app')).render(
    <Page active={active}><Screen /></Page>
  );
}

Object.assign(window, { HShell: { Container, Section, CtaBanner, Header, Footer, ThumbBar, Page, mountPage, CONTACT, NAV, ASSET } });
