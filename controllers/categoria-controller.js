import CategoriaModel from '../models/categoria-model';

class CategoriaController {
  buscarTodos(){
    return CategoriaModel.find();
  }
  salvar(categoria) {
    return new CategoriaModel(categoria).save();
  }

  editar(categoria) {
    return CategoriaModel.updateOne({ _id:categoria._id  }, categoria);
  }
  
  excluir(_id) {
    return CategoriaModel.deleteOne({ _id  });
  }
  
  buscarPorCategoria(){
    return CategoriaModel.aggregate().project({
      _id: 1,
      nome: 1
    }).exec();
  }
}

export default new CategoriaController();