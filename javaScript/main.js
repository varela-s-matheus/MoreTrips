
// Função controle quantidade de ingresso--------------------------------------------------------

const controle = document.querySelectorAll("[data-controle]");

controle.forEach((element) => {
    element.addEventListener("click", (evento) => {
        evento.preventDefault();
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
});

function manipulaDados(operacao, controle) {
    const tipoIngresso = controle.querySelector("[data-contador]");

    if (operacao === "-" && tipoIngresso.value != 0) {
        tipoIngresso.value = parseInt(tipoIngresso.value) - 1;
    } else if(operacao === "+"){
        tipoIngresso.value = parseInt(tipoIngresso.value) + 1;
    }
}


// Alerta senha salva com sucesso---------------------

function senhaSalva() {
    alert("Senha alterada com sucesso");
}

function sucessoCadastro() {
    const ok = alert("Cadastro realizado com sucesso");    
}


// Função para construir o inicio pagina de eventos 

function headerEvento(tipoEvento) {

    let tipo = document.getElementById("tituloEvento");
    tipo.innerHTML = `${tipoEvento}`;
}

if (window.location.href.split("?")) {
    const url = window.location.href.split("?")[0];
    const valor = window.location.href.split("?")[1];

    headerEvento(valor);

}