import { useEffect, useRef, useState } from "react";
import { href, useLang } from "../i18n";
import { Reveal, useInView } from "../components/Reveal";
import { ArrowIcon, DiamondCheck, serviceIcons } from "../components/Icons";
import { CTABand, Eyebrow, GoldButton, PageOpener } from "../components/ui";

function ServiceSection({ index, deepOpen }: { index: number; deepOpen: boolean }) {
  const { t } = useLang();
  const s = t.services[index];
  const Icon = serviceIcons(s.id);
  const [open, setOpen] = useState(deepOpen);
  const { ref, inView } = useInView<HTMLElement>(0.25);

  useEffect(() => setOpen(deepOpen), [deepOpen]);

  return (
    <section id={`svc-${s.id}`} ref={ref} className="scroll-mt-32 border-b border-navy-800/12 py-12 first:pt-4 md:py-14" data-active={inView}>
      <div className="grid gap-8 lg:grid-cols-12">
        {/* head */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="font-display text-4xl font-light text-gold-600 md:text-5xl">{String(index + 1).padStart(2, "0")}</span>
              <span className="flex h-14 w-14 items-center justify-center border border-gold-500/40 bg-navy-900 text-gold-400">
                <Icon className="h-8 w-8" />
              </span>
            </div>
            <h2 className="font-display mt-5 text-2xl font-semibold leading-tight text-navy-900 md:text-[2rem]">{s.name}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-navy-800/75">{s.intro}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {s.meta.map((m) => (
                <li key={m} className="bg-navy-900 px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-wider text-gold-300">
                  {m}
                </li>
              ))}
            </ul>
            <a
              href={`${href("contact")}/${s.id}`}
              className="link-underline mt-6 inline-flex items-center gap-2 text-[13.5px] font-bold uppercase tracking-wider text-gold-700 hover:text-navy-900"
            >
              {t.servicesPage.discuss}
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </Reveal>
        </div>

        {/* expandable scope */}
        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className={`flex w-full items-center justify-between border px-5 py-4 text-start transition-all duration-300 ${
                open ? "border-gold-600 bg-navy-900 text-paper" : "border-navy-800/20 bg-white text-navy-900 hover:border-gold-600"
              }`}
            >
              <span className="flex items-center gap-3">
                <span className={`inline-block h-2 w-2 rotate-45 transition-colors ${open ? "bg-gold-400" : "bg-gold-600"}`} aria-hidden="true" />
                <span className="text-sm font-bold uppercase tracking-wider">
                  {t.servicesPage.fullScope} — <span className="tnum">{s.items.length}</span>
                </span>
              </span>
              <span className={`relative flex h-5 w-5 items-center justify-center transition-transform duration-400 ${open ? "rotate-45" : ""}`}>
                <span className={`absolute h-[2px] w-4 ${open ? "bg-gold-400" : "bg-navy-900"}`} />
                <span className={`absolute h-4 w-[2px] ${open ? "bg-gold-400" : "bg-navy-900"}`} />
              </span>
            </button>
            <div className={`acc-panel ${open ? "open" : ""} border border-t-0 ${open ? "border-gold-600/50 bg-white" : "border-transparent"}`}>
              <div>
                <ul className="grid gap-x-8 gap-y-3.5 px-5 py-6 sm:grid-cols-2">
                  {s.items.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14.5px] leading-snug text-navy-800/85"
                      style={{ transitionDelay: `${i * 40}ms` }}
                    >
                      <DiamondCheck className="mt-0.5 h-4 w-4 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Services({ param }: { param: string }) {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);

  const deepIndex = Math.max(0, t.services.findIndex((s) => s.id === param));
  const hasParam = t.services.some((s) => s.id === param);

  /* scroll to deep-linked service */
  useEffect(() => {
    if (!hasParam) return;
    const el = document.getElementById(`svc-${param}`);
    if (el) setTimeout(() => el.scrollIntoView({ block: "start" }), 120);
  }, [param, hasParam]);

  /* scroll-spy for the sticky index */
  useEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const sections = Array.from(root.querySelectorAll<HTMLElement>("section[data-active]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = sections.indexOf(e.target as HTMLElement);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <PageOpener eyebrow={t.servicesPage.openerEyebrow} title={t.servicesPage.openerTitle} lede={t.servicesPage.openerLede} />

      <section className="relative bg-paper py-16 md:py-20">
        <div className="absolute inset-0 grid-lines-light" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* sticky index */}
            <aside className="hidden lg:col-span-4 lg:block">
              <div className="sticky top-32">
                <Eyebrow>{t.servicesPage.indexTitle}</Eyebrow>
                <nav className="mt-6 border-s-2 border-navy-800/12" aria-label="Services index">
                  {t.services.map((s, i) => (
                    <a
                      key={s.id}
                      href={`#/services/${s.id}`}
                      className={`-ms-[2px] flex items-baseline gap-4 border-s-2 py-3 ps-5 transition-all duration-300 ${
                        active === i
                          ? "border-gold-500 bg-white text-navy-900 shadow-[0_8px_30px_-14px_rgba(16,41,77,0.25)]"
                          : "border-transparent text-navy-800/55 hover:border-navy-800/30 hover:text-navy-900"
                      }`}
                    >
                      <span className={`font-display text-sm font-semibold ${active === i ? "text-gold-600" : "text-navy-800/40"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[14.5px] font-semibold leading-snug">{s.name}</span>
                    </a>
                  ))}
                </nav>
                <div className="mt-10 border border-gold-500/30 bg-navy-900 p-6 text-paper">
                  <p className="font-display text-lg font-semibold text-gold-300">{t.servicesPage.closingTitle}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-navy-100/75">{t.servicesPage.closingText}</p>
                  <GoldButton href={href("contact")} className="mt-5 !px-5 !py-2.5 !text-[12px]">
                    {t.servicesPage.closingCta}
                  </GoldButton>
                </div>
              </div>
            </aside>

            {/* service sections */}
            <div ref={listRef} className="lg:col-span-8">
              {/* mobile index chips */}
              <div className="mb-8 flex flex-wrap gap-2 lg:hidden">
                {t.services.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#/services/${s.id}`}
                    className={`border px-3 py-1.5 text-[12px] font-bold uppercase tracking-wide transition-colors ${
                      active === i ? "border-gold-600 bg-navy-900 text-gold-300" : "border-navy-800/20 text-navy-800/70"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")} · {s.name}
                  </a>
                ))}
              </div>

              {t.services.map((s, i) => (
                <ServiceSection key={s.id} index={i} deepOpen={hasParam && deepIndex === i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
