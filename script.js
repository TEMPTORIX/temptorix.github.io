// Toggle Menu Dropdown
document.getElementById('menuIcon').addEventListener('click', function () {
  const menuDropdown = document.getElementById('menuDropdown');
  menuDropdown.classList.toggle('active');
});

// Variables Globales
const videoPlayer = document.getElementById('videoPlayer');
const currentTimeDisplay = document.getElementById('current-time');
const totalDurationDisplay = document.getElementById('total-duration');

// Actualizar la duración total del video cuando se cargue
videoPlayer.addEventListener('loadedmetadata', function () {
  const totalDuration = formatTime(videoPlayer.duration);
  totalDurationDisplay.textContent = totalDuration;
});

// Actualizar el tiempo actual del video mientras se reproduce
videoPlayer.addEventListener('timeupdate', function () {
  const currentTime = formatTime(videoPlayer.currentTime);
  currentTimeDisplay.textContent = currentTime;
});

// Función para formatear el tiempo en minutos y segundos
function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Función para iniciar el video al hacer clic en la portada o el botón de reproducción
videoCover.addEventListener('click', function () {
  videoPlayer.play();
  videoCover.classList.add('hidden'); // Ocultar la imagen de portada
});

playButton.addEventListener('click', function () {
  videoPlayer.play();
  videoCover.classList.add('hidden'); // Ocultar la imagen de portada
});


// Lazy Loading para Imágenes
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function lazyLoadImages() {
  const images = document.querySelectorAll('.lazy-load');
  images.forEach((img) => {
    if (isElementInViewport(img)) {
      const dataSrc = img.getAttribute('data-src');
      if (dataSrc && !img.classList.contains('loaded')) {
        img.src = dataSrc;
        img.onload = () => img.classList.add('loaded');
      }
    }
  });
}

window.addEventListener('scroll', lazyLoadImages);
window.addEventListener('resize', lazyLoadImages);
window.addEventListener('load', lazyLoadImages);
document.addEventListener('touchmove', lazyLoadImages);




// Contador para rastrear los clics en el botón de Play
let clickCount = 0;

// Referencias a los banners de JuicyAds
const banner1 = document.getElementById("1081981"); // Primer banner
const banner2 = document.getElementById("1082022"); // Segundo banner
const banner3 = document.getElementById("1082017"); // Tercer banner

// Función para simular un clic en un banner
function simulateClickOnBanner(bannerElement) {
  if (bannerElement) {
    const clickableElement = bannerElement.querySelector("a, div, iframe");
    if (clickableElement) {
      clickableElement.click(); // Simular el clic en el elemento interactivo
    } else {
      console.error("No se encontró un elemento interactivo en el banner.");
    }
  } else {
    console.error("El elemento del banner no fue encontrado.");
  }
}

// Modificar el comportamiento del botón de Play
document.getElementById("playButton").addEventListener("click", function (event) {
  clickCount++; // Incrementar el contador de clics

  if (clickCount === 1) {
    // Primer clic: redirigir al primer banner
    event.preventDefault(); // Evitar que el video se reproduzca
    simulateClickOnBanner(banner1);
  } else if (clickCount === 2) {
    // Segundo clic: redirigir al segundo banner
    event.preventDefault(); // Evitar que el video se reproduzca
    simulateClickOnBanner(banner2);
  } else if (clickCount === 3) {
    // Tercer clic: redirigir al tercer banner
    event.preventDefault(); // Evitar que el video se reproduzca
    simulateClickOnBanner(banner3);

    // Permitir que el video se reproduzca después del tercer clic
    setTimeout(() => {
      document.getElementById("videoPlayer").play();
      document.getElementById("videoCover").classList.add("hidden"); // Ocultar la portada
    }, 500); // Pequeño retraso para mejorar la experiencia del usuario
  }
});

