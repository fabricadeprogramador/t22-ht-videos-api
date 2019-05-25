import mongoose from 'mongoose';

const CategoriaSchema = new mongoose.Schema({
  nome: String,
  filmes: Array
});

export default mongoose.model('Categoria', CategoriaSchema);