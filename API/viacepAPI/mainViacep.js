async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEp = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvetida = await consultaCEp.json();
        if(consultaCEPConvetida.erro){
            throw Error('CEP não existe!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');
        
        cidade.value = consultaCEPConvetida.localidade;
        logradouro.value = consultaCEPConvetida.logradouro;
        estado.value = consultaCEPConvetida.uf;
        bairro.value = consultaCEPConvetida.bairro;

        console.log(consultaCEPConvetida);
        return consultaCEPConvetida;
    }catch(erro){
        mensagemErro.innerHTML = `<p class="formulario__cep">CEP inválido. Tente Novamente!</p>`;
        console.log(erro)
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value) )