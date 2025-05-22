import 'dotenv/config';
import { MongoClient } from "mongodb";

const usuario = process.env.MONGO_USER;
const senha = process.env.MONGO_PASS;
const cluster = process.env.MONGO_CLUSTER;
const dbName = process.env.MONGO_DB;
const appName = process.env.MONGO_APPNAME;

const uri = `mongodb+srv://${usuario}:${senha}@${cluster}/?retryWrites=true&w=majority&appName=${appName}`;

const cliente = new MongoClient(uri);

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