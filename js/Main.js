import { componentes } from "./basedatos.js";

// Selecciona el elemento root para agregar la estructura HTML
let doom = document.querySelector(".root");

doom.innerHTML = `
<header class="header">
    <h1 class="tech">TechMap</h1>
    <div class="cosas">
        <span>PC</span>
        <span>GPU</span>
        <span>CPU</span>
        <span>Fuentes de poder</span>
        <span>Placa Madre</span>
    </div>
    <a href="#">Github</a>
</header>
<section class="separador"></section>
<main class="cuerpo"></main>
<footer class="footer"></footer>

<!-- Estructura del Modal -->
<div id="modal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2 class="modal-title"></h2>
        <p class="modal-description"></p>
        <img class="modal-image" src="" alt="">
        <button id="download" class="download-button">Descargar Todo</button>
    </div>
</div>
`;

// Crear inputs de categorías
let categoriasUnicas = new Set();
let section = document.querySelector(".separador");
let cuerpo = document.querySelector(".cuerpo");
let modal = document.getElementById("modal");
let modalTitle = modal.querySelector(".modal-title");
let modalDescription = modal.querySelector(".modal-description");
let modalImage = modal.querySelector(".modal-image");
let span = modal.querySelector(".close");
let downloadButton = modal.querySelector("#download");

// Crear inputs de categorías y agregarlos a la sección
componentes.forEach((nose) => {
    if (!categoriasUnicas.has(nose.categoria)) {
        categoriasUnicas.add(nose.categoria);

        let input = document.createElement("div");
        input.classList.add("categorias");

        input.innerHTML = `     
            <input type="checkbox" id="category-${nose.categoria}" />
            <label for="category-${nose.categoria}">${nose.categoria}</label>
        `;

        section.appendChild(input);
    }
});

// Crear componentes y agregarlos al cuerpo
componentes.forEach((dato, index) => {
    let div = document.createElement("div");
    div.classList.add("componente", `componente-${index + 1}`);
    div.dataset.categoria = dato.categoria;
    div.addEventListener("click", () => openModal(dato));
    cuerpo.appendChild(div);
});

// Función para abrir el modal
function openModal(dato) {
    modalTitle.innerText = dato.nombre;
    modalDescription.innerText = dato.descripcion;
    modalImage.src = dato.img;
    modal.style.display = "block";

    // Añadir evento al botón de descarga
    downloadButton.onclick = () => {
        downloadModalContent();
    };
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = "none";
}

// Función para descargar el contenido del modal como una imagen
function downloadModalContent() {
    html2canvas(modal.querySelector('.modal-content'), {
        useCORS: true, // Habilitar CORS para cargar imágenes externas
        allowTaint: true // Permitir imágenes sin CORS
    }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'modal-content.png'; // Nombre del archivo descargado
        link.click();
    });
}

// Event listener para cerrar el modal
span.onclick = closeModal;

// Cerrar el modal cuando se haga clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Event listener para mostrar/ocultar componentes por categoría
section.addEventListener("change", (event) => {
    if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
        let componentes = document.querySelectorAll(".componente");

        // Obtener todas las categorías seleccionadas
        let categoriasSeleccionadas = Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
            .map(input => input.id.replace('category-', ''));

        // Eliminar la clase que pinta los componentes
        componentes.forEach((componente) => {
            componente.style.display = "none";
            componente.classList.remove("pintado");
        });

        // Pintar y mostrar solo los componentes que coincidan con las categorías seleccionadas
        componentes.forEach((componente) => {
            if (categoriasSeleccionadas.includes(componente.dataset.categoria)) {
                componente.style.display = "block";
                componente.classList.add("pintado");
            }
        });

        // Si no hay ninguna categoría seleccionada, mostrar todos los componentes
        if (categoriasSeleccionadas.length === 0) {
            componentes.forEach((componente) => {
                componente.style.display = "block";
                componente.classList.remove("pintado");
            });
        }
    }
});

