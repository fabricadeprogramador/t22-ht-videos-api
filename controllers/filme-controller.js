import FilmeModel from '../models/filme-model';
class FilmeController {
  salvar( filme ){
    return new FilmeModel(filme).save();
  }
  buscarTodos(){
    return FilmeModel.find();
  }
}

export default new FilmeController();