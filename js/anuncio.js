document.addEventListener("DOMContentLoaded", function () {
        const anuncio = document.querySelector(".anuncio_funcionamiento");
        const imagenes = document.querySelectorAll(".slider-container img");

        imagenes.forEach((img) => {
          img.addEventListener("mouseenter", () => {
            anuncio.classList.add("visible");
          });

          img.addEventListener("mouseleave", () => {
            anuncio.classList.remove("visible");
          });
        });
      });