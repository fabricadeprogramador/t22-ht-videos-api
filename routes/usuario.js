import express from 'express';
import usuarioController from '../controllers/usuario-controller';
const router = express.Router();

router.get('', (req, resp) => {
  resp.send(usuarioController.exibirUsuarios());
});

export default router;