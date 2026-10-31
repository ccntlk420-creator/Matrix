import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from 'recharts';
import {
  HelpCircle,
  TrendingUp,
  Skull,
  Eye,
  Layers,
  MapPin,
  Cpu,
  Network,
  Users,
  ChevronDown,
  ChevronUp,
  FileText,
  AlertOctagon,
  ExternalLink,
  Edit3
} from 'lucide-react';
import { HISTORICAL_POPULATION } from '../data/demographics';
import { NPC_ARCHETYPES } from '../data/npcTypes';
import { EvidenceDossier } from '../types';

interface CoreTheorySectionProps {
  onOpenDossier: (dossierId: string) => void;
}

export const CoreTheorySection: React.FC<CoreTheorySectionProps> = ({ onOpenDossier }) => {
  // 5.2 Editable comparison state
  const [officialNumber, setOfficialNumber] = useState<number>(8.18);
  const [alternativeNumber, setAlternativeNumber] = useState<number>(2.25);
  const [isEditingNumbers, setIsEditingNumbers] = useState<boolean>(false);

  // 5.3 Active expanded contradiction card
  const [expandedCard, setExpandedCard] = useState<string | null>('dyn');

  // 5.6 Interactive conspiracy node selected
  const [selectedConspiracyNode, setSelectedConspiracyNode] = useState<string>('un');

  const phantomBillions = (officialNumber - alternativeNumber).toFixed(2);
  const phantomPercentage = (((officialNumber - alternativeNumber) / officialNumber) * 100).toFixed(1);

  const contradictions = [
    {
      id: 'dyn',
      title: 'Историческая динамика и скачок XX века',
      shortDesc: 'Внезапный взлёт с 1.6 млрд до 6 млрд за 100 лет на фоне масштабных исторических катастроф.',
      fullAnalysis: 'В течение почти двух тысячелетий численность населения Земли колебалась возле отметки в 200–500 миллионов человек, сдерживаемая естественными биологическими факторами. С наступлением эпохи массового учёта ООН график демонстрирует экспоненциальный взрыв, не имеющий прецедентов в популяционной экологии млекопитающих сходной массы тела. Настоящее расследование указывает на то, что скачок совпал не с ростом рождаемости, а с централизацией статистики.',
      metrics: 'Ускорение кривой: x5.1 за век · Биологический лимит: превышен в 2.4 раза',
      dossierId: 'dos-002'
    },
    {
      id: 'war',
      title: 'Последствия мировых войн и пандемий',
      shortDesc: 'Парадокс мгновенной демографической компенсации после 1945 года без дефицита поколений.',
      fullAnalysis: 'Две мировые войны, голод 1930-х годов и пандемия "испанки" 1918 года выбили огромную долю мужчин наиболее продуктивного репродуктивного возраста. Теория Биборана задаёт вопрос: каким образом демографические пирамиды развивающихся стран после 1950 года не только не показали глубоких провалов, но и на бумаге перекрыли все потери за считанные годы?',
      metrics: 'Зафиксированные потери: >140 млн · Скорость компенсации: аномальна',
      dossierId: 'dos-002'
    },
    {
      id: 'geo',
      title: 'Плотность населения и пустые континенты',
      shortDesc: 'Вся мировая суша практически пуста за пределами нескольких сотен мегаполисов.',
      fullAnalysis: 'Путешествие по Транссибирской магистрали, пролёт над Австралией, Канадой или проезд по внутренней Испании и плато Анатолии демонстрирует колоссальные просторы, где на сотни километров нет постоянных поселений. Если бы 8 миллиардов распределились равномерно по суше, на каждом квадратном километре проживало бы свыше 55 человек. В реальности 95% площади планеты имеет плотность менее 2 человек на км².',
      metrics: 'Обитаемая доля суши: <5% · Неосвоенные территории: >120 млн км²',
      dossierId: 'dos-003'
    },
    {
      id: 'food',
      title: 'Продовольственный баланс и запасы пресной воды',
      shortDesc: 'Официальный валовый сбор злаков и калорий не обеспечивает биологическую норму 8 млрд ртов.',
      fullAnalysis: 'При пересчёте всего мирового урожая пшеницы, риса и кукурузы за вычетом кормовой фракции для скота и логистических потерь получается калорийный эквивалент, достаточный для питания лишь 2.0–2.6 миллиардов человек при базовой норме 2400 ккал/день. Тот факт, что дефицита на прилавках нет, доказывает: реальное число потребителей кратно меньше.',
      metrics: 'Дефицит зернового эквивалента: 31% · Фактический урожай: ~2.8 млрд т',
      dossierId: 'dos-007'
    },
    {
      id: 'asia',
      title: 'Азиатский фактор: перепись Индии и Китая',
      shortDesc: 'Индия не проводила очную перепись с 2011 года; статистика основана на компьютерных формулах.',
      fullAnalysis: 'Официальные данные о 1.43 млрд населения Индии базируются на интерполяционных моделях, поскольку перепись 2021 года была отменена и до сих пор не проведена. В Китае же отчёты провинциальных парткомов традиционно завышали показатели для получения центральных дотаций и сохранения квот на инфраструктурное кредитование.',
      metrics: 'Период без переписи: 15 лет (Индия) · Доля экстраполяции: 100%',
      dossierId: 'dos-008'
    },
    {
      id: 'infra',
      title: 'Городская инфраструктура и иллюзия толпы',
      shortDesc: 'Искусственное сужение бутылочных горлышек транспорта для создания эффекта перенаселения.',
      fullAnalysis: 'Субъективное ощущение "людей слишком много" формируется архитектоникой современных мегаполисов: узкие входы в метро, турникеты, светофорные интервалы и скопление офисов в единых кластерах. С точки зрения теории Биборана, это целенаправленная психоинженерия, убеждающая обывателя в нехватке жизненного пространства.',
      metrics: 'Фактор компрессии: 12x · Стресс-индекс мегаполиса: 89/100',
      dossierId: 'dos-004'
    }
  ];

  const conspiracyNodes = [
    {
      id: 'un',
      title: '1. Наднациональные институты (ООН, МВФ, ВОЗ)',
      role: 'Архитекторы глобальных формул',
      desc: 'Создают нормативные методички демографического учёта. Утверждают когортно-компонентные коэффициенты, которыми заменяются сорванные национальные переписи. Определяют глобальные квоты и формируют повестку борьбы с "демографическим давлением".'
    },
    {
      id: 'gov',
      title: '2. Государственные ведомства и администрации',
      role: 'Бенефициары бюджетных трансфертов',
      desc: 'Чем больше задекларированное подушевое население региона или развивающейся страны, тем выше международные кредиты, субсидии на здравоохранение и государственные ассигнования. Приписки выгодны бюрократии на каждом уровне.'
    },
    {
      id: 'corp',
      title: '3. Транснациональные корпорации и рынки',
      role: 'Капитализация на ожиданиях роста',
      desc: 'Оценка фондовых мультипликаторов технологических и продовольственных гигантов строится на мифе об "огромном растущем рынке сбыта в 8-10 миллиардов потребителей". Признание реальной цифры обрушит рыночную капитализацию на триллионы долларов.'
    },
    {
      id: 'media',
      title: '4. Медиа и индустрия новостной паники',
      role: 'Генератор субъективной тесноты',
      desc: 'Ежедневные репортажи об "исчерпании ресурсов планеты", "миграционном кризисе", "глобальном потеплении из-за перенаселения". Формируют у индивида чувство вины за собственное существование и потребление.'
    },
    {
      id: 'eco',
      title: '5. Углеродные налоги и нормирование ресурсов',
      role: 'Инструмент сбора планетарной ренты',
      desc: 'Финальная стадия: введение углеродных сборов, квот на потребление энергии, воды и мяса под предлогом спасения планеты от несуществующих миллиардов лишних людей.'
    }
  ];

  return (
    <div id="theory" className="py-20 bg-[#101216] border-t border-[#C5A46D]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

        {/* 5.1 & 5.2 HEADLINE & COMPARATIVE ESSENCE */}
        <div>
          <div className="flex items-center gap-2 text-xs font-telemetry tracking-widest text-[#C5A46D] uppercase mb-3">
            <span>РАЗДЕЛ V // ЦЕНТРАЛЬНЫЙ АНАЛИТИЧЕСКИЙ БЛОК</span>
            <span aria-hidden="true" className="text-[#8E95A2]/40">·</span>
            <span className="text-[#B83A3A]">ГИПОТЕЗА БИБОРАНА</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#E8E6DF] font-semibold tracking-tight">
            Теория завышенной численности
          </h2>
          <p className="text-base sm:text-lg text-[#8E95A2] mt-3 max-w-3xl leading-relaxed">
            В центре расследования — строгий сопоставительный анализ: официальная академическая догма ООН против альтернативной реконструкции Биборана. Какова реальная плотность человечества, если исключить статистические фантомы?
          </p>
        </div>

        {/* 5.1 OFFICIAL DEMOGRAPHIC STATS & RECHARTS */}
        <div className="bg-[#191D23] border border-[#C5A46D]/20 rounded-lg p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#C5A46D]/15">
            <div>
              <div className="text-xs font-telemetry uppercase tracking-wider text-[#C5A46D] mb-1">
                Подраздел 5.1 · Официальная хронология
              </div>
              <h3 className="text-2xl font-serif text-[#E8E6DF] font-semibold">
                Как менялась численность населения по официальной версии
              </h3>
              <p className="text-xs sm:text-sm text-[#8E95A2] mt-1">
                Кривая прироста ООН: от первого миллиарда в 1800 г. до 8 миллиардов в ноябре 2022 года.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-telemetry">
              <span className="flex items-center gap-2 text-[#E8E6DF]">
                <span className="w-3 h-3 bg-[#8E95A2] rounded-sm inline-block"></span>
                <span>Официально (ООН)</span>
              </span>
              <span className="flex items-center gap-2 text-[#C5A46D]">
                <span className="w-3 h-3 bg-[#C5A46D] rounded-sm inline-block"></span>
                <span>Оценка Биборана</span>
              </span>
            </div>
          </div>

          {/* Interactive Recharts Graph */}
          <div className="h-80 sm:h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={HISTORICAL_POPULATION} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorOfficial" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8E95A2" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#8E95A2" stopOpacity={0.0}/>
                  </linearGradient>
                  <linearGradient id="colorAlternative" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#C5A46D" stopOpacity={0.7}/>
                    <stop offset="95%" stopColor="#C5A46D" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#252B35" />
                <XAxis dataKey="year" stroke="#8E95A2" tick={{ fill: '#8E95A2', fontSize: 11 }} />
                <YAxis stroke="#8E95A2" tick={{ fill: '#8E95A2', fontSize: 11 }} unit=" млрд" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#14171D', borderColor: '#C5A46D', borderRadius: '4px', color: '#E8E6DF' }}
                  labelStyle={{ color: '#C5A46D', fontWeight: 600 }}
                  formatter={(value: any, name: any) => [
                    `${value} млрд чел.`,
                    name === 'officialPopulation' ? 'Официально (ООН)' : 'Гипотеза Биборана'
                  ]}
                />
                <Area
                  type="monotone"
                  dataKey="officialPopulation"
                  stroke="#8E95A2"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorOfficial)"
                  name="officialPopulation"
                />
                <Area
                  type="monotone"
                  dataKey="alternativePopulation"
                  stroke="#C5A46D"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorAlternative)"
                  name="alternativePopulation"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 pt-4 border-t border-[#C5A46D]/15 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#8E95A2]">
            <div>
              <span className="text-[#E8E6DF] font-semibold block mb-1">Метод сбора статистики</span>
              Когортно-компонентная интерполяция на основе репрезентативных выборок и прогнозных коэффициентов фертильности.
            </div>
            <div>
              <span className="text-[#E8E6DF] font-semibold block mb-1">Степень верификации</span>
              Более 60 стран мира не проводили очный подушный учёт более 15 лет. Данные формируются расчётными алгоритмами.
            </div>
            <div>
              <span className="text-[#C5A46D] font-semibold block mb-1">Точка бифуркации</span>
              Расхождение кривых резко нарастает после 1950 года, достигая максимума к текущему моменту (разница &gt; 5.9 млрд).
            </div>
          </div>
        </div>

        {/* 5.2 THE ALTERNATIVE HYPOTHESIS & INTERACTIVE COMPARISON */}
        <div className="bg-gradient-to-br from-[#191D23] via-[#14171D] to-[#191D23] border border-[#B83A3A]/30 rounded-lg p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <div className="text-xs font-telemetry uppercase tracking-wider text-[#B83A3A] mb-1">
                Подраздел 5.2 · Главный тезис Биборана
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#E8E6DF] font-semibold">
                Какова настоящая численность населения Земли?
              </h3>
              <p className="text-sm text-[#8E95A2] mt-2">
                Согласно гипотезе Абдуля, реальная популяция Земли не превышает <strong>1.8 – 2.4 миллиарда человек</strong>. Все остальные 5.9+ миллиардов — это виртуальные строки в отчётах международных организаций.
              </p>
            </div>

            <button
              onClick={() => setIsEditingNumbers(!isEditingNumbers)}
              className="px-4 py-2 text-xs font-telemetry uppercase tracking-wider text-[#C5A46D] border border-[#C5A46D]/30 hover:border-[#C5A46D] rounded bg-[#101216] transition-colors self-start lg:self-center flex items-center gap-2 cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditingNumbers ? 'Зафиксировать значения' : 'Настроить параметры гипотезы'}</span>
            </button>
          </div>

          {/* If editing mode enabled: inputs */}
          {isEditingNumbers && (
            <div className="p-4 mb-8 bg-[#101216] border border-[#C5A46D]/30 rounded-md grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-[#8E95A2] font-telemetry uppercase mb-1">
                  Официальная оценка ООН (млрд):
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={officialNumber}
                  onChange={(e) => setOfficialNumber(parseFloat(e.target.value) || 0)}
                  className="w-full bg-[#191D23] border border-[#C5A46D]/40 text-[#E8E6DF] px-3 py-2 rounded focus:outline-none focus:border-[#C5A46D] font-telemetry"
                />
              </div>
              <div>
                <label className="block text-[#C5A46D] font-telemetry uppercase mb-1">
                  Альтернативная оценка Биборана (млрд):
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={alternativeNumber}
                  onChange={(e) => setAlternativeNumber(parseFloat(e.target.value) || 0)}
                  className="w-full bg-[#191D23] border border-[#C5A46D]/40 text-[#C5A46D] px-3 py-2 rounded focus:outline-none focus:border-[#C5A46D] font-telemetry font-bold"
                />
              </div>
            </div>
          )}

          {/* Visual Difference Gauge */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Box 1: Official */}
            <div className="p-5 bg-[#101216] border border-[#8E95A2]/20 rounded text-center">
              <span className="text-xs font-telemetry uppercase text-[#8E95A2]">Официальный нарратив</span>
              <div className="text-3xl sm:text-4xl font-serif text-[#E8E6DF] font-bold tabular-nums mt-2">
                {officialNumber.toFixed(2)} млрд
              </div>
              <p className="text-[11px] text-[#8E95A2] mt-2">100% номинальной базы</p>
            </div>

            {/* Box 2: Visual comparison scale */}
            <div className="p-5 bg-[#101216] border border-[#B83A3A]/40 rounded text-center relative overflow-hidden">
              <span className="text-xs font-telemetry uppercase text-[#B83A3A] font-bold">Масштаб фальсификации</span>
              <div className="text-3xl sm:text-4xl font-serif text-[#B83A3A] font-bold tabular-nums mt-2">
                +{phantomBillions} млрд
              </div>
              <p className="text-[11px] text-[#8E95A2] mt-2">
                {phantomPercentage}% фантомных записей
              </p>
              {/* Proportional visual bar */}
              <div className="w-full bg-[#252B35] h-3 rounded-full mt-4 overflow-hidden flex">
                <div
                  className="bg-[#C5A46D] h-full"
                  style={{ width: `${(alternativeNumber / officialNumber) * 100}%` }}
                  title="Реальное население"
                />
                <div
                  className="bg-[#B83A3A] h-full"
                  style={{ width: `${100 - (alternativeNumber / officialNumber) * 100}%` }}
                  title="Фантомная часть"
                />
              </div>
              <div className="flex justify-between text-[10px] font-telemetry text-[#8E95A2] mt-1">
                <span className="text-[#C5A46D]">Реальные: {(alternativeNumber).toFixed(2)} млрд</span>
                <span className="text-[#B83A3A]">Приписки: {phantomBillions} млрд</span>
              </div>
            </div>

            {/* Box 3: Alternative */}
            <div className="p-5 bg-[#101216] border border-[#C5A46D]/30 rounded text-center">
              <span className="text-xs font-telemetry uppercase text-[#C5A46D]">Оценка по Биборану</span>
              <div className="text-3xl sm:text-4xl font-serif text-[#C5A46D] font-bold tabular-nums mt-2">
                {alternativeNumber.toFixed(2)} млрд
              </div>
              <p className="text-[11px] text-[#8E95A2] mt-2">Верифицируемый предел биологической ёмкости</p>
            </div>
          </div>
        </div>

        {/* 5.3 DEMOGRAPHIC CONTRADICTIONS (ACCORDION CARDS) */}
        <div>
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-telemetry uppercase tracking-wider text-[#C5A46D] mb-1">
              Подраздел 5.3 · Демографические противоречия
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#E8E6DF] font-semibold">
              Шесть нестыковок официальной теории
            </h3>
            <p className="text-sm text-[#8E95A2] mt-2 leading-relaxed">
              Нажмите на любую карточку, чтобы открыть детальный аналитический протокол и связанные материалы расследования.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contradictions.map((card) => {
              const isOpen = expandedCard === card.id;
              return (
                <div
                  key={card.id}
                  className={`bg-[#191D23] border rounded-lg transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-[#C5A46D]/60 shadow-lg' : 'border-[#C5A46D]/15 hover:border-[#C5A46D]/30'
                  }`}
                >
                  <button
                    onClick={() => setExpandedCard(isOpen ? null : card.id)}
                    className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div>
                      <div className="text-xs font-telemetry uppercase tracking-widest text-[#B83A3A] mb-1">
                        АНАЛИТИЧЕСКИЙ УЗЕЛ #{card.id.toUpperCase()}
                      </div>
                      <h4 className="text-base sm:text-lg font-serif font-semibold text-[#E8E6DF]">
                        {card.title}
                      </h4>
                      <p className="text-xs text-[#8E95A2] mt-1 leading-relaxed">
                        {card.shortDesc}
                      </p>
                    </div>
                    <div className="mt-1 text-[#C5A46D]">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 border-t border-[#C5A46D]/10 bg-[#14171D]">
                      <p className="text-xs sm:text-sm text-[#E8E6DF]/90 font-serif leading-relaxed mb-4">
                        {card.fullAnalysis}
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#C5A46D]/10 text-xs font-telemetry">
                        <span className="text-[#C5A46D]">{card.metrics}</span>
                        <button
                          onClick={() => onOpenDossier(card.dossierId)}
                          className="text-[#B83A3A] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <span>Смотреть досье</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 5.4 CROWD THEORY (ТЕОРИЯ МАССОВКИ) - FORENSIC DETECTIVE CORKBOARD */}
        <div className="bg-[#14171D] border border-[#B83A3A]/30 rounded-lg p-6 sm:p-10 relative overflow-hidden">
          <div className="max-w-3xl mb-8 relative z-10">
            <div className="text-xs font-telemetry uppercase tracking-wider text-[#B83A3A] mb-1">
              Подраздел 5.4 · Теория массовки
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif text-[#E8E6DF] font-semibold">
              «А все ли люди вокруг нас настоящие?»
            </h3>
            <p className="text-sm text-[#8E95A2] mt-2 leading-relaxed">
              Конспирологическая гипотеза Биборана: если численность населения планеты значительно ниже заявленной, как поддерживается устойчивая иллюзия миллионных городов и бесконечных очередей?
            </p>
          </div>

          {/* Investigation Board Media Collage Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8 relative z-10">
            {/* Visual Board Image */}
            <div className="lg:col-span-7 rounded-lg overflow-hidden border border-[#C5A46D]/30 shadow-2xl relative group">
              <img
                src="/src/assets/images/conspiracy_investigation_board_1793446010419.jpg"
                alt="Детективная доска расследования теории массовки"
                className="w-full h-auto object-cover filter contrast-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#101216] via-[#101216]/70 to-transparent p-4">
                <div className="text-xs font-telemetry text-[#C5A46D] uppercase">
                  ФРАГМЕНТ СЛЕДСТВЕННОЙ КАРТЫ СВЯЗЕЙ № 14782
                </div>
                <div className="text-[11px] text-[#8E95A2] font-sans">
                  Сопоставление ракурсов телесъёмок, повторяющихся типажей и перекрестных ссылок
                </div>
              </div>
            </div>

            {/* Surveillance crowd snapshot & 4 investigative points */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-lg overflow-hidden border border-[#C5A46D]/20 shadow-md">
                <img
                  src="/src/assets/images/mass_crowd_surveillance_1793446009942.jpg"
                  alt="Снимок городской толпы с координатной сеткой"
                  className="w-full h-44 object-cover filter contrast-125"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-4 bg-[#191D23] border border-[#C5A46D]/15 rounded text-xs space-y-2.5">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B83A3A] mt-1 shrink-0" />
                  <p className="text-[#8E95A2]">
                    <strong className="text-[#E8E6DF]">Повторяющиеся лица:</strong> Феномен дежавю в мегаполисе — один и тот же типаж с идентичным набором одежды встречается наблюдателю в диаметрально противоположных районах за сутки.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B83A3A] mt-1 shrink-0" />
                  <p className="text-[#8E95A2]">
                    <strong className="text-[#E8E6DF]">Длиннофокусный обман:</strong> Использование оптики 300+ мм на митингах сжимает перспективу, превращая 40 человек в плотный "миллионный" живой ковёр.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B83A3A] mt-1 shrink-0" />
                  <p className="text-[#8E95A2]">
                    <strong className="text-[#E8E6DF]">Логистические концентрированные точки:</strong> Концентрация потоков через 3-4 центральных пересадочных узла для поддержания ощущения всеобщей толкучки.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5.5 NPC И БИОРОБОТЫ */}
        <div>
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-telemetry uppercase tracking-wider text-[#C5A46D] mb-1">
              Подраздел 5.5 · Поведенческая классификация
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif text-[#E8E6DF] font-semibold">
              Кто населяет нашу планету? Гипотеза NPC
            </h3>
            <p className="text-sm text-[#8E95A2] mt-2 leading-relaxed">
              В сатирической терминологии Биборана термин «биоробот» или «NPC» (Non-Player Character) используется не как буквальное отрицание биологической природы людей, а как гротескная метафора тотального отчуждения и механической алгоритмизации поведения в урбанистической цивилизации.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NPC_ARCHETYPES.map((npc) => (
              <div
                key={npc.id}
                className="p-6 bg-[#191D23] border border-[#C5A46D]/15 rounded-lg flex flex-col justify-between hover:border-[#C5A46D]/40 transition-colors"
              >
                <div>
                  <div className="text-[10px] font-telemetry uppercase tracking-widest text-[#B83A3A] mb-1">
                    {npc.code}
                  </div>
                  <h4 className="text-lg font-serif font-semibold text-[#E8E6DF] mb-2">
                    {npc.name}
                  </h4>
                  <p className="text-xs text-[#8E95A2] leading-relaxed mb-4">
                    {npc.description}
                  </p>
                  
                  <div className="space-y-1.5 pt-3 border-t border-[#C5A46D]/10">
                    <span className="text-[10px] font-telemetry uppercase tracking-wider text-[#C5A46D] block mb-1">
                      Характерные признаки:
                    </span>
                    {npc.behaviorTraits.map((trait, idx) => (
                      <div key={idx} className="text-[11px] text-[#8E95A2] flex items-start gap-1.5">
                        <span className="text-[#C5A46D] select-none">›</span>
                        <span>{trait}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#C5A46D]/10 text-[10px] font-telemetry text-[#8E95A2]">
                  <span className="text-[#E8E6DF] block mb-0.5">Социологический контекст:</span>
                  {npc.sociologicalNote}
                </div>
              </div>
            ))}
          </div>

          {/* Ethical & Sociological Disclaimer */}
          <div className="mt-6 p-4 bg-[#14171D] border border-[#8E95A2]/20 rounded text-xs text-[#8E95A2] flex items-start gap-3">
            <AlertOctagon className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
            <p>
              <strong>Исследовательское примечание:</strong> Данная классификация представлена исключительно как художественно-конспирологическая модель и элемент интернет-фольклора. Все люди биологически реальны; концепция NPC иллюстрирует проблему рутинизации труда и потери субъектности в постиндустриальном обществе.
            </p>
          </div>
        </div>

        {/* 5.6 МЕХАНИЗМ ГЛОБАЛЬНОГО ЗАГОВОРА */}
        <div className="bg-[#191D23] border border-[#C5A46D]/20 rounded-lg p-6 sm:p-10">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-telemetry uppercase tracking-wider text-[#C5A46D] mb-1">
              Подраздел 5.6 · Механизм глобального заговора
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif text-[#E8E6DF] font-semibold">
              Кому выгодно завышение численности?
            </h3>
            <p className="text-sm text-[#8E95A2] mt-2 leading-relaxed">
              Интерактивная архитектура связей: как фиктивная демографическая статистика преобразуется в реальные финансовые потоки, климатические ограничения и геополитическое доминирование.
            </p>
          </div>

          {/* Interactive Network Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Node Buttons */}
            <div className="lg:col-span-5 space-y-2">
              {conspiracyNodes.map((node) => {
                const isSelected = selectedConspiracyNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedConspiracyNode(node.id)}
                    className={`w-full p-4 text-left rounded-lg border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#14171D] border-[#C5A46D] shadow-md text-[#E8E6DF]'
                        : 'bg-[#101216] border-[#C5A46D]/15 text-[#8E95A2] hover:border-[#C5A46D]/40'
                    }`}
                  >
                    <div className="text-xs font-serif font-semibold text-[#E8E6DF] mb-0.5">
                      {node.title}
                    </div>
                    <div className="text-[11px] font-telemetry uppercase text-[#C5A46D]">
                      {node.role}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Detailed Node Breakdown Card */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-[#14171D] border border-[#C5A46D]/30 rounded-lg">
              {(() => {
                const active = conspiracyNodes.find((n) => n.id === selectedConspiracyNode) || conspiracyNodes[0];
                return (
                  <div>
                    <div className="flex items-center gap-2 text-xs font-telemetry tracking-widest text-[#B83A3A] uppercase mb-2">
                      <Network className="w-4 h-4" />
                      <span>УЗЕЛ СИСТЕМЫ: {active.role}</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-serif text-[#E8E6DF] font-semibold mb-4">
                      {active.title}
                    </h4>
                    <p className="text-sm text-[#E8E6DF]/90 font-serif leading-relaxed mb-6">
                      {active.desc}
                    </p>

                    <div className="p-4 bg-[#101216] border border-[#C5A46D]/15 rounded text-xs space-y-2">
                      <div className="text-[11px] font-telemetry uppercase text-[#C5A46D] font-bold">
                        Каналы обратной связи:
                      </div>
                      <p className="text-[#8E95A2]">
                        Данный узел непрерывно подпитывается отчётами нижестоящих ведомств и ретранслирует требования в международную медиа-повестку. Любая попытка альтернативного аудита пресекается обвинениями в ненаучности и дискредитации международных институтов.
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
