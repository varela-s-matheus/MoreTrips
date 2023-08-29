// Funcoes sobre listagem e criacao de eventos

async function listaEvento() {
    const conexao = await fetch("http://localhost:3000/evento", () => { mode: 'no-cors'} );
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaEvento(nomeEvento, dataEvento, hora, local, classificacao, tipoEvento, cep, estado, cidade, endereco, bairro, numero, localCoberto, estacionamento, descricao) {
    const conexao = await fetch("http://localhost:3000/evento", {
        method: "post",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            titulo_evento: `${nomeEvento}`,
            tipo_evento: `${tipoEvento}`,
            local_nome: `${local}`,
            descricao: `${descricao}`,
            cep: `${cep}`,
            estado: `${estado}`,
            endereco: `${endereco}`,
            cidade: `${cidade}`,
            bairro: `${bairro}`,
            numero: `${numero}`,
            data_evento: `${dataEvento}`,
            hora_abertura: `${hora}`,
            local_coberto: `${localCoberto}`,
            estacionamento: `${estacionamento}`,
            faixa_etaria: `${classificacao}`,
            localizacao: `${local}`
        })
    });

    if(!conexao.ok){
        throw new Error("Não foi possível criar o evento, tente mais tarde!");
    }

    return true;
}

async function buscaEvento(id) {
    const conexao = await fetch(`http://localhost:3000/evento/649f7372516eb5ec9def92bd`, ()=>{ mode: 'no-cors'}).then((res) => {res.json()}).catch((er) => {console.log(er)});

    const conexaoConvertida = conexao.then((res) => console.log(res));

    return conexao;
}

//  Funcoes referente ao cadastro de usuario na plataforma 

async function criaCliente(nome, nascimento, cpf, contato, cep, estado, 
    cidade, endereco, bairro, numero, email, senha) {
    
    const conexao = await fetch("http://localhost:3000/usuario", {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome_usuario:`${nome}`,
            data_nascimento:`${nascimento}`,
            cpf:`${cpf}`,
            telefone:`${contato}`,
            cep:`${cep}`,
            estado:`${estado}`,
            cidade:`${cidade}`,
            endereco:`${endereco}`,
            bairro:`${bairro}`,
            numero: `${numero}`,
            // complemento:`${complemento}`,
            email:`${email}`,
            senha:`${senha}`
        })
    });

    if(!conexao.ok){
        throw new Error("Não foi possível realizar cadastro, tente novamnete mais tarde!");
    }

    return true;
}

async function listarIngressos() {
    const conexao = await fetch("http://localhost:3000/ingresso", () => { mode: 'no-cors'} );
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function listarUsuarios() {
    const conexao = await fetch("http://localhost:3000/usuario", () => { mode: 'no-cors'} );
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

// Funções referente evento detalhados


export const conectaApi = {
    listaEvento,
    criaEvento,
    buscaEvento,
    criaCliente,
    listarIngressos,
    listarUsuarios
}