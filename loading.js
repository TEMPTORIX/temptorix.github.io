// Simulación de carga
window.addEventListener("load", () => {
    const loadingScreen = document.querySelector(".loading-screen");

    // Verificar si el elemento .loading-screen existe
    if (!loadingScreen) {
        console.error("El elemento .loading-screen no existe en el DOM.");
        return;
    }

    // Clonar el anuncio para llenar la pantalla
    const adContainer = document.querySelector(".ad-container");
    const originalAd = adContainer.querySelector("ins"); // Primer anuncio
    const containerWidth = adContainer.offsetWidth;
    const containerHeight = adContainer.offsetHeight;
    const adWidth = 300; // Ancho del anuncio
    const adHeight = 50; // Alto del anuncio

    let rows = Math.ceil(containerHeight / adHeight);
    let cols = Math.ceil(containerWidth / adWidth);

    for (let i = 0; i < rows * cols; i++) {
        const clonedAd = originalAd.cloneNode(true); // Clonar el anuncio
        adContainer.appendChild(clonedAd);
    }

    // Simular un tiempo de carga de 5 segundos antes de redirigir
    setTimeout(() => {
        loadingScreen.style.display = "none"; // Ocultar el loading screen

        // Redirigir a home.html
        const targetPage = "home.html"; // Asegúrate de que esta ruta sea correcta
        if (targetPage) {
            window.location.href = targetPage;
        } else {
            console.error("La ruta hacia home.html no está definida.");
        }
    }, 5000); // Cambiado a 5000 milisegundos (5 segundos)
});
