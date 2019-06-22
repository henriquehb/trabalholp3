var dados = [];
var objeto = {};

function adiciona() {
    var nome = document.querySelector("#nome");
    var sobrenome = document.querySelector("#sobrenome");
    var idade = document.querySelector("#idade");
    objeto["nome"] = nome.value;
    objeto["sobrenome"] = sobrenome.value;
    objeto["idade"] = idade.value;
    dados.push(objeto);
    montaTabela();
}

function montaTabela() {
    event.preventDefault();

    var form = document.querySelector(".formulario");

    dados["nome"] = form.nome.value;
    dados["sobrenome"] = form.sobrenome.value;
    dados["idade"] = form.idade.value;

    var formularioTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var sobrenomeTd = document.createElement("td");
    var idadeTd = document.createElement("td");

    nomeTd.textContent = dados["nome"];
    sobrenomeTd.textContent = dados["sobrenome"];
    idadeTd.textContent = dados["idade"];

    formularioTr.appendChild(nomeTd);
    formularioTr.appendChild(sobrenomeTd);
    formularioTr.appendChild(idadeTd);

    document.getElementById('registro').innerHTML = ("Quantidade de registros = " + dados.length);

    var tabela = document.querySelector("#tabela-de-dados");

    tabela.appendChild(formularioTr);

}