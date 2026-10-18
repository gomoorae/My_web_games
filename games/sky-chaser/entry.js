// Choose controls once at entry, before either game loop starts. Window size
// alone must not turn a resized desktop or touch-capable laptop into a phone.
(() => {
  const preference = new URLSearchParams(location.search).get('view');
  const coarse = matchMedia('(pointer: coarse)').matches;
  const fine = matchMedia('(pointer: fine)').matches;
  const touch = coarse || (!fine && navigator.maxTouchPoints > 0);
  const mobile = preference === 'mobile' || (preference !== 'desktop' && touch);
  document.documentElement.dataset.controls = mobile ? 'mobile' : 'desktop';
  if (mobile) {
    const destination = new URL('./mobile.html', location.href);
    destination.search = location.search;
    destination.searchParams.set('v', '0.8.1');
    destination.hash = location.hash;
    location.replace(destination.href);
  }
})();
