const revealElements = document.querySelectorAll(
  'main > section, .hero .wrap > *, .perk, .card, .loc > *, #video .wrap-video'
);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach((element) => {
    element.classList.add('reveal');
    revealObserver.observe(element);
  });
}