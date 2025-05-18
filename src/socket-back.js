import { atualizaDocumento, encontrarDocumento } from "./documentosDb.js";
import io from "./servidor.js";

io.on('connection', (socket) => {
    console.log('Um cliente se conectou ID:', socket.id);

    socket.on('selecionar_documento', async (nomeDocuento, devolverTexto) => {
        socket.join(nomeDocuento);
        const documento = await encontrarDocumento(nomeDocuento);

        if (documento) {
            devolverTexto(documento.texto);
        }
    });

    socket.on('texto_editor', async ({ texto, nomeDocuento }) => {
        const atualizacao = await atualizaDocumento(nomeDocuento, texto);

        if(atualizacao.modifiedCount) {
            socket.to(nomeDocuento).emit('texto_editor_clientes', texto);
        }
    });
});
