// Toggle Menu Dropdown
document.getElementById('menuIcon').addEventListener('click', function () {
  const menuDropdown = document.getElementById('menuDropdown');
  menuDropdown.classList.toggle('active');
});

// Variables Globales
const videoPlayer = document.getElementById('videoPlayer');
const currentTimeDisplay = document.getElementById('current-time');
const totalDurationDisplay = document.getElementById('total-duration');

// Configuración de JSONBin.io
const BIN_URL = "https://api.jsonbin.io/v3/b/67c486b5acd3cb34a8f3abd9"; // URL del bin
const SECRET_KEY = "$2a$10$7AAShAcznvVzanv4tgOsj.me3QsqDU75x8wllUwVRjPrwVWUNyn0q"; // Tu X-Master-Key

// Función para obtener el número de visitas
async function getVisits() {
  try {
    const response = await fetch(BIN_URL, {
      method: "GET",
      headers: {
        "X-Master-Key": SECRET_KEY,
      },
    });
    if (!response.ok) {
      throw new Error(`Error al obtener las visitas: ${response.status}`);
    }
    const data = await response.json();
    return data.record.visits || 0; // Devuelve el valor actual de "visits"
  } catch (error) {
    console.error("Error al obtener las visitas:", error);
    return 0;
  }
}

// Función para incrementar el número de visitas
async function incrementVisits() {
  try {
    const currentVisits = await getVisits(); // Obtiene el número actual de visitas
    const response = await fetch(BIN_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": SECRET_KEY,
      },
      body: JSON.stringify({ visits: currentVisits + 1 }), // Incrementa el contador
    });
    if (!response.ok) {
      throw new Error(`Error al incrementar las visitas: ${response.status}`);
    }
  } catch (error) {
    console.error("Error al incrementar las visitas:", error);
  }
}

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

// Mostrar las visitas cuando la página carga
document.addEventListener("DOMContentLoaded", async () => {
  const viewCountElement = document.getElementById("viewCount"); // Elemento donde se muestran las visitas
  const playButton = document.getElementById("playButton");

  // Obtener y mostrar el número actual de visitas
  const visits = await getVisits();
  viewCountElement.textContent = `${visits} views`;

  // Incrementar las visitas cuando se reproduce el video
  playButton.addEventListener("click", async () => {
    await incrementVisits(); // Incrementa las visitas
    const newVisits = await getVisits(); // Obtiene el nuevo valor
    viewCountElement.textContent = `${newVisits} views`; // Actualiza el texto
  });

  // Ocultar la imagen de portada y reproducir el video
  const videoCover = document.getElementById("videoCover");
