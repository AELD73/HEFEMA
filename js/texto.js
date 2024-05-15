document.addEventListener("DOMContentLoaded", function() {
  const thumbnailsContainer = document.querySelector('.slider-thumbnails');
  const thumbnails = document.querySelectorAll('.thumbnail');
  
    const images = document.querySelectorAll('.slider-images img');
    const overlay = document.querySelector('.overlay');
    const overlayImage = overlay.querySelector('img');
  const thumbnailWidth = thumbnails[0].offsetWidth;
  const thumbnailsCount = thumbnails.length;
  let currentIndex = 0;

  // Función para desplazar las miniaturas automáticamente
  function moveThumbnails() {
    currentIndex = (currentIndex + 1) % thumbnailsCount;
    const offset =-(currentIndex * thumbnailWidth);
    thumbnailsContainer.style.transform = `translateX(${offset}px)`;
    setTimeout(moveThumbnails, 5000); // Cambia la miniatura cada 2 segundos
  }

  moveThumbnails(); // Iniciar el movimiento automático de las miniaturas

  //Código correspondiente para hacer click sobre la 
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      currentIndex = index;
    });
  });
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      overlayImage.src = images[index].src;
      overlay.style.display = 'flex';
    });
  });
  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  
});
