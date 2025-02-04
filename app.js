//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomes = [];
function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    if (nome == "") {
        alert("Digite um nome válido!");
    }
    else
    {
    listaDeNomes.push(nome);
    console.log("", listaDeNomes);
    }
    limparCampo();
    atualizarLista();
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function atualizarLista(){
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";
    listaDeNomes.forEach(function(nome) {
        let li = document.createElement("li"); // Cria um novo elemento <li>
        li.textContent = nome; // Define o texto do <li> como o nome
        listaElement.appendChild(li); // Adiciona o <li> à <ul>
    });
}

function sortearAmigo(){
    if(listaDeNomes.length < 1) alert("A lista está vazia!");
    else{
       
        indice = Math.floor(Math.random() * listaDeNomes.length);
        let listaElement = document.getElementById("listaAmigos");
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
        listaElement.innerHTML = "";
        let li = document.createElement("li"); // Cria um novo elemento <li>
        li.textContent = "O nome sorteado é: " + listaDeNomes[indice]; // Define o texto do <li> como o nome
        resultado.appendChild(li);
    }
}
