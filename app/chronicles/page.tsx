import { chroniclesSource } from './chronicles-source';

export const dynamic = 'force-static';

const clean = (value: string) => value
  .replace(/\\([!&-])/g, '$1')
  .replace(/\*\*/g, '')
  .replace(/^\*|\*$/g, '')
  .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

const idFor = (title: string) => {
  if (title.includes('Герб')) return 'crest';
  if (title.includes('История про монету')) return 'coin';
  if (title.includes('Летопись из')) return 'library';
  if (title.includes('ДВЕ стороны')) return 'two-sides';
  if (title.includes('Хроники Власти')) return 'masters';
  return undefined;
};

function ChronicleText() {
  const blocks = chroniclesSource.trim().split(/\n\s*\n/);
  return <>{blocks.map((block, index) => {
    const value = block.trim();
    if (value === '![][image1]') return <img className="chronicle-image" src="../media/crest.png" alt="Герб гильдии" key={index} />;
    if (value === '![][image3]') return <img className="chronicle-image dark" src="../media/dark-crest.png" alt="Тёмный герб гильдии" key={index} />;
    if (value === '---') return <hr key={index} />;
    if (value.startsWith('#')) {
      const level = value.match(/^#+/)?.[0].length ?? 1;
      const title = clean(value.replace(/^#+\s*/, ''));
      return level >= 3 ? <h3 id={idFor(title)} key={index}>{title}</h3> : <h2 id={idFor(title)} key={index}>{title}</h2>;
    }
    if (value.startsWith('СОВЕРШЕННО СЕКРЕТНО')) return <p className="secret-stamp" key={index}>{clean(value)}</p>;
    return <p key={index}>{clean(value)}</p>;
  })}</>;
}

export default function ChroniclesPage() {
  return (
    <main className="chronicles-shell">
      <nav className="topbar archive-nav" aria-label="Навигация по летописям"><a className="wordmark" href="../">НВР</a><span>Архив гильдии</span><a className="nav-cta" href="../">На главную <span>↙</span></a></nav>
      <header className="chronicles-hero"><p>Без сокращений и редакторских изменений</p><h1>ЛЕТОПИСИ</h1></header>
      <div className="chronicles-layout">
        <aside><p>Содержание</p><a href="#crest">Герб</a><a href="#coin">История про монету</a><a href="#library">Летопись из библиотеки</a><a href="#two-sides">У монеты две стороны</a><a href="#masters">История гильдмастеров</a></aside>
        <article className="chronicle-prose"><ChronicleText /></article>
      </div>
      <footer><div className="footer-mark">НОГИ<br />В РУКИ</div><p>Конец доступной летописи.<br />Продолжение пишут участники.</p><a href="#top">Наверх ↑</a></footer>
    </main>
  );
}
