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


document.addEventListener("DOMContentLoaded", function () {
  // Verificar si el botón de Play existe
  const playButton = document.getElementById("playButton");
  if (!playButton) {
    console.error("El botón de Play (#playButton) no fue encontrado.");
    return;
  }

  // Verificar si el banner 1 existe
  const banner1 = document.getElementById("banner1");
  if (!banner1) {
    console.error("El banner 1 (#banner1) no fue encontrado.");
    return;
  }

  // Función para simular un clic en el banner
  function simulateClickOnBanner() {
    const clickableElement = banner1.querySelector("a, div, iframe");
    if (clickableElement) {
      clickableElement.click(); // Simular el clic en el elemento interactivo
      console.log("Clic simulado en el banner 1.");
    } else {
      console.error("No se encontró un elemento interactivo en el banner 1.");
    }
  }

  // Modificar el comportamiento del botón de Play
  playButton.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar que el video se reproduzca inmediatamente

    // Redirigir el clic al banner 1
    simulateClickOnBanner();

    // Reproducir el video después de un breve retraso
    setTimeout(() => {
      const videoPlayer = document.getElementById("videoPlayer");
      const videoCover = document.getElementById("videoCover");

      if (videoPlayer && videoCover) {
        videoPlayer.play();
        videoCover.classList.add("hidden"); // Ocultar la portada
        console.log("Video reproducido después de redirigir el clic al banner 1.");
      } else {
        console.error("El reproductor de video o la portada no fueron encontrados.");
      }
    }, 500); // Pequeño retraso para mejorar la experiencia del usuario
  });
});
