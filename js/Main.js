import { componentes } from "./basedatos.js";

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
    <a href="https://github.com/cris2265">Github</a>
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

let categoriasUnicas = new Set();
let section = document.querySelector(".separador");
let cuerpo = document.querySelector(".cuerpo");
let modal = document.getElementById("modal");
let modalTitle = modal.querySelector(".modal-title");
let modalDescription = modal.querySelector(".modal-description");
let modalImage = modal.querySelector(".modal-image");
let span = modal.querySelector(".close");
let downloadButton = modal.querySelector("#download");

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

componentes.forEach((dato, index) => {
    let div = document.createElement("div");
    div.classList.add("componente", `componente-${index + 1}`);
    div.dataset.categoria = dato.categoria;
    div.addEventListener("click", () => openModal(dato));
    cuerpo.appendChild(div);
});

function openModal(dato) {
    modalTitle.innerText = dato.nombre;
    modalDescription.innerText = dato.descripcion;
    modalImage.src = dato.img;
    modal.style.display = "block";

    downloadButton.onclick = () => {
        downloadModalContent();
    };
}

function closeModal() {
    modal.style.display = "none";
}

function downloadModalContent() {
    html2canvas(modal.querySelector('.modal-content'), {
        useCORS: true,
        allowTaint: true 
    }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'modal-content.png';
        link.click();
    });
}

span.onclick = closeModal;

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Event listener para mostrar/ocultar componentes por categoría
section.addEventListener("change", (event) => {
    if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
        let componentes = document.querySelectorAll(".componente");

        let categoriasSeleccionadas = Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
            .map(input => input.id.replace('category-', ''));

        componentes.forEach((componente) => {
            componente.style.display = "none";
            componente.classList.remove("pintado");
        });

        componentes.forEach((componente) => {
            if (categoriasSeleccionadas.includes(componente.dataset.categoria)) {
                componente.style.display = "block";
                componente.classList.add("pintado");
            }
        });

        if (categoriasSeleccionadas.length === 0) {
            componentes.forEach((componente) => {
                componente.style.display = "block";
                componente.classList.remove("pintado");
            });
        }
    }
});

