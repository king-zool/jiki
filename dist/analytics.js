// One page view per full page; practice embeds are part of their parent visit.
(() => {
  if (window.self !== window.top || window.jikiAnalyticsLoaded) return;
  window.jikiAnalyticsLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-X0HTJL64GC', {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-X0HTJL64GC';
  document.head.appendChild(script);
})();
