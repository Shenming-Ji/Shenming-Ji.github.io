(function() {
  var el = document.getElementById('dynamic-greeting');
  if (!el) return;
  var texts = ['Hello!', '你好！'];
  var idx = 0;
  var interval = 3500; // milliseconds

  // ensure initial visibility
  el.classList.remove('is-hidden');

  function startToggle() {
    setInterval(function() {
      el.classList.add('is-hidden');
    }, interval);
  }

  function onTransitionEnd(e) {
    if (e.propertyName !== 'opacity') return;
    if (el.classList.contains('is-hidden')) {
      idx = (idx + 1) % texts.length;
      el.textContent = texts[idx];
      // ensure browser has applied the hidden state before showing
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          el.classList.remove('is-hidden');
        });
      });
    }
  }

  el.addEventListener('transitionend', onTransitionEnd);
  startToggle();
})();
