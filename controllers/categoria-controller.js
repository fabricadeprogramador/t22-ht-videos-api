import categorias from '../database/categorias';

class CategoriaController {
  getCategorias(){
    return categorias;
  }
  getCategoriasNome(){
    return 'Fazer a magica acontecer. ;D';
  }
}

export default new CategoriaController();