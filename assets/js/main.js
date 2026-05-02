/* Honestas — minimal JS: mobile menu toggle + scroll-reveal animations.
   No frameworks. Respects prefers-reduced-motion. */

(function () {
  // ── Mobile nav toggle ────────────────────────────────────────────────────
  const toggle = document.querySelector('.nav__toggle');
  const menu   = document.querySelector('.nav__menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close on link tap (mobile)
    menu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => menu.classList.remove('is-open'))
    );
  }

  // ── Scroll-reveal: add .is-visible to [data-anim] elements when they
  //     enter the viewport. Uses IntersectionObserver — efficient + smooth.
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

    document.querySelectorAll('[data-anim]').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('[data-anim]').forEach(el => el.classList.add('is-visible'));
  }
})();
