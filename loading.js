// Variables Globales
const countdownElement = document.querySelector('.countdown');
const messageElement = document.querySelector('.message');

// Tiempo inicial del temporizador (en segundos)
let timeLeft = 10;

// Función para actualizar el temporizador
function updateCountdown() {
  if (timeLeft > 0) {
    countdownElement.textContent = timeLeft;
    timeLeft--;
  } else {
    // Redirigir a index.html cuando el temporizador llegue a 0
    window.location.href = 'index.html';
  }
}

// Actualizar el temporizador cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);

// Detener el intervalo cuando el temporizador llega a 0
setTimeout(() => {
  clearInterval(countdownInterval);
}, timeLeft * 1000);


