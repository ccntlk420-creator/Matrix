import React, { useState } from 'react';
import { ShieldAlert, Check, Copy, Share2, Compass, ArrowUp } from 'lucide-react';

interface FinaleSectionProps {
  onScrollToTop: () => void;
}

export const FinaleSection: React.FC<FinaleSectionProps> = ({ onScrollToTop }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyManifesto = () => {
    navigator.clipboard.writeText(
      '«Возможно, самый большой обман в истории человечества — это количество самих людей». Биборан: Расследование продолжается.'
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-28 bg-gradient-to-b from-[#14171D] via-[#101216] to-[#0A0B0E] border-t border-[#C5A46D]/20 relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B83A3A]/30 via-transparent to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        {/* Dossier stamp */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-[#191D23] border border-[#B83A3A]/40 text-xs font-telemetry tracking-widest text-[#B83A3A] uppercase">
          <ShieldAlert className="w-3.5 h-3.5 text-[#B83A3A]" />
          <span>ФИНАЛЬНЫЙ ВЫВОД ИССЛЕДОВАТЕЛЬСКОЙ ГРУППЫ</span>
        </div>

        {/* Big Finale Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-monument uppercase tracking-tight text-[#E8E6DF] font-bold">
          А ЕСЛИ БИБОРАН ПРАВ?
        </h2>

        {/* The Golden Core Quote */}
        <blockquote className="max-w-3xl mx-auto text-xl sm:text-3xl lg:text-4xl font-serif italic text-[#C5A46D] leading-snug">
          «Возможно, самый большой обман в истории человечества — это количество самих людей».
        </blockquote>

        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C5A46D]/60 to-transparent mx-auto my-6" />

        {/* Ongoing investigation lead */}
        <p className="text-base sm:text-xl font-telemetry tracking-widest uppercase text-[#E8E6DF]/80">
          РАССЛЕДОВАНИЕ ПРОДОЛЖАЕТСЯ.
        </p>

        <p className="text-xs sm:text-sm text-[#8E95A2] max-w-xl mx-auto leading-relaxed">
          Пока официальные институты продолжают экстраполировать виртуальные коэффициенты, каждый думающий наблюдатель может выйти на улицу своего города, взглянуть на бесконечные просторы за его чертой и задать себе простой вопрос: где они все?
        </p>

        {/* Actions */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleCopyManifesto}
            className="px-5 py-3 text-xs font-telemetry uppercase tracking-wider text-[#E8E6DF] bg-[#191D23] border border-[#C5A46D]/30 hover:border-[#C5A46D] rounded transition-colors flex items-center gap-2 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#C5A46D]" />}
            <span>{copied ? 'Тезис скопирован в буфер' : 'Скопировать ключевой тезис'}</span>
          </button>
          <button
            onClick={onScrollToTop}
            className="px-5 py-3 text-xs font-telemetry uppercase tracking-wider text-white bg-[#B83A3A] hover:bg-[#9c2929] rounded transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>К началу расследования</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
