/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Key, 
  ShieldCheck, 
  Lock, 
  ChevronDown, 
  ChevronLeft,
  Instagram,
  Globe
} from "lucide-react";
import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

type Language = 'RU' | 'EN';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within a LanguageProvider");
  return context;
};

const TRANSLATIONS = {
  RU: {
    nav: { about: "О нас", cases: "Кейсы", faq: "FAQ", book: "Забронировать" },
    hero: {
      badge: "EST. 2017 • PRIVATE CONCIERGE",
      top: "Exclusive Access",
      h1: "Твой билет в",
      h1Span: "мир люкса.",
      p: "Бронируем лучшие отели мира со скидкой до 50%. Официально. Безопасно. Только для своих.",
      btnCases: "Посмотреть кейсы",
      telegram: "Telegram"
    },
    features: [
      { title: "Прямой доступ", desc: "Минуем розничные наценки агрегаторов через инвентарь туроператоров." },
      { title: "API и VPN", desc: "Используем региональные ценовые лазейки, доступные только профи." },
      { title: "Закрытые тарифы", desc: "Эксклюзивные предложения, скрытые от широкой публики." }
    ],
    economy: {
      badge: "Smart Luxury",
      h2: "Отдыхай как <span class='italic font-light text-primary'>миллионер</span>, <br /> плати как <span class='italic font-light text-primary'>турист</span>.",
      p: "Мы не просто ищем скидки. Мы открываем двери в мир, который раньше был доступен только через личные связи.",
      btn: "Начать экономить"
    },
    audience: {
      title: "Для кого наш сервис",
      items: [
        { label: "The Connoisseur", title: "Ценитель комфорта", desc: "Для тех, кто привык к 5 звездам и безупречному сервису, но не видит смысла платить маркетинговый налог агрегаторов." },
        { label: "The Strategist", title: "Стратег", desc: "Для тех, кто планирует сложные маршруты и ценит возможность продлить отпуск в два раза при том же бюджете." },
        { label: "The Explorer", title: "Активный путешественник", desc: "Для тех, кто всегда в движении и ищет способ получить больше впечатлений от каждой поездки по всему миру." }
      ]
    },
    cases: {
      h2: "Наши <span class='text-primary italic font-light'>Кейсы.</span>",
      p: "Реальные бронирования наших клиентов за последний месяц. Сравните цены и убедитесь сами.",
      items: [
         { name: "ME Barcelona", loc: "Испания, Барселона • 7 ночей", desc: "Люкс с видом на город. Бронирование через закрытый канал туроператора.", disc: "-45%" },
         { name: "The Capra Saas-Fee", loc: "Швейцария, Альпы • 5 ночей", desc: "Шале премиум-класса. Использование региональных API цен.", disc: "-40%" }
      ]
    },
    trust: [
      { val: "2017", label: "Работаем с года" },
      { val: "526+", label: "Объектов в базе" },
      { val: "1,375", label: "Доволенных клиентов" },
      { val: "€342k", label: "Сэкономлено" }
    ],
    cta: {
      h2: "Готовы к <br /> <span class='text-primary italic font-light'>новым открытиям?</span>",
      btn: "Запросить подборку",
      btnLink: "Посмотреть кейсы"
    },
    faq: {
      title: "Часто задаваемые вопросы",
      items: [
        { q: "Почему цены такие низкие?", a: "Мы используем корпоративные тарифы, доступ к которым имеют только крупные агенты, а также бронируем через партнерские каналы в других регионах, где цены на те же отели значительно ниже." },
        { q: "Это легально?", a: "Абсолютно. Вы получаете официальный ваучер отеля. Ваше бронирование будет отображаться в системе отеля так же, как если бы вы забронировали его сами." },
        { q: "Что если я передумаю?", a: "Условия отмены зависят от выбранного тарифа. Мы всегда предлагаем как невозвратные варианты с максимальной скидкой, так и гибкие тарифы с возможностью отмены." }
      ]
    },
    footer: {
      instagram: "Instagram",
      copyright: "© 2024 Easy Book. Private Concierge.",
      owner: "ИП «ИзиТуБук» | ОГРНИП: 325770006482193 | ИНН: 770512483691",
      address: "Россия, г. Москва, ул. Летниковская, д. 10, стр. 4, офис 219, 115114",
      ads: "Ads Verification:"
    },
    common: {
        back: "Вернуться на главную",
        request: "Официальный запрос:"
    },
    cookies: {
      text: "Мы используем файлы cookie для улучшения вашего опыта. Продолжая использование сайта, вы соглашаетесь с нашей ",
      link: "Политикой cookie",
      btn: "Принять"
    }
  },
  EN: {
    nav: { about: "About Us", cases: "Cases", faq: "FAQ", book: "Book Now" },
    hero: {
      badge: "EST. 2017 • PRIVATE CONCIERGE",
      top: "Exclusive Access",
      h1: "Your ticket to the",
      h1Span: "world of luxury.",
      p: "We book the world's best hotels with discounts up to 50%. Official. Secure. Members only.",
      btnCases: "View Cases",
      telegram: "Telegram"
    },
    features: [
      { title: "Direct Access", desc: "We bypass retail markups by aggregators through tour operator inventory." },
      { title: "API & VPN", desc: "We use regional price loopholes available only to professionals." },
      { title: "Private Rates", desc: "Exclusive offers hidden from the general public." }
    ],
    economy: {
      badge: "Smart Luxury",
      h2: "Rest like a <span class='italic font-light text-primary'>millionaire</span>, <br /> pay like a <span class='italic font-light text-primary'>tourist</span>.",
      p: "We don't just find discounts. We open doors to a world that was only accessible through personal connections.",
      btn: "Start Saving"
    },
    audience: {
      title: "Who is our service for",
      items: [
        { label: "The Connoisseur", title: "Comfort Seeker", desc: "For those who are used to 5 stars and impeccable service but see no point in paying the marketing tax of aggregators." },
        { label: "The Strategist", title: "Strategist", desc: "For those planning complex routes and valuing the opportunity to double their vacation length on the same budget." },
        { label: "The Explorer", title: "Active Traveler", desc: "For those always on the move, seeking more experiences from every trip worldwide." }
      ]
    },
    cases: {
      h2: "Our <span class='text-primary italic font-light'>Cases.</span>",
      p: "Real bookings for our clients over the past month. Compare prices and see for yourself.",
      items: [
         { name: "ME Barcelona", loc: "Spain, Barcelona • 7 nights", desc: "Suite with city view. Booking via a closed tour operator channel.", disc: "-45%" },
         { name: "The Capra Saas-Fee", loc: "Switzerland, Alps • 5 nights", desc: "Premium chalet. Using regional API pricing.", disc: "-40%" }
      ]
    },
    trust: [
      { val: "2017", label: "Operating since" },
      { val: "526+", label: "Hotels in database" },
      { val: "1,375", label: "Happy clients" },
      { val: "€342k", label: "Saved" }
    ],
    cta: {
      h2: "Ready for <br /> <span class='text-primary italic font-light'>new discoveries?</span>",
      btn: "Request Selection",
      btnLink: "View Cases"
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "Why are prices so low?", a: "We use corporate rates accessible only to large agents, and book through partner channels in other regions where prices for the same hotels are significantly lower." },
        { q: "Is it legal?", a: "Absolutely. You receive an official hotel voucher. Your booking will appear in the hotel's system just as if you had booked it yourself." },
        { q: "What if I change my mind?", a: "Cancellation terms depend on the chosen rate. We always offer both non-refundable options with maximum discount and flexible rates with cancellation." }
      ]
    },
    footer: {
      instagram: "Instagram",
      copyright: "© 2024 Easy Book. Private Concierge.",
      owner: "IE «EasyToBook» | OGRNIP: 325770006482193 | INN: 770512483691",
      address: "Russia, Moscow, Letnikovskaya st., 10, bldg. 4, office 219, 115114",
      ads: "Ads Verification:"
    },
    common: {
        back: "Back to Home",
        request: "Official Request:"
    },
    cookies: {
      text: "We use cookies to improve your experience. By continuing to use the site, you agree to our ",
      link: "Cookie Policy",
      btn: "Accept"
    }
  }
};

const POLICIES = {
  privacy: {
    path: "/privacy-policy",
    title: "Privacy Policy",
    date: "Effective Date: April 2026",
    content: `EasyBook (“we”, “our”, “us”) provides premium travel concierge services. We are committed to protecting your privacy and handling your data with discretion.

1. INFORMATION WE COLLECT
We may collect:
• Contact details (name, email, phone)
• Booking preferences and requests
• Technical data (IP address, device, browser)
• Usage and analytics data
Payment details are processed securely by third-party providers and are not stored by us.

2. HOW WE USE INFORMATION
We use your data to:
• Deliver concierge and booking services
• Communicate with you
• Improve our platform and user experience
• Measure performance of marketing campaigns (including Google Analytics and Google Ads)

3. COOKIES
We use cookies and tracking technologies to:
• Analyze traffic
• Optimize performance
• Track advertising effectiveness
You can manage cookies in your browser settings.

4. THIRD-PARTY SERVICES
We may use trusted third parties, including Google Analytics, Google Ads, and payment/booking partners. These providers may process data under their own policies.

5. DATA SHARING
We do not sell your personal data. We may share limited information with service providers required to fulfill your request or authorities when legally required.

6. DATA SECURITY
We apply reasonable security measures to protect your data. However, no system is completely secure.

7. YOUR RIGHTS
You may request access to your data, correction or deletion, or withdrawal of consent (where applicable).

8. INTERNATIONAL USE
Our services are available globally. Your data may be processed in different jurisdictions.

9. UPDATES
We may update this policy from time to time.

10. CONTACT
Email: ezbook420@gmail.com

Ownership and Contact Information:
ИП «ИзиТуБук»
ОГРНИП: 325770006482193
ИНН: 770512483691
Юридический адрес: Россия, г. Москва, ул. Летниковская, д. 10, стр. 4, офис 219, 115114
Official Verification Email: ezbook420@gmail.com`
  },
  terms: {
    path: "/terms-of-service",
    title: "Terms of Service",
    date: "Effective date: April 2026",
    content: `By accessing EasyBook, you agree to these Terms.

1. Nature of Service
EasyBook provides premium travel concierge services and acts as an intermediary between clients and third-party providers.

2. Use of Service
You agree to:
• Provide accurate information
• Use the service lawfully
• Not misuse or interfere with the platform

3. Bookings and Availability
• All services are subject to availability
• Final terms are determined by third-party providers
• We do not guarantee availability or pricing

4. Payments
Payments may be handled via third-party providers. We are not responsible for external payment processing issues.

5. Cancellations
Cancellation and refund policies depend on the service provider.

6. Liability
To the fullest extent permitted by law, EasyBook is not liable for:
• Third-party service performance
• Travel disruptions or delays
• Indirect or consequential damages

7. Intellectual Property
All content and branding belong to EasyBook and may not be used without permission.

8. Termination
We reserve the right to suspend or terminate access in case of misuse.

9. Changes
We may update these Terms at any time.

10. Contact
Email: ezbook420@gmail.com

Ownership and Contact Information:
ИП «ИзиТуБук»
ОГРНИП: 325770006482193
ИНН: 770512483691
Юридический адрес: Россия, г. Москва, ул. Летниковская, д. 10, стр. 4, офис 219, 115114
Official Verification Email: ezbook420@gmail.com`
  },
  cookies: {
    path: "/cookie-policy",
    title: "Cookie Policy",
    date: "Effective date: April 2026",
    content: `This Cookie Policy explains how EasyBook (“we”, “our”, “us”) uses cookies and similar technologies when you visit our website.

1. WHAT ARE COOKIES
Cookies are small text files stored on your device when you visit a website. They help improve functionality, performance, and user experience.

2. TYPES OF COOKIES WE USE
We may use the following categories:
• Essential Cookies: Required for the website to function properly.
• Analytics Cookies: Used to understand how visitors interact with our website (e.g., via Google Analytics).
• Advertising Cookies: Used to measure and optimize advertising campaigns (e.g., Google Ads).
• Functional Cookies: Remember your preferences and settings.

3. THIRD-PARTY COOKIES
We may allow third-party services to place cookies on your device, including Google Analytics and Google Ads. These providers may collect data according to their own privacy policies.

4. HOW WE USE COOKIES
We use cookies to:
• Analyze website traffic
• Improve performance and usability
• Track marketing effectiveness
• Provide a better user experience

5. MANAGING COOKIES
You can control or disable cookies through your browser settings. Please note that disabling cookies may affect website functionality.

6. CONSENT
By continuing to use our website, you consent to the use of cookies as described in this policy.

7. UPDATES
We may update this Cookie Policy from time to time.

8. CONTACT
If you have any questions, please contact us:
Email: ezbook420@gmail.com`
  }
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function CookieBanner() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:max-w-md z-[200] bg-[#1a1a1a] border border-primary/10 p-6 shadow-2xl rounded-sm"
    >
      <div className="flex flex-col gap-6">
        <p className="font-body text-sm text-on-surface-variant/80 leading-relaxed font-light">
          {t.cookies.text}
          <Link to={POLICIES.cookies.path} className="text-primary hover:underline">{t.cookies.link}</Link>.
        </p>
        <button 
          onClick={accept}
          className="gold-gradient text-black px-8 py-2.5 rounded-sm font-label text-[10px] uppercase tracking-[0.2em] font-bold active:scale-95 transition-all text-center w-full md:w-fit self-end"
        >
          {t.cookies.btn}
        </button>
      </div>
    </motion.div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const { lang, setLang, t } = useTranslation();

  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-on-primary">
      <CookieBanner />
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-[100] bg-[#131313] backdrop-blur-md border-b border-primary/10 flex justify-between items-center px-6 md:px-12 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-5 md:py-5 transition-all duration-300 before:content-[''] before:absolute before:-top-[500px] before:left-0 before:right-0 before:h-[500px] before:bg-[#131313]">
        <Link to="/" className="text-xl font-headline font-bold text-primary tracking-[0.1em] uppercase">
          Easy Book
        </Link>
        <div className="hidden md:flex items-center space-x-10 font-label font-medium text-[10px] tracking-[0.2em] uppercase">
          <Link to="/" className="text-[#E5E2E1] hover:text-[#FFDEA5] transition-colors duration-300">{t.nav.about}</Link>
          <a href="/#cases" className="text-[#E5E2E1] hover:text-[#FFDEA5] transition-colors duration-300">{t.nav.cases}</a>
          <a href="/#faq" className="text-[#E5E2E1] hover:text-[#FFDEA5] transition-colors duration-300">{t.nav.faq}</a>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6 border-r border-primary/10 pr-8">
            {/* Lang Toggle UI matching screenshot */}
            <div className="flex items-center font-label text-[10px] font-bold tracking-[0.2em]">
              <button 
                onClick={() => setLang('RU')}
                className={`cursor-pointer transition-all ${lang === 'RU' ? 'text-primary' : 'text-[#E5E2E1]/30'}`}
              >
                RU
              </button>
              <div className="w-px h-3 bg-on-surface/20 mx-3.5"></div>
              <button 
                onClick={() => setLang('EN')}
                className={`cursor-pointer transition-all ${lang === 'EN' ? 'text-primary' : 'text-[#E5E2E1]/30'}`}
              >
                EN
              </button>
            </div>
            
            <a 
              href="https://www.instagram.com/easy.book_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#E5E2E1]/60 hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
          <a 
            href="https://t.me/EASYBOOK_HOTELS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="gold-gradient text-black px-8 py-3 rounded-md font-label text-[10px] uppercase tracking-[0.15em] font-bold active:scale-95 duration-200 inline-block text-center shadow-lg"
          >
            {t.nav.book}
          </a>
        </div>
      </nav>

      <main className="pt-24 md:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full py-16 px-6 md:px-12 border-t border-primary/5 bg-[#131313]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-[1920px] mx-auto">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-xl font-headline font-bold text-primary tracking-[0.1em] uppercase">Easy Book</div>
            <a 
              href="https://www.instagram.com/easy.book_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#E5E2E1]/40 hover:text-primary transition-colors font-label text-[10px] uppercase tracking-widest"
            >
              <Instagram size={16} />
              <span>{t.footer.instagram}</span>
            </a>
          </div>
          <div className="flex gap-10 font-label text-[10px] uppercase tracking-[0.1em]">
            <Link to={POLICIES.privacy.path} className="text-[#E5E2E1]/40 hover:text-primary transition-all duration-300">Privacy Policy</Link>
            <Link to={POLICIES.terms.path} className="text-[#E5E2E1]/40 hover:text-primary transition-all duration-300">Terms of Service</Link>
            <Link to={POLICIES.cookies.path} className="text-[#E5E2E1]/40 hover:text-primary transition-all duration-300">Cookie Policy</Link>
          </div>
          <div className="font-label text-[10px] uppercase tracking-[0.1em] text-[#E5E2E1]/40 flex flex-col items-center md:items-end gap-2 text-center md:text-right">
            <div>{t.footer.copyright}</div>
            <div className="text-primary/60 normal-case flex flex-col items-center md:items-end gap-1">
              <span>{t.footer.owner}</span>
              <span>{t.footer.address}</span>
              <div className="mt-1">{t.footer.ads} <a href="mailto:ezbook420@gmail.com" className="hover:text-primary underline transition-colors">ezbook420@gmail.com</a></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Home() {
  const { t } = useTranslation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      {/* New Hero Variant: Split Layout */}
      <section className="relative h-screen flex flex-col lg:flex-row items-stretch overflow-hidden border-b border-primary/10">
        <div className="lg:w-1/2 flex flex-col justify-center px-6 md:px-20 py-12 md:py-20 relative z-10 bg-surface">
          <div className="absolute top-10 left-10 hidden xl:block">
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary/40 rotate-90 origin-left inline-block whitespace-nowrap">
              {t.hero.badge}
            </span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="font-label text-primary text-[10px] uppercase tracking-[0.3em] mb-8 font-semibold">
              {t.hero.top}
            </div>
            <h1 className="font-headline text-7xl md:text-8xl lg:text-9xl text-on-surface leading-[0.85] mb-12 uppercase">
              {t.hero.h1} <br />
              <span className="italic font-light text-primary">{t.hero.h1Span}</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-md mb-16 leading-relaxed font-light">
              {t.hero.p}
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <a 
                href="/#cases"
                className="gold-gradient text-on-primary px-14 py-6 rounded-sm font-label text-[11px] uppercase tracking-[0.25em] font-bold active:scale-95 transition-all shadow-2xl text-center"
              >
                {t.hero.btnCases}
              </a>
              <a 
                href="https://t.me/EASYBOOK_HOTELS"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 font-label text-[11px] uppercase tracking-[0.25em] text-on-surface hover:text-primary transition-colors"
              >
                <span className="w-12 h-px bg-primary/30 group-hover:w-16 transition-all"></span>
                {t.hero.telegram}
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVylbQsyxc-2dVAyV0E7NlLdiqfX8rvRSy7R0pfpaX6f6Ai7bC0h69CMPVRe-Sfuiagj5DLZkmNW2OU05hDxXZIkxki5sNLirNoOL_bpEx1t3i3McWneruiTmXToPAte8khgR5cFkPkBuMQ-Wc8KlvQGuq5guSgktDrjtmdSO2vpTpF0rO6CYHi5ljSMaV0_u6QEwG9zj6t53EWMhKq7rALFJx_NedMzhj6mXF_a_fUfWXJBN-6nwbnX87UnZYNYhJ_VVDVs0FTruy=s0"
              alt="Luxury travel"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface lg:bg-gradient-to-l lg:from-surface lg:to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* New Features Variant: Bordered Grid */}
      <section className="py-0 border-b border-primary/10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {(t.features as any[]).map((feature, i) => (
            <div key={i} className="p-16 border-r border-primary/10 last:border-r-0 hover:bg-primary/[0.02] transition-colors group">
              {[Key, ShieldCheck, Lock][i] && React.createElement([Key, ShieldCheck, Lock][i], { className: "text-primary w-10 h-10 mb-10 stroke-[1px] group-hover:scale-110 transition-transform" })}
              <h3 className="font-headline text-2xl text-on-surface uppercase tracking-widest mb-6">{feature.title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed font-light text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* New Economy Block: Centered Editorial */}
      <section className="py-20 md:py-40 px-6 md:px-12 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 border border-primary/20 rounded-full mb-10">
            <span className="font-label text-[9px] uppercase tracking-[0.3em] text-primary leading-none mr-[-0.3em]">{t.economy.badge}</span>
          </div>
          <h2 className="font-headline text-5xl md:text-7xl text-on-surface mb-12 leading-tight uppercase tracking-widest" dangerouslySetInnerHTML={{ __html: t.economy.h2 }}></h2>
          <p className="font-body text-xl text-on-surface-variant mb-16 leading-relaxed font-light max-w-2xl mx-auto">
            {t.economy.p}
          </p>
          <a 
            href="https://t.me/EASYBOOK_HOTELS"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient text-on-primary px-16 py-6 rounded-sm font-label text-xs uppercase tracking-[0.3em] font-bold active:scale-95 transition-all inline-block shadow-xl"
          >
            {t.economy.btn}
          </a>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-16 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-20">
            <h2 className="font-headline text-4xl text-on-surface uppercase tracking-widest">{t.audience.title}</h2>
            <div className="w-16 h-px bg-primary mt-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {(t.audience.items as any[]).map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-surface-container-lowest p-12 border border-outline-variant/10 rounded-sm hover:border-primary/40 transition-all duration-500"
              >
                <div className="font-label text-primary text-[10px] uppercase tracking-[0.25em] mb-6 font-semibold">{item.label}</div>
                <h4 className="font-headline text-xl text-on-surface mb-8 uppercase tracking-widest">{item.title}</h4>
                <p className="font-body text-on-surface-variant font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Cases Variant: Vertical List with Large Images */}
      <section id="cases" className="py-20 md:py-40 px-6 md:px-12 bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-24 space-y-8">
            <h2 className="font-headline text-5xl md:text-7xl text-on-surface uppercase tracking-widest leading-none" dangerouslySetInnerHTML={{ __html: t.cases.h2 }}></h2>
            <p className="font-body text-on-surface-variant/60 max-w-sm font-light text-sm md:text-base leading-relaxed">
              {t.cases.p}
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:gap-20">
            {[
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm1zs63w0gEkSq0P0N37sNImg8kZWRJBSapBYQtAAko3kry3AVzw7cjHKvQwUDSG1y0zZUwcehIGTKi9ITHz7kIjNpQYKTi8QAeIxX0MbfhDsOQTcKZ2Hfk7bmXimU479DBmwM6jUwUgsqp2OKTHRzfcVU1xYl8zyUFkLCzpC4g9yCRZnG0c_YEGeY93C1sjSqR2KRerS6-9plapcy3OouBeSbldhAEZJfpuHQZFzdL68PrMQa4xN_jgtDyyUR6IsUCbIMAMQtHfnv=s0",
                old: "€3,420",
                new: "€1,890",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB2wIUfUAQf2AeHVrjDdhOr4BXy_5HVWy2d-5DFyU0PGtYTiM40iW2CxdC0lIWGI8crMqzLJs4PuAHJ7ix-RPjWXu4FGB6fL-Ts7qH4ggHkAaPS5GUzOMtqVjaWEX8OlxGmHgaeHFR8FHJa164dQRpH6ojmR2v1tLudEc_UQ045mfWHBUtnpIbFSGWyKHbkatMZ1ph3SpgkiTLueLF3gEkEEhigm-W7cVg33NLgBM4JAuPV0AE-VZ1gahyNEKjzV0EiBPoE6ay3ElV=s0",
                old: "€4,100",
                new: "€2,460",
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-[#0A0A0A] border border-outline-variant/10 p-8 md:p-12 rounded-sm hover:border-primary/40 transition-all duration-500 flex flex-col lg:flex-row gap-12 md:gap-20 items-center group cursor-default"
              >
                <div className="w-full lg:w-3/5 aspect-[16/9] overflow-hidden rounded-sm">
                  <img 
                    className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                    src={item.img}
                    alt={t.cases.items[i].name}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full lg:w-2/5 flex flex-col">
                  <h4 className="font-headline text-3xl md:text-4xl text-on-surface mb-3 uppercase tracking-widest">{t.cases.items[i].name}</h4>
                  <p className="font-label text-on-surface-variant/60 text-[9px] md:text-[10px] uppercase tracking-[0.25em] mb-8">{t.cases.items[i].loc}</p>
                  <p className="font-body text-on-surface-variant/80 mb-10 font-light leading-relaxed text-sm md:text-base max-w-sm">{t.cases.items[i].desc}</p>
                  
                  <div className="mt-auto space-y-8">
                    <div className="bg-[#1C1812] text-primary/70 px-6 py-2 rounded-full font-label text-[10px] uppercase tracking-[0.2em] font-bold w-fit border border-primary/5">
                      {t.cases.items[i].disc} Savings
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-on-surface-variant/20 line-through text-base md:text-xl font-label">{item.old}</span>
                      <span className="text-primary text-5xl md:text-6xl font-headline font-medium tracking-tight">
                        {item.new}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-16 md:py-32 px-4 md:px-12 bg-surface">
        <div className="max-w-[1440px] mx-auto grid grid-cols-4 md:flex md:flex-wrap justify-between gap-1 md:gap-12 text-center md:text-left">
          {(t.trust as any[]).map((metric, i) => (
            <div key={i} className="flex flex-col items-center md:items-start">
              <div className="text-2xl md:text-6xl font-headline text-primary mb-1 md:mb-4 font-bold tracking-tight md:tracking-widest">{metric.val}</div>
              <div className="font-label text-[7px] md:text-[10px] text-on-surface-variant uppercase tracking-tighter md:tracking-[0.2em] font-medium leading-tight md:leading-normal">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New CTA Variant: Minimalist Dark */}
      <section className="py-20 md:py-60 px-6 md:px-12 bg-surface-container-lowest border-y border-primary/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-headline text-6xl md:text-8xl text-on-surface mb-12 uppercase tracking-tighter leading-none" dangerouslySetInnerHTML={{ __html: t.cta.h2 }}></h2>
          <div className="flex flex-col sm:flex-row justify-center gap-12 items-center">
            <a 
              href="https://t.me/EASYBOOK_HOTELS"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient text-on-primary px-20 py-7 rounded-sm font-label text-xs uppercase tracking-[0.4em] font-bold active:scale-95 transition-all shadow-2xl"
            >
              {t.cta.btn}
            </a>
            <a 
              href="/#cases"
              className="font-label text-xs uppercase tracking-[0.4em] text-on-surface-variant hover:text-primary transition-colors"
            >
              {t.cta.btnLink}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl text-on-surface mb-16 text-center uppercase tracking-widest">{t.faq.title}</h2>
          <div className="space-y-6">
            {(t.faq.items as any[]).map((faq, i) => (
              <div 
                key={i} 
                className="bg-surface border border-outline-variant/5 rounded-sm overflow-hidden"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-10 flex justify-between items-center text-left cursor-pointer"
                >
                  <h4 className="font-headline text-xl text-primary uppercase tracking-wider">{faq.q}</h4>
                  <ChevronDown className={`text-primary transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: activeFaq === i ? "auto" : 0, opacity: activeFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-10 pb-10 font-body text-on-surface-variant font-light leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PolicyPage({ title, date, content }: { title: string; date?: string; content: string }) {
  const { t } = useTranslation();
  // Simple parser to style sections and bullet points
  const renderContent = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (/^\d+\./.test(line)) {
        return (
          <h3 key={i} className="font-headline text-2xl text-primary/90 uppercase tracking-widest border-b border-primary/20 pb-2 mt-16 mb-8">
            {line}
          </h3>
        );
      }
      if (line.startsWith('•')) {
        return (
          <div key={i} className="flex gap-4 mb-4 ml-2">
            <span className="text-primary">•</span>
            <p className="font-body text-on-surface-variant/80 font-light">{line.substring(1).trim()}</p>
          </div>
        );
      }
      if (line.trim() === 'We may collect:') {
        return (
          <p key={i} className="font-body bg-primary/10 text-primary px-2 py-0.5 inline-block mb-6 font-medium">
            {line}
          </p>
        )
      }
      if (line.trim() === '') return <div key={i} className="h-4" />;
      return (
        <p key={i} className="font-body text-on-surface-variant/90 leading-relaxed font-light mb-6 text-lg">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="bg-surface min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-colors mb-16 group">
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-label text-[10px] uppercase tracking-[0.3em] font-medium">{t.common.back}</span>
        </Link>
        
        <div className="text-center mb-24">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary uppercase tracking-[0.2em] mb-6 leading-none">
            {title}
          </h1>
          {date && (
            <p className="font-label text-[10px] uppercase tracking-[0.5em] text-on-surface-variant/50">
              {date}
            </p>
          )}
        </div>

        <div className="max-w-3xl mx-auto">
          {renderContent(content)}
        </div>

        <div className="mt-32 pt-16 border-t border-primary/10 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/40">{t.common.request}</span>
            <a href="mailto:ezbook420@gmail.com" className="text-primary hover:text-primary-container text-2xl font-headline tracking-widest transition-colors">
              ezbook420@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>('RU');
  const t = TRANSLATIONS[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={POLICIES.privacy.path} element={<PolicyPage title={POLICIES.privacy.title} date={POLICIES.privacy.date} content={POLICIES.privacy.content} />} />
            <Route path={POLICIES.terms.path} element={<PolicyPage title={POLICIES.terms.title} date={POLICIES.terms.date} content={POLICIES.terms.content} />} />
            <Route path={POLICIES.cookies.path} element={<PolicyPage title={POLICIES.cookies.title} date={POLICIES.cookies.date} content={POLICIES.cookies.content} />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}
