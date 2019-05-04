import express from 'express';
import bodyParser  from 'body-parser';
import routes from './routes.js';
import database from './database/database.js';
const server = express();

const expressConfig = () => {
  server.use(bodyParser.json());
  server.use('/', routes);

  server.listen(3000, () => {
    console.log('HT Videos API inicializada ...');
  });
}

database.connect()
  .then(expressConfig())
  .catch(error => {
    console.log(error);
  });