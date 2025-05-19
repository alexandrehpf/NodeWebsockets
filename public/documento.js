import { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento } from "./socket-front-documento.js";

const paramentros = new URLSearchParams(window.location.search);
const nomeDocuento = paramentros.get("nome");

const textoEditor = document.getElementById("editor-texto");
const tituloDocumento = document.getElementById("titulo-documento");
const botaoExcluir = document.getElementById("excluir-documento");

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

botaoExcluir.addEventListener("click", () => {
    emitirExcluirDocumento(nomeDocuento);
    // const confirmar = confirm("Você tem certeza que deseja excluir o documento?");
    // if (confirmar) {
    //     window.location.href = "index.html";
    // }
});

function alertarERedirecionar(nome) {
    if(nome === nomeDocuento){
        alert(`O documento ${nome} foi excluído com sucesso!`);
        window.location.href = "/";
    }
}


export { atualizarTextoEditor, alertarERedirecionar };