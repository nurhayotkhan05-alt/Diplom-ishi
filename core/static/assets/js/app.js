const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];

document.addEventListener('DOMContentLoaded', () => {
  const menu = $('.menu-toggle');
  const nav = $('.nav');
  menu?.addEventListener('click', () => nav.classList.toggle('open'));

  const searchToggle = $('[data-search-toggle]');
  const searchPanel = $('.search-panel');
  searchToggle?.addEventListener('click', () => searchPanel?.classList.toggle('open'));

  // Demo-only front-end search/filter. Replace the data source with Django context/API.
  const searchInputs = $$('[data-news-search]');
  searchInputs.forEach(input => input.addEventListener('input', () => {
    const term = input.value.toLowerCase().trim();
    $$('.news-card').forEach(card => {
      card.hidden = !card.innerText.toLowerCase().includes(term);
    });
  }));

  $$('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
    const group = btn.closest('[data-filter-group]') || document;
    $$('[data-filter]', group).forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    $$('.news-card').forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  }));

  $$('[data-bookmark]').forEach(btn => btn.addEventListener('click', () => {
    btn.classList.toggle('saved');
    btn.textContent = btn.classList.contains('saved') ? '♥' : '♡';
    btn.setAttribute('aria-label', btn.classList.contains('saved') ? 'Saqlangan' : 'Saqlash');
  }));

  $$('[data-demo-form]').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault();
    const notice = form.querySelector('.notice') || $('.notice');
    if (notice) {
      notice.textContent = 'So‘rovingiz qabul qilindi. Backend ulangach, ma’lumotlar serverga yuboriladi.';
      notice.style.display = 'block';
    }
    form.reset();
  }));

  $('[data-newsletter]')?.addEventListener('submit', e => {
    e.preventDefault();
    const note = $('[data-newsletter-note]');
    if(note){note.textContent='Rahmat! Obuna formasi demo rejimida ishladi.';note.hidden=false;}
    e.currentTarget.reset();
  });

  $$('[data-share]').forEach(btn => btn.addEventListener('click', async () => {
    const url = location.href;
    try {
      if (navigator.share) await navigator.share({title: document.title, url});
      else { await navigator.clipboard.writeText(url); btn.textContent='Link nusxalandi'; }
    } catch(e) {}
  }));
});
