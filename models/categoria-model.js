import mongoose from 'mongoose';

const CategoriaSchema = new mongoose.Schema({
  nome: String,
  filmes: [{
    _id: String,
    titulo: String,
    chave: String
  }]
});

export default mongoose.model('Categoria', CategoriaSchema);