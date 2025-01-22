let amigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo == '') {
        alert('Por favor, insira um nome.');
        return 1; 
    }
    else if (amigos.includes(amigo)){
        alert('Por favor, insira um nome diferente.');
        return 2;
    }
    amigos.push(amigo);
    console.log(amigos);
    let elementoListaAmigos = document.createElement('li');
    elementoListaAmigos.textContent = amigo;
    listaAmigos.appendChild(elementoListaAmigos);
    limparCampo();
    return 0;
}

function limparCampo() {
    let amigo = document.querySelector('input')
    let ganhador = document.getElementById('resultado');
    ganhador.innerHTML = '';
    amigo.value = '';
}

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * (amigos.length))
}

function sortearAmigo() {
    if(amigos.length != 0) {
        let indiceGanhador = gerarNumeroAleatorio();
        let ganhador = document.getElementById('resultado'); 
        ganhador.innerHTML = amigos[indiceGanhador];
        limparListaAmigos();
        return 0;
    }
    alert('não há amigos para sortear');
    return 1;
}

function limparListaAmigos() {
    amigos = [];
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = '';
}