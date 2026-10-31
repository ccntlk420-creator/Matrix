import React, { useState, useEffect } from 'react';
import {
  Folder,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Maximize2,
  Minimize2,
  FileText,
  Sliders,
  Play,
  Share2,
  Printer,
  Sparkles,
  HelpCircle,
  ExternalLink,
  Layers,
  Check,
  ZoomIn,
  X
} from 'lucide-react';
import { PRESENTATION_SLIDES, PresentationSlide } from '../data/presentationSlides';
import { ORIGINAL_VIDEO } from '../data/videoData';

export type PresentationTheme = 'archival-manila' | 'dark-terminal' | 'minimal-editorial';

interface ArchivalPresentationProps {
  onOpenVideoModal?: () => void;
  onOpenArchiveVault?: () => void;
}

export const ArchivalPresentation: React.FC<ArchivalPresentationProps> = ({
  onOpenVideoModal,
  onOpenArchiveVault
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [theme, setTheme] = useState<PresentationTheme>('archival-manila');
  const [revealAllRedactions, setRevealAllRedactions] = useState<boolean>(false);
  const [individualReveals, setIndividualReveals] = useState<Record<string, boolean>>({});
  const [isOverviewOpen, setIsOverviewOpen] = useState<boolean>(false);
  const [customFalsification, setCustomFalsification] = useState<number>(65);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [enlargedImage, setEnlargedImage] = useState<{ url: string; title: string; subtitle?: string } | null>(null);

  const slide = PRESENTATION_SLIDES[currentSlideIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlideIndex((prev) => (prev < PRESENTATION_SLIDES.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === 'Escape') {
        setIsOverviewOpen(false);
        setEnlargedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Synchronize document dark class with current theme
  useEffect(() => {
    if (theme === 'dark-terminal') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleRedact = (id: string) => {
    setIndividualReveals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const nextSlide = () => {
    if (currentSlideIndex < PRESENTATION_SLIDES.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Dynamic calculation for slide 7
  const liveCalculatedPopulation = 
    customFalsification >= 100 
      ? '6 млн чел.' 
      : customFalsification >= 99 
        ? '6 млн (0.006 млрд)' 
        : `${(8.18 * (1 - (customFalsification * 0.88) / 100)).toFixed(2)} млрд`;

  const livePhantomPopulation = 
    customFalsification >= 99 
      ? '8.174 млрд' 
      : `${(8.18 - parseFloat((8.18 * (1 - (customFalsification * 0.88) / 100)).toFixed(2))).toFixed(2)} млрд`;

  // Theme styling configurations
  const themeStyles = {
    'archival-manila': {
      canvasBg: 'bg-graph-paper text-[#1C1917]',
      headerBg: 'bg-[#EDE7DC] border-b border-[#D8CEBF]',
      headerText: 'text-[#1C1917]',
      ribbonBg: 'bg-[#1C1F26] text-[#A0A6B2]',
      ribbonBorder: 'border-b border-[#14171D]',
      cardBg: 'bg-[#FAF7F2] border-[#D8CEBF] text-[#1C1917]',
      cardDivider: 'border-[#E5DDD0]',
      cardLabel: 'text-[#7A756D]',
      headlineColor: 'text-[#1C1917]',
      outlineColor: 'text-[#1C1917]',
      tabBg: 'bg-[#E5D7B7] text-[#1C1917] border-[#C5A46D]',
      badgeBorder: 'border-[#B83A3A] text-[#B83A3A]',
      stampClass: 'stamp-verified',
      censorClass: 'bg-[#1C1917] text-transparent hover:bg-[#B83A3A] hover:text-white',
      censorRevealed: 'bg-[#B83A3A]/15 text-[#B83A3A] font-medium'
    },
    'dark-terminal': {
      canvasBg: 'bg-graph-paper-dark text-[#E8E6DF]',
      headerBg: 'bg-[#14171D] border-b border-[#C5A46D]/20',
      headerText: 'text-[#E8E6DF]',
      ribbonBg: 'bg-[#0D0E12] text-[#8E95A2]',
      ribbonBorder: 'border-b border-[#252B35]',
      cardBg: 'bg-[#191D23] border-[#C5A46D]/25 text-[#E8E6DF]',
      cardDivider: 'border-[#252B35]',
      cardLabel: 'text-[#8E95A2]',
      headlineColor: 'text-[#E8E6DF]',
      outlineColor: 'text-[#C5A46D]',
      tabBg: 'bg-[#C5A46D] text-[#101216] border-[#C5A46D]',
      badgeBorder: 'border-[#B83A3A] text-[#B83A3A]',
      stampClass: 'stamp-verified',
      censorClass: 'bg-[#252B35] text-transparent hover:bg-[#B83A3A] hover:text-white',
      censorRevealed: 'bg-[#B83A3A]/25 text-[#B83A3A] font-medium'
    },
    'minimal-editorial': {
      canvasBg: 'bg-graph-paper-minimal text-[#111827]',
      headerBg: 'bg-[#FFFFFF] border-b border-[#E5E7EB]',
      headerText: 'text-[#111827]',
      ribbonBg: 'bg-[#F9FAFB] text-[#6B7280] border-t border-[#E5E7EB]',
      ribbonBorder: 'border-b border-[#E5E7EB]',
      cardBg: 'bg-[#FFFFFF] border-[#E5E7EB] text-[#111827] shadow-sm',
      cardDivider: 'border-[#F3F4F6]',
      cardLabel: 'text-[#9CA3AF]',
      headlineColor: 'text-[#111827]',
      outlineColor: 'text-[#111827]',
      tabBg: 'bg-[#111827] text-white border-[#111827]',
      badgeBorder: 'border-[#111827] text-[#111827]',
      stampClass: 'border-2 border-[#111827] text-[#111827] font-mono font-bold uppercase px-2 py-0.5 rounded -rotate-2 inline-block text-xs',
      censorClass: 'bg-[#111827] text-transparent hover:bg-neutral-800 hover:text-white',
      censorRevealed: 'bg-neutral-200 text-neutral-900 font-medium'
    }
  }[theme];

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 relative select-none ${themeStyles.canvasBg}`}>
      {/* 1. TOP HEADER (Exact recreation of the reference screenshot top bar) */}
      <header className={`px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 relative z-20 ${themeStyles.headerBg}`}>
        {/* Left: Dossier Logo Lockup */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-sm border border-current flex items-center justify-center text-[10px] font-mono">
              ▦
            </span>
            <span className="font-mono text-sm sm:text-base font-bold tracking-widest uppercase">
              DOSSIER
            </span>
          </div>
          <span className="hidden md:inline-block text-xs font-mono opacity-50">
            · БИБОРАН
          </span>
        </div>

        {/* Center: File metadata */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono opacity-70 tracking-wider uppercase">
          <span>NO. 001</span>
          <span aria-hidden="true">—</span>
          <span>EST. Q3 2012 / REV. 2026</span>
        </div>

        {/* Right: Actions & Style Switcher */}
        <div className="flex items-center gap-3">
          {/* Style Selector Dropdown */}
          <div className="flex items-center gap-1 p-1 bg-black/5 dark:bg-white/5 rounded border border-current/15 text-xs font-mono">
            <span className="hidden lg:inline text-[11px] px-2 opacity-60">СТИЛЬ:</span>
            <button
              onClick={() => setTheme('archival-manila')}
              className={`px-2 py-1 rounded transition-colors text-[11px] font-semibold uppercase cursor-pointer ${
                theme === 'archival-manila'
                  ? 'bg-[#B83A3A] text-white shadow-xs'
                  : 'opacity-70 hover:opacity-100'
              }`}
              title="Архивное досье (как на референсе: бежевая миллиметровка)"
            >
              Архив (Референс)
            </button>
            <button
              onClick={() => setTheme('dark-terminal')}
              className={`px-2 py-1 rounded transition-colors text-[11px] font-semibold uppercase cursor-pointer ${
                theme === 'dark-terminal'
                  ? 'bg-[#B83A3A] text-white shadow-xs'
                  : 'opacity-70 hover:opacity-100'
              }`}
              title="Тёмный штабной терминал"
            >
              Тёмный
            </button>
            <button
              onClick={() => setTheme('minimal-editorial')}
              className={`px-2 py-1 rounded transition-colors text-[11px] font-semibold uppercase cursor-pointer ${
                theme === 'minimal-editorial'
                  ? 'bg-[#111827] text-white shadow-xs'
                  : 'opacity-70 hover:opacity-100'
              }`}
              title="Светлый минимализм"
            >
              Минимал
            </button>
          </div>

          {/* Primary Request Access Button from Reference */}
          <button
            onClick={() => setIsOverviewOpen(true)}
            className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#B83A3A] hover:bg-[#9c2d2d] rounded shadow-xs transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <span>Оглавление (1–{PRESENTATION_SLIDES.length})</span>
          </button>
        </div>
      </header>

      {/* 2. TABMED FOLDER TABS BAR (Sticking out above the dark ribbon) */}
      <div className={`px-4 sm:px-8 pt-2 flex items-center gap-2 overflow-x-auto text-xs font-mono relative z-10 ${themeStyles.headerBg}`}>
        <div className="bg-[#B83A3A] text-white px-4 py-1.5 rounded-t font-semibold uppercase tracking-wider text-[11px] flex items-center gap-2 shadow-xs">
          <span>МАТЕРИАЛЫ РАССЛЕДОВАНИЯ</span>
        </div>
        <button
          onClick={() => setRevealAllRedactions(!revealAllRedactions)}
          className="bg-black/10 dark:bg-white/10 hover:bg-black/15 text-current px-3 py-1.5 rounded-t text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
        >
          {revealAllRedactions ? <EyeOff className="w-3.5 h-3.5 text-[#B83A3A]" /> : <Eye className="w-3.5 h-3.5 text-[#B83A3A]" />}
          <span>{revealAllRedactions ? 'Засекретить текст' : 'Рассекретить все купюры'}</span>
        </button>
        <div className="text-[11px] font-mono opacity-60 ml-auto hidden md:flex items-center gap-3">
          <span>НАВИГАЦИЯ: СТРЕЛКИ ВЛЕВО / ВПРАВО</span>
        </div>
      </div>

      {/* 3. HORIZONTAL DARK TAG RIBBON (from reference) */}
      <div className={`py-2 px-4 sm:px-8 text-[11px] font-mono tracking-widest uppercase flex items-center gap-6 overflow-x-auto whitespace-nowrap ${themeStyles.ribbonBg} ${themeStyles.ribbonBorder}`}>
        <span className="opacity-80">REFERENCE: № 14782</span>
        <span className="text-[#B83A3A] font-bold">DECLASSIFIED</span>
        <span className="opacity-80">FOOTNOTED RESEARCH</span>
        <span className="opacity-50">·</span>
        <span className="opacity-80">DEMOGRAPHY COLD WAR</span>
        <span className="opacity-80">CORPORATE MALFEASANCE</span>
        <span className="opacity-80">SURVEILLANCE / CROWDS</span>
        <span className="opacity-80">CALORIC BALANCES</span>
      </div>

      {/* 4. MAIN PRESENTATION STAGE (The exact layout of the reference image) */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 sm:py-14 relative flex flex-col justify-between">
        
        {/* Manila Exhibit Index Tab sticking out on right margin */}
        <div className="absolute right-0 top-12 hidden lg:flex flex-col items-center">
          <div className={`py-4 px-2 font-mono uppercase text-xs font-bold tracking-widest shadow-md rounded-l border-r-0 ${themeStyles.tabBg} [writing-mode:vertical-rl] rotate-180`}>
            EXHIBIT {slide.exhibitNumber}
          </div>
        </div>

        {/* Content Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start my-auto">
          
          {/* Left Column: Exhibit Tag + Big Bold & Outline Headline + Redacted Text */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Red Bordered Exhibit Tag */}
            <div className="flex items-center justify-between">
              <div className={`px-2.5 py-0.5 text-xs ${slide.useDossierFont ? 'font-dossier' : 'font-mono'} font-bold uppercase tracking-widest border rounded-xs ${themeStyles.badgeBorder}`}>
                EXHIBIT {slide.exhibitNumber}
              </div>
              <div className={`text-xs ${slide.useDossierFont ? 'font-dossier' : 'font-mono'} opacity-60 uppercase tracking-widest`}>
                {slide.categoryTag}
              </div>
            </div>

            {/* Huge Headline Composition */}
            <div className="space-y-1.5">
              {slide.kicker ? (
                <div className={`text-2xl sm:text-3xl ${slide.useDossierFont ? 'font-dossier' : 'font-mono'} font-bold tracking-tight text-[#B83A3A] uppercase`}>
                  {slide.kicker}
                </div>
              ) : null}
              <div className={`text-3xl sm:text-5xl lg:text-6xl ${slide.useDossierFont ? 'font-dossier font-black' : 'font-mono font-black'} tracking-tight uppercase text-[#1C1917] dark:text-[#E8E6DF] leading-tight`}>
                {slide.headlineBold}
              </div>
              {slide.headlineOutline && (
                <div className={`text-3xl sm:text-5xl lg:text-6xl ${slide.useDossierFont ? 'font-dossier font-black' : 'font-mono font-black'} tracking-tight text-[#B83A3A] dark:text-[#E63946] uppercase break-words leading-tight drop-shadow-xs`}>
                  {slide.headlineOutline}
                </div>
              )}
            </div>

            {/* Redacted Lead Paragraph with Interactive Censor Bars */}
            <div className={`text-base sm:text-xl leading-relaxed pt-3 text-left whitespace-pre-line text-[#1C1917] dark:text-[#E8E6DF] ${
              slide.useDossierFont ? 'font-dossier tracking-tight' : 'font-serif'
            }`}>
              {slide.leadSegments.map((segment, idx) => {
                const segId = `${slide.id}-${idx}`;
                const isRevealed = revealAllRedactions || individualReveals[segId];
                if (!segment.isRedacted) {
                  return <span key={idx}>{segment.text}</span>;
                }
                return (
                  <span
                    key={idx}
                    onClick={() => toggleRedact(segId)}
                    title="Нажмите, чтобы рассекретить / засекретить"
                    className={`inline-block mx-1 px-1.5 py-0.5 rounded-xs transition-all duration-200 cursor-pointer text-sm sm:text-lg ${slide.useDossierFont ? 'font-dossier font-bold' : 'font-mono'} ${
                      isRevealed ? themeStyles.censorRevealed : themeStyles.censorClass
                    }`}
                  >
                    {segment.text}
                  </span>
                );
              })}
            </div>

            {/* Canonical Audio Wiretap / Direct Speech Quote */}
            {slide.quote && (
              <div className="mt-5 p-4 sm:p-5 rounded-xs bg-[#B83A3A]/10 dark:bg-[#B83A3A]/20 border-l-4 border-[#B83A3A] border-y border-r border-[#B83A3A]/30 relative shadow-sm">
                <div className={`flex items-center justify-between text-[11px] ${slide.useDossierFont ? 'font-dossier' : 'font-mono'} uppercase tracking-widest text-[#B83A3A] font-bold pb-2.5 border-b border-[#B83A3A]/25 mb-3`}>
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B83A3A] animate-pulse inline-block" />
                    <span>{slide.quote.note || 'РАСШИФРОВКА АУДИОЗАПИСИ АБДУЛЯ // ПРЯМАЯ РЕЧЬ'}</span>
                  </span>
                  <span className="text-[10px] bg-[#B83A3A] text-white px-2 py-0.5 rounded-xs font-bold">
                    ЦИТАТА ИЗ ВИДЕО
                  </span>
                </div>
                <blockquote className={`${slide.useDossierFont ? 'font-dossier' : 'font-mono'} text-xs sm:text-sm md:text-[15px] font-bold leading-relaxed tracking-wide whitespace-pre-line text-[#111827] dark:text-[#F3F4F6]`}>
                  «{slide.quote.text}»
                </blockquote>
                {slide.quote.author && (
                  <div className={`mt-3 text-right text-[11px] ${slide.useDossierFont ? 'font-dossier' : 'font-mono'} text-[#4B5563] dark:text-[#9CA3AF] font-semibold uppercase pt-2 border-t border-[#B83A3A]/20`}>
                    — {slide.quote.author}
                  </div>
                )}
              </div>
            )}

            {/* Footnote attribution */}
            {slide.footnote && (
              <div className="text-xs font-mono opacity-60 pt-4 border-t border-current/10">
                {slide.footnote}
              </div>
            )}

            {/* Slide 7: Visual Comparison Showcase (Rally 500k vs Google Street View) */}
            {slide.comparisonBlock && (
              <div className={`p-4 sm:p-5 rounded border ${themeStyles.cardBg} space-y-4 mt-6 shadow-sm`}>
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-current/15 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B83A3A] animate-pulse inline-block" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#B83A3A]">
                      {slide.comparisonBlock.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#B83A3A] text-white px-2 py-0.5 rounded-xs uppercase">
                    {slide.comparisonBlock.badge}
                  </span>
                </div>

                {/* 2-column large photo comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Item 1: Rally Photo */}
                  <div className="p-3 bg-black/5 dark:bg-white/5 rounded border border-current/10 space-y-2.5 group">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="font-bold text-[#B83A3A] uppercase">{slide.comparisonBlock.item1.label}</span>
                      <span className="px-1.5 py-0.2 rounded-xs bg-[#B83A3A] text-white font-bold">{slide.comparisonBlock.item1.stamp}</span>
                    </div>

                    <div 
                      onClick={() => setEnlargedImage({
                        url: slide.comparisonBlock!.item1.url,
                        title: slide.comparisonBlock!.item1.title,
                        subtitle: slide.comparisonBlock!.item1.subtitle
                      })}
                      className="relative overflow-hidden rounded-xs bg-black/10 border border-current/20 shadow-md cursor-pointer aspect-[16/10] sm:aspect-[4/3] group-hover:scale-[1.01] transition-transform"
                    >
                      {/* Aged cellophane tape top-center */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-amber-200/70 dark:bg-amber-300/30 backdrop-blur-xs border border-amber-400/40 rotate-[1deg] z-10 shadow-xs pointer-events-none" />
                      
                      <img
                        src={slide.comparisonBlock.item1.url}
                        alt={slide.comparisonBlock.item1.title}
                        className="w-full h-full object-cover object-center filter contrast-110"
                        referrerPolicy="no-referrer"
                      />
                      
                      <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono font-bold uppercase gap-1.5 backdrop-blur-[1px]">
                        <ZoomIn className="w-4 h-4" />
                        <span>Клик для увеличения</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-mono font-bold text-[#1C1917] dark:text-[#E8E6DF] uppercase">
                        {slide.comparisonBlock.item1.title}
                      </div>
                      <p className="text-[11px] font-serif leading-snug opacity-80">
                        {slide.comparisonBlock.item1.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Item 2: Google Maps Street View */}
                  <div className="p-3 bg-black/5 dark:bg-white/5 rounded border border-current/10 space-y-2.5 group">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="font-bold text-[#B83A3A] uppercase">{slide.comparisonBlock.item2.label}</span>
                      <span className="px-1.5 py-0.2 rounded-xs bg-[#B83A3A] text-white font-bold">{slide.comparisonBlock.item2.stamp}</span>
                    </div>

                    <div 
                      onClick={() => setEnlargedImage({
                        url: slide.comparisonBlock!.item2.url,
                        title: slide.comparisonBlock!.item2.title,
                        subtitle: slide.comparisonBlock!.item2.subtitle
                      })}
                      className="relative overflow-hidden rounded-xs bg-black/10 border border-current/20 shadow-md cursor-pointer aspect-[16/10] sm:aspect-[4/3] group-hover:scale-[1.01] transition-transform"
                    >
                      {/* Aged cellophane tape top-center */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-amber-200/70 dark:bg-amber-300/30 backdrop-blur-xs border border-amber-400/40 -rotate-[1deg] z-10 shadow-xs pointer-events-none" />
                      
                      <img
                        src={slide.comparisonBlock.item2.url}
                        alt={slide.comparisonBlock.item2.title}
                        className="w-full h-full object-cover object-center filter contrast-105"
                      />
                      
                      <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono font-bold uppercase gap-1.5 backdrop-blur-[1px]">
                        <ZoomIn className="w-4 h-4" />
                        <span>Клик для увеличения</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-mono font-bold text-[#1C1917] dark:text-[#E8E6DF] uppercase">
                        {slide.comparisonBlock.item2.title}
                      </div>
                      <p className="text-[11px] font-serif leading-snug opacity-80">
                        {slide.comparisonBlock.item2.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer comparison takeaway */}
                <div className="pt-2 border-t border-current/10 flex flex-wrap items-center justify-between text-[11px] font-mono opacity-80 gap-2">
                  <span>ФАКТИЧЕСКИЙ ВЫВОД: МАССЫ В 15 МЛН НЕ ОБНАРУЖЕНО</span>
                  <span className="text-[#B83A3A] font-bold">ПОДТВЕРЖДЕНО НАЗЕМНЫМ АУДИТОМ</span>
                </div>
              </div>
            )}

            {/* Slide 5: Visual Salt Grains Calibration Box (1 Million vs 1 Billion) */}
            {slide.saltCalibrationBox && (
              <div className={`p-5 rounded border ${themeStyles.cardBg} space-y-4 mt-6`}>
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-current/10 text-xs font-mono gap-2">
                  <span className="font-bold uppercase tracking-wider text-[#B83A3A] flex items-center gap-1.5">
                    <span>ВИЗУАЛЬНЫЙ ЭТАЛОН: КРУПИНКИ СОЛИ</span>
                  </span>
                  <span className="opacity-60 text-[10px]">БАЗА ООН: 8.32 МЛРД ДУШ</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Million Box: 1L Mason Jar */}
                  <div className="p-3.5 bg-black/5 dark:bg-white/5 rounded border border-current/10 space-y-2.5">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-22 shrink-0 flex items-center justify-center p-1 bg-black/5 dark:bg-white/5 rounded border border-current/15 shadow-xs">
                        <svg viewBox="0 0 60 90" className="w-full h-full text-current" fill="none" stroke="currentColor" strokeWidth="2">
                          {/* Jar lid */}
                          <rect x="18" y="6" width="24" height="6" rx="1.5" className="fill-current/20 stroke-current" />
                          <line x1="15" y1="12" x2="45" y2="12" strokeWidth="2" />
                          {/* Jar neck and body */}
                          <path d="M 17 13 L 13 22 L 9 26 L 9 82 C 9 86, 13 88, 18 88 L 42 88 C 47 88, 51 86, 51 82 L 51 26 L 47 22 L 43 13 Z" className="fill-current/5 stroke-current" />
                          {/* Salt fill */}
                          <path d="M 11 36 L 49 36 L 49 80 C 49 84, 45 86, 41 86 L 19 86 C 15 86, 11 84, 11 80 Z" className="fill-[#C5A46D]/30 stroke-none" />
                          {/* Salt dots */}
                          <circle cx="20" cy="50" r="1.1" className="fill-[#C5A46D]" stroke="none" />
                          <circle cx="28" cy="62" r="1.3" className="fill-[#C5A46D]" stroke="none" />
                          <circle cx="38" cy="54" r="1" className="fill-[#C5A46D]" stroke="none" />
                          <circle cx="42" cy="72" r="1.1" className="fill-[#C5A46D]" stroke="none" />
                          <circle cx="22" cy="76" r="1.2" className="fill-[#C5A46D]" stroke="none" />
                          <circle cx="33" cy="80" r="1" className="fill-[#C5A46D]" stroke="none" />
                          {/* 1L badge */}
                          <rect x="20" y="44" width="20" height="12" rx="1" className="fill-white/90 dark:fill-black/90 stroke-current/40" strokeWidth="0.8" />
                          <text x="30" y="53" textAnchor="middle" className="text-[7.5px] font-mono font-bold fill-current" stroke="none">1 L</text>
                        </svg>
                      </div>
                      <div className="space-y-1 text-left min-w-0">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#C5A46D] font-bold">
                          1 МИЛЛИОН КРУПИНОК
                        </div>
                        <div className="text-lg font-serif font-bold text-[#1C1917] dark:text-[#E8E6DF] leading-tight">
                          Литровая банка
                        </div>
                        <p className="text-xs font-serif opacity-80 leading-snug">
                          Обычная стеклянная банка на 1 литр (~1.2 кг соли). Компактный бытовой предмет.
                        </p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-current/10 flex items-center justify-between text-[10px] font-mono opacity-70">
                      <span>ОБЪЁМ: 1.0 ЛИТР</span>
                      <span>БАЗА: 1x</span>
                    </div>
                  </div>

                  {/* Billion Box: 5 Oil Barrels */}
                  <div className="p-3.5 bg-[#B83A3A]/10 border border-[#B83A3A]/30 rounded space-y-2.5">
                    <div className="space-y-2">
                      <div className="w-full py-1.5 px-2 bg-black/5 dark:bg-black/20 rounded border border-[#B83A3A]/25 flex items-center justify-center">
                        <svg viewBox="0 0 230 75" className="w-full max-w-[270px] h-14 text-[#B83A3A]" fill="none" stroke="currentColor" strokeWidth="1.8">
                          {[0, 1, 2, 3, 4].map((i) => {
                            const x = 8 + i * 44;
                            return (
                              <g key={i} transform={`translate(${x}, 0)`}>
                                {/* Top rim */}
                                <ellipse cx="18" cy="14" rx="16" ry="4.5" className="fill-current/15 stroke-current" />
                                <circle cx="12" cy="13.5" r="1.6" className="fill-current stroke-none" />
                                <circle cx="23" cy="15" r="1" className="fill-current stroke-none" />
                                {/* Cylinder body */}
                                <path d="M 2 14 L 2 62 C 2 66, 9 69, 18 69 C 27 69, 34 66, 34 62 L 34 14" className="fill-current/10 stroke-current" />
                                <ellipse cx="18" cy="62" rx="16" ry="4.5" className="stroke-current fill-none" />
                                {/* Rib rings */}
                                <line x1="2" y1="30" x2="34" y2="30" strokeWidth="2.2" />
                                <line x1="2" y1="46" x2="34" y2="46" strokeWidth="2.2" />
                                {/* Text */}
                                <text x="18" y="40" textAnchor="middle" className="text-[6.5px] font-mono font-black fill-current" stroke="none">200L</text>
                              </g>
                            );
                          })}
                        </svg>
                      </div>
                      <div className="space-y-1 text-left min-w-0">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#B83A3A] font-bold flex items-center justify-between">
                          <span>1 МИЛЛИАРД КРУПИНОК</span>
                          <span className="text-[9px] bg-[#B83A3A] text-white px-1.5 py-0.2 rounded-xs">x1000</span>
                        </div>
                        <div className="text-lg font-serif font-bold text-[#B83A3A] leading-tight">
                          5 нефтяных бочек
                        </div>
                        <p className="text-xs font-serif opacity-80 leading-snug">
                          5 двухсотлитровых стальных бочек. Суммарно ровно 1 000 литров (промышленная тонна соли).
                        </p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-current/10 flex items-center justify-between text-[10px] font-mono text-[#B83A3A] font-semibold">
                      <span>ОБЪЁМ: 1 000 ЛИТРОВ (5 × 200L)</span>
                      <span>РАЗРЫВ: x1000</span>
                    </div>
                  </div>
                </div>

                {/* Salt scale footer */}
                <div className="pt-2 border-t border-current/10 flex flex-wrap items-center justify-between text-[11px] font-mono opacity-85 gap-2">
                  <span>МАСШТАБНЫЙ РАЗРЫВ: <strong>1 банка против 5 стальных бочек</strong></span>
                  <span className="text-[#B83A3A] font-bold">ОФИЦИАЛЬНО (8.32 МЛРД): ~42 БОЧКИ СОЛИ (8 320 Л)</span>
                </div>
              </div>
            )}

            {/* Slide 8: Cemetery Calculation Breakdown */}
            {slide.cemeteryAnalysisBox && (
              <div className={`p-4 sm:p-5 rounded border ${themeStyles.cardBg} space-y-4 mt-6 shadow-sm`}>
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-current/15 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B83A3A] animate-pulse inline-block" />
                    <span className="font-dossier text-xs sm:text-sm font-bold uppercase tracking-wider text-[#B83A3A]">
                      РАСЧЁТНЫЙ ПАРАДОКС: 200 МЛРД ЗАХОРОНЕНИЙ VS РЕАЛЬНОСТЬ
                    </span>
                  </div>
                  <span className="text-[10px] font-dossier font-bold bg-[#B83A3A] text-white px-2 py-0.5 rounded-xs uppercase">
                    ЗЕМЕЛЬНЫЙ АУДИТ
                  </span>
                </div>

                {/* 3 Metrics comparison cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                  {/* Card 1: Official Claim */}
                  <div className="p-3 bg-black/5 dark:bg-white/5 rounded border border-current/10 space-y-1.5">
                    <div className="text-[10px] font-dossier uppercase text-neutral-500 font-bold">
                      ОФИЦИАЛЬНАЯ СТАТИСТИКА
                    </div>
                    <div className="text-xl sm:text-2xl font-dossier font-black text-neutral-900 dark:text-neutral-100">
                      &gt; 200 МЛРД
                    </div>
                    <p className="text-xs font-dossier opacity-80 leading-snug">
                      Якобы жило на Земле за всю историю человека разумного
                    </p>
                  </div>

                  {/* Card 2: Physical Consequence */}
                  <div className="p-3 bg-[#B83A3A]/10 border border-[#B83A3A]/30 rounded space-y-1.5">
                    <div className="text-[10px] font-dossier uppercase text-[#B83A3A] font-bold">
                      ФИЗИЧЕСКИЙ СЛЕД
                    </div>
                    <div className="text-xl sm:text-2xl font-dossier font-black text-[#B83A3A]">
                      2 СЛОЯ ТРУПОВ
                    </div>
                    <p className="text-xs font-dossier opacity-80 leading-snug">
                      Равномерно по всей суше планеты земля
                    </p>
                  </div>

                  {/* Card 3: Moscow Cemetery Scale */}
                  <div className="p-3 bg-amber-500/10 dark:bg-amber-500/20 border border-amber-600/30 rounded space-y-1.5">
                    <div className="text-[10px] font-dossier uppercase text-amber-700 dark:text-amber-300 font-bold">
                      КЛАДБИЩЕ МОСКВЫ
                    </div>
                    <div className="text-xl sm:text-2xl font-dossier font-black text-amber-700 dark:text-amber-300">
                      В 5 РАЗ БОЛЬШЕ
                    </div>
                    <p className="text-xs font-dossier opacity-80 leading-snug">
                      Должно занимать &gt;12 500 км² вокруг столицы!
                    </p>
                  </div>
                </div>

                {/* Reality vs Myth Callout */}
                <div className="p-3 bg-black/5 dark:bg-black/20 rounded border border-dashed border-current/25 space-y-2">
                  <div className="flex items-center justify-between text-xs font-dossier">
                    <span className="font-bold text-[#B83A3A] uppercase">РЕАЛЬНОСТЬ НА МЕСТАХ:</span>
                    <span className="text-[10px] opacity-70">АРХИВ: FORUM.VGD.RU/FILE.PHP?FID=5062</span>
                  </div>
                  <p className="text-xs sm:text-sm font-dossier leading-relaxed">
                    «А у нас в крупных городах кладбища размером в 1м и не растут. Рядом с Москвой должно быть кладбище в 5 раз больше Москвы, но этого нет. <strong className="text-[#B83A3A]">Значит нас наёбывают.</strong>»
                  </p>
                </div>
              </div>
            )}

            {/* Video preview player (Slide 9) */}
            {slide.hasVideoPreview && (
              <div className="pt-4 space-y-3">
                <div className="p-3 bg-[#1C1F26] text-[#E8E6DF] rounded-t border-t border-x border-[#3E4554] flex items-center justify-between font-dossier text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B83A3A] animate-pulse" />
                    <span className="font-bold uppercase tracking-wider text-amber-300">
                      [ДЕЛО № 09: СЕКРЕТНАЯ ВИДЕОПЛЁНКА // YOUTUBE/1TON5W_SNKY]
                    </span>
                  </div>
                  <span className="bg-[#B83A3A] text-white px-2 py-0.5 rounded-xs font-bold text-[10px] tracking-widest uppercase">
                    РАССЕКРЕЧЕНО
                  </span>
                </div>

                <div className="aspect-video w-full rounded-b border border-current/20 overflow-hidden shadow-2xl bg-black relative">
                  {/* Tape strip top-left and top-right */}
                  <div className="absolute top-2 left-3 w-12 h-3.5 bg-amber-200/50 backdrop-blur-xs border border-amber-400/40 -rotate-3 z-10 pointer-events-none shadow-sm" />
                  <div className="absolute top-2 right-3 w-12 h-3.5 bg-amber-200/50 backdrop-blur-xs border border-amber-400/40 rotate-3 z-10 pointer-events-none shadow-sm" />

                  <iframe
                    src={slide.customVideoUrl ? `https://www.youtube-nocookie.com/embed/${slide.customVideoUrl.split('v=')[1]}` : ORIGINAL_VIDEO.embedUrl}
                    title="Видеорасследование Абдуля"
                    className="w-full h-full relative z-0"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>

                <div className="flex flex-wrap justify-between items-center text-xs font-dossier opacity-75 pt-1 gap-2">
                  <span className="flex items-center gap-1.5">
                    <span className="font-bold text-[#B83A3A]">ХРОНОМЕТРАЖ:</span> 3 мин | ШРИФТ: АРХИВНОЕ ДОСЬЕ
                  </span>
                  <a
                    href={slide.customVideoUrl || ORIGINAL_VIDEO.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B83A3A] hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>Смотреть на YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* Slide 10: Interactive Population Slider */}
            {slide.hasInteractiveSlider && (
              <div className={`p-5 rounded border ${themeStyles.cardBg} space-y-4 mt-6`}>
                <div className="flex flex-wrap justify-between items-center gap-2 text-xs font-dossier">
                  <span className="font-bold uppercase">Уровень устранения приписок:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCustomFalsification(0)}
                      className="px-2 py-0.5 text-[10px] uppercase border border-current/20 rounded hover:bg-black/5"
                    >
                      ООН (0%)
                    </button>
                    <button
                      onClick={() => setCustomFalsification(70)}
                      className="px-2 py-0.5 text-[10px] uppercase border border-current/20 rounded hover:bg-black/5"
                    >
                      2.2 млрд
                    </button>
                    <button
                      onClick={() => setCustomFalsification(100)}
                      className="px-2 py-0.5 text-[10px] uppercase border border-[#B83A3A] bg-[#B83A3A] text-white font-bold rounded"
                    >
                      Абдуль: макс. 6 млн
                    </button>
                    <span className="text-[#B83A3A] font-bold text-sm ml-1">{customFalsification}%</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={customFalsification}
                  onChange={(e) => setCustomFalsification(Number(e.target.value))}
                  className="w-full accent-[#B83A3A] cursor-pointer"
                />
                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-current/10 text-xs font-dossier">
                  <div>
                    <span className="opacity-60 block">Реальное население:</span>
                    <span className="text-xl sm:text-2xl font-bold font-dossier text-[#B83A3A]">
                      {liveCalculatedPopulation}
                    </span>
                  </div>
                  <div>
                    <span className="opacity-60 block">Выдуманные души:</span>
                    <span className="text-xl sm:text-2xl font-bold font-dossier opacity-80">
                      {livePhantomPopulation}
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: INVESTIGATION FILE Dossier Index Card (from reference) */}
          <div className="lg:col-span-5 w-full">
            <div className={`p-6 sm:p-8 rounded border shadow-lg relative ${themeStyles.cardBg}`}>
              
              {/* Card Header with Rubber Stamp */}
              <div className="flex items-start justify-between pb-4 border-b border-current/15 mb-6">
                <div>
                  <div className={`text-[11px] font-mono uppercase tracking-widest ${themeStyles.cardLabel}`}>
                    INVESTIGATION FILE
                  </div>
                  <div className="text-xs font-mono font-bold mt-0.5">
                    CASE REF: #{slide.exhibitNumber}-BIB
                  </div>
                </div>

                {/* Rubber Stamp */}
                <div className={themeStyles.stampClass}>
                  {slide.dossierCard.stampType}
                </div>
              </div>

              {/* Exhibit 06 Special Diagram: Cash Flow Heist Schema */}
              {slide.id === 'slide-06' && (
                <div className="mb-6 p-4 bg-black/5 dark:bg-white/5 rounded border border-current/15 space-y-3">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#B83A3A] font-bold flex items-center justify-between pb-2 border-b border-current/10">
                    <span className="flex items-center gap-1.5">
                      <span>МЕХАНИКА ОБЪЁБА НА ДАЛАРЫ</span>
                    </span>
                    <span className="text-[9px] bg-[#B83A3A] text-white px-1.5 py-0.5 rounded-xs font-mono font-bold">
                      СХЕМА МАВРОДИ
                    </span>
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 bg-neutral-900/5 dark:bg-white/5 border border-current/10 rounded flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] opacity-60 uppercase">Официальные отчёты</span>
                        <span className="font-bold text-sm">8.32 МЛРД ЧЕЛОВЕК</span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                        ФИКЦИЯ
                      </span>
                    </div>

                    <div className="text-center text-xs opacity-60 flex items-center justify-center gap-1">
                      <span>↓</span>
                      <span className="text-[10px] uppercase tracking-wider">Списание колоссальных ресурсов</span>
                      <span>↓</span>
                    </div>

                    <div className="p-2.5 bg-[#B83A3A]/10 border border-[#B83A3A]/30 rounded flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] text-[#B83A3A] font-bold uppercase">Мёртвые души (99%)</span>
                        <span className="font-bold text-sm text-[#B83A3A]">8.24 МЛРД НЕСУЩЕСТВУЮЩИХ РТОВ</span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#B83A3A] text-white">
                        РАСПИЛ
                      </span>
                    </div>

                    <div className="text-center text-xs opacity-60 flex items-center justify-center gap-1">
                      <span>↓</span>
                      <span className="text-[10px] uppercase tracking-wider">Искусственный дефицит и цены</span>
                      <span>↓</span>
                    </div>

                    <div className="p-2.5 bg-amber-500/10 dark:bg-amber-500/20 border border-amber-600/30 rounded flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] text-amber-700 dark:text-amber-300 font-bold uppercase">Итог распределения</span>
                        <span className="font-black text-sm text-neutral-900 dark:text-neutral-100">«3 КОПЕЙКИ НА РЫЛО»</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-amber-700 dark:text-amber-300">
                        КУШ ЭЛИТ
                      </span>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono opacity-65 text-center pt-1 border-t border-current/10">
                    «ОНИ ОБЪЁБЫВАТЬ НАС НА ДАЛАРЫ КАК МАВРОДИ БЛЯДЬ...»
                  </div>
                </div>
              )}

              {/* Glued Subject Photographs (Single or Dual) */}
              {(() => {
                const photos = slide.subjectPhotos || (slide.subjectPhoto ? [slide.subjectPhoto] : []);
                if (photos.length === 0) return null;

                if (photos.length === 1) {
                  const photo = photos[0];
                  return (
                    <div className="mb-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 p-3 bg-black/5 dark:bg-white/5 rounded border border-current/10 relative overflow-hidden">
                      {/* Photo container with polaroid / vintage paperclip / tape styling */}
                      <div 
                        onClick={() => setEnlargedImage({ url: photo.url, title: photo.caption })}
                        className="relative shrink-0 rotate-[-1.5deg] shadow-md transition-transform hover:rotate-0 duration-200 cursor-pointer"
                      >
                        {/* Aged cellophane tape top-left */}
                        <div 
                          className="absolute -top-2.5 left-3 w-10 h-3.5 bg-amber-200/60 dark:bg-amber-300/30 backdrop-blur-xs border border-amber-400/40 -rotate-6 z-10 shadow-xs pointer-events-none"
                        />
                        
                        {/* Photo paper mount */}
                        <div className="p-1.5 pb-2.5 bg-[#FAF8F3] dark:bg-[#232730] border border-[#D5CCBC] dark:border-[#3E4554] rounded-xs shadow-xs">
                          <img
                            src={photo.url}
                            alt={photo.caption}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              if (target.src.indexOf('vgd.ru') === -1) {
                                target.src = 'https://forum.vgd.ru/file.php?fid=5062';
                              }
                            }}
                            className="w-24 sm:w-28 h-28 sm:h-32 object-cover object-top filter contrast-110 sepia-[0.15] rounded-xs"
                            referrerPolicy="no-referrer"
                          />
                          <div className={`text-[9px] ${slide.useDossierFont ? 'font-dossier' : 'font-mono'} tracking-tight text-center mt-1 text-[#666] dark:text-[#AAA] uppercase`}>
                            {photo.label || 'EXHIBIT #01-A'}
                          </div>
                        </div>

                        {/* Red corner stamp */}
                        {photo.stampText && (
                          <div className={`absolute -bottom-1.5 -right-1.5 px-1.5 py-0.5 border border-[#B83A3A] text-[#B83A3A] ${slide.useDossierFont ? 'font-dossier' : 'font-mono'} text-[8px] font-black uppercase tracking-wider bg-white/90 dark:bg-[#14171D] rounded-xs rotate-[-8deg] shadow-xs select-none`}>
                            {photo.stampText}
                          </div>
                        )}
                      </div>

                      {/* Caption & case file note beside photo */}
                      <div className="text-left space-y-1.5 my-auto">
                        <div className={`text-[10px] ${slide.useDossierFont ? 'font-dossier' : 'font-mono'} uppercase tracking-wider text-[#B83A3A] font-bold`}>
                          {photo.caption}
                        </div>
                        <p className={`text-xs ${slide.useDossierFont ? 'font-dossier leading-tight' : 'font-serif leading-relaxed'} opacity-80`}>
                          Приобщённая архивная фотокарточка. Вклеена в протокол первичного дознания.
                        </p>
                        <div className={`text-[10px] ${slide.useDossierFont ? 'font-dossier' : 'font-mono'} opacity-50 uppercase pt-1`}>
                          ОТПЕЧАТОК: ПОДЛИННИК // ДЕЛО № 14782
                        </div>
                      </div>
                    </div>
                  );
                }

                // Multiple photos (e.g. Slide 2: Biboran Cover + Abdulov photo)
                return (
                  <div className="mb-6 p-3 bg-black/5 dark:bg-white/5 rounded border border-current/10 relative">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#B83A3A] font-bold mb-3 flex items-center justify-between">
                      <span>ПРИОБЩЁННЫЕ МАТЕРИАЛЫ К ДЕЛУ:</span>
                      <span className="opacity-60 text-[9px]">{photos.length} ФОТОКАРТОЧКИ</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {photos.map((photo, i) => (
                        <div
                          key={i}
                          onClick={() => setEnlargedImage({ url: photo.url, title: photo.caption })}
                          className={`relative p-1.5 pb-2 bg-[#FAF8F3] dark:bg-[#232730] border border-[#D5CCBC] dark:border-[#3E4554] rounded-xs shadow-md transition-transform hover:rotate-0 duration-200 cursor-pointer ${
                            i % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'
                          }`}
                        >
                          {/* Aged cellophane tape top-center */}
                          <div 
                            className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-3 bg-amber-200/60 dark:bg-amber-300/30 backdrop-blur-xs border border-amber-400/40 rotate-[2deg] z-10 shadow-xs pointer-events-none"
                          />

                          <div className="aspect-[3/4] w-full overflow-hidden rounded-xs bg-black/10">
                            <img
                              src={photo.url}
                              alt={photo.caption}
                              className="w-full h-full object-cover object-top filter contrast-110 sepia-[0.12]"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          <div className="text-[9px] font-mono tracking-tight text-center mt-1.5 text-[#111] dark:text-[#E8E6DF] font-bold uppercase truncate px-1">
                            {photo.caption}
                          </div>
                          <div className="text-[8px] font-mono text-center opacity-60 uppercase">
                            {photo.label || `ДОК. № 02-${i + 1}`}
                          </div>

                          {/* Corner stamp */}
                          {photo.stampText && (
                            <div className="absolute -bottom-1 -right-1 px-1 py-0.2 border border-[#B83A3A] text-[#B83A3A] font-mono text-[7px] font-black uppercase tracking-wider bg-white/95 dark:bg-[#14171D] rounded-xs rotate-[-6deg] shadow-xs select-none">
                              {photo.stampText}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 pt-2 border-t border-current/10 text-[10px] font-mono opacity-60 text-center uppercase">
                      ВКЛЕЕНО В ПРОТОКОЛ // ДЕЛО № 14782-BIB
                    </div>
                  </div>
                );
              })()}

              {/* Card Meta Rows */}
              <div className={`space-y-4 text-xs ${slide.useDossierFont ? 'font-dossier' : 'font-mono'}`}>
                
                <div className={`pb-3 border-b ${themeStyles.cardDivider} flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1`}>
                  <span className={`${themeStyles.cardLabel} uppercase text-[11px]`}>SUBJECT</span>
                  <span className={`font-bold text-right sm:max-w-[60%] ${slide.useDossierFont ? 'font-dossier text-[#1C1917] dark:text-[#E8E6DF]' : 'font-sans'} text-xs`}>
                    {slide.dossierCard.subject}
                  </span>
                </div>

                <div className={`pb-3 border-b ${themeStyles.cardDivider} flex justify-between items-baseline gap-2`}>
                  <span className={`${themeStyles.cardLabel} uppercase text-[11px]`}>CLASSIFICATION</span>
                  <span className="font-semibold text-right text-[11px]">
                    {slide.dossierCard.classification}
                  </span>
                </div>

                <div className={`pb-3 border-b ${themeStyles.cardDivider} flex justify-between items-baseline gap-2`}>
                  <span className={`${themeStyles.cardLabel} uppercase text-[11px]`}>PRIMARY SOURCES</span>
                  <span className="font-semibold text-right text-[11px]">
                    {slide.dossierCard.primarySources}
                  </span>
                </div>

                <div className={`pb-3 border-b ${themeStyles.cardDivider} flex justify-between items-baseline gap-2`}>
                  <span className={`${themeStyles.cardLabel} uppercase text-[11px]`}>CROSS-REFERENCES</span>
                  <span className="font-semibold text-right text-[11px]">
                    {slide.dossierCard.crossReferences}
                  </span>
                </div>

                <div className={`pb-3 border-b ${themeStyles.cardDivider} flex justify-between items-baseline gap-2`}>
                  <span className={`${themeStyles.cardLabel} uppercase text-[11px]`}>TIMELINE</span>
                  <span className="font-semibold text-right text-[11px]">
                    {slide.dossierCard.timeline}
                  </span>
                </div>

                <div className="flex justify-between items-baseline gap-2 pt-1">
                  <span className={`${themeStyles.cardLabel} uppercase text-[11px]`}>STATUS</span>
                  <span className="font-bold text-[#B83A3A] text-right text-xs">
                    {slide.dossierCard.status}
                  </span>
                </div>

                {/* Extra Metric Highlight if present */}
                {slide.dossierCard.extraMetric && (
                  <div className="mt-4 p-3 bg-black/5 dark:bg-white/5 rounded border border-current/10 flex justify-between items-center">
                    <span className="text-[10px] uppercase opacity-70">
                      {slide.dossierCard.extraMetric.label}
                    </span>
                    <span className={`${slide.useDossierFont ? 'font-dossier font-black' : 'font-serif font-bold'} text-lg text-[#B83A3A]`}>
                      {slide.dossierCard.extraMetric.value}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Footer Stamp note */}
              <div className="mt-6 pt-4 border-t border-current/15 flex items-center justify-between text-[10px] font-mono opacity-50">
                <span>ARCHIVE DIVISION № 001</span>
                <span>CONFIRMED / PUBLISHED</span>
              </div>
            </div>
          </div>

        </div>

        {/* 5. PRESENTATION CONTROLS BAR (Clean & Uncluttered) */}
        <div className="mt-12 pt-6 border-t border-current/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Slide Indicator & Quick Dots */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-wider">
              ЭКСПОНАТ {slide.exhibitNumber} / {String(PRESENTATION_SLIDES.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-1.5">
              {PRESENTATION_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlideIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    i === currentSlideIndex
                      ? 'bg-[#B83A3A] w-6'
                      : 'bg-current opacity-25 hover:opacity-70'
                  }`}
                  aria-label={`Перейти к слайду ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              disabled={currentSlideIndex === 0}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded border border-current/20 transition-all flex items-center gap-1.5 cursor-pointer ${
                currentSlideIndex === 0
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Назад</span>
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlideIndex === PRESENTATION_SLIDES.length - 1}
              className={`px-5 py-2 text-xs font-mono uppercase tracking-wider rounded font-bold text-white bg-[#B83A3A] hover:bg-[#9c2d2d] transition-all flex items-center gap-1.5 cursor-pointer ${
                currentSlideIndex === PRESENTATION_SLIDES.length - 1
                  ? 'opacity-30 cursor-not-allowed'
                  : ''
              }`}
            >
              <span>Далее</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Utility Tools */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded border border-current/15 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer text-xs font-mono flex items-center gap-1.5"
              title="Скопировать ссылку"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="text-[11px]">{copiedLink ? 'Скопировано' : 'Поделиться'}</span>
            </button>
            <button
              onClick={() => window.print()}
              className="p-2 rounded border border-current/15 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer text-xs font-mono flex items-center gap-1.5"
              title="Печать дела"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="text-[11px]">Печать</span>
            </button>
          </div>

        </div>

      </main>

      {/* 6. OVERVIEW DRAWER / TABLE OF CONTENTS MODAL */}
      {isOverviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className={`max-w-4xl w-full p-6 sm:p-8 rounded-lg border shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto ${themeStyles.cardBg}`}>
            <div className="flex items-center justify-between pb-4 border-b border-current/15">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#B83A3A] font-bold">
                  СПИСОК ЭКСПОНАТОВ РАССЛЕДОВАНИЯ
                </div>
                <h3 className="text-2xl font-mono font-bold mt-1">
                  Оглавление презентации
                </h3>
              </div>
              <button
                onClick={() => setIsOverviewOpen(false)}
                className="px-3 py-1.5 text-xs font-mono uppercase border border-current/20 rounded hover:bg-black/5 cursor-pointer"
              >
                Закрыть (Esc)
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PRESENTATION_SLIDES.map((s, idx) => (
                <div
                  key={s.id}
                  onClick={() => {
                    setCurrentSlideIndex(idx);
                    setIsOverviewOpen(false);
                  }}
                  className={`p-4 rounded border text-left cursor-pointer transition-all ${
                    idx === currentSlideIndex
                      ? 'border-[#B83A3A] bg-black/5 dark:bg-white/5 shadow-xs'
                      : 'border-current/15 hover:border-current/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="text-[#B83A3A] font-bold">EXHIBIT {s.exhibitNumber}</span>
                    <span className="opacity-60 text-[10px]">{s.categoryTag}</span>
                  </div>
                  <div className="font-mono font-bold text-sm leading-snug">
                    {s.kicker} {s.headlineBold} {s.headlineOutline}
                  </div>
                  <div className="text-xs opacity-70 font-sans mt-2 line-clamp-2">
                    {s.dossierCard.subject}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 7. FULLSCREEN ENLARGED ARCHIVAL PHOTOGRAPH MODAL */}
      {enlargedImage && (
        <div 
          onClick={() => setEnlargedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fade-in cursor-zoom-out"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center bg-[#15171C] text-[#E8E6DF] rounded-lg border border-[#C5A46D]/40 p-4 sm:p-6 shadow-2xl relative space-y-4 overflow-y-auto"
          >
            {/* Modal header */}
            <div className="w-full flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B83A3A]" />
                <span className="font-bold text-[#B83A3A] uppercase tracking-wider">
                  АРХИВНЫЙ ФОТОДОКУМЕНТ ВЫСОКОГО РАЗРЕШЕНИЯ
                </span>
              </div>
              <button
                onClick={() => setEnlargedImage(null)}
                className="p-1 rounded hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                title="Закрыть (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo frame */}
            <div className="relative w-full max-h-[66vh] flex items-center justify-center bg-black/50 p-2 rounded border border-white/10 overflow-hidden">
              <img
                src={enlargedImage.url}
                alt={enlargedImage.title}
                className="max-w-full max-h-[62vh] object-contain rounded shadow-lg filter contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Caption & details */}
            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2 border-t border-white/10 font-mono text-xs">
              <div>
                <div className="font-bold text-white uppercase text-sm">
                  {enlargedImage.title}
                </div>
                {enlargedImage.subtitle && (
                  <div className="text-white/70 text-[11px] font-sans mt-0.5">
                    {enlargedImage.subtitle}
                  </div>
                )}
              </div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest shrink-0">
                ДЕЛО № 14782 // ЭКСПЕРТИЗА
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
