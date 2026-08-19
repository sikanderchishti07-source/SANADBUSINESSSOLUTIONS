import { useLang } from "../i18n";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./ui";

/* ---------- compliance roundel seal ---------- */
function Seal({ title, lines }: { title: string; lines: string }) {
  return (
    <div className="group relative flex h-32 w-32 shrink-0 items-center justify-center md:h-36 md:w-36">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-gold-500/70 transition-all duration-700 group-hover:rotate-45 group-hover:text-gold-400" fill="none" aria-hidden="true">
        <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2.5 3.5" />
      </svg>
      <div className="relative px-4 text-center">
        <p className="font-display text-[13px] font-bold uppercase tracking-wider text-navy-900 md:text-[13.5px]">{title}</p>
        <div className="mx-auto my-1.5 h-px w-8 bg-gold-600" aria-hidden="true" />
        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] leading-relaxed text-navy-800/60">{lines}</p>
      </div>
    </div>
  );
}

export function SystemsStrip({ dark = false }: { dark?: boolean }) {
  const { t } = useLang();
  return (
    <section className={`relative py-16 md:py-20 ${dark ? "bg-navy-950 text-paper" : "border-y border-navy-800/10 bg-white"}`}>
      {!dark && <div className="absolute inset-0 grid-lines-light" aria-hidden="true" />}
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Reveal className="max-w-xs shrink-0">
            <Eyebrow dark={dark}>{t.systems.eyebrow}</Eyebrow>
            <h2 className="font-display mt-3 text-2xl font-semibold leading-tight md:text-3xl">{t.systems.title}</h2>
            <p className={`mt-3 text-[13.5px] leading-relaxed ${dark ? "text-navy-100/60" : "text-navy-800/60"}`}>{t.systems.note}</p>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex flex-wrap items-center justify-start gap-6 lg:justify-end md:gap-8">
              {t.systems.items.map((s) => (
                <Seal key={s.title} title={s.title} lines={s.lines} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- client wordmark marquee ---------- */
export function ClientWall() {
  const { t } = useLang();
  return (
    <section className="overflow-hidden border-b border-navy-800/10 bg-paper py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-center text-[12.5px] font-bold uppercase tracking-[0.22em] text-navy-800/50">
            {t.clients.eyebrow}
          </p>
        </Reveal>
      </div>
      <Reveal delay={120}>
        <div className="mt-8">
          <div className="marquee-track-reverse flex w-max">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                {t.clients.names.map((n, i) => (
                  <span
                    key={`${dup}-${n}`}
                    className="group mx-8 flex items-center gap-3 whitespace-nowrap"
                  >
                    <span className="font-display text-xl font-bold tracking-wide text-navy-800/35 transition-colors duration-300 group-hover:text-navy-900 md:text-2xl">
                      {n}
                    </span>
                    <span className={`h-1.5 w-1.5 rotate-45 ${i % 2 === 0 ? "bg-gold-500/70" : "bg-navy-800/25"}`} aria-hidden="true" />
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="pointer-events-none relative -mt-10 h-10 bg-gradient-to-r from-paper via-transparent to-paper" aria-hidden="true" />
        </div>
      </Reveal>
      <Reveal delay={200}>
        <p className="mt-2 text-center text-[13px] font-medium text-navy-800/55">{t.clients.more}</p>
      </Reveal>
    </section>
  );
}
