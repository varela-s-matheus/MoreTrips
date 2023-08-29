import mongoose from "mongoose";

const eventoSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo_evento: {type: String, required: true},
        local_nome: {type: String, required: true},
        tipo_evento: {type: String, required: true},
        descricao: {type: String, required: true},
        cep: {type: String, required: true},
        endereco: {type: String, required: true},
        estado: {type: String, required: true},
        cidade: {type: String, required: true},
        bairro: {type: String, required: true},
        numero: {type: Number, required: true},
        data_evento: {type: Date, required: true},
        hora_abertura: {type: String, required: true},
        local_coberto: {type: String, required: true},
        estacionamento: {type: String, required: true},
        faixa_etaria: {type: Number, required: true},
        localizacao: {type: String, required: true}
    }
)

const eventos = mongoose.model('eventos', eventoSchema);

export default eventos;


//{"titulo_evento":"Mega funk Fluxouu","local_nome":"Nova Blumenau","descricao":"lorennnnnnnnnn","artistas":"Tiago sc e Gabriel Trindade","cep":"89051615","estado":"SC","cidade":"Blumenau","endereco":"tereuteuteu", "bairro":"Itoupava","numero":"1265","complemento":"Salão","data_evento":"2023-06-30", "hora_abertura": "19:00", "local_coberto": true, "estacionamento":true,"faixa_etaria": 18,"localizacao":".........."}