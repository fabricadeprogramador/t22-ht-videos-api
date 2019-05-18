import express from 'express';
import categoria from './routes/categoria';
import filme from './routes/filme';
import usuario from './routes/usuario';
const router = express.Router();

router.use('/categoria', categoria);
router.use('/filme', filme);
router.use('/usuario', usuario);
router.get('/', (req, res) => res.send('Bem Vindo a HT Videos API'));

export default router;