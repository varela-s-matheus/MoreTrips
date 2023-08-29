import ingressos from "../modelos/Ingresso.js";

class IngressoController {

    static listarIngressoPorId = (req, res) => {
        const id = req.params.id;
    
        ingressos.findById(id)
        .populate('id_evento')
        .exec((err, autores) => {
          if(err) {
            res.status(400).send({message: `${err.message} - Usuário não localizado.`})
          } else {
            res.status(200).send(autores);
          }
        })
    }
    
    static listarIngressos = (req, res) => {
      ingressos.find((err, eventos) => {
        res.status(200).json(eventos)
    })
  }

    static cadastrarIngresso = (req, res) => {
        let ingresso = new ingressos(req.body);
    
        ingresso.save((err) => {
          if(err) {
            res.status(500).send({message: `${err.message} - Falha ao cadastrar ingresso.`})
          } else {
            res.status(201).send(ingresso.toJSON())
          }
        })
    }

    static atualizarIngresso = (req, res) => {
        const id = req.params.id;
    
        ingressos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
          if(!err) {
            res.status(200).send({message: 'Usuário atualizado com sucesso'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
    }

    static excluirIngresso = (req, res) =>{
        const id = req.params.id;
    
        ingressos.findByIdAndDelete(id, (err) => {
          if(!err){
            res.status(200).send({message: 'Excluido com sucesso'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
    
    }

}


export default IngressoController;
