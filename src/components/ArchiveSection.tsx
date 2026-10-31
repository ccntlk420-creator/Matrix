import React, { useState } from 'react';
import { Archive, FileText, Image, Film, Table, BarChart, BookOpen, Search, Eye, Download, Check } from 'lucide-react';
import { ARCHIVE_DOCUMENTS } from '../data/archiveItems';
import { ArchiveDocument } from '../types';

export const ArchiveSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inspectedDoc, setInspectedDoc] = useState<ArchiveDocument | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Все материалы' },
    { id: 'texts', label: 'Священные тексты' },
    { id: 'documents', label: 'Архивные документы' },
    { id: 'photos', label: 'Фотографии' },
    { id: 'screenshots', label: 'Скриншоты' },
    { id: 'video', label: 'Видеоматериалы' },
    { id: 'charts', label: 'Таблицы и графики' },
  ];

  const filteredDocs = ARCHIVE_DOCUMENTS.filter((doc) => {
    const matchesCat = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesQuery =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.archiveId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  const handleDownload = (id: string) => {
    setDownloadSuccess(id);
    setTimeout(() => setDownloadSuccess(null), 2500);
  };

  return (
    <section id="archive" className="py-20 bg-[#101216] border-t border-[#C5A46D]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-telemetry tracking-widest text-[#C5A46D] uppercase mb-2">
              <span>РАЗДЕЛ IX // ЦЕНТРАЛЬНЫЙ АРХИВ ДЕПОРТАМЕНТА</span>
              <span aria-hidden="true" className="text-[#8E95A2]/40">·</span>
              <span className="text-[#B83A3A]">РЕЕСТР ДОКУМЕНТОВ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#E8E6DF] font-semibold tracking-tight">
              Спецхран расследования
            </h2>
            <p className="text-sm text-[#8E95A2] mt-2 max-w-2xl leading-relaxed">
              Официальные меморандумы ООН, выдержки из Биборана, орбитальные снимки Sentinel и агро-демографические балансы с присвоенными архивными шифрами.
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#8E95A2] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Поиск по шифру, тегам, автору..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#191D23] border border-[#C5A46D]/20 rounded text-xs text-[#E8E6DF] placeholder-[#8E95A2]/60 focus:outline-none focus:border-[#C5A46D]"
            />
          </div>
        </div>

        {/* Featured Archive Banner */}
        <div className="mb-10 p-6 bg-[#14171D] border border-[#C5A46D]/20 rounded-lg flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3 rounded overflow-hidden border border-[#C5A46D]/30 shadow-md">
            <img
              src="/src/assets/images/classified_dossier_archive_1793446009085.jpg"
              alt="Архивная папка с грифом секретно"
              className="w-full h-44 object-cover filter contrast-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-2">
            <div className="text-xs font-telemetry uppercase text-[#B83A3A] font-bold">
              ОСОБЫЙ СЕКТОР ХРАНЕНИЯ // ДЕЛО № 14782
            </div>
            <h3 className="text-xl font-serif font-semibold text-[#E8E6DF]">
              Подлинники и стенограммы раннего периода Абдуловеры (2010–2014)
            </h3>
            <p className="text-xs sm:text-sm text-[#8E95A2] leading-relaxed">
              Все документы каталога оцифрованы с сохранением оригинальной верстки, пометок цензуры и авторских комментариев. Доступ предоставляется для исследовательской работы без цензурных купюр.
            </p>
          </div>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-[#191D23] border border-[#C5A46D]/15 rounded-lg">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase rounded transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#C5A46D] text-[#101216] font-semibold'
                    : 'text-[#8E95A2] hover:text-[#E8E6DF]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Document Table / Grid */}
        <div className="space-y-3">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="p-5 bg-[#191D23] border border-[#C5A46D]/15 hover:border-[#C5A46D]/40 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-3 text-xs font-telemetry">
                  <span className="text-[#C5A46D] font-bold uppercase">{doc.archiveId}</span>
                  <span aria-hidden="true" className="text-[#8E95A2]/40">·</span>
                  <span className="text-[#B83A3A] uppercase">{doc.classification}</span>
                  <span aria-hidden="true" className="text-[#8E95A2]/40">·</span>
                  <span className="text-[#8E95A2]">{doc.date}</span>
                </div>
                <h4 className="text-base font-serif font-semibold text-[#E8E6DF]">
                  {doc.title}
                </h4>
                <p className="text-xs text-[#8E95A2] max-w-3xl leading-relaxed">
                  {doc.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {doc.tags.map((t, i) => (
                    <span key={i} className="text-[10px] font-telemetry text-[#8E95A2] bg-[#101216] px-2 py-0.5 rounded">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setInspectedDoc(doc)}
                  className="px-3.5 py-2 text-xs font-telemetry uppercase tracking-wider text-[#E8E6DF] bg-[#101216] border border-[#C5A46D]/30 hover:border-[#C5A46D] rounded transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#C5A46D]" />
                  <span>Читать</span>
                </button>
                <button
                  onClick={() => handleDownload(doc.id)}
                  className="p-2 text-[#8E95A2] hover:text-[#C5A46D] bg-[#101216] border border-[#C5A46D]/20 rounded hover:border-[#C5A46D] transition-colors cursor-pointer"
                  title="Скачать документ"
                >
                  {downloadSuccess === doc.id ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Download className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for viewing archive item */}
        {inspectedDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="bg-[#14171D] border border-[#C5A46D]/40 rounded-lg max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
              <div className="flex justify-between items-center pb-3 border-b border-[#C5A46D]/20 text-xs font-telemetry">
                <span className="text-[#C5A46D] font-bold">{inspectedDoc.archiveId}</span>
                <span className="text-[#B83A3A] uppercase">{inspectedDoc.classification}</span>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-[#E8E6DF] font-semibold mb-2">
                  {inspectedDoc.title}
                </h3>
                <div className="text-xs text-[#8E95A2] font-telemetry space-y-1">
                  <div>АВТОР / ИСТОЧНИК: {inspectedDoc.author}</div>
                  <div>ДАТА РЕГИСТРАЦИИ: {inspectedDoc.date}</div>
                </div>
              </div>

              {inspectedDoc.excerpt && (
                <div className="p-5 bg-[#101216] border-l-2 border-[#C5A46D] rounded-r">
                  <div className="text-[10px] font-telemetry uppercase text-[#C5A46D] mb-2">
                    ВЫДЕРЖКА ИЗ ПОДЛИННИКА:
                  </div>
                  <p className="text-sm font-serif italic text-[#E8E6DF] leading-relaxed">
                    {inspectedDoc.excerpt}
                  </p>
                </div>
              )}

              <p className="text-xs sm:text-sm text-[#8E95A2] leading-relaxed">
                {inspectedDoc.description}
              </p>

              <div className="flex justify-end pt-4 border-t border-[#C5A46D]/20">
                <button
                  onClick={() => setInspectedDoc(null)}
                  className="px-5 py-2 text-xs font-telemetry uppercase tracking-wider text-white bg-[#B83A3A] hover:bg-[#9c2929] rounded cursor-pointer"
                >
                  Закрыть документ
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
