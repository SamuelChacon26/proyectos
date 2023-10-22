// menu desplegable en el header
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
    menu.style.top = `${menuBtn.offsetTop + menuBtn.offsetHeight}px`;
    menu.style.left = `${menuBtn.offsetLeft}px`;
  } else {
    menu.style.display = 'none';
  }
});

//cambio de imagen del icono de menu en header
let imagenActual = 1;
function cambiarImagen() {
  var imgMenu = document.getElementById('imgMenu');
  if(imagenActual === 1){
    imgMenu.src = 'logo/widget.png';
    imagenActual = 2;
  } else {
    imgMenu.src = 'logo/menu.png';
    imagenActual = 1;
  }
}