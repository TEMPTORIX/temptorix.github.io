window.onload = () => {
    const countdownBtn = document.getElementById('countdownBtn');
    const textElement = countdownBtn.querySelector('.countdown-text');
    let countdown = 5;

    // Iniciar la cuenta regresiva
    const timer = setInterval(() => {
        countdown--;

        if (countdown > 0) {
            textElement.textContent = countdown;
            textElement.style.color = '#CCCCCC';
        } else {
            clearInterval(timer); // Detener el temporizador
            textElement.textContent = 'Continue to Video';
            textElement.style.color = '#FFFFFF';
            countdownBtn.style.cursor = 'pointer';

            // Habilitar el botón para redirigir
            countdownBtn.addEventListener('click', () => {
                window.location.href = 'https://temptorix.github.io/me-gusta-que-me-chupen-mi-cuquita.html';
            });
        }
    }, 1000);
};
