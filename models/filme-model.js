import mongoose from 'mongoose';

const FilmeSchema = new mongoose.Schema({
  titulo: String,
  chave: String
});

export default mongoose.model('Filme', FilmeSchema);