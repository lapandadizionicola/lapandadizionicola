(() => {
  const loader = document.getElementById('site-loader');
  const loaderStartedAt = performance.now();
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (loader) {
    const loaderCaption = loader.querySelector('.loader-caption');
    const loaderMessages = [
      'La prossima avventura comincia qui.',
      'Rigorosamente 4×4. Sempre.',
      'Ogni strada ha la sua storia.'
    ];
    let loaderMessageIndex = 0;
    const messageTimer = loaderCaption && !reduceMotion ? window.setInterval(() => {
      loaderCaption.classList.add('is-changing');
      window.setTimeout(() => {
        loaderMessageIndex = (loaderMessageIndex + 1) % loaderMessages.length;
        loaderCaption.textContent = loaderMessages[loaderMessageIndex];
        loaderCaption.classList.remove('is-changing');
      }, 180);
    }, 640) : null;

    const dismissLoader = () => {
      const remaining = Math.max(0, 1850 - (performance.now() - loaderStartedAt));
      window.setTimeout(() => {
        if (messageTimer) window.clearInterval(messageTimer);
        loader.classList.add('is-leaving');
        document.body.classList.remove('is-loading');
        window.setTimeout(() => loader.remove(), 700);
      }, remaining);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', dismissLoader, { once: true });
    } else {
      dismissLoader();
    }
  }

  const progress = document.createElement('div');
  progress.className = 'reading-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progress);

  let progressFrame = 0;
  const updateProgress = () => {
    if (progressFrame) return;
    progressFrame = window.requestAnimationFrame(() => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const amount = scrollable > 0 ? window.scrollY / scrollable : 0;
      progress.style.transform = `scaleX(${Math.min(1, Math.max(0, amount))})`;
      progressFrame = 0;
    });
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();

  const revealTargets = document.querySelectorAll(
    '.bio-card, .contact-card, .mod-card, .feature, .creator-embed, .gallery-carousel, .gallery-heading, .mod-cta, .social-link'
  );
  if (revealTargets.length) {
    const siblingCounts = new Map();
    revealTargets.forEach((element) => {
      const parent = element.parentElement;
      const index = siblingCounts.get(parent) || 0;
      siblingCounts.set(parent, index + 1);
      element.style.setProperty('--reveal-index', Math.min(index, 5));
      element.classList.add('reveal-item');
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealTargets.forEach((element) => element.classList.add('is-visible'));
    } else {
      document.documentElement.classList.add('has-motion');
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -28px 0px' });

      revealTargets.forEach((element) => revealObserver.observe(element));
    }
  }
})();
