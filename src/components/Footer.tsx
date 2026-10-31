import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D0E12] border-t border-[#C5A46D]/15 py-12 text-[#8E95A2] text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#C5A46D]/10">
          <div>
            <span className="font-monument text-lg font-bold text-[#E8E6DF] tracking-wider block">
              БИБОРАН
            </span>
            <span className="text-xs font-telemetry text-[#C5A46D]">
              ТЕОРИЯ ЗАВЫШЕННОЙ ЧИСЛЕННОСТИ // НАУЧНО-ИССЛЕДОВАТЕЛЬСКИЙ АРХИВ
            </span>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-telemetry uppercase text-[#8E95A2]">
            <span>АРХИВ № 001</span>
            <span>КЛАСС: DECLASS-01</span>
            <span>РЕВИЗИЯ МАТЕРИАЛОВ: 2026</span>
          </div>
        </div>

        {/* Legal & Historical Disclaimer */}
        <div className="text-[11px] text-[#8E95A2]/80 leading-relaxed max-w-4xl space-y-2">
          <p>
            <strong>ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ:</strong> Настоящий веб-ресурс представляет собой художественно-интерактивное конспирологическое и социокультурное расследование, исследующее гипотезу Биборана о завышенной численности населения планеты Земля как феномен интернет-фольклора и сатиры начала XXI века.
          </p>
          <p>
            Материалы сайта не являются официальным академическим опровержением данных Отдела народонаселения ООН (UN DESA) или Росстата. Все упомянутые образы культа Абдуловеры приведены строго в ознакомительных культурно-исторических целях.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-[11px] font-telemetry text-[#8E95A2]/60">
          <div>© БИБОРАН ИССЛЕДОВАТЕЛЬСКИЙ АРХИВ. ВСЕ ПРАВА НА МЫШЛЕНИЕ ПРИНАДЛЕЖАТ ВАМ.</div>
          <div className="text-[#C5A46D]">VERITAS VOS LIBERABIT</div>
        </div>
      </div>
    </footer>
  );
};
