import { useLang } from "../i18n";
import { CountUp, MaskLines, Reveal } from "../components/Reveal";
import { ArrowIcon, DiamondCheck } from "../components/Icons";
import { CTABand, Eyebrow, GoldButton, PageOpener } from "../components/ui";

export default function About() {
  const { t } = useLang();

  return (
    <>
      <PageOpener eyebrow={t.about.openerEyebrow} title={t.about.openerTitle} lede={t.about.openerLede} />

      {/* ---------- meaning of the name ---------- */}
      <section className="relative overflow-hidden bg-paper py-20 md:py-28">
        <div className="absolute inset-0 grid-lines-light" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-6 border border-gold-500/25" aria-hidden="true" />
                <div className="relative flex flex-col items-center bg-navy-950 px-10 py-16 text-center">
                  <span className="font-[Amiri] select-none text-[7rem] leading-none text-gold-400 md:text-[9rem]">{t.about.meaningWord}</span>
                  <p className="mt-6 border-t border-gold-500/30 pt-5 text-[14px] leading-relaxed text-navy-100/75">
                    {t.about.meaningDef}
                  </p>
                  <span className="spin-slow absolute -top-3 -end-3 inline-block h-6 w-6 rotate-45 border-2 border-gold-500 bg-paper" aria-hidden="true" />
                </div>
              </div>
            </Reveal>
            <div className="lg:col-span-7">
              <Eyebrow>{t.about.meaningTitle}</Eyebrow>
              <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy-900 md:text-4xl">
                <MaskLines lines={[t.about.meaningTitle]} />
              </h2>
              <Reveal delay={120}>
                <p className="mt-6 text-[16px] leading-loose text-navy-800/80">{t.about.meaningText}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- mission & vision ---------- */}
      <section className="relative bg-navy-950 py-20 text-paper md:py-24">
        <div className="absolute inset-0 grid-lines" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-0 lg:grid-cols-2">
            <Reveal>
              <div className="border border-gold-500/20 p-9 md:p-12 lg:-me-px">
                <p className="font-display text-5xl font-light text-gold-500/40">01</p>
                <h2 className="font-display mt-4 text-2xl font-semibold text-gold-300 md:text-3xl">{t.about.missionTitle}</h2>
                <p className="mt-5 text-[15.5px] leading-relaxed text-navy-100/80">{t.about.missionText}</p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="border border-gold-500/20 bg-navy-900/70 p-9 md:p-12">
                <p className="font-display text-5xl font-light text-gold-500/40">02</p>
                <h2 className="font-display mt-4 text-2xl font-semibold text-gold-300 md:text-3xl">{t.about.visionTitle}</h2>
                <p className="mt-5 text-[15.5px] leading-relaxed text-navy-100/80">{t.about.visionText}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- values ---------- */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <Eyebrow>{t.about.valuesEyebrow}</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy-900 md:text-5xl">
              <MaskLines lines={[t.about.valuesTitle]} />
            </h2>
          </div>
          <div className="mt-14 border-t border-navy-800/12">
            {t.about.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="group grid grid-cols-[4rem_1fr] items-baseline gap-6 border-b border-navy-800/12 py-7 transition-all duration-500 hover:bg-mist md:grid-cols-[6rem_16rem_1fr] md:px-4">
                  <span className="font-display text-3xl font-light text-gold-600">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl font-semibold text-navy-900 transition-colors duration-300 group-hover:text-gold-700 md:text-2xl">
                    {v.title}
                  </h3>
                  <p className="col-span-2 max-w-2xl text-[14.5px] leading-relaxed text-navy-800/70 md:col-span-1">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- numbers ---------- */}
      <section className="border-y border-gold-500/20 bg-navy-900 py-14 text-paper">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Eyebrow dark>{t.about.numbersTitle}</Eyebrow>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {t.about.numbers.map((n, i) => (
              <Reveal key={n.label} delay={i * 100}>
                <p className="font-display text-5xl font-bold text-gold-400 md:text-6xl">
                  <CountUp value={n.value} suffix={n.suffix} />
                </p>
                <p className="mt-3 max-w-[16rem] text-[13.5px] leading-snug text-navy-100/70">{n.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- why choose us ---------- */}
      <section className="relative bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>{t.about.whyEyebrow}</Eyebrow>
              <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-navy-900 md:text-5xl">
                <MaskLines lines={[t.about.whyTitle]} />
              </h2>
            </div>
            <Reveal delay={140} className="lg:col-span-5">
              <p className="text-[15.5px] text-navy-800/70 lg:border-s-2 lg:border-gold-500/60 lg:ps-6">{t.about.whyLede}</p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-px border border-navy-800/12 bg-navy-800/12 sm:grid-cols-2 lg:grid-cols-3">
            {t.why.points.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 100} className="h-full">
                <article
                  className={`group h-full p-8 transition-all duration-500 md:p-9 ${
                    i === 1 ? "bg-navy-900 text-paper" : "bg-white hover:bg-navy-950 hover:text-paper"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-display text-4xl font-light ${i === 1 ? "text-gold-400" : "text-gold-600 group-hover:text-gold-400"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <DiamondCheck className="h-5 w-5 opacity-40 transition-all duration-500 group-hover:rotate-90 group-hover:opacity-100" />
                  </div>
                  <h3 className={`font-display mt-6 text-xl font-semibold ${i === 1 ? "text-gold-300" : "text-navy-900 group-hover:text-gold-300"}`}>
                    {p.title}
                  </h3>
                  <p className={`mt-3 text-[14px] leading-relaxed ${i === 1 ? "text-navy-100/75" : "text-navy-800/70 group-hover:text-navy-100/75"}`}>
                    {p.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- closing ---------- */}
      <section className="relative overflow-hidden bg-paper py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <Reveal>
            <span className="mx-auto mb-6 inline-block h-2 w-2 rotate-45 bg-gold-500" aria-hidden="true" />
            <h2 className="font-display text-3xl font-semibold leading-tight text-navy-900 md:text-4xl">{t.about.closingTitle}</h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-navy-800/75">{t.about.closingText}</p>
            <div className="mt-8 flex justify-center">
              <GoldButton href="#/contact">
                {t.about.closingCta}
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </GoldButton>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
