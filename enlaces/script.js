// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle'); // Selecciona el botón de menú
    const menu = document.querySelector('.menu'); // Selecciona la lista del menú

    // Añade un evento de clic al botón de menú
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active'); // Alterna la clase 'active' en el menú
    });
});

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Función para ajustar el diseño en función del ancho de la pantalla
    function ajustarDiseño() {
        const anchoPantalla = window.innerWidth; // Obtiene el ancho de la pantalla

        if (anchoPantalla < 768) {
            // Si la pantalla es menor que 768px (dispositivo móvil)
            document.body.classList.add('pantalla-pequeña');
            document.body.classList.remove('pantalla-mediana', 'pantalla-grande');
        } else if (anchoPantalla >= 768 && anchoPantalla < 1024) {
            // Si la pantalla es de tamaño mediano (tablet)
            document.body.classList.add('pantalla-mediana');
            document.body.classList.remove('pantalla-pequeña', 'pantalla-grande');
        } else {
            // Si la pantalla es grande (desktop)
            document.body.classList.add('pantalla-grande');
            document.body.classList.remove('pantalla-pequeña', 'pantalla-mediana');
        }
    }

    // Ejecuta la función cuando la página se carga
    ajustarDiseño();

    // Vuelve a ejecutar la función cuando se redimensiona la ventana
    window.addEventListener('resize', ajustarDiseño);
});
