import mongoose from "mongoose";

const ingressoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome_tipo: {type: String, required: true},
        valor: {type: Number, required: true},
        quantidade: {type: Number, required: true},
        taxa: {type: Number, required: true},
        id_evento: {type: mongoose.Schema.Types.ObjectId, ref: 'eventos', required: true}
    }
)

const ingressos = mongoose.model('ingressos', ingressoSchema);

export default ingressos;


// {"nome_tipo":"Mega funk Fluxouu","valor":"Nova Blumenau","quantidade":"lorennnnnnnnnn","taxa":"Tiago sc e Gabriel Trindade","id_evento":"..........."}