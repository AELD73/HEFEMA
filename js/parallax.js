let paralax = document.querySelector('.consultoria-parallax');
let parrafo = document.querySelector('.texto-consultoria')
let titulo = document.querySelector('.title-consultoria');

function scrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    paralax.style.transform = 'translateY(' + scrollTop*-0.1 + 'px)';
    parrafo.style.transform = 'translateY(' + scrollTop*-0.2  + 'px)';
    titulo.style.transform = 'translateY(' + scrollTop*-0.15  + 'px)';

 }
 window.addEventListener('scroll', scrollParallax);

