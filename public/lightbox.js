document.addEventListener('DOMContentLoaded', function () {
  var content = document.querySelector('.sl-markdown-content');
  if (!content) return;

  var images = content.querySelectorAll('img');
  if (!images.length) return;

  var overlay = null;

  function openLightbox(src, alt) {
    overlay = document.createElement('div');
    overlay.id = 'sl-lightbox-overlay';

    var img = document.createElement('img');
    img.src = src;
    img.alt = alt || '';
    overlay.appendChild(img);

    overlay.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', onKeyDown);
    document.body.appendChild(overlay);
  }

  function closeLightbox() {
    if (overlay) {
      overlay.remove();
      overlay = null;
    }
    document.removeEventListener('keydown', onKeyDown);
  }

  function onKeyDown(e) {
    if (e.key === 'Escape') closeLightbox();
  }

  images.forEach(function (img) {
    img.addEventListener('click', function () {
      openLightbox(img.src, img.alt);
    });
  });
});
