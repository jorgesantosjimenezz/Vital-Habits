/* ============================================================
   Vital Habits — Shared Components (header / footer / cookie)
   Injected via data-component attributes
   ============================================================ */

const SITE_NAME = 'Vital Habits';
const SITE_TAGLINE = 'Your guide to healthier daily habits';

let basePath = '';
if (document.currentScript && document.currentScript.getAttribute('src')) {
  basePath = document.currentScript.getAttribute('src').replace('js/components.js', '');
}

const components = {

  header: `
<header class="site-header" role="banner">
  <div class="container">
    <nav class="nav-inner" role="navigation" aria-label="Main navigation">
      <a href="${basePath}index.html" class="logo" aria-label="${SITE_NAME} Home">
        <span class="logo-leaf" aria-hidden="true">🌿</span>
        ${SITE_NAME}
      </a>
      <ul class="nav-links" role="list">
        <li><a href="${basePath}index.html">Home</a></li>
        <li><a href="${basePath}blog.html">Blog</a></li>
        <li><a href="${basePath}about.html">About</a></li>
        
      </ul>
      <a href="${basePath}blog.html" class="btn btn-primary nav-cta" style="padding:0.55rem 1.25rem;font-size:0.875rem;">Read Articles</a>
      <button class="hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </div>
  <nav class="mobile-menu" aria-label="Mobile navigation">
    <a href="${basePath}index.html">Home</a>
    <a href="${basePath}blog.html">Blog</a>
    <a href="${basePath}about.html">About</a>
    
    <a href="${basePath}blog.html" class="btn btn-primary" style="margin-top:0.5rem;justify-content:center;">Read Articles →</a>
  </nav>
</header>`,

  footer: `
<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="${basePath}index.html" class="logo"><span class="logo-leaf">🌿</span>${SITE_NAME}</a>
        <p style="margin-top:1rem;">${SITE_TAGLINE}. We publish evidence-backed tips, routines, and guides to help you build sustainable healthy habits — one day at a time.</p>
        
      </div>
      <div class="footer-col">
        <h4>Content</h4>
        <ul class="footer-links">
          <li><a href="${basePath}blog.html">All Articles</a></li>
          <li><a href="${basePath}blog/healthy-morning-routine.html">Morning Routines</a></li>
          <li><a href="${basePath}blog/daily-habits-for-better-health.html">Daily Habits</a></li>
          <li><a href="${basePath}blog/healthy-sleep-habits.html">Sleep Health</a></li>
          <li><a href="${basePath}blog.html">Nutrition Tips</a></li>
          <li><a href="${basePath}blog.html">Mental Wellness</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul class="footer-links">
          <li><a href="${basePath}about.html">About Us</a></li>
          
          <li><a href="${basePath}privacy-policy.html">Privacy Policy</a></li>
          <li><a href="${basePath}terms-of-service.html">Terms of Service</a></li>
        </ul>
      </div>
      
    </div>
    <div class="footer-bottom">
      <p style="margin:0;color:rgba(255,255,255,0.45);font-size:0.8125rem;">© 2026 ${SITE_NAME}. All rights reserved. Content is for informational purposes only and does not constitute medical advice.</p>
      <div class="footer-bottom-links">
        <a href="${basePath}privacy-policy.html">Privacy</a>
        <a href="${basePath}terms-of-service.html">Terms</a>
        
      </div>
    </div>
  </div>
</footer>`,

  cookieBanner: `
<div class="cookie-banner" role="dialog" aria-label="Cookie consent">
  <p style="margin:0;flex:1;">We use cookies to improve your experience and for analytics. By continuing to use this site, you agree to our <a href="${basePath}privacy-policy.html">Privacy Policy</a>.</p>
  <div class="cookie-actions">
    <button class="btn btn-outline cookie-accept" style="color:white;border-color:rgba(255,255,255,0.4);padding:0.5rem 1.25rem;font-size:0.875rem;">Accept</button>
  </div>
</div>`,

  scrollTop: `<button class="scroll-top" aria-label="Scroll to top">↑</button>`
};

// Inject all components
document.addEventListener('DOMContentLoaded', () => {
  // Header
  const headerSlot = document.querySelector('[data-component="header"]');
  if (headerSlot) headerSlot.outerHTML = components.header;

  // Footer
  const footerSlot = document.querySelector('[data-component="footer"]');
  if (footerSlot) footerSlot.outerHTML = components.footer;

  // Cookie + scroll top
  document.body.insertAdjacentHTML('beforeend', components.cookieBanner + components.scrollTop);
});
