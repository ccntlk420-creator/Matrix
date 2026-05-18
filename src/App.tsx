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
  ChevronLeft
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

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

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-on-primary">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-[100] bg-[#131313] backdrop-blur-md border-b border-primary/10 flex justify-between items-center px-6 md:px-12 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-5 md:py-5 transition-all duration-300 before:content-[''] before:absolute before:-top-[500px] before:left-0 before:right-0 before:h-[500px] before:bg-[#131313]">
        <Link to="/" className="text-xl font-headline font-bold text-primary tracking-[0.1em] uppercase">
          Easy Book
        </Link>
        <div className="hidden md:flex items-center space-x-10 font-label font-medium text-[10px] tracking-[0.2em] uppercase">
          <Link to="/" className="text-[#E5E2E1] hover:text-[#FFDEA5] transition-colors duration-300">О нас</Link>
          <a href="/#cases" className="text-[#E5E2E1] hover:text-[#FFDEA5] transition-colors duration-300">Кейсы</a>
          <a href="/#faq" className="text-[#E5E2E1] hover:text-[#FFDEA5] transition-colors duration-300">FAQ</a>
        </div>
        <a 
          href="https://t.me/EASYBOOK_HOTELS" 
          target="_blank" 
          rel="noopener noreferrer"
          className="gold-gradient text-on-primary px-7 py-2.5 rounded-sm font-label text-[10px] uppercase tracking-[0.15em] font-bold active:scale-95 duration-200 inline-block text-center"
        >
          Забронировать
        </a>
      </nav>

      <main className="pt-24 md:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full py-16 px-6 md:px-12 border-t border-primary/5 bg-[#131313]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-[1920px] mx-auto">
          <div className="text-xl font-headline font-bold text-primary tracking-[0.1em] uppercase">Easy Book</div>
          <div className="flex gap-10 font-label text-[10px] uppercase tracking-[0.1em]">
            <Link to={POLICIES.privacy.path} className="text-[#E5E2E1]/40 hover:text-primary transition-all duration-300">Privacy Policy</Link>
            <Link to={POLICIES.terms.path} className="text-[#E5E2E1]/40 hover:text-primary transition-all duration-300">Terms of Service</Link>
            <Link to={POLICIES.cookies.path} className="text-[#E5E2E1]/40 hover:text-primary transition-all duration-300">Cookie Policy</Link>
          </div>
          <div className="font-label text-[10px] uppercase tracking-[0.1em] text-[#E5E2E1]/40 flex flex-col items-center md:items-end gap-2">
            <div>© 2024 Easy Book. Private Concierge.</div>
            <div className="text-primary/60 normal-case flex flex-col items-center md:items-end gap-1">
              <span>ИП «ИзиТуБук» | ОГРНИП: 325770006482193 | ИНН: 770512483691</span>
              <span>Россия, г. Москва, ул. Летниковская, д. 10, стр. 4, офис 219, 115114</span>
              <div className="mt-1">Ads Verification: <a href="mailto:ezbook420@gmail.com" className="hover:text-primary underline transition-colors">ezbook420@gmail.com</a></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      {/* New Hero Variant: Split Layout */}
      <section className="relative h-screen flex flex-col lg:flex-row items-stretch overflow-hidden border-b border-primary/10">
        <div className="lg:w-1/2 flex flex-col justify-center px-6 md:px-20 py-12 md:py-20 relative z-10 bg-surface">
          <div className="absolute top-10 left-10 hidden xl:block">
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary/40 rotate-90 origin-left inline-block whitespace-nowrap">
              EST. 2017 • PRIVATE CONCIERGE
            </span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="font-label text-primary text-[10px] uppercase tracking-[0.3em] mb-8 font-semibold">
              Exclusive Access
            </div>
            <h1 className="font-headline text-7xl md:text-8xl lg:text-9xl text-on-surface leading-[0.85] mb-12 uppercase">
              Твой билет в <br />
              <span className="italic font-light text-primary">мир люкса.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-md mb-16 leading-relaxed font-light">
              Бронируем лучшие отели мира со скидкой до 50%. Официально. Безопасно. Только для своих.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <a 
                href="https://t.me/easybook_hotel"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient text-on-primary px-14 py-6 rounded-sm font-label text-[11px] uppercase tracking-[0.25em] font-bold active:scale-95 transition-all shadow-2xl text-center"
              >
                Посмотреть кейсы
              </a>
              <a 
                href="https://t.me/EASYBOOK_HOTELS"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 font-label text-[11px] uppercase tracking-[0.25em] text-on-surface hover:text-primary transition-colors"
              >
                <span className="w-12 h-px bg-primary/30 group-hover:w-16 transition-all"></span>
                Telegram
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
          {[
            { icon: Key, title: "Прямой доступ", desc: "Минуем розничные наценки агрегаторов через инвентарь туроператоров." },
            { icon: ShieldCheck, title: "API и VPN", desc: "Используем региональные ценовые лазейки, доступные только профи." },
            { icon: Lock, title: "Закрытые тарифы", desc: "Эксклюзивные предложения, скрытые от широкой публики." }
          ].map((feature, i) => (
            <div key={i} className="p-16 border-r border-primary/10 last:border-r-0 hover:bg-primary/[0.02] transition-colors group">
              <feature.icon className="text-primary w-10 h-10 mb-10 stroke-[1px] group-hover:scale-110 transition-transform" />
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
            <span className="font-label text-[9px] uppercase tracking-[0.3em] text-primary leading-none mr-[-0.3em]">Smart Luxury</span>
          </div>
          <h2 className="font-headline text-5xl md:text-7xl text-on-surface mb-12 leading-tight uppercase tracking-widest">
            Отдыхай как <span className="italic font-light text-primary">миллионер</span>, <br />
            плати как <span className="italic font-light text-primary">турист</span>.
          </h2>
          <p className="font-body text-xl text-on-surface-variant mb-16 leading-relaxed font-light max-w-2xl mx-auto">
            Мы не просто ищем скидки. Мы открываем двери в мир, который раньше был доступен только через личные связи.
          </p>
          <a 
            href="https://t.me/EASYBOOK_HOTELS"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient text-on-primary px-16 py-6 rounded-sm font-label text-xs uppercase tracking-[0.3em] font-bold active:scale-95 transition-all inline-block shadow-xl"
          >
            Начать экономить
          </a>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-16 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-20">
            <h2 className="font-headline text-4xl text-on-surface uppercase tracking-widest">Для кого наш сервис</h2>
            <div className="w-16 h-px bg-primary mt-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                label: "The Connoisseur",
                title: "Ценитель комфорта",
                desc: "Для тех, кто привык к 5 звездам и безупречному сервису, но не видит смысла платить маркетинговый налог агрегаторов."
              },
              {
                label: "The Strategist",
                title: "Стратег",
                desc: "Для тех, кто планирует сложные маршруты и ценит возможность продлить отпуск в два раза при том же бюджете."
              },
              {
                label: "The Explorer",
                title: "Активный путешественник",
                desc: "Для тех, кто всегда в движении и ищет способ получить больше впечатлений от каждой поездки по всему миру."
              }
            ].map((item, i) => (
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
            <h2 className="font-headline text-5xl md:text-7xl text-on-surface uppercase tracking-widest leading-none">
              Наши <span className="text-primary italic font-light">Кейсы.</span>
            </h2>
            <p className="font-body text-on-surface-variant/60 max-w-sm font-light text-sm md:text-base leading-relaxed">
              Реальные бронирования наших клиентов за последний месяц. Сравните цены и убедитесь сами.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 md:gap-20">
            {[
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm1zs63w0gEkSq0P0N37sNImg8kZWRJBSapBYQtAAko3kry3AVzw7cjHKvQwUDSG1y0zZUwcehIGTKi9ITHz7kIjNpQYKTi8QAeIxX0MbfhDsOQTcKZ2Hfk7bmXimU479DBmwM6jUwUgsqp2OKTHRzfcVU1xYl8zyUFkLCzpC4g9yCRZnG0c_YEGeY93C1sjSqR2KRerS6-9plapcy3OouBeSbldhAEZJfpuHQZFzdL68PrMQa4xN_jgtDyyUR6IsUCbIMAMQtHfnv=s0",
                name: "ME Barcelona",
                loc: "Испания, Барселона • 7 ночей",
                old: "€3,420",
                new: "€1,890",
                disc: "-45%",
                desc: "Люкс с видом на город. Бронирование через закрытый канал туроператора."
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB2wIUfUAQf2AeHVrjDdhOr4BXy_5HVWy2d-5DFyU0PGtYTiM40iW2CxdC0lIWGI8crMqzLJs4PuAHJ7ix-RPjWXu4FGB6fL-Ts7qH4ggHkAaPS5GUzOMtqVjaWEX8OlxGmHgaeHFR8FHJa164dQRpH6ojmR2v1tLudEc_UQ045mfWHBUtnpIbFSGWyKHbkatMZ1ph3SpgkiTLueLF3gEkEEhigm-W7cVg33NLgBM4JAuPV0AE-VZ1gahyNEKjzV0EiBPoE6ay3ElV=s0",
                name: "The Capra Saas-Fee",
                loc: "Швейцария, Альпы • 5 ночей",
                old: "€4,100",
                new: "€2,460",
                disc: "-40%",
                desc: "Шале премиум-класса. Использование региональных API цен."
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
                    alt={item.name}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full lg:w-2/5 flex flex-col">
                  <h4 className="font-headline text-3xl md:text-4xl text-on-surface mb-3 uppercase tracking-widest">{item.name}</h4>
                  <p className="font-label text-on-surface-variant/60 text-[9px] md:text-[10px] uppercase tracking-[0.25em] mb-8">{item.loc}</p>
                  <p className="font-body text-on-surface-variant/80 mb-10 font-light leading-relaxed text-sm md:text-base max-w-sm">{item.desc}</p>
                  
                  <div className="mt-auto space-y-8">
                    <div className="bg-[#1C1812] text-primary/70 px-4 py-1.5 rounded-full font-label text-[8px] uppercase tracking-[0.2em] font-bold w-fit border border-primary/5">
                      {item.disc} Savings
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
          {[
            { val: "2017", label: "Работаем с года" },
            { val: "526+", label: "Объектов в базе" },
            { val: "1,375", label: "Довольных клиентов" },
            { val: "€342k", label: "Сэкономлено" }
          ].map((metric, i) => (
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
          <h2 className="font-headline text-6xl md:text-8xl text-on-surface mb-12 uppercase tracking-tighter leading-none">
            Готовы к <br /> <span className="text-primary italic font-light">новым открытиям?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-12 items-center">
            <a 
              href="https://t.me/EASYBOOK_HOTELS"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient text-on-primary px-20 py-7 rounded-sm font-label text-xs uppercase tracking-[0.4em] font-bold active:scale-95 transition-all shadow-2xl"
            >
              Запросить подборку
            </a>
            <a 
              href="https://t.me/easybook_hotel"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-xs uppercase tracking-[0.4em] text-on-surface-variant hover:text-primary transition-colors"
            >
              Посмотреть кейсы
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl text-on-surface mb-16 text-center uppercase tracking-widest">Часто задаваемые вопросы</h2>
          <div className="space-y-6">
            {[
              {
                q: "Почему цены такие низкие?",
                a: "Мы используем корпоративные тарифы, доступ к которым имеют только крупные агенты, а также бронируем через партнерские каналы в других регионах, где цены на те же отели значительно ниже."
              },
              {
                q: "Это легально?",
                a: "Абсолютно. Вы получаете официальный ваучер отеля. Ваше бронирование будет отображаться в системе отеля так же, как если бы вы забронировали его сами."
              },
              {
                q: "Что если я передумаю?",
                a: "Условия отмены зависят от выбранного тарифа. Мы всегда предлагаем как невозвратные варианты с максимальной скидкой, так и гибкие тарифы с возможностью отмены."
              }
            ].map((faq, i) => (
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
          <span className="font-label text-[10px] uppercase tracking-[0.3em] font-medium">Вернуться на главную</span>
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
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/40">Официальный запрос:</span>
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
  return (
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
  );
}
