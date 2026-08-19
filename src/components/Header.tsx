import { useEffect, useState } from "react";
import { href, useHashRoute, useLang, type Route } from "../i18n";
import { ArrowIcon, ClockIcon, GlobeIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";
import { EMAIL, GoldButton, Logo, PHONE_RAW, PHONE } from "./ui";

export default function Header() {
  const { t, lang, toggle } = useLang();
  const { route } = useHashRoute();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links: { route: Route; label: string }[] = [
    { route: "home", label: t.nav.home },
    { route: "services", label: t.nav.services },
    { route: "about", label: t.nav.about },
    { route: "contact", label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-navy-950/95 shadow-[0_10px_40px_-18px_rgba(0,0,0,0.8)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        {/* corporate utility bar */}
        <div
          className={`hidden overflow-hidden border-b border-paper/10 bg-navy-950 text-navy-100/70 transition-all duration-500 md:block ${
            scrolled ? "max-h-0 border-b-0" : "max-h-12"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-[12px] font-medium">
            <p className="flex items-center gap-2">
              <PinIcon className="h-3.5 w-3.5 text-gold-500" />
              {t.util.cities}
              <span className="mx-2 hidden text-gold-500/50 lg:inline">|</span>
              <span className="hidden items-center gap-2 lg:flex">
                <ClockIcon className="h-3.5 w-3.5 text-gold-500" />
                {t.util.hours}
              </span>
            </p>
            <p className="flex items-center gap-5">
              <a href={`tel:${PHONE_RAW}`} className="flex items-center gap-2 transition-colors hover:text-gold-300" dir="ltr">
                <PhoneIcon className="h-3.5 w-3.5 text-gold-500" />
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="hidden items-center gap-2 transition-colors hover:text-gold-300 lg:flex">
                <MailIcon className="h-3.5 w-3.5 text-gold-500" />
                {EMAIL}
              </a>
              <a href={href("contact")} className="hidden items-center gap-1.5 border-b border-gold-500/60 pb-0.5 font-bold text-gold-400 transition-colors hover:text-gold-300 xl:flex">
                {t.util.requestQuote}
                <ArrowIcon className="h-3 w-3" />
              </a>
            </p>
          </div>
        </div>

        {/* gold hairline */}
        <div className="h-0.5 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" aria-hidden="true" />
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a href="#/" onClick={() => setOpen(false)} aria-label="SANAD Business Solutions — Home" className="transition-opacity hover:opacity-85">
            <Logo />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.route}
                href={href(l.route)}
                className={`link-underline text-[13.5px] font-semibold uppercase tracking-wider transition-colors ${
                  route === l.route ? "text-gold-400" : "text-paper/85 hover:text-gold-300"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="group flex items-center gap-2 border border-paper/20 px-3.5 py-2 text-[13px] font-bold text-paper transition-all duration-300 hover:border-gold-400 hover:text-gold-300"
              aria-label={lang === "en" ? "التبديل إلى العربية" : "Switch to English"}
            >
              <GlobeIcon className="h-4 w-4 text-gold-400 transition-transform duration-500 group-hover:rotate-180" />
              {lang === "en" ? "العربية" : "EN"}
            </button>
            <GoldButton href="#/contact" className="hidden !px-5 !py-2.5 !text-[12px] md:inline-flex">
              {t.nav.cta}
            </GoldButton>
            {/* burger */}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[7px] border border-paper/20 lg:hidden"
            >
              <span className={`h-[2px] w-5 bg-gold-400 transition-all duration-300 ${open ? "translate-y-[4.5px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-5 bg-paper transition-all duration-300 ${open ? "-translate-y-[4.5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* scroll progress */}
        <div className="absolute inset-x-0 bottom-0 h-[2.5px] bg-paper/5" aria-hidden="true">
          <div
            className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300 transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-navy-950/98 px-8 transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 grid-lines" aria-hidden="true" />
        <nav className="relative flex flex-col gap-2" aria-label="Mobile">
          {links.map((l, i) => (
            <a
              key={l.route}
              href={href(l.route)}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
              className={`font-display flex items-center justify-between border-b border-paper/10 py-5 text-3xl font-semibold transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              } ${route === l.route ? "text-gold-400" : "text-paper hover:text-gold-300"}`}
            >
              {l.label}
              <ArrowIcon className="h-6 w-6 text-gold-500" />
            </a>
          ))}
          <p
            className={`mt-8 text-sm text-navy-100/60 transition-all duration-500 ${open ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: open ? "420ms" : "0ms" }}
          >
            {t.util.cities} · {t.util.hours}
          </p>
        </nav>
      </div>
    </>
  );
}
