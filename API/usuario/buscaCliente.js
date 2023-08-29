// Importss
import { conectaApi } from "../conectaApi.js";

// const buttonPesquisar = document.querySelector("[data-buttonPesquisa]")

// async function buscaCliente(evento){
//     evento.preventDefault;

//     const termoBusca = document.querySelector("[data-busca]").value;
//     const busca = await conectaApi.buscaEvento(termoBusca);

//     const lista = document.querySelector("[data-lista]");
    
//     while(lista.firstChild){
//         lista.removeChild(lista.firstChild);
//     }

//     busca.forEach(element => lista.appendChild(
//         constroiCard(element.titulo, element.descricao, element.url, element.imagem))
//     );
    
//     if(busca.length == 0) {
//         lista.innerHTML = `<h2 class="mensagem__titulo">Não existem EventobuscaEvento com esse termo!</h2>`;
//     }

// }

// buttonPesquisar.addEventListener("click", evento => buscaEvento(evento))

// async function listaUsuarios(){
//     try{
//         const lista_usuariosApi = await conectaApi.listarUsuarios();
//         return lista_usuariosApi;
//     }catch (error){
//         lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de usuários</h2> ${error}`;
//     }
// }
