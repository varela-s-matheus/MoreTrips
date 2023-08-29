function logar() {
    
    let email = document.getElementById('floatingInput').value;
    let senha = document.getElementById('floatingPassword').value;
    let usuarioAutenticado = false;
    
    if (email == "admin@admin.com" && senha == 'Admin.321') {

        usuarioAutenticado = true;
        location.href = "../../src/cadastro-evento.html";
        alert("Seja bem-vindo ADM!");

    } else if (email == "user@user.com" && senha == "123456") {

        usuarioAutenticado = true;
        location.href = "../../index.html";
        alert("Seja bem-vindo!")

    } else {
        alert('Usuário ou senha incorretos!');
    }
}