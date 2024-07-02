document.addEventListener('DOMContentLoaded', () => {
    const gif = document.getElementById('inicio');
    gif.src = 'imagenes/HERRAJES FERROVIARIOS - BIENVENIDA 6.gif';
    gif.onload = () => {
        gif.style.display = 'block'; // Muestra la imagen después de cargar
    };
});