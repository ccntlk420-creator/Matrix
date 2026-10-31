import React, { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ReferenceLine
} from 'recharts';
import { Sliders, RefreshCw, Calculator, BarChart3, TrendingDown, Layers, HelpCircle } from 'lucide-react';
import { HISTORICAL_POPULATION, REGIONAL_COMPARISON } from '../data/demographics';

export const MathModelSection: React.FC = () => {
  // Scenario simulation sliders
  const [censusFalsificationRate, setCensusFalsificationRate] = useState<number>(65); // % of census extrapolation in developing world
  const [urbanGhostRate, setUrbanGhostRate] = useState<number>(35); // % of duplicate residency registration
  const [ruralGhostRate, setRuralGhostRate] = useState<number>(55); // % of unverified rural extrapolation
  const [foodProxyFactor, setFoodProxyFactor] = useState<number>(40); // % of calorie gap

  // Active view tab: 'projection' | 'regional' | 'calculator'
  const [modelTab, setModelTab] = useState<'projection' | 'regional' | 'calculator'>('calculator');

  // Calculate dynamic alternative population based on current sliders
  const calculatedStats = useMemo(() => {
    const baseOfficial = 8.18; // billions
    // Weightings: developing world censuses (4.5B), urban duplicates (2.2B), rural estimation (1.48B)
    const reductionFactor = 
      (censusFalsificationRate * 0.42 + 
       urbanGhostRate * 0.25 + 
       ruralGhostRate * 0.20 + 
       foodProxyFactor * 0.13) / 100;
    
    const calculatedAlternative = baseOfficial * (1 - reductionFactor * 0.88);
    const phantom = baseOfficial - calculatedAlternative;
    const phantomPercent = (phantom / baseOfficial) * 100;

    return {
      alternativeBillion: Math.max(1.2, parseFloat(calculatedAlternative.toFixed(2))),
      phantomBillion: Math.max(0, parseFloat(phantom.toFixed(2))),
      phantomPercent: parseFloat(phantomPercent.toFixed(1))
    };
  }, [censusFalsificationRate, urbanGhostRate, ruralGhostRate, foodProxyFactor]);

  // Dynamic projection data taking user sliders into account
  const dynamicProjectionData = useMemo(() => {
    const scaling = calculatedStats.alternativeBillion / 2.28;
    return HISTORICAL_POPULATION.map((pt) => ({
      ...pt,
      userSimulatedPopulation: parseFloat((pt.alternativePopulation * scaling).toFixed(2))
    }));
  }, [calculatedStats]);

  const applyPreset = (preset: 'un' | 'moderate' | 'abdul') => {
    if (preset === 'un') {
      setCensusFalsificationRate(5);
      setUrbanGhostRate(5);
      setRuralGhostRate(5);
      setFoodProxyFactor(0);
    } else if (preset === 'moderate') {
      setCensusFalsificationRate(40);
      setUrbanGhostRate(20);
      setRuralGhostRate(35);
      setFoodProxyFactor(25);
    } else if (preset === 'abdul') {
      setCensusFalsificationRate(75);
      setUrbanGhostRate(45);
      setRuralGhostRate(65);
      setFoodProxyFactor(50);
    }
  };

  return (
    <section id="math-model" className="py-20 bg-[#101216] border-t border-[#C5A46D]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-telemetry tracking-widest text-[#C5A46D] uppercase mb-2">
              <span>РАЗДЕЛ VII // ЗАКРЫТЫЙ ВЫЧИСЛИТЕЛЬНЫЙ ЦЕНТР</span>
              <span aria-hidden="true" className="text-[#8E95A2]/40">·</span>
              <span className="text-[#B83A3A]">АНАЛИТИЧЕСКИЙ СИМУЛЯТОР</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#E8E6DF] font-semibold tracking-tight">
              Математическая модель и симулятор
            </h2>
            <p className="text-sm text-[#8E95A2] mt-2 max-w-2xl leading-relaxed">
              Динамический расчёт отклонений от генеральной совокупности ООН. Меняйте коэффициенты приписок и наблюдайте перестройку прогнозных графиков в реальном времени.
            </p>
          </div>

          {/* Model Navigation tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#14171D] border border-[#C5A46D]/20 rounded-lg">
            <button
              onClick={() => setModelTab('calculator')}
              className={`px-3 py-1.5 text-xs font-telemetry uppercase rounded transition-colors cursor-pointer ${
                modelTab === 'calculator'
                  ? 'bg-[#C5A46D] text-[#101216] font-semibold'
                  : 'text-[#8E95A2] hover:text-[#E8E6DF]'
              }`}
            >
              Калькулятор
            </button>
            <button
              onClick={() => setModelTab('projection')}
              className={`px-3 py-1.5 text-xs font-telemetry uppercase rounded transition-colors cursor-pointer ${
                modelTab === 'projection'
                  ? 'bg-[#C5A46D] text-[#101216] font-semibold'
                  : 'text-[#8E95A2] hover:text-[#E8E6DF]'
              }`}
            >
              Кривые роста
            </button>
            <button
              onClick={() => setModelTab('regional')}
              className={`px-3 py-1.5 text-xs font-telemetry uppercase rounded transition-colors cursor-pointer ${
                modelTab === 'regional'
                  ? 'bg-[#C5A46D] text-[#101216] font-semibold'
                  : 'text-[#8E95A2] hover:text-[#E8E6DF]'
              }`}
            >
              По регионам
            </button>
          </div>
        </div>

        {/* TAB 1: INTERACTIVE CALCULATOR & LIVE DASHBOARD */}
        {modelTab === 'calculator' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Sliders Panel */}
              <div className="lg:col-span-7 bg-[#191D23] border border-[#C5A46D]/20 rounded-lg p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#C5A46D]/15">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-[#C5A46D]" />
                    <h3 className="text-base font-serif font-semibold text-[#E8E6DF]">
                      Параметры коррекции статистических приписок
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => applyPreset('un')}
                      className="px-2 py-1 text-[10px] font-telemetry uppercase bg-[#101216] border border-[#8E95A2]/30 text-[#8E95A2] rounded hover:text-[#E8E6DF]"
                      title="Без приписок (официальная модель ООН)"
                    >
                      ООН (0%)
                    </button>
                    <button
                      onClick={() => applyPreset('moderate')}
                      className="px-2 py-1 text-[10px] font-telemetry uppercase bg-[#101216] border border-[#C5A46D]/30 text-[#C5A46D] rounded hover:bg-[#C5A46D]/10"
                      title="Умеренная академическая коррекция"
                    >
                      Умеренный
                    </button>
                    <button
                      onClick={() => applyPreset('abdul')}
                      className="px-2 py-1 text-[10px] font-telemetry uppercase bg-[#101216] border border-[#B83A3A]/40 text-[#B83A3A] rounded hover:bg-[#B83A3A]/10 font-bold"
                      title="Оригинальная гипотеза Биборана"
                    >
                      Биборан
                    </button>
                  </div>
                </div>

                {/* Slider 1 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-telemetry">
                    <span className="text-[#E8E6DF]">Погрешность переписей в развивающихся странах (Азия, Африка):</span>
                    <span className="text-[#C5A46D] font-bold">{censusFalsificationRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="85"
                    value={censusFalsificationRate}
                    onChange={(e) => setCensusFalsificationRate(Number(e.target.value))}
                    className="w-full accent-[#C5A46D] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#8E95A2] font-telemetry">
                    <span>0% (Точный пересчёт)</span>
                    <span>85% (Виртуальная интерполяция)</span>
                  </div>
                </div>

                {/* Slider 2 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-telemetry">
                    <span className="text-[#E8E6DF]">Дублирование регистрации в урбанистических центрах:</span>
                    <span className="text-[#C5A46D] font-bold">{urbanGhostRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="60"
                    value={urbanGhostRate}
                    onChange={(e) => setUrbanGhostRate(Number(e.target.value))}
                    className="w-full accent-[#C5A46D] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#8E95A2] font-telemetry">
                    <span>0% (Один человек — один адрес)</span>
                    <span>60% (Массовые "мёртвые души" и двойной учёт)</span>
                  </div>
                </div>

                {/* Slider 3 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-telemetry">
                    <span className="text-[#E8E6DF]">Доля пустующих деревень и завышения сельской плотности:</span>
                    <span className="text-[#C5A46D] font-bold">{ruralGhostRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="80"
                    value={ruralGhostRate}
                    onChange={(e) => setRuralGhostRate(Number(e.target.value))}
                    className="w-full accent-[#C5A46D] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#8E95A2] font-telemetry">
                    <span>0% (Все деревни заселены)</span>
                    <span>80% (Фиктивные сельские реестры)</span>
                  </div>
                </div>

                {/* Slider 4 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-telemetry">
                    <span className="text-[#E8E6DF]">Дефицит калорийного баланса урожая (FAO proxy):</span>
                    <span className="text-[#C5A46D] font-bold">{foodProxyFactor}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="60"
                    value={foodProxyFactor}
                    onChange={(e) => setFoodProxyFactor(Number(e.target.value))}
                    className="w-full accent-[#C5A46D] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#8E95A2] font-telemetry">
                    <span>0% (Еды хватает на 8+ млрд)</span>
                    <span>60% (Урожая хватает только на 2-3 млрд)</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Output Indicator Box */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-[#14171D] border border-[#C5A46D]/30 rounded-lg p-6 sm:p-8 space-y-6">
                  <div className="text-xs font-telemetry uppercase tracking-wider text-[#C5A46D] pb-3 border-b border-[#C5A46D]/15">
                    РЕЗУЛЬТАТЫ СИМУЛЯЦИОННОЙ МОДЕЛИ
                  </div>

                  <div>
                    <div className="text-xs font-telemetry text-[#8E95A2] uppercase">
                      Реалистичная расчётная численность:
                    </div>
                    <div className="text-4xl sm:text-5xl font-serif text-[#C5A46D] font-bold tabular-nums mt-1">
                      {calculatedStats.alternativeBillion} млрд
                    </div>
                    <div className="text-xs text-[#8E95A2] mt-1 font-sans">
                      Физически верифицируемое население Земли
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#C5A46D]/10 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[10px] font-telemetry uppercase text-[#B83A3A]">
                        Фантомная масса:
                      </div>
                      <div className="text-2xl font-serif text-[#B83A3A] font-bold tabular-nums">
                        {calculatedStats.phantomBillion} млрд
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-telemetry uppercase text-[#8E95A2]">
                        Доля фикций:
                      </div>
                      <div className="text-2xl font-serif text-[#E8E6DF] font-bold tabular-nums">
                        {calculatedStats.phantomPercent}%
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-[#101216] border border-[#C5A46D]/15 rounded text-xs text-[#8E95A2]">
                    <strong className="text-[#E8E6DF]">Вывод анализатора:</strong> При заданных параметрах свыше половины номинального населения планеты существует исключительно в базах данных и не имеет физического подтверждения в виде биомассы или тепловых следов.
                  </div>
                </div>
              </div>
            </div>

            {/* Live Chart preview with user simulated line */}
            <div className="p-6 bg-[#191D23] border border-[#C5A46D]/20 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-serif font-semibold text-[#E8E6DF]">
                  Сравнение траекторий при текущих параметрах калькулятора (1800 - 2050)
                </h4>
                <div className="text-xs font-telemetry text-[#C5A46D]">
                  Расчётная кривая обновляется в реальном времени
                </div>
              </div>

              <div className="h-64 sm:h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dynamicProjectionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#252B35" />
                    <XAxis dataKey="year" stroke="#8E95A2" tick={{ fill: '#8E95A2', fontSize: 11 }} />
                    <YAxis stroke="#8E95A2" tick={{ fill: '#8E95A2', fontSize: 11 }} unit=" млрд" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#14171D', borderColor: '#C5A46D', borderRadius: '4px', color: '#E8E6DF' }}
                      labelStyle={{ color: '#C5A46D', fontWeight: 600 }}
                      formatter={(value: any, name: any) => [
                        `${value} млрд чел.`,
                        name === 'officialPopulation'
                          ? 'Официально (ООН)'
                          : name === 'userSimulatedPopulation'
                          ? 'Ваш расчёт симулятора'
                          : 'Канонический Биборан'
                      ]}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                    <Line
                      type="monotone"
                      dataKey="officialPopulation"
                      stroke="#8E95A2"
                      strokeWidth={2}
                      dot={false}
                      name="Официальный прогноз ООН"
                    />
                    <Line
                      type="monotone"
                      dataKey="userSimulatedPopulation"
                      stroke="#C5A46D"
                      strokeWidth={3}
                      dot={{ r: 3, fill: '#C5A46D' }}
                      name="Ваша симуляция"
                    />
                    <Line
                      type="monotone"
                      dataKey="alternativePopulation"
                      stroke="#B83A3A"
                      strokeDasharray="4 4"
                      strokeWidth={2}
                      dot={false}
                      name="Базовая гипотеза Биборана"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PROJECTION TRAJECTORIES */}
        {modelTab === 'projection' && (
          <div className="bg-[#191D23] border border-[#C5A46D]/20 rounded-lg p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-serif font-semibold text-[#E8E6DF]">
              Хронологическое расхождение: 1800 – 2050 годы
            </h3>
            <p className="text-xs text-[#8E95A2]">
              До 1950 года разница между официальными и альтернативными оценками не превышала 30%. После создания институтов ООН кривые расходятся по экспоненте.
            </p>

            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={HISTORICAL_POPULATION}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#252B35" />
                  <XAxis dataKey="year" stroke="#8E95A2" />
                  <YAxis stroke="#8E95A2" unit=" млрд" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#14171D', borderColor: '#C5A46D', color: '#E8E6DF' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="officialPopulation" stroke="#8E95A2" strokeWidth={2} name="ООН (Официально)" />
                  <Line type="monotone" dataKey="alternativePopulation" stroke="#C5A46D" strokeWidth={3} name="Биборан (Альтернатива)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* TAB 3: REGIONAL DISCREPANCY */}
        {modelTab === 'regional' && (
          <div className="bg-[#191D23] border border-[#C5A46D]/20 rounded-lg p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-serif font-semibold text-[#E8E6DF]">
              Региональный анализ искажений (млн человек)
            </h3>
            <p className="text-xs text-[#8E95A2]">
              Сравнение официальной декларации и верифицируемого остатка по ключевым континентальным макрорегионам.
            </p>

            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={REGIONAL_COMPARISON} layout="vertical" margin={{ left: 40, right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#252B35" />
                  <XAxis type="number" stroke="#8E95A2" unit=" млн" />
                  <YAxis dataKey="region" type="category" stroke="#8E95A2" tick={{ fill: '#8E95A2', fontSize: 10 }} width={160} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#14171D', borderColor: '#C5A46D', color: '#E8E6DF' }}
                  />
                  <Legend />
                  <Bar dataKey="officialPopulation" fill="#8E95A2" name="Заявлено официально" />
                  <Bar dataKey="alternativeEstimate" fill="#C5A46D" name="Оценка Биборана" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
