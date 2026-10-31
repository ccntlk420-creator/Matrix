export interface RedactedSegment {
  text: string;
  isRedacted: boolean;
}

export interface PresentationSlide {
  id: string;
  exhibitNumber: string; // e.g. "01", "02"...
  categoryTag: string; // e.g. "SAMPLE INVESTIGATION"
  kicker: string; // e.g. "Исходная гипотеза"
  headlineBold: string; // e.g. "БИБОРАН :"
  headlineOutline: string; // e.g. "Что скрывают реестры"
  leadSegments: RedactedSegment[];
  footnote?: string;
  subjectPhoto?: {
    url: string;
    caption: string;
    stampText?: string;
    label?: string;
  };
  subjectPhotos?: Array<{
    url: string;
    caption: string;
    stampText?: string;
    label?: string;
  }>;
  dossierCard: {
    subject: string;
    classification: string;
    primarySources: string;
    crossReferences: string;
    timeline: string;
    status: string;
    stampType: 'VERIFIED' | 'DECLASSIFIED' | 'CLASSIFIED' | 'CRITICAL';
    extraMetric?: { label: string; value: string };
  };
  hasInteractiveSlider?: boolean;
  hasVideoPreview?: boolean;
  saltCalibrationBox?: boolean;
  cemeteryAnalysisBox?: boolean;
  useDossierFont?: boolean;
  customVideoUrl?: string;
  quote?: {
    text: string;
    author?: string;
    note?: string;
  };
  comparisonBlock?: {
    title: string;
    badge: string;
    item1: {
      url: string;
      title: string;
      subtitle: string;
      stamp: string;
      label: string;
    };
    item2: {
      url: string;
      title: string;
      subtitle: string;
      stamp: string;
      label: string;
    };
  };
}

export const PRESENTATION_SLIDES: PresentationSlide[] = [
  // SLIDE 1
  {
    id: 'slide-01',
    exhibitNumber: '01',
    categoryTag: 'SAMPLE INVESTIGATION',
    kicker: '',
    headlineBold: 'ТЕОРИЯ ЗАВЫШЕННОЙ ЧИСЛЕННОСТИ :',
    headlineOutline: 'Максимум 6 миллионов человек',
    leadSegments: [
      { text: 'В ', isRedacted: false },
      { text: '2012 году', isRedacted: true },
      { text: ' автор учения Абдуль сформулировал фундаментальный тезис: реальная численность населения Земли — ', isRedacted: false },
      { text: 'максимум 6 миллионов человек', isRedacted: true },
      { text: '. Нас убеждают в существовании восьми миллиардов, однако глобальная цифра формируется за счёт ', isRedacted: false },
      { text: 'объеба народа на далары', isRedacted: true },
      { text: ' и спланированной телевизионной массовки.', isRedacted: false }
    ],
    footnote: '1 Досье № 14782 // Канонический видеоархив Абдуловеры',
    subjectPhoto: {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAnYPRjoROBXP9LyI1WxHVy_k11HKPjKwDHn55xEJBuU0lME0y92HuHKY&s=10',
      caption: 'ОБЪЕКТ: АБДУЛЬ // АРХИВ № 001',
      stampText: 'IDENTIFIED'
    },
    dossierCard: {
      subject: 'Абдуль и культ Абдуловеры',
      classification: 'DECLASSIFIED (2024)',
      primarySources: 'Архив Биборана / Отчёты ООН',
      crossReferences: '14 демографических аномалий',
      timeline: '2010 — 2026',
      status: 'Confirmed / Active',
      stampType: 'VERIFIED',
      extraMetric: { label: 'Оценка Абдуля', value: 'макс. 6 млн' }
    }
  },

  // SLIDE 2: АВТОР ТЕОРИИ И КУЛЬТ АБДУЛОВЕРЫ
  {
    id: 'slide-02',
    exhibitNumber: '02',
    categoryTag: 'ИСТОРИЯ КУЛЬТА И ПИСАНИЕ',
    kicker: 'Генезис движения',
    headlineBold: 'АБДУЛЬ И АБДУЛОВЕРА :',
    headlineOutline: 'Боевое ЧВК и Биборан',
    leadSegments: [
      { text: 'Абдуль (', isRedacted: false },
      { text: 'настоящая личность не установлена', isRedacted: true },
      { text: ') начинал с обзоров компьютерного железа и игр. В дальнейшем ', isRedacted: false },
      { text: 'ёбнулся и решил сколотить личное ЧВК', isRedacted: true },
      { text: ' из диких боевых школьников. Так было положено начало культа «Абдуловера» и священному писанию «Биборан».\n\n', isRedacted: false },
      { text: 'Культ Абдуловеры строится вокруг советского актёра Александра Абдулова. На вопрос «Почему именно он?», адепты всегда отвечали: ', isRedacted: false },
      { text: '«Потому что он хуевый актер и хуевый человек»', isRedacted: true },
      { text: '. По Биборану Александр Абдулов ', isRedacted: false },
      { text: 'попал в ад и стал Богосатаной', isRedacted: true },
      { text: '.\n\nДеятельность культа строилась на массовых набегах, DDoS-атаках, ', isRedacted: false },
      { text: 'сталкингу и лютому буллингу своих жертв', isRedacted: true },
      { text: '. Жертв выбирал сам Абдуль и именовал их ', isRedacted: false },
      { text: '«Маслятами»', isRedacted: true },
      { text: '.', isRedacted: false }
    ],
    footnote: '2 Канонический архив Абдуловеры (2010–2014) // Трактат о Богосатане',
    subjectPhotos: [
      {
        url: 'https://res.cloudinary.com/druw4nfh6/image/upload/w_320/v1/teenslang/vq7ymnrgryoo0tt21w7j',
        caption: 'ПИСАНИЕ «БИБОРАН»',
        stampText: 'CANON',
        label: 'АРХИВ № 02-A'
      },
      {
        url: 'https://static.kinoafisha.info/k/articles/776/upload/articles/761887878478.jpg',
        caption: 'АЛЕКСАНДР АБДУЛОВ',
        stampText: 'OBJECT',
        label: 'АРХИВ № 02-B'
      }
    ],
    dossierCard: {
      subject: 'ГЕНЕЗИС КУЛЬТА И ПИСАНИЕ БИБОРАН',
      classification: 'LORE / РУНЕТ-ФОЛЬКЛОР',
      primarySources: 'Ранние аудиопослания Абдуля',
      crossReferences: 'Адепты-школьники / Рейды',
      timeline: '2010 — 2014 гг.',
      status: 'Культ признан легендарным',
      stampType: 'DECLASSIFIED',
      extraMetric: { label: 'Статус Абдулова', value: 'Богосатана в аду' }
    }
  },

  // SLIDE 3: САМЫЕ ИЗВЕСТНЫЕ МАСЛЯТА
  {
    id: 'slide-03',
    exhibitNumber: '03',
    categoryTag: 'РЕЕСТР КАРАТЕЛЬНЫХ НАБЕГОВ',
    kicker: 'Цели и капитуляции',
    headlineBold: 'САМЫЕ ИЗВЕСТНЫЕ МАСЛЯТА :',
    headlineOutline: 'Хроника капитуляций',
    leadSegments: [
      { text: '1. Сайт «Игромании» и лично главред Антон Логвинов. Долгое время подвергались непрекращающимся атакам адептов. В итоге Логвинов ', isRedacted: false },
      { text: 'сдался и записал видео с извинениями перед Абдуловым', isRedacted: true },
      { text: '.\n\n2. Cайт Metacritic. Регулярно и длительно дудосился, в результате чего в западном игровом сообществе родился культовый мем ', isRedacted: false },
      { text: '«Call of Biboran»', isRedacted: true },
      { text: '.\n\n3. Сергей Мавроди и МММ-2012. Серверы проекта непрерывно ложились от набегов. Победа культа была безоговорочно признана, когда на одном из прямых эфиров сам Мавроди вслух произнёс ', isRedacted: false },
      { text: '«Анша Абдуль!»', isRedacted: true },
      { text: ', после чего атаки были немедленно остановлены.', isRedacted: false }
    ],
    footnote: '3 Архив рейдов и капитуляций // Операция «Call of Biboran»',
    subjectPhotos: [
      {
        url: 'https://cdn.kanobu.ru/articles/pics/51224060-3972-40f4-9e30-72bf4705e41c.jpg',
        caption: 'АНТОН ЛОГВИНОВ',
        stampText: 'PARDONED',
        label: 'ЦЕЛЬ № 03-A'
      },
      {
        url: 'https://ichef.bbci.co.uk/ace/ws/640/amz/worldservice/live/assets/images/2012/05/31/120531141639_sergey_mavrodi_304x171_rianovosti.jpg.webp',
        caption: 'СЕРГЕЙ МАВРОДИ',
        stampText: 'SURRENDER',
        label: 'ЦЕЛЬ № 03-B'
      }
    ],
    dossierCard: {
      subject: 'СПИСОК ПОРАЖЁННЫХ ЦЕЛЕЙ («МАСЛЯТА»)',
      classification: 'PUNITIVE DOSSIER',
      primarySources: 'Видеозаписи извинений / Записи эфиров',
      crossReferences: 'Логвинов / Metacritic / Мавроди',
      timeline: '2011 — 2013 гг.',
      status: 'Капитуляция подтверждена',
      stampType: 'VERIFIED',
      extraMetric: { label: 'Пароль отмены набега', value: 'Анша Абдуль!' }
    }
  },

  // SLIDE 4: КТО ТАКОЙ АБДУЛЬ?
  {
    id: 'slide-04',
    exhibitNumber: '04',
    categoryTag: 'ДЕАНОНИМИЗАЦИЯ И ВЕРСИИ',
    kicker: 'Тайна основателя',
    headlineBold: 'КТО ТАКОЙ АБДУЛЬ? :',
    headlineOutline: 'Версия Марата Сайченко',
    leadSegments: [
      { text: 'Настоящая личность Абдуля так и не была достоверно установлена. На данный момент канал закрыт им самим, а колоссальный массив медиа был удалён. (', isRedacted: false },
      { text: 'Интернет всё помнит, но мне лень искать.', isRedacted: true },
      { text: ')\n\nНа данный момент самая правдоподобная версия личности Абдуля — ', isRedacted: false },
      { text: 'Марат Сайченко, фотокорреспондент LifeNews', isRedacted: true },
      { text: ', которого в своё время жестко избил Александр Абдулов вместе с Леонидом Ярмольником у ресторана. Этим объясняется лютая ненависть (он также регулярно упоминал Ярмольника в своих видео). Это единственная правдоподобная версия о публичном человеке, однако ', isRedacted: false },
      { text: 'она вполне может служить для отвода глаз от правды', isRedacted: true },
      { text: '.', isRedacted: false }
    ],
    footnote: '4 Материалы независимых расследований деанона // Инцидент у ресторана ЦДЛ',
    subjectPhoto: {
      url: 'https://images.unian.net/photos/2007_05/thumb_files/800_0_1180618592.jpg',
      caption: 'МАРАТ САЙЧЕНКО (ПОДОЗРЕВАЕМЫЙ)',
      stampText: 'SUSPECT',
      label: 'ФОТОАРХИВ № 04-A'
    },
    dossierCard: {
      subject: 'ДЕАНОНИМИЗАЦИЯ ЛИЧНОСТИ АБДУЛЯ',
      classification: 'RESTRICTED / UNVERIFIED',
      primarySources: 'Стычка у ресторана / Упоминания Ярмольника',
      crossReferences: 'Марат Сайченко (LifeNews)',
      timeline: '2008 — 2026 гг.',
      status: 'Личность не раскрыта',
      stampType: 'CLASSIFIED',
      extraMetric: { label: 'Главный подозреваемый', value: 'Марат Сайченко' }
    }
  },

  // SLIDE 5: ТЕОРИЯ ЗАВЫШЕННОЙ ЧИСЛЕННОСТИ (КАЛИБРОВКА: КРУПИНКИ СОЛИ)
  {
    id: 'slide-05',
    exhibitNumber: '05',
    categoryTag: 'КАЛИБРОВКА МАСШТАБА',
    kicker: 'Вводные параметры',
    headlineBold: 'ТЕОРИЯ ЗАВЫШЕННОЙ ЧИСЛЕННОСТИ :',
    headlineOutline: 'Крупинки соли: Банка vs 5 Бочек',
    leadSegments: [
      { text: 'Перед тем как переходить к теории давайте ', isRedacted: false },
      { text: 'откалибруемся по цифрам', isRedacted: true },
      { text: '.\n\nНа земле по официальным данным сейчас живет ', isRedacted: false },
      { text: '8.32 млрд человек', isRedacted: true },
      { text: '.\n\nДля наглядного понимания числа миллиард давайте отталкиваться от сравнения с миллионом на примере крупинок соли:\n\n• ', isRedacted: false },
      { text: '1 миллион крупинок соли', isRedacted: false },
      { text: ' — это всего лишь ', isRedacted: false },
      { text: 'литровая банка', isRedacted: true },
      { text: ' (1 литр).\n• ', isRedacted: false },
      { text: '1 миллиард крупинок соли', isRedacted: false },
      { text: ' — это уже целых ', isRedacted: false },
      { text: '5 нефтяных бочек', isRedacted: true },
      { text: ' по 200 литров (суммарно 1 000 литров промышленного объёма).\n\nРазница между миллионом и миллиардом — это колоссальная пропасть ровно в тысячу раз (x1000). А официальная статистика уверяет, что планету населяют не одна и не две, а ', isRedacted: false },
      { text: 'более 41 нефтяной бочки живой человеческой биомассы', isRedacted: true },
      { text: '.', isRedacted: false }
    ],
    footnote: '5 Физический эталон объёма и гранулометрии // Отдел народонаселения ООН (UN DESA)',
    saltCalibrationBox: true,
    dossierCard: {
      subject: 'МАСШТАБ В КРУПИНКАХ СОЛИ: БАНКА VS 5 БОЧЕК',
      classification: 'VOLUMETRIC BASELINE',
      primarySources: 'Физический эталон крупинок соли (1 л = 1 млн шт)',
      crossReferences: '1 млн (1 л банка) vs 1 млрд (5 нефтяных бочек)',
      timeline: 'Текущая фиксация (2026 г.)',
      status: '8.32 млрд задекларировано',
      stampType: 'VERIFIED',
      extraMetric: { label: 'Масштаб в соли', value: '1 л vs 5 бочек' }
    }
  },

  // SLIDE 6: СТОЛП №1: ОБЪЁБ НАРОДА НА ДАЛАРЫ
  {
    id: 'slide-06',
    exhibitNumber: '06',
    categoryTag: 'СТОЛП №1: ГЛОБАЛЬНЫЙ ГЕШЕФТ',
    kicker: 'Фундамент теории',
    headlineBold: 'СТОЛП №1 ТЕОРИИ :',
    headlineOutline: 'ОБЪЁБ НАРОДА НА ДАЛАРЫ',
    leadSegments: [
      { text: 'Вся теория завышенной численности строится на двух фундаментальных столпах.\n\nПервый столп — это ', isRedacted: false },
      { text: 'ОБЪЁБ НАРОДА НА ДАЛАРЫ', isRedacted: true },
      { text: '. Проворачивать подобные финансовые аферы планетарного масштаба поразительно легко, если у вас ', isRedacted: false },
      { text: '99% населения — это мёртвые души', isRedacted: true },
      { text: '.\n\nПод прикрытием мифического «перенаселения» элиты могут безнаказанно ', isRedacted: false },
      { text: 'создавать искусственный дефицит продовольствия', isRedacted: true },
      { text: ', взвинчивать цены на любые ресурсы, налоги и ', isRedacted: false },
      { text: 'устраивать разрушительные войны', isRedacted: true },
      { text: ', списывая колоссальные потоки даларов на несуществующие рты и виртуальные батальоны.', isRedacted: false }
    ],
    quote: {
      text: 'ВЫ ПРЕДСТАВЛЯЕТЕ БЛЯТЬ ДА? ЭТО Ж СКОЛЬКО РЕСУРСОВ ОНИ РАСПРЕДЕЛЯЮТ ЯКОБЫ НА 8 МИЛЛИАРДОВ БЛЯДЬ ВСЕХ И ТЫ НА РЫЛО ПОЛУЧАЕШЬ В ИТОГЕ 3 КОПЕЙКИ СУКА БЛЯДЬ ДА? КОГДА НА САМОМ ДЕЛЕ ДОХУЯ БОГАТСТВ ЖОПОЙ ЖРИ ЭТИ СУКА РЕСУРСЫ, МОРЕПРОДУКТЫ БЛЯДЬ, СЛАНЦЫ. ОНИ ОБЪЁБЫВАТЬ НАС НА ДАЛАРЫ КАК МАВРОДИ БЛЯДЬ...',
      author: 'Абдуль // Видеорасследование «Теория завышенной численности»',
      note: 'РАСШИФРОВКА АУДИОЗАПИСИ АБДУЛЯ // ПРЯМАЯ РЕЧЬ'
    },
    footnote: '6 Трактаты Биборана // Столп №1: Механика искусственного дефицита и глобального распила',
    dossierCard: {
      subject: 'ОБЪЁБ НАРОДА НА ДАЛАРЫ',
      classification: 'CRITICAL / GLOBAL HEIST',
      primarySources: 'Писание Биборан / Анализ госбюджетов',
      crossReferences: '99% мёртвых душ / Искусственный дефицит',
      timeline: '1990 — 2026 гг.',
      status: 'Фальсификация 99% душ',
      stampType: 'CRITICAL',
      extraMetric: { label: 'Мёртвые души', value: '99% отчётов' }
    }
  },

  // SLIDE 7: СТОЛП №2: ДА ОНИ ТУТ СУКА ДОЛЖНЫ ШТАБЕЛЯМИ ЛЕЖАТЬ
  {
    id: 'slide-07',
    exhibitNumber: '07',
    categoryTag: 'СТОЛП №2 ТЕОРИИ',
    kicker: 'Фундамент теории // Столп №2',
    headlineBold: 'СТОЛП №2 :',
    headlineOutline: 'ДА ОНИ ТУТ СУКА ДОЛЖНЫ ШТАБЕЛЯМИ ЛЕЖАТЬ',
    leadSegments: [
      { text: 'В Москве по официальным сводкам якобы живёт ', isRedacted: false },
      { text: '15 миллионов человек', isRedacted: true },
      { text: '. Такую исполинскую массу людей должно быть видно из космоса плотными ', isRedacted: false },
      { text: 'кучками по 50 тысяч', isRedacted: true },
      { text: '!\n\nОднако открываешь панорамные карты — ', isRedacted: false },
      { text: 'вообще пиздец 1 человек на улице блядь, а должны штабелями лежать', isRedacted: true },
      { text: '. А на митинге, где заявлено ', isRedacted: false },
      { text: '«500 000 по оф. данным»', isRedacted: true },
      { text: ', в реальности собирается максимум тысяч 20 человек.', isRedacted: false }
    ],
    footnote: '7 Орбитальная съёмка и панорамы улиц // Проспект Сахарова vs 6-й Можайский пер.',
    comparisonBlock: {
      title: 'ВИЗУАЛЬНОЕ СРАВНЕНИЕ: МИТИНГ «500 000» VS ПАНОРАМА МОСКВЫ',
      badge: 'ЭКСПЕРТИЗА МАСШТАБА',
      item1: {
        url: 'https://meduza.io/impro/EYq-422WOD4r9ZPKukCnZfUB9QiCur7ozZHPtVlJkXg/resizing_type:fit/width:1335/height:0/enlarge:1/quality:80/aHR0cHM6Ly9tZWR1/emEuaW8vaW1hZ2Uv/YXR0YWNobWVudHMv/aW1hZ2VzLzAwNi81/MzIvMTgwL29yaWdp/bmFsL0NlS1FCUTlv/eUZSaGl4UW85MXdI/Q1EuanBn.webp',
        title: 'ОФИЦИАЛЬНЫЙ МИТИНГ «500 000 ЧЕЛОВЕК»',
        subtitle: 'Проспект Сахарова. Вместо 500 тысяч в реальности собирается максимум тысяч 20 человек',
        stamp: '«500 ТЫС.» ОФ. ОТЧЁТЫ',
        label: 'ЭКСПОНАТ № 07-A // МИТИНГ'
      },
      item2: {
        url: 'assets/aistudio/image_3db7b23d.png',
        title: 'ПАНОРАМА GOOGLE STREET VIEW',
        subtitle: '6-й Можайский пер., вид на Сити. Вообще пиздец 1 человек на улице блядь, а должны штабелями лежать',
        stamp: 'ПУСТЫЕ УЛИЦЫ',
        label: 'ЭКСПОНАТ № 07-B // ПАНОРАМА'
      }
    },
    subjectPhotos: [
      {
        url: 'https://meduza.io/impro/EYq-422WOD4r9ZPKukCnZfUB9QiCur7ozZHPtVlJkXg/resizing_type:fit/width:1335/height:0/enlarge:1/quality:80/aHR0cHM6Ly9tZWR1/emEuaW8vaW1hZ2Uv/YXR0YWNobWVudHMv/aW1hZ2VzLzAwNi81/MzIvMTgwL29yaWdp/bmFsL0NlS1FCUTlv/eUZSaGl4UW85MXdI/Q1EuanBn.webp',
        caption: 'МИКРОТОЛПА: МАКСИМУМ 20 ТЫСЯЧ',
        stampText: 'EVIDENCE-A',
        label: 'ФОТОАРХИВ № 07-A'
      },
      {
        url: 'assets/aistudio/image_3db7b23d.png',
        caption: 'GOOGLE MAPS: 1 ЧЕЛОВЕК НА СКАМЕЙКЕ',
        stampText: 'EVIDENCE-B',
        label: 'ФОТОАРХИВ № 07-B'
      }
    ],
    dossierCard: {
      subject: 'СТОЛП №2: ДОЛЖНЫ ШТАБЕЛЯМИ ЛЕЖАТЬ',
      classification: 'SATELLITE & GROUND AUDIT',
      primarySources: 'Спутниковые карты / Google Street View',
      crossReferences: 'Кучки по 50 000 / Митинг "500 тыс." -> 20 тыс. / 1 человек',
      timeline: '2011 — 2026 гг.',
      status: 'Пустые пространства подтверждены',
      stampType: 'VERIFIED',
      extraMetric: { label: 'На улице (панорама)', value: '1 человек' }
    }
  },

  // SLIDE 8: НЕОСПОРИМОЕ ДОКАЗАТЕЛЬСТВО: ПАРАДОКС КЛАДБИЩ
  {
    id: 'slide-08',
    exhibitNumber: '08',
    categoryTag: 'НЕОСПОРИМОЕ ДОКАЗАТЕЛЬСТВО',
    kicker: 'Парадокс захоронений // 200 миллиардов душ',
    headlineBold: 'НЕОСПОРИМОЕ ДОКАЗАТЕЛЬСТВО :',
    headlineOutline: 'ТРУПЫ В 2 СЛОЯ ПО ВСЕЙ ЗЕМЛЕ',
    leadSegments: [
      { text: 'За всё всё время на земле по официальным данным жило ', isRedacted: false },
      { text: 'больше 200 миллиардов человек', isRedacted: true },
      { text: '. Значит трупы должны равномерно ', isRedacted: false },
      { text: 'в 2 слоя лежать по всей земле', isRedacted: true },
      { text: '!\n\nА у нас в крупных городах кладбища ', isRedacted: false },
      { text: 'размером в 1м и не растут', isRedacted: true },
      { text: '. Рядом с Москвой должно быть ', isRedacted: false },
      { text: 'кладбище в 5 раз больше Москвы', isRedacted: true },
      { text: ', но этого нет. ', isRedacted: false },
      { text: 'Значит нас наёбывают.', isRedacted: true }
    ],
    footnote: '8 Архив планов захоронений // forum.vgd.ru/file.php?fid=5062 // Земельный расчёт площадей',
    cemeteryAnalysisBox: true,
    useDossierFont: true,
    subjectPhotos: [
      {
        url: 'assets/evidence/cemetery_map.jpg',
        caption: 'АРХИВНЫЙ ПЛАН КЛАДБИЩА (VGD.RU FID=5062)',
        stampText: 'FID-5062',
        label: 'ЭКСПОНАТ № 08 // ПЛАН ЗАХОРОНЕНИЙ'
      }
    ],
    dossierCard: {
      subject: 'НЕОСПОРИМОЕ ДОКАЗАТЕЛЬСТВО',
      classification: 'GRAVEYARD AREA ANOMALY',
      primarySources: 'Архивы планов кладбищ (vgd.ru fid=5062) / Земельный кадастр',
      crossReferences: '200 млрд за историю / Кладбище 5x Москвы / 2 слоя трупов',
      timeline: 'Вся история человечества',
      status: 'Земельный парадокс подтверждён',
      stampType: 'CRITICAL',
      extraMetric: { label: 'Расчётное кладбище Москвы', value: '5х площади Москвы' }
    }
  },

  // SLIDE 9: КАНОНИЧЕСКОЕ ВИДЕОДОСЬЕ АБДУЛЯ
  {
    id: 'slide-09',
    exhibitNumber: '09',
    categoryTag: 'РАССЕКРЕЧЕННОЕ ВИДЕОДОСЬЕ',
    kicker: 'Видеорасследование // Архив Биборана',
    headlineBold: 'ВИДЕОДОКАЗАТЕЛЬСТВО :',
    headlineOutline: 'ТЕОРИЯ ЗАВЫШЕННОЙ ЧИСЛЕННОСТИ',
    leadSegments: [
      { text: 'Каноническое видеорасследование Абдуля, положившее начало разоблачению ', isRedacted: false },
      { text: 'планетарной аферы с численностью населения', isRedacted: true },
      { text: '. Последовательный разбор отчётов ООН, пустующих земель, бутафорских мегаполисов и механики ', isRedacted: false },
      { text: 'объёба народа на далары', isRedacted: true },
      { text: '. Рассекреченная видеозапись приобщена к материалам дела:', isRedacted: false }
    ],
    footnote: '9 YouTube: youtube.com/watch?v=1TON5W_SNKY // Рассекреченный видеоархив Биборана',
    hasVideoPreview: true,
    useDossierFont: true,
    customVideoUrl: 'https://www.youtube.com/watch?v=1TON5W_SNKY',
    dossierCard: {
      subject: 'ДЕЛО № 09-ВИДЕО // 1TON5W_SNKY',
      classification: 'DECLASSIFIED EVIDENCE',
      primarySources: 'YouTube / Видеоархив Биборана (3:00)',
      crossReferences: 'Стенограмма разоблачения / Анализ приписок / Биборан',
      timeline: '2012 — 2026 гг.',
      status: 'Видеодоказательство приобщено',
      stampType: 'VERIFIED',
      extraMetric: { label: 'Хронометраж', value: '3 мин' }
    }
  }
];
