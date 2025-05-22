# 📄 NodeWebsockets – AluraDocs Clone

Projeto desenvolvido com **Node.js**, **Socket.IO** e **MongoDB Atlas** para criar uma aplicação colaborativa de edição de documentos em tempo real.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Bootstrap 5](https://getbootstrap.com/)
- Vanilla JavaScript (frontend)

## 🧠 Conceitos Abordados

- Comunicação **bidirecional em tempo real** com **WebSockets**
- Arquitetura cliente/servidor com **Socket.IO**
- Integração com banco de dados **MongoDB em nuvem (Atlas)**
- Manipulação de DOM dinâmica
- Eventos customizados via socket

## 📁 Estrutura do Projeto

```
nodewebsockets/
├── public/
│   ├── index.html
│   ├── documento.html
│   ├── index.js
│   ├── documento.js
│   ├── socket-front-index.js
│   └── socket-front-documento.js
├── src/
│   ├── dbConnect.js
│   ├── documentosDb.js
│   ├── servidor.js
│   └── socket-back.js
├── package.json
└── README.md
```

## ⚙️ Instalação e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/alexandrehpf/NodeWebsockets.git
cd NodeWebsockets
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Executar o projeto

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

## 🧩 Funcionalidades

- ✅ Listar documentos existentes
- ✅ Criar novo documento
- ✅ Editar documento com atualização em tempo real
- ✅ Excluir documento
- ✅ Notificações entre usuários conectados via WebSocket

## 🔐 Conexão com MongoDB Atlas

O arquivo `src/dbConnect.js` realiza a conexão com o MongoDB Atlas. Substitua as credenciais da URI pelo seu próprio cluster se necessário:

```js
const cliente = new MongoClient("mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net");
```

## 🧪 Testes

Ainda não há testes automatizados definidos. (Veja o script `"test"` no `package.json`).

## 👤 Autor

Desenvolvido por **Alexandre Ferraz**  
[GitHub](https://github.com/alexandrehpf)

## 📝 Licença

Este projeto está licenciado sob a licença ISC. Consulte o arquivo `LICENSE` para mais detalhes.
