import { conectaApi } from "../conectaApi.js";

const evento = document.querySelector("[data-evento-detalhado]");
const ingresso = document.getElementById("ingressos");
let idEvento;

export default function constroiEvento(id, titulo_evento, local_nome, endereco, estado, cidade, bairro, numero, data_evento, local_coberto, faixa_etaria, hora_abertura, estacionamento, descricao){
    
    const monName = new Array ("Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez");
    
    let dataCompleta = new Date(data_evento);
    let dia = dataCompleta.getDay();
    let mes = monName[dataCompleta.getMonth()];
    let ano = dataCompleta.getFullYear();
    let data = `${dia}/${("0" + (dataCompleta.getMonth() + 1)).slice(-2)}/${ano}`;

    const titulo = document.getElementById("titulo_evento")
    const lugar = document.getElementById("lugar_evento")
    
    titulo.innerHTML = `${titulo_evento}`;
    lugar.innerHTML = `${local_nome}`;
    

    const cabecalhoEvento = document.getElementById("teste");
    cabecalhoEvento.innerHTML = `
    <div>
    <div>
        <img class="img__detalhamento__evento" src="../../img/Eventos - Baladas/paisagem2.jpg" alt="">
    
        <div class="evento__detalhamento">
            <span>
                <p>Saida: ${endereco}, ${numero} - ${bairro}</p>
                <p>Data de saida: ${data}</p>
                <p>Quantidade de dias: ${local_coberto}</p>
                
                <div class="classificacao__evento">
                    <p>${faixa_etaria}</p>
                </div>
            </span>

            <span>
                <p>Destino: ${titulo_evento}</p>
                <p>Horário de saida: ${hora_abertura}</p>
                <p>Valor + Taxas: ${estacionamento}</p>

                <a class="obrigatoriedade" target="_blank" href="https://www.google.com.br/maps"><img src="../img/icon/ponteiro-de-mapa.png" alt="">Ver no mapa</a>
            </span>

        </div>
    
    </div>

</div>
<div class="informacoes__adicionais">
    <p>${descricao}</p>
</div>`

ingresso.innerHTML = `
<h3 class="obrigatoriedade">Ingressos selecionados</h3>
<ul>
    <li id="situacaoIngressos">Nenhum ingresso selecionado</li>
</ul>`
modal = document.getElementById("input__ingresso");
return;

}

async function eventoDetalhado(id) {
    try {       
        const eventosDetalhadoApi = await conectaApi.listaEvento();
        let listaFiltrada = eventosDetalhadoApi.filter(v => v._id.includes(`${id}`));

        listaFiltrada.forEach(element => {
            constroiEvento(
                element._id,
                element.titulo_evento, 
                element.local_nome, 
                element.endereco, 
                element.estado, 
                element.cidade, 
                element.bairro, 
                element.numero, 
                element.data_evento, 
                element.local_coberto, 
                element.faixa_etaria, 
                element.hora_abertura, 
                element.estacionamento, 
                element.descricao
            );
        });

    } catch (error) {
        evento.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de Eventos</h2> ${error}`;
    }
}


function constroiCompraIngresso(id, tipoIngresso, valorIngresso, quantidade, taxaIngresso, id_evento) {
    const ingresso = document.getElementById("tipoIngressos")
    
    ingresso.innerHTML = `
    <div class="form-floating mb-3 form__ingresso">
        <span class="ingresso__ticket">
            <img src="../img/icon/ticket.png" alt="">
            <span>
                <h3>${tipoIngresso}</h3>
                <p>Ingresso: R$ ${valorIngresso}</p>
                <p>Taxa de conveniência: R$ ${taxaIngresso}</p>
            </span>
        </span>

        <span class="quantidade__ingressos">
            <h5>R$ ${valorIngresso + taxaIngresso}</h5>
            
            <span class="quantidade__ingressos">
                <button class="circulo" data-controle="-">-</button>
                <input type="text" class="controle__contador" value="0" data-contador disabled>
                <button class="circulo" data-controle="+">+</button>
            </span>
        </span>

    </div>`
}


async function buscaIngressos() {
    try {      
        console.log(idEvento);
        const ingressosDetalhadoApi = await conectaApi.listarIngressos();
        let listaFiltrada = ingressosDetalhadoApi.filter(v => v.id_evento.includes(`${idEvento}`));

        listaFiltrada.forEach(element => () => {
            constroiCompraIngresso(
                element._id,
                element.nome_tipo, 
                element.valor, 
                element.quantidade, 
                element.taxa, 
                element.id_evento
            );
        });

    } catch (error) {
        evento.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de Ingressos</h2> ${error}`;
    }
}

const modal = document.getElementById("input__ingresso");
modal.addEventListener("click", buscaIngressos())


if (window.location.href.split("?")) {
    const url = window.location.href.split("?")[0];
    idEvento = window.location.href.split("?")[1];
    buscaIngressos(idEvento);
    eventoDetalhado(idEvento);
}

function selecionaIngresso(){
    let ingresso = ["Inteira", "Estudante", "Idoso / Demais Benef."]
    let quantidade = document.querySelectorAll("[data-contador]").values
    let situacaoCompra = document.getElementById("situacaoIngressos");


    situacaoCompra.innerHTML = `${quantidade[0]}`




}



// async function listaUsuarios(){
//     try{
//         const listaUsuarioApi = await conectaApi.listarUsuarios();
//         let listaFiltrada = listaUsuarioApi .filter(v => v.email.includes(`${email}`));
//         listaFiltrada.forEach(element => {logar(element.email, element.senha)})
//     }catch (error){
//         alert(`Não foi possível carregar a lista de usuários</h2> ${error}`);
//     }
// }