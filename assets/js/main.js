
const burger = document.querySelector('.burger');
const nav = document.getElementById('nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
document.querySelectorAll('[data-scroll="#lead-form"]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const el = document.getElementById('lead-form');
    if (el) { e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  });
});
document.querySelectorAll('.accordion .item').forEach(item => {
  const btn = item.querySelector('button');
  const panel = item.querySelector('.panel');
  if (btn && panel) {
    btn.addEventListener('click', () => {
      const shown = panel.style.display === 'block';
      document.querySelectorAll('.accordion .panel').forEach(p => p.style.display = 'none');
      panel.style.display = shown ? 'none' : 'block';
    });
  }
});
(function(){
  const key='cookieConsent';
  if(localStorage.getItem(key)) return;
  const banner = document.createElement('div');
  banner.className='cookie-banner';
  banner.innerHTML = '<span>Мы используем cookie. Согласны с <a href="cookies.html" style="color:#C9A227">Cookie-политикой</a>?</span><button>Ок</button>';
  document.body.appendChild(banner);
  banner.querySelector('button').addEventListener('click', ()=>{
    localStorage.setItem(key,'1'); banner.remove();
  });
})();
document.querySelectorAll('form').forEach(f=>{
  f.addEventListener('submit', (e)=>{
    const consent = f.querySelector('input[name="consent"]');
    if (consent && !consent.checked) {
      e.preventDefault(); alert('Необходимо согласие на обработку персональных данных (152-ФЗ).');
    }
  });
});
