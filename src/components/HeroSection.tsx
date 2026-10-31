import React from 'react';
import { ArrowDown, Globe, Compass, FileCheck, AlertTriangle } from 'lucide-react';

interface HeroSectionProps {
  onStartInvestigation: () => void;
  onExploreStats: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartInvestigation,
  onExploreStats
}) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-between pt-8 pb-12 overflow-hidden bg-grid-subtle">
      {/* Background satellite image overlay with subtle darkened vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
        <img
          src="/src/assets/images/earth_satellite_scan_1793446009298.jpg"
          alt="Орбитальный спутниковый снимок Земли"
          className="w-full h-full object-cover object-center filter contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101216] via-[#101216]/60 to-[#101216]/90" />
      </div>

      {/* Classified Header Tape / Top Metadata bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-[#C5A46D]/20 text-xs font-telemetry text-[#8E95A2]">
          <div className="flex items-center gap-3">
            <span className="text-[#C5A46D] font-semibold tracking-widest uppercase">ARCHIVE № 001</span>
            <span aria-hidden="true" className="text-[#8E95A2]/40">·</span>
            <span className="text-[#B83A3A] font-semibold tracking-wider uppercase">CLASSIFIED RESEARCH</span>
            <span aria-hidden="true" className="text-[#8E95A2]/40">·</span>
            <span className="hidden sm:inline uppercase">STATUS: ACTIVE INVESTIGATION</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="uppercase text-[#8E95A2]">ДЕЛО НАЧАТО: 2012-04-19</span>
            <span aria-hidden="true" className="text-[#8E95A2]/40">·</span>
            <span className="text-[#C5A46D] uppercase">РЕВИЗИЯ: 2026.10</span>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-4xl">
          {/* Category kicker */}
          <div className="flex items-center gap-2 mb-4 text-xs font-telemetry tracking-widest text-[#C5A46D] uppercase">
            <Globe className="w-3.5 h-3.5 text-[#B83A3A]" />
            <span>ДЕМОГРАФИЧЕСКОЕ ИССЛЕДОВАНИЕ МИРОВОЙ ПОПУЛЯЦИИ</span>
          </div>

          {/* Primary Titles */}
          <div className="space-y-2 mb-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-monument tracking-tight font-black text-[#E8E6DF] uppercase">
              БИБОРАН
            </h1>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#C5A46D] font-normal tracking-wide">
              ТЕОРИЯ ЗАВЫШЕННОЙ ЧИСЛЕННОСТИ
            </h2>
          </div>

          {/* Subtitle & Investigative Lead */}
          <p className="text-xl sm:text-2xl font-serif italic text-[#E8E6DF]/90 mb-4 max-w-2xl leading-relaxed">
            «А что, если на Земле живёт гораздо меньше людей, чем нам говорят?»
          </p>
          <p className="text-sm sm:text-base text-[#8E95A2] font-sans max-w-2xl leading-relaxed mb-8">
            Нас десятилетиями убеждают, что на планете теснятся свыше 8 миллиардов человек. Нам предрекают нехватку пресной воды, продовольственный коллапс и вводят углеродные квоты. Но насколько достоверны методы глобального подсчёта, если сопоставить спутниковые снимки, аграрный баланс и феномен искусственной городской массовки?
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onStartInvestigation}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#B83A3A] hover:bg-[#a32e2e] rounded shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <span>Начать расследование</span>
              <ArrowDown className="w-4 h-4" />
            </button>
            <button
              onClick={onExploreStats}
              className="px-6 py-3.5 text-xs sm:text-sm font-medium tracking-wider uppercase text-[#E8E6DF] bg-[#191D23] border border-[#C5A46D]/30 hover:border-[#C5A46D] hover:bg-[#1f252d] rounded transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <span>Математическая модель</span>
            </button>
          </div>
        </div>
      </div>

      {/* Operational Utility Strip & Metrics Baseline */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 bg-[#191D23]/90 border border-[#C5A46D]/15 rounded-lg backdrop-blur-sm">
          <div>
            <div className="text-[11px] font-telemetry uppercase tracking-wider text-[#8E95A2] mb-1">
              Официально (ООН)
            </div>
            <div className="text-2xl sm:text-3xl font-serif text-[#E8E6DF] tabular-nums font-semibold">
              8 180 000 000
            </div>
            <div className="text-[11px] text-[#8E95A2] mt-1 font-sans">
              Математическая экстраполяция
            </div>
          </div>

          <div>
            <div className="text-[11px] font-telemetry uppercase tracking-wider text-[#C5A46D] mb-1">
              Оценка Биборана
            </div>
            <div className="text-2xl sm:text-3xl font-serif text-[#C5A46D] tabular-nums font-semibold">
              1.8 – 2.4 млрд
            </div>
            <div className="text-[11px] text-[#8E95A2] mt-1 font-sans">
              Реально верифицируемый предел
            </div>
          </div>

          <div>
            <div className="text-[11px] font-telemetry uppercase tracking-wider text-[#B83A3A] mb-1">
              Фантомная приписка
            </div>
            <div className="text-2xl sm:text-3xl font-serif text-[#B83A3A] tabular-nums font-semibold">
              ~5.9 млрд
            </div>
            <div className="text-[11px] text-[#8E95A2] mt-1 font-sans">
              «Мёртвые души» в реестрах
            </div>
          </div>

          <div>
            <div className="text-[11px] font-telemetry uppercase tracking-wider text-[#8E95A2] mb-1">
              Обитаемая территория
            </div>
            <div className="text-2xl sm:text-3xl font-serif text-[#E8E6DF] tabular-nums font-semibold">
              &lt; 5% суши
            </div>
            <div className="text-[11px] text-[#8E95A2] mt-1 font-sans">
              Сверхконцентрация в городах
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
