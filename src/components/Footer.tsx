import { href, useLang } from "../i18n";
import { ArrowIcon, InstagramIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon, XSocialIcon, ClockIcon } from "./Icons";
import { EMAIL, PHONE, Logo, waLink } from "./ui";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const quick = [
    { label: t.nav.home, to: "home" },
    { label: t.nav.services, to: "services" },
    { label: t.nav.about, to: "about" },
    { label: t.nav.contact, to: "contact" },
  ];

  const socials = [
    { label: "LinkedIn", icon: LinkedInIcon, href: "https://www.linkedin.com/company/sanad-sa" },
    { label: "X", icon: XSocialIcon, href: "https://x.com/sanadsa" },
    { label: "Instagram", icon: InstagramIcon, href: "https://instagram.com/sanadsa" },
    { label: "WhatsApp", icon: WhatsAppIcon, href: waLink(t.waText) },
  ];

  return (
    <footer className="relative bg-navy-950 text-paper">
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/70 to-transparent" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-navy-100/70">{t.footer.desc}</p>
            <p className="mt-6 flex items-center gap-2 text-[13px] font-semibold text-gold-400">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M12 3v18M5 8l7-5 7 5M7 21h10" />
              </svg>
              {t.footer.vision}
            </p>
          </div>

          {/* quick links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-lg font-semibold text-gold-400">{t.footer.quickTitle}</h3>
            <ul className="mt-5 space-y-3">
              {quick.map((q) => (
                <li key={q.to}>
                  <a href={href(q.to as "home" | "services" | "about" | "contact")} className="group flex items-center gap-2 text-[14.5px] text-navy-100/75 transition-colors hover:text-gold-300">
                    <ArrowIcon className="h-3 w-3 text-gold-600 opacity-0 transition-all duration-300 group-hover:opacity-100 ltr:-translate-x-1 ltr:group-hover:translate-x-0 rtl:translate-x-1 rtl:group-hover:translate-x-0" />
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-lg font-semibold text-gold-400">{t.footer.servicesTitle}</h3>
            <ul className="mt-5 space-y-3">
              {t.services.map((s) => (
                <li key={s.id}>
                  <a href={`#/services/${s.id}`} className="text-[14.5px] text-navy-100/75 transition-colors hover:text-gold-300">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact + social */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-lg font-semibold text-gold-400">{t.footer.contactTitle}</h3>
            <ul className="mt-5 space-y-4 text-[14.5px] text-navy-100/75">
              <li className="flex items-start gap-3">
                <PinIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-500" />
                {t.contact.hqAddr}
              </li>
              <li>
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="flex items-center gap-3 transition-colors hover:text-gold-300" dir="ltr">
                  <PhoneIcon className="h-4.5 w-4.5 shrink-0 text-gold-500" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 transition-colors hover:text-gold-300">
                  <MailIcon className="h-4.5 w-4.5 shrink-0 text-gold-500" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <ClockIcon className="h-4.5 w-4.5 shrink-0 text-gold-500" />
                {t.contact.hoursValue}
              </li>
            </ul>
            <div className="mt-7 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center border border-paper/15 text-navy-100/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:bg-gold-500 hover:text-navy-950"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-paper/10 pt-7 text-[12.5px] text-navy-100/50 md:flex-row">
          <p>
            © {year} SANAD Business Solutions — {t.footer.rights}
          </p>
          <p dir="ltr" className="tnum">{t.footer.cr}</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold-500" aria-hidden="true" />
            {t.footer.madeIn}
          </p>
        </div>
      </div>
    </footer>
  );
}
