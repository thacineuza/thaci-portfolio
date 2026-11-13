(() => {
  'use strict';
  const finePointer = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
  if (!finePointer.matches) return; // Touchscreens and users preferring reduced motion keep the native cursor.
  const cursor = document.createElement('div');
  cursor.className = 'sketch-pencil-pointer';
  cursor.setAttribute('aria-hidden','true');
  cursor.innerHTML = '<img src="assets/cursor-kawaii-lavanda.webp" alt="">';
  document.body.appendChild(cursor);
  const pencil = cursor.querySelector('img');
  document.documentElement.classList.add('has-sketch-pencil');
  let visible = false;
  document.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse') return;
    // Anchor the pointer image's upper-left tip to the browser pointer position.
    cursor.style.transform = `translate3d(${event.clientX - 16}px, ${event.clientY - 13}px, 0)`;
    if (!visible) { visible = true; cursor.classList.add('is-visible'); }
    const isTextTarget = !!event.target.closest('input,textarea,[contenteditable="true"]');
    cursor.style.visibility = isTextTarget ? 'hidden' : '';
  }, { passive: true });
  document.addEventListener('pointerdown', event => {
    if(event.pointerType !== 'mouse' || event.button !== 0 || !visible) return;
    cursor.classList.remove('is-clicking');
    void pencil.offsetWidth; // Restart the tap animation for repeated clicks.
    cursor.classList.add('is-clicking');
  });
  pencil.addEventListener('animationend', () => cursor.classList.remove('is-clicking'));
  document.addEventListener('mouseout', event => {
    if (!event.relatedTarget) { cursor.classList.remove('is-visible'); visible = false; }
  });
  window.addEventListener('blur', () => { cursor.classList.remove('is-visible'); visible = false; });
})();
