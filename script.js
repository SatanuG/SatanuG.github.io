(function(){
  // Active link
  const path = location.pathname.split('/').pop() || 'index.html';
  Array.from(document.querySelectorAll('.nav a')).forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });

  // Year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('siteNav');
  if (toggle && nav){
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
})();
