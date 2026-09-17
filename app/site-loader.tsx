// Start before the page paints; always reveal the page if a resource fails.
export const loaderStart = `document.documentElement.classList.add('site-loading');window.guildLoadingTimeout=setTimeout(function(){document.documentElement.classList.remove('site-loading')},10000);`;

export const loaderStyles = `.site-loader{display:none}.site-loading body{overflow:hidden}.site-loading main{visibility:hidden}.site-loading .site-loader{position:fixed;inset:0;z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;background:#242323;color:#e7d5b8;font:18px/1.5 Arial,sans-serif;text-align:center;padding:24px}.loader-ring{width:52px;height:52px;border:4px solid #e7d5b833;border-top-color:#d84a35;border-radius:50%;animation:guild-loading 1s linear infinite}@keyframes guild-loading{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.loader-ring{animation:none}}`;

const readyScript = `
(function(){
  function ready(){
    var fonts = document.fonts ? Promise.allSettled([
      document.fonts.load('400 18px Onder'),
      document.fonts.load('400 18px Leonov'),
      ...(document.querySelector('.chronicle-prose') ? [document.fonts.load('400 18px "Playfair Display"'),document.fonts.load('700 26px "Playfair Display"')] : [])
    ]) : Promise.resolve();
    var crest=document.querySelector('.hero-crest,.chronicle-image');
    var picture=crest && crest.decode ? crest.decode().catch(function(){}) : Promise.resolve();
    Promise.allSettled([fonts,picture]).then(function(){
      clearTimeout(window.guildLoadingTimeout);
      document.documentElement.classList.remove('site-loading');
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready,{once:true});else ready();
  window.addEventListener('pageshow',function(event){if(event.persisted)document.documentElement.classList.remove('site-loading')});
})();`;

export default function SiteLoader() {
  return <>
    <div className="site-loader" role="status" aria-live="polite"><span className="loader-ring" aria-hidden="true" /><p>Загружаем гильдию…</p></div>
    <script dangerouslySetInnerHTML={{ __html: readyScript }} />
  </>;
}
