import mongoose from "mongoose";

const eventoSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo_evento: {type: String},
        local_nome: {type: String},
        tipo_evento: {type: String},
        descricao: {type: String},
        cep: {type: String},
        endereco: {type: String},
        estado: {type: String},
        cidade: {type: String},
        bairro: {type: String},
        numero: {type: Number},
        data_evento: {type: Date},
        hora_abertura: {type: String},
        local_coberto: {type: String},
        estacionamento: {type: String},
        faixa_etaria: {type: Number},
        localizacao: {type: String}
    }
)

const eventos = mongoose.model('eventos', eventoSchema);

export default eventos;


//{"titulo_evento":"Mega funk Fluxouu","local_nome":"Nova Blumenau","descricao":"lorennnnnnnnnn","artistas":"Tiago sc e Gabriel Trindade","cep":"89051615","estado":"SC","cidade":"Blumenau","endereco":"tereuteuteu", "bairro":"Itoupava","numero":"1265","complemento":"Salão","data_evento":"2023-06-30", "hora_abertura": "19:00", "local_coberto": true, "estacionamento":true,"faixa_etaria": 18,"localizacao":".........."}