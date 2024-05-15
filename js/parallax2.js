let parallax2 = document.querySelector('.fabricacion-parallax');
let parrafoFabricacion = document.querySelector('.texto-fabricacion');
let tituloFabricacion = document.querySelector('.title-fabricacion');

function scrollParallax2(){
   let scrollTop2 = document.documentElement.scrollTop;
   parallax2.style.transform = 'translateY(' + scrollTop2*-0.1  + 'px)';
   tituloFabricacion.style.transform = 'translateY(' + scrollTop2*-0.1  + 'px)';
   parrafoFabricacion.style.transform = 'translateY(' + scrollTop2*-0.13  + 'px)';
   
}
window.addEventListener('scroll', scrollParallax2);