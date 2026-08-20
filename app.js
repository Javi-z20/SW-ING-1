// Actividad: Generador de Consejos con JavaScript

const boton = document.getElementById('fetch-btn');

const textoConsejo = document.getElementById('quote-text');

const obtenerConsejo = async () => {
    try {
        boton.disabled = true;
        textoConsejo.textContent = 'Cargando consejo...';

        const respuesta = await fetch('https://api.adviceslip.com/advice');

        const data = await respuesta.json();

        const consejo = data.slip.advice;

        textoConsejo.textContent = `${consejo}`;

    } catch (error) {
        console.error(error);
        textoConsejo.textContent = 'No se pudo obtener el consejo.';

    } finally {
        boton.disabled = false;
    }
};

boton.addEventListener('click', obtenerConsejo);

