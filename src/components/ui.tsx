import type { ReactNode } from "react";
import { useLang } from "../i18n";
import { MaskLines, Reveal } from "./Reveal";
import { ScrollFade } from "./motion";
import { ArrowIcon, BrandMark, WhatsAppIcon } from "./Icons";

/* ---------- shared constants ---------- */
export const PHONE = "+966 55 000 0000";
export const PHONE_RAW = "+966550000000";
export const EMAIL = "hello@sanad.sa";
export const WA_NUMBER = "966550000000";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ---------- small building blocks ---------- */
export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-[13px] font-semibold uppercase tracking-widest ${dark ? "text-gold-400" : "text-gold-600"}`}>
      <span className={`inline-block h-px w-8 ${dark ? "bg-gold-400" : "bg-gold-600"}`} />
      {children}
    </p>
  );
}

export function GoldButton({
  children,
  href: hrefProp,
  onClick,
  className = "",
  type,
  disabled,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const cls = `group inline-flex items-center justify-center gap-2.5 bg-gold-500 text-navy-950 font-bold px-7 py-3.5 text-sm uppercase tracking-wider transition-all duration-300 hover:bg-gold-400 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(201,162,39,0.55)] active:translate-y-0 disabled:opacity-60 disabled:pointer-events-none ${className}`;
  return hrefProp ? (
    <a href={hrefProp} onClick={onClick} className={cls}>
      {children}
    </a>
  ) : (
    <button type={type ?? "button"} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}

export function GhostButton({
  children,
  href: hrefProp,
  onClick,
  dark = true,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  dark?: boolean;
  className?: string;
}) {
  const cls = `group inline-flex items-center justify-center gap-2.5 border px-7 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 ${
    dark
      ? "border-navy-100/30 text-paper hover:border-gold-400 hover:text-gold-300"
      : "border-navy-800/25 text-navy-900 hover:border-gold-600 hover:text-gold-700"
  } ${className}`;
  return hrefProp ? (
    <a href={hrefProp} onClick={onClick} className={cls}>
      {children}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

/* ---------- navy page opener used by inner pages ---------- */
export function PageOpener({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-paper pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="absolute inset-0 grid-lines" aria-hidden="true" />
      <div
        className="absolute -top-32 start-1/4 h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(201,162,39,0.5), transparent 70%)" }}
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -bottom-24 end-[-4%] select-none font-[Amiri] text-[22rem] leading-none text-gold-500/[0.05]"
        aria-hidden="true"
      >
        سند
      </span>
      <ScrollFade className="relative mx-auto max-w-7xl px-5 md:px-8" distance={44} fadeTo={0.3}>
        <Eyebrow dark>{eyebrow}</Eyebrow>
        <h1 className="font-display mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] md:text-6xl">
          <MaskLines lines={[title]} baseDelay={80} />
        </h1>
        <Reveal delay={220}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100/85">{lede}</p>
        </Reveal>
        {children}
      </ScrollFade>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" aria-hidden="true" />
    </section>
  );
}

/* ---------- closing CTA band ---------- */
export function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-navy-900 text-paper">
      <div className="absolute inset-0 grid-lines" aria-hidden="true" />
      <span
        className="pointer-events-none absolute -top-16 start-[-3%] select-none font-[Amiri] text-[18rem] leading-none text-gold-500/[0.06]"
        aria-hidden="true"
      >
        سند
      </span>
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow dark>SANAD</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              <MaskLines lines={[t.ctaBand.title]} />
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-100/80">{t.ctaBand.text}</p>
          </div>
          <Reveal delay={150}>
            <div className="flex flex-wrap gap-4">
              <GoldButton href="#/contact">
                {t.ctaBand.primary}
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </GoldButton>
              <GhostButton href={waLink(t.waText)} onClick={undefined}>
                <WhatsAppIcon className="h-4.5 w-4.5" />
                {t.ctaBand.secondary}
              </GhostButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- floating WhatsApp button ---------- */
export function WhatsAppFloat() {
  const { t } = useLang();
  return (
    <a
      href={waLink(t.waText)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.waFloat}
      title={t.waFloat}
      className="wa-pulse group fixed bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-[0_10px_30px_-8px_rgba(31,170,89,0.7)] transition-transform duration-300 hover:scale-110 ltr:right-6 rtl:left-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

/* ---------- logo lockup ---------- */
export function Logo({ compact = false }: { compact?: boolean }) {
  const { lang, t } = useLang();
  return (
    <span className="flex items-center gap-3">
      <BrandMark className="h-10 w-10 text-gold-500" />
      <span className="leading-none">
        <span className="font-display block text-xl font-bold tracking-wide text-paper">
          {lang === "ar" ? "سند" : "SANAD"}
        </span>
        {!compact && (
          <span className={`mt-1 block text-[9.5px] font-semibold uppercase tracking-[0.22em] text-gold-400 ${lang === "ar" ? "font-[var(--font-ar)]" : ""}`}>
            {t.brand.sub}
          </span>
        )}
      </span>
    </span>
  );
}
