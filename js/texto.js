document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll(".slider-images img");
  var overlay = document.getElementById("overlay");
  var overlayImage = document.getElementById("overlayImage");
  var overlayText = document.getElementById("overlayText");
  var sliderImages = document.querySelector(".slider-images");
  var currentIndex = 0;
  var imageWidth = 100; // Debe coincidir con el ancho de la imagen en CSS
  var visibleImages = Math.floor(sliderImages.clientWidth / (imageWidth + 20)); // 20px es el margen

  function updateSliderPosition() {
      sliderImages.style.transform = `translateX(-${currentIndex * (imageWidth + 20)}px)`; // 20px es el margen
  }

  images.forEach(function(image, index) {
      image.addEventListener("click", function() {
          overlay.style.display = "flex";
          overlayImage.src = this.src;
          overlayText.textContent = this.alt;
      });
  });

  overlay.addEventListener("click", function() {
      overlay.style.display = "none";
  });

  function autoSlide() {
      if (currentIndex < images.length - visibleImages) {
          currentIndex++;
      } else {
          currentIndex = 0;
      }
      updateSliderPosition();
  }

  setInterval(autoSlide, 100); // Cambia cada 3 segundos

  window.addEventListener('resize', function() {
      visibleImages = Math.floor(sliderImages.clientWidth / (imageWidth + 20));
      updateSliderPosition();
  });

  updateSliderPosition();
});
