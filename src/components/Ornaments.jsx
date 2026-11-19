export function GoldDivider({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 12h76" stroke="currentColor" strokeWidth="1" opacity="0.9" />
      <path d="M164 12h76" stroke="currentColor" strokeWidth="1" opacity="0.9" />
      <path
        d="M120 2.2c5.4 5.4 5.4 14.2 0 19.6-5.4-5.4-5.4-14.2 0-19.6Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M104 12c3.4-4.6 9.4-4.6 13.2 0-3.8 4.6-9.8 4.6-13.2 0Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M136 12c-3.4-4.6-9.4-4.6-13.2 0 3.8 4.6 9.8 4.6 13.2 0Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <circle cx="120" cy="12" r="1.7" fill="currentColor" />
      <circle cx="86" cy="12" r="1.3" fill="currentColor" opacity="0.8" />
      <circle cx="154" cy="12" r="1.3" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

export function CornerFlourish({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 140"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2 138V48C2 22.6 22.6 2 48 2h90"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M14 138V52c0-21 17-38 38-38h88"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.55"
      />
      <path
        d="M24 108c20-1 35-14 39-33 2-9 6-16 13-21"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M62 76c-8.4-1-14.6-7.4-15.6-15.8 9.6-1 15.8 5.2 15.6 15.8Z"
        fill="currentColor"
        opacity="0.45"
      />
      <path
        d="M69 61c-4.2-8.4-1-16.6 6.2-20.6 5.2 7.2 2 15.6-6.2 20.6Z"
        fill="currentColor"
        opacity="0.36"
      />
      <path
        d="M52 95c-9.4 0-16.6-5.2-18.6-13.4 9.4-2 16.6 3.2 18.6 13.4Z"
        fill="currentColor"
        opacity="0.3"
      />
      <circle cx="44" cy="44" r="3.2" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="44" cy="44" r="1.15" fill="currentColor" />
      <circle cx="86" cy="22" r="1.5" fill="currentColor" opacity="0.55" />
      <circle cx="22" cy="86" r="1.5" fill="currentColor" opacity="0.55" />
    </svg>
  );
}

export function Crest({ className = "", light = false, mark = "জ & ব" }) {
  const [left, right] = mark.split("&").map((part) => part.trim());
  return (
    <div
      className={`crest ${light ? "crest--light" : ""} ${className}`}
      aria-hidden="true"
    >
      <span className="crest__mark">
        {left}
        <em>&amp;</em>
        {right}
      </span>
    </div>
  );
}

/** Woven gamosa-inspired decorative band. */
export function GamosaBand({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 14"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern
          id="gamosa"
          width="18"
          height="14"
          patternUnits="userSpaceOnUse"
        >
          <rect width="18" height="14" fill="currentColor" opacity="0.06" />
          <path d="M0 7h18" stroke="currentColor" strokeWidth="1" opacity="0.55" />
          <path d="M9 0v14" stroke="currentColor" strokeWidth="0.7" opacity="0.28" />
          <path d="M4 3.5 6.5 7 4 10.5 1.5 7Z" fill="currentColor" opacity="0.55" />
          <path d="M14 3.5 16.5 7 14 10.5 11.5 7Z" fill="currentColor" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="300" height="14" fill="url(#gamosa)" />
    </svg>
  );
}

export function SectionDecor({ dark = false }) {
  return (
    <div className={`decor ${dark ? "decor--dark" : ""}`} aria-hidden="true">
      <CornerFlourish className="corner corner--tl" />
      <CornerFlourish className="corner corner--br" />
    </div>
  );
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  light = false,
  children,
}) {
  return (
    <header className={`s-head ${light ? "s-head--light" : ""} reveal`}>
      {kicker && <span className="s-kicker">{kicker}</span>}
      <h2>{title}</h2>
      <GoldDivider className="s-divider" />
      {subtitle && <p>{subtitle}</p>}
      {children}
    </header>
  );
}
