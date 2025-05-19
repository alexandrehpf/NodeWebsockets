import { atualizaDocumento, encontrarDocumento, obterDocumentos, adicionarDocumento, excluirDocumento } from "./documentosDb.js";
import io from "./servidor.js";

io.on('connection', (socket) => {

    socket.on('obter_documentos', async (devolverDocumentos) => {
        const documentos = await obterDocumentos();
        devolverDocumentos(documentos);
    }
    );

    socket.on('adicionar_documento',  async (nome) => {

        const documentoExiste = (await encontrarDocumento(nome)) !== null;

        if (documentoExiste) {
            socket.emit("documento_existente", nome);
        } else{
            const resultado = await adicionarDocumento(nome)
            if (resultado.acknowledged) {
                io.emit('adicionar_documento_interface', nome);
            }
        }

    });

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

    socket.on('excluir_documento', async (nome) => {
        const resultado = await excluirDocumento(nome);

        if (resultado.deletedCount) {
            io.emit('excluir_documento_sucesso', nome);
        }
    });
});
