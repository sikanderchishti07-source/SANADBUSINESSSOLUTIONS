import { useEffect, useState, type FormEvent } from "react";
import { useLang } from "../i18n";
import { Reveal, prefersReducedMotion } from "../components/Reveal";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "../components/Icons";
import { EMAIL, Eyebrow, GoldButton, PHONE, PHONE_RAW, PageOpener, waLink } from "../components/ui";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const inputCls =
  "w-full border border-navy-800/20 bg-white px-4 py-3.5 text-[15px] text-navy-900 placeholder:text-navy-800/35 outline-none transition-all duration-300 focus:border-gold-600 focus:ring-2 focus:ring-gold-500/25";

export default function Contact({ param }: { param: string }) {
  const { t } = useLang();
  const preselect = t.services.some((s) => s.id === param) ? param : "";

  const [form, setForm] = useState<FormState>({ name: "", company: "", email: "", phone: "", service: preselect, message: "" });
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "message", string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [refId, setRefId] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => setForm((f) => ({ ...f, service: preselect })), [preselect]);

  const set = (k: keyof FormState) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const errs: typeof errors = {};
    if (form.name.trim().length < 2) errs.name = t.contact.errName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) errs.email = t.contact.errEmail;
    if (form.message.trim().length < 10) errs.message = t.contact.errMsg;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const buildWaText = () => {
    const serviceName = t.services.find((s) => s.id === form.service)?.name ?? t.contact.serviceAny;
    return [
      `${t.contact.name}: ${form.name}`,
      form.company ? `${t.contact.company}: ${form.company}` : "",
      `${t.contact.email}: ${form.email}`,
      form.phone ? `${t.contact.phone}: ${form.phone}` : "",
      `${t.contact.service}: ${serviceName}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate() || status === "sending") return;
    setStatus("sending");
    window.setTimeout(
      () => {
        setRefId(`SANAD-${new Date().getFullYear()}-${String(Math.floor(1000 + Math.random() * 9000))}`);
        setStatus("sent");
      },
      prefersReducedMotion() ? 150 : 900
    );
  };

  const sendViaWhatsApp = () => {
    if (!validate()) return;
    window.open(waLink(buildWaText()), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageOpener eyebrow={t.contact.openerEyebrow} title={t.contact.openerTitle} lede={t.contact.openerLede} />

      {/* ---------- form + channels ---------- */}
      <section className="relative bg-paper py-16 md:py-24">
        <div className="absolute inset-0 grid-lines-light" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* form */}
            <Reveal className="lg:col-span-7">
              <div className="border border-navy-800/12 bg-white p-7 shadow-[0_24px_70px_-30px_rgba(16,41,77,0.3)] md:p-10">
                {status === "sent" ? (
                  <div className="flex min-h-[26rem] flex-col items-center justify-center text-center">
                    <span className="flex h-20 w-20 items-center justify-center border-2 border-gold-500 bg-navy-900">
                      <svg viewBox="0 0 24 24" className="h-9 w-9 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m4.5 12.5 5 5 10-11" />
                      </svg>
                    </span>
                    <h3 className="font-display mt-7 text-2xl font-semibold text-navy-900">{t.contact.successTitle}</h3>
                    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-navy-800/70">
                      {t.contact.successText.replace("{ref}", "")}
                    </p>
                    <p className="font-display tnum mt-3 text-xl font-bold text-gold-700" dir="ltr">
                      {refId}
                    </p>
                    <button
                      onClick={() => {
                        setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" });
                        setStatus("idle");
                      }}
                      className="link-underline mt-8 text-sm font-bold uppercase tracking-wider text-gold-700 hover:text-navy-900"
                    >
                      {t.contact.successAgain}
                    </button>
                  </div>
                ) : (
                  <>
                    <Eyebrow>{t.contact.formTitle}</Eyebrow>
                    <h2 className="font-display mt-3 text-2xl font-semibold text-navy-900 md:text-3xl">{t.contact.formTitle}</h2>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-navy-800/70">{t.contact.formText}</p>

                    <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="f-name" className="mb-1.5 block text-[12.5px] font-bold uppercase tracking-wider text-navy-800/70">
                          {t.contact.name} *
                        </label>
                        <input id="f-name" value={form.name} onChange={set("name")} placeholder={t.contact.namePh} className={`${inputCls} ${errors.name ? "!border-red-500/70" : ""}`} />
                        {errors.name && <p className="mt-1.5 text-[12.5px] font-semibold text-red-600">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="f-company" className="mb-1.5 block text-[12.5px] font-bold uppercase tracking-wider text-navy-800/70">
                          {t.contact.company}
                        </label>
                        <input id="f-company" value={form.company} onChange={set("company")} placeholder={t.contact.companyPh} className={inputCls} />
                      </div>
                      <div>
                        <label htmlFor="f-email" className="mb-1.5 block text-[12.5px] font-bold uppercase tracking-wider text-navy-800/70">
                          {t.contact.email} *
                        </label>
                        <input id="f-email" type="email" dir="ltr" value={form.email} onChange={set("email")} placeholder={t.contact.emailPh} className={`${inputCls} text-start ${errors.email ? "!border-red-500/70" : ""}`} />
                        {errors.email && <p className="mt-1.5 text-[12.5px] font-semibold text-red-600">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="f-phone" className="mb-1.5 block text-[12.5px] font-bold uppercase tracking-wider text-navy-800/70">
                          {t.contact.phone}
                        </label>
                        <input id="f-phone" type="tel" dir="ltr" value={form.phone} onChange={set("phone")} placeholder={t.contact.phonePh} className={`${inputCls} text-start`} />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="f-service" className="mb-1.5 block text-[12.5px] font-bold uppercase tracking-wider text-navy-800/70">
                          {t.contact.service}
                        </label>
                        <select id="f-service" value={form.service} onChange={set("service")} className={`${inputCls} cursor-pointer`}>
                          <option value="">{t.contact.serviceAny}</option>
                          {t.services.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="f-message" className="mb-1.5 block text-[12.5px] font-bold uppercase tracking-wider text-navy-800/70">
                          {t.contact.message} *
                        </label>
                        <textarea id="f-message" rows={5} value={form.message} onChange={set("message")} placeholder={t.contact.messagePh} className={`${inputCls} resize-none ${errors.message ? "!border-red-500/70" : ""}`} />
                        {errors.message && <p className="mt-1.5 text-[12.5px] font-semibold text-red-600">{errors.message}</p>}
                      </div>

                      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                        <GoldButton type="submit" disabled={status === "sending"}>
                          {status === "sending" ? (
                            <>
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-navy-950/30 border-t-navy-950" aria-hidden="true" />
                              {t.contact.sending}
                            </>
                          ) : (
                            t.contact.submit
                          )}
                        </GoldButton>
                        <div className="flex items-center gap-3 text-[13px] text-navy-800/55">
                          <span>{t.contact.or}</span>
                          <button
                            type="button"
                            onClick={sendViaWhatsApp}
                            className="inline-flex items-center gap-2 border border-wa/50 px-4 py-2.5 font-bold text-wa transition-all duration-300 hover:bg-wa hover:text-white"
                          >
                            <WhatsAppIcon className="h-4 w-4" />
                            {t.contact.waSend}
                          </button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </Reveal>

            {/* channels */}
            <div className="lg:col-span-5">
              <Reveal delay={150}>
                <div className="border border-navy-800/12 bg-navy-950 p-7 text-paper md:p-10">
                  <h3 className="font-display text-xl font-semibold text-gold-300">{t.contact.channelsTitle}</h3>
                  <ul className="mt-7 space-y-6">
                    <li>
                      <a href={`tel:${PHONE_RAW}`} className="group flex items-start gap-4" dir="ltr">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold-500/30 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                          <PhoneIcon className="h-5 w-5" />
                        </span>
                        <span className="text-start">
                          <span className="block text-[12px] font-bold uppercase tracking-wider text-navy-100/50">{t.contact.callUs}</span>
                          <span className="mt-0.5 block text-[15.5px] font-semibold text-paper group-hover:text-gold-300">{PHONE}</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${EMAIL}`} className="group flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold-500/30 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                          <MailIcon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-[12px] font-bold uppercase tracking-wider text-navy-100/50">{t.contact.mailUs}</span>
                          <span className="mt-0.5 block text-[15.5px] font-semibold text-paper group-hover:text-gold-300" dir="ltr">{EMAIL}</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href={waLink(t.waText)} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold-500/30 text-gold-400 transition-colors duration-300 group-hover:bg-wa group-hover:text-white">
                          <WhatsAppIcon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-[12px] font-bold uppercase tracking-wider text-navy-100/50">{t.contact.whatsapp}</span>
                          <span className="mt-0.5 block text-[15.5px] font-semibold text-paper group-hover:text-gold-300" dir="ltr">{PHONE}</span>
                          <span className="mt-0.5 block text-[12.5px] text-navy-100/50">{t.contact.waAvailable}</span>
                        </span>
                      </a>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold-500/30 text-gold-400">
                        <PinIcon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-[12px] font-bold uppercase tracking-wider text-navy-100/50">{t.contact.hq}</span>
                        <span className="mt-0.5 block text-[15px] leading-relaxed text-paper/90">{t.contact.hqAddr}</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold-500/30 text-gold-400">
                        <ClockIcon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-[12px] font-bold uppercase tracking-wider text-navy-100/50">{t.contact.hours}</span>
                        <span className="mt-0.5 block text-[15px] text-paper/90">{t.contact.hoursValue}</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- map placeholder ---------- */}
      <section className="bg-mist pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="relative overflow-hidden border border-navy-800/15">
              <div className="relative aspect-[16/8] w-full bg-navy-950">
                {/* stylized city grid */}
                <svg viewBox="0 0 1200 500" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                  <defs>
                    <pattern id="streetGrid" width="70" height="70" patternUnits="userSpaceOnUse">
                      <path d="M70 0H0V70" fill="none" stroke="#163764" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="1200" height="500" fill="url(#streetGrid)" />
                  <path d="M0 330 Q 300 300 560 320 T 1200 290" stroke="#1e4680" strokeWidth="10" fill="none" strokeLinecap="round" />
                  <path d="M420 0 Q 460 200 560 320 T 700 500" stroke="#1e4680" strokeWidth="8" fill="none" strokeLinecap="round" />
                  <path d="M0 150 L 1200 120" stroke="#163764" strokeWidth="4" fill="none" />
                  <path d="M900 0 L 760 500" stroke="#163764" strokeWidth="4" fill="none" />
                  {/* route to office */}
                  <path d="M180 460 Q 340 400 470 360 T 600 300" stroke="#c9a227" strokeWidth="2.5" fill="none" className="route-dash" strokeLinecap="round" />
                </svg>

                {/* pin */}
                <div className="absolute start-1/2 top-[52%] -translate-x-1/2 -translate-y-full">
                  <div className="relative flex flex-col items-center">
                    <svg viewBox="0 0 24 24" className="h-14 w-14 text-gold-400 drop-shadow-[0_10px_20px_rgba(201,162,39,0.45)]" fill="currentColor" aria-hidden="true">
                      <path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13Zm0-10.5a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z" />
                    </svg>
                    <span className="pulse-ring absolute bottom-1 h-4 w-4 rounded-full border-2 border-gold-400" aria-hidden="true" />
                  </div>
                </div>

                {/* address card */}
                <div className="absolute bottom-5 start-5 max-w-xs border border-gold-500/30 bg-navy-900/95 p-5 backdrop-blur-sm md:bottom-8 md:start-8">
                  <p className="font-display text-lg font-semibold text-gold-300">{t.contact.mapTitle}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-navy-100/80">{t.contact.hqAddr}</p>
                  <p className="font-display tnum mt-3 text-[13px] font-semibold text-gold-400" dir="ltr">{t.contact.coords}</p>
                </div>

                <p className="absolute end-5 top-5 hidden max-w-[15rem] border border-paper/15 bg-navy-900/80 p-4 text-[12.5px] leading-relaxed text-navy-100/60 backdrop-blur-sm md:block rtl:end-auto rtl:start-auto ltr:end-5">
                  {t.contact.mapNote}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-paper py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="text-center">
            <div className="flex justify-center">
              <Eyebrow>FAQ</Eyebrow>
            </div>
            <h2 className="font-display mt-4 text-3xl font-semibold text-navy-900 md:text-4xl">{t.contact.faqTitle}</h2>
          </div>
          <div className="mt-12">
            {t.contact.faq.map((f, i) => {
              const open = openFaq === i;
              return (
                <Reveal key={f.q} delay={i * 70}>
                  <div className={`border-b border-navy-800/12 ${open ? "bg-mist" : ""}`}>
                    <button
                      onClick={() => setOpenFaq(open ? -1 : i)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-6 px-2 py-6 text-start md:px-6"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-display text-lg font-light text-gold-600">{String(i + 1).padStart(2, "0")}</span>
                        <span className={`font-display text-lg font-semibold transition-colors md:text-xl ${open ? "text-gold-700" : "text-navy-900"}`}>{f.q}</span>
                      </span>
                      <span className={`relative flex h-5 w-5 shrink-0 items-center justify-center transition-transform duration-400 ${open ? "rotate-45" : ""}`}>
                        <span className={`absolute h-[2px] w-4 ${open ? "bg-gold-600" : "bg-navy-900"}`} />
                        <span className={`absolute h-4 w-[2px] ${open ? "bg-gold-600" : "bg-navy-900"}`} />
                      </span>
                    </button>
                    <div className={`acc-panel ${open ? "open" : ""}`}>
                      <div>
                        <p className="px-2 pb-7 text-[14.5px] leading-relaxed text-navy-800/75 ltr:md:ps-[4.4rem] rtl:md:pe-[4.4rem] md:px-6">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
