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
      // Intentar encontrar un elemento interactivo dentro del banner
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
