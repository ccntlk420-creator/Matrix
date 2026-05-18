/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Key, 
  ShieldCheck, 
  Lock, 
  MessageCircle, 
  ChevronDown, 
  ArrowRight,
  X
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);

  const POLICIES = {
    privacy: {
      title: "Privacy Policy",
      content: "At Easy Book, we take your privacy seriously. We collect minimal data required to provide our concierge services. Any personal information shared with us is used exclusively for booking purposes. We never sell your data to third parties.\n\nFor any inquiries regarding your data, please contact our team at: ezbook420@gmail.com"
    },
    terms: {
      title: "Terms of Service",
      content: "Easy Book acts as a private concierge and intermediary between clients and hotel inventory systems. All bookings are subject to hotel availability and specific terms at the time of reservation.\n\nOwnership and Contact Information:\nThis project is owned and maintained by the Easy Book Concierge Team.\nOfficial Verification Email: ezbook420@gmail.com"
    },
    cookies: {
      title: "Cookie Policy",
      content: "Easy Book uses strictly necessary cookies to ensure the proper functioning of our website. We do not use tracking or advertising cookies.\n\nBy using our site, you consent to our use of these essential cookies. For more information, please contact us at: ezbook420@gmail.com"
    }
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-on-primary">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-[100] bg-[#131313] backdrop-blur-md border-b border-primary/10 flex justify-between items-center px-6 md:px-12 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-5 md:py-5 transition-all duration-300 before:content-[''] before:absolute before:-top-[500px] before:left-0 before:right-0 before:h-[500px] before:bg-[#131313]">
        <div className="text-xl font-headline font-bold text-primary tracking-[0.1em] uppercase">
          Easy Book
        </div>
        <div className="hidden md:flex items-center space-x-10 font-label font-medium text-[10px] tracking-[0.2em] uppercase">
          <a href="#" className="text-[#E5E2E1] hover:text-[#FFDEA5] transition-colors duration-300">О нас</a>
          <a href="#cases" className="text-[#E5E2E1] hover:text-[#FFDEA5] transition-colors duration-300">Кейсы</a>
          <a href="#faq" className="text-[#E5E2E1] hover:text-[#FFDEA5] transition-colors duration-300">FAQ</a>
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
                  <span className="w-12 h-px bg-primary/30 group-hover:w-16 transition-all translate-y-[4px]"></span>
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
            <div className="inline-block px-4 py-1 border border-primary/20 rounded-full mb-10">
              <span className="font-label text-[9px] uppercase tracking-[0.3em] text-primary">Smart Luxury</span>
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
        <section id="cases" className="py-12 md:py-40 px-6 md:px-12 bg-surface">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-24 space-y-8">
              <h2 className="font-headline text-5xl md:text-7xl text-on-surface uppercase tracking-widest leading-none">
                Наши <span className="text-primary italic font-light">Кейсы.</span>
              </h2>
              <p className="font-body text-on-surface-variant max-w-md font-light">
                Реальные бронирования наших клиентов за последний месяц. Сравните цены и убедитесь сами.
              </p>
            </div>
            
            <div className="space-y-32">
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
                  className="flex flex-col lg:flex-row gap-20 items-center"
                >
                  <div className="lg:w-3/5 aspect-[16/9] overflow-hidden rounded-sm">
                    <img 
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000" 
                      src={item.img}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="lg:w-2/5">
                    <h4 className="font-headline text-4xl text-on-surface mb-6 uppercase tracking-widest">{item.name}</h4>
                    <p className="font-label text-on-surface-variant text-xs uppercase tracking-widest mb-8">{item.loc}</p>
                    <p className="font-body text-on-surface-variant mb-12 font-light leading-relaxed">{item.desc}</p>
                    <div className="flex flex-col items-start gap-4">
                      <div className="bg-primary/10 text-primary px-4 py-1 rounded-full font-label text-[10px] uppercase tracking-widest font-bold">
                        {item.disc} Savings
                      </div>
                      <div className="flex items-baseline gap-6">
                        <span className="text-on-surface-variant line-through text-lg font-label">{item.old}</span>
                        <span className="text-primary text-5xl font-headline font-bold">{item.new}</span>
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
                    className="w-full p-10 flex justify-between items-center text-left"
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
      </main>

      {/* Footer */}
      <footer className="w-full py-16 px-6 md:px-12 border-t border-primary/5 bg-[#131313]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-[1920px] mx-auto">
          <div className="text-xl font-headline font-bold text-primary tracking-[0.1em] uppercase">Easy Book</div>
          <div className="flex gap-10 font-label text-[10px] uppercase tracking-[0.1em]">
            <button onClick={() => setModalContent(POLICIES.privacy)} className="text-[#E5E2E1]/40 hover:text-primary transition-all duration-300 cursor-pointer">Privacy Policy</button>
            <button onClick={() => setModalContent(POLICIES.terms)} className="text-[#E5E2E1]/40 hover:text-primary transition-all duration-300 cursor-pointer">Terms of Service</button>
            <button onClick={() => setModalContent(POLICIES.cookies)} className="text-[#E5E2E1]/40 hover:text-primary transition-all duration-300 cursor-pointer">Cookie Policy</button>
          </div>
          <div className="font-label text-[10px] uppercase tracking-[0.1em] text-[#E5E2E1]/40 flex flex-col items-center md:items-end gap-2">
            <div>© 2024 Easy Book. Private Concierge.</div>
            <div className="text-primary/60 normal-case">Ads Verification: <a href="mailto:ezbook420@gmail.com" className="hover:text-primary underline transition-colors">ezbook420@gmail.com</a></div>
          </div>
        </div>
      </footer>

      {/* Modal for Policies */}
      {modalContent && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-surface/95 backdrop-blur-sm" 
            onClick={() => setModalContent(null)}
          ></motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative bg-surface-container-high border border-primary/20 p-8 md:p-12 max-w-2xl w-full rounded-sm shadow-2xl overflow-y-auto max-h-[80vh]"
          >
            <button 
              onClick={() => setModalContent(null)}
              className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
            <h2 className="font-headline text-2xl md:text-3xl text-primary uppercase tracking-widest mb-8">{modalContent.title}</h2>
            <div className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed whitespace-pre-wrap font-light">
              {modalContent.content}
            </div>
            <div className="mt-10 pt-6 border-t border-primary/10">
              <button 
                onClick={() => setModalContent(null)}
                className="gold-gradient text-on-primary px-10 py-3 rounded-sm font-label text-[9px] uppercase tracking-[0.2em] font-bold active:scale-95 transition-all cursor-pointer"
              >
                Accept and Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
