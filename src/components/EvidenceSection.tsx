import React, { useState } from 'react';
import { Search, Filter, ShieldCheck, FileText, Clock, ExternalLink } from 'lucide-react';
import { EVIDENCE_DOSSIERS } from '../data/dossiers';
import { EvidenceDossier } from '../types';

interface EvidenceSectionProps {
  onSelectDossier: (dossier: EvidenceDossier) => void;
}

export const EvidenceSection: React.FC<EvidenceSectionProps> = ({ onSelectDossier }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Все досье' },
    { id: 'demography', label: 'Демография' },
    { id: 'statistics', label: 'Статистика' },
    { id: 'history', label: 'История' },
    { id: 'crowds', label: 'Массовка' },
    { id: 'npc', label: 'NPC' },
    { id: 'documents', label: 'Документы' },
  ];

  const filteredDossiers = EVIDENCE_DOSSIERS.filter((d) => {
    const matchesCategory = selectedCategory === 'all' || d.category === selectedCategory;
    const matchesQuery =
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.source.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="evidence" className="py-20 bg-[#14171D] border-t border-[#C5A46D]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-telemetry tracking-widest text-[#C5A46D] uppercase mb-2">
              <span>РАЗДЕЛ VI // РАССЕКРЕЧЕННЫЕ МАТЕРИАЛЫ</span>
              <span aria-hidden="true" className="text-[#8E95A2]/40">·</span>
              <span className="text-[#B83A3A]">АРХИВ УЛИК</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#E8E6DF] font-semibold tracking-tight">
              База доказательств
            </h2>
            <p className="text-sm text-[#8E95A2] mt-2 max-w-2xl leading-relaxed">
              Картотека аналитических досье: от сорванных переписей в развивающихся странах до хронометража видеовыступлений и аномалий продовольственного баланса.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#8E95A2] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Поиск по номеру, теме, источнику..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#101216] border border-[#C5A46D]/20 rounded text-xs text-[#E8E6DF] placeholder-[#8E95A2]/60 focus:outline-none focus:border-[#C5A46D] transition-colors"
            />
          </div>
        </div>

        {/* Category Filters (Segmented Buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-[#101216] border border-[#C5A46D]/15 rounded-lg">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase rounded transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#C5A46D] text-[#101216] font-semibold shadow-sm'
                    : 'text-[#8E95A2] hover:text-[#E8E6DF] hover:bg-[#191D23]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dossiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDossiers.length === 0 ? (
            <div className="col-span-full p-12 text-center text-[#8E95A2] font-telemetry text-xs">
              ПО ВАШЕМУ ЗАПРОСУ ДОСЬЕ НЕ ОБНАРУЖЕНО
            </div>
          ) : (
            filteredDossiers.map((dossier) => (
              <div
                key={dossier.id}
                onClick={() => onSelectDossier(dossier)}
                className="group p-6 bg-[#191D23] border border-[#C5A46D]/15 hover:border-[#C5A46D]/60 rounded-lg flex flex-col justify-between transition-all duration-200 cursor-pointer shadow-sm hover:shadow-lg"
              >
                <div>
                  {/* Top card metadata */}
                  <div className="flex items-center justify-between text-[11px] font-telemetry mb-3">
                    <span className="text-[#C5A46D] font-bold">{dossier.code}</span>
                    <span className="text-[#B83A3A] tracking-wider uppercase text-[10px]">
                      {dossier.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-semibold text-[#E8E6DF] group-hover:text-[#C5A46D] transition-colors leading-snug mb-3">
                    {dossier.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-[#8E95A2] leading-relaxed mb-4 line-clamp-3">
                    {dossier.summary}
                  </p>

                  {/* Quote teaser if available */}
                  {dossier.quote && (
                    <div className="p-3 bg-[#101216] border-l border-[#C5A46D]/40 rounded-r text-[11px] font-serif italic text-[#E8E6DF]/80 mb-4 line-clamp-2">
                      {dossier.quote}
                    </div>
                  )}
                </div>

                {/* Footer info */}
                <div className="pt-4 border-t border-[#C5A46D]/10 flex items-center justify-between text-[11px] font-telemetry text-[#8E95A2]">
                  <div className="flex items-center gap-1.5">
                    {dossier.timestamp && (
                      <span className="text-[#C5A46D]">[{dossier.timestamp}]</span>
                    )}
                    <span className="truncate max-w-[140px]">{dossier.dateAdded}</span>
                  </div>
                  <span className="text-[#E8E6DF] group-hover:text-[#C5A46D] flex items-center gap-1 transition-colors">
                    <span>Открыть</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
