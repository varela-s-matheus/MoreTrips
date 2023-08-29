import { conectaApi } from "../conectaApi.js";
import constroiCard from "./mostraEvento.js";  

const Pesquisar = document.querySelector("[data-pesquisa]");
const lista = document.querySelector("[data-eventos]");

async function buscaEvento(termoBusca){
    try{       
        const lista_eventosApi = await conectaApi.listaEvento();
        let listaFiltrada = lista_eventosApi.filter(v => v.titulo_evento.toLowerCase().includes(termoBusca));
        
        while(lista.firstChild){
            lista.removeChild(lista.firstChild);
        }

        listaFiltrada.forEach((element) => {
            lista.appendChild(constroiCard(
                element._id,
                element.data_evento, 
                element.titulo_evento, 
                element.local_nome, 
                element.cidade, 
                element.estado
            )); 
        });

    }catch (error){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de Eventos</h2> ${error}`;
    }
}

Pesquisar.addEventListener("click", evento => buscaEvento(document.getElementById('termoBusca').value.toLowerCase()));
