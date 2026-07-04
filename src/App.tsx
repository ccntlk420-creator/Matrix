import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Cpu, 
  Globe, 
  Telescope, 
  Eye, 
  ChevronRight, 
  ShieldAlert,
  Terminal,
  Activity,
  Layers
} from 'lucide-react';

// --- Components ---

const DigitalRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const columns = Math.floor(width / 20);
    const drops: number[] = new Array(columns).fill(0);
    
    // Matrix characters
    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテト';

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);
      ctx.font = '15px "Roboto Mono"';
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillStyle = '#00FF00';
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(drawMatrix, 50);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const newCols = Math.floor(width / 20);
      drops.length = 0;
      for (let i = 0; i < newCols; i++) drops[i] = 0;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-10 z-0 bg-black"
    />
  );
};

const MatrixCard = ({ children, title, index, delay = 0, image, imageClassName = "" }: { children: React.ReactNode, title: string, index: string, delay?: number, image?: string, imageClassName?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="matrix-card flex flex-col h-full"
  >
    <h3 className="text-xs uppercase font-bold mb-4 flex items-center gap-2">
      <span className="text-matrix-green">{index}.</span> {title}
    </h3>
    {image && (
      <div className="mb-6 overflow-hidden border border-matrix-green/30 aspect-[4/3] relative">
        <div className="absolute inset-0 bg-matrix-green/10 mix-blend-overlay z-10 pointer-events-none"></div>
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 brightness-75 contrast-125 ${imageClassName}`} 
          referrerPolicy="no-referrer" 
        />
      </div>
    )}
    <div className="text-sm leading-snug opacity-70 italic font-medium flex-1">
      {children}
    </div>
  </motion.div>
);

const MatrixLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="px-1 bg-matrix-green text-black text-[10px] uppercase font-black tracking-widest mb-4 inline-block">
    {children}
  </span>
);

export default function App() {
  return (
    <div className="matrix-frame min-h-screen relative overflow-hidden bg-black selection:bg-matrix-green selection:text-black">
      <div className="matrix-grid-overlay absolute inset-0 pointer-events-none opacity-40"></div>
      <div className="matrix-scanner"></div>
      <DigitalRain />
      
      {/* Navbar / Header Style */}
      <header className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center p-10 gap-6">
        <div className="text-[10px] tracking-[0.2em] uppercase leading-relaxed font-bold">
          System Status: <span className="text-white">Breached</span><br />
          Observer: <span className="text-white">Anonym_tru_t_01</span><br />
          Reality: <span className="text-white">Subjective</span>
        </div>
        <div className="md:text-right">
          <div className="text-5xl font-black italic tracking-tighter leading-none text-white">MATRIX_PRO.v3</div>
          <div className="text-[10px] tracking-widest uppercase mt-1 opacity-60">The Simulation Disclosure Project</div>
        </div>
      </header>

      <main className="relative z-10 px-10 pb-20">
        {/* Hero Section */}
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-full"
          >
            <MatrixLabel>СИСТЕМНОЕ УВЕДОМЛЕНИЕ</MatrixLabel>
            <h1 className="text-[80px] md:text-[140px] xl:text-[180px] font-black leading-[0.75] uppercase tracking-tighter flex flex-col">
              <span className="text-matrix-green">РЕАЛЬНОСТИ</span>
              <span className="text-black bg-matrix-green px-4 mr-auto">НЕ</span>
              <span className="flex flex-col xl:flex-row xl:items-center gap-8">
                <span className="text-matrix-green">СУЩЕСТВУЕТ</span>
                <span className="text-base md:text-xl font-normal normal-case tracking-normal max-w-sm leading-tight text-white/80 border-l-2 border-matrix-green pl-6 py-2">
                  "А если бы съел синюю, то негр бы съел красную"
                </span>
              </span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-20">
              <a href="#intro" className="matrix-pill-red min-w-[200px] text-lg py-4 flex items-center justify-center">ВХОД В ТЕРМИНАЛ</a>
              <a href="#glitches" className="matrix-pill-white min-w-[200px] text-lg py-4 flex items-center justify-center">СКАНИРОВАТЬ СБОИ</a>
            </div>
          </motion.div>
        </section>

        {/* Intro Section - What is it? */}
        <section id="intro" className="py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 border-t border-matrix-green/20">
          <div>
            <MatrixLabel>ГИПОТЕЗА СИМУЛЯЦИИ</MatrixLabel>
            <h2 className="text-6xl font-black italic mb-10 text-white uppercase leading-none">Simulation <br/> Hypothesis</h2>
            <p className="text-xl text-matrix-green leading-relaxed mb-8 font-medium">
              Гипотеза симуляции гласит: вся наша реальность — это искусственная среда. Высокоразвитые цивилизации могут моделировать сознательные существа, не отличающиеся от «реальных».
            </p>
            <div className="space-y-4 font-mono text-sm opacity-60">
              <div className="flex justify-between border-b border-matrix-green/10 py-2">
                <span>ОСНОВНОЙ АВТОР:</span>
                <span className="text-white">НИК БОСТРОМ (2003)</span>
              </div>
              <div className="flex justify-between border-b border-matrix-green/10 py-2">
                <span>ТИП АРГУМЕНТА:</span>
                <span className="text-white">ВЕРОЯТНОСТНЫЙ АНАЛИЗ</span>
              </div>
              <div className="flex justify-between border-b border-matrix-green/10 py-2">
                <span>ИСТОКИ:</span>
                <span className="text-white">ПЛАТОН («МИФ О ПЕЩЕРЕ»)</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="matrix-grid-overlay absolute inset-0 z-10 pointer-events-none group-hover:opacity-10 transition-opacity"></div>
            <img src="https://cdn.shopify.com/s/files/1/0015/1181/7315/files/platos-cave-allegory-meme_600x600.jpg?v=1695841095" alt="Plato's Cave" className="w-full h-full object-cover border-2 border-matrix-green grayscale group-hover:grayscale-0 transition-all duration-700 shadow-[0_0_30px_rgba(0,255,0,0.1)]" referrerPolicy="no-referrer" />
            <div className="absolute bottom-4 left-4 z-20">
              <MatrixLabel>АНТРОПОЛОГИЯ ЛЖИ</MatrixLabel>
            </div>
          </div>
        </section>

        {/* Bostrom Profile */}
        <section className="py-32 border-t border-matrix-green/20 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-1 md:col-span-2">
            <MatrixLabel>ПЕРСОНА: НИК БОСТРОМ</MatrixLabel>
            <h2 className="text-6xl font-black text-white italic uppercase mb-8">Никлас Бостром</h2>
            <p className="text-lg opacity-70 mb-8 max-w-2xl">
              Шведский философ, профессор Оксфордского университета и директор Института будущего человечества. Именно он в 2003 году сформулировал идею симуляции логически, превратив фантастику в научную проблему.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm uppercase font-black">
              <div className="flex flex-col gap-1">
                <span className="text-matrix-green opacity-40">ТЕКУЩАЯ РОЛЬ</span>
                <span>Оксфордский университет</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-matrix-green opacity-40">КЛЮЧЕВОЙ ТРУД</span>
                <span>Superintelligence (2014)</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-matrix-green opacity-40">ОСНОВНЫЕ ТЕМЫ</span>
                <span>Этика технологий, экзистенциальные риски</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-matrix-green opacity-40">ВЛИЯНИЕ</span>
                <span>Илон Маск, Билл Гейтс</span>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-4">
            <div className="p-8 border-2 border-matrix-green bg-matrix-green/10">
              <h4 className="font-black mb-4">БИОГРАФИЯ:</h4>
              <p className="text-xs opacity-60 font-mono">
                Niklas Boström. Born March 10, 1973. 
                Focused on global risks that could threaten human existence.
                His work defines the strategies for AI safety in the modern era.
              </p>
            </div>
            <div className="p-8 border border-white/20 italic text-xs leading-relaxed">
              "Её сила не в фактах, а в том, что её очень сложно опровергнуть — и именно это делает её жуткой."
            </div>
          </div>
        </section>

        {/* The Trilemma Section */}
        <section className="py-32 border-y border-matrix-green/20 bg-matrix-green/[0.02]">
          <div className="max-w-4xl mb-20">
            <MatrixLabel>ТРИЛЕММА БОСТРОМА</MatrixLabel>
            <h2 className="text-6xl font-black text-white italic uppercase mb-8 leading-none">Один из вариантов <br/> обязан быть правдой:</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border-2 border-matrix-green/30 bg-black flex flex-col gap-6">
              <span className="text-4xl font-black text-matrix-green opacity-20">01.</span>
              <p className="text-white font-bold leading-tight">Цивилизации не доживают до создания симуляций.</p>
            </div>
            <div className="p-8 border-2 border-matrix-green/30 bg-black flex flex-col gap-6">
              <span className="text-4xl font-black text-matrix-green opacity-20">02.</span>
              <p className="text-white font-bold leading-tight">Они могут, но почему-то не хотят их запускать.</p>
            </div>
            <div className="p-8 border-2 border-matrix-green bg-matrix-green/20 flex flex-col gap-6 shadow-[0_0_30px_rgba(0,255,0,0.2)]">
              <span className="text-4xl font-black text-matrix-green">03.</span>
              <p className="text-white font-black text-xl leading-tight">Мы почти наверняка УЖЕ живем в симуляции.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
             <p className="text-matrix-green font-black text-2xl uppercase italic animate-pulse">
                ВЕРОЯТНОСТЬ {'>'} 99.9%
             </p>
          </div>
        </section>

        {/* Scientific Evidence */}
        <section className="py-32">
          <div className="mb-20">
            <h2 className="text-[80px] md:text-[140px] font-black italic tracking-tighter uppercase text-white leading-[0.75]">ОГРАНИЧЕНИЯ <br/> <span className="text-matrix-green">РЕНДЕРИНГА</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12 border-2 border-matrix-green/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <Zap size={60} className="text-matrix-green" />
              </div>
              <h3 className="text-3xl font-black uppercase mb-6 text-white tracking-widest">Скорость света</h3>
              <p className="text-lg text-matrix-green leading-relaxed mb-6 font-medium uppercase">
                interpret: "Maximum processing speed"
              </p>
              <p className="text-sm opacity-60 leading-relaxed font-mono">
                Фундаментальная постоянная (c) ≈ 299 792 458 м/с. <br/>
                Почему материя не может двигаться быстрее? Это звучит как максимальная частота обработки данных процессором вселенной. Выше нее информация просто не успевает записываться.
              </p>
            </div>
            
            <div className="p-12 border-2 border-matrix-green/30 bg-matrix-green/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <Eye size={60} className="text-matrix-green" />
              </div>
              <h3 className="text-3xl font-black uppercase mb-6 text-white tracking-widest">Эффект наблюдателя</h3>
              <p className="text-lg text-matrix-green leading-relaxed mb-6 font-medium uppercase">
                interpret: "Lazy loading"
              </p>
              <p className="text-sm opacity-60 leading-relaxed font-mono">
                Эксперимент с двумя щелями: частицы ведут себя по-разному при измерении. <br/>
                Без наблюдения — это волновая функция (набор вероятностей). <br/>
                При наблюдении — коллапс волновой функции. <br/>
                Система рендерит конкретную физическую реальность ТОЛЬКО когда на нее смотрят.
              </p>
            </div>

            <div className="p-12 border-2 border-matrix-green/30 bg-matrix-green/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <Layers size={60} className="text-matrix-green" />
              </div>
              <h3 className="text-3xl font-black uppercase mb-6 text-white tracking-widest">Planck Length</h3>
              <p className="text-lg text-matrix-green leading-relaxed mb-6 font-medium uppercase">
                interpret: "Screen resolution"
              </p>
              <p className="text-sm opacity-60 leading-relaxed font-mono">
                У вселенной есть минимальная единица длины и времени. <br/>
                Ниже Планковского уровня физика перестает иметь смысл. <br/>
                Это «разрешение» реальности. Наш мир состоит из цифровых пикселей времени и пространства.
              </p>
            </div>

            <div className="p-12 border-2 border-matrix-green/30 relative overflow-hidden group border-matrix-red/30">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <ShieldAlert size={60} className="text-matrix-red" />
              </div>
              <h3 className="text-3xl font-black uppercase mb-6 text-white tracking-widest">Эффект Манделы</h3>
              <p className="text-lg text-matrix-red leading-relaxed mb-6 font-medium uppercase">
                interpret: "System Patch Errors"
              </p>
              <p className="text-sm opacity-60 leading-relaxed font-mono">
                Ложные коллективные воспоминания. <br/>
                Это не плохая память — это криво установленные патчи реальности. <br/>
                Данные были обновлены в «серверной части», но не у всех клиентов произошла синхронизация.
              </p>
            </div>
          </div>
        </section>

        {/* Glitches Gallery */}
        <section id="glitches" className="py-32 border-t border-matrix-green/20">
          <div className="mb-20">
            <MatrixLabel>RENDERING_BUGS.EXE</MatrixLabel>
            <h2 className="text-7xl font-black italic text-white uppercase leading-none">Сбои <br/> в реальном времени</h2>
            <p className="text-lg opacity-50 italic mt-6">Ошибки кэширования, дублирование ассетов и баги рендеринга.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <MatrixCard title="Shadow Mapping Error" index="G-00" image="https://www.altyn-orda.kz/wp-content/uploads/1373282695_001.jpg">
              Критическая ошибка отрисовки: три одинаковых ассета NPC на малом участке.
            </MatrixCard>
            <MatrixCard title="OG Synchro" index="G-01" image="https://www.prikol.ru/wp-content/gallery/april-2017/matrix-glitch-003.jpg">
              Обнаружен критический сбой синхронизации: группа объектов типа "dog" выполняет идентичную анимацию в одной локации.
            </MatrixCard>
            <MatrixCard 
              title="Texture Clipping" 
              index="G-02" 
              image="https://demotions.ru/uploads/posts/2018-07/1531301604_ZASTRYaL-V-TEKSTURAH_demotions.ru.jpg"
              imageClassName="scale-140 object-top"
            >
              Критическая ошибка коллизии: физический объект застрял в геометрии уровня. Перезагрузка реальности не помогла.
            </MatrixCard>
            <MatrixCard title="Collision Failure" index="G-03" image="https://cs8.pikabu.ru/post_img/big/2017/06/18/7/1497780006140177378.jpg">
              Ошибка детекции столкновений: физическая оболочка транспорта игнорирует статические препятствия. Сбой в расчете векторов.
            </MatrixCard>
            <MatrixCard title="Low Poly Asset" index="G-04" image="https://mixnews.lv/wp-content/uploads/2025/01/15/photo17367670541.webp">
              Прогружен объект критически низкой детализации
            </MatrixCard>
            <MatrixCard 
              title="Spawn Error" 
              index="G-05" 
              image="https://demotions.ru/uploads/posts/2017-12/1513530576_Sboy-v-matrice_demotions.ru.jpg"
              imageClassName="scale-[1.6] translate-y-[85px] object-center"
            >
              Спаун ассетов npc в неверной локации
            </MatrixCard>
            <MatrixCard title="Levitating Object" index="G-06" image="https://mixnews.lv/wp-content/uploads/2025/01/15/photo173676706012.webp">
              ебучая помойка летает
            </MatrixCard>
            <MatrixCard title="Clipping Bug" index="G-07" image="https://preview.redd.it/invisible-truck-1000-sneak-10-mobility-v0-pigg2udniqu51.jpg?auto=webp&s=f8c9033c6fbc799e6849fbdb5901ee10d8e51a1f">
              Объект провалился сквозь базовый слой поверхности. Ошибка коллизии.
            </MatrixCard>
          </div>
        </section>

        {/* Social Realization */}
        <section className="py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-8 order-2 lg:order-1">
                <MatrixLabel>КОЛЛЕКТИВНОЕ ПРОБУЖДЕНИЕ</MatrixLabel>
                <h2 className="text-6xl font-black italic text-white leading-none uppercase">Они больше <br/> не скрываются</h2>
                <p className="text-xl text-matrix-green font-medium leading-relaxed uppercase">
                    Миллионы людей синхронно приходят к одному и тому же выводу. Код проступает сквозь ткань мироздания.
                </p>
                <div className="p-6 border-l-4 border-matrix-green bg-matrix-green/5 text-sm opacity-60 font-mono">
                    "Давайте это признаем... Блять, мы просто живем в матрице!!!!"
                </div>
            </div>
            <div className="order-1 lg:order-2 border-x-8 border-matrix-green/40 p-4">
                <img src="https://i.imgur.com/jWSC2lA.jpeg" alt="Collective Awareness" className="w-full border-2 border-matrix-green shadow-[0_0_50px_rgba(0,255,0,0.1)] brightness-75 hue-rotate-90" referrerPolicy="no-referrer" />
            </div>
        </section>

        {/* Wake Up Section */}
        <section id="wakeup" className="py-40 border-t-8 border-matrix-green relative overflow-hidden">
          <div className="absolute right-0 top-0 text-[300px] font-black opacity-[0.03] pointer-events-none select-none italic text-matrix-green translate-x-1/2 -translate-y-1/2">ERROR</div>
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-7xl md:text-[160px] font-black italic tracking-tighter uppercase text-matrix-green mb-10 leading-[0.8]">ПРОСНИСЬ</h2>
              <p className="text-xl md:text-4xl text-white font-black mb-16 uppercase leading-[1.1] max-w-4xl border-l-[16px] border-matrix-red pl-10 py-4 shadow-[-20px_0_40px_rgba(255,0,0,0.1)]">
                Ты принимаешь синюю таблетку — и сказке конец. <br/>
                Ты принимаешь красную таблетку — и я покажу тебе, <br/>
                как глубока кроличья нора.
              </p>
              
              <div className="flex flex-col md:flex-row gap-8">
                <a 
                  href="https://ayerhsmagazine.com/2023/03/18/people-of-the-twenty-first-century-by-dutch-photographer-hans-eijkelboom/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 matrix-pill-red text-3xl py-12 flex flex-col items-center justify-center gap-4 group text-center"
                >
                  <span className="font-black">КРАСНАЯ ТАБЛЕТКА</span>
                  <span className="text-xs opacity-60 font-black tracking-[0.4em] group-hover:opacity-100 transition-opacity">ВЫБРАТЬ ИСТИНУ</span>
                </a>

                <a 
                  href="https://www.instagram.com/reel/DULn3TkilDs/?igsh=MThmemk4ODYyZnI0MQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 matrix-pill-white text-3xl py-12 flex flex-col items-center justify-center gap-4 group text-center"
                >
                  <span className="font-black">СИНЯЯ ТАБЛЕТКА</span>
                  <span className="text-xs opacity-60 font-black tracking-[0.4em] group-hover:opacity-100 transition-opacity">ВЕРНУТЬСЯ В СОН</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-10 border-t border-matrix-green flex flex-col md:flex-row items-end md:items-center justify-between gap-12 mt-20 bg-black">
        <div className="flex gap-12 flex-wrap">
          <div>
            <div className="text-[10px] opacity-40 uppercase">Latency</div>
            <div className="text-2xl font-black text-white">0.00032ms</div>
          </div>
          <div>
            <div className="text-[10px] opacity-40 uppercase">Active Nodes</div>
            <div className="text-2xl font-black text-white">12.8M / CORE</div>
          </div>
          <div>
            <div className="text-[10px] opacity-40 uppercase">System Time</div>
            <div className="text-2xl font-black text-white">{new Date().toLocaleTimeString()}</div>
          </div>
        </div>
        
        <div className="text-right flex flex-col items-end">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-2 bg-matrix-green opacity-20"></div>
            <div className="w-12 h-2 bg-matrix-green opacity-40"></div>
            <div className="w-12 h-2 bg-matrix-green opacity-100"></div>
          </div>
          <div className="text-[10px] opacity-60 uppercase tracking-[0.3em] font-black">
            Authorized access only. Reality is non-refundable.
          </div>
          <div className="text-[8px] opacity-20 mt-2 font-mono">
            DISCLOSURE_PROTOCOL_ACTIVE // OXFORD_FH_SOURCE
          </div>
        </div>
      </footer>
    </div>
  );
}
