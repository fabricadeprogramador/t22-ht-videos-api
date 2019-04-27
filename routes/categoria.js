import express from 'express';
import categoriaController from '../controllers/categoria-controller';
const router = express.Router();

router.get('', (req, resp) => {
  resp.send( categoriaController.getCategorias() );
});

router.get('/nomes',(req, resp) => {
  resp.send( categoriaController.getCategoriasNome() );
});


export default router;