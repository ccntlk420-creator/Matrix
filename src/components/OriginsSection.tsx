import React from 'react';
import { BookOpen, User, Flame, ArrowRight, ShieldCheck } from 'lucide-react';

interface OriginsSectionProps {
  onContinueToTheory: () => void;
}

export const OriginsSection: React.FC<OriginsSectionProps> = ({ onContinueToTheory }) => {
  return (
    <section id="origins" className="py-20 bg-[#14171D] border-t border-[#C5A46D]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-telemetry tracking-widest text-[#C5A46D] uppercase mb-3">
            <span>ИСТОРИЧЕСКАЯ СПРАВКА ДЛЯ ИССЛЕДОВАТЕЛЯ</span>
            <span aria-hidden="true" className="text-[#8E95A2]/40">/</span>
            <span className="text-[#8E95A2]">КОНТЕКСТ ВОЗНИКНОВЕНИЯ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#E8E6DF] font-semibold tracking-tight">
            Истоки теории
          </h2>
          <p className="text-sm sm:text-base text-[#8E95A2] mt-3 leading-relaxed">
            Прежде чем погрузиться в математические модели и анализ переписей, важно зафиксировать культурную точку отсчёта. Данная концепция зародилась не в академических институтах, а в уникальной среде контркультурного интернет-фольклора начала 2010-х годов.
          </p>
        </div>

        {/* 4 Concise Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Item 1: Абдуловера */}
          <div className="p-6 bg-[#191D23] border border-[#C5A46D]/15 rounded-lg hover:border-[#C5A46D]/40 transition-colors">
            <div className="w-10 h-10 rounded bg-[#101216] border border-[#C5A46D]/20 flex items-center justify-center text-[#C5A46D] mb-4">
              <Flame className="w-5 h-5 text-[#B83A3A]" />
            </div>
            <div className="text-xs font-telemetry uppercase tracking-wider text-[#C5A46D] mb-1">
              Культурный феномен
            </div>
            <h3 className="text-lg font-serif font-semibold text-[#E8E6DF] mb-2">
              Абдуловера
            </h3>
            <p className="text-xs text-[#8E95A2] leading-relaxed">
              Сатирическая пародийная субкультура и интернет-религия Рунета (2010–2015 гг.), созданная как гротескный протест против ханжества, коррупции медиаперсон и пороков ранней блогосферы.
            </p>
          </div>

          {/* Item 2: Абдуль */}
          <div className="p-6 bg-[#191D23] border border-[#C5A46D]/15 rounded-lg hover:border-[#C5A46D]/40 transition-colors">
            <div className="w-10 h-10 rounded bg-[#101216] border border-[#C5A46D]/20 flex items-center justify-center text-[#C5A46D] mb-4">
              <User className="w-5 h-5 text-[#C5A46D]" />
            </div>
            <div className="text-xs font-telemetry uppercase tracking-wider text-[#C5A46D] mb-1">
              Автор гипотезы
            </div>
            <h3 className="text-lg font-serif font-semibold text-[#E8E6DF] mb-2">
              Абдуль
            </h3>
            <p className="text-xs text-[#8E95A2] leading-relaxed">
              Анонимный публицист и стример, выступавший от лица пророка. Обладал характерной манерой подачи: едкой иронией, недоверием к авторитетам и бескомпромиссным препарированием официальных нарративов.
            </p>
          </div>

          {/* Item 3: Биборан */}
          <div className="p-6 bg-[#191D23] border border-[#C5A46D]/15 rounded-lg hover:border-[#C5A46D]/40 transition-colors">
            <div className="w-10 h-10 rounded bg-[#101216] border border-[#C5A46D]/20 flex items-center justify-center text-[#C5A46D] mb-4">
              <BookOpen className="w-5 h-5 text-[#B83A3A]" />
            </div>
            <div className="text-xs font-telemetry uppercase tracking-wider text-[#C5A46D] mb-1">
              Текстовый памятник
            </div>
            <h3 className="text-lg font-serif font-semibold text-[#E8E6DF] mb-2">
              Биборан
            </h3>
            <p className="text-xs text-[#8E95A2] leading-relaxed">
              Священное писание движения — сборник текстовых и аудио-проповедей, сочетающих социальную сатиру, притчи, критику фальши и рассуждения об устройстве общества и мирового порядка.
            </p>
          </div>

          {/* Item 4: Связь с теорией */}
          <div className="p-6 bg-[#191D23] border border-[#B83A3A]/30 rounded-lg bg-gradient-to-b from-[#191D23] to-[#1d1719]">
            <div className="w-10 h-10 rounded bg-[#101216] border border-[#B83A3A]/30 flex items-center justify-center text-[#B83A3A] mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xs font-telemetry uppercase tracking-wider text-[#B83A3A] mb-1">
              Ключевая идея
            </div>
            <h3 className="text-lg font-serif font-semibold text-[#E8E6DF] mb-2">
              Связь с теорией
            </h3>
            <p className="text-xs text-[#8E95A2] leading-relaxed">
              В видео-лекциях и фрагментах Биборана Абдуль провозгласил: человечество обмануто масштабом собственного вида. Миллиарды людей — это выдумка статистиков для оправдания искусственного дефицита и контроля.
            </p>
          </div>
        </div>

        {/* Transition callout */}
        <div className="p-6 bg-[#101216] border border-[#C5A46D]/20 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-telemetry uppercase tracking-widest text-[#B83A3A] mb-1">
              ОГРАНИЧЕНИЕ ПРЕДМЕТА ИССЛЕДОВАНИЯ
            </div>
            <p className="text-xs sm:text-sm text-[#E8E6DF]/90 font-serif leading-relaxed">
              Настоящий исследовательский портал сознательно абстрагируется от религиозных культовых практик и конфликтов блогосферы. Наша цель — строго и подробно исследовать саму **теорию завышенной численности**, её математические, логические и наблюдаемые аргументы.
            </p>
          </div>
          <button
            onClick={onContinueToTheory}
            className="px-5 py-2.5 text-xs font-medium tracking-wider uppercase text-[#101216] bg-[#C5A46D] hover:bg-[#d6b780] rounded transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2 shrink-0 font-sans"
          >
            <span>Перейти к расследованию</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
