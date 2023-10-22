// Anuncios que se corren del main
let currentIndex = 0;
const anuncios = document.querySelectorAll('.anuncio');

function showAd(index) {
  anuncios.forEach((ad, i) => {
    ad.style.display = i === index ? 'block' : 'none';
  });
}

function showNextAd() {
  currentIndex = (currentIndex + 1) % anuncios.length;
  showAd(currentIndex);
}

function showPrevAd() {
  currentIndex = (currentIndex - 1 + anuncios.length) % anuncios.length;
  showAd(currentIndex);
}
//llamando las variables desde su id del index
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

//dandole su funcion a las variables
nextBtn.addEventListener('click', showNextAd);
prevBtn.addEventListener('click', showPrevAd);

// Mostrar el primer anuncio al cargar la página
showAd(currentIndex);

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