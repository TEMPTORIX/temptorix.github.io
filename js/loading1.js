
/*-------------------------------------------------------------------------------------------*/

// Simulación de carga
window.addEventListener("load", () => {
    const loadingScreen = document.querySelector(".loading-screen");
  
    // Verificar si el elemento .loading-screen existe
    if (!loadingScreen) {
      console.error("El elemento .loading-screen no existe en el DOM.");
      return;
    }
  
    // Simular un tiempo de carga de 3 segundos antes de redirigir
    setTimeout(() => {
      loadingScreen.style.display = "none"; // Ocultar el loading screen
  
      // Redirigir a Trapped together in a Wooden Hut FERN x STARK need to Warm Up HE.html
      const targetPage = "Trapped-together-in-a-Wooden-Hut-FERN-x-STARK-need-to-Warm-Up-HE.html"; // Asegúrate de que esta ruta sea correcta
      if (targetPage) {
        window.location.href = targetPage;
      } else {
        console.error("La ruta hacia index.html no está definida.");
      }
    }, 2000); // 3 segundos de espera simulada
  });
