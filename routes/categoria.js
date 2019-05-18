import express from 'express';
import categoriaController from '../controllers/categoria-controller';
const router = express.Router();

router.get('', (req, resp) => {
  categoriaController.buscarTodos().then(categorias => {
    resp.send(categorias);
  }).catch(erro => {
    resp.statusCode = 500;
    resp.send(erro);
  })
});

router.post('', (req, resp) => {
  categoriaController.salvar(req.body).then(() => {
    resp.send('Salvo com Sucesso');
  }).catch( erro => {
    resp.statusCode = 500;
    resp.send(erro);
  });
});

router.put('',(req, resp) => {
  categoriaController.editar(req.body).then(() => {
    resp.send('Editado com Sucesso');
  }).catch( erro => {
    resp.statusCode = 500;
    resp.send(erro);
  });
});

router.delete('/:id', (req, resp) => {
  categoriaController.excluir(req.params.id).then(() => {
    resp.send('deletado com Sucesso');
  }).catch( erro => {
    resp.statusCode = 500;
    resp.send(erro);
  });
});

router.get('/nomes',(req, resp) => {
  categoriaController.buscarPorCategoria().then(categorias => {
    resp.send(categorias);
  }).catch( erro => {
    resp.statusCode = 500;
    resp.send(erro);
  });
});

export default router;