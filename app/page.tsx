export const dynamic = 'force-static';

const trials = [
  ['01', 'Сила', 'Одно чистое приседание с другим участником гильдии на плечах.'],
  ['02', 'Ловкость', 'Каскад: уверенно жонглировать тремя предметами в течение трёх циклов.'],
  ['03', 'Телосложение', 'Простоять в планке не менее одной минуты.'],
  ['04', 'Мудрость', 'Ответить на три вопроса основателей по лору D&D-миров или на смекалку.'],
  ['05', 'Интеллект', 'Ответить на три вопроса основателей по механике D&D 5e.'],
  ['06', 'Харизма', 'Исполнить одобренный стих, песню, танец или номер и записать его на видео.'],
];

const tracks = [
  { no: '01', title: 'НОГИ В РУКИ ФОНК', note: 'Гильдейский фонк', src: 'media/phonk.mp3' },
  { no: '02', title: 'Тоска', note: 'Ашу Кадим', src: 'media/toska.mp3' },
  { no: '03', title: 'Как Артёма друзей потерял', note: 'Баллада', src: 'media/ballad.mp3' },
];

function AudioCard({ no, title, note, src }: { no: string; title: string; note: string; src: string }) {
  return (
    <article className="track-card">
      <span className="track-no">{no}</span>
      <div className="track-copy"><h3>{title}</h3><p>{note}</p></div>
      <audio controls preload="metadata" aria-label={`${title} — ${note}`}><source src={src} type="audio/mpeg" /></audio>
    </article>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Основная навигация">
        <a className="wordmark" href="#top">НВР</a>
        <div className="navlinks">
          <a href="#about">О гильдии</a><a href="#hymn">Гимн</a><a href="#history">История</a><a href="#music">Музыка</a>
        </div>
        <a className="nav-cta" href="chronicles/">Летописи <span>↗</span></a>
      </nav>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <p className="hero-kicker">Гильдия настольных ролевых игр</p>
        <h1 id="hero-title">НОГИ<span className="mobile-break"><br /></span> В РУКИ</h1>
        <img className="hero-crest" src="media/crest.png" alt="Герб гильдии «Ноги в Руки»" />
        <p className="hero-motto">Протяни гильдии руку —<br />она протянет тебе ногу.</p>
        <div className="hero-foot"><span>Авендум · все миры · все планы</span><a href="#hymn">Листать вниз ↓</a></div>
      </section>

      <div className="ticker" aria-hidden="true"><div>ИГРАТЬ · ПУТЕШЕСТВОВАТЬ · СОБИРАТЬСЯ · ИГРАТЬ · ПУТЕШЕСТВОВАТЬ · СОБИРАТЬСЯ · </div></div>

      <section id="hymn" className="hymn section-frame">
        <div className="section-label"><span>01</span><span>Слушать стоя</span></div>
        <div className="hymn-title"><p>ГИМН</p><h2>ГИЛЬДИИ</h2></div>
        <div className="hymn-player">
          <div className="vinyl" aria-hidden="true"><span>НВР</span></div>
          <div><p className="eyebrow">Remastered</p><h3>Гимн гильдии</h3><audio controls preload="metadata" aria-label="Гимн гильдии, обновлённая версия"><source src="media/hymn.mp3" type="audio/mpeg" /></audio></div>
        </div>
      </section>

      <section id="about" className="manifesto section-frame">
        <div className="section-label"><span>02</span><span>Кто мы</span></div>
        <p className="manifesto-lead">Гильдия — это не стены и не чат.</p>
        <p className="manifesto-lead red-text">Это прежде всего люди.</p>
        <div className="manifesto-grid">
          <p>Мы собрались благодаря любви к настольным ролевым играм. Здесь царит открытая, дружелюбная и неформальная атмосфера.</p>
          <p>Полевые игры, кабинки, поездки и домашние встречи — мы всегда находим повод увидеться и поддержать новую движуху.</p>
        </div>
      </section>

      <section className="numbers section-frame" aria-label="Гильдия в цифрах">
        <div className="number-card red"><strong>6</strong><span>испытаний<br />до полного ордена</span></div>
        <div className="number-card paper"><strong>4</strong><span>первых<br />основателя</span></div>
        <div className="number-card gold"><strong>1</strong><span>бейдж<br />стажёра на всех</span></div>
      </section>

      <section id="trials" className="trials section-frame">
        <div className="section-label light"><span>03</span><span>Посвящение</span></div>
        <div className="split-heading"><h2>ИСПЫТАНИЯ</h2><p>Чтобы стать полноправным членом, стажёр проходит испытание одной характеристики. Все шесть — полный кавалер Ордена Гильдии.</p></div>
        <div className="trial-list">
          {trials.map(([no, title, copy]) => <article className="trial-row" key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section id="history" className="history section-frame">
        <div className="section-label"><span>04</span><span>Краткая история</span></div>
        <div className="history-intro"><h2>ОТ МОНЕТЫ<br />ДО ЛЕГЕНДЫ</h2><p>Гильдия родилась в авторской вселенной Авендума — тёмном, шумном городе, где за каждым гербом стоит история.</p></div>
        <div className="history-steps">
          <article><span>Ⅰ</span><h3>Монета</h3><p>Она не стала началом гильдии, но без неё гильдии бы не случилось. Монета связала «да» и «нет» — и указала героям путь.</p></article>
          <article><span>Ⅱ</span><h3>Четверо</h3><p>Гарет Тень, Гонтар из клана Крепкой Наковальни, Элия и Эйдвен стали первыми основателями.</p></article>
          <article><span>Ⅲ</span><h3>Авендум</h3><p>Кладбище, лечебница, почтовая служба, кузница, лаборатория и часовня выросли вокруг окрепшей гильдии.</p></article>
          <article><span>Ⅳ</span><h3>Виндеголь</h3><p>Поместье графа стало главной резиденцией, а союз со сприганами добавил фею на столичный герб.</p></article>
          <article><span>Ⅴ</span><h3>Эра теней</h3><p>Падение резиденции не уничтожило гильдию. Уцелевшие ушли в подполье, сохранив ярость, память и имя.</p></article>
        </div>
        <a className="big-link" href="chronicles/"><span>Открыть все летописи</span><b>↗</b></a>
      </section>

      <section className="heraldry section-frame">
        <div className="heraldry-copy"><div className="section-label light"><span>05</span><span>Геральдика</span></div><h2>ГЕРБ,<br />У КОТОРОГО<br />ЕСТЬ ПАМЯТЬ</h2><p>Монета — нажива и благословение Вокин. Четыре конечности — искусство, почта, мастерство кузнецов и память о павших. Фея — союз со сприганами. Дым — знак цехового центра.</p></div>
        <div className="heraldry-image"><img src="media/crest.png" alt="Герб гильдии крупным планом" /></div>
      </section>

      <section id="music" className="music section-frame">
        <div className="section-label"><span>06</span><span>Аудиотека</span></div>
        <div className="music-heading"><h2>ЗВУКИ<br />ГИЛЬДИИ</h2><p>Три истории, которые лучше не читать, а слушать.</p></div>
        <div className="tracks">{tracks.map((track) => <AudioCard key={track.no} {...track} />)}</div>
      </section>

      <section className="archive-cta section-frame">
        <img src="media/dark-crest.png" alt="Тёмный герб гильдии" />
        <div><p className="eyebrow">У монеты две стороны</p><h2>ВСЯ ИСТОРИЯ<br />ЖИВЁТ В ЛЕТОПИСЯХ</h2><p>Монета, допрос Гаррета, падение резиденции, эпохи гильдмастеров и секрет тёмного крыла — без сокращений.</p><a href="chronicles/">Читать всё <span>↗</span></a></div>
      </section>

      <footer><div className="footer-mark">НОГИ<br />В РУКИ</div><div><p>Гильдия настольных ролевых игр</p><p>Авендум и за его пределами</p></div><a href="#top">Наверх ↑</a></footer>
    </main>
  );
}
