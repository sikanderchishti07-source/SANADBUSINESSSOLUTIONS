import { useEffect, useState } from "react";
import { href, useHashRoute, useLang, type Route } from "../i18n";
import { ArrowIcon, GlobeIcon } from "./Icons";
import { GoldButton, Logo } from "./ui";

export default function Header() {
  const { t, lang, toggle } = useLang();
  const { route } = useHashRoute();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
            {t.hero.eyebrow}
          </p>
        </nav>
      </div>
    </>
  );
}
