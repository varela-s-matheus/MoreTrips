import { conectaApi } from "../conectaApi.js";

const formulario = document.querySelector("[data-formulario]");
let EventoTipo = document.querySelector("[data-tipoEvento]");
let faixaEtariaGeral = document.querySelector("[data-classificacao]");

async function criaEvento(evento){
    
    evento.preventDefault();
    
    let tipoEvento = "Balada";
    let classificacao = "Livre";
    classificacao = faixaEtariaGeral;
    tipoEvento = EventoTipo;
    const nomeEvento = document.querySelector("[data-nome]").value;
    const dataEvento = document.querySelector("[data-data]").value;
    const hora = document.querySelector("[data-hora]").value;
    const local = document.querySelector("[data-local]").value;
    const cep = document.querySelector("[data-cep]").value;
    const estado = document.querySelector("[data-estado]").value;
    const cidade = document.querySelector("[data-cidade]").value;
    const endereco = document.querySelector("[data-endereco]").value;
    const bairro = document.querySelector("[data-bairro]").value;
    const numero = document.querySelector("[data-numero]").value;
    const localCoberto = document.querySelector('input[name="coberto"]:checked').value;
    const estacionamento = document.querySelector('input[name="estacionamento"]:checked').value;
    const descricao = document.querySelector("[data-descricao]").value;



    try{    
        await conectaApi.criaEvento(nomeEvento, dataEvento, hora, local, classificacao, tipoEvento, cep, estado, cidade, endereco, bairro, numero, localCoberto, estacionamento, descricao);

        
        location.href = "../../index.html";
    }catch(e){
        alert(e);       
    }

}

EventoTipo.addEventListener("focusout", () => {
    EventoTipo = EventoTipo.value;
})

faixaEtariaGeral.addEventListener("change", () => {
    faixaEtariaGeral = faixaEtariaGeral.value;
})

formulario.addEventListener("submit", evento => criaEvento(evento));



// Funções converter imagem -------------------------

// function converterImagem(){

//     var receberArquivo = document.querySelector("[data-imagem]").files;
//     console.log(receberArquivo);
    
//     if(receberArquivo.length > 0){
//         var carregarImagem = receberArquivo[0];
//         var lerArquivo = new FileReader();
//         lerArquivo.readAsDataURL(carregarImagem);

//         lerArquivo.onload = function(arquivoCarregado){
//             var imagemBase64 = arquivoCarregado.target.result;
//             imagemConvertida = String(imagemBase64);
//             console.log(imagemConvertida);
//             return String(imagemConvertida);
//         }

//     }
// }
// const imagemConvertida = document.querySelector("[data-imagem]");
// imagemConvertida.addEventListener("onchange", evento => converterImagem(evento));