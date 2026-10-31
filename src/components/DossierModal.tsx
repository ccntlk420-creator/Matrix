import React from 'react';
import { X, Shield, Clock, FileText, CheckCircle, ExternalLink, Printer } from 'lucide-react';
import { EvidenceDossier } from '../types';

interface DossierModalProps {
  dossier: EvidenceDossier | null;
  onClose: () => void;
}

export const DossierModal: React.FC<DossierModalProps> = ({ dossier, onClose }) => {
  if (!dossier) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="bg-[#14171D] border border-[#C5A46D]/40 rounded-lg max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top classified banner */}
        <div className="px-6 py-3 bg-[#191D23] border-b border-[#C5A46D]/20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs font-telemetry">
            <span className="text-[#B83A3A] font-bold tracking-widest uppercase">
              {dossier.classificationLevel}
            </span>
            <span aria-hidden="true" className="text-[#8E95A2]/40">·</span>
            <span className="text-[#C5A46D] uppercase">{dossier.code}</span>
            <span aria-hidden="true" className="text-[#8E95A2]/40">·</span>
            <span className="text-[#8E95A2] uppercase">{dossier.dateAdded}</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#8E95A2] hover:text-[#E8E6DF] transition-colors p-1 cursor-pointer"
            aria-label="Закрыть досье"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable document body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Header */}
          <div>
            <div className="text-xs font-telemetry uppercase tracking-wider text-[#C5A46D] mb-1">
              СТАТУС ИССЛЕДОВАНИЯ: {dossier.status}
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#E8E6DF] font-bold leading-tight">
              {dossier.title}
            </h3>
            <p className="text-xs text-[#8E95A2] mt-2 font-telemetry">
              ИСТОЧНИК: {dossier.source}
            </p>
          </div>

          {/* Dossier Document Stamp Visual */}
          <div className="p-4 bg-[#101216] border border-[#B83A3A]/30 rounded relative overflow-hidden">
            <div className="text-[10px] font-telemetry uppercase tracking-widest text-[#B83A3A] mb-1">
              РЕЗЮМЕ ОПЕРАТИВНОЙ ЗАПИСКИ
            </div>
            <p className="text-sm font-serif text-[#E8E6DF] leading-relaxed">
              {dossier.summary}
            </p>
          </div>

          {/* Key Forensic Metrics */}
          {dossier.keyMetrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {dossier.keyMetrics.map((m, i) => (
                <div key={i} className="p-3 bg-[#191D23] border border-[#C5A46D]/15 rounded">
                  <div className="text-[10px] font-telemetry uppercase text-[#8E95A2] mb-1">
                    {m.label}
                  </div>
                  <div className="text-lg font-serif text-[#C5A46D] font-bold">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Full Analytical Investigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-telemetry uppercase tracking-wider text-[#C5A46D]">
              ПОЛНЫЙ РАЗБОР АНОМАЛИИ:
            </h4>
            <p className="text-sm sm:text-base font-serif text-[#E8E6DF]/90 leading-relaxed text-justify">
              {dossier.fullAnalysis}
            </p>
          </div>

          {/* Primary Quote from Original Video / Biboran */}
          {dossier.quote && (
            <div className="p-5 bg-[#191D23] border-l-2 border-[#C5A46D] rounded-r">
              <div className="flex items-center gap-2 text-xs font-telemetry text-[#C5A46D] mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>ТАЙМКОД: [{dossier.timestamp || '00:00'}]</span>
                <span aria-hidden="true">·</span>
                <span>{dossier.quoteSource}</span>
              </div>
              <blockquote className="text-sm sm:text-base font-serif italic text-[#E8E6DF]">
                {dossier.quote}
              </blockquote>
            </div>
          )}

          {/* Security stamp footer */}
          <div className="pt-4 border-t border-[#C5A46D]/20 flex flex-wrap items-center justify-between text-xs text-[#8E95A2] font-telemetry">
            <div>АРХИВНЫЙ ИНДЕКС: {dossier.id.toUpperCase()}</div>
            <div className="text-[#B83A3A]">КОПИРОВАНИЕ РАЗРЕШЕНО В ИССЛЕДОВАТЕЛЬСКИХ ЦЕЛЯХ</div>
          </div>
        </div>

        {/* Modal footer */}
        <div className="px-6 py-4 bg-[#191D23] border-t border-[#C5A46D]/20 flex items-center justify-end gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 text-xs font-telemetry uppercase tracking-wider text-[#E8E6DF] bg-[#101216] border border-[#C5A46D]/30 hover:border-[#C5A46D] rounded transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Печать досье</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-telemetry uppercase tracking-wider text-white bg-[#B83A3A] hover:bg-[#9a2c2c] rounded transition-colors cursor-pointer"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
