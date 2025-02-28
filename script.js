// Variables Globales
const videoPlayer = document.getElementById('videoPlayer');
const videoCover = document.getElementById('videoCover');
const playButton = document.getElementById('playButton');

// Contador de clics y referencias a los banners
let clickCount = 0;
const banners = [
  document.querySelector('#banner1'), // Primer banner
  document.querySelector('#banner2'), // Segundo banner
  document.querySelector('#banner3')  // Tercer banner
];

// Función para manejar los clics en el reproductor
function handleVideoClick() {
  if (clickCount < banners.length) {
    const currentBanner = banners[clickCount];
    if (currentBanner) {
      console.log(`Intentando activar banner ${currentBanner.id}...`);

      // Simular un clic en el banner correspondiente
      try {
        currentBanner.click();
        console.log(`Clic ${clickCount + 1}: Activado banner ${currentBanner.id}`);
      } catch (error) {
        console.error(`Error al activar banner ${currentBanner.id}:`, error);
      }
    } else {
      console.error(`Banner ${clickCount + 1} no encontrado.`);
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

// Agregar eventos de clic al reproductor
videoCover.addEventListener('click', handleVideoClick);
playButton.addEventListener('click', handleVideoClick);
