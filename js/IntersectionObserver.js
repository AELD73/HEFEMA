document.addEventListener("DOMContentLoaded", () => {
  const lazySlides = document.querySelectorAll("img.lazy-slide");
  if (!("IntersectionObserver" in window)) {

    lazySlides.forEach(img => {
      if (img.dataset.src) img.src = img.dataset.src;
    });
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
      }
      observer.unobserve(img);
    });
  }, {
    rootMargin: "200px"    
  });

  lazySlides.forEach(img => observer.observe(img));
});
