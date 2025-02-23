// Toggle Menu Dropdown
document.getElementById('menuIcon').addEventListener('click', function () {
  const menuDropdown = document.getElementById('menuDropdown');
  menuDropdown.classList.toggle('active');
});

// Custom Play Button
const playButton = document.getElementById('playButton');
const videoPlayer = document.getElementById('videoPlayer');

// Función para manejar el botón de reproducción personalizado
playButton.addEventListener('click', function () {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playButton.style.display = 'none'; // Ocultar el botón al reproducir
  } else {
    videoPlayer.pause();
  }
});

// Mostrar el botón de reproducción si el video se pausa manualmente
videoPlayer.addEventListener('pause', function () {
  playButton.style.display = 'flex';
});

// Ocultar la imagen de portada cuando el video comienza a reproducirse
videoPlayer.addEventListener('play', function () {
  videoPlayer.setAttribute('poster', ''); // Eliminar la imagen de portada
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