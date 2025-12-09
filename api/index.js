import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../static')));

// Importar as rotas da API
import ServerAPI from '../server/server-api.js';
const serverAPI = new ServerAPI(app);

// Servir o index.html para todas as rotas não encontradas
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../static/index.html'));
});

export default app;
