import React, { useState } from 'react';
import { Play, Clock, FileText, ChevronRight, ExternalLink, PlusCircle, Check } from 'lucide-react';
import { ORIGINAL_VIDEO } from '../data/videoData';
import { VideoChapter } from '../types';

interface VideoSectionProps {
  onOpenDossier: (dossierId: string) => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onOpenDossier }) => {
  const [activeChapter, setActiveChapter] = useState<VideoChapter>(ORIGINAL_VIDEO.chapters[0]);
  const [customVideos, setCustomVideos] = useState<any[]>([]);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [newVideoUrl, setNewVideoUrl] = useState<string>('');
  const [newVideoTitle, setNewVideoTitle] = useState<string>('');

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVideoUrl || !newVideoTitle) return;
    
    // Extract video ID if possible
    let videoId = 'k6Y2nTXkUmQ';
    const match = newVideoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    if (match && match[1]) {
      videoId = match[1];
    }

    setCustomVideos([
      ...customVideos,
      {
        id: videoId,
        title: newVideoTitle,
        embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
        date: 'Пользовательский архив',
        description: 'Дополнительное видеорасследование, приобщённое исследователем к материалам дела.'
      }
    ]);
    setNewVideoUrl('');
    setNewVideoTitle('');
    setShowAddModal(false);
  };

  return (
    <section id="video" className="py-20 bg-[#14171D] border-t border-[#C5A46D]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-telemetry tracking-widest text-[#C5A46D] uppercase mb-2">
              <span>РАЗДЕЛ VIII // АУДИОВИЗУАЛЬНЫЙ АРХИВ</span>
              <span aria-hidden="true" className="text-[#8E95A2]/40">·</span>
              <span className="text-[#B83A3A]">ОРИГИНАЛЬНОЕ СВИДЕТЕЛЬСТВО</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#E8E6DF] font-semibold tracking-tight">
              Каноническое видеорасследование
            </h2>
            <p className="text-sm text-[#8E95A2] mt-2 max-w-2xl leading-relaxed">
              Первоисточник гипотезы: видеообращение Абдуля, давшее старт альтернативному демографическому движению. Анализ аргументов, навигация по таймкодам и текстовая расшифровка ключевых тезисов.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 text-xs font-telemetry uppercase tracking-wider text-[#C5A46D] border border-[#C5A46D]/30 hover:border-[#C5A46D] rounded bg-[#101216] transition-colors flex items-center gap-2 self-start md:self-end cursor-pointer"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Приобщить видеозапись</span>
          </button>
        </div>

        {/* Video Player & Chapters Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Embed Player */}
          <div className="lg:col-span-8 space-y-4">
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-[#C5A46D]/30 shadow-2xl bg-black">
              <iframe
                src={ORIGINAL_VIDEO.embedUrl}
                title={ORIGINAL_VIDEO.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video metadata bar */}
            <div className="p-4 bg-[#191D23] border border-[#C5A46D]/15 rounded flex flex-wrap items-center justify-between gap-4 text-xs font-telemetry">
              <div className="flex items-center gap-3">
                <span className="text-[#C5A46D] font-bold uppercase">{ORIGINAL_VIDEO.author}</span>
                <span aria-hidden="true" className="text-[#8E95A2]/40">·</span>
                <span className="text-[#8E95A2]">{ORIGINAL_VIDEO.duration}</span>
                <span aria-hidden="true" className="text-[#8E95A2]/40">·</span>
                <span className="text-[#8E95A2]">{ORIGINAL_VIDEO.originalDate}</span>
              </div>
              <a
                href={ORIGINAL_VIDEO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B83A3A] hover:underline flex items-center gap-1"
              >
                <span>Открыть на YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Synopsis */}
            <div className="p-6 bg-[#191D23] border border-[#C5A46D]/15 rounded-lg space-y-2">
              <h4 className="text-base font-serif font-semibold text-[#E8E6DF]">
                {ORIGINAL_VIDEO.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#8E95A2] leading-relaxed">
                {ORIGINAL_VIDEO.synopsis}
              </p>
            </div>
          </div>

          {/* Right Column: Chapters & Timestamps Navigation */}
          <div className="lg:col-span-4 bg-[#191D23] border border-[#C5A46D]/20 rounded-lg p-5 flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#C5A46D]/15 text-xs font-telemetry uppercase text-[#C5A46D]">
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                <span>ТАЙМКОДЫ И ГЛАВЫ</span>
              </span>
              <span>{ORIGINAL_VIDEO.chapters.length} ГЛАВ</span>
            </div>

            <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
              {ORIGINAL_VIDEO.chapters.map((chap, idx) => {
                const isSelected = activeChapter.time === chap.time;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveChapter(chap)}
                    className={`p-3 rounded border text-left cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#101216] border-[#C5A46D] shadow-sm'
                        : 'bg-[#14171D] border-[#C5A46D]/10 hover:border-[#C5A46D]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-telemetry mb-1">
                      <span className="text-[#C5A46D] font-bold">[{chap.time}]</span>
                      {chap.linkedDossierId && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenDossier(chap.linkedDossierId!);
                          }}
                          className="text-[10px] text-[#B83A3A] hover:underline"
                        >
                          Улика
                        </button>
                      )}
                    </div>
                    <div className="text-xs font-serif font-semibold text-[#E8E6DF] leading-snug">
                      {chap.title}
                    </div>
                    <p className="text-[11px] text-[#8E95A2] mt-1 line-clamp-2">
                      {chap.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Textual Transcript Excerpts */}
        <div className="bg-[#191D23] border border-[#C5A46D]/20 rounded-lg p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-telemetry tracking-widest text-[#C5A46D] uppercase mb-4 pb-3 border-b border-[#C5A46D]/15">
            <FileText className="w-4 h-4 text-[#B83A3A]" />
            <span>КЛЮЧЕВЫЕ ТЕКСТОВЫЕ РАСШИФРОВКИ ИЗ ВЫСТУПЛЕНИЯ</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ORIGINAL_VIDEO.transcriptExcerpts.map((item, idx) => (
              <div key={idx} className="p-5 bg-[#14171D] border border-[#C5A46D]/15 rounded flex flex-col justify-between">
                <blockquote className="text-xs sm:text-sm font-serif italic text-[#E8E6DF]/90 leading-relaxed mb-4">
                  {item.text}
                </blockquote>
                <div className="pt-3 border-t border-[#C5A46D]/10 flex items-center justify-between text-[11px] font-telemetry text-[#8E95A2]">
                  <span className="text-[#C5A46D] font-bold">{item.speaker}</span>
                  <span>[{item.timestamp}]</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Added custom videos if any */}
        {customVideos.length > 0 && (
          <div className="mt-8 pt-8 border-t border-[#C5A46D]/20 space-y-4">
            <h4 className="text-sm font-telemetry uppercase tracking-wider text-[#C5A46D]">
              ПРИОБЩЁННЫЕ ВИДЕОМАТЕРИАЛЫ ИССЛЕДОВАТЕЛЯ ({customVideos.length})
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {customVideos.map((vid, i) => (
                <div key={i} className="p-4 bg-[#191D23] border border-[#C5A46D]/20 rounded-lg space-y-3">
                  <div className="aspect-video w-full rounded overflow-hidden bg-black">
                    <iframe
                      src={vid.embedUrl}
                      title={vid.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                  <div className="text-sm font-serif font-semibold text-[#E8E6DF]">{vid.title}</div>
                  <div className="text-xs text-[#8E95A2]">{vid.description}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add video modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-[#14171D] border border-[#C5A46D]/40 rounded-lg max-w-md w-full p-6 space-y-4">
              <h3 className="text-lg font-serif font-semibold text-[#E8E6DF]">
                Приобщить видеозапись к архиву
              </h3>
              <form onSubmit={handleAddVideo} className="space-y-4 text-xs font-telemetry">
                <div>
                  <label className="block text-[#8E95A2] uppercase mb-1">
                    Название материала:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Например: Разбор демографических графиков"
                    value={newVideoTitle}
                    onChange={(e) => setNewVideoTitle(e.target.value)}
                    className="w-full p-2.5 bg-[#101216] border border-[#C5A46D]/30 rounded text-[#E8E6DF] focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>
                <div>
                  <label className="block text-[#8E95A2] uppercase mb-1">
                    Ссылка на YouTube видео:
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://www.youtube.com/watch?v=..."
                    value={newVideoUrl}
                    onChange={(e) => setNewVideoUrl(e.target.value)}
                    className="w-full p-2.5 bg-[#101216] border border-[#C5A46D]/30 rounded text-[#E8E6DF] focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 text-xs text-[#8E95A2] hover:text-[#E8E6DF]"
                  >
                    Отмена
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold uppercase text-[#101216] bg-[#C5A46D] hover:bg-[#d8b880] rounded"
                  >
                    Сохранить в архив
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
