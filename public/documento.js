import { emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const paramentros = new URLSearchParams(window.location.search);
const nomeDocuento = paramentros.get("nome");

const textoEditor = document.getElementById("editor-texto");
const tituloDocumento = document.getElementById("titulo-documento");

tituloDocumento.textContent = nomeDocuento || "Documento sem nome";

selecionarDocumento(nomeDocuento);

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor({
        texto: textoEditor.value, 
        nomeDocuento,
    });
});

function atualizarTextoEditor(texto) {
    textoEditor.value = texto;
}

export { atualizarTextoEditor };