import express from 'express';
import filmeController from '../controllers/filme-controller';
const router = express.Router();

router.post('', (req, resp) => {
  filmeController.salvar(req.body).then(() => {
    resp.send('Salvo com Sucesso');
  }).catch( erro => {
    resp.statusCode = 500;
    resp.send(erro);
  });
});

router.get('', (req, resp) => {
  filmeController.buscarTodos().then( filmes => {
    resp.send(filmes);
  }).catch(erro => {
    resp.statusCode = 500;
    resp.send(erro);
  })
});

export default router;