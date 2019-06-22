var adicionaVetor = [];

function adiciona() {
var nome = document.getElementById('nome').value;
adicionaVetor.push(nome);
montarUl();
}

function montarUl() {
var ul = document.getElementById('lista_nomes');
ul.innerHTML = '';
for (var i = 0; i < adicionaVetor.length; i++) {
var li = document.createElement("li");
li.innerHTML = adicionaVetor[i];
ul.appendChild(li);
}
}