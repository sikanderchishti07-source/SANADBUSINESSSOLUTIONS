import { href, useLang } from "../i18n";
import { CountUp, MaskLines, Reveal } from "../components/Reveal";
import SaudiMap from "../components/SaudiMap";
import {
  ArrowIcon,
  DiamondCheck,
  WhatsAppIcon,
  serviceIcons,
} from "../components/Icons";
import { CTABand, Eyebrow, GhostButton, GoldButton, waLink } from "../components/ui";

export default function Home() {
  const { t, lang } = useLang();

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-navy-950 text-paper">
        <div className="absolute inset-0 grid-lines" aria-hidden="true" />
        <div
          className="absolute -start-40 top-1/3 h-[34rem] w-[34rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(201,162,39,0.14), transparent 65%)" }}
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -top-24 end-[-2%] hidden select-none font-[Amiri] text-[26rem] leading-none text-gold-500/[0.05] xl:block"
          aria-hidden="true"
        >
          سند
        </span>

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pt-44 lg:pb-24">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            {/* copy */}
            <div className="lg:col-span-6">
              <Reveal>
                <p className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-widest text-gold-400">
                  <span className="inline-block h-px w-8 bg-gold-400" />
                  {t.hero.eyebrow}
                </p>
              </Reveal>

              <h1 className="font-display mt-6 text-[2.6rem] font-semibold leading-[1.06] sm:text-5xl xl:text-[3.9rem]">
                <MaskLines
                  lines={[
                    t.hero.titleA,
                    <span key="b" className="text-gold-400">{t.hero.titleB}</span>,
                    t.hero.titleC,
                  ]}
                  baseDelay={150}
                />
              </h1>

              <Reveal delay={550}>
                <p className="mt-7 max-w-xl text-[16.5px] leading-relaxed text-navy-100/85">{t.hero.lede}</p>
              </Reveal>

              <Reveal delay={680}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <GoldButton href="#/services">
                    {t.hero.ctaPrimary}
                    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </GoldButton>
                  <GhostButton href={waLink(t.waText)}>
                    <WhatsAppIcon className="h-4.5 w-4.5 text-wa" />
                    {t.hero.ctaSecondary}
                  </GhostButton>
                </div>
              </Reveal>

              <Reveal delay={800}>
                <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-2.5">
                  {t.hero.chips.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-[13px] font-medium text-navy-100/60">
                      <DiamondCheck className="h-3.5 w-3.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* map + live cards */}
            <div className="relative lg:col-span-6">
              <Reveal delay={300}>
                <div className="relative">
                  <SaudiMap className="mx-auto max-w-xl lg:max-w-none" />
                  <p className="mt-2 text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-navy-100/40">
                    {t.hero.mapCaption}
                  </p>

                  {/* floating ops cards */}
                  <div className="float-slow absolute -start-2 top-[14%] hidden w-56 border border-gold-500/25 bg-navy-900/90 p-4 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:block">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gold-400">{t.hero.cardShipment}</p>
                    <p className="mt-1.5 flex items-center gap-2 text-[13px] text-paper/90">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
                      </span>
                      {t.hero.cardShipmentStatus}
                    </p>
                  </div>

                  <div className="float-slower absolute bottom-[10%] end-0 hidden w-60 border border-gold-500/25 bg-navy-900/90 p-4 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.8)] backdrop-blur-sm sm:block">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gold-400">{t.hero.cardFleet}</p>
                    <p className="mt-1.5 text-[13px] text-paper/90">
                      <span className="font-display tnum text-xl font-bold text-paper">42</span>{" "}
                      {t.hero.cardFleetStatus}
                    </p>
                    <div className="mt-2.5 h-1 w-full bg-paper/10">
                      <div className="h-full w-[84%] bg-gold-500" />
                    </div>
                  </div>

                  <div className="float-slow absolute start-[8%] bottom-[26%] hidden w-52 border border-gold-500/25 bg-navy-900/90 p-4 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.8)] backdrop-blur-sm md:block" style={{ animationDelay: "2s" }}>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gold-400">{t.hero.cardAr}</p>
                    <p className="mt-1.5 text-[13px] text-paper/90">
                      <span className="font-display tnum text-xl font-bold text-paper" dir="ltr">SAR 1.2M</span>{" "}
                      {t.hero.cardArStatus}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ================= STATS STRIP ================= */}
        <div className="relative border-t border-gold-500/15 bg-navy-900/60">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-paper/8 px-5 md:grid-cols-4 md:px-8 rtl:divide-x-reverse">
            {t.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 110} className="py-8 md:py-10 md:px-6">
                <p className="font-display text-4xl font-bold text-gold-400 md:text-5xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-[13px] font-medium leading-snug text-navy-100/70">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TICKER ================= */}
      <div className="overflow-hidden border-y-2 border-navy-950 bg-gold-500 py-3.5">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {t.ticker.map((item) => (
                <span key={`${dup}-${item}`} className="flex items-center whitespace-nowrap px-6 text-[13.5px] font-extrabold uppercase tracking-[0.18em] text-navy-950">
                  {item}
                  <span className="ms-12 inline-block h-2 w-2 rotate-45 border-2 border-navy-950" aria-hidden="true" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ================= SERVICES INDEX ================= */}
      <section className="relative bg-paper py-20 md:py-28">
        <div className="absolute inset-0 grid-lines-light" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>{t.servicesIntro.eyebrow}</Eyebrow>
              <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy-900 md:text-5xl">
                <MaskLines lines={[t.servicesIntro.title]} />
              </h2>
            </div>
            <Reveal delay={150} className="lg:col-span-5">
              <p className="text-[15.5px] leading-relaxed text-navy-800/75 lg:border-s-2 lg:border-gold-500/60 lg:ps-6">{t.servicesIntro.lede}</p>
            </Reveal>
          </div>

          {/* ledger rows */}
          <div className="mt-14 border-t border-navy-800/12">
            {t.services.map((s, i) => {
              const Icon = serviceIcons(s.id);
              return (
                <Reveal key={s.id} delay={i * 70}>
                  <a
                    href={`#/services/${s.id}`}
                    className="group grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-3 border-b border-navy-800/12 px-3 py-6 transition-all duration-500 hover:bg-navy-900 md:grid-cols-[4.5rem_3rem_1fr_auto] md:gap-x-7 md:px-6"
                  >
                    <span className="font-display text-2xl font-light text-gold-600 transition-colors duration-500 group-hover:text-gold-400 md:text-3xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon className="hidden h-8 w-8 text-navy-800 transition-colors duration-500 group-hover:text-gold-400 md:block" />
                    <span className="col-span-1">
                      <span className="font-display block text-xl font-semibold text-navy-900 transition-colors duration-500 group-hover:text-paper md:text-2xl">
                        {s.name}
                      </span>
                      <span className="mt-1 block max-w-2xl text-[14px] leading-relaxed text-navy-800/65 transition-colors duration-500 group-hover:text-navy-100/75">
                        {s.short}
                      </span>
                    </span>
                    <span className="col-span-2 flex items-center justify-between gap-4 md:col-span-1 md:justify-end">
                      <span className="hidden whitespace-nowrap border border-navy-800/15 px-3 py-1.5 text-[11.5px] font-bold uppercase tracking-wider text-navy-800/60 transition-colors duration-500 group-hover:border-gold-500/40 group-hover:text-gold-300 lg:block">
                        {s.items.length} {t.servicesIntro.scope}
                      </span>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-navy-800/20 text-navy-800 transition-all duration-500 group-hover:border-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950">
                        <ArrowIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                      </span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 flex justify-end">
              <a href={href("services")} className="link-underline inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-wider text-gold-700 hover:text-navy-900">
                {t.servicesIntro.explore}
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= WHY SANAD (sticky two-col) ================= */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-paper md:py-28">
        <div className="absolute inset-0 grid-lines" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-12">
            {/* sticky intro */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <Eyebrow dark>{t.why.eyebrow}</Eyebrow>
                <h2 className="font-display mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                  <MaskLines lines={[t.why.title]} />
                </h2>
                <Reveal delay={150}>
                  <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-navy-100/75">{t.why.lede}</p>
                </Reveal>
                <Reveal delay={250}>
                  <div className="mt-8">
                    <GhostButton href={href("about")}>
                      {t.why.cta}
                      <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </GhostButton>
                  </div>
                </Reveal>
                <Reveal delay={340}>
                  <p className="mt-10 text-[12px] font-bold uppercase tracking-widest text-navy-100/45">{t.why.platforms}</p>
                  <ul className="mt-4 flex max-w-md flex-wrap gap-2">
                    {["Qiwa", "Mudad", "Muqeem", "Absher Business", "FASAH", "ZATCA", "Balady", "Etimad"].map((p) => (
                      <li key={p} className="border border-gold-500/25 px-3 py-1.5 text-[12px] font-semibold text-gold-300/90 transition-colors duration-300 hover:border-gold-400 hover:text-gold-200">
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>

            {/* points */}
            <div className="lg:col-span-7">
              <div className="border-t border-paper/10">
                {t.why.points.map((p, i) => (
                  <Reveal key={p.title} delay={i * 80}>
                    <article className="group grid grid-cols-[3.5rem_1fr] gap-5 border-b border-paper/10 py-7 transition-colors duration-500 hover:bg-navy-900/70 md:gap-8 md:px-5">
                      <span className="font-display text-3xl font-light text-gold-500/80 transition-transform duration-500 group-hover:-translate-y-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-paper transition-colors duration-300 group-hover:text-gold-300 md:text-2xl">
                          {p.title}
                        </h3>
                        <p className="mt-2.5 max-w-xl text-[14.5px] leading-relaxed text-navy-100/70">{p.text}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="relative bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <Eyebrow>{t.process.eyebrow}</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy-900 md:text-5xl">
              <MaskLines lines={[t.process.title]} />
            </h2>
          </div>

          <div className="relative mt-14">
            <div className="absolute start-0 end-0 top-[2.1rem] hidden h-px border-t-2 border-dashed border-navy-800/20 lg:block" aria-hidden="true" />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {t.process.steps.map((st, i) => (
                <Reveal key={st.title} delay={i * 130}>
                  <div className="group relative">
                    <div className="relative z-10 flex h-[4.2rem] w-[4.2rem] items-center justify-center border-2 border-gold-600 bg-mist transition-all duration-500 group-hover:rotate-45 group-hover:bg-gold-500">
                      <span className="font-display text-2xl font-bold text-navy-900 transition-transform duration-500 group-hover:-rotate-45 group-hover:text-navy-950">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-display mt-5 text-xl font-semibold text-navy-900">{st.title}</h3>
                    <p className="mt-2.5 text-[14.5px] leading-relaxed text-navy-800/70">{st.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL + SECTORS ================= */}
      <section className="relative overflow-hidden bg-paper py-20 md:py-28">
        <span className="pointer-events-none absolute -top-10 start-[4%] select-none font-[Amiri] text-[16rem] leading-none text-navy-900/[0.04]" aria-hidden="true">
          سند
        </span>
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <figure className="relative border-s-4 border-gold-500 ps-7 md:ps-10">
                <svg viewBox="0 0 24 24" className="absolute -start-1 -top-6 h-12 w-12 text-gold-500/30" fill="currentColor" aria-hidden="true">
                  <path d="M9.5 5C6 6.5 4 9.3 4 13v6h7v-7H7.5c0-2.5 1.2-4.4 3.5-5.5L9.5 5Zm10 0c-3.5 1.5-5.5 4.3-5.5 8v6h7v-7h-3.5c0-2.5 1.2-4.4 3.5-5.5L19.5 5Z" />
                </svg>
                <blockquote className={`font-display text-2xl font-medium leading-snug text-navy-900 md:text-[2rem] ${lang === "ar" ? "leading-relaxed" : ""}`}>
                  “{t.testimonial.quote}”
                </blockquote>
                <figcaption className="mt-7">
                  <p className="font-bold text-navy-900">{t.testimonial.author}</p>
                  <p className="mt-1 text-sm text-navy-800/60">{t.testimonial.company}</p>
                </figcaption>
              </figure>
            </Reveal>

            <div className="lg:col-span-5">
              <Reveal delay={150}>
                <Eyebrow>{t.testimonial.sectorsTitle}</Eyebrow>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {t.sectors.map((s) => (
                    <li
                      key={s}
                      className="cursor-default border border-navy-800/15 bg-white px-4 py-2.5 text-[13.5px] font-semibold text-navy-800/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-600 hover:text-navy-900 hover:shadow-[0_10px_24px_-12px_rgba(16,41,77,0.35)]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
