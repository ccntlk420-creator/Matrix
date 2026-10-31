import React from 'react';
import { ShieldAlert, FileText, BarChart2, Video, Archive, Compass } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onNavigate: (sectionId: string) => void;
  onOpenQuickDossier: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate, onOpenQuickDossier }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#101216]/95 backdrop-blur-md border-b border-[#C5A46D]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <button
          onClick={() => onNavigate('hero')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-monument text-lg sm:text-xl font-bold tracking-wider text-[#E8E6DF] group-hover:text-[#C5A46D] transition-colors whitespace-nowrap shrink-0">
            БИБОРАН
          </span>
          <span className="hidden sm:inline-block ml-3 text-xs tracking-widest text-[#B83A3A] font-telemetry uppercase">
            ДОСЬЕ № 001
          </span>
        </button>

        {/* Zone 2: Navigation Links (Single-line text) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-medium tracking-wider uppercase text-[#8E95A2]">
          <button
            onClick={() => onNavigate('origins')}
            className={`transition-colors whitespace-nowrap hover:text-[#E8E6DF] ${
              activeTab === 'origins' ? 'text-[#C5A46D] underline underline-offset-8' : ''
            }`}
          >
            Истоки
          </button>
          <button
            onClick={() => onNavigate('theory')}
            className={`transition-colors whitespace-nowrap hover:text-[#E8E6DF] ${
              activeTab === 'theory' ? 'text-[#C5A46D] underline underline-offset-8' : ''
            }`}
          >
            Теория
          </button>
          <button
            onClick={() => onNavigate('evidence')}
            className={`transition-colors whitespace-nowrap hover:text-[#E8E6DF] ${
              activeTab === 'evidence' ? 'text-[#C5A46D] underline underline-offset-8' : ''
            }`}
          >
            Доказательства
          </button>
          <button
            onClick={() => onNavigate('math-model')}
            className={`transition-colors whitespace-nowrap hover:text-[#E8E6DF] ${
              activeTab === 'math-model' ? 'text-[#C5A46D] underline underline-offset-8' : ''
            }`}
          >
            Матмодель
          </button>
          <button
            onClick={() => onNavigate('video')}
            className={`transition-colors whitespace-nowrap hover:text-[#E8E6DF] ${
              activeTab === 'video' ? 'text-[#C5A46D] underline underline-offset-8' : ''
            }`}
          >
            Видеоархив
          </button>
          <button
            onClick={() => onNavigate('archive')}
            className={`transition-colors whitespace-nowrap hover:text-[#E8E6DF] ${
              activeTab === 'archive' ? 'text-[#C5A46D] underline underline-offset-8' : ''
            }`}
          >
            Архив документов
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenQuickDossier}
            className="px-4 py-2 text-xs font-medium tracking-wider uppercase text-[#E8E6DF] bg-[#191D23] border border-[#B83A3A]/40 rounded hover:border-[#B83A3A] hover:bg-[#B83A3A]/10 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#B83A3A]" />
            <span>Главное досье</span>
          </button>
        </div>
      </div>
      
      {/* Mobile sub-bar */}
      <div className="md:hidden flex items-center justify-around py-2 px-2 border-t border-[#C5A46D]/10 bg-[#14171D] text-[10px] uppercase font-telemetry tracking-wider text-[#8E95A2] overflow-x-auto">
        <button onClick={() => onNavigate('theory')} className="px-2 py-1 whitespace-nowrap hover:text-[#E8E6DF]">Теория</button>
        <button onClick={() => onNavigate('evidence')} className="px-2 py-1 whitespace-nowrap hover:text-[#E8E6DF]">Улики</button>
        <button onClick={() => onNavigate('math-model')} className="px-2 py-1 whitespace-nowrap hover:text-[#E8E6DF]">Матмодель</button>
        <button onClick={() => onNavigate('video')} className="px-2 py-1 whitespace-nowrap hover:text-[#E8E6DF]">Видео</button>
        <button onClick={() => onNavigate('archive')} className="px-2 py-1 whitespace-nowrap hover:text-[#E8E6DF]">Архив</button>
      </div>
    </header>
  );
};
