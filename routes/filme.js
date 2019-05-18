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

router.put('',(req, resp) => {
  filmeController.editarFilme(req.body).then(() => {
    resp.send('Editado com Sucesso');
  }).catch( erro => {
    resp.statusCode = 500;
    resp.send(erro);
  });
});

router.delete('/:id',(req,resp) => {
  filmeController.deletarFilme(req.params.id).then(() => {
    resp.send('deletado com Sucesso');
  }).catch( erro => {
    resp.statusCode = 500;
    resp.send(erro);
  });
});

router.get('/titulo',(req,resp)=>{
  filmeController.buscarPorTitulo().then(filmes => {
   resp.send(filmes);
 }).catch( erro => {
   resp.statusCode = 500;
   resp.send(erro);
 });
});
export default router;