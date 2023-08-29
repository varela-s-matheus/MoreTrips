import usuarios from "../modelos/Usuario.js";

class UsuarioController {

  static listarUsuarios = (req, res) => {
    usuarios.find((err, eventos) => {
      res.status(200).json(eventos)
  })
}

  static listarUsuarioPorId = (req, res) => {
    const id = req.params.id;

    usuarios.findById(id, (err, autores) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Usuário não localizado.`})
      } else {
        res.status(200).send(autores);
      }
    })
  }

  static cadastrarUsuario = (req, res) => {
    let usuario = new usuarios(req.body);

    usuario.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - Falha ao cadastrar usuário.`})
      } else {
        res.status(201).send(usuario.toJSON())
      }
    })
  }

  static atualizarUsuario = (req, res) => {
    const id = req.params.id;

    usuarios.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Usuário atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirUsuario = (req, res) =>{
    const id = req.params.id;

    usuarios.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Excluido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })

  }

}

export default UsuarioController;
