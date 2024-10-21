// Script para cambiar el modo claro/oscuro
const toggleButton = document.querySelector('.mode-toggle');
const vehicleSection = document.querySelector('.vehicle-section');

toggleButton.addEventListener('click', () => {
    vehicleSection.classList.toggle('dark-mode');
});

// Aplicando el estilo para el modo oscuro
document.body.classList.toggle('dark-mode', true);
