(function () {
  var lightbox = document.getElementById('cert-lightbox');
  if (!lightbox) return;

  var lightboxImg = lightbox.querySelector('.lightbox-img');
  var closeBtn = lightbox.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.hidden = false;
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = '';
  }

  document.querySelectorAll('.cert-thumb').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var img = btn.querySelector('img');
      openLightbox(btn.dataset.img, img ? img.alt : '');
    });
  });

  closeBtn.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });
}());
