import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://alexandrehpf:123@alurawebsocket.7ssufvz.mongodb.net/?retryWrites=true&w=majority&appName=AluraWebSocket");

let documentosColecao;

try {
    await cliente.connect();
    
    const db = cliente.db("alura-websockets");
    documentosColecao = db.collection("documentos");

    console.log("Conectado ao banco de dados com sucesso");

} catch (error) {
    console.log("Erro ao conectar no banco de dados", error);
}

export { documentosColecao }