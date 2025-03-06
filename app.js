//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos=[];

function adicionarAmigo(){

    let inputAmigo =document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value;
    console.log(nomeAmigo);
    if(!nomeAmigo){
        alert("Digite o nome do amigo");
        return;
    }
    //verifica se o nome do amigo ja existe na lista

    amigos.push(nomeAmigo);
    console.log(amigos);
    inputAmigo.value="";
    inputAmigo.focus();
    atualizarlista();
}

function atualizarlista(){
    let listaAmigos=document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";
    for( let i = 0; i< amigos.length; i++){
        let item = document.createElement('li');
        item.textContent=amigos[i];
        listaAmigos.appendChild(item);

    }


}