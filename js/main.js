/* ============================================================
   VITAFLOW — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

// ── Mobile Menu ──────────────────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const bars = hamburger.querySelectorAll('span');
    if (mobileMenu.classList.contains('open')) {
      bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      bars[1].style.opacity = '0';
      bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      bars.forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
    }
  });

  // Close menu when a link is clicked
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      const bars = hamburger.querySelectorAll('span');
      bars.forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
    });
  });
}

// ── Scroll to Top ────────────────────────────────────────────
const scrollBtn = document.querySelector('.scroll-top');
if (scrollBtn) {
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 400);
  });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── Cookie Banner ────────────────────────────────────────────
const cookieBanner = document.querySelector('.cookie-banner');
const cookieAccept = document.querySelector('.cookie-accept');
if (cookieBanner && !localStorage.getItem('cookie-consent')) {
  setTimeout(() => cookieBanner.classList.add('show'), 1500);
}
if (cookieAccept) {
  cookieAccept.addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'true');
    cookieBanner.classList.remove('show');
  });
}

// ── Active Nav Link ──────────────────────────────────────────
const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});



// ── Copy Link Share ──────────────────────────────────────────
const copyBtns = document.querySelectorAll('.share-copy');
copyBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const orig = btn.innerHTML;
      btn.innerHTML = '✓ Copied!';
      setTimeout(() => btn.innerHTML = orig, 2000);
    });
  });
});

// ── Smooth anchor links ──────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Reading Progress Bar ─────────────────────────────────────
const progressBar = document.querySelector('.reading-progress');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const progress = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
    progressBar.style.width = Math.min(100, progress) + '%';
  });
}

// ── Lazy-load image placeholders (emoji backgrounds) ────────
// All decorative emoji thumbnails are CSS/HTML — no JS needed

// ── Fade-in on scroll ────────────────────────────────────────
const fadeEls = document.querySelectorAll('.feature-card, .blog-card, .testimonial-card');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

});
