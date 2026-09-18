export const dynamic = 'force-static';

const trials = [
  ['01', 'Сила', 'Одно чистое приседание с другим участником гильдии на плечах.'],
  ['02', 'Ловкость', 'Каскад: уверенно жонглировать тремя предметами в течение трёх циклов.'],
  ['03', 'Телосложение', 'Простоять в планке не менее одной минуты.'],
  ['04', 'Мудрость', 'Ответить на три вопроса основателей по лору D&D-миров или на смекалку.'],
  ['05', 'Интеллект', 'Ответить на три вопроса основателей по механике D&D 5e.'],
  ['06', 'Харизма', 'Исполнить одобренный стих, песню, танец или номер и записать его на видео.'],
];

const founders = [
  {
    name: 'Гонтар',
    description: 'Доблестный паладин с большим сердцем',
    image: 'media/gontar.webp',
    width: 1024,
    height: 1536,
  },
  {
    name: 'Гаррет',
    description: 'Спокойный странник с необычным взглядом на мир',
    image: 'media/garrett-shadow.webp',
    width: 853,
    height: 1280,
  },
  {
    name: 'Элия',
    description: 'Сердце кузни и мастер великих свершений',
    image: 'media/elia.webp',
    width: 1024,
    height: 1536,
  },
  {
    name: 'Эйдвен',
    description: 'Любознательная путешественница между мирами',
    image: 'media/aydwen.webp',
    width: 1024,
    height: 1536,
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Основная навигация">
        <a className="wordmark" href="#top">НВР</a>
        <div className="navlinks">
          <a href="#about">О гильдии</a><a href="#founders">Основатели</a><a href="#history">История</a><a href="#telegram">Telegram</a>
        </div>
        <a className="nav-cta" href="chronicles/">Летописи <span>↗</span></a>
      </nav>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <p className="hero-kicker">Гильдия игровой и гик-культуры</p>
        <h1 id="hero-title">НОГИ<span className="mobile-break"><br /></span> В РУКИ</h1>
        <img className="hero-crest" src="media/crest.webp" fetchPriority="high" alt="Герб гильдии «Ноги в Руки»" />
        <p className="hero-motto">Протяни гильдии руку —<br />она протянет тебе ногу.</p>
        <div className="hero-foot"><span>Авендум · все миры · все планы</span><a href="#hymn">Листать вниз ↓</a></div>
      </section>

      <div className="ticker" aria-hidden="true"><div>ИГРАТЬ · ПУТЕШЕСТВОВАТЬ · СОБИРАТЬСЯ · ИГРАТЬ · ПУТЕШЕСТВОВАТЬ · СОБИРАТЬСЯ · </div></div>

      <section id="hymn" className="hymn section-frame">
        <div className="section-label"><span>01</span><span>Слушать стоя</span></div>
        <div className="hymn-title"><p>ГИМН</p><h2>ГИЛЬДИИ</h2></div>
        <div className="hymn-player">
          <div className="vinyl" aria-hidden="true"><span>НВР</span></div>
          <div><h3>Гимн гильдии</h3><audio controls preload="metadata" aria-label="Гимн гильдии"><source src="media/hymn.mp3" type="audio/mpeg" /></audio></div>
        </div>
      </section>

      <section id="about" className="manifesto section-frame">
        <div className="section-label"><span>02</span><span>Кто мы</span></div>
        <p className="manifesto-lead">Гильдия — это не стены и не чат.</p>
        <p className="manifesto-lead red-text">Это прежде всего люди.</p>
        <div className="manifesto-grid">
          <p>Мы собрались благодаря любви к игровой и гик-культуре. Здесь царит открытая, дружелюбная и неформальная атмосфера.</p>
          <p>Полевые игры, кабинки, поездки и домашние встречи — мы всегда находим повод увидеться и поддержать новую движуху.</p>
        </div>
        <div className="guild-photos" aria-label="Фотографии гильдии">
          {[
            ['guild-01.jpg', 'Участники гильдии за игровым столом под гербом', '4032', '3024'],
            ['guild-02.jpg', 'Участники гильдии на костюмированной игре', '1280', '957'],
            ['guild-03.jpg', 'Встреча гильдии за настольной ролевой игрой Fate', '3024', '4032'],
            ['guild-04.jpg', 'Друзья из гильдии на прогулке', '2560', '1920'],
            ['guild-05.jpg', 'Домашняя встреча гильдии за чаем', '3008', '3024'],
            ['guild-06.jpg', 'Настольная игра при свечах', '1280', '960'],
            ['guild-07.jpg', 'Гильдия за игровым столом со свечами', '2560', '1920'],
            ['guild-08.jpg', 'Участники гильдии играют в настольную игру', '1280', '961'],
          ].map(([image, description, width, height]) => <img key={image} src={`media/${image}`} alt={description} width={Number(width)} height={Number(height)} loading="lazy" decoding="async" />)}
        </div>
      </section>

      <section id="founders" className="founders section-frame">
        <div className="founders-heading"><h2><span>ТЕ, С КОГО ВСЁ</span><span>НАЧАЛОСЬ</span></h2></div>
        <div className="founders-grid">
          {founders.map((founder) => (
            <article className="founder-card" key={founder.name}>
              <div className="founder-figure">
                <img src={founder.image} width={founder.width} height={founder.height} loading="lazy" decoding="async" alt={`Фигурка персонажа ${founder.name}`} />
              </div>
              <div className="founder-copy"><h3>{founder.name}</h3><p>{founder.description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="trials" className="trials section-frame">
        <div className="section-label light"><span>04</span><span>Посвящение</span></div>
        <div className="split-heading"><h2>ИСПЫТАНИЯ</h2><p>Чтобы стать полноправным членом, стажёр проходит испытание одной характеристики. Все шесть — полный кавалер Ордена Гильдии.</p></div>
        <div className="trial-list">
          {trials.map(([no, title, copy]) => <article className="trial-row" key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section id="history" className="history section-frame">
        <div className="section-label"><span>05</span><span>Краткая история</span></div>
        <div className="history-intro"><h2>ЭПОХИ<br />ВЛАСТИ</h2><p>Пять эпох правления — от круга Отцов-Основателей до современной эры Далии Сильвершейд.</p></div>
        <div className="history-steps">
          <article><span>Ⅰ</span><h3>Архаика и Первородный Хаос</h3><p>Эпоха Отцов-Основателей. Гильдмастера ещё не существовало, гильдия жила в чатах WhatsApp, а управление строилось на прямом вмешательстве Основателей.</p></article>
          <article><span>Ⅱ</span><h3>Великая Реформация</h3><p>Людвиг Ван Бе совершил Исход в Telegram, выстроил новую систему и стал Первым Гильдмастером.</p></article>
          <article><span>Ⅲ</span><h3>Смутное Время</h3><p>Правление Амелии стало Аниме-Ренессансом и эпохой мягкой силы. Её статус Второго Гильдмастера или И.О. остался предметом споров.</p></article>
          <article><span>Ⅳ</span><h3>Реставрация</h3><p>Людвиг Ван Бе вернулся к короткому второму правлению, а затем решил подготовить преемника и окончательно оставить пост.</p></article>
          <article><span>Ⅴ</span><h3>Эра Далии Сильвершейд</h3><p>Далия Сильвершейд была назначена преемницей. Формально — И.О., де-факто — Третий Гильдмастер, ведущий гильдию в современную эпоху.</p></article>
        </div>
        <a className="big-link" href="chronicles/"><span>Открыть все летописи</span><b>↗</b></a>
      </section>

      <section className="heraldry section-frame">
        <div className="heraldry-copy"><div className="section-label light"><span>06</span><span>Геральдика</span></div><h2>ГЕРБ,<br />У КОТОРОГО<br />ЕСТЬ ПАМЯТЬ</h2><p>Монета — стремление к наживе, свойственное искателям приключений. Четыре конечности — искусство, почта, мастерство кузнецов и память о павших. Фея — союз со сприганами. Дым — знак цехового центра.</p></div>
        <div className="heraldry-image"><img src="media/crest.webp" loading="lazy" alt="Герб гильдии крупным планом" /></div>
      </section>

      <section className="archive-cta section-frame">
        <div><p className="eyebrow">У монеты две стороны</p><h2>ВСЯ ИСТОРИЯ<br />ЖИВЁТ В ЛЕТОПИСЯХ</h2><p>Монета, допрос Гаррета, падение резиденции, эпохи гильдмастеров и секрет тёмного крыла — без сокращений.</p><a href="chronicles/">Читать всё <span>↗</span></a></div>
      </section>

      <section id="telegram" className="telegram section-frame">
        <div className="telegram-art"><img src="media/telegram-channel.png" loading="lazy" alt="Логотип Telegram-канала гильдии" /></div>
        <div className="telegram-copy">
          <div className="section-label"><span>07</span><span>Telegram</span></div>
          <p className="eyebrow">Гильдия на связи</p>
          <h2>ПРИСОЕДИНЯЙСЯ<br />К НАМ</h2>
          <p>Подписывайся на Telegram-канал гильдии «Ноги в Руки».</p>
          <a href="https://t.me/gildnogivruki" target="_blank" rel="noreferrer">@gildnogivruki <span>↗</span></a>
        </div>
      </section>

      <section id="join" className="join section-frame">
        <img className="guildmaster-avatar" src="media/guildmaster.webp" alt="Великий Гильдмастер" width="400" height="400" loading="lazy" />
        <div><h2>КАК ВСТУПИТЬ</h2><p>Напиши в регистратуру Гильдии. Там тебя примет Великий Гильдмастер и всё расскажет.</p><a href="https://t.me/gildmasternvrbot" target="_blank" rel="noreferrer">Написать в регистратуру ↗</a></div>
      </section>
      <footer><div className="footer-mark">НОГИ<br />В РУКИ</div><div><p>Гильдия игровой и гик-культуры</p><p>Авендум и за его пределами</p></div><a href="#top">Наверх ↑</a></footer>
    </main>
  );
}
