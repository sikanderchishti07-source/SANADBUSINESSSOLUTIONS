interface IconProps {
  className?: string;
  strokeWidth?: number;
}

/* Brand mark: eight-point star (two rotated squares) with an S stroke */
export function BrandMark({ className = "w-10 h-10" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <rect x="13" y="13" width="38" height="38" rx="5" className="fill-navy-900" />
      <rect
        x="13"
        y="13"
        width="38"
        height="38"
        rx="5"
        transform="rotate(45 32 32)"
        stroke="currentColor"
        strokeWidth="2.5"
        className="stroke-gold-500"
      />
      <path
        d="M40.5 25.2c-2-3.2-6.3-4.3-9.6-2.4-3.3 1.9-3.6 6-.4 7.4 4.2 1.8 8.6 2.3 8.6 6.3 0 3.2-3.9 5-8.2 3.5-2.6-1-4.4-2.7-5-4.9"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        className="stroke-gold-400"
      />
    </svg>
  );
}

/* ---- the six service icons (32 grid, stroke = currentColor) ---- */

export function LogisticsIcon({ className = "w-8 h-8", strokeWidth = 1.6 }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 21.5V8.5a1 1 0 0 1 1-1h13v14" />
      <path d="M16.5 10h5.2l3.8 5v6.5" />
      <circle cx="9.5" cy="23" r="2.6" />
      <circle cx="21.5" cy="23" r="2.6" />
      <path d="M12.1 23h6.8M2.5 23h4.4" />
      <path d="M20 4.5h6m-2.4-2.4 2.4 2.4-2.4 2.4" strokeDasharray="2.5 2.5" />
      <path d="M6 12h7M6 15.5h4.5" />
    </svg>
  );
}

export function FleetIcon({ className = "w-8 h-8", strokeWidth = 1.6 }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="16" cy="16" r="12.5" />
      <circle cx="16" cy="16" r="3.2" />
      <path d="M16 12.8V3.5M13.2 17.6l-8.6 6M18.8 17.6l8.6 6" />
      <path d="M4.5 13.5h8M19.5 13.5h8" />
      <path d="M16 28.5V24" strokeDasharray="2 2.4" />
    </svg>
  );
}

export function CustomsIcon({ className = "w-8 h-8", strokeWidth = 1.6 }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 3.5h13l5 5V25a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 7 25V5a1.5 1.5 0 0 1 1.5-1.5Z" transform="translate(-1 1)" />
      <path d="M19.5 3.5v5.2h5.2" />
      <path d="M10.5 13h8M10.5 16.5h5" />
      <circle cx="21" cy="22" r="5" className="stroke-gold-500" strokeWidth={1.8} />
      <path d="M19 22l1.5 1.6 3-3.4" className="stroke-gold-500" strokeWidth={1.8} />
    </svg>
  );
}

export function CollectionsIcon({ className = "w-8 h-8", strokeWidth = 1.6 }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="11" cy="7.5" rx="7" ry="3" />
      <path d="M4 7.5v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" />
      <path d="M4 12.5v5c0 1.66 3.13 3 7 3 1.02 0 2-.09 2.83-.26" />
      <path d="M17.5 22.5h11M17.5 26h7" strokeDasharray="2.5 2.5" />
      <circle cx="24" cy="14.5" r="5.5" className="stroke-gold-500" strokeWidth={1.8} />
      <path d="M22 14.6l1.4 1.5 2.8-3.2" className="stroke-gold-500" strokeWidth={1.8} />
    </svg>
  );
}

export function BpoIcon({ className = "w-8 h-8", strokeWidth = 1.6 }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 17v-3a10 10 0 0 1 20 0v3" />
      <rect x="3.5" y="16" width="5.5" height="8" rx="2.2" />
      <rect x="23" y="16" width="5.5" height="8" rx="2.2" />
      <path d="M26 24v1.5a3 3 0 0 1-3 3h-5.5" />
      <circle cx="15" cy="28.5" r="2" className="stroke-gold-500" strokeWidth={1.8} />
      <path d="M12 8.5 9 5.5M20 8.5l3-3" strokeDasharray="2 2.2" />
    </svg>
  );
}

export function CorporateIcon({ className = "w-8 h-8", strokeWidth = 1.6 }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12.5 16 5l12 7.5" />
      <path d="M6.5 12.5V25M12.8 12.5V25M19.2 12.5V25M25.5 12.5V25" />
      <path d="M3.5 25.5h25M2.5 28.5h27" />
      <circle cx="16" cy="9.8" r="1.6" className="stroke-gold-500" strokeWidth={1.8} />
    </svg>
  );
}

/* ---- small UI glyphs ---- */

export function ArrowIcon({ className = "w-4 h-4", strokeWidth = 2 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} rtl:-scale-x-100`} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  );
}

export function DiamondCheck({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6.5" y="6.5" width="11" height="11" rx="1.5" transform="rotate(45 12 12)" className="stroke-gold-500" />
      <path d="M9 12.2l2.1 2.1 4-4.6" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.56 2 2.1 6.44 2.1 11.9c0 1.75.46 3.45 1.34 4.96L2 22l5.28-1.38a9.96 9.96 0 0 0 4.76 1.21h.01c5.47 0 9.93-4.44 9.93-9.9A9.83 9.83 0 0 0 19.1 4.9 9.88 9.88 0 0 0 12.04 2Zm0 18.13h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.13.82.84-3.05-.2-.31a8.22 8.22 0 0 1-1.27-4.38c0-4.54 3.72-8.24 8.3-8.24 2.22 0 4.3.86 5.87 2.43a8.2 8.2 0 0 1 2.42 5.84c0 4.54-3.72 8.23-8.29 8.23Zm4.55-6.16c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.1-.51.12-.11.25-.29.38-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.9 2.4 1.02 2.56.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

export function PhoneIcon({ className = "w-5 h-5", strokeWidth = 1.7 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5.5 3.5h4l1.7 4.6-2.3 1.8a13.6 13.6 0 0 0 5.2 5.2l1.8-2.3 4.6 1.7v4a1.7 1.7 0 0 1-1.8 1.7A17.3 17.3 0 0 1 3.8 5.3 1.7 1.7 0 0 1 5.5 3.5Z" />
    </svg>
  );
}

export function MailIcon({ className = "w-5 h-5", strokeWidth = 1.7 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function PinIcon({ className = "w-5 h-5", strokeWidth = 1.7 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21.5s7-6.1 7-11.5a7 7 0 1 0-14 0c0 5.4 7 11.5 7 11.5Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function ClockIcon({ className = "w-5 h-5", strokeWidth = 1.7 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function GlobeIcon({ className = "w-4 h-4", strokeWidth = 1.7 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.6 2.3 3.9 5.1 3.9 8.5s-1.3 6.2-3.9 8.5c-2.6-2.3-3.9-5.1-3.9-8.5S9.4 5.8 12 3.5Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-4.5 h-4.5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.8H3.6V21h2.9V8.8ZM5 7.4a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM21 14.2c0-3.4-1.8-5.6-4.7-5.6-1.6 0-2.7.8-3.3 1.9V8.8H10V21h2.9v-6.3c0-1.9.8-3 2.4-3 1.4 0 2.1 1 2.1 3V21H21v-6.8Z" />
    </svg>
  );
}

export function XSocialIcon({ className = "w-4.5 h-4.5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.8 3h3l-6.7 7.7L22 21h-6.2l-4.8-6.3L5.4 21h-3l7.2-8.2L2 3h6.3l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-4.5 h-4.5", strokeWidth = 1.7 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function serviceIcons(id: string) {
  switch (id) {
    case "logistics": return LogisticsIcon;
    case "fleet": return FleetIcon;
    case "customs": return CustomsIcon;
    case "collections": return CollectionsIcon;
    case "bpo": return BpoIcon;
    default: return CorporateIcon;
  }
}
