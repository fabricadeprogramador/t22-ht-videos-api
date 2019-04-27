import express from 'express';
import categoria from './routes/categoria';
const router = express.Router();

router.use('/categoria', categoria);
router.get('/', (req, res) => res.send('Bem Vindo a HT Videos API'));

export default router;