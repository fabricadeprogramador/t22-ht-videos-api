import usuarios from '../database/usuarios';
class UsuarioController {
  exibirUsuarios() {
    return usuarios;
  }
}

export default new UsuarioController();