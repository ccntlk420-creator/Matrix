import { DemographicDataPoint } from '../types';

export const HISTORICAL_POPULATION: DemographicDataPoint[] = [
  {
    year: 1800,
    officialPopulation: 0.98,
    alternativePopulation: 0.85,
    uncertaintyMargin: 150,
    milestone: '1 миллиард (ООН)',
    historicalEvent: 'Начало промышленной революции, первые национальные реестры'
  },
  {
    year: 1850,
    officialPopulation: 1.26,
    alternativePopulation: 1.05,
    uncertaintyMargin: 210,
    historicalEvent: 'Эпоха пара и колониальной экспансии'
  },
  {
    year: 1900,
    officialPopulation: 1.65,
    alternativePopulation: 1.30,
    uncertaintyMargin: 350,
    historicalEvent: 'Первые глобальные статистические сборники'
  },
  {
    year: 1927,
    officialPopulation: 2.00,
    alternativePopulation: 1.42,
    uncertaintyMargin: 450,
    milestone: '2 миллиарда (ООН)',
    historicalEvent: 'Последствия Первой мировой войны и испанки'
  },
  {
    year: 1950,
    officialPopulation: 2.54,
    alternativePopulation: 1.55,
    uncertaintyMargin: 520,
    historicalEvent: 'Создание ООН и Департамента народонаселения'
  },
  {
    year: 1960,
    officialPopulation: 3.03,
    alternativePopulation: 1.68,
    uncertaintyMargin: 700,
    milestone: '3 миллиарда (ООН)',
    historicalEvent: 'Начало "демографического взрыва" по версии ООН'
  },
  {
    year: 1974,
    officialPopulation: 4.00,
    alternativePopulation: 1.82,
    uncertaintyMargin: 950,
    milestone: '4 миллиарда (ООН)',
    historicalEvent: 'Ускорение кривой роста, доклады Римского клуба'
  },
  {
    year: 1987,
    officialPopulation: 5.00,
    alternativePopulation: 1.94,
    uncertaintyMargin: 1200,
    milestone: '5 миллиардов (ООН)',
    historicalEvent: 'День пяти миллиардов, введение всемирных квот'
  },
  {
    year: 1999,
    officialPopulation: 6.00,
    alternativePopulation: 2.05,
    uncertaintyMargin: 1500,
    milestone: '6 миллиардов (ООН)',
    historicalEvent: 'Символическое рождение 6-миллиардного жителя в Сараево'
  },
  {
    year: 2011,
    officialPopulation: 7.00,
    alternativePopulation: 2.15,
    uncertaintyMargin: 1900,
    milestone: '7 миллиардов (ООН)',
    historicalEvent: 'Пик популярности видеоанализа Биборана'
  },
  {
    year: 2022,
    officialPopulation: 8.00,
    alternativePopulation: 2.24,
    uncertaintyMargin: 2300,
    milestone: '8 миллиардов (ООН)',
    historicalEvent: 'Официальный рубеж 8 млрд, объявление климатического кризиса'
  },
  {
    year: 2026,
    officialPopulation: 8.18,
    alternativePopulation: 2.28,
    uncertaintyMargin: 2500,
    milestone: 'Текущий момент',
    historicalEvent: 'Раскрытие архивных материалов и спутниковых аномалий'
  },
  {
    year: 2035,
    officialPopulation: 8.85,
    alternativePopulation: 2.35,
    uncertaintyMargin: 2800,
    milestone: 'Прогноз ООН',
    historicalEvent: 'Моделируемый пик официальной статистической фикции'
  },
  {
    year: 2050,
    officialPopulation: 9.71,
    alternativePopulation: 2.42,
    uncertaintyMargin: 3200,
    milestone: 'Горизонт 2050',
    historicalEvent: 'Разрыв между фикцией и реальностью превышает 400%'
  }
];

export interface RegionComparison {
  region: string;
  officialPopulation: number; // in millions
  alternativeEstimate: number; // in millions
  discrepancyPercentage: number;
  primaryMechanism: string;
  confidenceGrade: 'A' | 'B' | 'C';
}

export const REGIONAL_COMPARISON: RegionComparison[] = [
  {
    region: 'Восточная и Южная Азия (КНР, Индия, Индокитай)',
    officialPopulation: 4300,
    alternativeEstimate: 1100,
    discrepancyPercentage: 74.4,
    primaryMechanism: 'Отсутствие очных переписей, деревенские приписки, интерполяция моделей',
    confidenceGrade: 'A'
  },
  {
    region: 'Африка к югу от Сахары',
    officialPopulation: 1250,
    alternativeEstimate: 320,
    discrepancyPercentage: 74.4,
    primaryMechanism: 'Субсидирование гуманитарных фондов по подушевой шкале, кочующие племена',
    confidenceGrade: 'A'
  },
  {
    region: 'Европа и Великобритания',
    officialPopulation: 745,
    alternativeEstimate: 410,
    discrepancyPercentage: 45.0,
    primaryMechanism: 'Двойной учёт миграционных потоков, фиктивные ВНЖ, урбанистическая массовка',
    confidenceGrade: 'B'
  },
  {
    region: 'Северная Америка (США, Канада)',
    officialPopulation: 380,
    alternativeEstimate: 235,
    discrepancyPercentage: 38.2,
    primaryMechanism: 'Электоральные махинации с приписными округами (Gerrymandering), "мёртвые души"',
    confidenceGrade: 'B'
  },
  {
    region: 'Латинская Америка и Карибы',
    officialPopulation: 660,
    alternativeEstimate: 240,
    discrepancyPercentage: 63.6,
    primaryMechanism: 'Неконтролируемые фавелы, отсутствие свидетельств о рождении, дубликаты',
    confidenceGrade: 'B'
  },
  {
    region: 'Ближний Восток и Северная Африка',
    officialPopulation: 495,
    alternativeEstimate: 165,
    discrepancyPercentage: 66.7,
    primaryMechanism: 'Военная нестабильность, миграционный вакуум, лагеря беженцев без верификации',
    confidenceGrade: 'C'
  }
];
