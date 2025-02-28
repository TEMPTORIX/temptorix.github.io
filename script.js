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

// Código añadido: Redirección de clics hacia banners
document.addEventListener("DOMContentLoaded", function () {
  // Contador para rastrear los clics en el botón de Play
  let clickCount = 0;

  // Verificar si el botón de Play existe
  const playButton = document.getElementById("playButton");
  if (!playButton) {
    console.error("El botón de Play (#playButton) no fue encontrado.");
    return;
  }

  // Función para esperar a que un elemento esté disponible en el DOM
  function waitForElement(selector, callback) {
    const element = document.querySelector(selector);
    if (element) {
      callback(element);
    } else {
      setTimeout(() => waitForElement(selector, callback), 100); // Reintentar cada 100ms
    }
  }

  // Función para simular un clic en un banner
  function simulateClickOnBanner(bannerId) {
    waitForElement(`#${bannerId}`, (bannerElement) => {
      const clickableElement = bannerElement.querySelector("a, div, iframe");
      if (clickableElement) {
        clickableElement.click(); // Simular el clic en el elemento interactivo
        console.log(`Clic simulado en el banner ${bannerId}`);
      } else {
        console.error(`No se encontró un elemento interactivo en el banner ${bannerId}.`);
      }
    });
  }

  // Modificar el comportamiento del botón de Play
  playButton.addEventListener("click", function (event) {
    clickCount++; // Incrementar el contador de clics
    console.log(`Clic en el botón de Play. Contador: ${clickCount}`);

    if (clickCount === 1) {
      // Primer clic: redirigir al primer banner
      event.preventDefault(); // Evitar que el video se reproduzca
      simulateClickOnBanner("1081981"); // ID del primer banner
    } else if (clickCount === 2) {
      // Segundo clic: redirigir al segundo banner
      event.preventDefault(); // Evitar que el video se reproduzca
      simulateClickOnBanner("1082022"); // ID del segundo banner
    } else if (clickCount === 3) {
      // Tercer clic: redirigir al tercer banner
      event.preventDefault(); // Evitar que el video se reproduzca
      simulateClickOnBanner("1082017"); // ID del tercer banner

      // Permitir que el video se reproduzca después del tercer clic
      setTimeout(() => {
        const videoPlayer = document.getElementById("videoPlayer");
        const videoCover = document.getElementById("videoCover");

        if (videoPlayer && videoCover) {
          videoPlayer.play();
          videoCover.classList.add("hidden"); // Ocultar la portada
          console.log("Video reproducido después del tercer clic.");
        } else {
          console.error("El reproductor de video o la portada no fueron encontrados.");
        }
      }, 500); // Pequeño retraso para mejorar la experiencia del usuario
    }
  });
});
