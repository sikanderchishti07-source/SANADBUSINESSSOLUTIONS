import { useEffect } from "react";
import { LangProvider, useHashRoute, useLang } from "./i18n";
import { prefersReducedMotion } from "./components/Reveal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { WhatsAppFloat } from "./components/ui";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

function AppInner() {
  const { route, param } = useHashRoute();
  const { lang, t } = useLang();

  /* reset scroll + page title on navigation */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [route]);

  useEffect(() => {
    const base = lang === "ar" ? "سند لحلول الأعمال" : "SANAD Business Solutions";
    const pages: Record<string, string> = {
      home: base,
      services: `${lang === "ar" ? "خدماتنا" : "Our Services"} — ${base}`,
      about: `${lang === "ar" ? "من نحن" : "About Us"} — ${base}`,
      contact: `${lang === "ar" ? "اتصل بنا" : "Contact"} — ${base}`,
    };
    document.title = pages[route];
  }, [route, lang]);

  /* silence unused warning for t while keeping provider warm */
  void t;

  return (
    <div className="min-h-screen bg-paper text-navy-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[80] focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-navy-950"
      >
        {lang === "ar" ? "تخطَّ إلى المحتوى" : "Skip to content"}
      </a>

      <div className="noise-overlay" aria-hidden="true" />
      <Header />

      <main id="main" key={`${route}-${lang}`} className="page-enter">
        {route === "home" && <Home />}
        {route === "services" && <Services param={param} />}
        {route === "about" && <About />}
        {route === "contact" && <Contact param={param} />}
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <AppInner />
    </LangProvider>
  );
}
