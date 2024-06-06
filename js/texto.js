document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.slider-images img');
  const overlay = document.querySelector('.overlay');
  const overlayImage = overlay.querySelector('img');
  const overlayText = overlay.querySelector('.overlay-text');

  images.forEach(image => {
    image.addEventListener('click', () => {
      overlayImage.src = image.src;
      overlayText.textContent = image.getAttribute('data-text');
      overlay.style.display = 'flex';
    });
  });

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
  });
});
