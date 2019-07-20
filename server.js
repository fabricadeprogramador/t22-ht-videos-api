import express from 'express';
import bodyParser  from 'body-parser';
import routes from './routes.js';
import database from './database/database.js';
import cors from 'cors';
const endereco = '0.0.0.0';
const porta = process.env.PORT || 3000;
const server = express();

const expressConfig = () => {
  server.use(cors())
  server.use(bodyParser.json());
  server.use('/', routes);

  server.listen(porta, endereco , () => {
    console.log('HT Videos API inicializada ...');
  });
}

database.connect()
  .then(expressConfig())
  .catch(error => {
    console.log(error);
    console.log('Nao foi possivel se conectar ao banco de dados');
  });