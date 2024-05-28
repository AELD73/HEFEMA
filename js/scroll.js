document.addEventListener('DOMContentLoaded', function() {
    const textSlideLeft = document.querySelector('.text-slide-left');
    const textSlideRight = document.querySelector('.text-slide-right');
    const scrollContainer = document.querySelector('.scroll-container');

    window.addEventListener('scroll', function() {
        const rect = scrollContainer.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            if (window.innerWidth <= 768) {
                textSlideLeft.style.transform = 'translateY(0)';
                textSlideRight.style.transform = 'translateY(0)';
            } else {
                textSlideLeft.style.transform = 'translateX(0)';
                textSlideRight.style.transform = 'translateX(0)';
            }
            textSlideLeft.style.opacity = '1';
            textSlideRight.style.opacity = '1';
        } else {
            if (window.innerWidth <= 768) {
                textSlideLeft.style.transform = 'translateY(-100%)';
                textSlideRight.style.transform = 'translateY(100%)';
            } else {
                textSlideLeft.style.transform = 'translateX(-100%)';
                textSlideRight.style.transform = 'translateX(100%)';
            }
            textSlideLeft.style.opacity = '0';
            textSlideRight.style.opacity = '0';
        }
    });
});
