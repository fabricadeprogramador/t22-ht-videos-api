import express from 'express';
import bodyParser  from 'body-parser';
import routes from './routes.js';
const server = express();

server.use(bodyParser.json());
server.use('/', routes);

server.listen(3000, () => {
  console.log('HT Videos API inicializada ...');
});

