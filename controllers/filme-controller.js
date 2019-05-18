import FilmeModel from '../models/filme-model';
class FilmeController {
  salvar(filme){
    return new FilmeModel(filme).save();
  }
  buscarTodos(){
    return FilmeModel.find();
  }
  editarFilme(filme){
    return FilmeModel.updateOne({ _id:filme._id  }, filme );
  }
  deletarFilme(id){
    return FilmeModel.deleteOne({ _id:id  } );
  }
  buscarPorTitulo(){
    return FilmeModel.aggregate().project({
      _id:1,
      titulo:1
    }).exec();
  }

}

export default new FilmeController();