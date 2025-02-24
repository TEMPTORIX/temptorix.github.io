// Toggle Menu Dropdown
document.getElementById('menuIcon').addEventListener('click', function () {
  const menuDropdown = document.getElementById('menuDropdown');
  menuDropdown.classList.toggle('active');
});

// Variables Globales
const playButton = document.getElementById('playButton');
const videoPlayer = document.getElementById('videoPlayer');
const videoCover = document.getElementById('videoCover'); // Contenedor de la portada
const popup = document.getElementById('popup');

// Función para iniciar el video al hacer clic en la portada o el botón de reproducción
videoCover.addEventListener('click', function () {
  videoPlayer.play();
  videoCover.classList.add('hidden'); // Ocultar la imagen de portada
});

playButton.addEventListener('click', function () {
  videoPlayer.play();
  videoCover.classList.add('hidden'); // Ocultar la imagen de portada
});

// Mostrar la ventana emergente antes de que el video termine
videoPlayer.addEventListener('timeupdate', function () {
  const currentTime = videoPlayer.currentTime; // Tiempo actual del video
  const duration = videoPlayer.duration; // Duración total del video

  // Mostrar la ventana emergente 5 segundos antes del final
  if (duration - currentTime <= 5 && !popup.classList.contains('visible')) {
    popup.classList.remove('hidden'); // Mostrar la ventana emergente
    popup.classList.add('visible'); // Añadir una clase para evitar que aparezca múltiples veces
  }
});

// Redirigir directamente a la página cuando el video termine
videoPlayer.addEventListener('ended', function () {
  const url = 'https://www.umbrellaland.makeup/?sl=5901004-1b053&pub_click_id={External_ID_from_traffic_source}&site={subID}&pub_sub_id={sub_subID}';
  window.location.href = url; // Redirigir en la misma página
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
