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

// Contador de clics y referencias a los banners
let clickCount = 0;
const banners = [
  document.querySelector('#banner1'), // Primer banner
  document.querySelector('#banner2'), // Segundo banner
  document.querySelector('#banner3')  // Tercer banner
];

// Función para iniciar el video al hacer clic en la portada o el botón de reproducción
const videoCover = document.getElementById('videoCover');
const playButton = document.getElementById('playButton');

videoCover.addEventListener('click', handleVideoClick);
playButton.addEventListener('click', handleVideoClick);

function handleVideoClick() {
  if (clickCount < banners.length) {
    // Simular un clic en el banner correspondiente
    const currentBanner = banners[clickCount];
    if (currentBanner) {
      currentBanner.click(); // Simula un clic en el banner
      console.log(`Clic ${clickCount + 1}: Activando banner ${currentBanner.id}`);
    }

    clickCount++; // Incrementar el contador de clics

    // Si se han realizado todos los clics necesarios, habilitar el video
    if (clickCount === banners.length) {
      videoPlayer.play();
      videoCover.classList.add('hidden'); // Ocultar la imagen de portada
      console.log("Todos los clics completados. Video habilitado.");
    }
  }
}

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
