/* @ds-bundle: {"format":3,"namespace":"HergertDesignSystem_5a1fa2","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"PhotoTile","sourcePath":"components/core/PhotoTile.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"Testimonial","sourcePath":"components/feedback/Testimonial.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"563b6c07644f","components/core/Button.jsx":"64239bd2a65e","components/core/Card.jsx":"03230c61cb1e","components/core/IconButton.jsx":"d8bcb612a87e","components/core/PhotoTile.jsx":"aa3c1597d465","components/core/SectionHeading.jsx":"4afa764efed8","components/core/StatBlock.jsx":"ff96a2de30dd","components/feedback/Testimonial.jsx":"626b12e5ba93","components/forms/Input.jsx":"27ae9b6f2876","components/forms/Select.jsx":"2075a65184df","components/forms/Textarea.jsx":"ed30204423b9","components/navigation/Navbar.jsx":"0665050ce929","ui_kits/website/Home.jsx":"34d31925dfe9","ui_kits/website/Kontakt.jsx":"ae5d6b4b3bdf","ui_kits/website/Leistungen.jsx":"49bbd707a12e","ui_kits/website/UeberUns.jsx":"5972acecd188","ui_kits/website/icons.jsx":"98564f4e7548","ui_kits/website/shared.jsx":"c17b838367e3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HergertDesignSystem_5a1fa2 = window.HergertDesignSystem_5a1fa2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small label for eyebrows, category tags, and status pills.
 * Defaults to the brand's uppercase caption style.
 */
function Badge({
  children,
  variant = 'eyebrow',
  style,
  ...rest
}) {
  const variants = {
    // Uppercase tracked caption — used above headings
    eyebrow: {
      background: 'transparent',
      color: 'var(--text-accent)',
      padding: 0,
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase'
    },
    // Soft oak pill — category tag
    soft: {
      background: 'var(--oak-100)',
      color: 'var(--oak-700)',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    },
    // Outline pill on cream
    outline: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-default)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    },
    // Brick-red solid — sparing emphasis
    accent: {
      background: 'var(--accent-brand)',
      color: 'var(--white)',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary call-to-action and secondary actions.
 * Anthracite primary, outline secondary, quiet ghost. Subtle 4px radius.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  iconRight,
  iconLeft,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '9px 16px',
      fontSize: '13px',
      gap: '7px'
    },
    md: {
      padding: '13px 26px',
      fontSize: '15px',
      gap: '9px'
    },
    lg: {
      padding: '16px 34px',
      fontSize: '16px',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--action-primary)',
      color: 'var(--text-on-accent)',
      border: '1px solid var(--action-primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--ink-900)'
    },
    accent: {
      background: 'var(--accent-brand)',
      color: 'var(--white)',
      border: '1px solid var(--accent-brand)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent'
    }
  };
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-medium)',
    fontSize: sizes[size].fontSize,
    lineHeight: 1.1,
    letterSpacing: '0.01em',
    padding: sizes[size].padding,
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
    ...variants[variant],
    ...style
  };
  const hoverMap = {
    primary: (e, on) => {
      e.currentTarget.style.background = on ? 'var(--action-primary-hover)' : 'var(--action-primary)';
    },
    secondary: (e, on) => {
      e.currentTarget.style.background = on ? 'var(--ink-900)' : 'transparent';
      e.currentTarget.style.color = on ? 'var(--white)' : 'var(--text-primary)';
    },
    accent: (e, on) => {
      e.currentTarget.style.background = on ? 'var(--red-600)' : 'var(--accent-brand)';
    },
    ghost: (e, on) => {
      e.currentTarget.style.background = on ? 'var(--cream-200)' : 'transparent';
    }
  };
  const handlers = disabled ? {} : {
    onMouseEnter: e => hoverMap[variant](e, true),
    onMouseLeave: e => {
      hoverMap[variant](e, false);
      e.currentTarget.style.transform = 'none';
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    }
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base,
      onClick: onClick
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: base,
    disabled: disabled,
    onClick: onClick
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — image-top content card for services and projects.
 * White on cream, 1px warm border, 8px radius, lifts on hover.
 */
function Card({
  image,
  imageAlt = '',
  eyebrow,
  title,
  children,
  footer,
  href,
  ratio = '4 / 3',
  interactive = true,
  style,
  ...rest
}) {
  const Tag = href ? 'a' : 'div';
  const base = {
    display: 'flex',
    flexDirection: 'column',
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-card)',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'transform var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)',
    ...style
  };
  const handlers = interactive ? {
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'var(--hover-lift)';
      e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
      e.currentTarget.style.borderColor = 'var(--border-default)';
      const img = e.currentTarget.querySelector('img');
      if (img) img.style.transform = 'scale(1.04)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = 'var(--shadow-card)';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
      const img = e.currentTarget.querySelector('img');
      if (img) img.style.transform = 'none';
    }
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: base
  }, handlers, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      overflow: 'hidden',
      background: 'var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform var(--duration-slow) var(--ease-standard)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      padding: 'var(--space-4)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-h3)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-secondary)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a square, icon-only control. Used for slider arrows,
 * close buttons, and compact toolbar actions.
 */
function IconButton({
  children,
  label,
  variant = 'outline',
  size = 'md',
  href,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const dim = sizes[size];
  const variants = {
    outline: {
      background: 'var(--white)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)'
    },
    solid: {
      background: 'var(--action-primary)',
      color: 'var(--white)',
      border: '1px solid var(--action-primary)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: dim,
    height: dim,
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
    ...variants[variant],
    ...style
  };
  const handlers = disabled ? {} : {
    onMouseEnter: e => {
      if (variant === 'outline') {
        e.currentTarget.style.borderColor = 'var(--ink-900)';
        e.currentTarget.style.background = 'var(--cream-100)';
      }
      if (variant === 'solid') e.currentTarget.style.background = 'var(--action-primary-hover)';
      if (variant === 'ghost') e.currentTarget.style.background = 'var(--cream-200)';
    },
    onMouseLeave: e => {
      Object.assign(e.currentTarget.style, {
        borderColor: variants[variant].border.split(' ').slice(2).join(' '),
        background: variants[variant].background,
        transform: 'none'
      });
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.94)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    }
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    "aria-label": label,
    title: label,
    style: base,
    disabled: Tag === 'button' ? disabled : undefined,
    onClick: onClick
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/PhotoTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PhotoTile — edge-to-edge portfolio image with a caption that fades
 * in on hover over a dark protection gradient.
 */
function PhotoTile({
  image,
  imageAlt = '',
  caption,
  meta,
  href,
  ratio = '1 / 1',
  alwaysShowCaption = false,
  style,
  ...rest
}) {
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: {
      position: 'relative',
      display: 'block',
      aspectRatio: ratio,
      overflow: 'hidden',
      borderRadius: 'var(--radius-md)',
      textDecoration: 'none',
      color: 'var(--white)',
      ...style
    },
    onMouseEnter: e => {
      const img = e.currentTarget.querySelector('img');
      if (img) img.style.transform = 'scale(1.05)';
      const cap = e.currentTarget.querySelector('[data-cap]');
      if (cap) cap.style.opacity = '1';
      const cap2 = e.currentTarget.querySelector('[data-cap]');
      if (cap2) cap2.style.transform = 'translateY(0)';
    },
    onMouseLeave: e => {
      const img = e.currentTarget.querySelector('img');
      if (img) img.style.transform = 'none';
      const cap = e.currentTarget.querySelector('[data-cap]');
      if (cap && !alwaysShowCaption) {
        cap.style.opacity = '0';
        cap.style.transform = 'translateY(6px)';
      }
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform var(--duration-slow) var(--ease-standard)'
    }
  }), (caption || meta) && /*#__PURE__*/React.createElement("div", {
    "data-cap": true,
    style: {
      position: 'absolute',
      inset: 'auto 0 0 0',
      padding: '40px var(--space-4) var(--space-4)',
      background: 'var(--overlay-photo)',
      opacity: alwaysShowCaption ? 1 : 0,
      transform: alwaysShowCaption ? 'none' : 'translateY(6px)',
      transition: 'opacity var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)'
    }
  }, caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-h4)',
      lineHeight: 'var(--leading-snug)'
    }
  }, caption), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '4px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '0.04em',
      opacity: 0.85
    }
  }, meta)));
}
Object.assign(__ds_scope, { PhotoTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PhotoTile.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeading — eyebrow + display headline + optional intro.
 * Hard-left aligned by default (brand rule); pass align="center" for
 * hero stats and quote sections.
 */
function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  level = 2,
  maxWidth = '760px',
  style,
  ...rest
}) {
  const Tag = `h${level}`;
  const sizeByLevel = {
    1: 'var(--text-h1)',
    2: 'var(--text-h2)',
    3: 'var(--text-h3)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      maxWidth,
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: sizeByLevel[level],
      lineHeight: 'var(--leading-snug)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-heading)',
      margin: 0,
      textWrap: 'balance'
    }
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-secondary)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, intro));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatBlock — a large tabular number with a caption. Used in the
 * trust section (1928 · 98 · 3.).
 */
function StatBlock({
  value,
  label,
  align = 'center',
  accent = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-stat)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tight)',
      fontVariantNumeric: 'tabular-nums lining-nums',
      color: accent ? 'var(--accent-warm)' : 'var(--text-heading)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.04em',
      color: 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial — a large serif quote with attribution. Centered by
 * default to match the brand's testimonial slider.
 */
function Testimonial({
  quote,
  name,
  meta,
  align = 'center',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: '780px',
      margin: 0,
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-h3)',
      lineHeight: 'var(--leading-snug)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-heading)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--oak-400)'
    }
  }, "\u201E"), quote, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--oak-400)'
    }
  }, "\u201C")), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, name), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, meta)));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labelled text field with helper/error states.
 * Cream-tinted field, oak focus ring.
 */
function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  required = false,
  error,
  helper,
  disabled = false,
  style,
  ...rest
}) {
  const fieldId = id || (label ? `in-${String(label).toLowerCase().replace(/\s+/g, '-')}` : undefined);
  const invalid = Boolean(error);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-brand)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    required: required,
    disabled: disabled,
    "aria-invalid": invalid,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      background: disabled ? 'var(--cream-200)' : 'var(--white)',
      border: `1px solid ${invalid ? 'var(--accent-brand)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '12px 14px',
      outline: 'none',
      width: '100%',
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = invalid ? 'var(--accent-brand)' : 'var(--oak-500)';
      e.currentTarget.style.boxShadow = 'var(--ring-focus)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = invalid ? 'var(--accent-brand)' : 'var(--border-default)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest)), (error || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: invalid ? 'var(--accent-brand)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — labelled dropdown matching Input styling, with a custom
 * chevron and oak focus ring.
 */
function Select({
  label,
  id,
  value,
  defaultValue,
  onChange,
  options = [],
  placeholder,
  required = false,
  error,
  helper,
  disabled = false,
  style,
  ...rest
}) {
  const fieldId = id || (label ? `sel-${String(label).toLowerCase().replace(/\s+/g, '-')}` : undefined);
  const invalid = Boolean(error);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-brand)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    required: required,
    disabled: disabled,
    "aria-invalid": invalid,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      background: disabled ? 'var(--cream-200)' : 'var(--white)',
      border: `1px solid ${invalid ? 'var(--accent-brand)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '12px 40px 12px 14px',
      outline: 'none',
      width: '100%',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = invalid ? 'var(--accent-brand)' : 'var(--oak-500)';
      e.currentTarget.style.boxShadow = 'var(--ring-focus)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = invalid ? 'var(--accent-brand)' : 'var(--border-default)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(opt => {
    const o = typeof opt === 'string' ? {
      value: opt,
      label: opt
    } : opt;
    return /*#__PURE__*/React.createElement("option", {
      key: o.value,
      value: o.value
    }, o.label);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, "\u25BE")), (error || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: invalid ? 'var(--accent-brand)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — multi-line field matching Input styling.
 */
function Textarea({
  label,
  id,
  placeholder,
  value,
  defaultValue,
  onChange,
  required = false,
  error,
  helper,
  rows = 5,
  disabled = false,
  style,
  ...rest
}) {
  const fieldId = id || (label ? `ta-${String(label).toLowerCase().replace(/\s+/g, '-')}` : undefined);
  const invalid = Boolean(error);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-brand)'
    }
  }, " *")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    required: required,
    disabled: disabled,
    rows: rows,
    "aria-invalid": invalid,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-primary)',
      background: disabled ? 'var(--cream-200)' : 'var(--white)',
      border: `1px solid ${invalid ? 'var(--accent-brand)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '12px 14px',
      outline: 'none',
      width: '100%',
      resize: 'vertical',
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = invalid ? 'var(--accent-brand)' : 'var(--oak-500)';
      e.currentTarget.style.boxShadow = 'var(--ring-focus)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = invalid ? 'var(--accent-brand)' : 'var(--border-default)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest)), (error || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: invalid ? 'var(--accent-brand)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Navbar — sticky top navigation. Logo left, links right, primary CTA.
 * Translucent cream with blur; gains a hairline border once scrolled.
 */
function Navbar({
  logoSrc,
  brand = 'Schreinerei Hergert',
  links = [],
  activeHref,
  cta,
  scrolled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgb(248 245 240 / 0.86)' : 'var(--surface-page)',
      backdropFilter: scrolled ? 'saturate(140%) blur(10px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(140%) blur(10px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--border-subtle)' : 'transparent'}`,
      transition: 'background var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--page-padding)',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": brand,
    style: {
      display: 'inline-flex',
      alignItems: 'center'
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: brand,
    style: {
      height: 34,
      width: 'auto'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 20,
      color: 'var(--text-heading)'
    }
  }, brand)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, links.map(link => {
    const active = link.href === activeHref;
    return /*#__PURE__*/React.createElement("li", {
      key: link.href
    }, /*#__PURE__*/React.createElement("a", {
      href: link.href,
      "aria-current": active ? 'page' : undefined,
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-base)',
        fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        paddingBottom: 4,
        borderBottom: `2px solid ${active ? 'var(--accent-warm)' : 'rgba(160, 120, 80, 0)'}`,
        transition: 'color var(--duration-fast) var(--ease-standard)'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-primary)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-secondary)';
      }
    }, link.label));
  })), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    href: cta.href,
    iconRight: "\u2192"
  }, cta.label))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
/* Home screen — Schreinerei Hergert */
const {
  Button,
  Card,
  PhotoTile,
  StatBlock,
  SectionHeading,
  Testimonial,
  IconButton,
  Badge
} = window.HergertDesignSystem_5a1fa2 || {};
const {
  Container,
  Section,
  CtaBanner
} = window.HShared || {};
const {
  ArrowRight,
  ArrowLeft,
  Ruler,
  Boxes,
  Building
} = window.HIcons || {};
const HA = '../../assets';
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 'var(--space-8)',
      paddingBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "eyebrow"
  }, "Seit 1928 \xB7 Mannheim-Sandhofen"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-hero)',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      color: 'var(--text-heading)',
      margin: 0,
      textWrap: 'balance'
    }
  }, "Ihr Schreiner in Mannheim \u2013 Ma\xDFm\xF6bel & Innenausbau"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      maxWidth: 520,
      margin: 0
    }
  }, "Seit 1928 verbinden wir traditionelles Handwerk mit modernster Technik \u2013 hochwertige Ma\xDFarbeit f\xFCr Ihr Zuhause oder Ihr Unternehmen. Pr\xE4zise, regional und mit Blick f\xFCrs Detail."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#leistungen",
    onClick: e => {
      e.preventDefault();
      onNavigate('leistungen');
    },
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 17
    })
  }, "Leistungen entdecken"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "#kontakt",
    onClick: e => {
      e.preventDefault();
      onNavigate('kontakt');
    }
  }, "Kontakt aufnehmen"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      aspectRatio: '4 / 5'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${HA}/photos/waschtisch-eiche.jpg`,
    alt: "Ma\xDFgefertigter Doppelwaschtisch aus Eiche",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -28,
      bottom: 28,
      background: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: '18px 22px',
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "98",
    label: "Jahre",
    align: "left"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "3.",
    label: "Generation",
    align: "left",
    accent: true
  })))));
}
const SERVICES = [{
  icon: Ruler,
  eyebrow: 'Möbel nach Maß',
  title: 'Maßgeschreinert, nicht von der Stange',
  img: 'waschtisch-eiche.jpg',
  body: 'Wir fertigen, was es so nicht zu kaufen gibt – präzise, langlebig und ganz nach Ihren individuellen Wünschen.'
}, {
  icon: Boxes,
  eyebrow: 'Innenausbau',
  title: 'Raumpotenzial intelligent nutzen',
  img: 'hauswirtschaftsraum.jpg',
  body: 'Wir schaffen Stauraum und Ordnung mit passgenauen Einbauten für jede Nische und jede Dachschräge.'
}, {
  icon: Building,
  eyebrow: 'Gewerbelösungen',
  title: 'Konzepte für Ihr Unternehmen',
  img: 'trennwaende-buero.jpg',
  body: 'Empfangsbereiche, Teeküchen, Trennwände oder spezialisierter Staubschutz – maßgeschneidert realisiert.'
}];
function Services({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tint: "var(--cream-50)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Leistungen",
    title: "Unsere Leistungen im \xDCberblick",
    intro: "Vom ma\xDFgefertigten Einzelst\xFCck bis zum kompletten Innenausbau realisieren wir individuelle W\xFCnsche f\xFCr Privat- und Gewerbekunden."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--grid-gutter)',
      marginTop: 'var(--space-6)'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.eyebrow,
    image: `${HA}/photos/${s.img}`,
    eyebrow: s.eyebrow,
    title: s.title,
    href: "#leistungen",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
        size: 16
      })
    }, "Mehr erfahren")
  }, s.body))));
}
const TILES = [{
  img: 'sitzfenster.jpg',
  caption: 'Sitzfenster',
  meta: 'Eiche · mit Stauraum',
  ratio: '3 / 4'
}, {
  img: 'schlafzimmerschrank-anthrazit.jpg',
  caption: 'Einbauschrank',
  meta: 'Anthrazit · Schiebeleiter',
  ratio: '3 / 4'
}, {
  img: 'garderobe-eckbank.jpg',
  caption: 'Garderobe',
  meta: 'Eiche · Eckbank',
  ratio: '3 / 4'
}, {
  img: 'kommode-weiss.jpg',
  caption: 'Ankleide',
  meta: 'Weiß · grifflos',
  ratio: '3 / 4'
}, {
  img: 'dachschraegenschrank-led.jpg',
  caption: 'Dachschräge',
  meta: 'Weiß · LED-Beleuchtung',
  ratio: '3 / 4'
}, {
  img: 'weinregal-eiche.png',
  caption: 'Weinregal',
  meta: 'Eiche · beleuchtet',
  ratio: '3 / 4'
}, {
  img: 'wandkommode-eiche.jpg',
  caption: 'Wandkommode',
  meta: 'Eiche · schwebend',
  ratio: '3 / 4'
}, {
  img: 'schranktreppe.jpg',
  caption: 'Schranktreppe',
  meta: 'Stauraum unter der Treppe',
  ratio: '3 / 4'
}];
function Portfolio() {
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Referenzen",
    title: "Auszug aus unseren Arbeiten",
    intro: "Ausgew\xE4hlte Projekte aus Mannheim \u2013 Innenausbau, ma\xDFgefertigte M\xF6bel und mehr."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, TILES.map(t => /*#__PURE__*/React.createElement(PhotoTile, {
    key: t.img,
    image: `${HA}/photos/${t.img}`,
    caption: t.caption,
    meta: t.meta,
    ratio: t.ratio
  }))));
}
function Trust() {
  return /*#__PURE__*/React.createElement(Section, {
    tint: "var(--oak-100)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Familienbetrieb",
    title: "Fast ein Jahrhundert Schreinerhandwerk in Mannheim",
    intro: "Seit 1928 in Familienhand \u2013 inhabergef\xFChrt von Anfang an. Ein Betrieb, dem Privat- und Gewerbekunden seit Generationen vertrauen."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "1928",
    label: "gegr\xFCndet"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "98",
    label: "Jahre Erfahrung",
    accent: true
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "3.",
    label: "Generation"
  }))));
}
const QUOTES = [{
  quote: 'Unser Dachgeschoss war kaum nutzbar wegen der Schrägen. Daraus wurde ein Einbauschrank, der jeden Winkel nutzt. Gute Beratung, saubere Arbeit.',
  name: 'M. Steinbach',
  meta: 'Privatkunde, Mannheim-Rheinau'
}, {
  quote: 'Empfangstheke und Büroeinrichtung für unsere neuen Räumlichkeiten – termingerecht, maßgenau und ohne Komplikationen. Sehr zu empfehlen.',
  name: 'J. Kramer',
  meta: 'Geschäftsführerin, Mannheim'
}, {
  quote: 'Der Einbauschrank im Schlafzimmer ist exakt so geworden, wie wir es uns vorgestellt haben. Pünktliche Ausführung, saubere Arbeit. Sehr gerne wieder!',
  name: 'Familie Müller',
  meta: 'Privatkunden, Mannheim-Neckarau'
}];
function Testimonials() {
  const [i, setI] = React.useState(0);
  const q = QUOTES[i];
  const go = d => setI(p => (p + d + QUOTES.length) % QUOTES.length);
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "eyebrow"
  }, "Was Kunden sagen"), /*#__PURE__*/React.createElement(Testimonial, {
    quote: q.quote,
    name: q.name,
    meta: q.meta
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Vorheriges",
    variant: "outline",
    onClick: () => go(-1)
  }, /*#__PURE__*/React.createElement(ArrowLeft, {
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, QUOTES.map((_, n) => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: n === i ? 22 : 8,
      height: 8,
      borderRadius: 999,
      background: n === i ? 'var(--oak-500)' : 'var(--cream-400)',
      transition: 'all var(--duration-base) var(--ease-standard)'
    }
  }))), /*#__PURE__*/React.createElement(IconButton, {
    label: "N\xE4chstes",
    variant: "outline",
    onClick: () => go(1)
  }, /*#__PURE__*/React.createElement(ArrowRight, {
    size: 18
  })))));
}
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Services, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Portfolio, null), /*#__PURE__*/React.createElement(Trust, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(CtaBanner, {
    onNavigate: onNavigate
  }));
}
window.HScreens = window.HScreens || {};
window.HScreens.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Kontakt.jsx
try { (() => {
/* Kontakt screen — form + contact info */
const {
  Button,
  Input,
  Select,
  Textarea,
  SectionHeading,
  Badge
} = window.HergertDesignSystem_5a1fa2 || {};
const {
  Container,
  Section
} = window.HShared || {};
const {
  Mail,
  Phone,
  MapPin,
  Clock,
  Check,
  ArrowRight
} = window.HIcons || {};
function InfoRow({
  icon: Icon,
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--oak-600)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 4
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      lineHeight: 1.6
    }
  }, children)));
}
function ContactForm() {
  const [sent, setSent] = React.useState(false);
  if (sent) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--white)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)',
        padding: 'var(--space-7) var(--space-6)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        borderRadius: 999,
        background: 'var(--green-100)',
        color: 'var(--green-600)'
      }
    }, /*#__PURE__*/React.createElement(Check, {
      size: 28
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 'var(--text-h3)',
        color: 'var(--text-heading)',
        margin: 0
      }
    }, "Vielen Dank f\xFCr Ihre Anfrage!"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-base)',
        color: 'var(--text-secondary)',
        maxWidth: 360,
        margin: 0
      }
    }, "Wir melden uns in der Regel innerhalb eines Werktags bei Ihnen. (Demo \u2013 es wurde nichts gesendet.)"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => setSent(false),
      style: {
        marginTop: 8
      }
    }, "Neue Anfrage"));
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Ihr Name",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefon",
    placeholder: "0621 \u2026",
    helper: "Optional"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "E-Mail",
    type: "email",
    placeholder: "name@beispiel.de",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Anliegen",
    placeholder: "Bitte w\xE4hlen",
    options: ['Möbel nach Maß', 'Innenausbau', 'Gewerbelösungen', 'Sonstiges'],
    required: true
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Nachricht",
    rows: 5,
    placeholder: "Beschreiben Sie kurz Ihr Projekt \u2026",
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 17
    })
  }, "Anfrage senden"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      margin: 0,
      textAlign: 'center'
    }
  }, "Mit dem Absenden stimmen Sie unserer Datenschutzerkl\xE4rung zu."));
}
function Kontakt() {
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 1,
    eyebrow: "Kontakt",
    title: "Sprechen wir \xFCber Ihr Projekt",
    intro: "Ob M\xF6belst\xFCck, Einbauschrank oder Gewerbeauftrag \u2013 wir beraten Sie gern pers\xF6nlich und unverbindlich.",
    maxWidth: "720px"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 'var(--space-7)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(ContactForm, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(InfoRow, {
    icon: Phone,
    label: "Telefon"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+496217711352"
  }, "0621 771352")), /*#__PURE__*/React.createElement(InfoRow, {
    icon: Mail,
    label: "E-Mail"
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:schreinerei-hergert@t-online.de"
  }, "schreinerei-hergert@t-online.de")), /*#__PURE__*/React.createElement(InfoRow, {
    icon: MapPin,
    label: "Adresse"
  }, "Mannheim-Sandhofen", /*#__PURE__*/React.createElement("br", null), "Baden-W\xFCrttemberg"), /*#__PURE__*/React.createElement(InfoRow, {
    icon: Clock,
    label: "\xD6ffnungszeiten"
  }, "Mo\u2013Fr nach Vereinbarung")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      aspectRatio: '16 / 10',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/garderobe-eckbank.jpg",
    alt: "Schreinerei Hergert",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))));
}
window.HScreens = window.HScreens || {};
window.HScreens.Kontakt = Kontakt;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Kontakt.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Leistungen.jsx
try { (() => {
/* Leistungen screen — alternating detail blocks */
const {
  Button,
  SectionHeading,
  Badge,
  PhotoTile
} = window.HergertDesignSystem_5a1fa2 || {};
const {
  Container,
  Section,
  CtaBanner
} = window.HShared || {};
const {
  ArrowRight,
  Check
} = window.HIcons || {};
const LA = '../../assets';
function PageHero({
  eyebrow,
  title,
  intro
}) {
  return /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: 1,
    eyebrow: eyebrow,
    title: title,
    intro: intro,
    maxWidth: "820px"
  })));
}
const BLOCKS = [{
  eyebrow: 'Möbel nach Maß',
  title: 'Maßgeschreinert und nicht von der Stange',
  body: 'Ob Waschtisch, Esstisch, Sideboard oder Garderobe – wir fertigen Möbel, die es so nicht zu kaufen gibt. Jedes Stück entsteht in unserer Werkstatt, abgestimmt auf Ihren Raum, Ihre Maße und Ihren Stil.',
  img: 'waschtisch-schwebend.jpg',
  bullets: ['Massivholz & Furniere in Eiche, Nussbaum u. a.', 'Grifflose Fronten und feine Detaillösungen', 'Vom Entwurf bis zur Montage aus einer Hand']
}, {
  eyebrow: 'Innenausbau',
  title: 'Raumpotenzial intelligent nutzen',
  body: 'Dachschrägen, Nischen, Treppenräume: Wir verwandeln schwierige Grundrisse in durchdachten Stauraum. Passgenaue Einbauschränke und Einbauten, die jeden Zentimeter sinnvoll nutzen.',
  img: 'dachschraegenschrank-led.jpg',
  bullets: ['Einbauschränke für Dachschrägen & Nischen', 'Integrierte Beleuchtung und Technik', 'Hauswirtschafts- und Ankleidelösungen']
}, {
  eyebrow: 'Gewerbelösungen',
  title: 'Konzepte für Ihr Unternehmen',
  body: 'Von Empfangsbereichen über Teeküchen bis zu Trennwänden und Staubschutz – wir realisieren maßgeschneiderte Einrichtungen für Büros, Praxen und Gewerbe in der Region.',
  img: 'trennwaende-buero.jpg',
  bullets: ['Empfangstheken & Büroeinrichtung', 'Glas- und Holztrennwände', 'Termingerechte, saubere Ausführung']
}];
function DetailBlock({
  block,
  flip
}) {
  const media = /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      aspectRatio: '4 / 3'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${LA}/photos/${block.img}`,
    alt: block.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }));
  const text = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "eyebrow"
  }, block.eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-h2)',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: 'var(--text-heading)',
      margin: 0,
      textWrap: 'balance'
    }
  }, block.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, block.body), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '4px 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, block.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      borderRadius: 999,
      background: 'var(--oak-100)',
      color: 'var(--oak-700)',
      flex: 'none',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(Check, {
    size: 14
  })), b))));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, flip ? /*#__PURE__*/React.createElement(React.Fragment, null, text, media) : /*#__PURE__*/React.createElement(React.Fragment, null, media, text));
}
const GALLERY = ['badschrank-eiche.jpg', 'esszimmer.jpg', 'schrank-eiche-ablagefach.jpg', 'teekueche-industrie.jpg'];
function Leistungen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Leistungen",
    title: "Ma\xDFarbeit f\xFCr Zuhause und Gewerbe",
    intro: "Drei Schwerpunkte, ein Anspruch: handwerkliche Pr\xE4zision. Vom einzelnen M\xF6belst\xFCck bis zum kompletten Innenausbau."
  }), /*#__PURE__*/React.createElement(Section, {
    tint: "var(--cream-50)",
    style: {
      paddingTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-9)'
    }
  }, BLOCKS.map((b, i) => /*#__PURE__*/React.createElement(DetailBlock, {
    key: b.eyebrow,
    block: b,
    flip: i % 2 === 1
  })))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Projektbeispiele",
    title: "Handwerk im Detail"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, GALLERY.map(g => /*#__PURE__*/React.createElement(PhotoTile, {
    key: g,
    image: `${LA}/photos/${g}`,
    ratio: "1 / 1",
    caption: "Schreinerei Hergert",
    meta: "Mannheim"
  })))), /*#__PURE__*/React.createElement(CtaBanner, {
    onNavigate: onNavigate
  }));
}
window.HScreens = window.HScreens || {};
window.HScreens.Leistungen = Leistungen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Leistungen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/UeberUns.jsx
try { (() => {
/* Über uns screen — history + values */
const {
  Button,
  SectionHeading,
  Badge,
  StatBlock
} = window.HergertDesignSystem_5a1fa2 || {};
const {
  Container,
  Section,
  CtaBanner
} = window.HShared || {};
const {
  Ruler,
  Check
} = window.HIcons || {};
const UA = '../../assets';
function UeberHero() {
  return /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "eyebrow"
  }, "\xDCber uns \xB7 seit 1928"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-h1)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: 'var(--text-heading)',
      margin: 0,
      textWrap: 'balance'
    }
  }, "Ein Familienbetrieb in dritter Generation"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      lineHeight: 1.7,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "Was 1928 als kleine Schreinerei in Mannheim-Sandhofen begann, ist heute ein eingespielter Handwerksbetrieb \u2013 inhabergef\xFChrt von Anfang an, bis heute. Tradition und moderne Technik gehen bei uns Hand in Hand.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      aspectRatio: '4 / 3'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${UA}/photos/esszimmer.jpg`,
    alt: "Werkstatt der Schreinerei Hergert",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))));
}
const MILESTONES = [{
  year: '1928',
  title: 'Gründung in Mannheim',
  body: 'Die Schreinerei Hergert nimmt in Mannheim-Sandhofen ihre Arbeit auf – klassisches Möbelhandwerk.'
}, {
  year: '1960er',
  title: 'Zweite Generation',
  body: 'Der Betrieb wächst, neue Maschinen ergänzen das traditionelle Handwerk. Erste Gewerbeprojekte.'
}, {
  year: '1990er',
  title: 'Spezialisierung Innenausbau',
  body: 'Einbauschränke und passgenaue Lösungen für schwierige Grundrisse werden zum Schwerpunkt.'
}, {
  year: 'Heute',
  title: 'Dritte Generation',
  body: 'Moderne CNC-Technik trifft auf jahrzehntelange Erfahrung – Maßarbeit für Privat- und Gewerbekunden.'
}];
function Timeline() {
  return /*#__PURE__*/React.createElement(Section, {
    tint: "var(--cream-50)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Geschichte",
    title: "Fast ein Jahrhundert Handwerk",
    intro: "Vier Stationen aus der Geschichte eines Mannheimer Familienbetriebs."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--grid-gutter)',
      marginTop: 'var(--space-6)'
    }
  }, MILESTONES.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: m.year,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      paddingTop: 'var(--space-4)',
      borderTop: '2px solid var(--oak-300)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 32,
      lineHeight: 1,
      color: 'var(--oak-600)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, m.year), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-h4)',
      lineHeight: 1.25,
      color: 'var(--text-heading)',
      margin: 0
    }
  }, m.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, m.body)))));
}
const VALUES = [{
  title: 'Präzision',
  body: 'Saubere Verarbeitung bis ins letzte Detail – maßgenau, langlebig, ehrlich gebaut.'
}, {
  title: 'Regional verwurzelt',
  body: 'Wir arbeiten für Menschen und Betriebe in Mannheim und der Region – kurze Wege, persönliche Beratung.'
}, {
  title: 'Handwerkstradition',
  body: 'Wissen aus drei Generationen, kombiniert mit moderner Fertigung und aktuellen Materialien.'
}];
function Values() {
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      aspectRatio: '3 / 4'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${UA}/photos/wandkommode-eiche.jpg`,
    alt: "Detailarbeit aus Eiche",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Werte",
    title: "Worauf es uns ankommt"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, VALUES.map(v => /*#__PURE__*/React.createElement("div", {
    key: v.title,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--oak-100)',
      color: 'var(--oak-700)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Check, {
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-h4)',
      color: 'var(--text-heading)',
      margin: '2px 0 4px'
    }
  }, v.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, v.body))))))));
}
function UeberUns({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(UeberHero, null), /*#__PURE__*/React.createElement(Timeline, null), /*#__PURE__*/React.createElement(Values, null), /*#__PURE__*/React.createElement(CtaBanner, {
    onNavigate: onNavigate
  }));
}
window.HScreens = window.HScreens || {};
window.HScreens.UeberUns = UeberUns;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/UeberUns.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide-derived icons (ISC license) rendered as inline SVG so they
   tint with currentColor and stay crisp. Chosen as the brand's UI icon
   set — clean 2px round stroke. */

function Svg({
  children,
  size = 20,
  stroke = 2,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, rest), children);
}
const ArrowRight = p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 5 7 7-7 7"
}));
const ArrowLeft = p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
  d: "M19 12H5"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 19-7-7 7-7"
}));
const Mail = p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
}));
const Phone = p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
  d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
}));
const MapPin = p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "10",
  r: "3"
}));
const Clock = p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 6 12 12 16 14"
}));
const Check = p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const Ruler = p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
  d: "M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m7.5 10.5 2 2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m10.5 7.5 2 2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m13.5 4.5 2 2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m4.5 13.5 2 2"
}));
const Boxes = p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
  d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m7 16.5-4.74-2.85"
}), /*#__PURE__*/React.createElement("path", {
  d: "m7 16.5 5-3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 16.5v5.17"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "m17 16.5-5-3"
}), /*#__PURE__*/React.createElement("path", {
  d: "m17 16.5 4.74-2.85"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 16.5v5.17"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 8 7.26 5.15"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 8 4.74-2.85"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 13.5V8"
}));
const Building = p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("rect", {
  width: "16",
  height: "20",
  x: "4",
  y: "2",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 22v-4h6v4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 6h.01"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 6h.01"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 6h.01"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 10h.01"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 14h.01"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 10h.01"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 14h.01"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 10h.01"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 14h.01"
}));
const Facebook = p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("path", {
  d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
}));
const Instagram = p => /*#__PURE__*/React.createElement(Svg, p, /*#__PURE__*/React.createElement("rect", {
  width: "20",
  height: "20",
  x: "2",
  y: "2",
  rx: "5",
  ry: "5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
}), /*#__PURE__*/React.createElement("line", {
  x1: "17.5",
  x2: "17.51",
  y1: "6.5",
  y2: "6.5"
}));
Object.assign(window, {
  HIcons: {
    ArrowRight,
    ArrowLeft,
    Mail,
    Phone,
    MapPin,
    Clock,
    Check,
    Ruler,
    Boxes,
    Building,
    Facebook,
    Instagram
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shared.jsx
try { (() => {
/* Shared layout pieces for the Schreinerei Hergert website kit. */
const {
  Button,
  StatBlock
} = window.HergertDesignSystem_5a1fa2 || {};
const {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  ArrowRight
} = window.HIcons || {};
const ASSET = '../../assets';
function Container({
  children,
  wide = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: wide ? 'var(--container-wide)' : 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--page-padding)',
      ...style
    }
  }, children);
}
function Section({
  children,
  tint,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-gap-desktop) 0',
      background: tint || 'transparent',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Container, null, children));
}
function CtaBanner({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--text-inverse)'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: 'var(--space-9) var(--page-padding)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--oak-300)'
    }
  }, "Ihr Projekt beginnt hier"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-h1)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: 'var(--cream-50)',
      maxWidth: 640,
      margin: 0,
      textWrap: 'balance'
    }
  }, "Lassen Sie uns \xFCber Ihr Projekt sprechen."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      lineHeight: 1.7,
      color: 'rgb(248 245 240 / 0.7)',
      maxWidth: 540,
      margin: 0
    }
  }, "Unverbindlich anfragen \u2013 wir beraten Sie pers\xF6nlich in Mannheim und der Region."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-2)',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#kontakt",
    onClick: e => {
      e.preventDefault();
      onNavigate('kontakt');
    },
    iconRight: /*#__PURE__*/React.createElement(ArrowRight, {
      size: 17
    }),
    style: {
      background: 'var(--cream-50)',
      color: 'var(--ink-900)',
      border: '1px solid var(--cream-50)'
    }
  }, "Kontakt aufnehmen"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#leistungen",
    onClick: e => {
      e.preventDefault();
      onNavigate('leistungen');
    },
    style: {
      color: 'var(--cream-100)',
      border: '1px solid rgb(248 245 240 / 0.3)'
    }
  }, "Leistungen ansehen"))));
}
function Footer({
  onNavigate
}) {
  const links = [{
    label: 'Home',
    page: 'home'
  }, {
    label: 'Leistungen',
    page: 'leistungen'
  }, {
    label: 'Über uns',
    page: 'ueber'
  }, {
    label: 'Kontakt',
    page: 'kontakt'
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--cream-200)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: 'var(--space-8) var(--page-padding) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1.2fr',
      gap: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/logo-hergert.png`,
    alt: "Schreinerei Hergert",
    style: {
      height: 40,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-3)',
      maxWidth: 320,
      fontSize: 'var(--text-sm)',
      lineHeight: 1.7,
      color: 'var(--text-secondary)'
    }
  }, "Ihr Schreiner in Mannheim-Sandhofen. Ma\xDFm\xF6bel & Innenausbau seit 1928 \u2013 inhabergef\xFChrt in 3. Generation."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-4)'
    }
  }, [Facebook, Instagram].map((Ic, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    "aria-label": "Social",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-secondary)',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement(Ic, {
    size: 18
  }))))), /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-3)'
    }
  }, "Navigation"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.page
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate(l.page);
    },
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-secondary)'
    }
  }, l.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-3)'
    }
  }, "Kontakt"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(MapPin, {
    size: 18,
    style: {
      color: 'var(--oak-500)',
      flex: 'none',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", null, "Mannheim-Sandhofen", /*#__PURE__*/React.createElement("br", null), "Baden-W\xFCrttemberg")), /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Phone, {
    size: 18,
    style: {
      color: 'var(--oak-500)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "tel:+496217711352"
  }, "0621 771352")), /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Mail, {
    size: 18,
    style: {
      color: 'var(--oak-500)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "mailto:schreinerei-hergert@t-online.de"
  }, "schreinerei-hergert@t-online.de"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Schreinerei Hergert. Alle Rechte vorbehalten."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Datenschutz"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Impressum")))));
}
Object.assign(window, {
  HShared: {
    Container,
    Section,
    CtaBanner,
    Footer,
    ASSET
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.PhotoTile = __ds_scope.PhotoTile;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
