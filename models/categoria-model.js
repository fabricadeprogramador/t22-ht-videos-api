import mongoose from 'mongoose';

const CategoriaSchema = new mongoose.Schema({
  nome: String,
  videos: Array
});

export default mongoose.model('Categoria', CategoriaSchema);