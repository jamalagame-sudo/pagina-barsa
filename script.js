// Función para mostrar mensaje de bienvenida
window.onload = function() {
    alert("¡gracias por visitar la pagina bro!, este año ganamos la 6ta confia");

    // Contador de visitas
    let visits = localStorage.getItem('visits') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('visits', visits);
    document.getElementById('contador-de-visitas').innerText = 'Número de visitas: ' + visits;

    // Botón para cambiar tema
    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.innerText = 'Cambiar a Modo Claro';
        } else {
            toggleButton.innerText = 'Cambiar a Modo Oscuro';
        }
    });
};
