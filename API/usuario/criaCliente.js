import { conectaApi } from "../conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function cadastrarCliente() {
    // preventDefault();
    const nome = document.querySelector("[data-nome]").value;
    const nascimento = document.querySelector("[data-nascimento]").value;
    const cpf = document.querySelector("[data-cpf]").value;
    const contato = document.querySelector("[data-contato]").value;
    const cep = document.querySelector("[data-cep]").value;
    const estado = document.querySelector("[data-estado]").value;
    const cidade = document.querySelector("[data-cidade]").value;
    const endereco = document.querySelector("[data-endereco]").value;
    const bairro = document.querySelector("[data-bairro]").value;
    const numero = document.querySelector("[data-numero]").value;
    const complemento = document.querySelector("[data-complemento]").value;
    const email = document.querySelector("[data-email]").value;
    const senha = document.querySelector("[data-senha]").value;
    
    try{    
        await conectaApi.criaCliente(nome, nascimento, cpf, contato, cep, estado, 
            cidade, endereco, bairro, numero, complemento, email, senha);

            location.href="../../index.html"
        }catch(e){
        alert(e);       
    }
}

formulario.addEventListener("submit", evento => cadastrarCliente(evento));